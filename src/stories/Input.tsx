interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function Input({
  primary = false,
  size = 'medium',
  placeholder,
  value,
  onChange,
  backgroundColor,
  label,
  ...props
}: InputProps) {
  const mode = primary ? 'storybook-input--primary' : 'storybook-input--secondary';
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input w-full text-3xl"
      value={value}
      onChange={onChange}
      // className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
