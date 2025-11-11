import { motion } from 'framer-motion';
import { useEffect } from 'react';
import SectionHeader from '../components/SectionHeader';
import useScrollAnimation from '../hooks/useScrollAnimation';

/**
 * About Page - Company story, team, mission & vision
 */
const About = () => {
  const { ref: storyRef, isInView: storyInView } = useScrollAnimation();
  const { ref: valuesRef, isInView: valuesInView } = useScrollAnimation();

  useEffect(() => {
    document.title = 'About Us - EventPro Event Management';
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const team = [
    {
      name: 'Jennifer Smith',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'With 20+ years in event management, Jennifer leads our team with vision and passion.',
    },
    {
      name: 'David Wilson',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'David brings creative excellence to every event with innovative design solutions.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Sarah ensures flawless execution with meticulous planning and coordination.',
    },
    {
      name: 'Michael Brown',
      role: 'Client Relations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Michael builds lasting relationships and ensures client satisfaction at every step.',
    },
  ];

  // Core values
  const values = [
    {
      icon: '✨',
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring exceptional quality in all our events.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honesty and transparency guide our relationships with clients, partners, and team members.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace creativity and cutting-edge solutions to deliver unique experiences.',
    },
    {
      icon: '❤️',
      title: 'Passion',
      description: 'Our love for what we do shows in the enthusiasm and dedication we bring to every project.',
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
              About <span className="gradient-text">EventPro</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're passionate about creating extraordinary experiences that leave lasting impressions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white" ref={storyRef}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                subtitle="Our Story"
                title="15 Years of Creating Memories"
                description=""
                align="left"
              />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2009, EventPro began with a simple mission: to transform ordinary events into extraordinary experiences. What started as a small team of passionate event enthusiasts has grown into one of the region's most trusted event management companies.
                </p>
                <p>
                  Over the years, we've had the privilege of working with hundreds of clients, from intimate family celebrations to large-scale corporate conferences. Each event has taught us something new and strengthened our commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have a dedicated team of professionals who share our vision and values. Together, we continue to push boundaries, embrace innovation, and create moments that matter.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400"
                  alt="Event planning"
                  className="rounded-2xl shadow-card w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400"
                  alt="Wedding event"
                  className="rounded-2xl shadow-card w-full h-64 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f29da8c936?w=400"
                  alt="Corporate event"
                  className="rounded-2xl shadow-card w-full h-64 object-cover -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400"
                  alt="Party celebration"
                  className="rounded-2xl shadow-card w-full h-64 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-card"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center text-4xl mb-6">
                🎯
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver exceptional event management services that exceed expectations through creativity, professionalism, and meticulous attention to detail. We're committed to making every event a memorable success story.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-card"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center text-4xl mb-6">
                🔭
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading event management company recognized for innovation, excellence, and creating experiences that inspire and connect people. We envision a future where every celebration becomes an unforgettable journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white" ref={valuesRef}>
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide everything we do and shape our company culture."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Team"
            title="Meet the People Behind the Magic"
            description="Talented professionals dedicated to bringing your vision to life."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's create something amazing together. Get in touch with us today!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
