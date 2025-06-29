"use client";
import { create } from "zustand";
import { User } from "@/types/auth";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  reset: () => void;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    immer((set) => ({
      ...initialState,

      setUser: (user: User | null) => {
        set((state) => {
          state.user = user;
          state.isAuthenticated = !!user;
        });
      },

      setLoading: (loading: boolean) => {
        set((state) => {
          state.isLoading = loading;
        });
      },

      reset: () => {
        set((state) => {
          Object.assign(state, initialState);
        });
      },
    })),
    {
      name: "auth-store",
    }
  )
);
