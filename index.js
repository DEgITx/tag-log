const fs = require('fs')
const util = require('util');
const colors = require('ansi-256-colors');

const stringHashCode = (str) => {
	let hash = 0, i, chr;
	if (str.length === 0) 
		return hash;
	for (i = 0; i < str.length; i++) {
		chr   = str.charCodeAt(i);
		hash  = ((hash << 5) - hash) + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
};

module.exports = (options = {}) => {
	let logFile;
	if(options.logFile) {
		logFile = fs.createWriteStream(options.logFile, {flags : 'w'});
	} else if (options.logFile !== false && fs.existsSync('./package.json')) {
		const packageJson = require('./package.json');
		const projectName = packageJson.name;
		logFile = fs.createWriteStream(`${projectName}.log`, {flags : 'w'});
	}

	global.logT = (type, ...d) => {
		const now = new Date;
		const time = now.toLocaleTimeString();
		const date = now.toLocaleDateString();
		const ms = now.getMilliseconds();
		(options.stdout || console.log)(`[${date} ${time}] ` + colors.fg.codes[Math.abs(stringHashCode(type)) % 256] + `[${type}]` + colors.reset + ' ' + util.format(...d));
		if (logFile)
			logFile.write(`[${date} ${time}.${ms}] [${type}] ` + util.format(...d) + '\n');
	}

	global.logTW = (type, ...d) => {
		const now = new Date;
		const time = now.toLocaleTimeString();
		const date = now.toLocaleDateString();
		const ms = now.getMilliseconds();
		(options.stdout || console.warn)(`[${date} ${time}] ` + colors.fg.codes[Math.abs(stringHashCode(type)) % 256] + `[${type}]` + colors.reset + ' ' + colors.fg.codes[11] + util.format(...d) + colors.reset);
		if (logFile)
			logFile.write(`[${date} ${time}.${ms}] [WARN] [${type}] ` + util.format(...d) + '\n');
	}

	global.logTE = (type, ...d) => {
		const now = new Date;
		const time = now.toLocaleTimeString();
		const date = now.toLocaleDateString();
		const ms = now.getMilliseconds();
		(options.stdout || console.error)(`[${date} ${time}] ` + colors.fg.codes[Math.abs(stringHashCode(type)) % 256] + `[${type}]` + colors.reset + ' ' + colors.fg.codes[9] + util.format(...d) + colors.reset);
		if (logFile)
			logFile.write(`[${date} ${time}.${ms}] [ERROR] [${type}] ` + util.format(...d) + '\n');
	}

	if(options.overrideConsole) {
		const logPrint = console.log.bind(console);
		console.log = (...d) => {
			const now = new Date;
			const time = now.toLocaleTimeString();
			const date = now.toLocaleDateString();
			const ms = now.getMilliseconds();
			(options.stdout || logPrint)(util.format(...d));
			if (logFile)
				logFile.write(`[${date} ${time}.${ms}] ` + util.format(...d) + '\n');
		};
	}
}
