import image1 from "@/../public/images/products/product-8.png";
import image2 from "@/../public/images/products/product-9.png";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

type cartItem = {
  id: number;
  image: StaticImageData;
  productName: string;
  quantity: number;
  productRating: number;
  productPrice: number;
  subTotal: number;
};
type CartState = {
  cartItems: cartItem[];
  detailsItem: cartItem | null;
  quantity: number;
};

type InitialState = {
  value: CartState;
};

const initialState: InitialState = {
  value: {
    cartItems: [
      {
        id: 32323,
        productName: "Super Pen",
        productPrice: 345,
        subTotal: 345,
        quantity: 1,
        productRating: 4.5,
        image: image1,
      },

      {
        id: 542,
        image: image2,
        productName: "Microphone R4",
        quantity: 1,
        productRating: 454,
        productPrice: 75,
        subTotal: 75,
      },
    ],
    detailsItem: null,
    quantity: 2,
  },
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existItem = state.value.cartItems.find((x) => x.id === newItem.id);

      if (!existItem) {
        if (newItem.quantity > 0) {
          newItem.quantity = newItem.quantity;
        } else {
          newItem.quantity = 1;
        }
        state.value.cartItems.push(newItem);
        state.value.quantity++;
      } else {
        existItem.quantity = (existItem.quantity || 0) + 1;
        state.value.quantity++;
      }
    },
    sendDetails: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;

      newItem.quantity = 1;
      state.value.detailsItem = { ...newItem };
    },

    cartUpdate: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.subTotal = updatedItem.quantity * updatedItem.productPrice;
      }
      return state;
    },

    increaseItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.quantity = updatedItem.quantity + 1;
      }

      return state;
    },

    decreaseItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem && updatedItem.quantity > 1) {
        updatedItem.quantity = updatedItem.quantity - 1;
      }

      return state;
    },

    increaseDetailItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.value.detailsItem && state.value.detailsItem.id === id) {
        state.value.detailsItem.quantity += 1;
        state.value.quantity++;
        console.log(id);
      }
    },

    decreaseDetailItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (
        state.value.detailsItem &&
        state.value.detailsItem.id === id &&
        state.value.detailsItem.quantity > 1
      ) {
        state.value.detailsItem.quantity -= 1;
        state.value.quantity--;
      }
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const existItem = state.value.cartItems.find((item) => item.id === id);
      if (existItem) {
        const restItem = state.value.cartItems.filter((item) => item.id !== id);
        state.value.cartItems = [];
        state.value.cartItems.push(...restItem);
        state.value.quantity--;
      }

      return state;
    },
  },
});

export const {
  addToCart,
  cartUpdate,
  increaseItem,
  decreaseItem,
  removeItem,
  sendDetails,
  increaseDetailItem,
  decreaseDetailItem,
} = cart.actions;
export default cart.reducer;
