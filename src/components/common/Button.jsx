/**
 * Button
 * Reusable accessible button and anchor component.
 * Fulfills HCI Principle 1: Consistency & Standards.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  iconPosition = 'left',
  ...rest
}) {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const classes = `btn btn-${variant} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
}
