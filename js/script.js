const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(phoneInput){
    const ok = re.exec(phoneInput.value);

    if (ok) {
        output.textContent = `Thanks, your phone number is ${ok[0]}`;
    } else {
        output.textContent = `${phoneInput.value} isn't a valid phone number with area code!`;
    }
}

form.addEventListener("submit", (event) => {
        event.preventDefault();
        testInfo(input);
});
