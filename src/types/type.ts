import { StyleProp, TextProps, TextStyle, ViewStyle } from "react-native";

export type Product = {
  id: string | number;
  title: string;
  price: number;
  brand: string;
  rating: number;
  sold: number;
  location: string;
  discount: number;
  imageURL: string;
};

// COMPONENT
export type AppTextProps = TextProps & {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "small" | "medium" | "bold";
};

export type SafeViewProps = {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
};

export type AppButtonProps = {
  onPress: () => void;
  title?: string;
  bgColor?: string;
  textColor?: string;
  style?: ViewStyle | ViewStyle[];
  styleTitle?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  disabled?: boolean;
  variant?: "filled" | "outline";
};

export type AppTextInputProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  style?: TextStyle | TextStyle[];
};

export type ProductCardProps = Product & {
  onPress: () => void;
};

export type RootStackParamList = {
  AuthStack: undefined;
  MainAppBottomTabs: undefined;
  ProductDetail: { item: object };
};

export type CartItemProps = {
  product: Product;
  qty: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onDelete?: () => void;
};

export type CartItemListProps = {
  items: { product: Product; qty: number }[];
  onIncrease: (id: string | number) => void;
  onDecrease: (id: string | number) => void;
  onDelete: (id: string | number) => void;
};

export type TotalViewsProps = {
  itemsPrice: number;
  tax: number;
  shipping: number;
  orderTotal: number;
};
