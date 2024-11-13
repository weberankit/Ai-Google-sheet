
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