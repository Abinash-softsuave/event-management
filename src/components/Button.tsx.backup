import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Reusable Button component with multiple variants and animations
 *
 * @param {string} variant - Button style variant: 'primary', 'secondary', 'outline', 'ghost'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} fullWidth - Whether button should take full width
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {string} type - Button type: 'button', 'submit', 'reset'
 * @param {boolean} disabled - Whether button is disabled
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) => {
  // Variant styles
  const variants = {
    primary:
      'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-md hover:shadow-lg',
    secondary:
      'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 shadow-md hover:shadow-lg',
    outline:
      'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 bg-transparent',
    ghost:
      'text-primary-600 hover:bg-primary-50 bg-transparent',
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Disabled styles
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? disabledStyles : ''}
        font-semibold rounded-lg
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-4 focus:ring-primary-200
        ${className}
      `}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
};

export default Button;
