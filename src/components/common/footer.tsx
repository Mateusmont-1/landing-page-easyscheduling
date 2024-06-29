'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer className="flex flex-col h-24 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img src="/icon1.png" className="mr-3" />
            <Typography className="!text-white !text-base font-medium ">
              EasyScheduling
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href="https://easyscheduling.com.br/sistema_exemplo"
            target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Olhe um exemplo
            </Typography>
          </Link>
          <Link
            href="/terms-of-service"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Termos de serviço
            </Typography>
          </Link>
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Política de privacidade
            </Typography>
          </Link>
        </div>
      </div>
      <div className="w-full text-center mt-4">
        <Typography variant="p">
          &copy; 2024 EasyScheduling. Todos os direitos reservados.
        </Typography>
      </div>
    </footer>
  )
}