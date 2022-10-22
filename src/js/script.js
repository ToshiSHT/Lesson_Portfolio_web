const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

      function closeMenu (seletor) {
        seletor.addEventListener('click', e =>{
        menu.classList.remove('active');
        });
      }
      
      hamburger.addEventListener('click', e => {
        menu.classList.add('active');
      });
      closeMenu(closeBtn);
      closeMenu(overlay);

 //
 const progressValue = document.querySelectorAll('.skills__progress-value'),
       progressBar = document.querySelectorAll('.skills__progress-bar');
       progressBar.forEach((elem,i) => {
       elem.style.width = progressValue[i].textContent;  
       });
       
    
