export default function addEffect(nameElement){
    const container = document.querySelector(nameElement);
    let mContainer = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    let topContainer = mContainer.top;
    if(topContainer < (windowHeight/2)){
        container.classList.add('effect');
    }
    } 
