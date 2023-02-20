import { create } from "zustand"

interface FilterState {
  searchTerms: string
  change: (terms: string) => void
}

const useFilterStore = create<FilterState>()((set) => ({
  searchTerms: "",
  change: (terms) => set((state) => ({ searchTerms: terms })),
}))

export default useFilterStore
