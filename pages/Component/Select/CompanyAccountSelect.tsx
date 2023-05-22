import { Select } from 'components/common';
import { AccountType, ItemPicker } from 'model';
import { useEffect, useState } from 'react';
import { getCompanyAccountsPicker } from 'services/picker.service';

interface CompanyAccountSelectComponentProps {
  fetch: 'Manual' | 'Auto';
  items?: ItemPicker[];
  type: AccountType;
  companyId: string;
  onChange?: (value: any) => void;
  size?: 'large' | 'middle' | 'small';
  value?: string;
}

export const CompanyAccountSelectComponent = (props: CompanyAccountSelectComponentProps) => {
  const { fetch, items, type, companyId, size } = props;
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
    setLoading(true);
    getCompanyAccountsPicker(type, companyId)
      .then((x) => {
        setData(x);
      })
      .catch((_) => setData([]))
      .finally(() => setLoading(false));
  }, [fetch === 'Auto']);

  useEffect(() => {
    setData(items as ItemPicker[]);
  }, [fetch === 'Manual']);

  return (
    <Select options={data} onChange={handleChange} size={size} loading={loading} value={seleted} />
  );
};
