interface ICheckbox {
  readonly name: string,
  readonly toggleClass: string,
  readonly disabledClass: string,
  item: HTMLDivElement | null,
  input: HTMLInputElement | null,
  checkbox: HTMLSpanElement | null,
  handle(): void,
  check(): void,
  add(): void,
  remove(): void,
  checkForUser(): void,
}

class Checkbox implements ICheckbox {
  readonly name: string;
  readonly toggleClass: string = 'Checkbox__fill--active';
  readonly disabledClass: string = 'Checkbox--disabled';
  item: HTMLDivElement | null;
  input: HTMLInputElement | null;
  checkbox: HTMLSpanElement | null;

  constructor(item: HTMLDivElement) {
    this.item = item;
    this.input = item.querySelector('[data-id="dz-input"]');
    this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
    this.name = `${this.item.dataset.name || '(undefined name)'} checkbox component`;

    this.handle();
  }

  handle(): void {
    try {
      this.checkForUser();

      this.check();
      this.input!.onchange = this.check.bind(this);
    } catch (err: any | Error) {
      console.warn(err.message);
    }
  }

  check(): void {
    this.input!.checked ? this.add() : this.remove();
    
    if (this.input!.disabled)
      this.item!.classList.add(this.disabledClass);
  }

  add(): void {
    this.checkbox!.classList.add(this.toggleClass);
  }

  remove(): void {
    this.checkbox!.classList.remove(this.toggleClass);
  }

  checkForUser(): void {
    if (!this.item && !this.input && !this.checkbox) {
      throw new Error(`The ${this.name} is not ready!`);
    } 

    if (!this.item) {
      throw new Error(`The element that you passed into ${this.name}, was not found!`);
    }

    if (!this.input) {
      throw new Error(`Input in ${this.name} is not found!`);
    }

    if (!this.checkbox) {
      throw new Error(`Fill element in ${this.name} is not found!`);
    }
    
    console.info(`The ${this.name} is ready!`);
  }
}