import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type AppTextProps = {
    children: React.ReactNode,
    style?: TextStyle | TextStyle[],
    variant?: 'small' | 'medium' | 'bold',
}

export type SafeViewProps = {
    children: React.ReactNode,
    style?: ViewStyle | ViewStyle[],
}

export type AppButtonProps = {
    onPress: () => void,
    title?: string,
    bgColor?: string,
    textColor?: string,
    style?: ViewStyle | ViewStyle[],
    styleTitle?: StyleProp<TextStyle> | StyleProp<TextStyle>[],
    disabled?: boolean,
}