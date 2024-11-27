import { Box, Flex, Text } from '@chakra-ui/react';
import { Wrench, Zap, Package } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { animated, useSpring, useTrail } from 'react-spring';
import Image from 'next/image';

export default function About() {
  // 优化后的入场动画配置
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 800, easing: (t) => t * (2 - t) },
  });

  const fadeInLeft = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 800, easing: (t) => t * (2 - t) },
  });

  const fadeInRight = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 800, easing: (t) => t * (2 - t) },
  });

  const services = [
    { icon: Wrench, title: "船舶维修", desc: "我们提供全面的船舶维修服务，包括电气系统、发动机和其他关键部件的维护和修理。" },
    { icon: Zap, title: "岸电改造", desc: "我们专注于船舶岸电系统的设计、安装和升级，帮助船舶在港口使用清洁电力，减少排放和噪音。" },
    { icon: Package, title: "配件供应", desc: "我们提供各种高质量的船舶配件，确保您的船舶始终保持最佳运行状态。" },
  ];

  const servicesTrail = useTrail(services.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <Box className="flex flex-col min-h-screen">
      <Header />

      <Box as="main" flexGrow="1"  mb={6}>
        <Box className="container mx-auto px-4">
          <Text
            as="h2"
            fontSize={{ base: '2xl', md: '2xl' }}
            fontWeight="bold"
            textAlign="center"
            color="main.50"
            mb={4}
          >
            公司介绍
          </Text>
          <animated.div style={fadeInUp}>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
              <animated.div style={fadeInLeft} className="w-full md:w-1/2" mb={{ base: 8, md: 0 }}>
                <Image
                  src="/images/company-overview.webp"
                  alt="公司概况"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover mb-4"
                />
              </animated.div>
              <animated.div style={fadeInRight} className="w-full md:w-1/2">
                <Text fontSize="lg" mb={4}>
                  南通睦融电气设备有限公司是一家专业从事船舶维修、配件供应及岸电改造的公司，致力于为客户提供优质的服务和高效的解决方案。我们深耕海事行业多年，拥有超过15年的经验和技术积累，服务的客户遍布国内外。
                </Text>
                <Text fontSize="lg" mb={4}>
                  我们的业务涵盖了船舶维修、配件供应以及岸电改造项目。我们的专业团队可以为各种类型的船舶提供电气系统、发动机及其他重要设备的维修服务，确保您的船舶保持最佳状态。同时，我们提供多样的高质量船舶配件，帮助客户迅速解决零部件更换需求。
                </Text>
                <Text fontSize="lg" mb={4}>
                  此外，我们还提供岸电改造服务，帮助船舶在港口停泊期间使用陆地电源，以减少污染和降低运营成本。我们致力于为客户提供环保、可靠的岸电解决方案，确保船舶的可持续运营。
                </Text>
              </animated.div>
            </Flex>
          </animated.div>

          <Box mt={4}>
            <Text as="h3" fontSize="2xl" fontWeight="bold" mb={4} textAlign="center" color="main.50">
              我们提供的服务
            </Text>
            <Flex wrap="wrap" gap={10} justifyContent="space-between">
              {servicesTrail.map((style, index) => (
                <animated.div
                  key={index}
                  style={style}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:translate-y-2 cursor-pointer"
                  flexBasis={{ base: "100%", md: "30%" }}
                  onClick={() => console.log(`${services[index].title} 卡片被点击`)}
                >
                  <Flex alignItems="center" mb={4}>
                    <Box as={services[index].icon} w={6} h={6} color="main.50" mr={3} />
                    <Text as="h3" fontSize="xl" fontWeight="bold">
                      {services[index].title}
                    </Text>
                  </Flex>
                  <Text fontSize="lg" color="gray.700">
                    {services[index].desc}
                  </Text>
                </animated.div>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
