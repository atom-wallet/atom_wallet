import { Ethereum, type ChainInfo } from "@particle-network/chains";
import * as particleAuthCore from "@particle-network/rn-auth-core";
import { Env, ParticleInfo } from "@particle-network/rn-base";
import * as particleConnect from "@particle-network/rn-connect";
import { Link } from "expo-router";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function login() {
  useEffect(() => {
    initParticle();
  }, []);

  const initParticle = () => {
    ParticleInfo.projectId = "e2c312b6-46ce-43c1-bae5-4c3bf2f279b8";
    ParticleInfo.clientKey = "cKELtFHBoEi5eGyaRKcvrbHAM4qpQMaSX70z0ujw";

    if (ParticleInfo.projectId == "" || ParticleInfo.clientKey == "") {
      throw new Error(
        "You need set project info, Get your project id and client from dashboard, https://dashboard.particle.network"
      );
    }

    const chainInfo: ChainInfo = Ethereum;
    const env = Env.Dev;
    const metadata = {
      url: "https://connect.particle.network",
      icon: "https://connect.particle.network/icons/512.png",
      name: "Particle Connect",
      description: "Particle Wallet",
    };

    particleConnect.init(chainInfo, env, metadata);
    particleAuthCore.init();
  };

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
          <Link
            href="/selectchain"
            style={{ backgroundColor: "#c7f376", padding: 10, borderRadius: 10, alignItems: "center" }}
          >
            <Text style={{ color: "black", fontSize: 20 }}>Login</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
