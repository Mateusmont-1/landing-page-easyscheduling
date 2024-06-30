import Typography from '@/components/ui/typography';

const comparisons = [
  {
    name: 'EasyScheduling',
    description: 'Gestão completa de agendamentos, colaboradores, serviços, produtos e controle financeiro.',
    note: '*Sem limitações no número de colaboradores'
  },
  {
    name: 'AppBarber',
    description: 'Focado em barbearias com gestão de agendamentos e colaboradores.',
    note: '*Limitação de até 10 colaboradores'
  },
  {
    name: 'Outro Sistema',
    description: 'Funcionalidades limitadas, focado em agendamentos simples.',
    note: '*Limitação de até 5 colaboradores'
  }
];

export default function ComparisonSection() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Typography className="max-w-2xl" variant="h1">
        Comparação com Outros Sistemas
      </Typography>
      <div className="grid md:grid-cols-3 gap-6 w-full">
        {comparisons.map(({ name, description, note }, index) => (
          <div key={index} className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">{name}</Typography>
            <Typography variant="p">{description}</Typography>
            <Typography variant="p" className="text-sm">{note}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
