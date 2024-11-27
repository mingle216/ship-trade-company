import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Flex, Text, Input, Button, Checkbox, Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    details: '',
    confirmContent: false,
    captchaInput: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    details: '',
    captcha: '',
  });

  const [captchaText, setCaptchaText] = useState('');

  // 使用 useEffect 在客户端生成动态内容
  useEffect(() => {
    generateCaptcha();
  }, []);

  // 生成简单的验证码
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // 清除对应字段的错误信息
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (formData.name.length > 20) {
      newErrors.name = '姓名不能超过20个字符';
      isValid = false;
    }

    if (!formData.email.includes('@') || formData.email.length > 30) {
      newErrors.email = '电子邮件地址无效或超过30个字符';
      isValid = false;
    }

    if (formData.subject.length > 20) {
      newErrors.subject = '主题不能超过20个字符';
      isValid = false;
    }

    if (formData.details.length > 300) {
      newErrors.details = '内容详情不能超过300个字符';
      isValid = false;
    }

    if (formData.captchaInput?.toLowerCase() !== captchaText.toLowerCase()) {
      newErrors.captcha = '验证码输入错误，请重试';
      isValid = false;
      generateCaptcha();
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.confirmContent) {
      alert('请确认内容后提交');
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('邮件发送成功！');
        setFormData({
          name: '',
          email: '',
          subject: '',
          details: '',
          confirmContent: false,
          captchaInput: '',
        });
        generateCaptcha();
        setErrors({});
      } else {
        alert('邮件发送失败，请稍后再试');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('邮件发送失败，请稍后再试');
    }
  };

  return (
    <Box className="flex flex-col min-h-screen" >
      <Header />
      <main className="flex-grow  px-4 mb-6" >
        <Flex
          direction="column"
          align="center"
          justify="center"
          as={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Text
            as="h2"
            fontSize={{ base: '2xl', md: '2xl' }}
            fontWeight="bold"
            textAlign="center"
            color="main.50"
          >
            请使用下面的表格与我们联系
          </Text>
          <Box
            as="form"
            onSubmit={handleSubmit}
            width={{ base: '100%', md: '60%' }}
            bg="white"
            p={6}
            rounded="lg"
            shadow="lg"
          >
            <Flex direction="column" mb={4}>
              <Text mb={2} fontWeight="medium">
                您的姓名 *
              </Text>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                borderColor="gray.300"
                focusBorderColor="blue.500"
                isInvalid={errors.name}
              />
              {errors.name && <Text color="red.500" fontSize="sm" mt={1}>{errors.name}</Text>}
            </Flex>

            <Flex direction="column" mb={4}>
              <Text mb={2} fontWeight="medium">
                电子邮件 *
              </Text>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                borderColor="gray.300"
                focusBorderColor="blue.500"
                isInvalid={errors.email}
              />
              {errors.email && <Text color="red.500" fontSize="sm" mt={1}>{errors.email}</Text>}
            </Flex>

            <Flex direction="column" mb={4}>
              <Text mb={2} fontWeight="medium">
                主题
              </Text>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                borderColor="gray.300"
                focusBorderColor="blue.500"
                isInvalid={errors.subject}
              />
              {errors.subject && <Text color="red.500" fontSize="sm" mt={1}>{errors.subject}</Text>}
            </Flex>

            <Flex direction="column" mb={4}>
              <Text  fontWeight="medium">
                内容详情 *
              </Text>
              <Textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                borderColor="gray.300"
                focusBorderColor="blue.500"
                isInvalid={errors.details}
                maxLength={300}
              />
              {errors.details && <Text color="red.500" fontSize="sm" mt={1}>{errors.details}</Text>}
              <Text fontSize="sm" color="gray.500" textAlign="right">* 限制300字以内</Text>
            </Flex>

            <Flex direction="column" mb={4}>
              <Text mb={2} fontWeight="medium">
                验证码 *
              </Text>
              <Flex align="center">
                <Input
                  type="text"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                  w="70%"
                  isInvalid={errors.captcha}
                />
                <Button
                  ml={4}
                  bg="gray.500"
                  fontWeight="bold"
                  onClick={generateCaptcha}
                  _hover={{ bg: 'gray.500' }}
                >
                  {captchaText}
                </Button>
              </Flex>
              {errors.captcha && <Text color="red.500" fontSize="sm" mt={1}>{errors.captcha}</Text>}
              <Text fontSize="sm" color="gray.500">点击验证码文本可以刷新验证码</Text>
            </Flex>

            <Checkbox
              name="confirmContent"
              isChecked={formData.confirmContent}
              onChange={handleChange}
              colorScheme="blue"
              mb={4}
              textAlign={"center"}
            >
              请确认内容后提交 * 必填
            </Checkbox>

            <Button
              type="submit"
              bg="blue.500"
              color="white"
              w="full"
              rounded="full"
              _hover={{ bg: 'blue.500' }}
              transition="all 0.3s"
            >
              提交
            </Button>
          </Box>
        </Flex>
      </main>
      <Footer />
    </Box>
  );
}
