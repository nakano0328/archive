export const getBotResponse = (input: string): string => {
  const normalizedInput = input.trim().toUpperCase();

  switch (normalizedInput) {
    case "秘密のコマンドを教えてください":
      return "[[こちらのページ]](https://jeonglabo.github.io/nextjs/test/testtest) にアクセスしてみな";
    case "内積の計算式について教えてください。":
      return "2つのベクトルをそれぞれ $\\bm{a},\\bm{b}$、2つのベクトルのなす角を$\\theta$とすると、内積の計算式は以下の通りです。$\\newline \\bm{a} \\cdot \\bm{b} = |\\bm{a}||\\bm{b}|\\cos\\theta \\newline$ 詳しくは [[こちら]](https://jeonglabo.github.io/nextjs/linear_algebra/dotproduct) を見て下さい。";
    default:
      return "こんにちは！このチャットボットはまだ開発中です。完成するまでしばらくお待ちください！😊";
  }
};
