const container = document.querySelector("#container");
const results = document.querySelector("#result");
const pointForm = document.querySelector("#point-form");
const resetButton = document.querySelector("#resetButton");

pointForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const point1X = parseFloat(document.querySelector("#point1-x").value);
    const point1Y = parseFloat(document.querySelector("#point1-y").value);
    const point2X = parseFloat(document.querySelector("#point2-x").value);
    const point2Y = parseFloat(document.querySelector("#point2-y").value);

    const distance = calculateDistance(point1X, point1Y, point2X, point2Y);

    results.textContent = `Distance: ${distance.toFixed(2)}`;

    drawPoints(point1X, point1Y, point2X, point2Y);
});

resetButton.addEventListener("click", () => {
container.innerHTML = "";
    results.textContent = "";
});

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function drawPoints(x1, y1, x2, y2) {
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    const point1 = document.createElement("div");
    point1.className = "points";
    point1.style.left = `${x1}px`;
    point1.style.top = `${y1}px`;
    container.appendChild(point1);

    const point2 = document.createElement("div");
    point2.className = "points";
    point2.style.left = `${x2}px`;
    point2.style.top = `${y2}px`;
    container.appendChild(point2);

    const line = document.createElement("div");
    line.className = "lines";
    line.style.left = `${(container.offsetWidth - 2) / 2}px`;
    line.style.top = `${(container.offsetHeight - 2) / 2}px`;
    line.style.width = `${calculateDistance(x1, y1, x2, y2)}px`;
    container.appendChild(line);
}