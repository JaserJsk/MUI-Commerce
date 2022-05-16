// Third Party
import { motion } from 'framer-motion';

// Project Imports
import Content from './Content';

// =============================|| PRODUCT DETAILS MAIN ||============================= //

const ProductDetails = () => (
  <>
    <motion.div
      initial={{ opacity: 0, translateY: 550 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 30,
      }}
    >
      <Content />
    </motion.div>
  </>
);

export default ProductDetails;
