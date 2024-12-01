import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { lazy } from 'react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-blue-900 sticky top-0 z-50 bg-white bg-opacity-60"
    >
      <div className="container mx-auto change-px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Image src="/images/logo.webp"  width={100} height={35} loading="lazy"  />
          <h1 className="text-2xl font-bold main-color" style={{ marginLeft: '20px'}}>南通睦融电气设备</h1>
        </motion.div>
        <nav>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex space-x-16"
          >
            <motion.li whileHover={{ scale: 1.1 }} className="relative group">
              <Link href="/" legacyBehavior>
                <a className="hover:text-blue-600 transition duration-300 main-color font-medium" >首页</a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="relative group">
              <Link href="/products" legacyBehavior>
                <a className="hover:text-blue-600 transition duration-300 main-color font-medium">业务</a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="relative group">
              <Link href="/about" legacyBehavior>
                <a className="hover:text-blue-600 transition duration-300 main-color font-medium">关于我们</a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="relative group">
              <Link href="/ContactUs" legacyBehavior>
                <a className="hover:text-blue-600 transition duration-300 main-color font-medium">联系我们</a>
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
}