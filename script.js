const typelist = document.querySelectorAll(".link-button-container__type");
const itemlist = document.querySelectorAll(".link-button-container__link");
const symbollist = document.querySelectorAll(".link-button-container__symbol");
let n = 0;

const extension = ext => {
    let item = itemlist[n];
    let symbol = symbollist[n];
    let link = item.getAttribute("href");
    let end = link.split(".").pop().toLowerCase();
    typelist[n].innerHTML = "[" + end +"]";
    if (symbol) {
        console.log(symbol);
        console.log(symbollist[n]);
        if (end == "jpg" || end == "png" || end == "pdf" || end == "zip" ) {
            symbol.src = "image/symbol-" + end + ".png";
            console.log(symbol.src)
        }
        else {
            symbol.src = "image/symbol-unknown.jpg";
        }
    }
    
    n++;

}

itemlist.forEach(extension);
