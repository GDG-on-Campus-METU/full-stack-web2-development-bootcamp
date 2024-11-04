# **Week 4 / JavaScript 101 / Part 2**

## Build: Greeting App

### Step 1: HTML Structure

- First, let's create the basic HTML structure. We will have a title, an input field for the user to type their name, a button, and a heading where the greeting will be displayed.

- Create a new HTML file called `index.html`:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Greeting App</title>
    </head>
    <body>
      <h1>Welcome to the Greeting App!</h1>

      <!-- Input field for name -->
      <label for="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" />

      <!-- Button to generate the greeting -->
      <button id="greetBtn">Greet Me!</button>

      <!-- Where the greeting message will be shown -->
      <h2 id="greetingMessage"></h2>

      <script src="app.js"></script>
    </body>
  </html>
  ```

- Explanation:
  - The `<input>` element will allow users to type in their name.
  - The `<button>` element will trigger the greeting.
  - The `<h2>` tag is where the greeting message will be displayed.

<br>
<br>

### Step 2: JavaScript Introduction

- Now, we need to add some interactivity using JavaScript. Let's create a new JavaScript file called `app.js`.

- In this file, we'll make sure that the JavaScript is connected and that everything works fine by logging a simple message in the console.
  ```javascript
  // app.js
  console.log("JavaScript is connected and working!");
  ```
- To test if it works, open `index.html` in your browser, right-click and choose "Inspect", then go to the "Console" tab. You should see the message `"JavaScript is connected and working!"`.

<br>
<br>

### Step 3: Adding Variables

- We will now add variables to store the input value from the user and manipulate the DOM (Document Object Model) to show the greeting message.

  ```javascript
  // app.js
  // Selecting the input field, button, and the place where the greeting will appear
  const nameInput = document.getElementById("nameInput");
  const greetBtn = document.getElementById("greetBtn");
  const greetingMessage = document.getElementById("greetingMessage");
  console.log("Variables are set up!");
  ```

- Explanation:
  - We're using `document.getElementById()` to grab the HTML elements we will interact with: the name input, the button, and the greeting message area.

<br>
<br>

### Step 4: Adding Event Listeners

- Now, let's add some interactivity. When the user clicks the "Greet Me!" button, we want to capture the name they entered and display a custom greeting.

  ```javascript
  // app.js
  greetBtn.addEventListener("click", function () {
    // Get the name entered by the user
    const userName = nameInput.value;

    // Create the greeting message
    const message = "Hello, " + userName + "! Welcome to the Greeting App!";

    // Display the greeting message
    greetingMessage.textContent = message;
  });
  ```

- Explanation:

  - The `addEventListener()` method is used to detect when the button is clicked.
  - When clicked, it grabs the value of the input (`nameInput.value`), forms a greeting message, and then displays it inside the `<h2>` element.

<br>
<br>

### Step 5: Control Structures

- Now, let's enhance the functionality using conditional statements. We'll check if the user actually entered a name. If they didn't, we'll prompt them to do so.

  ```javascript
  // app.js
  greetBtn.addEventListener("click", function () {
    // Get the name entered by the user
    const userName = nameInput.value;

    // Check if the user entered a name
    if (userName) {
      // Create and display the greeting message
      const message = "Hello, " + userName + "! Welcome to the Greeting App!";
      greetingMessage.textContent = message;
    } else {
      // If no name entered, display an alert
      alert("Please enter your name!");
    }
  });
  ```

- Explanation:
  - We're using an `if` statement to check if the input field is not empty.
  - If the user hasn't entered their name, we show an alert with a message asking them to do so.

<br>
<br>

### Step 6: Loop Example (Bonus)

- This part is optional, but just to demonstrate loops, we can add a feature that prints a repeated message on the page if the user wants.

- Add another button to the `index.html` file:

  ```javascript
  <!-- Button to print a repeated message -->
  <button id="repeatBtn">Repeat Greeting 3 Times</button>
  ```

- Then, add this code in `app.js`:

  ```javascript
  const repeatBtn = document.getElementById("repeatBtn");

  repeatBtn.addEventListener("click", function () {
    const userName = nameInput.value;

    if (userName) {
      greetingMessage.textContent = ""; // Clear previous messages
      for (let i = 0; i < 3; i++) {
        greetingMessage.textContent += "Hello, " + userName + "! ";
      }
    } else {
      alert("Please enter your name!");
    }
  });
  ```

- Explanation:

  - We're adding a new button that, when clicked, will repeat the greeting 3 times using a `for` loop.
  - We loop through 3 times, appending the greeting message to the `greetingMessage` element.

<br>
<br>

### Step 7: Review the final project code

- `index.html`:

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Greeting App</title>
    </head>
    <body>
      <h1>Welcome to the Greeting App!</h1>

      <label for="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" />

      <button id="greetBtn">Greet Me!</button>
      <button id="repeatBtn">Repeat Greeting 3 Times</button>

      <h2 id="greetingMessage"></h2>

      <script src="app.js"></script>
    </body>
  </html>
  ```

- `app.js`:

  ```javascript
  // app.js
  const nameInput = document.getElementById("nameInput");
  const greetBtn = document.getElementById("greetBtn");
  const greetingMessage = document.getElementById("greetingMessage");
  const repeatBtn = document.getElementById("repeatBtn");

  greetBtn.addEventListener("click", function () {
    const userName = nameInput.value;

    if (userName) {
      const message = "Hello, " + userName + "! Welcome to the Greeting App!";
      greetingMessage.textContent = message;
    } else {
      alert("Please enter your name!");
    }
  });

  repeatBtn.addEventListener("click", function () {
    const userName = nameInput.value;

    if (userName) {
      greetingMessage.textContent = "";
      for (let i = 0; i < 3; i++) {
        greetingMessage.textContent += "Hello, " + userName + "! ";
      }
    } else {
      alert("Please enter your name!");
    }
  });
  ```

<br>
<br>

### Step 8: Summary of What You Learned:

- **Basic JavaScript syntax**: You worked with variables, data types, and operators.
- **Control Structures**: You used if statements to control the flow of your program.
- **DOM Manipulation**: You dynamically updated the content of the page by modifying the DOM.
- **Event Listeners**: You learned how to trigger JavaScript actions when a button is clicked.
- **Loops (Bonus)**: You used a loop to repeat an action multiple times.
