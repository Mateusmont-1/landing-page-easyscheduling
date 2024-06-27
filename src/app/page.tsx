import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { UserPlus, Calendar, Scissors, Box, DollarSign, MessageCircle } from 'lucide-react'
import Link from 'next/link'

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
          Otimize a gestão de agendamentos, colaboradores, serviços, produtos e controle financeiro com nosso sistema.
        </Typography>
        <Link
          href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20sistema%20EasyScheduling%20para%20o%20negócio"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            <Image
              src="/whatsapp-logo.png"
              alt="WhatsApp Logo"
              width={20}
              height={20}
              className="mr-2"
            />
            {`Comece Agora`}
          </Button>
        </Link>
        <div className="w-full">
          <Image
            width={1024}
            height={632}
            alt="Imagem do Sistema de Agendamento"
            src="/sistema.gif"
            className="w-full h-auto"
            unoptimized={true} // Desativa a otimização para este GIF
          />
        </div>
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Funcionalidades Principais
          </Typography>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<UserPlus size={24} />}
              headline="Gestão de Usuários"
              description="Cadastro de usuários com autenticação Google, nome e telefone no Firestore."
            />
            <Feature
              icon={<Calendar size={24} />}
              headline="Gerenciamento de Agendamentos"
              description="Criação, edição, cancelamento de agendamentos e envio de notificações via WhatsApp."
            />
            <Feature
              icon={<Scissors size={24} />}
              headline="Gerenciamento de Colaboradores"
              description="Cadastro, edição, gerenciamento de folgas e verificação de disponibilidade dos colaboradores."
            />
            <Feature
              icon={<Box size={24} />}
              headline="Gestão de Serviços e Produtos"
              description="Adicionar e editar serviços e produtos disponíveis para agendamento e venda."
            />
            <Feature
              icon={<DollarSign size={24} />}
              headline="Controle Financeiro"
              description="Verificação de saldos diários, semanais e mensais, controle de despesas e categorias."
            />
            <Feature
              icon={<MessageCircle size={24} />}
              headline="Notificações Automatizadas"
              description="Envio de mensagens via WhatsApp para confirmações e atualizações de agendamentos."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Configuração Instantânea
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Configure rapidamente seu sistema de agendamento sem necessidade de código personalizado.
          </Typography>
          <div className="w-full">
            <Image
              width={1024}
              height={632}
              alt="Configuração do Sistema"
              src="/configuracao.gif"
              className="w-full h-auto"
              unoptimized={true} // Desativa a otimização para este GIF
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Entre em Contato
          </Typography>
          <div>Agende uma demonstração ou entre em contato conosco para mais informações</div>
          <Link
            href="https://wa.me/5511948525402?text=Estou%20interessado%20no%20sistema%20EasyScheduling%20para%20o%20negócio"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp Logo"
                width={20}
                height={20}
                className="mr-2"
              />
              {`Agende Agora`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
