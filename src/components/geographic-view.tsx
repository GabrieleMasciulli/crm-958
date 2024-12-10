import { GeographicDistribution } from './geographic-distribution'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import geographicSalesData from '@/lib/data/geograficSalesData'

export default function GeographicPage() {
  return (
    <div className='px-10'>
      <h1 className='text-2xl text-center p-5'>Geographic Page</h1>
      <Card>
        <CardHeader>
          <CardTitle>Distribuzione Geografica</CardTitle>
          <CardDescription>Vendite per Regione</CardDescription>
        </CardHeader>
        <CardContent>
          <GeographicDistribution />
        </CardContent>
      </Card>
      <div className='flex'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>Invoice</TableHead>
              <TableHead>Ordini totali</TableHead>
              <TableHead className='text-right'>Agenti - Vendite</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {geographicSalesData.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className='font-medium'>{invoice.name}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
                <TableCell className='text-right'>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant='outline'>Visualizza</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <ul>
                        {invoice.agents.map((agent) => (
                          <li key={agent.name}>
                            {agent.name} - {agent.sold}
                          </li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className='text-right'>$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}
