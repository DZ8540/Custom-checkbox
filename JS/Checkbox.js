class Checkbox {
  toggleClass = 'Checkbox__fill--active';

  constructor(item) {
    this.item = item;
    this.input = item.querySelector('input');
    this.checkbox = item.querySelector('[data-id="checkboxInput"]');
    this.status = this.input.checked;

    this.handle();
  }

  handle() {
    this.check();
    this.item.onclick = this.click.bind(this);
  }

  click() {
    this.status = !this.status;
    this.check();
  }

  check() {
    if (this.status)
      this.add();
    else
      this.remove();
  }

  add() {
    this.checkbox.classList.add(this.toggleClass);
    this.input.checked = this.status;
  }

  remove() {
    this.checkbox.classList.remove(this.toggleClass);
    this.input.checked = this.status;
  }
}