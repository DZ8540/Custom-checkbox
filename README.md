# DZ Custom-checkbox
In order to use, it is enough to find the element you need, and then pass it to the class.

## Installation
1. Via npm
```cmd
npm i @dz8540/custom-checkbox
```
2. Manually - all you need is in the "Dist" folder.
```html
<link href="/Your-path/customCheckbox.min.css" rel="stylesheet">
<script src="/Your-path/CustomCheckbox.min.js"></script>
```

## Example
### HTML
```html
<label class="Checkbox" id="firstCheckbox" data-name="First Checkbox">
  <input type="checkbox" class="Checkbox__input" data-id="dz-input">

  <div class="Checkbox__checkbox">
    <span class="Checkbox__fill" data-id="dz-checkboxInput"></span>
  </div>

  <span class="Checkbox__text">Checkbox</span>
</label>
```
### JS
```js
let el = document.querySelector(el);
new Checkbox(el);
```

## Instruction:
1. Text value print in last span in the component.
2. No id attribute required for input.
3. Input maintains checked attribute.
4. Input maintains disabled attribute.
5. Component maintains data-name attribute, to you can set component name.
6. There are methods.

## Methods
* action - programmatically set checked or disabled attribute for input element.
  ```js
  new Checkbox(el).action('checked');
  ```
* on - event subscribe for input element into component
  ```js
  new Checkbox(el).on(eventName, your callBack);
  ```

## End
That's all! Enjoy this (〜￣▽￣)〜
