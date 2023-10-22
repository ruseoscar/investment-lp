import Link from 'next/link'

import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-5 text-left text-sm text-slate-700">
          Contact:
          <p>JOSMAXIM SDN BHD </p> <p>G-3-13, Plaza Arkadia, Jalan Residen 3</p>
          <p>52200 Kuala Lumpur</p> <p>Tel: 03-2704 8094</p>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-5 sm:flex-row-reverse sm:justify-between">
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Josmaxim Sdn Bhd. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
