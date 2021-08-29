"use strict";
var Checkbox = /** @class */ (function () {
    function Checkbox(item) {
        this.toggleClass = 'Checkbox__fill--active';
        this.status = false;
        this.item = item;
        this.input = item.querySelector('[data-id="dz-input"]');
        this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
        this.name = (this.item.dataset.name || '(undefined name)') + " checkbox component";
        this.handle();
    }
    Checkbox.prototype.handle = function () {
        if (this.checkForUser()) {
            this.status = this.input.checked;
            this.check();
            this.item.onclick = this.click.bind(this);
        }
    };
    Checkbox.prototype.click = function () {
        this.status = !this.status;
        this.check();
    };
    Checkbox.prototype.check = function () {
        this.status ? this.add() : this.remove();
    };
    Checkbox.prototype.add = function () {
        this.checkbox.classList.add(this.toggleClass);
        this.input.checked = this.status;
    };
    Checkbox.prototype.remove = function () {
        this.checkbox.classList.remove(this.toggleClass);
        this.input.checked = this.status;
    };
    Checkbox.prototype.checkForUser = function () {
        if (!this.item && !this.input && !this.checkbox) {
            console.warn("The " + this.name + " is not ready!");
        }
        if (!this.item) {
            console.warn("The element that you passed into " + this.name + ", was not found!");
            return false;
        }
        if (!this.input) {
            console.warn("Input in " + this.name + " is not found!");
            return false;
        }
        if (!this.checkbox) {
            console.warn("Fill element in " + this.name + " is not found!");
            return false;
        }
        console.info("The " + this.name + " is ready!");
        return true;
    };
    return Checkbox;
}());
