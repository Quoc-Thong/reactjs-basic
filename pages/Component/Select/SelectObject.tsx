import { Select, SelectProps } from 'antd';

const { Option } = Select;
export type ObjectArray = Record<string, any>[];

interface SelectObjectProps {
  handleChange?: (...args: any[]) => void;
  options: ObjectArray;
  labelField: string;
  selectProps?: SelectProps;
  optionKeyField: string;

  onChange?: (...args: any[]) => void;
  value?: any;
}

const SelectObject: React.FC<SelectObjectProps> = ({
  options,
  labelField,
  optionKeyField,
  onChange,
  value,
  selectProps,
}) => {
  const onCurrencyChange = (value: any) => {
    const selectedOption = options.find((opt) => opt?.[optionKeyField] === value);
    onChange?.(selectedOption);
  };
  return (
    <Select {...selectProps} value={value?.[optionKeyField]} onChange={onCurrencyChange}>
      {options?.map((option) => (
        <Option key={option?.[optionKeyField]}>{option?.[labelField]}</Option>
      ))}
    </Select>
  );
};

export default SelectObject;
