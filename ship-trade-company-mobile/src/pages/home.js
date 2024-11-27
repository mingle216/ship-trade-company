import { Box, Flex, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { Wrench, Zap, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { animated, useSpring, useTrail } from 'react-spring';

export default function Home() {
  // 恢复并定义动画效果
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  // 增加轮播图中的文字和按钮的淡入效果
  const trail = useTrail(3, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 800 },
  });

  return (
    <Box className="flex flex-col min-h-screen">
      <Header />

      <Box position="relative" top="0px">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          interval={5000}
          renderIndicator={(clickHandler, isSelected) => (
            <Box
              as="span"
              onClick={clickHandler}
              cursor="pointer"
              mx={1}
              width={isSelected ? "12px" : "8px"}
              height={isSelected ? "12px" : "8px"}
              backgroundColor={isSelected ? "blue.500" : "gray.300"}
              borderRadius="full"
              display="inline-block"
              mt="-40px"
              transition="width 0.3s ease-in-out"
            />
          )}
        >
          {["/images/home1.webp", "/images/home2.webp", "/images/home3.webp"].map((src, index) => (
            <Box key={index} position="relative" width="100%" height={{ base: "30vh", md: "70vh" }}>
              <Image
                src={src}
                alt={`Header Background ${index + 1}`}
                objectFit="cover"
                width="100%"
                height="100%"
              />
              <Flex
                direction="column"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                color="white"
                textAlign="center"
                px={4}
              >
                <animated.div style={trail[0]}>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="bold"
                    color="white"
                    mb={2}
                  >
                    您值得信赖的船舶维修和配件供应商
                  </Text>
                </animated.div>
                <animated.div style={trail[1]}>
                  <Text
                    fontSize={{ base: "sm", md: "lg" }}
                    color="white"
                    fontWeight="medium"
                    mb={4}
                  >
                    畅通航行的稳固基石
                  </Text>
                </animated.div>
                <animated.div style={trail[2]}>
                  <Button
                    as={Link}
                    href="/ContactUs"
                    bg="blue.500"
                    color="white"
                    px={{ base: 3, md: 5 }}
                    py={{ base: 1, md: 2 }}
                    fontSize={{ base: "xs", md: "sm" }}
                    rounded="full"
                    _hover={{ bg: "blue.600" }}
                    transition="all 0.3s"
                  >
                    联系我们
                  </Button>
                </animated.div>
              </Flex>
            </Box>
          ))}
        </Carousel>
      </Box>

      {/* 主体服务部分 */}
      <Box as="main" flexGrow="1">
        <animated.div style={fadeInUp}>
          <Box as="section" id="services" bg="gray.100" py={{ base: 10, md: 20 }}>
            <Box className="container mx-auto px-4">
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                mb={{ base: 4, md: 8 }}
                textAlign="center"
                color="main.50"
              >
                我们的服务
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {[
                  {
                    icon: Wrench,
                    title: "船舶维修",
                    desc: "我们提供全面的船舶维修服务，包括电气系统、发动机和其他关键部件的维护和修理。",
                  },
                  {
                    icon: Zap,
                    title: "岸电改造",
                    desc: "我们专注于船舶岸电系统的设计、安装和升级，帮助船舶在港口使用清洁电力，减少排放和噪音。",
                  },
                  {
                    icon: Package,
                    title: "配件供应",
                    desc: "我们提供各种高质量的船舶配件，确保您的船舶始终保持最佳运行状态。",
                  },
                ].map((service, index) => (
                  <Box
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    bg="white"
                    _hover={{ boxShadow: "lg" }}
                  >
                    <Box textAlign="start">
                      <Box className='flex items-center justify-left mb-4'>
                        <Box as={service.icon} w={6} h={6} color="main.50"  className='mr-2'/>
                        <Text as="h3" fontSize="xl" fontWeight="bold" >
                          {service.title}
                      </Text>
                      </Box>
                      <Text fontSize="md" color="gray.600">
                        {service.desc}
                      </Text>
                    </Box>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </animated.div>

        <animated.div style={fadeInUp}>
          <Box as="section" id="products" bg="gray.100" mb={6}>
            <Box className="container mx-auto px-4">
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="bold"
                mb={{ base: 4, md: 8 }}
                textAlign="center"
                color="main.50"
              >
                业务范围
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {[
                  { name: "发电机系统", type: "电力设备", image: "/images/product-img01.webp" },
                  { name: "货舱进水报警系统", type: "报警设备", image: "/images/product-img02.webp" },
                  { name: "焚烧炉", type: "控制设备", image: "/images/product-img03.webp" },
                  { name: "锅炉", type: "控制设备", image: "/images/product-img04.webp" },
                  { name: "广播电话对讲", type: "内通设备", image: "/images/product-img05.webp" },
                  { name: "主配开关检测", type: "仪表设备", image: "/images/product-img06.webp" },
                  { name: "仪表检测", type: "仪表设备", image: "/images/product-img07.webp" },
                  { name: "分油机", type: "电气设备", image: "/images/product-img08.webp" },
                ].map((product, index) => (
                  <animated.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      bg="white"
                      rounded="lg"
                      shadow="md"
                      overflow="hidden"
                      _hover={{ boxShadow: "xl" }}
                    >
                      <Image src={product.image} alt={product.name} width={400} height={300} objectFit="cover" />
                      <Box p={6}>
                        <Text fontSize="xl" fontWeight="bold" mb={2}>{product.name}</Text>
                        <Text fontSize="md" color="gray.600" mb={2}>类型：{product.type}</Text>
                        <Button
                          as="a"
                          href="/products"
                          colorScheme="blue"
                          variant="link"
                          fontWeight="bold"
                          _hover={{ textDecoration: "underline", color: "blue.700" }}
                        >
                          查看详情
                        </Button>
                      </Box>
                    </Box>
                  </animated.div>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </animated.div>
      </Box> 

      <Footer />
    </Box>
  );
}
