import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Flex, Text, useBreakpointValue, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const containerPadding = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box
      as={motion.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      bg="rgba(255, 255, 255, 0.6)"
      position="sticky"
      top="0"
      zIndex="50"
      className="text-blue-900"
    >
      <Flex
        className="container mx-auto"
        px={containerPadding}
        py={4}
        justify="space-between"
        align="center"
      >
        {/* Logo and Company Name */}
        <Box
          as={motion.div}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          display="flex"
          alignItems="center"
          ml={4}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bL2kG06PpnZbb7lGvXWv8BDoQfFu86.png"
            alt="南通睦融电气设备有限公司 Logo"
            width={useBreakpointValue({ base: 80, md: 100 })}
            height={useBreakpointValue({ base: 28, md: 35 })}
          />
          <Text
            fontSize={{ base: 'xl', md: 'xl' }}
            fontWeight="bold"
            color="main.50"
            ml={4}
          >
            南通睦融电气设备
          </Text>
        </Box>

        {/* Full navigation menu for desktop */}
        <nav>
          <Flex
            as={motion.ul}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex"
            spacing={8}
            alignItems="center"
            display={{ base: 'none', md: 'flex' }}
          >
            {['首页', '业务', '关于我们', '联系我们'].map((title, index) => {
              const hrefs = ['/home', '/products', '/about', '/ContactUs'];
              return (
                <Box
                  key={index}
                  as={motion.li}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                  mx={4}
                >
                  <Link href={hrefs[index]} passHref>
                    <Text
                      fontSize={navFontSize}
                      fontWeight="medium"
                      color="blue.900"
                      _hover={{ color: 'blue.600' }}
                      transition="all 0.3s"
                    >
                      {title}
                    </Text>
                  </Link>
                  <Box
                    as="span"
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                    transition="all 0.3s"
                    _groupHover={{ width: 'full' }}
                  ></Box>
                </Box>
              );
            })}
          </Flex>
        </nav>

        {/* IconButton for Mobile Menu - Positioned at the right end */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          aria-label="Open Menu"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          color="main.50"
          size='xl'
          fontSize="2xl"
          ml="auto"
          mr="4"
        />
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"main.50"}>导航菜单</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" align="start">
              {['首页', '业务', '关于我们', '联系我们'].map((title, index) => {
                const hrefs = ['/home', '/products', '/about', '/ContactUs'];
                return (
                  <Link href={hrefs[index]} passHref key={index}>
                    <Text
                      fontSize={navFontSize}
                      fontWeight="medium"
                      color="blue.900"
                      _hover={{ color: 'blue.600' }}
                      mb={4}
                      onClick={onClose}
                    >
                      {title}
                    </Text>
                  </Link>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
