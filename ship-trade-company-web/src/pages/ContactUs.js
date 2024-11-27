import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    captcha: ''
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

  const sanitizeInput = (input) => {
    // 移除特殊字符，如 <, >, ', ", ;, () 等，以防止 XSS 或 SQL 注入攻击
    return input.replace(/[<>;'"()]/g, '');
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    formData.name = sanitizeInput(formData.name);
    formData.email = sanitizeInput(formData.email);
    formData.subject = sanitizeInput(formData.subject);
    formData.details = sanitizeInput(formData.details);
    formData.captchaInput = sanitizeInput(formData.captchaInput);

    if (formData.name.length > 20) {
      newErrors.name = '姓名不能超过20个字符';
      isValid = false;
      formData.name = '';
    }

    if (!formData.email.includes('@') || formData.email.length > 30) {
      newErrors.email = '电子邮件地址无效或超过30个字符';
      isValid = false;
      formData.email = '';
    }

    if (formData.subject.length > 20) {
      newErrors.subject = '主题不能超过20个字符';
      isValid = false;
      formData.subject = '';
    }

    if (formData.details.length > 300) {
      newErrors.details = '内容详情不能超过300个字符';
      isValid = false;
      formData.details = '';
    }

    if (formData.captchaInput?.toLowerCase() !== captchaText.toLowerCase()) {
      newErrors.captcha = '验证码输入错误，请重试';
      isValid = false;
      formData.captchaInput = '';
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

    // 您的表单提交逻辑
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
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header-contact"
        ></motion.div>
      </div>

      <main className="flex-grow py-20">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-center main-color">请使用下面的表格与我们联系</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">您的姓名 *</label>
              <motion.input
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">电子邮件 *</label>
              <motion.input
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">主题</label>
              <motion.input
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            <div className="mb-1">
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">内容详情 *</label>
              <motion.textarea
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
            </div>
            <div className="flex mb-1 justify-end">
              <small className="text-gray-500 text-align-center">* 限制300字以内</small>
            </div>

            <div className="mb-4">
              <label htmlFor="captchaInput" className="block text-sm font-medium text-gray-700">验证码 *</label>
              <div className="flex items-center space-x-4">
                <motion.input
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  type="text"
                  id="captchaInput"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-3/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-xl font-bold bg-gray-100 p-2 rounded-md cursor-pointer ml-2 pl-4 pr-4 w-1/4 flex justify-center text-align-center" onClick={generateCaptcha}>
                  {captchaText}
                </div>
              </div>
              {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
              <small className="text-gray-500">点击验证码文本可以刷新验证码</small>
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="confirmContent"
                name="confirmContent"
                checked={formData.confirmContent}
                onChange={handleChange}
                required
                className="mr-2"
              />
              <label htmlFor="confirmContent" className="text-sm text-gray-700">请确认内容后提交 *必填</label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition duration-300"
            >
              提交
            </motion.button>
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
