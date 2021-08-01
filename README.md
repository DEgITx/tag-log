# Color log with tags

Small color log with support of tags for different components of the program. Also support file output with time. Support all systems.

<p align="center"><a href="https://github.com/DEgiTx/tag-log"><img src="https://raw.githubusercontent.com/DEgITx/docs/master/tag-log/tag.png"></a></p>

## Installation

```bash
npm install tagslog --save
```

## Usage / Example

```javascript
// will include global loggin in your application in all js files
require('tagslog')();


// verbose/default message
logT('component1', 'Hello log message');

// warning message (same color for same component)
logTW('component1', 'Warning message with id:', 1);

// error message
logTE('component_bad', 'Error:', 'some error', '(bad)');

```

<a href="https://github.com/DEgiTx/tag-log"><img src="https://raw.githubusercontent.com/DEgITx/docs/master/tag-log/tag2.png"></a>

## Options

In log constuctor above can be appied options:

```javascript
// Initialize logging in file beside color log output in console
require('tagslog')({
    logFile: 'project.log'
});
```
Options:
| Option | Description | Default |
|--------|-------------|---------|
| logFile | Output log in log file, beside output to console. By default enabled and output to projectName.log from package.json. Can be disabled by logFile: false | projectName.log |
## License
MIT