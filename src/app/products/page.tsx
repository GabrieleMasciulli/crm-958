"use client";

import salesData from "@/lib/data/salesData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SalesProductsPage from "@/components/sales-products";

export default function ProductsPage() {
  return (
    <div>
      <SalesProductsPage />
    </div>
  );
}
