# **Week 4 / JavaScript 101 / Part 1**

## 1. Introduction

### What is JavaScript?

- JavaScript is a programming language used to add interactive features to web pages.
- It can respond to user interactions like button clicks, form submissions, etc.

### The role of JavaScript in web development:

- **HTML**: Provides the structure (headings, paragraphs, forms).
  - HTML is essentially the "skeleton" of a webpage. It organizes and describes the elements of a page using tags and attributes. HTML tags tell the browser what type of content is on the page and how to structure it.
- **CSS**: Provides the appearance (color, size, layout).
  - CSS (Cascading Style Sheets) is responsible for the visual presentation of a webpage, allowing developers to style and layout HTML elements by applying colors, fonts, spacing, and positioning to enhance the design and user experience.
- **JavaScript**: Provides dynamic behaviors and interactivity.
  - JavaScript is the programming language that adds interactivity and dynamic behavior to a webpage, allowing developers to manipulate content, handle user events, and create responsive features such as form validation, animations, and real-time updates.

### The relationship between JavaScript, HTML, and CSS:

- JavaScript can access and modify HTML elements dynamically.
- It can also changsse CSS styles based on user interactions.

<br>
<br>
<br>

## 2. Two main ways of linking your JavaScript to your HTML file

### 2.1. External JavaScript File (Recommended Method):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JS Introduction</title>
    <!-- In the head or at the end of body -->
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Hello JavaScript!</h1>
  </body>
</html>
```

- Code Location: JavaScript is stored in a separate `.js` file and linked to the HTML document using the `<script>` tag.
- Advantages:
  - Separation of Concerns: Keeps HTML structure and JavaScript logic separate, making the code more modular and easier to maintain.
  - Reusability: The same JavaScript file can be used across multiple HTML pages.
  - Improved Load Times: Browsers can cache the external JavaScript file, improving performance.
- Disadvantages: Requires an additional HTTP request to fetch the external script, though this is usually minor.

### 2.2. Internal JavaScript (Script tags in HTML):

- Between the `<head>`tags

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Internal JavaScript between the head tags</title>
      <script>
        // Your JavaScript code here
        function greet() {
          alert("Hello!");
        }
      </script>
    </head>
    <body>
      <h1>Hello JavaScript!</h1>
    </body>
  </html>
  ```

  - Code Location: JavaScript is embedded directly within the <head> tag.

  - Advantages:

    - Easy to Add: Good for small scripts or cases where the script is not reusable.
    - Immediate Parsing: The script is parsed before the content in the body is loaded, so it’s useful for tasks that need to run before the page fully loads (though this can be inefficient).

  - Disadvantages:
    - Blocking Behavior: The browser stops rendering the page while it downloads and executes the script, which can slow down page load times.
    - Limited Access: Can’t directly interact with elements in the `<body>` because the DOM is not fully loaded when the script runs.

<br>
<br>
  
- In the `<body>`tags
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Internal JavaScript in the body tags</title>
    </head>
    <body>
      <div id="myElement">Content</div>
      <script>
        // Can directly access elements above
        const element = document.getElementById("myElement");
      </script>
    </body>
  </html>
  ```
  - Code Location: JavaScript is placed inside the <body> tag, typically at the end.

- Advantages:
  - Direct Access to DOM: Since the script is executed after the DOM elements are loaded, it can interact with them immediately (like accessing `getElementById`).
  - Improved Load Performance: The HTML content loads first, making the page visible to the user before the JavaScript runs.
- Disadvantages:
  - Not Modular: Like the internal script in `<head>`, placing JavaScript inside the `<body>` mixes the structure (HTML) and behavior (JavaScript), making the code less modular and harder to maintain for large projects.

### 2.3. Summart of Differences

- **External JavaScript**: Best for larger, reusable scripts across multiple pages. It keeps HTML clean and improves performance through caching.
- **Internal JavaScript in `<head>`**: Useful for small, non-reusable scripts, but it can block page rendering and doesn’t have access to elements in the `<body>` until they are loaded.
- **Internal JavaScript in `<body>`**: Allows immediate access to DOM elements but is less modular and should be avoided for larger projects.

<br>
<br>
<br>

## 3. Basic JavaScript Syntax

### Variables

- `var`, `let`, `const`: Used to store values.
- `var`: The older way of declaring variables, but let and const are preferred today.
- `let`: Can be declared within a block and is changeable.
  - `let` is a block-scoped variable declaration that allows developers to define variables that can be reassigned, providing more control over variable scope and preventing issues related to variable hoisting; it is useful when the variable value needs to change throughout the program.
- `const`: A constant, meaning its value cannot be changed.

  - In contrast, `const` is also block-scoped but is used to declare variables that cannot be reassigned after their initial value is set, making it ideal for constants or objects that should not change, although the properties of an object declared with `const` can still be modified.

- Example of variable declaration
  ```javascript
  let name = "Ali";
  const age = 25;
  console.log(name, age);
  ```

### Data Types

- String: Represents text. Example: `"Hello"`.
- Number: Represents numerical values. Example: `42`.
- Boolean: Represents true or false. Example: `true`, `false`.
- Array: A list of values. Example: `[1, 2, 3]`.
- Object: A collection of key-value pairs. Example: `{ name: "Ali", age: 25 }`.

### Operators and Expressions

- Assignment operator: `=`
- Comparison operators: `==`, `===`
- Arithmetic operators: `+`Ï, `-`, `*`, `/`

<br>
<br>
<br>

## 4. Basic Control Structures

### Conditional Statements

- Used to execute different code blocks based on conditions.
- `if`
  - The `if` statement evaluates a specified condition and executes a block of code if that condition is true.
- `else if`
  - The `else if` statement allows for the evaluation of additional conditions if the previous if statement was false, enabling multiple conditions to be checked sequentially
- `else`

  - The `else` statement provides a default block of code to execute if none of the preceding conditions are met.

- Example code snippet:

  ```javascript
  let score = 85;

  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else {
    console.log("Grade: C");
  }
  ```

### Loops

- Used to repeat a block of code multiple times.
- `for` Loop

  - The `for` loop is a control structure that allows developers to iterate over a sequence (like an array or a range of numbers) by defining an initialization, a condition, and an increment expression in a single line, making it suitable for situations where the number of iterations is known beforehand.
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i); // Outputs: 0, 1, 2, 3, 4
    }
    ```
    - In this example, the `for` loop initializes `i` to 0 and increments it by 1 until `i` is no longer less than 5, logging the values 0 through 4 to the console.

