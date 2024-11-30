import Image from 'next/image';
// import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');

  const products = [
    { name: "发电机系统", type: "电力设备", image: "/images/product-img01.webp" },
    { name: "货舱进水报警系统", type: "报警设备", image: "/images/product-img02.webp" },
    { name: "焚烧炉", type: "控制设备", image: "/images/product-img03.webp" },
    { name: "锅炉", type: "控制设备", image: "/images/product-img04.webp" },
    { name: "广播电话对讲", type: "内通设备", image: "/images/product-img05.webp" },
    { name: "主配开关检测", type: "仪表设备", image: "/images/product-img06.webp" },
    { name: "仪表检测", type: "仪表设备", image: "/images/product-img07.webp" },
    { name: "分油机", type: "电气设备", image: "/images/product-img08.webp" },
    { name: "马达变频器", type: "启动设备", image: "/images/product-img09.webp" },
    { name: "主机油雾探测器", type: "检测设备", image: "/images/product-img10.webp" },
    { name: "15PPM检测", type: "检测设备", image: "/images/product-img11.webp" },
    { name: "应急发电机", type: "检测设备", image: "/images/product-img12.webp" },
    { name: "主机遥控系统", type: "控制设备", image: "/images/product-img13.webp" },
    { name: "ICCP检测", type: "检测设备", image: "/images/product-img14.webp" },
    { name: "主机温控阀", type: "控制设备", image: "/images/product-img15.webp" },
    { name: "通用报警系统", type: "报警设备", image: "/images/communication.webp" },
  ];

  const filteredProducts = products.filter(product => 
    product.name.includes(searchTerm) || product.type.includes(searchTerm)
  );

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="product-img"
        ></motion.div>
      </div>


      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold mb-8 text-center text-blue-900"
          >
            业务范围介绍
          </motion.h2>

          <div className="mb-8 text-right flex justify-end items-center">
            <motion.input
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              type="text"
              placeholder="搜索业务..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="p-2 border border-gray-300 rounded-lg w-1/4 mr-2"
            />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onClick={handleSearch}
              className="p-2 bg-blue-600 text-white rounded-lg pl-4 pr-4"
            >
              确定
            </motion.button>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center text-red-500 mb-4"
              style={{ minHeight: '100px' }}
            >
              未找到匹配的产品。
            </motion.div>
          )}

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${filteredProducts.length === 0 ? 'min-h-screen' : ''}`} style={{ paddingBottom: filteredProducts.length === 0 ? '100px' : '0' }}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image src={product.image} alt={product.name} width={300} height={200} loading="lazy" className="w-full object-cover" style={{ height: "300px" }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="p-4"
                >
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">类型：{product.type}</p>
                  {/* <motion.a
                    whileHover={{ color: "#1E90FF" }}
                    href="#"
                    className="text-blue-800 font-bold hover:underline"
                  >
                    查看详情
                  </motion.a> */}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}