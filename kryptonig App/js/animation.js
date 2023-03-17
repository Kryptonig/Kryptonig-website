const element = document.querySelector('box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.classList.add('animate')
      }
    });
  });
  
  
  observer.observe(element);