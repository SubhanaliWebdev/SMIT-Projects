let boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    document.body.style.backgroundColor = box.style.backgroundColor;
  });
});