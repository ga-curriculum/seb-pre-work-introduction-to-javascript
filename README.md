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

<h1 class="slide-header">Declaring Variables</h1>

<details>
  <summary>`const`</summary>
  When we use `const` (short for “constant”), we’re specifying that the data the variable contains is **not going to change**. For example:

```js
const myHometown = "Dakar, Senegal";
```

The place where a person was born won’t change over time, so it’s reasonable to use `const` here.
</details>

<h1 class="slide-header">Video Content</h1>
<!--
  WISTIA EXAMPLE. REPLACE 11dit621rx with the id
-->
<div class="wistia_embed wistia_async_11dit621rx wistia_embed_initialized" id="wistia-11dit621rx-1"
  style="width: 100%; height: 50%;">
  <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
    <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
      <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
      <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
        <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
          <div class="w-video-wrapper w-css-reset"
            style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
            <video id="wistia_simple_video_135" crossorigin="anonymous"
              poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video" controlslist="nodownload"
              playsinline="" preload="auto" type="video/m3u8" x-webkit-airplay="allow"
              style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
          </div>
          <div class="w-ui-container"
            style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
            <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
              style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
              <div class="w-vulcan--background w-css-reset"
                style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                <div class="w-css-reset" data-handle="statusBar"></div>
                <div class="w-css-reset" data-handle="backgroundFocus"><button
                    aria-label="Play Video: A Brief History of the Web" class="w-css-reset w-vulcan-v2-button"
                    tabindex="0" style="width: 0px; height: 0px; pointer-events: none;"></button></div>
              </div>
              <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                style="position: absolute; left: -99999em;"></div>
              <div class="w-vulcan-overlays-table w-css-reset"
                style="display: table; pointer-events: none; position: absolute; width: 100%;">
                <div class="w-vulcan-overlays--left w-css-reset"
                  style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                  <div class="w-css-reset" style="height: 321.375px;"></div>
                </div>
                <div class="w-vulcan-overlays--center w-css-reset"
                  style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                  <div class="w-css-reset" style="height: 321.375px;">
                    <div class="w-css-reset" data-handle="bigPlayButton" style="pointer-events: auto;">
                      <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                        style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                        <button class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button" tabindex="0"
                          type="button" style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                          <div
                            style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                          </div>
                          <div
                            style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                          </div><svg x="0px" y="0px" viewBox="0 0 125 80" enable-background="new 0 0 125 80"
                            aria-hidden="true" alt=""
                            style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                            <rect fill-rule="evenodd" clip-rule="evenodd" fill="none" width="125" height="80"></rect>
                            <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" points="53,22 53,58 79,40">
                            </polygon>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="w-css-reset" data-handle="clickForSoundButton" style="pointer-events: auto;">
  <div class="w-css-reset w-css-reset-tree" data-handle="click-for-sound-backdrop"
    style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
    <button aria-label="Click for sound" class="w-vulcan-v2-button click-for-sound-btn"
      style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
      <div
        style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
        <span
          style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
          for sound</span>
      </div><svg viewBox="0 0 237 237" width="51.6796875" height="51.6796875"></svg>
    </button>
</div>
</div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- YOUTUBE -->
<!-- VIMEO -->
<details>
  <summary>Transcript</summary>
  
  <p class="transcript-text">
    Lorem ipsum etc etc
  </p>
</details>

---


<h1 class="slide-header">Code Challenge</h1>

<iframe height="500" style="width: 100%;" scrolling="no" title="Code Challenge Test" src="https://codepen.io/Ryan-Brodsky/embed/VwNwXqq?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Ryan-Brodsky/pen/VwNwXqq">
    Code Challenge Test</a> by Ryan Brodsky (<a href="https://codepen.io/Ryan-Brodsky">@Ryan-Brodsky</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

---

<h1 class="slide-header">Multiple Choice Question</h1>

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">Correct Answer</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">Incorrect</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">Incorrect</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" correct="true"/><label for="uniqueAnswer">Correct Answer</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">Incorrect Answer</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">Correct Answer</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">Cards Slide</h1>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

---

<h1 class="slide-header">Conclusion</h1>

</textarea>