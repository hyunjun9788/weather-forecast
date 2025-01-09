export const navigate = (to, isReplace = false) => {
  console.log(to);
  const historyChangeEvent = new CustomEvent('historyChange', {
    detail: {
      to,
      isReplace,
    },
  });
  console.log(historyChangeEvent);

  dispatchEvent(historyChangeEvent);
};
