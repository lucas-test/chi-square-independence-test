let t,e;function i(t){return t&&t.__esModule?t.default:t}var n,r,s,a,o,l={},h={},c={},d={},u={};// EXPORTS //
u="function"==typeof Object.defineProperty?Object.defineProperty:null,// EXPORTS //
d=// MAIN //
/**
* Tests for `Object.defineProperty` support.
*
* @private
* @returns {boolean} boolean indicating if an environment has `Object.defineProperty` support
*
* @example
* var bool = hasDefinePropertySupport();
* // returns <boolean>
*/function(){// Test basic support...
try{return u({},"x",{}),!0}catch(t){return!1}};var f={};// EXPORTS //
f=Object.defineProperty;var g={},p={},m={},b={},x={};// EXPORTS //
x=/**
* Tests if a value is a number primitive.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number primitive
*
* @example
* var bool = isNumber( 3.14 );
* // returns true
*
* @example
* var bool = isNumber( NaN );
* // returns true
*
* @example
* var bool = isNumber( new Number( 3.14 ) );
* // returns false
*/function(t){return"number"==typeof t;// NOTE: we inline the `isNumber.isPrimitive` function from `@stdlib/assert/is-number` in order to avoid circular dependencies.
};var y={};/**
* Returns a string of `n` zeros.
*
* @private
* @param {number} n - number of zeros
* @returns {string} string of zeros
*/function v(t){var e,i="";for(e=0;e<t;e++)i+="0";return i}// EXPORTS //
y=// MAIN //
/**
* Pads a token with zeros to the specified width.
*
* @private
* @param {string} str - token argument
* @param {number} width - token width
* @param {boolean} [right=false] - boolean indicating whether to pad to the right
* @returns {string} padded token argument
*/function(t,e,i){var n=!1,r=e-t.length;return r<0||("-"===t[0]&&(n=!0,t=t.substr(1)),t=i?t+v(r):v(r)+t,n&&(t="-"+t)),t};// NOTE: for the following, we explicitly avoid using stdlib packages in this particular package in order to avoid circular dependencies.
var _=String.prototype.toLowerCase,w=String.prototype.toUpperCase;// EXPORTS //
b=// MAIN //
/**
* Formats a token object argument as an integer.
*
* @private
* @param {Object} token - token object
* @throws {Error} must provide a valid integer
* @returns {string} formatted token argument
*/function(t){var e,i,n;switch(t.specifier){case"b":// Case: %b (binary)
e=2;break;case"o":// Case: %o (octal)
e=8;break;case"x":case"X":// Case: %x, %X (hexadecimal)
e=16;break;default:// Case: %d, %i, %u (decimal)
e=10}if(!isFinite(n=parseInt(i=t.arg,10))){if(!x(i))throw Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(i=(-n).toString(e),t.precision&&(i=y(i,t.precision,t.padRight)),i="-"+i):(i=n.toString(e),n||t.precision?t.precision&&(i=y(i,t.precision,t.padRight)):i="",t.sign&&(i=t.sign+i)),16===e&&(t.alternate&&(i="0x"+i),i=t.specifier===w.call(t.specifier)?w.call(i):_.call(i)),8===e&&t.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i};var M={};// EXPORTS //
M=/**
* Tests if a value is a string primitive.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a string primitive
*
* @example
* var bool = isString( 'beep' );
* // returns true
*
* @example
* var bool = isString( new String( 'beep' ) );
* // returns false
*/function(t){return"string"==typeof t;// NOTE: we inline the `isString.isPrimitive` function from `@stdlib/assert/is-string` in order to avoid circular dependencies.
};var k={},S=Math.abs,P=String.prototype.toLowerCase,C=String.prototype.toUpperCase,D=String.prototype.replace,A=/e\+(\d)$/,O=/e-(\d)$/,E=/^(\d+)$/,T=/^(\d+)e/,L=/\.0$/,I=/\.0*e/,R=/(\..*[^0])0*e/;// EXPORTS //
k=// MAIN //
/**
* Formats a token object argument as a floating-point number.
*
* @private
* @param {Object} token - token object
* @throws {Error} must provide a valid floating-point number
* @returns {string} formatted token argument
*/function(t){var e,i,n=parseFloat(t.arg);if(!isFinite(n)){if(!x(t.arg))throw Error("invalid floating-point number. Value: "+i);// Case: NaN, Infinity, or -Infinity
n=t.arg}switch(t.specifier){case"e":case"E":i=n.toExponential(t.precision);break;case"f":case"F":i=n.toFixed(t.precision);break;case"g":case"G":1e-4>S(n)?((e=t.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(t.precision),t.alternate||(i=D.call(i,R,"$1e"),i=D.call(i,I,"e"),i=D.call(i,L,""));break;default:throw Error("invalid double notation. Value: "+t.specifier)}return i=D.call(i,A,"e+0$1"),i=D.call(i,O,"e-0$1"),t.alternate&&(i=D.call(i,E,"$1."),i=D.call(i,T,"$1.e")),n>=0&&t.sign&&(i=t.sign+i),i=t.specifier===C.call(t.specifier)?C.call(i):P.call(i)};var F={};// FUNCTIONS //
/**
* Returns `n` spaces.
*
* @private
* @param {number} n - number of spaces
* @returns {string} string of spaces
*/function z(t){var e,i="";for(e=0;e<t;e++)i+=" ";return i}// EXPORTS //
F=// MAIN //
/**
* Pads a token with spaces to the specified width.
*
* @private
* @param {string} str - token argument
* @param {number} width - token width
* @param {boolean} [right=false] - boolean indicating whether to pad to the right
* @returns {string} padded token argument
*/function(t,e,i){var n=e-t.length;return n<0?t:t=i?t+z(n):z(n)+t};// VARIABLES //
var N=String.fromCharCode,V=isNaN,B=Array.isArray;// EXPORTS //
m=// MAIN //
/**
* Generates string from a token array by interpolating values.
*
* @param {Array} tokens - string parts and format identifier objects
* @param {Array} ...args - variable values
* @throws {TypeError} first argument must be an array
* @throws {Error} invalid flags
* @returns {string} formatted string
*
* @example
* var tokens = [ 'beep ', { 'specifier': 's' } ];
* var out = formatInterpolate( tokens, 'boop' );
* // returns 'beep boop'
*/function(t){var e,i,n,r,s,a,o,l,h;if(!B(t))throw TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l=0,a="",o=1;l<t.length;l++)if(n=t[l],M(n))a+=n;else{if(e=void 0!==n.precision,!(n=// FUNCTIONS //
/**
* Initializes token object with properties of supplied format identifier object or default values if not present.
*
* @private
* @param {Object} token - format identifier object
* @returns {Object} token object
*/function(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}(n)).specifier)throw TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(o=n.mapping),i=n.flags,h=0;h<i.length;h++)switch(r=i.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=0>i.indexOf("-");// NOTE: We use built-in `Array.prototype.indexOf` here instead of `@stdlib/assert/contains` in order to avoid circular dependencies.
break;case"#":n.alternate=!0;break;default:throw Error("invalid flag: "+r)}if("*"===n.width){if(n.width=parseInt(arguments[o],10),o+=1,V(n.width))throw TypeError("the argument for * width at position "+o+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[o],10),o+=1,V(n.precision))throw TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[o],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=b(n);break;case"s":// Case: %s (string)
n.maxWidth=e?n.precision:-1;break;case"c":// Case: %c (character)
if(!V(n.arg)){if((s=parseInt(n.arg,10))<0||s>127)throw Error("invalid character code. Value: "+n.arg);n.arg=V(s)?String(n.arg):N(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),a+=n.arg||"",o+=1}return a};var W={},H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;// EXPORTS //
W=// MAIN //
/**
* Tokenizes a string into an array of string parts and format identifier objects.
*
* @param {string} str - input string
* @returns {Array} tokens
*
* @example
* var tokens = formatTokenize( 'Hello %s!' );
* // returns [ 'Hello ', {...}, '!' ]
*/function(t){var e,i,n,r;for(i=[],r=0,n=H.exec(t);n;)(e=t.slice(r,H.lastIndex-n[0].length)).length&&i.push(e),i.push(// FUNCTIONS //
/**
* Parses a delimiter.
*
* @private
* @param {Array} match - regular expression match
* @returns {Object} delimiter token object
*/function(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}(n)),r=H.lastIndex,n=H.exec(t);return(e=t.slice(r)).length&&i.push(e),i};var j={};// EXPORTS //
j=/**
* Tests if a value is a string primitive.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a string primitive
*
* @example
* var bool = isString( 'beep' );
* // returns true
*
* @example
* var bool = isString( new String( 'beep' ) );
* // returns false
*/function(t){return"string"==typeof t;// NOTE: we inline the `isString.isPrimitive` function from `@stdlib/assert/is-string` in order to avoid circular dependencies.
},// EXPORTS //
p=// MAIN //
/**
* Inserts supplied variable values into a format string.
*
* @param {string} str - input string
* @param {Array} ...args - variable values
* @throws {TypeError} first argument must be a string
* @throws {Error} invalid flags
* @returns {string} formatted string
*
* @example
* var str = format( 'Hello %s!', 'world' );
* // returns 'Hello world!'
*
* @example
* var str = format( 'Pi: ~%.2f', 3.141592653589793 );
* // returns 'Pi: ~3.14'
*/function t(e){var i,n,r;if(!j(e))throw TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=1,i=W(e),n=Array(arguments.length),n[0]=i;r<n.length;r++)n[r]=arguments[r];return m.apply(null,n)};// VARIABLES //
var $=Object.prototype,U=$.toString,Y=$.__defineGetter__,X=$.__defineSetter__,q=$.__lookupGetter__,G=$.__lookupSetter__;// EXPORTS //
g=// MAIN //
/**
* Defines (or modifies) an object property.
*
* ## Notes
*
* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
*
* @param {Object} obj - object on which to define the property
* @param {string} prop - property name
* @param {Object} descriptor - property descriptor
* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
* @param {*} [descriptor.value] - property value
* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be an object
* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
* @returns {Object} object with added property
*
* @example
* var obj = {};
*
* defineProperty( obj, 'foo', {
*     'value': 'bar'
* });
*
* var str = obj.foo;
* // returns 'bar'
*/function(t,e,i){var n,r,s,a;if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw TypeError(p("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof i||null===i||"[object Array]"===U.call(i))throw TypeError(p("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((r="value"in i)&&(q.call(t,e)||G.call(t,e)?(// Override `__proto__` to avoid touching inherited accessors:
n=t.__proto__,t.__proto__=$,// Delete property as existing getters/setters prevent assigning value to specified property:
delete t[e],t[e]=i.value,// Restore original prototype:
t.__proto__=n):t[e]=i.value),s="get"in i,a="set"in i,r&&(s||a))throw Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&Y&&Y.call(t,e,i.get),a&&X&&X.call(t,e,i.set),t},// EXPORTS //
c=d()?f:g,// EXPORTS //
h=// MAIN //
/**
* Defines a non-enumerable read-only property.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {*} value - value to set
*
* @example
* var obj = {};
*
* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/function(t,e,i){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:i})};var K={},Z={},J={},Q={};// EXPORTS //
Q=// MAIN //
/**
* Tests if a double-precision floating-point numeric value is `NaN`.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is `NaN`
*
* @example
* var bool = isnan( NaN );
* // returns true
*
* @example
* var bool = isnan( 7.0 );
* // returns false
*/function(t){return t!=t};var tt={},te={};// EXPORTS //
te=Number.POSITIVE_INFINITY;var ti={};// EXPORTS //
ti=Number.NEGATIVE_INFINITY,// EXPORTS //
tt=// MAIN //
/**
* Tests if a double-precision floating-point numeric value is infinite.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is infinite
*
* @example
* var bool = isInfinite( Infinity );
* // returns true
*
* @example
* var bool = isInfinite( -Infinity );
* // returns true
*
* @example
* var bool = isInfinite( 5.0 );
* // returns false
*
* @example
* var bool = isInfinite( NaN );
* // returns false
*/function(t){return t===te||t===ti};var tn={};// EXPORTS //
tn=// MAIN //
/**
* Computes the absolute value of a double-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} absolute value
*
* @example
* var v = abs( -1.0 );
* // returns 1.0
*
* @example
* var v = abs( 2.0 );
* // returns 2.0
*
* @example
* var v = abs( 0.0 );
* // returns 0.0
*
* @example
* var v = abs( -0.0 );
* // returns 0.0
*
* @example
* var v = abs( NaN );
* // returns NaN
*/function(t){return Math.abs(t);// eslint-disable-line stdlib/no-builtin-math
};var tr={},ts={},ta={},to={},tl={},th={},tc={},td={},tu=// MAIN //
/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();// EXPORTS //
tc=// MAIN //
/**
* Tests for native `toStringTag` support.
*
* @returns {boolean} boolean indicating if an environment has `toStringTag` support
*
* @example
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/function(){return tu&&"symbol"==typeof Symbol.toStringTag};var tf={},tg={};// EXPORTS //
tg=Object.prototype.toString,// EXPORTS //
tf=// MAIN //
/**
* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/function(t){return tg.call(t)};var tp={},tm={},tb=Object.prototype.hasOwnProperty;// EXPORTS //
tm=// MAIN //
/**
* Tests if an object has a specified property.
*
* @param {*} value - value to test
* @param {*} property - property to test
* @returns {boolean} boolean indicating if an object has a specified property
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* @example
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'bap' );
* // returns false
*/function(t,e){return null!=t&&tb.call(t,e)};var tx={},ty={};// EXPORTS //
tx="function"==typeof// EXPORTS //
(ty="function"==typeof Symbol?Symbol:void 0)?ty.toStringTag:"",// EXPORTS //
tp=// MAIN //
/**
* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
*
* @param {*} v - input value
* @returns {string} string value indicating a specification defined classification of the input value
*
* @example
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* @example
* var str = nativeClass( 5 );
* // returns '[object Number]'
*
* @example
* function Beep() {
*     return this;
* }
* var str = nativeClass( new Beep() );
* // returns '[object Object]'
*/function(t){var e,i,n;if(null==t)return tg.call(t);i=t[tx],e=tm(t,tx);// Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
try{t[tx]=void 0}catch(e){return tg.call(t)}return n=tg.call(t),e?t[tx]=i:delete t[tx],n},// EXPORTS //
th=tc()?tp:tf;// VARIABLES //
var tv="function"==typeof Uint32Array;// eslint-disable-line stdlib/require-globals
// EXPORTS //
tl=// MAIN //
/**
* Tests if a value is a Uint32Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint32Array
*
* @example
* var bool = isUint32Array( new Uint32Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint32Array( [] );
* // returns false
*/function(t){return tv&&t instanceof Uint32Array||// eslint-disable-line stdlib/require-globals
"[object Uint32Array]"===th(t)};var t_={};// EXPORTS //
t_=4294967295;var tw={};// EXPORTS //
tw="function"==typeof Uint32Array?Uint32Array:null,// EXPORTS //
to=// MAIN //
/**
* Tests for native `Uint32Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint32Array` support
*
* @example
* var bool = hasUint32ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tw)return!1;// Test basic support...
try{e=[1,3.14,-3.14,t_+1,t_+2],e=new tw(e),t=tl(e)&&1===e[0]&&3===e[1]&&// truncation
e[2]===t_-2&&// truncation and wrap around
0===e[3]&&// wrap around
1// wrap around
===e[4]}catch(e){t=!1}return t};var tM={};// EXPORTS //
tM="function"==typeof Uint32Array?Uint32Array:void 0;var tk={};// EXPORTS //
tk=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},// EXPORTS //
ta=to()?tM:tk;var tS={},tP={},tC={},tD="function"==typeof Float64Array;// EXPORTS //
tC=// MAIN //
/**
* Tests if a value is a Float64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Float64Array
*
* @example
* var bool = isFloat64Array( new Float64Array( 10 ) );
* // returns true
*
* @example
* var bool = isFloat64Array( [] );
* // returns false
*/function(t){return tD&&t instanceof Float64Array||// eslint-disable-line stdlib/require-globals
"[object Float64Array]"===th(t)};var tA={};// EXPORTS //
tA="function"==typeof Float64Array?Float64Array:null,// EXPORTS //
tP=// MAIN //
/**
* Tests for native `Float64Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Float64Array` support
*
* @example
* var bool = hasFloat64ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tA)return!1;// Test basic support...
try{e=new tA([1,3.14,-3.14,NaN]),t=tC(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var tO={};// EXPORTS //
tO="function"==typeof Float64Array?Float64Array:void 0;var tE={};// EXPORTS //
tE=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},// EXPORTS //
tS=tP()?tO:tE;var tT={},tL={},tI={},tR={},tF={},tz={},tN="function"==typeof Uint8Array;// EXPORTS //
tz=// MAIN //
/**
* Tests if a value is a Uint8Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint8Array
*
* @example
* var bool = isUint8Array( new Uint8Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint8Array( [] );
* // returns false
*/function(t){return tN&&t instanceof Uint8Array||// eslint-disable-line stdlib/require-globals
"[object Uint8Array]"===th(t)};var tV={};// EXPORTS //
tV=255;var tB={};// EXPORTS //
tB="function"==typeof Uint8Array?Uint8Array:null,// EXPORTS //
tF=// MAIN //
/**
* Tests for native `Uint8Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
*
* @example
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tB)return!1;// Test basic support...
try{e=[1,3.14,-3.14,tV+1,tV+2],e=new tB(e),t=tz(e)&&1===e[0]&&3===e[1]&&// truncation
e[2]===tV-2&&// truncation and wrap around
0===e[3]&&// wrap around
1// wrap around
===e[4]}catch(e){t=!1}return t};var tW={};// EXPORTS //
tW="function"==typeof Uint8Array?Uint8Array:void 0;var tH={};// EXPORTS //
tH=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},// EXPORTS //
tR=tF()?tW:tH;var tj={},t$={},tU="function"==typeof Uint16Array;// EXPORTS //
t$=// MAIN //
/**
* Tests if a value is a Uint16Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Uint16Array
*
* @example
* var bool = isUint16Array( new Uint16Array( 10 ) );
* // returns true
*
* @example
* var bool = isUint16Array( [] );
* // returns false
*/function(t){return tU&&t instanceof Uint16Array||// eslint-disable-line stdlib/require-globals
"[object Uint16Array]"===th(t)};var tY={};// EXPORTS //
tY=65535;var tX={};// EXPORTS //
tX="function"==typeof Uint16Array?Uint16Array:null,// EXPORTS //
tj=// MAIN //
/**
* Tests for native `Uint16Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
*
* @example
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tX)return!1;// Test basic support...
try{e=[1,3.14,-3.14,tY+1,tY+2],e=new tX(e),t=t$(e)&&1===e[0]&&3===e[1]&&// truncation
e[2]===tY-2&&// truncation and wrap around
0===e[3]&&// wrap around
1// wrap around
===e[4]}catch(e){t=!1}return t};var tq={};// EXPORTS //
tq="function"==typeof Uint16Array?Uint16Array:void 0;var tG={};// EXPORTS //
tG=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},/*
	* Set the uint16 view to a value having distinguishable lower and higher order words.
	*
	* 4660 => 0x1234 => 0x12 0x34 => '00010010 00110100' => (0x12,0x34) == (18,52)
	*/(n=new// EXPORTS //
(tI={uint16:tj()?tq:tG,uint8:tR}).uint16(1))[0]=4660,// EXPORTS //
tT=!0==// EXPORTS //
(tL=52===new tI.uint8(n.buffer)[0])?1:0;// VARIABLES //
var tK=new tS(1),tZ=new ta(tK.buffer);// EXPORTS //
ts=// MAIN //
/**
* Returns an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {number} x - input value
* @returns {uinteger32} higher order word
*
* @example
* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
* // returns 1774486211
*/function(t){return tK[0]=t,tZ[tT]};var tJ={},tQ={};// EXPORTS //
tQ=!0===tL?1:0;// VARIABLES //
var t0=new tS(1),t1=new ta(t0.buffer);// EXPORTS //
tJ=// MAIN //
/**
* Sets the more significant 32 bits of a double-precision floating-point number.
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {number} x - double
* @param {uinteger32} high - unsigned 32-bit integer to replace the higher order word of `x`
* @returns {number} double having the same lower order word as `x`
*
* @example
* var high = 5 >>> 0; // => 0 00000000000 00000000000000000101
*
* var y = setHighWord( 3.14e201, high ); //  => 0 00000000000 0000000000000000010110010011110010110101100010000010
* // returns 1.18350528745e-313
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' ); // => 0 11111111111 00000000000000000000 00000000000000000000000000000000
*
* var high = 1072693248 >>> 0; // => 0 01111111111 00000000000000000000
*
* // Set the higher order bits of `+infinity` to return `1`:
* var y = setHighWord( PINF, high ); // => 0 01111111111 0000000000000000000000000000000000000000000000000000
* // returns 1.0
*/function(t,e){return t0[0]=t,t1[tQ]=e>>>0,t0[0]};var t2={};// EXPORTS //
t2=1023;var t3={};// EXPORTS //
t3=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)};var t5={};// EXPORTS //
t5=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},// EXPORTS //
tr=// MAIN //
/**
* Evaluates the natural logarithm of a double-precision floating-point number.
*
* @param {NonNegativeNumber} x - input value
* @returns {number} function value
*
* @example
* var v = ln( 4.0 );
* // returns ~1.386
*
* @example
* var v = ln( 0.0 );
* // returns -Infinity
*
* @example
* var v = ln( Infinity );
* // returns Infinity
*
* @example
* var v = ln( NaN );
* // returns NaN
*
* @example
* var v = ln( -4.0 );
* // returns NaN
*/function(t){var e,i,n,r,s,a,o,l,h,c,d,u;return 0===t?ti:Q(t)||t<0?NaN:(i=ts(t),s=0,i<1048576&&(// Case: 0 < x < 2**-1022
s-=54,// Subnormal number, scale up `x`:
t*=0x40000000000000,i=ts(t)),i>=2146435072)?t+t:(s+=(i>>20)-t2|0,i&=1048575,l=i+614244&1048576|0,// Normalize `x` or `x/2`...
t=tJ(t,i|1072693248^l),s+=l>>20|0,o=t-1,(1048575&2+i)<3)?// Case: -2**-20 <= f < 2**-20
0===o?0===s?0:.6931471803691238*s+19082149292705877e-26*s:(a=o*o*(.5-.3333333333333333*o),0===s)?o-a:.6931471803691238*s-(a-19082149292705877e-26*s-o):(u=(c=o/(2+o))*c,l=i-398458|0,d=u*u,h=440401-i|0,r=d*t3(d),n=u*t5(d),l|=h,a=n+r,l>0)?(e=.5*o*o,0===s)?o-(e-c*(e+a)):.6931471803691238*s-(e-(c*(e+a)+19082149292705877e-26*s)-o):0===s?o-c*(o-a):.6931471803691238*s-(c*(o-a)-19082149292705877e-26*s-o)};var t6={},t4={};// EXPORTS //
t4=Math.floor;var t7={};// EXPORTS //
t7=Math.ceil,// EXPORTS //
t6=// MAIN //
/**
* Rounds a double-precision floating-point number toward zero.
*
* @param {number} x - input value
* @returns {number} rounded value
*
* @example
* var v = trunc( -4.2 );
* // returns -4.0
*
* @example
* var v = trunc( 9.99999 );
* // returns 9.0
*
* @example
* var v = trunc( 0.0 );
* // returns 0.0
*
* @example
* var v = trunc( -0.0 );
* // returns -0.0
*
* @example
* var v = trunc( NaN );
* // returns NaN
*
* @example
* var v = trunc( Infinity );
* // returns Infinity
*
* @example
* var v = trunc( -Infinity );
* // returns -Infinity
*/function(t){return t<0?t7(t):t4(t)};var t9={},t8={},et={},ee={};// EXPORTS //
ee=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.0416666666666666:.0416666666666666+t*(-.001388888888887411+2480158728947673e-20*t)};var ei={};// EXPORTS //
ei=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.00000027557314351390663:-.00000027557314351390663+t*(2087572321298175e-24+-.000000000011359647557788195*t)},// EXPORTS //
et=// MAIN //
/**
* Computes the cosine on \\( \[-\pi/4, \pi/4] \\), where \\( \pi/4 \approx 0.785398164 \\).
*
* ## Method
*
* -   Since \\( \cos(-x) = \cos(x) \\), we need only to consider positive \\(x\\).
*
* -   If \\( x < 2^{-27} \\), return \\(1\\) which is inexact if \\( x \ne 0 \\).
*
* -   \\( cos(x) \\) is approximated by a polynomial of degree \\(14\\) on \\( \[0,\pi/4] \\).
*
*     ```tex
*     \cos(x) \approx 1 - \frac{x \cdot x}{2} + C_1 \cdot x^4 + \ldots + C_6 \cdot x^{14}
*     ```
*
*     where the Remez error is
*
*     ```tex
*     \left| \cos(x) - \left( 1 - \frac{x^2}{2} + C_1x^4 + C_2x^6 + C_3x^8 + C_4x^{10} + C_5x^{12} + C_6x^{15} \right) \right| \le 2^{-58}
*     ```
*
* -   Let \\( C_1x^4 + C_2x^6 + C_3x^8 + C_4x^{10} + C_5x^{12} + C_6x^{14} \\), then
*
*     ```tex
*     \cos(x) \approx 1 - \frac{x \cdot x}{2} + r
*     ```
*
*     Since
*
*     ```tex
*     \cos(x+y) \approx \cos(x) - \sin(x) \cdot y \approx \cos(x) - x \cdot y
*     ```
*
*     a correction term is necessary in \\( \cos(x) \\). Hence,
*
*     ```tex
*     \cos(x+y) = 1 - \left( \frac{x \cdot x}{2} - (r - x \cdot y) \right)
*     ```
*
*     For better accuracy, rearrange to
*
*     ```tex
*     \cos(x+y) \approx w + \left( t + ( r - x \cdot y ) \right)
*     ```
*
*     where \\( w = 1 - \frac{x \cdot x}{2} \\) and \\( t \\) is a tiny correction term (\\( 1 - \frac{x \cdot x}{2} = w + t \\) exactly in infinite precision). The exactness of \\(w + t\\) in infinite precision depends on \\(w\\) and \\(t\\) having the same precision as \\(x\\).
*
* @param {number} x - input value (in radians, assumed to be bounded by ~pi/4 in magnitude)
* @param {number} y - tail of `x`
* @returns {number} cosine
*
* @example
* var v = kernelCos( 0.0, 0.0 );
* // returns ~1.0
*
* @example
* var v = kernelCos( 3.141592653589793/6.0, 0.0 );
* // returns ~0.866
*
* @example
* var v = kernelCos( 0.785, -1.144e-17 );
* // returns ~0.707
*
* @example
* var v = kernelCos( NaN, 0.0 );
* // returns NaN
*/function(t,e){var i,n,r,s;return r=(s=t*t)*s,n=s*ee(s)+r*r*ei(s),(r=1-(i=.5*s))+(1-r-i+(s*n-t*e))};var en={};// EXPORTS //
en=// MAIN //
/**
* Computes the sine on \\( \approx \[-\pi/4, \pi/4] \\) (except on \\(-0\\)), where \\( \pi/4 \approx 0.7854 \\).
*
* ## Method
*
* -   Since \\( \sin(-x) = -\sin(x) \\), we need only to consider positive \\(x\\).
*
* -   Callers must return \\( \sin(-0) = -0 \\) without calling here since our odd polynomial is not evaluated in a way that preserves \\(-0\\). Callers may do the optimization \\( \sin(x) \approx x \\) for tiny \\(x\\).
*
* -   \\( \sin(x) \\) is approximated by a polynomial of degree \\(13\\) on \\( \left\[0,\tfrac{pi}{4}\right] \\)
*
*     ```tex
*     \sin(x) \approx x + S_1 \cdot x^3 + \ldots + S_6 \cdot x^{13}
*     ```
*
*     where
*
*     ```tex
*     \left| \frac{\sin(x)}{x} \left( 1 + S_1 \cdot x + S_2 \cdot x + S_3 \cdot x + S_4 \cdot x + S_5 \cdot x + S_6 \cdot x \right) \right| \le 2^{-58}
*     ```
*
* -   We have
*
*     ```tex
*     \sin(x+y) = \sin(x) + \sin'(x') \cdot y \approx \sin(x) + (1-x*x/2) \cdot y
*     ```
*
*     For better accuracy, let
*
*     ```tex
*     r = x^3 * \left( S_2 + x^2 \cdot \left( S_3 + x^2 * \left( S_4 + x^2 \cdot ( S_5+x^2 \cdot S_6 ) \right) \right) \right)
*     ```
*
*     then
*
*     ```tex
*     \sin(x) = x + \left( S_1 \cdot x + ( x \cdot (r-y/2) + y ) \right)
*     ```
*
* @param {number} x - input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @param {number} y - tail of `x`
* @returns {number} sine
*
* @example
* var v = kernelSin( 0.0, 0.0 );
* // returns ~0.0
*
* @example
* var v = kernelSin( 3.141592653589793/6.0, 0.0 );
* // returns ~0.5
*
* @example
* var v = kernelSin( 0.619, 9.279e-18 );
* // returns ~0.58
*
* @example
* var v = kernelSin( NaN, 0.0 );
* // returns NaN
*
* @example
* var v = kernelSin( 3.0, NaN );
* // returns NaN
*
* @example
* var v = kernelSin( NaN, NaN );
* // returns NaN
*/function(t,e){var i,n,r;return(i=.00833333333332249+(r=t*t)*(-.0001984126982985795+27557313707070068e-22*r)+r*(r*r)*(-.000000025050760253406863+158969099521155e-24*r),n=r*t,0===e)?t+n*(-.16666666666666632+r*i):t-(r*(.5*e-n*i)-e- -.16666666666666632*n)};var er={},es={};// EXPORTS //
es=2147483647;var ea={};// EXPORTS //
ea=2146435072;var eo={};// EXPORTS //
eo=1048575;var el={},eh={};// EXPORTS //
eh=!0===tL?0:1;// VARIABLES //
var ec=new tS(1),ed=new ta(ec.buffer);// EXPORTS //
el=// MAIN //
/**
* Returns a 32-bit unsigned integer corresponding to the less significant 32 bits of a double-precision floating-point number.
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the lower order bits? If little endian, the first; if big endian, the second.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {number} x - input value
* @returns {uinteger32} lower order word
*
* @example
* var w = getLowWord( 3.14e201 ); // => 10010011110010110101100010000010
* // returns 2479577218
*/function(t){return ec[0]=t,ed[eh]};var eu={},ef={};!0===tL?(r=1,s=0):(r=0,s=1),// EXPORTS //
ef={HIGH:r,LOW:s};// VARIABLES //
var eg=new tS(1),ep=new ta(eg.buffer),em=ef.HIGH,eb=ef.LOW;// EXPORTS //
eu=// MAIN //
/**
* Creates a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 should we place the higher order bits? If little endian, the second; if big endian, the first.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {uinteger32} high - higher order word (unsigned 32-bit integer)
* @param {uinteger32} low - lower order word (unsigned 32-bit integer)
* @returns {number} floating-point number
*
* @example
* var v = fromWords( 1774486211, 2479577218 );
* // returns 3.14e201
*
* @example
* var v = fromWords( 3221823995, 1413754136 );
* // returns -3.141592653589793
*
* @example
* var v = fromWords( 0, 0 );
* // returns 0.0
*
* @example
* var v = fromWords( 2147483648, 0 );
* // returns -0.0
*
* @example
* var v = fromWords( 2146959360, 0 );
* // returns NaN
*
* @example
* var v = fromWords( 2146435072, 0 );
* // returns Infinity
*
* @example
* var v = fromWords( 4293918720, 0 );
* // returns -Infinity
*/function(t,e){return ep[em]=t,ep[eb]=e,eg[0]};var ex={},ey={},ev={};// EXPORTS //
ev=1023;var e_={};// EXPORTS //
e_=-1023;var ew={};// EXPORTS //
ew=-1074;var eM={},ek={};// EXPORTS //
ek=2147483648;var eS={},eP={},eC={},eD={};!0===tL?(a=1,o=0):(a=0,o=1),// EXPORTS //
eD={HIGH:a,LOW:o};// VARIABLES //
var eA=new tS(1),eO=new ta(eA.buffer),eE=eD.HIGH,eT=eD.LOW;// EXPORTS //
eC=// MAIN //
/**
* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the higher order bits? If little endian, the second; if big endian, the first.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
*
* var out = new Uint32Array( 2 );
*
* var w = toWords( 3.14e201, out, 1, 0 );
* // returns <Uint32Array>[ 1774486211, 2479577218 ]
*
* var bool = ( w === out );
* // returns true
*/function(t,e,i,n){return eA[0]=t,e[n]=eO[eE],e[n+i]=eO[eT],e},// MAIN //
h(// EXPORTS //
eP=// MAIN //
/**
* Splits a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @param {number} x - input value
* @returns {Array<number>} output array
*
* @example
* var w = toWords( 3.14e201 );
* // returns [ 1774486211, 2479577218 ]
*/function(t){return eC(t,[0,0],1,0)},"assign",eC),// EXPORTS //
eS=eP;// VARIABLES //
// High/low words workspace:
var eL=[0,0];// EXPORTS //
eM=// MAIN //
/**
* Returns a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @param {number} x - number from which to derive a magnitude
* @param {number} y - number from which to derive a sign
* @returns {number} a double-precision floating-point number
*
* @example
* var z = copysign( -3.14, 10.0 );
* // returns 3.14
*
* @example
* var z = copysign( 3.14, -1.0 );
* // returns -3.14
*
* @example
* var z = copysign( 1.0, -0.0 );
* // returns -1.0
*
* @example
* var z = copysign( -3.14, -0.0 );
* // returns -3.14
*
* @example
* var z = copysign( -0.0, 1.0 );
* // returns 0.0
*/function(t,e){var i;// Return a new value having the same magnitude as `x`, but with the sign of `y`:
return(// Split `x` into higher and lower order words:
eS.assign(t,eL,1,0),// Copy the sign bit of `y` to `x`:
i=eL[0]&es|ts(e)&ek,eu(i,eL[1]))};var eI={},eR={},eF={};// EXPORTS //
eF=22250738585072014e-324,// EXPORTS //
eR=// MAIN //
/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\) and assigns results to a provided output array.
*
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319, [ 0.0, 0 ], 1, 0 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var out = normalize( 0.0, [ 0.0, 0 ], 1, 0 );
* // returns [ 0.0, 0 ];
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' );
*
* var out = normalize( PINF, [ 0.0, 0 ], 1, 0 );
* // returns [ Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants-float64-ninf' );
*
* var out = normalize( NINF, [ 0.0, 0 ], 1, 0 );
* // returns [ -Infinity, 0 ]
*
* @example
* var out = normalize( NaN, [ 0.0, 0 ], 1, 0 );
* // returns [ NaN, 0 ]
*/function(t,e,i,n){return Q(t)||tt(t)?(e[n]=t,e[n+i]=0):0!==t&&tn(t)<eF?(e[n]=4503599627370496*t,e[n+i]=-52):(e[n]=t,e[n+i]=0),e},// MAIN //
h(// EXPORTS //
eI=// MAIN //
/**
* Returns a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @param {number} x - input value
* @returns {NumberArray} output array
*
* @example
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var out = normalize( 0.0 );
* // returns [ 0.0, 0 ]
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' );
*
* var out = normalize( PINF );
* // returns [ Infinity, 0 ]
*
* @example
* var NINF = require( '@stdlib/constants-float64-ninf' );
*
* var out = normalize( NINF );
* // returns [ -Infinity, 0 ]
*
* @example
* var out = normalize( NaN );
* // returns [ NaN, 0 ]
*/function(t){return eR(t,[0,0],1,0)},"assign",eR);var ez=eI.assign,eN={};// EXPORTS //
eN=// MAIN //
/**
* Returns an integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @param {number} x - input value
* @returns {integer32} unbiased exponent
*
* @example
* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
* // returns -1019
*
* @example
* var exp = exponent( -3.14 );
* // returns 1
*
* @example
* var exp = exponent( 0.0 );
* // returns -1023
*
* @example
* var exp = exponent( NaN );
* // returns 1024
*/function(t){// Extract from the input value a higher order word (unsigned 32-bit integer) which contains the exponent:
var e=ts(t);// Remove the bias and return:
return(// Apply a mask to isolate only the exponent bits and then shift off all bits which are part of the fraction:
(e=(e&ea)>>>20)-t2|0);// asm type annotation
};// Normalization workspace:
var eV=[0,0],eB=[0,0];// EXPORTS //
ey=// MAIN //
/**
* Multiplies a double-precision floating-point number by an integer power of two.
*
* @param {number} frac - fraction
* @param {integer} exp - exponent
* @returns {number} double-precision floating-point number
*
* @example
* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* @example
* var x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* @example
* var x = ldexp( 0.0, 20 );
* // returns 0.0
*
* @example
* var x = ldexp( -0.0, 39 );
* // returns -0.0
*
* @example
* var x = ldexp( NaN, -101 );
* // returns NaN
*
* @example
* var x = ldexp( Infinity, 11 );
* // returns Infinity
*
* @example
* var x = ldexp( -Infinity, -118 );
* // returns -Infinity
*/function(t,e){var i,n;return 0===e||0===t||// handles +-0
Q(t)||tt(t)?t:(// Normalize the input fraction:
ez(t,eV,1,0),t=eV[0],// Extract the exponent from `frac` and add it to `exp`:
(e+=eV[1]+eN(t))<ew)?eM(0,t):e>ev?t<0?ti:te:(e<=e_?(e+=52,n=2220446049250313e-31):n=1,// Split the fraction into higher and lower order words:
eS.assign(t,eB,1,0),// Set the exponent bits to the new exponent:
i=2148532223&eB[0]|e+t2<<20,n*eu(i,eB[1]))};var eW={},eH={};// EXPORTS //
eH=// MAIN //
/**
* Returns a filled "generic" array.
*
* @param {*} value - fill value
* @param {NonNegativeInteger} len - array length
* @returns {Array} filled array
*
* @example
* var out = filled( 0.0, 3 );
* // returns [ 0.0, 0.0, 0.0 ]
*
* @example
* var out = filled( 'beep', 3 );
* // returns [ 'beep', 'beep', 'beep' ]
*/function(t,e){var i,n;for(n=0,// Manually push elements in order to ensure "fast" elements...
i=[];n<e;n++)i.push(t);return i};// VARIABLES //
/*
* Table of constants for `2/π` (`396` hex digits, `476` decimal).
*
* Integer array which contains the (`24*i`)-th to (`24*i+23`)-th bit of `2/π` after binary point. The corresponding floating value is
*
* ```tex
* \operatorname{ipio2}[i] \cdot 2^{-24(i+1)}
* ```
*
* This table must have at least `(e0-3)/24 + jk` terms. For quad precision (`e0 <= 16360`, `jk = 6`), this is `686`.
*/var ej=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],e$=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67// 0x3569F31D, 0x00000000
],eU=// EXPORTS //
(eW=// MAIN //
/**
* Returns a zero-filled "generic" array.
*
* @param {NonNegativeInteger} len - array length
* @returns {Array} output array
*
* @example
* var out = zeros( 3 );
* // returns [ 0.0, 0.0, 0.0 ]
*/function(t){return eH(0,t)})(20),eY=eW(20),eX=eW(20),eq=eW(20);// EXPORTS //
ex=// MAIN //
/**
* Returns the last three binary digits of `N` with `y = x - Nπ/2` so that `|y| < π/2`.
*
* ## Method
*
* -   The method is to compute the integer (`mod 8`) and fraction parts of `2x/π` without doing the full multiplication. In general, we skip the part of the product that is known to be a huge integer (more accurately, equals `0 mod 8` ). Thus, the number of operations is independent of the exponent of the input.
*
* @private
* @param {PositiveNumber} x - input value
* @param {(Array|TypedArray|Object)} y - remainder elements
* @param {PositiveInteger} e0 - the exponent of `x[0]` (must be <= 16360)
* @param {PositiveInteger} nx - dimension of `x[]`
* @returns {number} last three binary digits of `N`
*/function(t,e,i,n){var r,s,a,o,l,h,c;for(// Determine `jx`, `jv`, `q0` (note that `q0 < 3`):
a=n-1,(s=(i-3)/24|0)<0&&(s=0),o=i-24*(s+1),// Set up `F[0]` to `F[jx+jk]` where `F[jx+jk] = IPIO2[jv+jk]`:
h=s-a,c=a+4,l=0;l<=c;l++)h<0?eU[l]=0:eU[l]=ej[h],h+=1;// Compute `Q[0],Q[1],...,Q[jk]`:
for(l=0;l<=4;l++){for(h=0,r=0;h<=a;h++)r+=t[h]*eU[a+(l-h)];eY[l]=r}return(// FUNCTIONS //
/**
* Performs the computation for `kernelRempio2()`.
*
* @private
* @param {PositiveNumber} x - input value
* @param {(Array|TypedArray|Object)} y - output object for storing double precision numbers
* @param {integer} jz - number of terms of `ipio2[]` used
* @param {Array<integer>} q - array with integral values, representing the 24-bits chunk of the product of `x` and `2/π`
* @param {integer} q0 - the corresponding exponent of `q[0]` (the exponent for `q[i]` would be `q0-24*i`)
* @param {integer} jk - `jk+1` is the initial number of terms of `IPIO2[]` needed in the computation
* @param {integer} jv - index for pointing to the suitable `ipio2[]` for the computation
* @param {integer} jx - `nx - 1`
* @param {Array<number>} f - `IPIO2[]` in floating point
* @returns {number} last three binary digits of `N`
*/function t(e,i,n,r,s,a,o,l,h){var c,d,u,f,g,p,m,b;for(f=0,// Distill `q[]` into `IQ[]` in reverse order...
b=r[n],m=n;m>0;f++)d=5960464477539063e-23*b|0,eq[f]=b-16777216*d|0,b=r[m-1]+d,m-=1;// Case: q > 0.5
if(// Compute `n`...
b=ey(b,s),b-=8*t4(.125*b),p=0|b,b-=p,u=0,s>0?(p+=// Need `IQ[jz-1]` to determine `n`...
f=eq[n-1]>>24-s,eq[n-1]-=f<<24-s,u=eq[n-1]>>23-s):0===s?u=eq[n-1]>>23:b>=.5&&(u=2),u>0){// Compute `1-q`:
for(p+=1,c=0,f=0;f<n;f++)m=eq[f],0===c?0!==m&&(c=1,eq[f]=16777216-m):eq[f]=16777215-m;if(s>0)switch(s){case 1:eq[n-1]&=8388607;break;case 2:eq[n-1]&=4194303}2===u&&(b=1-b,0!==c&&(b-=ey(1,s)))}// Check if re-computation is needed...
if(0===b){for(m=0,f=n-1;f>=a;f--)m|=eq[f];if(0===m){// Need re-computation...
for(g=1;0===eq[a-g];g++);for(f=n+1;f<=n+g;f++){for(m=0,// Add `q[jz+1]` to `q[jz+k]`...
h[l+f]=ej[o+f],d=0;m<=l;m++)d+=e[m]*h[l+(f-m)];r[f]=d}return t(e,i,n+=g,r,s,a,o,l,h)}}// Chop off zero terms...
if(0===b)for(n-=1,s-=24;0===eq[n];)n-=1,s-=24;else// Break `z` into 24-bit if necessary...
(b=ey(b,-s))>=16777216?(d=5960464477539063e-23*b|0,eq[n]=b-16777216*d|0,s+=24,eq[n+=1]=d):eq[n]=0|b;for(// Convert integer "bit" chunk to floating-point value...
d=ey(1,s),f=n;f>=0;f--)r[f]=d*eq[f],d*=5960464477539063e-23;// Compute `PIO2[0,...,jp]*q[jz,...,0]`...
for(f=n;f>=0;f--){for(g=0,d=0;g<=a&&g<=n-f;g++)d+=e$[g]*r[f+g];eX[n-f]=d}for(// Compress `FQ[]` into `y[]`...
d=0,f=n;f>=0;f--)d+=eX[f];for(0===u?i[0]=d:i[0]=-d,d=eX[0]-d,f=1;f<=n;f++)d+=eX[f];return 0===u?i[1]=d:i[1]=-d,7&p}(t,e,4,eY,o,4,s,a,eU))};var eG={},eK={};// EXPORTS //
eK=Math.round,// EXPORTS //
eG=// MAIN //
/**
* Computes `x - nπ/2 = r` for medium-sized inputs.
*
* @private
* @param {number} x - input value
* @param {uint32} ix - high word of `x`
* @param {(Array|TypedArray|Object)} y - remainder elements
* @returns {integer} factor of `π/2`
*/function(t,e,i){var n,r,s,a,o;return n=eK(.6366197723675814*t),s=t-1.5707963267341256*n,a=6077100506506192e-26*n,// First rounding (good to 85 bits)...
o=e>>20|0,i[0]=s-a,o-(ts(i[0])>>20&2047)>16&&(s=(r=s)-(a=6077100506303966e-26*n),a=20222662487959506e-37*n-(r-s-a),i[0]=s-a,o-(ts(i[0])>>20&2047)>49&&(s=(r=s)-(a=20222662487111665e-37*n),a=84784276603689e-45*n-(r-s-a),i[0]=s-a)),i[1]=s-i[0]-a,n};var eZ=[0,0,0],eJ=[0,0];// EXPORTS //
er=// MAIN //
/**
* Computes `x - nπ/2 = r`.
*
* ## Notes
*
* -   Returns `n` and stores the remainder `r` as two numbers `y[0]` and `y[1]`, such that `y[0]+y[1] = r`.
*
* @param {number} x - input value
* @param {(Array|TypedArray|Object)} y - remainder elements
* @returns {integer} factor of `π/2`
*
* @example
* var y = [ 0.0, 0.0 ];
* var n = rempio2( 128.0, y );
* // returns 81
*
* var y1 = y[ 0 ];
* // returns ~0.765
*
* var y2 = y[ 1 ];
* // returns ~3.618e-17
*
* @example
* var y = [ 0.0, 0.0 ];
* var n = rempio2( NaN, y );
* // returns 0
*
* var y1 = y[ 0 ];
* // returns NaN
*
* var y2 = y[ 1 ];
* // returns NaN
*/function(t,e){var i,n,r,s,a,o,l;// Case: |x| ~<= π/4 (no need for reduction)
if((r=ts(t)&es|0)<=1072243195)return e[0]=t,e[1]=0,0;// Case: |x| ~<= 5π/4
if(r<=1074752122)return(// Case: |x| ~= π/2 or π
(r&eo)==598523?eG(t,r,e):r<=1073928572?t>0?(l=t-1.5707963267341256,e[0]=l-6077100506506192e-26,e[1]=l-e[0]-6077100506506192e-26,1):(l=t+1.5707963267341256,e[0]=l+6077100506506192e-26,e[1]=l-e[0]+6077100506506192e-26,-1):t>0?(l=t-3.1415926534682512,e[0]=l-12154201013012384e-26,e[1]=l-e[0]-12154201013012384e-26,2):(l=t+3.1415926534682512,e[0]=l+12154201013012384e-26,e[1]=l-e[0]+12154201013012384e-26,-2));// Case: |x| ~<= 9π/4
if(r<=1075594811)return(// Case: |x| ~<= 7π/4
r<=1075183036?// Case: |x| ~= 3π/2
1074977148===r?eG(t,r,e):t>0?(l=t-4.712388980202377,e[0]=l-18231301519518578e-26,e[1]=l-e[0]-18231301519518578e-26,3):(l=t+4.712388980202377,e[0]=l+18231301519518578e-26,e[1]=l-e[0]+18231301519518578e-26,-3):// Case: |x| ~= 4π/2
1075388923===r?eG(t,r,e):t>0?(l=t-6.2831853069365025,e[0]=l-2430840202602477e-25,e[1]=l-e[0]-2430840202602477e-25,4):(l=t+6.2831853069365025,e[0]=l+2430840202602477e-25,e[1]=l-e[0]+2430840202602477e-25,-4));// Case: |x| ~< 2^20*π/2 (medium size)
if(r<1094263291)return eG(t,r,e);// Case: x is NaN or infinity
if(r>=ea)return e[0]=NaN,e[1]=NaN,0;for(a=0,// Set z = scalbn(|x|, ilogb(x)-23)...
i=el(t),n=(r>>20)-1046,l=eu(r-(n<<20|0),i);a<2;a++)eZ[a]=0|l,l=(l-eZ[a])*16777216;for(eZ[2]=l,s=3;0===eZ[s-1];)s-=1;return(o=ex(eZ,eJ,n,s,1),t<0)?(e[0]=-eJ[0],e[1]=-eJ[1],-o):(e[0]=eJ[0],e[1]=eJ[1],o)};// VARIABLES //
// Scratch array for storing temporary values:
var eQ=[0,0];// WARNING: not thread safe
// EXPORTS //
t8=// MAIN //
/**
* Computes the cosine of a number.
*
* @param {number} x - input value (in radians)
* @returns {number} cosine
*
* @example
* var v = cos( 0.0 );
* // returns 1.0
*
* @example
* var v = cos( 3.141592653589793/4.0 );
* // returns ~0.707
*
* @example
* var v = cos( -3.141592653589793/6.0 );
* // returns ~0.866
*
* @example
* var v = cos( NaN );
* // returns NaN
*/function(t){var e;// Case: |x| ~< pi/4
if((e=2147483647&ts(t))<=1072243195)return(// Case: x < 2**-27
e<1044381696?1:et(t,0));// Case: cos(Inf or NaN) is NaN */
if(e>=2146435072)return NaN;switch(3&er(t,eQ)){case 0:return et(eQ[0],eQ[1]);case 1:return-en(eQ[0],eQ[1]);case 2:return-et(eQ[0],eQ[1]);default:return en(eQ[0],eQ[1])}};var e0={},e1=[0,0];// EXPORTS //
e0=// MAIN //
/**
* Computes the sine of a number.
*
* ## Method
*
* -   Let \\(S\\), \\(C\\), and \\(T\\) denote the \\(\sin\\), \\(\cos\\), and \\(\tan\\), respectively, on \\(\[-\pi/4, +\pi/4\]\\).
*
* -   Reduce the argument \\(x\\) to \\(y1+y2 = x-k\pi/2\\) in \\(\[-\pi/4, +\pi/4\]\\), and let \\(n = k \mod 4\\).
*
* -   We have
*
*     | n | sin(x) | cos(x) | tan(x) |
*     | - | ------ | ------ | ------ |
*     | 0 |   S    |   C    |    T   |
*     | 1 |   C    |  -S    |  -1/T  |
*     | 2 |  -S    |  -C    |    T   |
*     | 3 |  -C    |   S    |  -1/T  |
*
* @param {number} x - input value (in radians)
* @returns {number} sine
*
* @example
* var v = sin( 0.0 );
* // returns ~0.0
*
* @example
* var v = sin( 3.141592653589793/2.0 );
* // returns ~1.0
*
* @example
* var v = sin( -3.141592653589793/6.0 );
* // returns ~-0.5
*
* @example
* var v = sin( NaN );
* // returns NaN
*/function(t){var e;// Case: |x| ~< π/4
if((e=ts(t)&es)<=1072243195)return(// Case: |x| ~< 2^-26
e<1045430272?t:en(t,0));// Case: x is NaN or infinity
if(e>=ea)return NaN;switch(3&er(t,e1)){case 0:return en(e1[0],e1[1]);case 1:return et(e1[0],e1[1]);case 2:return-en(e1[0],e1[1]);default:return-et(e1[0],e1[1])}};var e2={};// EXPORTS //
e2=3.141592653589793,// EXPORTS //
t9=// MAIN //
/**
* Computes the value of `sin(πx)`.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = sinpi( 0.0 );
* // returns 0.0
*
* @example
* var y = sinpi( 0.5 );
* // returns 1.0
*
* @example
* var y = sinpi( 0.9 );
* // returns ~0.309
*
* @example
* var y = sinpi( NaN );
* // returns NaN
*/function(t){var e,i;return Q(t)||tt(t)?NaN:0===(e=tn(// Argument reduction (reduce to [0,2))...
i=t%2))||1===e?eM(0,i):e<.25?e0(e2*i):e<.75?eM(t8(e2*(e=.5-e)),i):e<1.25?(i=eM(1,i)-i,e0(e2*i)):e<1.75?(e-=1.5,-eM(t8(e2*e),i)):(i-=eM(2,i),e0(e2*i))};var e3={};// EXPORTS //
e3=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.06735230105312927:.06735230105312927+t*(.007385550860814029+t*(.0011927076318336207+t*(22086279071390839e-20+25214456545125733e-21*t)))};var e5={};// EXPORTS //
e5=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.020580808432516733:.020580808432516733+t*(.0028905138367341563+t*(5100697921535113e-19+t*(10801156724758394e-20+44864094961891516e-21*t)))};var e6={};// EXPORTS //
e6=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?1.3920053346762105:1.3920053346762105+t*(.7219355475671381+t*(.17193386563280308+t*(.01864591917156529+t*(7779424963818936e-19+7326684307446256e-21*t))))};var e4={};// EXPORTS //
e4=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.21498241596060885:.21498241596060885+t*(.325778796408931+t*(.14635047265246445+t*(.02664227030336386+t*(.0018402845140733772+3194753265841009e-20*t))))};var e7={};// EXPORTS //
e7=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.032788541075985965:-.032788541075985965+t*(.006100538702462913+t*(-.0014034646998923284+31563207090362595e-20*t))};var e9={};// EXPORTS //
e9=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.01797067508118204:.01797067508118204+t*(-.0036845201678113826+t*(881081882437654e-18+-.00031275416837512086*t))};var e8={};// EXPORTS //
e8=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.010314224129834144:-.010314224129834144+t*(.0022596478090061247+t*(-.0005385953053567405+3355291926355191e-19*t))};var it={};// EXPORTS //
it=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.6328270640250934:.6328270640250934+t*(1.4549225013723477+t*(.9777175279633727+t*(.22896372806469245+.013381091853678766*t)))};var ie={};// EXPORTS //
ie=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?2.4559779371304113:2.4559779371304113+t*(2.128489763798934+t*(.7692851504566728+t*(.10422264559336913+.003217092422824239*t)))};var ii={};// EXPORTS //
ii=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.08333333333333297:.08333333333333297+t*(-.0027777777772877554+t*(7936505586430196e-19+t*(-.00059518755745034+t*(8363399189962821e-19+-.0016309293409657527*t))))},// EXPORTS //
J=// MAIN //
/**
* Evaluates the natural logarithm of the gamma function.
*
* ## Method
*
* 1.  Argument reduction for \\(0 < x \leq 8\\). Since \\(\Gamma(1+s) = s \Gamma(s)\\), for \\(x \in \[0,8]\\), we may reduce \\(x\\) to a number in \\(\[1.5,2.5]\\) by
*
*     ```tex
*     \operatorname{lgamma}(1+s) = \ln(s) + \operatorname{lgamma}(s)
*     ```
*
*     For example,
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(7.3) &= \ln(6.3) + \operatorname{lgamma}(6.3) \\
*     &= \ln(6.3 \cdot 5.3) + \operatorname{lgamma}(5.3) \\
*     &= \ln(6.3 \cdot 5.3 \cdot 4.3 \cdot 3.3 \cdot2.3) + \operatorname{lgamma}(2.3)
*     \end{align*}
*     ```
*
* 2.  Compute a polynomial approximation of \\(\mathrm{lgamma}\\) around its minimum (\\(\mathrm{ymin} = 1.461632144968362245\\)) to maintain monotonicity. On the interval \\(\[\mathrm{ymin} - 0.23, \mathrm{ymin} + 0.27]\\) (i.e., \\(\[1.23164,1.73163]\\)), we let \\(z = x - \mathrm{ymin}\\) and use
*
*     ```tex
*     \operatorname{lgamma}(x) = -1.214862905358496078218 + z^2 \cdot \operatorname{poly}(z)
*     ```
*
*     where \\(\operatorname{poly}(z)\\) is a \\(14\\) degree polynomial.
*
* 3.  Compute a rational approximation in the primary interval \\(\[2,3]\\). Let \\( s = x - 2.0 \\). We can thus use the approximation
*
*     ```tex
*     \operatorname{lgamma}(x) = \frac{s}{2} + s\frac{\operatorname{P}(s)}{\operatorname{Q}(s)}
*     ```
*
*     with accuracy
*
*     ```tex
*     \biggl|\frac{\mathrm{P}}{\mathrm{Q}} - \biggr(\operatorname{lgamma}(x)-\frac{s}{2}\biggl)\biggl| < 2^{-61.71}
*     ```
*
*     The algorithms are based on the observation
*
*     ```tex
*     \operatorname{lgamma}(2+s) = s(1 - \gamma) + \frac{\zeta(2) - 1}{2} s^2 - \frac{\zeta(3) - 1}{3} s^3 + \ldots
*     ```
*
*     where \\(\zeta\\) is the zeta function and \\(\gamma = 0.5772156649...\\) is the Euler-Mascheroni constant, which is very close to \\(0.5\\).
*
* 4.  For \\(x \geq 8\\),
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr) \ln(x) - x + \frac{\ln(2\pi)}{2} + \frac{1}{12x} - \frac{1}{360x^3} + \ldots
*     ```
*
*     which can be expressed
*
*     ```tex
*     \operatorname{lgamma}(x) \approx \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)-\frac{\ln(2\pi)-1}{2} + \ldots
*     ```
*
*     Let \\(z = \frac{1}{x}\\). We can then use the approximation
*
*     ```tex
*     f(z) = \operatorname{lgamma}(x) - \biggl(x-\frac{1}{2}\biggr)(\ln(x)-1)
*     ```
*
*     by
*
*     ```tex
*     w = w_0 + w_1 z + w_2 z^3 + w_3 z^5 + \ldots + w_6 z^{11}
*     ```
*
*     where
*
*     ```tex
*     |w - f(z)| < 2^{-58.74}
*     ```
*
* 5.  For negative \\(x\\), since
*
*     ```tex
*     -x \Gamma(-x) \Gamma(x) = \frac{\pi}{\sin(\pi x)}
*     ```
*
*     where \\(\Gamma\\) is the gamma function, we have
*
*     ```tex
*     \Gamma(x) = \frac{\pi}{\sin(\pi x)(-x)\Gamma(-x)}
*     ```
*
*     Since \\(\Gamma(-x)\\) is positive,
*
*     ```tex
*     \operatorname{sign}(\Gamma(x)) = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     for \\(x < 0\\). Hence, for \\(x < 0\\),
*
*     ```tex
*     \mathrm{signgam} = \operatorname{sign}(\sin(\pi x))
*     ```
*
*     and
*
*     ```tex
*     \begin{align*}
*     \operatorname{lgamma}(x) &= \ln(|\Gamma(x)|) \\
*     &= \ln\biggl(\frac{\pi}{|x \sin(\pi x)|}\biggr) - \operatorname{lgamma}(-x)
*     \end{align*}
*     ```
*
*     <!-- <note> -->
*
*     Note that one should avoid computing \\(\pi (-x)\\) directly in the computation of \\(\sin(\pi (-x))\\).
*
*     <!-- </note> -->
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{lgamma}(2+s) &\approx s (1-\gamma) & \mathrm{for\ tiny\ s} \\
* \operatorname{lgamma}(x) &\approx -\ln(x) & \mathrm{for\ tiny\ x} \\
* \operatorname{lgamma}(1) &= 0 & \\
* \operatorname{lgamma}(2) &= 0 & \\
* \operatorname{lgamma}(0) &= \infty & \\
* \operatorname{lgamma}(\infty) &= \infty & \\
* \operatorname{lgamma}(-\mathrm{integer}) &= \pm \infty
* \end{align*}
* ```
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = gammaln( 1.0 );
* // returns 0.0
*
* @example
* var v = gammaln( 2.0 );
* // returns 0.0
*
* @example
* var v = gammaln( 4.0 );
* // returns ~1.792
*
* @example
* var v = gammaln( -0.5 );
* // returns ~1.266
*
* @example
* var v = gammaln( 0.5 );
* // returns ~0.572
*
* @example
* var v = gammaln( 0.0 );
* // returns Infinity
*
* @example
* var v = gammaln( NaN );
* // returns NaN
*/function(t){var e,i,n,r,s,a,o,l,h,c,d,u,f;// Special cases: NaN, +-infinity
if(Q(t)||tt(t))return t;// Special case: 0
if(0===t)return te;// If |x| < 2**-70, return -ln(|x|)
if(t<0?(e=!0,t=-t):e=!1,t<8470329472543003e-37)return-tr(t);if(e){// If |x| >= 2**52, must be -integer
if(t>=4503599627370496||0===(h=t9(t)))return te;i=tr(e2/tn(h*t))}// If x equals 1 or 2, return 0
if(1===t||2===t)return 0;// If x < 2, use lgamma(x) = lgamma(x+1) - log(x)
if(t<2)switch(t<=.9?(f=-tr(t),t>=.7316321449683623?(d=1-t,n=0):t>=.19163214496836223?(d=t-.46163214496836225,n=1):(d=t,n=2)):(f=0,t>=1.7316321449683623?(d=2-t,n=0):t>=1.1916321449683622?(d=t-1.4616321449683622,n=1):(d=t-1,n=2)),n){case 0:a=.07721566490153287+(u=d*d)*e3(u),f+=(o=d*a+(s=u*(.3224670334241136+u*e5(u))))-.5*d;break;case 1:a=.48383612272381005+(c=(u=d*d)*d)*e7(c),s=-.1475877229945939+c*e9(c),r=.06462494023913339+c*e8(c),f+=-.12148629053584961+(o=u*a-(-.000000000000000003638676997039505-c*(s+d*r)));break;case 2:a=d*(-.07721566490153287+d*it(d)),s=1+d*ie(d),f+=-.5*d+a/s}else if(t<8)switch(n=t6(t),o=(d=t-n)*(-.07721566490153287+d*e4(d)),l=1+d*e6(d),f=.5*d+o/l,u=1,n){case 7:u*=d+6;/* Falls through */case 6:u*=d+5;/* Falls through */case 5:u*=d+4;/* Falls through */case 4:u*=d+3;/* Falls through */case 3:u*=d+2,f+=tr(u)}else t<0x400000000000000?(h=tr(t),d=(u=1/t)*u,f=(t-.5)*(h-1)+(c=.4189385332046727+u*ii(d))):f=t*(tr(t)-1);return e&&(f=i-f),f};var ir={},is={};// EXPORTS //
is=// MAIN //
/**
* Tests if a finite double-precision floating-point number is an integer.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is an integer
*
* @example
* var bool = isInteger( 1.0 );
* // returns true
*
* @example
* var bool = isInteger( 3.14 );
* // returns false
*/function(t){return t4(t)===t};var ia={};// EXPORTS //
ia=// MAIN //
/**
* Tests if a double-precision floating-point numeric value is negative zero.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is negative zero
*
* @example
* var bool = isNegativeZero( -0.0 );
* // returns true
*
* @example
* var bool = isNegativeZero( 0.0 );
* // returns false
*/function(t){return 0===t&&1/t===ti};var io={},il={};// EXPORTS //
il=2.5066282746310007;var ih={},ic={},id={};// EXPORTS //
id=// MAIN //
/**
* Tests if a finite numeric value is an even number.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is an even number
*
* @example
* var bool = isEven( 5.0 );
* // returns false
*
* @example
* var bool = isEven( -2.0 );
* // returns true
*
* @example
* var bool = isEven( 0.0 );
* // returns true
*
* @example
* var bool = isEven( NaN );
* // returns false
*/function(t){return is(t/2)},// EXPORTS //
ic=// MAIN //
/**
* Tests if a finite numeric value is an odd number.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is an odd number
*
* @example
* var bool = isOdd( 5.0 );
* // returns true
*
* @example
* var bool = isOdd( -2.0 );
* // returns false
*
* @example
* var bool = isOdd( 0.0 );
* // returns false
*
* @example
* var bool = isOdd( NaN );
* // returns false
*/function(t){return(// Check sign to prevent overflow...
t>0?id(t-1):id(t+1))};var iu={};// EXPORTS //
iu=Math.sqrt;var ig={},ip={};// EXPORTS //
ip=!0===tL?0:1;// VARIABLES //
var im=new tS(1),ib=new ta(im.buffer);// EXPORTS //
ig=// MAIN //
/**
* Sets the less significant 32 bits of a double-precision floating-point number.
*
* ## Notes
*
* ```text
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* ```
*
* If little endian (more significant bits last):
*
* ```text
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
* ```
*
* If big endian (more significant bits first):
*
* ```text
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
* ```
*
* In which Uint32 can we find the lower order bits? If little endian, the first; if big endian, the second.
*
* ## References
*
* -   [Open Group][1]
*
* [1]: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*
* @param {number} x - double
* @param {uinteger32} low - unsigned 32-bit integer to replace the lower order word of `x`
* @returns {number} double having the same higher order word as `x`
*
* @example
* var low = 5 >>> 0; // => 00000000000000000000000000000101
*
* var x = 3.14e201; // => 0 11010011100 01001000001011000011 10010011110010110101100010000010
*
* var y = setLowWord( x, low ); // => 0 11010011100 01001000001011000011 00000000000000000000000000000101
* // returns 3.139998651394392e+201
*
* @example
* var PINF = require( '@stdlib/constants-float64-pinf' );
* var NINF = require( '@stdlib/constants-float64-ninf' );
*
* var low = 12345678;
*
* var y = setLowWord( PINF, low );
* // returns NaN
*
* y = setLowWord( NINF, low );
* // returns NaN
*
* y = setLowWord( NaN, low );
* // returns NaN
*/function(t,e){return im[0]=t,ib[ip]=e>>>0,im[0]};var ix={};// EXPORTS //
ix=// MAIN //
/**
* Converts an unsigned 32-bit integer to a signed 32-bit integer.
*
* @param {uinteger32} x - unsigned 32-bit integer
* @returns {integer32} signed 32-bit integer
*
* @example
* var float64ToUint32 = require( '@stdlib/number-float64-base-to-uint32' );
* var y = uint32ToInt32( float64ToUint32( 4294967295 ) );
* // returns -1
*
* @example
* var float64ToUint32 = require( '@stdlib/number-float64-base-to-uint32' );
* var y = uint32ToInt32( float64ToUint32( 3 ) );
* // returns 3
*/function(t){// NOTE: we could also use typed-arrays to achieve the same end.
return 0|t;// asm type annotation
};var iy={};// EXPORTS //
iy=// MAIN //
/**
* Evaluates the exponential function when \\(|x| = 0\\).
*
* @private
* @param {number} x - base
* @param {number} y - exponent
* @returns {number} function value
*
* @example
* var v = pow( 0.0, 2 );
* // returns 0.0
*
* @example
* var v = pow( -0.0, -9 );
* // returns -Infinity
*
* @example
* var v = pow( 0.0, -9 );
* // returns Infinity
*
* @example
* var v = pow( -0.0, 9 );
* // returns 0.0
*
* @example
* var v = pow( 0.0, -Infinity  );
* // returns Infinity
*
* @example
* var v = pow( 0.0, Infinity );
* // returns 0.0
*/function(t,e){return e===ti?te:e===te?0:e>0?ic(e)?t:0// handles +-0
:// y < 0.0
ic(e)?eM(te,t):te// handles +-0
};var iv={};// EXPORTS //
iv=// MAIN //
/**
* Evaluates the exponential function when \\(|y| > 2^64\\).
*
* @private
* @param {number} x - base
* @param {number} y - exponent
* @returns {number} overflow or underflow result
*
* @example
* var v = pow( 9.0, 3.6893488147419103e19 );
* // returns Infinity
*
* @example
* var v = pow( -3.14, -3.6893488147419103e19 );
* // returns 0.0
*/function(t,e){return(ts(t)&es)<=1072693247?e<0?Infinity:0:// `x` has a biased exponent greater than or equal to `0`...
e>0?Infinity:0};var i_={};// EXPORTS //
i_=// MAIN //
/**
* Evaluates the exponential function when \\( y = \pm \infty\\).
*
* @private
* @param {number} x - base
* @param {number} y - exponent
* @returns {number} function value
*
* @example
* var v = pow( -1.0, Infinity );
* // returns NaN
*
* @example
* var v = pow( -1.0, -Infinity  );
* // returns NaN
*
* @example
* var v = pow( 1.0, Infinity );
* // returns 1.0
*
* @example
* var v = pow( 1.0, -Infinity  );
* // returns 1.0
*
* @example
* var v = pow( 0.5, Infinity );
* // returns 0.0
*
* @example
* var v = pow( 0.5, -Infinity  );
* // returns Infinity
*
* @example
* var v = pow( 1.5, -Infinity  );
* // returns 0.0
*
* @example
* var v = pow( 1.5, Infinity );
* // returns Infinity
*/function(t,e){return -1===t?(t-t)/(t-t):1===t?1:1>tn(t)==(e===te)?0:te// signal NaN
};var iw={},iM={};// EXPORTS //
iM=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.5999999999999946:.5999999999999946+t*(.4285714285785502+t*(.33333332981837743+t*(.272728123808534+t*(.23066074577556175+.20697501780033842*t))))};var ik=[1,1.5],iS=[0,.5849624872207642// 0x3FE2B803, 0x40000000
],iP=[0,1350039202129749e-23// 0x3E4CFDEB, 0x43CFD006
];// EXPORTS //
iw=// MAIN //
/**
* Computes \\(\operatorname{log2}(ax)\\).
*
* @private
* @param {Array} out - output array
* @param {number} ax - absolute value of `x`
* @param {number} ahx - high word of `ax`
* @returns {Array} output array containing a tuple comprised of high and low parts
*
* @example
* var t = log2ax( [ 0.0, 0.0 ], 9.0, 1075970048 ); // => [ t1, t2 ]
* // returns [ 3.169923782348633, 0.0000012190936795504075 ]
*/function(t,e,i){var n,r,s,a,o,l,h,c,d,u,f,g,p,m,b,x,y,v,_,w,M;return _=0,i<1048576&&(e*=9007199254740992,_-=53,i=ts(e)),// Extract the unbiased exponent of `x`:
_+=(i>>20)-t2|0,// Normalize `ahx` by setting the (biased) exponent to `1023`:
i=1072693248|// Isolate the significand bits of `x`:
(w=1048575&i|0),w<=235662?M=0:w<767610?M=1:(M=0,_+=1,i-=1048576),n=(y=// Load the normalized high word into `|x|`:
(e=tJ(e,i))-// Compute `ss = hs + ls = (x-1)/(x+1)` or `(x-1.5)/(x+1.5)`:
(h=ik[M]))*(v=1/(e+h)),s=ig(n,0),l=e-((o=tJ(0,(i>>1|536870912)+524288+(M<<18)))-h),a=v*(y-s*o-s*l),x=// Compute `log(ax)`...
(r=n*n)*r*iM(r)+a*(s+n),o=3+(r=s*s)+x,l=x-((o=ig(o,0))-3-r),// 2/(3LN2) * (ss+...):
d=// u+v = ss*(1+...):
(y=s*o)+(v=a*o+l*n),u=v-((d=ig(d,0))-y),p=(f=.9617967009544373*d)+(g=-.000000007028461650952758*d+.9617966939259756*u+iP[M])+// log2(ax) = (ss+...)*2/(3*LN2) = n + dp + hz + lz
(c=iS[M])+(b=_),m=g-((p=ig(p,0))-b-c-f),t[0]=p,t[1]=m,t};var iC={},iD={};// EXPORTS //
iD=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.5:.5+t*(-.3333333333333333+.25*t)},// EXPORTS //
iC=// MAIN //
/**
* Computes \\(\operatorname{log}(x)\\) assuming \\(|1-x|\\) is small and using the approximation \\(x - x^2/2 + x^3/3 - x^4/4\\).
*
* @private
* @param {Array} out - output array
* @param {number} ax - absolute value of `x`
* @returns {Array} output array containing a tuple comprised of high and low parts
*
* @example
* var t = logx( [ 0.0, 0.0 ], 9.0 ); // => [ t1, t2 ]
* // returns [ -1265.7236328125, -0.0008163940840404393 ]
*/function(t,e){var i,n,r,s,a,o;return s=(r=e-1)*r*iD(r),n=(a=1.4426950216293335*r)+(o=19259629911266175e-24*r-1.4426950408889634*s),i=o-((n=ig(n,0))-a),t[0]=n,t[1]=i,t};var iA={},iO={};// EXPORTS //
iO=.6931471805599453;var iE={};// EXPORTS //
iE=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.16666666666666602:.16666666666666602+t*(-.0027777777777015593+t*(6613756321437934e-20+t*(-.0000016533902205465252+41381367970572385e-24*t)))},// EXPORTS //
iA=// MAIN //
/**
* Computes \\(2^{\mathrm{hp} + \mathrm{lp}\\).
*
* @private
* @param {number} j - high word of `hp + lp`
* @param {number} hp - first power summand
* @param {number} lp - second power summand
* @returns {number} function value
*
* @example
* var z = pow2( 1065961648, -0.3398475646972656, -0.000002438187359100815 );
* // returns ~0.79
*/function(t,e,i){var n,r,s,a,o,l,h,c,d;return d=((c=t&es|0)>>20)-t2|0,h=0,c>1071644672&&(d=(((h=t+(1048576>>d+1)>>>0)&es)>>20)-t2|0,r=tJ(0,(h&~(eo>>d))>>>0),h=(h&eo|1048576)>>20-d>>>0,t<0&&(h=-h),e-=r),l=(s=.6931471824645996*(r=ig(r=i+e,0)))+(a=(i-(r-e))*iO+-.000000001904654299957768*r),o=a-(l-s),r=l*l,n=l-r*iE(r),t=ts(l=1-(l*n/(n-2)-(o+l*o)-l)),l=(t=ix(t)+(h<<20>>>0))>>20<=0?ey(l,h):tJ(l,t)};// High/low words workspace:
var iT=[0,0],iL=[0,0];// EXPORTS //
ih=// MAIN //
/**
* Evaluates the exponential function.
*
* ## Method
*
* 1.  Let \\(x = 2^n (1+f)\\).
*
* 2.  Compute \\(\operatorname{log2}(x)\\) as
*
*     ```tex
*     \operatorname{log2}(x) = w_1 + w_2
*     ```
*
*     where \\(w_1\\) has \\(53 - 24 = 29\\) bit trailing zeros.
*
* 3.  Compute
*
*     ```tex
*     y \cdot \operatorname{log2}(x) = n + y^\prime
*     ```
*
*     by simulating multi-precision arithmetic, where \\(|y^\prime| \leq 0.5\\).
*
* 4.  Return
*
*     ```tex
*     x^y = 2^n e^{y^\prime \cdot \mathrm{log2}}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* x^{\mathrm{NaN}} &= \mathrm{NaN} & \\
* (\mathrm{NaN})^y &= \mathrm{NaN} & \\
* 1^y &= 1 & \\
* x^0 &= 1 & \\
* x^1 &= x & \\
* (\pm 0)^\infty &= +0 & \\
* (\pm 0)^{-\infty} &= +\infty & \\
* (+0)^y &= +0 & \mathrm{if}\ y > 0 \\
* (+0)^y &= +\infty & \mathrm{if}\ y < 0 \\
* (-0)^y &= -\infty & \mathrm{if}\ y\ \mathrm{is\ an\ odd\ integer\ and}\ y < 0 \\
* (-0)^y &= +\infty & \mathrm{if}\ y\ \mathrm{is\ not\ an\ odd\ integer\ and}\ y < 0 \\
* (-0)^y &= -0 & \mathrm{if}\ y\ \mathrm{is\ an\ odd\ integer\ and}\ y > 0 \\
* (-0)^y &= +0 & \mathrm{if}\ y\ \mathrm{is\ not\ an\ odd\ integer\ and}\ y > 0 \\
* (-1)^{\pm\infty} &= \mathrm{NaN} & \\
* x^{\infty} &= +\infty & |x| > 1 \\
* x^{\infty} &= +0 & |x| < 1 \\
* x^{-\infty} &= +0 & |x| > 1 \\
* x^{-\infty} &= +\infty & |x| < 1 \\
* (-\infty)^y &= (-0)^y & \\
* \infty^y &= +0 & y < 0 \\
* \infty^y &= +\infty & y > 0 \\
* x^y &= \mathrm{NaN} & \mathrm{if}\ y\ \mathrm{is\ not\ a\ finite\ integer\ and}\ x < 0
* \end{align*}
* ```
*
* ## Notes
*
* -   \\(\operatorname{pow}(x,y)\\) returns \\(x^y\\) nearly rounded. In particular, \\(\operatorname{pow}(<\mathrm{integer}>,<\mathrm{integer}>)\\) **always** returns the correct integer, provided the value is representable.
* -   The hexadecimal values shown in the source code are the intended values for used constants. Decimal values may be used, provided the compiler will accurately convert decimal to binary in order to produce the hexadecimal values.
*
* @param {number} x - base
* @param {number} y - exponent
* @returns {number} function value
*
* @example
* var v = pow( 2.0, 3.0 );
* // returns 8.0
*
* @example
* var v = pow( 4.0, 0.5 );
* // returns 2.0
*
* @example
* var v = pow( 100.0, 0.0 );
* // returns 1.0
*
* @example
* var v = pow( 3.141592653589793, 5.0 );
* // returns ~306.0197
*
* @example
* var v = pow( 3.141592653589793, -0.2 );
* // returns ~0.7954
*
* @example
* var v = pow( NaN, 3.0 );
* // returns NaN
*
* @example
* var v = pow( 5.0, NaN );
* // returns NaN
*
* @example
* var v = pow( NaN, NaN );
* // returns NaN
*/function t(e,i){var n,r,s,a,o,l,h,c,d,u,f,g,p,m;if(Q(e)||Q(i))return NaN;// Special cases `y`...
if(// Split `y` into high and low words:
eS.assign(i,iT,1,0),o=iT[0],0===iT[1]){if(0===i)return 1;if(1===i)return e;if(-1===i)return 1/e;if(.5===i)return iu(e);if(-.5===i)return 1/iu(e);if(2===i)return e*e;if(3===i)return e*e*e;if(4===i)return(e*=e)*e;if(tt(i))return i_(e,i)}// Special cases `x`...
if(// Split `x` into high and low words:
eS.assign(e,iT,1,0),a=iT[0],0===iT[1]){if(0===a)return iy(e,i);if(1===e)return 1;if(-1===e&&ic(i))return -1;if(tt(e))return e===ti?t(-0,-i):i<0?0:te}if(e<0&&!1===is(i))return(e-e)/(e-e);// Case 1: `|y|` is huge...
// |y| > 2^31
if(s=tn(e),// Remove the sign bits (i.e., get absolute values):
n=a&es|0,r=o&es|0,// Extract the sign bits:
l=a>>>31|0,h=o>>>31|0,l=l&&ic(i)?-1:1,r>1105199104){// `|y| > 2^64`, then must over- or underflow...
if(r>1139802112)return iv(e,i);// Over- or underflow if `x` is not close to unity...
if(n<1072693247)return(// y < 0
1===h?Infinity*l:0*l);if(n>1072693248)return(// y > 0
0===h?Infinity*l:0*l);// At this point, `|1-x|` is tiny (`<= 2^-20`). Suffice to compute `log(x)` by `x - x^2/2 + x^3/3 - x^4/4`.
f=iC(iL,s)}else f=iw(iL,s,n);// z >= 1024
if(// Split `y` into `y1 + y2` and compute `(y1+y2) * (t1+t2)`...
c=ig(i,0),g=(u=(i-c)*f[0]+i*f[1])+(d=c*f[0]),// Note: *can* be more performant to use `getHighWord` and `getLowWord` directly, but using `toWords` looks cleaner.
eS.assign(g,iT,1,0),p=ix(iT[0]),m=ix(iT[1]),p>=1083179008)// z > 1024
{if((p-1083179008|m)!=0||u+8008566259537294e-32>g-d)return Infinity*l}else if((p&es)>=1083231232&&((p-3230714880|m)!=0||u<=g-d))return 0*l;return l*// Compute `2^(hp+lp)`...
(g=iA(p,d,u))};var iI={},iR={},iF={};// EXPORTS //
iF=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.16666666666666602:.16666666666666602+t*(-.0027777777777015593+t*(6613756321437934e-20+t*(-.0000016533902205465252+41381367970572385e-24*t)))},// EXPORTS //
iR=// MAIN //
/**
* Computes \\(e^{r} 2^k\\) where \\(r = \mathrm{hi} - \mathrm{lo}\\) and \\(|r| \leq \ln(2)/2\\).
*
* @private
* @param {number} hi - upper bound
* @param {number} lo - lower bound
* @param {integer} k - power of 2
* @returns {number} function value
*/function(t,e,i){var n,r,s;return r=(n=t-e)*n,s=n-r*iF(r),ey(1-(e-n*s/(2-s)-t),i)};var iz=1/268435456,iN=-1/268435456;// 2^-28
// EXPORTS //
iI=// MAIN //
/**
* Evaluates the natural exponential function.
*
* ## Method
*
* 1.  We reduce \\( x \\) to an \\( r \\) so that \\( |r| \leq 0.5 \cdot \ln(2) \approx 0.34658 \\). Given \\( x \\), we find an \\( r \\) and integer \\( k \\) such that
*
*     ```tex
*     \begin{align*}
*     x &= k \cdot \ln(2) + r \\
*     |r| &\leq 0.5 \cdot \ln(2)
*     \end{align*}
*     ```
*
*     <!-- <note> -->
*
*     \\( r \\) can be represented as \\( r = \mathrm{hi} - \mathrm{lo} \\) for better accuracy.
*
*     <!-- </note> -->
*
* 2.  We approximate of \\( e^{r} \\) by a special rational function on the interval \\(\[0,0.34658]\\):
*
*     ```tex
*     \begin{align*}
*     R\left(r^2\right) &= r \cdot \frac{ e^{r}+1 }{ e^{r}-1 } \\
*     &= 2 + \frac{r^2}{6} - \frac{r^4}{360} + \ldots
*     \end{align*}
*     ```
*
*     We use a special Remes algorithm on \\(\[0,0.34658]\\) to generate a polynomial of degree \\(5\\) to approximate \\(R\\). The maximum error of this polynomial approximation is bounded by \\(2^{-59}\\). In other words,
*
*     ```tex
*     R(z) \sim 2 + P_1 z + P_2 z^2 + P_3 z^3 + P_4 z^4 + P_5 z^5
*     ```
*
*     where \\( z = r^2 \\) and
*
*     ```tex
*     \left|  2 + P_1 z + \ldots + P_5 z^5  - R(z) \right| \leq 2^{-59}
*     ```
*
*     <!-- <note> -->
*
*     The values of \\( P_1 \\) to \\( P_5 \\) are listed in the source code.
*
*     <!-- </note> -->
*
*     The computation of \\( e^{r} \\) thus becomes
*
*     ```tex
*     \begin{align*}
*     e^{r} &= 1 + \frac{2r}{R-r} \\
*           &= 1 + r + \frac{r \cdot R_1(r)}{2 - R_1(r)}\ \text{for better accuracy}
*     \end{align*}
*     ```
*
*     where
*
*     ```tex
*     R_1(r) = r - P_1\ r^2 + P_2\ r^4 + \ldots + P_5\ r^{10}
*     ```
*
* 3.  We scale back to obtain \\( e^{x} \\). From step 1, we have
*
*     ```tex
*     e^{x} = 2^k e^{r}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* e^\infty &= \infty \\
* e^{-\infty} &= 0 \\
* e^{\mathrm{NaN}} &= \mathrm{NaN} \\
* e^0 &= 1\ \mathrm{is\ exact\ for\ finite\ argument\ only}
* \end{align*}
* ```
*
* ## Notes
*
* -   According to an error analysis, the error is always less than \\(1\\) ulp (unit in the last place).
*
* -   For an IEEE double,
*
*     -   if \\(x > 7.09782712893383973096\mbox{e+}02\\), then \\(e^{x}\\) overflows
*     -   if \\(x < -7.45133219101941108420\mbox{e+}02\\), then \\(e^{x}\\) underflows
*
* -   The hexadecimal values included in the source code are the intended ones for the used constants. Decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the intended hexadecimal values.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = exp( 4.0 );
* // returns ~54.5982
*
* @example
* var v = exp( -9.0 );
* // returns ~1.234e-4
*
* @example
* var v = exp( 0.0 );
* // returns 1.0
*
* @example
* var v = exp( NaN );
* // returns NaN
*/function(t){var e;return Q(t)||t===te?t:t===ti?0:t>709.782712893384?te:t<-745.1332191019411?0:t>iN&&t<iz?1+t:(e=t<0?t6(1.4426950408889634*t-.5):t6(1.4426950408889634*t+.5),iR(t-.6931471803691238*e,19082149292705877e-26*e,e))};var iV={};// EXPORTS //
iV=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.08333333333334822:.08333333333334822+t*(.0034722222160545866+t*(-.0026813261780578124+t*(-.00022954996161337813+7873113957930937e-19*t)))},// EXPORTS //
io=// MAIN //
/**
* Evaluates the gamma function using Stirling's formula. The polynomial is valid for \\(33 \leq x \leq 172\\).
*
* @private
* @param {number} x - input value
* @returns {number} function value
*/function(t){var e,i,n;return e=1+(e=1/t)*iV(e),i=iI(t),i=t>143.01608?(n=ih(t,.5*t-.25))*(n/i):ih(t,t-.5)/i,il*i*e};var iB={},iW={};// EXPORTS //
iW=.5772156649015329,// EXPORTS //
iB=// MAIN //
/**
* Evaluates the gamma function using a small-value approximation.
*
* @private
* @param {number} x - input value
* @param {number} z - scale factor
* @returns {number} function value
*/function(t,e){return e/((1+iW*t)*t)};var iH={};// EXPORTS //
iH=// MAIN //
/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/function(t){var e,i;return 0===t?1:((t<0?-t:t)<=1?(e=1+t*(.4942148268014971+t*(.20744822764843598+t*(.04763678004571372+t*(.010421379756176158+t*(.0011913514700658638+t*(16011952247675185e-20+0*t)))))),i=1+t*(.0714304917030273+t*(-.23459179571824335+t*(.035823639860549865+t*(.011813978522206043+t*(-.004456419138517973+t*(5396055804933034e-19+-.000023158187332412014*t))))))):(e=0+(t=1/t)*(16011952247675185e-20+t*(.0011913514700658638+t*(.010421379756176158+t*(.04763678004571372+t*(.20744822764843598+t*(.4942148268014971+1*t)))))),i=-.000023158187332412014+t*(5396055804933034e-19+t*(-.004456419138517973+t*(.011813978522206043+t*(.035823639860549865+t*(-.23459179571824335+t*(.0714304917030273+1*t))))))),e/i)},// EXPORTS //
ir=// MAIN //
/**
* Evaluates the gamma function.
*
* ## Method
*
* 1.  Arguments \\(|x| \leq 34\\) are reduced by recurrence and the function approximated by a rational function of degree \\(6/7\\) in the interval \\((2,3)\\).
* 2.  Large negative arguments are made positive using a reflection formula.
* 3.  Large arguments are handled by Stirling's formula.
*
* ## Notes
*
* -   Relative error:
*
*     | arithmetic | domain    | # trials | peak    | rms     |
*     |:----------:|:---------:|:--------:|:-------:|:-------:|
*     | DEC        | -34,34    | 10000    | 1.3e-16 | 2.5e-17 |
*     | IEEE       | -170,-33  | 20000    | 2.3e-15 | 3.3e-16 |
*     | IEEE       | -33, 33   | 20000    | 9.4e-16 | 2.2e-16 |
*     | IEEE       | 33, 171.6 | 20000    | 2.3e-15 | 3.2e-16 |
*
* -   Error for arguments outside the test range will be larger owing to error amplification by the exponential function.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = gamma( 4.0 );
* // returns 6.0
*
* @example
* var v = gamma( -1.5 );
* // returns ~2.363
*
* @example
* var v = gamma( -0.5 );
* // returns ~-3.545
*
* @example
* var v = gamma( 0.5 );
* // returns ~1.772
*
* @example
* var v = gamma( 0.0 );
* // returns Infinity
*
* @example
* var v = gamma( -0.0 );
* // returns -Infinity
*
* @example
* var v = gamma( NaN );
* // returns NaN
*/function(t){var e,i,n,r;if(is(t)&&t<0||t===ti||Q(t))return NaN;if(0===t)return ia(t)?ti:te;if(t>171.61447887182297)return te;if(t<-170.5674972726612)return 0;if((i=tn(t))>33)return t>=0?io(t):(e=(1&(n=t4(i)))==0?-1:1,(r=i-n)>.5&&(n+=1,r=i-n),r=i*e0(e2*r),e*e2/(tn(r)*io(i)));for(// Reduce `x`...
r=1;t>=3;)t-=1,r*=t;for(;t<0;){if(t>-.000000001)return iB(t,r);r/=t,t+=1}for(;t<2;){if(t<1e-9)return iB(t,r);r/=t,t+=1}return 2===t?r:(t-=2,r*iH(t))};var ij={};// EXPORTS //
ij=14901161193847656e-24;var i$={};// EXPORTS //
i$=17976931348623157e292;var iU={};// EXPORTS //
iU=709.782712893384;var iY={};// EXPORTS //
iY=// MAIN //
/**
* Calculates normalized Q when a is an integer.
*
* @private
* @param {integer} a - function parameter
* @param {number} x - function parameter
* @returns {number} upper gamma fraction
*/function(t,e){var i,n,r;if(0!==(n=iI(-e)))for(r=1,i=n;r<t;++r)i/=r,i*=e,n+=i;return n};var iX={},iq={},iG={};// EXPORTS //
iG=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.3250421072470015:-.3250421072470015+t*(-.02848174957559851+t*(-.005770270296489442+-.000023763016656650163*t))};var iK={};// EXPORTS //
iK=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(13249473800432164e-20+-.000003960228278775368*t)))};var iZ={};// EXPORTS //
iZ=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.41485611868374833:.41485611868374833+t*(-.3722078760357013+t*(.31834661990116175+t*(-.11089469428239668+t*(.035478304325618236+-.002166375594868791*t))))};var iJ={};// EXPORTS //
iJ=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))};var iQ={};// EXPORTS //
iQ=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.6938585727071818:-.6938585727071818+t*(-10.558626225323291+t*(-62.375332450326006+t*(-162.39666946257347+t*(-184.60509290671104+t*(-81.2874355063066+-9.814329344169145*t)))))};var i0={};// EXPORTS //
i0=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))};var i1={};// EXPORTS //
i1=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.799283237680523:-.799283237680523+t*(-17.757954917754752+t*(-160.63638485582192+t*(-637.5664433683896+t*(-1025.0951316110772+-483.5191916086514*t))))};var i2={};// EXPORTS //
i2=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))},// EXPORTS //
iq=// MAIN //
/**
* Evaluates the complementary error function.
*
* ```tex
* \operatorname{erf}(x) = \frac{2}{\sqrt{\pi}} \int^{x}_{0} e^{-t^2}\ \mathrm{dt}
* ```
*
* Note that
*
* ```tex
* \begin{align*}
* \operatorname{erfc}(x) &= 1 - \operatorname{erf}(x) \\
* \operatorname{erf}(-x) &= -\operatorname{erf}(x) \\
* \operatorname{erfc}(-x) &= 2 - \operatorname{erfc}(x)
* \end{align*}
* ```
*
* ## Method
*
* 1.  For \\(|x| \in [0, 0.84375)\\),
*
*     ```tex
*     \operatorname{erf}(x) = x + x \cdot \operatorname{R}(x^2)
*     ```
*
*     and
*
*     ```tex
*     \operatorname{erfc}(x) = \begin{cases}
*     1 - \operatorname{erf}(x) & \textrm{if}\ x \in (-.84375,0.25) \\
*     0.5 + ((0.5-x)-x \mathrm{R}) & \textrm{if}\ x \in [0.25,0.84375)
*     \end{cases}
*     ```
*
*     where \\(R = P/Q\\) and where \\(P\\) is an odd polynomial of degree \\(8\\) and \\(Q\\) is an odd polynomial of degree \\(10\\).
*
*     ```tex
*     \biggl| \mathrm{R} - \frac{\operatorname{erf}(x)-x}{x} \biggr| \leq 2^{-57.90}
*     ```
*
*     <!-- <note> -->
*
*     The formula is derived by noting
*
*     ```tex
*     \operatorname{erf}(x) = \frac{2}{\sqrt{\pi}}\biggl(x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \ldots \biggr)
*     ```
*
*     and that
*
*     ```tex
*     \frac{2}{\sqrt{\pi}} = 1.128379167095512573896158903121545171688
*     ```
*
*     is close to unity. The interval is chosen because the fix point of \\(\operatorname{erf}(x)\\) is near \\(0.6174\\) (i.e., \\(\operatorname{erf(x)} = x\\) when \\(x\\) is near \\(0.6174\\)), and, by some experiment, \\(0.84375\\) is chosen to guarantee the error is less than one ulp for \\(\operatorname{erf}(x)\\).
*
*     <!-- </note> -->
*
* 2.  For \\(|x| \in [0.84375,1.25)\\), let \\(s = |x|-1\\), and \\(c = 0.84506291151\\) rounded to single (\\(24\\) bits)
*
*     ```tex
*     \operatorname{erf}(x) = \operatorname{sign}(x) \cdot \biggl(c + \frac{\operatorname{P1}(s)}{\operatorname{Q1}(s)}\biggr)
*     ```
*
*     and
*
*     ```tex
*     \operatorname{erfc}(x) = \begin{cases}
*     (1-c) - \frac{\operatorname{P1}(s)}{\operatorname{Q1}(s)} & \textrm{if}\ x > 0 \\
*     1 + \biggl(c + \frac{\operatorname{P1}(s)}{\operatorname{Q1}(s)}\biggr) & \textrm{if}\ x < 0
*     \end{cases}
*     ```
*
*     where
*
*     ```tex
*     \biggl|\frac{\mathrm{P1}}{\mathrm{Q1}} - (\operatorname{erf}(|x|)-c)\biggr| \leq 2^{-59.06}
*     ```
*
*     <!-- <note> -->
*
*     Here, we use the Taylor series expansion at \\(x = 1\\)
*
*     ```tex
*     \begin{align*}
*     \operatorname{erf}(1+s) &= \operatorname{erf}(1) + s\cdot \operatorname{poly}(s) \\
*     &= 0.845.. + \frac{\operatorname{P1}(s)}{\operatorname{Q1}(s)}
*     \end{align*}
*     ```
*
*     using a rational approximation to approximate
*
*     ```tex
*     \operatorname{erf}(1+s) - (c = (\mathrm{single})0.84506291151)
*     ```
*
*     <!-- </note> -->
*
*     Note that, for \\(x \in [0.84375,1.25)\\), \\(|\mathrm{P1}/\mathrm{Q1}| < 0.078\\), where
*
*     -   \\(\operatorname{P1}(s)\\) is a degree \\(6\\) polynomial in \\(s\\)
*     -   \\(\operatorname{Q1}(s)\\) is a degree \\(6\\) polynomial in \\(s\\)
*
* 3.  For \\(x \in [1.25,1/0.35)\\),
*
*     ```tex
*     \begin{align*}
*     \operatorname{erfc}(x) &= \frac{1}{x}e^{-x^2-0.5625+(\mathrm{R1}/\mathrm{S1})} \\
*     \operatorname{erf}(x) &= 1 - \operatorname{erfc}(x)
*     \end{align*}
*     ```
*
*     where
*
*     -   \\(\operatorname{R1}(z)\\) is a degree \\(7\\) polynomial in \\(z\\), where \\(z = 1/x^2\\)
*     -   \\(\operatorname{S1}(z)\\) is a degree \\(8\\) polynomial in \\(z\\)
*
* 4.  For \\(x \in [1/0.35,28)\\),
*
*     ```tex
*     \operatorname{erfc}(x) = \begin{cases}
*     \frac{1}{x} e^{-x^2-0.5625+(\mathrm{R2}/\mathrm{S2})} & \textrm{if}\ x > 0 \\
*     2.0 - \frac{1}{x} e^{-x^2-0.5625+(\mathrm{R2}/\mathrm{S2})} & \textrm{if}\ -6 < x < 0 \\
*     2.0 - \mathrm{tiny} & \textrm{if}\ x \leq -6
*     \end{cases}
*     ```
*
*     and
*
*     ```tex
*     \operatorname{erf}(x) = \begin{cases}
*     \operatorname{sign}(x) \cdot (1.0 - \operatorname{erfc}(x)) & \textrm{if}\ x < 6 \\
*     \operatorname{sign}(x) \cdot (1.0 - \mathrm{tiny}) & \textrm{otherwise}
*     \end{cases}
*     ```
*
*     where
*
*     -   \\(\operatorname{R2}(z)\\) is a degree \\(6\\) polynomial in \\(z\\), where \\(z = 1/x^2\\)
*     -   \\(\operatorname{S2}(z)\\) is a degree \\(7\\) polynomial in \\(z\\)
*
* 5.  For \\(x \in [28, \infty)\\),
*
*     ```tex
*     \begin{align*}
*     \operatorname{erf}(x) &= \operatorname{sign}(x) \cdot (1 - \mathrm{tiny}) & \textrm{(raise inexact)}
*     \end{align*}
*     ```
*
*     and
*
*     ```tex
*     \operatorname{erfc}(x) = \begin{cases}
*     \mathrm{tiny} \cdot \mathrm{tiny} & \textrm{if}\ x > 0\ \textrm{(raise underflow)} \\
*     2 - \mathrm{tiny} & \textrm{if}\ x < 0
*     \end{cases}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{erf}(0) &= 0 \\
* \operatorname{erf}(-0) &= -0 \\
* \operatorname{erf}(\infty) &= 1 \\
* \operatorname{erf}(-\infty) &= -1 \\
* \operatorname{erfc}(0) &= 1 \\
* \operatorname{erfc}(\infty) &= 0 \\
* \operatorname{erfc}(-\infty) &= 2 \\
* \operatorname{erf}(\mathrm{NaN}) &= \mathrm{NaN} \\
* \operatorname{erfc}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
* ## Notes
*
* -   To compute \\(\exp(-x^2-0.5625+(\mathrm{R}/\mathrm{S}))\\), let \\(s\\) be a single precision number and \\(s := x\\); then
*
*     ```tex
*     -x^2 = -s^2 + (s-x)(s+x)
*     ```
*
*     and
*
*     ```tex
*     e^{-x^2-0.5626+(\mathrm{R}/\mathrm{S})} = e^{-s^2-0.5625} e^{(s-x)(s+x)+(\mathrm{R}/\mathrm{S})}
*     ```
*
* -   `#4` and `#5` make use of the asymptotic series
*
*     ```tex
*     \operatorname{erfc}(x) \approx \frac{e^{-x^2}}{x\sqrt{\pi}} (1 + \operatorname{poly}(1/x^2))
*     ```
*
*     We use a rational approximation to approximate
*
*     ```tex
*     g(s) = f(1/x^2) = \ln(\operatorname{erfc}(x) \cdot x) - x^2 + 0.5625
*     ```
*
* -   The error bound for \\(\mathrm{R1}/\mathrm{S1}\\) is
*
*     ```tex
*     |\mathrm{R1}/\mathrm{S1} - f(x)| < 2^{-62.57}
*     ```
*
*     and for \\(\mathrm{R2}/\mathrm{S2}\\) is
*
*     ```tex
*     |\mathrm{R2}/\mathrm{S2} - f(x)| < 2^{-61.52}
*     ```
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var y = erfc( 2.0 );
* // returns ~0.0047
*
* @example
* var y = erfc( -1.0 );
* // returns ~1.8427
*
* @example
* var y = erfc( 0.0 );
* // returns 1.0
*
* @example
* var y = erfc( Infinity );
* // returns 0.0
*
* @example
* var y = erfc( -Infinity );
* // returns 2.0
*
* @example
* var y = erfc( NaN );
* // returns NaN
*/function(t){var e,i,n,r,s,a,o,l;// Special case: NaN
if(Q(t))return NaN;// Special case: +infinity
if(t===te)return 0;// Special case: -infinity
if(t===ti)return 2;// Special case: +-0
if(0===t)return 1;// |x| < 0.84375
if(t<0?(e=!0,i=-t):(e=!1,i=t),i<.84375)return i<13877787807814457e-33?1-t:(a=(r=.12837916709551256+(n=t*t)*iG(n))/(s=1+n*iK(n)),t<.25)?1-(t+t*a):.5-(r=t*a+(t-.5))// raise inexact
;// 0.84375 <= |x| < 1.25
if(i<1.25)return(o=-.0023621185607526594+(s=i-1)*iZ(s),l=1+s*iJ(s),e)?1.8450629115104675+o/l:.15493708848953247-o/l;// |x| < 28
if(i<28){// |x| < 1/0.35 ~ 2.857143
if(s=1/(i*i),i<2.857142857142857)r=-.009864944034847148+s*iQ(s),s=1+s*i0(s);else{// x < -6
if(t<-6)return 2;// raise inexact
r=-.0098649429247001+s*i1(s),s=1+s*i2(s)}return(n=ig(i,0),r=iI(-(n*n)-.5625)*iI((n-i)*(n+i)+r/s),e)?2-r/i:r/i}return e?2:0// raise inexact; ~2
},// EXPORTS //
iX=// MAIN //
/**
* Calculates normalized Q when a is a half-integer.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {number} upper gamma fraction
*/function(t,e){var i,n,r,s;if(0!==(r=iq(iu(e)))&&t>1){for(n=i=iI(-e)/iu(e2*e)*e/.5,s=2;s<t;++s)i/=s-.5,i*=e,n+=i;r+=n}return r};var i3={},i5={};// EXPORTS //
i5=-708.3964185322641,// EXPORTS //
i3=// MAIN //
/**
* Calculates the power term prefix `(z^a)(e^-z)` used in the non-normalized incomplete gammas.
*
* @private
* @param {number} a - function parameter
* @param {number} z - function parameter
* @returns {number} power term prefix
*/function(t,e){var i;return i=t*tr(e),e>=1?i<iU&&-e>i5?ih(e,t)*iI(-e):t>=1?ih(e/iI(e/t),t):iI(i-e):i>i5?ih(e,t)*iI(-e):e/t<iU?ih(e/iI(e/t),t):iI(i-e)};var i6={},i4={},i7={};// EXPORTS //
i7=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param {NumericArray} c - polynomial coefficients sorted in ascending degree
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*
* @example
* var v = evalpoly( [3.0,2.0,1.0], 10.0 ); // 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*/function(t,e){var i,n;if((n=t.length)<2||0===e)return 0===n?0:t[0];for(n-=1,i=t[n]*e+t[n-1],n-=2;n>=0;)i=i*e+t[n],n-=1;return i};var i9={},i8={};// EXPORTS //
i8=Function,// EXPORTS //
i9=// MAIN //
/**
* Generates a function for evaluating a polynomial.
*
* ## Notes
*
* -   The compiled function uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @param {NumericArray} c - polynomial coefficients sorted in ascending degree
* @returns {Function} function for evaluating a polynomial
*
* @example
* var polyval = factory( [3.0,2.0,1.0] );
*
* var v = polyval( 10.0 ); // => 3*10^0 + 2*10^1 + 1*10^2
* // returns 123.0
*
* v = polyval( 5.0 ); // => 3*5^0 + 2*5^1 + 1*5^2
* // returns 38.0
*/function(t){var e,i,n,r;// Avoid exceeding the maximum stack size on V8 :(. Note that the choice of `500` was empirically determined...
if(t.length>500)return(/*
	*    function evalpoly( x ) {
	*        if ( x === 0.0 ) {
	*            return c[ 0 ];
	*        }
	*        return c[0]+x*(c[1]+x*(c[2]+x*(c[3]+...+x*(c[n-2]+x*c[n-1]))));
	*    }
	*//**
	* Evaluates a polynomial.
	*
	* @private
	* @param {number} x - value at which to evaluate a polynomial
	* @returns {number} evaluated polynomial
	*/function(e){return i7(t,e)});// If no coefficients, the function always returns 0...
if(// Code generation. Start with the function definition...
e="return function evalpoly(x){",0===// Create the function body...
(i=t.length))e+="return 0.0;";else if(1===i)e+="return "+t[0]+";";else{for(// Otherwise, evaluate the polynomial...
e+="if(x===0.0){return "+t[0]+";}return "+t[0],n=i-1,r=1;r<i;r++)e+="+x*",r<n&&(e+="("),e+=t[r];// Close all the parentheses...
for(r=0;r<n-1;r++)e+=")";e+=";"}// Create the function in the global scope:
return(// Add a source directive for debugging:
e+="}//# sourceURL=evalpoly.factory.js",new i8(e)())},// MAIN //
h(i7,"factory",i9),// EXPORTS //
i4=i7;var nt={},ne={};// EXPORTS //
ne=2220446049250313e-31;var ni={},nn={},nr={};// EXPORTS //
nr=eval,// EXPORTS //
nn=// MAIN //
/**
* Tests for native `function*()` support.
*
* @returns {boolean} boolean indicating if an environment has native `function*()` support
*
* @example
* var bool = hasGeneratorSupport();
* // returns <boolean>
*/function(){var t;try{nr('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t};var ns={};// EXPORTS //
ns=// MAIN //
/**
* Sum the elements of the series given by the supplied function.
*
* @param {Function} generator - series function
* @param {Object} [options] - function options
* @param {PositiveInteger} [options.maxTerms=1000000] - maximum number of terms to be added
* @param {PositiveNumber} [options.tolerance=2.22e-16] - further terms are only added as long as the next term is greater than current term times the tolerance
* @param {number} [options.initialValue=0] - initial value of the resulting sum
* @returns {number} sum of all series terms
*
* @example
* var gen = geometricSeriesGenerator( 0.9 );
* var out = sumSeries( gen );
* // returns 10.0
*
* function* geometricSeriesGenerator( x ) {
*     var exponent = 0;
*     while ( true ) {
*         yield Math.pow( x, exponent );
*         exponent += 1;
*     }
* }
*/function(t,e){var i,n,r,s,a;if(a={},arguments.length>1&&(a=e),i=a.tolerance||ne,r=a.maxTerms||1e6,s=a.initialValue||0,!0==("function"==typeof t.next)){for(n of t)if(s+=n,tn(i*s)>=tn(n)||0// eslint-disable-line no-plusplus
==--r)break}else do s+=n=t();while(tn(i*s)<tn(n)&&--r)// eslint-disable-line no-plusplus
return s};var na={};// EXPORTS //
na=// MAIN //
/**
* Sum the elements of the series given by the supplied function.
*
* @param {Function} generator - series function
* @param {Object} [options] - function options
* @param {PositiveInteger} [options.maxTerms=1000000] - maximum number of terms to be added
* @param {PositiveNumber} [options.tolerance=2.22e-16] - further terms are only added as long as the next term is greater than current term times the tolerance
* @param {number} [options.initialValue=0] - initial value of the resulting sum
* @returns {number} sum of all series terms
*
* @example
* var gen = geometricSeriesClosure( 0.9 )
* var out = sumSeries( gen );
* // returns 10.0
*
* function geometricSeriesClosure( x ) {
*     var exponent = -1;
*     return function() {
*         exponent += 1;
*         return Math.pow( x, exponent );
*     };
* }
*/function(t,e){var i,n,r,s,a;a={},arguments.length>1&&(a=e),i=a.tolerance||ne,r=a.maxTerms||1e6,s=a.initialValue||0;// Repeatedly call function...
do s+=n=t();while(tn(i*s)<tn(n)&&--r)// eslint-disable-line no-plusplus
return s},// EXPORTS //
ni=nn()?ns:na;var no={};// EXPORTS //
no=// MAIN //
/**
* Creates a function to evaluate a Taylor series expansion `pow(-1, k-1) * pow(x, k) / k` for `ln(1 + x)`.
*
* @private
* @param {number} x - the value at which to evaluate the series
* @returns {Function} series function
*/function(t){var e=-t,i=-1,n=0;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){return i*=e,n+=1,i/n})},// EXPORTS //
nt=// MAIN //
/**
* Evaluates \\( \operatorname{log1pmx}(x) = \ln(1+x) - x \\).
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = log1pmx( 1.1 );
* // returns ~-0.358
*
* @example
* var v = log1pmx( 0.99 );
* // returns ~-0.302
*
* @example
* var v = log1pmx( -0.99 );
* // returns ~-3.615
*
* @example
* var v = log1pmx( -1.1 );
* // returns NaN
*
* @example
* var v = log1pmx( NaN );
* // returns NaN
*/function(t){var e;return t<=-1?NaN:(e=tn(t))>.95?tr(1+t)-t:e<ne?-t*t/2:ni(no(t),{initialValue:-t})};var nl={};// EXPORTS //
nl=6.283185307179586;var nh={};// EXPORTS //
nh=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.3333333333333333:-.3333333333333333+t*(.08333333333333333+t*(-.014814814814814815+t*(.0011574074074074073+t*(3527336860670194e-19+t*(-.0001787551440329218+t*(3919263178522438e-20+t*(-.0000021854485106799924+t*(-.00000185406221071516+t*(8296711340953087e-22+t*(-.00000017665952736826078+t*(6707853543401498e-24+t*(10261809784240309e-24+t*(-.000000004382036018453353+914769958223679e-24*t)))))))))))))};var nc={};// EXPORTS //
nc=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.001851851851851852:-.001851851851851852+t*(-.003472222222222222+t*(.0026455026455026454+t*(-.0009902263374485596+t*(20576131687242798e-20+t*(-.0000004018775720164609+t*(-.000018098550334489977+t*(764916091608111e-20+t*(-.0000016120900894563446+t*(4647127802807434e-24+t*(1378633446915721e-22+t*(-.00000005752545603517705+11951628599778148e-24*t)))))))))))};var nd={};// EXPORTS //
nd=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.004133597883597883:.004133597883597883+t*(-.0026813271604938273+t*(7716049382716049e-19+t*(20093878600823047e-22+t*(-.00010736653226365161+t*(52923448829120125e-21+t*(-.000012760635188618728+t*(3423578734096138e-23+t*(13721957309062932e-22+t*(-.0000006298992138380055+14280614206064242e-23*t)))))))))};var nu={};// EXPORTS //
nu=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?6494341563786008e-19:6494341563786008e-19+t*(22947209362139917e-20+t*(-.0004691894943952557+t*(26772063206283885e-20+t*(-.00007561801671883977+t*(-.0000002396505113867297+t*(11082654115347302e-21+t*(-.0000056749528269915965+14230900732435883e-22*t)))))))};var nf={};// EXPORTS //
nf=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.0008618882909167117:-.0008618882909167117+t*(7840392217200666e-19+t*(-.0002990724803031902+t*(-.0000014638452578843418+t*(6641498215465122e-20+t*(-.00003968365047179435+11375726970678419e-21*t)))))};var ng={};// EXPORTS //
ng=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.00033679855336635813:-.00033679855336635813+t*(-.00006972813758365858+t*(2772753244959392e-19+t*(-.00019932570516188847+t*(6797780477937208e-20+t*(1419062920643967e-22+t*(-.000013594048189768693+t*(8018470256334202e-21+-.000002291481176508095*t)))))))};var np={};// EXPORTS //
np=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?5313079364639922e-19:5313079364639922e-19+t*(-.0005921664373536939+t*(2708782096718045e-19+t*(7902353232660328e-22+t*(-.00008153969367561969+t*(561168275310625e-19+-.000018329116582843375*t)))))};var nm={};// EXPORTS //
nm=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?34436760689237765e-20:34436760689237765e-20+t*(5171790908260592e-20+t*(-.00033493161081142234+t*(2812695154763237e-19+-.00010976582244684731*t)))};var nb={};// EXPORTS //
nb=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.0006526239185953094:-.0006526239185953094+t*(8394987206720873e-19+-.000438297098541721*t)};// VARIABLES //
// Pre-allocate workspace array:
var nx=[0,0,0,0,0,0,0,0,0,0];// WARNING: not thread safe
// EXPORTS //
i6=// MAIN //
/**
* Asymptotic expansions of the incomplete gamma functions when `a` is large and `x ~ a` (IEEE double precision or 10^-17).
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {number} value of asymptotic expansion
*/function(t,e){var i,n,r,s;return n=-nt((e-t)/t),r=t*n,s=iu(2*n),e<t&&(s=-s),nx[0]=nh(s),nx[1]=nc(s),nx[2]=nd(s),nx[3]=nu(s),nx[4]=nf(s),nx[5]=ng(s),nx[6]=np(s),nx[7]=nm(s),nx[8]=nb(s),nx[9]=-.0005967612901927463,i=i4(nx,1/t)*(iI(-r)/iu(nl*t)),e<t&&(i=-i),i+=iq(iu(r))/2};var ny={},nv={};// EXPORTS //
nv=// MAIN //
/**
* Creates a function to evaluate a series expansion of the incomplete gamma function.
*
* @private
* @param {number} a1 - function parameter
* @param {number} z1 - function parameter
* @returns {Function} series function
*/function(t,e){var i=1,n=t;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){var t=i;return n+=1,i*=e/n,t})},// EXPORTS //
ny=// MAIN //
/**
* Sums elements of the series expansion of the lower incomplete gamma function.
*
* ## Method
*
* -   Multiply result by `((z^a) * (e^-z) / a)` to get the full lower incomplete integral.
* -   Divide by `tgamma(a)` to get the normalized value.
*
* @private
* @param {number} a - function parameter
* @param {number} z - function parameter
* @param {number} initialValue - initial value of the resulting sum
* @returns {number} sum of terms of lower gamma series
*/function(t,e,i){var n;return i=i||0,n=nv(t,e),ni(n,{initialValue:i})};var n_={},nw={};// EXPORTS //
nw=// MAIN //
/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/function(t){var e,i;return 0===t?1/0:((t<0?-t:t)<=1?(e=709811.662581658+t*(679979.8474157227+t*(293136.7857211597+t*(74887.54032914672+t*(12555.290582413863+t*(1443.4299244417066+t*(115.24194596137347+t*(6.309239205732627+t*(.22668404630224365+t*(.004826466289237662+4624429436045379e-20*t))))))))),i=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+1*t)))))))))):(e=4624429436045379e-20+(t=1/t)*(.004826466289237662+t*(.22668404630224365+t*(6.309239205732627+t*(115.24194596137347+t*(1443.4299244417066+t*(12555.290582413863+t*(74887.54032914672+t*(293136.7857211597+t*(679979.8474157227+709811.662581658*t))))))))),i=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+0*t)))))))))),e/i)};var nM={},nk={};// EXPORTS //
nk=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))},// EXPORTS //
nM=// MAIN //
/**
* Evaluates the natural logarithm of \\(1+x\\).
*
* ## Method
*
* 1.  Argument Reduction: find \\(k\\) and \\(f\\) such that
*
*     ```tex
*     1+x = 2^k (1+f)
*     ```
*
*     where
*
*     ```tex
*     \frac{\sqrt{2}}{2} < 1+f < \sqrt{2}
*     ```
*
*     <!-- <note> -->
*
*     If \\(k=0\\), then \\(f=x\\) is exact. However, if \\(k \neq 0\\), then \\(f\\) may not be representable exactly. In that case, a correction term is needed. Let
*
*     ```tex
*     u = \operatorname{round}(1+x)
*     ```
*
*     and
*
*     ```tex
*     c = (1+x) - u
*     ```
*
*     then
*
*     ```tex
*     \ln (1+x) - \ln u \approx \frac{c}{u}
*     ```
*
*     We can thus proceed to compute \\(\ln(u)\\), and add back the correction term \\(c/u\\).
*
*     <!-- </note> -->
*
*     <!-- <note> -->
*
*     When \\(x > 2^{53}\\), one can simply return \\(\ln(x)\\).
*
*     <!-- </note> -->
*
* 2.  Approximation of \\(\operatorname{log1p}(f)\\). Let
*
*     ```tex
*     s = \frac{f}{2+f}
*     ```
*
*     based on
*
*     ```tex
*     \begin{align*}
*     \ln 1+f &= \ln (1+s) - \ln (1-s) \\
*             &= 2s + \frac{2}{3} s^3 + \frac{2}{5} s^5 + ... \\
*             &= 2s + sR \\
*     \end{align*}
*     ```
*
*     We use a special Reme algorithm on \\(\[0,0.1716\]\\) to generate a polynomial of degree \\(14\\) to approximate \\(R\\). The maximum error of this polynomial approximation is bounded by \\(2^{-58.45}\\). In other words,
*
*     ```tex
*     R(z) \approx \mathrm{Lp}_1 s^2 + \mathrm{Lp}_2 s^4 + \mathrm{Lp}_3 s^6 + \mathrm{Lp}_4 s^8 + \mathrm{Lp}_5 s^{10} + \mathrm{Lp}_6 s^{12} + \mathrm{Lp}_7 s^{14}
*     ```
*
*     and
*
*     ```tex
*     | \mathrm{Lp}_1 s^2 + \ldots + \mathrm{Lp}_7 s^14 - R(z) | \leq 2^{-58.45}
*     ```
*
*     <!-- <note> -->
*
*     The values of \\(Lp1\\) to \\(Lp7\\) may be found in the source.
*
*     <!-- </note> -->
*
*     Note that
*
*     ```tex
*     \begin{align*}
*     2s &= f - sf \\
*        &= f - \frac{f^2}{2} + s \frac{f^2}{2} \\
*     \end{align*}
*     ```
*
*     In order to guarantee error in \\(\ln\\) below \\(1\ \mathrm{ulp}\\), we compute the log by
*
*     ```tex
*     \operatorname{log1p}(f) = f - \biggl(\frac{f^2}{2} - s\biggl(\frac{f^2}{2}+R\biggr)\biggr)
*     ```
*
* 3.  Finally,
*
*     ```tex
*     \begin{align*}
*     \operatorname{log1p}(x) &= k \cdot \mathrm{ln2} + \operatorname{log1p}(f) \\
*     &= k \cdot \mathrm{ln2}_{hi}+\biggl(f-\biggl(\frac{f^2}{2}-\biggl(s\biggl(\frac{f^2}{2}+R\biggr)+k \cdot \mathrm{ln2}_{lo}\biggr)\biggr)\biggr) \\
*     \end{align*}
*     ```
*
*     Here \\(\mathrm{ln2}\\) is split into two floating point numbers:
*
*     ```tex
*     \mathrm{ln2}_{hi} + \mathrm{ln2}_{lo}
*     ```
*
*     where \\(n \cdot \mathrm{ln2}_{hi}\\) is always exact for \\(|n| < 2000\\).
*
* ## Special Cases
*
* -   \\(\operatorname{log1p}(x) = \mathrm{NaN}\\) with signal if \\(x < -1\\) (including \\(-\infty\\))
* -   \\(\operatorname{log1p}(+\infty) = +\infty\\)
* -   \\(\operatorname{log1p}(-1) = -\infty\\) with signal
* -   \\(\operatorname{log1p}(\mathrm{NaN})= \mathrm{NaN}\\) with no signal
*
* ## Notes
*
* -   According to an error analysis, the error is always less than \\(1\\) ulp (unit in the last place).
*
* -   The hexadecimal values are the intended ones for the used constants. The decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the hexadecimal values shown.
*
* -   Assuming \\(\ln(x)\\) is accurate, the following algorithm can be used to evaluate \\(\operatorname{log1p}(x)\\) to within a few ULP:
*
*     ```javascript
*     var u = 1.0 + x;
*     if ( u === 1.0 ) {
*         return x;
*     } else {
*         return ln(u) * (x/(u-1.0));
*     }
*     ```
*
*     See HP-15C Advanced Functions Handbook, p.193.
*
* @param {number} x - input value
* @returns {number} the natural logarithm of `1+x`
*
* @example
* var v = log1p( 4.0 );
* // returns ~1.609
*
* @example
* var v = log1p( -1.0 );
* // returns -Infinity
*
* @example
* var v = log1p( 0.0 );
* // returns 0.0
*
* @example
* var v = log1p( -0.0 );
* // returns -0.0
*
* @example
* var v = log1p( -2.0 );
* // returns NaN
*
* @example
* var v = log1p( NaN );
* // returns NaN
*/function(t){var e,i,n,r,s,a,o,l,h,c;if(t<-1||Q(t))return NaN;if(-1===t)return ti;if(t===te||0===t)return t;// Check if argument reduction is needed and if we can just return a small value approximation requiring less computation but with equivalent accuracy...
if(// Argument reduction...
c=1,(n=t<0?-t:t)<.41421356237309503){if(n<1862645149230957e-24)return n<5551115123125783e-32?t:t-t*t*.5;// Check if `f=x` can be represented exactly (no need for correction terms), allowing us to bypass argument reduction...
t>-.2928932188134525&&(// -0.2929 < x < 0.41422
c=0,r=t,i=1)}return(0!==c&&(n<9007199254740992?s=(// Bit shift to isolate the exponent and then subtract the bias:
(c=((i=ts(h=1+t))>>20)-t2)>0?1-(h-t):t-(h-1))/h:(// Bit shift to isolate the exponent and then subtract the bias:
c=((i=ts(h=t))>>20)-t2,// Correction term is zero:
s=0),// Apply a bit mask (0 00000000000 11111111111111111111) to remove the exponent:
(i&=1048575)<434334?h=tJ(h,1072693248|i):(c+=1,// Normalize u/2 by setting the exponent to 1022 (bias-1 => 2**-1 = 1/2) => 0x3fe00000 => 0 01111111110 00000000000000000000
h=tJ(h,1071644672|i),// Subtract hu significand from next largest hu => 0 00000000001 00000000000000000000 => 0x00100000 => 1048576
i=1048576-i>>2),r=h-1),// Approximation of log1p(f)...
e=.5*r*r,0===i)?0===r?(s+=19082149292705877e-26*c,.6931471803691238*c+s):.6931471803691238*c-((l=e*(1-.6666666666666666*r))-(19082149292705877e-26*c+s)-r):(l=(o=(a=r/(2+r))*a)*nk(o),0===c)?r-(e-a*(e+l)):.6931471803691238*c-(e-(a*(e+l)+(19082149292705877e-26*c+s))-r)};var nS={},nP={};// EXPORTS //
nP=// MAIN //
/**
* Tests if a double-precision floating-point numeric value is positive zero.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is positive zero
*
* @example
* var bool = isPositiveZero( 0.0 );
* // returns true
*
* @example
* var bool = isPositiveZero( -0.0 );
* // returns false
*/function(t){return 0===t&&1/t===te},// EXPORTS //
nS=// MAIN //
/**
* Returns the maximum value.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} maximum value
*
* @example
* var v = max( 3.14, 4.2 );
* // returns 4.2
*
* @example
* var v = max( 3.14, NaN );
* // returns NaN
*
* @example
* var v = max( +0.0, -0.0 );
* // returns +0.0
*/function(t,e){return Q(t)||Q(e)?NaN:t===te||e===te?te:t===e&&0===t?nP(t)?t:e:t>e?t:e};var nC={};// EXPORTS //
nC=// MAIN //
/**
* Returns the minimum value.
*
* @param {number} x - first number
* @param {number} y - second number
* @returns {number} minimum value
*
* @example
* var v = min( 3.14, 4.2 );
* // returns 3.14
*
* @example
* var v = min( 3.14, NaN );
* // returns NaN
*
* @example
* var v = min( +0.0, -0.0 );
* // returns -0.0
*/function(t,e){return Q(t)||Q(e)?NaN:t===ti||e===ti?ti:t===e&&0===t?ia(t)?t:e:t<e?t:e};var nD={};// EXPORTS //
nD=10.900511;var nA={};// EXPORTS //
nA=2.718281828459045,// EXPORTS //
n_=// MAIN //
/**
* Computes `(z^a)*(e^-z) / gamma(a)`.
*
* @private
* @param {number} a - input value
* @param {number} z - input value
* @returns {number} function value
*/function(t,e){var i,n,r,s,a,o,l;return(r=t+nD-.5,l=(e-t-nD+.5)/r,t<1)?// Treat a < 1 as a special case because our Lanczos approximations are optimized against the factorials with a > 1, and for high precision types very small values of `a` can give rather erroneous results for gamma:
e<=i5?iI(t*tr(e)-e-J(t)):ih(e,t)*iI(-e)/ir(t):(100>=tn(l*l*t)&&t>150?(// Special case for large a and a ~ z:
i=t*(nM(l)-l)+e*(.5-nD)/r,i=iI(i)):(// General case. Direct computation is most accurate, but use various fallbacks for different parts of the problem domain:
s=t*tr(e/r),nC(s,a=t-e)<=i5||nS(s,a)>=iU?(n=a/t,nC(s,a)/2>i5&&nS(s,a)/2<iU?i=// Compute square root of the result and then square it:
(o=ih(e/r,t/2)*iI(a/2))*o:nC(s,a)/4>i5&&nS(s,a)/4<iU&&e>t?(i=// Compute the 4th root of the result then square it twice:
(o=ih(e/r,t/4)*iI(a/4))*o,i*=i):i=n>i5&&n<iU?ih(e*iI(n)/r,t):iI(s+a)):i=ih(e/r,t)*iI(a)),i*=iu(r/nA)/nw(t))};var nO={},nE={},nT={},nL={};// EXPORTS //
nL=.34657359027997264;var nI={};// EXPORTS //
nI=// MAIN //
/**
* Evaluates a polynomial.
*
* ## Notes
*
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the polynomial
* @returns {number} evaluated polynomial
*/function(t){return 0===t?-.03333333333333313:-.03333333333333313+t*(.0015873015872548146+t*(-.0000793650757867488+t*(4008217827329362e-21+-.00000020109921818362437*t)))},// EXPORTS //
nT=// MAIN //
/**
* Computes `exp(x) - 1`.
*
* ## Method
*
* 1.  Given \\(x\\), we use argument reduction to find \\(r\\) and an integer \\(k\\) such that
*
*     ```tex
*     x = k \cdot \ln(2) + r
*     ```
*
*     where
*
*     ```tex
*     |r| \leq \frac{\ln(2)}{2} \approx 0.34658
*     ```
*
*     <!-- <note> -->
*
*     A correction term \\(c\\) will need to be computed to compensate for the error in \\(r\\) when rounded to a floating-point number.
*
*     <!-- </note> -->
*
* 2.  To approximate \\(\operatorname{expm1}(r)\\), we use a special rational function on the interval \\(\[0,0.34658]\\). Since
*
*     ```tex
*     r \frac{e^r + 1}{e^r - 1} = 2 + \frac{r^2}{6} - \frac{r^4}{360} + \ldots
*     ```
*
*     we define \\(\operatorname{R1}(r^2)\\) by
*
*     ```tex
*     r \frac{e^r + 1}{e^r - 1} = 2 + \frac{r^2}{6} \operatorname{R1}(r^2)
*     ```
*
*     That is,
*
*     ```tex
*     \begin{align*}
*     \operatorname{R1}(r^2) &= \frac{6}{r} \biggl(\frac{e^r+1}{e^r-1} - \frac{2}{r}\biggr) \\
*     &= \frac{6}{r} \biggl( 1 + 2 \biggl(\frac{1}{e^r-1} - \frac{1}{r}\biggr)\biggr) \\
*     &= 1 - \frac{r^2}{60} + \frac{r^4}{2520} - \frac{r^6}{100800} + \ldots
*     \end{align*}
*     ```
*
*     We use a special Remes algorithm on \\(\[0,0.347]\\) to generate a polynomial of degree \\(5\\) in \\(r^2\\) to approximate \\(\mathrm{R1}\\). The maximum error of this polynomial approximation is bounded by \\(2^{-61}\\). In other words,
*
*     ```tex
*     \operatorname{R1}(z) \approx 1 + \mathrm{Q1} \cdot z + \mathrm{Q2} \cdot z^2 + \mathrm{Q3} \cdot z^3 + \mathrm{Q4} \cdot z^4 + \mathrm{Q5} \cdot z^5
*     ```
*
*     where
*
*     ```tex
*     \begin{align*}
*     \mathrm{Q1} &= -1.6666666666666567384\mbox{e-}2 \\
*     \mathrm{Q2} &= 3.9682539681370365873\mbox{e-}4 \\
*     \mathrm{Q3} &= -9.9206344733435987357\mbox{e-}6 \\
*     \mathrm{Q4} &= 2.5051361420808517002\mbox{e-}7 \\
*     \mathrm{Q5} &= -6.2843505682382617102\mbox{e-}9
*     \end{align*}
*     ```
*
*     where \\(z = r^2\\) and the values of \\(\mathrm{Q1}\\) to \\(\mathrm{Q5}\\) are listed in the source. The error is bounded by
*
*     ```tex
*     \biggl| 1 + \mathrm{Q1} \cdot z + \ldots + \mathrm{Q5} \cdot z - \operatorname{R1}(z) \biggr| \leq 2^{-61}
*     ```
*
*     \\(\operatorname{expm1}(r) = e^r - 1\\) is then computed by the following specific way which minimizes the accumulated rounding error
*
*     ```tex
*     \operatorname{expm1}(r) = r + \frac{r^2}{2} + \frac{r^3}{2} \biggl( \frac{3 - (\mathrm{R1} + \mathrm{R1} \cdot \frac{r}{2})}{6 - r ( 3 - \mathrm{R1} \cdot \frac{r}{2})} \biggr)
*     ```
*
*     To compensate for the error in the argument reduction, we use
*
*     ```tex
*     \begin{align*}
*     \operatorname{expm1}(r+c) &= \operatorname{expm1}(r) + c + \operatorname{expm1}(r) \cdot c \\
*     &\approx \operatorname{expm1}(r) + c + rc
*     \end{align*}
*     ```
*
*     Thus, \\(c + rc\\) will be added in as the correction terms for \\(\operatorname{expm1}(r+c)\\). Now, we can rearrange the term to avoid optimization screw up.
*
*     ```tex
*     \begin{align*}
*     \operatorname{expm1}(r+c) &\approx r - \biggl( \biggl( r + \biggl( \frac{r^2}{2} \biggl( \frac{\mathrm{R1} - (3 - \mathrm{R1} \cdot \frac{r}{2})}{6 - r (3 - \mathrm{R1} \cdot \frac{r}{2})} \biggr) - c \biggr) - c \biggr) - \frac{r^2}{2} \biggr) \\
*     &= r - \mathrm{E}
*     \end{align*}
*     ```
*
* 3.  To scale back to obtain \\(\operatorname{expm1}(x)\\), we have (from step 1)
*
*     ```tex
*     \operatorname{expm1}(x) = \begin{cases}
*     2^k  (\operatorname{expm1}(r) + 1) - 1 \\
*     2^k (\operatorname{expm1}(r) + (1-2^{-k}))
*     \end{cases}
*     ```
*
* ## Special Cases
*
* ```tex
* \begin{align*}
* \operatorname{expm1}(\infty) &= \infty \\
* \operatorname{expm1}(-\infty) &= -1 \\
* \operatorname{expm1}(\mathrm{NaN}) &= \mathrm{NaN}
* \end{align*}
* ```
*
* ## Notes
*
* -   For finite arguments, only \\(\operatorname{expm1}(0) = 0\\) is exact.
*
* -   To save one multiplication, we scale the coefficient \\(\mathrm{Qi}\\) to \\(\mathrm{Qi} \cdot {2^i}\\) and replace \\(z\\) by \\(\frac{x^2}{2}\\).
*
* -   To achieve maximum accuracy, we compute \\(\operatorname{expm1}(x)\\) by
*
*     -   if \\(x < -56 \cdot \ln(2)\\), return \\(-1.0\\) (raise inexact if \\(x\\) does not equal \\(\infty\\))
*
*     -   if \\(k = 0\\), return \\(r-\mathrm{E}\\)
*
*     -   if \\(k = -1\\), return \\(\frac{(r-\mathrm{E})-1}{2}\\)
*
*     -   if \\(k = 1\\),
*
*         -   if \\(r < -0.25\\), return \\(2((r+0.5)- \mathrm{E})\\)
*         -   else return \\(1+2(r-\mathrm{E})\\)
*
*     -   if \\(k < -2\\) or \\(k > 56\\), return \\(2^k(1-(\mathrm{E}-r)) - 1\\) (or \\(e^x-1\\))
*
*     -   if \\(k \leq 20\\), return \\(2^k((1-2^{-k})-(\mathrm{E}-r))\\)
*
*     -   else return \\(2^k(1-((\mathrm{E}+2^{-k})-r))\\)
*
* -   For IEEE 754 double, if \\(x > 7.09782712893383973096\mbox{e+}02\\), then \\(\operatorname{expm1}(x)\\) will overflow.
*
* -   The hexadecimal values listed in the source are the intended ones for the implementation constants. Decimal values may be used, provided that the compiler will convert from decimal to binary accurately enough to produce the intended hexadecimal values.
*
* -   According to an error analysis, the error is always less than \\(1\\) ulp (unit in the last place).
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = expm1( 0.2 );
* // returns ~0.221
*
* @example
* var v = expm1( -9.0 );
* // returns ~-0.9999
*
* @example
* var v = expm1( 0.0 );
* // returns 0.0
*
* @example
* var v = expm1( NaN );
* // returns NaN
*/function(t){var e,i,n,r,s,a,o,l,h,c,d,u,f;if(t===te||Q(t))return t;if(t===ti)return -1;if(0===t)return t;// handles +-0 (IEEE 754-2008)
// Filter out huge and non-finite arguments...
if(t<0?(n=!0,l=-t):(n=!1,l=t),l>=38.816242111356935){if(n)return -1;if(l>=709.782712893384)return te}// Argument reduction...
if(// Extract the more significant bits from |x|:
a=0|ts(l),l>nL)l<1.0397207708399179?n?(r=t+.6931471803691238,s=-.00000000019082149292705877,f=-1):(r=t-.6931471803691238,s=19082149292705877e-26,f=1):(d=f=(n?1.4426950408889634*t-.5:1.4426950408889634*t+.5)|0,r=t-.6931471803691238*d,s=19082149292705877e-26*d),t=r-s,c=r-t-s;else{if(a<1016070144)return t;f=0}return(// x is now in primary range...
e=.5*t,d=3-(o=1+(h=t*e)*nI(h))*e,u=h*((o-d)/(6-t*d)),0===f)?t-(t*u-h):(i=eu(t2+f<<20,0),u=t*(u-c)-c-h,-1===f)?.5*(t-u)-.5:1===f?t<-.25?-2*(u-(t+.5)):1+2*(t-u):f<=-2||f>56?(l=1-(u-t),1024===f?(// Add k to y's exponent:
r=ts(l)+(f<<20)|0,l=tJ(l,r)):l*=i,l-1):(d=1,l=(f<20?(d=tJ(d,// 0x3ff00000 - (0x200000>>k) = 1072693248 - (0x200000>>k) => 0x3ff00000 = 00111111111100000000000000000000 and 0x200000 = 0 00000000010 00000000000000000000
r=1072693248-(2097152>>f)|0))-(u-t):t-(u+(d=tJ(d,r=t2-f<<20|0)))+1)*i)// c is 0
},// EXPORTS //
nE=// MAIN //
/**
* Evaluates `bˣ - 1`.
*
* @param {number} b - base
* @param {number} x - exponent
* @returns {number} function value
*
* @example
* var y = powm1( 2.0, 3.0 );
* // returns 7.0
*
* @example
* var y = powm1( 4.0, 0.5 );
* // returns 1.0
*
* @example
* var y = powm1( 0.0, 100.0 );
* // returns -1.0
*
* @example
* var y = powm1( 100.0, 0.0 );
* // returns 0.0
*
* @example
* var y = powm1( 0.0, 0.0 );
* // returns 0.0
*
* @example
* var y = powm1( 3.141592653589793, 5.0 );
* // returns ~305.0197
*
* @example
* var y = powm1( NaN, 3.0 );
* // returns NaN
*
* @example
* var y = powm1( 5.0, NaN );
* // returns NaN
*/function(t,e){var i;if(Q(t)||Q(e))return NaN;if(0===e)return 0;if(0===t)return -1;if(t<0&&e%2==0&&(t=-t),t>0){if((.5>tn(e*(t-1))||.2>tn(e))&&// No good/quick approximation for ln(b)*x, so we have to evaluate...
(i=tr(t)*e)<.5)return nT(i)}else if(t6(e)!==e)return NaN;return ih(t,e)-1};var nR={},nF={},nz={};// EXPORTS //
nz=// MAIN //
/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/function(t){var e,i;return 0===t?-.01803556856784494:((t<0?-t:t)<=1?(e=-.01803556856784494+t*(.02512664961998968+t*(.049410315156753225+t*(.0172491608709614+t*(-.0002594535632054381+t*(-.0005410098692152044+t*(-.00003245886498259485+0*t)))))),i=1+t*(1.962029871977952+t*(1.4801966942423133+t*(.5413914320717209+t*(.09885042511280101+t*(.008213096746488934+t*(22493629192211576e-20+-.00000022335276320861708*t))))))):(e=0+(t=1/t)*(-.00003245886498259485+t*(-.0005410098692152044+t*(-.0002594535632054381+t*(.0172491608709614+t*(.049410315156753225+t*(.02512664961998968+-.01803556856784494*t)))))),i=-.00000022335276320861708+t*(22493629192211576e-20+t*(.008213096746488934+t*(.09885042511280101+t*(.5413914320717209+t*(1.4801966942423133+t*(1.962029871977952+1*t))))))),e/i)};var nN={};// EXPORTS //
nN=// MAIN //
/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/function(t){var e,i;return 0===t?.04906224540690395:((t<0?-t:t)<=1?(e=.04906224540690395+t*(-.09691175301595212+t*(-.4149833583594954+t*(-.4065671242119384+t*(-.1584135863906922+t*(-.024014982064857155+-.0010034668769627955*t))))),i=1+t*(3.0234982984646304+t*(3.4873958536072385+t*(1.9141558827442668+t*(.5071377386143635+t*(.05770397226904519+.001957681026011072*t)))))):(e=-.0010034668769627955+(t=1/t)*(-.024014982064857155+t*(-.1584135863906922+t*(-.4065671242119384+t*(-.4149833583594954+t*(-.09691175301595212+.04906224540690395*t))))),i=.001957681026011072+t*(.05770397226904519+t*(.5071377386143635+t*(1.9141558827442668+t*(3.4873958536072385+t*(3.0234982984646304+1*t)))))),e/i)};var nV={};// EXPORTS //
nV=// MAIN //
/**
* Evaluates a rational function, i.e., the ratio of two polynomials described by the coefficients stored in \\(P\\) and \\(Q\\).
*
* ## Notes
*
* -   Coefficients should be sorted in ascending degree.
* -   The implementation uses [Horner's rule][horners-method] for efficient computation.
*
* [horners-method]: https://en.wikipedia.org/wiki/Horner%27s_method
*
* @private
* @param {number} x - value at which to evaluate the rational function
* @returns {number} evaluated rational function
*/function(t){var e,i;return 0===t?-.029232972183027003:((t<0?-t:t)<=1?(e=-.029232972183027003+t*(.14421626775719232+t*(-.14244039073863127+t*(.05428096940550536+t*(-.008505359768683364+t*(4311713426792973e-19+0*t))))),i=1+t*(-1.5016935605448505+t*(.846973248876495+t*(-.22009515181499575+t*(.02558279715597587+t*(-.0010066679553914337+-.0000008271935218912905*t)))))):(e=0+(t=1/t)*(4311713426792973e-19+t*(-.008505359768683364+t*(.05428096940550536+t*(-.14244039073863127+t*(.14421626775719232+-.029232972183027003*t))))),i=-.0000008271935218912905+t*(-.0010066679553914337+t*(.02558279715597587+t*(-.22009515181499575+t*(.846973248876495+t*(-1.5016935605448505+1*t)))))),e/i)},// EXPORTS //
nF=// MAIN //
/**
* Evaluates the natural logarithm of the gamma function for small arguments.
*
* ## Method
*
* 1.  For \\( z > 2 \\), begin by performing argument reduction until \\( z \\) is in \\(\[2,3)\\). Use the following form:
*
*     ```tex
*     \operatorname{gammaln}(z) = (z-2)(z+1)(Y + R(z-2))
*     ```
*
*     where \\( R(z-2) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
* 2.  If \\( z < 1 \\), use recurrence to shift to \\( z \\) in the interval \\(\[1,2\]\\). Then, use one of two approximations: one for \\( z \\) in \\(\[1,1.5\]\\) and one for \\( z \\) in \\(\[1.5,2\]\\):
*
*     -   For \(( z \\) in \\(\[1,1.5\]\\), use
*
*         ```tex
*         \operatorname{gammaln}(z) = (z-1)(z-2)(Y + R(z-1))
*         ```
*
*         where \\( R(z-1) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
*     -   For \\( z \\) in \\(\[1.5,2\]\\), use
*
*         ```tex
*         \operatorname{gammaln}(z) = (2-z)(1-z)(Y + R(2-z))
*         ```
*
*         where \\( R(2-z) \\) is a rational approximation optimized for low absolute error. As long as the absolute error is small compared to the constant \\( Y \\), then any rounding error in the computation will get wiped out.
*
* ## Notes
*
* -   Relative error:
*
*     | function | peak         | maximum deviation |
*     |:--------:|:------------:|:-----------------:|
*     | R(Z-2)   | 4.231e-18    | 5.900e-24         |
*     | R(Z-1)   | 1.230011e-17 | 3.139e-021        |
*     | R(2-Z)   | 1.797565e-17 | 2.151e-021        |
*
* @private
* @param {number} z - input value
* @param {number} zm1 - `z` minus one
* @param {number} zm2 - `z` minus two
* @returns {number} function value
*/function(t,e,i){var n,r,s;if(t<ne)return-tr(t);if(0===e||0===i)return 0;if(r=0,t>2){if(t>=3){do t-=1,i-=1,r+=tr(t);while(t>=3)i=t-2}return r+(.15896368026733398*(s=i*(t+1))+s*nz(i))}return(t<1&&(r+=-tr(t),i=e,e=t,t+=1),t<=1.5)?(s=nN(e),r+=.5281534194946289*(n=e*i)+n*s):r+=.45201730728149414*// Case: 1.5 < z <= 2
(s=i*e)+s*nV(-i)},// EXPORTS //
nR=// MAIN //
/**
* Computes `gamma(x+1) - 1`.
*
* @param {number} x - input value
* @returns {number} function value
*
* @example
* var v = gammap1m1( 0.2 );
* // returns ~-0.082
*
* @example
* var v = gammap1m1( -9.2 );
* // returns ~-1.0
*
* @example
* var v = gammap1m1( 0.0 );
* // returns 0.0
*
* @example
* var v = gammap1m1( -3.0 );
* // returns NaN
*
* @example
* var v = gammap1m1( NaN );
* // returns NaN
*/function(t){return Q(t)?NaN:t<0?t<-.5?ir(1+t)-1:nT(-nM(t)+nF(t+2,t+1,t)):t<2?nT(nF(t+1,t,t-1)):ir(1+t)-1};var nB={};// EXPORTS //
nB=/**
* Series representation for upper fraction when `z` is small.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {Function} series function
*/function(t,e){var i,n,r,s;return i=-e,e=-e,n=t+1,r=1,/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){return s=i/n,i*=e,r+=1,i/=r,n+=1,s}},// EXPORTS //
nO=// MAIN //
/**
* Compute the full upper fraction (Q) when `a` is very small.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @param {boolean} invert - boolean indicating if the upper tail of the incomplete gamma function should be evaluated
* @returns {Array} full upper fraction (Q) and pgam
*/function(t,e,i){var n,r,s,a;return r=((n=nR(t))+1)/t,n-=s=nE(e,t),n/=t,a=nB(t,e),s+=1,n=-s*ni(a,{initialValue:((i?r:0)-n)/s}),i&&(n=-n),[n,r]};var nW={},nH={},nj={},n$={};// EXPORTS //
n$=11754943508222875e-54,// EXPORTS //
nj=// MAIN //
/**
* Evaluates the continued fraction approximation for the supplied series generator using the modified Lentz algorithm.
*
* ## References
*
* -   Lentz, William J. 1976. "Generating bessel functions in Mie scattering calculations using continued fractions." _Applied Optics_ 15 (3): 668–71. doi:[10.1364/AO.15.000668](https://doi.org/10.1364/AO.15.000668).
*
* @param {Function} generator - function returning terms of continued fraction expansion
* @param {Object} [options] - function options
* @param {PositiveInteger} [options.maxIter=1000] - maximum number of iterations
* @param {PositiveNumber} [options.tolerance=2.22e-16] - further terms are only added as long as the next term is greater than current term times the tolerance
* @param {boolean} [options.keep=false] - whether to keep the leading b term
* @returns {number} value of continued fraction
*
* @example
* // Continued fraction for (e-1)^(-1):
* var gen = generator();
* var out = continuedFraction( gen );
* // returns ~0.582
*
* function* generator() {
*    var i = 0;
*    while ( true ) {
*        i++;
*        yield [ i, i ];
*    }
* }
*/function(t,e){var i,n,r;return(n={},arguments.length>1&&(n=e),i=n.maxIter||1e6,r=n.tolerance||ne,n.keep)?/**
* Evaluates a continued fraction expansion.
*
* ```text
*      b0 +    a1
*      ---------------
*      b1 +     a2
*           ----------
*           b2 +   a3
*                -----
*                b3 + ...
* ```
*
* @private
* @param {Function} gen - function giving terms of continued fraction expansion
* @param {PositiveNumber} factor - further terms are only added as long as factor*result is smaller than the next term
* @param {PositiveInteger} maxIter - maximum number of iterations
* @returns {number} evaluated expansion
*/function(t,e,i){var n,r,s,a,o,l;if(0===(s=(l=(n="function"==typeof t.next)?t.next().value:t())[1])&&(s=n$),a=s,o=0,!0===n)do(l=t.next().value)&&(0===(o=l[1]+l[0]*o)&&(o=n$),0===(a=l[1]+l[0]/a)&&(a=n$),s*=r=a*(o=1/o));while(l&&tn(r-1)>e&&--i)// eslint-disable-line no-plusplus
else do(l=t())&&(0===(o=l[1]+l[0]*o)&&(o=n$),0===(a=l[1]+l[0]/a)&&(a=n$),s*=r=a*(o=1/o));while(l&&tn(r-1)>e&&--i)// eslint-disable-line no-plusplus
return s}(t,r,i):// FUNCTIONS //
/**
* Evaluates a continued fraction expansion.
*
* ```text
*           a1
*      ---------------
*      b1 +     a2
*           ----------
*            b2 +   a3
*                -----
*                b3 + ...
* ```
*
* @private
* @param {Function} gen - function giving terms of continued fraction expansion
* @param {PositiveNumber} factor - further terms are only added as long as factor*result is smaller than the next term
* @param {PositiveInteger} maxIter - maximum number of iterations
* @returns {number} evaluated expansion
*/function(t,e,i){var n,r,s,a,o,l,h;if(a=(h=(n="function"==typeof t.next)?t.next().value:t())[1],s=h[0],0===a&&(a=n$),o=a,l=0,!0===n)do(h=t.next().value)&&(0===(l=h[1]+h[0]*l)&&(l=n$),0===(o=h[1]+h[0]/o)&&(o=n$),a*=r=o*(l=1/l));while(tn(r-1)>e&&--i)// eslint-disable-line no-plusplus
else do(h=t())&&(0===(l=h[1]+h[0]*l)&&(l=n$),0===(o=h[1]+h[0]/o)&&(o=n$),a*=r=o*(l=1/l));while(h&&tn(r-1)>e&&--i)// eslint-disable-line no-plusplus
return s/a}(t,r,i)};var nU={};// EXPORTS //
nU=// MAIN //
/**
* Evaluates the continued fraction approximation for the supplied series generator using the modified Lentz algorithm.
*
* ## References
*
* -   Lentz, William J. 1976. "Generating bessel functions in Mie scattering calculations using continued fractions." _Applied Optics_ 15 (3): 668–71. doi:[10.1364/AO.15.000668](https://doi.org/10.1364/AO.15.000668).
*
* @param {Function} generator - function returning terms of continued fraction expansion
* @param {Object} [options] - function options
* @param {PositiveInteger} [options.maxIter=1000000] - maximum number of iterations
* @param {PositiveNumber} [options.tolerance=2.22e-16] - further terms are only added as long as the next term is greater than current term times the tolerance
* @param {boolean} [options.keep=false] - whether to keep the leading b term
* @returns {number} value of continued fraction
*
* @example
* // Continued fraction for (e-1)^(-1):
* var gen = generator();
* var out = continuedFraction( gen );
* // returns ~0.582
*
* function generator() {
*    var i = 0;
*    return function() {
*        i++;
*        return [ i, i ];
*    };
* }
*/function(t,e){var i,n,r;return(n={},arguments.length>1&&(n=e),r=n.tolerance||ne,i=n.maxIter||1e6,n.keep)?/**
* Evaluates a continued fraction expansion.
*
* ```text
*      b0 +   a1
*      ---------------
*      b1 +   a2
*           ----------
*           b2 +   a3
*                -----
*                b3 + ...
* ```
*
* @private
* @param {Function} gen - function giving terms of continued fraction expansion
* @param {PositiveNumber} factor - further terms are only added as long as factor*result is smaller than the next term
* @param {PositiveInteger} maxIter - maximum number of iterations
* @returns {number} evaluated expansion
*/function(t,e,i){var n,r,s,a,o;0===(a=(o=t())[1])&&(a=n$),r=a,s=0;do(o=t())&&(0===(s=o[1]+o[0]*s)&&(s=n$),0===(r=o[1]+o[0]/r)&&(r=n$),a*=n=r*(s=1/s));while(o&&tn(n-1)>e&&--i)// eslint-disable-line no-plusplus
return a}(t,r,i):// FUNCTIONS //
/**
* Evaluates a continued fraction expansion.
*
* ```text
*           a1
*      ---------------
*      b1 +     a2
*           ----------
*            b2 +   a3
*                -----
*                b3 + ...
* ```
*
* @private
* @param {Function} gen - function giving terms of continued fraction expansion
* @param {PositiveNumber} factor - further terms are only added as long as factor*result is smaller than the next term
* @param {PositiveInteger} maxIter - maximum number of iterations
* @returns {number} evaluated expansion
*/function(t,e,i){var n,r,s,a,o,l;o=(l=t())[1],r=l[0],0===o&&(o=n$),s=o,a=0;do(l=t())&&(0===(a=l[1]+l[0]*a)&&(a=n$),0===(s=l[1]+l[0]/s)&&(s=n$),o*=n=s*(a=1/a));while(l&&tn(n-1)>e&&--i)// eslint-disable-line no-plusplus
return r/o}(t,r,i)},// EXPORTS //
nH=nn()?nj:nU;var nY={};// EXPORTS //
nY=// MAIN //
/**
* Creates a function to evaluate a series expansion of the upper incomplete gamma fraction.
*
* @private
* @param {number} a1 - function parameter
* @param {number} z1 - function parameter
* @returns {Function} series function
*/function(t,e){var i=e-t+1,n=0;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {Array} series expansion terms
	*/function(){return n+=1,i+=2,[n*(t-n),i]})},// EXPORTS //
nW=// MAIN //
/**
* Evaluate the lower incomplete gamma integral via a series expansion and divide by `gamma(z)` to normalize.
*
* @private
* @param {number} a - function parameter
* @param {number} z - function parameter
* @returns {number} function value
*/function(t,e){var i=nY(t,e);return 1/(e-t+1+nH(i))},// EXPORTS //
Z=// MAIN //
/**
* Computes the regularized incomplete gamma function. The upper tail is calculated via the modified Lentz's method for computing continued fractions, the lower tail using a power expansion.
*
* ## Notes
*
* -   When `a >= MAX_FACTORIAL` and computing the non-normalized incomplete gamma, result is rather hard to compute unless we use logs. There are really two options a) if `x` is a long way from `a` in value then we can reliably use methods 2 and 4 below in logarithmic form and go straight to the result. Otherwise we let the regularized gamma take the strain (the result is unlikely to underflow in the central region anyway) and combine with `lgamma` in the hopes that we get a finite result.
*
* @param {NonNegativeNumber} x - function parameter
* @param {PositiveNumber} a - function parameter
* @param {boolean} [regularized=true] - boolean indicating if the function should evaluate the regularized or non-regularized incomplete gamma functions
* @param {boolean} [upper=false] - boolean indicating if the function should return the upper tail of the incomplete gamma function
* @returns {number} function value
*/function t(e,i,n,r){var s,a,o,l,h,c,d,u,f,g,p,m,b;if(e<0||i<=0)return NaN;if(a=void 0===n||n,d=r,u=0,i>=170&&!a)return(u=d&&4*i<e?i*tr(e)-e+tr(nW(i,e)):!d&&i>4*e?i*tr(e)-e+tr(ny(i,e,l=0)/i):0===(u=t(i,e,!0,d))?d?tr(// Try http://functions.wolfram.com/06.06.06.0039.01
u=1+1/(12*i)+1/(288*i*i))-i+(i-.5)*tr(i)+tr(il):i*tr(e)-e+tr(ny(i,e,l=0)/i):tr(u)+J(i))>iU?te:iI(u);/* eslint-disable default-case */switch(i<30&&i<=e+1&&e<iU?h=!(f=(m=t4(i))===i)&&.5===tn(m-i):f=h=!1,f&&e>.6?(// Calculate Q via finite sum:
d=!d,o=0):h&&e>.2?(// Calculate Q via finite sum for half integer a:
d=!d,o=1):e<ij&&i>1?o=6:e<.5?o=-.4/tr(e)<i?2:3:e<1.1?o=.75*e<i?2:3:(// Begin by testing whether we're in the "bad" zone where the result will be near 0.5 and the usual series and continued fractions are slow to converge:
c=!1,a&&i>20&&(g=tn((e-i)/i),i>200?20/i>g*g&&(c=!0):g<.4&&(c=!0)),c?o=5:e-1/(3*e)<i?o=2:(o=4,d=!d)),o){case 0:u=iY(i,e),!1===a&&(u*=ir(i));break;case 1:u=iX(i,e),!1===a&&(u*=ir(i));break;case 2:0!==// Compute P:
(u=a?n_(i,e):i3(i,e))&&(l=0,s=!1,d&&(l=a?1:ir(i),a||u>=1||i$*u>l?(l/=u,a||i<1||i$/i>l?(l*=-i,s=!0):l=0):l=0)),u*=ny(i,e,l)/i,s&&(d=!1,u=-u);break;case 3:u=(p=nO(i,e,// Compute Q:
d=!d))[0],b=p[1],d=!1,a&&(u/=b);break;case 4:0!==// Compute Q:
(u=a?n_(i,e):i3(i,e))&&(u*=nW(i,e));break;case 5:u=i6(i,e),e>=i&&(d=!d);break;case 6:u=(a?ih(e,i)/ir(i+1):ih(e,i)/i)*(1-i*e/(i+1))}return a&&u>1&&(u=1),d&&(u=(a?1:ir(i))-u),u},// EXPORTS //
K=// MAIN //
/**
* Evaluates the cumulative distribution function (CDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.
*
* @param {number} x - input value
* @param {NonNegativeNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {Probability} evaluated CDF
*
* @example
* var y = cdf( 2.0, 1.0, 1.0 );
* // returns ~0.865
*
* @example
* var y = cdf( 2.0, 3.0, 1.0 );
* // returns ~0.323
*
* @example
* var y = cdf( -1.0, 2.0, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( +Infinity, 4.0, 2.0 );
* // returns 1.0
*
* @example
* var y = cdf( -Infinity, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = cdf( NaN, 0.0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, 0.0, NaN );
* // returns NaN
*
* @example
* var y = cdf( 2.0, -1.0, 1.0 );
* // returns NaN
*
* @example
* var y = cdf( 2.0, 1.0, -1.0 );
* // returns NaN
*/function(t,e,i){return Q(t)||Q(e)||Q(i)||e<0||i<=0?NaN:0===e?t<0?0:1:t<=0?0:t===te?1:Z(t*i,e)};var nX={};// EXPORTS //
nX=/**
* Creates a function which always returns the same value.
*
* @param {*} [value] - value to always return
* @returns {Function} constant function
*
* @example
* var fcn = wrap( 3.14 );
*
* var v = fcn();
* // returns 3.14
*
* v = fcn();
* // returns 3.14
*
* v = fcn();
* // returns 3.14
*/function(t){return(/**
	* Constant function.
	*
	* @private
	* @returns {*} constant value
	*/function(){return t})};var nq={};// MAIN //
h(// EXPORTS //
nq=// MAIN //
/**
* Evaluates the cumulative distribution function (CDF) for a degenerate distribution with mean value `mu`.
*
* @param {number} x - input value
* @param {number} mu - constant value of distribution
* @returns {Probability} evaluated cumulative distribution function
*
* @example
* var y = cdf( 2.0, 3.0 );
* // returns 0.0
*
* @example
* var y = cdf( 4.0, 3.0 );
* // returns 1.0
*
* @example
* var y = cdf( 3.0, 3.0 );
* // returns 1.0
*
* @example
* var y = cdf( NaN, 0.0 );
* // returns NaN
*
* @example
* var y = cdf( 0.0, NaN );
* // returns NaN
*/function(t,e){return Q(t)||Q(e)?NaN:t<e?0:1},"factory",// MAIN //
/**
* Returns a function for evaluating the cumulative distribution function (CDF) of a degenerate distribution centered at a provided mean value.
*
* @param {number} mu - constant value of distribution
* @returns {Function} function to evaluate the cumulative distribution function
*
* @example
* var cdf = factory( 5.0 );
*
* var y = cdf( 3.0 );
* // returns 0.0
*
* y = cdf( 6.0 );
* // returns 1.0
*
* y = cdf( NaN );
* // returns NaN
*/function(t){return Q(t)?nX(NaN):/**
	* Evaluates the cumulative distribution function (CDF) of a degenerate distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated cumulative distribution function
	*
	* @example
	* var y = cdf( 10.0 );
	* // returns <number>
	*/function(e){return Q(e)?NaN:e<t?0:1}});var nG=nq.factory;/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 *//*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */function nK(t){return t+.5|0}// MAIN //
h(K,"factory",// MAIN //
/**
* Returns a function for evaluating the cumulative distribution function (CDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta`.
*
* @param {NonNegativeNumber} alpha - shape parameter
* @param {PositiveNumber} beta - rate parameter
* @returns {Function} CDF
*
* @example
* var cdf = factory( 0.5, 0.1 );
* var y = cdf( 12.0 );
* // returns ~0.879
*
* y = cdf( 8.0 );
* // returns ~0.794
*/function(t,e){return Q(t)||Q(e)||t<0||e<=0?nX(NaN):0===t?nG(0):/**
	* Evaluates the cumulative distribution function (CDF) for a gamma distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/function(i){return i<=0?0:i===te?1:Z(i*e,t)}}),// EXPORTS //
l=K;const nZ=(t,e,i)=>Math.max(Math.min(t,i),e);function nJ(t){return nZ(nK(2.55*t),0,255)}function nQ(t){return nZ(nK(255*t),0,255)}function n0(t){return nZ(nK(t/2.55)/100,0,1)}function n1(t){return nZ(nK(100*t),0,100)}const n2={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},n3=[..."0123456789ABCDEF"],n5=t=>n3[15&t],n6=t=>n3[(240&t)>>4]+n3[15&t],n4=t=>(240&t)>>4==(15&t),n7=t=>n4(t.r)&&n4(t.g)&&n4(t.b)&&n4(t.a),n9=(t,e)=>t<255?e(t):"",n8=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function rt(t,e,i){let n=e*Math.min(i,1-i),r=(e,r=(e+t/30)%12)=>i-n*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}function re(t,e,i){let n=(n,r=(n+t/60)%6)=>i-i*e*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function ri(t,e,i){let n;let r=rt(t,1,.5);for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)r[n]*=1-e-i,r[n]+=e;return r}function rn(t){let e,i,n;let r=t.r/255,s=t.g/255,a=t.b/255,o=Math.max(r,s,a),l=Math.min(r,s,a),h=(o+l)/2;return o!==l&&(n=o-l,i=h>.5?n/(2-o-l):n/(o+l),e=60*(e=r===o?(s-a)/n+(s<a?6:0):s===o?(a-r)/n+2:(r-s)/n+4)+.5),[0|e,i||0,h]}function rr(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(nQ)}function rs(t){return(t%360+360)%360}const ra={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},ro={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},rl=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,rh=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,rc=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function rd(t,e,i){if(t){let n=rn(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=rr(rt,n,void 0,void 0),t.r=n[0],t.g=n[1],t.b=n[2]}}function ru(t,e){return t?Object.assign(e||{},t):t}function rf(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=nQ(t[3]))):(e=ru(t,{r:0,g:0,b:0,a:1})).a=nQ(e.a),e}class rg{constructor(e){let i;if(e instanceof rg)return e;let n=typeof e;if("object"===n)i=rf(e);else if("string"===n){var r,s;s=e.length,"#"===e[0]&&(4===s||5===s?r={r:255&17*n2[e[1]],g:255&17*n2[e[2]],b:255&17*n2[e[3]],a:5===s?17*n2[e[4]]:255}:(7===s||9===s)&&(r={r:n2[e[1]]<<4|n2[e[2]],g:n2[e[3]]<<4|n2[e[4]],b:n2[e[5]]<<4|n2[e[6]],a:9===s?n2[e[7]]<<4|n2[e[8]]:255})),i=r||function(e){t||((t=function(){let t,e,i,n,r;let s={},a=Object.keys(ro),o=Object.keys(ra);for(t=0;t<a.length;t++){for(e=0,n=r=a[t];e<o.length;e++)i=o[e],r=r.replace(i,ra[i]);i=parseInt(ro[n],16),s[r]=[i>>16&255,i>>8&255,255&i]}return s}()).transparent=[0,0,0,0]);let i=t[e.toLowerCase()];return i&&{r:i[0],g:i[1],b:i[2],a:4===i.length?i[3]:255}}(e)||("r"===e.charAt(0)?function(t){let e,i,n;let r=rl.exec(t),s=255;if(r){if(r[7]!==e){let t=+r[7];s=r[8]?nJ(t):nZ(255*t,0,255)}return e=+r[1],i=+r[3],n=+r[5],{r:e=255&(r[2]?nJ(e):nZ(e,0,255)),g:i=255&(r[4]?nJ(i):nZ(i,0,255)),b:n=255&(r[6]?nJ(n):nZ(n,0,255)),a:s}}}(e):function(t){let e;let i=n8.exec(t),n=255;if(!i)return;i[5]!==e&&(n=i[6]?nJ(+i[5]):nQ(+i[5]));let r=rs(+i[2]),s=+i[3]/100,a=+i[4]/100;return{r:(e="hwb"===i[1]?rr(ri,r,s,a):"hsv"===i[1]?rr(re,r,s,a):rr(rt,r,s,a))[0],g:e[1],b:e[2],a:n}}(e))}this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=ru(this._rgb);return t&&(t.a=n0(t.a)),t}set rgb(t){this._rgb=rf(t)}rgbString(){var t;return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${n0(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0}hexString(){var t,e;return this._valid?(e=n7(t=this._rgb)?n5:n6,t?"#"+e(t.r)+e(t.g)+e(t.b)+n9(t.a,e):void 0):void 0}hslString(){return this._valid?function(t){if(!t)return;let e=rn(t),i=e[0],n=n1(e[1]),r=n1(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${r}%, ${n0(t.a)})`:`hsl(${i}, ${n}%, ${r}%)`}(this._rgb):void 0}mix(t,e){if(t){let i;let n=this.rgb,r=t.rgb,s=e===i?.5:e,a=2*s-1,o=n.a-r.a,l=((a*o==-1?a:(a+o)/(1+a*o))+1)/2;i=1-l,n.r=255&l*n.r+i*r.r+.5,n.g=255&l*n.g+i*r.g+.5,n.b=255&l*n.b+i*r.b+.5,n.a=s*n.a+(1-s)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){let n=rc(n0(t.r)),r=rc(n0(t.g)),s=rc(n0(t.b));return{r:nQ(rh(n+i*(rc(n0(e.r))-n))),g:nQ(rh(r+i*(rc(n0(e.g))-r))),b:nQ(rh(s+i*(rc(n0(e.b))-s))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new rg(this.rgb)}alpha(t){return this._rgb.a=nQ(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=nK(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return rd(this._rgb,2,t),this}darken(t){return rd(this._rgb,2,-t),this}saturate(t){return rd(this._rgb,1,t),this}desaturate(t){return rd(this._rgb,1,-t),this}rotate(t){var e,i;return(i=rn(e=this._rgb))[0]=rs(i[0]+t),i=rr(rt,i,void 0,void 0),e.r=i[0],e.g=i[1],e.b=i[2],this}}/**
 * @namespace Chart.helpers
 *//**
 * An empty function that can be used, for example, for optional callback.
 */function rp(){/* noop */}/**
 * Returns a unique id, sequentially generated from a global variable.
 */const rm=(e=0,()=>e++);/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function rb(t){return null==t}/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */function rx(t){if(Array.isArray&&Array.isArray(t))return!0;let e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function ry(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */function rv(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */function r_(t,e){return rv(t)?t:e}/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */function rw(t,e){return void 0===t?e:t}const rM=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,rk=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */function rS(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function rP(t,e,i,n){let r,s,a;if(rx(t)){if(s=t.length,n)for(r=s-1;r>=0;r--)e.call(i,t[r],r);else for(r=0;r<s;r++)e.call(i,t[r],r)}else if(ry(t))for(r=0,s=(a=Object.keys(t)).length;r<s;r++)e.call(i,t[a[r]],a[r])}/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */function rC(t,e){let i,n,r,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(r=t[i],s=e[i],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */function rD(t){if(rx(t))return t.map(rD);if(ry(t)){let e=Object.create(null),i=Object.keys(t),n=i.length,r=0;for(;r<n;++r)e[i[r]]=rD(t[i[r]]);return e}return t}function rA(t){return -1===["__proto__","prototype","constructor"].indexOf(t)}/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */function rO(t,e,i,n){if(!rA(t))return;let r=e[t],s=i[t];ry(r)&&ry(s)?rE(r,s,n):e[t]=rD(s)}function rE(t,e,i){let n;let r=rx(e)?e:[e],s=r.length;if(!ry(t))return t;i=i||{};let a=i.merger||rO;for(let e=0;e<s;++e){if(!ry(n=r[e]))continue;let s=Object.keys(n);for(let e=0,r=s.length;e<r;++e)a(s[e],t,n,i)}return t}function rT(t,e){// eslint-disable-next-line @typescript-eslint/no-use-before-define
return rE(t,e,{merger:rL})}/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */function rL(t,e,i){if(!rA(t))return;let n=e[t],r=i[t];ry(n)&&ry(r)?rT(n,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=rD(r))}// resolveObjectKey resolver cache
const rI={// Chart.helpers.core resolveObjectKey should resolve empty key to root object
"":t=>t,// default resolvers
x:t=>t.x,y:t=>t.y};function rR(t,e){let i=rI[e]||(rI[e]=function(t){let e=/**
 * @private
 */function(t){let e=t.split("."),i=[],n="";for(let t of e)(n+=t).endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}(t);return t=>{for(let i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}/**
 * @private
 */function rF(t){return t.charAt(0).toUpperCase()+t.slice(1)}const rz=t=>void 0!==t,rN=t=>"function"==typeof t,rV=(t,e)=>{if(t.size!==e.size)return!1;for(let i of t)if(!e.has(i))return!1;return!0},rB=Math.PI,rW=2*rB,rH=rW+rB,rj=Number.POSITIVE_INFINITY,r$=rB/180,rU=rB/2,rY=rB/4,rX=2*rB/3,rq=Math.log10,rG=Math.sign;function rK(t,e,i){return Math.abs(t-e)<i}/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */function rZ(t){let e=Math.round(t);t=rK(t,e,t/1e3)?e:t;let i=Math.pow(10,Math.floor(rq(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function rJ(t){return!isNaN(parseFloat(t))&&isFinite(t)}/**
 * @private
 */function rQ(t,e,i){let n,r,s;for(n=0,r=t.length;n<r;n++)isNaN(s=t[n][i])||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function r0(t){return t*(rB/180)}/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */function r1(t){if(!rv(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}// Gets the angle from vertical upright to the point about a centre.
function r2(t,e){let i=e.x-t.x,n=e.y-t.y,r=Math.atan2(n,i);return r<-.5*rB&&(r+=rW),{angle:r,distance:Math.sqrt(i*i+n*n)}}function r3(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}/**
 * Shortest distance between angles, in either direction.
 * @private
 */function r5(t,e){return(t-e+rH)%rW-rB}/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */function r6(t){return(t%rW+rW)%rW}/**
 * @private
 */function r4(t,e,i,n){let r=r6(t),s=r6(e),a=r6(i),o=r6(s-r),l=r6(a-r),h=r6(r-s),c=r6(r-a);return r===s||r===a||n&&s===a||o>l&&h<c}/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */function r7(t,e,i){return Math.max(e,Math.min(i,t))}/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */function r9(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}function r8(t,e,i){let n;i=i||(i=>t[i]<e);let r=t.length-1,s=0;for(;r-s>1;)i(n=s+r>>1)?s=n:r=n;return{lo:s,hi:r}}/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */const st=(t,e,i,n)=>r8(t,i,n?n=>{let r=t[n][e];return r<i||r===i&&t[n+1][e]===i}:n=>t[n][e]<i),se=(t,e,i)=>r8(t,i,n=>t[n][e]>=i),si=["push","pop","shift","splice","unshift"];function sn(t,e){let i=t._chartjs;if(!i)return;let n=i.listeners,r=n.indexOf(e);-1!==r&&n.splice(r,1),n.length>0||(si.forEach(e=>{delete t[e]}),delete t._chartjs)}/**
 * @param items
 */function sr(t){let e=new Set(t);return e.size===t.length?t:Array.from(e)}/**
* Request animation polyfill
*/const ss="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */function sa(t,e){let i=[],n=!1;return function(...r){// Save the args for use later
i=r,n||(n=!0,ss.call(window,()=>{n=!1,t.apply(e,i)}))}}/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */const so=t=>"start"===t?"left":"end"===t?"right":"center",sl=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,sh=(t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e;/**
 * Return start and count of visible points.
 * @private
 */function sc(t,e,i){let n=e.length,r=0,s=n;if(t._sorted){let{iScale:a,_parsed:o}=t,l=a.axis,{min:h,max:c,minDefined:d,maxDefined:u}=a.getUserBounds();d&&(r=r7(Math.min(st(o,l,h).lo,i?n:st(e,l,a.getPixelForValue(h)).lo),0,n-1)),s=u?r7(Math.max(st(o,a.axis,c,!0).hi+1,i?0:st(e,l,a.getPixelForValue(c),!0).hi+1),r,n)-r:n-r}return{start:r,count:s}}/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */function sd(t){let{xScale:e,yScale:i,_scaleRanges:n}=t,r={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=r,!0;let s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,r),s}const su=t=>0===t||1===t,sf=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*rW/i)),sg=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*rW/i)+1,sp={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*rU)+1,easeOutSine:t=>Math.sin(t*rU),easeInOutSine:t=>-.5*(Math.cos(rB*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>su(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(-Math.pow(2,-10*(2*t-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>su(t)?t:sf(t,.075,.3),easeOutElastic:t=>su(t)?t:sg(t,.075,.3),easeInOutElastic:t=>su(t)?t:t<.5?.5*sf(2*t,.1125,.45):.5+.5*sg(2*t-1,.1125,.45),easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-sp.easeOutBounce(1-t),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInOutBounce:t=>t<.5?.5*sp.easeInBounce(2*t):.5*sp.easeOutBounce(2*t-1)+.5};function sm(t){if(t&&"object"==typeof t){let e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function sb(t){return sm(t)?t:new rg(t)}function sx(t){return sm(t)?t:new rg(t).saturate(.5).darken(.1).hexString()}const sy=["x","y","borderWidth","radius","tension"],sv=["color","borderColor","backgroundColor"],s_=new Map;function sw(t,e,i){return(function(t,e){e=e||{};let i=t+JSON.stringify(e),n=s_.get(i);return n||(n=new Intl.NumberFormat(t,e),s_.set(i,n)),n})(e,i).format(t)}const sM={values:t=>rx(t)?t:""+t,numeric(t,e,i){let n;if(0===t)return"0";let r=this.chart.options.locale,s=t;if(i.length>1){let e;let r=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(r<1e-4||r>1e15)&&(n="scientific"),Math.abs(e=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),s=e}let a=rq(Math.abs(s)),o=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:n,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),sw(t,r,l)},logarithmic(t,e,i){if(0===t)return"0";let n=i[e].significand||t/Math.pow(10,Math.floor(rq(t)));return[1,2,3,5,10,15].includes(n)||e>.8*i.length?sM.numeric.call(this,t,e,i):""}};var sk={formatters:sM};const sS=Object.create(null),sP=Object.create(null);function sC(t,e){if(!e)return t;let i=e.split(".");for(let e=0,n=i.length;e<n;++e){let n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function sD(t,e,i){return"string"==typeof e?rE(sC(t,e),i):rE(sC(t,""),e)}var sA=/* #__PURE__ */new class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>sx(e.backgroundColor),this.hoverBorderColor=(t,e)=>sx(e.borderColor),this.hoverColor=(t,e)=>sx(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return sD(this,t,e)}get(t){return sC(this,t)}describe(t,e){return sD(sP,t,e)}override(t,e){return sD(sS,t,e)}route(t,e,i,n){let r=sC(this,t),s=sC(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){let t=this[a],e=s[n];return ry(t)?Object.assign({},e,t):rw(t,e)},set(t){this[a]=t}}})}apply(t){t.forEach(t=>t(this))}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:sv},numbers:{type:"number",properties:sy}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:sk.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);/**
 * @private
 */function sO(t,e,i,n,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,i.push(r)),s>n&&(n=s),n}/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */function sE(t,e,i){let n=t.currentDevicePixelRatio,r=0!==i?Math.max(i/2,.5):0;return Math.round((e-r)*n)/n+r}/**
 * Clears the entire canvas.
 */function sT(t,e){(e=e||t.getContext("2d")).save(),// canvas.width and canvas.height do not consider the canvas transform,
// while clearRect does
e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function sL(t,e,i,n){// eslint-disable-next-line @typescript-eslint/no-use-before-define
sI(t,e,i,n,null)}// eslint-disable-next-line complexity
function sI(t,e,i,n,r){let s,a,o,l,h,c,d,u;let f=e.pointStyle,g=e.rotation,p=e.radius,m=(g||0)*r$;if(f&&"object"==typeof f&&("[object HTMLImageElement]"===(s=f.toString())||"[object HTMLCanvasElement]"===s)){t.save(),t.translate(i,n),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!isNaN(p)&&!(p<=0)){switch(t.beginPath(),f){// Default includes circle
default:r?t.ellipse(i,n,r/2,p,0,0,rW):t.arc(i,n,p,0,rW),t.closePath();break;case"triangle":c=r?r/2:p,t.moveTo(i+Math.sin(m)*c,n-Math.cos(m)*p),m+=rX,t.lineTo(i+Math.sin(m)*c,n-Math.cos(m)*p),m+=rX,t.lineTo(i+Math.sin(m)*c,n-Math.cos(m)*p),t.closePath();break;case"rectRounded":// NOTE: the rounded rect implementation changed to use `arc` instead of
// `quadraticCurveTo` since it generates better results when rect is
// almost a circle. 0.516 (instead of 0.5) produces results with visually
// closer proportion to the previous impl and it is inscribed in the
// circle with `radius`. For more details, see the following PRs:
// https://github.com/chartjs/Chart.js/issues/5597
// https://github.com/chartjs/Chart.js/issues/5858
h=.516*p,a=Math.cos(m+rY)*(l=p-h),d=Math.cos(m+rY)*(r?r/2-h:l),o=Math.sin(m+rY)*l,u=Math.sin(m+rY)*(r?r/2-h:l),t.arc(i-d,n-o,h,m-rB,m-rU),t.arc(i+u,n-a,h,m-rU,m),t.arc(i+d,n+o,h,m,m+rU),t.arc(i-u,n+a,h,m+rU,m+rB),t.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*p,c=r?r/2:l,t.rect(i-c,n-l,2*c,2*l);break}m+=rY;/* falls through */case"rectRot":d=Math.cos(m)*(r?r/2:p),a=Math.cos(m)*p,o=Math.sin(m)*p,u=Math.sin(m)*(r?r/2:p),t.moveTo(i-d,n-o),t.lineTo(i+u,n-a),t.lineTo(i+d,n+o),t.lineTo(i-u,n+a),t.closePath();break;case"crossRot":m+=rY;/* falls through */case"cross":d=Math.cos(m)*(r?r/2:p),a=Math.cos(m)*p,o=Math.sin(m)*p,u=Math.sin(m)*(r?r/2:p),t.moveTo(i-d,n-o),t.lineTo(i+d,n+o),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a);break;case"star":d=Math.cos(m)*(r?r/2:p),a=Math.cos(m)*p,o=Math.sin(m)*p,u=Math.sin(m)*(r?r/2:p),t.moveTo(i-d,n-o),t.lineTo(i+d,n+o),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a),m+=rY,d=Math.cos(m)*(r?r/2:p),a=Math.cos(m)*p,o=Math.sin(m)*p,u=Math.sin(m)*(r?r/2:p),t.moveTo(i-d,n-o),t.lineTo(i+d,n+o),t.moveTo(i+u,n-a),t.lineTo(i-u,n+a);break;case"line":a=r?r/2:Math.cos(m)*p,o=Math.sin(m)*p,t.moveTo(i-a,n-o),t.lineTo(i+a,n+o);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(m)*(r?r/2:p),n+Math.sin(m)*p);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}}/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */function sR(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function sF(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function sz(t){t.restore()}/**
 * @private
 */function sN(t,e,i,n,r){if(!e)return t.lineTo(i.x,i.y);if("middle"===r){let n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===r!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}/**
 * @private
 */function sV(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}/**
 * Render text onto the canvas
 */function sB(t,e,i,n,r,s={}){let a,o;let l=rx(e)?e:[e],h=s.strokeWidth>0&&""!==s.strokeColor;for(t.save(),t.font=r.string,s.translation&&t.translate(s.translation[0],s.translation[1]),rb(s.rotation)||t.rotate(s.rotation),s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),a=0;a<l.length;++a)o=l[a],s.backdrop&&function(t,e){let i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}(t,s.backdrop),h&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),rb(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(o,i,n,s.maxWidth)),t.fillText(o,i,n,s.maxWidth),function(t,e,i,n,r){if(r.strikethrough||r.underline){/**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */let s=t.measureText(n),a=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,l=i-s.actualBoundingBoxAscent,h=i+s.actualBoundingBoxDescent,c=r.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(a,c),t.lineTo(o,c),t.stroke()}}(t,i,n,o,s),n+=Number(r.lineHeight);t.restore()}/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */function sW(t,e){let{x:i,y:n,w:r,h:s,radius:a}=e;// top left arc
t.arc(i+a.topLeft,n+a.topLeft,a.topLeft,1.5*rB,rB,!0),// line from top left to bottom left
t.lineTo(i,n+s-a.bottomLeft),// bottom left arc
t.arc(i+a.bottomLeft,n+s-a.bottomLeft,a.bottomLeft,rB,rU,!0),// line from bottom left to bottom right
t.lineTo(i+r-a.bottomRight,n+s),// bottom right arc
t.arc(i+r-a.bottomRight,n+s-a.bottomRight,a.bottomRight,rU,0,!0),// line from bottom right to top right
t.lineTo(i+r,n+a.topRight),// top right arc
t.arc(i+r-a.topRight,n+a.topRight,a.topRight,0,-rU,!0),// line from top right to top left
t.lineTo(i+a.topLeft,n)}const sH=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,sj=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,s$=t=>+t||0;function sU(t,e){let i={},n=ry(e),r=n?Object.keys(e):e,s=ry(t)?n?i=>rw(t[i],t[e[i]]):e=>t[e]:()=>t;for(let t of r)i[t]=s$(s(t));return i}/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */function sY(t){return sU(t,{top:"y",right:"x",bottom:"y",left:"x"})}/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */function sX(t){return sU(t,["topLeft","topRight","bottomLeft","bottomRight"])}/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */function sq(t){let e=sY(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */function sG(t,e){t=t||{},e=e||sA.font;let i=rw(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=rw(t.style,e.style);n&&!(""+n).match(sj)&&(console.warn('Invalid font style specified: "'+n+'"'),n=void 0);let r={family:rw(t.family,e.family),lineHeight:/**
 * @alias Chart.helpers.options
 * @namespace
 *//**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */function(t,e){let i=(""+t).match(sH);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}(rw(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:rw(t.weight,e.weight),string:""};return r.string=!r||rb(r.size)||rb(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family,r}/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */function sK(t,e,i,n){let r,s,a,o=!0;for(r=0,s=t.length;r<s;++r)if(void 0!==(a=t[r])&&(void 0!==e&&"function"==typeof a&&(a=a(e),o=!1),void 0!==i&&rx(a)&&(a=a[i%a.length],o=!1),void 0!==a))return n&&!o&&(n.cacheable=!1),a}function sZ(t,e){return Object.assign(Object.create(t),e)}/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */function sJ(t,e=[""],i,n,r=()=>t[0]){let s=i||t;void 0===n&&(n=s7("_fallback",t));let a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:n,_getTarget:r,override:i=>sJ([i,...t],e,s,n)};return new Proxy(a,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),/**
     * A trap for getting property values.
     */get:(i,n)=>s3(i,n,()=>(function(t,e,i,n){let r;for(let s of e)if(void 0!==(r=s7(s1(s,t),i)))return s2(t,r)?s6(i,n,t,r):r})(n,e,t,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),/**
     * A trap for the in operator.
     */has:(t,e)=>s9(t).includes(e),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:t=>s9(t),/**
     * A trap for setting property values.
     */set(t,e,i){let n=t._storage||(t._storage=r());return t[e]=n[e]=i,delete t._keys,!0}})}/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */function sQ(t,e,i,n){let r={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:s0(t,n),setContext:e=>sQ(t,e,i,n),override:r=>sQ(t.override(r),e,i,n)};return new Proxy(r,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),/**
     * A trap for getting property values.
     */get:(t,e,i)=>s3(t,e,()=>(function(t,e,i){let{_proxy:n,_context:r,_subProxy:s,_descriptors:a}=t,o=n[e];return rN(o)&&a.isScriptable(e)&&(o=function(t,e,i,n){let{_proxy:r,_context:s,_subProxy:a,_stack:o}=i;if(o.has(t))throw Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);o.add(t);let l=e(s,a||n);return o.delete(t),s2(t,l)&&(l=s6(r._scopes,r,t,l)),l}(e,o,t,i)),rx(o)&&o.length&&(o=function(t,e,i,n){let{_proxy:r,_context:s,_subProxy:a,_descriptors:o}=i;if(void 0!==s.index&&n(t))return e[s.index%e.length];if(ry(e[0])){// Array of objects, return array or resolvers
        let i=e,n=r._scopes.filter(t=>t!==i);for(let l of(e=[],i)){let i=s6(n,r,t,l);e.push(sQ(i,s,a&&a[t],o))}}return e}(e,o,t,a.isIndexable)),s2(e,o)&&(o=sQ(o,r,s&&s[e],a)),o})(t,e,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t),/**
     * A trap for the in operator.
     */has:(e,i)=>Reflect.has(t,i),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:()=>Reflect.ownKeys(t),/**
     * A trap for setting property values.
     */set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}/**
 * @private
 */function s0(t,e={scriptable:!0,indexable:!0}){let{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:i,indexable:n,isScriptable:rN(i)?i:()=>i,isIndexable:rN(n)?n:()=>n}}const s1=(t,e)=>t?t+rF(e):e,s2=(t,e)=>ry(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function s3(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];let n=i();return(// cache the resolved value
t[e]=n,n)}const s5=(t,e)=>!0===t?e:"string"==typeof t?rR(e,t):void 0;function s6(t,e,i,n){var r;let s=e._rootScopes,a=rN(r=e._fallback)?r(i,n):r,o=[...t,...s],l=new Set;l.add(n);let h=s4(l,o,i,a||i,n);return null!==h&&(void 0===a||a===i||null!==(h=s4(l,o,a,h,n)))&&sJ(Array.from(l),[""],s,a,()=>(function(t,e,i){let n=t._getTarget();e in n||(n[e]={});let r=n[e];return rx(r)&&ry(i)?i:r||{}})(e,i,n))}function s4(t,e,i,n,r){for(;i;)i=function(t,e,i,n,r){for(let a of e){let e=s5(i,a);if(e){var s;t.add(e);let a=rN(s=e._fallback)?s(i,r):s;if(void 0!==a&&a!==i&&a!==n)// The fallback will resume to that new scope.
return a}else if(!1===e&&void 0!==n&&i!==n)// For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
return null}return!1}(t,e,i,n,r);return i}function s7(t,e){for(let i of e){if(!i)continue;let e=i[t];if(void 0!==e)return e}}function s9(t){let e=t._keys;return e||(e=t._keys=function(t){let e=new Set;for(let i of t)for(let t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}function s8(t,e,i,n){let r,s,a;let{iScale:o}=t,{key:l="r"}=this._parsing,h=Array(n);for(r=0;r<n;++r)a=e[s=r+i],h[r]={r:o.parse(rR(a,l),s)};return h}const at=Number.EPSILON||1e-14,ae=(t,e)=>e<t.length&&!t[e].skip&&t[e],ai=t=>"x"===t?"y":"x";function an(t,e,i){return Math.max(Math.min(t,i),e)}/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 *//**
 * @private
 */function ar(){return"undefined"!=typeof window&&"undefined"!=typeof document}/**
 * @private
 */function as(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */function aa(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const ao=t=>t.ownerDocument.defaultView.getComputedStyle(t,null),al=["top","right","bottom","left"];function ah(t,e,i){let n={};i=i?"-"+i:"";for(let r=0;r<4;r++){let s=al[r];n[s]=parseFloat(t[e+"-"+s+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}const ac=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */function ad(t,e){if("native"in t)return t;let{canvas:i,currentDevicePixelRatio:n}=e,r=ao(i),s="border-box"===r.boxSizing,a=ah(r,"padding"),o=ah(r,"border","width"),{x:l,y:h,box:c}=/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */function(t,e){let i,n;let r=t.touches,s=r&&r.length?r[0]:t,{offsetX:a,offsetY:o}=s,l=!1;if(ac(a,o,t.target))i=a,n=o;else{let t=e.getBoundingClientRect();i=s.clientX-t.left,n=s.clientY-t.top,l=!0}return{x:i,y:n,box:l}}(t,i),d=a.left+(c&&o.left),u=a.top+(c&&o.top),{width:f,height:g}=e;return s&&(f-=a.width+o.width,g-=a.height+o.height),{x:Math.round((l-d)/f*i.width/n),y:Math.round((h-u)/g*i.height/n)}}const au=t=>Math.round(10*t)/10;/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */function af(t,e,i){let n=e||1,r=Math.floor(t.height*n),s=Math.floor(t.width*n);t.height=Math.floor(t.height),t.width=Math.floor(t.width);let a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||a.height!==r||a.width!==s)&&(t.currentDevicePixelRatio=n,a.height=r,a.width=s,t.ctx.setTransform(n,0,0,n,0,0),!0)}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */const ag=function(){let t=!1;try{let e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){// continue regardless of error
}return t}();/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */function ap(t,e){let i=ao(t).getPropertyValue(e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}/**
 * @private
 */function am(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}/**
 * @private
 */function ab(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}/**
 * @private
 */function ax(t,e,i,n){let r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=am(t,r,i),o=am(r,s,i),l=am(s,e,i),h=am(a,o,i),c=am(o,l,i);return am(h,c,i)}function ay(t,e,i){var n;return t?(n=i,{x:t=>e+e+n-t,setWidth(t){n=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function av(t,e){let i,n;("ltr"===e||"rtl"===e)&&(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function a_(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function aw(t){return"angle"===t?{between:r4,compare:r5,normalize:r6}:{between:r9,compare:(t,e)=>t-e,normalize:t=>t}}function aM({start:t,end:e,count:i,loop:n,style:r}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:r}}function ak(t,e,i){let n,r,s;if(!i)return[t];let{property:a,start:o,end:l}=i,h=e.length,{compare:c,between:d,normalize:u}=aw(a),{start:f,end:g,loop:p,style:m}=function(t,e,i){let n;let{property:r,start:s,end:a}=i,{between:o,normalize:l}=aw(r),h=e.length,{start:c,end:d,loop:u}=t;if(u){for(c+=h,d+=h,n=0;n<h&&o(l(e[c%h][r]),s,a);++n)c--,d--;c%=h,d%=h}return d<c&&(d+=h),{start:c,end:d,loop:u,style:t.style}}(t,e,i),b=[],x=!1,y=null,v=()=>d(o,s,n)&&0!==c(o,s),_=()=>0===c(l,n)||d(l,s,n),w=()=>x||v(),M=()=>!x||_();for(let t=f,i=f;t<=g;++t)(r=e[t%h]).skip||(n=u(r[a]))===s||(x=d(n,o,l),null===y&&w()&&(y=0===c(n,o)?t:i),null!==y&&M()&&(b.push(aM({start:y,end:t,loop:p,count:h,style:m})),y=null),i=t,s=n);return null!==y&&b.push(aM({start:y,end:g,loop:p,count:h,style:m})),b}function aS(t,e){let i=[],n=t.segments;for(let r=0;r<n.length;r++){let s=ak(n[r],t.points,e);s.length&&i.push(...s)}return i}function aP(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){let r=t._chart.getContext(),s=aC(t.options),{_datasetIndex:a,options:{spanGaps:o}}=t,l=i.length,h=[],c=s,d=e[0].start,u=d;function f(t,e,n,r){let s=o?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=s;for(;i[e%l].skip;)e+=s;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:n,style:r}),c=r,d=e%l)}}for(let t of e){let e;let s=i[(d=o?d:t.start)%l];for(u=d+1;u<=t.end;u++){let o=i[u%l];(function(t,e){if(!e)return!1;let i=[],n=function(t,e){return sm(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,n)!==JSON.stringify(e,n)})(e=aC(n.setContext(sZ(r,{type:"segment",p0:s,p1:o,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),c)&&f(d,u-1,t.loop,c),s=o,c=e}d<u-1&&f(d,u-1,t.loop,c)}return h}(t,e,i,n):e}function aC(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}var aD=/* #__PURE__ */new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){let r=e.listeners[n],s=e.duration;r.forEach(n=>n({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=ss.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,n)=>{let r;if(!i.running||!i.items.length)return;let s=i.items,a=s.length-1,o=!1;for(;a>=0;--a)(r=s[a])._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),o=!0):(s[a]=s[s.length-1],s.pop());o&&(n.draw(),this._notify(n,i,t,"progress")),s.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=s.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!!e&&!!e.running&&!!e.items.length}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const aA="transparent",aO={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){let n=sb(t||aA),r=n.valid&&sb(e||aA);return r&&r.valid?r.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class aE{constructor(t,e,i,n){let r=e[i];n=sK([t.to,n,r,t.from]);let s=sK([t.from,r,n]);this._active=!0,this._fn=t.fn||aO[t.type||typeof s],this._easing=sp[t.easing]||sp.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=s,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let n=this._target[this._prop],r=i-this._start,s=this._duration-r;this._start=i,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=sK([t.to,e,n,t.from]),this._from=sK([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e;let i=t-this._start,n=this._duration,r=this._prop,s=this._from,a=this._loop,o=this._to;if(this._active=s!==o&&(a||i<n),!this._active){this._target[r]=o,this._notify(!0);return}if(i<0){this._target[r]=s;return}e=i/n%2,e=a&&e>1?2-e:e,e=this._easing(Math.min(1,Math.max(0,e))),this._target[r]=this._fn(s,o,e)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class aT{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ry(t))return;let e=Object.keys(sA.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{let r=t[n];if(!ry(r))return;let s={};for(let t of e)s[t]=r[t];(rx(r.properties)&&r.properties||[n]).forEach(t=>{t!==n&&i.has(t)||i.set(t,s)})})}_animateOptions(t,e){let i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}(t,i);if(!n)return[];let r=this._createAnimations(n,i);return i.$shared&&(function(t,e){let i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){let r=t[n[e]];r&&r.active()&&i.push(r.wait())}return Promise.all(i)})(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){let i;let n=this._properties,r=[],s=t.$animations||(t.$animations={}),a=Object.keys(e),o=Date.now();for(i=a.length-1;i>=0;--i){let l=a[i];if("$"===l.charAt(0))continue;if("options"===l){r.push(...this._animateOptions(t,e));continue}let h=e[l],c=s[l],d=n.get(l);if(c){if(d&&c.active()){c.update(d,h,o);continue}c.cancel()}if(!d||!d.duration){t[l]=h;continue}s[l]=c=new aE(d,t,l,h),r.push(c)}return r}update(t,e){if(0===this._properties.size){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return aD.add(this._chart,i),!0}}function aL(t,e){let i=t&&t.options||{},n=i.reverse,r=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:n?s:r,end:n?r:s}}function aI(t,e){let i,n;let r=[],s=t._getSortedDatasetMetas(e);for(i=0,n=s.length;i<n;++i)r.push(s[i].index);return r}function aR(t,e,i,n={}){let r,s,a,o;let l=t.keys,h="single"===n.mode;if(null!==e){for(r=0,s=l.length;r<s;++r){if((a=+l[r])===i){if(n.all)continue;break}rv(o=t.values[a])&&(h||0===e||rG(e)===rG(o))&&(e+=o)}return e}}function aF(t,e){let i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function az(t,e,i,n){for(let r of e.getMatchingVisibleMetas(n).reverse()){let e=t[r.index];if(i&&e>0||!i&&e<0)return r.index}return null}function aN(t,e){let i;let{chart:n,_cachedMeta:r}=t,s=n._stacks||(n._stacks={}),{iScale:a,vScale:o,index:l}=r,h=a.axis,c=o.axis,d=`${a.id}.${o.id}.${r.stack||r.type}`,u=e.length;for(let t=0;t<u;++t){let n=e[t],{[h]:a,[c]:u}=n,f=n._stacks||(n._stacks={});(i=f[c]=function(t,e,i){let n=t[e]||(t[e]={});return n[i]||(n[i]={})}(s,d,a))[l]=u,i._top=az(i,o,!0,r.type),i._bottom=az(i,o,!1,r.type);let g=i._visualValues||(i._visualValues={});g[l]=u}}function aV(t,e){let i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function aB(t,e){let i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n)for(let r of e=e||t._parsed){let t=r._stacks;if(!t||void 0===t[n]||void 0===t[n][i])return;delete t[n][i],void 0!==t[n]._visualValues&&void 0!==t[n]._visualValues[i]&&delete t[n]._visualValues[i]}}const aW=t=>"reset"===t||"none"===t,aH=(t,e)=>e?t:Object.assign({},t),aj=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:aI(i,!0),values:null};class a${static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=aF(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&aB(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,r=e.xAxisID=rw(i.xAxisID,aV(t,"x")),s=e.yAxisID=rw(i.yAxisID,aV(t,"y")),a=e.rAxisID=rw(i.rAxisID,aV(t,"r")),o=e.indexAxis,l=e.iAxisID=n(o,r,s,a),h=e.vAxisID=n(o,s,r,a);e.xScale=this.getScaleForId(r),e.yScale=this.getScaleForId(s),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&sn(this._data,this),t._stacked&&aB(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(ry(e))this._data=function(t){let e,i,n;let r=Object.keys(t),s=Array(r.length);for(e=0,i=r.length;e<i;++e)n=r[e],s[e]={x:n,y:t[n]};return s}(e);else if(i!==e){if(i){sn(i,this);let t=this._cachedMeta;aB(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),si.forEach(e=>{let i="_onData"+rF(e),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){let r=n.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"==typeof t[i]&&t[i](...e)}),r}})})}(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),n=!1;this._dataCheck();let r=e._stacked;e._stacked=aF(e.vScale,e),e.stack!==i.stack&&(n=!0,aB(e),e.stack=i.stack),this._resyncElements(t),(n||r!==e._stacked)&&aN(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let i,n,r;let{_cachedMeta:s,_data:a}=this,{iScale:o,_stacked:l}=s,h=o.axis,c=0===t&&e===a.length||s._sorted,d=t>0&&s._parsed[t-1];if(!1===this._parsing)s._parsed=a,s._sorted=!0,r=a;else{r=rx(a[t])?this.parseArrayData(s,a,t,e):ry(a[t])?this.parseObjectData(s,a,t,e):this.parsePrimitiveData(s,a,t,e);let o=()=>null===n[h]||d&&n[h]<d[h];for(i=0;i<e;++i)s._parsed[i+t]=n=r[i],c&&(o()&&(c=!1),d=n);s._sorted=c}l&&aN(this,r)}parsePrimitiveData(t,e,i,n){let r,s;let{iScale:a,vScale:o}=t,l=a.axis,h=o.axis,c=a.getLabels(),d=a===o,u=Array(n);for(r=0;r<n;++r)s=r+i,u[r]={[l]:d||a.parse(c[s],s),[h]:o.parse(e[s],s)};return u}parseArrayData(t,e,i,n){let r,s,a;let{xScale:o,yScale:l}=t,h=Array(n);for(r=0;r<n;++r)a=e[s=r+i],h[r]={x:o.parse(a[0],s),y:l.parse(a[1],s)};return h}parseObjectData(t,e,i,n){let r,s,a;let{xScale:o,yScale:l}=t,{xAxisKey:h="x",yAxisKey:c="y"}=this._parsing,d=Array(n);for(r=0;r<n;++r)a=e[s=r+i],d[r]={x:o.parse(rR(a,h),s),y:l.parse(rR(a,c),s)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let n=this.chart,r=this._cachedMeta,s=e[t.axis],a={keys:aI(n,!0),values:e._stacks[t.axis]._visualValues};return aR(a,s,r.index,{mode:i})}updateRangeFromParsed(t,e,i,n){let r=i[e.axis],s=null===r?NaN:r,a=n&&i._stacks[e.axis];n&&a&&(n.values=a,s=aR(n,r,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){let i,n;let r=this._cachedMeta,s=r._parsed,a=r._sorted&&t===r.iScale,o=s.length,l=this._getOtherScale(t),h=aj(e,r,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:u}=function(t){let{min:e,max:i,minDefined:n,maxDefined:r}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:r?i:Number.POSITIVE_INFINITY}}(l);function f(){n=s[i];let e=n[l.axis];return!rv(n[t.axis])||d>e||u<e}for(i=0;i<o&&(f()||(this.updateRangeFromParsed(c,t,n,h),!a));++i);if(a){for(i=o-1;i>=0;--i)if(!f()){this.updateRangeFromParsed(c,t,n,h);break}}return c}getAllParsedValues(t){let e,i,n;let r=this._cachedMeta._parsed,s=[];for(e=0,i=r.length;e<i;++e)rv(n=r[e][t.axis])&&s.push(n);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,n=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:n?""+n.getLabelForValue(r[n.axis]):""}}_update(t){var e;let i,n,r,s;let a=this._cachedMeta;this.update(t||"default"),a._clip=(ry(e=rw(this.options.clip,function(t,e,i){if(!1===i)return!1;let n=aL(t,i),r=aL(e,i);return{top:r.end,right:n.end,bottom:r.start,left:n.start}}(a.xScale,a.yScale,this.getMaxOverflow())))?(i=e.top,n=e.right,r=e.bottom,s=e.left):i=n=r=s=e,{top:i,right:n,bottom:r,left:s,disabled:!1===e})}update(t){}draw(){let t;let e=this._ctx,i=this.chart,n=this._cachedMeta,r=n.data||[],s=i.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||r.length-o,h=this.options.drawActiveElementsOnTop;for(n.dataset&&n.dataset.draw(e,s,o,l),t=o;t<o+l;++t){let i=r[t];i.hidden||(i.active&&h?a.push(i):i.draw(e,s))}for(t=0;t<a.length;++t)a[t].draw(e,s)}getStyle(t,e){let i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){var n;let r;let s=this.getDataset();if(t>=0&&t<this._cachedMeta.data.length){let e=this._cachedMeta.data[t];(r=e.$context||(e.$context=sZ(this.getContext(),{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"}))).parsed=this.getParsed(t),r.raw=s.data[t],r.index=r.dataIndex=t}else(r=this.$context||(this.$context=sZ(this.chart.getContext(),{active:!1,dataset:void 0,datasetIndex:n=this.index,index:n,mode:"default",type:"dataset"}))).dataset=s,r.index=r.datasetIndex=this.index;return r.active=!!e,r.mode=i,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let n="active"===e,r=this._cachedDataOpts,s=t+"-"+e,a=r[s],o=this.enableOptionSharing&&rz(i);if(a)return aH(a,o);let l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),c=n?[`${t}Hover`,"hover",t,""]:[t,""],d=l.getOptionScopes(this.getDataset(),h),u=Object.keys(sA.elements[t]),f=l.resolveNamedOptions(d,u,()=>this.getContext(i,n,e),c);return f.$shared&&(f.$shared=o,r[s]=Object.freeze(aH(f,o))),f}_resolveAnimations(t,e,i){let n;let r=this.chart,s=this._cachedDataOpts,a=`animation-${e}`,o=s[a];if(o)return o;if(!1!==r.options.animation){let r=this.chart.config,s=r.datasetAnimationScopeKeys(this._type,e),a=r.getOptionScopes(this.getDataset(),s);n=r.createResolver(a,this.getContext(t,i,e))}let l=new aT(r,n&&n.animations);return n&&n._cacheable&&(s[a]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||aW(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),n=this._sharedOptions,r=this.getSharedOptions(i),s=this.includeOptions(e,r)||r!==n;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:s}}updateElement(t,e,i,n){aW(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!aW(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;let r=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];let n=i.length,r=e.length,s=Math.min(r,n);s&&this.parse(0,s),r>n?this._insertElements(n,r-n,t):r<n&&this._removeElements(r,n-r)}_insertElements(t,e,i=!0){let n;let r=this._cachedMeta,s=r.data,a=t+e,o=t=>{for(t.length+=e,n=t.length-1;n>=a;n--)t[n]=t[n-e]};for(o(s),n=t;n<a;++n)s[n]=new this.dataElementType;this._parsing&&o(r._parsed),this.parse(t,e),i&&this.updateElements(s,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let n=i._parsed.splice(t,e);i._stacked&&aB(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function aU(t,e,i,n){return rx(t)?function(t,e,i,n){let r=i.parse(t[0],n),s=i.parse(t[1],n),a=Math.min(r,s),o=Math.max(r,s),l=a,h=o;Math.abs(a)>Math.abs(o)&&(l=o,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:r,end:s,min:a,max:o}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function aY(t,e,i,n){let r,s,a,o;let l=t.iScale,h=t.vScale,c=l.getLabels(),d=l===h,u=[];for(r=i,s=i+n;r<s;++r)o=e[r],(a={})[l.axis]=d||l.parse(c[r],r),u.push(aU(o,a,h,r));return u}function aX(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function aq(t,e,i,n){var r;return t=n?aG(t=(r=t)===e?i:r===i?e:r,i,e):aG(t,e,i)}function aG(t,e,i){return"start"===t?e:"end"===t?i:t}class aK extends a${static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,r)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(r);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:n,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let r,s,a=t=>+i[t];if(ry(i[t])){let{key:t="value"}=this._parsing;a=e=>+rR(i[e],t)}for(r=t,s=t+e;r<s;++r)n._parsed[r]=a(r)}}_getRotation(){return r0(this.options.rotation-90)}_getCircumference(){return r0(this.options.circumference)}_getRotationExtents(){let t=rW,e=-rW;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){let n=this.chart.getDatasetMeta(i).controller,r=n._getRotation(),s=n._getCircumference();t=Math.min(t,r),e=Math.max(e,r+s)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:i}=e,n=this._cachedMeta,r=n.data,s=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-s)/2,0),o=Math.min(rM(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:h,rotation:c}=this._getRotationExtents(),{ratioX:d,ratioY:u,offsetX:f,offsetY:g}=function(t,e,i){let n=1,r=1,s=0,a=0;if(e<rW){let o=t+e,l=Math.cos(t),h=Math.sin(t),c=Math.cos(o),d=Math.sin(o),u=(e,n,r)=>r4(e,t,o,!0)?1:Math.max(n,n*i,r,r*i),f=(e,n,r)=>r4(e,t,o,!0)?-1:Math.min(n,n*i,r,r*i),g=u(0,l,c),p=u(rU,h,d),m=f(rB,l,c),b=f(rB+rU,h,d);n=(g-m)/2,r=(p-b)/2,s=-(g+m)/2,a=-(p+b)/2}return{ratioX:n,ratioY:r,offsetX:s,offsetY:a}}(c,h,o),p=(i.width-s)/d,m=(i.height-s)/u,b=rk(this.options.radius,Math.max(Math.min(p,m)/2,0)),x=Math.max(b*o,0),y=(b-x)/this._getVisibleDatasetWeightTotal();this.offsetX=f*b,this.offsetY=g*b,n.total=this.calculateTotal(),this.outerRadius=b-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*l,0),this.updateElements(r,0,r.length,t)}_circumference(t,e){let i=this.options,n=this._cachedMeta,r=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*r/rW)}updateElements(t,e,i,n){let r;let s="reset"===n,a=this.chart,o=a.chartArea,l=a.options,h=l.animation,c=(o.left+o.right)/2,d=(o.top+o.bottom)/2,u=s&&h.animateScale,f=u?0:this.innerRadius,g=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(e,n),b=this._getRotation();for(r=0;r<e;++r)b+=this._circumference(r,s);for(r=e;r<e+i;++r){let e=this._circumference(r,s),i=t[r],a={x:c+this.offsetX,y:d+this.offsetY,startAngle:b,endAngle:b+e,circumference:e,outerRadius:g,innerRadius:f};m&&(a.options=p||this.resolveDataElementOptions(r,i.active?"active":n)),b+=e,this.updateElement(i,r,a,n)}}calculateTotal(){let t;let e=this._cachedMeta,i=e.data,n=0;for(t=0;t<i.length;t++){let r=e._parsed[t];null!==r&&!isNaN(r)&&this.chart.getDataVisibility(t)&&!i[t].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?rW*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],r=sw(e._parsed[t],i.options.locale);return{label:n[t]||"",value:r}}getMaxBorderWidth(t){let e,i,n,r,s,a=0,o=this.chart;if(!t){for(e=0,i=o.data.datasets.length;e<i;++e)if(o.isDatasetVisible(e)){t=(n=o.getDatasetMeta(e)).data,r=n.controller;break}}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(s=r.resolveDataElementOptions(e)).borderAlign&&(a=Math.max(a,s.borderWidth||0,s.hoverBorderWidth||0));return a}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){let t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(rw(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class aZ extends a${static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:n}}=t.legend.options;return e.labels.map((e,r)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(r);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:n,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],r=sw(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:r}}parseObjectData(t,e,i,n){return s8.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((t,i)=>{let n=this.getParsed(i).r;!isNaN(n)&&this.chart.getDataVisibility(i)&&(n<e.min&&(e.min=n),n>e.max&&(e.max=n))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(n/2,0),s=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-s)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,n){let r;let s="reset"===n,a=this.chart,o=a.options,l=o.animation,h=this._cachedMeta.rScale,c=h.xCenter,d=h.yCenter,u=h.getIndexAngle(0)-.5*rB,f=u,g=360/this.countVisibleElements();for(r=0;r<e;++r)f+=this._computeAngle(r,n,g);for(r=e;r<e+i;r++){let e=t[r],i=f,o=f+this._computeAngle(r,n,g),p=a.getDataVisibility(r)?h.getDistanceFromCenterForValue(this.getParsed(r).r):0;f=o,s&&(l.animateScale&&(p=0),l.animateRotate&&(i=o=u));let m={x:c,y:d,innerRadius:0,outerRadius:p,startAngle:i,endAngle:o,options:this.resolveDataElementOptions(r,e.active?"active":n)};this.updateElement(e,r,m,n)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?r0(this.resolveDataElementOptions(t,e).angle||i):0}}var aJ=/*#__PURE__*/Object.freeze({__proto__:null,BarController:class extends a${static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,n){return aY(t,e,i,n)}parseArrayData(t,e,i,n){return aY(t,e,i,n)}parseObjectData(t,e,i,n){let r,s,a,o;let{iScale:l,vScale:h}=t,{xAxisKey:c="x",yAxisKey:d="y"}=this._parsing,u="x"===l.axis?c:d,f="x"===h.axis?c:d,g=[];for(r=i,s=i+n;r<s;++r)o=e[r],(a={})[l.axis]=l.parse(rR(o,u),r),g.push(aU(rR(o,f),a,h,r));return g}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);let r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:n}=e,r=this.getParsed(t),s=r._custom,a=aX(s)?"["+s.start+", "+s.end+"]":""+n.getLabelForValue(r[n.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){let r="reset"===n,{index:s,_cachedMeta:{vScale:a}}=this,o=a.getBasePixel(),l=a.isHorizontal(),h=this._getRuler(),{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,n);for(let u=e;u<e+i;u++){let e=this.getParsed(u),i=r||rb(e[a.axis])?{base:o,head:o}:this._calculateBarValuePixels(u),f=this._calculateBarIndexPixels(u,h),g=(e._stacks||{})[a.axis],p={horizontal:l,base:i.base,enableBorderRadius:!g||aX(e._custom)||s===g._top||s===g._bottom,x:l?i.head:f.center,y:l?f.center:i.head,height:l?f.size:Math.abs(i.size),width:l?Math.abs(i.size):f.size};d&&(p.options=c||this.resolveDataElementOptions(u,t[u].active?"active":n));let m=p.options||t[u].options;!function(t,e,i,n){let r,s,a,o,l,h=e.borderSkipped,c={};if(!h){t.borderSkipped=c;return}if(!0===h){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:d,end:u,reverse:f,top:g,bottom:p}=(t.horizontal?(r=t.base>t.x,s="left",a="right"):(r=t.base<t.y,s="bottom",a="top"),r?(o="end",l="start"):(o="start",l="end"),{start:s,end:a,reverse:r,top:o,bottom:l});"middle"===h&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?h=g:(i._bottom||0)===n?h=p:(c[aq(p,d,u,f)]=!0,h=g)),c[aq(h,d,u,f)]=!0,t.borderSkipped=c}(p,m,g,s),function(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}(p,m,h.ratio),this.updateElement(t[u],u,p,n)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(t=>t.controller.options.grouped),r=i.options.stacked,s=[],a=t=>{let i=t.controller.getParsed(e),n=i&&i[t.vScale.axis];if(rb(n)||isNaN(n))return!0};for(let i of n)if(!(void 0!==e&&a(i))&&((!1===r||-1===s.indexOf(i.stack)||void 0===r&&void 0===i.stack)&&s.push(i.stack),i.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){let n=this._getStacks(t,i),r=void 0!==e?n.indexOf(e):-1;return -1===r?n.length-1:r}_getRuler(){let t,e;let i=this.options,n=this._cachedMeta,r=n.iScale,s=[];for(t=0,e=n.data.length;t<e;++t)s.push(r.getPixelForValue(this.getParsed(t)[r.axis],t));let a=i.barThickness,o=a||function(t){let e,i,n,r;let s=t.iScale,a=function(t,e){if(!t._cache.$bar){let i=t.getMatchingVisibleMetas(e),n=[];for(let e=0,r=i.length;e<r;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=sr(n.sort((t,e)=>t-e))}return t._cache.$bar}(s,t.type),o=s._length,l=()=>{32767!==n&&-32768!==n&&(rz(r)&&(o=Math.min(o,Math.abs(n-r)||o)),r=n)};for(e=0,i=a.length;e<i;++e)n=s.getPixelForValue(a[e]),l();for(e=0,r=void 0,i=s.ticks.length;e<i;++e)n=s.getPixelForTick(e),l();return o}(n);return{min:o,pixels:s,start:r._startPixel,end:r._endPixel,stackCount:this._getStackCount(),scale:r,grouped:i.grouped,ratio:a?1:i.categoryPercentage*i.barPercentage}}_calculateBarValuePixels(t){let e,i;let{_cachedMeta:{vScale:n,_stacked:r,index:s},options:{base:a,minBarLength:o}}=this,l=a||0,h=this.getParsed(t),c=h._custom,d=aX(c),u=h[n.axis],f=0,g=r?this.applyStack(n,h,r):u;g!==u&&(f=g-u,g=u),d&&(u=c.barStart,g=c.barEnd-c.barStart,0!==u&&rG(u)!==rG(c.barEnd)&&(f=0),f+=u);let p=rb(a)||d?f:a,m=n.getPixelForValue(p);if(Math.abs(i=(e=this.chart.getDataVisibility(t)?n.getPixelForValue(f+g):m)-m)<o){var b;i=(0!==(b=i)?rG(b):(n.isHorizontal()?1:-1)*(n.min>=l?1:-1))*o,u===l&&(m-=i/2);let t=n.getPixelForDecimal(0),a=n.getPixelForDecimal(1);e=(m=Math.max(Math.min(m,Math.max(t,a)),Math.min(t,a)))+i,r&&!d&&(h._stacks[n.axis]._visualValues[s]=n.getValueForPixel(e)-n.getValueForPixel(m))}if(m===n.getPixelForValue(l)){let t=rG(i)*n.getLineWidthForValue(l)/2;m+=t,i-=t}return{size:i,base:m,head:e,center:e+i/2}}_calculateBarIndexPixels(t,e){let i,n;let r=e.scale,s=this.options,a=s.skipNull,o=rw(s.maxBarThickness,1/0);if(e.grouped){let r=a?this._getStackCount(t):e.stackCount,l="flex"===s.barThickness?function(t,e,i,n){let r=e.pixels,s=r[t],a=t>0?r[t-1]:null,o=t<r.length-1?r[t+1]:null,l=i.categoryPercentage;null===a&&(a=s-(null===o?e.end-e.start:o-s)),null===o&&(o=s+s-a);let h=s-(s-Math.min(a,o))/2*l,c=Math.abs(o-a)/2*l;return{chunk:c/n,ratio:i.barPercentage,start:h}}(t,e,s,r):function(t,e,i,n){let r,s;let a=i.barThickness;return rb(a)?(r=e.min*i.categoryPercentage,s=i.barPercentage):(r=a*n,s=1),{chunk:r/n,ratio:s,start:e.pixels[t]-r/2}}(t,e,s,r),h=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);i=l.start+l.chunk*h+l.chunk/2,n=Math.min(o,l.chunk*l.ratio)}else i=r.getPixelForValue(this.getParsed(t)[r.axis],t),n=Math.min(o,e.min*e.ratio);return{base:i-n/2,head:i+n/2,center:i,size:n}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length,r=0;for(;r<n;++r)null!==this.getParsed(r)[e.axis]&&i[r].draw(this._ctx)}},BubbleController:class extends a${static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){let r=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<r.length;t++)r[t]._custom=this.resolveDataElementOptions(t+i).radius;return r}parseArrayData(t,e,i,n){let r=super.parseArrayData(t,e,i,n);for(let t=0;t<r.length;t++){let n=e[i+t];r[t]._custom=rw(n[2],this.resolveDataElementOptions(t+i).radius)}return r}parseObjectData(t,e,i,n){let r=super.parseObjectData(t,e,i,n);for(let t=0;t<r.length;t++){let n=e[i+t];r[t]._custom=rw(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return r}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:r}=e,s=this.getParsed(t),a=n.getLabelForValue(s.x),o=r.getLabelForValue(s.y),l=s._custom;return{label:i[t]||"",value:"("+a+", "+o+(l?", "+l:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){let r="reset"===n,{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:o,includeOptions:l}=this._getSharedOptions(e,n),h=s.axis,c=a.axis;for(let d=e;d<e+i;d++){let e=t[d],i=!r&&this.getParsed(d),u={},f=u[h]=r?s.getPixelForDecimal(.5):s.getPixelForValue(i[h]),g=u[c]=r?a.getBasePixel():a.getPixelForValue(i[c]);u.skip=isNaN(f)||isNaN(g),l&&(u.options=o||this.resolveDataElementOptions(d,e.active?"active":n),r&&(u.options.radius=0)),this.updateElement(e,d,u,n)}}resolveDataElementOptions(t,e){let i=this.getParsed(t),n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));let r=n.radius;return"active"!==e&&(n.radius=0),n.radius+=rw(i&&i._custom,r),n}},DoughnutController:aK,LineController:class extends a${static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:n=[],_dataset:r}=e,s=this.chart._animationsDisabled,{start:a,count:o}=sc(e,n,s);this._drawStart=a,this._drawCount=o,sd(e)&&(a=0,o=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!r._decimated,i.points=n;let l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:l},t),this.updateElements(n,a,o,t)}updateElements(t,e,i,n){let r="reset"===n,{iScale:s,vScale:a,_stacked:o,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:c}=this._getSharedOptions(e,n),d=s.axis,u=a.axis,{spanGaps:f,segment:g}=this.options,p=rJ(f)?f:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||"none"===n,b=e+i,x=t.length,y=e>0&&this.getParsed(e-1);for(let i=0;i<x;++i){let f=t[i],x=m?f:{};if(i<e||i>=b){x.skip=!0;continue}let v=this.getParsed(i),_=rb(v[u]),w=x[d]=s.getPixelForValue(v[d],i),M=x[u]=r||_?a.getBasePixel():a.getPixelForValue(o?this.applyStack(a,v,o):v[u],i);x.skip=isNaN(w)||isNaN(M)||_,x.stop=i>0&&Math.abs(v[d]-y[d])>p,g&&(x.parsed=v,x.raw=l.data[i]),c&&(x.options=h||this.resolveDataElementOptions(i,f.active?"active":n)),m||this.updateElement(f,i,x,n),y=v}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;let r=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,r,s)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}},PieController:class extends aK{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},PolarAreaController:aZ,RadarController:class extends a${static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,n){return s8.bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta,i=e.dataset,n=e.data||[],r=e.iScale.getLabels();if(i.points=n,"resize"!==t){let e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);let s={_loop:!0,_fullLoop:r.length===n.length,options:e};this.updateElement(i,void 0,s,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){let r=this._cachedMeta.rScale,s="reset"===n;for(let a=e;a<e+i;a++){let e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":n),o=r.getPointPositionForValue(a,this.getParsed(a).r),l=s?r.xCenter:o.x,h=s?r.yCenter:o.y,c={x:l,y:h,angle:o.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,a,c,n)}}},ScatterController:class extends a${static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:n,yScale:r}=e,s=this.getParsed(t),a=n.getLabelForValue(s.x),o=r.getLabelForValue(s.y);return{label:i[t]||"",value:"("+a+", "+o+")"}}update(t){let e=this._cachedMeta,{data:i=[]}=e,n=this.chart._animationsDisabled,{start:r,count:s}=sc(e,i,n);if(this._drawStart=r,this._drawCount=s,sd(e)&&(r=0,s=i.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:r,_dataset:s}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;let a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:a},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,r,s,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,n){let r="reset"===n,{iScale:s,vScale:a,_stacked:o,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,n),c=this.getSharedOptions(h),d=this.includeOptions(n,c),u=s.axis,f=a.axis,{spanGaps:g,segment:p}=this.options,m=rJ(g)?g:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||r||"none"===n,x=e>0&&this.getParsed(e-1);for(let h=e;h<e+i;++h){let e=t[h],i=this.getParsed(h),g=b?e:{},y=rb(i[f]),v=g[u]=s.getPixelForValue(i[u],h),_=g[f]=r||y?a.getBasePixel():a.getPixelForValue(o?this.applyStack(a,i,o):i[f],h);g.skip=isNaN(v)||isNaN(_)||y,g.stop=h>0&&Math.abs(i[u]-x[u])>m,p&&(g.parsed=i,g.raw=l.data[h]),d&&(g.options=c||this.resolveDataElementOptions(h,e.active?"active":n)),b||this.updateElement(e,h,g,n),x=i}this.updateSharedOptions(c,n,h)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}let i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!e.length)return n;let r=e[0].size(this.resolveDataElementOptions(0)),s=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,r,s)/2}}});/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */function aQ(){throw Error("This method is not implemented: Check that a complete date adapter is provided.")}/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */class a0{/**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */static override(t){Object.assign(a0.prototype,t)}options;constructor(t){this.options=t||{}}// eslint-disable-next-line @typescript-eslint/no-empty-function
init(){}formats(){return aQ()}parse(){return aQ()}format(){return aQ()}add(){return aQ()}diff(){return aQ()}startOf(){return aQ()}endOf(){return aQ()}}var a1={_date:a0};function a2(t,e,i,n,r){let s=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=s.length;t<i;++t){let{index:i,data:o}=s[t],{lo:l,hi:h}=function(t,e,i,n){let{controller:r,data:s,_sorted:a}=t,o=r._cachedMeta.iScale;if(o&&e===o.axis&&"r"!==e&&a&&s.length){let t=o._reversePixels?se:st;if(!n)return t(s,e,i);if(r._sharedOptions){let n=s[0],r="function"==typeof n.getRange&&n.getRange(e);if(r){let n=t(s,e,i-r),a=t(s,e,i+r);return{lo:n.lo,hi:a.hi}}}}return{lo:0,hi:s.length-1}}(s[t],e,a,r);for(let t=l;t<=h;++t){let e=o[t];e.skip||n(e,i,t)}}}function a3(t,e,i,n,r){let s=[];return(r||t.isPointInArea(e))&&a2(t,i,e,function(i,a,o){(r||sR(i,t.chartArea,0))&&i.inRange(e.x,e.y,n)&&s.push({element:i,datasetIndex:a,index:o})},!0),s}function a5(t,e,i,n,r,s){let a;return s||t.isPointInArea(e)?"r"!==i||n?function(t,e,i,n,r,s){let a=[],o=function(t){let e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){let r=e?Math.abs(t.x-n.x):0,s=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(s,2))}}(i),l=Number.POSITIVE_INFINITY;return a2(t,i,e,function(i,h,c){let d=i.inRange(e.x,e.y,r);if(n&&!d)return;let u=i.getCenterPoint(r),f=!!s||t.isPointInArea(u);if(!f&&!d)return;let g=o(e,u);g<l?(a=[{element:i,datasetIndex:h,index:c}],l=g):g===l&&a.push({element:i,datasetIndex:h,index:c})}),a}(t,e,i,n,r,s):(a=[],a2(t,i,e,function(t,i,n){let{startAngle:s,endAngle:o}=t.getProps(["startAngle","endAngle"],r),{angle:l}=r2(t,{x:e.x,y:e.y});r4(l,s,o)&&a.push({element:t,datasetIndex:i,index:n})}),a):[]}function a6(t,e,i,n,r){let s=[],a="x"===i?"inXRange":"inYRange",o=!1;return(a2(t,i,e,(t,n,l)=>{t[a](e[i],r)&&(s.push({element:t,datasetIndex:n,index:l}),o=o||t.inRange(e.x,e.y,r))}),n&&!o)?[]:s}var a4={modes:{index(t,e,i,n){let r=ad(e,t),s=i.axis||"x",a=i.includeInvisible||!1,o=i.intersect?a3(t,r,s,n,a):a5(t,r,s,!1,n,a),l=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{let e=o[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})}),l):[]},dataset(t,e,i,n){let r=ad(e,t),s=i.axis||"xy",a=i.includeInvisible||!1,o=i.intersect?a3(t,r,s,n,a):a5(t,r,s,!1,n,a);if(o.length>0){let e=o[0].datasetIndex,i=t.getDatasetMeta(e).data;o=[];for(let t=0;t<i.length;++t)o.push({element:i[t],datasetIndex:e,index:t})}return o},point(t,e,i,n){let r=ad(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return a3(t,r,s,n,a)},nearest(t,e,i,n){let r=ad(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return a5(t,r,s,i.intersect,n,a)},x(t,e,i,n){let r=ad(e,t);return a6(t,r,"x",i.intersect,n)},y(t,e,i,n){let r=ad(e,t);return a6(t,r,"y",i.intersect,n)}}};const a7=["left","top","right","bottom"];function a9(t,e){return t.filter(t=>t.pos===e)}function a8(t,e){return t.filter(t=>-1===a7.indexOf(t.pos)&&t.box.axis===e)}function ot(t,e){return t.sort((t,i)=>{let n=e?i:t,r=e?t:i;return n.weight===r.weight?n.index-r.index:n.weight-r.weight})}function oe(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function oi(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function on(t,e,i,n){let r,s,a,o,l,h;let c=[];for(r=0,s=t.length,l=0;r<s;++r){(o=(a=t[r]).box).update(a.width||e.w,a.height||e.h,function(t,e){let i=e.maxPadding;return function(t){let n={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{n[t]=Math.max(e[t],i[t])}),n}(t?["left","right"]:["top","bottom"])}(a.horizontal,e));let{same:s,other:d}=function(t,e,i,n){let{pos:r,box:s}=i,a=t.maxPadding;if(!ry(r)){i.size&&(t[r]-=i.size);let e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?s.height:s.width),i.size=e.size/e.count,t[r]+=i.size}s.getPadding&&oi(a,s.getPadding());let o=Math.max(0,e.outerWidth-oe(a,t,"left","right")),l=Math.max(0,e.outerHeight-oe(a,t,"top","bottom")),h=o!==t.w,c=l!==t.h;return t.w=o,t.h=l,i.horizontal?{same:h,other:c}:{same:c,other:h}}(e,i,a,n);l|=s&&c.length,h=h||d,o.fullSize||c.push(a)}return l&&on(c,e,i,n)||h}function or(t,e,i,n,r){t.top=i,t.left=e,t.right=e+n,t.bottom=i+r,t.width=n,t.height=r}function os(t,e,i,n){let r=i.padding,{x:s,y:a}=e;for(let o of t){let t=o.box,l=n[o.stack]||{count:1,placed:0,weight:1},h=o.stackWeight/l.weight||1;if(o.horizontal){let n=e.w*h,s=l.size||t.height;rz(l.start)&&(a=l.start),t.fullSize?or(t,r.left,a,i.outerWidth-r.right-r.left,s):or(t,e.left+l.placed,a,n,s),l.start=a,l.placed+=n,a=t.bottom}else{let n=e.h*h,a=l.size||t.width;rz(l.start)&&(s=l.start),t.fullSize?or(t,s,r.top,a,i.outerHeight-r.bottom-r.top):or(t,s,e.top+l.placed,a,n),l.start=s,l.placed+=n,s=t.right}}e.x=s,e.y=a}var oa={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){let i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;let r=sq(t.options.layout.padding),s=Math.max(e-r.width,0),a=Math.max(i-r.height,0),o=function(t){let e=function(t){let e,i,n,r,s,a;let o=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],({position:r,options:{stack:s,stackWeight:a=1}}=n),o.push({index:e,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:s&&r+s,stackWeight:a});return o}(t),i=ot(e.filter(t=>t.box.fullSize),!0),n=ot(a9(e,"left"),!0),r=ot(a9(e,"right")),s=ot(a9(e,"top"),!0),a=ot(a9(e,"bottom")),o=a8(e,"x"),l=a8(e,"y");return{fullSize:i,leftAndTop:n.concat(s),rightAndBottom:r.concat(l).concat(a).concat(o),chartArea:a9(e,"chartArea"),vertical:n.concat(r).concat(l),horizontal:s.concat(a).concat(o)}}(t.boxes),l=o.vertical,h=o.horizontal;rP(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});let c=l.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:r,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/c,hBoxMaxHeight:a/2}),u=Object.assign({},r);oi(u,sq(n));let f=Object.assign({maxPadding:u,w:s,h:a,x:r.left,y:r.top},r),g=function(t,e){let i,n,r;let s=function(t){let e={};for(let i of t){let{stack:t,pos:n,stackWeight:r}=i;if(!t||!a7.includes(n))continue;let s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=r}return e}(t),{vBoxMaxWidth:a,hBoxMaxHeight:o}=e;for(i=0,n=t.length;i<n;++i){r=t[i];let{fullSize:n}=r.box,l=s[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*a:n&&e.availableWidth,r.height=o):(r.width=a,r.height=h?h*o:n&&e.availableHeight)}return s}(l.concat(h),d);on(o.fullSize,f,d,g),on(l,f,d,g),on(h,f,d,g)&&on(l,f,d,g),function(t){let e=t.maxPadding;function i(i){let n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(f),os(o.leftAndTop,f,d,g),f.x+=f.w,f.y+=f.h,os(o.rightAndBottom,f,d,g),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},rP(o.chartArea,e=>{let i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class oo{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class ol extends oo{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const oh="$chartjs",oc={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},od=t=>null===t||""===t,ou=!!ag&&{passive:!0};function of(t,e,i){t.canvas.removeEventListener(e,i,ou)}function og(t,e){for(let i of t)if(i===e||i.contains(e))return!0}function op(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||og(i.addedNodes,n))&&!og(i.removedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}function om(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||og(i.removedNodes,n))&&!og(i.addedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}const ob=new Map;let ox=0;function oy(){let t=window.devicePixelRatio;t!==ox&&(ox=t,ob.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function ov(t,e,i){let n=t.canvas,r=n&&as(n);if(!r)return;let s=sa((t,e)=>{let n=r.clientWidth;i(t,e),n<r.clientWidth&&i()},window),a=new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,n=e.contentRect.height;(0!==i||0!==n)&&s(i,n)});return a.observe(r),ob.size||window.addEventListener("resize",oy),ob.set(t,s),a}function o_(t,e,i){i&&i.disconnect(),"resize"===e&&(ob.delete(t),ob.size||window.removeEventListener("resize",oy))}function ow(t,e,i){let n=t.canvas,r=sa(e=>{null!==t.ctx&&i(function(t,e){let i=oc[t.type]||t.type,{x:n,y:r}=ad(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==r?r:null}}(e,t))},t);return!function(t,e,i){t.addEventListener(e,i,ou)}(n,e,r),r}class oM extends oo{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(!function(t,e){let i=t.style,n=t.getAttribute("height"),r=t.getAttribute("width");if(t[oh]={initial:{height:n,width:r,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",od(r)){let e=ap(t,"width");void 0!==e&&(t.width=e)}if(od(n)){if(""===t.style.height)t.height=t.width/(e||2);else{let e=ap(t,"height");void 0!==e&&(t.height=e)}}}(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[oh])return!1;let i=e[oh].initial;["height","width"].forEach(t=>{let n=i[t];rb(n)?e.removeAttribute(t):e.setAttribute(t,n)});let n=i.style||{};return Object.keys(n).forEach(t=>{e.style[t]=n[t]}),e.width=e.width,delete e[oh],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let n=t.$proxies||(t.$proxies={}),r={attach:op,detach:om,resize:ov}[e]||ow;n[e]=r(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;let r={attach:o_,detach:o_,resize:o_}[e]||of;r(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return(// eslint-disable-next-line complexity
function(t,e,i,n){let r=ao(t),s=ah(r,"margin"),a=aa(r.maxWidth,t,"clientWidth")||rj,o=aa(r.maxHeight,t,"clientHeight")||rj,l=function(t,e,i){let n,r;if(void 0===e||void 0===i){let s=as(t);if(s){let t=s.getBoundingClientRect(),a=ao(s),o=ah(a,"border","width"),l=ah(a,"padding");// this is the border box of the container
e=t.width-l.width-o.width,i=t.height-l.height-o.height,n=aa(a.maxWidth,s,"clientWidth"),r=aa(a.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||rj,maxHeight:r||rj}}(t,e,i),{width:h,height:c}=l;if("content-box"===r.boxSizing){let t=ah(r,"border","width"),e=ah(r,"padding");h-=e.width+t.width,c-=e.height+t.height}h=Math.max(0,h-s.width),c=Math.max(0,n?h/n:c-s.height),h=au(Math.min(h,a,l.maxWidth)),c=au(Math.min(c,o,l.maxHeight)),h&&!c&&// If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
(c=au(h/2));let d=void 0!==e||void 0!==i;return d&&n&&l.height&&c>l.height&&(h=au(Math.floor((c=l.height)*n))),{width:h,height:c}}(t,e,i,n))}isAttached(t){let e=as(t);return!!(e&&e.isConnected)}}class ok{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return rJ(this.x)&&rJ(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let n={};return t.forEach(t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),n}}function oS(t,e,i,n,r){let s,a,o;let l=rw(n,0),h=Math.min(rw(r,t.length),t.length),c=0;for(i=Math.ceil(i),r&&(i=(s=r-n)/Math.floor(s/i)),o=l;o<0;)o=Math.round(l+ ++c*i);for(a=Math.max(l,0);a<h;a++)a===o&&(e.push(t[a]),o=Math.round(l+ ++c*i))}const oP=t=>"left"===t?"right":"right"===t?"left":t,oC=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,oD=(t,e)=>Math.min(e||t,t);function oA(t,e){let i=[],n=t.length/e,r=t.length,s=0;for(;s<r;s+=n)i.push(t[Math.floor(s)]);return i}function oO(t){return t.drawTicks?t.tickLength:0}function oE(t,e){if(!t.display)return 0;let i=sG(t.font,e),n=sq(t.padding),r=rx(t.text)?t.text.length:1;return r*i.lineHeight+n.height}class oT extends ok{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=r_(t,Number.POSITIVE_INFINITY),e=r_(e,Number.NEGATIVE_INFINITY),i=r_(i,Number.POSITIVE_INFINITY),n=r_(n,Number.NEGATIVE_INFINITY),{min:r_(t,i),max:r_(e,n),minDefined:rv(t),maxDefined:rv(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:r,maxDefined:s}=this.getUserBounds();if(r&&s)return{min:i,max:n};let a=this.getMatchingVisibleMetas();for(let o=0,l=a.length;o<l;++o)e=a[o].controller.getMinMax(this,t),r||(i=Math.min(i,e.min)),s||(n=Math.max(n,e.max));return i=s&&i>n?n:i,n=r&&i>n?i:n,{min:r_(i,r_(n,i)),max:r_(n,r_(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){let e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){rS(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:n,grace:r,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */function(t,e,i){let{min:n,max:r}=t,s=rk(e,(r-n)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(n,-Math.abs(s)),max:a(r,s)}}(this,r,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let o=a<this.ticks.length;this._convertTicksToLabels(o?oA(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||"auto"===s.source)&&(this.ticks=function(t,e){let i=t.options.ticks,n=function(t){let e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),r=t._maxLength/i;return Math.floor(Math.min(n,r))}(t),r=Math.min(i.maxTicksLimit||n,n),s=i.major.enabled?function(t){let e,i;let n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(e):[],a=s.length,o=s[0],l=s[a-1],h=[];if(a>r)return function(t,e,i,n){let r,s=0,a=i[0];for(r=0,n=Math.ceil(n);r<t.length;r++)r===a&&(e.push(t[r]),a=i[++s*n])}(e,h,s,a/r),h;let c=function(t,e,i){let n=function(t){let e,i;let n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),r=e.length/i;if(!n)return Math.max(r,1);let s=/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */function(t){let e;let i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort((t,e)=>t-e).pop(),i}(n);for(let t=0,e=s.length-1;t<e;t++){let e=s[t];if(e>r)return e}return Math.max(r,1)}(s,e,r);if(a>0){let t,i;let n=a>1?Math.round((l-o)/(a-1)):null;for(oS(e,h,c,rb(n)?0:o-n,o),t=0,i=a-1;t<i;t++)oS(e,h,c,s[t],s[t+1]);return oS(e,h,c,l,rb(n)?e.length:l+n),h}return oS(e,h,c),h}(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),o&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){rS(this.options.afterUpdate,[this])}beforeSetDimensions(){rS(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){rS(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),rS(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){rS(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e,i,n;let r=this.options.ticks;for(e=0,i=t.length;e<i;e++)(n=t[e]).label=rS(r.callback,[n.value,e,t],this)}afterTickToLabelConversion(){rS(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){rS(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t,e,i;let n=this.options,r=n.ticks,s=oD(this.ticks.length,n.ticks.maxTicksLimit),a=r.minRotation||0,o=r.maxRotation,l=a;if(!this._isVisible()||!r.display||a>=o||s<=1||!this.isHorizontal()){this.labelRotation=a;return}let h=this._getLabelSizes(),c=h.widest.width,d=h.highest.height,u=r7(this.chart.width-c,0,this.maxWidth);c+6>(t=n.offset?this.maxWidth/s:u/(s-1))&&(t=u/(s-(n.offset?.5:1)),e=this.maxHeight-oO(n.grid)-r.padding-oE(n.title,this.chart.options.font),i=Math.sqrt(c*c+d*d),l=Math.max(a,Math.min(o,l=Math.min(Math.asin(r7((h.highest.height+6)/t,-1,1)),Math.asin(r7(e/i,-1,1))-Math.asin(r7(d/i,-1,1)))*(180/rB)))),this.labelRotation=l}afterCalculateLabelRotation(){rS(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){rS(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:r}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){let s=oE(n,e.options.font);if(a?(t.width=this.maxWidth,t.height=oO(r)+s):(t.height=this.maxHeight,t.width=oO(r)+s),i.display&&this.ticks.length){let{first:e,last:n,widest:r,highest:s}=this._getLabelSizes(),o=2*i.padding,l=r0(this.labelRotation),h=Math.cos(l),c=Math.sin(l);if(a){let e=i.mirror?0:c*r.width+h*s.height;t.height=Math.min(this.maxHeight,t.height+e+o)}else{let e=i.mirror?0:h*r.width+c*s.height;t.width=Math.min(this.maxWidth,t.width+e+o)}this._calculatePadding(e,n,c,h)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){let{ticks:{align:r,padding:s},position:a}=this.options,o=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){let a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),c=0,d=0;o?l?(c=n*t.width,d=i*e.height):(c=i*t.height,d=n*e.width):"start"===r?d=e.width:"end"===r?c=t.width:"inner"!==r&&(c=t.width/2,d=e.width/2),this.paddingLeft=Math.max((c-a+s)*this.width/(this.width-a),0),this.paddingRight=Math.max((d-h+s)*this.width/(this.width-h),0)}else{let i=e.height/2,n=t.height/2;"start"===r?(i=0,n=t.height):"end"===r&&(i=e.height,n=0),this.paddingTop=i+s,this.paddingBottom=n+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){rS(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)rb(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=oA(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let n,r,s,a,o,l,h,c,d,u,f;let{ctx:g,_longestTextCache:p}=this,m=[],b=[],x=Math.floor(e/oD(e,i)),y=0,v=0;for(n=0;n<e;n+=x){if(a=t[n].label,o=this._resolveTickFontOptions(n),g.font=l=o.string,h=p[l]=p[l]||{data:{},gc:[]},c=o.lineHeight,d=u=0,rb(a)||rx(a)){if(rx(a))for(r=0,s=a.length;r<s;++r)rb(f=a[r])||rx(f)||(d=sO(g,h.data,h.gc,d,f),u+=c)}else d=sO(g,h.data,h.gc,d,a),u=c;m.push(d),b.push(u),y=Math.max(d,y),v=Math.max(u,v)}rP(p,t=>{let i;let n=t.gc,r=n.length/2;if(r>e){for(i=0;i<r;++i)delete t.data[n[i]];n.splice(0,r)}});let _=m.indexOf(y),w=b.indexOf(v),M=t=>({width:m[t]||0,height:b[t]||0});return{first:M(0),last:M(e-1),widest:M(_),highest:M(w),widths:m,heights:b}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return r7(this._alignToPixels?sE(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=sZ(this.getContext(),{tick:i,index:t,type:"tick"}))}return this.$context||(this.$context=sZ(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){let t=this.options.ticks,e=r0(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),r=this._getLabelSizes(),s=t.autoSkipPadding||0,a=r?r.widest.width+s:0,o=r?r.highest.height+s:0;return this.isHorizontal()?o*i>a*n?a/i:o/n:o*n<a*i?o/i:a/n}_isVisible(){let t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e,i,n,r,s,a,o,l,h,c,d,u;let f=this.axis,g=this.chart,p=this.options,{grid:m,position:b,border:x}=p,y=m.offset,v=this.isHorizontal(),_=this.ticks,w=_.length+(y?1:0),M=oO(m),k=[],S=x.setContext(this.getContext()),P=S.display?S.width:0,C=P/2,D=function(t){return sE(g,t,P)};if("top"===b)e=D(this.bottom),a=this.bottom-M,l=e-C,c=D(t.top)+C,u=t.bottom;else if("bottom"===b)e=D(this.top),c=t.top,u=D(t.bottom)-C,a=e+C,l=this.top+M;else if("left"===b)e=D(this.right),s=this.right-M,o=e-C,h=D(t.left)+C,d=t.right;else if("right"===b)e=D(this.left),h=t.left,d=D(t.right)-C,s=e+C,o=this.left+M;else if("x"===f){if("center"===b)e=D((t.top+t.bottom)/2+.5);else if(ry(b)){let t=Object.keys(b)[0],i=b[t];e=D(this.chart.scales[t].getPixelForValue(i))}c=t.top,u=t.bottom,l=(a=e+C)+M}else if("y"===f){if("center"===b)e=D((t.left+t.right)/2);else if(ry(b)){let t=Object.keys(b)[0],i=b[t];e=D(this.chart.scales[t].getPixelForValue(i))}o=(s=e-C)-M,h=t.left,d=t.right}let A=rw(p.ticks.maxTicksLimit,w),O=Math.max(1,Math.ceil(w/A));for(i=0;i<w;i+=O){let t=this.getContext(i),e=m.setContext(t),f=x.setContext(t),p=e.lineWidth,b=e.color,_=f.dash||[],w=f.dashOffset,M=e.tickWidth,S=e.tickColor,P=e.tickBorderDash||[],C=e.tickBorderDashOffset;void 0!==(n=function(t,e,i){let n;let r=t.ticks.length,s=Math.min(e,r-1),a=t._startPixel,o=t._endPixel,l=t.getPixelForTick(s);if(!i||(n=1===r?Math.max(l-a,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(s-1))/2,!((l+=s<e?n:-n)<a-1e-6)&&!(l>o+1e-6)))return l}(this,i,y))&&(r=sE(g,n,p),v?s=o=h=d=r:a=l=c=u=r,k.push({tx1:s,ty1:a,tx2:o,ty2:l,x1:h,y1:c,x2:d,y2:u,width:p,color:b,borderDash:_,borderDashOffset:w,tickWidth:M,tickColor:S,tickBorderDash:P,tickBorderDashOffset:C}))}return this._ticksLength=w,this._borderValue=e,k}_computeLabelItems(t){let e,i,n,r,s,a,o,l,h,c,d;let u=this.axis,f=this.options,{position:g,ticks:p}=f,m=this.isHorizontal(),b=this.ticks,{align:x,crossAlign:y,padding:v,mirror:_}=p,w=oO(f.grid),M=w+v,k=_?-v:M,S=-r0(this.labelRotation),P=[],C="middle";if("top"===g)s=this.bottom-k,a=this._getXAxisLabelAlignment();else if("bottom"===g)s=this.top+k,a=this._getXAxisLabelAlignment();else if("left"===g){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,r=t.x}else if("right"===g){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,r=t.x}else if("x"===u){if("center"===g)s=(t.top+t.bottom)/2+M;else if(ry(g)){let t=Object.keys(g)[0],e=g[t];s=this.chart.scales[t].getPixelForValue(e)+M}a=this._getXAxisLabelAlignment()}else if("y"===u){if("center"===g)r=(t.left+t.right)/2-M;else if(ry(g)){let t=Object.keys(g)[0],e=g[t];r=this.chart.scales[t].getPixelForValue(e)}a=this._getYAxisLabelAlignment(w).textAlign}"y"===u&&("start"===x?C="top":"end"===x&&(C="bottom"));let D=this._getLabelSizes();for(e=0,i=b.length;e<i;++e){let t;n=b[e].label;let u=p.setContext(this.getContext(e));o=this.getPixelForTick(e)+p.labelOffset,h=(l=this._resolveTickFontOptions(e)).lineHeight,c=rx(n)?n.length:1;let f=c/2,x=u.color,v=u.textStrokeColor,w=u.textStrokeWidth,M=a;if(m?(r=o,"inner"===a&&(M=e===i-1?this.options.reverse?"left":"right":0===e?this.options.reverse?"right":"left":"center"),d="top"===g?"near"===y||0!==S?-c*h+h/2:"center"===y?-D.highest.height/2-f*h+h:-D.highest.height+h/2:"near"===y||0!==S?h/2:"center"===y?D.highest.height/2-f*h:D.highest.height-c*h,_&&(d*=-1),0===S||u.showLabelBackdrop||(r+=h/2*Math.sin(S))):(s=o,d=(1-c)*h/2),u.showLabelBackdrop){let i=sq(u.backdropPadding),n=D.heights[e],r=D.widths[e],s=d-i.top,o=0-i.left;switch(C){case"middle":s-=n/2;break;case"bottom":s-=n}switch(a){case"center":o-=r/2;break;case"right":o-=r}t={left:o,top:s,width:r+i.width,height:n+i.height,color:u.backdropColor}}P.push({label:n,font:l,textOffset:d,options:{rotation:S,color:x,strokeColor:v,strokeWidth:w,textAlign:M,textBaseline:C,translation:[r,s],backdrop:t}})}return P}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options,i=-r0(this.labelRotation);if(i)return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){let e,i;let{position:n,ticks:{crossAlign:r,mirror:s,padding:a}}=this.options,o=this._getLabelSizes(),l=t+a,h=o.widest.width;return"left"===n?s?(i=this.right+a,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i+=h)):(i=this.right-l,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i=this.left)):"right"===n?s?(i=this.left+a,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i-=h)):(i=this.left+l,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i=this.right)):e="right",{textAlign:e,x:i}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:n,width:r,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,r,s),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks,n=i.findIndex(e=>e.value===t);if(n>=0){let t=e.setContext(this.getContext(n));return t.lineWidth}return 0}drawGrid(t){let e,i;let n=this.options.grid,r=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a=(t,e,i)=>{i.width&&i.color&&(r.save(),r.lineWidth=i.width,r.strokeStyle=i.color,r.setLineDash(i.borderDash||[]),r.lineDashOffset=i.borderDashOffset,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(e.x,e.y),r.stroke(),r.restore())};if(n.display)for(e=0,i=s.length;e<i;++e){let t=s[e];n.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),n.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){let t,e,i,n;let{chart:r,ctx:s,options:{border:a,grid:o}}=this,l=a.setContext(this.getContext()),h=a.display?l.width:0;if(!h)return;let c=o.setContext(this.getContext(0)).lineWidth,d=this._borderValue;this.isHorizontal()?(t=sE(r,this.left,h)-h/2,e=sE(r,this.right,c)+c/2,i=n=d):(i=sE(r,this.top,h)-h/2,n=sE(r,this.bottom,c)+c/2,t=e=d),s.save(),s.lineWidth=l.width,s.strokeStyle=l.color,s.beginPath(),s.moveTo(t,i),s.lineTo(e,n),s.stroke(),s.restore()}drawLabels(t){let e=this.options.ticks;if(!e.display)return;let i=this.ctx,n=this._computeLabelArea();n&&sF(i,n);let r=this.getLabelItems(t);for(let t of r){let e=t.options,n=t.font,r=t.label,s=t.textOffset;sB(i,r,0,s,n,e)}n&&sz(i)}drawTitle(){let t;let{ctx:e,options:{position:i,title:n,reverse:r}}=this;if(!n.display)return;let s=sG(n.font),a=sq(n.padding),o=n.align,l=s.lineHeight/2;"bottom"===i||"center"===i||ry(i)?(l+=a.bottom,rx(n.text)&&(l+=s.lineHeight*(n.text.length-1))):l+=a.top;let{titleX:h,titleY:c,maxWidth:d,rotation:u}=function(t,e,i,n){let r,s,a;let{top:o,left:l,bottom:h,right:c,chart:d}=t,{chartArea:u,scales:f}=d,g=0,p=h-o,m=c-l;if(t.isHorizontal()){if(s=sl(n,l,c),ry(i)){let t=Object.keys(i)[0],n=i[t];a=f[t].getPixelForValue(n)+p-e}else a="center"===i?(u.bottom+u.top)/2+p-e:oC(t,i,e);r=c-l}else{if(ry(i)){let t=Object.keys(i)[0],n=i[t];s=f[t].getPixelForValue(n)-m+e}else s="center"===i?(u.left+u.right)/2-m+e:oC(t,i,e);a=sl(n,h,o),g="left"===i?-rU:rU}return{titleX:s,titleY:a,maxWidth:r,rotation:g}}(this,l,i,o);sB(e,n.text,0,0,s,{color:n.color,maxWidth:d,rotation:u,textAlign:(t=so(o),(r&&"right"!==i||!r&&"right"===i)&&(t=oP(t)),t),textBaseline:"middle",translation:[h,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=rw(t.grid&&t.grid.z,-1),n=rw(t.border&&t.border.z,0);return this._isVisible()&&this.draw===oT.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){let e,i;let n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",s=[];for(e=0,i=n.length;e<i;++e){let i=n[e];i[r]!==this.id||t&&i.type!==t||s.push(i)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return sG(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class oL{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e;let i=Object.getPrototypeOf(t);"id"in i&&"defaults"in i&&(e=this.register(i));let n=this.items,r=t.id,s=this.scope+"."+r;if(!r)throw Error("class does not have id: "+t);return r in n||(n[r]=t,function(t,e,i){let n=rE(Object.create(null),[i?sA.get(i):{},sA.get(e),t.defaults]);sA.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{let n=i.split("."),r=n.pop(),s=[t].concat(n).join("."),a=e[i].split("."),o=a.pop(),l=a.join(".");sA.route(s,r,l,o)})}(e,t.defaultRoutes),t.descriptors&&sA.describe(e,t.descriptors)}(t,s,e),this.override&&sA.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in sA[n]&&(delete sA[n][i],this.override&&delete sS[i])}}var oI=/* #__PURE__ */new class{constructor(){this.controllers=new oL(a$,"datasets",!0),this.elements=new oL(ok,"elements"),this.plugins=new oL(Object,"plugins"),this.scales=new oL(oT,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{let n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):rP(e,e=>{let n=i||this._getRegistryForType(e);this._exec(t,n,e)})})}_exec(t,e,i){let n=rF(t);rS(i["before"+n],[],i),e[t](i),rS(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let n=e.get(t);if(void 0===n)throw Error('"'+t+'" is not a registered '+i+".");return n}};class oR{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let r=n?this._descriptors(t).filter(n):this._descriptors(t),s=this._notify(r,t,e,i);return"afterDestroy"===e&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,i,n){for(let r of(n=n||{},t)){let t=r.plugin,s=t[i],a=[e,n,r.options];if(!1===rS(s,a,t)&&n.cancelable)return!1}return!0}invalidate(){rb(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,n=rw(i.options&&i.options.plugins,{}),r=function(t){let e={},i=[],n=Object.keys(oI.plugins.items);for(let t=0;t<n.length;t++)i.push(oI.getPlugin(n[t]));let r=t.plugins||[];for(let t=0;t<r.length;t++){let n=r[t];-1===i.indexOf(n)&&(i.push(n),e[n.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==n||e?function(t,{plugins:e,localIds:i},n,r){let s=[],a=t.getContext();for(let l of e){var o;let e=l.id,h=(o=n[e],r||!1!==o?!0===o?{}:o:null);null!==h&&s.push({plugin:l,options:function(t,{plugin:e,local:i},n,r){let s=t.pluginScopeKeys(e),a=t.getOptionScopes(n,s);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}(t.config,{plugin:l,local:i[e]},h,a)})}return s}(t,r,n,e):[]}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function oF(t,e){let i=sA.datasets[t]||{},n=(e.datasets||{})[t]||{};return n.indexAxis||e.indexAxis||i.indexAxis||"x"}function oz(t){if("x"===t||"y"===t||"r"===t)return t}function oN(t,...e){if(oz(t))return t;for(let n of e){var i;let e=n.axis||("top"===(i=n.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&oz(t[0].toLowerCase());if(e)return e}throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function oV(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function oB(t){let e=t.options||(t.options={});e.plugins=rw(e.plugins,{}),e.scales=function(t,e){let i=sS[t.type]||{scales:{}},n=e.scales||{},r=oF(t.type,e),s=Object.create(null);return Object.keys(n).forEach(e=>{let a=n[e];if(!ry(a))return console.error(`Invalid scale configuration for scale: ${e}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);let o=oN(e,a,function(t,e){if(e.data&&e.data.datasets){let i=e.data.datasets.filter(e=>e.xAxisID===t||e.yAxisID===t);if(i.length)return oV(t,"x",i[0])||oV(t,"y",i[0])}return{}}(e,t),sA.scales[a.type]),l=o===r?"_index_":"_value_",h=i.scales||{};s[e]=rT(Object.create(null),[{axis:o},a,h[o],h[l]])}),t.data.datasets.forEach(i=>{let r=i.type||t.type,a=i.indexAxis||oF(r,e),o=sS[r]||{},l=o.scales||{};Object.keys(l).forEach(t=>{let e;let r=(e=t,"_index_"===t?e=a:"_value_"===t&&(e="x"===a?"y":"x"),e),o=i[r+"AxisID"]||r;s[o]=s[o]||Object.create(null),rT(s[o],[{axis:r},n[o],l[t]])})}),Object.keys(s).forEach(t=>{let e=s[t];rT(e,[sA.scales[e.type],sA.scale])}),s}(t,e)}function oW(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const oH=new Map,oj=new Set;function o$(t,e){let i=oH.get(t);return i||(i=e(),oH.set(t,i),oj.add(i)),i}const oU=(t,e,i)=>{let n=rR(e,i);void 0!==n&&t.add(n)};class oY{constructor(t){var e;this._config=((e=(e=t)||{}).data=oW(e.data),oB(e),e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=oW(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),oB(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return o$(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return o$(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return o$(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return o$(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,n=i.get(t);return(!n||e)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){let{options:n,type:r}=this,s=this._cachedScopes(t,i),a=s.get(e);if(a)return a;let o=new Set;e.forEach(e=>{t&&(o.add(t),e.forEach(e=>oU(o,t,e))),e.forEach(t=>oU(o,n,t)),e.forEach(t=>oU(o,sS[r]||{},t)),e.forEach(t=>oU(o,sA,t)),e.forEach(t=>oU(o,sP,t))});let l=Array.from(o);return 0===l.length&&l.push(Object.create(null)),oj.has(e)&&s.set(e,l),l}chartOptionScopes(){let{options:t,type:e}=this;return[t,sS[e]||{},sA.datasets[e]||{},{type:e},sA,sP]}resolveNamedOptions(t,e,i,n=[""]){let r={$shared:!0},{resolver:s,subPrefixes:a}=oX(this._resolverCache,t,n),o=s;if(function(t,e){let{isScriptable:i,isIndexable:n}=s0(t);for(let r of e){let e=i(r),s=n(r),a=(s||e)&&t[r];if(e&&(rN(a)||oq(a))||s&&rx(a))return!0}return!1}(s,e)){r.$shared=!1,i=rN(i)?i():i;let e=this.createResolver(t,i,a);o=sQ(s,i,e)}for(let t of e)r[t]=o[t];return r}createResolver(t,e,i=[""],n){let{resolver:r}=oX(this._resolverCache,t,i);return ry(e)?sQ(r,e,void 0,n):r}}function oX(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));let r=i.join(),s=n.get(r);if(!s){let t=sJ(e,i);s={resolver:t,subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},n.set(r,s)}return s}const oq=t=>ry(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||rN(t[i]),!1),oG=["top","bottom","left","right","chartArea"];function oK(t,e){return"top"===t||"bottom"===t||-1===oG.indexOf(t)&&"x"===e}function oZ(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function oJ(t){let e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),rS(i&&i.onComplete,[t],e)}function oQ(t){let e=t.chart,i=e.options.animation;rS(i&&i.onProgress,[t],e)}function o0(t){return ar()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const o1={},o2=t=>{let e=o0(t);return Object.values(o1).filter(t=>t.canvas===e).pop()};function o3(t,e,i){return t.options.clip?t[i]:e[i]}class o5{static defaults=sA;static instances=o1;static overrides=sS;static registry=oI;static version="4.4.0";static getChart=o2;static register(...t){oI.add(...t),o6()}static unregister(...t){oI.remove(...t),o6()}constructor(t,e){var i,n;let r;let s=this.config=new oY(e),a=o0(t),o=o2(a);if(o)throw Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");let l=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||(!ar()||"undefined"!=typeof OffscreenCanvas&&a instanceof OffscreenCanvas?ol:oM)),this.platform.updateConfig(s);let h=this.platform.acquireContext(a,l.aspectRatio),c=h&&h.canvas,d=c&&c.height,u=c&&c.width;if(this.id=rm(),this.ctx=h,this.canvas=c,this.width=u,this.height=d,this._options=l,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new oR,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(i=t=>this.update(t),n=l.resizeDelay||0,function(...t){return n?(clearTimeout(r),r=setTimeout(i,n,t)):i.apply(this,t),n}),this._dataChanges=[],o1[this.id]=this,!h||!c){console.error("Failed to create chart: can't acquire context from the given item");return}aD.listen(this,"complete",oJ),aD.listen(this,"progress",oQ),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:r}=this;return rb(t)?e&&r?r:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return oI}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():af(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sT(this.canvas,this.ctx),this}stop(){return aD.stop(this),this}resize(t,e){aD.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,n=this.canvas,r=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(n,t,e,r),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),o=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,af(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),rS(i.onResize,[this,s],this),this.attached&&this._doResize(o)&&this.render())}ensureScalesHaveIDs(){let t=this.options,e=t.scales||{};rP(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{}),r=[];e&&(r=r.concat(Object.keys(e).map(t=>{let i=e[t],n=oN(t,i),r="r"===n,s="x"===n;return{options:i,dposition:r?"chartArea":s?"bottom":"left",dtype:r?"radialLinear":s?"category":"linear"}}))),rP(r,e=>{let r=e.options,s=r.id,a=oN(s,r),o=rw(r.type,e.dtype);(void 0===r.position||oK(r.position,a)!==oK(e.dposition))&&(r.position=e.dposition),n[s]=!0;let l=null;if(s in i&&i[s].type===o)l=i[s];else{let t=oI.getScale(o);i[(l=new t({id:s,type:o,ctx:this.ctx,chart:this})).id]=l}l.init(r,t)}),rP(n,(t,e)=>{t||delete i[e]}),rP(i,t=>{oa.configure(this,t,t.options),oa.addBox(this,t)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(oZ("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t,e;let i=[],n=this.data.datasets;for(this._removeUnreferencedMetasets(),t=0,e=n.length;t<e;t++){let e=n[t],r=this.getDatasetMeta(t),s=e.type||this.config.type;if(r.type&&r.type!==s&&(this._destroyDatasetMeta(t),r=this.getDatasetMeta(t)),r.type=s,r.indexAxis=e.indexAxis||oF(s,this.options),r.order=e.order||0,r.index=t,r.label=""+e.label,r.visible=this.isDatasetVisible(t),r.controller)r.controller.updateIndex(t),r.controller.linkScales();else{let e=oI.getController(s),{datasetElementType:n,dataElementType:a}=sA.datasets[s];Object.assign(e,{dataElementType:oI.getElement(a),datasetElementType:n&&oI.getElement(n)}),r.controller=new e(this,t),i.push(r.controller)}}return this._updateMetasets(),i}_resetElements(){rP(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;let r=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let t=0,e=this.data.datasets.length;t<e;t++){let{controller:e}=this.getDatasetMeta(t),i=!n&&-1===r.indexOf(e);e.buildOrUpdateElements(i),s=Math.max(+e.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),n||rP(r,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(oZ("z","_idx"));let{_active:a,_lastEvent:o}=this;o?this._eventHandler(o,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){rP(this.scales,t=>{oa.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);rV(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:n,count:r}of e){let e="_removeElements"===i?-r:r;!function(t,e,i){let n=Object.keys(t);for(let r of n){let n=+r;if(n>=e){let s=t[r];delete t[r],(i>0||n>e)&&(t[n+i]=s)}}}(t,n,e)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),n=i(0);for(let t=1;t<e;t++)if(!rV(n,i(t)))return;return Array.from(n).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;oa.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],rP(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,rN(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(aD.has(this)?this.attached&&!aD.running(this)&&aD.start(this):(this.draw(),oJ({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e,i;let n=this._sortedMetasets,r=[];for(e=0,i=n.length;e<i;++e){let i=n[e];(!t||i.visible)&&r.push(i)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i=t._clip,n=!i.disabled,r=function(t,e){let{xScale:i,yScale:n}=t;return i&&n?{left:o3(i,e,"left"),right:o3(i,e,"right"),top:o3(n,e,"top"),bottom:o3(n,e,"bottom")}:e}(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",s)&&(n&&sF(e,{left:!1===i.left?0:r.left-i.left,right:!1===i.right?this.width:r.right+i.right,top:!1===i.top?0:r.top-i.top,bottom:!1===i.bottom?this.height:r.bottom+i.bottom}),t.controller.draw(),n&&sz(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return sR(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,n){let r=a4.modes[e];return"function"==typeof r?r(this,t,i,n):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,n=i.filter(t=>t&&t._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=sZ(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let n=i?"show":"hide",r=this.getDatasetMeta(t),s=r.controller._resolveAnimations(void 0,n);rz(e)?(r.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),s.update(r,{visible:i}),this.update(e=>e.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),aD.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sT(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete o1[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};rP(this.options.events,t=>i(t,n))}bindResponsiveEvents(){let t;this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,i=this.platform,n=(t,n)=>{i.addEventListener(this,t,n),e[t]=n},r=(t,n)=>{e[t]&&(i.removeEventListener(this,t,n),delete e[t])},s=(t,e)=>{this.canvas&&this.resize(t,e)},a=()=>{r("attach",a),this.attached=!0,this.resize(),n("resize",s),n("detach",t)};t=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),n("attach",a)},i.isAttached(this.canvas)?a():t()}unbindEvents(){rP(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},rP(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let n,r,s;let a=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+a+"DatasetHoverStyle"](),r=0,s=t.length;r<s;++r){n=t[r];let e=n&&this.getDatasetMeta(n.datasetIndex).controller;e&&e[a+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{let i=this.getDatasetMeta(t);if(!i)throw Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!rC(i,e);n&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter(e=>e.plugin.id===t).length}_updateHoverStyles(t,e,i){let n=this.options.hover,r=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),s=r(e,t),a=i?t:r(t,e);s.length&&this.updateHoverStyle(s,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;let r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){var n;let{_active:r=[],options:s}=this,a=this._getActiveElements(t,r,i,e),o="mouseup"===t.type||"click"===t.type||"contextmenu"===t.type,l=(n=this._lastEvent,i&&"mouseout"!==t.type?o?n:t:null);i&&(this._lastEvent=null,rS(s.onHover,[t,a,this],this),o&&rS(s.onClick,[t,a,this],this));let h=!rC(a,r);return(h||e)&&(this._active=a,this._updateHoverStyles(a,r,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;let r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,n)}}function o6(){return rP(o5.instances,t=>t._plugins.invalidate())}/**
 * Convert (r, 𝜃) to (x, y)
 */function o4(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */function o7(t,e,i,n,r,s){let{x:a,y:o,startAngle:l,pixelMargin:h,innerRadius:c}=e,d=Math.max(e.outerRadius+n+i-h,0),u=c>0?c+n+i+h:0,f=0,g=r-l;if(n){let t=d>0?d-n:0,e=((c>0?c-n:0)+t)/2;f=(g-(0!==e?g*e/(e+n):g))/2}let p=Math.max(.001,g*d-i/rB)/d,m=(g-p)/2,b=l+m+f,x=r-m-f,{outerStart:y,outerEnd:v,innerStart:_,innerEnd:w}=/**
 * Parse border radius from the provided options
 */function(t,e,i,n){let r=sU(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),s=(i-e)/2,a=Math.min(s,n*e/2),o=t=>{let e=(i-Math.min(s,t))*n/2;return r7(t,0,Math.min(s,e))};return{outerStart:o(r.outerStart),outerEnd:o(r.outerEnd),innerStart:r7(r.innerStart,0,a),innerEnd:r7(r.innerEnd,0,a)}}(e,u,d,x-b),M=d-y,k=d-v,S=b+y/M,P=x-v/k,C=u+_,D=u+w,A=b+_/C,O=x-w/D;if(t.beginPath(),s){// The first arc segments from point 1 to point a to point 2
let e=(S+P)/2;// The corner segment from point 2 to point 3
if(t.arc(a,o,d,S,e),t.arc(a,o,d,e,P),v>0){let e=o4(k,P,a,o);t.arc(e.x,e.y,v,P,x+rU)}// The line from point 3 to point 4
let i=o4(D,x,a,o);// The corner segment from point 4 to point 5
if(t.lineTo(i.x,i.y),w>0){let e=o4(D,O,a,o);t.arc(e.x,e.y,w,x+rU,O+Math.PI)}// The inner arc from point 5 to point b to point 6
let n=(x-w/u+(b+_/u))/2;// The corner segment from point 6 to point 7
if(t.arc(a,o,u,x-w/u,n,!0),t.arc(a,o,u,n,b+_/u,!0),_>0){let e=o4(C,A,a,o);t.arc(e.x,e.y,_,A+Math.PI,b-rU)}// The line from point 7 to point 8
let r=o4(M,b,a,o);// The corner segment from point 8 to point 1
if(t.lineTo(r.x,r.y),y>0){let e=o4(M,S,a,o);t.arc(e.x,e.y,y,b-rU,S)}}else{t.moveTo(a,o);let e=Math.cos(S)*d+a,i=Math.sin(S)*d+o;t.lineTo(e,i);let n=Math.cos(P)*d+a,r=Math.sin(P)*d+o;t.lineTo(n,r)}t.closePath()}function o9(t,e,i=e){t.lineCap=rw(i.borderCapStyle,e.borderCapStyle),t.setLineDash(rw(i.borderDash,e.borderDash)),t.lineDashOffset=rw(i.borderDashOffset,e.borderDashOffset),t.lineJoin=rw(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=rw(i.borderWidth,e.borderWidth),t.strokeStyle=rw(i.borderColor,e.borderColor)}function o8(t,e,i){t.lineTo(i.x,i.y)}function lt(t,e,i={}){let n=t.length,{start:r=0,end:s=n-1}=i,{start:a,end:o}=e,l=Math.max(r,a),h=Math.min(s,o);return{count:n,start:l,loop:e.loop,ilen:h<l&&!(r<a&&s<a||r>o&&s>o)?n+h-l:h-l}}function le(t,e,i,n){let r,s,a;let{points:o,options:l}=e,{count:h,start:c,loop:d,ilen:u}=lt(o,i,n),f=l.stepped?sN:l.tension||"monotone"===l.cubicInterpolationMode?sV:o8,{move:g=!0,reverse:p}=n||{};for(r=0;r<=u;++r)(s=o[(c+(p?u-r:r))%h]).skip||(g?(t.moveTo(s.x,s.y),g=!1):f(t,a,s,p,l.stepped),a=s);return d&&f(t,a,s=o[(c+(p?u:0))%h],p,l.stepped),!!d}function li(t,e,i,n){let r,s,a,o,l,h;let c=e.points,{count:d,start:u,ilen:f}=lt(c,i,n),{move:g=!0,reverse:p}=n||{},m=0,b=0,x=t=>(u+(p?f-t:t))%d,y=()=>{o!==l&&(t.lineTo(m,l),t.lineTo(m,o),t.lineTo(m,h))};for(g&&(s=c[x(0)],t.moveTo(s.x,s.y)),r=0;r<=f;++r){if((s=c[x(r)]).skip)continue;let e=s.x,i=s.y,n=0|e;n===a?(i<o?o=i:i>l&&(l=i),m=(b*m+e)/++b):(y(),t.lineTo(e,i),a=n,b=0,o=l=i),h=i}y()}function ln(t){let e=t.options,i=e.borderDash&&e.borderDash.length,n=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!i;return n?li:le}const lr="function"==typeof Path2D;class ls extends ok{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){let n=i.spanGaps?this._loop:this._fullLoop;!/**
 * @private
 */function(t,e,i,n,r){let s,a,o,l;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)!/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */function(t,e="x"){let i,n,r;let s=ai(e),a=t.length,o=Array(a).fill(0),l=Array(a),h=ae(t,0);for(i=0;i<a;++i)if(n=r,r=h,h=ae(t,i+1),r){if(h){let t=h[e]-r[e];// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
o[i]=0!==t?(h[s]-r[s])/t:0}l[i]=n?h?rG(o[i-1])!==rG(o[i])?0:(o[i-1]+o[i])/2:o[i-1]:o[i]}/**
 * Adjust tangents to ensure monotonic properties
 */(function(t,e,i){let n,r,s,a,o;let l=t.length,h=ae(t,0);for(let c=0;c<l-1;++c)if(o=h,h=ae(t,c+1),o&&h){if(rK(e[c],0,at)){i[c]=i[c+1]=0;continue}(a=Math.pow(n=i[c]/e[c],2)+Math.pow(r=i[c+1]/e[c],2))<=9||(s=3/Math.sqrt(a),i[c]=n*s*e[c],i[c+1]=r*s*e[c])}})(t,o,l),function(t,e,i="x"){let n,r,s;let a=ai(i),o=t.length,l=ae(t,0);for(let h=0;h<o;++h){if(r=s,s=l,l=ae(t,h+1),!s)continue;let o=s[i],c=s[a];r&&(n=(o-r[i])/3,s[`cp1${i}`]=o-n,s[`cp1${a}`]=c-n*e[h]),l&&(n=(l[i]-o)/3,s[`cp2${i}`]=o+n,s[`cp2${a}`]=c+n*e[h])}}(t,l,e)}(t,r);else{let i=n?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)l=function(t,e,i,n){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
let r=t.skip?e:t,s=i.skip?e:i,a=r3(e,r),o=r3(s,e),l=a/(a+o),h=o/(a+o);// If all points are the same, s01 & s02 will be inf
l=isNaN(l)?0:l,h=isNaN(h)?0:h;let c=n*l,d=n*h;// scaling factor for triangle Ta
return{previous:{x:e.x-c*(s.x-r.x),y:e.y-c*(s.y-r.y)},next:{x:e.x+d*(s.x-r.x),y:e.y+d*(s.y-r.y)}}}(i,o=t[s],t[Math.min(s+1,a-(n?0:1))%a],e.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,i=o}e.capBezierPoints&&function(t,e){let i,n,r,s,a;let o=sR(t[0],e);for(i=0,n=t.length;i<n;++i)a=s,s=o,o=i<n-1&&sR(t[i+1],e),s&&(r=t[i],a&&(r.cp1x=an(r.cp1x,e.left,e.right),r.cp1y=an(r.cp1y,e.top,e.bottom)),o&&(r.cp2x=an(r.cp2x,e.left,e.right),r.cp2y=an(r.cp2y,e.top,e.bottom)))}(t,i)}(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){let i=t.points,n=t.options.spanGaps,r=i.length;if(!r)return[];let s=!!t._loop,{start:a,end:o}=function(t,e,i,n){let r=0,s=e-1;if(i&&!n)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,i&&(s+=r);s>r&&t[s%e].skip;)s--;return{start:r,end:s%=e}}(i,r,s,n);if(!0===n)return aP(t,[{start:a,end:o,loop:s}],i,e);let l=o<a?o+r:o,h=!!t._fullLoop&&0===a&&o===r-1;return aP(t,function(t,e,i,n){let r;let s=t.length,a=[],o=e,l=t[e];for(r=e+1;r<=i;++r){let i=t[r%s];i.skip||i.stop?l.skip||(n=!1,a.push({start:e%s,end:(r-1)%s,loop:n}),e=o=i.stop?r:null):(o=r,l.skip&&(e=r)),l=i}return null!==o&&a.push({start:e%s,end:o%s,loop:n}),a}(i,a,l,h),i,e)}(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i,n;let r=this.options,s=t[e],a=this.points,o=aS(this,{property:e,start:s,end:s});if(!o.length)return;let l=[],h=r.stepped?ab:r.tension||"monotone"===r.cubicInterpolationMode?ax:am;for(i=0,n=o.length;i<n;++i){let{start:n,end:c}=o[i],d=a[n],u=a[c];if(d===u){l.push(d);continue}let f=Math.abs((s-d[e])/(u[e]-d[e])),g=h(d,u,f,r.stepped);g[e]=t[e],l.push(g)}return 1===l.length?l[0]:l}pathSegment(t,e,i){let n=ln(this);return n(t,this,e,i)}path(t,e,i){let n=this.segments,r=ln(this),s=this._loop;for(let a of(e=e||0,i=i||this.points.length-e,n))s&=r(t,this,a,{start:e,end:e+i-1});return!!s}draw(t,e,i,n){let r=this.options||{},s=this.points||[];s.length&&r.borderWidth&&(t.save(),function(t,e,i,n){if(lr&&!e.options.segment){let r;(r=e._path)||(r=e._path=new Path2D,e.path(r,i,n)&&r.closePath()),o9(t,e.options),t.stroke(r)}else!function(t,e,i,n){let{segments:r,options:s}=e,a=ln(e);for(let o of r)o9(t,s,o.style),t.beginPath(),a(t,e,o,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function la(t,e,i,n){let r=t.options,{[i]:s}=t.getProps([i],n);return Math.abs(e-s)<r.radius+r.hitRadius}function lo(t,e){let i,n,r,s,a;let{x:o,y:l,base:h,width:c,height:d}=t.getProps(["x","y","base","width","height"],e);return t.horizontal?(a=d/2,i=Math.min(o,h),n=Math.max(o,h),r=l-a,s=l+a):(i=o-(a=c/2),n=o+a,r=Math.min(l,h),s=Math.max(l,h)),{left:i,top:r,right:n,bottom:s}}function ll(t,e,i,n){return t?0:r7(e,i,n)}function lh(t,e,i,n){let r=null===e,s=null===i,a=t&&!(r&&s)&&lo(t,n);return a&&(r||r9(e,a.left,a.right))&&(s||r9(i,a.top,a.bottom))}function lc(t,e){t.rect(e.x,e.y,e.w,e.h)}function ld(t,e,i={}){let n=t.x!==i.x?-e:0,r=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-n,a=(t.y+t.h!==i.y+i.h?e:0)-r;return{x:t.x+n,y:t.y+r,w:t.w+s,h:t.h+a,radius:t.radius}}var lu=/*#__PURE__*/Object.freeze({__proto__:null,ArcElement:class extends ok{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.getProps(["x","y"],i),{angle:r,distance:s}=r2(n,{x:t,y:e}),{startAngle:a,endAngle:o,innerRadius:l,outerRadius:h,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=(this.options.spacing+this.options.borderWidth)/2,u=rw(c,o-a),f=u>=rW||r4(r,a,o),g=r9(s,l+d,h+d);return f&&g}getCenterPoint(t){let{x:e,y:i,startAngle:n,endAngle:r,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:o,spacing:l}=this.options,h=(n+r)/2,c=(s+a+l+o)/2;return{x:e+Math.cos(h)*c,y:i+Math.sin(h)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:i}=this,n=(e.offset||0)/4,r=(e.spacing||0)/2,s=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>rW?Math.floor(i/rW):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*n,Math.sin(a)*n);let o=1-Math.sin(Math.min(rB,i||0)),l=n*o;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,n,r){let{fullCircles:s,startAngle:a,circumference:o}=e,l=e.endAngle;if(s){o7(t,e,i,n,l,r);for(let e=0;e<s;++e)t.fill();isNaN(o)||(l=a+(o%rW||rW))}o7(t,e,i,n,l,r),t.fill()}(t,this,l,r,s),function(t,e,i,n,r){let{fullCircles:s,startAngle:a,circumference:o,options:l}=e,{borderWidth:h,borderJoinStyle:c,borderDash:d,borderDashOffset:u}=l,f="inner"===l.borderAlign;if(!h)return;t.setLineDash(d||[]),t.lineDashOffset=u,f?(t.lineWidth=2*h,t.lineJoin=c||"round"):(t.lineWidth=h,t.lineJoin=c||"bevel");let g=e.endAngle;if(s){o7(t,e,i,n,g,r);for(let e=0;e<s;++e)t.stroke();isNaN(o)||(g=a+(o%rW||rW))}f&&function(t,e,i){let{startAngle:n,pixelMargin:r,x:s,y:a,outerRadius:o,innerRadius:l}=e,h=r/o;// Draw an inner border by clipping the arc and drawing a double-width border
// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
t.beginPath(),t.arc(s,a,o,n-h,i+h),l>r?(h=r/l,t.arc(s,a,l,i+h,n-h,!0)):t.arc(s,a,r,i+rU,n-rU),t.closePath(),t.clip()}(t,e,g),s||(o7(t,e,i,n,g,r),t.stroke())}(t,this,l,r,s),t.restore()}},BarElement:class extends ok{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){var e;let{inflateAmount:i,options:{borderColor:n,backgroundColor:r}}=this,{inner:s,outer:a}=function(t){let e=lo(t),i=e.right-e.left,n=e.bottom-e.top,r=function(t,e,i){let n=t.options.borderWidth,r=t.borderSkipped,s=sY(n);return{t:ll(r.top,s.top,0,i),r:ll(r.right,s.right,0,e),b:ll(r.bottom,s.bottom,0,i),l:ll(r.left,s.left,0,e)}}(t,i/2,n/2),s=function(t,e,i){let{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),r=t.options.borderRadius,s=sX(r),a=Math.min(e,i),o=t.borderSkipped,l=n||ry(r);return{topLeft:ll(!l||o.top||o.left,s.topLeft,0,a),topRight:ll(!l||o.top||o.right,s.topRight,0,a),bottomLeft:ll(!l||o.bottom||o.left,s.bottomLeft,0,a),bottomRight:ll(!l||o.bottom||o.right,s.bottomRight,0,a)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:s},inner:{x:e.left+r.l,y:e.top+r.t,w:i-r.l-r.r,h:n-r.t-r.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,s.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(r.b,r.r))}}}}(this),o=(e=a.radius).topLeft||e.topRight||e.bottomLeft||e.bottomRight?sW:lc;t.save(),(a.w!==s.w||a.h!==s.h)&&(t.beginPath(),o(t,ld(a,i,s)),t.clip(),o(t,ld(s,-i,a)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),o(t,ld(s,i)),t.fillStyle=r,t.fill(),t.restore()}inRange(t,e,i){return lh(this,t,e,i)}inXRange(t,e){return lh(this,t,null,e)}inYRange(t,e){return lh(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:n,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+n)/2:e,y:r?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}},LineElement:ls,PointElement:class extends ok{static id="point";parsed;skip;stop;/**
   * @type {any}
   */static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};/**
   * @type {any}
   */static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.options,{x:r,y:s}=this.getProps(["x","y"],i);return Math.pow(t-r,2)+Math.pow(e-s,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return la(this,t,"x",e)}inYRange(t,e){return la(this,t,"y",e)}getCenterPoint(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);let i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){let i=this.options;!this.skip&&!(i.radius<.1)&&sR(this,e,this.size(i)/2)&&(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,sL(t,i,this.x,this.y))}getRange(){let t=this.options||{};// @ts-expect-error Fallbacks should never be hit in practice
return t.radius+t.hitRadius}}});const lf=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"// grey
],lg=/* #__PURE__ */lf.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function lp(t){return lf[t%lf.length]}function lm(t){return lg[t%lg.length]}function lb(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function lx(t){if(t._decimated){let e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function ly(t){t.data.datasets.forEach(t=>{lx(t)})}function lv(t,e,i,n){if(n)return;let r=e[t],s=i[t];return"angle"===t&&(r=r6(r),s=r6(s)),{property:t,start:r,end:s}}function l_(t,e,i){for(;e>t;e--){let t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function lw(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function lM(t,e){let i=[],n=!1;return rx(t)?(n=!0,i=t):i=function(t,e){let{x:i=null,y:n=null}=t||{},r=e.points,s=[];return e.segments.forEach(({start:t,end:e})=>{e=l_(t,e,r);let a=r[t],o=r[e];null!==n?(s.push({x:a.x,y:n}),s.push({x:o.x,y:n})):null!==i&&(s.push({x:i,y:a.y}),s.push({x:i,y:o.y}))}),s}(t,e),i.length?new ls({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function lk(t){return t&&!1!==t.fill}class lS{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:n,y:r,radius:s}=this;return e=e||{start:0,end:rW},t.arc(n,r,s,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:n}=this,r=t.angle;return{x:e+Math.cos(r)*n,y:i+Math.sin(r)*n,angle:r}}}function lP(t,e,i){let n=function(t){let{chart:e,fill:i,line:n}=t;if(rv(i))return function(t,e){let i=t.getDatasetMeta(e),n=i&&t.isDatasetVisible(e);return n?i.dataset:null}(e,i);if("stack"===i)return function(t){let{scale:e,index:i,line:n}=t,r=[],s=n.segments,a=n.points,o=function(t,e){let i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){let r=n[t];if(r.index===e)break;r.hidden||i.unshift(r.dataset)}return i}(e,i);o.push(lM({x:null,y:e.bottom},n));for(let t=0;t<s.length;t++){let e=s[t];for(let t=e.start;t<=e.end;t++)!function(t,e,i){let n=[];for(let r=0;r<i.length;r++){let s=i[r],{first:a,last:o,point:l}=function(t,e,i){let n=t.interpolate(e,i);if(!n)return{};let r=n[i],s=t.segments,a=t.points,o=!1,l=!1;for(let t=0;t<s.length;t++){let e=s[t],n=a[e.start][i],h=a[e.end][i];if(r9(r,n,h)){o=r===n,l=r===h;break}}return{first:o,last:l,point:n}}(s,e,"x");if(l&&(!a||!o)){if(a)n.unshift(l);else if(t.push(l),!o)break}}t.push(...n)}(r,a[t],o)}return new ls({points:r,options:{}})}(t);if("shape"===i)return!0;let r=function(t){let e=t.scale||{};return e.getPointPositionForValue?function(t){let{scale:e,fill:i}=t,n=e.options,r=e.getLabels().length,s=n.reverse?e.max:e.min,a="start"===i?s:"end"===i?e.options.reverse?e.min:e.max:ry(i)?i.value:e.getBaseValue(),o=[];if(n.grid.circular){let t=e.getPointPositionForValue(0,s);return new lS({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(a)})}for(let t=0;t<r;++t)o.push(e.getPointPositionForValue(t,a));return o}(t):function(t){let e;let{scale:i={},fill:n}=t,r=(e=null,"start"===n?e=i.bottom:"end"===n?e=i.top:ry(n)?e=i.getPixelForValue(n.value):i.getBasePixel&&(e=i.getBasePixel()),e);if(rv(r)){let t=i.isHorizontal();return{x:t?r:null,y:t?null:r}}return null}(t)}(t);return r instanceof lS?r:lM(r,n)}(e),{line:r,scale:s,axis:a}=e,o=r.options,l=o.fill,h=o.backgroundColor,{above:c=h,below:d=h}=l||{};n&&r.points.length&&(sF(t,i),function(t,e){let{line:i,target:n,above:r,below:s,area:a,scale:o}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&s!==r&&(lC(t,n,a.top),lD(t,{line:i,target:n,color:r,scale:o,property:l}),t.restore(),t.save(),lC(t,n,a.bottom)),lD(t,{line:i,target:n,color:s,scale:o,property:l}),t.restore()}(t,{line:r,target:n,above:c,below:d,area:i,scale:s,axis:a}),sz(t))}function lC(t,e,i){let{segments:n,points:r}=e,s=!0,a=!1;for(let o of(t.beginPath(),n)){let{start:n,end:l}=o,h=r[n],c=r[l_(n,l,r)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),(a=!!e.pathSegment(t,o,{move:a}))?t.closePath():t.lineTo(c.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function lD(t,e){let{line:i,target:n,property:r,color:s,scale:a}=e,o=function(t,e,i){let n=t.segments,r=t.points,s=e.points,a=[];for(let t of n){let{start:n,end:o}=t;o=l_(n,o,r);let l=lv(i,r[n],r[o],t.loop);if(!e.segments){a.push({source:t,target:l,start:r[n],end:r[o]});continue}let h=aS(e,l);for(let e of h){let n=lv(i,s[e.start],s[e.end],e.loop),o=ak(t,r,n);for(let t of o)a.push({source:t,target:e,start:{[i]:lw(l,n,"start",Math.max)},end:{[i]:lw(l,n,"end",Math.min)}})}}return a}(i,n,r);for(let{source:e,target:l,start:h,end:c}of o){let o;let{style:{backgroundColor:d=s}={}}=e,u=!0!==n;t.save(),t.fillStyle=d,function(t,e,i){let{top:n,bottom:r}=e.chart.chartArea,{property:s,start:a,end:o}=i||{};"x"===s&&(t.beginPath(),t.rect(a,n,o-a,r-n),t.clip())}(t,a,u&&lv(r,h,c)),t.beginPath();let f=!!i.pathSegment(t,e);if(u){f?t.closePath():lA(t,n,c,r);let e=!!n.pathSegment(t,l,{move:f,reverse:!0});(o=f&&e)||lA(t,n,h,r)}t.closePath(),t.fill(o?"evenodd":"nonzero"),t.restore()}}function lA(t,e,i,n){let r=e.interpolate(i,n);r&&t.lineTo(r.x,r.y)}const lO=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=t.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}},lE=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class lT extends ok{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=rS(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(e=>t.filter(e,this.chart.data))),t.sort&&(e=e.sort((e,i)=>t.sort(e,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let t,e;let{options:i,ctx:n}=this;if(!i.display){this.width=this.height=0;return}let r=i.labels,s=sG(r.font),a=s.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:h}=lO(r,a);n.font=s.string,this.isHorizontal()?(t=this.maxWidth,e=this._fitRows(o,a,l,h)+10):(e=this.maxHeight,t=this._fitCols(o,s,l,h)+10),this.width=Math.min(t,i.maxWidth||this.maxWidth),this.height=Math.min(e,i.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){let{ctx:r,maxWidth:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.lineWidths=[0],h=n+a,c=t;r.textAlign="left",r.textBaseline="middle";let d=-1,u=-h;return this.legendItems.forEach((t,f)=>{let g=i+e/2+r.measureText(t.text).width;(0===f||l[l.length-1]+g+2*a>s)&&(c+=h,l[l.length-(f>0?0:1)]=0,u+=h,d++),o[f]={left:0,top:u,row:d,width:g,height:n},l[l.length-1]+=g+a}),c}_fitCols(t,e,i,n){let{ctx:r,maxHeight:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.columnSizes=[],h=s-t,c=a,d=0,u=0,f=0,g=0;return this.legendItems.forEach((t,s)=>{let{itemWidth:p,itemHeight:m}=function(t,e,i,n,r){var s;let a,o;let l=((a=n.text)&&"string"!=typeof a&&(a=a.reduce((t,e)=>t.length>e.length?t:e)),t+e.size/2+i.measureText(a).width),h=(s=e.lineHeight,o=r,"string"!=typeof n.text&&(o=lL(n,s)),o);return{itemWidth:l,itemHeight:h}}(i,e,r,t,n);s>0&&u+m+2*a>h&&(c+=d+a,l.push({width:d,height:u}),f+=d+a,g++,d=u=0),o[s]={left:f,top:u,col:g,width:p,height:m},d=Math.max(d,p),u+=m+a}),c+=d,l.push({width:d,height:u}),c}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:r}}=this,s=ay(r,this.left,this.width);if(this.isHorizontal()){let r=0,a=sl(i,this.left+n,this.right-this.lineWidths[r]);for(let o of e)r!==o.row&&(r=o.row,a=sl(i,this.left+n,this.right-this.lineWidths[r])),o.top+=this.top+t+n,o.left=s.leftForLtr(s.x(a),o.width),a+=o.width+n}else{let r=0,a=sl(i,this.top+t+n,this.bottom-this.columnSizes[r].height);for(let o of e)o.col!==r&&(r=o.col,a=sl(i,this.top+t+n,this.bottom-this.columnSizes[r].height)),o.top=a,o.left+=this.left+n,o.left=s.leftForLtr(s.x(o.left),o.width),a+=o.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){let t=this.ctx;sF(t,this),this._draw(),sz(t)}}_draw(){let t;let{options:e,columnSizes:i,lineWidths:n,ctx:r}=this,{align:s,labels:a}=e,o=sA.color,l=ay(e.rtl,this.left,this.width),h=sG(a.font),{padding:c}=a,d=h.size,u=d/2;this.drawTitle(),r.textAlign=l.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=h.string;let{boxWidth:f,boxHeight:g,itemHeight:p}=lO(a,d),m=function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;r.save();let n=rw(i.lineWidth,1);if(r.fillStyle=rw(i.fillStyle,o),r.lineCap=rw(i.lineCap,"butt"),r.lineDashOffset=rw(i.lineDashOffset,0),r.lineJoin=rw(i.lineJoin,"miter"),r.lineWidth=n,r.strokeStyle=rw(i.strokeStyle,o),r.setLineDash(rw(i.lineDash,[])),a.usePointStyle){let s={radius:g*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},o=l.xPlus(t,f/2),h=e+u;sI(r,s,o,h,a.pointStyleWidth&&f)}else{let s=e+Math.max((d-g)/2,0),a=l.leftForLtr(t,f),o=sX(i.borderRadius);r.beginPath(),Object.values(o).some(t=>0!==t)?sW(r,{x:a,y:s,w:f,h:g,radius:o}):r.rect(a,s,f,g),r.fill(),0!==n&&r.stroke()}r.restore()},b=function(t,e,i){sB(r,i.text,t,e+p/2,h,{strikethrough:i.hidden,textAlign:l.textAlign(i.textAlign)})},x=this.isHorizontal(),y=this._computeTitleHeight();t=x?{x:sl(s,this.left+c,this.right-n[0]),y:this.top+c+y,line:0}:{x:this.left+c,y:sl(s,this.top+y+c,this.bottom-i[0].height),line:0},av(this.ctx,e.textDirection);let v=p+c;this.legendItems.forEach((o,d)=>{r.strokeStyle=o.fontColor,r.fillStyle=o.fontColor;let g=r.measureText(o.text).width,p=l.textAlign(o.textAlign||(o.textAlign=a.textAlign)),_=f+u+g,w=t.x,M=t.y;l.setWidth(this.width),x?d>0&&w+_+c>this.right&&(M=t.y+=v,t.line++,w=t.x=sl(s,this.left+c,this.right-n[t.line])):d>0&&M+v>this.bottom&&(w=t.x=w+i[t.line].width+c,t.line++,M=t.y=sl(s,this.top+y+c,this.bottom-i[t.line].height));let k=l.x(w);if(m(k,M,o),w=sh(p,w+f+u,x?w+_:this.right,e.rtl),b(l.x(w),M,o),x)t.x+=_+c;else if("string"!=typeof o.text){let e=h.lineHeight;t.y+=lL(o,e)+c}else t.y+=v}),a_(this.ctx,e.textDirection)}drawTitle(){let t;let e=this.options,i=e.title,n=sG(i.font),r=sq(i.padding);if(!i.display)return;let s=ay(e.rtl,this.left,this.width),a=this.ctx,o=i.position,l=n.size/2,h=r.top+l,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),t=this.top+h,c=sl(e.align,c,this.right-d);else{let i=this.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);t=h+sl(e.align,this.top,this.bottom-i-e.labels.padding-this._computeTitleHeight())}let u=sl(o,c,c+d);a.textAlign=s.textAlign(so(o)),a.textBaseline="middle",a.strokeStyle=i.color,a.fillStyle=i.color,a.font=n.string,sB(a,i.text,u,t,n)}_computeTitleHeight(){let t=this.options.title,e=sG(t.font),i=sq(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,r;if(r9(t,this.left,this.right)&&r9(e,this.top,this.bottom)){for(i=0,r=this.legendHitBoxes;i<r.length;++i)if(r9(t,(n=r[i]).left,n.left+n.width)&&r9(e,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){var e;let i=this.options;if(("mousemove"!==(e=t.type)&&"mouseout"!==e||!i.onHover&&!i.onLeave)&&(!i.onClick||"click"!==e&&"mouseup"!==e))return;let n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){let e=this._hoveredItem,r=lE(e,n);e&&!r&&rS(i.onLeave,[t,e,this],this),this._hoveredItem=n,n&&!r&&rS(i.onHover,[t,n,this],this)}else n&&rS(i.onClick,[t,n,this],this)}}function lL(t,e){let i=t.text?t.text.length:0;return e*i}class lI extends ok{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let n=rx(i.text)?i.text.length:1;this._padding=sq(i.padding);let r=n*sG(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){let t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){let e,i,n;let{top:r,left:s,bottom:a,right:o,options:l}=this,h=l.align,c=0;return this.isHorizontal()?(i=sl(h,s,o),n=r+t,e=o-s):("left"===l.position?(i=s+t,n=sl(h,a,r),c=-.5*rB):(i=o-t,n=sl(h,r,a),c=.5*rB),e=a-r),{titleX:i,titleY:n,maxWidth:e,rotation:c}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let i=sG(e.font),n=i.lineHeight,r=n/2+this._padding.top,{titleX:s,titleY:a,maxWidth:o,rotation:l}=this._drawArgs(r);sB(t,e.text,0,0,i,{color:e.color,maxWidth:o,rotation:l,textAlign:so(e.align),textBaseline:"middle",translation:[s,a]})}}const lR=new WeakMap,lF={average(t){let e,i;if(!t.length)return!1;let n=0,r=0,s=0;for(e=0,i=t.length;e<i;++e){let i=t[e].element;if(i&&i.hasValue()){let t=i.tooltipPosition();n+=t.x,r+=t.y,++s}}return{x:n/s,y:r/s}},nearest(t,e){let i,n,r;if(!t.length)return!1;let s=e.x,a=e.y,o=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){let n=t[i].element;if(n&&n.hasValue()){let t=n.getCenterPoint(),i=r3(e,t);i<o&&(o=i,r=n)}}if(r){let t=r.tooltipPosition();s=t.x,a=t.y}return{x:s,y:a}}};function lz(t,e){return e&&(rx(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function lN(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function lV(t,e){let i=t.chart.ctx,{body:n,footer:r,title:s}=t,{boxWidth:a,boxHeight:o}=e,l=sG(e.bodyFont),h=sG(e.titleFont),c=sG(e.footerFont),d=s.length,u=r.length,f=n.length,g=sq(e.padding),p=g.height,m=0,b=n.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(b+=t.beforeBody.length+t.afterBody.length,d&&(p+=d*h.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),b){let t=e.displayColors?Math.max(o,l.lineHeight):l.lineHeight;p+=f*t+(b-f)*l.lineHeight+(b-1)*e.bodySpacing}u&&(p+=e.footerMarginTop+u*c.lineHeight+(u-1)*e.footerSpacing);let x=0,y=function(t){m=Math.max(m,i.measureText(t).width+x)};return i.save(),i.font=h.string,rP(t.title,y),i.font=l.string,rP(t.beforeBody.concat(t.afterBody),y),x=e.displayColors?a+2+e.boxPadding:0,rP(n,t=>{rP(t.before,y),rP(t.lines,y),rP(t.after,y)}),x=0,i.font=c.string,rP(t.footer,y),i.restore(),{width:m+=g.width,height:p}}function lB(t,e,i){let n=i.yAlign||e.yAlign||function(t,e){let{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||function(t,e,i,n){let{x:r,width:s}=i,{width:a,chartArea:{left:o,right:l}}=t,h="center";return"center"===n?h=r<=(o+l)/2?"left":"right":r<=s/2?h="left":r>=a-s/2&&(h="right"),function(t,e,i,n){let{x:r,width:s}=n,a=i.caretSize+i.caretPadding;if("left"===t&&r+s+a>e.width||"right"===t&&r-s-a<0)return!0}(h,t,e,i)&&(h="center"),h}(t,e,i,n),yAlign:n}}function lW(t,e,i,n){let{caretSize:r,caretPadding:s,cornerRadius:a}=t,{xAlign:o,yAlign:l}=i,h=r+s,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=sX(a),g=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,o),p=function(t,e,i){let{y:n,height:r}=t;return"top"===e?n+=i:"bottom"===e?n-=r+i:n-=r/2,n}(e,l,h);return"center"===l?"left"===o?g+=h:"right"===o&&(g-=h):"left"===o?g-=Math.max(c,u)+r:"right"===o&&(g+=Math.max(d,f)+r),{x:r7(g,0,n.width-e.width),y:r7(p,0,n.height-e.height)}}function lH(t,e,i){let n=sq(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function lj(t,e){let i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const l$={beforeTitle:rp,title(t){if(t.length>0){let e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:rp,beforeBody:rp,beforeLabel:rp,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");let i=t.formattedValue;return rb(i)||(e+=i),e},labelColor(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:rp,afterBody:rp,beforeFooter:rp,footer:rp,afterFooter:rp};function lU(t,e,i,n){let r=t[e].call(i,n);return void 0===r?l$[e].call(i,n):r}class lY extends ok{static positioners=lF;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,r=new aT(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){return this.$context||(this.$context=sZ(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"}))}getTitle(t,e){let{callbacks:i}=e,n=lU(i,"beforeTitle",this,t),r=lU(i,"title",this,t),s=lU(i,"afterTitle",this,t),a=[];return a=lz(a,lN(n)),a=lz(a,lN(r)),a=lz(a,lN(s))}getBeforeBody(t,e){return lz([],lN(lU(e.callbacks,"beforeBody",this,t)))}getBody(t,e){let{callbacks:i}=e,n=[];return rP(t,t=>{let e={before:[],lines:[],after:[]},r=lj(i,t);lz(e.before,lN(lU(r,"beforeLabel",this,t))),lz(e.lines,lU(r,"label",this,t)),lz(e.after,lN(lU(r,"afterLabel",this,t))),n.push(e)}),n}getAfterBody(t,e){return lz([],lN(lU(e.callbacks,"afterBody",this,t)))}getFooter(t,e){let{callbacks:i}=e,n=lU(i,"beforeFooter",this,t),r=lU(i,"footer",this,t),s=lU(i,"afterFooter",this,t),a=[];return a=lz(a,lN(n)),a=lz(a,lN(r)),a=lz(a,lN(s))}_createItems(t){let e,i;let n=this._active,r=this.chart.data,s=[],a=[],o=[],l=[];for(e=0,i=n.length;e<i;++e)l.push(function(t,e){let{element:i,datasetIndex:n,index:r}=e,s=t.getDatasetMeta(n).controller,{label:a,value:o}=s.getLabelAndValue(r);return{chart:t,label:a,parsed:s.getParsed(r),raw:t.data.datasets[n].data[r],formattedValue:o,dataset:s.getDataset(),dataIndex:r,datasetIndex:n,element:i}}(this.chart,n[e]));return t.filter&&(l=l.filter((e,i,n)=>t.filter(e,i,n,r))),t.itemSort&&(l=l.sort((e,i)=>t.itemSort(e,i,r))),rP(l,e=>{let i=lj(t.callbacks,e);s.push(lU(i,"labelColor",this,e)),a.push(lU(i,"labelPointStyle",this,e)),o.push(lU(i,"labelTextColor",this,e))}),this.labelColors=s,this.labelPointStyles=a,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){let i;let n=this.options.setContext(this.getContext()),r=this._active,s=[];if(r.length){let t=lF[n.position].call(this,r,this._eventPosition);s=this._createItems(n),this.title=this.getTitle(s,n),this.beforeBody=this.getBeforeBody(s,n),this.body=this.getBody(s,n),this.afterBody=this.getAfterBody(s,n),this.footer=this.getFooter(s,n);let e=this._size=lV(this,n),a=Object.assign({},t,e),o=lB(this.chart,n,a),l=lW(n,a,o,this.chart);this.xAlign=o.xAlign,this.yAlign=o.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=s,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){let r=this.getCaretPosition(t,i,n);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){let n,r,s,a,o,l;let{xAlign:h,yAlign:c}=this,{caretSize:d,cornerRadius:u}=i,{topLeft:f,topRight:g,bottomLeft:p,bottomRight:m}=sX(u),{x:b,y:x}=t,{width:y,height:v}=e;return"center"===c?(o=x+v/2,"left"===h?(r=(n=b)-d,a=o+d,l=o-d):(r=(n=b+y)+d,a=o-d,l=o+d),s=n):(r="left"===h?b+Math.max(f,p)+d:"right"===h?b+y-Math.max(g,m)-d:this.caretX,"top"===c?(o=(a=x)-d,n=r-d,s=r+d):(o=(a=x+v)+d,n=r+d,s=r-d),l=a),{x1:n,x2:r,x3:s,y1:a,y2:o,y3:l}}drawTitle(t,e,i){let n,r,s;let a=this.title,o=a.length;if(o){let l=ay(i.rtl,this.x,this.width);for(s=0,t.x=lH(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",n=sG(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string;s<o;++s)e.fillText(a[s],l.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+r,s+1===o&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,n,r){let s=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:o,boxWidth:l}=r,h=sG(r.bodyFont),c=lH(this,"left",r),d=n.x(c),u=o<h.lineHeight?(h.lineHeight-o)/2:0,f=e.y+u;if(r.usePointStyle){let e={radius:Math.min(l,o)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},i=n.leftForLtr(d,l)+l/2,h=f+o/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,sL(t,e,i,h),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,sL(t,e,i,h)}else{t.lineWidth=ry(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;let e=n.leftForLtr(d,l),i=n.leftForLtr(n.xPlus(d,1),l-2),a=sX(s.borderRadius);Object.values(a).some(t=>0!==t)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,sW(t,{x:e,y:f,w:l,h:o,radius:a}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),sW(t,{x:i,y:f+1,w:l-2,h:o-2,radius:a}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(e,f,l,o),t.strokeRect(e,f,l,o),t.fillStyle=s.backgroundColor,t.fillRect(i,f+1,l-2,o-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let n,r,s,a,o,l,h;let{body:c}=this,{bodySpacing:d,bodyAlign:u,displayColors:f,boxHeight:g,boxWidth:p,boxPadding:m}=i,b=sG(i.bodyFont),x=b.lineHeight,y=0,v=ay(i.rtl,this.x,this.width),_=function(i){e.fillText(i,v.x(t.x+y),t.y+x/2),t.y+=x+d},w=v.textAlign(u);for(e.textAlign=u,e.textBaseline="middle",e.font=b.string,t.x=lH(this,w,i),e.fillStyle=i.bodyColor,rP(this.beforeBody,_),y=f&&"right"!==w?"center"===u?p/2+m:p+2+m:0,a=0,l=c.length;a<l;++a){for(n=c[a],r=this.labelTextColors[a],e.fillStyle=r,rP(n.before,_),s=n.lines,f&&s.length&&(this._drawColorBox(e,t,a,v,i),x=Math.max(b.lineHeight,g)),o=0,h=s.length;o<h;++o)_(s[o]),x=b.lineHeight;rP(n.after,_)}y=0,x=b.lineHeight,rP(this.afterBody,_),t.y-=d}drawFooter(t,e,i){let n,r;let s=this.footer,a=s.length;if(a){let o=ay(i.rtl,this.x,this.width);for(t.x=lH(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=o.textAlign(i.footerAlign),e.textBaseline="middle",n=sG(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,r=0;r<a;++r)e.fillText(s[r],o.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){let{xAlign:r,yAlign:s}=this,{x:a,y:o}=t,{width:l,height:h}=i,{topLeft:c,topRight:d,bottomLeft:u,bottomRight:f}=sX(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+c,o),"top"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+l-d,o),e.quadraticCurveTo(a+l,o,a+l,o+d),"center"===s&&"right"===r&&this.drawCaret(t,e,i,n),e.lineTo(a+l,o+h-f),e.quadraticCurveTo(a+l,o+h,a+l-f,o+h),"bottom"===s&&this.drawCaret(t,e,i,n),e.lineTo(a+u,o+h),e.quadraticCurveTo(a,o+h,a,o+h-u),"center"===s&&"left"===r&&this.drawCaret(t,e,i,n),e.lineTo(a,o+c),e.quadraticCurveTo(a,o,a+c,o),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,n=i&&i.x,r=i&&i.y;if(n||r){let i=lF[t.position].call(this,this._active,this._eventPosition);if(!i)return;let s=this._size=lV(this,t),a=Object.assign({},i,this._size),o=lB(e,t,a),l=lW(t,a,o,e);(n._to!==l.x||r._to!==l.y)&&(this.xAlign=o.xAlign,this.yAlign=o.yAlign,this.width=s.width,this.height=s.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let n={width:this.width,height:this.height},r={x:this.x,y:this.y};i=.001>Math.abs(i)?0:i;let s=sq(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(r,t,n,e),av(t,e.textDirection),r.y+=s.top,this.drawTitle(r,t,e),this.drawBody(r,t,e),this.drawFooter(r,t,e),a_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,n=t.map(({datasetIndex:t,index:e})=>{let i=this.chart.getDatasetMeta(t);if(!i)throw Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),r=!rC(i,n),s=this._positionChanged(n,e);(r||s)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let n=this.options,r=this._active||[],s=this._getActiveElements(t,r,e,i),a=this._positionChanged(s,t),o=e||!rC(s,r)||a;return o&&(this._active=s,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),o}_getActiveElements(t,e,i,n){let r=this.options;if("mouseout"===t.type)return[];if(!n)return e;let s=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&s.reverse(),s}_positionChanged(t,e){let{caretX:i,caretY:n,options:r}=this,s=lF[r.position].call(this,t,e);return!1!==s&&(i!==s.x||n!==s.y)}}var lX=/*#__PURE__*/Object.freeze({__proto__:null,Colors:{id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){let n;if(!i.enabled)return;let{data:{datasets:r},options:s}=t.config,{elements:a}=s;if(!i.forceOverride&&(lb(r)||s&&(s.borderColor||s.backgroundColor)||a&&lb(a)))return;let o=(n=0,(e,i)=>{var r,s,a;let o=t.getDatasetMeta(i).controller;o instanceof aK?(r=n,e.backgroundColor=e.data.map(()=>lp(r++)),n=r):o instanceof aZ?(s=n,e.backgroundColor=e.data.map(()=>lm(s++)),n=s):o&&(a=n,e.borderColor=lp(a),e.backgroundColor=lm(a),n=++a)});r.forEach(o)}},Decimation:{id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){ly(t);return}let n=t.width;t.data.datasets.forEach((e,r)=>{let s;let{_data:a,indexAxis:o}=e,l=t.getDatasetMeta(r),h=a||e.data;if("y"===sK([o,t.options.indexAxis])||!l.controller.supportsDecimation)return;let c=t.scales[l.xAxisID];if("linear"!==c.type&&"time"!==c.type||t.options.parsing)return;let{start:d,count:u}=function(t,e){let i;let n=e.length,r=0,{iScale:s}=t,{min:a,max:o,minDefined:l,maxDefined:h}=s.getUserBounds();return l&&(r=r7(st(e,s.axis,a).lo,0,n-1)),i=h?r7(st(e,s.axis,o).hi+1,r,n)-r:n-r,{start:r,count:i}}(l,h),f=i.threshold||4*n;if(u<=f){lx(e);return}switch(rb(a)&&(e._data=h,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":s=function(t,e,i,n,r){let s,a,o,l,h;let c=r.samples||n;if(c>=i)return t.slice(e,e+i);let d=[],u=(i-2)/(c-2),f=0,g=e+i-1,p=e;for(s=0,d[f++]=t[p];s<c-2;s++){let n,r=0,c=0,g=Math.floor((s+1)*u)+1+e,m=Math.min(Math.floor((s+2)*u)+1,i)+e,b=m-g;for(n=g;n<m;n++)r+=t[n].x,c+=t[n].y;r/=b,c/=b;let x=Math.floor(s*u)+1+e,y=Math.min(Math.floor((s+1)*u)+1,i)+e,{x:v,y:_}=t[p];for(o=l=-1,n=x;n<y;n++)(l=.5*Math.abs((v-r)*(t[n].y-_)-(v-t[n].x)*(c-_)))>o&&(o=l,a=t[n],h=n);d[f++]=a,p=h}return d[f++]=t[g],d}(h,d,u,n,i);break;case"min-max":s=function(t,e,i,n){let r,s,a,o,l,h,c,d,u,f,g=0,p=0,m=[],b=t[e].x,x=t[e+i-1].x,y=x-b;for(r=e;r<e+i;++r){a=((s=t[r]).x-b)/y*n,o=s.y;let e=0|a;if(e===l)o<u?(u=o,h=r):o>f&&(f=o,c=r),g=(p*g+s.x)/++p;else{let i=r-1;if(!rb(h)&&!rb(c)){let e=Math.min(h,c),n=Math.max(h,c);e!==d&&e!==i&&m.push({...t[e],x:g}),n!==d&&n!==i&&m.push({...t[n],x:g})}r>0&&i!==d&&m.push(t[i]),m.push(s),l=e,p=0,u=f=o,h=c=d=r}}return m}(h,d,u,n);break;default:throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=s})},destroy(t){ly(t)}},Filler:{id:"filler",afterDatasetsUpdate(t,e,i){let n,r,s,a;let o=(t.data.datasets||[]).length,l=[];for(r=0;r<o;++r)s=(n=t.getDatasetMeta(r)).dataset,a=null,s&&s.options&&s instanceof ls&&(a={visible:t.isDatasetVisible(r),index:r,fill:function(t,e,i){var n,r;let s=function(t){let e=t.options,i=e.fill,n=rw(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(ry(s))return!isNaN(s.value)&&s;let a=parseFloat(s);return rv(a)&&Math.floor(a)===a?(n=s[0],r=a,("-"===n||"+"===n)&&(r=e+r),r!==e&&!(r<0)&&!(r>=i)&&r):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}(s,r,o),chart:t,axis:n.controller.options.indexAxis,scale:n.vScale,line:s}),n.$filler=a,l.push(a);for(r=0;r<o;++r)(a=l[r])&&!1!==a.fill&&(a.fill=function(t,e,i){let n;let r=t[e],s=r.fill,a=[e];if(!i)return s;for(;!1!==s&&-1===a.indexOf(s);){if(!rv(s))return s;if(!(n=t[s]))break;if(n.visible)return s;a.push(s),s=n.fill}return!1}(l,r,i.propagate))},beforeDraw(t,e,i){let n="beforeDraw"===i.drawTime,r=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=r.length-1;e>=0;--e){let i=r[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),n&&i.fill&&lP(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;let n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){let i=n[e].$filler;lk(i)&&lP(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){let n=e.meta.$filler;lk(n)&&"beforeDatasetDraw"===i.drawTime&&lP(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Legend:{id:"legend",_element:lT,start(t,e,i){let n=t.legend=new lT({ctx:t.ctx,options:i,chart:t});oa.configure(t,n,i),oa.addBox(t,n)},stop(t){oa.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){let n=t.legend;oa.configure(t,n,i),n.options=i},afterUpdate(t){let e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){let n=e.datasetIndex,r=i.chart;r.isDatasetVisible(n)?(r.hide(n),e.hidden=!0):(r.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){let e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:r,color:s,useBorderRadius:a,borderRadius:o}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{let l=t.controller.getStyle(i?0:void 0),h=sq(l.borderWidth);return{text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:n||l.pointStyle,rotation:l.rotation,textAlign:r||l.textAlign,borderRadius:a&&(o||l.borderRadius),datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}},SubTitle:{id:"subtitle",start(t,e,i){let n=new lI({ctx:t.ctx,options:i,chart:t});oa.configure(t,n,i),oa.addBox(t,n),lR.set(t,n)},stop(t){oa.removeBox(t,lR.get(t)),lR.delete(t)},beforeUpdate(t,e,i){let n=lR.get(t);oa.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Title:{id:"title",_element:lI,start(t,e,i){!function(t,e){let i=new lI({ctx:t.ctx,options:e,chart:t});oa.configure(t,i,e),oa.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){let e=t.titleBlock;oa.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){let n=t.titleBlock;oa.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Tooltip:{id:"tooltip",_element:lY,positioners:lF,afterInit(t,e,i){i&&(t.tooltip=new lY({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){let e=t.tooltip;if(e&&e._willRender()){let i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){let i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:l$},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]}});const lq=(t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i),lG=(t,e)=>null===t?null:r7(Math.round(t),0,e);function lK(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function lZ(t,e,{horizontal:i,minRotation:n}){let r=r0(n),s=.75*e*(""+t).length;return Math.min(e/((i?Math.sin(r):Math.cos(r))||.001),s)}class lJ extends oT{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return rb(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:n,max:r}=this,s=t=>n=e?n:t,a=t=>r=i?r:t;if(t){let t=rG(n),e=rG(r);t<0&&e<0?a(0):t>0&&e>0&&s(0)}if(n===r){let e=0===r?1:Math.abs(.05*r);a(r+e),t||s(n-e)}this.min=n,this.max=r}getTickLimit(){let t;let e=this.options.ticks,{maxTicksLimit:i,stepSize:n}=e;return n?(t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1)>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3):(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},r=this._range||this,s=function(t,e){let i,n,r,s;let a=[],{bounds:o,step:l,min:h,max:c,precision:d,count:u,maxTicks:f,maxDigits:g,includeBounds:p}=t,m=l||1,b=f-1,{min:x,max:y}=e,v=!rb(h),_=!rb(c),w=!rb(u),M=(y-x)/(g+1),k=rZ((y-x)/b/m)*m;if(k<1e-14&&!v&&!_)return[{value:x},{value:y}];(s=Math.ceil(y/k)-Math.floor(x/k))>b&&(k=rZ(s*k/b/m)*m),rb(d)||(k=Math.ceil(k*(i=Math.pow(10,d)))/i),"ticks"===o?(n=Math.floor(x/k)*k,r=Math.ceil(y/k)*k):(n=x,r=y),v&&_&&l&&function(t,e){let i=Math.round(t);return i-e<=t&&i+e>=t}((c-h)/l,k/1e3)?(s=Math.round(Math.min((c-h)/k,f)),k=(c-h)/s,n=h,r=c):w?(n=v?h:n,k=((r=_?c:r)-n)/(s=u-1)):s=rK(s=(r-n)/k,Math.round(s),k/1e3)?Math.round(s):Math.ceil(s);let S=Math.max(r1(k),r1(n));n=Math.round(n*(i=Math.pow(10,rb(d)?S:d)))/i,r=Math.round(r*i)/i;let P=0;for(v&&(p&&n!==h?(a.push({value:h}),n<h&&P++,rK(Math.round((n+P*k)*i)/i,h,lZ(h,M,t))&&P++):n<h&&P++);P<s;++P){let t=Math.round((n+P*k)*i)/i;if(_&&t>c)break;a.push({value:t})}return _&&p&&r!==c?a.length&&rK(a[a.length-1].value,c,lZ(c,M,t))?a[a.length-1].value=c:a.push({value:c}):_&&r!==c||a.push({value:r}),a}(n,r);return"ticks"===t.bounds&&rQ(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return sw(t,this.chart.options.locale,this.options.ticks.format)}}class lQ extends lJ{static id="linear";static defaults={ticks:{callback:sk.formatters.numeric}};determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=rv(t)?t:0,this.max=rv(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=r0(this.options.ticks.minRotation),n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/((t?Math.sin(i):Math.cos(i))||.001)))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const l0=t=>Math.floor(rq(t)),l1=(t,e)=>Math.pow(10,l0(t)+e);function l2(t){let e=t/Math.pow(10,l0(t));return 1===e}function l3(t,e,i){let n=Math.pow(10,i);return Math.ceil(e/n)-Math.floor(t/n)}class l5 extends oT{static id="logarithmic";static defaults={ticks:{callback:sk.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=lJ.prototype.parse.apply(this,[t,e]);if(0===i){this._zero=!0;return}return rv(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=rv(t)?Math.max(0,t):null,this.max=rv(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!rv(this._userMin)&&(this.min=t===l1(this.min,0)?l1(this.min,-1):l1(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,n=this.max,r=e=>i=t?i:e,s=t=>n=e?n:t;i===n&&(i<=0?(r(1),s(10)):(r(l1(i,-1)),s(l1(n,1)))),i<=0&&r(l1(n,-1)),n<=0&&s(l1(i,1)),this.min=i,this.max=n}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=function(t,{min:e,max:i}){e=r_(t.min,e);let n=[],r=l0(e),s=function(t,e){let i=e-t,n=l0(i);for(;l3(t,e,n)>10;)n++;for(;10>l3(t,e,n);)n--;return Math.min(n,l0(t))}(e,i),a=s<0?Math.pow(10,Math.abs(s)):1,o=Math.pow(10,s),l=r>s?Math.pow(10,r):0,h=Math.round((e-l)*a)/a,c=Math.floor((e-l)/o/10)*o*10,d=Math.floor((h-c)/Math.pow(10,s)),u=r_(t.min,Math.round((l+c+d*Math.pow(10,s))*a)/a);for(;u<i;)n.push({value:u,major:l2(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(d=2,a=++s>=0?1:a),u=Math.round((l+c+d*Math.pow(10,s))*a)/a;let f=r_(t.max,u);return n.push({value:f,major:l2(f),significand:d}),n}(e,this);return"ticks"===t.bounds&&rQ(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return void 0===t?"0":sw(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=rq(t),this._valueRange=rq(this.max)-rq(t)}getPixelForValue(t){return((void 0===t||0===t)&&(t=this.min),null===t||isNaN(t))?NaN:this.getPixelForDecimal(t===this.min?0:(rq(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function l6(t){let e=t.ticks;if(e.display&&t.display){let t=sq(e.backdropPadding);return rw(e.font&&e.font.size,sA.font.size)+t.height}return 0}function l4(t,e,i,n,r){return t===n||t===r?{start:e-i/2,end:e+i/2}:t<n||t>r?{start:e-i,end:e}:{start:e,end:e+i}}function l7(t,e,i,n){let{ctx:r}=t;if(i)r.arc(t.xCenter,t.yCenter,e,0,rW);else{let i=t.getPointPosition(0,e);r.moveTo(i.x,i.y);for(let s=1;s<n;s++)i=t.getPointPosition(s,e),r.lineTo(i.x,i.y)}}class l9 extends lJ{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:sk.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=sq(l6(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=rv(t)&&!isNaN(t)?t:0,this.max=rv(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/l6(this.options))}generateTickLabels(t){lJ.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((t,e)=>{let i=rS(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""}).filter((t,e)=>this.chart.getDataVisibility(e))}fit(){let t=this.options;t.display&&t.pointLabels.display?function(t){let e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],r=[],s=t._pointLabels.length,a=t.options.pointLabels,o=a.centerPointLabels?rB/s:0;for(let c=0;c<s;c++){var l,h;let s=a.setContext(t.getPointLabelContext(c));r[c]=s.padding;let d=t.getPointPosition(c,t.drawingArea+r[c],o),u=sG(s.font),f=(l=t.ctx,h=rx(h=t._pointLabels[c])?h:[h],{w:/**
 * @private
 */// eslint-disable-next-line complexity
function(t,e,i,n){let r,s,a,o,l;let h=(n=n||{}).data=n.data||{},c=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(h=n.data={},c=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let d=0,u=i.length;for(r=0;r<u;r++)// Undefined strings and arrays should not be measured
if(null==(o=i[r])||rx(o)){if(rx(o))// to do maybe simplify this function a bit so we can do this more recursively?
for(s=0,a=o.length;s<a;s++)// Undefined strings and arrays should not be measured
null==(l=o[s])||rx(l)||(d=sO(t,h,c,d,l))}else d=sO(t,h,c,d,o);t.restore();let f=c.length/2;if(f>i.length){for(r=0;r<f;r++)delete h[c[r]];c.splice(0,f)}return d}(l,u.string,h),h:h.length*u.lineHeight});n[c]=f;let g=r6(t.getIndexAngle(c)+o),p=Math.round(g*(180/rB)),m=l4(p,d.x,f.w,0,180),b=l4(p,d.y,f.h,90,270);!function(t,e,i,n,r){let s=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i)),o=0,l=0;n.start<e.l?(o=(e.l-n.start)/s,t.l=Math.min(t.l,e.l-o)):n.end>e.r&&(o=(n.end-e.r)/s,t.r=Math.max(t.r,e.r+o)),r.start<e.t?(l=(e.t-r.start)/a,t.t=Math.min(t.t,e.t-l)):r.end>e.b&&(l=(r.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}(i,e,g,m,b)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){let n;let r=[],s=t._pointLabels.length,a=t.options,{centerPointLabels:o,display:l}=a.pointLabels,h={extra:l6(a)/2,additionalAngle:o?rB/s:0};for(let a=0;a<s;a++){h.padding=i[a],h.size=e[a];let s=function(t,e,i){var n,r,s,a;let o=t.drawingArea,{extra:l,additionalAngle:h,padding:c,size:d}=i,u=t.getPointPosition(e,o+l+c,h),f=Math.round(r6(u.angle+rU)*(180/rB)),g=(n=u.y,r=d.h,90===f||270===f?n-=r/2:(f>270||f<90)&&(n-=r),n),p=0===f||180===f?"center":f<180?"left":"right",m=(s=u.x,a=d.w,"right"===p?s-=a:"center"===p&&(s-=a/2),s);return{visible:!0,x:u.x,y:g,textAlign:p,left:m,top:g,right:m+d.w,bottom:g+d.h}}(t,a,h);r.push(s),"auto"===l&&(s.visible=function(t,e){if(!e)return!0;let{left:i,top:n,right:r,bottom:s}=t,a=sR({x:i,y:n},e)||sR({x:i,y:s},e)||sR({x:r,y:n},e)||sR({x:r,y:s},e);return!a}(s,n),s.visible&&(n=s))}return r}(t,n,r)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){let e=rW/(this._pointLabels.length||1),i=this.options.startAngle||0;return r6(t*e+r0(i))}getDistanceFromCenterForValue(t){if(rb(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(rb(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return sZ(this.getContext(),{label:i,index:t,type:"pointLabel"})}}getPointPosition(t,e,i=0){let n=this.getIndexAngle(t)-rU+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:n,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:r}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),l7(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t,e,i;let n=this.ctx,r=this.options,{angleLines:s,grid:a,border:o}=r,l=this._pointLabels.length;if(r.pointLabels.display&&function(t,e){let{ctx:i,options:{pointLabels:n}}=t;for(let r=e-1;r>=0;r--){let e=t._pointLabelItems[r];if(!e.visible)continue;let s=n.setContext(t.getPointLabelContext(r));!function(t,e,i){let{left:n,top:r,right:s,bottom:a}=i,{backdropColor:o}=e;if(!rb(o)){let i=sX(e.borderRadius),l=sq(e.backdropPadding);t.fillStyle=o;let h=n-l.left,c=r-l.top,d=s-n+l.width,u=a-r+l.height;Object.values(i).some(t=>0!==t)?(t.beginPath(),sW(t,{x:h,y:c,w:d,h:u,radius:i}),t.fill()):t.fillRect(h,c,d,u)}}(i,s,e);let a=sG(s.font),{x:o,y:l,textAlign:h}=e;sB(i,t._pointLabels[r],o,l+a.lineHeight/2,a,{color:s.color,textAlign:h,textBaseline:"middle"})}}(this,l),a.display&&this.ticks.forEach((t,i)=>{if(0!==i){e=this.getDistanceFromCenterForValue(t.value);let n=this.getContext(i),r=a.setContext(n),s=o.setContext(n);!function(t,e,i,n,r){let s=t.ctx,a=e.circular,{color:o,lineWidth:l}=e;(a||n)&&o&&l&&!(i<0)&&(s.save(),s.strokeStyle=o,s.lineWidth=l,s.setLineDash(r.dash),s.lineDashOffset=r.dashOffset,s.beginPath(),l7(t,i,a,n),s.closePath(),s.stroke(),s.restore())}(this,r,e,l,s)}}),s.display){for(n.save(),t=l-1;t>=0;t--){let a=s.setContext(this.getPointLabelContext(t)),{color:o,lineWidth:l}=a;l&&o&&(n.lineWidth=l,n.strokeStyle=o,n.setLineDash(a.borderDash),n.lineDashOffset=a.borderDashOffset,e=this.getDistanceFromCenterForValue(r.ticks.reverse?this.min:this.max),i=this.getPointPosition(t,e),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(i.x,i.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let t,e;let i=this.ctx,n=this.options,r=n.ticks;if(!r.display)return;let s=this.getIndexAngle(0);i.save(),i.translate(this.xCenter,this.yCenter),i.rotate(s),i.textAlign="center",i.textBaseline="middle",this.ticks.forEach((s,a)=>{if(0===a&&!n.reverse)return;let o=r.setContext(this.getContext(a)),l=sG(o.font);if(t=this.getDistanceFromCenterForValue(this.ticks[a].value),o.showLabelBackdrop){i.font=l.string,e=i.measureText(s.label).width,i.fillStyle=o.backdropColor;let n=sq(o.backdropPadding);i.fillRect(-e/2-n.left,-t-l.size/2-n.top,e+n.width,l.size+n.height)}sB(i,s.label,0,-t,l,{color:o.color,strokeColor:o.textStrokeColor,strokeWidth:o.textStrokeWidth})}),i.restore()}drawTitle(){}}const l8={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ht=/* #__PURE__ */Object.keys(l8);function he(t,e){return t-e}function hi(t,e){if(rb(e))return null;let i=t._adapter,{parser:n,round:r,isoWeekday:s}=t._parseOpts,a=e;return("function"==typeof n&&(a=n(a)),rv(a)||(a="string"==typeof n?i.parse(a,n):i.parse(a)),null===a)?null:(r&&(a="week"===r&&(rJ(s)||!0===s)?i.startOf(a,"isoWeek",s):i.startOf(a,r)),+a)}function hn(t,e,i,n){let r=ht.length;for(let s=ht.indexOf(t);s<r-1;++s){let t=l8[ht[s]],r=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(r*t.size))<=n)return ht[s]}return ht[r-1]}function hr(t,e,i){if(i){if(i.length){let{lo:n,hi:r}=r8(i,e),s=i[n]>=e?i[n]:i[r];t[s]=!0}}else t[e]=!0}function hs(t,e,i){let n,r;let s=[],a={},o=e.length;for(n=0;n<o;++n)a[r=e[n]]=n,s.push({value:r,major:!1});return 0!==o&&i?function(t,e,i,n){let r,s;let a=t._adapter,o=+a.startOf(e[0].value,n),l=e[e.length-1].value;for(r=o;r<=l;r=+a.add(r,1,n))(s=i[r])>=0&&(e[s].major=!0);return e}(t,s,a,i):s}class ha extends oT{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),n=this._adapter=new a1._date(t.adapters.date);n.init(e),rT(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:hi(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:n,max:r,minDefined:s,maxDefined:a}=this.getUserBounds();function o(t){s||isNaN(t.min)||(n=Math.min(n,t.min)),a||isNaN(t.max)||(r=Math.max(r,t.max))}s&&a||(o(this._getLabelBounds()),("ticks"!==t.bounds||"labels"!==t.ticks.source)&&o(this.getMinMax(!1))),n=rv(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),r=rv(r)&&!isNaN(r)?r:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,r-1),this.max=Math.max(n+1,r)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);let r=this.min,s=this.max,a=/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */function(t,e,i){let n=0,r=t.length;for(;n<r&&t[n]<e;)n++;for(;r>n&&t[r-1]>i;)r--;return n>0||r<t.length?t.slice(n,r):t}(n,r,s);return this._unit=e.unit||(i.autoSkip?hn(e.minUnit,this.min,this.max,this._getLabelCapacity(r)):function(t,e,i,n,r){for(let s=ht.length-1;s>=ht.indexOf(i);s--){let i=ht[s];if(l8[i].common&&t._adapter.diff(r,n,i)>=e-1)return i}return ht[i?ht.indexOf(i):0]}(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=ht.indexOf(t)+1,i=ht.length;e<i;++e)if(l8[ht[e]].common)return ht[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&a.reverse(),hs(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e,i,n=0,r=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),r=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);let s=t.length<3?.5:.25;n=r7(n,0,s),r=r7(r,0,s),this._offsets={start:n,end:r,factor:1/(n+1+r)}}_generate(){let t,e;let i=this._adapter,n=this.min,r=this.max,s=this.options,a=s.time,o=a.unit||hn(a.minUnit,n,r,this._getLabelCapacity(n)),l=rw(s.ticks.stepSize,1),h="week"===o&&a.isoWeekday,c=rJ(h)||!0===h,d={},u=n;if(c&&(u=+i.startOf(u,"isoWeek",h)),u=+i.startOf(u,c?"day":o),i.diff(r,n,o)>1e5*l)throw Error(n+" and "+r+" are too far apart with stepSize of "+l+" "+o);let f="data"===s.ticks.source&&this.getDataTimestamps();for(t=u,e=0;t<r;t=+i.add(t,l,o),e++)hr(d,t,f);return(t===r||"ticks"===s.bounds||1===e)&&hr(d,t,f),Object.keys(d).sort(he).map(t=>+t)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let i=this.options,n=i.time.displayFormats,r=this._unit,s=e||n[r];return this._adapter.format(t,s)}_tickFormatFunction(t,e,i,n){let r=this.options,s=r.ticks.callback;if(s)return rS(s,[t,e,i],this);let a=r.time.displayFormats,o=this._unit,l=this._majorUnit,h=o&&a[o],c=l&&a[l],d=i[e],u=l&&c&&d&&d.major;return this._adapter.format(t,n||(u?c:h))}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)(n=t[e]).label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,n=r0(this.isHorizontal()?e.maxRotation:e.minRotation),r=Math.cos(n),s=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:i*r+a*s,h:i*s+a*r}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,hs(this,[t],this._majorUnit),n),s=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;let n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){let t,e;let i=this._cache.labels||[];if(i.length)return i;let n=this.getLabels();for(t=0,e=n.length;t<e;++t)i.push(hi(this,n[t]));return this._cache.labels=this._normalized?i:this.normalize(i)}normalize(t){return sr(t.sort(he))}}function ho(t,e,i){let n,r,s,a,o=0,l=t.length-1;i?(e>=t[o].pos&&e<=t[l].pos&&({lo:o,hi:l}=st(t,"pos",e)),{pos:n,time:s}=t[o],{pos:r,time:a}=t[l]):(e>=t[o].time&&e<=t[l].time&&({lo:o,hi:l}=st(t,"time",e)),{time:n,pos:s}=t[o],{time:r,pos:a}=t[l]);let h=r-n;return h?s+(a-s)*(e-n)/h:s}class hl extends ha{static id="timeseries";static defaults=ha.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ho(e,this.min),this._tableRange=ho(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let e,i,n;let{min:r,max:s}=this,a=[],o=[];for(e=0,i=t.length;e<i;++e)(n=t[e])>=r&&n<=s&&a.push(n);if(a.length<2)return[{time:r,pos:0},{time:s,pos:1}];for(e=0,i=a.length;e<i;++e)Math.round((a[e+1]+a[e-1])/2)!==(n=a[e])&&o.push({time:n,pos:e/(i-1)});return o}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return i.includes(t)&&i.length||i.splice(0,0,t),i.includes(e)&&1!==i.length||i.push(e),i.sort((t,e)=>t-e)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t}getDecimalForValue(t){return(ho(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ho(this._table,i*this._tableRange+this._minPos,!0)}}var hh=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:class extends oT{static id="category";static defaults={ticks:{callback:lK}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let t=this.getLabels();for(let{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(rb(t))return null;let i=this.getLabels();return lG(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){let r=t.indexOf(e);if(-1===r)return lq(t,e,i,n);let s=t.lastIndexOf(e);return r!==s?i:r}(i,t,rw(e,t),this._addedLabels),i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:n}=this.getMinMax(!0);"ticks"!==this.options.bounds||(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,n=[],r=this.getLabels();r=0===t&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){return lK.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:lQ,LogarithmicScale:l5,RadialLinearScale:l9,TimeScale:ha,TimeSeriesScale:hl});const hc=[aJ,lu,lX,hh];function hd(t,e,i,n){// Define the table size
let r=t.length,s=t[0].length,a=document.createElement("table");// Create the header cells for the columns
if(i.length>0){let r=document.createElement("tr"),o=document.createElement("th");r.appendChild(o);for(let n=0;n<s;n++){let s=document.createElement("th");s.contentEditable="true",s.oninput=()=>{null!=s.textContent&&(i[n]=s.textContent,hg(t,e,i))},s.textContent=i[n],r.appendChild(s)}if(n){let n=document.createElement("th");n.textContent="+",n.onclick=()=>{(function(t,e,i){for(let e=0;e<t.length;e++)t[e].push(Math.floor(10*Math.random())+1);i.push("E"),hp(t,e,i),hg(t,e,i)})(t,e,i)},r.appendChild(n)}a.appendChild(r)}// Create the table rows
for(let o=0;o<r;o++){let r=document.createElement("tr"),l=document.createElement("th");l.textContent=e[o],r.appendChild(l),l.contentEditable="true",l.oninput=()=>{null!=l.textContent&&(e[o]=l.textContent,hg(t,e,i))};// Create the data cells for the row
for(let e=0;e<s;e++){let i=document.createElement("td");n?i.textContent=t[o][e].toString():i.textContent=t[o][e].toFixed(2),r.appendChild(i)}a.appendChild(r)}if(n){let n=document.createElement("tr"),r=document.createElement("th");r.textContent="+",n.appendChild(r),r.onclick=()=>{(function(t,e,i){t.push([]);for(let e=0;e<t[0].length;e++)t[t.length-1].push(Math.floor(10*Math.random())+1);e.push("yo"),hp(t,e,i),hg(t,e,i)})(t,e,i)},a.appendChild(n)}return a}function hu(t){let e=[];for(let i=0;i<t.length;i++){let n=[];for(let e=0;e<t[i].length;e++)n.push(t[i][e]);e.push(n)}return e}function hf(t){let e=0;for(let i of t)for(let t of i)e+=t;return e}function hg(t,e,n){let r=document.getElementById("indep");r&&r.remove(),(r=document.getElementById("diff"))&&r.remove(),(r=document.getElementById("final"))&&r.remove(),(r=document.getElementById("resultats"))&&r.remove(),(r=document.getElementById("gammaChart"))&&r.remove();let s=document.getElementById("inter"),a=document.getElementById("results");if(null==s||null==a)return;let o=function(t){let e=hu(t),i=hf(t);for(let n=0;n<t.length;n++){let r=0;for(let e=0;e<t[n].length;e++)r+=t[n][e];for(let s=0;s<t[n].length;s++){let a=0;for(let e=0;e<t.length;e++)a+=t[e][s];e[n][s]=r*a/i}}return e}(t),h=hd(o,e,n,!1);h.id="indep",s.appendChild(h);let c=function(t,e){let i=hu(t);for(let n=0;n<t.length;n++)for(let r=0;r<t[n].length;r++)i[n][r]=Math.pow(t[n][r]-e[n][r],2)/e[n][r];return i}(t,o),d=hd(c,e,n,!1);d.id="diff",s.appendChild(d);let u=hf(c),f=(t.length-1)*(t[0].length-1),g=Math.sqrt(u/(hf(t)*f)),p=1-/*@__PURE__*/i(l)(u,f/2,.5);console.log(p);let m=0;for(;.95>/*@__PURE__*/i(l)(m,f/2,.5);)m+=.01;console.log("kcomp",m);let b=[[u],[p],[m],[g],[f]],x=hd(b,["χ\xb2 calcul\xe9","pValue","χ\xb2 th\xe9orique 0.05","Cramer","degr\xe9s de libert\xe9s"],[],!1);x.id="final",a.appendChild(x);let y=document.createElement("p");y.id="resultats",u<m?y.innerHTML=`Comme <span class="compute-color"> ${u.toFixed(2)}</span> < <span class="theoric-color">${m.toFixed(2)}</span>, les variables sont <b>ind\xe9pendantes</b>.`:y.innerHTML=`Comme <span class="theoric-color">${m.toFixed(2)}</span> < <span class="compute-color"> ${u.toFixed(2)}</span>, les variables sont <b>li\xe9es</b>.`,a.appendChild(y);let v=document.querySelectorAll("#final td");v.forEach(t=>{if(null===t.textContent)return;let e=t.parentNode.rowIndex;(0==e||1==e)&&t.classList.add("compute-color"),2==e&&t.classList.add("theoric-color");// Old
/*
        const value = parseFloat(tcell.textContent);
        const redValue = Math.floor(value * 255);
        const greenValue = Math.floor((1-value) * 255);
        tcell.style.backgroundColor = `rgb(${redValue}, ${greenValue}, 0)`;
        */});let _=document.querySelectorAll("#initial td");_.forEach(e=>{if(null===e.textContent)return;let i=parseFloat(e.textContent),n=e.parentNode.rowIndex-1,r=e.cellIndex-1;i=10*c[n][r]/hf(t);let s=Math.floor(255*i);e.style.backgroundColor=`rgb(${s}, 0, 0)`});let w=document.createElement("canvas");w.width=600,w.height=300,a.appendChild(w),w.id="gammaChart";let M=function(t,e){let n=[];for(let r=0;r<=e;r+=.1){let e=/*@__PURE__*/i(l)(r,t/2,.5);n.push({x:r,y:e})}return n}(f,2*m),k=w.getContext("2d");null!=k&&new o5(k,{type:"line",data:{datasets:[{label:"cos",data:M,borderColor:"#009879",fill:!1,pointRadius:0}]},options:{responsive:!1,scales:{x:{type:"linear",position:"bottom",min:0,max:2*m},y:{type:"linear",position:"left",min:0,max:1}},plugins:{legend:{display:!1}}}})}function hp(t,e,i){let n=document.getElementById("initial");n&&n.remove();let r=hd(t,e,i,!0);r.id="initial";let s=document.getElementById("data");if(null==s)return;s.appendChild(r);let a=document.querySelectorAll("#initial td");a.forEach(n=>{n.contentEditable="true",n.addEventListener("input",()=>{if(null===n.textContent)return;let r=n.parentNode.rowIndex-1,s=n.cellIndex-1;t[r][s]=parseFloat(n.textContent),hg(t,e,i)}),n.addEventListener("wheel",r=>{if(r.preventDefault(),r.deltaY,null===n.textContent)return;let s=parseFloat(n.textContent),a=r.deltaY>0?s-1:s+1;if(a<0)return;n.textContent=a.toString();let o=n.parentNode.rowIndex-1,l=n.cellIndex-1;t[o][l]=a,hg(t,e,i)})})}!function(){console.log("testouik"),o5.register(...hc);// Chart.register(annotationPlugin);
let t=["a","b","c","d"],e=["A","B","C","D"],i=function(t,e){let i=[];for(let t=0;t<2;t++){let t=[];for(let e=0;e<2;e++){// Generate a random integer between 1 and 10
let e=Math.floor(10*Math.random())+1;t.push(e)}i.push(t)}return i}(0,0);i[0][0]=3,i[0][1]=4,i[1][0]=4,i[1][1]=2,hp(i,t,e),hg(i,t,e)}();//# sourceMappingURL=index.fa170c16.js.map

//# sourceMappingURL=index.fa170c16.js.map
