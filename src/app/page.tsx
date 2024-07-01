'use client'
import React, { Suspense, lazy } from 'react'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/app/globals.css'

const FeatureSection = lazy(
  async () => await import('@/components/FeatureSection')
)
const ComparisonSection = lazy(
  async () => await import('@/components/ComparisonSection')
)
const PricePlans = lazy(
  async () => await import('@/components/PricePlans')
)

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Sistema de Agendamento e Controle de Negócios
        </Typography>
        <Typography className="max-w-2xl" variant="h2">
          Otimize a gestão de agendamentos, colaboradores,
          serviços, produtos e controle financeiro com nosso
          sistema.
        </Typography>
        <Link
          href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20sistema%20EasyScheduling%20para%20o%20negócio"
          target="_blank"
        >
          <Button
            variant="ghost"
            className="bg-green-500 text-white hover:bg-green-600 py-3 px-6 text-lg"
          >
            <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Comece Agora
          </Button>
        </Link>
      </div>
      <div className="custom-image">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {[
            '/sistema.webp',
            '/sistema2.webp',
            '/sistema3.webp',
            '/sistema4.webp',
            '/sistema5.webp'
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1024}
                height={632}
                alt={`Imagem do sistema Easyscheduling ${index + 1}`}
                src={src}
                className="responsive-image"
                unoptimized
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <FeatureSection />
        <ComparisonSection />
        <PricePlans />
      </Suspense>
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Por que escolher nosso sistema?
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">
              Facilidade de Uso
            </Typography>
            <Typography variant="p">
              Interface intuitiva e fácil de usar, sem
              necessidade de treinamento avançado.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">
              Suporte ao Cliente
            </Typography>
            <Typography variant="p">
              Suporte dedicado para ajudar você em qualquer
              momento.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Parceiros
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Image
              src="/logo_felipe_lima.png"
              alt="Cliente 1"
              width={100}
              height={100}
              className="rounded-full"
            />
            <Typography variant="h3">
              Felipe Lima Barbearia
            </Typography>
            <Typography variant="p">
              &quot;A interface é intuitiva e fácil de usar.
              Perfeito para a minha Barbearia.&quot;
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Perguntas Frequentes
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 items-center w-full">
          {[
            {
              question: 'Como funciona o período de teste?',
              answer:
                'Oferecemos um período de teste de 14 dias para você experimentar todas as funcionalidades do sistema.'
            },
            {
              question:
                'Posso cancelar a qualquer momento?',
              answer:
                'Sim, você pode cancelar sua assinatura a qualquer momento sem nenhum custo adicional.'
            }
          ].map(({ question, answer }, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center p-6 border rounded-lg
                w-full md:w-1/2"
            >
              <Typography variant="h3">
                {question}
              </Typography>
              <Typography variant="p">{answer}</Typography>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Configuração Instantânea
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Configure rapidamente seu sistema de agendamento
            sem necessidade de código personalizado.
          </Typography>
        </div>
      </div>
      <div className="custom-image">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {[
            '/configuracao.webp',
            '/configuracao2.webp',
            '/configuracao3.webp',
            '/configuracao4.webp',
            '/configuracao5.webp'
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                width={1024}
                height={632}
                alt={`Imagem do sistema Easyscheduling ${index + 1}`}
                src={src}
                className="responsive-image"
                unoptimized
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Entre em Contato
          </Typography>
          <div>
            Agende uma demonstração ou entre em contato
            conosco para mais informações
          </div>
          <Link
            href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20sistema%20EasyScheduling%20para%20o%20negócio"
            target="_blank"
          >
            <Button
              variant="ghost"
              className="bg-green-500 text-white hover:bg-green-600 py-3 px-6 text-lg"
            >
              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              Agende Agora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
