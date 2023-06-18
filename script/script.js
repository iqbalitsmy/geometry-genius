function showList(n, name) {
    const list = document.createElement("li");
    const pFirst = document.createElement("p");
    const pSecond = document.createElement("p");
    const btn = document.createElement("button");

    const textBtn = document.createTextNode("Convert to m2");
    const textpFirst = document.createTextNode(name);
    const textPSecond = document.createTextNode(n);

    btn.setAttribute("id", "list-item")

    // Style
    btn.classList.add("p-2", "bg-[#1090D8]", "rounded", "text-white");
    pSecond.classList.add("px-2");
    list.classList.add("mb-4");

    pFirst.appendChild(textpFirst);
    pSecond.appendChild(textPSecond);
    btn.appendChild(textBtn);
    list.append(pFirst, pSecond, btn);
    document.getElementById("show-list").appendChild(list);
}

// Location Change
document.getElementById("btn-blog").addEventListener("click", function () {
    location.replace("http://127.0.0.1:5500/blogs.html");
});

// Get Element value by id
function getElementValueById(element) {
    const value = document.getElementById(element).value;
    document.getElementById(element).value = '';
    return parseFloat(value);
}

// Triangle
document.getElementById("btn-triangle").addEventListener("click", function () {
    const v = getElementValueById("triangle-b");
    const h = getElementValueById("triangle-h");
    if (!isNaN(v) && !isNaN(h)) {
        const area = 0.5 * v * h;
        showList(area, "Triangle");
    } else {
        alert("Enter input data")
    }

});

// rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    const w = getElementValueById("rectangle-w");
    const l = getElementValueById("rectangle-l");
    if (!isNaN(w) && !isNaN(l)) {
        const area = w * l;
        showList(area, "Rectangle");
    } else {
        alert("Enter input data")
    }
});

// Parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    const b = getElementValueById("parallelogram-b");
    const h = getElementValueById("parallelogram-h");
    if (!isNaN(b) && !isNaN(h)) {
        const area = b * h;
        showList(area, "Parallelogram");
    } else {
        alert("Enter input data")
    }
});

// Rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
    const d1 = getElementValueById("rhombus-d1");
    const d2 = getElementValueById("rhombus-d2");
    if (isNaN(d1) && isNaN(d2)) {
        const area = 0.5 * d1 * d2;
        showList(area, "Rhombus");
    } else {
        alert("Enter input data")
    }
});

// Pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    const p = getElementValueById("pentagon-p");
    const b = getElementValueById("pentagon-b");
    if (!isNaN(p) && !isNaN(b)) {
        const area = 0.5 * p * b;
        showList(area, "Pentagon");
    } else {
        alert("Enter input data")
    }
});

// Ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
    const a = getElementValueById("ellipse-a");
    const b = getElementValueById("ellipse-b");
    if (!isNaN(a) && !isNaN(b)) {
        const area = a * b;
        showList(area, "Ellipse");
    } else {
        alert("Enter input data")
    }
});

document.getElementById("show-list").addEventListener("click", function (event) {
    const number = event.target.innerText;
    console.log(document.getElementById("show-list").nextElementSibling);
    console.log(event.target)
    console.log(event.target.nextSibling)
    console.log(event)
    console.log(number);
});
