import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const {
      establishmentName,
      contactName,
      phone,
      email,
      password,
      logo
    } = await req.json()
    const apiKey = process.env.API_KEY
    const whatsappApiUrl = process.env.WHATSAPP_API_URL
    const whatsappNumber = process.env.WHATSAPP_NUMBER

    if (
      !establishmentName ||
      !contactName ||
      !phone ||
      !email ||
      !password ||
      !logo
    ) {
      return NextResponse.json(
        {
          error:
            'Todos os campos, incluindo a logo, são obrigatórios.'
        },
        { status: 400 }
      )
    }

    if (!apiKey || !whatsappApiUrl || !whatsappNumber) {
      return NextResponse.json(
        {
          error:
            'Pedimos desculpa mas não foi possivel enviar suas informações'
        },
        { status: 500 }
      )
    }

    // 📌 Mensagem com os dados do formulário
    const textMessage = `🚀 *Novo Pedido de Teste Grátis* 🚀

✂️ *Barbearia:* ${establishmentName}
👤 *Contato:* ${contactName}
📞 *Telefone:* ${phone}
📧 *E-mail:* ${email}
🔑 *Senha:* ${password}

✅ Verifique os detalhes e entre em contato!`

    // 📌 Enviar mensagem de texto primeiro
    await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatId: whatsappNumber,
        contentType: 'string',
        content: textMessage
      })
    })

    const imagePayload = {
      chatId: whatsappNumber,
      contentType: 'MessageMedia',
      content: {
        mimetype: 'image/jpeg',
        data: logo, // A logo já deve estar convertida para Base64
        filename: 'logo.jpg'
      }
    }

    const imageResponse = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imagePayload)
    })

    if (!imageResponse.ok) {
      throw new Error(
        'Erro ao enviar a logo pelo WhatsApp.'
      )
    }

    return NextResponse.json(
      { message: 'Mensagem e logo enviadas via WhatsApp!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    return NextResponse.json(
      { error: 'Falha ao enviar mensagem.' },
      { status: 500 }
    )
  }
}
