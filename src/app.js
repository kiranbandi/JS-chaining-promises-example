import './style.css';
import './promisfy';
var turtle = function(id) {

    var turtleElement = document.createElement('span');
    // Add the turtle instance to the screen;
    document.getElementById('box').appendChild(turtleElement);
    // Set the default to left;
    var orientation = 'left';
    turtleElement.setAttribute('class', orientation);

    this.turnLeft = function() {
        orientation = 'left';
        turtleElement.setAttribute('class', orientation);
        return this;
    };

    this.turnRight = function() {
        orientation = 'right';
        turtleElement.setAttribute('class', orientation);
        return this;
    };

    this.turnTop = function() {
        orientation = 'top';
        turtleElement.setAttribute('class', orientation);
        return this;
    };

    this.turnBottom = function() {
        orientation = 'bottom';
        turtleElement.setAttribute('class', orientation);
        return this;
    };

    this.move = function() {
        switch (orientation) {
            case 'top':
                turtleElement.style.top = Number(getComputedStyle(turtleElement).top.split("px")[0]) - 10 + 'px'
                break;

            case 'bottom':
                turtleElement.style.top = Number(getComputedStyle(turtleElement).top.split("px")[0]) + 10 + 'px'
                break;

            case 'left':
                turtleElement.style.left = Number(getComputedStyle(turtleElement).left.split("px")[0]) - 10 + 'px'
                break;

            case 'right':
                turtleElement.style.left = Number(getComputedStyle(turtleElement).left.split("px")[0]) + 10 + 'px'
                break;
        }
        return this;
    }

    return this;

}

//  so it can be accessed in the window object
window.turtle = turtle;