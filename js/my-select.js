export function mySelect(mySelect) {
  let select = mySelect;
  let trigerSelect = mySelect.querySelector('.my-select__trigger');
  let trigerSelectText = trigerSelect.querySelector('.my-select__trigger__text');
  let arrayOptions = mySelect.querySelectorAll('[name=select-option');

  allListeners();

  function allListeners() {
    trigerSelect.addEventListener('click', toggleSelect);
    arrayOptions.forEach((option) => {
      option.addEventListener('click', closeSelect);
    });
    document.addEventListener('click', closeDomSelect);
  }

  function toggleSelect() {
    select.classList.toggle('open');
  }

  function closeSelect(e) {
    select.classList.remove('open');
    trigerSelectText.textContent = e.target.nextElementSibling.textContent || e.taget.value;
  }

  function justCloseSelect() {
    select.classList.remove('open');
  }

  function closeDomSelect(e) {
    if (!e.target.closest('.my-select')) {
      justCloseSelect();
    }
  }
}