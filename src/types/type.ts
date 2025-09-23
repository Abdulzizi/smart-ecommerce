import { StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";

export type AppTextProps = TextProps & {
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
    variant?: 'filled' | 'outline',
}

export type AppTextInputProps = {
    value?: string,
    onChangeText?: (text: string) => void,
    placeholder?: string,
    secureTextEntry?: boolean,
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad',
    style?: TextStyle | TextStyle[],
}

export type ProductCardProps = {
    title: string,
    price: number,
    brand: string,
    rating: number,
    sold: number,
    location: string,
    discount: number,
    imageURL: string,
    onPress: () => void,
}

export type RootStackParamList = {
  AuthStack: undefined;
  MainAppBottomTabs: undefined;
  ProductDetail: { item: object };
};
