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

export const calculateCartTotal = (items: { price: number; qty: number }[]) =>
  items.reduce((sum, item) => sum + item.price * item.qty, 0);

export const calculateCartCount = (items: { qty: number }[]) =>
  items.reduce((sum, item) => sum + item.qty, 0);