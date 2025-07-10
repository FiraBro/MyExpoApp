import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyle from "../config/style";

import AppTexts from "./AppTexts";
import ItemPicker from "./ItemPicker";

export default function AppPicker({
  icon,
  items,
  onSelectedItem,
  ItemPickerComponent = ItemPicker,
  placeholder,
  width = "100%",
  selectedItem,
  ...otherProp
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={30}
              color={defaultStyle.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppTexts style={styles.text}>{selectedItem.label}</AppTexts>
          ) : (
            <AppTexts style={styles.placeholder}>{placeholder}</AppTexts>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={defaultStyle.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <ItemPickerComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectedItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyle.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  placeholder: {
    color: defaultStyle.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
