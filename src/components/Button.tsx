import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

/**
 * Reusable Button component with multiple variants and animations
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
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
    >
      {children}
    </motion.button>
  );
};

export default Button;
