const typelist = document.querySelectorAll(".link-button-container__type")
const itemlist = document.querySelectorAll(".link-button-container__link");
let n = 0;

const extension = ext => {
    let item = itemlist[n];
    let link = item.getAttribute("href");
    let end = link.split(".").pop().toUpperCase();
    typelist[n].innerHTML = "[" + end +"]";
    n++;
}

itemlist.forEach(extension);
