import { Phone, Mail } from 'lucide-react'
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/footer-bg.png')",position:"relative" }}>
      <div className="container mx-auto px-4 pb-8">
        <h2 className="text-3xl font-bold mb-8 text-center">联系我们</h2>
        <div className="text-center">
          <p className="mb-4">如果您需要船舶维修服务或寻找特定的船舶配件，请随时与我们联系。</p>
          <div className="flex justify-center items-center mb-2">
            <Phone className="h-5 w-5 mr-2" />
            <span>+86 15682112719</span>
          </div>
          <div className="flex justify-center items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>hmm@rongelec.com</span>
          </div>
        </div>
        <div className="bg-black py-4 mt-8 flex items-center justify-center" style={{ position: "absolute", left: "0px", bottom: "0px", width: "100%" }}>
          <p className="text-center text-sm">
            <span className='mr-4'>Copyright 南通睦融电气设备有限公司 [DMG] All rights reserved.</span>
            <Image src="/images/beian-logo.png" alt="备案图标" width={20} height={22} loading="lazy"  className="inline-block mr-1" />
            <a href="http://beian.miit.gov.cn" className="text-center text-sm mr-4">苏ICP备2024135352号</a>
            <span>技术支持：阿里云</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
