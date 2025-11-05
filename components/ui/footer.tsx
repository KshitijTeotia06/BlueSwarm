import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">

          {/* 1st block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 max-sm:order-1 flex flex-col">
            <div className="mb-4">
              {/* Logo */}
              <Link className="flex items-center justify-center bg-white w-8 h-8 rounded-sm shadow-xs shadow-zinc-950/20" href="/">
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>
            <div className="grow text-sm text-zinc-500">&copy; BlueSwarm. All rights reserved.</div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">About us</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Diversity & Inclusion</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Blog</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Careers</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Financial statements</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Community</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Terms of service</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Collaboration features</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Refund policy</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Terms & Conditions</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Privacy policy</a>
              </li>
              <li>
                <a className="text-zinc-500 hover:text-zinc-900 transition" href="#0">Brand Kit</a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}
