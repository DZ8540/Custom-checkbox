interface ICheckbox {
  readonly name: string,
  readonly toggleClass: string,
  readonly disabledClass: string,
  _item: HTMLDivElement | null,
  _input: HTMLInputElement | null,
  _checkbox: HTMLSpanElement | null,
  checked(val: boolean): void,
  disabled(val: boolean): void,
  _handle(): void,
  _check(): void,
  _add(): void,
  _remove(): void,
  _checkForUser(): void,
  _eventDispatch(eventName: Event['type']): void
}

class Checkbox implements ICheckbox {
  readonly name: string;
  readonly toggleClass: string = 'Checkbox__fill--active';
  readonly disabledClass: string = 'Checkbox--disabled';
  _item: HTMLDivElement | null;
  _input: HTMLInputElement | null;
  _checkbox: HTMLSpanElement | null;

  constructor(item: HTMLDivElement) {
    this._item = item;
    this._input = item.querySelector('[data-id="dz-input"]');
    this._checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
    this.name = `${this._item.dataset.name || '(undefined name)'} checkbox component`;

    this._handle();
  }

  checked(val: boolean): void {
    this._input!.checked = val;

    this._eventDispatch('change');
  }
  
  disabled(val: boolean): void {
    this._input!.disabled = val;

    this._eventDispatch('change');
  }

  _handle(): void {
    try {
      this._checkForUser();

      this._check();
      this._input!.onchange = this._check.bind(this);
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  _check(): void {
    this._input!.checked ? this._add() : this._remove();
    
    if (this._input!.disabled)
      this._item!.classList.add(this.disabledClass);
    else
      this._item!.classList.remove(this.disabledClass);
  }

  _add(): void {
    this._checkbox!.classList.add(this.toggleClass);
  }

  _remove(): void {
    this._checkbox!.classList.remove(this.toggleClass);
  }

  _eventDispatch(eventName: Event['type']): void {
    let event: Event = new Event(eventName);
    this._input!.dispatchEvent(event);
  }

  _checkForUser(): void {
    if (!this._item && !this._input && !this._checkbox) {
      throw new Error(`The ${this.name} is not ready!`);
    } 

    if (!this._item) {
      throw new Error(`The element that you passed into ${this.name}, was not found!`);
    }

    if (!this._input) {
      throw new Error(`Input in ${this.name} is not found!`);
    }

    if (!this._checkbox) {
      throw new Error(`Fill element in ${this.name} is not found!`);
    }
    
    console.info(`The ${this.name} is ready!`);
  }
}