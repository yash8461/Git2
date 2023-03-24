// Define a class for the inventory management system
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    // Add a new product to the inventory
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    // Remove a product from the inventory
    Inventory.prototype.removeProduct = function (productId) {
        var index = this.products.findIndex(function (product) { return product.id === productId; });
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    };
    // Make a purchase and reduce the product quantity
    Inventory.prototype.makePurchase = function (productId, quantity) {
        var product = this.getProduct(productId);
        console.log("This : \n");
        console.log(product);
        if (product && product.quantity >= quantity) {
            product.quantity -= quantity;
            console.log("Purchase successful. Remaining quantity: ".concat(product.quantity));
            if (product.quantity < 5) {
                this.raiseReorderRequest(product.id);
            }
        }
        else {
            console.log("Purchase failed. Insufficient quantity.");
        }
    };
    // Get a product by ID
    Inventory.prototype.getProduct = function (productId) {
        return this.products.find(function (product) { return product.id === productId; });
    };
    // Raise a reorder request for a product
    Inventory.prototype.raiseReorderRequest = function (productId) {
        console.log("Reorder request raised for product ID ".concat(productId, "."));
    };
    return Inventory;
}());
// Example usage
var inventory = new Inventory();
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
