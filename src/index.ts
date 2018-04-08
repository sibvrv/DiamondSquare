/**
 * Pseudo-Random Number Generator
 */
export interface PseudoRandomNumberGenerator {
  random: () => number;
}

/**
 * This is a TypeScript implementation of the classic Diamond-Square Algorithm for 2D height maps.
 */
export class DiamondSquare {
  /**
   * 1D HeightMap
   */
  map: Float32Array;

  /**
   *
   * @param {number} size - Defines the size of the map
   * @param prng - PseudoRandom number generator (PRNG)
   */
  constructor(public size: number, public prng?: PseudoRandomNumberGenerator) {
    this.map = new Float32Array(this.size * this.size);
  }

  /**
   * Random Number Generator
   * @returns {number}
   */
  random = () => {
    return this.prng ? this.prng.random() : Math.random();
  };

  /**
   * Diamond Square Step
   * @param x1
   * @param y1
   * @param x2
   * @param y2
   * @param range
   */
  step(x1: number, y1: number, x2: number, y2: number, range: number) {
    const c1 = x2 - x1;
    const c2 = y2 - y1;
    const hx = Math.floor(c1 / 2);
    const hy = Math.floor(c2 / 2);

    if ((c1 <= 1) || (c2 <= 1)) {
      return;
    }

    const {map, size, step} = this;

    const a = map[y1 * size + x1];
    const b = map[y1 * size + x2];
    const c = map[y2 * size + x1];
    const d = map[y2 * size + x2];
    const e = Math.ceil((a + b + c + d) / 4 + this.random() * range);

    map[(y1 + hy) * size + x1 + hx] = e;
    map[(y1 + hy) * size + x1] = Math.ceil((a + c + e) / 3 + this.random() * range);
    map[(y1) * size + x1 + hx] = Math.ceil((a + b + e) / 3 + this.random() * range);
    map[(y1 + hy) * size + x2] = Math.ceil((b + d + e) / 3 + this.random() * range);
    map[(y2) * size + x1 + hx] = Math.ceil((c + d + e) / 3 + this.random() * range);

    step(x1, y1, x1 + hx, y1 + hy, range / 2);
    step(x1 + hx, y1, x2, y1 + hy, range / 2);
    step(x1, y1 + hy, x1 + hx, y2, range / 2);
    step(x1 + hx, y1 + hy, x2, y2, range / 2);
  }
}
