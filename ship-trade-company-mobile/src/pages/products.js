import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Box, Flex, Text, Button, Input, SimpleGrid } from '@chakra-ui/react';
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
    <Box className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow  px-4">
        <Box className="container mx-auto">
          {/* 标题部分 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Text
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
             className='mb-4'
              textAlign="center"
              color="main.50"
            >
              业务范围介绍
            </Text>
          </motion.div>

          {/* 搜索栏部分 */}
          <Flex mb={4} flexDirection="row" justifyContent="center" alignItems="center">
            <Input
              type="text"
              placeholder="搜索业务..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              p={2}
              border="1px"
              borderColor="gray.300"
              rounded="lg"
              w={{ base: "100%", md: "40%" }}
              mr={2}
            />
            <Button
              onClick={handleSearch}
              bg="blue.600"
              color="white"
              px={6}
              py={2}
              rounded="lg"
              _hover={{ bg: "blue.600" }}
            >
              确定
            </Button>
          </Flex>

          {/* 过滤后产品展示部分 */}
          {filteredProducts.length === 0 && (
            <Text textAlign="center" color="red.500" mb={4} minH="100px">
              未找到匹配的产品。
            </Text>
          )}

          {/* 产品展示部分 - 两列布局 */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}  mb={6}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                viewport={{ once: true }}
              >
                <Box
                  bg="white"
                  rounded="lg"
                  shadow="md"
                  overflow="hidden"
                  _hover={{ transform: "scale(1.05)", transition: "all 0.3s ease-in-out" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                    style={{ height: "300px" }}
                  />
                  <Box p={4}>
                    <Text fontSize="lg" fontWeight="bold" mb={2}>
                      {product.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                      类型：{product.type}
                    </Text>
                    <Button
                      as="a"
                      href="#"
                      colorScheme="blue"
                      variant="link"
                      fontWeight="bold"
                      _hover={{ textDecoration: "underline", color: "blue.700" }}
                    >
                      查看详情
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </main>

      <Footer />
    </Box>
  );
}
