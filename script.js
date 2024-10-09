
const typelist = document.querySelectorAll(".type")
const itemlist = document.querySelectorAll(".test");
let n = 0;


const extension = ext => {
    let item = itemlist[n];
    let link = item.getAttribute("href");
    let end = link.split(".").pop().toUpperCase();
    typelist[n].innerHTML = "[" + end +"]";
    n++;
}

itemlist.forEach(extension);


