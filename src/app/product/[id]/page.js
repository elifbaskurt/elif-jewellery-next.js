import { notFound } from 'next/navigation';
import ProductDetail from '@/components/products/product-detail';

async function getProduct(id) {
  try {
    const response = await import('/public/data/products.json');
    const product = response.default.products.find(p => p.id === parseInt(id));
    if (!product) return null;
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductDetail product={product} />
    </main>
  );
} 