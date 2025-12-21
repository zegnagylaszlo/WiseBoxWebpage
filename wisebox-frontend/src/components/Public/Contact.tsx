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
        bgcolor: '#F5F5F5',
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1600px',
          mx: 'auto',
          px: { xs: 3, md: 6 },
        }}
      >
        {/* Framed Container */}
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Hero Section - Green Background with CTAs */}
          <Box
            sx={{
              py: { xs: 8, md: 12 },
              bgcolor: 'primary.main',
            }}
          >
            <Container maxWidth="xl">
          {/* Section Title */}
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: 'white',
              fontSize: { xs: '32px', md: '45px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            VEDD FEL VELÜNK A KAPCSOLATOT!
          </Typography>

          {/* White Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'white',
              mx: 'auto',
              mb: 4,
            }}
          />

          {/* Subtitle */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 6,
              px: { xs: 2, md: 2, lg: 3, xl: 4 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontSize: { xs: '20px', md: '26px', lg: '28px', xl: '30px' },
                fontWeight: 600,
                textAlign: 'center',
                lineHeight: 1.3,
                whiteSpace: { md: 'nowrap' },
              }}
            >
              Fedezd fel, hogyan segíthet a Wisebox még jobban megérteni céged könyvelési adatait
            </Typography>
          </Box>

          {/* Three Equal CTA Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
              mt: 6,
            }}
          >
            {/* Email Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              component="a"
              href="#contact-email"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: '17px',
                fontWeight: 700,
                textTransform: 'uppercase',
                minWidth: { xs: '100%', sm: '280px' },
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'scale(1.02)',
                },
              }}
            >
              EMAIL KÜLDÉSE
            </Button>

            {/* Phone Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              component="a"
              href="#contact-phone"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: '17px',
                fontWeight: 700,
                textTransform: 'uppercase',
                minWidth: { xs: '100%', sm: '280px' },
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'scale(1.02)',
                },
              }}
            >
              HÍVÁS INDÍTÁSA
            </Button>

            {/* Form Scroll Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<SendIcon />}
              component="a"
              href="#contact-form"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: '17px',
                fontWeight: 700,
                textTransform: 'uppercase',
                minWidth: { xs: '100%', sm: '280px' },
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'scale(1.02)',
                },
              }}
            >
              ÜZENET ÍRÁSA
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Cards Section - White Background */}
        <Box
          id="contact-phone"
          sx={{
            py: { xs: 8, md: 10 },
            bgcolor: 'white',
          }}
        >
        <Container maxWidth="xl">
          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            VÁRJUK A HÍVÁSODAT
          </Typography>

          {/* Green Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 6,
            }}
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
              justifyContent: 'center',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            {/* Card 1 - Dezső Tibor */}
            <Box
              sx={{
                bgcolor: 'white',
                borderRadius: '12px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
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
                  color: '#2B2B28',
                  fontSize: '28px',
                  fontWeight: 700,
                }}
              >
                Dezső Tibor
              </Typography>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: '#2B2B28',
                  fontSize: '18px',
                  fontWeight: 500,
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
                    bgcolor: '#00964B',
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
                    color: '#2B2B28',
                    fontSize: '18px',
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
                bgcolor: 'white',
                borderRadius: '12px',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
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
                  color: '#2B2B28',
                  fontSize: '28px',
                  fontWeight: 700,
                }}
              >
                Lepsényi Tamás
              </Typography>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: '#2B2B28',
                  fontSize: '18px',
                  fontWeight: 500,
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
                    bgcolor: '#00964B',
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
                    color: '#2B2B28',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                >
                  +36 70 323-6090
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section - Light Grey Background */}
      <Box
        id="contact-form"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#F5F5F5',
        }}
      >
        <Container maxWidth="md">
          {/* Form Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            VAGY ÍRJ NEKÜNK ÜZENETET
          </Typography>

          {/* Form Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 6,
            }}
          />

          {/* Form Container */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: 'white',
              borderRadius: '12px',
              p: { xs: 3, md: 5 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              maxWidth: '700px',
              mx: 'auto',
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
              size="large"
              fullWidth
              disabled={isSubmitting}
              startIcon={<SendIcon />}
              sx={{
                bgcolor: '#00964B',
                color: 'white',
                py: 2,
                fontSize: '17px',
                fontWeight: 700,
                textTransform: 'uppercase',
                '&:hover': {
                  bgcolor: '#2E8640',
                },
              }}
            >
              {isSubmitting ? 'KÜLDÉS...' : 'ÜZENET KÜLDÉSE'}
            </Button>

            {/* Security Badges */}
            <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
              }}
            >
              {/* GDPR Badge */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <VerifiedUserIcon sx={{ color: '#00964B', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  GDPR megfelelő
                </Typography>
              </Box>

              {/* SSL Badge */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <LockIcon sx={{ color: '#00964B', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  256-bit titkosítás
                </Typography>
              </Box>

              {/* EU Servers Badge */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <CloudDoneIcon sx={{ color: '#00964B', fontSize: '24px' }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: '#666',
                    fontSize: '13px',
                    fontWeight: 500,
                  }}
                >
                  EU szerverek
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Email Section - White Background */}
      <Box
        id="contact-email"
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'white',
        }}
      >
        <Container maxWidth="md">
          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 700,
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            VAGY KÜLDJ NEKÜNK EMAIL-T
          </Typography>

          {/* Green Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 6,
            }}
          />

          {/* Email Display */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              component="a"
              href="mailto:info@wisebox.hu"
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
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  bgcolor: '#00964B',
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
                  color: '#2B2B28',
                  fontSize: { xs: '20px', md: '24px' },
                  fontWeight: 600,
                }}
              >
                info@wisebox.hu
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      </Box>
      </Box>
    </Box>
  );
};
