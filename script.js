/* const containerlist = document.querySelectorAll(".link-button-container") */
/*const typelist = document.querySelectorAll(".link-button-container__type");
const itemlist = document.querySelectorAll(".link-button-container__link");
const symbollist = document.querySelectorAll(".link-button-container__symbol");
const previewlist = document.querySelectorAll(".bild-container__bild");
const endArr = [];
let i = 0;
let n = 0;
let nosymbol_n = 0;

const extension = ext => {
    let item = itemlist[n];
    /* let symbol = symbollist[n]; */
    /* let preview = previewlist[n]; */
    /* let link = item.getAttribute("href");
    let end = link.split(".").pop().toLowerCase();
    typelist[n].innerHTML = "[" + end +"]"; */
/*     console.log(containerlist[n].querySelector('.link-button-container__symbol-wrapper'))
    console.log(containerlist[n].querySelector('.link-button-container__symbol-wrapper')) */
    /* if (containerlist[n].querySelector('.link-button-container__symbol-wrapper') !== null) {
        endArr[n-nosymbol_n] = end; */
        /* if (end == "jpg" || end == "png" || end == "pdf" || end == "zip" ) {
            symbol.src = "image/symbol-" + end + ".png";
        }
        else {
            symbol.src = "image/symbol-unknown.jpg";
        } 
    }
    else {
        nosymbol_n++;
    }
    n++;
}

const setSymbol = (i) => {
    
    let end = endArr[i];
    let symbol = symbollist[i]
    if (end == "jpg" || end == "png" || end == "pdf" || end == "zip" ) {
            symbol.src = "image/symbol-" + end + ".png";
        }
    else {
            symbol.src = "image/symbol-unknown.jpg";
    }
    i++; 
}

containerlist.forEach(extension);
symbollist.forEach((item, index) => setSymbol(index));
 */
/* const containerlist = document.querySelectorAll(".link-button-container") */

const getHrefFromContainer = (container) => {
    return container.querySelector('.link-button-container__link').getAttribute("href");
}

const getTypeFromHref = (container) => {
    let href = getHrefFromContainer(container);
    return href.split(".").pop().toLowerCase()
}

const shouldDisplaySymbol = (container) => {
    return container.querySelector('.link-button-container__symbol-wrapper') !== null;
}

const getSymbolSlot = (container) => {
    return container.querySelector('.link-button-container__symbol');
}

const getTypePosition = (container) => {
    return container.querySelector('.link-button-container__type');
}
 
const setTypeExtension = (container) => {
    let typeSlot = getTypePosition(container);
    typeSlot.innerHTML = "[" + getTypeFromHref(container) +"]";
}

const containerlist = document.querySelectorAll(".link-button-container")
containerlist.forEach((container) => {
    let end = getTypeFromHref(container);
    let displaySymbol = shouldDisplaySymbol(container);
    if (displaySymbol) {
        if (end == "jpg" || end == "png" || end == "pdf" || end == "zip" ) {
            getSymbolSlot(container).src = "image/symbol-" + end + ".png";
        }
        else {
            getSymbolSlot(container).src = "image/symbol-unknown.jpg";
        }
    }
    setTypeExtension(container); 
});