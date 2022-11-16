export const KRWFormat = (num: number) => `KRW ${num.toLocaleString('ko-KR')}`;

/**
 * @param num 숫자를
 * @param dight 몇 자리수로 나타낼 건지 (default = 1)
 * @returns 문자열로
 */
export const digitFormat = (num: number, digit: number = 1) => {
  const ten = 10 ** (digit - 1);
  const zeros = '0'.repeat(digit - num.toString().length);

  return num < ten ? `${zeros}${num}` : `${num}`;
};
