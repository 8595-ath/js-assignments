// 🌙 Dark Theme
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// 📦 Create Div
function createDiv() {
    let div = document.createElement("div");
    div.className = "box";
    document.body.appendChild(div);
}

// 👁 Hide / Show Paragraph
function togglePara() {
    let p = document.getElementById("para");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none";
    }
}

// 🎨 Dynamic CSS
function changeColor() {
    document.body.style.backgroundColor = "yellow";
}