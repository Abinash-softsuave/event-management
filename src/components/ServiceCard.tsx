import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Service Card component for displaying service offerings
 *
 * @param {string} icon - Service icon (emoji or SVG path)
 * @param {string} title - Service title
 * @param {string} description - Service description
 * @param {array} features - Array of feature strings
 * @param {function} onClick - Click handler
 */
const ServiceCard = ({ icon, title, description, features = [], onClick }) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      {/* Icon */}
      <div className="mb-6">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <svg
                className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all pt-4 border-t border-gray-100">
        <span>Learn More</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};

export default ServiceCard;
