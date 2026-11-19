export const arrayParser = (v: string) => v.split(/,\s*/);

export const rangeParser = (v: string) => {
  const txt = v.replace("<", "0-");
  const res = txt.split("-").map((t) => parseFloat(t));
  if (res.length === 1) {
    return [res[0], res[0]];
  }
  if (res.length !== 2) throw new Error(`Invalid range: ${v}`);
  return res;
};
