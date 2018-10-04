var myLibrary = function() {
    /**
     * Calculates the area of a rectangle based on it's width and height.
     * @param width {number} 
     * @param height {number}
     * @returns The area of the rectangle.
     */
    function areaSquare(width, length) {
        return width * length;
    }
    /**Calculates the are of a triangle based on it's base and height. 
     * @param base {number}
     * @param height {number}
     * @returns The area of a triangle.
    */
    function areaTriangle(base, height) {
        return base * height / 2;
    }
    /**Calculates the are of a circle based on it's radius.
     * @param radius {number}
     * @returns The area of a circle.
     */
    function areaCircle(radius) {
        return radius * radius * Math.PI;
    }

    return {
        areaSquare: areaSquare,
        areaTriangle: areaTriangle,
        areaCircle: areaCircle
    };
}();
