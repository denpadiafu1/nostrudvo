/**
 * Returns a filter that sets the opacity of each pixel based on its intensity.
 * 
 * The filter adjusts the alpha channel (opacity) of each pixel according to a specified factor.
 * The intensity of each pixel is calculated as the average of its red, green, and blue values,
 * and the resulting opacity is set proportionally to this intensity.
 *
 * @param {number} factor - A multiplier to adjust the opacity. Should be between 0 (fully transparent)
 *                          and 1 (original opacity).
 * @returns {(pixels: ImageData) => ImageData} - A function that applies the opacity filter to an ImageData object.
 */
function createOpacityFilter(factor: number): (pixels: ImageData) => ImageData {
    if (factor < 0 || factor > 1) {
        throw new Error('Factor must be between 0 and 1.');
    }

    return function(pixels: ImageData): ImageData {
        const data = pixels.data;

        for (let i = 0; i < data.length; i += 4) {
            // Get the RGB values
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Calculate the intensity as the average of RGB components
            const intensity = (r + g + b) / 3;

            // Adjust the alpha (opacity) channel based on the intensity and factor
            data[i + 3] = data[i + 3] * (intensity / 255) * factor;
        }

        return pixels;
    };
}
