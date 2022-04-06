# Module 4 Notes

## 4.2.6 Capture Form field Values

### Brackets in a Selector

- '[]' in a selector selects an HTML element by its attribute, in this case "task-name"

- 'var taskNameInput = document.querySelector("input[name='task-name']");'

### console.dir();

- will make the console display data as a JavaScript object.
- https://developer.mozilla.org/en-US/docs/Web/API/Console/dir
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

### Getting/Setting

- **getting** is common verb that's used for retrieving or reading data from an object's property.
- **setting** is when we provide and store data in an object's property.

### var taskNameInput = document.querySelector("input[name='task-name']").value;

- '.value' sets the value of 'var taskNameInput' to the text entered to in '("input[name='task-name']")'
