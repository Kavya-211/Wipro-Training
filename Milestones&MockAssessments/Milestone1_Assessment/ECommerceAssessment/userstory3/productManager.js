var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* LEGACY PROPERTY DECORATOR */
function LogChange(target, propertyKey) {
    let value = target[propertyKey];
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        console.log(`${propertyKey} changed to ${newVal}`);
        value = newVal;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter
    });
}
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}
__decorate([
    LogChange
], Product.prototype, "price", void 0);
__decorate([
    LogChange
], Product.prototype, "stock", void 0);
/* Store products in Tuple Array */
const inventory = [
    [1, new Product(1, "Laptop", "Electronics", 900, 5)],
    [2, new Product(2, "Shoes", "Fashion", 120, 20)],
    [3, new Product(3, "Table", "Home", 300, 10)],
    [4, new Product(4, "Headphones", "Electronics", 80, 50)]
];
/* Iterate */
for (const [id, product] of inventory) {
    console.log(`Product ID: ${id}`, product);
}
/* Trigger decorator */
inventory[0][1].price = 950;
inventory[1][1].stock = 18;
