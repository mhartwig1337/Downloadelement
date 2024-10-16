/* const containerlist = document.querySelectorAll(".link-button-container") */
/*const typelist = document.querySelectorAll(".link-button-container__type");
const itemlist = document.querySelectorAll(".link-button-container__link");
const symbollist = document.querySelectorAll(".link-button-container__symbol");
const previewlist = document.querySelectorAll(".bild-container__bild");
const typeExtensionArr = [];
let i = 0;
let n = 0;
let nosymbol_n = 0;

const extension = ext => {
    let item = itemlist[n];
    /* let symbol = symbollist[n]; */
    /* let preview = previewlist[n]; */
    /* let link = item.getAttribute("href");
    let typeExtension = link.split(".").pop().toLowerCase();
    typelist[n].innerHTML = "[" + typeExtension +"]"; */
/*     console.log(containerlist[n].querySelector('.link-button-container__symbol-wrapper'))
    console.log(containerlist[n].querySelector('.link-button-container__symbol-wrapper')) */
    /* if (containerlist[n].querySelector('.link-button-container__symbol-wrapper') !== null) {
        typeExtensionArr[n-nosymbol_n] = typeExtension; */
        /* if (typeExtension == "jpg" || typeExtension == "png" || typeExtension == "pdf" || typeExtension == "zip" ) {
            symbol.src = "image/symbol-" + typeExtension + ".png";
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
    
    let typeExtension = typeExtensionArr[i];
    let symbol = symbollist[i]
    if (typeExtension == "jpg" || typeExtension == "png" || typeExtension == "pdf" || typeExtension == "zip" ) {
            symbol.src = "image/symbol-" + typeExtension + ".png";
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

const shouldDisplayPreview = (container) => {
    return container.closest('.bild-container') !== null;
}

const getImageContainer = (container) => {
    let k = container.closest('.bild-container');
    return k.querySelector('.bild-container__bild');
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

const setPreviewFromHref = (container, imageContainer) => {
    let href = getHrefFromContainer(container);
    imageContainer.src = href;
}

const setPreviewUnknown = (imageContainer) => {
    imageContainer.src = "image/symbol-unknown.jpg";
}

const containerlist = document.querySelectorAll(".link-button-container")
containerlist.forEach((container) => {
    let typeExtension = getTypeFromHref(container);
    let displaySymbol = shouldDisplaySymbol(container);
    let displayPreview = shouldDisplayPreview(container); 
    if (displaySymbol) {
        let symbolSlot = getSymbolSlot(container);
        if (typeExtension == "jpg" || typeExtension == "png" || typeExtension == "pdf" || typeExtension == "zip" ) {
            symbolSlot.src = "image/symbol-" + typeExtension + ".png";
        }
        else {
            symbolSlot.src = "image/symbol-unknown.jpg";
        }
    }
    setTypeExtension(container);
    
    if(displayPreview) {
        let imageContainer = getImageContainer(container);
        if(typeExtension == "jpg" || typeExtension == "jpeg" || typeExtension == "png") {
            setPreviewFromHref(container, imageContainer);
        }    
        else if (typeExtension =="pdf") {
            let src = getHrefFromContainer(container);
            
            imageContainer.outerHTML = `<iframe class="bild-container__bild" src="${src}" style="display:block" ></iframe>`
                
                /* const iframe = container.querySelector('.bild-container__bild');
                iframe.src = getHrefFromContainer(container);
                iframe.style.display = 'block'; */
        }
        else {
            setPreviewUnknown(imageContainer); 
        }
    }
});