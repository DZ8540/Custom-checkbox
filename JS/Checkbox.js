"use strict";
var Checkbox = /** @class */ (function () {
    function Checkbox(item) {
        this.toggleClass = 'Checkbox__fill--active';
        this.status = false;
        this.item = item;
        this.input = item.querySelector('[data-id="dz-input"]');
        this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
        this.name = this.setName();
        if (this.input) {
            this.status = this.input.checked;
            this.handle();
        }
        else {
            console.warn("Input in " + this.name + " component is not found!");
        }
    }
    Checkbox.prototype.handle = function () {
        this.checkForUser();
        this.check();
        if (this.item)
            this.item.onclick = this.click.bind(this);
        else
            console.warn("The element that you passed into " + this.name + " component, was not found!");
    };
    Checkbox.prototype.click = function () {
        this.status = !this.status;
        this.check();
    };
    Checkbox.prototype.check = function () {
        if (this.status)
            this.add();
        else
            this.remove();
    };
    Checkbox.prototype.add = function () {
        if (this.checkbox)
            this.checkbox.classList.add(this.toggleClass);
        else
            console.warn("Fill element in " + this.name + " component is not found!");
        if (this.input)
            this.input.checked = this.status;
        else
            console.warn("Input in " + this.name + " component is not found!");
    };
    Checkbox.prototype.remove = function () {
        if (this.checkbox)
            this.checkbox.classList.remove(this.toggleClass);
        else
            console.warn("Fill element in " + this.name + " component is not found!");
        if (this.input)
            this.input.checked = this.status;
        else
            console.warn("Input in " + this.name + " component is not found!");
    };
    Checkbox.prototype.setName = function () {
        if (this.item && this.item.id)
            return this.item.id + " checkbox";
        return '(undefined name) checkbox';
    };
    Checkbox.prototype.checkForUser = function () {
        if (this.item && this.input && this.checkbox)
            console.info("The " + this.name + " component is ready!");
        else
            console.warn("The " + this.name + " component is not ready!");
    };
    return Checkbox;
}());
