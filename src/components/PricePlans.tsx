import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import Link from 'next/link';

const plans = [
  {
    plan: 'Mensal',
    price: 'R$ 50 / mês',
    note: '*Sem limitações no número de colaboradores',
    link: 'https://wa.me/5511948525402?text=Estou%20interessado%20no%20plano%20mensal%20do%20sistema%20EasyScheduling'
  },
  {
    plan: 'Anual',
    price: 'R$ 500 / ano',
    note: '*Desconto de 20% comparado ao plano mensal',
    link: 'https://wa.me/5511948525402?text=Estou%20interessado%20no%20plano%20anual%20do%20sistema%20EasyScheduling'
  }
];

export default function PricePlans() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <Typography className="max-w-2xl" variant="h1">Planos de Preços</Typography>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {plans.map(({ plan, price, note, link }, index) => (
          <div key={index} className="flex flex-col gap-3 items-center p-6 border rounded-lg">
            <Typography variant="h3">{plan}</Typography>
            <Typography variant="h4">{price}</Typography>
            <Typography variant="p" className="text-sm">{note}</Typography>
            <Link href={link} target="_blank">
              <Button size="tiny" variant="ghost">Comece Agora</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
