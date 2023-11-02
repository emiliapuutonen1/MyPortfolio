
const sections = document.querySelectorAll('.section');
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
  const themeSwitcher = new ThemeSwitcher(themeButton);


  function fetchWeatherData() {
    const weatherInfo = document.getElementById('weather-info');
    const apiKey = 'd2af86cf2d134bf4b4b103631230211'; 
    const location = 'Oulu'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch weather data');
        }
      })
      .then((data) => {
        const temperature = data.current.temp_c || 'N/A'; 
        const description = data.current.condition.text || 'N/A'; 
  
        const weatherHTML = `
          <h3>Weather Information</h3>
          <p>Temperature: ${temperature}°C</p>
          <p>Description: ${description}</p>
        `;
  
        weatherInfo.innerHTML = weatherHTML;
      })
      .catch((error) => {
        console.error(error);
        weatherInfo.innerHTML = 'Failed to fetch weather data';
      });
  }
  
  fetchWeatherData();
  const timerElement = document.getElementById('timer');
const timeElement = document.getElementById('time');

let startTime = new Date().getTime();

function updateTimer() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);

  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  timeElement.textContent = formattedTime;
}

const timerInterval = setInterval(updateTimer, 1000);




  


  






