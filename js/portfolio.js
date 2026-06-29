const listRef = document.querySelector(".portfolio__list");
const projects = document.querySelectorAll(".portfolio__item");

listRef.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  const action = evt.target.dataset.btn;

  let category = null;

  switch (action) {
    case "btn1": // Усі
      category = "all";
      break;
    case "btn2": // Веб-сайти
      category = "Веб-сайт";
      break;
    case "btn3": // Додатки
      category = "Додаток";
      break;
    case "btn4": // Дизайн
      category = "Дизайн";
      break;
    case "btn5": // Маркетинг
      category = "Маркетинг";
      break;
    default:
      console.log("Шухер");
      return;
  }

  projects.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

