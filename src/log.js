/*eslint-disable no-console */
const log = function(...args) {
	if (typeof console !== 'undefined' && console.log) {
		console.log(...args);
	}
};

log.house = `
________.   ._____________________________.
(///(////\\  ///(///(///(///(///(///(///(////\\
///(///(  \\///(///(///(///(///(///(///(///(  \\
//(///(   ///(///(///(///(///(///(///(///(   |
/(///(  .///(///(///(///(///(///(///(///(  . |
    | .' |  ___    ___    ___   _____  | .'| |
    | |.'| |_|_|  |_|_|  |_|_| |__|__| | |.' |
    | '  | |_|_|  |_|_|  |_|_| |__|__| | ' . ||'--:|
__  |  .'|    __   _____    _ %%%____  | .'| |  .|
__| | |.'|   |  | |__|__|  |_%%%%%___| ||.' .'.|   .'         .'
__| | '.'|   | .| |__|__|  |%%%:%%___| |' .'.|   .'         .'
____|.'  |___|__|___________%%::%______|.'.|   .'         .'
       .|   '-=-.'            :'       .|    .'         .'
     .|   '   .               :      .|    .'         .'
   .|   '   .                       .|   .'         .'
  |'--'|==||'--'|'--'|'--'|'--'|'-'|   .'         .'
===jim================================'         .'
.    ...   ...   ...   ...   ...              .'

================================.
                              .'         .'
                            .'         .'`;

export default log;