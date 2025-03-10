// File: app/page.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import {
  TableProperties,
  ChartLine,
  Filter,
  BotMessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Analysis() {
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)

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
      route: '/analysis/filters',
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
      route: '/#',
      icon: TableProperties,
    },
  ]

  return (
    <div className='p-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>
        Scegli come vuoi ottenere le tue analisi
      </h1>
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Funzionalità in sviluppo</AlertDialogTitle>
            <AlertDialogDescription>
              La sezione Tabelle è attualmente in costruzione.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowAlert(false)}>
              Ok, capito
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
        {cards.map((card) => (
          <Card
            key={card.title}
            className='cursor-pointer hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
            onClick={() => {
              if (card.title.match('Tabelle')) {
                setShowAlert(true)
              } else {
                router.push(card.route)
              }
            }}
          >
            <CardHeader>
              <CardTitle className='text-2xl font-semibold'>
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex justify-between gap-2'>
                <p className=' text-sm'>{card.description}</p>
                <card.icon size={60} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
