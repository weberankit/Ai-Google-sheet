
let sheetDB:SheetDataType[][]=[]  //array-of-numbers
//finally-[[{},{}...26],[{},{},..26],...100]
type SheetDataType={
    bold:boolean,
    italic:boolean,
    underline:boolean,
    alignment:string,
    fontFamily:string,
    fontSize:string,
    fontColor:string,
    BGColor:string
}

for(let i=0;i<row;i++){
    let sheetRow:SheetDataType[]=[]
for(let j=0;j<colos;j++){
let cellProp={
    bold:false,
    italic:false,
    underline:false,
    alignment:"left",
    fontFamily:"monospace",
    fontSize:"14",
    fontColor:"#0000000",
    BGColor:"#000000"
}
sheetRow.push(cellProp)
}
sheetDB.push(sheetRow)
}


//selectors for cell properties

let bold=document.querySelector(".bold") 
let italic=document.querySelector(".italic")
let underlined=document.querySelector(".underlined")
let fontSize=document.querySelector(".font-size-prop")
let fontFamily=document.querySelector(".font-family-prop")
let fontColor=document.querySelector(".font-color-prop")
let BGColor=document.querySelector(".BGcolor-prop")
let alignment=document.querySelectorAll(".alignment")
let leftAlign=alignment[0]
let centerAlign=alignment[1]
let rightAlign=alignment[2]

//let addressBar = document.querySelector(".address-bar") as HTMLElement

let activeColorProp="red"
let inactiveColorProp="black"



//Application of two way binding

bold?.addEventListener("click",()=>{
    let address=addressBar.value
    let [cell,cellProp]=  activeCell(address)
 
    //Modification
    cellProp.bold=!cellProp.bold //Data change
    cell.style.fontWeight=cellProp.bold?"bold":"normal"     //ui change (1)
    bold.style.backgroundColor=cellProp.bold?activeColorProp : inactiveColorProp
})

function activeCell(address:string):[cell:HTMLElement,cellProp:SheetDataType]{
console.log(address)
let [rid,cid] = decodeRIDCIDFromAddress(address)
let cell=document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`) as HTMLElement
let cellProp=sheetDB[rid][cid]
return [cell,cellProp]
}


function decodeRIDCIDFromAddress(address:string){
   //address  -> "A1"  ,  1->row , A->col
    let rid=Number(address.slice(1))-1 ;
    let cid=Number(address.slice(0).charCodeAt(0))-65 ; //"A" ->65 
return [rid,cid]

}