import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productDetails: {},
    cartItems: new Map()
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
    // _user(state) {
    //   return state._user
    // },
    // checkUser(state) {
    //   return state._user !== null
    // },
  },
    mutations: {
      SET_PRODUCTS(state, data) {
        state.products = data;
      },
      SET_DETAIL_PRODUCT(state, data) {
        state.productDetails = data;
      },
      ADD_PRODUCT_TO_CART(state, product) {
        const isProductAlreadyAdded = state.cartItems.get(product.id)

        if (isProductAlreadyAdded) {
          const modifiedProduct = {
            ...product,
            count: isProductAlreadyAdded.count + 1,
          }
          state.cartItems.set(product.id, modifiedProduct)
        }
        else {
          state.cartItems.set(product.id, { ...product, count: 1 })
        }
      },

      DELETE_PRODUCT_IN_CART(state, id) {
        state.cartItems.delete(id);
      },

      DEC_TO_CART(state, id) {
        const currentProduct = state.cartItems.get(id);

        if (currentProduct.count > 0) {
          currentProduct.count = currentProduct.count - 1
        }
      },

      ADD_TO_CART(state, id) {
        const currentProduct = state.cartItems.get(id);
        currentProduct.count = currentProduct.count + 1
      }
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
