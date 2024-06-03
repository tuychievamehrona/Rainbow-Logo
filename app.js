const colorElements = document.querySelectorAll(".color");
const item = document.querySelector(".item");
const colorClasses = ["one", "two", "three", "four", "five", "six", "seven"];

for (let i = 0; i < colorElements.length; i++) {
    let colorElement = colorElements[i];
    let colorClass = colorClasses[i];

    colorElement.addEventListener("mouseover", () => {
        item.classList.add(colorClass);
        document.body.classList.add(colorClass);
    });

    colorElement.addEventListener("mouseout", () => {
        item.classList.remove(colorClass);
        document.body.classList.remove(colorClass);
    });
}
