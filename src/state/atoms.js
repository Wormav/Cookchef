const { atom } = require("recoil");

export const recipesState = atom({
  key: "recipesState",
  default: [],
});
