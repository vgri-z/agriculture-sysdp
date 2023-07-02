import { themes } from "../utils/themes"; // 引入定义的属性

const { themeLight, themesDefault } = themes; // 三种不同主题
const state = {
  individual: themesDefault,
};
const mutations = {
  CHANGE_SETTING: (state, payload) => {
    if (payload === "theme-light") {
      state.individual = themeLight;
    } else if (payload === "theme-default") {
      state.individual = themesDefault;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
