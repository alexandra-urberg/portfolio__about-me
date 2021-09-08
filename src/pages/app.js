const sections = document.querySelectorAll('section'); // селекторы
const underlineLink = document.querySelector('.link__underline'); 
const options = {
    threshold: 0.4 // промежуток на котором срабатывает отображение секции
};

let observe = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const anchor = document.querySelector(`[data-page=${className}]`);
        const coords = anchor.getBoundingClientRect();
        const directions = {
            width: coords.width,
            bottom: coords.bottom - 50,
            left: coords.left
        }; 
        if(entry.isIntersecting) {
            underlineLink.style.setProperty("left", `${directions.left}px`);
            underlineLink.style.setProperty("bottom", `${directions.bottom}px`);
            underlineLink.style.setProperty("width", `${directions.width}px`);
        }
    });  
}

sections.forEach( section => {
    observe.observe(section);
});