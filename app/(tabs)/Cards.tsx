import { useState } from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cards() {
  const [nfcSupported, setNfcSupported] = useState<boolean>(true);
  const [nfcData, setNfcData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  async function readNdef() {
    setIsScanning(true);
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.warn("Tag found", tag);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      setIsScanning(false);
      NfcManager.cancelTechnologyRequest();
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={isScanning} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Ready To Scan</Text>
            <Image source={require("./../../assets/images/nfc.png")} style={{ width: 100, height: 100 }} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    marginTop: "auto",
    marginBottom: 20,
    width: "90%",
    backgroundColor: "#f5f5f0",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    opacity: 0.4,
    fontSize: 24,
    marginBottom: 10,
  },
});
