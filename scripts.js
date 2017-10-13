//getting all buttons from the document
document.addEventListener("DOMContentLoaded", function () {
    var recBtn = document.getElementById("rectangle-button");
    var squareBtn = document.getElementById("square-button");
    var cirBtn = document.getElementById("circle-button");
    var triBtn = document.getElementById("triangle-button");
    //getting all inputs from the document
    var recInfo1 = document.getElementById("rec-height").innerHTML;
    var recInfo2 = document.getElementById("rec-width").innerHTML;
    var squareInfo = document.getElementById("square-length").innerHTML;
    var cirInfo = document.getElementById("circle-radius").innerHTML;
    //getting all outputs from the document
    var shapeName = document.getElementById("shape-name").innerHTML;
    var width = document.getElementById("width").innerHTML;
    var height = document.getElementById("height").innerHTML;
    var radius = document.getElementById("radius").innerHTML;
    var area = document.getElementById("area").innerHTML;
    var parameter = document.getElementById("parameter").innerHTML;
    //creating a parent class of shape
    var Shape = /** @class */ (function () {
        function Shape() {
            this.div = HTMLDivElement;
            var div = document.createElement('div');
            div.addEventListener("click", function () {
            });
        }
        return Shape;
    }());
});
function getThatShit() {
}
/*function get(id){
    document.getElementById(id);
}*/ 
