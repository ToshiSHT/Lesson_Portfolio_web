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

    
