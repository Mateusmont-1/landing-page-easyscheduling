import React, { memo } from 'react';
import { UserPlus, Calendar, Scissors, Box, DollarSign, MessageCircle } from 'lucide-react';
import Typography from '@/components/ui/typography';

const features = [
  {
    icon: UserPlus,
    title: 'Gestão de Usuários',
    description: 'Cadastro de usuários com autenticação Google, nome e telefone no Firestore.'
  },
  {
    icon: Calendar,
    title: 'Gerenciamento de Agendamentos',
    description: 'Criação, edição, cancelamento de agendamentos e envio de notificações via WhatsApp.'
  },
  {
    icon: Scissors,
    title: 'Gerenciamento de Colaboradores',
    description: 'Cadastro, edição, gerenciamento de folgas e verificação de disponibilidade dos colaboradores.'
  },
  {
    icon: Box,
    title: 'Gestão de Serviços e Produtos',
    description: 'Adicionar e editar serviços e produtos disponíveis para agendamento e venda.'
  },
  {
    icon: DollarSign,
    title: 'Controle Financeiro',
    description: 'Verificação de saldos diários, semanais e mensais, controle de despesas e categorias.'
  },
  {
    icon: MessageCircle,
    title: 'Notificações Automatizadas',
    description: 'Envio de mensagens via WhatsApp para confirmações e atualizações de agendamentos.'
  }
];

function FeatureSection() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Typography className="max-w-2xl" variant="h1">
        Funcionalidades Principais
      </Typography>
      <Typography className="max-w-2xl" variant="p">
        Nosso sistema possui diversas funcionalidades que atendem a necessidade de qualquer estabelecimento que trabalha com agendamento.
      </Typography>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 border rounded-full">
              <Icon size={24} />
            </div>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="p">{description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(FeatureSection);
