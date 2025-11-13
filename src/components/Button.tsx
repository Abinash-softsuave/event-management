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
      'bg-gradient-to-r from-gold-dark to-gold text-black-rich hover:from-gold hover:to-gold-light shadow-md hover:shadow-lg font-bold',
    secondary:
      'bg-gradient-to-r from-black to-black-light text-gold hover:from-black-light hover:to-secondary-700 shadow-md hover:shadow-lg border border-gold',
    outline:
      'border-2 border-gold text-gold hover:bg-gold hover:text-black bg-transparent',
    ghost:
      'text-gold hover:bg-black-light hover:text-gold-light bg-transparent',
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
        focus:outline-none focus:ring-4 focus:ring-gold/30
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
