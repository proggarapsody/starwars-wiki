export const getIdFromUrl = function (value: any) {
  let id = value.match(/([0-9])+/g);
  id = id[0];
  return id;
};
