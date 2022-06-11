
const iconMenu = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.header__menu');

const buttonContacts = document.querySelector('.button-contacts');
const contactsMenu = document.querySelector('.contacts-menu');

if (iconMenu && headerMenu) {
   document.addEventListener("click", function (e) {

      let placeClick = e.target;

      if (placeClick == iconMenu) {
         headerMenu.classList.toggle("menu-open")
         document.documentElement.classList.toggle('_lock')
      }
   });
}

if (buttonContacts) {
   buttonContacts.addEventListener("click", function (e) {
      contactsMenu.classList.toggle('menu__contacts_active');
      buttonContacts.classList.toggle('button-contacts_active');
   });
}


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
   anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');
      headerMenu.classList.remove("menu-open")
      document.documentElement.classList.remove('_lock')

      let cordsY = (document.querySelector('' + blockID).offsetTop) - 47;
      window.scrollTo({
         top: cordsY,
         behavior: "smooth",
      })
   });
}

//===================================LANG================================

const i18Obj = {
   'en': {
      'summary': 'Summary',
      'education': 'Education',
      'skills': 'Skills',
      'my-work': 'My Work',
      'projects': 'Projects',
      'contacts': 'My Contacts',
      'my-name': 'Dmitry Ostapchuk',
      'who-i': 'Beginning frontend developer',
      'hey': "Hey! I have only recently got acquainted with the world of IT, but I am already involved in it up to my ears.",
      'i-like': 'I like to learn something new and improve existing skills. Now I am actively studying JavaScript and in the future I want to become a front-end developer.',
      'graduated': ' Graduated from the Brest State Polytechnic College with a degree in Design and Production of Radioelectronic Equipment',
      'graduated-moment': 'At the moment I am a second-year student of the correspondence department of the Brest State Technical University with a degree in Industrial Electronics (Radio Electronics Engineer)',
      'english': 'English',
      'i-workig-prev': `I work in a  `,
      'i-workig-post': ` an electronic engineer`,
   },
   'ru': {
      'summary': 'О себе',
      'education': 'Образование',
      'skills': 'Навыки',
      'my-work': 'Место работы',
      'projects': 'Работы',
      'contacts': 'Мои контакты',
      'my-name': 'Дмитрий Остапчук',
      'who-i': 'Начинающий frontend developer',
      'hey': "Привет! Я лишь недавно познакомился с миром IT, но уже вовлечён в него по уши.",
      'i-like': 'Мне нравится узнавать что-то новое и совершенствовать уже имеющиеся навыки.',
      'graduated': `Окончил Брестский государственный политехнический колледж по специальности «Проектирование и производство радиоэлектронных средств» `,
      'graduated-moment': `На данный момент являюсь студентом второго курса заочного отделения Брестского государственного технического университета по специальности «Промышленная электроника (инженер по радиоэлектронике)» `,
      'english': 'Зание Английского',
      'i-workig-prev': `На данный момент работаю в компании `,
      'i-workig-post': ` на должности инженер-электроник`,
   }
}

let lang = 'ru';

const enButton = document.querySelector('.lang-menu__en');
const ruButton = document.querySelector('.lang-menu__ru');

enButton.addEventListener('click', () => {
   lang = 'en'
   getTranslate();
   localStorage.setItem('setValueLang', lang)
})
ruButton.addEventListener('click', () => {
   lang = 'ru';
   getTranslate();
   localStorage.setItem('setValueLang', lang)
})




if (localStorage.getItem('setValueLang')) {
   lang = localStorage.getItem('setValueLang');
   getTranslate();
   lang == 'ru' ? ruButton.classList.add('lang_active') : enButton.classList.add('lang_active');
}
else (
   getTranslate('ru')
)

function getTranslate(setLang = lang) {
   const lang = document.querySelectorAll('[data-lang]');
   for (item of lang) {
      let key = item.dataset.lang;
      if (setLang == 'ru') {
         ruButton.classList.add('lang_active')
         enButton.classList.remove('lang_active');
         item.textContent = i18Obj[setLang][key];
      }
      else {
         enButton.classList.add('lang_active');
         ruButton.classList.remove('lang_active')
         item.textContent = i18Obj[setLang][key]
      }
   }
}
