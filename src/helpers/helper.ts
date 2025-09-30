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

export const calculateOrderSummary = (cartItems: any[]) => {
  let originalTotal = 0;
  let discountedTotal = 0;

  cartItems.forEach((item) => {
    const price = item.product.price;
    const discount = item.product.discount ?? 0;
    const discountedPrice = price - (price * discount) / 100;

    originalTotal += price * item.qty;
    discountedTotal += discountedPrice * item.qty;
  });

  const discount = originalTotal - discountedTotal;
  const tax = discountedTotal * 0.1;
  const shipping = cartItems.length > 0 ? 15 : 0;
  const orderTotal = discountedTotal + tax + shipping;

  return {
    itemsPrice: originalTotal,
    discount, // the difference only
    tax,
    shipping,
    orderTotal, // this is already the final after discount
    discountedTotal, // add this if you want pre-tax/shipping price
  };
};
