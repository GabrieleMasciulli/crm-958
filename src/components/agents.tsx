'use client'

import agentSummary from '@/lib/data/agentsData'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from './ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  UserCircle2,
  MapPin,
  BarChart3,
  Users,
  BadgeDollarSign,
} from 'lucide-react'

export default function Agents() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Riepilogo Agenti</h1>

      {/* FILTRI */}
      <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 pb-6'>
        <div className='flex items-center space-x-4'>
          <Select defaultValue='all'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Seleziona Regione' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tutte le Regioni</SelectItem>
              <SelectItem value='abruzzo'>Abruzzo</SelectItem>
              <SelectItem value='basilicata'>Basilicata</SelectItem>
              <SelectItem value='calabria'>Calabria</SelectItem>
              <SelectItem value='campania'>Campania</SelectItem>
              <SelectItem value='emilia-romagna'>Emilia-Romagna</SelectItem>
              <SelectItem value='friuli-venezia-giulia'>
                Friuli-Venezia Giulia
              </SelectItem>
              <SelectItem value='lazio'>Lazio</SelectItem>
              <SelectItem value='liguria'>Liguria</SelectItem>
              <SelectItem value='lombardia'>Lombardia</SelectItem>
              <SelectItem value='marche'>Marche</SelectItem>
              <SelectItem value='molise'>Molise</SelectItem>
              <SelectItem value='piemonte'>Piemonte</SelectItem>
              <SelectItem value='puglia'>Puglia</SelectItem>
              <SelectItem value='sardegna'>Sardegna</SelectItem>
              <SelectItem value='sicilia'>Sicilia</SelectItem>
              <SelectItem value='toscana'>Toscana</SelectItem>
              <SelectItem value='trentino-alto-adige'>
                Trentino-Alto Adige
              </SelectItem>
              <SelectItem value='umbria'>Umbria</SelectItem>
              <SelectItem value='valle-d-aosta'>Valle d Aosta</SelectItem>
              <SelectItem value='veneto'>Veneto</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue='all'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Seleziona Agente' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Tutti gli agenti</SelectItem>
              <SelectItem value='direct'>Agenti Diretti</SelectItem>
              <SelectItem value='agents'>Agenti Affiliati</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex-1'>
          <Input placeholder='Cerca prodotti, agenti o regioni...' />
        </div>
      </div>

      {/* CARDS */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {agentSummary.map((agent, index) => (
          <Card
            key={index}
            className='hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
          >
            <CardHeader className='flex flex-row items-center gap-4 border-b pb-2'>
              <UserCircle2 className='h-10 w-10 text-primary' />
              <div>
                <CardTitle className='text-lg font-semibold'>
                  {agent.name}
                </CardTitle>
                <p className='text-sm text-muted-foreground'>
                  {agent.regions.join(', ')}
                </p>
              </div>
            </CardHeader>
            <CardContent className='pt-4'>
              <div className='grid grid-cols-2 gap-3 text-sm '>
                <div className='flex items-center gap-2'>
                  <BarChart3 className='w-4 h-4 text-blue-600' />
                  <span>
                    <strong>Vendite:</strong> {agent.totalSales}
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  <BadgeDollarSign className='w-4 h-4 text-green-600' />
                  <span>
                    <strong>Totale:</strong> €{' '}
                    {agent.totalAmount.toLocaleString()}
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  <Users className='w-4 h-4 text-purple-600' />
                  <span>
                    <strong>Clienti:</strong> {agent.totalClients}
                  </span>
                </div>

                <div className='flex items-center gap-2'>
                  <MapPin className='w-4 h-4 text-orange-600' />
                  <span>
                    <strong>Top Cliente:</strong> {agent.topClient.product}
                  </span>
                </div>
              </div>

              <div className='text-xs '>
                <em>Valore top cliente:</em> €{' '}
                {agent.topClient.amount.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
