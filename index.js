const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]
let img = document.querySelector(".image")
const nextButton = document.querySelector('.next')
const previousButton = document.querySelector('.previous')
const bubbleButtons = document.querySelectorAll('.bubble')

i = 0 
img.src = images[i]
bubbleButtons[i].textContent= '●'

for(let j = 0; j<bubbleButtons.length; j++){
    bubbleButtons[j].addEventListener("click",function(e){
        i=j
        img.src =images[j]
        console.log(j)
        for (let num in bubbleButtons){
            bubbleButtons[num].textContent = '○'
            bubbleButtons[j].textContent = '●' 
        }
    })

}

nextButton.addEventListener("click",function(){
    if (i < 5){
        i++
        img.src = images[i]
        for (let num in bubbleButtons){
            bubbleButtons[num].textContent = '○'
            bubbleButtons[i].textContent = '●' 
        }
    }
})

previousButton.addEventListener("click",function(){
    if(i > 0){
        i--
        img.src = images[i]
        for (let num in bubbleButtons){
            bubbleButtons[num].textContent = '○'
            bubbleButtons[i].textContent = '●' 
        }
    }
})







// const images = [
//     './assets/1.jpg',
//     './assets/2.jpg',
//     './assets/3.jpg',
//     './assets/4.jpg',
//     './assets/5.jpg',
//     './assets/6.jpg'
// ]




// let currentImageIndex = 0
// image.src = images[currentImageIndex]
// bubbleButtons[currentImageIndex].textContent = '●'

// for (let i = 0; i < bubbleButtons.length; i++) {
//     bubbleButtons[i].addEventListener('click', function (e) {
//         currentImageIndex = i;
//         image.src = images[currentImageIndex]
//         for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
//         bubbleButtons[currentImageIndex].textContent = '●'
//     })
// }

// previousButton.addEventListener('click', function () {
//     if (currentImageIndex > 0) currentImageIndex--
//     image.src = images[currentImageIndex]
//     for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
//     bubbleButtons[currentImageIndex].textContent = '●'
// })

// nextButton.addEventListener('click', function () {
//     if (currentImageIndex < 5) currentImageIndex++
//     image.src = images[currentImageIndex]
//     for(let i = 0; i < bubbleButtons.length; i++) bubbleButtons[i].textContent = '○'
//     bubbleButtons[currentImageIndex].textContent = '●'
// })