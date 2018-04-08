/**
 * Pseudo-Random Number Generator
 */
export interface PseudoRandomNumberGenerator {
    random: () => number;
}
/**
 * This is a TypeScript implementation of the classic Diamond-Square Algorithm for 2D height maps.
 */
export declare class DiamondSquare {
    size: number;
    prng: PseudoRandomNumberGenerator | undefined;
    /**
     * 1D HeightMap
     */
    map: Float32Array;
    /**
     *
     * @param {number} size - Defines the size of the map
     * @param prng - PseudoRandom number generator (PRNG)
     */
    constructor(size: number, prng?: PseudoRandomNumberGenerator | undefined);
    /**
     * Random Number Generator
     * @returns {number}
     */
    random: () => number;
    /**
     * Diamond Square Step
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param range
     */
    step(x1: number, y1: number, x2: number, y2: number, range: number): void;
}
