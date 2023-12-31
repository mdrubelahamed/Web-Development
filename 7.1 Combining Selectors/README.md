## Topic
- 


1. Keywords


2. Notes 
- Combine Multiple selctor to target a very Particular thing

3. Summary 

---

### TEST1 -------------------------------------------
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Product Catalog</title>
  <link rel="stylesheet" href="./test-style.css">
</head>

<body>
  <header id="header-id">
    <h1>Awesome Products</h1>
  </header>

  <section class="product">
    <img src="assets/images/product1.jpg" alt="Product 1" width="300">
    <div class="details">
      <h2 class="title">Product 1</h2>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <span class="price">$19.99</span>
      <button class="buy-btn">Buy Now</button>
    </div>
  </section>

  <section class="product">
    <img src="assets/images/product2.jpg" alt="Product 2" width="300">
    <div class="details">
      <h2 class="title">Product 2</h2>
      <p class="description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <span class="price">$29.99</span>
      <button class="buy-btn">Buy Now</button>
    </div>
  </section>

  <section class="product">
    <img src="assets/images/product3.jpg" alt="Product 3" width="300">
    <div class="details">
      <h2 class="title">Product 3</h2>
      <p class="description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <span class="price">$39.99</span>
      <button class="buy-btn">Buy Now</button>
    </div>
  </section>

</body>

</html>
```
- `test-style.css`
```
h2 {
  color: #FB8B24;
}

.details {
  background-color: lightgrey;
}

#header-id {
  color: green;
}

.buy-btn {
  color: white;
  background-color: red
}

p.description {
  border: 2px solid black;
}

h2 + p {
  font-size: 0.8rem;
}

section {
  padding: 5px;
  margin: 10px;
}

/* Learnig hovering */
section img:hover {
  border: 2px solid red; /* Add your border styling */
  opacity: 0.8; /* Change the opacity on hover */
  transform: scale(1.1); /* Increase the image scale on hover */
}

.details .description:hover {
  background-color: lightblue;
  color: darkblue;
}

.details .buy-btn:hover {
  padding: 2px;
  transform: scale(1.2);
}

* {
  font-family: cursive;
}```