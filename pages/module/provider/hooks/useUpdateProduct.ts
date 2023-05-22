import useAxios from 'pages/hooks/shared/useAxiosWrapper'
import Product from 'pages/type/Product'

function useUpdateProduct() {
  return useAxios<Product>(
    {
      method: 'PUT',
      url: `https://run.mocky.io/v3/71d6763e-9f24-495f-a7f5-4681cc76ae3d`,
    },
    {
      manual: true,
    },
  )
}

export default useUpdateProduct
