/* !eslint disables because of errors with eslint/jsdoc */
/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param */
/* eslint-disable jsdoc/require-param-name */
/* eslint-disable jsdoc/require-param-description */
/* !eslint disables because of errors with eslint/jsdoc */

/**
 * Function to return a process Bar.
 *
 * @param {number} full - Full Value.
 * @param {number} curr - Current Value.
 * @param {number} [length=10] - Length of the Process Bar.
 * @param {string} [highChar='▓'] - Char to use when prercent high.
 * @param {string} [lowChar='░'] - Char to use when percent low.
 * @param {string} [openingChar='['] - Char to use to open percentage Bar.
 * @param {string} [closingChar=']'] - Char to use to close percentage bar.
 * @param {boolean} [addPercent=true] - Option to add Percent after Bar. : [▓▓] 100%.
 * @returns {string} - Process Bar.
 */
function statusbar(full, curr, length = 10, highChar = '▓', lowChar = '░', openingChar = '[', closingChar = ']', addPercent = true) {
	const percent = curr / full * 100;
	let str = openingChar;
	for (let i = 0; i < length; i++) {
		if(percent >= 100 / length * (i + 1)) str += highChar;
		else str += lowChar;
	}
	str += closingChar;
	if(addPercent) str += ' ' + percent.toFixed(0) + '%';
	return str;

}
module.exports = statusbar;