import { Input as Comp, InputProps } from 'antd';

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
import styles from './styles.module.less';

interface Props {
  size?: 'large' | 'middle' | 'small';
  style?: CSS.Properties;
  className?: string;
}

const Input = (props: Props & InputProps) => {
  const { size, className, addonBefore, style, ...rest } = props;
  const selectClasses = classNames({
    [styles['custom-input']]: true,
    [styles[`custom-input-${size}`]]: true,
    [styles[`custom-input-addon-before`]]: addonBefore,
    [styles[`custom-input-error`]]: props['aria-invalid'],
  }, className);

  return (
    <Comp {...rest} className={selectClasses} style={style} size={size} addonBefore={addonBefore} />
  );
};

Input.defaultProps = {
  size: 'middle',
};

export default Input;
