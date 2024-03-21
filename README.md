<textarea id="source">

<h1 class="slide-header">Introduction to JavaScript</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  Along with HTML and CSS, JavaScript powers the web as we know it. You’ve been using it for years, maybe without even realizing it. Your bank’s website, search engines, social media sites, certain mobile apps — they all use JavaScript to power engaging interactions, enhance the user experience, and create intuitive interfaces. In this lesson, you’ll learn about the role JavaScript plays in modern web applications.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

JavaScript and the Modern Internet

<hr>

JavaScript Syntax

<hr>

JavaScript Data Types

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/introduction-to-javascript-1b28e9.pdf" target="_blank" download="introduction_to_javascript_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Identify how and why JavaScript is used in modern web development.</li>
  <li>Write variables with correct JavaScript syntax.</li>
  <li>Combine strings of data using concatenation.</li>
</ul>

---

<h1 class="slide-header">Meet Javascript</h1>

JavaScript (JS) is a programming language used to create rich experiences on most websites and other moving pieces of technology. In fact, this whole site is powered by JavaScript.

JavaScript was created by Brendan Eich in 1995 and has been a fundamental building block of the web ever since. It has continued to evolve and is supported across all mainstream browsers. 

**Note**: Just as “fire” is different from “firefly,” Java is **not** JavaScript. Java is a back-end programming language, while JavaScript is mostly used on the front-end.

![link text](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/JSprettytree.gif)

_This pretty animation is powered by JavaScript. You can read about how it was put together over at_ <a href="https://hackernoon.com/javascript-promises-for-animation-sequences-e31873493d49" target="_blank" rel="noreferrer noopener">_Hacker Noon_<a>.

---

<h1 class="slide-header">HTML + CSS + JavaScript = Front-End Magic</h1>

The web was originally a text-only format. As it evolved, JavaScript arose to fulfill a need that HTML, CSS, and back-end languages like Java or C++ simply could not meet.

One of JavaScript’s primary purposes is to enable more sophisticated interaction between users and browsers. JavaScript can respond to user input without needing to communicate with a back-end server, making it flexible and fast.

HTML, CSS, and JavaScript all have parts to play in the symphony that is a website. Think of them as the three best friends of the web. Front-end development — that is, the parts of a website you can actually see — relies on these best friends to create the rich medium we use every day.

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/three-amigos.png)

---

<h1 class="slide-header">JavaScript Syntax</h1>

Before we can talk to our computer in JavaScript, we need to learn its syntax. JavaScript has several distinct features:
* Capitalization
* Punctuation
* Nouns (Variables)
* Verbs (Functions)

Let’s find out more about these features.

---

<h1 class="slide-header">Capitalization in JavaScript</h1>

One of the more important things about JavaScript is that it’s **case sensitive**. Just as “mark” and “Mark” can mean different things in English, `myfirstname` and `myFirstName` are read differently by JavaScript.

Notice anything interesting about how we wrote `myFirstName`? This format is called **camel case,** and it’s the preferred method for writing multiple words in JavaScript. The first word starts with a lowercase letter, while all the following words start with an uppercase letter.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/Lesson%201/CamelCase.png)

---

<h1 class="slide-header">Punctuation in JavaScript</h1>

Punctuation counts in JavaScript. We end most lines of JavaScript with a **semicolon,** like this:

```js
const myName = "Lisa Simpson";
console.log("Hello ", myName);
```

However, like all languages, JavaScript is evolving. In earlier versions, it was standard for JavaScript statements to  _always_ end with a semicolon. Newer iterations of the language don’t always require semicolons, but there are different style guides governing their use.

---

<h1 class="slide-header">Variables</h1>

We use variables in JavaScript like we use nouns in English. **Variables** hold values. For example, `myName` and `myAge` are variables, and they hold the values “Lisa Simpson” and 8, respectively.

```js
const myName = "Lisa Simpson";
let myAge = 8;
```

