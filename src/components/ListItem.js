import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React from "react";
import AppTexts from "./AppTexts";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ListItem({
  title,
  image,
  subTitle,
  onPress,
  renderRightActions,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.holeContainer}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.container}>
            <AppTexts style={styles.title} numberOfLines={1}>
              {title}
            </AppTexts>
            {subTitle && (
              <AppTexts style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppTexts>
            )}
          </View>
          <MaterialCommunityIcons name="chevron-right" size={35} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  holeContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  container: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colors.medium,
  },
});
