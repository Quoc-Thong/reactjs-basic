import useAxios from 'pages/hooks/shared/useAxiosWrapper'
import Product from 'pages/type/Product'

function useGetProduct() {
  return useAxios<Product>(
    {
      method: 'GET',
      url: `https://run.mocky.io/v3/a24452ed-c75f-4e45-8484-157ed8e1a27a`,
    },
    {
      manual: false,
    },
  )
}

export default useGetProduct
