let firstCheckbox: HTMLDivElement | null = document.querySelector('#firstCheckbox');
if (firstCheckbox)
  new Checkbox(firstCheckbox);
else 
  console.warn('Checkbox is not found!');

let lastCheckbox: HTMLDivElement | null = document.querySelector('#lastCheckbox');
if (lastCheckbox)
  new Checkbox(lastCheckbox);
else
  console.warn('Checkbox is not found!');