import { create } from 'zustand'

export const userStore = create((set) => ({
    user: {
        full_name: null,
        id:        null,
        major:     null,
    },

    updateUser: (newUser) =>
        set((state) => ({
        user: { ...state.user, ...newUser },
        })),
}));
