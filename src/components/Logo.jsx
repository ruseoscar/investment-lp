import Image from 'next/image';
import logo from '@/images/logo.png'

export function Logo(props) {
  return (
                          <Image
                        
                        src={logo}
                        alt=""
                        priority
                        width= {200}
                        height= {200}
                        unoptimized
                      />
  )
}
