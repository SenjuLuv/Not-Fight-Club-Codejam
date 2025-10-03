function openTab(evt, contentClass) {
  var i, Page, tablinks;

  // Скрыть все вкладки
  Page = document.getElementsByClassName("Page");
  for (i = 0; i < Page.length; i++) {
    Page[i].style.display = "none";
  }

  // Удалить класс "active" у всех изображений вкладок
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Показать текущую вкладку и добавить класс "active" к изображению, которое открывает вкладку
  var activeContent = document.getElementsByClassName(contentClass);
  for (i = 0; i < activeContent.length; i++) {
    activeContent[i].style.display = "block"; // Показываем содержимое с соответствующим классом
  }
  evt.current;
}
document.querySelectorAll("img[data-title]").forEach((icon) => {
  icon.addEventListener("click", function () {
    const newTitle = this.getAttribute("data-title");
    document.getElementById("Page-Title").textContent = newTitle; // Изменяем текст заголовка
  });
});
// Проверка, есть ли сохраненное изображение в localStorage
const savedImage = localStorage.getItem("selectedImage");
if (savedImage) {
  document.getElementById("current-image").src = savedImage; // Устанавливаем сохраненное изображение
}

// Открытие модального окна при клике на изображение
document.getElementById("current-image").onclick = function () {
  document.getElementById("myModal").style.display = "block";
};

// Закрытие модального окна
document.querySelector(".close").onclick = function () {
  document.getElementById("myModal").style.display = "none";
};

// Замена изображения при выборе
document.querySelectorAll(".image-option").forEach((option) => {
  option.onclick = function () {
    const selectedImage = this.getAttribute("data-image");
    document.getElementById("current-image").src = selectedImage; // Заменяем изображение
    localStorage.setItem("selectedImage", selectedImage); // Сохраняем изображение в localStorage
    document.getElementById("myModal").style.display = "none"; //
  };
});

// Проверяем, есть ли сохраненный ник в localStorage
const savedNickname = localStorage.getItem("nickname");
if (savedNickname) {
  // Если ник сохранен, показываем основную вкладку
  document.getElementById("registration-menu").style.display = "none";
  document.getElementById("root").style.display = "block";

  // Отображаем ник в обоих span
  document.querySelector(".CharacterInformation__Name").textContent =
    savedNickname; // Отображаем ник
  document.getElementById("playerName").textContent = savedNickname; // Отображаем ник
}
// Функция для проверки состояния кнопки
function checkButtonState() {
  const nickname = document.getElementById("nickname").value.trim();
  const registerButton = document.getElementById("register-button");
  registerButton.disabled = nickname.length === 0; // Деактивируем кнопку, если ник пустой
}

// Обработчик события для поля ввода
document.getElementById("nickname").addEventListener("input", checkButtonState);

// Обработчик события для кнопки регистрации
document
  .getElementById("register-button")
  .addEventListener("click", function () {
    const nickname = document.getElementById("nickname").value.trim();
    // Проверяем, если ник не пустой
    if (nickname.length > 0) {
      localStorage.setItem("nickname", nickname); // Сохраняем ник в localStorage
      document.getElementById("registration-menu").style.display = "none"; // Скрываем меню регистрации
      document.getElementById("root").style.display = "block"; // Показываем основную вкладку

      // Обновляем текст в обоих span
      document.querySelector(".CharacterInformation__Name").textContent =
        nickname;
      document.getElementById("playerName").textContent = nickname;
    }
  });

// Обработчик события для кнопки Edit
document.getElementById("editButton").addEventListener("click", function () {
  const currentNickname = document.getElementById("playerName").textContent;
  document.getElementById("editNickname").value = currentNickname; // Устанавливаем текущее имя в поле ввода
  document.getElementById("characterInfo").classList.add("hidden"); // Скрываем информацию о персонаже
  document.getElementById("editContainer").classList.remove("hidden"); // Показываем контейнер редактирования
});

// Обработчик события для кнопки Save
document.getElementById("saveButton").addEventListener("click", function () {
  const newNickname = document.getElementById("editNickname").value.trim();
  if (newNickname.length > 0) {
    localStorage.setItem("nickname", newNickname); // Сохраняем новый ник в localStorage
    // Обновляем текст в обоих span
    document.querySelector(".CharacterInformation__Name").textContent =
      newNickname;
    document.getElementById("playerName").textContent = newNickname;
    document.getElementById("editContainer").classList.add("hidden"); // Скрываем контейнер редактирования
    document.getElementById("characterInfo").classList.remove("hidden"); // Показываем информацию о персонаже
  }
});

// Загрузка никнейма из localStorage при загрузке страницы
window.addEventListener("load", function () {
  const savedNickname = localStorage.getItem("nickname");
  if (savedNickname) {
    document.getElementById("nickname").value = savedNickname; // Устанавливаем ник в поле ввода
    document.querySelector(".CharacterInformation__Name").textContent =
      savedNickname; // Обновляем текст в span
    document.getElementById("playerName").textContent = savedNickname; // Обновляем текст в span
    document.getElementById("registration-menu").style.display = "none"; // Скрываем меню регистрации
    document.getElementById("root").style.display = "block"; // Показываем основную вкладку
  }
});
function toggleContent() {
  const fight = document.getElementById("fight");
  const FightButton = document.getElementById("FightButton");
  fight.style.display = "block"; // Показываем содержимое
  FightButton.style.display = "none"; // Скрываем кнопку
}
function updateImage(element) {
  const newImageSrc = element.getAttribute("data-image");
  const currentImages = document.querySelectorAll(
    ".CharacterPageContainer #current-image"
  );

  currentImages.forEach((img) => {
    img.src = newImageSrc; // Обновляем src для всех изображений с id current-image
  });
}
