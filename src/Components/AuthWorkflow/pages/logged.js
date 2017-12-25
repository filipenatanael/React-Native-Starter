import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../services/auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Tony Stark">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          alignSelf: "center",
          borderRadius: 40,
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>TS</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="Sair"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
  </View>
);
