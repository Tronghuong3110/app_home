import React, { useState } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions, ScrollView 
} from 'react-native';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, title: 'Menu Item 1' },
    { id: 2, title: 'Menu Item 2' },
    { id: 3, title: 'Menu Item 3' },
    { id: 4, title: 'Menu Item 4' },
    { id: 5, title: 'Menu Item 5' },
    { id: 6, title: 'Menu Item 6' },
    { id: 7, title: 'Menu Item 7' },
    { id: 8, title: 'Menu Item 8' },
    // { id: 9, title: 'Menu Item 9' },
    // { id: 10, title: 'Menu Item 10' },
    // { id: 11, title: 'Menu Item 11' },
    // { id: 12, title: 'Menu Item 12' },
    // { id: 13, title: 'Menu Item 13' },
    // { id: 14, title: 'Menu Item 14' },
    // { id: 15, title: 'Menu Item 15' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>{item.title}</Text>
    </TouchableOpacity>
  );
 
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
        {isMenuOpen ? (
          <Text style={styles.menuToggleText}>&times;</Text>
        ) : (
          <Text style={styles.menuToggleText}>&#x2630;</Text>
        )}
      </TouchableOpacity>

      {isMenuOpen && (
        <View style={styles.menuWrapper}>
          <FlatList
            data={menuItems}
            renderItem={renderMenuItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.menu}
          />
        </View>
      )}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // height: "100%"
  },
  menuToggle: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    background: 'transparent',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: 40,
    height: 50
  },
  menuToggleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 2, // Thêm khoảng chừng ngang để căn giữa dấu "X"
    paddingTop: 1, // Thêm khoảng chừng dọc để căn giữa dấu "X"
    textAlignVertical: 'center', // Căn giữa dọc
    textAlign: 'center', // Căn giữa ngang
  },
  menuWrapper: {
    position: 'absolute',
    top: 70, // Vị trí bắt đầu hiển thị menu
    left: 10,
    width: windowWidth / 2,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    zIndex: 1, 
    elevation: 4, // Thêm elevation để hiển thị boxShadow trên Android
    shadowColor: '#000', // Màu của boxShadow
    shadowOffset: { width: 0, height: 2 }, // Độ lệch của boxShadow theo chiều ngang và dọc
    shadowOpacity: 0.4, // Độ mờ của boxShadow
    shadowRadius: 4,
  },
  menu: {
    marginTop: 10,
    paddingBottom: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default Menu;