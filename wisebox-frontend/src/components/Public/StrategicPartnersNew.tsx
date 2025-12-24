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
      id="partnereink"
      sx={{
        bgcolor: 'background.paper',
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
            EGYÜTTMŰKÖDÉSEINK
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Stratégiai partnereink
          </Typography>
        </Box>

        {/* Subsection 1: B2B ProSales */}
        <Box
          sx={{
            p: 6,
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
            mb: 6,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: 'text.primary',
            }}
          >
            Üzletfejlesztési partnerünk
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: 'info.main',
              fontWeight: 600,
            }}
          >
            B2B PROSALES - Ahol az eredmény teremti az együttműködést
          </Typography>

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
                maxWidth: '250px',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'text.secondary',
              lineHeight: 1.7,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Küldetésük, hogy a legjobb termékeket, szolgáltatásokat eljuttassák az Ügyfeleikhez. Érejük a függetlenségben rejlik. Céljuk, hogy a B2B név egyet jelentsen a Minőséggel és a Megbízhatósággal.
          </Typography>

          <Button
            variant="contained"
            color="info"
            size="large"
            href="https://b2b-prosales.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              fontWeight: 600,
            }}
          >
            B2B ProSales
          </Button>
        </Box>

        {/* Subsection 2: Pannon University */}
        <Box
          sx={{
            p: 6,
            bgcolor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Egyetemi partnerünk
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            PANNON EGYETEM - Együtt a jövő vállalkozóiért
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
            }}
          >
            {/* Left Column - Text */}
            <Box>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                Büszkén jelentjük be, hogy a Pannon Egyetem és a Wisebox csapata (Great BiExpert Kft. és B2B ProSales Kft.) háromoldalú együttműködési megállapodást kötött a gyakorlatorientált oktatás támogatására.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.7,
                  color: 'text.secondary',
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
                    mb: 1.5,
                    lineHeight: 1.7,
                    color: 'text.secondary',
                  },
                }}
              >
                <li>az egyetem alap- és mesterképzéseiben</li>
                <li>valamint a controlling szakirányú továbbképzésekben</li>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  href="/pannon-egyetem-wisebox-egyuttmukodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    fontWeight: 600,
                  }}
                >
                  Bővebben
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="https://zek.uni-pannon.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    fontWeight: 600,
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
              <Box
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
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

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <img
                  src="/images/wisebox-pannon-egyetem-zalaegerszeg-logo-vizszintes-1024x337.webp"
                  alt="Pannon Egyetem"
                  style={{
                    maxWidth: '400px',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Subsection 3: Professional Partners */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              mb: 6,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            Szakmai partnereink
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {professionalPartners.map((partner, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: '#FFFFFF',
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
                <Box
                  sx={{
                    mb: 3,
                    height: '120px',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.buttonText}
                    style={{
                      maxWidth: '180px',
                      maxHeight: '100px',
                      width: 'auto',
                      height: 'auto',
                    }}
                  />
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    color: 'text.primary',
                  }}
                >
                  {partner.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.7,
                    color: 'text.secondary',
                    whiteSpace: 'pre-line',
                    flexGrow: 1,
                  }}
                >
                  {partner.description}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={partner.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    fontWeight: 600,
                  }}
                >
                  {partner.buttonText}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
