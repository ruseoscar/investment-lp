import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden py-32"
      style={{
        background: 'rgb(43,151,32)',
        background:
          'linear-gradient(0deg, rgba(43,151,32,1) 0%, rgba(94,243,140,1) 100%)',
      }}
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl capitalize tracking-tight text-white sm:text-4xl">
            Get a headstart on your wealth journey
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your wealth and brings the best to the
            next generation and loved ones.
          </p>
          <Button href="/" color="white" className="mt-10">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  )
}
