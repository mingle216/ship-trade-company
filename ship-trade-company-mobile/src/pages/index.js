import { Box, Flex, Text, Button, Image, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { Wrench, Zap, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { animated, useSpring, useTrail } from 'react-spring';
import Head from 'next/head';

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

  // 移动端动画
  const mobileFadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  return (
    <Box className="flex flex-col min-h-screen">
    <Head>
      <title>南通睦融电气有限公司</title>
      <meta name="description" content="南通睦融电气有限公司" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/favicon.ico" />

      <link rel="icon" href="/images/favicon-16.png" sizes="16x16" />
      <link rel="icon" href="/images/favicon-32.png" sizes="32x32" />
      
      <link rel="apple-touch-icon" href="/images/apple-icon.png" />
    </Head>

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
                loading='lazy'
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

        {/* 移动端岸电改造项目部分 */}
        <Box as="section" id="shore-power" py={10}>
          <animated.div style={mobileFadeInUp}>
            <Box className="container mx-auto px-4">
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                color="main.50"
                textAlign="center"
                py={5}
              >
                船舶岸电改造项目
              </Text>

              <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" wrap="wrap">
                
                <animated.div style={mobileFadeInUp} className="mb-8 md:mb-0 md:w-1/2">
                  <Image
                    src="/images/andian.webp"
                    alt="岸电改造"
                    width="100%"
                    height={{ base: "auto", md: "300px" }}
                    className="rounded-lg shadow-lg object-cover"
                    loading='lazy'
                  />
                </animated.div>

                <animated.div  className="" style={mobileFadeInUp}>
                  <Text className="text-lg mb-2">
                    我们具备丰富的技术经验，可为各种类型的船舶提供量身定制的岸电解决方案。主要分为低压和高压两种方案，适用于不同类型和规模的船舶。
                  </Text>
                  <Text className="text-lg mb-2">低压岸电改造主要适用于适用于中小型港口设施。低压系统操作简单，成本较低，能够满足基本的停泊电力需求，灵活性高。</Text>
                  <Text className="text-lg mb-2">对于大型船舶，如集装箱船、油轮、货轮，我们提供高压岸电改造服务，满足高功率需求。高压系统采用先进的配电控制技术，确保电力高效传输和使用，同时具备完善的安全保护措施，保障电力连接安全。</Text>
                  <Text className="text-lg mb-2">
                    我们提供全程技术支持，包括系统设计、安装、调试和维护，确保岸电系统的稳定运行，并与港口管理部门合作，确保安装符合国际标准，满足船东和运营方的需求。通过提供清洁高效的岸电解决方案，我们推动航运业可持续发展，为碳中和目标作出贡献。
                  </Text>
                  <Text className="text-lg mb-2">
                    实施岸电改造后，客户可显著降低燃油成本，减少设备的磨损与维护费用，同时符合国际海事组织（IMO）的环保法规。我们的目标是为每艘停泊的船舶提供环保、经济、安全的电力支持，助力港口和航运业向绿色智能化方向发展。
                  </Text>
                </animated.div>
              </Flex>
            </Box>
          </animated.div>
        </Box>

        <animated.div style={fadeInUp}>
          <Box as="section" id="products" bg="white" mb={6} >
            <Box className="container mx-auto px-4 py-8">
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
                      <Image src={product.image} alt={product.name} width={400} height={300} loading='lazy' objectFit="cover" />
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
