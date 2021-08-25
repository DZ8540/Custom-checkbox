# DZ Custom-checkbox

In order to use, it is enough to find the element you need, and then pass it to the class.

## Instruction:
1. Text value print in last span in the component.
2. No id attribute required for input.
3. Input maintains checked attribute.

## Example
### HTML
```html
<div class="Checkbox" id="firstCheckbox">
  <input type="checkbox" class="Checkbox__input" data-id="dz-input">

  <div class="Checkbox__checkbox">
    <span class="Checkbox__fill" data-id="dz-checkboxInput"></span>
  </div>

  <span class="Checkbox__text">Checkbox</span>
</div>
```
### JS
```js
let el = document.querySelector(el);
new Checkbox(el);
```

## End
That's all! Enjoy this (〜￣▽￣)〜
