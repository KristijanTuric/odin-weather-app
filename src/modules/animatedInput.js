const input = document.getElementById("citySearch");
const placeholderText = input.getAttribute('placeholder');
let currentIndex = 0;

function typePlaceholder() {
    if (currentIndex < placeholderText.length) {
        input.setAttribute('placeholder', placeholderText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typePlaceholder, 200);
    }
}

function repeatTypePlaceholder() {
    setInterval(() => {
        currentIndex = 0;
        typePlaceholder();
    }, 5000);
    
}

export { typePlaceholder, repeatTypePlaceholder };