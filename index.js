const $ = (selector) => document.querySelector(selector);

const wrapper = $('#wrapper');
const ticket = $('#ticket');

const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove', (event) => {
   const { offsetX, offsetY } = event; // Posición del mouse encima del elemento a escuchar

   //Calcular la rotación
   const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
   const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

   ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

// El ticket vuelve a su posición original
wrapper.addEventListener('mouseleave', () => {
   ticket.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

const colors = {
   orange: {
      100: '#FFC837',
      200: '#FF8008',
   },
   purple: {
      100: '#8227FE',
      200: '#D676EA',
   },
   yellow: {
      100: '#fff601',
   },
};
