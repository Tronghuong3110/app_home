import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import Menu from '../components/menu/Menu';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weight, setWeight] = useState('');
  const [totalWeight, setTotalWeight] = useState(0);
  const pricePerKg = 10; // Giá tiền trên mỗi kg

  const handleLogin = () => {
    // Xử lý đăng nhập
  };

  const handleCalculate = () => {
    // Tính toán và cập nhật tổng trọng lượng
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Menu />
      </View>

      <View style={styles.subContainer}>
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.label}>Name: {name}</Text>
      <Text style={styles.label}>Selected Date: {selectedDate.toString()}</Text>
      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        editable={selectedDate <= new Date()} // Chỉ cho phép sửa đổi nếu ngày <= ngày hiện tại
      />
      <Button title="Calculate" onPress={handleCalculate} />
      <Text style={styles.label}>Total Weight: {totalWeight} kg</Text>
      <Text style={styles.label}>Total Price: {totalWeight * pricePerKg} USD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // display: "flex",
    // justifyContent: 'center',
    // justifyContent: 'center',
    paddingTop: 20,
  },
  menu: {
    marginBottom: 70,
  },
  subContainer: {
    paddingHorizontal: 10,
  },
//   btn: {
//     marginBottom: 10,
//   },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    // marginTop: 0
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    // marginTop: 0
  },
});

export default App;