export const recordToSelectArray = <EnumValue>(v: Record<string, EnumValue>) => {
  return Object.entries(v).map(([key, value]) => {
    return {
      label: key,
      value,
    };
  });
};
