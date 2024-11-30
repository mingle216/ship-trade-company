import { Wrench, Zap, Package } from 'lucide-react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { lazy } from 'react';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header-about"
        ></motion.div>
      </div>

      <main className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center "
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <Image
                src="/images/company-overview.webp"      
                alt="Lazy Load Image"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover"
                loading="lazy" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <p className="text-lg mb-4">
                南通睦融电气设备有限公司是一家专业从事船舶维修、配件供应及岸电改造的公司，致力于为客户提供优质的服务和高效的解决方案。我们深耕海事行业多年，拥有超过15年的经验和技术积累，服务的客户遍布国内外。
              </p>
              <p className="text-lg mb-4">
                我们的业务涵盖了船舶维修、配件供应以及岸电改造项目。我们的专业团队可以为各种类型的船舶提供电气系统、发动机及其他重要设备的维修服务，确保您的船舶保持最佳状态。同时，我们提供多样的高质量船舶配件，帮助客户迅速解决零部件更换需求。
              </p>
              <p className="text-lg mb-4">
                此外，我们还提供岸电改造服务，帮助船舶在港口停泊期间使用陆地电源，以减少污染和降低运营成本。我们致力于为客户提供环保、可靠的岸电解决方案，确保船舶的可持续运营。
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center main-color">我们提供的服务</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[{ icon: Wrench, title: "船舶维修", desc: "我们提供全面的船舶维修服务，包括电气系统、发动机和其他关键部件的维护和修理。" },
                { icon: Zap, title: "岸电改造", desc: "我们专注于船舶岸电系统的设计、安装和升级，帮助船舶在港口使用清洁电力，减少排放和噪音。" },
                { icon: Package, title: "配件供应", desc: "我们提供各种高质量的船舶配件，确保您的船舶始终保持最佳运行状态。" }].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start max-h-[300px]"
                >
                  <div className='flex items-center mb-4'>
                    <service.icon className="h-6 w-6 text-blue-800 mr-3" />
                    <h3 className="text-2xl font-bold ">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
