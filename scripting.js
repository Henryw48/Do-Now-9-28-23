function createParagraph() {   //Henry Wong, Period 3-4, 9/28/23
    const para = document.createElement("p");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");
    para.textContent = "I once felt uninspired";
    para1.textContent = "But my brain got rewired";
    para2.textContent = "When I found out about JavaScript";
    para3.textContent = "I knew there were other coding languages that exist";
    para4.textContent = "Who knew how much fun this is";
    document.body.appendChild(para);
    document.body.appendChild(para1);
    document.body.appendChild(para2);
    document.body.appendChild(para3);
    document.body.appendChild(para4);
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}