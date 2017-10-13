//getting all buttons from the document
document.addEventListener("DOMContentLoaded", function () {
    const myButtons: NodeListOf<HTMLButtonElement> = document.getElementsByTagName('button');
    const recBtn: HTMLElement = document.getElementById("rectangle-button");
    const squareBtn: HTMLElement = document.getElementById("square-button");
    const cirBtn: HTMLElement = document.getElementById("circle-button");
    const triBtn: HTMLElement = document.getElementById("triangle-button");
    //getting all inputs from the document
    const myInputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    const recInfo1: HTMLElement = document.getElementById("rec-height");
    const recInfo2: string = document.getElementById("rec-width").innerHTML;
    const squareInfo: string = document.getElementById("square-length").innerHTML;
    const cirInfo: string = document.getElementById("circle-radius").innerHTML;
    //getting all outputs from the document
    const shapeName: string = document.getElementById("shape-name").innerHTML;
    const width: string = document.getElementById("width").innerHTML;
    const height: string = document.getElementById("height").innerHTML;
    const radius: string = document.getElementById("radius").innerHTML;
    const area: string = document.getElementById("area").innerHTML;
    const parameter: string = document.getElementById("parameter").innerHTML;
    //getting shape container from the document
    const shapeContainer:HTMLElement=document.getElementById("shape-container");
    //creating the interface for a shape object
    interface IShape {
        shapeName: string;
        width?: number;
        height?: number;
        radius?: number;
        area?: number;
        parameter?: number;
        draw(id):void;
    }
    //creating a parent class of shape
    class Shape implements IShape {
        shapeName:string;
        div:HTMLDivElement;
        id:string;
        constructor(shapeName) {
            this.shapeName= shapeName;
            this.div = document.createElement('div');
            //div.addEventListener("click", () => {
            //this click will pull up the shape info once i figure this shit out.
            //})
        }
        draw(id):void{ 
            shapeContainer.appendChild(this.div);
            this.div.id=id;  
        }
    }
     //creating square class
     class Square extends Shape{
         constructor(){
             super("Square");
         }
        
     }  
     squareBtn.addEventListener("click", ()=>{
         let square=new Square;
         square.draw("square");
         
     })     
       //creating rectangle class
        class Circle extends Shape{
            constructor(){
                super("Circle");  
            }   
        }
        cirBtn.addEventListener("click", ()=>{
            let circle=new Circle;
            circle.draw("circle");
        })
        //creating Rectangle class
        class Rectangle extends Shape{
            height:recInfo1.innerHTML
            constructor(){
                super("Rectangle")
               
            }
        }
        recBtn.addEventListener("click", ()=>{
            let rectangle=new Rectangle;
            rectangle.draw("rectangle");
        //creating a triangle class
        class Triangle extends Shape{
            constructor(){
                super("Triangle");
            }   
        }
        triBtn.addEventListener("click", ()=>{
            let tri=new Triangle;
            tri.draw("triangle");
})
