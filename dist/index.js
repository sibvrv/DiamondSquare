"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is a TypeScript implementation of the classic Diamond-Square Algorithm for 2D height maps.
 */
var DiamondSquare = (function () {
    /**
     *
     * @param {number} size - Defines the size of the map
     * @param prng - PseudoRandom number generator (PRNG)
     */
    function DiamondSquare(size, prng) {
        var _this = this;
        this.size = size;
        this.prng = prng;
        /**
         * Random Number Generator
         * @returns {number}
         */
        this.random = function () {
            return _this.prng ? _this.prng.random() : Math.random();
        };
        this.map = new Float32Array(this.size * this.size);
    }
    /**
     * Diamond Square Step
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param range
     */
    DiamondSquare.prototype.step = function (x1, y1, x2, y2, range) {
        var c1 = x2 - x1;
        var c2 = y2 - y1;
        var hx = Math.floor(c1 / 2);
        var hy = Math.floor(c2 / 2);
        if ((c1 <= 1) || (c2 <= 1)) {
            return;
        }
        var _a = this, map = _a.map, size = _a.size, step = _a.step;
        var a = map[y1 * size + x1];
        var b = map[y1 * size + x2];
        var c = map[y2 * size + x1];
        var d = map[y2 * size + x2];
        var e = Math.ceil((a + b + c + d) / 4 + this.random() * range);
        map[(y1 + hy) * size + x1 + hx] = e;
        map[(y1 + hy) * size + x1] = Math.ceil((a + c + e) / 3 + this.random() * range);
        map[(y1) * size + x1 + hx] = Math.ceil((a + b + e) / 3 + this.random() * range);
        map[(y1 + hy) * size + x2] = Math.ceil((b + d + e) / 3 + this.random() * range);
        map[(y2) * size + x1 + hx] = Math.ceil((c + d + e) / 3 + this.random() * range);
        step(x1, y1, x1 + hx, y1 + hy, range / 2);
        step(x1 + hx, y1, x2, y1 + hy, range / 2);
        step(x1, y1 + hy, x1 + hx, y2, range / 2);
        step(x1 + hx, y1 + hy, x2, y2, range / 2);
    };
    return DiamondSquare;
}());
exports.DiamondSquare = DiamondSquare;
