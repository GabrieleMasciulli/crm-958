'use client'

import { useState } from 'react'
import { DatePickerWithRange } from '../date-range-picker'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { DateRange } from 'react-day-picker'

export default function FilterBar() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 1),
    to: new Date(),
  })

  return (
    <div className='flex flex-col px-8 py-4 space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
      <div className='flex items-center space-x-4'>
        <DatePickerWithRange date={dateRange} setDate={setDateRange} />
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
            <SelectItem value='valle-d-aosta'>Valle d&apos;Aosta</SelectItem>
            <SelectItem value='veneto'>Veneto</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue='all'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select Agent' />
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
  )
}
