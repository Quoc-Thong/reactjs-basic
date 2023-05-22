import React, { useState } from 'react'
import { Drawer as Draw, Form } from 'antd'
import { Button } from '../Button'
import { Select } from '../Select'
import styles from './styles.module.less'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

interface Props {
  children: any
}

const Drawer = (props: Props) => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button onClick={showDrawer}>{props.children}</Button>
      <Draw
        title='Advanced filters'
        placement='right'
        closable={false}
        onClose={onClose}
        open={open}
        className={styles.drawer}
        footer={[
          <div key={''} className={styles.footer}>
            <Button onClick={onClose}>
              <span>
                <ArrowPathIcon className='w-4  h-4' />
              </span>
              Reset
            </Button>
            <div className={styles['footer-button-right']}>
              <Button onClick={onClose}>Close</Button>
              <Button type='primary' onClick={onClose}>
                Apply
              </Button>
            </div>
          </div>,
        ]}
      >
        <Form layout='vertical' className={styles.form}>
          <Form.Item label='Commodity type'>
            <Select placeholder='Please select' />
          </Form.Item>
          <Form.Item label='Industry'>
            <Select placeholder='Please select' />
          </Form.Item>
          <Form.Item label='Status'>
            <Select placeholder='Please select' />
          </Form.Item>
          <Form.Item label='Warehouse'>
            <Select placeholder='Please select' />
          </Form.Item>
        </Form>
      </Draw>
    </>
  )
}

export default Drawer