- `while` Loop
  - In contrast, the `while` loop continues to execute a block of code as long as a specified condition evaluates to true, which is useful when the number of iterations is not predetermined.
    ```javascript
    let j = 0;
    while (j < 5) {
      console.log(j); // Outputs: 0, 1, 2, 3, 4
      j++;
    }
    ```
    - In this example, the `while` loop checks the condition `j < 5` and continues to execute the block that logs `j` to the console and increments `j` until the condition becomes false, resulting in the same output as the `for` loop.

### Functions

- A function in JavaScript is a reusable block of code that performs a specific task, defined by a name, a set of parameters (optional), and a body containing the code to be executed when the function is called, enabling developers to encapsulate logic and promote code reuse and modularity.

- Example code snippet:

  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }

  console.log(greet("Alice")); // Outputs: Hello, Alice!
  ```

  - In this example, the function `greet` takes one parameter, `name`, and returns a greeting string that incorporates the provided name; when called with the argument "Alice", it outputs "Hello, Alice!" to the console.

  <br>
  <br>
  <br>

## 5. DOM Manipulation Basics

### What is the DOM?

- The Document Object Model (DOM) represents the structure of a web page.
- JavaScript can be used to access and modify HTML elements dynamically through the DOM.
- Detailed definition: The Document Object Model (DOM) is a programming interface for web documents that represents the structure of a webpage as a tree of objects, where each element, attribute, and piece of text within the HTML is a node, allowing developers to access and manipulate the content, structure, and style of a document dynamically using languages like JavaScript, thereby enabling interactive and responsive web experiences.

### Accessing HTML elements:

- Methods like `getElementById`, `querySelector` allow you to select specific elements from the page.

- Example code snippet:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>DOM Manipulation</title>
    </head>
    <body>
      <h1 id="heading">Heading</h1>
      <button id="changeBtn">Change Heading</button>

      <script>
        const button = document.getElementById("changeBtn");
        button.addEventListener("click", function () {
          const heading = document.getElementById("heading");
          heading.textContent = "New Heading!";
        });
      </script>
    </body>
  </html>
  ```

### Adding event listeners:

- The `addEventListener` method in JavaScript allows developers to attach event handlers to DOM elements, enabling them to respond to user interactions and other events without interfering with other event handlers on the same element. Here are some common event types that can be used with `addEventListener`, including the click event:

- `click` Event

  - The `click` event is triggered when the user clicks on an element, making it commonly used for buttons and links. This event allows developers to execute a function when the user interacts with the element.
    ```javascript
    const button = document.getElementById("myButton");
    button.addEventListener("click", function () {
      alert("Button clicked!");
    });
    ```
    - In this example, an alert will pop up when the button with the ID myButton is clicked.

- `mouseover` Event

  - The `mouseover` event occurs when the mouse pointer enters an element, allowing developers to implement hover effects or display additional information.
    ```javascript
    const box = document.getElementById("myBox");
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "lightblue";
    });
    ```
    - Here, the background color of myBox changes to light blue when the mouse hovers over it.

- `keydown` Event

  - The `keydown` event is fired when a key is pressed down on the keyboard, making it useful for handling keyboard inputs and shortcuts.
    ```javascript
    document.addEventListener("keydown", function (event) {
      console.log(`Key pressed: ${event.key}`);
    });
    ```
    - This example logs the name of the key pressed to the console, enabling developers to capture user keyboard actions.

- `submit` Event

  - The `submit` event is triggered when a form is submitted, allowing developers to validate form data or prevent the default form submission behavior.
    ```javascript
    const form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
      alert("Form submitted!");
    });
    ```
    - In this example, the default form submission is prevented, and an alert is shown when the form is submitted.

- `resize` Event
  - The `resize` event occurs when the browser window is resized, making it useful for responsive designs that adapt to changes in window size.
    ```javascript
    window.addEventListener("resize", function () {
      console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);
    });
    ```
    - This code logs the current window size to the console whenever the window is resized.

<br>
<br>
<br>

