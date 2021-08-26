interface ICheckbox {
  toggleClass: string,
  item: HTMLDivElement | null,
  input: HTMLInputElement | null,
  checkbox: HTMLSpanElement | null,
  status: boolean,
  name: string,
  handle(): void,
  click(): void,
  check(): void,
  add(): void,
  remove(): void,
  checkForUser(): void,
  setName(): string
}

class Checkbox implements ICheckbox {
  toggleClass: string = 'Checkbox__fill--active';
  item: HTMLDivElement | null;
  input: HTMLInputElement | null;
  checkbox: HTMLSpanElement | null;
  status: boolean = false;
  name: string;

  constructor(item: HTMLDivElement) {
    this.item = item;
    this.input = item.querySelector('[data-id="dz-input"]');
    this.checkbox = item.querySelector('[data-id="dz-checkboxInput"]');
    this.name = this.setName();

    if (this.input) {
      this.status = this.input.checked;
      this.handle();
    } else {
      console.warn(`Input in ${this.name} component is not found!`);
    }
  }

  handle(): void {
    this.checkForUser();
    this.check();

    if (this.item)
      this.item.onclick = this.click.bind(this);
    else
      console.warn(`The element that you passed into ${this.name} component, was not found!`);
  }

  click(): void {
    this.status = !this.status;
    this.check();
  }

  check(): void {
    if (this.status)
      this.add();
    else
      this.remove();
  }

  add(): void {
    if (this.checkbox)
      this.checkbox.classList.add(this.toggleClass);
    else
      console.warn(`Fill element in ${this.name} component is not found!`);

    if (this.input)
      this.input.checked = this.status;
    else
      console.warn(`Input in ${this.name} component is not found!`);
  }

  remove(): void {
    if (this.checkbox)
      this.checkbox.classList.remove(this.toggleClass);
    else
      console.warn(`Fill element in ${this.name} component is not found!`);

    if (this.input)
      this.input.checked = this.status;
    else
      console.warn(`Input in ${this.name} component is not found!`);
  }

  setName(): string {
    if (this.item && this.item.id)
      return `${this.item.id} checkbox`;

    return '(undefined name) checkbox';
  }

  checkForUser() {
    if (this.item && this.input && this.checkbox)
      console.info(`The ${this.name} component is ready!`);
    else 
      console.warn(`The ${this.name} component is not ready!`);
  }
}