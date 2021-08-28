"use strict";
var Checkbox = /** @class */ (function () {
    function Checkbox(item) {
        this.toggleClass = 'Checkbox__fill--active';
        this.status = false;
        this.item = item;
        this.input = item.querySelector('[data-id="dz-input"]');
        this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
        this.name = this.setName();
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
    Checkbox.prototype.setName = function () {
        if (this.item && this.item.id)
            return this.item.id + " checkbox";
        return '(undefined name) checkbox';
    };
    Checkbox.prototype.checkForUser = function () {
        if (!this.item && !this.input && !this.checkbox) {
            console.warn("The " + this.name + " component is not ready!");
        }
        if (!this.item) {
            console.warn("The element that you passed into " + this.name + " component, was not found!");
            return false;
        }
        if (!this.input) {
            console.warn("Input in " + this.name + " component is not found!");
            return false;
        }
        if (!this.checkbox) {
            console.warn("Fill element in " + this.name + " component is not found!");
            return false;
        }
        console.info("The " + this.name + " component is ready!");
        return true;
    };
    return Checkbox;
}());
