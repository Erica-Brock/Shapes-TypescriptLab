var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//generating a random position to append shapes to shape-container
function randomNum(max, min) {
    return Math.random() * (max - min) + min;
}
function randomPosition() {
    return {
        top: randomNum(500, 1),
        left: randomNum(500, 1)
    };
}
document.addEventListener("DOMContentLoaded", function () {
    //getting all buttons from the document
    var recBtn = document.getElementById("rectangle-button");
    var squareBtn = document.getElementById("square-button");
    var cirBtn = document.getElementById("circle-button");
    var triBtn = document.getElementById("triangle-button");
    //getting all inputs from the document
    var myInputs = document.getElementsByTagName("input");
    var recInfo1 = document.getElementById("rec-height");
    var recInfo2 = document.getElementById("rec-width");
    var squareInfo = document.getElementById("square-length");
    var cirInfo = document.getElementById("circle-radius");
    var triInfo = document.getElementById("tri-height");
    //getting all outputs from the document
    var shapeName = document.getElementById("shape-name");
    var width = document.getElementById("width");
    var height = document.getElementById("height");
    var radius = document.getElementById("radius");
    var area = document.getElementById("area");
    var perimeter = document.getElementById("parameter");
    //getting containers from the document
    var sidePanel = document.getElementById("side-panel");
    var shapeContainer = document.getElementById("shape-container");
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
    var Shape /*implements IShape (interface not needed)*/ = /** @class */ (function () {
        function Shape(shapeName) {
            var _this = this;
            this.shapeName = shapeName;
            this.div = document.createElement('div');
            this.div.addEventListener("dblclick", function () {
                shapeContainer.removeChild(_this.div);
            });
            this.div.addEventListener("click", function () {
                _this.describe();
            });
        }
        //draws shape in the shape-container
        Shape.prototype.draw = function (id) {
            shapeContainer.appendChild(this.div);
            this.div.id = id;
            var position = randomPosition();
            this.div.style.top = position.top + "px";
            this.div.style.left = position.left + "px";
        };
        //appends shape information to the side-panel
        Shape.prototype.describe = function () {
            shapeName.innerHTML = "Shape Name: " + this.shapeName;
            width.innerHTML = "Width: " + this.width;
            height.innerHTML = "Height: " + this.height;
            radius.innerHTML = "Radius: " + this.radius;
            area.innerHTML = "Area: " + this.area;
            perimeter.innerHTML = "Perimeter: " + this.perimeter;
        };
        return Shape;
    }());
    //creating square class
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square() {
            var _this = _super.call(this, "Square") || this;
            var length = squareInfo.value + "px";
            _this.div.style.width = length;
            _this.div.style.height = length;
            _this.width = length;
            _this.height = length;
            _this.area = (Math.pow(Number(squareInfo.value), 2)).toFixed(2) + "px";
            _this.perimeter = "" + (4 * Number(squareInfo.value)).toFixed(2);
            return _this;
        }
        return Square;
    }(Shape));
    squareBtn.addEventListener("click", function () {
        if (squareInfo.value === "") {
            alert("You must enter a value for side-length");
        }
        else {
            var square = new Square;
            square.draw("square");
        }
    });
    //creating circle class
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            var _this = _super.call(this, "Circle") || this;
            var diameter = Number(cirInfo.value) * 2 + "px";
            _this.div.style.width = diameter;
            _this.div.style.height = diameter;
            _this.radius = Number(cirInfo.value) + "px";
            _this.area = (Math.PI * (Math.pow(Number(cirInfo.value), 2))).toFixed(2) + "px";
            _this.perimeter = (2 * Math.PI * Number(cirInfo.value)).toFixed(2) + "px";
            return _this;
        }
        return Circle;
    }(Shape));
    cirBtn.addEventListener("click", function () {
        if (cirInfo.value === "") {
            alert("You must enter a value for radius");
        }
        else {
            var circle = new Circle;
            circle.draw("circle");
        }
    });
    //creating Rectangle class
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            var _this = _super.call(this, "Rectangle") || this;
            var recHeight = recInfo1.value + "px";
            var recWidth = recInfo2.value + "px";
            _this.height = recHeight;
            _this.width = recWidth;
            _this.area = (Number(recInfo1.value) * Number(recInfo2.value)).toFixed(2) + "px";
            _this.perimeter = ((Number(recInfo1.value) + Number(recInfo2.value)) * 2).toFixed(2) + "px";
            _this.div.style.height = recHeight;
            _this.div.style.width = recWidth;
            return _this;
        }
        return Rectangle;
    }(Shape));
    recBtn.addEventListener("click", function () {
        var rectangle = new Rectangle;
        if (recInfo1.value === "" || recInfo2.value === "") {
            alert("You must enter a value for width and height");
        }
        else if (recInfo1.value === recInfo2.value) {
            alert("That's a square! See, watch!");
            rectangle.draw("square");
        }
        else {
            rectangle.draw("rectangle");
        }
    });
    //creating a triangle class
    var Triangle = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle() {
            var _this = _super.call(this, "Triangle") || this;
            var triHeight = triInfo.value + "px";
            _this.div.style.borderTop = triHeight + " solid yellow";
            _this.div.style.borderLeft = triHeight + " solid transparent";
            _this.div.style.height = "" + triHeight;
            _this.height = triHeight;
            _this.width = triHeight;
            _this.area = 0.5 * Number(triInfo.value) * Number(triInfo.value) + "px";
            return _this;
        }
        return Triangle;
    }(Shape));
    triBtn.addEventListener("click", function () {
        if (triInfo.value === "") {
            alert("You must enter a value for height");
        }
        else {
            var tri = new Triangle;
            tri.draw("triangle");
        }
    });
});
