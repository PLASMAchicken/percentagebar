# percentagebar

# Example
```js
const percentagebar = require('./src/index.js')
percentagebar(10, 5); // returns ==> '[▓▓▓▓▓░░░░░] 50%'
```
![Example](https://raw.githubusercontent.com/PLASMAchicken/percentagebar/master/example.png)


# Documentation
<a name="statusbar"></a>

## statusbar(full, curr, [length], [highChar], [lowChar], [openingChar], [closingChar], [addPercent]) ⇒ <code>string</code>
Function to return a process Bar.

**Kind**: global function  
**Returns**: <code>string</code> - - Process Bar.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| full | <code>number</code> |  | Full Value. |
| curr | <code>number</code> |  | Current Value. |
| [length] | <code>number</code> | <code>10</code> | Length of the Process Bar. |
| [highChar] | <code>string</code> | <code>&quot;▓&quot;</code> | Char to use when prercent high. |
| [lowChar] | <code>string</code> | <code>&quot;░&quot;</code> | Char to use when percent low. |
| [openingChar] | <code>string</code> | <code>&quot;[&quot;</code> | Char to use to open percentage Bar. |
| [closingChar] | <code>string</code> | <code>&quot;]&quot;</code> | Char to use to close percentage bar. |
| [addPercent] | <code>boolean</code> | <code>true</code> | Option to add Percent after Bar. : [▓▓] 100%. |

