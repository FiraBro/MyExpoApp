import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Category({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <View style={[styles.icon, { backgroundColor: item.backgroundColor }]}>
        <MaterialCommunityIcons name={item.icon} size={30} color="white" />
      </View>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 80,
    padding: 10,
  },
  icon: {
    borderRadius: 35,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    textAlign: "center",
    fontSize: 14,
  },
});
