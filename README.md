# Color log with tags

Small color log with support of tags for different components of the program. Also support file output with time. Support all systems.

<p align="center"><a href="https://github.com/DEgiTx/tag-log"><img src="https://raw.githubusercontent.com/DEgITx/docs/master/tag-log/tag.png"></a></p>

## Installation

```bash
npm install tagslog --save
```

## Features
* Easy to include in your project, only one requre() call allow to use it over all files
* Automatic color choise: each tag has own unique color. So different modules and components will be easy separated from each other
* File logging at the same time as normal stream output
* File logs contains ms time beside normal date+time.
* You can override own stdout function 

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
Possible options:
| Option | Type | Description | Default |
|--------|------|-------------|---------|
| logFile | string / boolean | Output log in log file, beside output to console. By default enabled and output to projectName.log from package.json. Can be disabled by logFile: false | projectName.log |
| overrideConsole | boolean | Redefine console.log to write log into logFile | false |
| stdout | function | Use custom output log function, like console.log() | not defined |
## License
MIT