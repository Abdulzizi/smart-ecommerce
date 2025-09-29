// components/headers/HomeHeader.tsx
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { AppColor } from "../../styles/colors";
import { IMAGE_PATH } from "../../constants/imag-path";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGE_PATH.appLogo} style={styles.logo} />

      <AppText variant="bold" style={styles.greeting}>
        Welcome 👋
      </AppText>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: s(16),
    paddingVertical: vs(12),
    backgroundColor: AppColor.white,
    borderBottomWidth: 1,
    borderBottomColor: AppColor.border,
  },
  logo: {
    width: s(40),
    height: vs(40),
  },
  greeting: {
    fontSize: s(16),
    color: AppColor.text,
  },
});
