import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserState } from "./types";


export const useUserStrore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      setLoading: (value) => set(() => ({ loading: value })),
      setUser: (user) => set(() => ({ user: user })),
      delUser: () => set(() => ({ user: null })),
    }),
    { name: "user", partialize: (state) => ({ user: state.user }) }
  )
);
