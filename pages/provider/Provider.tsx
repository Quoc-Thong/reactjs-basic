import styles from './styles.module.less'
import { DatePicker, Form, Upload, message } from 'antd'
import {
  ArrowUpTrayIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { Button } from 'pages/Component/Button'
import { Select } from 'pages/Component/Select'
import { Input } from 'pages/Component/Input'
import { Drawer } from 'pages/Component/Drawer'
import { Table } from 'pages/module/provider/ui/Table'
import Link from 'next/link'
import { useState } from 'react'
import { Modal } from 'pages/Component/Modal'

export default function Provider() {
  const options = [
    {
      value: 'SKU',
      label: 'SKU',
    },
    {
      value: 'Item cde',
      label: 'Item cde',
    },
    {
      value: 'Item name',
      label: 'Item name',
    },
    {
      value: 'Description',
      label: 'Description',
    },
    {
      value: 'Warehouse type',
      label: 'Warehouse type',
    },
  ]

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const dateFormat = 'DD/MM/YYYY'

  const [messageApi, contextHolder] = message.useMessage()

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    })
    setIsModalOpen(false)
  }

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
          <Button size='small' onClick={showModal}>
            <PlusIcon className='w-4 h-4' /> Add new item
          </Button>
          <Button type='primary' size='small'>
            <Link href={`/provider/addproduct`} className='flex justify-center'>
              <PlusIcon className='w-4 h-4' /> Add new item
            </Link>
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
          {/* <Example /> */}
        </div>
      </div>
      {/* Modal */}
      {contextHolder}
      <Modal
        title='Add new item'
        open={isModalOpen}
        onCancel={handleCancel}
        className={styles.modal}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Return
          </Button>,
          <Button key='submit' type='primary' onClick={success}>
            Submit
          </Button>,
        ]}
      >
        <Form layout='vertical' className={styles.form}>
          <Form.Item label='Item name'>
            <Input />
          </Form.Item>
          <Form.Item label='Quantity'>
            <Input />
          </Form.Item>
          <Form.Item label='Date creation'>
            <DatePicker placeholder='DD/MM/YYYY ' format={dateFormat} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
