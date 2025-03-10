// File: app/page.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

import {
  TableProperties,
  ChartLine,
  Filter,
  BotMessageSquare,
} from 'lucide-react'

export default function Analysis() {
  const router = useRouter()

  const cards = [
    {
      title: 'Interrogazione Testuale',
      description: 'Inserisci le tue domande ed estrai insight dai dati.',
      route: '/analysis/chat-bot',
      icon: BotMessageSquare,
    },
    {
      title: 'Filtraggio Manuale',
      description:
        'Applica filtri ai dataset per ottenere analisi personalizzate.',
      route: '/filtraggio',
      icon: Filter,
    },
    {
      title: 'Grafici',
      description:
        'Visualizza i tuoi dati con grafici interattivi e intuitivi.',
      route: '/analysis/graph',
      icon: ChartLine,
    },
    {
      title: 'Tabelle',
      description:
        'Consulta i dati in formato tabellare ordinato e dettagliato.',
      route: '/tabelle',
      icon: TableProperties,
    },
  ]

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        Scegli come vuoi ottenere le tue analisi
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {cards.map((card) => (
          <Card
            key={card.title}
            className='cursor-pointer hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
            onClick={() => router.push(card.route)}
          >
            <CardHeader>
              <CardTitle className='text-xl font-semibold'>
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex justify-between gap-2'>
                <p className=' text-sm'>{card.description}</p>
                <card.icon size={50} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
