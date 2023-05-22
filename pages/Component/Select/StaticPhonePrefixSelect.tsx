import { SelectProps, Select } from 'antd';
import CustomSelect from './Select';
import Image from 'next/image';
const { Option } = Select;

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
import styles from './phone-prefix.styles.module.less';

interface Props {
  size?: 'large' | 'middle' | 'small';
  style?: CSS.Properties;
  className?: string;
  children?: React.ReactNode;
}

const PHONE_PREFIX = [
  {
    value: '+84',
    label: '+84',
    flag: 'vn',
  },
  {
    value: '+33',
    label: '+33',
    flag: 'vn',
  },
];

const StaticPhonePrefixSelect = (props: Props & SelectProps) => {
  const { size, className, style, ...rest } = props;
  const selectClasses = classNames(className);
  const optionClasses = classNames({
    [styles[`custom-option-${size}`]]: true,
  });

  return (
    <CustomSelect {...rest} className={selectClasses} style={style} size={size}>
      {PHONE_PREFIX.map((item) => {
        return (
          <Option className={optionClasses} key={item.value} value={item.value} label={item.value}>
            <div className={styles['option-item']}>
              <Image
                src={`/images/icons/flag_${item.flag}.svg`}
                width="32"
                height="22"
                alt={item.label}
              />
              <span className={styles['prefix-phone']}>{item.label}</span>
            </div>
          </Option>
        );
      })}
    </CustomSelect>
  );
};

StaticPhonePrefixSelect.defaultProps = {
  size: 'middle',
};

export default StaticPhonePrefixSelect;
