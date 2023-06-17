export const NumberType = (s = 10, f?: number) => {
  const range = f !== undefined ? [s, f] : [0, s];
  return {
    type: Number,
    default: range[0],
    validate: (v: number) => !Number.isNaN(v) && v >= range[0] && v <= range[1],
  };
};

export const RangeType = (s = 10, f?: number) => {
  const range = f !== undefined ? [s, f] : [0, s];
  return {
    type: [Number],
    default: range,
    validate: (v: unknown) =>
      v == null ||
      (Array.isArray(v) &&
        v.length === 2 &&
        v[0] >= range[0] &&
        v[0] <= range[1] &&
        v[1] >= range[0] &&
        v[1] <= range[1]),
  };
};
