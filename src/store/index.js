import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productDetails: {},
    cartItems: new Map(),
    error: null,
<<<<<<< HEAD
    searchedItems: "",
=======
>>>>>>> d3dbbf0ee10cad29ec9f255a443fb48565afdc26
  },
  getters: {
    totalSumOfProducts(state) {
      const price = state.cartItems;
      let sum = 0;

      for (const product of price.values()) {
        sum += product.price * product.count;
      }
      return sum;
    },
    totalCountOfProducts(state) {
      const price = state.cartItems;
      let count = 0;

      for (const product of price.values()) {
        count += product.count;
      }
      return count;
    },

    totalDeliveryOfProducts(state) {
      const price = state.cartItems;
      let delivery = 100 ;

      for (const product of price.values()) {
<<<<<<< HEAD
          delivery -= product.count 
=======
        delivery -= product.count;
>>>>>>> d3dbbf0ee10cad29ec9f255a443fb48565afdc26
      }
      return delivery;
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_DETAIL_PRODUCT(state, data) {
      state.productDetails = data;
    },
    ADD_PRODUCT_TO_CART(state, product) {
      const isProductAlreadyAdded = state.cartItems.get(product.id);

<<<<<<< HEAD
        if (currentProduct.count > 0) {
          currentProduct.count = currentProduct.count - 1
        }
      },
      ADD_TO_CART(state, id) {
        const currentProduct = state.cartItems.get(id);
        currentProduct.count = currentProduct.count + 1
      },
      SEARCH_ITEMS(state,text) {
      state.searchedItems = text
      },
=======
      if (isProductAlreadyAdded) {
        const modifiedProduct = {
          ...product,
          count: isProductAlreadyAdded.count + 1,
        };
        state.cartItems.set(product.id, modifiedProduct);
      } else {
        state.cartItems.set(product.id, { ...product, count: 1 });
      }
    },
    DELETE_PRODUCT_IN_CART(state, id) {
      state.cartItems.delete(id);
>>>>>>> d3dbbf0ee10cad29ec9f255a443fb48565afdc26
    },
    DEC_TO_CART(state, id) {
      const currentProduct = state.cartItems.get(id);

      if (currentProduct.count > 0) {
        currentProduct.count = currentProduct.count - 1;
      }
    },
    ADD_TO_CART(state, id) {
      const currentProduct = state.cartItems.get(id);
      currentProduct.count = currentProduct.count + 1;
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
    async addProduct({ dispatch }, product) {
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      dispatch("getProducts");
    },
  },
});
