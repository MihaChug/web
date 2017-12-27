class Rectangle extends Shape {

    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;

    constructor() {
        super();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    public setX1(value: number) {
        this.x1 = value;
    }

    public getX1() {
        return this.x1;
    }

    public setY1(value: number) {
        this.y1 = value;
    }

    public getY1() {
        return this.y1;
    }

    public setX2(value: number) {
        this.x2 = value;
    }

    public getX2() {
        return this.x2;
    }

    public setY2(value: number) {
        this.y2 = value;
    }

    public getY2() {
        return this.y2;
    }

    public getWidth() {
        return Math.abs(this.getX1() - this.getX2());
    }

    public getHeight() {
        return Math.abs(this.getY1() - this.getY2());
    }

    public draw(context: CanvasRenderingContext2D) {
        const tLeftX = Math.min(this.getX1(), this.getX2());
        const tLeftY = Math.min(this.getY1(), this.getY2());
        context.beginPath();
        context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (this.getWidth() * this.getHeight()).toFixed(3);
    }

    public calculatePerimeter() {
        return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(3);
    }
}
