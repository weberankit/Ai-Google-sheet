let row=100
let colos=26


let addressColCont=document.querySelector(".address-col-cont") as HTMLElement
console.log(addressColCont)
for(let i=0;i<row;i++){
    let addressCol=document.createElement("div") as HTMLElement
    // ts--innertext expect string
    addressCol.innerText=(i+1).toString()
    addressColCont?.appendChild(addressCol)
}