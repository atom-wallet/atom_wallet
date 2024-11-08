import { useState } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cards() {
  const [nfcSupported, setNfcSupported] = useState<boolean>(true);
  const [nfcData, setNfcData] = useState<string | null>(null);

  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.warn("Tag found", tag);
    } catch (ex) {
      console.warn("Oops!", ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
