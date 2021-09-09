const sections = document.querySelectorAll('section'); // sections
const underlineLink = document.querySelector('.link__underline'); // under line element
const russianTravel = document.querySelector('#russianTravel'); // container for RT project
const mesto = document.querySelector('#mesto'); //container for mesto project
const blog = document.querySelector('#blog'); //container for blog project
const openRtContainer = document.querySelector('#openRtContainer'); //button that open RT container
const openMestoContainer = document.querySelector('#openMestoContainer'); //button that open mesto container
const openBlogContainer = document.querySelector('#openBlogContainer'); //button that open blog container
const steckContainers = document.querySelectorAll('.projects__item_description'); //all containers
const options = {
    threshold: 0.4
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

const openContiner = (container) => { //function of oppenin the section
    container.classList.remove('unactive');
    container.classList.add('active');
    document.addEventListener('keydown', closeByEsc);
}
 
const closeContainer = (container) => { //function of closing the section
    container.classList.remove('active'); 
    container.classList.add('unactive');
    document.removeEventListener('keydown', closeByEsc); 
} 

const closeByEsc = (event) => { //function of closing the section by click at ESC
    const deleteClass = document.querySelector('.active');  
    if(event.key === "Escape") { 
        closeContainer(deleteClass); 
    }    
}

steckContainers.forEach((container) => { //function of closing the section by clicking the button close or  overlay 
    container.addEventListener('click', (evt) => { 
        if(evt.target.classList.contains('active')) { 
            closeContainer(container);
        } 
        if(evt.target.classList.contains('cancel-cross')) { 
            closeContainer(container);
        } 
    }) 
}) 

openRtContainer.addEventListener('click', () => openContiner(russianTravel));
openMestoContainer.addEventListener('click', () => openContiner(mesto));
openBlogContainer.addEventListener('click', () => openContiner(blog));

