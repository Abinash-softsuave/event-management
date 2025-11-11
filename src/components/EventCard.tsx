import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Event Card component for displaying event information
 *
 * @param {string} image - Event image URL
 * @param {string} title - Event title
 * @param {string} date - Event date
 * @param {string} location - Event location
 * @param {string} description - Event description
 * @param {string} category - Event category/type
 * @param {string} status - Event status: 'upcoming', 'past', 'ongoing'
 * @param {function} onClick - Click handler
 */
const EventCard = ({
  image,
  title,
  date,
  location,
  description,
  category,
  status = 'upcoming',
  onClick,
}) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const statusColors = {
    upcoming: 'bg-secondary-100 text-secondary-700',
    past: 'bg-gray-100 text-gray-700',
    ongoing: 'bg-accent-100 text-accent-700',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
      onClick={onClick}
    >
      {/* Event Image */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`${statusColors[status]} px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide`}
          >
            {status}
          </span>
        </div>
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        {/* Date and Location */}
        <div className="flex flex-col gap-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-primary-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {description}
          </p>
        )}

        {/* View Details Link */}
        <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
          <span>View Details</span>
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
      </div>
    </motion.div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string,
  category: PropTypes.string,
  status: PropTypes.oneOf(['upcoming', 'past', 'ongoing']),
  onClick: PropTypes.func,
};

export default EventCard;
