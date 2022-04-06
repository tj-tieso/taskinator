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
