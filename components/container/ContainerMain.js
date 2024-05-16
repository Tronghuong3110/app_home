// ContainerMain.js
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Menu from "../menu/Menu";
import Header from "../common/header/Header";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ContainerMain = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("dd/MM/yyyy");
  const [weight, setWeight] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);
  const pricePerKg = 10;
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirmDate = (selectedDate) => {
    const formattedDate = formatDate(selectedDate);
    setDate(formattedDate);
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleCalculate = () => {
    // Tính toán và cập nhật tổng trọng lượng
  };

  // xử lý đăng xuất
  const handleLogout = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: "1" }],
    });
  }, [navigation]);

  const handleChange = (date) => {
    setDate(date);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerMenuContainer}>
        <View style={styles.menu}>
          <Menu />
        </View>

        <View style={styles.header}>
          <Header />
        </View>

        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Text>Đăng xuất</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subContainer}>
        {/* Tên người dùng */}
        <Text style={styles.label}>Họ và tên: Nguyễn Trọng Hướng</Text>

        {/* Thẻ select để chọn ngày */}
        <Text style={styles.label}>Chọn ngày:</Text>
        <TouchableOpacity style={styles.input} onPress={showDatePicker}>
          <Text>{date}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />

        {/* Điền khối lượng hàng làm được trong ngày */}
        <Text style={styles.label}>Khối lượng (kg):</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          // editable={selectedDate <= new Date()} // Chỉ cho phép sửa đổi nếu ngày <= ngày hiện tại
        />

        {/* Tính toán tống số tiền đã làm được */}
        <Button title="Calculate" onPress={handleCalculate} />
        <Text style={styles.label}>Tổng khối lượng: {totalWeight} kg</Text>
        <Text style={styles.label}>
          Tổng tiền: {totalWeight * pricePerKg} VND
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: "absolute",
    width: "100%",
  },
  headerMenuContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbfbe1",
    height: 70,
    zIndex: 1,
  },
  subContainer: {
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  logout: {
    position: "absolute",
    right: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Chuyển đổi thành chuỗi 'dd/MM/yyyy'
  const formattedDate = `${day >= 10 ? day : "0" + day}/${month >= 10 ? month : "0" + month}/${year}`;
  return formattedDate;
};

export default ContainerMain;
