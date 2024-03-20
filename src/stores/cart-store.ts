import { ProductProps } from "@/utils/data/products"
import { create } from "zustand"

export type ProductCartProps = ProductProps & {
  quantity: number
}



type StateProps = {
  products:  ProductCartProps[]
  add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  
  add: () => {},
}))
