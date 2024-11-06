import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Atom</Text>
            <View style={styles.iconContainer}>
              <Octicons name="bell" size={24} color="black" />
              <Image
                source={require("../../assets/images/Default_pfp.png")}
                style={styles.profileImage}
              />
            </View>
          </View>
          <View style={styles.balanceCard}>
            <Text style={{ color: "white", fontSize: 20 }}>Balance</Text>
            <Text style={{ color: "white", fontSize: 40, fontWeight: "500" }}>
              $1,000.00
            </Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
            <TouchableOpacity
              style={[{ backgroundColor: "#e6d6ff" }, styles.actionCard]}
            >
              <Octicons name="plus" size={30} color="black" />
              <Text>Add Money</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{ backgroundColor: "#ffd6ad" }, styles.actionCard]}
            >
              <Octicons name="arrow-switch" size={30} color="black" />
              <Text>Trade</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[{ backgroundColor: "#336dff" }, styles.actionCard]}
            >
              <Octicons name="download" size={30} color="white" />
              <Text style={{ color: "white" }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Transactions</Text>
            <View style={{ gap: 10, marginTop: 10 }}>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#16120f",
                        padding: 15,
                        borderRadius: 10,
                      }}
                    >
                      <Octicons name="arrow-switch" size={24} color="white" />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text style={{ fontSize: 16, fontWeight: 600 }}>
                        Bitcoin
                      </Text>
                      <Text style={{ fontSize: 12 }}>10/10/2021</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: "auto",
                        gap: 5,
                        alignItems: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                        }}
                      >
                        -$100.00
                      </Text>
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "500",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  balanceCard: {
    backgroundColor: "#16120f",
    padding: 25,
    borderRadius: 20,
  },
  actionCard: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
  },
});