There are three important parts of a variable:
* Start with the **introductory keyword**, which can be `const` or `let`. This lets JavaScript know that a variable comes after the keyword.
* The **variable’s name** is written in camel case.
* The **value**, which comes after `=`, determines what the variable represents. Think of it as the definition of a noun.

So how do we know which keyword to use to introduce variables? Let’s find out.

---

<h1 class="slide-header">Declaring Variables with const</h1>

When we use `const` (short for “constant”), we’re specifying that the data the variable contains is **not going to change**. For example:

```js
const myHometown = "Dakar, Senegal";
```

The place where a person was born won’t change over time, so it’s reasonable to use `const` here.

---

<h1 class="slide-header">Declaring Variables with let</h1>

Defining a variable with `let` looks like this:

```js
let pointsScored = 30;
```

When you define a variable with `let`, you can change the value of that variable throughout the course of the program. The points scored in a computer game, for example, will go up or down all the time during the game, so we’ll want to allow that variable to change by using `let`.

---

<h1 class="slide-header">Declaring Variables with var</h1>

The oldest way of declaring a variable in JavaScript is to use `var`, which simply stands for “variable.” A variable defined with `var` can be changed. It’s written like this:

```js
var myJob = "fortune cookie writer";
```

`var` is not commonly used anymore, but you may see examples online, so it’s important to know what it is. We'll be concentrating on `let` and `const`, as they’re the most widely used.

---

<h1 class="slide-header">Functions</h1>

When we run a computer program, we’re expecting it to perform some work for us. It’s not there just to give us a headache (although programs often do). 

How do we do the work? **Functions** are the verbs of JavaScript. They tell the program what to do, whether that’s adding numbers, computing random values, or combining sentences.

One function we’ll use is `console.log()`. It writes a message to the **console**, which is a behind-the-scenes view into what’s happening in your computer’s brain. 

Here’s how it’s written:

```js
const myName = "Lisa Simpson";
console.log(myName);
```

In the console, we’d see `"Lisa Simpson"` appear, because this is the data stored in the `myName` variable.

---

<h1 class="slide-header">Creating Variables</h1>

Ready to write some variables in JavaScript?

In the JavaScript section of the provided code editor, add the following three variables. You can replace the data with information about your favorite fictional character. Make sure to add the code in a similar format to how it appears below — even just a missing `"` will break it!

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/LisaSimpsonCodePen.png)

Then, add a `console.log()` to check your work (you should see something appear in the console):

```js
console.log(myName, myAge, myHometown);
```

<iframe height="300" style="width: 100%;" scrolling="no" title="First Variables" src="https://codepen.io/GAmarketing/embed/YzMpJJe?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/YzMpJJe">
  First Variables</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Data Types</h1>

JavaScript variables can hold many different types of data. **Data types** are important because they tell the computer how the programmer wants to use the data.

In other words, data types specify what type of values we’re adding after `=` when we define variables. For example, `myName` and `myAge` are defined as different data types here:

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/LisaSimpsonCodePen.png)

Next, let’s look at three of the most basic data types:
* Numbers
* Booleans
* Strings

---

<h1 class="slide-header">Numbers and Booleans</h1>

**Numbers** in JavaScript are exactly that - numbers. Unlike other programming languages, which treat whole numbers and decimals differently, all numbers work the same way in JavaScript. Here’s how they’re written:
```js
let age = 30;
const pi = 3.14159265359;
```
Easy as pi(e)!

Another basic data type is a **Boolean**, which is a true or false value. It’s written in JavaScript like this:

```js
let booleansAreUseful = true;
let weDontNeedBooleans = false;
```

---

<h1 class="slide-header">Strings</h1>

A **string** in JavaScript is any combination of letters, numbers, or other characters you’d store in a variable. For example:
```js
let message = "don't have a cow, man";
let myKey = "ahxhb8321";
```

A string can have one letter, word, or number or multiple letters, words, or numbers — it’s all the same. The most important thing to remember is to add **quotation marks** around your string. This tells your program that the data is a string, not the name of a variable or a Boolean.

