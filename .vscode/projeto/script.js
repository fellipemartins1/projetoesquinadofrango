function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tah=g img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adiconar imagem light
    img.setAttribute("src", "./assets/Avatar.png")
  } else {
    // se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
    // para o projeto, será mantifo a mesma imagem em ambos os modos
  }
}
