
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
        }
        else {
            setPreviewUnknown(imageContainer); 
        }
    }
});