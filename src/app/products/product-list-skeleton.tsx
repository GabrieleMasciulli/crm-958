import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function ProductListSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product Name</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity Available</TableHead>
          <TableHead>Discount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 5 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className='h-4 w-[200px]' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-[100px]' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-[60px]' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-[80px]' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-[40px]' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
