const img = document.getElementsByTagName('img')[0];
const btn = document.querySelector("button");

let changeVisibleImg = function()
{
    if (img.style.opacity == 1 || img.style.opacity == "")   
        img.style.opacity = 0;
    else
        img.style.opacity = 1;
}


let hideImg = function()
{
    img.style.opacity = 0;
}


let showImg = function()
{
    img.style.opacity = 1;
}

btn.addEventListener("click", changeVisibleImg);
img.addEventListener('mouseenter', hideImg);
img.addEventListener('mouseleave', showImg);

