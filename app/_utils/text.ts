export const createMiddleEllipsis = (
  text: string,
  startCharsNum: number,
  endCharsNum: number,
): string => {
  if (!text || text.length <= startCharsNum + endCharsNum) {
    return text;
  }

  return `${text.substring(0, startCharsNum)}…${text.substring(
    text.length - endCharsNum,
    text.length,
  )}`;
};

export const tryParseInt = (value: string): number | string => {
  const parsed = parseInt(value, 10);
  if (isNaN(parsed)) {
    return value;
  }

  return parsed;
};
