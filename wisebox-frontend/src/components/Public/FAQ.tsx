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
        py: { xs: 8, md: 12 },
        bgcolor: '#f9f9f9',
      }}
    >
      <Container maxWidth="md">
        {/* Section Title */}
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            color: '#2B2B28',
            fontSize: { xs: '32px', md: '45px' },
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          GYAKORI KÉRDÉSEK
        </Typography>

        {/* Green Underline */}
        <Box
          sx={{
            width: '80px',
            height: '4px',
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 2,
          }}
        />

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            color: '#666',
            fontSize: { xs: '16px', md: '18px' },
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Minden, amit tudnod kell a Wisebox-ról. Ha további kérdésed van, fordulj hozzánk bizalommal!
        </Typography>

        {/* FAQ Accordion */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                bgcolor: 'white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
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
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
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
                    color: '#2B2B28',
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
                  bgcolor: '#fafafa',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '15px', md: '16px' },
                    lineHeight: 1.7,
                    color: '#555',
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
              fontSize: { xs: '16px', md: '18px' },
              color: '#2B2B28',
              mb: 2,
            }}
          >
            Nem találod a választ, amit keresel?
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
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#00c96b',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0, 150, 75, 0.3)',
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
