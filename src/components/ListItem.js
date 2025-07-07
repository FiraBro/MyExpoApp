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
            <AppTexts style={styles.title}>{title}</AppTexts>
            {subTitle && (
              <AppTexts style={styles.subTitle}>{subTitle}</AppTexts>
            )}
          </View>
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
  },
  container: {
    marginLeft: 10,
    justifyContent: "center",
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
