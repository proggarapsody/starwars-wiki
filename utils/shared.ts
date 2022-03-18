export const getIdFromUrl = function (value: string) {
  let id = value.match(/([0-9])+/g);
  if (id) {
    return id[0].toString();
  }

  return null;
};
