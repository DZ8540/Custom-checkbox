"use strict";
var Checkbox = /** @class */ (function () {
    function Checkbox(item) {
        this.toggleClass = 'Checkbox__fill--active';
        this.disabledClass = 'Checkbox--disabled';
        this._item = item;
        this._input = item.querySelector('[data-id="dz-input"]');
        this._checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
        this.name = (this._item.dataset.name || '(undefined name)') + " checkbox component";
        this._handle();
    }
    Checkbox.prototype.checked = function (val) {
        this._input.checked = val;
        this._eventDispatch('change');
    };
    Checkbox.prototype.disabled = function (val) {
        this._input.disabled = val;
        this._eventDispatch('change');
    };
    Checkbox.prototype._handle = function () {
        try {
            this._checkForUser();
            this._check();
            this._input.onchange = this._check.bind(this);
        }
        catch (err) {
            console.warn(err.message);
        }
    };
    Checkbox.prototype._check = function () {
        this._input.checked ? this._add() : this._remove();
        if (this._input.disabled)
            this._item.classList.add(this.disabledClass);
        else
            this._item.classList.remove(this.disabledClass);
    };
    Checkbox.prototype._add = function () {
        this._checkbox.classList.add(this.toggleClass);
    };
    Checkbox.prototype._remove = function () {
        this._checkbox.classList.remove(this.toggleClass);
    };
    Checkbox.prototype._eventDispatch = function (eventName) {
        var event = new Event(eventName);
        this._input.dispatchEvent(event);
    };
    Checkbox.prototype._checkForUser = function () {
        if (!this._item && !this._input && !this._checkbox) {
            throw new Error("The " + this.name + " is not ready!");
        }
        if (!this._item) {
            throw new Error("The element that you passed into " + this.name + ", was not found!");
        }
        if (!this._input) {
            throw new Error("Input in " + this.name + " is not found!");
        }
        if (!this._checkbox) {
            throw new Error("Fill element in " + this.name + " is not found!");
        }
        console.info("The " + this.name + " is ready!");
    };
    return Checkbox;
}());
