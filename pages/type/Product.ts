import { Environment, ItemDetail, ProducInfo } from './DetailProduct'

export default interface Product {
  product: []
  no: number
  id: string
  itemName: string
  des: string
  warehouseType: string
  itemGroup: string
  date: string
  price: number
  itemDetail: ItemDetail[]
  productInfo: ProducInfo[]
  environment: Environment[]
}
