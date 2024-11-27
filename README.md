# README

## 概述

该项目是一个现代化、响应迅速的船舶企业官网。它提供了公司信息、产品和服务详情，并具备与客户联系的功能。项目致力于通过优雅的 UI 和丝滑的动画效果，为用户提供卓越的使用体验。因为web端适配移动端后，会有所变形，就单独又做了移动端，需要在服务器中做nignx配置。
官网：https://www.rongelec.com/

## 技术栈

### 前端框架

- **Next.js**: 该项目使用了 **Next.js**，一个基于 React 的前端框架，支持 SSR（服务器端渲染）和 SSG（静态生成），从而提升页面加载速度和 SEO 表现。

- **React**: **React** 是本项目的核心框架，提供了组件化开发的灵活性，允许构建复杂的用户界面并实现状态管理。

### 样式与 UI 组件

- **Chakra UI**: 使用了 **Chakra UI** 作为主要的组件库和样式框架，提供了一致且现代的 UI 风格，支持响应式设计，保证在不同设备上的良好表现。

- **CSS Modules**: 使用了部分 **CSS Modules** 进行细粒度的样式控制，使得样式更加模块化和隔离。

### 动画效果

- **Framer Motion** & **React Spring**: 项目中的动画效果采用了 **Framer Motion** 和 **React Spring**。**Framer Motion** 负责组件的基本动画和过渡效果，而 **React Spring** 则用于复杂的交互动画和渐入式效果，使页面交互更丝滑、自然。

### 图片处理

- **Next/Image**: 使用了 **Next.js** 内置的 `Image` 组件来处理页面中的图片，确保图片的自动优化和高效加载，为用户带来更快的访问速度和优化的用户体验。

### 表单管理

- **React Hooks**: 在表单管理中使用了 **React Hooks**（例如 `useState` 和 `useEffect`）来处理表单状态和验证逻辑，并结合 **Chakra UI** 提供的输入组件，实现直观且用户友好的表单交互。

### 后端与 API

- **Next.js API 路由**: 项目中使用了 **Next.js API Routes** 来处理与后端的简单数据交互，例如处理用户的表单提交请求。

- **Nodemailer**: 项目使用 **Nodemailer** 进行邮件发送功能，通过 QQ 邮箱的 SMTP 服务器配置，处理用户在联系表单中提交的信息，并发送到指定邮箱。通过环境变量配置邮箱账号和授权码，保证了安全性。

  ```js
  import nodemailer from 'nodemailer';
  
  const sendMailHandler = async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, subject, details } = req.body;
  
      let transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      let mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: subject || '新消息',
        text: `来自：${name}\n邮箱：${email}\n内容：\n${details}`,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: '邮件发送成功' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: '邮件发送失败' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  
  export default sendMailHandler;
  ```

### 验证与安全性

- **简单验证码生成**: 使用客户端逻辑生成了简单的验证码，以防止机器人和恶意用户的表单滥用。

- **表单输入验证**: 通过自定义的验证逻辑来确保用户输入的有效性，防止 SQL 注入和 XSS 攻击等常见安全问题。

## 项目特性

- **响应式设计**: 该项目采用完全响应式设计，使用 Chakra UI 的 `Box`、`Flex` 等组件，保证网站在各种设备上的美观和一致性。

- **用户友好的动画**: 项目中特别注重动画效果，通过 **Framer Motion** 和 **React Spring** 使得页面中的元素以一种优雅且平滑的方式呈现和交互。

- **现代化的 UI**: 通过 Chakra UI 和定制化的样式使整个 UI 现代且专业，提供了一种清新、简洁的企业形象展示。

## 快速启动

1. 克隆仓库：
   ```bash
   git clone <repo-url>
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

   打开浏览器访问 `http://localhost:3000` 进行预览。

## 目录结构

- **/components**: 复用的 UI 组件，如 `Header`、`Footer` 等。
- **/pages**: 应用的页面文件，包括主页、关于我们、联系我们等页面。
- **/public**: 静态文件，包含图片和其他资源。
- **/styles**: 样式文件和自定义 CSS 模块。

