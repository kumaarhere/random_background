const getColor = () => {
    const randomhexNumber = Math.floor(Math.random() *16777215);
    const randomCode = "#" + randomhexNumber.toString(16);
    const container = document.querySelector('.container');
    container.style.backgroundColor = randomCode
    document.getElementById("hex_code").innerHTML = randomCode;
}
document.getElementById('random').addEventListener(
    "click",
    getColor
)

//reload to generate
getColor();