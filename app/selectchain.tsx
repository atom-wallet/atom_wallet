import { type ChainInfo, chains } from "@particle-network/chains";
import * as particleBase from "@particle-network/rn-base";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { router } from "expo-router";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { RootStackParamList } from "./types";

type SelectChainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SelectChainPage">;
type SelectChainScreenRouteProp = RouteProp<RootStackParamList, "SelectChainPage">;

export default function SelectChainScreen() {
  const navigation = useNavigation<SelectChainScreenNavigationProp>();
  const route = useRoute<SelectChainScreenRouteProp>();

  const selectChain = (chainInfo: ChainInfo) => {
    Toast.show({
      type: "success",
      text1: `select chain ${chainInfo.name} ${chainInfo.network} ${chainInfo.id}`,
    });
    particleBase.setChainInfo(chainInfo);

    router.navigate("/selectwallet");
  };

  const data = chains.getAllChainInfos();

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.buttonStyle} onPress={() => selectChain(item)}>
            <Text style={styles.textStyle}>{item.name + " " + item.network + " " + item.id}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 3,
    margin: 10,
    height: 30,
    width: 300,
    justifyContent: "center",
  },

  textStyle: {
    color: "white",
    textAlign: "center",
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
