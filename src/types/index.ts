/**
 * Shared TypeScript types and interfaces for the application
 */

import { ReactNode } from 'react';

export interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  status: 'upcoming' | 'past' | 'ongoing';
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image?: string;
  testimonial: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  category: 'wedding' | 'corporate' | 'party' | 'gala';
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  content: string;
  link?: string;
}
