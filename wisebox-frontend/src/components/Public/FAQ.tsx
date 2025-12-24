import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'Mennyi időbe telik a Wisebox beüzemelése?',
      answer: 'A rendszer beállítása általában 1-2 napot vesz igénybe. A könyvelőddel való összekötés után azonnal kezdheted használni a dashboardokat és jelentéseket. Nincs hosszadalmas tanulási görbe – a felület intuitív és azonnal használható.',
    },
    {
      question: 'Szükségem van speciális IT tudásra a használatához?',
      answer: 'Egyáltalán nem! A Wisebox-ot úgy terveztük, hogy bármely vállalkozó könnyen használhassa, IT tudás nélkül is. Ha tudsz emailt írni és böngészni az interneten, már használhatod is a rendszert. Online támogatást és képzést is biztosítunk.',
    },
    {
      question: 'Biztonságban vannak a pénzügyi adataim?',
      answer: 'Abszolút! A Wisebox bank-szintű titkosítást használ (256-bit SSL), és az adatokat európai szervereken tároljuk GDPR-kompatibilis módon. Rendszeres biztonsági auditokat végzünk, és többlépcsős hozzáférés-védelmet alkalmazunk.',
    },
    {
      question: 'Hogyan működik együtt a Wisebox a könyvelőmmel?',
      answer: 'A Wisebox a meglévő könyvelési rendszeredből kapja az adatokat, nem helyettesíti a könyvelőt. A könyvelőd továbbra is vezeti a könyvelést, de te valós időben láthatod az adatokat strukturált, érthető formában. Sok könyvelő kifejezetten örül, mert kevesebb rutinkérdést kap.',
    },
    {
      question: 'Milyen könyvelési rendszerekkel kompatibilis?',
      answer: 'A Wisebox a legtöbb magyar könyvelési szoftverrel kompatibilis, beleértve a NAV Online Számla rendszert is. Ha egyedi könyvelési szoftvert használsz, vedd fel velünk a kapcsolatot – szívesen segítünk az integráció beállításában.',
    },
    {
      question: 'Mennyi időt spórolhatok meg a Wisebox-szal?',
      answer: 'Ügyfeleink átlagosan heti 3-5 órát spórolnak meg a manuális jelentéskészítéssel, adatgyűjtéssel és könyvelői egyeztetéssel. A döntéshozatal is gyorsabb lesz, mert minden fontos adat egy helyen, naprakészen elérhető.',
    },
    {
      question: 'Van próbaidőszak vagy pénzvisszafizetési garancia?',
      answer: 'Igen! 30 napos pénzvisszafizetési garanciát biztosítunk. Ha az első hónapban úgy érzed, hogy a Wisebox nem felel meg az elvárásaidnak, teljes összegben visszatérítjük a díjat, kérdések nélkül.',
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
            Minden, amit tudnod kell a Wisebox-ról. Ha további kérdésed van, fordulj hozzánk bizalommal!
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
            Nem találod a választ, amit keresel?
          </Typography>
          <Box
            component="a"
            href="#contact"
            sx={{
              display: 'inline-block',
              bgcolor: 'secondary.main',
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
                boxShadow: '0 4px 12px rgba(255,107,107,0.3)',
              },
            }}
          >
            Írj nekünk
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
