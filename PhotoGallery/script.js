const container = document.querySelector('.container')
const baseURL = "https://source.unsplash.com/random/"
const rows=5;
for(let i=0;i<rows*3;i++){
    const img=document.createElement("img")
    img.src=`${baseURL}${getRandomSize()}`
    container.appendChild(img)
    }


function getRandomSize(){
    return `${getRandomNumber()}${getRandomNumber()}`
    
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10 + 300)
}