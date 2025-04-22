import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: CartItem) => "success" | "failure";
  addMultipleToCart: (items: CartItem[]) => "success" | "failure";
  removeFromCart: (id: string) => "success" | "failure";
  updateQuantity: (id: string, quantity: number) => "success" | "failure";
  clearCart: () => "success";
};

export const useCartStore =
  typeof window !== "undefined"
    ? create<CartState>()(
        persist(
          (set, get) => {
            const updateTotals = (items: CartItem[]) => {
              const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
              const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
              set({ items, totalItems, totalPrice });
            };

            return {
              items: [],
              totalItems: 0,
              totalPrice: 0,

              addToCart: (item) => {
                try {
                  const currentItems = get().items;
                  const existing = currentItems.find((i) => i.id === item.id);
                  const newItems = existing
                    ? currentItems.map((i) =>
                        i.id === item.id
                          ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                          : i
                      )
                    : [...currentItems, { ...item, quantity: item.quantity || 1 }];
                  updateTotals(newItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              addMultipleToCart: (newItems) => {
                try {
                  const currentItems = [...get().items];
                  newItems.forEach((newItem) => {
                    const existing = currentItems.find((i) => i.id === newItem.id);
                    if (existing) {
                      existing.quantity += newItem.quantity;
                    } else {
                      currentItems.push({ ...newItem, quantity: newItem.quantity || 1 });
                    }
                  });
                  updateTotals(currentItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              removeFromCart: (id) => {
                try {
                  const updatedItems = get().items.filter((item) => item.id !== id);
                  updateTotals(updatedItems);
                  return "success";
                } catch {
                  return "failure";
                }
              },

              updateQuantity: (id, quantity) => {
                try {
                  if (quantity <= 0) {
                    const updatedItems = get().items.filter((item) => item.id !== id);
                    updateTotals(updatedItems);
                  } else {
                    const updatedItems = get().items.map((item) =>
                      item.id === id ? { ...item, quantity } : item
                    );
                    updateTotals(updatedItems);
                  }
                  return "success";
                } catch {
                  return "failure";
                }
              },

              clearCart: () => {
                updateTotals([]);
                return "success";
              },
            };
          },
          {
            name: "cart-storage",
            onRehydrateStorage: () => (state, error) => {
              if (error) {
                console.error("❌ Error during rehydration:", error);
              } else if (state?.items) {
                const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
                const totalPrice = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0);
                state.totalItems = totalItems;
                state.totalPrice = totalPrice;
              }
            },
          }
        )
      )
    : () =>
        ({
          items: [],
          totalItems: 0,
          totalPrice: 0,
          addToCart: () => "failure",
          addMultipleToCart: () => "failure",
          removeFromCart: () => "failure",
          updateQuantity: () => "failure",
          clearCart: () => "success",
        } as CartState);
