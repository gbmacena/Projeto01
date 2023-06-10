function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains("litgh")){
    html.classList.remove("litgh")
  } else{
    html.classList.add("litgh")
  }
}
