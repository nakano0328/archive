export const getBotResponse = (input: string): string => {
  // 入力を正規化（大文字小文字を区別しない）
  const normalizedInput = input.trim().toUpperCase();

  switch (normalizedInput) {
    case "A":
      return "○";
    case "B":
      return "△";
    default:
      return "すみません。よく分かりません。";
  }
};
