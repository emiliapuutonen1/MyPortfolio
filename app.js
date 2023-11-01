document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');
    const themeButton = document.querySelector('.theme-btn');
  
    function pageTransitions() {
      for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
          let currentBtn = document.querySelectorAll('.active-btn');
          currentBtn[0].classList.remove('active-btn');
          this.classList.add('active-btn');
        });
      }
  
      allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
          sections.forEach((section) => {
            section.classList.remove('active');
          });
  
          const element = document.getElementById(id);
          element.classList.add('active');
        }
      });
    }
  
    class ThemeSwitcher {
      constructor(themeButton) {
        this.themeButton = themeButton;
        this.element = document.body;
        this.init();
      }
  
      init() {
        this.themeButton.addEventListener('click', () => this.toggleTheme());
        this.loadThemeFromLocalStorage();
      }
  
      toggleTheme() {
        this.element.classList.toggle('light-mode');
        this.saveThemeToLocalStorage();
      }
  
      saveThemeToLocalStorage() {
        const theme = this.element.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
      }
  
      loadThemeFromLocalStorage() {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
          this.element.classList.add('light-mode');
        } else {
          this.element.classList.remove('light-mode');
        }
      }
    }
  
    
    pageTransitions();
  
    
    const themeSwitcher = new ThemeSwitcher(themeButton);
  
    
    const apiKey = '84c2e81c82c815f43f8eb7dedbce383e    ';
    const city = 'Oulu';
  
    function getWeather() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q={helsinki}&appid={84c2e81c82c815f43f8eb7dedbce383e')

      `)
        .then(response => response.json())
        .then(data => {
          const temperature = data.main.temp; 
          const weatherDescription = data.weather[0].description; 
  
          const weatherElement = document.getElementById('weather-info');
          weatherElement.innerHTML = `Temperature: ${temperature}K, Description: ${weatherDescription}`;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    getWeather(); 
  
  });
  




/*const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');



function pageTransitions() {
   
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList.remove('active-btn');
            this.classList.add('active-btn');
        });
    }

   
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

pageTransitions();


class ThemeSwitcher {
    constructor(themeButton) {
      this.themeButton = themeButton;
      this.element = document.body;
      this.init();
    }
  
    init() {
      this.themeButton.addEventListener('click', () => this.toggleTheme());
      this.loadThemeFromLocalStorage();
    }
  
    toggleTheme() {
      this.element.classList.toggle('light-mode');
      this.saveThemeToLocalStorage();
    }
  
    saveThemeToLocalStorage() {
      const theme = this.element.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
    }
  
    loadThemeFromLocalStorage() {
      const theme = localStorage.getItem('theme');
      if (theme === 'light') {
        this.element.classList.add('light-mode');
      } else {
        this.element.classList.remove('light-mode');
      }
    }
  }
  
  
  const themeButton = document.querySelector('.theme-btn');
  const themeSwitcher = new ThemeSwitcher(themeButton);*/

  






