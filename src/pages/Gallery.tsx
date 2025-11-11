import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import useModal from '../hooks/useModal';

/**
 * Gallery Page - Grid-based image gallery with lightbox modal
 */
const Gallery = () => {
  const { isOpen, openModal, closeModal, modalContent } = useModal();
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    document.title = 'Gallery - EventPro Event Management';
    window.scrollTo(0, 0);
  }, []);

  // Gallery images data
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c936?w=1200',
      category: 'wedding',
      title: 'Elegant Garden Wedding',
      description: 'Beautiful outdoor ceremony with stunning floral arrangements',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200',
      category: 'corporate',
      title: 'Corporate Conference',
      description: 'Professional business event with modern setup',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200',
      category: 'wedding',
      title: 'Beach Wedding Ceremony',
      description: 'Romantic beachside celebration at sunset',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
      category: 'party',
      title: 'Birthday Celebration',
      description: 'Vibrant birthday party with colorful decorations',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200',
      category: 'gala',
      title: 'Charity Gala Evening',
      description: 'Elegant fundraising event with formal setting',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200',
      category: 'corporate',
      title: 'Product Launch Event',
      description: 'Innovative product showcase with interactive displays',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200',
      category: 'party',
      title: 'Dance Floor Action',
      description: 'Energetic celebration with professional lighting',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200',
      category: 'wedding',
      title: 'Reception Decoration',
      description: 'Beautifully decorated reception hall',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200',
      category: 'gala',
      title: 'Fashion Show',
      description: 'High-end fashion event with runway setup',
    },
    {
      id: 10,
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200',
      category: 'party',
      title: 'Festival Celebration',
      description: 'Outdoor festival with vibrant atmosphere',
    },
    {
      id: 11,
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200',
      category: 'wedding',
      title: 'Wedding Table Setting',
      description: 'Elegant table arrangements with floral centerpieces',
    },
    {
      id: 12,
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200',
      category: 'corporate',
      title: 'Team Building Event',
      description: 'Corporate team building activity outdoors',
    },
  ];

  // Filter categories
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Weddings', value: 'wedding' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Parties', value: 'party' },
    { label: 'Galas', value: 'gala' },
  ];

  // Filter images
  const filteredImages = filter === 'all'
    ? images
    : images.filter(image => image.category === filter);

  // Open image in modal
  const handleImageClick = (image) => {
    openModal(image);
  };

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
              Event <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Browse through our collection of memorable events and celebrations we've brought to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === category.value
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onClick={() => handleImageClick(image)}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-card hover:shadow-hover transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-display font-bold text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={modalContent.url}
                alt={modalContent.title}
                className="w-full h-full object-contain rounded-lg"
              />
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h2 className="text-white font-display font-bold text-2xl mb-2">
                  {modalContent.title}
                </h2>
                <p className="text-white/90 text-lg">
                  {modalContent.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
