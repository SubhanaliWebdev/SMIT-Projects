
const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  box.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
});

box.addEventListener('mouseleave', () => {
  box.style.transform = 'translate(0px, 0px)';
});