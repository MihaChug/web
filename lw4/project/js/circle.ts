class Circle extends Shape {

    private x: number;
    private y: number;
    private r: number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.r = 0;
    }

    public setRadius(value: number) {
        this.r = value;
    }

    public getRadius() {
        return this.r;
    }

    public setX(value: number) {
        this.x = value;
    }

    public getX() {
        return this.x;
    }

    public setY(value: number) {
        this.y = value;
    }

    public getY() {
        return this.y;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (Math.PI * Math.pow(this.r, 2)).toFixed(3);
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.r).toFixed(3);
    }
}
