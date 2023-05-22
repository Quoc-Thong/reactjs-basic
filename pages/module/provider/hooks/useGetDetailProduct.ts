import useAxios from 'pages/hooks/shared/useAxiosWrapper'
import DetailProduct from 'pages/type/DetailProduct'

function useGetDetailProduct() {
  return useAxios<DetailProduct>(
    {
      method: 'GET',
      url: `https://run.mocky.io/v3/724d6135-908c-4d0a-9c91-50132578c583`,
    },
    {
      manual: false,
    },
  )
}

export default useGetDetailProduct
