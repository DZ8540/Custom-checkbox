let toggleClass = 'Checkbox__fill--active';

let checkbox = document.querySelector('#checkbox');
let input = document.querySelector('#input');
let checkboxInput = document.querySelector('#checkboxFill');
let state = {
  input,
  checkbox,
  checkboxInput,
  toggleClass,
  status: this.input.checked,
  click() {
    this.status = !this.status;
    if (this.status)
      this.add();
    else
      this.remove();
  },
  add() {
    this.checkboxInput.classList.add(this.toggleClass);
    this.input.checked = this.status;
  },
  remove() {
    this.checkboxInput.classList.remove(this.toggleClass);
    this.input.checked = this.status;
  },
  handle() {
    if (this.status)
      this.add();
    else
      this.remove();

    this.checkbox.onclick = this.click.bind(this);
  }
}

state.handle();