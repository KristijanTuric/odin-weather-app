function displayError(message) {
    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');

    // Hide the error message after 3 seconds
    setTimeout(() => {
        errorMessage.classList.add('hidden');
    }, 3000);
}

export { displayError };