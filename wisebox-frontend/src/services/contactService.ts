import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consentGiven: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  try {
    const response = await axios.post<ContactFormResponse>(
      `${API_BASE_URL}/contact`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle API error responses
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      // Handle network errors
      if (error.code === 'ECONNABORTED') {
        throw new Error('A kérés időtúllépés miatt megszakadt. Kérjük, próbálja újra.');
      }
      if (!error.response) {
        throw new Error('Hálózati hiba történt. Kérjük, ellenőrizze az internetkapcsolatot.');
      }
    }
    throw new Error('Hiba történt az üzenet küldése során. Kérjük, próbálja újra később.');
  }
};
