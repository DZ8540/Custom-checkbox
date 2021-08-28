interface ICheckbox {
  readonly toggleClass: string,
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
  checkForUser(): boolean,
  setName(): string,
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

  setName(): string {
    if (this.item && this.item.id)
      return `${this.item.id} checkbox`;

    return '(undefined name) checkbox';
  }

  checkForUser(): boolean {
    if (!this.item && !this.input && !this.checkbox) {
      console.warn(`The ${this.name} component is not ready!`);
    } 

    if (!this.item) {
      console.warn(`The element that you passed into ${this.name} component, was not found!`);
      return false;
    }

    if (!this.input) {
      console.warn(`Input in ${this.name} component is not found!`);
      return false;
    }

    if (!this.checkbox) {
      console.warn(`Fill element in ${this.name} component is not found!`);
      return false;
    }
    
    console.info(`The ${this.name} component is ready!`);
    return true;
  }
}