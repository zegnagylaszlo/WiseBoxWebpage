import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export const StrategicPartnersNew: React.FC = () => {
  const professionalPartners = [
    {
      logo: '/images/hypermatrix_logo.webp',
      title: 'Informatikai szolgáltatónk',
      description: '✓ teljes informatikai hátterünket biztosítja\n✓ jelenlegi kor által megkövetelt információ-, és adatbiztonsági előírásokkal összhangban',
      buttonText: 'HyperMatrix',
      buttonUrl: 'https://www.hypermatrix.cloud/',
      logoMaxWidth: '200px',
      logoMaxHeight: '80px',
      logoContainerWidth: '450px',
    },
    {
      logo: '/images/expertconsult_long.webp',
      title: 'Teljeskörű szolgáltatás',
      description: '✓ teljes ügyviteli folyamat egy kézből üzemeltethető\n✓ dokumentum-kezelés, könyvelés, kontrolling',
      buttonText: 'ExpertConsult',
      buttonUrl: 'https://expertconsult.hu/',
      logoMaxWidth: '200px',
      logoMaxHeight: '80px',
      logoContainerWidth: '450px',
    },
    {
      logo: '/images/movement-makerz-kft-logo-1024x768.webp',
      title: 'Marketing szolgáltatás',
      description: '✓ marketing folyamatok és tevékenységek\n✓ Hirdetéskezelés, leadek generálása, automatizációk kiépítése, tartalomgyártás',
      buttonText: 'Movement Makerz',
      buttonUrl: 'https://movementmakerz.hu/',
      logoMaxWidth: '100%',
      logoMinWidth: '500px',
      logoMinHeight: '280px',
      logoMaxHeight: '350px',
      logoContainerWidth: '450px',
    },
  ];

  return (
    <Box
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
        {/* Main Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          STRATÉGIAI PARTNEREINK
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

        {/* Framed Container */}
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            overflow: 'hidden',
          }}
        >

      {/* Subsection 1: B2B ProSales */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: 'info.main', // Blue #6EC1E4
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          {/* Subsection Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: 'white',
              fontSize: { xs: '24px', md: '28px' },
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            ÜZLETFEJLESZTÉSI PARTNERÜNK
          </Typography>

          {/* White Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'white',
              mx: 'auto',
              mb: 3,
            }}
          />

          {/* Slogan */}
          <Typography
            variant="h4"
            sx={{
              mb: 5,
              color: 'white',
              fontSize: { xs: '22px', md: '28px' },
              fontWeight: 600,
              //fontStyle: 'italic',
            }}
          >
            B2B PROSALES - Ahol az eredmény teremti az együttműködést
          </Typography>

          {/* Logo */}
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/B2B_pecset.webp"
              alt="B2B ProSales"
              style={{
                maxWidth: '300px',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: 5,
              color: 'white',
              fontSize: '18px',
              lineHeight: 1.6,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Küldetésük, hogy a legjobb termékeket, szolgáltatásokat eljuttassák az Ügyfeleikhez. Érejük a függetlenségben rejlik. Céljuk, hogy a B2B név egyet jelentsen a Minőséggel és a Megbízhatósággal.
          </Typography>

          {/* Button */}
          <Button
            variant="contained"
            size="large"
            href="https://b2b-prosales.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: 'white',
              color: 'info.main',
              px: 5,
              py: 2,
              fontSize: '17px',
              fontWeight: 700,
              textTransform: 'uppercase',
              borderRadius: '4px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              '&:hover': {
                bgcolor: '#f5f5f5',
                boxShadow: '0 6px 16px rgba(0,0,0,0.25)',
              },
            }}
          >
            B2B ProSales
          </Button>
        </Container>
      </Box>

      {/* Subsection 2: Pannon University */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#FFFFFF',
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            mx: 'auto',
            px: { xs: 3, md: 8, lg: 12 },
          }}
        >
          {/* Subsection Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '24px', md: '28px' },
              fontWeight: 600,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            EGYETEMI PARTNERÜNK
          </Typography>

          {/* Green Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 3,
            }}
          />

          {/* Subtitle */}
          <Typography
            variant="h4"
            sx={{
              mb: 8,
              textAlign: 'center',
              fontSize: { xs: '22px', md: '28px' },
              fontWeight: 600,
              color: '#2B2B28',
            }}
          >
            PANNON EGYETEM - Együtt a jövő vállalkozóiért
          </Typography>

          {/* Two Column Layout */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
              mb: 6,
            }}
          >
            {/* Left Column - Text */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#2B2B28',
                }}
              >
                Büszkén jelentjük be, hogy a Pannon Egyetem és a Wisebox csapata (Great BiExpert Kft. és B2B ProSales Kft.) háromoldalú együttműködési megállapodást kötött a gyakorlatorientált oktatás támogatására.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#2B2B28',
                }}
              >
                A megállapodás keretében a Wisebox szoftver aktív szerepet kap:
              </Typography>
              <Box
                component="ul"
                sx={{
                  mb: 4,
                  pl: 3,
                  '& li': {
                    mb: 2,
                    fontSize: '18px',
                    lineHeight: 1.8,
                    color: '#2B2B28',
                  },
                }}
              >
                <li>az egyetem alap- és mesterképzéseiben</li>
                <li>valamint a controlling szakirányú továbbképzésekben</li>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  href="/pannon-egyetem-wisebox-egyuttmukodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '15px',
                    fontWeight: 600,
                    borderColor: '#2B2B28',
                    color: '#2B2B28',
                    borderRadius: '4px',
                    '&:hover': {
                      borderColor: '#2B2B28',
                      bgcolor: 'rgba(43, 43, 40, 0.04)',
                    },
                  }}
                >
                  Bővebben
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href="https://zek.uni-pannon.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '15px',
                    fontWeight: 600,
                    bgcolor: '#2B2B28',
                    color: 'white',
                    borderRadius: '4px',
                    '&:hover': {
                      bgcolor: '#1F1F1D',
                    },
                  }}
                >
                  Pannon Egyetem
                </Button>
              </Box>
            </Box>

            {/* Right Column - Image */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
              }}
            >
              {/* Photo */}
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                }}
              >
                <img
                  src="/images/wisebox-pannon-egyetem-egyuttmukodesi-megallapodas-kep-1024x683.webp"
                  alt="Pannon Egyetem collaboration"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>

              {/* Logo Below Image */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  bgcolor: 'white',
                  width: '100%',
                }}
              >
                <img
                  src="/images/wisebox-pannon-egyetem-zalaegerszeg-logo-vizszintes-1024x337.webp"
                  alt="Pannon Egyetem"
                  style={{
                    maxWidth: '550px',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Subsection 3: Professional Partners */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: '#FAFAFA',
        }}
      >
        <Box
          sx={{
            maxWidth: '1400px',
            mx: 'auto',
            px: { xs: 3, md: 6 },
          }}
        >
          {/* Subsection Title */}
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: '#2B2B28',
              fontSize: { xs: '24px', md: '28px' },
              fontWeight: 600,
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            SZAKMAI PARTNEREINK
          </Typography>

          {/* Green Underline */}
          <Box
            sx={{
              width: '80px',
              height: '4px',
              bgcolor: 'primary.main',
              mx: 'auto',
              mb: 8,
            }}
          />

          {/* Three Partner Cards */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {professionalPartners.map((partner, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: 'white',
                  borderRadius: '8px',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  flex: '1',
                  maxWidth: { md: '450px' },
                }}
              >
                {/* Logo */}
                <Box
                  sx={{
                    mb: 3,
                    height: '180px',
                    width: partner.logoContainerWidth,
                    maxWidth: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.buttonText}
                    style={{
                      maxWidth: partner.logoMaxWidth,
                      minWidth: partner.logoMinWidth || 'auto',
                      maxHeight: partner.logoMaxHeight,
                      minHeight: partner.logoMinHeight || 'auto',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#2B2B28',
                  }}
                >
                  {partner.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: '#2B2B28',
                    whiteSpace: 'pre-line',
                    flexGrow: 1,
                  }}
                >
                  {partner.description}
                </Typography>

                {/* Button */}
                <Button
                  variant="contained"
                  size="large"
                  href={partner.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '15px',
                    fontWeight: 600,
                    bgcolor: '#00964B',
                    color: 'white',
                    borderRadius: '4px',
                    textTransform: 'none',
                    width: '200px',
                    '&:hover': {
                      bgcolor: '#2E8640',
                    },
                  }}
                >
                  {partner.buttonText}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
    </Box>
  );
};
