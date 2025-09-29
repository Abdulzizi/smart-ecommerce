import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity } from "react-native";
import { AppColor } from "../../styles/colors";
import AppText from "../texts/AppText";

interface ConfirmModalProps {
  visible: boolean;
  title?: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({
  visible,
  title = "Confirmation",
  message,
  onCancel,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.message}>{message}</AppText>

          <View style={styles.actions}>
            <TouchableOpacity style={[styles.btn, styles.cancel]} onPress={onCancel}>
              <AppText style={styles.btnText}>Cancel</AppText>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.confirm]} onPress={onConfirm}>
              <AppText style={styles.btnText}>Yes</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: AppColor.white,
    borderRadius: 12,
    padding: 20,
    width: "80%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    fontSize: 15,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 10,
  },
  cancel: {
    backgroundColor: AppColor.disabledGray,
  },
  confirm: {
    backgroundColor: AppColor.red,
  },
  btnText: {
    color: AppColor.white,
    fontWeight: "600",
  },
});
