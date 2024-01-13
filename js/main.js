const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

// function openModal() {
//     document.getElementById('myModal').style.display = 'block';
//   }

//   // Функция для скачивания файла в зависимости от выбранного языка
//   function downloadFile(language) {
//     alert('Выбран язык: ' + language);
    
//     // Определение имени файла в зависимости от выбранного языка
//     var fileName = language.toLowerCase() + '_file.txt';
    
//     // Создание искусственного Blob (binary large object) файла
//     var fileContent = 'Текст на выбранном языке: ' + language;
//     var blob = new Blob([fileContent], { type: 'text/plain' });

//     // Создание ссылки для скачивания файла
//     var link = document.createElement('a');
//     link.href = URL.createObjectURL(blob);
//     link.download = fileName;

//     // Добавление ссылки в DOM и запуск скачивания файла
//     document.body.appendChild(link);
//     link.click();

//     // Удаление ссылки из DOM
//     document.body.removeChild(link);

//     // Закрытие модального окна
//     document.getElementById('myModal').style.display = 'none';
//   }