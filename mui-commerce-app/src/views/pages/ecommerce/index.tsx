// Third Party
import { motion } from 'framer-motion';

// Project Imports
import Products from 'views/pages/ecommerce/Products';

// =============================|| E-COMMERCE MAIN ||============================= //

const ECommerce = () => (
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
      <Products />
    </motion.div>
  </>
);

export default ECommerce;