**Note**: You can use either single quotation marks (‘like this’) or double quotation marks (“like this”) for strings; JavaScript reads them the same way. The usage varies, so the rule of thumb is to pick one type and stick with your decision. We’ll use double quotation marks in these lessons.

---

<h1 class="slide-header">Knowledge Check</h1>

Choose the correct ways in which each type of variable would be written in JavaScript (using standard conventions):
* **String**: Lisa Simpson has a pet cat named Snowball.
* **Boolean**: It’s true that she has yellow hair.
* **Number**: She is 36-inches tall.

Watch out for bad variable names or bad punctuation: details matter!

<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" /><label for="uniqueAnswer">const mypet = "Snowball";</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">let hasYellowHair = "true"</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">let height = 36;</label><br />
  <input type="checkbox" id="uniqueAnswer4" name="unique4" correct="true"/><label for="uniqueAnswer4">const myPet = "Snowball";</label><br />
  <input type="checkbox" id="uniqueAnswer5" name="unique5" /><label for="uniqueAnswer5">myHeight = 36</label><br />
  <input type="checkbox" id="uniqueAnswer6" name="unique6" correct="true"/><label for="uniqueAnswer6">let hasYellowHair = true;</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">String Concatenation</h1>
  
  Time to add a new word to your vocabulary: **concatenation**. It may sound fancy, but it just means combining stuff. Here, we’ll use concatenation to combine strings in JavaScript. 

For example, what if we wanted to combine these two variables into one string:
```js
const firstName = "Lisa";
const lastName = "Simpson";
```

We can easily do this by using a `+` sign, like so:
```js
console.log(firstName + " " + lastName);
```

Notice how, between the variables, we added two quotation marks with a space. JavaScript is smart, but not smart enough to know that there should be a space between the variables to make it grammatically correct. You have to add it in yourself.

---

<h1 class="slide-header">Concatenation Challenge</h1>

Let’s practice concatenating strings. In the JS tab, we’ve already declared three variables: `myName`, `myAge`, and `myHometown`.

Can you concatenate them to create the sentence below? Use a `console.log()` to display this message in the console:

`"My name is Lisa Simpson and I am 8 years old."`

**Hint**: Instead of adding spaces with empty quotation marks, think about how you might add them to the beginning or end of other strings.

<iframe height="300" style="width: 100%;" scrolling="no" title="String Concatenation" src="https://codepen.io/GAmarketing/embed/gOyLBBd?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/gOyLBBd">
  String Concatenation</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Adding Numbers</h1>

One plus one is...? We’ve defined a variable named `number` with a value equal to `1`. Research as many ways as you can for adding `1` to the `number` variable so that its value will now equal `2`.

Then, `console.log()` the phrase `"1 + 1 is 2"` by including the updated value of the `one` variable in the log statement.

<iframe height="300" style="width: 100%;" scrolling="no" title="Adding to Numbers" src="https://codepen.io/GAmarketing/embed/BaEQqqv?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/BaEQqqv">
  Adding to Numbers</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Typeof</h1>

Data types can cause unexpected issues in JavaScript and should be on your list of things to check when debugging. 

Use the `typeof` operator to create new variables to store the type of each of the given variables.

Understanding documentation is a vital skill when programming, so read about how to use `typeof` in Mozilla Developer Network’s [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof). 

<iframe height="300" style="width: 100%;" scrolling="no" title="typeof" src="https://codepen.io/GAmarketing/embed/NWmbOOm?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/NWmbOOm">
  typeof</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Conclusion</h1>

It may not seem like JavaScript is doing much yet, but we've laid the foundation for writing JavaScript by learning about using variables and data types. 

You've also learned about the **conventions** of writing JavaScript, such as using `camelCase` and semicolons: this helps ensure JavaScript programmers can all work together using a common style. By sticking with these conventions, you're well on your way to joining the community of JS developers yourself!

</textarea>