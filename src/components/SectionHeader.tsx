import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Reusable Section Header component with animations
 *
 * @param {string} subtitle - Small text above the title
 * @param {string} title - Main heading text
 * @param {string} description - Description text below title
 * @param {string} align - Text alignment: 'left', 'center', 'right'
 * @param {string} className - Additional CSS classes
 */
const SectionHeader = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${alignmentClasses[align]} mb-12 ${className}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wider mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4"
        >
          {title}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

SectionHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default SectionHeader;
