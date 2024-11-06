import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  return (
    <GestureHandlerRootView>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors.light.background,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#f5f5f0",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  { backgroundColor: focused ? "#c7f376" : "" },
                  styles.tabElement,
                ]}
              >
                <TabBarIcon
                  name={"home"}
                  color={focused ? "#16120f" : color}
                  style={styles.tabIcon}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Cards"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  { backgroundColor: focused ? "#c7f376" : "" },
                  styles.tabElement,
                ]}
              >
                <TabBarIcon
                  name={"credit-card"}
                  color={focused ? "#16120f" : color}
                  style={styles.tabIcon}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Transactions"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  { backgroundColor: focused ? "#c7f376" : "" },
                  styles.tabElement,
                ]}
              >
                <TabBarIcon
                  name={"arrow-switch"}
                  color={focused ? "#16120f" : color}
                  style={styles.tabIcon}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Manage"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  { backgroundColor: focused ? "#c7f376" : "" },
                  styles.tabElement,
                ]}
              >
                <TabBarIcon
                  name={"apps"}
                  color={focused ? "#16120f" : color}
                  style={styles.tabIcon}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  tabElement: {
    borderRadius: 10,
  },
  tabIcon: {
    padding: 8,
  },
});
