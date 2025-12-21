import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const PannonPartnership: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        {/* Article Title */}
        <Typography
          variant="h1"
          sx={{
            mb: 3,
            fontSize: { xs: '28px', md: '36px' },
            fontWeight: 700,
            color: '#2B2B28',
            textAlign: 'center',
            lineHeight: 1.3,
          }}
        >
          Együtt a jövő vállalkozóiért – a gyakorlatorientált oktatás szolgálatában
        </Typography>

        {/* Publication Date */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            mb: 6,
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              bgcolor: '#FF8C00',
              borderRadius: '2px',
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontSize: '14px',
            }}
          >
            2025-05-14
          </Typography>
        </Box>

        {/* Main Image */}
        <Box
          sx={{
            mb: 6,
            width: '100%',
          }}
        >
          <img
            src="/images/wisebox-pannon-egyetem-egyuttmukodesi-megallapodas-kep-1024x683.webp"
            alt="Pannon Egyetem - Wisebox együttműködési megállapodás"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
            }}
          />
        </Box>

        {/* Article Content */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontSize: { xs: '22px', md: '26px' },
              fontWeight: 700,
              color: '#2B2B28',
              lineHeight: 1.4,
              textAlign: 'justify',
            }}
          >
            A Pannon Egyetem és a Wisebox csapata háromoldalú megállapodást kötött a gyakorlatorientált oktatás támogatására. A hallgatók valós céges környezetben sajátíthatják el a digitális pénzügyi és kontrolling folyamatokat.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            Büszkén jelentjük be, hogy a Pannon Egyetem és a Wisebox csapata (Great BiExpert Kft. és a B2B ProSales Kft.) háromoldalú együttműködési megállapodást kötött, melynek célja a gyakorlatorientált oktatás támogatása és a jövő vállalkozóinak felkészítése a digitális kihívásokra.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            A megállapodás keretében a Wisebox szoftver aktív szerepet kap az egyetem alap- és mesterképzéseiben, valamint a controlling szakirányú továbbképzésekben. Ezáltal a hallgatók valós vállalati környezetben ismerkedhetnek meg a pénzügyi és kontrolling folyamatokkal, ami jelentősen növeli munkaerőpiaci értéküket.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            Decsi Péter főigazgató példaértékűnek nevezte az együttműködést, amely hosszú távon támogatja a hallgatók, a vállalkozások és a duális partnerek fejlődését.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            Dr. Palányi Ildikó, a Gazdálkodási Kar Zalaegerszeg dékánja kiemelte, hogy az együttműködés hidat képez az akadémiai tudás és a vállalati gyakorlat között, elősegítve a közös gondolkodást és a kutatás-fejlesztést.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            Kiemelte: <em>"Ez az együttműködés különösen időszerű, hiszen napjainkban a digitalizáció és az adatalapú döntéshozatal kulcsfontosságú a fenntarthatóság és a versenyképesség szempontjából."</em>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            Dezső Tibor, a B2B ProSales Kft. ügyvezetője hangsúlyozta: „A Wisebox nem csupán egy szoftver, hanem egy olyan eszköz, amely lehetővé teszi a vállalkozók számára, hogy ne csak adatokat lássanak, hanem valódi válaszokat is kapjanak."
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 1,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              fontWeight: 600,
            }}
          >
            Forrás:
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            A Pannon Egyetem hivatalos beszámolója az alábbi linken olvasható:
            <Box component="span" sx={{ display: 'inline-block', width: '16px' }} />
            <Box
              component="a"
              href="https://zek.uni-pannon.hu/hu/?view=article&id=1111:egyutt-a-jovo-vallalkozoiert-a-megallapodas-a-gyakorlatorientalt-oktatast-segiti&catid=8:hirek"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#00964B',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Együtt a jövő vállalkozóiért – cikk az együttműködésről
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              textAlign: 'justify',
            }}
          >
            A Zalaegerszegi TV Híradója is beszámolt az eseményről, a videó itt érhető el:
            <Box component="span" sx={{ display: 'inline-block', width: '16px' }} />
            <Box
              component="a"
              href="https://www.youtube.com/watch?v=9ZqZ56AsJMs"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#00964B',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              YouTube – Zalaegerszegi TV Híradó bejátszása
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 6,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#2B2B28',
              fontStyle: 'italic',
            }}
          >
            Zalaegerszeg, 2025.05.14.
          </Typography>
        </Box>

        {/* Share Section */}
        <Box
          sx={{
            pt: 4,
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              mb: 2,
              fontSize: '14px',
              fontWeight: 600,
              color: '#2B2B28',
            }}
          >
            Cikk megosztása
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Box
              component="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#1877f2',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <FacebookIcon sx={{ fontSize: '28px' }} />
            </Box>
            <Box
              component="a"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#0077b5',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: '28px' }} />
            </Box>
            <Box
              component="a"
              href={`mailto:?subject=${encodeURIComponent('Pannon Egyetem × Wisebox együttműködés')}&body=${encodeURIComponent(window.location.href)}`}
              sx={{
                color: '#666',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: '28px' }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
