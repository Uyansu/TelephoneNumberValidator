const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");


const checkNumber = (input) => {
    if(input === "") {
        alert("Please provide a phone number");
        return;
    }
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const spacesDashes = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pEle = document.createElement("p");
    pEle.classList = "result-p";
    phoneRegex.test(input) ? pEle.classList.add("right") : pEle.classList.add("wrong");
    pEle.appendChild(document.createTextNode(`${phoneRegex.test(input) ? "Valid" : "Invalid"} US Number: ${input}`));
    resultDiv.appendChild(pEle);
}

checkBtn.addEventListener("click", () => {
    checkNumber(userInput.value);
    userInput.value = "";
})

userInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkNumber(userInput.value);
        userInput.value = "";
    }
})

clearBtn.addEventListener("click", () => {
    resultDiv.textContent = "";
})