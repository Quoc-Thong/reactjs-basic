import { Select as Comp, SelectProps } from 'antd';

// icon
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { LoadingOutlined } from '@ant-design/icons';

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
import styles from './styles.module.less';

interface Props {
  size?: 'large' | 'middle' | 'small';
  disabled?: boolean;
  mode?: 'multiple' | 'tags';
  style?: CSS.Properties;
  className?: string;
}

const Select = (props: Props & SelectProps) => {
  const { size, disabled, className, style, children, loading, mode, ...rest } = props;
  const selectClasses = classNames(
    {
      [styles['custom-select']]: true,
      [styles[`custom-select-${size}`]]: true,
      [styles['custom-select-disabled']]: disabled,
      [styles['custom-select-mode']]: mode,
      [styles[`custom-select-mode-${size}`]]: true,
    },
    className,
  );

  const optionClasses = classNames({
    [styles['custom-option']]: true,
    [styles[`custom-option-${size}`]]: true,
  });

  const suffixIconClasses = classNames({
    [styles['custom-suffix-icon']]: true,
    [styles[`custom-suffix-icon-${size}`]]: true,
  });

  return (
    <Comp
      {...rest}
      size={size}
      disabled={disabled}
      className={selectClasses}
      style={style}
      popupClassName={optionClasses}
      loading={loading}
      mode={mode}
      suffixIcon={loading ? <LoadingOutlined /> : <ChevronDownIcon className={suffixIconClasses} />}
    >
      {children}
    </Comp>
  );
};

Select.defaultProps = {
  size: 'middle',
  disabled: false,
};

export default Select;
