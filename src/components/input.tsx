interface InputProps {
  /**
   * How large should the button be?
   */
  size?: 'medium' | 'large';
  /**
   * What placeholder color to use
   */
  placeholder?: string;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Optional change handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export function Input({
  size = 'large',
  placeholder,
  value,
  onChange,
  label,
  ...props
}: InputProps) {
  const sizeAdjusted = size === 'large' ? '3xl' : 'xl';
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={['input', 'w-full', `text-${sizeAdjusted}`].join(' ')}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
