import { Input, InputProps } from 'antd';

// styles
import classNames from 'classnames';
import * as CSS from 'csstype';
const { Search } = Input;

interface Props {
  size?: 'large' | 'middle' | 'small';
  style?: CSS.Properties;
  className?: string;
}

const CSearch = (props: Props & InputProps) => {
  const { className, style, ...rest } = props;
  const searchClasses = classNames({}, className);

  return <Search {...rest} className={searchClasses} style={style} />;
};

CSearch.defaultProps = {
  size: 'middle',
};

export default CSearch;
