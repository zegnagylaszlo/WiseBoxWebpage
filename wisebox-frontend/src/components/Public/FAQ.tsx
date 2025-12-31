import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Mennyi időbe telik a WiseBox beüzemelése?',
      answer: 'A rendszer beállítása általában 1 hetet vesz igénybe. A könyvelési adataid "bekötése" után integráljuk az adataidat a WiseBox-ba és ezt követően már indulhat is a használat az első betanítási körrel.',
    },
    {
      question: 'Szükségem van speciális IT tudásra a használatához?',
      answer: 'Egyáltalán nem! A WiseBox-ot úgy terveztük, hogy bármely vállalkozó könnyen használhassa, IT tudás nélkül is. Ha tudsz emailt írni és böngészni az interneten, már használhatod is a rendszert. Online videók is elérhetők és a bevezetés során többlépcsős képzést is biztosítunk.',
    },
    {
      question: 'Biztonságban vannak a könyvelési adataim?',
      answer: 'Abszolút! Az adatokat magyarországi szervereken tároljuk GDPR-kompatibilis módon és többlépcsős hozzáférés-védelmet alkalmazunk. IT szolgáltatóink rendszeresen végeznek biztonsági auditokat, hogy garantálják az adatok védelmét.',
    },
    {
      question: 'Hogyan működik együtt a WiseBox a könyvelőmmel?',
      answer: 'A WiseBox a meglévő könyvelési rendszeredből kapja az adatokat, nem helyettesíti a könyvelőt. A könyvelőd továbbra is vezeti a könyvelést, de te valós időben láthatod az adatokat strukturált, érthető formában. Sok könyvelő kifejezetten örül, mert kevesebb rutinkérdést kap, illetve sokkal konkrétabban tudnak kérdezni az Ügyfelek.',
    },
    {
      question: 'Milyen könyvelési rendszerekkel kompatibilis?',
      answer: 'A WiseBox az alábbi magyar könyvelési szoftverekkel kompatibilis: Novitax, Kulcs-Soft, RLB, InfoTéka, QualitySoft, Tensoft. A piaci igények alapján folyamatosan bővítjük a kompatibilis könyvelési szoftverek körét.',
    },
    {
      question: 'Mennyi időt spórolhatok meg a WiseBox-szal?',
      answer: 'Ez minden Ügyfelünknél változó, sok mindentől függ. Komoly idő - és ezáltal pénzbeli - megtakarítást tudunk felmutatni azoknál az Ügyfeleinknél, ahol sok erőforrás megy el a manuális jelentéskészítésre, adatgyűjtésre és könyvelői egyeztetésekre. A döntéshozatal is gyorsabb lesz, mert minden fontos adat egy helyen, naprakészen elérhető.',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
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
            TUDJ MEG TÖBBET
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              color: 'text.primary',
            }}
          >
            Gyakori kérdések
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Minden, amit tudnod kell a WiseBox-ról
          </Typography>
        </Box>

        {/* FAQ Accordion */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                bgcolor: '#FFFFFF',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.06)',
                borderRadius: '8px !important',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: '0 0 16px 0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main', fontSize: '28px' }} />}
                sx={{
                  py: 2,
                  px: 3,
                  '& .MuiAccordionSummary-content': {
                    my: 1,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 3,
                  pb: 3,
                  pt: 0,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    color: 'text.secondary',
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              mb: 3,
            }}
          >
            Ha további kérdésed van, fordulj hozzánk bizalommal!
          </Typography>
          <Box
            component="a"
            href="#contact"
            sx={{
              display: 'inline-block',
              bgcolor: 'primary.main',
              color: 'white',
              px: 4,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(10,123,127,0.3)',
              },
            }}
          >
            Keress minket
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
