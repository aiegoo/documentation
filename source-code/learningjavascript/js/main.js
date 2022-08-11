/* global paper, PointText, Shape, Tool */

$(document).ready(function () {
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    var circle = Shape.Circle(200, 200, 80);
    circle.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function (event) {
        var circle = Shape.Circle(event.point.x, event.point.y, 20);
        circle.fillColor = 'green';
    };

    paper.view.draw();
});