import styles from '../styles/styles.module.less'
import {
  ArrowUpTrayIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

import { PlusIcon } from '@heroicons/react/20/solid'
import Button from 'pages/Component/Button/Button'
import Select from 'pages/Component/Select/Select'
import { Input } from 'pages/Component/Input'
import Upload from 'antd/es/upload'
import { Drawer } from 'pages/Component/Drawer'
import { Table } from '../Table'

function Home() {
  const options = [
    {
      value: 'Option 1',
      label: 'Option 1',
    },
    {
      value: 'Option 2',
      label: 'Option 2',
    },
  ]

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <span>Item Master</span>
        <div className={styles['right-button']}>
          <Upload>
            <Button size='small' icon={<ArrowUpTrayIcon className='h-4 w-4' />}>
              Import file
            </Button>
          </Upload>
          <Button type='primary' size='small'>
            <PlusIcon className='w-4 h-4' /> Add new item
          </Button>
          <Button type='primary' size='small'>
            <PlusIcon className='w-4 h-4' /> Add new item
          </Button>
        </div>
      </div>
      <div className={styles.container}>
        <div className='flex '>
          <div className={styles.input}>
            <Select defaultValue='All' options={options} />
            <Input
              placeholder='Search for  SKU, Description...'
              style={{ width: '100%' }}
            />
          </div>
          <div className='flex gap-2 pl-3'>
            <Button icon={<MagnifyingGlassIcon className='w-4 h-4' />}>
              Search
            </Button>
            <Drawer>
              <FunnelIcon className='w-4 h-4' />
              Filter
            </Drawer>
            <Button>Reset</Button>
          </div>
        </div>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home
