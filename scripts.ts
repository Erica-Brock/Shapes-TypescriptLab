//getting all buttons from the document
document.addEventListener("DOMContentLoaded", function(){
const recBtn: HTMLElement= document.getElementById("rectangle-button");
const squareBtn: HTMLElement= document.getElementById("square-button");
const cirBtn: HTMLElement= document.getElementById("circle-button");
const triBtn: HTMLElement= document.getElementById("triangle-button");
//getting all inputs from the document
const recInfo1:string=document.getElementById("rec-height").innerHTML;
const recInfo2:string=document.getElementById("rec-width").innerHTML;
const squareInfo:string=document.getElementById("square-length").innerHTML;
const cirInfo:string=document.getElementById("circle-radius").innerHTML;
//getting all outputs from the document
const shapeName:string=document.getElementById("shape-name").innerHTML;
const width:string=document.getElementById("width").innerHTML;
const height:string=document.getElementById("height").innerHTML;
const radius:string=document.getElementById("radius").innerHTML;
const area:string=document.getElementById("area").innerHTML;
const parameter:string=document.getElementById("parameter").innerHTML;
//creating the interface for a shape object
interface IShape{
    shapeName:string;
    width?:number;
    height?:number;
    radius?:number;
    area?:number;
    parameter?:number;
}
//creating a parent class of shape
class Shape{
    div=HTMLDivElement
    constructor(){
        let div=document.createElement('div');
        div.addEventListener("click", ()=>{

        })
    }
}
})
function getThatShit(){

}
/*function get(id){
    document.getElementById(id);
}*/