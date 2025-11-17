const themeButtons = document.querySelectorAll('.header__theme-menu-button');

function changeTheme(theme) {
  // Убираем все классы тем
  document.body.classList.remove('theme_dark', 'theme_light', 'theme_auto');
  
  // Добавляем нужный класс темы
  if (theme === 'auto') {
    // Для авто режима не добавляем класс, используем системные настройки
    document.body.className = 'page';
  } else {
    document.body.className = 'page';
    document.body.classList.add(`theme_${theme}`);
  }
  
  localStorage.setItem('theme', theme);
}

function setActiveButton(theme) {
  themeButtons.forEach((btn) => {
    btn.classList.remove('header__theme-menu-button_active');
    btn.removeAttribute('disabled');
  });
  
  const activeButton = document.querySelector(`.header__theme-menu-button_type_${theme}`);
  if (activeButton) {
    activeButton.classList.add('header__theme-menu-button_active');
    activeButton.setAttribute('disabled', true);
  }
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let chosenTheme;
    
    if (button.classList.contains('header__theme-menu-button_type_light')) {
      chosenTheme = 'light';
    } else if (button.classList.contains('header__theme-menu-button_type_dark')) {
      chosenTheme = 'dark';
    } else if (button.classList.contains('header__theme-menu-button_type_auto')) {
      chosenTheme = 'auto';
    }
    
    changeTheme(chosenTheme);
    setActiveButton(chosenTheme);
  });
});

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    changeTheme(savedTheme);
    setActiveButton(savedTheme);
  } else {
    // По умолчанию авто режим
    setActiveButton('auto');
  }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', initTheme);
