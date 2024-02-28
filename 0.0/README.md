# Done Projects

### 1st
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Complex CSS Tasks</title>
</head>
<body>

  <div id="container">
    <header>
      <h1>Main Title</h1>
      <p>Subtitle or description goes here.</p>
    </header>

    <nav>
      <ul>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
      </ul>
    </nav>

    <section id="section1">
      <article>
        <h2>Article Title 1</h2>
        <p class="article-content">Content for the first article...</p>
      </article>
    </section>

    <section id="section2">
      <article>
        <h2>Article Title 2</h2>
        <p class="article-content">Content for the second article...</p>
      </article>
    </section>

    <footer>
      <p>Contact information, footer links, etc.</p>
    </footer>
  </div>

</body>
</html>
```

```
header {
  margin-bottom: 5%;
}

nav li {
  padding: 0.5%;
  background-color: aliceblue;
}

.article-content {
  margin-top: 4%;
  background-color: antiquewhite;
}

#section1 {
  border: 2px dashed green;
  margin-bottom: 15px;
  padding: 1.5%;
}

#section2 {
  padding: 1.5%;
  margin-top: 15px;
  border-width: 2px 5px 3px 5px; /* top, right, bottom, left */
  border-color: blue red green purple; /* top, right, bottom, left */
  border-style: solid;
  border-bottom-style: dashed;
}

footer {
  margin-top: 10%;
}

/* CSS Tasks:

Task 1: Header Styling

Apply a margin-bottom to the header to create space between the header and the navigation.
Task 2: Navigation Styling

Add a padding to the navigation links to increase their clickable area. Use a different background color for the navigation.
Task 3: Article Styling

Create a class named .article-content and apply a margin-top to the articles inside the sections to separate them from the section title.
Task 4: Section Styling

Apply a border to both sections, and use different border styles and colors. Adjust the padding to create space inside the sections.
Task 5: Footer Styling

Add a margin-top to the footer to create space between the content and the footer.

 */




/* two ways of using border
#section2 {
  padding: 1.5%;
  margin-top: 15px;
  border-top: 2px solid blue;
  border-left: 5px solid red;
  border-bottom: 2px solid blue;
  border-right: 5px solid red;
} */
```


### 2
```
header {
  background: linear-gradient(to right, #ff6347, #001eff);
  border-width: 4px;
  border-style: solid;
  border-color: black;
  padding: 2%;
  display: flex;
  align-items: center;
}

nav {
  margin: 2px;
  border: 2px solid #720455;
}

nav ul:hover {
  background-color: lightgray;
}

nav ul li a:hover {
  color: red;
  background-color: antiquewhite;
}
```

#### 3
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Advanced HTML Structure</title>
</head>
<body>

  <header>
    <div class="header-content">
      <h1>Main Title</h1>
      <p>Subtitle or description goes here.</p>
    </div>
  </header>

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <section id="main-section">
    <article class="main-article">
      <h2>Featured Article</h2>
      <p class="article-content">Content for the featured article...</p>
    </article>

    <article class="secondary-article">
      <h2>Secondary Article</h2>
      <p class="article-content">Content for the secondary article...</p>
    </article>

    <div class="additional-content">
      <h2>Additional Section</h2>
      <p>This section contains additional content.</p>
    </div>
  </section>

  <aside>
    <div class="aside-content">
      <h2>Additional Information</h2>
      <p>This is some additional content placed in the aside section.</p>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
  </aside>

  <footer>
    <div class="footer-content">
      <p>Contact information, footer links, etc.</p>
      <div class="social-media">
        <a href="https://facebook.com/mdrubelahamed01">Facebook</a>
        <a href="https://twitter.com/mdrubelahamed01">Twitter</a>
        <a href="https://instagram.com/mdrubelahamed01">Instagram</a>
      </div>
    </div>
  </footer>

</body>
</html>
```


```

header {
  padding: 2px;
  background: linear-gradient(to right, orange, blue);
  color: white;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}

nav li a{
  margin: 2px;
  border: 1px solid black;
}

nav li:hover {
  background-color: antiquewhite;
}

nav ul li a:hover {
  color: #910A67;
}

#main-section{
  padding: 2px;
  border: 2px solid black;
}

.main-article {
  background-color: #FFB996;
}

.secondary-article {
  background-color: #EBD9B4;
}

aside {
  margin: 2px;
  border: 2px solid black;
}

aside li {
  margin: 3px;
}

footer {
  border: 2px solid black;
  padding: 2px;
  margin: 2px;
  background-color: #FFDD95;
}
```