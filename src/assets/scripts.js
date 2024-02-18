
/*========= MENU PRINCIPAL ========= */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

 /* 
  * Menu Show 
  */
 
 if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* 
 * Menu Hidden 
 */
 
 if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*========= MENU MOBILE =========*/
 
const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));
 
/*========= CHANGE BACKGROUND HEADER =========*/

const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

/*========= SWIPER POPULAR =========*/

const popularSwiper = new Swiper('.popular_content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
  
  });

  /*========= CHOOSE FAQ =========*/

  const faqItems = document.querySelectorAll('.choose_faq-item');

  faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose_faq-header');

    faqHeader.addEventListener('click', () => {

        const openItem = document.querySelector('.faq-open');

        toggleItem(item);

        if(openItem && openItem != item) {
            toggleItem(openItem);
        }

    });
  });

  const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose_faq-content');

    if(item.classList.contains('faq-open')) {

        faqContent.removeAttribute('style');
        item.classList.remove('faq-open');
    
    } else {
        
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

/*======== SHOW ScrollUp =========*/

const scrollUp = () => {
    const scrollup = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/*======== Scroll Section Active Link =========*/

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

/*============== Dark Theme Mode =============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

/*============== Scroll Reveal =============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home_content, .popular_container, .products_container, .join_bg, .footer_container`);
sr.reveal(`.home_image, .features_image`, {origin: 'bottom'});
sr.reveal(`.choose_content, .features_content`, {origin: 'right'});