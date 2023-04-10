// Define an interface for a product
interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  // Define a class for the inventory management system
  class Inventory {
    private products: Product[] = [];
  
    // Add a new product to the inventory
    addProduct(product: Product) {
      this.products.push(product);
    }
  
    // Remove a product from the inventory
    removeProduct(productId: string) {
      const index = this.products.findIndex((product) => product.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  
    // Make a purchase and reduce the product quantity
    makePurchase(productId: string, quantity: number) {
      const product = this.getProduct(productId);

     
      
      if (product && product.quantity >= quantity) {
        product.quantity -= quantity;
        console.log(`Purchase successful. Remaining quantity: ${product.quantity}`);
        if (product.quantity < 5) {
          this.raiseReorderRequest(product.id);
        }
      } else {
        console.log("Purchase failed. Insufficient quantity.");
      }
    }
  
    // Get a product by ID
    getProduct(productId: string): Product | undefined {
      return this.products.find((product) => product.id === productId);
    }
  
    // Raise a reorder request for a product
    raiseReorderRequest(productId: string) {
      console.log(`Reorder request raised for product ID ${productId}.`);
    }
  }
  
  // Example usage
  const inventory = new Inventory();
  
  // Add some products to the inventory
  inventory.addProduct({ id: "p1", name: "Product 1", price: 10, quantity: 20 });
  inventory.addProduct({ id: "p2", name: "Product 2", price: 20, quantity: 10 });
  inventory.addProduct({ id: "p3", name: "Product 3", price: 30, quantity: 5 });
  
  // Make a purchase and reduce the product quantity
  inventory.makePurchase("p1", 5);
  
  // Attempt to make a purchase with insufficient quantity
  inventory.makePurchase("p2", 15);
  
  // Remove a product from the inventory
  inventory.removeProduct("p3");
  