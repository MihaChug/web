let FONT_SIZE = 16;
let INFO_TEXT_COLOR = "#000000";

let canvas = getElement("canvas") as HTMLCanvasElement;
let circle: Circle;
let rectangle: Rectangle;
let triangle: Triangle;

function onShapeSelect() {

    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");
    show("apply-btn");

    const selectedValue = getSelectorValue();

    if (selectedValue === "Circle") {
        show("circle-optional-form");
    } else if (selectedValue === "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue === "Triangle") {
        show("triangle-optional-form");
    }
}
(document.getElementById("shape-selector") as HTMLElement).onchange = onShapeSelect;

function onApplyClick() {
    const selectedValue = getSelectorValue();
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue === "Circle") {
        circle = new Circle();
        circle.setFillColor(getElementValue("input-fill-color"));
        circle.setBorderColor(getElementValue("input-border-color"));
        circle.setRadius(parseInt(getElementValue("input-circle-r"), 10));
        circle.setX(parseInt(getElementValue("input-circle-x"), 10));
        circle.setY(parseInt(getElementValue("input-circle-y"), 10));
    } else if (selectedValue === "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("input-fill-color"));
        rectangle.setBorderColor(getElementValue("input-border-color"));
        rectangle.setX1(parseInt(getElementValue("input-rectangle-x1"), 10));
        rectangle.setY1(parseInt(getElementValue("input-rectangle-y1"), 10));
        rectangle.setX2(parseInt(getElementValue("input-rectangle-x2"), 10));
        rectangle.setY2(parseInt(getElementValue("input-rectangle-y2"), 10));
    } else if (selectedValue === "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("input-fill-color"));
        triangle.setBorderColor(getElementValue("input-border-color"));
        triangle.setP1X(parseInt(getElementValue("input-triangle-x1"), 10));
        triangle.setP1Y(parseInt(getElementValue("input-triangle-y1"), 10));
        triangle.setP2X(parseInt(getElementValue("input-triangle-x2"), 10));
        triangle.setP2Y(parseInt(getElementValue("input-triangle-y2"), 10));
        triangle.setP3X(parseInt(getElementValue("input-triangle-x3"), 10));
        triangle.setP3Y(parseInt(getElementValue("input-triangle-y3"), 10));
    }

    draw([circle, rectangle, triangle], context);
}
(document.getElementById("apply-btn") as HTMLElement).onchange = onApplyClick;

function exist(item: any) {
    return typeof (item) !== "undefined" && item !== null;
}

function draw(shapes: any, context: CanvasRenderingContext2D) {
    let index = 1;

    shapes.forEach((element: Shape) => {
        if (exist(element)) {
            element.draw(context);
            drawShapeInfo(context, element, index);
            index += 2;
        }
    });
}

function drawShapeInfo(context: CanvasRenderingContext2D, shape: Shape, shift: number) {
    context.font = FONT_SIZE + "px Montserrat Alternates";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.toString().match(/\w+/g)[1], 800, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
}

function getElement(id: string) {
    return document.getElementById(id);
}

function getElementValue(id: string) {
    return (getElement(id) as HTMLInputElement).value;
}

function hide(id: string) {
    const element =  getElement(id) as HTMLElement;
    element.style.display = "none";
}

function show(id: string) {
    const element =  getElement(id) as HTMLElement;
    element.style.display = "block";
}

function getSelectorValue() {
    const selector = getElement("shape-selector") as HTMLSelectElement;
    return (selector).options[selector.selectedIndex].value;
}
