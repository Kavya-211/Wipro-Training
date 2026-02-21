interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

/* LEGACY PROPERTY DECORATOR */
function LogChange(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = function () {
    return value;
  };

  const setter = function (newVal: number) {
    console.log(`${propertyKey} changed to ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}

class Product implements IProduct {
  id: number;
  name: string;
  category: string;

  @LogChange
  price: number;

  @LogChange
  stock: number;

  constructor(id: number, name: string, category: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }
}

/* Store products in Tuple Array */
const inventory: [number, Product][] = [
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
