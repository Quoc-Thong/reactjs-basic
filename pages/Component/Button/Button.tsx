import { Button as Comp, ButtonProps } from "antd";
import { ButtonType } from "antd/es/button";

// styles
import classNames from "classnames";
import * as CSS from "csstype";
import styles from "./styles.module.less";

interface Props {
  size?: "large" | "middle" | "small";
  disabled?: boolean;
  style?: CSS.Properties;
  className?: string;
  type?: ButtonType | "secondary" | any;
}

const Button = (props: Props & ButtonProps) => {
  const { size, disabled, className, type, style, children, ...rest } = props;
  const buttonClasses = classNames(
    {
      [styles["custom-button"]]: true,
      [styles[`custom-button-${size}`]]: true,
      [styles[`custom-button-${type}`]]: type,
      [styles["custom-button-disabled"]]: disabled,
    },
    className
  );

  return (
    <Comp
      {...rest}
      size={size}
      disabled={disabled}
      className={buttonClasses}
      style={style}
      type={type}
    >
      {children}
    </Comp>
  );
};

Button.defaultProps = {
  size: "middle",
  disabled: false,
};

export default Button;
