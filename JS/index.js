let label = document.querySelector('#checkbox');
let input = document.querySelector('#input');
let checkboxInput = document.querySelector('#checkboxFill');
let state = {
  active: false,
  class: 'Checkbox__fill--active',
  click() {
    this.active = !this.active;
    if (this.active) {
      checkboxInput.classList.add(this.class);
      input.checked = this.active;
    } else {
      checkboxInput.classList.remove(this.class);
      input.checked = this.active;
    }
  }
}

input.checked = state.active;
label.addEventListener('click', () => {
  state.click();
});