// Material UI
import { Grid } from '@mui/material';

// Third Party
import { motion } from 'framer-motion';

// Project Imports
import Banner from './Banner';
import Masonry from './Masonry';

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <>
    <Grid container>
      <motion.div
        initial={{ opacity: 0, translateY: 550 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
        }}
      >
        <Banner />
        <Masonry />
      </motion.div>
    </Grid>
  </>
);

export default Landing;
