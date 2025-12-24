import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Alert } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

export const Contact: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'A név megadása kötelező';
    }

    if (!email.trim()) {
      newErrors.email = 'Az email megadása kötelező';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Érvénytelen email formátum';
    }

    if (!message.trim()) {
      newErrors.message = 'Az üzenet megadása kötelező';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Placeholder for API integration
      console.log({ name, email, company, message });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitSuccess(true);

      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setErrors({});

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setErrors({ submit: 'Hiba történt az üzenet küldése során' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: '#FFFFFF',
        py: { xs: 10, md: 14 },
      }}
    >
      <Container>
        {/* Section Header - Modern Pattern */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: 'primary.main',
              mb: 2,
            }}
          >
            LÉPJ VELÜNK KAPCSOLATBA
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Vedd fel velünk a kapcsolatot!
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Fedezd fel, hogyan segíthet a Wisebox még jobban megérteni céged könyvelési adatait
          </Typography>
        </Box>

        {/* Contact Cards Section */}
        <Box id="contact-phone" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Várjuk a hívásodat
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {/* Card 1 - Dezső Tibor */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '12px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              {/* Profile Image */}
              <Box
                sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 3,
                }}
              >
                <img
                  src="/images/DezsoTibor_Portre.webp"
                  alt="Dezső Tibor"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Name */}
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                Dezső Tibor
              </Typography>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                }}
              >
                Üzletfejlesztési manager
              </Typography>

              {/* Clickable Phone */}
              <Box
                component="a"
                href="tel:+36709319828"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: '18px' }} />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                  }}
                >
                  +36 70 931-9828
                </Typography>
              </Box>
            </Box>

            {/* Card 2 - Lepsényi Tamás */}
            <Box
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '12px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0px 4px 16px rgba(0,0,0,0.1)',
                },
              }}
            >
              {/* Profile Image */}
              <Box
                sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mb: 3,
                }}
              >
                <img
                  src="/images/LepsényiTamás_Portré.jpg"
                  alt="Lepsényi Tamás"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              {/* Name */}
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  color: 'text.primary',
                }}
              >
                Lepsényi Tamás
              </Typography>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                }}
              >
                Senior Üzletfejlesztő
              </Typography>

              {/* Clickable Phone */}
              <Box
                component="a"
                href="tel:+36703236090"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    bgcolor: 'success.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PhoneIcon sx={{ fontSize: '18px' }} />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                  }}
                >
                  +36 70 323-6090
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Contact Form Section */}
        <Box id="contact-form" sx={{ mb: 8, maxWidth: '700px', mx: 'auto' }}>
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Vagy írj nekünk üzenetet
          </Typography>

          {/* Form Container */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '12px',
              p: { xs: 3, md: 5 },
              boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
            }}
          >
            {/* Success Message */}
            {submitSuccess && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Köszönjük az üzenetet! Hamarosan felvesszük Önnel a kapcsolatot.
              </Alert>
            )}

            {/* Error Message */}
            {errors.submit && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {errors.submit}
              </Alert>
            )}

            {/* Name Field */}
            <TextField
              fullWidth
              required
              label="Név"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 3 }}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ mb: 3 }}
            />

            {/* Company Field */}
            <TextField
              fullWidth
              label="Cég (opcionális)"
              variant="outlined"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              sx={{ mb: 3 }}
            />

            {/* Message Field */}
            <TextField
              fullWidth
              required
              multiline
              rows={5}
              label="Üzenet"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ mb: 4 }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              disabled={isSubmitting}
              startIcon={<SendIcon />}
              sx={{
                py: 2,
                fontWeight: 600,
              }}
            >
              {isSubmitting ? 'Küldés...' : 'Üzenet küldése'}
            </Button>

            {/* Security Badges */}
            <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: '1px solid',
                borderColor: 'grey.200',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <VerifiedUserIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  GDPR megfelelő
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <LockIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  256-bit titkosítás
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CloudDoneIcon sx={{ color: 'primary.main', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  EU szerverek
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Email Section */}
        <Box id="contact-email" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              color: 'text.primary',
            }}
          >
            Vagy küldj nekünk email-t
          </Typography>

          <Box
            component="a"
            href="mailto:info@wisebox.hu"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Box
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                bgcolor: 'success.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <EmailIcon sx={{ fontSize: '24px' }} />
            </Box>
            <Typography
              variant="h5"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
              }}
            >
              info@wisebox.hu
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
