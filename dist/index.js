"use strict";
let row = 100;
let colos = 26;
let addressColCont = document.querySelector(".address-col-cont");
console.log(addressColCont);
for (let i = 0; i < row; i++) {
    let addressCol = document.createElement("div");
    // ts--innertext expect string
    addressCol.innerText = (i + 1).toString();
    addressColCont === null || addressColCont === void 0 ? void 0 : addressColCont.appendChild(addressCol);
}
