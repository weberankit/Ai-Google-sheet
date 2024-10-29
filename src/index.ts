let row=100
let colos=26

  
let addressColCont=document.querySelector(".address-col-cont") as HTMLElement
let addressRowCont=document.querySelector(".address-row-cont") as HTMLElement
let cellCont=document.querySelector(".cells-cont")
let addressBar=document.querySelector(".address-bar") as HTMLInputElement
console.log(addressBar)
// for col- 1,2,3.....
for(let i=0;i<row;i++){
    let addressCol=document.createElement("div") as HTMLElement
    // ts--innertext expect string
    addressCol.setAttribute("class","address-col")
    addressCol.innerText=(i+1).toString()
    addressColCont?.appendChild(addressCol)
}
// for A,B,C,D--row wise
for(let i=0;i<colos;i++){
    let addressRow=document.createElement("div") as HTMLElement
   
    addressRow.setAttribute("class","address-row")
    //fromCharCode A,B,C see mdn
    addressRow.innerText=String.fromCharCode(65+i)
    addressRowCont?.appendChild(addressRow)
}
  
//creating cell 
for(let i=0;i<row;i++){
    let rowCont=document.createElement("div")
    rowCont.setAttribute("class","row-cont")
    for(let j=0;j<colos;j++){
   let cell=document.createElement("div")
   cell.setAttribute("class","cell")
   cell.setAttribute("contenteditable","true")
   rowCont.appendChild(cell)
   //using to find cell address when user click on cell
    addEventListnerForAddressBar(cell,i,j)
    }
    cellCont?.appendChild(rowCont)
}


//to find cell address
function addEventListnerForAddressBar(cell:HTMLElement,i:number,j:number):void{
   
cell.addEventListener("click",()=>{
    const colId=String.fromCharCode(i+65)
    //as j start from 0 so 0+1
    const rowId=j+1
    console.log(rowId)
    addressBar.value=`${colId}${rowId}`
})
}