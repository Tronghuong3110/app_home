import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ContainerMain from "../container/ContainerMain";
import React, { useState } from "react";

const TestScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const [phoneNumber, setPhoneNumber]

  const handleLogin = () => {
    if(phoneNumber == "") {
      alert("Vui lòng nhập số điện thoại!!")
    }
    else {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <ContainerMain />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nhập số điện thoại:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        placeholder="Số điện thoại"
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#ffffff"
  },
  label: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});


export default TestScreen;