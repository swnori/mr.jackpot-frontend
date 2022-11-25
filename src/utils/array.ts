export const arrayToObject = (arr: any[]) => {
  return arr.reduce((pre, cur) => {
    if (!cur.id && cur.id !== 0) {
      return pre;
    }
    const next = { ...pre };
    const id = Number(cur.id);
    next[id] = cur;
    return next;
  }, {});
};
