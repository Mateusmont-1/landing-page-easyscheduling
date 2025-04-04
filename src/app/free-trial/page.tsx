'use client'

import { useState } from 'react'

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }
  
  const MAX_FILE_SIZE_MB = 10

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
        const base64String = (
          reader.result as string
        ).split(',')[1] // Remove o prefixo do Base64
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
      newErrors.establishmentName =
        'O nome da barbearia é obrigatório.'
      isValid = false
    }

    if (!formData.contactName) {
      newErrors.contactName =
        'O nome do contato é obrigatório.'
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
      newErrors.password =
        'A senha deve ter pelo menos 8 caracteres.'
      isValid = false
    }

    if (!formData.logo) {
      newErrors.logo =
        'Envie a logo do seu estabelecimento.'
      isValid = false
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted =
        'Você deve aceitar os Termos de Uso.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validate()) {
      try {
        const response = await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })

        const result = await response.json()

        if (response.ok) {
          alert('Pedido enviado com sucesso!')
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
      }
    }
  }

  return (
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Solicite seu teste gratis
      </h1>
      {/* <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md"> */}
      <form
        onSubmit={(e) => {
          void handleSubmit(e)
        }}
        className="space-y-4 w-full max-w-md"
      >
        <div>
          <label className="text-white">
            Nome do Estabelecimento*
          </label>
          <input
            type="text"
            name="establishmentName"
            value={formData.establishmentName}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          {errors.establishmentName && (
            <p className="text-red-500 text-sm">
              {errors.establishmentName}
            </p>
          )}
        </div>

        <div>
          <label className="text-white">
            Nome do Contato*
          </label>
          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          {errors.contactName && (
            <p className="text-red-500 text-sm">
              {errors.contactName}
            </p>
          )}
        </div>

        <div>
          <label className="text-white">
            Telefone de Contato*
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputMode="numeric"
            pattern="\d*"
            onInput={(e) => {
              e.currentTarget.value =
                e.currentTarget.value.replace(/\D/g, '') // Remove caracteres não numéricos
            }}
            className="w-full p-2 rounded text-black"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="text-white">
            E-mail para Acesso*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="text-white">
            Senha (mínimo 8 caracteres)*
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 rounded text-black"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password}
            </p>
          )}
        </div>
        <div>
          <label className="text-white">
            Logo do Estabelecimento*
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border p-2"
          />
          {errors.logo && (
            <p className="text-red-500 text-sm">
              {errors.logo}
            </p>
          )}
          {formData.logo && (
            <img
              src={`data:image/jpeg;base64,${formData.logo}`}
              alt="Logo Preview"
              className="w-32 h-32 object-contain mt-2"
            />
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-white">
            Eu li e aceito os{' '}
            <a
              target="_blank"
              href="/terms-of-service"
              className="text-blue-400 underline"
            >
              Termos de Uso
            </a>
          </label>
        </div>
        {errors.termsAccepted && (
          <p className="text-red-500 text-sm">
            {errors.termsAccepted}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  )
}
