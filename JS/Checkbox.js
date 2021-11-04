"use strict";
var Checkbox = /** @class */ (function () {
    function Checkbox(item) {
        this.toggleClass = 'Checkbox__fill--active';
        this.disabledClass = 'Checkbox--disabled';
        this.item = item;
        this.input = item.querySelector('[data-id="dz-input"]');
        this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
        this.name = (this.item.dataset.name || '(undefined name)') + " checkbox component";
        this.handle();
    }
    Checkbox.prototype.handle = function () {
        try {
            this.checkForUser();
            this.check();
            this.input.onchange = this.check.bind(this);
        }
        catch (err) {
            console.warn(err.message);
        }
    };
    Checkbox.prototype.check = function () {
        this.input.checked ? this.add() : this.remove();
        if (this.input.disabled)
            this.item.classList.add(this.disabledClass);
    };
    Checkbox.prototype.add = function () {
        this.checkbox.classList.add(this.toggleClass);
    };
    Checkbox.prototype.remove = function () {
        this.checkbox.classList.remove(this.toggleClass);
    };
    Checkbox.prototype.checkForUser = function () {
        if (!this.item && !this.input && !this.checkbox) {
            throw new Error("The " + this.name + " is not ready!");
        }
        if (!this.item) {
            throw new Error("The element that you passed into " + this.name + ", was not found!");
        }
        if (!this.input) {
            throw new Error("Input in " + this.name + " is not found!");
        }
        if (!this.checkbox) {
            throw new Error("Fill element in " + this.name + " is not found!");
        }
        console.info("The " + this.name + " is ready!");
    };
    return Checkbox;
}());
