import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#16120f",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          padding: 20,
        }}
      >
        <Image
          source={require("../assets/images/starsquare.png")}
          style={{ width: 60, height: 60, position: "absolute", top: 60, left: 60 }}
        />
        <View
          style={{
            width: 200,
            height: 16,
            borderRadius: 8,
            backgroundColor: "#336dff",
            position: "absolute",
            transform: "rotate(140deg)",
            top: 140,
            left: 120,
          }}
        />
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 80,
            backgroundColor: "#ffd6ad",
            position: "absolute",
            top: 200,
            right: 40,
          }}
        />
        <Image
          source={require("../assets/images/star2.png")}
          style={{ width: 60, height: 60, position: "absolute", top: 250, left: 20, transform: "rotate(40deg)" }}
        />
        <Image
          source={require("../assets/images/flower.png")}
          style={{ width: 160, height: 160, position: "absolute", top: 300, left: 80 }}
        />
        <Image
          source={require("../assets/images/star3.png")}
          style={{ width: 100, height: 100, position: "absolute", top: 400, right: 40 }}
        />
        <View style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 60 }}>
          <View>
            <Text style={{ color: "white", fontSize: 36 }}>Spend Cash</Text>
            <Text style={{ color: "#c7f376", fontSize: 36 }}>Anywhere.</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: "#c7f376", padding: 10, borderRadius: 10, alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
