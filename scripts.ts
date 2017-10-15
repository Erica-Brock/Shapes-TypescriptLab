//generating a random position to append shapes to shape-container
function randomNum(max, min):number {
    return Math.random() * (max - min) + min;
}

function randomPosition():any {
    return {
        top: randomNum(500, 1),
        left: randomNum(500, 1)
    };
}
document.addEventListener("DOMContentLoaded", function () {
    //getting all buttons from the document
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
    const shapeName: HTMLSpanElement = document.getElementById("shape-name");
    const width: HTMLSpanElement = document.getElementById("width");
    const height: HTMLSpanElement = document.getElementById("height");
    const radius: HTMLSpanElement = document.getElementById("radius");
    const area: HTMLSpanElement = document.getElementById("area");
    const perimeter: HTMLSpanElement = document.getElementById("parameter");
    //getting containers from the document
    const sidePanel:HTMLDivElement=<HTMLDivElement>document.getElementById("side-panel")
    const shapeContainer: HTMLElement = document.getElementById("shape-container");

    //creating the interface for a shape object
    //it works without this but I am leaving the notation in case something breaks
    //and as a future reference.
    /*interface IShape {
         shapeName: string;
         width?: string;
         height?: string;
         radius?: string;
         area?: string;
         perimeter?: string;
         draw(id):void;
         describe():void;
     }*/

    //creating a parent class of shape
    class Shape /*implements IShape (interface not needed)*/ {
        shapeName: string;
        div: HTMLDivElement;
        width: string;
        height: string;
        radius: string;
        area: string;
        perimeter: string;
        id: string;
        constructor(shapeName) {
            this.shapeName = shapeName;
            this.div = document.createElement('div');
            this.div.addEventListener("dblclick", () => {
                shapeContainer.removeChild(this.div)
            })
            this.div.addEventListener("click", () => {
                this.describe();
            })
        }
        //draws shape in the shape-container
        draw(id): void {
            shapeContainer.appendChild(this.div);
            this.div.id = id;
            let position = randomPosition();
            this.div.style.top = `${position.top}px`
            this.div.style.left = `${position.left}px`
        }
        //appends shape information to the side-panel
        describe():void {

            shapeName.innerHTML = `Shape Name: ${this.shapeName}`;
            width.innerHTML = `Width: ${this.width}`;
            height.innerHTML = `Height: ${this.height}`;
            radius.innerHTML = `Radius: ${this.radius}`;
            area.innerHTML = `Area: ${this.area}`;
            perimeter.innerHTML = `Perimeter: ${this.perimeter}`;

        }
    }
    //creating square class
    class Square extends Shape {
        width: string;
        height: string;
        area: string;
        perimeter: string;
        constructor() {
            super(`Square`);
            let length = `${squareInfo.value}px`;
            this.div.style.width = length;
            this.div.style.height = length;
            this.width = length;
            this.height = length;
            this.area = `${(Math.pow(Number(squareInfo.value), 2)).toFixed(2)}px`
            this.perimeter = `${(4 * Number(squareInfo.value)).toFixed(2)}`
        }
    }
    squareBtn.addEventListener("click", ():void => {

        if (squareInfo.value==="") {
            alert("You must enter a value for side-length");
        } else {
            let square = new Square;
            square.draw("square");
        }
    })
    //creating circle class
    class Circle extends Shape {
        radius: string;
        area: string;
        perimeter: string;
        constructor() {
            super("Circle");
            let diameter = `${Number(cirInfo.value) * 2}px`;
            this.div.style.width = diameter;
            this.div.style.height = diameter;
            this.radius = `${Number(cirInfo.value)}px`
            this.area = `${(Math.PI * (Math.pow(Number(cirInfo.value), 2))).toFixed(2)}px`
            this.perimeter = `${(2 * Math.PI * Number(cirInfo.value)).toFixed(2)}px`
        }
    }
    cirBtn.addEventListener("click", ():void => {
        if(cirInfo.value===""){
            alert("You must enter a value for radius");
        }else{
        let circle = new Circle;
        circle.draw("circle");}
    })
    //creating Rectangle class
    class Rectangle extends Shape {
        width: string;
        height: string;
        area: string;
        perimeter: string;
        constructor() {
            super("Rectangle")
            let recHeight = `${recInfo1.value}px`;
            let recWidth = `${recInfo2.value}px`;
            this.height = recHeight;
            this.width = recWidth;
            this.area = `${(Number(recInfo1.value) * Number(recInfo2.value)).toFixed(2)}px`
            this.perimeter = `${((Number(recInfo1.value) + Number(recInfo2.value)) * 2).toFixed(2)}px`
            this.div.style.height = recHeight;
            this.div.style.width = recWidth;

        }
    }
    recBtn.addEventListener("click", ():void => {
        let rectangle = new Rectangle;
        if (recInfo1.value===""||recInfo2.value===""){
            alert("You must enter a value for width and height");
        }else if (recInfo1.value === recInfo2.value) {
            alert("That's a square! See, watch!");
            rectangle.draw("square")
        } 
        else{
        rectangle.draw("rectangle");
        }
    })
    //creating a triangle class
    class Triangle extends Shape {
        width: string;
        height: string;
        area: string;
        perimeter: string;
        constructor() {
            super("Triangle");
            let triHeight = `${triInfo.value}px`;
            this.div.style.borderTop = `${triHeight} solid yellow`;
            this.div.style.borderLeft = `${triHeight} solid transparent`;
            this.div.style.height = `${triHeight}`
            this.height = triHeight;
            this.width = triHeight;
            this.area = `${0.5 * Number(triInfo.value) * Number(triInfo.value)}px`
        }
    }
    triBtn.addEventListener("click", ():void => {
        if(triInfo.value===""){
            alert("You must enter a value for height")
        }else{
        let tri = new Triangle;
        tri.draw("triangle");
        }
    })

})
