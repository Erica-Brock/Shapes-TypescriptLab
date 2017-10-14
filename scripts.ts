//getting all buttons from the document
document.addEventListener("DOMContentLoaded", function () {
    const recBtn: HTMLElement = document.getElementById("rectangle-button");
    const squareBtn: HTMLElement = document.getElementById("square-button");
    const cirBtn: HTMLElement = document.getElementById("circle-button");
    const triBtn: HTMLElement = document.getElementById("triangle-button");
    //getting all inputs from the document
    const myInputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    const recInfo1: HTMLInputElement = (<HTMLInputElement>document.getElementById("rec-height"));
    const recInfo2: HTMLInputElement = (<HTMLInputElement>document.getElementById("rec-width"));
    const squareInfo: HTMLInputElement = (<HTMLInputElement>document.getElementById("square-length"));
    const cirInfo: HTMLInputElement = (<HTMLInputElement>document.getElementById("circle-radius"));
    const triInfo: HTMLInputElement = (<HTMLInputElement>document.getElementById("tri-height"));
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
            this.div.addEventListener("dblclick", () => {
                shapeContainer.removeChild(this.div)
            })
        }
        draw(id):void{ 
            shapeContainer.appendChild(this.div);
            this.div.id=id;  
            let position= randomPosition();
            this.div.style.top=`${position.top}px`
            this.div.style.left=`${position.right}px`
        }
    }
     //creating square class
     class Square extends Shape{
         constructor(){
             super("Square");
             let length=`${squareInfo.value}px`;
             this.div.style.width=length;
             this.div.style.height=length;
         }      
     }  
     squareBtn.addEventListener("click", ()=>{
         let square=new Square;
         square.draw("square");
         
     })     
       //creating circle class
        class Circle extends Shape{
            constructor(){
                super("Circle"); 
                let radius=`${cirInfo.value}px`; 
                this.div.style.width=radius;
                this.div.style.height=radius;
            }   
        }
        cirBtn.addEventListener("click", ()=>{
            let circle=new Circle;
            circle.draw("circle");
        })
        //creating Rectangle class
        class Rectangle extends Shape{            
            constructor(){
                super("Rectangle")
                let recHeight=`${recInfo1.value}px`;
                let recWidth=`${recInfo2.value}px`;
                if(recHeight===recWidth){
                    alert("that's a square dummy! This is a rectangle.");
                }
                else{
                this.div.style.height=recHeight;
                this.div.style.width=recWidth;
                }
            }
        }
        recBtn.addEventListener("click", ()=>{
            let rectangle=new Rectangle;
            rectangle.draw("rectangle");
        })
        //creating a triangle class
        class Triangle extends Shape{
            constructor(){
                super("Triangle");
                let triHeight=`${triInfo.value}px`;
                this.div.style.borderTop= `${triHeight} solid $triangle-color`;
                this.div.style.borderLeft=`${triHeight} solid transparent`;
            }   
        }
        triBtn.addEventListener("click", ()=>{
            let tri=new Triangle;
            tri.draw("triangle");
        })
})
//function randomPosition(){
//    let num=randomNum(500,1);
  //  let left= `${num}px`
    //let top= `${num}px`
//}
function randomNum(max,min){
    return Math.random() * (max - min) + min;
}

function randomPosition() {
    return {
        top: randomNum(500,1),
        right: randomNum(300,1)
    };
}