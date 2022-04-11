# Module 4 Notes

## 4.2.6 Capture Form field Values

### Brackets in a Selector

- `[]` in a selector selects an HTML element by its attribute, in this case "task-name"

- `var taskNameInput = document.querySelector("input[name='task-name']");`

### console.dir();

- will make the console display data as a JavaScript object.
- https://developer.mozilla.org/en-US/docs/Web/API/Console/dir
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

### Getting/Setting

- **getting** is common verb that's used for retrieving or reading data from an object's property.
- **setting** is when we provide and store data in an object's property.

### var taskNameInput = document.querySelector("input[name='task-name']").value;

- `.value` sets the value of `var taskNameInput` to the text entered to in `("input[name='task-name']")`

### `innerHTML` vs `textContent`

- `textContent` cannot display HTML elements, it will only accept text values.
- `innerHTML` property allows us to write HTML tags inside the string value we're giving it. When it loads, it reads the content as HTML and renders it to the DOM.

## 4.2.7 Refactor the Code to Organize Functionality

Sometimes it's better to have many functions that each perform one task than to have one function that performs many tasks.

- Functions with a lot of code performing separate tasks could become difficult to read and understand.
- Setting up a function to do multiple tasks, like getting the form values and then printing them to the page, lowers the potential to reuse the function for another part of the application

Get the code to work first, then refactor to make more legible and maintainable.

## 4.2.8 Address usablity concerns

When used in a condition, empty strings and the number 0 are evaluated as **falsy values**. When we use the syntax `taskNameInput` we're checking to see if the taskNameInput variable is empty by asking if it's a falsy value.

`formEl.reset();` will reset the values in formEl.

- `reset()` is a method designed for `<form>` elements and wont work on anything else.
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset

# Moodule 4.3 Notes

### Purpose

- Use DOM API methods to select and dynamically generate HTML elements and content.
- Traverse the DOM and manipulate elements.

## 4.3.5 Apply Unique IDs to Tasks

`data-*` is known as Custom Data Attributes. Allow developers to store extra information about an HTML element without conflicting with any of the built-in attributes.

- store custom data, private to the page or app

## 4.3.6 Apply Unique IDs to Tasks

no notes

## 4.3.7 Add Ability to Delete a Task

**event delegation** set up the click event listener on a parent element and then, through that single event listener, determine which child elements were clicked.

**event bubbling**
when an event is triggered by an element, it will first run its handler. Then run its parent's handler, then up the chain

**event.target**
reports the element on which the event occurs

# 4.4 Notes

## 4.4.4 Save Tasks to an Array

We can't use a `querySelector()` method to save the entire task item element to localStorage because localStorage can only save data as a string, and it is difficult to convert DOM elements to strings.

`array[]` can be used to keep a list of objects in one variable.

Now when we create a new task, the object holding all of its data can be added to the array. We just need to update the object that holds the task's data to also include its id and status, both of which are only written to the associated DOM element.

The array method called `push()`adds any content between the parentheses to the end of the specified array.

## 4.4.5 Save Tasks to localStorage

`localStorage` can only store one type of data: strings. use `JSON.stringify(tasks)` to convert data into strings.

`JSON.parse()` will convert a string into an array

**JSON** stands for JavaScript Object Notation, which is a means of organizing and structuring data that's transferred from one place to another.
