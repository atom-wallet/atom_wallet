import { CommonError } from "@particle-network/rn-base";
import * as particleConnect from "@particle-network/rn-connect";
import { WalletType } from "@particle-network/rn-connect";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  NativeEventEmitter,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Toast from "react-native-toast-message";
import AuthCoreLoginScreen from "./_AuthCoreLoginScreen";
import type { RootStackParamList } from "./types";
type SelectWalletScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SelectWalletPage">;
type SelectWalletScreenRouteProp = RouteProp<RootStackParamList, "SelectWalletPage">;

const emitter = new NativeEventEmitter(particleConnect.ParticleConnectEvent);
export default function SelectWalletScreen() {
  const navigation = useNavigation<SelectWalletScreenNavigationProp>();
  const route = useRoute<SelectWalletScreenRouteProp>();
  const [qrCodeUri, setQrCodeUri] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const handleEvent = (message: any) => {
      console.log("qrCodeUri", message);
      setQrCodeUri(message);
    };

    const subscription = emitter.addListener("qrCodeUri", handleEvent);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (qrCodeUri !== "") {
      setModalVisible(true);
    }
  }, [qrCodeUri]);

  const toggleModal = () => {
    setModalVisible(false);
    setQrCodeUri("");
  };

  const selectWallet = async (walletType: WalletType) => {
    try {
      if (walletType != WalletType.WalletConnect) {
        let accountInfo = await particleConnect.connect(walletType);
        console.log(`accountInfo ${accountInfo}`);
        accountInfo.walletType = walletType;
        navigation.navigate("Home", {
          accountInfo: accountInfo,
        });
      } else {
        let accountInfo = await particleConnect.connectWalletConnect();
        console.log(`accountInfo ${accountInfo}`);
        accountInfo.walletType = walletType;
        navigation.navigate("Home", {
          accountInfo: accountInfo,
        });
      }
    } catch (e) {
      const error = e as CommonError;
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.message,
      });
    }
  };
  const data = [
    { key: "ParticleAuthCore", value: WalletType.AuthCore },
    { key: "MetaMask", value: WalletType.MetaMask },
    { key: "Rainbow", value: WalletType.Rainbow },
    { key: "Phantom", value: WalletType.Phantom },
    { key: "WalletConnect", value: WalletType.WalletConnect },
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          item.value === WalletType.AuthCore ? (
            <AuthCoreLoginScreen />
          ) : (
            <TouchableOpacity style={styles.buttonStyle} onPress={() => selectWallet(item.value)}>
              <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
          )
        }
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.overlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>WalletConnect QR Code</Text>
                  <QRCode size={200} value={qrCodeUri} />
                  <Button title="Close Modal" onPress={toggleModal} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#9933ff",
    borderRadius: 3,
    margin: 5,
    height: 30,
    width: 300,
    justifyContent: "center",
    marginTop: 5,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
