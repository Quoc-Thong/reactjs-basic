import { InputNumber as Comp, InputNumberProps } from 'antd';

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
import styles from './inputNumber.styles.module.less';

interface Props {
  size?: 'large' | 'middle' | 'small';
  style?: CSS.Properties;
  className?: string;
}

const Input = (props: Props & InputNumberProps) => {
  const { size, className, addonBefore, addonAfter, style, ...rest } = props;
  const selectClasses = classNames(
    {
      [styles['custom-input-number']]: true,
      [styles[`custom-input-number-${size}`]]: true,
      [styles[`custom-input-number-addon-before`]]: addonBefore,
      [styles[`custom-input-number-addon-after`]]: addonAfter,
      [styles[`custom-input-number-error`]]: props['aria-invalid'],
    },
    className,
  );

  return (
    <Comp
      {...rest}
      className={selectClasses}
      style={style}
      size={size}
      addonBefore={addonBefore}
      addonAfter={addonAfter}
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
    />
  );
};

Input.defaultProps = {
  size: 'middle',
};

export default Input;
