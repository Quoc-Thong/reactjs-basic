import styles from './account-type.styles.module.less';

import { Select } from 'antd';
import CustomSelect from './Select';
import { AccountType, ItemPicker } from 'model';
import { useEffect, useState } from 'react';
import { getAccountsByTypePicker } from 'services/picker.service';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Option } = Select;

interface AccountTypeSelectComponentProps {
  fetch: 'Manual' | 'Auto';
  items?: ItemPicker[];
  type: AccountType;
  onChange?: (value: any) => void;
  size?: 'large' | 'middle' | 'small';
  value?: string;
  placeholder?: string;
}

export const AccountTypeSelectComponent = (props: AccountTypeSelectComponentProps) => {
  const { fetch, items, type, placeholder } = props;
  const [seleted, setSelected] = useState();
  const [data, setData] = useState<ItemPicker[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (accountId: string) => {
    props.onChange && props.onChange(accountId);
  };

  useEffect(() => {
    setSelected(props.value as any);
  }, [props.value]);

  useEffect(() => {
    if (fetch === 'Auto') {
      setLoading(true);
      getAccountsByTypePicker(type)
        .then((response) => {
          setData(response);
        })
        .catch((_) => setData([]))
        .finally(() => setLoading(false));
    } else {
      setData(items as ItemPicker[]);
    }
  }, [fetch, items, type]);

  return (
    <CustomSelect
      onChange={handleChange}
      loading={loading}
      value={seleted}
      className={styles['custom-select']}
      placeholder={placeholder}
    >
      {data?.map((item: any) => {
        return (
          <Option
            className={styles['custom-option']}
            key={item.value}
            value={item.value}
            label={item.value}
          >
            <div className={styles['option-item']}>
              <span className="text-primary">{item.label}</span>
              <div className="flex gap-2">
                {item?.mobile && (
                  <div className={'flex gap-2'}>
                    <PhoneOutlined className="text-primary color-neutral-500" />
                    <span className="text-primary color-neutral-500">{item?.mobile}</span>
                  </div>
                )}
                {item?.email && (
                  <div className={'flex gap-2'}>
                    <MailOutlined className="text-primary color-neutral-500" />
                    <span className="text-primary color-neutral-500">{item?.email}</span>
                  </div>
                )}
              </div>
            </div>
          </Option>
        );
      })}
    </CustomSelect>
  );
};
