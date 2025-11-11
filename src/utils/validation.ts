/**
 * Utility functions for form validation
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submit?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number (supports various formats)
 */
export const isValidPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
};

/**
 * Validates that a string is not empty or just whitespace
 */
export const isNotEmpty = (value: string): boolean => {
  return value && value.trim().length > 0;
};

/**
 * Validates minimum length
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value && value.length >= minLength;
};

/**
 * Validates contact form data
 */
export const validateContactForm = (formData: ContactFormData): ValidationResult => {
  const errors: ValidationErrors = {};

  // Name validation
  if (!isNotEmpty(formData.name)) {
    errors.name = 'Name is required';
  } else if (!hasMinLength(formData.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!isNotEmpty(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!isNotEmpty(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Message validation
  if (!isNotEmpty(formData.message)) {
    errors.message = 'Message is required';
  } else if (!hasMinLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
