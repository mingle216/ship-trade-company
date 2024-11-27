import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box className='flex '>
      <Box as="footer" bg="gray.900" color="white" py={{ base: 8, md: 4 }} bgImage="url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ETM2Or7etXmARNOhFvdEdU6dJrNNUc.png')" bgPos="center" bgSize="cover" position="relative">
        <Box className="container" px={{ base: 4, md: 8 }}  pb={{ base: 4, md: 8 }}>
          <Text as="h2" fontSize={{ base: "xl", md: "2xl" }} color="white" fontWeight="bold" className='mb-2'  textAlign="center">联系我们</Text>
          <Box textAlign="center">
            <Text className='mb-2' fontSize={{ base: "md", md: "lg" }} color="white">如果您需要船舶维修服务或寻找特定的船舶配件，请随时与我们联系。</Text>
            <Flex justify="center" align="center" mb={1}>
              <Phone className="h-4 w-4 mr-2" />
              <Text fontSize={{ base: "sm", md: "md" }} color="white">+86 15682112719</Text>
            </Flex>
            <Flex className='mb-2' justify="center" align="center">
              <Mail className="h-4 w-4 mr-2" />
              <Text fontSize={{ base: "sm", md: "md" }} color="white">hmm@rongelec.com</Text>
            </Flex>
          </Box>
        </Box>
      </Box >
        <Box className='h-10 ' bg="black" py={{ base: 6, md: 4 }} mt={{ base: 10, md: 8 }} display="flex" alignItems="center" justifyContent="center" position="absolute" left="0" bottom="0" width="100%">
        <Box textAlign="center" fontSize={{ base: "xs", md: "sm" }} color="white"  >
          <span >Copyright 南通睦融电气设备有限公司 [DMG] All rights reserved.</span>
          <Box>
            <Image src="/images/beian-logo.png" alt="备案图标" width={14} height={14} className="inline-block mr-1" />
            <a href="http://beian.miit.gov.cn" className="text-center  mr-4" >苏ICP备2024135352号</a>
            <span >技术支持：阿里云</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
