document.addEventListener('DOMContentLoaded', () => {

    const scroller = document.querySelector('.scroller');
    const leftContainer = document.querySelector('.left-container');
    const rightContainer = document.querySelector('.right-container');
  
    
    const scrollAmount = 200; 
  
    
    leftContainer.addEventListener('click', () => {
      scroller.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    });
  
    
    rightContainer.addEventListener('click', () => {
      scroller.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    });
  });
  