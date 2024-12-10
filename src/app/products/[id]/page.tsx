import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import products from '@/lib/data/productsData'
import { ProductChart } from '@/components/product-chart'

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const product = products.find(product => product.id === id)

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            <p>Prezzo: {product.price}</p>
            <p>Regione: {product.region}</p>
            <p>
              Agenti:{' '}
              {product.agents.map(agent => (
                <p key={agent}>{agent}</p>
              ))}
            </p>
            <p>Sconto applicato: {product.discount}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductChart />
        </CardContent>
      </Card>
    </div>
  )
}
