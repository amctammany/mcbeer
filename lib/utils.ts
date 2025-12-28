import { clsx, type ClassValue } from "clsx";
import { FieldValues, Path } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { UnitValue } from "./Converter/adjustUnits";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export type PickNullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P];
};

export type PickNotNullable<T> = {
  [P in keyof T as null extends T[P] ? never : P]: T[P];
};

export type OptionalNullable<T> = {
  [K in keyof PickNullable<T>]?: Exclude<T[K], null>;
} & {
  [K in keyof PickNotNullable<T>]: T[K];
};

export type AmountFields<S, N extends keyof S> = {
  [P in keyof S]: P extends N ? UnitValue : S[P];
};

export function precisionRound(v: number, precision: undefined | number = 1) {
  const f = Math.pow(10, precision);
  return Math.round(v * f) / f;
}

export function get<T extends FieldValues>(
  obj: T,
  path: Path<T>,
  defaultValue?: T[Path<T>]
) {
  const pathParts = Array.isArray(path) ? path : path.split(".");
  let current = obj;
  for (let i = 0; i < pathParts.length; i++) {
    if (current === null || typeof current === "undefined") {
      return defaultValue;
    }
    current = current[pathParts[i]];
  }
  return typeof current === "undefined" ? defaultValue : current;
}
export function deepSet<T extends FieldValues>(
  src: T,
  path: Path<T>,
  value: T[Path<T>]
): T {
  const pathParts = Array.isArray(path) ? path : path.split(".");
  const obj = { ...src } as any;
  let current = obj as any;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (!current[part] || typeof current[part] !== "object") {
      current[part] = {};
    }
    current = current[part];
  }
  current[pathParts[pathParts.length - 1]] = value;
  return obj;
}
