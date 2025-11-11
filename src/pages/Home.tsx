import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * Home Page - Landing page with hero section, about preview, services, events, and testimonials
 */
const Home = () => {
  const { ref: aboutRef, isInView: aboutInView } = useScrollAnimation();
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation();

  // Set page title
  useEffect(() => {
    document.title = 'EventPro - Professional Event Management Services';
  }, []);

  // Sample data for featured events
  const featuredEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c936?w=800',
      title: 'Summer Music Festival 2024',
      date: 'June 15, 2024',
      location: 'Central Park, New York',
      description: 'An unforgettable outdoor music experience featuring top artists from around the world.',
      category: 'Music',
      status: 'upcoming',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
      title: 'Tech Innovation Summit',
      date: 'July 20, 2024',
      location: 'Convention Center, San Francisco',
      description: 'Join industry leaders discussing the future of technology and innovation.',
      category: 'Corporate',
      status: 'upcoming',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
      title: 'Elegant Wedding Celebration',
      date: 'May 10, 2024',
      location: 'Garden Resort, Miami',
      description: 'A beautiful wedding celebration with stunning decor and perfect execution.',
      category: 'Wedding',
      status: 'past',
    },
  ];

  // Sample services data
  const services = [
    {
      icon: '💒',
      title: 'Wedding Planning',
      description: 'Create your dream wedding with our expert planning and coordination services. From intimate ceremonies to grand celebrations.',
      features: ['Venue Selection', 'Vendor Coordination', 'Day-of Management'],
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional corporate event management for conferences, seminars, product launches, and team building activities.',
      features: ['Conference Planning', 'Brand Activation', 'Team Building'],
    },
    {
      icon: '🎉',
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations tailored to your vision, from kids parties to milestone celebrations.',
      features: ['Theme Design', 'Entertainment', 'Catering Services'],
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      company: '',
      testimonial: 'EventPro made our wedding day absolutely perfect! Their attention to detail and professionalism exceeded all our expectations. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechCorp Inc',
      testimonial: 'They organized our annual conference flawlessly. The team was professional, creative, and handled everything with excellence.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Director',
      company: 'Creative Agency',
      testimonial: 'Outstanding service! They transformed our product launch into an unforgettable experience. Will definitely work with them again.',
      rating: 5,
    },
  ];

  // Stats data
  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
              >
                Professional Event Management
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 leading-tight"
              >
                Creating{' '}
                <span className="gradient-text">
                  Unforgettable
                </span>{' '}
                Experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
              >
                From intimate gatherings to grand celebrations, we bring your vision to life with expert planning and flawless execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link to="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
              className="mt-20"
            >
              <svg
                className="w-6 h-6 mx-auto text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              ref={aboutRef}
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800"
                  alt="Event planning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-hover p-6"
              >
                <div className="text-4xl font-display font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                subtitle="About Us"
                title="Your Vision, Our Expertise"
                description=""
                align="left"
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over 15 years of experience in event management, we've perfected the art of creating memorable experiences that exceed expectations. Our dedicated team of professionals works tirelessly to ensure every detail is perfect.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From conceptualization to execution, we handle every aspect of your event with creativity, precision, and care. Let us transform your ideas into extraordinary realities.
              </p>
              <Link to="/about">
                <Button variant="primary" size="md">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Services"
            title="What We Do Best"
            description="Comprehensive event management services tailored to your unique needs and vision."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                onClick={() => {}}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Work"
            title="Featured Events"
            description="Explore some of our recent and upcoming events that showcase our expertise and creativity."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredEvents.map((event) => (
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
          <div className="text-center mt-12">
            <Link to="/events">
              <Button variant="outline" size="lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it - hear from our satisfied clients about their experiences."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Let's work together to make your next event unforgettable. Get in touch with us today!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="ghost" size="lg" className="text-white border-2 border-white hover:bg-white/10">
                    View Our Gallery
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
