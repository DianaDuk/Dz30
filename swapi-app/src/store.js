import {create} from 'zustand';

const useStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async (url) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(url);
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: 'Error fetching data', loading: false });
    }
  },

  clearData: () => set({ data: null })
}));

export default useStore;
