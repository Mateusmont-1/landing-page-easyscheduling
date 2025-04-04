import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Link from 'next/link'
import Image from 'next/image'

const plans = [
  {
    plan: 'Mensal',
    originalPrice: 'R$ 50 / mês',
    discountedPrice: 'R$ 30 / mês',
    note: '*Sem limitações no sistema',
    link: 'https://wa.me/5511940833832?text=Estou%20interessado%20no%20plano%20mensal%20do%20sistema%20EasyScheduling'
  },
  {
    plan: 'Anual',
    originalPrice: 'R$ 500 / ano',
    discountedPrice: 'R$ 300 / ano',
    note: '*Sem limitações no sistema',
    link: 'https://wa.me/5511940833832?text=Estou%20interessado%20no%20plano%20anual%20do%20sistema%20EasyScheduling',
    highlight: true // Propriedade para destacar o plano anual
  }
]

export default function PricePlans() {
  return (
    <div className="flex flex-col gap-6 items-center text-white">
      <Typography className="max-w-2xl" variant="h1">
        Planos de Preços
      </Typography>
      <Typography
        className="max-w-2xl"
        variant="h2"
        color="red"
      >
        Preço Promocional! Aproveite antes que acabe!
      </Typography>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {plans.map(
          (
            {
              plan,
              originalPrice,
              discountedPrice,
              note,
              link,
              highlight
            },
            index
          ) => (
            <div
              key={index}
              className={`flex flex-col gap-3 items-center p-6 border rounded-lg
              flex-1 ${
                highlight
                  ? 'bg-[#2a2a2a] border-[#4a4a4a]'
                  : 'bg-black border-gray-600'
              }`}
              style={{ minHeight: '300px' }} // Altura mínima
            >
              {highlight && (
                <div className="bg-[#4a4a4a] text-white px-3 py-1 rounded-full">
                  Melhor Valor
                </div>
              )}
              <Typography variant="h3">{plan}</Typography>
              <Typography
                variant="h4"
                className="line-through text-gray-500"
              >
                {originalPrice}
              </Typography>
              <Typography variant="h4" color="green">
                {discountedPrice}
              </Typography>
              <Typography variant="p" className="text-sm">
                {note}
              </Typography>
              <Link href={link} target="_blank">
                <Button size="tiny" variant="ghost">
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
          )
        )}
      </div>
    </div>
  )
}
