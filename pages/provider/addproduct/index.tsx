import React from 'react'

import styles from './styles.module.less'

import { Button } from 'pages/Component/Button'
import { Card, Col, DatePicker, DatePickerProps, Form, Row } from 'antd'
import { Input, TextArea } from 'pages/Component/Input'
import { Select } from 'pages/Component/Select'
import Link from 'next/link'

function AddProduct() {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span>New item</span>
        <div>
          <Button>
            <Link href='/'>Close</Link>
          </Button>
          <Button type='primary'>Save</Button>
        </div>
      </div>
      {/*  */}
      <Form
        name='basic'
        className={styles.form}
        autoComplete='off'
        layout='vertical'
      >
        <div className={styles['card-top']}>
          <Card>
            <span className={styles['card-title-top']}>Item details</span>
            <div className={styles['card-content-top']}>
              <Row>
                <Col>
                  <Form.Item label='Item name'>
                    <Input type='' />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label='Quantity'>
                    <Input type='' />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Item label='Creation date'>
                    <DatePicker onChange={onChange} />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label='Description'>
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Card>
          {/*  */}
          <Card className={styles['card-top-right']}>
            <span className={styles['card-top-right-title']}>Environment</span>
            <Row>
              <Form.Item label='Type of warehouse'>
                <Select placeholder='Please select' />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label='Storage temperature (°C)'>
                <Input />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item label='Packing specifications'>
                <Select placeholder='Please select' />
              </Form.Item>
            </Row>
          </Card>
        </div>
        {/*  */}
        <Card className={styles['card-bottom']}>
          <span className={styles['card-bottom-title']}>
            Production information
          </span>
          <Row className='gap-4'>
            <Col>
              <Form.Item label='Brand'>
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label='Model'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row className={`${styles['card-bottom-row']}`}>
            <Col>
              <Form.Item label='Contract number'>
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label='Production year'>
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label='Manufacturing code location'>
                <Input />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item label='Factory codes (FC)'>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </div>
  )
}

export default AddProduct
