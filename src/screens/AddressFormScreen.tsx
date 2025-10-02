import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
    StyleSheet,
    View,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Switch,
    TouchableOpacity,
} from "react-native";
import AppSafeView from "../components/views/AppSafeView";
import AppText from "../components/texts/AppText";
import AppButton from "../components/buttons/AppButton";
import AppTextInput from "../components/inputs/AppTextInput";
import { Ionicons } from "@expo/vector-icons";
import { AppColor } from "../styles/colors";
import ConfirmModal from "../components/modals/ConfirmModal";
import { showMessage } from "react-native-flash-message";

export default function AddressFormScreen({ navigation }) {
    const route = useRoute();
    const editingAddress = route.params?.address;

    const [modalVisible, setModalVisible] = useState(false);

    const [form, setForm] = useState(
        editingAddress || { name: "", street: "", city: "", zip: "", phone: "", isDefault: false }
    );

    const handleSave = () => {
        if (!form.name || !form.street || !form.city || !form.zip || !form.phone) {
            Alert.alert("Missing Fields", "Please fill in all fields before saving.");
            return;
        }

        if (editingAddress) {
            console.log("update", form);
            showMessage({ message: "Address updated", type: "success" });
        } else {
            console.log("add new", form);
            showMessage({ message: "Address added", type: "success" });
        }
        navigation.goBack();
    };

    const handleDeleteConfirm = () => {
        console.log("delete", editingAddress.id);
        setModalVisible(false);
        navigation.goBack();

        showMessage({
            message: "Address deleted",
            description: "The address has been removed successfully.",
            type: "success",
            icon: "success",
            duration: 3000,
        });
    };

    return (
        <AppSafeView>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={22} color={AppColor.text} />
                    </TouchableOpacity>
                    <AppText style={styles.headerTitle}>
                        {editingAddress ? "Edit Address" : "Add Address"}
                    </AppText>
                </View>

                {editingAddress && (
                    <TouchableOpacity
                        onPress={() => setModalVisible(true)}
                        style={styles.deleteButton}
                    >
                        <Ionicons name="trash-outline" size={18} color="red" />
                    </TouchableOpacity>
                )}
            </View>

            <KeyboardAvoidingView
                style={styles.formWrapper}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollView contentContainerStyle={styles.form}>
                    <View style={styles.field}>
                        <AppText style={styles.label}>Full Name</AppText>
                        <AppTextInput
                            placeholder="Input your full name"
                            value={form.name}
                            onChangeText={(text) => setForm({ ...form, name: text })}
                        />
                    </View>

                    <View style={styles.field}>
                        <AppText style={styles.label}>Street Address</AppText>
                        <AppTextInput
                            placeholder="Input your street address"
                            value={form.street}
                            onChangeText={(text) => setForm({ ...form, street: text })}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.field, styles.flex]}>
                            <AppText style={styles.label}>City</AppText>
                            <AppTextInput
                                placeholder="City"
                                value={form.city}
                                onChangeText={(text) => setForm({ ...form, city: text })}
                            />
                        </View>

                        <View style={[styles.field, styles.flex]}>
                            <AppText style={styles.label}>ZIP Code</AppText>
                            <AppTextInput
                                placeholder="ZIP"
                                value={form.zip}
                                onChangeText={(text) => setForm({ ...form, zip: text })}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={styles.field}>
                        <AppText style={styles.label}>Phone Number</AppText>
                        <AppTextInput
                            placeholder="Input your phone number"
                            value={form.phone}
                            onChangeText={(text) => setForm({ ...form, phone: text })}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={[styles.field, styles.switchRow]}>
                        <AppText style={styles.label}>Set as Default</AppText>
                        <Switch
                            value={form.isDefault || false}
                            onValueChange={(val) => setForm({ ...form, isDefault: val })}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.actions}>
                <AppButton
                    title={editingAddress ? "Save Changes" : "Add Address"}
                    onPress={handleSave}
                    style={styles.saveButton}
                />
            </View>

            <ConfirmModal
                visible={modalVisible}
                title="Delete Address"
                message="Are you sure you want to delete this address?"
                onCancel={() => setModalVisible(false)}
                onConfirm={handleDeleteConfirm}
            />
        </AppSafeView>
    );
}

const styles = StyleSheet.create({
    formWrapper: {
        flex: 1,
    },
    form: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 20,
    },
    field: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 6,
        color: "#333",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    flex: {
        flex: 1,
        marginRight: 8,
    },
    switchRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    actions: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    saveButton: {
        backgroundColor: AppColor.primary,
        width: "100%",
        borderRadius: 8,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    headerLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    backButton: {
        marginRight: 8,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: AppColor.text,
    },
    deleteButton: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "red",
    },
});
