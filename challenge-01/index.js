document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery")
  const divs = gallery.querySelectorAll("div")
  let count = 1 // Inicia desde 1 para `data-count`

  const updateGallery = () => {
    gallery.setAttribute("data-count", count) // Cambia el atributo data-count

    // Oculta todos los divs primero
    divs.forEach((div) => {
      div.style.display = "none"
      div.classList.remove("visible-last") // Remueve clases anteriores
    })

    // Muestra solo los divs necesarios según data-count
    for (let i = 0; i < count; i++) {
      divs[i].style.display = "block"
    }

    // Si count es 3 o 5, añade clase 'visible-last' al último div visible
    if (count === 3 || count === 5) {
      divs[count - 1].classList.add("visible-last") // El último visible
    }

    // Muestra el ::after solo si count es igual al total de divs (6)
    if (count === divs.length) {
      divs[divs.length - 1].classList.add("show-after")
    } else {
      divs[divs.length - 1].classList.remove("show-after")
    }

    // Incrementa el contador o reinicia si llega al máximo
    count = count < divs.length ? count + 1 : divs.length
  }

  updateGallery() // Llama la función la primera vez
  setInterval(updateGallery, 3000)
});
