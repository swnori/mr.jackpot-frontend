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

const UNIT_PER_MS = {
  MONTH: 2592000000,
  WEEK: 604800000,
  DAY: 86400000,
  HOUR: 3600000,
  MINUTE: 60000,
  SECOND: 1000,
  MILLISECOND: 1,
};

export const ddayFormat = (dday: Date) => {
  const today = new Date();

  const msDiff = dday.getTime() - today.getTime();

  if (msDiff >= UNIT_PER_MS.MONTH) {
    return `D-${Math.floor(msDiff / UNIT_PER_MS.MONTH)}M`;
  }

  if (msDiff >= UNIT_PER_MS.WEEK) {
    return `D-${Math.floor(msDiff / UNIT_PER_MS.WEEK)}W`;
  }

  if (msDiff >= UNIT_PER_MS.DAY) {
    return `D-${Math.floor(msDiff / UNIT_PER_MS.DAY)}`;
  }

  if (msDiff >= UNIT_PER_MS.HOUR) {
    return `${Math.floor(msDiff / UNIT_PER_MS.HOUR)}시간`;
  }

  if (msDiff >= UNIT_PER_MS.MINUTE) {
    return `${Math.floor(msDiff / UNIT_PER_MS.HOUR)}분`;
  }

  return 'D-Day';
};
