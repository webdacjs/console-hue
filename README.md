# console-hue

This tiny module is basically an improved version of the native `console.log`, adding color support for different type of messages and a "Stringify" functionality by default for `Objects` and `Arrays`.

## Install

You can install with [npm]:

```sh
$ npm install --save console-hue
```
## Usage

When you import the module, the following methods will be exposed:

```js

const consoleh = require('console-hue')
{ error: [Function],
  success: [Function],
  warn: [Function],
  debug: [Function],
  log: [Function],
  blue: [Function],
  pink: [Function],
  red: [Function],
  green: [Function],
  yellow: [Function],
  cyan: [Function] }
  ```

 And then you can use `consoleh` with any of the previous methods to get a colorful reply in the console:

 ```js

 > const consoleh = require('console-hue')
// Green output
consoleh.success('This message should be green')
consoleh.error('This message should be red')
consoleh.warning('This message should be yellow')

 ```

As described before the module will attempt to "Stringify" the Arrays and Objects passed in the message sent to the module.


 ### License

 Copyright © 2019, [Juan Convers](https://juanconvers.com).
 Released under the [MIT License](LICENSE).
