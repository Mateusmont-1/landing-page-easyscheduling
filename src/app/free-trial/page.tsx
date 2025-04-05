'use client'

import { useState, useRef } from 'react'


export default function FreeTrialForm() {
  const [formData, setFormData] = useState({
    establishmentName: '',
    contactName: '',
    phone: '',
    email: '',
    password: '',
    logo: '',
    termsAccepted: false
  })

  const [errors, setErrors] = useState({
    establishmentName: '',
    contactName: '',
    phone: '',
    email: '',
    password: '',
    logo: '',
    termsAccepted: ''
  })

  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const MAX_FILE_SIZE_MB = 10

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileSizeMB = file.size / (1024 * 1024)

      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        setErrors((prev) => ({
          ...prev,
          logo: `Arquivo muito grande. Máximo permitido: ${MAX_FILE_SIZE_MB}MB.`
        }))
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = (reader.result as string).split(',')[1]
        setFormData((prev) => ({
          ...prev,
          logo: base64String
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const validate = () => {
    const newErrors = {
      establishmentName: '',
      contactName: '',
      phone: '',
      email: '',
      password: '',
      logo: '',
      termsAccepted: ''
    }
    let isValid = true

    if (!formData.establishmentName) {
      newErrors.establishmentName = 'O nome da barbearia é obrigatório.'
      isValid = false
    }

    if (!formData.contactName) {
      newErrors.contactName = 'O nome do contato é obrigatório.'
      isValid = false
    }

    if (!formData.phone) {
      newErrors.phone = 'O telefone é obrigatório.'
      isValid = false
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Digite um e-mail válido.'
      isValid = false
    }

    if (formData.password.length < 8) {
      newErrors.password = 'A senha deve ter pelo menos 8 caracteres.'
      isValid = false
    }

    if (!formData.logo) {
      newErrors.logo = 'Envie a logo do seu estabelecimento.'
      isValid = false
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Você deve aceitar os Termos de Uso.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const successRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitSuccess(false)

    if (validate()) {
      setLoading(true)
      try {
        const response = await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        const result = await response.json()

        if (response.ok) {
          setSubmitSuccess(true)
          setTimeout(() => {
            successRef.current?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
          setFormData({
            establishmentName: '',
            contactName: '',
            phone: '',
            email: '',
            password: '',
            logo: '',
            termsAccepted: false
          })
        } else {
          alert('Erro ao enviar: ' + result.error)
        }
      } catch (error) {
        console.error('Erro ao enviar:', error)
        alert('Erro ao enviar o formulário.')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="mx-auto p-6 max-w-xl text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">Teste grátis por 7 dias</h2>
        <p className="text-gray-300 text-lg">
          Comece agora mesmo e veja como o EasyScheduling pode simplificar sua rotina.
        </p>
        <ul className="text-gray-300 text-sm mt-4 list-disc list-inside text-left mx-auto max-w-md">
          <li>Você preenche os dados abaixo</li>
          <li>Enviamos o acesso para o WhatsApp ou e-mail</li>
          <li>Pronto! É só começar a testar :)</li>
        </ul>
      </div>

      {/* {submitSuccess && (
        <div className="bg-green-600 text-white p-4 rounded mb-4 text-center">
          Pedido enviado com sucesso! Em breve entraremos em contato.
        </div>
      )} */}

      {submitSuccess && (
        <div
          ref={successRef}
          className="bg-green-600 text-white p-4 rounded mb-4 text-center"
        >
          Pedido enviado com sucesso! Em breve entraremos em contato.
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(e).catch((err) => {
            console.error('Erro no envio:', err)
          })
        }}
        className="space-y-4"
      >
        {[
          { label: 'Nome do Estabelecimento*', name: 'establishmentName' },
          { label: 'Nome do Contato*', name: 'contactName' },
          { label: 'Telefone de Contato*', name: 'phone', type: 'tel' },
          { label: 'E-mail para Acesso*', name: 'email', type: 'email' },
          { label: 'Senha (mínimo 8 caracteres)*', name: 'password', type: 'password' }
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name as keyof typeof formData] as string}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors[name as keyof typeof errors] && (
              <p className="text-red-500 text-sm">{errors[name as keyof typeof errors]}</p>
            )}
          </div>
        ))}

        <div>
          <label>Logo do Estabelecimento*</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black"
          />
          {errors.logo && (
            <p className="text-red-500 text-sm">{errors.logo}</p>
          )}
          {formData.logo && (
            <img
              src={`data:image/jpeg;base64,${formData.logo}`}
              alt="Logo Preview"
              className="w-32 h-32 object-contain mt-2"
            />
          )}
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2 mt-1"
          />
          <label>
            Eu li e aceito os{' '}
            <a href="/terms-of-service" target="_blank" className="text-blue-400 underline">
              Termos de Uso
            </a>
          </label>
        </div>
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
        )}

        <p className="text-xs text-gray-400 italic">
          Seus dados estão seguros. Não compartilhamos informações com terceiros.
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-semibold py-3 rounded-lg"
        >
          {loading ? 'Enviando...' : 'Solicitar Teste Grátis'}
        </button>
      </form>
    </div>
  )
}
