# DZ Custom-checkbox

In order to use, it is enough to find the element you need, and then pass it to the class.

## Instruction:
1. Text value print in last span in the component.
2. No id attribute required for input.
3. Input maintains checked attribute and instance method.
4. Input maintains disabled attribute and instance method.
5. Component maintains data-name attribute, to you can set component name.
6. Component maintains event subscribes with instance's 'on' method.

## Example
### HTML
```html
<div class="Checkbox" data-name="First Checkbox">
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
