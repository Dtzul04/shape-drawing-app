class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        return '';
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const circle = document.createElement('div');
        circle.className = 'shape circle';
        circle.style.backgroundColor = this.color;
        circle.style.width = '100px';
        circle.style.height = '100px';
        return circle;
    }
}

class Rectangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const rectangle = document.createElement('div');
        rectangle.className = 'shape rectangle';
        rectangle.style.backgroundColor = this.color;
        rectangle.style.width = '150px';
        rectangle.style.height = '80px';
        return rectangle;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        const triangle = document.createElement('div');
        triangle.className = 'shape triangle';
        triangle.style.borderBottomColor = this.color;
        return triangle;
    }
}

class ShapeManager {
    constructor() {
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
        this.updateShapeContainer();
    }

    updateShapeContainer() {
        const container = document.getElementById('shapeContainer');
        container.innerHTML = '';
        this.shapes.forEach(s => container.appendChild(s.draw()));
    }
}

const shapeManager = new ShapeManager();

document.getElementById('addShapeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const shapeType = document.getElementById('shapeType').value;
    const color = document.getElementById('color').value;

    let shape;

    if (shapeType === 'circle') shape = new Circle(color);
    if (shapeType === 'rectangle') shape = new Rectangle(color);
    if (shapeType === 'triangle') shape = new Triangle(color);

    shapeManager.addShape(shape);

    document.getElementById('shapeType').value = 'circle';
    document.getElementById('color').value = '#000000';
});
