import { CartItem } from "../types/type";

export const formatMoney = (value: number, currency: string = "USD") => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(value);
};

export const pluralize = (count: number, singular: string, plural: string) => {
  return count === 1 ? singular : plural;
};

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const formatDate = (date: string | Date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const calculateOrderSummary = (cartItems: CartItem[]) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  const tax = subtotal * 0.1;
  const shipping = cartItems.length > 0 ? 15 : 0;
  const orderTotal = subtotal + tax + shipping;

  return { subtotal, tax, shipping, orderTotal };
};
