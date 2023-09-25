const text = "Sina Zare";
const typingSpeed = 100; // Adjust the typing speed (in milliseconds) as needed
const deletionSpeed = 100; // Adjust the deletion speed (in milliseconds) as needed
const pauseBeforeRestart = 1000; // Adjust the pause before restarting (in milliseconds) as needed

function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, speed);
        }, speed);
    } else {
        // Text is fully typed, start deleting it
        setTimeout(function() {
            deleteText(element, text.length - 1);
        }, pauseBeforeRestart);
    }
}

function deleteText(element, i) {
    if (i >= 0) {
        const currentText = element.innerHTML;
        element.innerHTML = currentText.slice(0, i);
        i--;
        setTimeout(function() {
            deleteText(element, i);
        }, deletionSpeed);
    } else {
        // Deletion complete, start typing again
        setTimeout(function() {
            element.innerHTML = ''; // Clear the element
            typeWriter(element, text, 0, typingSpeed);
        }, pauseBeforeRestart);
    }
}

const typingElement = document.getElementById('typing-text');
typeWriter(typingElement, text, 0, typingSpeed);