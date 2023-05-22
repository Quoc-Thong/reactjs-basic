import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
import styles from './styles.module.less';

const { TextArea } = Input;

interface Props {
  size?: 'large' | 'middle' | 'small';
  style?: CSS.Properties;
  className?: string;
}

const CTextArea = (props: Props & TextAreaProps) => {
  const { size, className, style, ...rest } = props;
  const selectClasses = classNames(
    {
      [styles[`custom-input-error`]]: props['aria-invalid'],
    },
    className,
  );

  return <TextArea {...rest} className={selectClasses} style={style} size={size} />;
};

CTextArea.defaultProps = {
  size: 'middle',
};

export default CTextArea;
