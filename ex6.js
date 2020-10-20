// //EXERCISE 1
class Circle {
    constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
        }

    get surface() {
        return (Math.pow(this.radius,2) * Math.PI);
        }

}

let newCircle = new Circle(5,1,6)

console.log(newCircle.xPos);
console.log(newCircle.xPos);
console.log(newCircle.surface);

// EXERCISE 2

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, lenght) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.lenght = lenght;

    let 
    }
}

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
    get topRightXPos(){
        return (this.topLeftXPos + this.width);
    }
    get bottomLeftYPos(){
        return (this.topLeftYPos - this.length);
    }
    collides(otherRectangle){
        if (
            ((otherRectangle.topLeftXPos>=this.topLeftXPos && otherRectangle.topLeftXPos<=this.topRightXPos)
            ||(otherRectangle.topRightXPos>=this.topLeftXPos && otherRectangle.topRightXPos<=this.topRightXPos)) 
            && 
            ((otherRectangle.topLeftYPos<=this.topLeftYPos && otherRectangle.topLeftYPos>=this.bottomLeftYPos)
            ||(otherRectangle.bottomLeftYPos<=this.topLeftYPos && otherRectangle.bottomLeftYPos>=this.bottomLeftYPos))            )
            { return true;
        } else {
            return false;
        }
    }
}


