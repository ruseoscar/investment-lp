import Image from 'next/image';
import logo from '@/images/logo.png'

export function Logo(props) {
  return (
                          <Image
                        
                        src={logo}
                        alt=""
                        priority
                        width= {100}
                        height= {100}
                        unoptimized
                      />
  )
}
