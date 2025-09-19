import { TextStyle, ViewStyle } from "react-native";

export type AppTextProps = {
    children: React.ReactNode,
    style?: TextStyle | TextStyle[],
    variant?: 'small' | 'medium' | 'large',
}

export type SafeViewProps = {
    children: React.ReactNode,
    style?: ViewStyle | ViewStyle[],
}