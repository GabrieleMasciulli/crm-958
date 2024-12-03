import { useRouter } from "next/router";
import products from "@/lib/data/salesData"; // Importa i dati del progetto

const ProjectPage = () => {
  //const router = useRouter();
  const id = "1";

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>; // Gestione di progetti non esistenti
  }

  return (
    <div>
      <h1>{product.product}</h1>
      <p>{product.amount}</p>
      <p>Created on: {product.date}</p>
      {/* @todo settare i dati corretti */}
    </div>
  );
};

export default ProjectPage;
