type Menu = "home" | "products" | "about";
type ButtonVariant = "primary" | "secondary";

type FlexibleMenu = FlexibleAutocomplete<Menu>;
type FlexibleButtonVariant = FlexibleAutocomplete<ButtonVariant>;

type FlexibleAutocomplete<T> = T | (string & {});

export const menus: FlexibleMenu[] = ["home", "products", "about", "other..."];

export const buttonVariants: FlexibleButtonVariant[] = [
  "primary",
  "secondary",
  "other...",
];
