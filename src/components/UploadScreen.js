import React, { useEffect, useRef } from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

export default function UploadScreen({
  progress = 0,
  onDone,
  visible = false,
}) {
  const animationRef = useRef();

  useEffect(() => {
    if (progress >= 1) {
      animationRef.current?.play();
    }
  }, [progress]);

  return (
    <Modal visible={visible} transparent>
      <View style={styles.overlay}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primaryColor}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            ref={animationRef}
            source={require("../animation/Done.json")}
            autoPlay
            loop
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000099",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 150,
    height: 150,
  },
});
