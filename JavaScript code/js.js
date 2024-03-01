
// function showText(el) {
//     if (el.previousElementSibling.clientHeight !== 80) {
//         el.previousElementSibling.style.height = "80px";
//         el.innerHTML = "Показувати менше...";
//     } else {
//         el.previousElementSibling.style.height = "100%";
//         el.innerHTML = "Читайте більше...";
//     }
// }

//Чомусь текст не розривається повністю тому я скористався командою нижче.


function showText(el) {
    var contentElement = el.previousElementSibling;
    if (contentElement.style.height === "80px") {
        contentElement.style.height = contentElement.scrollHeight + "px";
        el.innerHTML = "Показувати менше...";
    } else {
        contentElement.style.height = "80px";
        el.innerHTML = "Читайте більше...";
    }
}