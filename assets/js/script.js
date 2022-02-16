const observer = document.querySelectorAll(".observer");
const apperOptions = {
    threshold: 0,
    rootMargin: "10px 0px -100px 0px",
};
const apperOnScroll = new IntersectionObserver ( entries=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.setAttribute("data-appear", "in");
        } else{
            entry.target.setAttribute("data-appear", "out");
        }
    });
}, apperOptions);

observer.forEach(observer =>{
    apperOnScroll.observe(observer);
});