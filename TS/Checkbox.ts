interface ICheckbox {
  readonly toggleClass: string,
  item: HTMLDivElement | null,
  input: HTMLInputElement | null,
  checkbox: HTMLSpanElement | null,
  status: boolean,
  readonly name: string,
  handle(): void,
  click(): void,
  check(): void,
  add(): void,
  remove(): void,
  checkForUser(): boolean,
}

class Checkbox implements ICheckbox {
  toggleClass: string = 'Checkbox__fill--active';
  item: HTMLDivElement | null;
  input: HTMLInputElement | null;
  checkbox: HTMLSpanElement | null;
  status: boolean = false;
  readonly name: string;

  constructor(item: HTMLDivElement) {
    this.item = item;
    this.input = item.querySelector('[data-id="dz-input"]');
    this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
    this.name = `${this.item.dataset.name || '(undefined name)'} checkbox component`;

    this.handle();
  }

  handle(): void {
    if (this.checkForUser()) {
      this.status = this.input!.checked;
      this.check();
      this.item!.onclick = this.click.bind(this);
    }
  }

  click(): void {
    this.status = !this.status;
    this.check();
  }

  check(): void {
    this.status ? this.add() : this.remove();
  }

  add(): void {
    this.checkbox!.classList.add(this.toggleClass);
    this.input!.checked = this.status;
  }

  remove(): void {
    this.checkbox!.classList.remove(this.toggleClass);
    this.input!.checked = this.status;
  }

  checkForUser(): boolean {
    if (!this.item && !this.input && !this.checkbox) {
      console.warn(`The ${this.name} is not ready!`);
    } 

    if (!this.item) {
      console.warn(`The element that you passed into ${this.name}, was not found!`);
      return false;
    }

    if (!this.input) {
      console.warn(`Input in ${this.name} is not found!`);
      return false;
    }

    if (!this.checkbox) {
      console.warn(`Fill element in ${this.name} is not found!`);
      return false;
    }
    
    console.info(`The ${this.name} is ready!`);
    return true;
  }
}