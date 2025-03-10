// File: app/chatbot/page.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Bot, User } from 'lucide-react'

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Ciao! Fai una domanda sui tuoi dati e ti risponderò.',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = { type: 'user', text: input }
    setMessages((prev) => [...prev, newMessage])

    // Simulazione risposta - da sostituire con API call al tuo modello/endpoint GPT
    setTimeout(() => {
      const response = {
        type: 'bot',
        text: `Risposta simulata alla domanda: "${input}"`,
      }
      setMessages((prev) => [...prev, response])
    }, 1000)

    setInput('')
  }

  return (
    <div className='p-8 max-w-3xl mx-auto'>
      <Card className='mb-6'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold flex items-center gap-2'>
            <Bot className='w-6 h-6 text-primary' /> Chatbot Analisi Dati
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4 max-h-[500px] overflow-y-auto'>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  msg.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {msg.type === 'bot' && (
                  <Bot className='w-5 h-5 mt-1 text-primary' />
                )}
                <div
                  className={`rounded-xl px-4 py-2 text-sm max-w-[75%] ${
                    msg.type === 'user'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.type === 'user' && (
                  <User className='w-5 h-5 mt-1 text-blue-600' />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className='flex gap-2'>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Fai una domanda sui tuoi dati...'
        />
        <Button onClick={handleSend}>Invia</Button>
      </div>
    </div>
  )
}
