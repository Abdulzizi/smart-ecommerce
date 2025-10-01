import React from "react";
import {
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import { AppColor } from "../../styles/colors";
import AppText from "../texts/AppText";

interface AppModalProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const AppModal = ({ visible, onClose, title, children }: AppModalProps) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <AppText style={styles.title}>{title}</AppText>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={24} color={AppColor.text} />
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        {children}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}

export default AppModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "flex-end",
    },
    container: {
        backgroundColor: AppColor.white,
        borderTopLeftRadius: s(16),
        borderTopRightRadius: s(16),
        padding: s(16),
        maxHeight: "70%",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vs(12),
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: AppColor.text,
    },
})