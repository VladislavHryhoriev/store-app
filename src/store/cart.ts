import { create } from "zustand";

interface CartState {
  cart: any[];
  addItem: (item: any) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addItem: (item: any) => set((state) => ({ cart: [...state.cart, item] })),
}));
