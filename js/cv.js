let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + ' ' + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLength = pathLength * (scrollPercentage) / 3;

    path.style.strokeDashoffset = pathLength - drawLength;
})

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}