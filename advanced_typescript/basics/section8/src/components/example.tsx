const BUTTON_TYPES = {
  0: "warning",
  1: "success",
  2: "error",
} as const;

type ButtonTypes = typeof BUTTON_TYPES;

type TypesKeys = keyof ButtonTypes;
type TypesValues = ButtonTypes[TypesKeys];
