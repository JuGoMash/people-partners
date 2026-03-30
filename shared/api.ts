/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Inquiry submission from contact form
 */
export interface Inquiry {
  id?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  type: 'general' | 'service' | 'recruitment';
  createdAt?: string;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  id?: string;
}

/**
 * Job vacancy
 */
export interface Vacancy {
  id: string;
  title: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface VacancyRequest {
  title: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
}

export interface VacancyListResponse {
  vacancies: Vacancy[];
  total: number;
}

/**
 * Client/Partner company
 */
export interface Client {
  id: string;
  name: string;
  logo: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientRequest {
  name: string;
  logo: string;
}

export interface ClientListResponse {
  clients: Client[];
  total: number;
}
