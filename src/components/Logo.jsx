import Image from 'next/image';
import logo from '@/images/logo.png'

export function Logo(props) {
  return (
                          <Image
                        className="w-full"
                        src={logo}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        unoptimized
                      />
  )
}
