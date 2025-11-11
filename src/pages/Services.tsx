import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';

/**
 * Services Page - Detailed list of all services offered
 */
const Services = () => {
  useEffect(() => {
    document.title = 'Our Services - EventPro Event Management';
    window.scrollTo(0, 0);
  }, []);

  // Complete services list
  const services = [
    {
      icon: '💒',
      title: 'Wedding Planning',
      description: 'Create your dream wedding with our comprehensive planning and coordination services. From intimate ceremonies to grand celebrations, we handle every detail.',
      features: [
        'Venue selection and booking',
        'Vendor coordination and management',
        'Wedding day timeline creation',
        'Full day-of coordination',
        'Guest management',
        'Budget planning and tracking',
      ],
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional corporate event management for conferences, seminars, product launches, and team building activities that align with your business objectives.',
      features: [
        'Conference and seminar planning',
        'Product launch events',
        'Team building activities',
        'Brand activation events',
        'Annual general meetings',
        'Corporate parties and celebrations',
      ],
    },
    {
      icon: '🎉',
      title: 'Birthday Parties',
      description: 'Memorable birthday celebrations tailored to your vision, from kids parties with themes and entertainment to milestone birthday celebrations.',
      features: [
        'Themed party design',
        'Entertainment booking',
        'Catering coordination',
        'Venue decoration',
        'Party favors and gifts',
        'Photography services',
      ],
    },
    {
      icon: '🎓',
      title: 'Graduation Ceremonies',
      description: 'Celebrate academic achievements with professionally organized graduation ceremonies and parties that honor this important milestone.',
      features: [
        'Ceremony coordination',
        'Venue arrangement',
        'Audio-visual setup',
        'Graduate recognition programs',
        'Reception planning',
        'Photography and videography',
      ],
    },
    {
      icon: '🎪',
      title: 'Festival & Fair Management',
      description: 'Large-scale festival and fair management including vendor coordination, entertainment booking, and complete event logistics.',
      features: [
        'Vendor management',
        'Stage and entertainment coordination',
        'Crowd management',
        'Security planning',
        'Permits and licensing',
        'Marketing and promotion',
      ],
    },
    {
      icon: '🎤',
      title: 'Concerts & Shows',
      description: 'From intimate acoustic sessions to large concerts, we manage all aspects of live music and performance events.',
      features: [
        'Venue booking and setup',
        'Sound and lighting coordination',
        'Artist liaison',
        'Ticket management',
        'Security and crowd control',
        'Promotion and marketing',
      ],
    },
    {
      icon: '🍽️',
      title: 'Gala Dinners',
      description: 'Elegant gala dinners and formal events with sophisticated planning, exquisite dining, and memorable entertainment.',
      features: [
        'Elegant venue selection',
        'Fine dining coordination',
        'Entertainment and speakers',
        'Formal seating arrangements',
        'Fundraising coordination',
        'Award ceremonies',
      ],
    },
    {
      icon: '🎨',
      title: 'Exhibition & Trade Shows',
      description: 'Complete exhibition and trade show management including booth design, exhibitor coordination, and visitor engagement.',
      features: [
        'Booth design and setup',
        'Exhibitor coordination',
        'Visitor registration',
        'Networking sessions',
        'Promotional activities',
        'Post-event analytics',
      ],
    },
    {
      icon: '💍',
      title: 'Engagement Parties',
      description: 'Beautiful engagement celebrations that set the tone for your wedding journey, from intimate gatherings to lavish parties.',
      features: [
        'Venue selection',
        'Theme and decoration',
        'Catering services',
        'Photography coordination',
        'Guest management',
        'Entertainment planning',
      ],
    },
  ];

  // Process features
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We start with understanding your vision, requirements, and budget through a detailed consultation.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Our team creates a comprehensive plan covering all aspects of your event with timelines and budgets.',
    },
    {
      number: '03',
      title: 'Coordination',
      description: 'We coordinate with vendors, venues, and all stakeholders to ensure seamless preparation.',
    },
    {
      number: '04',
      title: 'Execution',
      description: 'On the day, our team manages every detail ensuring your event runs flawlessly from start to finish.',
    },
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive event management solutions tailored to your unique needs and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="What We Offer"
            title="Complete Event Solutions"
            description="From planning to execution, we handle every aspect of your event with professionalism and creativity."
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
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Process"
            title="How We Work"
            description="A proven approach that ensures success at every stage of your event."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-card h-full">
                  <div className="text-6xl font-display font-bold text-primary-100 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg
                      className="w-8 h-8 text-primary-300"
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
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Plan Your Event
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Ready to create an unforgettable experience? Contact us today to discuss your event needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
