import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';

/**
 * Events Page - List of past and upcoming events
 */
const Events = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Our Events - EventPro Event Management';
    window.scrollTo(0, 0);
  }, []);

  // Events data
  const allEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c936?w=800',
      title: 'Summer Music Festival 2024',
      date: 'June 15, 2024',
      location: 'Central Park, New York',
      description: 'An unforgettable outdoor music experience featuring top artists from around the world with food trucks and art installations.',
      category: 'Music',
      status: 'upcoming',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      title: 'Tech Innovation Summit',
      date: 'July 20, 2024',
      location: 'Convention Center, San Francisco',
      description: 'Join industry leaders discussing the future of technology and innovation with keynote speakers and networking sessions.',
      category: 'Corporate',
      status: 'upcoming',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      title: 'Elegant Wedding Celebration',
      date: 'May 10, 2024',
      location: 'Garden Resort, Miami',
      description: 'A beautiful wedding celebration with stunning floral arrangements, live music, and gourmet dining.',
      category: 'Wedding',
      status: 'past',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      title: 'Birthday Bash Extravaganza',
      date: 'April 28, 2024',
      location: 'Private Villa, Los Angeles',
      description: 'A milestone 50th birthday celebration featuring live entertainment, themed decorations, and a surprise fireworks display.',
      category: 'Birthday',
      status: 'past',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
      title: 'Annual Charity Gala',
      date: 'August 5, 2024',
      location: 'Grand Hotel, Chicago',
      description: 'An elegant fundraising gala with silent auction, three-course dinner, and live performances.',
      category: 'Gala',
      status: 'upcoming',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      title: 'Product Launch Event',
      date: 'March 15, 2024',
      location: 'Innovation Hub, Austin',
      description: 'A spectacular product reveal with interactive demonstrations, guest speakers, and networking opportunities.',
      category: 'Corporate',
      status: 'past',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800',
      title: 'Winter Wonderland Festival',
      date: 'December 20, 2024',
      location: 'Mountain Resort, Colorado',
      description: 'A magical winter festival with ice sculptures, holiday markets, and festive entertainment.',
      category: 'Festival',
      status: 'upcoming',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800',
      title: 'Spring Garden Wedding',
      date: 'April 5, 2024',
      location: 'Botanical Gardens, Seattle',
      description: 'An intimate outdoor wedding surrounded by blooming flowers and natural beauty.',
      category: 'Wedding',
      status: 'past',
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
      title: 'Fashion Show Extravaganza',
      date: 'September 10, 2024',
      location: 'Downtown Theater, New York',
      description: 'A high-energy fashion show featuring emerging designers and industry professionals.',
      category: 'Fashion',
      status: 'upcoming',
    },
  ];

  // Filter events
  const filteredEvents = filter === 'all'
    ? allEvents
    : allEvents.filter(event => event.status === filter);

  // Filter options
  const filters = [
    { label: 'All Events', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Past Events', value: 'past' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of successful events and see what we're planning next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === filterOption.value
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    category={event.category}
                    status={event.status}
                    onClick={() => {}}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  No Events Found
                </h3>
                <p className="text-gray-600">
                  No events match the selected filter. Try selecting a different option.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 text-white text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Planning an Event?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let us help you create an unforgettable experience. Contact our team to discuss your event ideas.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
