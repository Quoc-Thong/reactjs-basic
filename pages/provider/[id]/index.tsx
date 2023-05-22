import { Card } from 'antd'
import styles from './styles.module.less'
import { Button } from 'pages/Component/Button'
import useGetDetailProduct from 'pages/module/provider/hooks/useGetDetailProduct'

function DetailId() {
  const [{ data: detailList }] = useGetDetailProduct()
  console.log('detailList ', detailList)
  console.log('detailList?.producInfo?.brand ', detailList?.productInfo?.brand)

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={styles.header}>
        <span>{detailList?.id}</span>
        <div className={styles['right-button']}>
          <Button size='small'>Close</Button>
          <Button size='small' danger>
            Delete
          </Button>
          <Button type='primary' size='small'>
            Edit
          </Button>
        </div>
      </div>
      <div className={styles['card-top']}>
        <Card>
          <span>{detailList?.itemDetail?.name}</span>
          <table className={styles['table']}>
            <tbody>
              <tr>
                <td>Item name</td>
                <td>{detailList?.itemDetail?.name}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{detailList?.itemDetail?.quantity}</td>
              </tr>
              <tr>
                <td>Creation date</td>
                <td>{detailList?.itemDetail?.date}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{detailList?.itemDetail?.des}</td>
              </tr>
            </tbody>
          </table>
        </Card>
        {/*  */}
        <Card className={styles['card-top-right']}>
          <span>{detailList?.itemDetail?.name}</span>
          <table className={styles['table']}>
            <tbody>
              <tr>
                <td>Type of warehouse</td>
                <td>{detailList?.itemDetail?.name}</td>
              </tr>
              <tr>
                <td>Storage temperature (°C)</td>
                <td>{detailList?.environment?.temporature}</td>
              </tr>
              <tr>
                <td>Packing specifications</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      {/*  */}
      <Card className={styles['card-bottom']}>
        <span>{detailList?.productInfo?.info}</span>
        <table className={styles['table']}>
          <tbody>
            <tr>
              <td>Brand</td>
              <td>{detailList?.productInfo?.brand}</td>
            </tr>
            <tr>
              <td>Model</td>
              <td>{detailList?.productInfo?.model}</td>
            </tr>
            <tr>
              <td>Contrant number</td>
              <td>{detailList?.productInfo?.number}</td>
            </tr>{' '}
            <tr>
              <td>Product year</td>
              <td>{detailList?.productInfo?.year}</td>
            </tr>
            <tr>
              <td>Manufacturing code location</td>
              <td>{detailList?.productInfo?.model}</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default DetailId
