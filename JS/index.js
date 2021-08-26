"use strict";
var firstCheckbox = document.querySelector('#firstCheckbox');
if (firstCheckbox)
    new Checkbox(firstCheckbox);
else
    console.warn('Checkbox is not found!');
var lastCheckbox = document.querySelector('#lastCheckbox');
if (lastCheckbox)
    new Checkbox(lastCheckbox);
else
    console.warn('Checkbox is not found!');
