'use client'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import {
  UserPlus,
  Calendar,
  Scissors,
  Box,
  DollarSign,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import '@/app/globals.css'

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
        <Typography className="max-w-2xl" variant="h5">
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
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Preto e dourado"
              src="/sistema.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Rosa"
              src="/sistema2.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Clássico"
              src="/sistema3.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Noturno"
              src="/sistema4.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Naturale"
              src="/sistema5.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Funcionalidades Principais
        </Typography>
        <Typography className="max-w-2xl" variant="p">
          Nosso sistema possui diversas funcionalidades que
          atendem a necessidade de qualquer estabelecimento
          que trabalha com agendamento.
        </Typography>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <UserPlus size={24} />
            </div>
            <Typography variant="h3">
              Gestão de Usuários
            </Typography>
            <Typography variant="p">
              Cadastro de usuários com autenticação Google,
              nome e telefone no Firestore.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <Calendar size={24} />
            </div>
            <Typography variant="h3">
              Gerenciamento de Agendamentos
            </Typography>
            <Typography variant="p">
              Criação, edição, cancelamento de agendamentos
              e envio de notificações via WhatsApp.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <Scissors size={24} />
            </div>
            <Typography variant="h3">
              Gerenciamento de Colaboradores
            </Typography>
            <Typography variant="p">
              Cadastro, edição, gerenciamento de folgas e
              verificação de disponibilidade dos
              colaboradores.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <Box size={24} />
            </div>
            <Typography variant="h3">
              Gestão de Serviços e Produtos
            </Typography>
            <Typography variant="p">
              Adicionar e editar serviços e produtos
              disponíveis para agendamento e venda.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <DollarSign size={24} />
            </div>
            <Typography variant="h3">
              Controle Financeiro
            </Typography>
            <Typography variant="p">
              Verificação de saldos diários, semanais e
              mensais, controle de despesas e categorias.
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div
              className="flex items-center justify-center w-12 h-12 border
                rounded-full"
            >
              <MessageCircle size={24} />
            </div>
            <Typography variant="h3">
              Notificações Automatizadas
            </Typography>
            <Typography variant="p">
              Envio de mensagens via WhatsApp para
              confirmações e atualizações de agendamentos.
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Comparação com Outros Sistemas
        </Typography>
        <div className="grid md:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">
              EasyScheduling
            </Typography>
            <Typography variant="p">
              Gestão completa de agendamentos,
              colaboradores, serviços, produtos e controle
              financeiro.
            </Typography>
            <Typography variant="p" className="text-sm">
              *Sem limitações no número de colaboradores
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">AppBarber</Typography>
            <Typography variant="p">
              Focado em barbearias com gestão de
              agendamentos e colaboradores.
            </Typography>
            <Typography variant="p" className="text-sm">
              *Limitação de até 10 colaboradores
            </Typography>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">
              Outro Sistema
            </Typography>
            <Typography variant="p">
              Funcionalidades limitadas, focado em
              agendamentos simples.
            </Typography>
            <Typography variant="p" className="text-sm">
              *Limitação de até 5 colaboradores
            </Typography>
          </div>
        </div>
      </div>
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
          Planos de Preços
        </Typography>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">Mensal</Typography>
            <Typography variant="h4">
              R$ 50 / mês
            </Typography>
            <Typography variant="p" className="text-sm">
              *Sem limitações no número de colaboradores
            </Typography>
            <Link
              href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20plano%20mensal%20do%20sistema%20EasyScheduling"
              target="_blank"
            >
              <Button size="tiny" variant="ghost">
                Comece Agora
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">Anual</Typography>
            <Typography variant="h4">
              R$ 500 / ano
            </Typography>
            <Typography variant="p" className="text-sm">
              *Desconto de 20% comparado ao plano mensal
            </Typography>
            <Link
              href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20plano%20anual%20do%20sistema%20EasyScheduling"
              target="_blank"
            >
              <Button size="tiny" variant="ghost">
                Comece Agora
              </Button>
            </Link>
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
          <div
            className="flex flex-col gap-3 items-center p-6 border rounded-lg
              w-full md:w-1/2"
          >
            <Typography variant="h3">
              Como funciona o período de teste?
            </Typography>
            <Typography variant="p">
              Oferecemos um período de teste de 14 dias para
              você experimentar todas as funcionalidades do
              sistema.
            </Typography>
          </div>
          <div
            className="flex flex-col gap-3 items-center p-6 border rounded-lg
              w-full md:w-1/2"
          >
            <Typography variant="h3">
              Posso cancelar a qualquer momento?
            </Typography>
            <Typography variant="p">
              Sim, você pode cancelar sua assinatura a
              qualquer momento sem nenhum custo adicional.
            </Typography>
          </div>
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
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Preto e dourado"
              src="/configuracao.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Rosa"
              src="/configuracao2.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Clássico"
              src="/configuracao3.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Noturno"
              src="/configuracao4.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1024}
              height={632}
              alt="Imagem do sistema Easyscheduling com tema Naturale"
              src="/configuracao5.webp"
              className="responsive-image"
              unoptimized
            />
          </SwiperSlide>
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
