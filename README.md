```
  __ \    _ \    \  | _)                |                
  |   |  |   |  |\/ |  |  __ \    _` |  __|   _ \    __| 
  |   |  |   |  |   |  |  |   |  (   |  |    (   |  |    
 ____/  \___/  _|  _| _| _|  _| \__,_| \__| \___/  _| 
```

## Getting started

This assignment is distributed through github classrooms - you don't need to fork it, you can just accept the assignment and click *open in vs code*.

Once downloaded, you should run
```
npm install
```
to make sure you have the dependencies you need, and then
```
npm run dev
```
to start up the development server.

You can discuss this assignment on the [discussions tab](https://github.com/swe-resources-room/dom-inator/discussions).

## Testing

**When testing, your development server must be running on port 3000**

To test locally, you can run
```
npm run test
```
in your terminal.

When you sync your changes, the same tests will be run on the server and, when they all pass, the assignment will be marked complete.

**Important: don't merge the feedback pull request!**

## Todo

### Case switcher :pencil:

 - [x] As you go, edit the `README.md` file. Putting a `x` inside the `[ ]` will mark each task as complete.
 - [ ] Add a `<script>` tag to hook up `case-switcher.html` with `caseSwitcher.js`. (You need to use relative paths - be aware that the javascript files are in a different folder to the html files.) Make sure you add the `defer` attribute to the `<script>` tag!
 - [ ] In the `case-switcher.html` file, add three `<button>`s to this file with ids of `quiet-btn`, `loud-btn` and `sarc-btn`. Don't change the contents of the `<p>` element. (You do not need to use javascript for this.)
 - [ ] Edit the `caseSwitcher.js` to listen for the click event of each button. When `quiet-btn` is clicked, the text in the `<p>` element should be changed to *lowercase*; when `loud-btn` is clicked it should be changed to *UPPERCASE*; when `sarc-btn` is clicked it should be changed to *sArCaSm CaSe*.

(In sarcasm case, the alphabetic letters alternate from lower to uppercase and all space and punctuation is ignored.)

### Chat room :pencil:

 - [ ] Connect `chat-room.html` with `chatRoom.js`
 - [ ] Use javascript to listen for the click event of the `send-btn` - when the button is clicked, the contents of the text input should be appended as a child `<p>` element to the `<section id="chat">` element.
 - [ ] When the message is sent, the text input should be emptied.

You might find [this w3 page](https://www.w3schools.com/jsref/prop_text_value.asp) useful!

### Block busters :pencil:

 - [ ] Right now, you can't seen any blocks! That is because the `.css` file for this page hasn't been hooked up! Add the correct thing to the `<head>` of the `block-busters.html` so that the css gets imported and we can see the first block!
 - [ ] See the red block? Write some javascript to create 99 more identical to it (so a total of 100 red blocks). Each block should have a class of `red-block` and an id of `block-i` (where `i` is the number of the block.)
 - [ ] Now write some javascript so that whenever a user's mouse enters a block, it disappears from the page.

## Extension

Now you can dominate the dom, let's make it pretty!

Choose one of the pages and make it look awesome with css :smile:
