import React, { useState } from 'react'
import { Form, Input, InputNumber, Table } from 'antd'
import useGetProduct from '../../hooks/useGetProduct'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Item {
  key: string
  name: string
  age: number
  address: string
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: any
  inputType: 'number' | 'text'
  record: Item
  index: number
  children: React.ReactNode
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

// const originData: Item[] = []

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   })
// }

const App: React.FC = () => {
  const [form] = Form.useForm()
  const [{ data: productList }] = useGetProduct()
  const [product, setProduct] = useState()
  // const [data, setData] = useState(originData || '')
  // const [editingKey, setEditingKey] = useState('')
  // const isEditing = (record: Item) => record.key === editingKey

  // const edit = (record: Partial<Item> & { key: React.Key }) => {
  //   form.setFieldsValue({ name: '', age: '', address: '', ...record })
  //   setEditingKey(record.key)
  // }

  // const cancel = () => {
  //   setEditingKey('')
  // }

  // const save = async (key: React.Key) => {
  //   try {
  //     const row = (await form.validateFields()) as Item

  //     const newData = [...data]
  //     const index = newData.findIndex(item => key === item.key)
  //     if (index > -1) {
  //       const item = newData[index]
  //       newData.splice(index, 1, {
  //         ...item,
  //         ...row,
  //       })
  //       setData(newData)
  //       setEditingKey('')
  //     } else {
  //       newData.push(row)
  //       setData(newData)
  //       setEditingKey('')
  //     }
  //   } catch (errInfo) {
  //     console.log('Validate Failed:', errInfo)
  //   }
  // }

  const columns = [
    {
      title: 'NO.',
      dataIndex: 'no',
      align: 'right' as 'right',
      editable: true,
      width: '4%',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      editable: true,
      width: '6%',
      render: (text: string) => <Link href={`/provider/${text}`}>{text}</Link>,
    },
    {
      title: 'NAME',
      dataIndex: 'itemName',
      editable: true,
      width: '15%',
    },
    {
      title: 'DESCRIPTION',
      dataIndex: 'des',
      editable: true,
      width: '10%',
    },
    {
      title: 'WAREHOUSE TYPE',
      dataIndex: 'warehouseType',
      editable: true,
      width: '15%',
    },
    {
      title: 'ITEM GROUP',
      dataIndex: 'itemGroup',
      editable: true,
      width: '10%',
    },
    {
      title: 'CREATION DATE',
      dataIndex: 'date',
      editable: true,
      align: 'right' as 'right',
      width: '10%',
    },
    {
      title: 'UNIT PRICE (VND)',
      dataIndex: 'price',
      editable: true,
      align: 'right' as 'right',
      width: '10%',
    },
    {
      title: 'ACTION ',
      dataIndex: 'action',
      align: 'center' as 'center',
      width: '14%',
      render: () => (
        <span className='flex justify-center gap-8'>
          <Link
            href={`/provider/${productList?.id}`}
            className='flex justify-center'
          >
            <PencilIcon className='w-4 h-4' />
          </Link>
          <TrashIcon className='w-4 h-4' />
        </span>
      ),
    },
  ]

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    }
  })

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        dataSource={productList?.product}
        columns={mergedColumns}
        rowClassName='editable-row'
        rowKey={'no'}
      />
    </Form>
  )
}

export default App
