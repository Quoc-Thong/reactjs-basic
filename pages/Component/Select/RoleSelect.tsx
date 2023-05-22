import { Select } from 'components/common';
import Enumerable from 'linq';
import { ItemPicker } from 'model';
import React from 'react';
import { useEffect, useState } from 'react';
import { getRolesPicker } from 'services/picker.service';
import { displayText } from 'utils/common/display.text';

interface RoleSelectComponentProps {
  fetch: 'Manual' | 'Auto';
  items?: ItemPicker[];
  onChange?: (value: string) => void;
  value?: string;
}

const getValidData = (items: ItemPicker[]) => {
  if (!items?.length) return [];
  return Enumerable.from(items ?? [])
    .select((x) => {
      return {
        ...x,
        value: x._id,
        label: displayText(x as any),
      };
    })
    .toArray();
};

export const RoleSelectComponent = (props: RoleSelectComponentProps) => {
  const { fetch, items, onChange } = props;
  const [seleted, setSelected] = useState();
  const [data, setData] = useState<ItemPicker[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (accountId: string) => {
    onChange && onChange(accountId);
  };

  useEffect(() => {
    setLoading(true);
    getRolesPicker()
      .then((x) => {
        const items = getValidData(x as any);
        setData(items);
      })
      .catch((_) => setData([]))
      .finally(() => setLoading(false));
  }, [fetch === 'Auto']);

  useEffect(() => {
    const validData = getValidData(items as any);
    setData(validData);
  }, [fetch === 'Manual']);

  useEffect(() => {
    setSelected(props.value as any);
  }, [props.value]);

  return <Select options={data} onChange={handleChange} loading={loading} value={seleted} />;
};
export default RoleSelectComponent;
