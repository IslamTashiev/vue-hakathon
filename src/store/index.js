import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productDetails: {},
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_DETAIL_PRODUCT(state, data) {
      state.productDetails = data;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();

      commit("SET_PRODUCTS", data);
    },
    async getProductDetails({ commit }, id) {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();

      commit("SET_DETAIL_PRODUCT", data);
    },
  },
});
