export interface ItemDetail {
  name: string
  quantity: number
  date: string
  des: string
  detail: string
}

export interface Environment {
  temporature: number
  packing: string
  environment: string
}

export interface ProductInfo {
  brand: string
  model: string
  number: number
  year: number
  manufacturing: number
  info: string
}

export default interface DetailProduct {
  id: string
  itemDetail: ItemDetail
  environment: Environment
  productInfo: ProductInfo
}
