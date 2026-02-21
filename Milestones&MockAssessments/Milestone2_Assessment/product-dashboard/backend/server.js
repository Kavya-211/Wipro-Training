const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    description: "Gaming Laptop",
    image: "https://www.google.com/imgres?q=laptop&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F510uTHyDqGL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FMicrosoft-New-Surface-Laptop-7th%2Fdp%2FB0D926W4YN&docid=S3LkfjST4CF6vM&tbnid=Qc5GCvSvB9j1sM&vet=12ahUKEwia9u_uoM6SAxXQXGwGHamMORIQnPAOegQIFBAB..i&w=1000&h=685&hcb=2&ved=2ahUKEwia9u_uoM6SAxXQXGwGHamMORIQnPAOegQIFBAB"
  },
  {
    id: 2,
    name: "Shoes",
    price: 2000,
    category: "Fashion",
    description: "Running Shoes",
    image: "https://www.google.com/imgres?q=shoe%20image&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1688015574%2Fphoto%2Fwhite-sneaker-isolated-on-white-background.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3Dgz8bGn7h_eaF4uJGJjdZYYhJDrrigHAygo2Vi8tZjH8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frunning-shoes&docid=W7BkWmt0APBVbM&tbnid=PTWeu1krmsphbM&vet=12ahUKEwiGxN3Aoc6SAxUQUGwGHWmjNHwQnPAOegQISxAB..i&w=612&h=408&hcb=2&ved=2ahUKEwiGxN3Aoc6SAxUQUGwGHWmjNHwQnPAOegQISxAB"
  }
];


// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET single product
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  res.json(product);
});

// POST new product
app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
