import { Wrench, Zap, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="relative" style={{ top: '0px' }}>
        <section id="home" className="py-20 min-h-[calc(100vh)]">
          {/* bg-white bg-opacity-30 */}
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              您值得信赖的船舶维修和配件供应商
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl mb-6 text-white font-bold"
            >
              畅通航行的稳固基石
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              href="/ContactUs"
              className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 z-1"
            >
              联系我们
            </motion.a>
          </div>
        </section>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          interval={5000}
          height="600px"
        >
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              src="/images/home1.webp"
              alt="Header Background 1"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              src="/images/home2.webp"
              alt="Header Background 2"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              src="/images/home3.webp"
              alt="Header Background 3"
              layout="fill"
              objectFit="fill"
              quality={100}
            />
          </div>
        </Carousel>
      </div>

      <main className="flex-grow">
        <section id="services" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8 text-center main-color"
            >
              我们的服务
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[{ icon: Wrench, title: "船舶维修", desc: "我们提供全面的船舶维修服务，包括电气系统、发动机和其他关键部件的维护和修理。" },
                { icon: Zap, title: "岸电改造", desc: "我们专注于船舶岸电系统的设计、安装和升级，帮助船舶在港口使用清洁电力，减少排放和污染。" },
                { icon: Package, title: "配件供应", desc: "我们提供各种高质量的船舶配件，确保您的船舶始终保持最佳运行状态。" }]
                .map((service, index) => (
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
            <div className="text-center mt-8">
              <Link href="/about" className="text-blue-600 hover:underline">查看所有服务</Link>
            </div>
          </div>
        </section>

        <section id="shore-power" className="py-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="container mx-auto px-4"
          >
            <div className="flex flex-col md:flex-row items-start justify-between">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-8 md:mb-0 md:w-1/2"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E-2024-10-03-21.54%20(1)-mMFTmJXQiryb8BfD3zmFdBpU0pDCjG.png"
                  alt="岸电改造"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="md:pl-8 md:w-1/2"
                style={{ height: '500px', overflowY: 'auto'}}
              >
                <h2 className="text-3xl font-bold mb-4 main-color">船舶岸电改造项目</h2>
                <p className="text-lg mb-1">
                  我们具备丰富的技术经验，可为各种类型的船舶提供量身定制的岸电解决方案。主要分为低压和高压两种方案，适用于不同类型和规模的船舶。
                </p>
                <p className="text-lg mb-1">
                低压岸电改造主要适用于适用于中小型港口设施。低压系统操作简单，成本较低，能够满足基本的停泊电力需求，灵活性高。
                </p>
                <p className="text-lg mb-1">
                对于大型船舶，如集装箱船、油轮、货轮，我们提供高压岸电改造服务，满足高功率需求。高压系统采用先进的配电控制技术，确保电力高效传输和使用，同时具备完善的安全保护措施，保障电力连接安全。
                </p>

                <p className="text-lg mb-1">
                我们提供全程技术支持，包括系统设计、安装、调试和维护，确保岸电系统的稳定运行，并与港口管理部门合作，确保安装符合国际标准，满足船东和运营方的需求。通过提供清洁高效的岸电解决方案，我们推动航运业可持续发展，为碳中和目标作出贡献。
                </p>

                <p className="text-lg">
                实施岸电改造后，客户可显著降低燃油成本，减少设备的磨损与维护费用，同时符合国际海事组织（IMO）的环保法规。我们的目标是为每艘停泊的船舶提供环保、经济、安全的电力支持，助力港口和航运业向绿色智能化方向发展。
                </p>
                
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="products" className="py-10">
          <div className="container mx-auto px-4" >
            <h2 className="text-3xl font-bold mb-8 text-center main-color">业务范围</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "发电机系统", type: "电力设备",  image: "/images/product-img01.webp" },
              { name: "货舱进水报警系统", type: "报警设备",  image: "/images/product-img02.webp" },
              { name: "焚烧炉", type: "控制设备",  image: "/images/product-img03.webp" },
              { name: "锅炉", type: "控制设备",  image: "/images/product-img04.webp" },
              { name: "广播电话对讲", type: "内通设备",  image: "/images/product-img05.webp" },
              { name: "主配开关检测", type: "仪表设备",  image: "/images/product-img06.webp" },
              { name: "仪表检测", type: "仪表设备",  image: "/images/product-img07.webp" },
              { name: "分油机", type: "电气设备", image: "/images/product-img08.webp" },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image src={product.image} alt={product.name} width={280} height={200} className="w-full object-cover" style={{height: "300px"}} />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">类型：{product.type}</p>
                  <motion.a
                    whileHover={{ color: "#1E90FF" }}
                    href="/products"
                    className="text-blue-600 hover:underline"
                  >
                    查看详情
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
