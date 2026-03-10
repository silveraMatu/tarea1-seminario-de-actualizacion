const buttonChangeColor = document.querySelector(".change-color")
const backgroundPage = document.getElementById("background")

const targetText = document.getElementById("text-input")
colores = [
  {backgroundColor: "white", textColor:"black"},
  {backgroundColor: "black", textColor:"white"},
  {backgroundColor: "skyBlue", textColor:"red"},
]


currentIteration = 0
buttonChangeColor.addEventListener("click", (e)=>{
  e.preventDefault()


  if (currentIteration == 0){
    backgroundPage.style.backgroundColor = colores[currentIteration + 1].backgroundColor
    targetText.style.color = colores[currentIteration + 1].textColor
    currentIteration = currentIteration + 1
    console.log(targetText.style.backgroundColor)
  }else if(currentIteration == 1){
    backgroundPage.style.backgroundColor = colores[currentIteration + 1].backgroundColor
    targetText.style.color = colores[currentIteration + 1].textColor
    currentIteration = currentIteration + 1
  }else if(currentIteration == 2){
    backgroundPage.style.backgroundColor = colores[0].backgroundColor
    targetText.style.color = colores[0].textColor
    currentIteration = 0
  }

  console.log(currentIteration)
})