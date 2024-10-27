import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductsProps {
  image: string;
}

const Products: React.FC<ProductsProps> = ({ image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-[370px] h-[370px] rounded-lg m-4 overflow-hidden cursor-pointer"
    >
      <Image src={image} alt="Product" width={370} height={300} className="object-cover w-full h-full" />
    </motion.div>
  );
};

export default Products;
