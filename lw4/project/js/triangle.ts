class Triangle extends Shape {

    private p1X: number;
    private p1Y: number;
    private p2X: number;
    private p2Y: number;
    private p3X: number;
    private p3Y: number;

    constructor() {
        super();
        this.p1X = 0;
        this.p1Y = 0;
        this.p2X = 0;
        this.p2Y = 0;
        this.p3X = 0;
        this.p3Y = 0;
    }

    public setP1X(value: number) {
        this.p1X = value;
    }

    public getP1X() {
        return this.p1X;
    }

    public setP2X(value: number) {
        this.p2X = value;
    }

    public getP2X() {
        return this.p2X;
    }

    public setP3X(value: number) {
        this.p3X = value;
    }

    public getP3X() {
        return this.p3X;
    }

    public setP1Y(value: number) {
        this.p1Y = value;
    }

    public getP1Y() {
        return this.p1Y;
    }

    public setP2Y(value: number) {
        this.p2Y = value;
    }

    public getP2Y() {
        return this.p2Y;
    }

    public setP3Y(value: number) {
        this.p3Y = value;
    }

    public getP3Y() {
        return this.p3Y;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.getP1X(), this.getP1Y());
        context.lineTo(this.getP2X(), this.getP2Y());
        context.lineTo(this.getP3X(), this.getP3Y());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea(): number {
        const p = this.calculatePerimeter() / 2;
        const lines = this.getSides();

        return +(Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(3);
    }

    public calculatePerimeter(): number {
        const lines = this.getSides();

        return +(lines[0] + lines[1] + lines[2]).toFixed(3);
    }

    private getLineLength(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

    private getSides() {
        const line1 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP2X(), this.getP2Y());
        const line2 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP3X(), this.getP3Y());
        const line3 = this.getLineLength(this.getP2X(), this.getP2Y(), this.getP3X(), this.getP3Y());

        return [line1, line2, line3];
    }
}
