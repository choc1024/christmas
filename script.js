const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const congrats = document.getElementById("congrats");

// Focus on the first input on load
input1.focus();

// Move focus to the next input field when a number is entered
input1.addEventListener("input", () => {
    if (input1.value.length === 1) {
        input2.focus();
    }
});

input2.addEventListener("input", () => {
    if (input2.value.length === 1) {
        input3.focus();
    }
});

input3.addEventListener("input", () => {
    if (input3.value.length === 1) {
        checkPasscode();  // Check the passcode when the third input is filled
    }
});

// Function to check the entered passcode
function checkPasscode() {
    const enteredCode = input1.value + input2.value + input3.value;
    const correctCode = "138";

    if (enteredCode === correctCode) {
        // Hide input fields and display the poem
        input1.style.display = "none";
        input2.style.display = "none";
        input3.style.display = "none";
        
        // Set multi-line poem text
        congrats.innerHTML = `Beneath the waves where shadows creep, <br>
        A hidden treasure, close yet deep.<br>
        Soft and small, in tendrils curled,<br>
        A secret nestled, pearls unfurled.<br><br>

        The ocean’s arms reach out to hide,<br>
        What many seek but few have spied.<br>
        A careful guard, with watchful grace,<br>
        Keeps what you seek in secret place.<br><br>
        
        Closer than you dare to see,<br>
        Where life begins beneath the sea.<br>
        Look not far, but just below,<br>
        Where tiny wonders gently grow.`;
        
        congrats.style.display = "block";
    } else {
        // Reset the inputs if incorrect
        resetInputs();
    }
}

// Function to reset inputs and focus
function resetInputs() {
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input1.focus();

    input1.setAttribute('autocomplete', 'off');
    input2.setAttribute('autocomplete', 'off');
    input3.setAttribute('autocomplete', 'off');
}
