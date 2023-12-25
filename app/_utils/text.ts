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
