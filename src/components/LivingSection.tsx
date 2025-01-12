import { Container, Divider, Grid, Typography } from '@mui/material';
import { Slide } from './caruosels/Simple';
import Accomodation, { AccomodationUnit } from './Accommodation';
import EmblaCarouselWithButtons from './caruosels/WithButtons/Carousel';

interface LivingSectionInterface {
  description: string;
  photoes: Slide[];
  accomodationUnits: AccomodationUnit[];
  accommodationDesc: string;
}

function LivingSection({
  description,
  photoes,
  accomodationUnits,
  accommodationDesc,
}: LivingSectionInterface) {
  return (
    <>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography
          id="live"
          variant="h2"
          textAlign="center"
          sx={{ mb: 4, whiteSpace: 'pre-line' }}
        >
          Where will we live?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5}>
            <Typography
              variant="body1"
              align="left"
              sx={{
                whiteSpace: 'pre-line',
                fontSize: '1.6rem',
                lineHeight: 1.6,
              }}
            >
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <EmblaCarouselWithButtons slides={photoes} options={{}} />
          </Grid>
        </Grid>
      </Container>
      <Divider />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Accomodation
          units={accomodationUnits}
          description={accommodationDesc}
        />
      </Container>
    </>
  );
}

export default LivingSection;
