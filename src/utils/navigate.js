export const navigate = (toPath) => {
  const historyChangeEvent = new CustomEvent('historyChange', {
    detail: {
      toPath,
    },
  });
  dispatchEvent(historyChangeEvent);
};
