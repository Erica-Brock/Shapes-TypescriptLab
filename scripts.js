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
//getting all buttons from the document
document.addEventListener("DOMContentLoaded", function () {
    var myButtons = document.getElementsByTagName('button');
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
    var shapeName = document.getElementById("shape-name").innerHTML;
    var width = document.getElementById("width").innerHTML;
    var height = document.getElementById("height").innerHTML;
    var radius = document.getElementById("radius").innerHTML;
    var area = document.getElementById("area").innerHTML;
    var parameter = document.getElementById("parameter").innerHTML;
    //getting shape container from the document
    var shapeContainer = document.getElementById("shape-container");
    //creating a parent class of shape
    var Shape = /** @class */ (function () {
        function Shape(shapeName) {
            var _this = this;
            this.shapeName = shapeName;
            this.div = document.createElement('div');
            this.div.addEventListener("dblclick", function () {
                shapeContainer.removeChild(_this.div);
            });
        }
        Shape.prototype.draw = function (id) {
            shapeContainer.appendChild(this.div);
            this.div.id = id;
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
            return _this;
        }
        return Square;
    }(Shape));
    squareBtn.addEventListener("click", function () {
        var square = new Square;
        square.draw("square");
    });
    //creating circle class
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            var _this = _super.call(this, "Circle") || this;
            var radius = cirInfo.value + "px";
            _this.div.style.width = radius;
            _this.div.style.height = radius;
            return _this;
        }
        return Circle;
    }(Shape));
    cirBtn.addEventListener("click", function () {
        var circle = new Circle;
        circle.draw("circle");
    });
    //creating Rectangle class
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            var _this = _super.call(this, "Rectangle") || this;
            var recHeight = recInfo1.value + "px";
            var recWidth = recInfo2.value + "px";
            if (recHeight === recWidth) {
                alert("that's a square dummy! This is a rectangle.");
            }
            else {
                _this.div.style.height = recHeight;
                _this.div.style.width = recWidth;
            }
            return _this;
        }
        return Rectangle;
    }(Shape));
    recBtn.addEventListener("click", function () {
        var rectangle = new Rectangle;
        rectangle.draw("rectangle");
    });
    //creating a triangle class
    var Triangle = /** @class */ (function (_super) {
        __extends(Triangle, _super);
        function Triangle() {
            var _this = _super.call(this, "Triangle") || this;
            var triHeight = triInfo.value + "px";
            _this.div.style.borderTop = triHeight + " solid $triangle-color";
            _this.div.style.borderLeft = triHeight + " solid transparent";
            return _this;
        }
        return Triangle;
    }(Shape));
    triBtn.addEventListener("click", function () {
        var tri = new Triangle;
        tri.draw("triangle");
    });
});
