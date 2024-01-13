'use strict'

let inputForm = document.forms.transInputs;
let display=document.querySelectorAll("span");
let transHistory = document.querySelector('.transHistory');
let priceType;
let valueType;

inputForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    let expenceDes = inputForm.textInput.value;
    let expencePrice = inputForm.priceInput.value;
        priceType = expencePrice >0 ? 1:0;

    if (expenceDes!='' && expencePrice!=0) {
        let delBtn = document.createElement("h4");
            delBtn.className = "delBtn";
            delBtn.innerHTML = "X";

        let historyAmount = document.createElement("h5");
            historyAmount.className = "historyAmount";

        let historyNote = document.createElement("p");
            historyNote.innerHTML = expenceDes;
        let historBox = document.createElement("div");
            historBox.className = "historBox";

        let historyBoxDiv = document.createElement("div");
            historyBoxDiv.className = "historyBoxDiv";

        historBox.append(historyNote, historyAmount);
        historyBoxDiv.append(delBtn, historBox);
        transHistory.append(historyBoxDiv);

        if (priceType) {
            historyAmount.innerHTML = '+'+expencePrice;

            display[0].innerHTML = Number(display[0].innerHTML) + Number(expencePrice);
            display[1].innerHTML = Number(display[1].innerHTML) + Number(expencePrice);
        }else {
            historyAmount.innerHTML = expencePrice;

            display[0].innerHTML = Number(display[0].innerHTML) + Number(expencePrice);
            display[2].innerHTML = Number(display[2].innerHTML) + Number(expencePrice);
            historBox.classList.add('border');
        };
        historyBoxDiv.addEventListener('mouseover', ()=> {
            delBtn.classList.add('btnStyl');
        });
        historyBoxDiv.addEventListener('mouseout', ()=> {
            delBtn.classList.remove('btnStyl');
        });
        inputForm.reset();

        delBtn.addEventListener("click", ()=> {
            delBtn.parentElement.remove();
            let value = Number(delBtn.nextElementSibling.lastElementChild.innerHTML);
            valueType = value >0 ? 1:0;

            display[0].innerHTML = Number(display[0].innerHTML) - value;
            if (valueType) {
                display[1].innerHTML = display[1].innerHTML - value;
            }else {
                display[2].innerHTML = Number(display[2].innerHTML) - value;
            };
        });
    }
    else {
        alert('Please Enter The Details');
    }
});
