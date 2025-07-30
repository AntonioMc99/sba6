import { fetchProducts } from './services/apiService';
import { Product } from './models/Product';
import { handleError } from './utils/errorHandler.ts';
async function main() {
  try {
    const productsData = await fetchProducts();

    // Take first 5 products and show details
    productsData.slice(0, 5).forEach(p => {
      const product = new Product(
        p.id,
        p.title,
        p.description,
        p.price,
        p.discountPercentage,
        p.rating,
        p.stock,
        p.brand,
        p.category
      );

      product.displayDetails();
      console.log(`Price after discount: $${product.getPriceWithDiscount()}\n`);
    });
  } catch (error) {
    handleError(error);
  }
}

main();