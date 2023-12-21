const tempdata = require("../components/allproducts_sanjha_punjab_151223.json")

console.log("tempdata : ",tempdata.length)



let newdata = tempdata.filter(e=>e.invQty=="30")


console.log("newdata : ",newdata)


let totalInvUnitPrice = newdata.reduce((acc,cul)=>parseFloat(cul.invUnitPrice)+acc,0)

console.log("totalInvUnitPrice : ",totalInvUnitPrice.length)

newdata[0].isStockUpdated="true"

console.log("some method : ",newdata.some(e=>e.isStockUpdated=="false"))
console.log("every method : ",newdata.every(e=>e.isStockUpdated=="false"))


let obj = [{
    SerialNoInInv: '12',
    barcode: '0840150500766',
    itemNo: '53042',
    invDescription: 'STAINLESS STEEL SPICE SHAKER 10/300 10/300 3',
    invQty: '30',
    oldunitInCase: '10',
    unitInCase: '3',
    invCaseCost: '0.65',
},{
    SerialNoInInv: '63',
    barcode: '9556354000445',
    itemNo: 'VIT007 I VITS CURRY INSTANT NOODLES 78 GRX5X6 PACK I 30 ITEMS IN CASE',
    invDescription: 'VIT007 I VITS CURRY INSTANT NOODLES 78 GRX5X6 PACK I 30 ITEMS IN CASE',
    invQty: '30',
    oldunitInCase: '',
    unitInCase: '30',
    invCaseCost: '0.65',
},{
    SerialNoInInv: '10',
    barcode: '0307',
    itemNo: 'IPR',
    invDescription: 'ISLAMIC PRAYER RUG SINGLE',
    invQty: '30',
    oldunitInCase: '',
    unitInCase: '1',
    invCaseCost: '6.00',
}]


obj[1]={...obj[1],['invQty']:"22"}



console.log(">>>>> : ",obj[1])

let arr = ["apple","mango"]

let filteredArr = obj.map((e,i)=>{
    delete e.oldunitInCase
    e.newfield=arr[i]
    return e
})

console.log("filteredArr : ",filteredArr)




// let data = {
//     name:"deepanshu"
// }

// let newdata = JSON.stringify(data)

// console.log(JSON.parse(newdata))