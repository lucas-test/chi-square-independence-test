let t,e;function i(t){return t&&t.__esModule?t.default:t}var r,n,s,a,o,l={},h={},d={},c={},u={};// EXPORTS //
u="function"==typeof Object.defineProperty?Object.defineProperty:null,// EXPORTS //
c=// MAIN //
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
f=Object.defineProperty;var p={},g={},m={},x={},b={};// EXPORTS //
b=/**
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
*/function(t,e,i){var r=!1,n=e-t.length;return n<0||("-"===t[0]&&(r=!0,t=t.substr(1)),t=i?t+v(n):v(n)+t,r&&(t="-"+t)),t};// NOTE: for the following, we explicitly avoid using stdlib packages in this particular package in order to avoid circular dependencies.
var _=String.prototype.toLowerCase,w=String.prototype.toUpperCase;// EXPORTS //
x=// MAIN //
/**
* Formats a token object argument as an integer.
*
* @private
* @param {Object} token - token object
* @throws {Error} must provide a valid integer
* @returns {string} formatted token argument
*/function(t){var e,i,r;switch(t.specifier){case"b":// Case: %b (binary)
e=2;break;case"o":// Case: %o (octal)
e=8;break;case"x":case"X":// Case: %x, %X (hexadecimal)
e=16;break;default:// Case: %d, %i, %u (decimal)
e=10}if(!isFinite(r=parseInt(i=t.arg,10))){if(!b(i))throw Error("invalid integer. Value: "+i);r=0}return r<0&&("u"===t.specifier||10!==e)&&(r=4294967295+r+1),r<0?(i=(-r).toString(e),t.precision&&(i=y(i,t.precision,t.padRight)),i="-"+i):(i=r.toString(e),r||t.precision?t.precision&&(i=y(i,t.precision,t.padRight)):i="",t.sign&&(i=t.sign+i)),16===e&&(t.alternate&&(i="0x"+i),i=t.specifier===w.call(t.specifier)?w.call(i):_.call(i)),8===e&&t.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i};var M={};// EXPORTS //
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
};var k={},S=Math.abs,P=String.prototype.toLowerCase,C=String.prototype.toUpperCase,D=String.prototype.replace,A=/e\+(\d)$/,O=/e-(\d)$/,T=/^(\d+)$/,E=/^(\d+)e/,I=/\.0$/,R=/\.0*e/,L=/(\..*[^0])0*e/;// EXPORTS //
k=// MAIN //
/**
* Formats a token object argument as a floating-point number.
*
* @private
* @param {Object} token - token object
* @throws {Error} must provide a valid floating-point number
* @returns {string} formatted token argument
*/function(t){var e,i,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw Error("invalid floating-point number. Value: "+i);// Case: NaN, Infinity, or -Infinity
r=t.arg}switch(t.specifier){case"e":case"E":i=r.toExponential(t.precision);break;case"f":case"F":i=r.toFixed(t.precision);break;case"g":case"G":1e-4>S(r)?((e=t.precision)>0&&(e-=1),i=r.toExponential(e)):i=r.toPrecision(t.precision),t.alternate||(i=D.call(i,L,"$1e"),i=D.call(i,R,"e"),i=D.call(i,I,""));break;default:throw Error("invalid double notation. Value: "+t.specifier)}return i=D.call(i,A,"e+0$1"),i=D.call(i,O,"e-0$1"),t.alternate&&(i=D.call(i,T,"$1."),i=D.call(i,E,"$1.e")),r>=0&&t.sign&&(i=t.sign+i),i=t.specifier===C.call(t.specifier)?C.call(i):P.call(i)};var $={};// FUNCTIONS //
/**
* Returns `n` spaces.
*
* @private
* @param {number} n - number of spaces
* @returns {string} string of spaces
*/function F(t){var e,i="";for(e=0;e<t;e++)i+=" ";return i}// EXPORTS //
$=// MAIN //
/**
* Pads a token with spaces to the specified width.
*
* @private
* @param {string} str - token argument
* @param {number} width - token width
* @param {boolean} [right=false] - boolean indicating whether to pad to the right
* @returns {string} padded token argument
*/function(t,e,i){var r=e-t.length;return r<0?t:t=i?t+F(r):F(r)+t};// VARIABLES //
var z=String.fromCharCode,N=isNaN,V=Array.isArray;// EXPORTS //
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
*/function(t){var e,i,r,n,s,a,o,l,h;if(!V(t))throw TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l=0,a="",o=1;l<t.length;l++)if(r=t[l],M(r))a+=r;else{if(e=void 0!==r.precision,!(r=// FUNCTIONS //
/**
* Initializes token object with properties of supplied format identifier object or default values if not present.
*
* @private
* @param {Object} token - format identifier object
* @returns {Object} token object
*/function(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}(r)).specifier)throw TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+r+"`.");for(r.mapping&&(o=r.mapping),i=r.flags,h=0;h<i.length;h++)switch(n=i.charAt(h)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=0>i.indexOf("-");// NOTE: We use built-in `Array.prototype.indexOf` here instead of `@stdlib/assert/contains` in order to avoid circular dependencies.
break;case"#":r.alternate=!0;break;default:throw Error("invalid flag: "+n)}if("*"===r.width){if(r.width=parseInt(arguments[o],10),o+=1,N(r.width))throw TypeError("the argument for * width at position "+o+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[o],10),o+=1,N(r.precision))throw TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[o],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=x(r);break;case"s":// Case: %s (string)
r.maxWidth=e?r.precision:-1;break;case"c":// Case: %c (character)
if(!N(r.arg)){if((s=parseInt(r.arg,10))<0||s>127)throw Error("invalid character code. Value: "+r.arg);r.arg=N(s)?String(r.arg):z(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=k(r);break;default:throw Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=y(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=$(r.arg,r.width,r.padRight)),a+=r.arg||"",o+=1}return a};var W={},j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;// EXPORTS //
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
*/function(t){var e,i,r,n;for(i=[],n=0,r=j.exec(t);r;)(e=t.slice(n,j.lastIndex-r[0].length)).length&&i.push(e),i.push(// FUNCTIONS //
/**
* Parses a delimiter.
*
* @private
* @param {Array} match - regular expression match
* @returns {Object} delimiter token object
*/function(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}(r)),n=j.lastIndex,r=j.exec(t);return(e=t.slice(n)).length&&i.push(e),i};var B={};// EXPORTS //
B=/**
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
g=// MAIN //
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
*/function t(e){var i,r,n;if(!B(e))throw TypeError(t("invalid argument. First argument must be a string. Value: `%s`.",e));for(n=1,i=W(e),r=Array(arguments.length),r[0]=i;n<r.length;n++)r[n]=arguments[n];return m.apply(null,r)};// VARIABLES //
var H=Object.prototype,Y=H.toString,X=H.__defineGetter__,U=H.__defineSetter__,q=H.__lookupGetter__,K=H.__lookupSetter__;// EXPORTS //
p=// MAIN //
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
*/function(t,e,i){var r,n,s,a;if("object"!=typeof t||null===t||"[object Array]"===Y.call(t))throw TypeError(g("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof i||null===i||"[object Array]"===Y.call(i))throw TypeError(g("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(q.call(t,e)||K.call(t,e)?(// Override `__proto__` to avoid touching inherited accessors:
r=t.__proto__,t.__proto__=H,// Delete property as existing getters/setters prevent assigning value to specified property:
delete t[e],t[e]=i.value,// Restore original prototype:
t.__proto__=r):t[e]=i.value),s="get"in i,a="set"in i,n&&(s||a))throw Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&X&&X.call(t,e,i.get),a&&U&&U.call(t,e,i.set),t},// EXPORTS //
d=c()?f:p,// EXPORTS //
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
*/function(t,e,i){d(t,e,{configurable:!1,enumerable:!1,writable:!1,value:i})};var G={},J={},Z={},Q={};// EXPORTS //
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
*/function(t){return t===te||t===ti};var tr={};// EXPORTS //
tr=// MAIN //
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
};var tn={},ts={},ta={},to={},tl={},th={},td={},tc={},tu=// MAIN //
/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();// EXPORTS //
td=// MAIN //
/**
* Tests for native `toStringTag` support.
*
* @returns {boolean} boolean indicating if an environment has `toStringTag` support
*
* @example
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/function(){return tu&&"symbol"==typeof Symbol.toStringTag};var tf={},tp={};// EXPORTS //
tp=Object.prototype.toString,// EXPORTS //
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
*/function(t){return tp.call(t)};var tg={},tm={},tx=Object.prototype.hasOwnProperty;// EXPORTS //
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
*/function(t,e){return null!=t&&tx.call(t,e)};var tb={},ty={};// EXPORTS //
tb="function"==typeof// EXPORTS //
(ty="function"==typeof Symbol?Symbol:void 0)?ty.toStringTag:"",// EXPORTS //
tg=// MAIN //
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
*/function(t){var e,i,r;if(null==t)return tp.call(t);i=t[tb],e=tm(t,tb);// Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
try{t[tb]=void 0}catch(e){return tp.call(t)}return r=tp.call(t),e?t[tb]=i:delete t[tb],r},// EXPORTS //
th=td()?tg:tf;// VARIABLES //
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
tO="function"==typeof Float64Array?Float64Array:void 0;var tT={};// EXPORTS //
tT=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},// EXPORTS //
tS=tP()?tO:tT;var tE={},tI={},tR={},tL={},t$={},tF={},tz="function"==typeof Uint8Array;// EXPORTS //
tF=// MAIN //
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
*/function(t){return tz&&t instanceof Uint8Array||// eslint-disable-line stdlib/require-globals
"[object Uint8Array]"===th(t)};var tN={};// EXPORTS //
tN=255;var tV={};// EXPORTS //
tV="function"==typeof Uint8Array?Uint8Array:null,// EXPORTS //
t$=// MAIN //
/**
* Tests for native `Uint8Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
*
* @example
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tV)return!1;// Test basic support...
try{e=[1,3.14,-3.14,tN+1,tN+2],e=new tV(e),t=tF(e)&&1===e[0]&&3===e[1]&&// truncation
e[2]===tN-2&&// truncation and wrap around
0===e[3]&&// wrap around
1// wrap around
===e[4]}catch(e){t=!1}return t};var tW={};// EXPORTS //
tW="function"==typeof Uint8Array?Uint8Array:void 0;var tj={};// EXPORTS //
tj=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},// EXPORTS //
tL=t$()?tW:tj;var tB={},tH={},tY="function"==typeof Uint16Array;// EXPORTS //
tH=// MAIN //
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
*/function(t){return tY&&t instanceof Uint16Array||// eslint-disable-line stdlib/require-globals
"[object Uint16Array]"===th(t)};var tX={};// EXPORTS //
tX=65535;var tU={};// EXPORTS //
tU="function"==typeof Uint16Array?Uint16Array:null,// EXPORTS //
tB=// MAIN //
/**
* Tests for native `Uint16Array` support.
*
* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
*
* @example
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/function(){var t,e;if("function"!=typeof tU)return!1;// Test basic support...
try{e=[1,3.14,-3.14,tX+1,tX+2],e=new tU(e),t=tH(e)&&1===e[0]&&3===e[1]&&// truncation
e[2]===tX-2&&// truncation and wrap around
0===e[3]&&// wrap around
1// wrap around
===e[4]}catch(e){t=!1}return t};var tq={};// EXPORTS //
tq="function"==typeof Uint16Array?Uint16Array:void 0;var tK={};// EXPORTS //
tK=// TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/function(){throw Error("not implemented")},/*
	* Set the uint16 view to a value having distinguishable lower and higher order words.
	*
	* 4660 => 0x1234 => 0x12 0x34 => '00010010 00110100' => (0x12,0x34) == (18,52)
	*/(r=new// EXPORTS //
(tR={uint16:tB()?tq:tK,uint8:tL}).uint16(1))[0]=4660,// EXPORTS //
tE=!0==// EXPORTS //
(tI=52===new tR.uint8(r.buffer)[0])?1:0;// VARIABLES //
var tG=new tS(1),tJ=new ta(tG.buffer);// EXPORTS //
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
*/function(t){return tG[0]=t,tJ[tE]};var tZ={},tQ={};// EXPORTS //
tQ=!0===tI?1:0;// VARIABLES //
var t0=new tS(1),t1=new ta(t0.buffer);// EXPORTS //
tZ=// MAIN //
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
t2=1023;var t5={};// EXPORTS //
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
*/function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)};var t3={};// EXPORTS //
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
*/function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))},// EXPORTS //
tn=// MAIN //
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
*/function(t){var e,i,r,n,s,a,o,l,h,d,c,u;return 0===t?ti:Q(t)||t<0?NaN:(i=ts(t),s=0,i<1048576&&(// Case: 0 < x < 2**-1022
s-=54,// Subnormal number, scale up `x`:
t*=0x40000000000000,i=ts(t)),i>=2146435072)?t+t:(s+=(i>>20)-t2|0,i&=1048575,l=i+614244&1048576|0,// Normalize `x` or `x/2`...
t=tZ(t,i|1072693248^l),s+=l>>20|0,o=t-1,(1048575&2+i)<3)?// Case: -2**-20 <= f < 2**-20
0===o?0===s?0:.6931471803691238*s+19082149292705877e-26*s:(a=o*o*(.5-.3333333333333333*o),0===s)?o-a:.6931471803691238*s-(a-19082149292705877e-26*s-o):(u=(d=o/(2+o))*d,l=i-398458|0,c=u*u,h=440401-i|0,n=c*t5(c),r=u*t3(c),l|=h,a=r+n,l>0)?(e=.5*o*o,0===s)?o-(e-d*(e+a)):.6931471803691238*s-(e-(d*(e+a)+19082149292705877e-26*s)-o):0===s?o-d*(o-a):.6931471803691238*s-(d*(o-a)-19082149292705877e-26*s-o)};var t6={},t9={};// EXPORTS //
t9=Math.floor;var t4={};// EXPORTS //
t4=Math.ceil,// EXPORTS //
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
*/function(t){return t<0?t4(t):t9(t)};var t8={},t7={},et={},ee={};// EXPORTS //
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
*/function(t,e){var i,r,n,s;return n=(s=t*t)*s,r=s*ee(s)+n*n*ei(s),(n=1-(i=.5*s))+(1-n-i+(s*r-t*e))};var er={};// EXPORTS //
er=// MAIN //
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
*/function(t,e){var i,r,n;return(i=.00833333333332249+(n=t*t)*(-.0001984126982985795+27557313707070068e-22*n)+n*(n*n)*(-.000000025050760253406863+158969099521155e-24*n),r=n*t,0===e)?t+r*(-.16666666666666632+n*i):t-(n*(.5*e-r*i)-e- -.16666666666666632*r)};var en={},es={};// EXPORTS //
es=2147483647;var ea={};// EXPORTS //
ea=2146435072;var eo={};// EXPORTS //
eo=1048575;var el={},eh={};// EXPORTS //
eh=!0===tI?0:1;// VARIABLES //
var ed=new tS(1),ec=new ta(ed.buffer);// EXPORTS //
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
*/function(t){return ed[0]=t,ec[eh]};var eu={},ef={};!0===tI?(n=1,s=0):(n=0,s=1),// EXPORTS //
ef={HIGH:n,LOW:s};// VARIABLES //
var ep=new tS(1),eg=new ta(ep.buffer),em=ef.HIGH,ex=ef.LOW;// EXPORTS //
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
*/function(t,e){return eg[em]=t,eg[ex]=e,ep[0]};var eb={},ey={},ev={};// EXPORTS //
ev=1023;var e_={};// EXPORTS //
e_=-1023;var ew={};// EXPORTS //
ew=-1074;var eM={},ek={};// EXPORTS //
ek=2147483648;var eS={},eP={},eC={},eD={};!0===tI?(a=1,o=0):(a=0,o=1),// EXPORTS //
eD={HIGH:a,LOW:o};// VARIABLES //
var eA=new tS(1),eO=new ta(eA.buffer),eT=eD.HIGH,eE=eD.LOW;// EXPORTS //
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
*/function(t,e,i,r){return eA[0]=t,e[r]=eO[eT],e[r+i]=eO[eE],e},// MAIN //
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
var eI=[0,0];// EXPORTS //
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
eS.assign(t,eI,1,0),// Copy the sign bit of `y` to `x`:
i=eI[0]&es|ts(e)&ek,eu(i,eI[1]))};var eR={},eL={},e$={};// EXPORTS //
e$=22250738585072014e-324,// EXPORTS //
eL=// MAIN //
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
*/function(t,e,i,r){return Q(t)||tt(t)?(e[r]=t,e[r+i]=0):0!==t&&tr(t)<e$?(e[r]=4503599627370496*t,e[r+i]=-52):(e[r]=t,e[r+i]=0),e},// MAIN //
h(// EXPORTS //
eR=// MAIN //
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
*/function(t){return eL(t,[0,0],1,0)},"assign",eL);var eF=eR.assign,ez={};// EXPORTS //
ez=// MAIN //
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
var eN=[0,0],eV=[0,0];// EXPORTS //
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
*/function(t,e){var i,r;return 0===e||0===t||// handles +-0
Q(t)||tt(t)?t:(// Normalize the input fraction:
eF(t,eN,1,0),t=eN[0],// Extract the exponent from `frac` and add it to `exp`:
(e+=eN[1]+ez(t))<ew)?eM(0,t):e>ev?t<0?ti:te:(e<=e_?(e+=52,r=2220446049250313e-31):r=1,// Split the fraction into higher and lower order words:
eS.assign(t,eV,1,0),// Set the exponent bits to the new exponent:
i=2148532223&eV[0]|e+t2<<20,r*eu(i,eV[1]))};var eW={},ej={};// EXPORTS //
ej=// MAIN //
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
*/function(t,e){var i,r;for(r=0,// Manually push elements in order to ensure "fast" elements...
i=[];r<e;r++)i.push(t);return i};// VARIABLES //
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
*/var eB=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],eH=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67// 0x3569F31D, 0x00000000
],eY=// EXPORTS //
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
*/function(t){return ej(0,t)})(20),eX=eW(20),eU=eW(20),eq=eW(20);// EXPORTS //
eb=// MAIN //
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
*/function(t,e,i,r){var n,s,a,o,l,h,d;for(// Determine `jx`, `jv`, `q0` (note that `q0 < 3`):
a=r-1,(s=(i-3)/24|0)<0&&(s=0),o=i-24*(s+1),// Set up `F[0]` to `F[jx+jk]` where `F[jx+jk] = IPIO2[jv+jk]`:
h=s-a,d=a+4,l=0;l<=d;l++)h<0?eY[l]=0:eY[l]=eB[h],h+=1;// Compute `Q[0],Q[1],...,Q[jk]`:
for(l=0;l<=4;l++){for(h=0,n=0;h<=a;h++)n+=t[h]*eY[a+(l-h)];eX[l]=n}return(// FUNCTIONS //
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
*/function t(e,i,r,n,s,a,o,l,h){var d,c,u,f,p,g,m,x;for(f=0,// Distill `q[]` into `IQ[]` in reverse order...
x=n[r],m=r;m>0;f++)c=5960464477539063e-23*x|0,eq[f]=x-16777216*c|0,x=n[m-1]+c,m-=1;// Case: q > 0.5
if(// Compute `n`...
x=ey(x,s),x-=8*t9(.125*x),g=0|x,x-=g,u=0,s>0?(g+=// Need `IQ[jz-1]` to determine `n`...
f=eq[r-1]>>24-s,eq[r-1]-=f<<24-s,u=eq[r-1]>>23-s):0===s?u=eq[r-1]>>23:x>=.5&&(u=2),u>0){// Compute `1-q`:
for(g+=1,d=0,f=0;f<r;f++)m=eq[f],0===d?0!==m&&(d=1,eq[f]=16777216-m):eq[f]=16777215-m;if(s>0)switch(s){case 1:eq[r-1]&=8388607;break;case 2:eq[r-1]&=4194303}2===u&&(x=1-x,0!==d&&(x-=ey(1,s)))}// Check if re-computation is needed...
if(0===x){for(m=0,f=r-1;f>=a;f--)m|=eq[f];if(0===m){// Need re-computation...
for(p=1;0===eq[a-p];p++);for(f=r+1;f<=r+p;f++){for(m=0,// Add `q[jz+1]` to `q[jz+k]`...
h[l+f]=eB[o+f],c=0;m<=l;m++)c+=e[m]*h[l+(f-m)];n[f]=c}return t(e,i,r+=p,n,s,a,o,l,h)}}// Chop off zero terms...
if(0===x)for(r-=1,s-=24;0===eq[r];)r-=1,s-=24;else// Break `z` into 24-bit if necessary...
(x=ey(x,-s))>=16777216?(c=5960464477539063e-23*x|0,eq[r]=x-16777216*c|0,s+=24,eq[r+=1]=c):eq[r]=0|x;for(// Convert integer "bit" chunk to floating-point value...
c=ey(1,s),f=r;f>=0;f--)n[f]=c*eq[f],c*=5960464477539063e-23;// Compute `PIO2[0,...,jp]*q[jz,...,0]`...
for(f=r;f>=0;f--){for(p=0,c=0;p<=a&&p<=r-f;p++)c+=eH[p]*n[f+p];eU[r-f]=c}for(// Compress `FQ[]` into `y[]`...
c=0,f=r;f>=0;f--)c+=eU[f];for(0===u?i[0]=c:i[0]=-c,c=eU[0]-c,f=1;f<=r;f++)c+=eU[f];return 0===u?i[1]=c:i[1]=-c,7&g}(t,e,4,eX,o,4,s,a,eY))};var eK={},eG={};// EXPORTS //
eG=Math.round,// EXPORTS //
eK=// MAIN //
/**
* Computes `x - nπ/2 = r` for medium-sized inputs.
*
* @private
* @param {number} x - input value
* @param {uint32} ix - high word of `x`
* @param {(Array|TypedArray|Object)} y - remainder elements
* @returns {integer} factor of `π/2`
*/function(t,e,i){var r,n,s,a,o;return r=eG(.6366197723675814*t),s=t-1.5707963267341256*r,a=6077100506506192e-26*r,// First rounding (good to 85 bits)...
o=e>>20|0,i[0]=s-a,o-(ts(i[0])>>20&2047)>16&&(s=(n=s)-(a=6077100506303966e-26*r),a=20222662487959506e-37*r-(n-s-a),i[0]=s-a,o-(ts(i[0])>>20&2047)>49&&(s=(n=s)-(a=20222662487111665e-37*r),a=84784276603689e-45*r-(n-s-a),i[0]=s-a)),i[1]=s-i[0]-a,r};var eJ=[0,0,0],eZ=[0,0];// EXPORTS //
en=// MAIN //
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
*/function(t,e){var i,r,n,s,a,o,l;// Case: |x| ~<= π/4 (no need for reduction)
if((n=ts(t)&es|0)<=1072243195)return e[0]=t,e[1]=0,0;// Case: |x| ~<= 5π/4
if(n<=1074752122)return(// Case: |x| ~= π/2 or π
(n&eo)==598523?eK(t,n,e):n<=1073928572?t>0?(l=t-1.5707963267341256,e[0]=l-6077100506506192e-26,e[1]=l-e[0]-6077100506506192e-26,1):(l=t+1.5707963267341256,e[0]=l+6077100506506192e-26,e[1]=l-e[0]+6077100506506192e-26,-1):t>0?(l=t-3.1415926534682512,e[0]=l-12154201013012384e-26,e[1]=l-e[0]-12154201013012384e-26,2):(l=t+3.1415926534682512,e[0]=l+12154201013012384e-26,e[1]=l-e[0]+12154201013012384e-26,-2));// Case: |x| ~<= 9π/4
if(n<=1075594811)return(// Case: |x| ~<= 7π/4
n<=1075183036?// Case: |x| ~= 3π/2
1074977148===n?eK(t,n,e):t>0?(l=t-4.712388980202377,e[0]=l-18231301519518578e-26,e[1]=l-e[0]-18231301519518578e-26,3):(l=t+4.712388980202377,e[0]=l+18231301519518578e-26,e[1]=l-e[0]+18231301519518578e-26,-3):// Case: |x| ~= 4π/2
1075388923===n?eK(t,n,e):t>0?(l=t-6.2831853069365025,e[0]=l-2430840202602477e-25,e[1]=l-e[0]-2430840202602477e-25,4):(l=t+6.2831853069365025,e[0]=l+2430840202602477e-25,e[1]=l-e[0]+2430840202602477e-25,-4));// Case: |x| ~< 2^20*π/2 (medium size)
if(n<1094263291)return eK(t,n,e);// Case: x is NaN or infinity
if(n>=ea)return e[0]=NaN,e[1]=NaN,0;for(a=0,// Set z = scalbn(|x|, ilogb(x)-23)...
i=el(t),r=(n>>20)-1046,l=eu(n-(r<<20|0),i);a<2;a++)eJ[a]=0|l,l=(l-eJ[a])*16777216;for(eJ[2]=l,s=3;0===eJ[s-1];)s-=1;return(o=eb(eJ,eZ,r,s,1),t<0)?(e[0]=-eZ[0],e[1]=-eZ[1],-o):(e[0]=eZ[0],e[1]=eZ[1],o)};// VARIABLES //
// Scratch array for storing temporary values:
var eQ=[0,0];// WARNING: not thread safe
// EXPORTS //
t7=// MAIN //
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
if(e>=2146435072)return NaN;switch(3&en(t,eQ)){case 0:return et(eQ[0],eQ[1]);case 1:return-er(eQ[0],eQ[1]);case 2:return-et(eQ[0],eQ[1]);default:return er(eQ[0],eQ[1])}};var e0={},e1=[0,0];// EXPORTS //
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
e<1045430272?t:er(t,0));// Case: x is NaN or infinity
if(e>=ea)return NaN;switch(3&en(t,e1)){case 0:return er(e1[0],e1[1]);case 1:return et(e1[0],e1[1]);case 2:return-er(e1[0],e1[1]);default:return-et(e1[0],e1[1])}};var e2={};// EXPORTS //
e2=3.141592653589793,// EXPORTS //
t8=// MAIN //
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
*/function(t){var e,i;return Q(t)||tt(t)?NaN:0===(e=tr(// Argument reduction (reduce to [0,2))...
i=t%2))||1===e?eM(0,i):e<.25?e0(e2*i):e<.75?eM(t7(e2*(e=.5-e)),i):e<1.25?(i=eM(1,i)-i,e0(e2*i)):e<1.75?(e-=1.5,-eM(t7(e2*e),i)):(i-=eM(2,i),e0(e2*i))};var e5={};// EXPORTS //
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
*/function(t){return 0===t?.06735230105312927:.06735230105312927+t*(.007385550860814029+t*(.0011927076318336207+t*(22086279071390839e-20+25214456545125733e-21*t)))};var e3={};// EXPORTS //
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
*/function(t){return 0===t?1.3920053346762105:1.3920053346762105+t*(.7219355475671381+t*(.17193386563280308+t*(.01864591917156529+t*(7779424963818936e-19+7326684307446256e-21*t))))};var e9={};// EXPORTS //
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
*/function(t){return 0===t?.21498241596060885:.21498241596060885+t*(.325778796408931+t*(.14635047265246445+t*(.02664227030336386+t*(.0018402845140733772+3194753265841009e-20*t))))};var e4={};// EXPORTS //
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
*/function(t){return 0===t?-.032788541075985965:-.032788541075985965+t*(.006100538702462913+t*(-.0014034646998923284+31563207090362595e-20*t))};var e8={};// EXPORTS //
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
*/function(t){return 0===t?.01797067508118204:.01797067508118204+t*(-.0036845201678113826+t*(881081882437654e-18+-.00031275416837512086*t))};var e7={};// EXPORTS //
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
Z=// MAIN //
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
*/function(t){var e,i,r,n,s,a,o,l,h,d,c,u,f;// Special cases: NaN, +-infinity
if(Q(t)||tt(t))return t;// Special case: 0
if(0===t)return te;// If |x| < 2**-70, return -ln(|x|)
if(t<0?(e=!0,t=-t):e=!1,t<8470329472543003e-37)return-tn(t);if(e){// If |x| >= 2**52, must be -integer
if(t>=4503599627370496||0===(h=t8(t)))return te;i=tn(e2/tr(h*t))}// If x equals 1 or 2, return 0
if(1===t||2===t)return 0;// If x < 2, use lgamma(x) = lgamma(x+1) - log(x)
if(t<2)switch(t<=.9?(f=-tn(t),t>=.7316321449683623?(c=1-t,r=0):t>=.19163214496836223?(c=t-.46163214496836225,r=1):(c=t,r=2)):(f=0,t>=1.7316321449683623?(c=2-t,r=0):t>=1.1916321449683622?(c=t-1.4616321449683622,r=1):(c=t-1,r=2)),r){case 0:a=.07721566490153287+(u=c*c)*e5(u),f+=(o=c*a+(s=u*(.3224670334241136+u*e3(u))))-.5*c;break;case 1:a=.48383612272381005+(d=(u=c*c)*c)*e4(d),s=-.1475877229945939+d*e8(d),n=.06462494023913339+d*e7(d),f+=-.12148629053584961+(o=u*a-(-.000000000000000003638676997039505-d*(s+c*n)));break;case 2:a=c*(-.07721566490153287+c*it(c)),s=1+c*ie(c),f+=-.5*c+a/s}else if(t<8)switch(r=t6(t),o=(c=t-r)*(-.07721566490153287+c*e9(c)),l=1+c*e6(c),f=.5*c+o/l,u=1,r){case 7:u*=c+6;/* Falls through */case 6:u*=c+5;/* Falls through */case 5:u*=c+4;/* Falls through */case 4:u*=c+3;/* Falls through */case 3:u*=c+2,f+=tn(u)}else t<0x400000000000000?(h=tn(t),c=(u=1/t)*u,f=(t-.5)*(h-1)+(d=.4189385332046727+u*ii(c))):f=t*(tn(t)-1);return e&&(f=i-f),f};var ir={},is={};// EXPORTS //
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
*/function(t){return t9(t)===t};var ia={};// EXPORTS //
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
il=2.5066282746310007;var ih={},id={},ic={};// EXPORTS //
ic=// MAIN //
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
id=// MAIN //
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
t>0?ic(t-1):ic(t+1))};var iu={};// EXPORTS //
iu=Math.sqrt;var ip={},ig={};// EXPORTS //
ig=!0===tI?0:1;// VARIABLES //
var im=new tS(1),ix=new ta(im.buffer);// EXPORTS //
ip=// MAIN //
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
*/function(t,e){return im[0]=t,ix[ig]=e>>>0,im[0]};var ib={};// EXPORTS //
ib=// MAIN //
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
*/function(t,e){return e===ti?te:e===te?0:e>0?id(e)?t:0// handles +-0
:// y < 0.0
id(e)?eM(te,t):te// handles +-0
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
*/function(t,e){return -1===t?(t-t)/(t-t):1===t?1:1>tr(t)==(e===te)?0:te// signal NaN
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
*/function(t,e,i){var r,n,s,a,o,l,h,d,c,u,f,p,g,m,x,b,y,v,_,w,M;return _=0,i<1048576&&(e*=9007199254740992,_-=53,i=ts(e)),// Extract the unbiased exponent of `x`:
_+=(i>>20)-t2|0,// Normalize `ahx` by setting the (biased) exponent to `1023`:
i=1072693248|// Isolate the significand bits of `x`:
(w=1048575&i|0),w<=235662?M=0:w<767610?M=1:(M=0,_+=1,i-=1048576),r=(y=// Load the normalized high word into `|x|`:
(e=tZ(e,i))-// Compute `ss = hs + ls = (x-1)/(x+1)` or `(x-1.5)/(x+1.5)`:
(h=ik[M]))*(v=1/(e+h)),s=ip(r,0),l=e-((o=tZ(0,(i>>1|536870912)+524288+(M<<18)))-h),a=v*(y-s*o-s*l),b=// Compute `log(ax)`...
(n=r*r)*n*iM(n)+a*(s+r),o=3+(n=s*s)+b,l=b-((o=ip(o,0))-3-n),// 2/(3LN2) * (ss+...):
c=// u+v = ss*(1+...):
(y=s*o)+(v=a*o+l*r),u=v-((c=ip(c,0))-y),g=(f=.9617967009544373*c)+(p=-.000000007028461650952758*c+.9617966939259756*u+iP[M])+// log2(ax) = (ss+...)*2/(3*LN2) = n + dp + hz + lz
(d=iS[M])+(x=_),m=p-((g=ip(g,0))-x-d-f),t[0]=g,t[1]=m,t};var iC={},iD={};// EXPORTS //
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
*/function(t,e){var i,r,n,s,a,o;return s=(n=e-1)*n*iD(n),r=(a=1.4426950216293335*n)+(o=19259629911266175e-24*n-1.4426950408889634*s),i=o-((r=ip(r,0))-a),t[0]=r,t[1]=i,t};var iA={},iO={};// EXPORTS //
iO=.6931471805599453;var iT={};// EXPORTS //
iT=// MAIN //
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
*/function(t,e,i){var r,n,s,a,o,l,h,d,c;return c=((d=t&es|0)>>20)-t2|0,h=0,d>1071644672&&(c=(((h=t+(1048576>>c+1)>>>0)&es)>>20)-t2|0,n=tZ(0,(h&~(eo>>c))>>>0),h=(h&eo|1048576)>>20-c>>>0,t<0&&(h=-h),e-=n),l=(s=.6931471824645996*(n=ip(n=i+e,0)))+(a=(i-(n-e))*iO+-.000000001904654299957768*n),o=a-(l-s),n=l*l,r=l-n*iT(n),t=ts(l=1-(l*r/(r-2)-(o+l*o)-l)),l=(t=ib(t)+(h<<20>>>0))>>20<=0?ey(l,h):tZ(l,t)};// High/low words workspace:
var iE=[0,0],iI=[0,0];// EXPORTS //
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
*/function t(e,i){var r,n,s,a,o,l,h,d,c,u,f,p,g,m;if(Q(e)||Q(i))return NaN;// Special cases `y`...
if(// Split `y` into high and low words:
eS.assign(i,iE,1,0),o=iE[0],0===iE[1]){if(0===i)return 1;if(1===i)return e;if(-1===i)return 1/e;if(.5===i)return iu(e);if(-.5===i)return 1/iu(e);if(2===i)return e*e;if(3===i)return e*e*e;if(4===i)return(e*=e)*e;if(tt(i))return i_(e,i)}// Special cases `x`...
if(// Split `x` into high and low words:
eS.assign(e,iE,1,0),a=iE[0],0===iE[1]){if(0===a)return iy(e,i);if(1===e)return 1;if(-1===e&&id(i))return -1;if(tt(e))return e===ti?t(-0,-i):i<0?0:te}if(e<0&&!1===is(i))return(e-e)/(e-e);// Case 1: `|y|` is huge...
// |y| > 2^31
if(s=tr(e),// Remove the sign bits (i.e., get absolute values):
r=a&es|0,n=o&es|0,// Extract the sign bits:
l=a>>>31|0,h=o>>>31|0,l=l&&id(i)?-1:1,n>1105199104){// `|y| > 2^64`, then must over- or underflow...
if(n>1139802112)return iv(e,i);// Over- or underflow if `x` is not close to unity...
if(r<1072693247)return(// y < 0
1===h?Infinity*l:0*l);if(r>1072693248)return(// y > 0
0===h?Infinity*l:0*l);// At this point, `|1-x|` is tiny (`<= 2^-20`). Suffice to compute `log(x)` by `x - x^2/2 + x^3/3 - x^4/4`.
f=iC(iI,s)}else f=iw(iI,s,r);// z >= 1024
if(// Split `y` into `y1 + y2` and compute `(y1+y2) * (t1+t2)`...
d=ip(i,0),p=(u=(i-d)*f[0]+i*f[1])+(c=d*f[0]),// Note: *can* be more performant to use `getHighWord` and `getLowWord` directly, but using `toWords` looks cleaner.
eS.assign(p,iE,1,0),g=ib(iE[0]),m=ib(iE[1]),g>=1083179008)// z > 1024
{if((g-1083179008|m)!=0||u+8008566259537294e-32>p-c)return Infinity*l}else if((g&es)>=1083231232&&((g-3230714880|m)!=0||u<=p-c))return 0*l;return l*// Compute `2^(hp+lp)`...
(p=iA(g,c,u))};var iR={},iL={},i$={};// EXPORTS //
i$=// MAIN //
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
iL=// MAIN //
/**
* Computes \\(e^{r} 2^k\\) where \\(r = \mathrm{hi} - \mathrm{lo}\\) and \\(|r| \leq \ln(2)/2\\).
*
* @private
* @param {number} hi - upper bound
* @param {number} lo - lower bound
* @param {integer} k - power of 2
* @returns {number} function value
*/function(t,e,i){var r,n,s;return n=(r=t-e)*r,s=r-n*i$(n),ey(1-(e-r*s/(2-s)-t),i)};var iF=1/268435456,iz=-1/268435456;// 2^-28
// EXPORTS //
iR=// MAIN //
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
*/function(t){var e;return Q(t)||t===te?t:t===ti?0:t>709.782712893384?te:t<-745.1332191019411?0:t>iz&&t<iF?1+t:(e=t<0?t6(1.4426950408889634*t-.5):t6(1.4426950408889634*t+.5),iL(t-.6931471803691238*e,19082149292705877e-26*e,e))};var iN={};// EXPORTS //
iN=// MAIN //
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
*/function(t){var e,i,r;return e=1+(e=1/t)*iN(e),i=iR(t),i=t>143.01608?(r=ih(t,.5*t-.25))*(r/i):ih(t,t-.5)/i,il*i*e};var iV={},iW={};// EXPORTS //
iW=.5772156649015329,// EXPORTS //
iV=// MAIN //
/**
* Evaluates the gamma function using a small-value approximation.
*
* @private
* @param {number} x - input value
* @param {number} z - scale factor
* @returns {number} function value
*/function(t,e){return e/((1+iW*t)*t)};var ij={};// EXPORTS //
ij=// MAIN //
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
*/function(t){var e,i,r,n;if(is(t)&&t<0||t===ti||Q(t))return NaN;if(0===t)return ia(t)?ti:te;if(t>171.61447887182297)return te;if(t<-170.5674972726612)return 0;if((i=tr(t))>33)return t>=0?io(t):(e=(1&(r=t9(i)))==0?-1:1,(n=i-r)>.5&&(r+=1,n=i-r),n=i*e0(e2*n),e*e2/(tr(n)*io(i)));for(// Reduce `x`...
n=1;t>=3;)t-=1,n*=t;for(;t<0;){if(t>-.000000001)return iV(t,n);n/=t,t+=1}for(;t<2;){if(t<1e-9)return iV(t,n);n/=t,t+=1}return 2===t?n:(t-=2,n*ij(t))};var iB={};// EXPORTS //
iB=14901161193847656e-24;var iH={};// EXPORTS //
iH=17976931348623157e292;var iY={};// EXPORTS //
iY=709.782712893384;var iX={};// EXPORTS //
iX=// MAIN //
/**
* Calculates normalized Q when a is an integer.
*
* @private
* @param {integer} a - function parameter
* @param {number} x - function parameter
* @returns {number} upper gamma fraction
*/function(t,e){var i,r,n;if(0!==(r=iR(-e)))for(n=1,i=r;n<t;++n)i/=n,i*=e,r+=i;return r};var iU={},iq={},iK={};// EXPORTS //
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
*/function(t){return 0===t?-.3250421072470015:-.3250421072470015+t*(-.02848174957559851+t*(-.005770270296489442+-.000023763016656650163*t))};var iG={};// EXPORTS //
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
*/function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(13249473800432164e-20+-.000003960228278775368*t)))};var iJ={};// EXPORTS //
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
*/function(t){return 0===t?.41485611868374833:.41485611868374833+t*(-.3722078760357013+t*(.31834661990116175+t*(-.11089469428239668+t*(.035478304325618236+-.002166375594868791*t))))};var iZ={};// EXPORTS //
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
*/function(t){var e,i,r,n,s,a,o,l;// Special case: NaN
if(Q(t))return NaN;// Special case: +infinity
if(t===te)return 0;// Special case: -infinity
if(t===ti)return 2;// Special case: +-0
if(0===t)return 1;// |x| < 0.84375
if(t<0?(e=!0,i=-t):(e=!1,i=t),i<.84375)return i<13877787807814457e-33?1-t:(a=(n=.12837916709551256+(r=t*t)*iK(r))/(s=1+r*iG(r)),t<.25)?1-(t+t*a):.5-(n=t*a+(t-.5))// raise inexact
;// 0.84375 <= |x| < 1.25
if(i<1.25)return(o=-.0023621185607526594+(s=i-1)*iJ(s),l=1+s*iZ(s),e)?1.8450629115104675+o/l:.15493708848953247-o/l;// |x| < 28
if(i<28){// |x| < 1/0.35 ~ 2.857143
if(s=1/(i*i),i<2.857142857142857)n=-.009864944034847148+s*iQ(s),s=1+s*i0(s);else{// x < -6
if(t<-6)return 2;// raise inexact
n=-.0098649429247001+s*i1(s),s=1+s*i2(s)}return(r=ip(i,0),n=iR(-(r*r)-.5625)*iR((r-i)*(r+i)+n/s),e)?2-n/i:n/i}return e?2:0// raise inexact; ~2
},// EXPORTS //
iU=// MAIN //
/**
* Calculates normalized Q when a is a half-integer.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {number} upper gamma fraction
*/function(t,e){var i,r,n,s;if(0!==(n=iq(iu(e)))&&t>1){for(r=i=iR(-e)/iu(e2*e)*e/.5,s=2;s<t;++s)i/=s-.5,i*=e,r+=i;n+=r}return n};var i5={},i3={};// EXPORTS //
i3=-708.3964185322641,// EXPORTS //
i5=// MAIN //
/**
* Calculates the power term prefix `(z^a)(e^-z)` used in the non-normalized incomplete gammas.
*
* @private
* @param {number} a - function parameter
* @param {number} z - function parameter
* @returns {number} power term prefix
*/function(t,e){var i;return i=t*tn(e),e>=1?i<iY&&-e>i3?ih(e,t)*iR(-e):t>=1?ih(e/iR(e/t),t):iR(i-e):i>i3?ih(e,t)*iR(-e):e/t<iY?ih(e/iR(e/t),t):iR(i-e)};var i6={},i9={},i4={};// EXPORTS //
i4=// MAIN //
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
*/function(t,e){var i,r;if((r=t.length)<2||0===e)return 0===r?0:t[0];for(r-=1,i=t[r]*e+t[r-1],r-=2;r>=0;)i=i*e+t[r],r-=1;return i};var i8={},i7={};// EXPORTS //
i7=Function,// EXPORTS //
i8=// MAIN //
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
*/function(t){var e,i,r,n;// Avoid exceeding the maximum stack size on V8 :(. Note that the choice of `500` was empirically determined...
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
	*/function(e){return i4(t,e)});// If no coefficients, the function always returns 0...
if(// Code generation. Start with the function definition...
e="return function evalpoly(x){",0===// Create the function body...
(i=t.length))e+="return 0.0;";else if(1===i)e+="return "+t[0]+";";else{for(// Otherwise, evaluate the polynomial...
e+="if(x===0.0){return "+t[0]+";}return "+t[0],r=i-1,n=1;n<i;n++)e+="+x*",n<r&&(e+="("),e+=t[n];// Close all the parentheses...
for(n=0;n<r-1;n++)e+=")";e+=";"}// Create the function in the global scope:
return(// Add a source directive for debugging:
e+="}//# sourceURL=evalpoly.factory.js",new i7(e)())},// MAIN //
h(i4,"factory",i8),// EXPORTS //
i9=i4;var rt={},re={};// EXPORTS //
re=2220446049250313e-31;var ri={},rr={},rn={};// EXPORTS //
rn=eval,// EXPORTS //
rr=// MAIN //
/**
* Tests for native `function*()` support.
*
* @returns {boolean} boolean indicating if an environment has native `function*()` support
*
* @example
* var bool = hasGeneratorSupport();
* // returns <boolean>
*/function(){var t;try{rn('"use strict"; (function* () {})'),t=!0}catch(e){t=!1}return t};var rs={};// EXPORTS //
rs=// MAIN //
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
*/function(t,e){var i,r,n,s,a;if(a={},arguments.length>1&&(a=e),i=a.tolerance||re,n=a.maxTerms||1e6,s=a.initialValue||0,!0==("function"==typeof t.next)){for(r of t)if(s+=r,tr(i*s)>=tr(r)||0// eslint-disable-line no-plusplus
==--n)break}else do s+=r=t();while(tr(i*s)<tr(r)&&--n)// eslint-disable-line no-plusplus
return s};var ra={};// EXPORTS //
ra=// MAIN //
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
*/function(t,e){var i,r,n,s,a;a={},arguments.length>1&&(a=e),i=a.tolerance||re,n=a.maxTerms||1e6,s=a.initialValue||0;// Repeatedly call function...
do s+=r=t();while(tr(i*s)<tr(r)&&--n)// eslint-disable-line no-plusplus
return s},// EXPORTS //
ri=rr()?rs:ra;var ro={};// EXPORTS //
ro=// MAIN //
/**
* Creates a function to evaluate a Taylor series expansion `pow(-1, k-1) * pow(x, k) / k` for `ln(1 + x)`.
*
* @private
* @param {number} x - the value at which to evaluate the series
* @returns {Function} series function
*/function(t){var e=-t,i=-1,r=0;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){return i*=e,r+=1,i/r})},// EXPORTS //
rt=// MAIN //
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
*/function(t){var e;return t<=-1?NaN:(e=tr(t))>.95?tn(1+t)-t:e<re?-t*t/2:ri(ro(t),{initialValue:-t})};var rl={};// EXPORTS //
rl=6.283185307179586;var rh={};// EXPORTS //
rh=// MAIN //
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
*/function(t){return 0===t?-.3333333333333333:-.3333333333333333+t*(.08333333333333333+t*(-.014814814814814815+t*(.0011574074074074073+t*(3527336860670194e-19+t*(-.0001787551440329218+t*(3919263178522438e-20+t*(-.0000021854485106799924+t*(-.00000185406221071516+t*(8296711340953087e-22+t*(-.00000017665952736826078+t*(6707853543401498e-24+t*(10261809784240309e-24+t*(-.000000004382036018453353+914769958223679e-24*t)))))))))))))};var rd={};// EXPORTS //
rd=// MAIN //
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
*/function(t){return 0===t?-.001851851851851852:-.001851851851851852+t*(-.003472222222222222+t*(.0026455026455026454+t*(-.0009902263374485596+t*(20576131687242798e-20+t*(-.0000004018775720164609+t*(-.000018098550334489977+t*(764916091608111e-20+t*(-.0000016120900894563446+t*(4647127802807434e-24+t*(1378633446915721e-22+t*(-.00000005752545603517705+11951628599778148e-24*t)))))))))))};var rc={};// EXPORTS //
rc=// MAIN //
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
*/function(t){return 0===t?.004133597883597883:.004133597883597883+t*(-.0026813271604938273+t*(7716049382716049e-19+t*(20093878600823047e-22+t*(-.00010736653226365161+t*(52923448829120125e-21+t*(-.000012760635188618728+t*(3423578734096138e-23+t*(13721957309062932e-22+t*(-.0000006298992138380055+14280614206064242e-23*t)))))))))};var ru={};// EXPORTS //
ru=// MAIN //
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
*/function(t){return 0===t?6494341563786008e-19:6494341563786008e-19+t*(22947209362139917e-20+t*(-.0004691894943952557+t*(26772063206283885e-20+t*(-.00007561801671883977+t*(-.0000002396505113867297+t*(11082654115347302e-21+t*(-.0000056749528269915965+14230900732435883e-22*t)))))))};var rf={};// EXPORTS //
rf=// MAIN //
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
*/function(t){return 0===t?-.0008618882909167117:-.0008618882909167117+t*(7840392217200666e-19+t*(-.0002990724803031902+t*(-.0000014638452578843418+t*(6641498215465122e-20+t*(-.00003968365047179435+11375726970678419e-21*t)))))};var rp={};// EXPORTS //
rp=// MAIN //
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
*/function(t){return 0===t?-.00033679855336635813:-.00033679855336635813+t*(-.00006972813758365858+t*(2772753244959392e-19+t*(-.00019932570516188847+t*(6797780477937208e-20+t*(1419062920643967e-22+t*(-.000013594048189768693+t*(8018470256334202e-21+-.000002291481176508095*t)))))))};var rg={};// EXPORTS //
rg=// MAIN //
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
*/function(t){return 0===t?5313079364639922e-19:5313079364639922e-19+t*(-.0005921664373536939+t*(2708782096718045e-19+t*(7902353232660328e-22+t*(-.00008153969367561969+t*(561168275310625e-19+-.000018329116582843375*t)))))};var rm={};// EXPORTS //
rm=// MAIN //
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
*/function(t){return 0===t?34436760689237765e-20:34436760689237765e-20+t*(5171790908260592e-20+t*(-.00033493161081142234+t*(2812695154763237e-19+-.00010976582244684731*t)))};var rx={};// EXPORTS //
rx=// MAIN //
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
var rb=[0,0,0,0,0,0,0,0,0,0];// WARNING: not thread safe
// EXPORTS //
i6=// MAIN //
/**
* Asymptotic expansions of the incomplete gamma functions when `a` is large and `x ~ a` (IEEE double precision or 10^-17).
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {number} value of asymptotic expansion
*/function(t,e){var i,r,n,s;return r=-rt((e-t)/t),n=t*r,s=iu(2*r),e<t&&(s=-s),rb[0]=rh(s),rb[1]=rd(s),rb[2]=rc(s),rb[3]=ru(s),rb[4]=rf(s),rb[5]=rp(s),rb[6]=rg(s),rb[7]=rm(s),rb[8]=rx(s),rb[9]=-.0005967612901927463,i=i9(rb,1/t)*(iR(-n)/iu(rl*t)),e<t&&(i=-i),i+=iq(iu(n))/2};var ry={},rv={};// EXPORTS //
rv=// MAIN //
/**
* Creates a function to evaluate a series expansion of the incomplete gamma function.
*
* @private
* @param {number} a1 - function parameter
* @param {number} z1 - function parameter
* @returns {Function} series function
*/function(t,e){var i=1,r=t;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){var t=i;return r+=1,i*=e/r,t})},// EXPORTS //
ry=// MAIN //
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
*/function(t,e,i){var r;return i=i||0,r=rv(t,e),ri(r,{initialValue:i})};var r_={},rw={};// EXPORTS //
rw=// MAIN //
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
*/function(t){var e,i;return 0===t?1/0:((t<0?-t:t)<=1?(e=709811.662581658+t*(679979.8474157227+t*(293136.7857211597+t*(74887.54032914672+t*(12555.290582413863+t*(1443.4299244417066+t*(115.24194596137347+t*(6.309239205732627+t*(.22668404630224365+t*(.004826466289237662+4624429436045379e-20*t))))))))),i=0+t*(362880+t*(1026576+t*(1172700+t*(723680+t*(269325+t*(63273+t*(9450+t*(870+t*(45+1*t)))))))))):(e=4624429436045379e-20+(t=1/t)*(.004826466289237662+t*(.22668404630224365+t*(6.309239205732627+t*(115.24194596137347+t*(1443.4299244417066+t*(12555.290582413863+t*(74887.54032914672+t*(293136.7857211597+t*(679979.8474157227+709811.662581658*t))))))))),i=1+t*(45+t*(870+t*(9450+t*(63273+t*(269325+t*(723680+t*(1172700+t*(1026576+t*(362880+0*t)))))))))),e/i)};var rM={},rk={};// EXPORTS //
rk=// MAIN //
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
rM=// MAIN //
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
*/function(t){var e,i,r,n,s,a,o,l,h,d;if(t<-1||Q(t))return NaN;if(-1===t)return ti;if(t===te||0===t)return t;// Check if argument reduction is needed and if we can just return a small value approximation requiring less computation but with equivalent accuracy...
if(// Argument reduction...
d=1,(r=t<0?-t:t)<.41421356237309503){if(r<1862645149230957e-24)return r<5551115123125783e-32?t:t-t*t*.5;// Check if `f=x` can be represented exactly (no need for correction terms), allowing us to bypass argument reduction...
t>-.2928932188134525&&(// -0.2929 < x < 0.41422
d=0,n=t,i=1)}return(0!==d&&(r<9007199254740992?s=(// Bit shift to isolate the exponent and then subtract the bias:
(d=((i=ts(h=1+t))>>20)-t2)>0?1-(h-t):t-(h-1))/h:(// Bit shift to isolate the exponent and then subtract the bias:
d=((i=ts(h=t))>>20)-t2,// Correction term is zero:
s=0),// Apply a bit mask (0 00000000000 11111111111111111111) to remove the exponent:
(i&=1048575)<434334?h=tZ(h,1072693248|i):(d+=1,// Normalize u/2 by setting the exponent to 1022 (bias-1 => 2**-1 = 1/2) => 0x3fe00000 => 0 01111111110 00000000000000000000
h=tZ(h,1071644672|i),// Subtract hu significand from next largest hu => 0 00000000001 00000000000000000000 => 0x00100000 => 1048576
i=1048576-i>>2),n=h-1),// Approximation of log1p(f)...
e=.5*n*n,0===i)?0===n?(s+=19082149292705877e-26*d,.6931471803691238*d+s):.6931471803691238*d-((l=e*(1-.6666666666666666*n))-(19082149292705877e-26*d+s)-n):(l=(o=(a=n/(2+n))*a)*rk(o),0===d)?n-(e-a*(e+l)):.6931471803691238*d-(e-(a*(e+l)+(19082149292705877e-26*d+s))-n)};var rS={},rP={};// EXPORTS //
rP=// MAIN //
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
rS=// MAIN //
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
*/function(t,e){return Q(t)||Q(e)?NaN:t===te||e===te?te:t===e&&0===t?rP(t)?t:e:t>e?t:e};var rC={};// EXPORTS //
rC=// MAIN //
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
*/function(t,e){return Q(t)||Q(e)?NaN:t===ti||e===ti?ti:t===e&&0===t?ia(t)?t:e:t<e?t:e};var rD={};// EXPORTS //
rD=10.900511;var rA={};// EXPORTS //
rA=2.718281828459045,// EXPORTS //
r_=// MAIN //
/**
* Computes `(z^a)*(e^-z) / gamma(a)`.
*
* @private
* @param {number} a - input value
* @param {number} z - input value
* @returns {number} function value
*/function(t,e){var i,r,n,s,a,o,l;return(n=t+rD-.5,l=(e-t-rD+.5)/n,t<1)?// Treat a < 1 as a special case because our Lanczos approximations are optimized against the factorials with a > 1, and for high precision types very small values of `a` can give rather erroneous results for gamma:
e<=i3?iR(t*tn(e)-e-Z(t)):ih(e,t)*iR(-e)/ir(t):(100>=tr(l*l*t)&&t>150?(// Special case for large a and a ~ z:
i=t*(rM(l)-l)+e*(.5-rD)/n,i=iR(i)):(// General case. Direct computation is most accurate, but use various fallbacks for different parts of the problem domain:
s=t*tn(e/n),rC(s,a=t-e)<=i3||rS(s,a)>=iY?(r=a/t,rC(s,a)/2>i3&&rS(s,a)/2<iY?i=// Compute square root of the result and then square it:
(o=ih(e/n,t/2)*iR(a/2))*o:rC(s,a)/4>i3&&rS(s,a)/4<iY&&e>t?(i=// Compute the 4th root of the result then square it twice:
(o=ih(e/n,t/4)*iR(a/4))*o,i*=i):i=r>i3&&r<iY?ih(e*iR(r)/n,t):iR(s+a)):i=ih(e/n,t)*iR(a)),i*=iu(n/rA)/rw(t))};var rO={},rT={},rE={},rI={};// EXPORTS //
rI=.34657359027997264;var rR={};// EXPORTS //
rR=// MAIN //
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
rE=// MAIN //
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
*/function(t){var e,i,r,n,s,a,o,l,h,d,c,u,f;if(t===te||Q(t))return t;if(t===ti)return -1;if(0===t)return t;// handles +-0 (IEEE 754-2008)
// Filter out huge and non-finite arguments...
if(t<0?(r=!0,l=-t):(r=!1,l=t),l>=38.816242111356935){if(r)return -1;if(l>=709.782712893384)return te}// Argument reduction...
if(// Extract the more significant bits from |x|:
a=0|ts(l),l>rI)l<1.0397207708399179?r?(n=t+.6931471803691238,s=-.00000000019082149292705877,f=-1):(n=t-.6931471803691238,s=19082149292705877e-26,f=1):(c=f=(r?1.4426950408889634*t-.5:1.4426950408889634*t+.5)|0,n=t-.6931471803691238*c,s=19082149292705877e-26*c),t=n-s,d=n-t-s;else{if(a<1016070144)return t;f=0}return(// x is now in primary range...
e=.5*t,c=3-(o=1+(h=t*e)*rR(h))*e,u=h*((o-c)/(6-t*c)),0===f)?t-(t*u-h):(i=eu(t2+f<<20,0),u=t*(u-d)-d-h,-1===f)?.5*(t-u)-.5:1===f?t<-.25?-2*(u-(t+.5)):1+2*(t-u):f<=-2||f>56?(l=1-(u-t),1024===f?(// Add k to y's exponent:
n=ts(l)+(f<<20)|0,l=tZ(l,n)):l*=i,l-1):(c=1,l=(f<20?(c=tZ(c,// 0x3ff00000 - (0x200000>>k) = 1072693248 - (0x200000>>k) => 0x3ff00000 = 00111111111100000000000000000000 and 0x200000 = 0 00000000010 00000000000000000000
n=1072693248-(2097152>>f)|0))-(u-t):t-(u+(c=tZ(c,n=t2-f<<20|0)))+1)*i)// c is 0
},// EXPORTS //
rT=// MAIN //
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
*/function(t,e){var i;if(Q(t)||Q(e))return NaN;if(0===e)return 0;if(0===t)return -1;if(t<0&&e%2==0&&(t=-t),t>0){if((.5>tr(e*(t-1))||.2>tr(e))&&// No good/quick approximation for ln(b)*x, so we have to evaluate...
(i=tn(t)*e)<.5)return rE(i)}else if(t6(e)!==e)return NaN;return ih(t,e)-1};var rL={},r$={},rF={};// EXPORTS //
rF=// MAIN //
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
*/function(t){var e,i;return 0===t?-.01803556856784494:((t<0?-t:t)<=1?(e=-.01803556856784494+t*(.02512664961998968+t*(.049410315156753225+t*(.0172491608709614+t*(-.0002594535632054381+t*(-.0005410098692152044+t*(-.00003245886498259485+0*t)))))),i=1+t*(1.962029871977952+t*(1.4801966942423133+t*(.5413914320717209+t*(.09885042511280101+t*(.008213096746488934+t*(22493629192211576e-20+-.00000022335276320861708*t))))))):(e=0+(t=1/t)*(-.00003245886498259485+t*(-.0005410098692152044+t*(-.0002594535632054381+t*(.0172491608709614+t*(.049410315156753225+t*(.02512664961998968+-.01803556856784494*t)))))),i=-.00000022335276320861708+t*(22493629192211576e-20+t*(.008213096746488934+t*(.09885042511280101+t*(.5413914320717209+t*(1.4801966942423133+t*(1.962029871977952+1*t))))))),e/i)};var rz={};// EXPORTS //
rz=// MAIN //
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
*/function(t){var e,i;return 0===t?.04906224540690395:((t<0?-t:t)<=1?(e=.04906224540690395+t*(-.09691175301595212+t*(-.4149833583594954+t*(-.4065671242119384+t*(-.1584135863906922+t*(-.024014982064857155+-.0010034668769627955*t))))),i=1+t*(3.0234982984646304+t*(3.4873958536072385+t*(1.9141558827442668+t*(.5071377386143635+t*(.05770397226904519+.001957681026011072*t)))))):(e=-.0010034668769627955+(t=1/t)*(-.024014982064857155+t*(-.1584135863906922+t*(-.4065671242119384+t*(-.4149833583594954+t*(-.09691175301595212+.04906224540690395*t))))),i=.001957681026011072+t*(.05770397226904519+t*(.5071377386143635+t*(1.9141558827442668+t*(3.4873958536072385+t*(3.0234982984646304+1*t)))))),e/i)};var rN={};// EXPORTS //
rN=// MAIN //
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
r$=// MAIN //
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
*/function(t,e,i){var r,n,s;if(t<re)return-tn(t);if(0===e||0===i)return 0;if(n=0,t>2){if(t>=3){do t-=1,i-=1,n+=tn(t);while(t>=3)i=t-2}return n+(.15896368026733398*(s=i*(t+1))+s*rF(i))}return(t<1&&(n+=-tn(t),i=e,e=t,t+=1),t<=1.5)?(s=rz(e),n+=.5281534194946289*(r=e*i)+r*s):n+=.45201730728149414*// Case: 1.5 < z <= 2
(s=i*e)+s*rN(-i)},// EXPORTS //
rL=// MAIN //
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
*/function(t){return Q(t)?NaN:t<0?t<-.5?ir(1+t)-1:rE(-rM(t)+r$(t+2,t+1,t)):t<2?rE(r$(t+1,t,t-1)):ir(1+t)-1};var rV={};// EXPORTS //
rV=/**
* Series representation for upper fraction when `z` is small.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @returns {Function} series function
*/function(t,e){var i,r,n,s;return i=-e,e=-e,r=t+1,n=1,/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {number} series expansion term
	*/function(){return s=i/r,i*=e,n+=1,i/=n,r+=1,s}},// EXPORTS //
rO=// MAIN //
/**
* Compute the full upper fraction (Q) when `a` is very small.
*
* @private
* @param {number} a - function parameter
* @param {number} x - function parameter
* @param {boolean} invert - boolean indicating if the upper tail of the incomplete gamma function should be evaluated
* @returns {Array} full upper fraction (Q) and pgam
*/function(t,e,i){var r,n,s,a;return n=((r=rL(t))+1)/t,r-=s=rT(e,t),r/=t,a=rV(t,e),s+=1,r=-s*ri(a,{initialValue:((i?n:0)-r)/s}),i&&(r=-r),[r,n]};var rW={},rj={},rB={},rH={};// EXPORTS //
rH=11754943508222875e-54,// EXPORTS //
rB=// MAIN //
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
*/function(t,e){var i,r,n;return(r={},arguments.length>1&&(r=e),i=r.maxIter||1e6,n=r.tolerance||re,r.keep)?/**
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
*/function(t,e,i){var r,n,s,a,o,l;if(0===(s=(l=(r="function"==typeof t.next)?t.next().value:t())[1])&&(s=rH),a=s,o=0,!0===r)do(l=t.next().value)&&(0===(o=l[1]+l[0]*o)&&(o=rH),0===(a=l[1]+l[0]/a)&&(a=rH),s*=n=a*(o=1/o));while(l&&tr(n-1)>e&&--i)// eslint-disable-line no-plusplus
else do(l=t())&&(0===(o=l[1]+l[0]*o)&&(o=rH),0===(a=l[1]+l[0]/a)&&(a=rH),s*=n=a*(o=1/o));while(l&&tr(n-1)>e&&--i)// eslint-disable-line no-plusplus
return s}(t,n,i):// FUNCTIONS //
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
*/function(t,e,i){var r,n,s,a,o,l,h;if(a=(h=(r="function"==typeof t.next)?t.next().value:t())[1],s=h[0],0===a&&(a=rH),o=a,l=0,!0===r)do(h=t.next().value)&&(0===(l=h[1]+h[0]*l)&&(l=rH),0===(o=h[1]+h[0]/o)&&(o=rH),a*=n=o*(l=1/l));while(tr(n-1)>e&&--i)// eslint-disable-line no-plusplus
else do(h=t())&&(0===(l=h[1]+h[0]*l)&&(l=rH),0===(o=h[1]+h[0]/o)&&(o=rH),a*=n=o*(l=1/l));while(h&&tr(n-1)>e&&--i)// eslint-disable-line no-plusplus
return s/a}(t,n,i)};var rY={};// EXPORTS //
rY=// MAIN //
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
*/function(t,e){var i,r,n;return(r={},arguments.length>1&&(r=e),n=r.tolerance||re,i=r.maxIter||1e6,r.keep)?/**
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
*/function(t,e,i){var r,n,s,a,o;0===(a=(o=t())[1])&&(a=rH),n=a,s=0;do(o=t())&&(0===(s=o[1]+o[0]*s)&&(s=rH),0===(n=o[1]+o[0]/n)&&(n=rH),a*=r=n*(s=1/s));while(o&&tr(r-1)>e&&--i)// eslint-disable-line no-plusplus
return a}(t,n,i):// FUNCTIONS //
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
*/function(t,e,i){var r,n,s,a,o,l;o=(l=t())[1],n=l[0],0===o&&(o=rH),s=o,a=0;do(l=t())&&(0===(a=l[1]+l[0]*a)&&(a=rH),0===(s=l[1]+l[0]/s)&&(s=rH),o*=r=s*(a=1/a));while(l&&tr(r-1)>e&&--i)// eslint-disable-line no-plusplus
return n/o}(t,n,i)},// EXPORTS //
rj=rr()?rB:rY;var rX={};// EXPORTS //
rX=// MAIN //
/**
* Creates a function to evaluate a series expansion of the upper incomplete gamma fraction.
*
* @private
* @param {number} a1 - function parameter
* @param {number} z1 - function parameter
* @returns {Function} series function
*/function(t,e){var i=e-t+1,r=0;return(/**
	* Calculate the next term of the series.
	*
	* @private
	* @returns {Array} series expansion terms
	*/function(){return r+=1,i+=2,[r*(t-r),i]})},// EXPORTS //
rW=// MAIN //
/**
* Evaluate the lower incomplete gamma integral via a series expansion and divide by `gamma(z)` to normalize.
*
* @private
* @param {number} a - function parameter
* @param {number} z - function parameter
* @returns {number} function value
*/function(t,e){var i=rX(t,e);return 1/(e-t+1+rj(i))},// EXPORTS //
J=// MAIN //
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
*/function t(e,i,r,n){var s,a,o,l,h,d,c,u,f,p,g,m,x;if(e<0||i<=0)return NaN;if(a=void 0===r||r,c=n,u=0,i>=170&&!a)return(u=c&&4*i<e?i*tn(e)-e+tn(rW(i,e)):!c&&i>4*e?i*tn(e)-e+tn(ry(i,e,l=0)/i):0===(u=t(i,e,!0,c))?c?tn(// Try http://functions.wolfram.com/06.06.06.0039.01
u=1+1/(12*i)+1/(288*i*i))-i+(i-.5)*tn(i)+tn(il):i*tn(e)-e+tn(ry(i,e,l=0)/i):tn(u)+Z(i))>iY?te:iR(u);/* eslint-disable default-case */switch(i<30&&i<=e+1&&e<iY?h=!(f=(m=t9(i))===i)&&.5===tr(m-i):f=h=!1,f&&e>.6?(// Calculate Q via finite sum:
c=!c,o=0):h&&e>.2?(// Calculate Q via finite sum for half integer a:
c=!c,o=1):e<iB&&i>1?o=6:e<.5?o=-.4/tn(e)<i?2:3:e<1.1?o=.75*e<i?2:3:(// Begin by testing whether we're in the "bad" zone where the result will be near 0.5 and the usual series and continued fractions are slow to converge:
d=!1,a&&i>20&&(p=tr((e-i)/i),i>200?20/i>p*p&&(d=!0):p<.4&&(d=!0)),d?o=5:e-1/(3*e)<i?o=2:(o=4,c=!c)),o){case 0:u=iX(i,e),!1===a&&(u*=ir(i));break;case 1:u=iU(i,e),!1===a&&(u*=ir(i));break;case 2:0!==// Compute P:
(u=a?r_(i,e):i5(i,e))&&(l=0,s=!1,c&&(l=a?1:ir(i),a||u>=1||iH*u>l?(l/=u,a||i<1||iH/i>l?(l*=-i,s=!0):l=0):l=0)),u*=ry(i,e,l)/i,s&&(c=!1,u=-u);break;case 3:u=(g=rO(i,e,// Compute Q:
c=!c))[0],x=g[1],c=!1,a&&(u/=x);break;case 4:0!==// Compute Q:
(u=a?r_(i,e):i5(i,e))&&(u*=rW(i,e));break;case 5:u=i6(i,e),e>=i&&(c=!c);break;case 6:u=(a?ih(e,i)/ir(i+1):ih(e,i)/i)*(1-i*e/(i+1))}return a&&u>1&&(u=1),c&&(u=(a?1:ir(i))-u),u},// EXPORTS //
G=// MAIN //
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
*/function(t,e,i){return Q(t)||Q(e)||Q(i)||e<0||i<=0?NaN:0===e?t<0?0:1:t<=0?0:t===te?1:J(t*i,e)};var rU={};// EXPORTS //
rU=/**
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
	*/function(){return t})};var rq={};// MAIN //
h(// EXPORTS //
rq=// MAIN //
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
*/function(t){return Q(t)?rU(NaN):/**
	* Evaluates the cumulative distribution function (CDF) of a degenerate distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated cumulative distribution function
	*
	* @example
	* var y = cdf( 10.0 );
	* // returns <number>
	*/function(e){return Q(e)?NaN:e<t?0:1}});var rK=rq.factory;/*!
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
 */function rG(t){return t+.5|0}// MAIN //
h(G,"factory",// MAIN //
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
*/function(t,e){return Q(t)||Q(e)||t<0||e<=0?rU(NaN):0===t?rK(0):/**
	* Evaluates the cumulative distribution function (CDF) for a gamma distribution.
	*
	* @private
	* @param {number} x - input value
	* @returns {Probability} evaluated CDF
	*
	* @example
	* var y = cdf( 2.0 );
	* // returns <number>
	*/function(i){return i<=0?0:i===te?1:J(i*e,t)}}),// EXPORTS //
l=G;const rJ=(t,e,i)=>Math.max(Math.min(t,i),e);function rZ(t){return rJ(rG(2.55*t),0,255)}function rQ(t){return rJ(rG(255*t),0,255)}function r0(t){return rJ(rG(t/2.55)/100,0,1)}function r1(t){return rJ(rG(100*t),0,100)}const r2={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},r5=[..."0123456789ABCDEF"],r3=t=>r5[15&t],r6=t=>r5[(240&t)>>4]+r5[15&t],r9=t=>(240&t)>>4==(15&t),r4=t=>r9(t.r)&&r9(t.g)&&r9(t.b)&&r9(t.a),r8=(t,e)=>t<255?e(t):"",r7=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function nt(t,e,i){let r=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-r*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function ne(t,e,i){let r=(r,n=(r+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[r(5),r(3),r(1)]}function ni(t,e,i){let r;let n=nt(t,1,.5);for(e+i>1&&(r=1/(e+i),e*=r,i*=r),r=0;r<3;r++)n[r]*=1-e-i,n[r]+=e;return n}function nr(t){let e,i,r;let n=t.r/255,s=t.g/255,a=t.b/255,o=Math.max(n,s,a),l=Math.min(n,s,a),h=(o+l)/2;return o!==l&&(r=o-l,i=h>.5?r/(2-o-l):r/(o+l),e=60*(e=n===o?(s-a)/r+(s<a?6:0):s===o?(a-n)/r+2:(n-s)/r+4)+.5),[0|e,i||0,h]}function nn(t,e,i,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,r)).map(rQ)}function ns(t){return(t%360+360)%360}const na={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},no={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},nl=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,nh=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,nd=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function nc(t,e,i){if(t){let r=nr(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*i,0===e?360:1)),r=nn(nt,r,void 0,void 0),t.r=r[0],t.g=r[1],t.b=r[2]}}function nu(t,e){return t?Object.assign(e||{},t):t}function nf(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=rQ(t[3]))):(e=nu(t,{r:0,g:0,b:0,a:1})).a=rQ(e.a),e}class np{constructor(e){let i;if(e instanceof np)return e;let r=typeof e;if("object"===r)i=nf(e);else if("string"===r){var n,s;s=e.length,"#"===e[0]&&(4===s||5===s?n={r:255&17*r2[e[1]],g:255&17*r2[e[2]],b:255&17*r2[e[3]],a:5===s?17*r2[e[4]]:255}:(7===s||9===s)&&(n={r:r2[e[1]]<<4|r2[e[2]],g:r2[e[3]]<<4|r2[e[4]],b:r2[e[5]]<<4|r2[e[6]],a:9===s?r2[e[7]]<<4|r2[e[8]]:255})),i=n||function(e){t||((t=function(){let t,e,i,r,n;let s={},a=Object.keys(no),o=Object.keys(na);for(t=0;t<a.length;t++){for(e=0,r=n=a[t];e<o.length;e++)i=o[e],n=n.replace(i,na[i]);i=parseInt(no[r],16),s[n]=[i>>16&255,i>>8&255,255&i]}return s}()).transparent=[0,0,0,0]);let i=t[e.toLowerCase()];return i&&{r:i[0],g:i[1],b:i[2],a:4===i.length?i[3]:255}}(e)||("r"===e.charAt(0)?function(t){let e,i,r;let n=nl.exec(t),s=255;if(n){if(n[7]!==e){let t=+n[7];s=n[8]?rZ(t):rJ(255*t,0,255)}return e=+n[1],i=+n[3],r=+n[5],{r:e=255&(n[2]?rZ(e):rJ(e,0,255)),g:i=255&(n[4]?rZ(i):rJ(i,0,255)),b:r=255&(n[6]?rZ(r):rJ(r,0,255)),a:s}}}(e):function(t){let e;let i=r7.exec(t),r=255;if(!i)return;i[5]!==e&&(r=i[6]?rZ(+i[5]):rQ(+i[5]));let n=ns(+i[2]),s=+i[3]/100,a=+i[4]/100;return{r:(e="hwb"===i[1]?nn(ni,n,s,a):"hsv"===i[1]?nn(ne,n,s,a):nn(nt,n,s,a))[0],g:e[1],b:e[2],a:r}}(e))}this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=nu(this._rgb);return t&&(t.a=r0(t.a)),t}set rgb(t){this._rgb=nf(t)}rgbString(){var t;return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${r0(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0}hexString(){var t,e;return this._valid?(e=r4(t=this._rgb)?r3:r6,t?"#"+e(t.r)+e(t.g)+e(t.b)+r8(t.a,e):void 0):void 0}hslString(){return this._valid?function(t){if(!t)return;let e=nr(t),i=e[0],r=r1(e[1]),n=r1(e[2]);return t.a<255?`hsla(${i}, ${r}%, ${n}%, ${r0(t.a)})`:`hsl(${i}, ${r}%, ${n}%)`}(this._rgb):void 0}mix(t,e){if(t){let i;let r=this.rgb,n=t.rgb,s=e===i?.5:e,a=2*s-1,o=r.a-n.a,l=((a*o==-1?a:(a+o)/(1+a*o))+1)/2;i=1-l,r.r=255&l*r.r+i*n.r+.5,r.g=255&l*r.g+i*n.g+.5,r.b=255&l*r.b+i*n.b+.5,r.a=s*r.a+(1-s)*n.a,this.rgb=r}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){let r=nd(r0(t.r)),n=nd(r0(t.g)),s=nd(r0(t.b));return{r:rQ(nh(r+i*(nd(r0(e.r))-r))),g:rQ(nh(n+i*(nd(r0(e.g))-n))),b:rQ(nh(s+i*(nd(r0(e.b))-s))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new np(this.rgb)}alpha(t){return this._rgb.a=rQ(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=rG(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return nc(this._rgb,2,t),this}darken(t){return nc(this._rgb,2,-t),this}saturate(t){return nc(this._rgb,1,t),this}desaturate(t){return nc(this._rgb,1,-t),this}rotate(t){var e,i;return(i=nr(e=this._rgb))[0]=ns(i[0]+t),i=nn(nt,i,void 0,void 0),e.r=i[0],e.g=i[1],e.b=i[2],this}}/**
 * @namespace Chart.helpers
 *//**
 * An empty function that can be used, for example, for optional callback.
 */function ng(){/* noop */}/**
 * Returns a unique id, sequentially generated from a global variable.
 */const nm=(e=0,()=>e++);/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function nx(t){return null==t}/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */function nb(t){if(Array.isArray&&Array.isArray(t))return!0;let e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */function ny(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */function nv(t){return("number"==typeof t||t instanceof Number)&&isFinite(+t)}/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */function n_(t,e){return nv(t)?t:e}/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */function nw(t,e){return void 0===t?e:t}const nM=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:+t/e,nk=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */function nS(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function nP(t,e,i,r){let n,s,a;if(nb(t)){if(s=t.length,r)for(n=s-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<s;n++)e.call(i,t[n],n)}else if(ny(t))for(n=0,s=(a=Object.keys(t)).length;n<s;n++)e.call(i,t[a[n]],a[n])}/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */function nC(t,e){let i,r,n,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,r=t.length;i<r;++i)if(n=t[i],s=e[i],n.datasetIndex!==s.datasetIndex||n.index!==s.index)return!1;return!0}/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */function nD(t){if(nb(t))return t.map(nD);if(ny(t)){let e=Object.create(null),i=Object.keys(t),r=i.length,n=0;for(;n<r;++n)e[i[n]]=nD(t[i[n]]);return e}return t}function nA(t){return -1===["__proto__","prototype","constructor"].indexOf(t)}/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */function nO(t,e,i,r){if(!nA(t))return;let n=e[t],s=i[t];ny(n)&&ny(s)?nT(n,s,r):e[t]=nD(s)}function nT(t,e,i){let r;let n=nb(e)?e:[e],s=n.length;if(!ny(t))return t;i=i||{};let a=i.merger||nO;for(let e=0;e<s;++e){if(!ny(r=n[e]))continue;let s=Object.keys(r);for(let e=0,n=s.length;e<n;++e)a(s[e],t,r,i)}return t}function nE(t,e){// eslint-disable-next-line @typescript-eslint/no-use-before-define
return nT(t,e,{merger:nI})}/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */function nI(t,e,i){if(!nA(t))return;let r=e[t],n=i[t];ny(r)&&ny(n)?nE(r,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=nD(n))}// resolveObjectKey resolver cache
const nR={// Chart.helpers.core resolveObjectKey should resolve empty key to root object
"":t=>t,// default resolvers
x:t=>t.x,y:t=>t.y};function nL(t,e){let i=nR[e]||(nR[e]=function(t){let e=/**
 * @private
 */function(t){let e=t.split("."),i=[],r="";for(let t of e)(r+=t).endsWith("\\")?r=r.slice(0,-1)+".":(i.push(r),r="");return i}(t);return t=>{for(let i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}/**
 * @private
 */function n$(t){return t.charAt(0).toUpperCase()+t.slice(1)}const nF=t=>void 0!==t,nz=t=>"function"==typeof t,nN=(t,e)=>{if(t.size!==e.size)return!1;for(let i of t)if(!e.has(i))return!1;return!0},nV=Math.PI,nW=2*nV,nj=nW+nV,nB=Number.POSITIVE_INFINITY,nH=nV/180,nY=nV/2,nX=nV/4,nU=2*nV/3,nq=Math.log10,nK=Math.sign;function nG(t,e,i){return Math.abs(t-e)<i}/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */function nJ(t){let e=Math.round(t);t=nG(t,e,t/1e3)?e:t;let i=Math.pow(10,Math.floor(nq(t))),r=t/i;return(r<=1?1:r<=2?2:r<=5?5:10)*i}function nZ(t){return!isNaN(parseFloat(t))&&isFinite(t)}/**
 * @private
 */function nQ(t,e,i){let r,n,s;for(r=0,n=t.length;r<n;r++)isNaN(s=t[r][i])||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function n0(t){return t*(nV/180)}/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */function n1(t){if(!nv(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}// Gets the angle from vertical upright to the point about a centre.
function n2(t,e){let i=e.x-t.x,r=e.y-t.y,n=Math.atan2(r,i);return n<-.5*nV&&(n+=nW),{angle:n,distance:Math.sqrt(i*i+r*r)}}function n5(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}/**
 * Shortest distance between angles, in either direction.
 * @private
 */function n3(t,e){return(t-e+nj)%nW-nV}/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */function n6(t){return(t%nW+nW)%nW}/**
 * @private
 */function n9(t,e,i,r){let n=n6(t),s=n6(e),a=n6(i),o=n6(s-n),l=n6(a-n),h=n6(n-s),d=n6(n-a);return n===s||n===a||r&&s===a||o>l&&h<d}/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */function n4(t,e,i){return Math.max(e,Math.min(i,t))}/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */function n8(t,e,i,r=1e-6){return t>=Math.min(e,i)-r&&t<=Math.max(e,i)+r}function n7(t,e,i){let r;i=i||(i=>t[i]<e);let n=t.length-1,s=0;for(;n-s>1;)i(r=s+n>>1)?s=r:n=r;return{lo:s,hi:n}}/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */const st=(t,e,i,r)=>n7(t,i,r?r=>{let n=t[r][e];return n<i||n===i&&t[r+1][e]===i}:r=>t[r][e]<i),se=(t,e,i)=>n7(t,i,r=>t[r][e]>=i),si=["push","pop","shift","splice","unshift"];function sr(t,e){let i=t._chartjs;if(!i)return;let r=i.listeners,n=r.indexOf(e);-1!==n&&r.splice(n,1),r.length>0||(si.forEach(e=>{delete t[e]}),delete t._chartjs)}/**
 * @param items
 */function sn(t){let e=new Set(t);return e.size===t.length?t:Array.from(e)}/**
* Request animation polyfill
*/const ss="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */function sa(t,e){let i=[],r=!1;return function(...n){// Save the args for use later
i=n,r||(r=!0,ss.call(window,()=>{r=!1,t.apply(e,i)}))}}/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */const so=t=>"start"===t?"left":"end"===t?"right":"center",sl=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,sh=(t,e,i,r)=>t===(r?"left":"right")?i:"center"===t?(e+i)/2:e;/**
 * Return start and count of visible points.
 * @private
 */function sd(t,e,i){let r=e.length,n=0,s=r;if(t._sorted){let{iScale:a,_parsed:o}=t,l=a.axis,{min:h,max:d,minDefined:c,maxDefined:u}=a.getUserBounds();c&&(n=n4(Math.min(st(o,l,h).lo,i?r:st(e,l,a.getPixelForValue(h)).lo),0,r-1)),s=u?n4(Math.max(st(o,a.axis,d,!0).hi+1,i?0:st(e,l,a.getPixelForValue(d),!0).hi+1),n,r)-n:r-n}return{start:n,count:s}}/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */function sc(t){let{xScale:e,yScale:i,_scaleRanges:r}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!r)return t._scaleRanges=n,!0;let s=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==i.min||r.ymax!==i.max;return Object.assign(r,n),s}const su=t=>0===t||1===t,sf=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*nW/i)),sp=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*nW/i)+1,sg={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*nY)+1,easeOutSine:t=>Math.sin(t*nY),easeInOutSine:t=>-.5*(Math.cos(nV*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>su(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(-Math.pow(2,-10*(2*t-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>su(t)?t:sf(t,.075,.3),easeOutElastic:t=>su(t)?t:sp(t,.075,.3),easeInOutElastic:t=>su(t)?t:t<.5?.5*sf(2*t,.1125,.45):.5+.5*sp(2*t-1,.1125,.45),easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-sg.easeOutBounce(1-t),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInOutBounce:t=>t<.5?.5*sg.easeInBounce(2*t):.5*sg.easeOutBounce(2*t-1)+.5};function sm(t){if(t&&"object"==typeof t){let e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function sx(t){return sm(t)?t:new np(t)}function sb(t){return sm(t)?t:new np(t).saturate(.5).darken(.1).hexString()}const sy=["x","y","borderWidth","radius","tension"],sv=["color","borderColor","backgroundColor"],s_=new Map;function sw(t,e,i){return(function(t,e){e=e||{};let i=t+JSON.stringify(e),r=s_.get(i);return r||(r=new Intl.NumberFormat(t,e),s_.set(i,r)),r})(e,i).format(t)}const sM={values:t=>nb(t)?t:""+t,numeric(t,e,i){let r;if(0===t)return"0";let n=this.chart.options.locale,s=t;if(i.length>1){let e;let n=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(n<1e-4||n>1e15)&&(r="scientific"),Math.abs(e=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),s=e}let a=nq(Math.abs(s)),o=isNaN(a)?1:Math.max(Math.min(-1*Math.floor(a),20),0),l={notation:r,minimumFractionDigits:o,maximumFractionDigits:o};return Object.assign(l,this.options.ticks.format),sw(t,n,l)},logarithmic(t,e,i){if(0===t)return"0";let r=i[e].significand||t/Math.pow(10,Math.floor(nq(t)));return[1,2,3,5,10,15].includes(r)||e>.8*i.length?sM.numeric.call(this,t,e,i):""}};var sk={formatters:sM};const sS=Object.create(null),sP=Object.create(null);function sC(t,e){if(!e)return t;let i=e.split(".");for(let e=0,r=i.length;e<r;++e){let r=i[e];t=t[r]||(t[r]=Object.create(null))}return t}function sD(t,e,i){return"string"==typeof e?nT(sC(t,e),i):nT(sC(t,""),e)}var sA=/* #__PURE__ */new class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>sb(e.backgroundColor),this.hoverBorderColor=(t,e)=>sb(e.borderColor),this.hoverColor=(t,e)=>sb(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return sD(this,t,e)}get(t){return sC(this,t)}describe(t,e){return sD(sP,t,e)}override(t,e){return sD(sS,t,e)}route(t,e,i,r){let n=sC(this,t),s=sC(this,i),a="_"+e;Object.defineProperties(n,{[a]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){let t=this[a],e=s[r];return ny(t)?Object.assign({},e,t):nw(t,e)},set(t){this[a]=t}}})}apply(t){t.forEach(t=>t(this))}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[function(t){t.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),t.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),t.set("animations",{colors:{type:"color",properties:sv},numbers:{type:"number",properties:sy}}),t.describe("animations",{_fallback:"animation"}),t.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}})},function(t){t.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})},function(t){t.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:sk.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),t.route("scale.ticks","color","","color"),t.route("scale.grid","color","","borderColor"),t.route("scale.border","color","","borderColor"),t.route("scale.title","color","","color"),t.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t&&"dash"!==t}),t.describe("scales",{_fallback:"scale"}),t.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t})}]);/**
 * @private
 */function sO(t,e,i,r,n){let s=e[n];return s||(s=e[n]=t.measureText(n).width,i.push(n)),s>r&&(r=s),r}/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */function sT(t,e,i){let r=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*r)/r+n}/**
 * Clears the entire canvas.
 */function sE(t,e){(e=e||t.getContext("2d")).save(),// canvas.width and canvas.height do not consider the canvas transform,
// while clearRect does
e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function sI(t,e,i,r){// eslint-disable-next-line @typescript-eslint/no-use-before-define
sR(t,e,i,r,null)}// eslint-disable-next-line complexity
function sR(t,e,i,r,n){let s,a,o,l,h,d,c,u;let f=e.pointStyle,p=e.rotation,g=e.radius,m=(p||0)*nH;if(f&&"object"==typeof f&&("[object HTMLImageElement]"===(s=f.toString())||"[object HTMLCanvasElement]"===s)){t.save(),t.translate(i,r),t.rotate(m),t.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),t.restore();return}if(!isNaN(g)&&!(g<=0)){switch(t.beginPath(),f){// Default includes circle
default:n?t.ellipse(i,r,n/2,g,0,0,nW):t.arc(i,r,g,0,nW),t.closePath();break;case"triangle":d=n?n/2:g,t.moveTo(i+Math.sin(m)*d,r-Math.cos(m)*g),m+=nU,t.lineTo(i+Math.sin(m)*d,r-Math.cos(m)*g),m+=nU,t.lineTo(i+Math.sin(m)*d,r-Math.cos(m)*g),t.closePath();break;case"rectRounded":// NOTE: the rounded rect implementation changed to use `arc` instead of
// `quadraticCurveTo` since it generates better results when rect is
// almost a circle. 0.516 (instead of 0.5) produces results with visually
// closer proportion to the previous impl and it is inscribed in the
// circle with `radius`. For more details, see the following PRs:
// https://github.com/chartjs/Chart.js/issues/5597
// https://github.com/chartjs/Chart.js/issues/5858
h=.516*g,a=Math.cos(m+nX)*(l=g-h),c=Math.cos(m+nX)*(n?n/2-h:l),o=Math.sin(m+nX)*l,u=Math.sin(m+nX)*(n?n/2-h:l),t.arc(i-c,r-o,h,m-nV,m-nY),t.arc(i+u,r-a,h,m-nY,m),t.arc(i+c,r+o,h,m,m+nY),t.arc(i-u,r+a,h,m+nY,m+nV),t.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*g,d=n?n/2:l,t.rect(i-d,r-l,2*d,2*l);break}m+=nX;/* falls through */case"rectRot":c=Math.cos(m)*(n?n/2:g),a=Math.cos(m)*g,o=Math.sin(m)*g,u=Math.sin(m)*(n?n/2:g),t.moveTo(i-c,r-o),t.lineTo(i+u,r-a),t.lineTo(i+c,r+o),t.lineTo(i-u,r+a),t.closePath();break;case"crossRot":m+=nX;/* falls through */case"cross":c=Math.cos(m)*(n?n/2:g),a=Math.cos(m)*g,o=Math.sin(m)*g,u=Math.sin(m)*(n?n/2:g),t.moveTo(i-c,r-o),t.lineTo(i+c,r+o),t.moveTo(i+u,r-a),t.lineTo(i-u,r+a);break;case"star":c=Math.cos(m)*(n?n/2:g),a=Math.cos(m)*g,o=Math.sin(m)*g,u=Math.sin(m)*(n?n/2:g),t.moveTo(i-c,r-o),t.lineTo(i+c,r+o),t.moveTo(i+u,r-a),t.lineTo(i-u,r+a),m+=nX,c=Math.cos(m)*(n?n/2:g),a=Math.cos(m)*g,o=Math.sin(m)*g,u=Math.sin(m)*(n?n/2:g),t.moveTo(i-c,r-o),t.lineTo(i+c,r+o),t.moveTo(i+u,r-a),t.lineTo(i-u,r+a);break;case"line":a=n?n/2:Math.cos(m)*g,o=Math.sin(m)*g,t.moveTo(i-a,r-o),t.lineTo(i+a,r+o);break;case"dash":t.moveTo(i,r),t.lineTo(i+Math.cos(m)*(n?n/2:g),r+Math.sin(m)*g);break;case!1:t.closePath()}t.fill(),e.borderWidth>0&&t.stroke()}}/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */function sL(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function s$(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function sF(t){t.restore()}/**
 * @private
 */function sz(t,e,i,r,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){let r=(e.x+i.x)/2;t.lineTo(r,e.y),t.lineTo(r,i.y)}else"after"===n!=!!r?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}/**
 * @private
 */function sN(t,e,i,r){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?i.cp2x:i.cp1x,r?i.cp2y:i.cp1y,i.x,i.y)}/**
 * Render text onto the canvas
 */function sV(t,e,i,r,n,s={}){let a,o;let l=nb(e)?e:[e],h=s.strokeWidth>0&&""!==s.strokeColor;for(t.save(),t.font=n.string,s.translation&&t.translate(s.translation[0],s.translation[1]),nx(s.rotation)||t.rotate(s.rotation),s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),a=0;a<l.length;++a)o=l[a],s.backdrop&&function(t,e){let i=t.fillStyle;t.fillStyle=e.color,t.fillRect(e.left,e.top,e.width,e.height),t.fillStyle=i}(t,s.backdrop),h&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),nx(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(o,i,r,s.maxWidth)),t.fillText(o,i,r,s.maxWidth),function(t,e,i,r,n){if(n.strikethrough||n.underline){/**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */let s=t.measureText(r),a=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,l=i-s.actualBoundingBoxAscent,h=i+s.actualBoundingBoxDescent,d=n.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(a,d),t.lineTo(o,d),t.stroke()}}(t,i,r,o,s),r+=Number(n.lineHeight);t.restore()}/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */function sW(t,e){let{x:i,y:r,w:n,h:s,radius:a}=e;// top left arc
t.arc(i+a.topLeft,r+a.topLeft,a.topLeft,1.5*nV,nV,!0),// line from top left to bottom left
t.lineTo(i,r+s-a.bottomLeft),// bottom left arc
t.arc(i+a.bottomLeft,r+s-a.bottomLeft,a.bottomLeft,nV,nY,!0),// line from bottom left to bottom right
t.lineTo(i+n-a.bottomRight,r+s),// bottom right arc
t.arc(i+n-a.bottomRight,r+s-a.bottomRight,a.bottomRight,nY,0,!0),// line from bottom right to top right
t.lineTo(i+n,r+a.topRight),// top right arc
t.arc(i+n-a.topRight,r+a.topRight,a.topRight,0,-nY,!0),// line from top right to top left
t.lineTo(i+a.topLeft,r)}const sj=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,sB=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/,sH=t=>+t||0;function sY(t,e){let i={},r=ny(e),n=r?Object.keys(e):e,s=ny(t)?r?i=>nw(t[i],t[e[i]]):e=>t[e]:()=>t;for(let t of n)i[t]=sH(s(t));return i}/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */function sX(t){return sY(t,{top:"y",right:"x",bottom:"y",left:"x"})}/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */function sU(t){return sY(t,["topLeft","topRight","bottomLeft","bottomRight"])}/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */function sq(t){let e=sX(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */function sK(t,e){t=t||{},e=e||sA.font;let i=nw(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let r=nw(t.style,e.style);r&&!(""+r).match(sB)&&(console.warn('Invalid font style specified: "'+r+'"'),r=void 0);let n={family:nw(t.family,e.family),lineHeight:/**
 * @alias Chart.helpers.options
 * @namespace
 *//**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */function(t,e){let i=(""+t).match(sj);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}(nw(t.lineHeight,e.lineHeight),i),size:i,style:r,weight:nw(t.weight,e.weight),string:""};return n.string=!n||nx(n.size)||nx(n.family)?null:(n.style?n.style+" ":"")+(n.weight?n.weight+" ":"")+n.size+"px "+n.family,n}/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */function sG(t,e,i,r){let n,s,a,o=!0;for(n=0,s=t.length;n<s;++n)if(void 0!==(a=t[n])&&(void 0!==e&&"function"==typeof a&&(a=a(e),o=!1),void 0!==i&&nb(a)&&(a=a[i%a.length],o=!1),void 0!==a))return r&&!o&&(r.cacheable=!1),a}function sJ(t,e){return Object.assign(Object.create(t),e)}/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */function sZ(t,e=[""],i,r,n=()=>t[0]){let s=i||t;void 0===r&&(r=s4("_fallback",t));let a={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:s,_fallback:r,_getTarget:n,override:i=>sZ([i,...t],e,s,r)};return new Proxy(a,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),/**
     * A trap for getting property values.
     */get:(i,r)=>s5(i,r,()=>(function(t,e,i,r){let n;for(let s of e)if(void 0!==(n=s4(s1(s,t),i)))return s2(t,n)?s6(i,r,t,n):n})(r,e,t,i)),/**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),/**
     * A trap for Object.getPrototypeOf.
     */getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),/**
     * A trap for the in operator.
     */has:(t,e)=>s8(t).includes(e),/**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ownKeys:t=>s8(t),/**
     * A trap for setting property values.
     */set(t,e,i){let r=t._storage||(t._storage=n());return t[e]=r[e]=i,delete t._keys,!0}})}/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */function sQ(t,e,i,r){let n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:s0(t,r),setContext:e=>sQ(t,e,i,r),override:n=>sQ(t.override(n),e,i,r)};return new Proxy(n,{/**
     * A trap for the delete operator.
     */deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),/**
     * A trap for getting property values.
     */get:(t,e,i)=>s5(t,e,()=>(function(t,e,i){let{_proxy:r,_context:n,_subProxy:s,_descriptors:a}=t,o=r[e];return nz(o)&&a.isScriptable(e)&&(o=function(t,e,i,r){let{_proxy:n,_context:s,_subProxy:a,_stack:o}=i;if(o.has(t))throw Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);o.add(t);let l=e(s,a||r);return o.delete(t),s2(t,l)&&(l=s6(n._scopes,n,t,l)),l}(e,o,t,i)),nb(o)&&o.length&&(o=function(t,e,i,r){let{_proxy:n,_context:s,_subProxy:a,_descriptors:o}=i;if(void 0!==s.index&&r(t))return e[s.index%e.length];if(ny(e[0])){// Array of objects, return array or resolvers
        let i=e,r=n._scopes.filter(t=>t!==i);for(let l of(e=[],i)){let i=s6(r,n,t,l);e.push(sQ(i,s,a&&a[t],o))}}return e}(e,o,t,a.isIndexable)),s2(e,o)&&(o=sQ(o,n,s&&s[e],a)),o})(t,e,i)),/**
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
     */set:(e,i,r)=>(t[i]=r,delete e[i],!0)})}/**
 * @private
 */function s0(t,e={scriptable:!0,indexable:!0}){let{_scriptable:i=e.scriptable,_indexable:r=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:r,isScriptable:nz(i)?i:()=>i,isIndexable:nz(r)?r:()=>r}}const s1=(t,e)=>t?t+n$(e):e,s2=(t,e)=>ny(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function s5(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];let r=i();return(// cache the resolved value
t[e]=r,r)}const s3=(t,e)=>!0===t?e:"string"==typeof t?nL(e,t):void 0;function s6(t,e,i,r){var n;let s=e._rootScopes,a=nz(n=e._fallback)?n(i,r):n,o=[...t,...s],l=new Set;l.add(r);let h=s9(l,o,i,a||i,r);return null!==h&&(void 0===a||a===i||null!==(h=s9(l,o,a,h,r)))&&sZ(Array.from(l),[""],s,a,()=>(function(t,e,i){let r=t._getTarget();e in r||(r[e]={});let n=r[e];return nb(n)&&ny(i)?i:n||{}})(e,i,r))}function s9(t,e,i,r,n){for(;i;)i=function(t,e,i,r,n){for(let a of e){let e=s3(i,a);if(e){var s;t.add(e);let a=nz(s=e._fallback)?s(i,n):s;if(void 0!==a&&a!==i&&a!==r)// The fallback will resume to that new scope.
return a}else if(!1===e&&void 0!==r&&i!==r)// For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
return null}return!1}(t,e,i,r,n);return i}function s4(t,e){for(let i of e){if(!i)continue;let e=i[t];if(void 0!==e)return e}}function s8(t){let e=t._keys;return e||(e=t._keys=function(t){let e=new Set;for(let i of t)for(let t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}function s7(t,e,i,r){let n,s,a;let{iScale:o}=t,{key:l="r"}=this._parsing,h=Array(r);for(n=0;n<r;++n)a=e[s=n+i],h[n]={r:o.parse(nL(a,l),s)};return h}const at=Number.EPSILON||1e-14,ae=(t,e)=>e<t.length&&!t[e].skip&&t[e],ai=t=>"x"===t?"y":"x";function ar(t,e,i){return Math.max(Math.min(t,i),e)}/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 *//**
 * @private
 */function an(){return"undefined"!=typeof window&&"undefined"!=typeof document}/**
 * @private
 */function as(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */function aa(t,e,i){let r;return"string"==typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[i])):r=t,r}const ao=t=>t.ownerDocument.defaultView.getComputedStyle(t,null),al=["top","right","bottom","left"];function ah(t,e,i){let r={};i=i?"-"+i:"";for(let n=0;n<4;n++){let s=al[n];r[s]=parseFloat(t[e+"-"+s+i])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}const ad=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */function ac(t,e){if("native"in t)return t;let{canvas:i,currentDevicePixelRatio:r}=e,n=ao(i),s="border-box"===n.boxSizing,a=ah(n,"padding"),o=ah(n,"border","width"),{x:l,y:h,box:d}=/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */function(t,e){let i,r;let n=t.touches,s=n&&n.length?n[0]:t,{offsetX:a,offsetY:o}=s,l=!1;if(ad(a,o,t.target))i=a,r=o;else{let t=e.getBoundingClientRect();i=s.clientX-t.left,r=s.clientY-t.top,l=!0}return{x:i,y:r,box:l}}(t,i),c=a.left+(d&&o.left),u=a.top+(d&&o.top),{width:f,height:p}=e;return s&&(f-=a.width+o.width,p-=a.height+o.height),{x:Math.round((l-c)/f*i.width/r),y:Math.round((h-u)/p*i.height/r)}}const au=t=>Math.round(10*t)/10;/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */function af(t,e,i){let r=e||1,n=Math.floor(t.height*r),s=Math.floor(t.width*r);t.height=Math.floor(t.height),t.width=Math.floor(t.width);let a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||a.height!==n||a.width!==s)&&(t.currentDevicePixelRatio=r,a.height=n,a.width=s,t.ctx.setTransform(r,0,0,r,0,0),!0)}/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */const ap=function(){let t=!1;try{let e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){// continue regardless of error
}return t}();/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */function ag(t,e){let i=ao(t).getPropertyValue(e),r=i&&i.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}/**
 * @private
 */function am(t,e,i,r){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}/**
 * @private
 */function ax(t,e,i,r){return{x:t.x+i*(e.x-t.x),y:"middle"===r?i<.5?t.y:e.y:"after"===r?i<1?t.y:e.y:i>0?e.y:t.y}}/**
 * @private
 */function ab(t,e,i,r){let n={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=am(t,n,i),o=am(n,s,i),l=am(s,e,i),h=am(a,o,i),d=am(o,l,i);return am(h,d,i)}function ay(t,e,i){var r;return t?(r=i,{x:t=>e+e+r-t,setWidth(t){r=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function av(t,e){let i,r;("ltr"===e||"rtl"===e)&&(r=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=r)}function a_(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function aw(t){return"angle"===t?{between:n9,compare:n3,normalize:n6}:{between:n8,compare:(t,e)=>t-e,normalize:t=>t}}function aM({start:t,end:e,count:i,loop:r,style:n}){return{start:t%i,end:e%i,loop:r&&(e-t+1)%i==0,style:n}}function ak(t,e,i){let r,n,s;if(!i)return[t];let{property:a,start:o,end:l}=i,h=e.length,{compare:d,between:c,normalize:u}=aw(a),{start:f,end:p,loop:g,style:m}=function(t,e,i){let r;let{property:n,start:s,end:a}=i,{between:o,normalize:l}=aw(n),h=e.length,{start:d,end:c,loop:u}=t;if(u){for(d+=h,c+=h,r=0;r<h&&o(l(e[d%h][n]),s,a);++r)d--,c--;d%=h,c%=h}return c<d&&(c+=h),{start:d,end:c,loop:u,style:t.style}}(t,e,i),x=[],b=!1,y=null,v=()=>c(o,s,r)&&0!==d(o,s),_=()=>0===d(l,r)||c(l,s,r),w=()=>b||v(),M=()=>!b||_();for(let t=f,i=f;t<=p;++t)(n=e[t%h]).skip||(r=u(n[a]))===s||(b=c(r,o,l),null===y&&w()&&(y=0===d(r,o)?t:i),null!==y&&M()&&(x.push(aM({start:y,end:t,loop:g,count:h,style:m})),y=null),i=t,s=r);return null!==y&&x.push(aM({start:y,end:p,loop:g,count:h,style:m})),x}function aS(t,e){let i=[],r=t.segments;for(let n=0;n<r.length;n++){let s=ak(r[n],t.points,e);s.length&&i.push(...s)}return i}function aP(t,e,i,r){return r&&r.setContext&&i?function(t,e,i,r){let n=t._chart.getContext(),s=aC(t.options),{_datasetIndex:a,options:{spanGaps:o}}=t,l=i.length,h=[],d=s,c=e[0].start,u=c;function f(t,e,r,n){let s=o?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=s;for(;i[e%l].skip;)e+=s;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:r,style:n}),d=n,c=e%l)}}for(let t of e){let e;let s=i[(c=o?c:t.start)%l];for(u=c+1;u<=t.end;u++){let o=i[u%l];(function(t,e){if(!e)return!1;let i=[],r=function(t,e){return sm(e)?(i.includes(e)||i.push(e),i.indexOf(e)):e};return JSON.stringify(t,r)!==JSON.stringify(e,r)})(e=aC(r.setContext(sJ(n,{type:"segment",p0:s,p1:o,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:a}))),d)&&f(c,u-1,t.loop,d),s=o,d=e}c<u-1&&f(c,u-1,t.loop,d)}return h}(t,e,i,r):e}function aC(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}var aD=/* #__PURE__ */new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,r){let n=e.listeners[r],s=e.duration;n.forEach(r=>r({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=ss.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,r)=>{let n;if(!i.running||!i.items.length)return;let s=i.items,a=s.length-1,o=!1;for(;a>=0;--a)(n=s[a])._active?(n._total>i.duration&&(i.duration=n._total),n.tick(t),o=!0):(s[a]=s[s.length-1],s.pop());o&&(r.draw(),this._notify(r,i,t,"progress")),s.length||(i.running=!1,this._notify(r,i,t,"complete"),i.initial=!1),e+=s.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!!e&&!!e.running&&!!e.items.length}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,r=i.length-1;for(;r>=0;--r)i[r].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const aA="transparent",aO={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){let r=sx(t||aA),n=r.valid&&sx(e||aA);return n&&n.valid?n.mix(r,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class aT{constructor(t,e,i,r){let n=e[i];r=sG([t.to,r,n,t.from]);let s=sG([t.from,n,r]);this._active=!0,this._fn=t.fn||aO[t.type||typeof s],this._easing=sg[t.easing]||sg.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=s,this._to=r,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let r=this._target[this._prop],n=i-this._start,s=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=sG([t.to,e,r,t.from]),this._from=sG([t.from,r,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e;let i=t-this._start,r=this._duration,n=this._prop,s=this._from,a=this._loop,o=this._to;if(this._active=s!==o&&(a||i<r),!this._active){this._target[n]=o,this._notify(!0);return}if(i<0){this._target[n]=s;return}e=i/r%2,e=a&&e>1?2-e:e,e=this._easing(Math.min(1,Math.max(0,e))),this._target[n]=this._fn(s,o,e)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}class aE{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ny(t))return;let e=Object.keys(sA.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(r=>{let n=t[r];if(!ny(n))return;let s={};for(let t of e)s[t]=n[t];(nb(n.properties)&&n.properties||[r]).forEach(t=>{t!==r&&i.has(t)||i.set(t,s)})})}_animateOptions(t,e){let i=e.options,r=function(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}(t,i);if(!r)return[];let n=this._createAnimations(r,i);return i.$shared&&(function(t,e){let i=[],r=Object.keys(e);for(let e=0;e<r.length;e++){let n=t[r[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)})(t.options.$animations,i).then(()=>{t.options=i},()=>{}),n}_createAnimations(t,e){let i;let r=this._properties,n=[],s=t.$animations||(t.$animations={}),a=Object.keys(e),o=Date.now();for(i=a.length-1;i>=0;--i){let l=a[i];if("$"===l.charAt(0))continue;if("options"===l){n.push(...this._animateOptions(t,e));continue}let h=e[l],d=s[l],c=r.get(l);if(d){if(c&&d.active()){d.update(c,h,o);continue}d.cancel()}if(!c||!c.duration){t[l]=h;continue}s[l]=d=new aT(c,t,l,h),n.push(d)}return n}update(t,e){if(0===this._properties.size){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return aD.add(this._chart,i),!0}}function aI(t,e){let i=t&&t.options||{},r=i.reverse,n=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:r?s:n,end:r?n:s}}function aR(t,e){let i,r;let n=[],s=t._getSortedDatasetMetas(e);for(i=0,r=s.length;i<r;++i)n.push(s[i].index);return n}function aL(t,e,i,r={}){let n,s,a,o;let l=t.keys,h="single"===r.mode;if(null!==e){for(n=0,s=l.length;n<s;++n){if((a=+l[n])===i){if(r.all)continue;break}nv(o=t.values[a])&&(h||0===e||nK(e)===nK(o))&&(e+=o)}return e}}function a$(t,e){let i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function aF(t,e,i,r){for(let n of e.getMatchingVisibleMetas(r).reverse()){let e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function az(t,e){let i;let{chart:r,_cachedMeta:n}=t,s=r._stacks||(r._stacks={}),{iScale:a,vScale:o,index:l}=n,h=a.axis,d=o.axis,c=`${a.id}.${o.id}.${n.stack||n.type}`,u=e.length;for(let t=0;t<u;++t){let r=e[t],{[h]:a,[d]:u}=r,f=r._stacks||(r._stacks={});(i=f[d]=function(t,e,i){let r=t[e]||(t[e]={});return r[i]||(r[i]={})}(s,c,a))[l]=u,i._top=aF(i,o,!0,n.type),i._bottom=aF(i,o,!1,n.type);let p=i._visualValues||(i._visualValues={});p[l]=u}}function aN(t,e){let i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function aV(t,e){let i=t.controller.index,r=t.vScale&&t.vScale.axis;if(r)for(let n of e=e||t._parsed){let t=n._stacks;if(!t||void 0===t[r]||void 0===t[r][i])return;delete t[r][i],void 0!==t[r]._visualValues&&void 0!==t[r]._visualValues[i]&&delete t[r]._visualValues[i]}}const aW=t=>"reset"===t||"none"===t,aj=(t,e)=>e?t:Object.assign({},t),aB=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:aR(i,!0),values:null};class aH{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=a$(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&aV(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),r=(t,e,i,r)=>"x"===t?e:"r"===t?r:i,n=e.xAxisID=nw(i.xAxisID,aN(t,"x")),s=e.yAxisID=nw(i.yAxisID,aN(t,"y")),a=e.rAxisID=nw(i.rAxisID,aN(t,"r")),o=e.indexAxis,l=e.iAxisID=r(o,n,s,a),h=e.vAxisID=r(o,s,n,a);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(s),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&sr(this._data,this),t._stacked&&aV(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(ny(e))this._data=function(t){let e,i,r;let n=Object.keys(t),s=Array(n.length);for(e=0,i=n.length;e<i;++e)r=n[e],s[e]={x:r,y:t[r]};return s}(e);else if(i!==e){if(i){sr(i,this);let t=this._cachedMeta;aV(t),t._parsed=[]}e&&Object.isExtensible(e)&&function(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),si.forEach(e=>{let i="_onData"+n$(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){let n=r.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"==typeof t[i]&&t[i](...e)}),n}})})}(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),r=!1;this._dataCheck();let n=e._stacked;e._stacked=a$(e.vScale,e),e.stack!==i.stack&&(r=!0,aV(e),e.stack=i.stack),this._resyncElements(t),(r||n!==e._stacked)&&az(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let i,r,n;let{_cachedMeta:s,_data:a}=this,{iScale:o,_stacked:l}=s,h=o.axis,d=0===t&&e===a.length||s._sorted,c=t>0&&s._parsed[t-1];if(!1===this._parsing)s._parsed=a,s._sorted=!0,n=a;else{n=nb(a[t])?this.parseArrayData(s,a,t,e):ny(a[t])?this.parseObjectData(s,a,t,e):this.parsePrimitiveData(s,a,t,e);let o=()=>null===r[h]||c&&r[h]<c[h];for(i=0;i<e;++i)s._parsed[i+t]=r=n[i],d&&(o()&&(d=!1),c=r);s._sorted=d}l&&az(this,n)}parsePrimitiveData(t,e,i,r){let n,s;let{iScale:a,vScale:o}=t,l=a.axis,h=o.axis,d=a.getLabels(),c=a===o,u=Array(r);for(n=0;n<r;++n)s=n+i,u[n]={[l]:c||a.parse(d[s],s),[h]:o.parse(e[s],s)};return u}parseArrayData(t,e,i,r){let n,s,a;let{xScale:o,yScale:l}=t,h=Array(r);for(n=0;n<r;++n)a=e[s=n+i],h[n]={x:o.parse(a[0],s),y:l.parse(a[1],s)};return h}parseObjectData(t,e,i,r){let n,s,a;let{xScale:o,yScale:l}=t,{xAxisKey:h="x",yAxisKey:d="y"}=this._parsing,c=Array(r);for(n=0;n<r;++n)a=e[s=n+i],c[n]={x:o.parse(nL(a,h),s),y:l.parse(nL(a,d),s)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let r=this.chart,n=this._cachedMeta,s=e[t.axis],a={keys:aR(r,!0),values:e._stacks[t.axis]._visualValues};return aL(a,s,n.index,{mode:i})}updateRangeFromParsed(t,e,i,r){let n=i[e.axis],s=null===n?NaN:n,a=r&&i._stacks[e.axis];r&&a&&(r.values=a,s=aL(r,n,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){let i,r;let n=this._cachedMeta,s=n._parsed,a=n._sorted&&t===n.iScale,o=s.length,l=this._getOtherScale(t),h=aB(e,n,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:u}=function(t){let{min:e,max:i,minDefined:r,maxDefined:n}=t.getUserBounds();return{min:r?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(l);function f(){r=s[i];let e=r[l.axis];return!nv(r[t.axis])||c>e||u<e}for(i=0;i<o&&(f()||(this.updateRangeFromParsed(d,t,r,h),!a));++i);if(a){for(i=o-1;i>=0;--i)if(!f()){this.updateRangeFromParsed(d,t,r,h);break}}return d}getAllParsedValues(t){let e,i,r;let n=this._cachedMeta._parsed,s=[];for(e=0,i=n.length;e<i;++e)nv(r=n[e][t.axis])&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,r=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:r?""+r.getLabelForValue(n[r.axis]):""}}_update(t){var e;let i,r,n,s;let a=this._cachedMeta;this.update(t||"default"),a._clip=(ny(e=nw(this.options.clip,function(t,e,i){if(!1===i)return!1;let r=aI(t,i),n=aI(e,i);return{top:n.end,right:r.end,bottom:n.start,left:r.start}}(a.xScale,a.yScale,this.getMaxOverflow())))?(i=e.top,r=e.right,n=e.bottom,s=e.left):i=r=n=s=e,{top:i,right:r,bottom:n,left:s,disabled:!1===e})}update(t){}draw(){let t;let e=this._ctx,i=this.chart,r=this._cachedMeta,n=r.data||[],s=i.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||n.length-o,h=this.options.drawActiveElementsOnTop;for(r.dataset&&r.dataset.draw(e,s,o,l),t=o;t<o+l;++t){let i=n[t];i.hidden||(i.active&&h?a.push(i):i.draw(e,s))}for(t=0;t<a.length;++t)a[t].draw(e,s)}getStyle(t,e){let i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){var r;let n;let s=this.getDataset();if(t>=0&&t<this._cachedMeta.data.length){let e=this._cachedMeta.data[t];(n=e.$context||(e.$context=sJ(this.getContext(),{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"}))).parsed=this.getParsed(t),n.raw=s.data[t],n.index=n.dataIndex=t}else(n=this.$context||(this.$context=sJ(this.chart.getContext(),{active:!1,dataset:void 0,datasetIndex:r=this.index,index:r,mode:"default",type:"dataset"}))).dataset=s,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let r="active"===e,n=this._cachedDataOpts,s=t+"-"+e,a=n[s],o=this.enableOptionSharing&&nF(i);if(a)return aj(a,o);let l=this.chart.config,h=l.datasetElementScopeKeys(this._type,t),d=r?[`${t}Hover`,"hover",t,""]:[t,""],c=l.getOptionScopes(this.getDataset(),h),u=Object.keys(sA.elements[t]),f=l.resolveNamedOptions(c,u,()=>this.getContext(i,r,e),d);return f.$shared&&(f.$shared=o,n[s]=Object.freeze(aj(f,o))),f}_resolveAnimations(t,e,i){let r;let n=this.chart,s=this._cachedDataOpts,a=`animation-${e}`,o=s[a];if(o)return o;if(!1!==n.options.animation){let n=this.chart.config,s=n.datasetAnimationScopeKeys(this._type,e),a=n.getOptionScopes(this.getDataset(),s);r=n.createResolver(a,this.getContext(t,i,e))}let l=new aE(n,r&&r.animations);return r&&r._cacheable&&(s[a]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||aW(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),r=this._sharedOptions,n=this.getSharedOptions(i),s=this.includeOptions(e,n)||n!==r;return this.updateSharedOptions(n,e,i),{sharedOptions:n,includeOptions:s}}updateElement(t,e,i,r){aW(r)?Object.assign(t,i):this._resolveAnimations(e,r).update(t,i)}updateSharedOptions(t,e,i){t&&!aW(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,r){t.active=r;let n=this.getStyle(e,r);this._resolveAnimations(e,i,r).update(t,{options:!r&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];let r=i.length,n=e.length,s=Math.min(n,r);s&&this.parse(0,s),n>r?this._insertElements(r,n-r,t):n<r&&this._removeElements(n,r-n)}_insertElements(t,e,i=!0){let r;let n=this._cachedMeta,s=n.data,a=t+e,o=t=>{for(t.length+=e,r=t.length-1;r>=a;r--)t[r]=t[r-e]};for(o(s),r=t;r<a;++r)s[r]=new this.dataElementType;this._parsing&&o(n._parsed),this.parse(t,e),i&&this.updateElements(s,t,e,"reset")}updateElements(t,e,i,r){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let r=i._parsed.splice(t,e);i._stacked&&aV(i,r)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,r]=t;this[e](i,r)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function aY(t,e,i,r){return nb(t)?function(t,e,i,r){let n=i.parse(t[0],r),s=i.parse(t[1],r),a=Math.min(n,s),o=Math.max(n,s),l=a,h=o;Math.abs(a)>Math.abs(o)&&(l=o,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:n,end:s,min:a,max:o}}(t,e,i,r):e[i.axis]=i.parse(t,r),e}function aX(t,e,i,r){let n,s,a,o;let l=t.iScale,h=t.vScale,d=l.getLabels(),c=l===h,u=[];for(n=i,s=i+r;n<s;++n)o=e[n],(a={})[l.axis]=c||l.parse(d[n],n),u.push(aY(o,a,h,n));return u}function aU(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function aq(t,e,i,r){var n;return t=r?aK(t=(n=t)===e?i:n===i?e:n,i,e):aK(t,e,i)}function aK(t,e,i){return"start"===t?e:"end"===t?i:t}class aG extends aH{static id="doughnut";static defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"};static descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:r}}=t.legend.options;return e.labels.map((e,n)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(n);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}}};constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let i=this.getDataset().data,r=this._cachedMeta;if(!1===this._parsing)r._parsed=i;else{let n,s,a=t=>+i[t];if(ny(i[t])){let{key:t="value"}=this._parsing;a=e=>+nL(i[e],t)}for(n=t,s=t+e;n<s;++n)r._parsed[n]=a(n)}}_getRotation(){return n0(this.options.rotation-90)}_getCircumference(){return n0(this.options.circumference)}_getRotationExtents(){let t=nW,e=-nW;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)&&this.chart.getDatasetMeta(i).type===this._type){let r=this.chart.getDatasetMeta(i).controller,n=r._getRotation(),s=r._getCircumference();t=Math.min(t,n),e=Math.max(e,n+s)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:i}=e,r=this._cachedMeta,n=r.data,s=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,a=Math.max((Math.min(i.width,i.height)-s)/2,0),o=Math.min(nM(this.options.cutout,a),1),l=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:c,ratioY:u,offsetX:f,offsetY:p}=function(t,e,i){let r=1,n=1,s=0,a=0;if(e<nW){let o=t+e,l=Math.cos(t),h=Math.sin(t),d=Math.cos(o),c=Math.sin(o),u=(e,r,n)=>n9(e,t,o,!0)?1:Math.max(r,r*i,n,n*i),f=(e,r,n)=>n9(e,t,o,!0)?-1:Math.min(r,r*i,n,n*i),p=u(0,l,d),g=u(nY,h,c),m=f(nV,l,d),x=f(nV+nY,h,c);r=(p-m)/2,n=(g-x)/2,s=-(p+m)/2,a=-(g+x)/2}return{ratioX:r,ratioY:n,offsetX:s,offsetY:a}}(d,h,o),g=(i.width-s)/c,m=(i.height-s)/u,x=nk(this.options.radius,Math.max(Math.min(g,m)/2,0)),b=Math.max(x*o,0),y=(x-b)/this._getVisibleDatasetWeightTotal();this.offsetX=f*x,this.offsetY=p*x,r.total=this.calculateTotal(),this.outerRadius=x-y*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-y*l,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){let i=this.options,r=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===r._parsed[t]||r.data[t].hidden?0:this.calculateCircumference(r._parsed[t]*n/nW)}updateElements(t,e,i,r){let n;let s="reset"===r,a=this.chart,o=a.chartArea,l=a.options,h=l.animation,d=(o.left+o.right)/2,c=(o.top+o.bottom)/2,u=s&&h.animateScale,f=u?0:this.innerRadius,p=u?0:this.outerRadius,{sharedOptions:g,includeOptions:m}=this._getSharedOptions(e,r),x=this._getRotation();for(n=0;n<e;++n)x+=this._circumference(n,s);for(n=e;n<e+i;++n){let e=this._circumference(n,s),i=t[n],a={x:d+this.offsetX,y:c+this.offsetY,startAngle:x,endAngle:x+e,circumference:e,outerRadius:p,innerRadius:f};m&&(a.options=g||this.resolveDataElementOptions(n,i.active?"active":r)),x+=e,this.updateElement(i,n,a,r)}}calculateTotal(){let t;let e=this._cachedMeta,i=e.data,r=0;for(t=0;t<i.length;t++){let n=e._parsed[t];null!==n&&!isNaN(n)&&this.chart.getDataVisibility(t)&&!i[t].hidden&&(r+=Math.abs(n))}return r}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?nW*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,r=i.data.labels||[],n=sw(e._parsed[t],i.options.locale);return{label:r[t]||"",value:n}}getMaxBorderWidth(t){let e,i,r,n,s,a=0,o=this.chart;if(!t){for(e=0,i=o.data.datasets.length;e<i;++e)if(o.isDatasetVisible(e)){t=(r=o.getDatasetMeta(e)).data,n=r.controller;break}}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(s=n.resolveDataElementOptions(e)).borderAlign&&(a=Math.max(a,s.borderWidth||0,s.hoverBorderWidth||0));return a}getMaxOffset(t){let e=0;for(let i=0,r=t.length;i<r;++i){let t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(nw(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}class aJ extends aH{static id="polarArea";static defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i,color:r}}=t.legend.options;return e.labels.map((e,n)=>{let s=t.getDatasetMeta(0),a=s.controller.getStyle(n);return{text:e,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,r=i.data.labels||[],n=sw(e._parsed[t].r,i.options.locale);return{label:r[t]||"",value:n}}parseObjectData(t,e,i,r){return s7.bind(this)(t,e,i,r)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((t,i)=>{let r=this.getParsed(i).r;!isNaN(r)&&this.chart.getDataVisibility(i)&&(r<e.min&&(e.min=r),r>e.max&&(e.max=r))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,i=t.options,r=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(r/2,0),s=Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0),a=(n-s)/t.getVisibleDatasetCount();this.outerRadius=n-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,r){let n;let s="reset"===r,a=this.chart,o=a.options,l=o.animation,h=this._cachedMeta.rScale,d=h.xCenter,c=h.yCenter,u=h.getIndexAngle(0)-.5*nV,f=u,p=360/this.countVisibleElements();for(n=0;n<e;++n)f+=this._computeAngle(n,r,p);for(n=e;n<e+i;n++){let e=t[n],i=f,o=f+this._computeAngle(n,r,p),g=a.getDataVisibility(n)?h.getDistanceFromCenterForValue(this.getParsed(n).r):0;f=o,s&&(l.animateScale&&(g=0),l.animateRotate&&(i=o=u));let m={x:d,y:c,innerRadius:0,outerRadius:g,startAngle:i,endAngle:o,options:this.resolveDataElementOptions(n,e.active?"active":r)};this.updateElement(e,n,m,r)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?n0(this.resolveDataElementOptions(t,e).angle||i):0}}var aZ=/*#__PURE__*/Object.freeze({__proto__:null,BarController:class extends aH{static id="bar";static defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}};static overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};parsePrimitiveData(t,e,i,r){return aX(t,e,i,r)}parseArrayData(t,e,i,r){return aX(t,e,i,r)}parseObjectData(t,e,i,r){let n,s,a,o;let{iScale:l,vScale:h}=t,{xAxisKey:d="x",yAxisKey:c="y"}=this._parsing,u="x"===l.axis?d:c,f="x"===h.axis?d:c,p=[];for(n=i,s=i+r;n<s;++n)o=e[n],(a={})[l.axis]=l.parse(nL(o,u),n),p.push(aY(nL(o,f),a,h,n));return p}updateRangeFromParsed(t,e,i,r){super.updateRangeFromParsed(t,e,i,r);let n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:r}=e,n=this.getParsed(t),s=n._custom,a=aU(s)?"["+s.start+", "+s.end+"]":""+r.getLabelForValue(n[r.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,r){let n="reset"===r,{index:s,_cachedMeta:{vScale:a}}=this,o=a.getBasePixel(),l=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:c}=this._getSharedOptions(e,r);for(let u=e;u<e+i;u++){let e=this.getParsed(u),i=n||nx(e[a.axis])?{base:o,head:o}:this._calculateBarValuePixels(u),f=this._calculateBarIndexPixels(u,h),p=(e._stacks||{})[a.axis],g={horizontal:l,base:i.base,enableBorderRadius:!p||aU(e._custom)||s===p._top||s===p._bottom,x:l?i.head:f.center,y:l?f.center:i.head,height:l?f.size:Math.abs(i.size),width:l?Math.abs(i.size):f.size};c&&(g.options=d||this.resolveDataElementOptions(u,t[u].active?"active":r));let m=g.options||t[u].options;!function(t,e,i,r){let n,s,a,o,l,h=e.borderSkipped,d={};if(!h){t.borderSkipped=d;return}if(!0===h){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:c,end:u,reverse:f,top:p,bottom:g}=(t.horizontal?(n=t.base>t.x,s="left",a="right"):(n=t.base<t.y,s="bottom",a="top"),n?(o="end",l="start"):(o="start",l="end"),{start:s,end:a,reverse:n,top:o,bottom:l});"middle"===h&&i&&(t.enableBorderRadius=!0,(i._top||0)===r?h=p:(i._bottom||0)===r?h=g:(d[aq(g,c,u,f)]=!0,h=p)),d[aq(h,c,u,f)]=!0,t.borderSkipped=d}(g,m,p,s),function(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}(g,m,h.ratio),this.updateElement(t[u],u,g,r)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,r=i.getMatchingVisibleMetas(this._type).filter(t=>t.controller.options.grouped),n=i.options.stacked,s=[],a=t=>{let i=t.controller.getParsed(e),r=i&&i[t.vScale.axis];if(nx(r)||isNaN(r))return!0};for(let i of r)if(!(void 0!==e&&a(i))&&((!1===n||-1===s.indexOf(i.stack)||void 0===n&&void 0===i.stack)&&s.push(i.stack),i.index===t))break;return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){let r=this._getStacks(t,i),n=void 0!==e?r.indexOf(e):-1;return -1===n?r.length-1:n}_getRuler(){let t,e;let i=this.options,r=this._cachedMeta,n=r.iScale,s=[];for(t=0,e=r.data.length;t<e;++t)s.push(n.getPixelForValue(this.getParsed(t)[n.axis],t));let a=i.barThickness,o=a||function(t){let e,i,r,n;let s=t.iScale,a=function(t,e){if(!t._cache.$bar){let i=t.getMatchingVisibleMetas(e),r=[];for(let e=0,n=i.length;e<n;e++)r=r.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=sn(r.sort((t,e)=>t-e))}return t._cache.$bar}(s,t.type),o=s._length,l=()=>{32767!==r&&-32768!==r&&(nF(n)&&(o=Math.min(o,Math.abs(r-n)||o)),n=r)};for(e=0,i=a.length;e<i;++e)r=s.getPixelForValue(a[e]),l();for(e=0,n=void 0,i=s.ticks.length;e<i;++e)r=s.getPixelForTick(e),l();return o}(r);return{min:o,pixels:s,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:i.grouped,ratio:a?1:i.categoryPercentage*i.barPercentage}}_calculateBarValuePixels(t){let e,i;let{_cachedMeta:{vScale:r,_stacked:n,index:s},options:{base:a,minBarLength:o}}=this,l=a||0,h=this.getParsed(t),d=h._custom,c=aU(d),u=h[r.axis],f=0,p=n?this.applyStack(r,h,n):u;p!==u&&(f=p-u,p=u),c&&(u=d.barStart,p=d.barEnd-d.barStart,0!==u&&nK(u)!==nK(d.barEnd)&&(f=0),f+=u);let g=nx(a)||c?f:a,m=r.getPixelForValue(g);if(Math.abs(i=(e=this.chart.getDataVisibility(t)?r.getPixelForValue(f+p):m)-m)<o){var x;i=(0!==(x=i)?nK(x):(r.isHorizontal()?1:-1)*(r.min>=l?1:-1))*o,u===l&&(m-=i/2);let t=r.getPixelForDecimal(0),a=r.getPixelForDecimal(1);e=(m=Math.max(Math.min(m,Math.max(t,a)),Math.min(t,a)))+i,n&&!c&&(h._stacks[r.axis]._visualValues[s]=r.getValueForPixel(e)-r.getValueForPixel(m))}if(m===r.getPixelForValue(l)){let t=nK(i)*r.getLineWidthForValue(l)/2;m+=t,i-=t}return{size:i,base:m,head:e,center:e+i/2}}_calculateBarIndexPixels(t,e){let i,r;let n=e.scale,s=this.options,a=s.skipNull,o=nw(s.maxBarThickness,1/0);if(e.grouped){let n=a?this._getStackCount(t):e.stackCount,l="flex"===s.barThickness?function(t,e,i,r){let n=e.pixels,s=n[t],a=t>0?n[t-1]:null,o=t<n.length-1?n[t+1]:null,l=i.categoryPercentage;null===a&&(a=s-(null===o?e.end-e.start:o-s)),null===o&&(o=s+s-a);let h=s-(s-Math.min(a,o))/2*l,d=Math.abs(o-a)/2*l;return{chunk:d/r,ratio:i.barPercentage,start:h}}(t,e,s,n):function(t,e,i,r){let n,s;let a=i.barThickness;return nx(a)?(n=e.min*i.categoryPercentage,s=i.barPercentage):(n=a*r,s=1),{chunk:n/r,ratio:s,start:e.pixels[t]-n/2}}(t,e,s,n),h=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0);i=l.start+l.chunk*h+l.chunk/2,r=Math.min(o,l.chunk*l.ratio)}else i=n.getPixelForValue(this.getParsed(t)[n.axis],t),r=Math.min(o,e.min*e.ratio);return{base:i-r/2,head:i+r/2,center:i,size:r}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,r=i.length,n=0;for(;n<r;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}},BubbleController:class extends aH{static id="bubble";static defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}};static overrides={scales:{x:{type:"linear"},y:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,r){let n=super.parsePrimitiveData(t,e,i,r);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,r){let n=super.parseArrayData(t,e,i,r);for(let t=0;t<n.length;t++){let r=e[i+t];n[t]._custom=nw(r[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,r){let n=super.parseObjectData(t,e,i,r);for(let t=0;t<n.length;t++){let r=e[i+t];n[t]._custom=nw(r&&r.r&&+r.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:n}=e,s=this.getParsed(t),a=r.getLabelForValue(s.x),o=n.getLabelForValue(s.y),l=s._custom;return{label:i[t]||"",value:"("+a+", "+o+(l?", "+l:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,r){let n="reset"===r,{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:o,includeOptions:l}=this._getSharedOptions(e,r),h=s.axis,d=a.axis;for(let c=e;c<e+i;c++){let e=t[c],i=!n&&this.getParsed(c),u={},f=u[h]=n?s.getPixelForDecimal(.5):s.getPixelForValue(i[h]),p=u[d]=n?a.getBasePixel():a.getPixelForValue(i[d]);u.skip=isNaN(f)||isNaN(p),l&&(u.options=o||this.resolveDataElementOptions(c,e.active?"active":r),n&&(u.options.radius=0)),this.updateElement(e,c,u,r)}}resolveDataElementOptions(t,e){let i=this.getParsed(t),r=super.resolveDataElementOptions(t,e);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let n=r.radius;return"active"!==e&&(r.radius=0),r.radius+=nw(i&&i._custom,n),r}},DoughnutController:aG,LineController:class extends aH{static id="line";static defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:r=[],_dataset:n}=e,s=this.chart._animationsDisabled,{start:a,count:o}=sd(e,r,s);this._drawStart=a,this._drawCount=o,sc(e)&&(a=0,o=r.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=r;let l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:l},t),this.updateElements(r,a,o,t)}updateElements(t,e,i,r){let n="reset"===r,{iScale:s,vScale:a,_stacked:o,_dataset:l}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,r),c=s.axis,u=a.axis,{spanGaps:f,segment:p}=this.options,g=nZ(f)?f:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||n||"none"===r,x=e+i,b=t.length,y=e>0&&this.getParsed(e-1);for(let i=0;i<b;++i){let f=t[i],b=m?f:{};if(i<e||i>=x){b.skip=!0;continue}let v=this.getParsed(i),_=nx(v[u]),w=b[c]=s.getPixelForValue(v[c],i),M=b[u]=n||_?a.getBasePixel():a.getPixelForValue(o?this.applyStack(a,v,o):v[u],i);b.skip=isNaN(w)||isNaN(M)||_,b.stop=i>0&&Math.abs(v[c]-y[c])>g,p&&(b.parsed=v,b.raw=l.data[i]),d&&(b.options=h||this.resolveDataElementOptions(i,f.active?"active":r)),m||this.updateElement(f,i,b,r),y=v}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,r=t.data||[];if(!r.length)return i;let n=r[0].size(this.resolveDataElementOptions(0)),s=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(i,n,s)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}},PieController:class extends aG{static id="pie";static defaults={cutout:0,rotation:0,circumference:360,radius:"100%"}},PolarAreaController:aJ,RadarController:class extends aH{static id="radar";static defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}};static overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};getLabelAndValue(t){let e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,r){return s7.bind(this)(t,e,i,r)}update(t){let e=this._cachedMeta,i=e.dataset,r=e.data||[],n=e.iScale.getLabels();if(i.points=r,"resize"!==t){let e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);let s={_loop:!0,_fullLoop:n.length===r.length,options:e};this.updateElement(i,void 0,s,t)}this.updateElements(r,0,r.length,t)}updateElements(t,e,i,r){let n=this._cachedMeta.rScale,s="reset"===r;for(let a=e;a<e+i;a++){let e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":r),o=n.getPointPositionForValue(a,this.getParsed(a).r),l=s?n.xCenter:o.x,h=s?n.yCenter:o.y,d={x:l,y:h,angle:o.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,a,d,r)}}},ScatterController:class extends aH{static id="scatter";static defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1};static overrides={interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}};getLabelAndValue(t){let e=this._cachedMeta,i=this.chart.data.labels||[],{xScale:r,yScale:n}=e,s=this.getParsed(t),a=r.getLabelForValue(s.x),o=n.getLabelForValue(s.y);return{label:i[t]||"",value:"("+a+", "+o+")"}}update(t){let e=this._cachedMeta,{data:i=[]}=e,r=this.chart._animationsDisabled,{start:n,count:s}=sd(e,i,r);if(this._drawStart=n,this._drawCount=s,sc(e)&&(n=0,s=i.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:n,_dataset:s}=e;n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!s._decimated,n.points=i;let a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(n,void 0,{animated:!r,options:a},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(i,n,s,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,i,r){let n="reset"===r,{iScale:s,vScale:a,_stacked:o,_dataset:l}=this._cachedMeta,h=this.resolveDataElementOptions(e,r),d=this.getSharedOptions(h),c=this.includeOptions(r,d),u=s.axis,f=a.axis,{spanGaps:p,segment:g}=this.options,m=nZ(p)?p:Number.POSITIVE_INFINITY,x=this.chart._animationsDisabled||n||"none"===r,b=e>0&&this.getParsed(e-1);for(let h=e;h<e+i;++h){let e=t[h],i=this.getParsed(h),p=x?e:{},y=nx(i[f]),v=p[u]=s.getPixelForValue(i[u],h),_=p[f]=n||y?a.getBasePixel():a.getPixelForValue(o?this.applyStack(a,i,o):i[f],h);p.skip=isNaN(v)||isNaN(_)||y,p.stop=h>0&&Math.abs(i[u]-b[u])>m,g&&(p.parsed=i,p.raw=l.data[h]),c&&(p.options=d||this.resolveDataElementOptions(h,e.active?"active":r)),x||this.updateElement(e,h,p,r),b=i}this.updateSharedOptions(d,r,h)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}let i=t.dataset,r=i.options&&i.options.borderWidth||0;if(!e.length)return r;let n=e[0].size(this.resolveDataElementOptions(0)),s=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(r,n,s)/2}}});/**
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
init(){}formats(){return aQ()}parse(){return aQ()}format(){return aQ()}add(){return aQ()}diff(){return aQ()}startOf(){return aQ()}endOf(){return aQ()}}var a1={_date:a0};function a2(t,e,i,r,n){let s=t.getSortedVisibleDatasetMetas(),a=i[e];for(let t=0,i=s.length;t<i;++t){let{index:i,data:o}=s[t],{lo:l,hi:h}=function(t,e,i,r){let{controller:n,data:s,_sorted:a}=t,o=n._cachedMeta.iScale;if(o&&e===o.axis&&"r"!==e&&a&&s.length){let t=o._reversePixels?se:st;if(!r)return t(s,e,i);if(n._sharedOptions){let r=s[0],n="function"==typeof r.getRange&&r.getRange(e);if(n){let r=t(s,e,i-n),a=t(s,e,i+n);return{lo:r.lo,hi:a.hi}}}}return{lo:0,hi:s.length-1}}(s[t],e,a,n);for(let t=l;t<=h;++t){let e=o[t];e.skip||r(e,i,t)}}}function a5(t,e,i,r,n){let s=[];return(n||t.isPointInArea(e))&&a2(t,i,e,function(i,a,o){(n||sL(i,t.chartArea,0))&&i.inRange(e.x,e.y,r)&&s.push({element:i,datasetIndex:a,index:o})},!0),s}function a3(t,e,i,r,n,s){let a;return s||t.isPointInArea(e)?"r"!==i||r?function(t,e,i,r,n,s){let a=[],o=function(t){let e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,r){let n=e?Math.abs(t.x-r.x):0,s=i?Math.abs(t.y-r.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(s,2))}}(i),l=Number.POSITIVE_INFINITY;return a2(t,i,e,function(i,h,d){let c=i.inRange(e.x,e.y,n);if(r&&!c)return;let u=i.getCenterPoint(n),f=!!s||t.isPointInArea(u);if(!f&&!c)return;let p=o(e,u);p<l?(a=[{element:i,datasetIndex:h,index:d}],l=p):p===l&&a.push({element:i,datasetIndex:h,index:d})}),a}(t,e,i,r,n,s):(a=[],a2(t,i,e,function(t,i,r){let{startAngle:s,endAngle:o}=t.getProps(["startAngle","endAngle"],n),{angle:l}=n2(t,{x:e.x,y:e.y});n9(l,s,o)&&a.push({element:t,datasetIndex:i,index:r})}),a):[]}function a6(t,e,i,r,n){let s=[],a="x"===i?"inXRange":"inYRange",o=!1;return(a2(t,i,e,(t,r,l)=>{t[a](e[i],n)&&(s.push({element:t,datasetIndex:r,index:l}),o=o||t.inRange(e.x,e.y,n))}),r&&!o)?[]:s}var a9={modes:{index(t,e,i,r){let n=ac(e,t),s=i.axis||"x",a=i.includeInvisible||!1,o=i.intersect?a5(t,n,s,r,a):a3(t,n,s,!1,r,a),l=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{let e=o[0].index,i=t.data[e];i&&!i.skip&&l.push({element:i,datasetIndex:t.index,index:e})}),l):[]},dataset(t,e,i,r){let n=ac(e,t),s=i.axis||"xy",a=i.includeInvisible||!1,o=i.intersect?a5(t,n,s,r,a):a3(t,n,s,!1,r,a);if(o.length>0){let e=o[0].datasetIndex,i=t.getDatasetMeta(e).data;o=[];for(let t=0;t<i.length;++t)o.push({element:i[t],datasetIndex:e,index:t})}return o},point(t,e,i,r){let n=ac(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return a5(t,n,s,r,a)},nearest(t,e,i,r){let n=ac(e,t),s=i.axis||"xy",a=i.includeInvisible||!1;return a3(t,n,s,i.intersect,r,a)},x(t,e,i,r){let n=ac(e,t);return a6(t,n,"x",i.intersect,r)},y(t,e,i,r){let n=ac(e,t);return a6(t,n,"y",i.intersect,r)}}};const a4=["left","top","right","bottom"];function a8(t,e){return t.filter(t=>t.pos===e)}function a7(t,e){return t.filter(t=>-1===a4.indexOf(t.pos)&&t.box.axis===e)}function ot(t,e){return t.sort((t,i)=>{let r=e?i:t,n=e?t:i;return r.weight===n.weight?r.index-n.index:r.weight-n.weight})}function oe(t,e,i,r){return Math.max(t[i],e[i])+Math.max(t[r],e[r])}function oi(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function or(t,e,i,r){let n,s,a,o,l,h;let d=[];for(n=0,s=t.length,l=0;n<s;++n){(o=(a=t[n]).box).update(a.width||e.w,a.height||e.h,function(t,e){let i=e.maxPadding;return function(t){let r={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{r[t]=Math.max(e[t],i[t])}),r}(t?["left","right"]:["top","bottom"])}(a.horizontal,e));let{same:s,other:c}=function(t,e,i,r){let{pos:n,box:s}=i,a=t.maxPadding;if(!ny(n)){i.size&&(t[n]-=i.size);let e=r[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?s.height:s.width),i.size=e.size/e.count,t[n]+=i.size}s.getPadding&&oi(a,s.getPadding());let o=Math.max(0,e.outerWidth-oe(a,t,"left","right")),l=Math.max(0,e.outerHeight-oe(a,t,"top","bottom")),h=o!==t.w,d=l!==t.h;return t.w=o,t.h=l,i.horizontal?{same:h,other:d}:{same:d,other:h}}(e,i,a,r);l|=s&&d.length,h=h||c,o.fullSize||d.push(a)}return l&&or(d,e,i,r)||h}function on(t,e,i,r,n){t.top=i,t.left=e,t.right=e+r,t.bottom=i+n,t.width=r,t.height=n}function os(t,e,i,r){let n=i.padding,{x:s,y:a}=e;for(let o of t){let t=o.box,l=r[o.stack]||{count:1,placed:0,weight:1},h=o.stackWeight/l.weight||1;if(o.horizontal){let r=e.w*h,s=l.size||t.height;nF(l.start)&&(a=l.start),t.fullSize?on(t,n.left,a,i.outerWidth-n.right-n.left,s):on(t,e.left+l.placed,a,r,s),l.start=a,l.placed+=r,a=t.bottom}else{let r=e.h*h,a=l.size||t.width;nF(l.start)&&(s=l.start),t.fullSize?on(t,s,n.top,a,i.outerHeight-n.bottom-n.top):on(t,s,e.top+l.placed,a,r),l.start=s,l.placed+=r,s=t.right}}e.x=s,e.y=a}var oa={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){let i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,r){if(!t)return;let n=sq(t.options.layout.padding),s=Math.max(e-n.width,0),a=Math.max(i-n.height,0),o=function(t){let e=function(t){let e,i,r,n,s,a;let o=[];for(e=0,i=(t||[]).length;e<i;++e)r=t[e],({position:n,options:{stack:s,stackWeight:a=1}}=r),o.push({index:e,box:r,pos:n,horizontal:r.isHorizontal(),weight:r.weight,stack:s&&n+s,stackWeight:a});return o}(t),i=ot(e.filter(t=>t.box.fullSize),!0),r=ot(a8(e,"left"),!0),n=ot(a8(e,"right")),s=ot(a8(e,"top"),!0),a=ot(a8(e,"bottom")),o=a7(e,"x"),l=a7(e,"y");return{fullSize:i,leftAndTop:r.concat(s),rightAndBottom:n.concat(l).concat(a).concat(o),chartArea:a8(e,"chartArea"),vertical:r.concat(n).concat(l),horizontal:s.concat(a).concat(o)}}(t.boxes),l=o.vertical,h=o.horizontal;nP(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});let d=l.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,c=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:s,availableHeight:a,vBoxMaxWidth:s/2/d,hBoxMaxHeight:a/2}),u=Object.assign({},n);oi(u,sq(r));let f=Object.assign({maxPadding:u,w:s,h:a,x:n.left,y:n.top},n),p=function(t,e){let i,r,n;let s=function(t){let e={};for(let i of t){let{stack:t,pos:r,stackWeight:n}=i;if(!t||!a4.includes(r))continue;let s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=n}return e}(t),{vBoxMaxWidth:a,hBoxMaxHeight:o}=e;for(i=0,r=t.length;i<r;++i){n=t[i];let{fullSize:r}=n.box,l=s[n.stack],h=l&&n.stackWeight/l.weight;n.horizontal?(n.width=h?h*a:r&&e.availableWidth,n.height=o):(n.width=a,n.height=h?h*o:r&&e.availableHeight)}return s}(l.concat(h),c);or(o.fullSize,f,c,p),or(l,f,c,p),or(h,f,c,p)&&or(l,f,c,p),function(t){let e=t.maxPadding;function i(i){let r=Math.max(e[i]-t[i],0);return t[i]+=r,r}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(f),os(o.leftAndTop,f,c,p),f.x+=f.w,f.y+=f.h,os(o.rightAndBottom,f,c,p),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},nP(o.chartArea,e=>{let i=e.box;Object.assign(i,t.chartArea),i.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class oo{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,r){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,r?Math.floor(e/r):i)}}isAttached(t){return!0}updateConfig(t){}}class ol extends oo{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const oh="$chartjs",od={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},oc=t=>null===t||""===t,ou=!!ap&&{passive:!0};function of(t,e,i){t.canvas.removeEventListener(e,i,ou)}function op(t,e){for(let i of t)if(i===e||i.contains(e))return!0}function og(t,e,i){let r=t.canvas,n=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||op(i.addedNodes,r))&&!op(i.removedNodes,r);e&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}function om(t,e,i){let r=t.canvas,n=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||op(i.removedNodes,r))&&!op(i.addedNodes,r);e&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}const ox=new Map;let ob=0;function oy(){let t=window.devicePixelRatio;t!==ob&&(ob=t,ox.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function ov(t,e,i){let r=t.canvas,n=r&&as(r);if(!n)return;let s=sa((t,e)=>{let r=n.clientWidth;i(t,e),r<n.clientWidth&&i()},window),a=new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,r=e.contentRect.height;(0!==i||0!==r)&&s(i,r)});return a.observe(n),ox.size||window.addEventListener("resize",oy),ox.set(t,s),a}function o_(t,e,i){i&&i.disconnect(),"resize"===e&&(ox.delete(t),ox.size||window.removeEventListener("resize",oy))}function ow(t,e,i){let r=t.canvas,n=sa(e=>{null!==t.ctx&&i(function(t,e){let i=od[t.type]||t.type,{x:r,y:n}=ac(t,e);return{type:i,chart:e,native:t,x:void 0!==r?r:null,y:void 0!==n?n:null}}(e,t))},t);return!function(t,e,i){t.addEventListener(e,i,ou)}(r,e,n),n}class oM extends oo{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(!function(t,e){let i=t.style,r=t.getAttribute("height"),n=t.getAttribute("width");if(t[oh]={initial:{height:r,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",oc(n)){let e=ag(t,"width");void 0!==e&&(t.width=e)}if(oc(r)){if(""===t.style.height)t.height=t.width/(e||2);else{let e=ag(t,"height");void 0!==e&&(t.height=e)}}}(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[oh])return!1;let i=e[oh].initial;["height","width"].forEach(t=>{let r=i[t];nx(r)?e.removeAttribute(t):e.setAttribute(t,r)});let r=i.style||{};return Object.keys(r).forEach(t=>{e.style[t]=r[t]}),e.width=e.width,delete e[oh],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let r=t.$proxies||(t.$proxies={}),n={attach:og,detach:om,resize:ov}[e]||ow;r[e]=n(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),r=i[e];if(!r)return;let n={attach:o_,detach:o_,resize:o_}[e]||of;n(t,e,r),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,r){return(// eslint-disable-next-line complexity
function(t,e,i,r){let n=ao(t),s=ah(n,"margin"),a=aa(n.maxWidth,t,"clientWidth")||nB,o=aa(n.maxHeight,t,"clientHeight")||nB,l=function(t,e,i){let r,n;if(void 0===e||void 0===i){let s=as(t);if(s){let t=s.getBoundingClientRect(),a=ao(s),o=ah(a,"border","width"),l=ah(a,"padding");// this is the border box of the container
e=t.width-l.width-o.width,i=t.height-l.height-o.height,r=aa(a.maxWidth,s,"clientWidth"),n=aa(a.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:r||nB,maxHeight:n||nB}}(t,e,i),{width:h,height:d}=l;if("content-box"===n.boxSizing){let t=ah(n,"border","width"),e=ah(n,"padding");h-=e.width+t.width,d-=e.height+t.height}h=Math.max(0,h-s.width),d=Math.max(0,r?h/r:d-s.height),h=au(Math.min(h,a,l.maxWidth)),d=au(Math.min(d,o,l.maxHeight)),h&&!d&&// If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
(d=au(h/2));let c=void 0!==e||void 0!==i;return c&&r&&l.height&&d>l.height&&(h=au(Math.floor((d=l.height)*r))),{width:h,height:d}}(t,e,i,r))}isAttached(t){let e=as(t);return!!(e&&e.isConnected)}}class ok{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return nZ(this.x)&&nZ(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let r={};return t.forEach(t=>{r[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),r}}function oS(t,e,i,r,n){let s,a,o;let l=nw(r,0),h=Math.min(nw(n,t.length),t.length),d=0;for(i=Math.ceil(i),n&&(i=(s=n-r)/Math.floor(s/i)),o=l;o<0;)o=Math.round(l+ ++d*i);for(a=Math.max(l,0);a<h;a++)a===o&&(e.push(t[a]),o=Math.round(l+ ++d*i))}const oP=t=>"left"===t?"right":"right"===t?"left":t,oC=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i,oD=(t,e)=>Math.min(e||t,t);function oA(t,e){let i=[],r=t.length/e,n=t.length,s=0;for(;s<n;s+=r)i.push(t[Math.floor(s)]);return i}function oO(t){return t.drawTicks?t.tickLength:0}function oT(t,e){if(!t.display)return 0;let i=sK(t.font,e),r=sq(t.padding),n=nb(t.text)?t.text.length:1;return n*i.lineHeight+r.height}class oE extends ok{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:r}=this;return t=n_(t,Number.POSITIVE_INFINITY),e=n_(e,Number.NEGATIVE_INFINITY),i=n_(i,Number.POSITIVE_INFINITY),r=n_(r,Number.NEGATIVE_INFINITY),{min:n_(t,i),max:n_(e,r),minDefined:nv(t),maxDefined:nv(e)}}getMinMax(t){let e,{min:i,max:r,minDefined:n,maxDefined:s}=this.getUserBounds();if(n&&s)return{min:i,max:r};let a=this.getMatchingVisibleMetas();for(let o=0,l=a.length;o<l;++o)e=a[o].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),s||(r=Math.max(r,e.max));return i=s&&i>r?r:i,r=n&&i>r?i:r,{min:n_(i,n_(r,i)),max:n_(r,n_(i,r))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){let e=this._labelItems||(this._labelItems=this._computeLabelItems(t));return e}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){nS(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:r,grace:n,ticks:s}=this.options,a=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */function(t,e,i){let{min:r,max:n}=t,s=nk(e,(n-r)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(r,-Math.abs(s)),max:a(n,s)}}(this,n,r),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let o=a<this.ticks.length;this._convertTicksToLabels(o?oA(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||"auto"===s.source)&&(this.ticks=function(t,e){let i=t.options.ticks,r=function(t){let e=t.options.offset,i=t._tickSize(),r=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(r,n))}(t),n=Math.min(i.maxTicksLimit||r,r),s=i.major.enabled?function(t){let e,i;let r=[];for(e=0,i=t.length;e<i;e++)t[e].major&&r.push(e);return r}(e):[],a=s.length,o=s[0],l=s[a-1],h=[];if(a>n)return function(t,e,i,r){let n,s=0,a=i[0];for(n=0,r=Math.ceil(r);n<t.length;n++)n===a&&(e.push(t[n]),a=i[++s*r])}(e,h,s,a/n),h;let d=function(t,e,i){let r=function(t){let e,i;let r=t.length;if(r<2)return!1;for(i=t[0],e=1;e<r;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),n=e.length/i;if(!r)return Math.max(n,1);let s=/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */function(t){let e;let i=[],r=Math.sqrt(t);for(e=1;e<r;e++)t%e==0&&(i.push(e),i.push(t/e));return r===(0|r)&&i.push(r),i.sort((t,e)=>t-e).pop(),i}(r);for(let t=0,e=s.length-1;t<e;t++){let e=s[t];if(e>n)return e}return Math.max(n,1)}(s,e,n);if(a>0){let t,i;let r=a>1?Math.round((l-o)/(a-1)):null;for(oS(e,h,d,nx(r)?0:o-r,o),t=0,i=a-1;t<i;t++)oS(e,h,d,s[t],s[t+1]);return oS(e,h,d,l,nx(r)?e.length:l+r),h}return oS(e,h,d),h}(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),o&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){nS(this.options.afterUpdate,[this])}beforeSetDimensions(){nS(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){nS(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),nS(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){nS(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e,i,r;let n=this.options.ticks;for(e=0,i=t.length;e<i;e++)(r=t[e]).label=nS(n.callback,[r.value,e,t],this)}afterTickToLabelConversion(){nS(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){nS(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t,e,i;let r=this.options,n=r.ticks,s=oD(this.ticks.length,r.ticks.maxTicksLimit),a=n.minRotation||0,o=n.maxRotation,l=a;if(!this._isVisible()||!n.display||a>=o||s<=1||!this.isHorizontal()){this.labelRotation=a;return}let h=this._getLabelSizes(),d=h.widest.width,c=h.highest.height,u=n4(this.chart.width-d,0,this.maxWidth);d+6>(t=r.offset?this.maxWidth/s:u/(s-1))&&(t=u/(s-(r.offset?.5:1)),e=this.maxHeight-oO(r.grid)-n.padding-oT(r.title,this.chart.options.font),i=Math.sqrt(d*d+c*c),l=Math.max(a,Math.min(o,l=Math.min(Math.asin(n4((h.highest.height+6)/t,-1,1)),Math.asin(n4(e/i,-1,1))-Math.asin(n4(c/i,-1,1)))*(180/nV)))),this.labelRotation=l}afterCalculateLabelRotation(){nS(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){nS(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:r,grid:n}}=this,s=this._isVisible(),a=this.isHorizontal();if(s){let s=oT(r,e.options.font);if(a?(t.width=this.maxWidth,t.height=oO(n)+s):(t.height=this.maxHeight,t.width=oO(n)+s),i.display&&this.ticks.length){let{first:e,last:r,widest:n,highest:s}=this._getLabelSizes(),o=2*i.padding,l=n0(this.labelRotation),h=Math.cos(l),d=Math.sin(l);if(a){let e=i.mirror?0:d*n.width+h*s.height;t.height=Math.min(this.maxHeight,t.height+e+o)}else{let e=i.mirror?0:h*n.width+d*s.height;t.width=Math.min(this.maxWidth,t.width+e+o)}this._calculatePadding(e,r,d,h)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,r){let{ticks:{align:n,padding:s},position:a}=this.options,o=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){let a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),d=0,c=0;o?l?(d=r*t.width,c=i*e.height):(d=i*t.height,c=r*e.width):"start"===n?c=e.width:"end"===n?d=t.width:"inner"!==n&&(d=t.width/2,c=e.width/2),this.paddingLeft=Math.max((d-a+s)*this.width/(this.width-a),0),this.paddingRight=Math.max((c-h+s)*this.width/(this.width-h),0)}else{let i=e.height/2,r=t.height/2;"start"===n?(i=0,r=t.height):"end"===n&&(i=e.height,r=0),this.paddingTop=i+s,this.paddingBottom=r+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){nS(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)nx(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=oA(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let r,n,s,a,o,l,h,d,c,u,f;let{ctx:p,_longestTextCache:g}=this,m=[],x=[],b=Math.floor(e/oD(e,i)),y=0,v=0;for(r=0;r<e;r+=b){if(a=t[r].label,o=this._resolveTickFontOptions(r),p.font=l=o.string,h=g[l]=g[l]||{data:{},gc:[]},d=o.lineHeight,c=u=0,nx(a)||nb(a)){if(nb(a))for(n=0,s=a.length;n<s;++n)nx(f=a[n])||nb(f)||(c=sO(p,h.data,h.gc,c,f),u+=d)}else c=sO(p,h.data,h.gc,c,a),u=d;m.push(c),x.push(u),y=Math.max(c,y),v=Math.max(u,v)}nP(g,t=>{let i;let r=t.gc,n=r.length/2;if(n>e){for(i=0;i<n;++i)delete t.data[r[i]];r.splice(0,n)}});let _=m.indexOf(y),w=x.indexOf(v),M=t=>({width:m[t]||0,height:x[t]||0});return{first:M(0),last:M(e-1),widest:M(_),highest:M(w),widths:m,heights:x}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return n4(this._alignToPixels?sT(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=sJ(this.getContext(),{tick:i,index:t,type:"tick"}))}return this.$context||(this.$context=sJ(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){let t=this.options.ticks,e=n0(this.labelRotation),i=Math.abs(Math.cos(e)),r=Math.abs(Math.sin(e)),n=this._getLabelSizes(),s=t.autoSkipPadding||0,a=n?n.widest.width+s:0,o=n?n.highest.height+s:0;return this.isHorizontal()?o*i>a*r?a/i:o/r:o*r<a*i?o/i:a/r}_isVisible(){let t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e,i,r,n,s,a,o,l,h,d,c,u;let f=this.axis,p=this.chart,g=this.options,{grid:m,position:x,border:b}=g,y=m.offset,v=this.isHorizontal(),_=this.ticks,w=_.length+(y?1:0),M=oO(m),k=[],S=b.setContext(this.getContext()),P=S.display?S.width:0,C=P/2,D=function(t){return sT(p,t,P)};if("top"===x)e=D(this.bottom),a=this.bottom-M,l=e-C,d=D(t.top)+C,u=t.bottom;else if("bottom"===x)e=D(this.top),d=t.top,u=D(t.bottom)-C,a=e+C,l=this.top+M;else if("left"===x)e=D(this.right),s=this.right-M,o=e-C,h=D(t.left)+C,c=t.right;else if("right"===x)e=D(this.left),h=t.left,c=D(t.right)-C,s=e+C,o=this.left+M;else if("x"===f){if("center"===x)e=D((t.top+t.bottom)/2+.5);else if(ny(x)){let t=Object.keys(x)[0],i=x[t];e=D(this.chart.scales[t].getPixelForValue(i))}d=t.top,u=t.bottom,l=(a=e+C)+M}else if("y"===f){if("center"===x)e=D((t.left+t.right)/2);else if(ny(x)){let t=Object.keys(x)[0],i=x[t];e=D(this.chart.scales[t].getPixelForValue(i))}o=(s=e-C)-M,h=t.left,c=t.right}let A=nw(g.ticks.maxTicksLimit,w),O=Math.max(1,Math.ceil(w/A));for(i=0;i<w;i+=O){let t=this.getContext(i),e=m.setContext(t),f=b.setContext(t),g=e.lineWidth,x=e.color,_=f.dash||[],w=f.dashOffset,M=e.tickWidth,S=e.tickColor,P=e.tickBorderDash||[],C=e.tickBorderDashOffset;void 0!==(r=function(t,e,i){let r;let n=t.ticks.length,s=Math.min(e,n-1),a=t._startPixel,o=t._endPixel,l=t.getPixelForTick(s);if(!i||(r=1===n?Math.max(l-a,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(s-1))/2,!((l+=s<e?r:-r)<a-1e-6)&&!(l>o+1e-6)))return l}(this,i,y))&&(n=sT(p,r,g),v?s=o=h=c=n:a=l=d=u=n,k.push({tx1:s,ty1:a,tx2:o,ty2:l,x1:h,y1:d,x2:c,y2:u,width:g,color:x,borderDash:_,borderDashOffset:w,tickWidth:M,tickColor:S,tickBorderDash:P,tickBorderDashOffset:C}))}return this._ticksLength=w,this._borderValue=e,k}_computeLabelItems(t){let e,i,r,n,s,a,o,l,h,d,c;let u=this.axis,f=this.options,{position:p,ticks:g}=f,m=this.isHorizontal(),x=this.ticks,{align:b,crossAlign:y,padding:v,mirror:_}=g,w=oO(f.grid),M=w+v,k=_?-v:M,S=-n0(this.labelRotation),P=[],C="middle";if("top"===p)s=this.bottom-k,a=this._getXAxisLabelAlignment();else if("bottom"===p)s=this.top+k,a=this._getXAxisLabelAlignment();else if("left"===p){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,n=t.x}else if("right"===p){let t=this._getYAxisLabelAlignment(w);a=t.textAlign,n=t.x}else if("x"===u){if("center"===p)s=(t.top+t.bottom)/2+M;else if(ny(p)){let t=Object.keys(p)[0],e=p[t];s=this.chart.scales[t].getPixelForValue(e)+M}a=this._getXAxisLabelAlignment()}else if("y"===u){if("center"===p)n=(t.left+t.right)/2-M;else if(ny(p)){let t=Object.keys(p)[0],e=p[t];n=this.chart.scales[t].getPixelForValue(e)}a=this._getYAxisLabelAlignment(w).textAlign}"y"===u&&("start"===b?C="top":"end"===b&&(C="bottom"));let D=this._getLabelSizes();for(e=0,i=x.length;e<i;++e){let t;r=x[e].label;let u=g.setContext(this.getContext(e));o=this.getPixelForTick(e)+g.labelOffset,h=(l=this._resolveTickFontOptions(e)).lineHeight,d=nb(r)?r.length:1;let f=d/2,b=u.color,v=u.textStrokeColor,w=u.textStrokeWidth,M=a;if(m?(n=o,"inner"===a&&(M=e===i-1?this.options.reverse?"left":"right":0===e?this.options.reverse?"right":"left":"center"),c="top"===p?"near"===y||0!==S?-d*h+h/2:"center"===y?-D.highest.height/2-f*h+h:-D.highest.height+h/2:"near"===y||0!==S?h/2:"center"===y?D.highest.height/2-f*h:D.highest.height-d*h,_&&(c*=-1),0===S||u.showLabelBackdrop||(n+=h/2*Math.sin(S))):(s=o,c=(1-d)*h/2),u.showLabelBackdrop){let i=sq(u.backdropPadding),r=D.heights[e],n=D.widths[e],s=c-i.top,o=0-i.left;switch(C){case"middle":s-=r/2;break;case"bottom":s-=r}switch(a){case"center":o-=n/2;break;case"right":o-=n}t={left:o,top:s,width:n+i.width,height:r+i.height,color:u.backdropColor}}P.push({label:r,font:l,textOffset:c,options:{rotation:S,color:b,strokeColor:v,strokeWidth:w,textAlign:M,textBaseline:C,translation:[n,s],backdrop:t}})}return P}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options,i=-n0(this.labelRotation);if(i)return"top"===t?"left":"right";let r="center";return"start"===e.align?r="left":"end"===e.align?r="right":"inner"===e.align&&(r="inner"),r}_getYAxisLabelAlignment(t){let e,i;let{position:r,ticks:{crossAlign:n,mirror:s,padding:a}}=this.options,o=this._getLabelSizes(),l=t+a,h=o.widest.width;return"left"===r?s?(i=this.right+a,"near"===n?e="left":"center"===n?(e="center",i+=h/2):(e="right",i+=h)):(i=this.right-l,"near"===n?e="right":"center"===n?(e="center",i-=h/2):(e="left",i=this.left)):"right"===r?s?(i=this.left+a,"near"===n?e="right":"center"===n?(e="center",i-=h/2):(e="left",i-=h)):(i=this.left+l,"near"===n?e="left":"center"===n?(e="center",i+=h/2):(e="right",i=this.right)):e="right",{textAlign:e,x:i}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:r,width:n,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,r,n,s),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks,r=i.findIndex(e=>e.value===t);if(r>=0){let t=e.setContext(this.getContext(r));return t.lineWidth}return 0}drawGrid(t){let e,i;let r=this.options.grid,n=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a=(t,e,i)=>{i.width&&i.color&&(n.save(),n.lineWidth=i.width,n.strokeStyle=i.color,n.setLineDash(i.borderDash||[]),n.lineDashOffset=i.borderDashOffset,n.beginPath(),n.moveTo(t.x,t.y),n.lineTo(e.x,e.y),n.stroke(),n.restore())};if(r.display)for(e=0,i=s.length;e<i;++e){let t=s[e];r.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),r.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){let t,e,i,r;let{chart:n,ctx:s,options:{border:a,grid:o}}=this,l=a.setContext(this.getContext()),h=a.display?l.width:0;if(!h)return;let d=o.setContext(this.getContext(0)).lineWidth,c=this._borderValue;this.isHorizontal()?(t=sT(n,this.left,h)-h/2,e=sT(n,this.right,d)+d/2,i=r=c):(i=sT(n,this.top,h)-h/2,r=sT(n,this.bottom,d)+d/2,t=e=c),s.save(),s.lineWidth=l.width,s.strokeStyle=l.color,s.beginPath(),s.moveTo(t,i),s.lineTo(e,r),s.stroke(),s.restore()}drawLabels(t){let e=this.options.ticks;if(!e.display)return;let i=this.ctx,r=this._computeLabelArea();r&&s$(i,r);let n=this.getLabelItems(t);for(let t of n){let e=t.options,r=t.font,n=t.label,s=t.textOffset;sV(i,n,0,s,r,e)}r&&sF(i)}drawTitle(){let t;let{ctx:e,options:{position:i,title:r,reverse:n}}=this;if(!r.display)return;let s=sK(r.font),a=sq(r.padding),o=r.align,l=s.lineHeight/2;"bottom"===i||"center"===i||ny(i)?(l+=a.bottom,nb(r.text)&&(l+=s.lineHeight*(r.text.length-1))):l+=a.top;let{titleX:h,titleY:d,maxWidth:c,rotation:u}=function(t,e,i,r){let n,s,a;let{top:o,left:l,bottom:h,right:d,chart:c}=t,{chartArea:u,scales:f}=c,p=0,g=h-o,m=d-l;if(t.isHorizontal()){if(s=sl(r,l,d),ny(i)){let t=Object.keys(i)[0],r=i[t];a=f[t].getPixelForValue(r)+g-e}else a="center"===i?(u.bottom+u.top)/2+g-e:oC(t,i,e);n=d-l}else{if(ny(i)){let t=Object.keys(i)[0],r=i[t];s=f[t].getPixelForValue(r)-m+e}else s="center"===i?(u.left+u.right)/2-m+e:oC(t,i,e);a=sl(r,h,o),p="left"===i?-nY:nY}return{titleX:s,titleY:a,maxWidth:n,rotation:p}}(this,l,i,o);sV(e,r.text,0,0,s,{color:r.color,maxWidth:c,rotation:u,textAlign:(t=so(o),(n&&"right"!==i||!n&&"right"===i)&&(t=oP(t)),t),textBaseline:"middle",translation:[h,d]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=nw(t.grid&&t.grid.z,-1),r=nw(t.border&&t.border.z,0);return this._isVisible()&&this.draw===oE.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:r,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){let e,i;let r=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+"AxisID",s=[];for(e=0,i=r.length;e<i;++e){let i=r[e];i[n]!==this.id||t&&i.type!==t||s.push(i)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return sK(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class oI{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e;let i=Object.getPrototypeOf(t);"id"in i&&"defaults"in i&&(e=this.register(i));let r=this.items,n=t.id,s=this.scope+"."+n;if(!n)throw Error("class does not have id: "+t);return n in r||(r[n]=t,function(t,e,i){let r=nT(Object.create(null),[i?sA.get(i):{},sA.get(e),t.defaults]);sA.set(e,r),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{let r=i.split("."),n=r.pop(),s=[t].concat(r).join("."),a=e[i].split("."),o=a.pop(),l=a.join(".");sA.route(s,n,l,o)})}(e,t.defaultRoutes),t.descriptors&&sA.describe(e,t.descriptors)}(t,s,e),this.override&&sA.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,r=this.scope;i in e&&delete e[i],r&&i in sA[r]&&(delete sA[r][i],this.override&&delete sS[i])}}var oR=/* #__PURE__ */new class{constructor(){this.controllers=new oI(aH,"datasets",!0),this.elements=new oI(ok,"elements"),this.plugins=new oI(Object,"plugins"),this.scales=new oI(oE,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{let r=i||this._getRegistryForType(e);i||r.isForType(e)||r===this.plugins&&e.id?this._exec(t,r,e):nP(e,e=>{let r=i||this._getRegistryForType(e);this._exec(t,r,e)})})}_exec(t,e,i){let r=n$(t);nS(i["before"+r],[],i),e[t](i),nS(i["after"+r],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let r=e.get(t);if(void 0===r)throw Error('"'+t+'" is not a registered '+i+".");return r}};class oL{constructor(){this._init=[]}notify(t,e,i,r){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let n=r?this._descriptors(t).filter(r):this._descriptors(t),s=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,i,r){for(let n of(r=r||{},t)){let t=n.plugin,s=t[i],a=[e,r,n.options];if(!1===nS(s,a,t)&&r.cancelable)return!1}return!0}invalidate(){nx(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,r=nw(i.options&&i.options.plugins,{}),n=function(t){let e={},i=[],r=Object.keys(oR.plugins.items);for(let t=0;t<r.length;t++)i.push(oR.getPlugin(r[t]));let n=t.plugins||[];for(let t=0;t<n.length;t++){let r=n[t];-1===i.indexOf(r)&&(i.push(r),e[r.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==r||e?function(t,{plugins:e,localIds:i},r,n){let s=[],a=t.getContext();for(let l of e){var o;let e=l.id,h=(o=r[e],n||!1!==o?!0===o?{}:o:null);null!==h&&s.push({plugin:l,options:function(t,{plugin:e,local:i},r,n){let s=t.pluginScopeKeys(e),a=t.getOptionScopes(r,s);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}(t.config,{plugin:l,local:i[e]},h,a)})}return s}(t,n,r,e):[]}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,r=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(r(e,i),t,"stop"),this._notify(r(i,e),t,"start")}}function o$(t,e){let i=sA.datasets[t]||{},r=(e.datasets||{})[t]||{};return r.indexAxis||e.indexAxis||i.indexAxis||"x"}function oF(t){if("x"===t||"y"===t||"r"===t)return t}function oz(t,...e){if(oF(t))return t;for(let r of e){var i;let e=r.axis||("top"===(i=r.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.length>1&&oF(t[0].toLowerCase());if(e)return e}throw Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)}function oN(t,e,i){if(i[e+"AxisID"]===t)return{axis:e}}function oV(t){let e=t.options||(t.options={});e.plugins=nw(e.plugins,{}),e.scales=function(t,e){let i=sS[t.type]||{scales:{}},r=e.scales||{},n=o$(t.type,e),s=Object.create(null);return Object.keys(r).forEach(e=>{let a=r[e];if(!ny(a))return console.error(`Invalid scale configuration for scale: ${e}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${e}`);let o=oz(e,a,function(t,e){if(e.data&&e.data.datasets){let i=e.data.datasets.filter(e=>e.xAxisID===t||e.yAxisID===t);if(i.length)return oN(t,"x",i[0])||oN(t,"y",i[0])}return{}}(e,t),sA.scales[a.type]),l=o===n?"_index_":"_value_",h=i.scales||{};s[e]=nE(Object.create(null),[{axis:o},a,h[o],h[l]])}),t.data.datasets.forEach(i=>{let n=i.type||t.type,a=i.indexAxis||o$(n,e),o=sS[n]||{},l=o.scales||{};Object.keys(l).forEach(t=>{let e;let n=(e=t,"_index_"===t?e=a:"_value_"===t&&(e="x"===a?"y":"x"),e),o=i[n+"AxisID"]||n;s[o]=s[o]||Object.create(null),nE(s[o],[{axis:n},r[o],l[t]])})}),Object.keys(s).forEach(t=>{let e=s[t];nE(e,[sA.scales[e.type],sA.scale])}),s}(t,e)}function oW(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const oj=new Map,oB=new Set;function oH(t,e){let i=oj.get(t);return i||(i=e(),oj.set(t,i),oB.add(i)),i}const oY=(t,e,i)=>{let r=nL(e,i);void 0!==r&&t.add(r)};class oX{constructor(t){var e;this._config=((e=(e=t)||{}).data=oW(e.data),oV(e),e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=oW(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),oV(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return oH(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return oH(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return oH(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return oH(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,r=i.get(t);return(!r||e)&&(r=new Map,i.set(t,r)),r}getOptionScopes(t,e,i){let{options:r,type:n}=this,s=this._cachedScopes(t,i),a=s.get(e);if(a)return a;let o=new Set;e.forEach(e=>{t&&(o.add(t),e.forEach(e=>oY(o,t,e))),e.forEach(t=>oY(o,r,t)),e.forEach(t=>oY(o,sS[n]||{},t)),e.forEach(t=>oY(o,sA,t)),e.forEach(t=>oY(o,sP,t))});let l=Array.from(o);return 0===l.length&&l.push(Object.create(null)),oB.has(e)&&s.set(e,l),l}chartOptionScopes(){let{options:t,type:e}=this;return[t,sS[e]||{},sA.datasets[e]||{},{type:e},sA,sP]}resolveNamedOptions(t,e,i,r=[""]){let n={$shared:!0},{resolver:s,subPrefixes:a}=oU(this._resolverCache,t,r),o=s;if(function(t,e){let{isScriptable:i,isIndexable:r}=s0(t);for(let n of e){let e=i(n),s=r(n),a=(s||e)&&t[n];if(e&&(nz(a)||oq(a))||s&&nb(a))return!0}return!1}(s,e)){n.$shared=!1,i=nz(i)?i():i;let e=this.createResolver(t,i,a);o=sQ(s,i,e)}for(let t of e)n[t]=o[t];return n}createResolver(t,e,i=[""],r){let{resolver:n}=oU(this._resolverCache,t,i);return ny(e)?sQ(n,e,void 0,r):n}}function oU(t,e,i){let r=t.get(e);r||(r=new Map,t.set(e,r));let n=i.join(),s=r.get(n);if(!s){let t=sZ(e,i);s={resolver:t,subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},r.set(n,s)}return s}const oq=t=>ny(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||nz(t[i]),!1),oK=["top","bottom","left","right","chartArea"];function oG(t,e){return"top"===t||"bottom"===t||-1===oK.indexOf(t)&&"x"===e}function oJ(t,e){return function(i,r){return i[t]===r[t]?i[e]-r[e]:i[t]-r[t]}}function oZ(t){let e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),nS(i&&i.onComplete,[t],e)}function oQ(t){let e=t.chart,i=e.options.animation;nS(i&&i.onProgress,[t],e)}function o0(t){return an()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const o1={},o2=t=>{let e=o0(t);return Object.values(o1).filter(t=>t.canvas===e).pop()};function o5(t,e,i){return t.options.clip?t[i]:e[i]}class o3{static defaults=sA;static instances=o1;static overrides=sS;static registry=oR;static version="4.4.0";static getChart=o2;static register(...t){oR.add(...t),o6()}static unregister(...t){oR.remove(...t),o6()}constructor(t,e){var i,r;let n;let s=this.config=new oX(e),a=o0(t),o=o2(a);if(o)throw Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");let l=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||(!an()||"undefined"!=typeof OffscreenCanvas&&a instanceof OffscreenCanvas?ol:oM)),this.platform.updateConfig(s);let h=this.platform.acquireContext(a,l.aspectRatio),d=h&&h.canvas,c=d&&d.height,u=d&&d.width;if(this.id=nm(),this.ctx=h,this.canvas=d,this.width=u,this.height=c,this._options=l,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new oL,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(i=t=>this.update(t),r=l.resizeDelay||0,function(...t){return r?(clearTimeout(n),n=setTimeout(i,r,t)):i.apply(this,t),r}),this._dataChanges=[],o1[this.id]=this,!h||!d){console.error("Failed to create chart: can't acquire context from the given item");return}aD.listen(this,"complete",oZ),aD.listen(this,"progress",oQ),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:r,_aspectRatio:n}=this;return nx(t)?e&&n?n:r?i/r:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return oR}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():af(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sE(this.canvas,this.ctx),this}stop(){return aD.stop(this),this}resize(t,e){aD.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,r=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(r,t,e,n),a=i.devicePixelRatio||this.platform.getDevicePixelRatio(),o=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,af(this,a,!0)&&(this.notifyPlugins("resize",{size:s}),nS(i.onResize,[this,s],this),this.attached&&this._doResize(o)&&this.render())}ensureScalesHaveIDs(){let t=this.options,e=t.scales||{};nP(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,r=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{}),n=[];e&&(n=n.concat(Object.keys(e).map(t=>{let i=e[t],r=oz(t,i),n="r"===r,s="x"===r;return{options:i,dposition:n?"chartArea":s?"bottom":"left",dtype:n?"radialLinear":s?"category":"linear"}}))),nP(n,e=>{let n=e.options,s=n.id,a=oz(s,n),o=nw(n.type,e.dtype);(void 0===n.position||oG(n.position,a)!==oG(e.dposition))&&(n.position=e.dposition),r[s]=!0;let l=null;if(s in i&&i[s].type===o)l=i[s];else{let t=oR.getScale(o);i[(l=new t({id:s,type:o,ctx:this.ctx,chart:this})).id]=l}l.init(n,t)}),nP(r,(t,e)=>{t||delete i[e]}),nP(i,t=>{oa.configure(this,t,t.options),oa.addBox(this,t)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(oJ("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t,e;let i=[],r=this.data.datasets;for(this._removeUnreferencedMetasets(),t=0,e=r.length;t<e;t++){let e=r[t],n=this.getDatasetMeta(t),s=e.type||this.config.type;if(n.type&&n.type!==s&&(this._destroyDatasetMeta(t),n=this.getDatasetMeta(t)),n.type=s,n.indexAxis=e.indexAxis||o$(s,this.options),n.order=e.order||0,n.index=t,n.label=""+e.label,n.visible=this.isDatasetVisible(t),n.controller)n.controller.updateIndex(t),n.controller.linkScales();else{let e=oR.getController(s),{datasetElementType:r,dataElementType:a}=sA.datasets[s];Object.assign(e,{dataElementType:oR.getElement(a),datasetElementType:r&&oR.getElement(r)}),n.controller=new e(this,t),i.push(n.controller)}}return this._updateMetasets(),i}_resetElements(){nP(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;let n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let t=0,e=this.data.datasets.length;t<e;t++){let{controller:e}=this.getDatasetMeta(t),i=!r&&-1===n.indexOf(e);e.buildOrUpdateElements(i),s=Math.max(+e.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),r||nP(n,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(oJ("z","_idx"));let{_active:a,_lastEvent:o}=this;o?this._eventHandler(o,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){nP(this.scales,t=>{oa.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);nN(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:r,count:n}of e){let e="_removeElements"===i?-n:n;!function(t,e,i){let r=Object.keys(t);for(let n of r){let r=+n;if(r>=e){let s=t[n];delete t[n],(i>0||r>e)&&(t[r+i]=s)}}}(t,r,e)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),r=i(0);for(let t=1;t<e;t++)if(!nN(r,i(t)))return;return Array.from(r).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;oa.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],nP(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,nz(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),r={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",r)&&(i.controller._update(e),r.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",r))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(aD.has(this)?this.attached&&!aD.running(this)&&aD.start(this):(this.draw(),oZ({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e,i;let r=this._sortedMetasets,n=[];for(e=0,i=r.length;e<i;++e){let i=r[e];(!t||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i=t._clip,r=!i.disabled,n=function(t,e){let{xScale:i,yScale:r}=t;return i&&r?{left:o5(i,e,"left"),right:o5(i,e,"right"),top:o5(r,e,"top"),bottom:o5(r,e,"bottom")}:e}(t,this.chartArea),s={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",s)&&(r&&s$(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),r&&sF(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return sL(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,r){let n=a9.modes[e];return"function"==typeof n?n(this,t,i,r):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,r=i.filter(t=>t&&t._dataset===e).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context=sJ(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let r=i?"show":"hide",n=this.getDatasetMeta(t),s=n.controller._resolveAnimations(void 0,r);nF(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),s.update(n,{visible:i}),this.update(e=>e.datasetIndex===t?r:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),aD.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sE(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete o1[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(i,r)=>{e.addEventListener(this,i,r),t[i]=r},r=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};nP(this.options.events,t=>i(t,r))}bindResponsiveEvents(){let t;this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,i=this.platform,r=(t,r)=>{i.addEventListener(this,t,r),e[t]=r},n=(t,r)=>{e[t]&&(i.removeEventListener(this,t,r),delete e[t])},s=(t,e)=>{this.canvas&&this.resize(t,e)},a=()=>{n("attach",a),this.attached=!0,this.resize(),r("resize",s),r("detach",t)};t=()=>{this.attached=!1,n("resize",s),this._stop(),this._resize(0,0),r("attach",a)},i.isAttached(this.canvas)?a():t()}unbindEvents(){nP(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},nP(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let r,n,s;let a=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+a+"DatasetHoverStyle"](),n=0,s=t.length;n<s;++n){r=t[n];let e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[a+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{let i=this.getDatasetMeta(t);if(!i)throw Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),r=!nC(i,e);r&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return 1===this._plugins._cache.filter(e=>e.plugin.id===t).length}_updateHoverStyles(t,e,i){let r=this.options.hover,n=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),s=n(e,t),a=i?t:n(t,e);s.length&&this.updateHoverStyle(s,r.mode,!1),a.length&&r.mode&&this.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},r=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,r))return;let n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,r),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){var r;let{_active:n=[],options:s}=this,a=this._getActiveElements(t,n,i,e),o="mouseup"===t.type||"click"===t.type||"contextmenu"===t.type,l=(r=this._lastEvent,i&&"mouseout"!==t.type?o?r:t:null);i&&(this._lastEvent=null,nS(s.onHover,[t,a,this],this),o&&nS(s.onClick,[t,a,this],this));let h=!nC(a,n);return(h||e)&&(this._active=a,this._updateHoverStyles(a,n,e)),this._lastEvent=l,h}_getActiveElements(t,e,i,r){if("mouseout"===t.type)return[];if(!i)return e;let n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,r)}}function o6(){return nP(o3.instances,t=>t._plugins.invalidate())}/**
 * Convert (r, 𝜃) to (x, y)
 */function o9(t,e,i,r){return{x:i+t*Math.cos(e),y:r+t*Math.sin(e)}}/**
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
 */function o4(t,e,i,r,n,s){let{x:a,y:o,startAngle:l,pixelMargin:h,innerRadius:d}=e,c=Math.max(e.outerRadius+r+i-h,0),u=d>0?d+r+i+h:0,f=0,p=n-l;if(r){let t=c>0?c-r:0,e=((d>0?d-r:0)+t)/2;f=(p-(0!==e?p*e/(e+r):p))/2}let g=Math.max(.001,p*c-i/nV)/c,m=(p-g)/2,x=l+m+f,b=n-m-f,{outerStart:y,outerEnd:v,innerStart:_,innerEnd:w}=/**
 * Parse border radius from the provided options
 */function(t,e,i,r){let n=sY(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),s=(i-e)/2,a=Math.min(s,r*e/2),o=t=>{let e=(i-Math.min(s,t))*r/2;return n4(t,0,Math.min(s,e))};return{outerStart:o(n.outerStart),outerEnd:o(n.outerEnd),innerStart:n4(n.innerStart,0,a),innerEnd:n4(n.innerEnd,0,a)}}(e,u,c,b-x),M=c-y,k=c-v,S=x+y/M,P=b-v/k,C=u+_,D=u+w,A=x+_/C,O=b-w/D;if(t.beginPath(),s){// The first arc segments from point 1 to point a to point 2
let e=(S+P)/2;// The corner segment from point 2 to point 3
if(t.arc(a,o,c,S,e),t.arc(a,o,c,e,P),v>0){let e=o9(k,P,a,o);t.arc(e.x,e.y,v,P,b+nY)}// The line from point 3 to point 4
let i=o9(D,b,a,o);// The corner segment from point 4 to point 5
if(t.lineTo(i.x,i.y),w>0){let e=o9(D,O,a,o);t.arc(e.x,e.y,w,b+nY,O+Math.PI)}// The inner arc from point 5 to point b to point 6
let r=(b-w/u+(x+_/u))/2;// The corner segment from point 6 to point 7
if(t.arc(a,o,u,b-w/u,r,!0),t.arc(a,o,u,r,x+_/u,!0),_>0){let e=o9(C,A,a,o);t.arc(e.x,e.y,_,A+Math.PI,x-nY)}// The line from point 7 to point 8
let n=o9(M,x,a,o);// The corner segment from point 8 to point 1
if(t.lineTo(n.x,n.y),y>0){let e=o9(M,S,a,o);t.arc(e.x,e.y,y,x-nY,S)}}else{t.moveTo(a,o);let e=Math.cos(S)*c+a,i=Math.sin(S)*c+o;t.lineTo(e,i);let r=Math.cos(P)*c+a,n=Math.sin(P)*c+o;t.lineTo(r,n)}t.closePath()}function o8(t,e,i=e){t.lineCap=nw(i.borderCapStyle,e.borderCapStyle),t.setLineDash(nw(i.borderDash,e.borderDash)),t.lineDashOffset=nw(i.borderDashOffset,e.borderDashOffset),t.lineJoin=nw(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=nw(i.borderWidth,e.borderWidth),t.strokeStyle=nw(i.borderColor,e.borderColor)}function o7(t,e,i){t.lineTo(i.x,i.y)}function lt(t,e,i={}){let r=t.length,{start:n=0,end:s=r-1}=i,{start:a,end:o}=e,l=Math.max(n,a),h=Math.min(s,o);return{count:r,start:l,loop:e.loop,ilen:h<l&&!(n<a&&s<a||n>o&&s>o)?r+h-l:h-l}}function le(t,e,i,r){let n,s,a;let{points:o,options:l}=e,{count:h,start:d,loop:c,ilen:u}=lt(o,i,r),f=l.stepped?sz:l.tension||"monotone"===l.cubicInterpolationMode?sN:o7,{move:p=!0,reverse:g}=r||{};for(n=0;n<=u;++n)(s=o[(d+(g?u-n:n))%h]).skip||(p?(t.moveTo(s.x,s.y),p=!1):f(t,a,s,g,l.stepped),a=s);return c&&f(t,a,s=o[(d+(g?u:0))%h],g,l.stepped),!!c}function li(t,e,i,r){let n,s,a,o,l,h;let d=e.points,{count:c,start:u,ilen:f}=lt(d,i,r),{move:p=!0,reverse:g}=r||{},m=0,x=0,b=t=>(u+(g?f-t:t))%c,y=()=>{o!==l&&(t.lineTo(m,l),t.lineTo(m,o),t.lineTo(m,h))};for(p&&(s=d[b(0)],t.moveTo(s.x,s.y)),n=0;n<=f;++n){if((s=d[b(n)]).skip)continue;let e=s.x,i=s.y,r=0|e;r===a?(i<o?o=i:i>l&&(l=i),m=(x*m+e)/++x):(y(),t.lineTo(e,i),a=r,x=0,o=l=i),h=i}y()}function lr(t){let e=t.options,i=e.borderDash&&e.borderDash.length,r=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!i;return r?li:le}const ln="function"==typeof Path2D;class ls extends ok{static id="line";static defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){let r=i.spanGaps?this._loop:this._fullLoop;!/**
 * @private
 */function(t,e,i,r,n){let s,a,o,l;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)!/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */function(t,e="x"){let i,r,n;let s=ai(e),a=t.length,o=Array(a).fill(0),l=Array(a),h=ae(t,0);for(i=0;i<a;++i)if(r=n,n=h,h=ae(t,i+1),n){if(h){let t=h[e]-n[e];// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
o[i]=0!==t?(h[s]-n[s])/t:0}l[i]=r?h?nK(o[i-1])!==nK(o[i])?0:(o[i-1]+o[i])/2:o[i-1]:o[i]}/**
 * Adjust tangents to ensure monotonic properties
 */(function(t,e,i){let r,n,s,a,o;let l=t.length,h=ae(t,0);for(let d=0;d<l-1;++d)if(o=h,h=ae(t,d+1),o&&h){if(nG(e[d],0,at)){i[d]=i[d+1]=0;continue}(a=Math.pow(r=i[d]/e[d],2)+Math.pow(n=i[d+1]/e[d],2))<=9||(s=3/Math.sqrt(a),i[d]=r*s*e[d],i[d+1]=n*s*e[d])}})(t,o,l),function(t,e,i="x"){let r,n,s;let a=ai(i),o=t.length,l=ae(t,0);for(let h=0;h<o;++h){if(n=s,s=l,l=ae(t,h+1),!s)continue;let o=s[i],d=s[a];n&&(r=(o-n[i])/3,s[`cp1${i}`]=o-r,s[`cp1${a}`]=d-r*e[h]),l&&(r=(l[i]-o)/3,s[`cp2${i}`]=o+r,s[`cp2${a}`]=d+r*e[h])}}(t,l,e)}(t,n);else{let i=r?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)l=function(t,e,i,r){// Props to Rob Spencer at scaled innovation for his post on splining between points
// http://scaledinnovation.com/analytics/splines/aboutSplines.html
// This function must also respect "skipped" points
let n=t.skip?e:t,s=i.skip?e:i,a=n5(e,n),o=n5(s,e),l=a/(a+o),h=o/(a+o);// If all points are the same, s01 & s02 will be inf
l=isNaN(l)?0:l,h=isNaN(h)?0:h;let d=r*l,c=r*h;// scaling factor for triangle Ta
return{previous:{x:e.x-d*(s.x-n.x),y:e.y-d*(s.y-n.y)},next:{x:e.x+c*(s.x-n.x),y:e.y+c*(s.y-n.y)}}}(i,o=t[s],t[Math.min(s+1,a-(r?0:1))%a],e.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,i=o}e.capBezierPoints&&function(t,e){let i,r,n,s,a;let o=sL(t[0],e);for(i=0,r=t.length;i<r;++i)a=s,s=o,o=i<r-1&&sL(t[i+1],e),s&&(n=t[i],a&&(n.cp1x=ar(n.cp1x,e.left,e.right),n.cp1y=ar(n.cp1y,e.top,e.bottom)),o&&(n.cp2x=ar(n.cp2x,e.left,e.right),n.cp2y=ar(n.cp2y,e.top,e.bottom)))}(t,i)}(this._points,i,t,r,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){let i=t.points,r=t.options.spanGaps,n=i.length;if(!n)return[];let s=!!t._loop,{start:a,end:o}=function(t,e,i,r){let n=0,s=e-1;if(i&&!r)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(s+=n);s>n&&t[s%e].skip;)s--;return{start:n,end:s%=e}}(i,n,s,r);if(!0===r)return aP(t,[{start:a,end:o,loop:s}],i,e);let l=o<a?o+n:o,h=!!t._fullLoop&&0===a&&o===n-1;return aP(t,function(t,e,i,r){let n;let s=t.length,a=[],o=e,l=t[e];for(n=e+1;n<=i;++n){let i=t[n%s];i.skip||i.stop?l.skip||(r=!1,a.push({start:e%s,end:(n-1)%s,loop:r}),e=o=i.stop?n:null):(o=n,l.skip&&(e=n)),l=i}return null!==o&&a.push({start:e%s,end:o%s,loop:r}),a}(i,a,l,h),i,e)}(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i,r;let n=this.options,s=t[e],a=this.points,o=aS(this,{property:e,start:s,end:s});if(!o.length)return;let l=[],h=n.stepped?ax:n.tension||"monotone"===n.cubicInterpolationMode?ab:am;for(i=0,r=o.length;i<r;++i){let{start:r,end:d}=o[i],c=a[r],u=a[d];if(c===u){l.push(c);continue}let f=Math.abs((s-c[e])/(u[e]-c[e])),p=h(c,u,f,n.stepped);p[e]=t[e],l.push(p)}return 1===l.length?l[0]:l}pathSegment(t,e,i){let r=lr(this);return r(t,this,e,i)}path(t,e,i){let r=this.segments,n=lr(this),s=this._loop;for(let a of(e=e||0,i=i||this.points.length-e,r))s&=n(t,this,a,{start:e,end:e+i-1});return!!s}draw(t,e,i,r){let n=this.options||{},s=this.points||[];s.length&&n.borderWidth&&(t.save(),function(t,e,i,r){if(ln&&!e.options.segment){let n;(n=e._path)||(n=e._path=new Path2D,e.path(n,i,r)&&n.closePath()),o8(t,e.options),t.stroke(n)}else!function(t,e,i,r){let{segments:n,options:s}=e,a=lr(e);for(let o of n)o8(t,s,o.style),t.beginPath(),a(t,e,o,{start:i,end:i+r-1})&&t.closePath(),t.stroke()}(t,e,i,r)}(t,this,i,r),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function la(t,e,i,r){let n=t.options,{[i]:s}=t.getProps([i],r);return Math.abs(e-s)<n.radius+n.hitRadius}function lo(t,e){let i,r,n,s,a;let{x:o,y:l,base:h,width:d,height:c}=t.getProps(["x","y","base","width","height"],e);return t.horizontal?(a=c/2,i=Math.min(o,h),r=Math.max(o,h),n=l-a,s=l+a):(i=o-(a=d/2),r=o+a,n=Math.min(l,h),s=Math.max(l,h)),{left:i,top:n,right:r,bottom:s}}function ll(t,e,i,r){return t?0:n4(e,i,r)}function lh(t,e,i,r){let n=null===e,s=null===i,a=t&&!(n&&s)&&lo(t,r);return a&&(n||n8(e,a.left,a.right))&&(s||n8(i,a.top,a.bottom))}function ld(t,e){t.rect(e.x,e.y,e.w,e.h)}function lc(t,e,i={}){let r=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-r,a=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+r,y:t.y+n,w:t.w+s,h:t.h+a,radius:t.radius}}var lu=/*#__PURE__*/Object.freeze({__proto__:null,ArcElement:class extends ok{static id="arc";static defaults={borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0};static defaultRoutes={backgroundColor:"backgroundColor"};static descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){let r=this.getProps(["x","y"],i),{angle:n,distance:s}=n2(r,{x:t,y:e}),{startAngle:a,endAngle:o,innerRadius:l,outerRadius:h,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),c=(this.options.spacing+this.options.borderWidth)/2,u=nw(d,o-a),f=u>=nW||n9(n,a,o),p=n8(s,l+c,h+c);return f&&p}getCenterPoint(t){let{x:e,y:i,startAngle:r,endAngle:n,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:o,spacing:l}=this.options,h=(r+n)/2,d=(s+a+l+o)/2;return{x:e+Math.cos(h)*d,y:i+Math.sin(h)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:i}=this,r=(e.offset||0)/4,n=(e.spacing||0)/2,s=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>nW?Math.floor(i/nW):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*r,Math.sin(a)*r);let o=1-Math.sin(Math.min(nV,i||0)),l=r*o;t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor,function(t,e,i,r,n){let{fullCircles:s,startAngle:a,circumference:o}=e,l=e.endAngle;if(s){o4(t,e,i,r,l,n);for(let e=0;e<s;++e)t.fill();isNaN(o)||(l=a+(o%nW||nW))}o4(t,e,i,r,l,n),t.fill()}(t,this,l,n,s),function(t,e,i,r,n){let{fullCircles:s,startAngle:a,circumference:o,options:l}=e,{borderWidth:h,borderJoinStyle:d,borderDash:c,borderDashOffset:u}=l,f="inner"===l.borderAlign;if(!h)return;t.setLineDash(c||[]),t.lineDashOffset=u,f?(t.lineWidth=2*h,t.lineJoin=d||"round"):(t.lineWidth=h,t.lineJoin=d||"bevel");let p=e.endAngle;if(s){o4(t,e,i,r,p,n);for(let e=0;e<s;++e)t.stroke();isNaN(o)||(p=a+(o%nW||nW))}f&&function(t,e,i){let{startAngle:r,pixelMargin:n,x:s,y:a,outerRadius:o,innerRadius:l}=e,h=n/o;// Draw an inner border by clipping the arc and drawing a double-width border
// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
t.beginPath(),t.arc(s,a,o,r-h,i+h),l>n?(h=n/l,t.arc(s,a,l,i+h,r-h,!0)):t.arc(s,a,n,i+nY,r-nY),t.closePath(),t.clip()}(t,e,p),s||(o4(t,e,i,r,p,n),t.stroke())}(t,this,l,n,s),t.restore()}},BarElement:class extends ok{static id="bar";static defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0};static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){var e;let{inflateAmount:i,options:{borderColor:r,backgroundColor:n}}=this,{inner:s,outer:a}=function(t){let e=lo(t),i=e.right-e.left,r=e.bottom-e.top,n=function(t,e,i){let r=t.options.borderWidth,n=t.borderSkipped,s=sX(r);return{t:ll(n.top,s.top,0,i),r:ll(n.right,s.right,0,e),b:ll(n.bottom,s.bottom,0,i),l:ll(n.left,s.left,0,e)}}(t,i/2,r/2),s=function(t,e,i){let{enableBorderRadius:r}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,s=sU(n),a=Math.min(e,i),o=t.borderSkipped,l=r||ny(n);return{topLeft:ll(!l||o.top||o.left,s.topLeft,0,a),topRight:ll(!l||o.top||o.right,s.topRight,0,a),bottomLeft:ll(!l||o.bottom||o.left,s.bottomLeft,0,a),bottomRight:ll(!l||o.bottom||o.right,s.bottomRight,0,a)}}(t,i/2,r/2);return{outer:{x:e.left,y:e.top,w:i,h:r,radius:s},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:r-n.t-n.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,s.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(n.b,n.r))}}}}(this),o=(e=a.radius).topLeft||e.topRight||e.bottomLeft||e.bottomRight?sW:ld;t.save(),(a.w!==s.w||a.h!==s.h)&&(t.beginPath(),o(t,lc(a,i,s)),t.clip(),o(t,lc(s,-i,a)),t.fillStyle=r,t.fill("evenodd")),t.beginPath(),o(t,lc(s,i)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,i){return lh(this,t,e,i)}inXRange(t,e){return lh(this,t,null,e)}inYRange(t,e){return lh(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:r,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+r)/2:e,y:n?i:(i+r)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}},LineElement:ls,PointElement:class extends ok{static id="point";parsed;skip;stop;/**
   * @type {any}
   */static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0};/**
   * @type {any}
   */static defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){let r=this.options,{x:n,y:s}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-s,2)<Math.pow(r.hitRadius+r.radius,2)}inXRange(t,e){return la(this,t,"x",e)}inYRange(t,e){return la(this,t,"y",e)}getCenterPoint(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);let i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){let i=this.options;!this.skip&&!(i.radius<.1)&&sL(this,e,this.size(i)/2)&&(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,sI(t,i,this.x,this.y))}getRange(){let t=this.options||{};// @ts-expect-error Fallbacks should never be hit in practice
return t.radius+t.hitRadius}}});const lf=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"// grey
],lp=/* #__PURE__ */lf.map(t=>t.replace("rgb(","rgba(").replace(")",", 0.5)"));function lg(t){return lf[t%lf.length]}function lm(t){return lp[t%lp.length]}function lx(t){let e;for(e in t)if(t[e].borderColor||t[e].backgroundColor)return!0;return!1}function lb(t){if(t._decimated){let e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,writable:!0,value:e})}}function ly(t){t.data.datasets.forEach(t=>{lb(t)})}function lv(t,e,i,r){if(r)return;let n=e[t],s=i[t];return"angle"===t&&(n=n6(n),s=n6(s)),{property:t,start:n,end:s}}function l_(t,e,i){for(;e>t;e--){let t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function lw(t,e,i,r){return t&&e?r(t[i],e[i]):t?t[i]:e?e[i]:0}function lM(t,e){let i=[],r=!1;return nb(t)?(r=!0,i=t):i=function(t,e){let{x:i=null,y:r=null}=t||{},n=e.points,s=[];return e.segments.forEach(({start:t,end:e})=>{e=l_(t,e,n);let a=n[t],o=n[e];null!==r?(s.push({x:a.x,y:r}),s.push({x:o.x,y:r})):null!==i&&(s.push({x:i,y:a.y}),s.push({x:i,y:o.y}))}),s}(t,e),i.length?new ls({points:i,options:{tension:0},_loop:r,_fullLoop:r}):null}function lk(t){return t&&!1!==t.fill}class lS{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:r,y:n,radius:s}=this;return e=e||{start:0,end:nW},t.arc(r,n,s,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:r}=this,n=t.angle;return{x:e+Math.cos(n)*r,y:i+Math.sin(n)*r,angle:n}}}function lP(t,e,i){let r=function(t){let{chart:e,fill:i,line:r}=t;if(nv(i))return function(t,e){let i=t.getDatasetMeta(e),r=i&&t.isDatasetVisible(e);return r?i.dataset:null}(e,i);if("stack"===i)return function(t){let{scale:e,index:i,line:r}=t,n=[],s=r.segments,a=r.points,o=function(t,e){let i=[],r=t.getMatchingVisibleMetas("line");for(let t=0;t<r.length;t++){let n=r[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);o.push(lM({x:null,y:e.bottom},r));for(let t=0;t<s.length;t++){let e=s[t];for(let t=e.start;t<=e.end;t++)!function(t,e,i){let r=[];for(let n=0;n<i.length;n++){let s=i[n],{first:a,last:o,point:l}=function(t,e,i){let r=t.interpolate(e,i);if(!r)return{};let n=r[i],s=t.segments,a=t.points,o=!1,l=!1;for(let t=0;t<s.length;t++){let e=s[t],r=a[e.start][i],h=a[e.end][i];if(n8(n,r,h)){o=n===r,l=n===h;break}}return{first:o,last:l,point:r}}(s,e,"x");if(l&&(!a||!o)){if(a)r.unshift(l);else if(t.push(l),!o)break}}t.push(...r)}(n,a[t],o)}return new ls({points:n,options:{}})}(t);if("shape"===i)return!0;let n=function(t){let e=t.scale||{};return e.getPointPositionForValue?function(t){let{scale:e,fill:i}=t,r=e.options,n=e.getLabels().length,s=r.reverse?e.max:e.min,a="start"===i?s:"end"===i?e.options.reverse?e.min:e.max:ny(i)?i.value:e.getBaseValue(),o=[];if(r.grid.circular){let t=e.getPointPositionForValue(0,s);return new lS({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(a)})}for(let t=0;t<n;++t)o.push(e.getPointPositionForValue(t,a));return o}(t):function(t){let e;let{scale:i={},fill:r}=t,n=(e=null,"start"===r?e=i.bottom:"end"===r?e=i.top:ny(r)?e=i.getPixelForValue(r.value):i.getBasePixel&&(e=i.getBasePixel()),e);if(nv(n)){let t=i.isHorizontal();return{x:t?n:null,y:t?null:n}}return null}(t)}(t);return n instanceof lS?n:lM(n,r)}(e),{line:n,scale:s,axis:a}=e,o=n.options,l=o.fill,h=o.backgroundColor,{above:d=h,below:c=h}=l||{};r&&n.points.length&&(s$(t,i),function(t,e){let{line:i,target:r,above:n,below:s,area:a,scale:o}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&s!==n&&(lC(t,r,a.top),lD(t,{line:i,target:r,color:n,scale:o,property:l}),t.restore(),t.save(),lC(t,r,a.bottom)),lD(t,{line:i,target:r,color:s,scale:o,property:l}),t.restore()}(t,{line:n,target:r,above:d,below:c,area:i,scale:s,axis:a}),sF(t))}function lC(t,e,i){let{segments:r,points:n}=e,s=!0,a=!1;for(let o of(t.beginPath(),r)){let{start:r,end:l}=o,h=n[r],d=n[l_(r,l,n)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),(a=!!e.pathSegment(t,o,{move:a}))?t.closePath():t.lineTo(d.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function lD(t,e){let{line:i,target:r,property:n,color:s,scale:a}=e,o=function(t,e,i){let r=t.segments,n=t.points,s=e.points,a=[];for(let t of r){let{start:r,end:o}=t;o=l_(r,o,n);let l=lv(i,n[r],n[o],t.loop);if(!e.segments){a.push({source:t,target:l,start:n[r],end:n[o]});continue}let h=aS(e,l);for(let e of h){let r=lv(i,s[e.start],s[e.end],e.loop),o=ak(t,n,r);for(let t of o)a.push({source:t,target:e,start:{[i]:lw(l,r,"start",Math.max)},end:{[i]:lw(l,r,"end",Math.min)}})}}return a}(i,r,n);for(let{source:e,target:l,start:h,end:d}of o){let o;let{style:{backgroundColor:c=s}={}}=e,u=!0!==r;t.save(),t.fillStyle=c,function(t,e,i){let{top:r,bottom:n}=e.chart.chartArea,{property:s,start:a,end:o}=i||{};"x"===s&&(t.beginPath(),t.rect(a,r,o-a,n-r),t.clip())}(t,a,u&&lv(n,h,d)),t.beginPath();let f=!!i.pathSegment(t,e);if(u){f?t.closePath():lA(t,r,d,n);let e=!!r.pathSegment(t,l,{move:f,reverse:!0});(o=f&&e)||lA(t,r,h,n)}t.closePath(),t.fill(o?"evenodd":"nonzero"),t.restore()}}function lA(t,e,i,r){let n=e.interpolate(i,r);n&&t.lineTo(n.x,n.y)}const lO=(t,e)=>{let{boxHeight:i=e,boxWidth:r=e}=t;return t.usePointStyle&&(i=Math.min(i,e),r=t.pointStyleWidth||Math.min(r,e)),{boxWidth:r,boxHeight:i,itemHeight:Math.max(e,i)}},lT=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class lE extends ok{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=nS(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(e=>t.filter(e,this.chart.data))),t.sort&&(e=e.sort((e,i)=>t.sort(e,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let t,e;let{options:i,ctx:r}=this;if(!i.display){this.width=this.height=0;return}let n=i.labels,s=sK(n.font),a=s.size,o=this._computeTitleHeight(),{boxWidth:l,itemHeight:h}=lO(n,a);r.font=s.string,this.isHorizontal()?(t=this.maxWidth,e=this._fitRows(o,a,l,h)+10):(e=this.maxHeight,t=this._fitCols(o,s,l,h)+10),this.width=Math.min(t,i.maxWidth||this.maxWidth),this.height=Math.min(e,i.maxHeight||this.maxHeight)}_fitRows(t,e,i,r){let{ctx:n,maxWidth:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.lineWidths=[0],h=r+a,d=t;n.textAlign="left",n.textBaseline="middle";let c=-1,u=-h;return this.legendItems.forEach((t,f)=>{let p=i+e/2+n.measureText(t.text).width;(0===f||l[l.length-1]+p+2*a>s)&&(d+=h,l[l.length-(f>0?0:1)]=0,u+=h,c++),o[f]={left:0,top:u,row:c,width:p,height:r},l[l.length-1]+=p+a}),d}_fitCols(t,e,i,r){let{ctx:n,maxHeight:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.columnSizes=[],h=s-t,d=a,c=0,u=0,f=0,p=0;return this.legendItems.forEach((t,s)=>{let{itemWidth:g,itemHeight:m}=function(t,e,i,r,n){var s;let a,o;let l=((a=r.text)&&"string"!=typeof a&&(a=a.reduce((t,e)=>t.length>e.length?t:e)),t+e.size/2+i.measureText(a).width),h=(s=e.lineHeight,o=n,"string"!=typeof r.text&&(o=lI(r,s)),o);return{itemWidth:l,itemHeight:h}}(i,e,n,t,r);s>0&&u+m+2*a>h&&(d+=c+a,l.push({width:c,height:u}),f+=c+a,p++,c=u=0),o[s]={left:f,top:u,col:p,width:g,height:m},c=Math.max(c,g),u+=m+a}),d+=c,l.push({width:c,height:u}),d}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:r},rtl:n}}=this,s=ay(n,this.left,this.width);if(this.isHorizontal()){let n=0,a=sl(i,this.left+r,this.right-this.lineWidths[n]);for(let o of e)n!==o.row&&(n=o.row,a=sl(i,this.left+r,this.right-this.lineWidths[n])),o.top+=this.top+t+r,o.left=s.leftForLtr(s.x(a),o.width),a+=o.width+r}else{let n=0,a=sl(i,this.top+t+r,this.bottom-this.columnSizes[n].height);for(let o of e)o.col!==n&&(n=o.col,a=sl(i,this.top+t+r,this.bottom-this.columnSizes[n].height)),o.top=a,o.left+=this.left+r,o.left=s.leftForLtr(s.x(o.left),o.width),a+=o.height+r}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){let t=this.ctx;s$(t,this),this._draw(),sF(t)}}_draw(){let t;let{options:e,columnSizes:i,lineWidths:r,ctx:n}=this,{align:s,labels:a}=e,o=sA.color,l=ay(e.rtl,this.left,this.width),h=sK(a.font),{padding:d}=a,c=h.size,u=c/2;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=h.string;let{boxWidth:f,boxHeight:p,itemHeight:g}=lO(a,c),m=function(t,e,i){if(isNaN(f)||f<=0||isNaN(p)||p<0)return;n.save();let r=nw(i.lineWidth,1);if(n.fillStyle=nw(i.fillStyle,o),n.lineCap=nw(i.lineCap,"butt"),n.lineDashOffset=nw(i.lineDashOffset,0),n.lineJoin=nw(i.lineJoin,"miter"),n.lineWidth=r,n.strokeStyle=nw(i.strokeStyle,o),n.setLineDash(nw(i.lineDash,[])),a.usePointStyle){let s={radius:p*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:r},o=l.xPlus(t,f/2),h=e+u;sR(n,s,o,h,a.pointStyleWidth&&f)}else{let s=e+Math.max((c-p)/2,0),a=l.leftForLtr(t,f),o=sU(i.borderRadius);n.beginPath(),Object.values(o).some(t=>0!==t)?sW(n,{x:a,y:s,w:f,h:p,radius:o}):n.rect(a,s,f,p),n.fill(),0!==r&&n.stroke()}n.restore()},x=function(t,e,i){sV(n,i.text,t,e+g/2,h,{strikethrough:i.hidden,textAlign:l.textAlign(i.textAlign)})},b=this.isHorizontal(),y=this._computeTitleHeight();t=b?{x:sl(s,this.left+d,this.right-r[0]),y:this.top+d+y,line:0}:{x:this.left+d,y:sl(s,this.top+y+d,this.bottom-i[0].height),line:0},av(this.ctx,e.textDirection);let v=g+d;this.legendItems.forEach((o,c)=>{n.strokeStyle=o.fontColor,n.fillStyle=o.fontColor;let p=n.measureText(o.text).width,g=l.textAlign(o.textAlign||(o.textAlign=a.textAlign)),_=f+u+p,w=t.x,M=t.y;l.setWidth(this.width),b?c>0&&w+_+d>this.right&&(M=t.y+=v,t.line++,w=t.x=sl(s,this.left+d,this.right-r[t.line])):c>0&&M+v>this.bottom&&(w=t.x=w+i[t.line].width+d,t.line++,M=t.y=sl(s,this.top+y+d,this.bottom-i[t.line].height));let k=l.x(w);if(m(k,M,o),w=sh(g,w+f+u,b?w+_:this.right,e.rtl),x(l.x(w),M,o),b)t.x+=_+d;else if("string"!=typeof o.text){let e=h.lineHeight;t.y+=lI(o,e)+d}else t.y+=v}),a_(this.ctx,e.textDirection)}drawTitle(){let t;let e=this.options,i=e.title,r=sK(i.font),n=sq(i.padding);if(!i.display)return;let s=ay(e.rtl,this.left,this.width),a=this.ctx,o=i.position,l=r.size/2,h=n.top+l,d=this.left,c=this.width;if(this.isHorizontal())c=Math.max(...this.lineWidths),t=this.top+h,d=sl(e.align,d,this.right-c);else{let i=this.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);t=h+sl(e.align,this.top,this.bottom-i-e.labels.padding-this._computeTitleHeight())}let u=sl(o,d,d+c);a.textAlign=s.textAlign(so(o)),a.textBaseline="middle",a.strokeStyle=i.color,a.fillStyle=i.color,a.font=r.string,sV(a,i.text,u,t,r)}_computeTitleHeight(){let t=this.options.title,e=sK(t.font),i=sq(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,r,n;if(n8(t,this.left,this.right)&&n8(e,this.top,this.bottom)){for(i=0,n=this.legendHitBoxes;i<n.length;++i)if(n8(t,(r=n[i]).left,r.left+r.width)&&n8(e,r.top,r.top+r.height))return this.legendItems[i]}return null}handleEvent(t){var e;let i=this.options;if(("mousemove"!==(e=t.type)&&"mouseout"!==e||!i.onHover&&!i.onLeave)&&(!i.onClick||"click"!==e&&"mouseup"!==e))return;let r=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){let e=this._hoveredItem,n=lT(e,r);e&&!n&&nS(i.onLeave,[t,e,this],this),this._hoveredItem=r,r&&!n&&nS(i.onHover,[t,r,this],this)}else r&&nS(i.onClick,[t,r,this],this)}}function lI(t,e){let i=t.text?t.text.length:0;return e*i}class lR extends ok{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let r=nb(i.text)?i.text.length:1;this._padding=sq(i.padding);let n=r*sK(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){let t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){let e,i,r;let{top:n,left:s,bottom:a,right:o,options:l}=this,h=l.align,d=0;return this.isHorizontal()?(i=sl(h,s,o),r=n+t,e=o-s):("left"===l.position?(i=s+t,r=sl(h,a,n),d=-.5*nV):(i=o-t,r=sl(h,n,a),d=.5*nV),e=a-n),{titleX:i,titleY:r,maxWidth:e,rotation:d}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let i=sK(e.font),r=i.lineHeight,n=r/2+this._padding.top,{titleX:s,titleY:a,maxWidth:o,rotation:l}=this._drawArgs(n);sV(t,e.text,0,0,i,{color:e.color,maxWidth:o,rotation:l,textAlign:so(e.align),textBaseline:"middle",translation:[s,a]})}}const lL=new WeakMap,l$={average(t){let e,i;if(!t.length)return!1;let r=0,n=0,s=0;for(e=0,i=t.length;e<i;++e){let i=t[e].element;if(i&&i.hasValue()){let t=i.tooltipPosition();r+=t.x,n+=t.y,++s}}return{x:r/s,y:n/s}},nearest(t,e){let i,r,n;if(!t.length)return!1;let s=e.x,a=e.y,o=Number.POSITIVE_INFINITY;for(i=0,r=t.length;i<r;++i){let r=t[i].element;if(r&&r.hasValue()){let t=r.getCenterPoint(),i=n5(e,t);i<o&&(o=i,n=r)}}if(n){let t=n.tooltipPosition();s=t.x,a=t.y}return{x:s,y:a}}};function lF(t,e){return e&&(nb(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function lz(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function lN(t,e){let i=t.chart.ctx,{body:r,footer:n,title:s}=t,{boxWidth:a,boxHeight:o}=e,l=sK(e.bodyFont),h=sK(e.titleFont),d=sK(e.footerFont),c=s.length,u=n.length,f=r.length,p=sq(e.padding),g=p.height,m=0,x=r.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(x+=t.beforeBody.length+t.afterBody.length,c&&(g+=c*h.lineHeight+(c-1)*e.titleSpacing+e.titleMarginBottom),x){let t=e.displayColors?Math.max(o,l.lineHeight):l.lineHeight;g+=f*t+(x-f)*l.lineHeight+(x-1)*e.bodySpacing}u&&(g+=e.footerMarginTop+u*d.lineHeight+(u-1)*e.footerSpacing);let b=0,y=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=h.string,nP(t.title,y),i.font=l.string,nP(t.beforeBody.concat(t.afterBody),y),b=e.displayColors?a+2+e.boxPadding:0,nP(r,t=>{nP(t.before,y),nP(t.lines,y),nP(t.after,y)}),b=0,i.font=d.string,nP(t.footer,y),i.restore(),{width:m+=p.width,height:g}}function lV(t,e,i){let r=i.yAlign||e.yAlign||function(t,e){let{y:i,height:r}=e;return i<r/2?"top":i>t.height-r/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||function(t,e,i,r){let{x:n,width:s}=i,{width:a,chartArea:{left:o,right:l}}=t,h="center";return"center"===r?h=n<=(o+l)/2?"left":"right":n<=s/2?h="left":n>=a-s/2&&(h="right"),function(t,e,i,r){let{x:n,width:s}=r,a=i.caretSize+i.caretPadding;if("left"===t&&n+s+a>e.width||"right"===t&&n-s-a<0)return!0}(h,t,e,i)&&(h="center"),h}(t,e,i,r),yAlign:r}}function lW(t,e,i,r){let{caretSize:n,caretPadding:s,cornerRadius:a}=t,{xAlign:o,yAlign:l}=i,h=n+s,{topLeft:d,topRight:c,bottomLeft:u,bottomRight:f}=sU(a),p=function(t,e){let{x:i,width:r}=t;return"right"===e?i-=r:"center"===e&&(i-=r/2),i}(e,o),g=function(t,e,i){let{y:r,height:n}=t;return"top"===e?r+=i:"bottom"===e?r-=n+i:r-=n/2,r}(e,l,h);return"center"===l?"left"===o?p+=h:"right"===o&&(p-=h):"left"===o?p-=Math.max(d,u)+n:"right"===o&&(p+=Math.max(c,f)+n),{x:n4(p,0,r.width-e.width),y:n4(g,0,r.height-e.height)}}function lj(t,e,i){let r=sq(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-r.right:t.x+r.left}function lB(t,e){let i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}const lH={beforeTitle:ng,title(t){if(t.length>0){let e=t[0],i=e.chart.data.labels,r=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(r>0&&e.dataIndex<r)return i[e.dataIndex]}return""},afterTitle:ng,beforeBody:ng,beforeLabel:ng,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");let i=t.formattedValue;return nx(i)||(e+=i),e},labelColor(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:ng,afterBody:ng,beforeFooter:ng,footer:ng,afterFooter:ng};function lY(t,e,i,r){let n=t[e].call(i,r);return void 0===n?lH[e].call(i,r):n}class lX extends ok{static positioners=l$;constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),r=i.enabled&&e.options.animation&&i.animations,n=new aE(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=sJ(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"}))}getTitle(t,e){let{callbacks:i}=e,r=lY(i,"beforeTitle",this,t),n=lY(i,"title",this,t),s=lY(i,"afterTitle",this,t),a=[];return a=lF(a,lz(r)),a=lF(a,lz(n)),a=lF(a,lz(s))}getBeforeBody(t,e){return lF([],lz(lY(e.callbacks,"beforeBody",this,t)))}getBody(t,e){let{callbacks:i}=e,r=[];return nP(t,t=>{let e={before:[],lines:[],after:[]},n=lB(i,t);lF(e.before,lz(lY(n,"beforeLabel",this,t))),lF(e.lines,lY(n,"label",this,t)),lF(e.after,lz(lY(n,"afterLabel",this,t))),r.push(e)}),r}getAfterBody(t,e){return lF([],lz(lY(e.callbacks,"afterBody",this,t)))}getFooter(t,e){let{callbacks:i}=e,r=lY(i,"beforeFooter",this,t),n=lY(i,"footer",this,t),s=lY(i,"afterFooter",this,t),a=[];return a=lF(a,lz(r)),a=lF(a,lz(n)),a=lF(a,lz(s))}_createItems(t){let e,i;let r=this._active,n=this.chart.data,s=[],a=[],o=[],l=[];for(e=0,i=r.length;e<i;++e)l.push(function(t,e){let{element:i,datasetIndex:r,index:n}=e,s=t.getDatasetMeta(r).controller,{label:a,value:o}=s.getLabelAndValue(n);return{chart:t,label:a,parsed:s.getParsed(n),raw:t.data.datasets[r].data[n],formattedValue:o,dataset:s.getDataset(),dataIndex:n,datasetIndex:r,element:i}}(this.chart,r[e]));return t.filter&&(l=l.filter((e,i,r)=>t.filter(e,i,r,n))),t.itemSort&&(l=l.sort((e,i)=>t.itemSort(e,i,n))),nP(l,e=>{let i=lB(t.callbacks,e);s.push(lY(i,"labelColor",this,e)),a.push(lY(i,"labelPointStyle",this,e)),o.push(lY(i,"labelTextColor",this,e))}),this.labelColors=s,this.labelPointStyles=a,this.labelTextColors=o,this.dataPoints=l,l}update(t,e){let i;let r=this.options.setContext(this.getContext()),n=this._active,s=[];if(n.length){let t=l$[r.position].call(this,n,this._eventPosition);s=this._createItems(r),this.title=this.getTitle(s,r),this.beforeBody=this.getBeforeBody(s,r),this.body=this.getBody(s,r),this.afterBody=this.getAfterBody(s,r),this.footer=this.getFooter(s,r);let e=this._size=lN(this,r),a=Object.assign({},t,e),o=lV(this.chart,r,a),l=lW(r,a,o,this.chart);this.xAlign=o.xAlign,this.yAlign=o.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=s,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&r.external&&r.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,r){let n=this.getCaretPosition(t,i,r);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){let r,n,s,a,o,l;let{xAlign:h,yAlign:d}=this,{caretSize:c,cornerRadius:u}=i,{topLeft:f,topRight:p,bottomLeft:g,bottomRight:m}=sU(u),{x:x,y:b}=t,{width:y,height:v}=e;return"center"===d?(o=b+v/2,"left"===h?(n=(r=x)-c,a=o+c,l=o-c):(n=(r=x+y)+c,a=o-c,l=o+c),s=r):(n="left"===h?x+Math.max(f,g)+c:"right"===h?x+y-Math.max(p,m)-c:this.caretX,"top"===d?(o=(a=b)-c,r=n-c,s=n+c):(o=(a=b+v)+c,r=n+c,s=n-c),l=a),{x1:r,x2:n,x3:s,y1:a,y2:o,y3:l}}drawTitle(t,e,i){let r,n,s;let a=this.title,o=a.length;if(o){let l=ay(i.rtl,this.x,this.width);for(s=0,t.x=lj(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",r=sK(i.titleFont),n=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string;s<o;++s)e.fillText(a[s],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+n,s+1===o&&(t.y+=i.titleMarginBottom-n)}}_drawColorBox(t,e,i,r,n){let s=this.labelColors[i],a=this.labelPointStyles[i],{boxHeight:o,boxWidth:l}=n,h=sK(n.bodyFont),d=lj(this,"left",n),c=r.x(d),u=o<h.lineHeight?(h.lineHeight-o)/2:0,f=e.y+u;if(n.usePointStyle){let e={radius:Math.min(l,o)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},i=r.leftForLtr(c,l)+l/2,h=f+o/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,sI(t,e,i,h),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,sI(t,e,i,h)}else{t.lineWidth=ny(s.borderWidth)?Math.max(...Object.values(s.borderWidth)):s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;let e=r.leftForLtr(c,l),i=r.leftForLtr(r.xPlus(c,1),l-2),a=sU(s.borderRadius);Object.values(a).some(t=>0!==t)?(t.beginPath(),t.fillStyle=n.multiKeyBackground,sW(t,{x:e,y:f,w:l,h:o,radius:a}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),sW(t,{x:i,y:f+1,w:l-2,h:o-2,radius:a}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,f,l,o),t.strokeRect(e,f,l,o),t.fillStyle=s.backgroundColor,t.fillRect(i,f+1,l-2,o-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let r,n,s,a,o,l,h;let{body:d}=this,{bodySpacing:c,bodyAlign:u,displayColors:f,boxHeight:p,boxWidth:g,boxPadding:m}=i,x=sK(i.bodyFont),b=x.lineHeight,y=0,v=ay(i.rtl,this.x,this.width),_=function(i){e.fillText(i,v.x(t.x+y),t.y+b/2),t.y+=b+c},w=v.textAlign(u);for(e.textAlign=u,e.textBaseline="middle",e.font=x.string,t.x=lj(this,w,i),e.fillStyle=i.bodyColor,nP(this.beforeBody,_),y=f&&"right"!==w?"center"===u?g/2+m:g+2+m:0,a=0,l=d.length;a<l;++a){for(r=d[a],n=this.labelTextColors[a],e.fillStyle=n,nP(r.before,_),s=r.lines,f&&s.length&&(this._drawColorBox(e,t,a,v,i),b=Math.max(x.lineHeight,p)),o=0,h=s.length;o<h;++o)_(s[o]),b=x.lineHeight;nP(r.after,_)}y=0,b=x.lineHeight,nP(this.afterBody,_),t.y-=c}drawFooter(t,e,i){let r,n;let s=this.footer,a=s.length;if(a){let o=ay(i.rtl,this.x,this.width);for(t.x=lj(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=o.textAlign(i.footerAlign),e.textBaseline="middle",r=sK(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,n=0;n<a;++n)e.fillText(s[n],o.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,r){let{xAlign:n,yAlign:s}=this,{x:a,y:o}=t,{width:l,height:h}=i,{topLeft:d,topRight:c,bottomLeft:u,bottomRight:f}=sU(r.cornerRadius);e.fillStyle=r.backgroundColor,e.strokeStyle=r.borderColor,e.lineWidth=r.borderWidth,e.beginPath(),e.moveTo(a+d,o),"top"===s&&this.drawCaret(t,e,i,r),e.lineTo(a+l-c,o),e.quadraticCurveTo(a+l,o,a+l,o+c),"center"===s&&"right"===n&&this.drawCaret(t,e,i,r),e.lineTo(a+l,o+h-f),e.quadraticCurveTo(a+l,o+h,a+l-f,o+h),"bottom"===s&&this.drawCaret(t,e,i,r),e.lineTo(a+u,o+h),e.quadraticCurveTo(a,o+h,a,o+h-u),"center"===s&&"left"===n&&this.drawCaret(t,e,i,r),e.lineTo(a,o+d),e.quadraticCurveTo(a,o,a+d,o),e.closePath(),e.fill(),r.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,r=i&&i.x,n=i&&i.y;if(r||n){let i=l$[t.position].call(this,this._active,this._eventPosition);if(!i)return;let s=this._size=lN(this,t),a=Object.assign({},i,this._size),o=lV(e,t,a),l=lW(t,a,o,e);(r._to!==l.x||n._to!==l.y)&&(this.xAlign=o.xAlign,this.yAlign=o.yAlign,this.width=s.width,this.height=s.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let r={width:this.width,height:this.height},n={x:this.x,y:this.y};i=.001>Math.abs(i)?0:i;let s=sq(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,r,e),av(t,e.textDirection),n.y+=s.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),a_(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,r=t.map(({datasetIndex:t,index:e})=>{let i=this.chart.getDatasetMeta(t);if(!i)throw Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!nC(i,r),s=this._positionChanged(r,e);(n||s)&&(this._active=r,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,n=this._active||[],s=this._getActiveElements(t,n,e,i),a=this._positionChanged(s,t),o=e||!nC(s,n)||a;return o&&(this._active=s,(r.enabled||r.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),o}_getActiveElements(t,e,i,r){let n=this.options;if("mouseout"===t.type)return[];if(!r)return e;let s=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&s.reverse(),s}_positionChanged(t,e){let{caretX:i,caretY:r,options:n}=this,s=l$[n.position].call(this,t,e);return!1!==s&&(i!==s.x||r!==s.y)}}var lU=/*#__PURE__*/Object.freeze({__proto__:null,Colors:{id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(t,e,i){let r;if(!i.enabled)return;let{data:{datasets:n},options:s}=t.config,{elements:a}=s;if(!i.forceOverride&&(lx(n)||s&&(s.borderColor||s.backgroundColor)||a&&lx(a)))return;let o=(r=0,(e,i)=>{var n,s,a;let o=t.getDatasetMeta(i).controller;o instanceof aG?(n=r,e.backgroundColor=e.data.map(()=>lg(n++)),r=n):o instanceof aJ?(s=r,e.backgroundColor=e.data.map(()=>lm(s++)),r=s):o&&(a=r,e.borderColor=lg(a),e.backgroundColor=lm(a),r=++a)});n.forEach(o)}},Decimation:{id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){ly(t);return}let r=t.width;t.data.datasets.forEach((e,n)=>{let s;let{_data:a,indexAxis:o}=e,l=t.getDatasetMeta(n),h=a||e.data;if("y"===sG([o,t.options.indexAxis])||!l.controller.supportsDecimation)return;let d=t.scales[l.xAxisID];if("linear"!==d.type&&"time"!==d.type||t.options.parsing)return;let{start:c,count:u}=function(t,e){let i;let r=e.length,n=0,{iScale:s}=t,{min:a,max:o,minDefined:l,maxDefined:h}=s.getUserBounds();return l&&(n=n4(st(e,s.axis,a).lo,0,r-1)),i=h?n4(st(e,s.axis,o).hi+1,n,r)-n:r-n,{start:n,count:i}}(l,h),f=i.threshold||4*r;if(u<=f){lb(e);return}switch(nx(a)&&(e._data=h,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":s=function(t,e,i,r,n){let s,a,o,l,h;let d=n.samples||r;if(d>=i)return t.slice(e,e+i);let c=[],u=(i-2)/(d-2),f=0,p=e+i-1,g=e;for(s=0,c[f++]=t[g];s<d-2;s++){let r,n=0,d=0,p=Math.floor((s+1)*u)+1+e,m=Math.min(Math.floor((s+2)*u)+1,i)+e,x=m-p;for(r=p;r<m;r++)n+=t[r].x,d+=t[r].y;n/=x,d/=x;let b=Math.floor(s*u)+1+e,y=Math.min(Math.floor((s+1)*u)+1,i)+e,{x:v,y:_}=t[g];for(o=l=-1,r=b;r<y;r++)(l=.5*Math.abs((v-n)*(t[r].y-_)-(v-t[r].x)*(d-_)))>o&&(o=l,a=t[r],h=r);c[f++]=a,g=h}return c[f++]=t[p],c}(h,c,u,r,i);break;case"min-max":s=function(t,e,i,r){let n,s,a,o,l,h,d,c,u,f,p=0,g=0,m=[],x=t[e].x,b=t[e+i-1].x,y=b-x;for(n=e;n<e+i;++n){a=((s=t[n]).x-x)/y*r,o=s.y;let e=0|a;if(e===l)o<u?(u=o,h=n):o>f&&(f=o,d=n),p=(g*p+s.x)/++g;else{let i=n-1;if(!nx(h)&&!nx(d)){let e=Math.min(h,d),r=Math.max(h,d);e!==c&&e!==i&&m.push({...t[e],x:p}),r!==c&&r!==i&&m.push({...t[r],x:p})}n>0&&i!==c&&m.push(t[i]),m.push(s),l=e,g=0,u=f=o,h=d=c=n}}return m}(h,c,u,r);break;default:throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=s})},destroy(t){ly(t)}},Filler:{id:"filler",afterDatasetsUpdate(t,e,i){let r,n,s,a;let o=(t.data.datasets||[]).length,l=[];for(n=0;n<o;++n)s=(r=t.getDatasetMeta(n)).dataset,a=null,s&&s.options&&s instanceof ls&&(a={visible:t.isDatasetVisible(n),index:n,fill:function(t,e,i){var r,n;let s=function(t){let e=t.options,i=e.fill,r=nw(i&&i.target,i);return void 0===r&&(r=!!e.backgroundColor),!1!==r&&null!==r&&(!0===r?"origin":r)}(t);if(ny(s))return!isNaN(s.value)&&s;let a=parseFloat(s);return nv(a)&&Math.floor(a)===a?(r=s[0],n=a,("-"===r||"+"===r)&&(n=e+n),n!==e&&!(n<0)&&!(n>=i)&&n):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}(s,n,o),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:s}),r.$filler=a,l.push(a);for(n=0;n<o;++n)(a=l[n])&&!1!==a.fill&&(a.fill=function(t,e,i){let r;let n=t[e],s=n.fill,a=[e];if(!i)return s;for(;!1!==s&&-1===a.indexOf(s);){if(!nv(s))return s;if(!(r=t[s]))break;if(r.visible)return s;a.push(s),s=r.fill}return!1}(l,n,i.propagate))},beforeDraw(t,e,i){let r="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=n.length-1;e>=0;--e){let i=n[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),r&&i.fill&&lP(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;let r=t.getSortedVisibleDatasetMetas();for(let e=r.length-1;e>=0;--e){let i=r[e].$filler;lk(i)&&lP(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){let r=e.meta.$filler;lk(r)&&"beforeDatasetDraw"===i.drawTime&&lP(t.ctx,r,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}},Legend:{id:"legend",_element:lE,start(t,e,i){let r=t.legend=new lE({ctx:t.ctx,options:i,chart:t});oa.configure(t,r,i),oa.addBox(t,r)},stop(t){oa.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){let r=t.legend;oa.configure(t,r,i),r.options=i},afterUpdate(t){let e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){let r=e.datasetIndex,n=i.chart;n.isDatasetVisible(r)?(n.hide(r),e.hidden=!0):(n.show(r),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){let e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:r,textAlign:n,color:s,useBorderRadius:a,borderRadius:o}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{let l=t.controller.getStyle(i?0:void 0),h=sq(l.borderWidth);return{text:e[t.index].label,fillStyle:l.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:l.borderCapStyle,lineDash:l.borderDash,lineDashOffset:l.borderDashOffset,lineJoin:l.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:l.borderColor,pointStyle:r||l.pointStyle,rotation:l.rotation,textAlign:n||l.textAlign,borderRadius:a&&(o||l.borderRadius),datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}},SubTitle:{id:"subtitle",start(t,e,i){let r=new lR({ctx:t.ctx,options:i,chart:t});oa.configure(t,r,i),oa.addBox(t,r),lL.set(t,r)},stop(t){oa.removeBox(t,lL.get(t)),lL.delete(t)},beforeUpdate(t,e,i){let r=lL.get(t);oa.configure(t,r,i),r.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Title:{id:"title",_element:lR,start(t,e,i){!function(t,e){let i=new lR({ctx:t.ctx,options:e,chart:t});oa.configure(t,i,e),oa.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){let e=t.titleBlock;oa.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){let r=t.titleBlock;oa.configure(t,r,i),r.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}},Tooltip:{id:"tooltip",_element:lX,positioners:l$,afterInit(t,e,i){i&&(t.tooltip=new lX({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){let e=t.tooltip;if(e&&e._willRender()){let i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0}))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){let i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:lH},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]}});const lq=(t,e,i,r)=>("string"==typeof e?(i=t.push(e)-1,r.unshift({index:i,label:e})):isNaN(e)&&(i=null),i),lK=(t,e)=>null===t?null:n4(Math.round(t),0,e);function lG(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}function lJ(t,e,{horizontal:i,minRotation:r}){let n=n0(r),s=.75*e*(""+t).length;return Math.min(e/((i?Math.sin(n):Math.cos(n))||.001),s)}class lZ extends oE{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return nx(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:r,max:n}=this,s=t=>r=e?r:t,a=t=>n=i?n:t;if(t){let t=nK(r),e=nK(n);t<0&&e<0?a(0):t>0&&e>0&&s(0)}if(r===n){let e=0===n?1:Math.abs(.05*n);a(n+e),t||s(r-e)}this.min=r,this.max=n}getTickLimit(){let t;let e=this.options.ticks,{maxTicksLimit:i,stepSize:r}=e;return r?(t=Math.ceil(this.max/r)-Math.floor(this.min/r)+1)>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3):(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let r={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},n=this._range||this,s=function(t,e){let i,r,n,s;let a=[],{bounds:o,step:l,min:h,max:d,precision:c,count:u,maxTicks:f,maxDigits:p,includeBounds:g}=t,m=l||1,x=f-1,{min:b,max:y}=e,v=!nx(h),_=!nx(d),w=!nx(u),M=(y-b)/(p+1),k=nJ((y-b)/x/m)*m;if(k<1e-14&&!v&&!_)return[{value:b},{value:y}];(s=Math.ceil(y/k)-Math.floor(b/k))>x&&(k=nJ(s*k/x/m)*m),nx(c)||(k=Math.ceil(k*(i=Math.pow(10,c)))/i),"ticks"===o?(r=Math.floor(b/k)*k,n=Math.ceil(y/k)*k):(r=b,n=y),v&&_&&l&&function(t,e){let i=Math.round(t);return i-e<=t&&i+e>=t}((d-h)/l,k/1e3)?(s=Math.round(Math.min((d-h)/k,f)),k=(d-h)/s,r=h,n=d):w?(r=v?h:r,k=((n=_?d:n)-r)/(s=u-1)):s=nG(s=(n-r)/k,Math.round(s),k/1e3)?Math.round(s):Math.ceil(s);let S=Math.max(n1(k),n1(r));r=Math.round(r*(i=Math.pow(10,nx(c)?S:c)))/i,n=Math.round(n*i)/i;let P=0;for(v&&(g&&r!==h?(a.push({value:h}),r<h&&P++,nG(Math.round((r+P*k)*i)/i,h,lJ(h,M,t))&&P++):r<h&&P++);P<s;++P){let t=Math.round((r+P*k)*i)/i;if(_&&t>d)break;a.push({value:t})}return _&&g&&n!==d?a.length&&nG(a[a.length-1].value,d,lJ(d,M,t))?a[a.length-1].value=d:a.push({value:d}):_&&n!==d||a.push({value:n}),a}(r,n);return"ticks"===t.bounds&&nQ(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let r=(i-e)/Math.max(t.length-1,1)/2;e-=r,i+=r}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return sw(t,this.chart.options.locale,this.options.ticks.format)}}class lQ extends lZ{static id="linear";static defaults={ticks:{callback:sk.formatters.numeric}};determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=nv(t)?t:0,this.max=nv(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=n0(this.options.ticks.minRotation),r=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,r.lineHeight/((t?Math.sin(i):Math.cos(i))||.001)))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}const l0=t=>Math.floor(nq(t)),l1=(t,e)=>Math.pow(10,l0(t)+e);function l2(t){let e=t/Math.pow(10,l0(t));return 1===e}function l5(t,e,i){let r=Math.pow(10,i);return Math.ceil(e/r)-Math.floor(t/r)}class l3 extends oE{static id="logarithmic";static defaults={ticks:{callback:sk.formatters.logarithmic,major:{enabled:!0}}};constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=lZ.prototype.parse.apply(this,[t,e]);if(0===i){this._zero=!0;return}return nv(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=nv(t)?Math.max(0,t):null,this.max=nv(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!nv(this._userMin)&&(this.min=t===l1(this.min,0)?l1(this.min,-1):l1(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,r=this.max,n=e=>i=t?i:e,s=t=>r=e?r:t;i===r&&(i<=0?(n(1),s(10)):(n(l1(i,-1)),s(l1(r,1)))),i<=0&&n(l1(r,-1)),r<=0&&s(l1(i,1)),this.min=i,this.max=r}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=function(t,{min:e,max:i}){e=n_(t.min,e);let r=[],n=l0(e),s=function(t,e){let i=e-t,r=l0(i);for(;l5(t,e,r)>10;)r++;for(;10>l5(t,e,r);)r--;return Math.min(r,l0(t))}(e,i),a=s<0?Math.pow(10,Math.abs(s)):1,o=Math.pow(10,s),l=n>s?Math.pow(10,n):0,h=Math.round((e-l)*a)/a,d=Math.floor((e-l)/o/10)*o*10,c=Math.floor((h-d)/Math.pow(10,s)),u=n_(t.min,Math.round((l+d+c*Math.pow(10,s))*a)/a);for(;u<i;)r.push({value:u,major:l2(u),significand:c}),c>=10?c=c<15?15:20:c++,c>=20&&(c=2,a=++s>=0?1:a),u=Math.round((l+d+c*Math.pow(10,s))*a)/a;let f=n_(t.max,u);return r.push({value:f,major:l2(f),significand:c}),r}(e,this);return"ticks"===t.bounds&&nQ(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return void 0===t?"0":sw(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=nq(t),this._valueRange=nq(this.max)-nq(t)}getPixelForValue(t){return((void 0===t||0===t)&&(t=this.min),null===t||isNaN(t))?NaN:this.getPixelForDecimal(t===this.min?0:(nq(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function l6(t){let e=t.ticks;if(e.display&&t.display){let t=sq(e.backdropPadding);return nw(e.font&&e.font.size,sA.font.size)+t.height}return 0}function l9(t,e,i,r,n){return t===r||t===n?{start:e-i/2,end:e+i/2}:t<r||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function l4(t,e,i,r){let{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,nW);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let s=1;s<r;s++)i=t.getPointPosition(s,e),n.lineTo(i.x,i.y)}}class l8 extends lZ{static id="radialLinear";static defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:sk.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"};static descriptors={angleLines:{_fallback:"grid"}};constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=sq(l6(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=nv(t)&&!isNaN(t)?t:0,this.max=nv(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/l6(this.options))}generateTickLabels(t){lZ.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((t,e)=>{let i=nS(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""}).filter((t,e)=>this.chart.getDataVisibility(e))}fit(){let t=this.options;t.display&&t.pointLabels.display?function(t){let e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),r=[],n=[],s=t._pointLabels.length,a=t.options.pointLabels,o=a.centerPointLabels?nV/s:0;for(let d=0;d<s;d++){var l,h;let s=a.setContext(t.getPointLabelContext(d));n[d]=s.padding;let c=t.getPointPosition(d,t.drawingArea+n[d],o),u=sK(s.font),f=(l=t.ctx,h=nb(h=t._pointLabels[d])?h:[h],{w:/**
 * @private
 */// eslint-disable-next-line complexity
function(t,e,i,r){let n,s,a,o,l;let h=(r=r||{}).data=r.data||{},d=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(h=r.data={},d=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let c=0,u=i.length;for(n=0;n<u;n++)// Undefined strings and arrays should not be measured
if(null==(o=i[n])||nb(o)){if(nb(o))// to do maybe simplify this function a bit so we can do this more recursively?
for(s=0,a=o.length;s<a;s++)// Undefined strings and arrays should not be measured
null==(l=o[s])||nb(l)||(c=sO(t,h,d,c,l))}else c=sO(t,h,d,c,o);t.restore();let f=d.length/2;if(f>i.length){for(n=0;n<f;n++)delete h[d[n]];d.splice(0,f)}return c}(l,u.string,h),h:h.length*u.lineHeight});r[d]=f;let p=n6(t.getIndexAngle(d)+o),g=Math.round(p*(180/nV)),m=l9(g,c.x,f.w,0,180),x=l9(g,c.y,f.h,90,270);!function(t,e,i,r,n){let s=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i)),o=0,l=0;r.start<e.l?(o=(e.l-r.start)/s,t.l=Math.min(t.l,e.l-o)):r.end>e.r&&(o=(r.end-e.r)/s,t.r=Math.max(t.r,e.r+o)),n.start<e.t?(l=(e.t-n.start)/a,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}(i,e,p,m,x)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){let r;let n=[],s=t._pointLabels.length,a=t.options,{centerPointLabels:o,display:l}=a.pointLabels,h={extra:l6(a)/2,additionalAngle:o?nV/s:0};for(let a=0;a<s;a++){h.padding=i[a],h.size=e[a];let s=function(t,e,i){var r,n,s,a;let o=t.drawingArea,{extra:l,additionalAngle:h,padding:d,size:c}=i,u=t.getPointPosition(e,o+l+d,h),f=Math.round(n6(u.angle+nY)*(180/nV)),p=(r=u.y,n=c.h,90===f||270===f?r-=n/2:(f>270||f<90)&&(r-=n),r),g=0===f||180===f?"center":f<180?"left":"right",m=(s=u.x,a=c.w,"right"===g?s-=a:"center"===g&&(s-=a/2),s);return{visible:!0,x:u.x,y:p,textAlign:g,left:m,top:p,right:m+c.w,bottom:p+c.h}}(t,a,h);n.push(s),"auto"===l&&(s.visible=function(t,e){if(!e)return!0;let{left:i,top:r,right:n,bottom:s}=t,a=sL({x:i,y:r},e)||sL({x:i,y:s},e)||sL({x:n,y:r},e)||sL({x:n,y:s},e);return!a}(s,r),s.visible&&(r=s))}return n}(t,r,n)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,r){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,r))}getIndexAngle(t){let e=nW/(this._pointLabels.length||1),i=this.options.startAngle||0;return n6(t*e+n0(i))}getDistanceFromCenterForValue(t){if(nx(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(nx(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return sJ(this.getContext(),{label:i,index:t,type:"pointLabel"})}}getPointPosition(t,e,i=0){let r=this.getIndexAngle(t)-nY+i;return{x:Math.cos(r)*e+this.xCenter,y:Math.sin(r)*e+this.yCenter,angle:r}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:r,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:r,bottom:n}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),l4(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t,e,i;let r=this.ctx,n=this.options,{angleLines:s,grid:a,border:o}=n,l=this._pointLabels.length;if(n.pointLabels.display&&function(t,e){let{ctx:i,options:{pointLabels:r}}=t;for(let n=e-1;n>=0;n--){let e=t._pointLabelItems[n];if(!e.visible)continue;let s=r.setContext(t.getPointLabelContext(n));!function(t,e,i){let{left:r,top:n,right:s,bottom:a}=i,{backdropColor:o}=e;if(!nx(o)){let i=sU(e.borderRadius),l=sq(e.backdropPadding);t.fillStyle=o;let h=r-l.left,d=n-l.top,c=s-r+l.width,u=a-n+l.height;Object.values(i).some(t=>0!==t)?(t.beginPath(),sW(t,{x:h,y:d,w:c,h:u,radius:i}),t.fill()):t.fillRect(h,d,c,u)}}(i,s,e);let a=sK(s.font),{x:o,y:l,textAlign:h}=e;sV(i,t._pointLabels[n],o,l+a.lineHeight/2,a,{color:s.color,textAlign:h,textBaseline:"middle"})}}(this,l),a.display&&this.ticks.forEach((t,i)=>{if(0!==i){e=this.getDistanceFromCenterForValue(t.value);let r=this.getContext(i),n=a.setContext(r),s=o.setContext(r);!function(t,e,i,r,n){let s=t.ctx,a=e.circular,{color:o,lineWidth:l}=e;(a||r)&&o&&l&&!(i<0)&&(s.save(),s.strokeStyle=o,s.lineWidth=l,s.setLineDash(n.dash),s.lineDashOffset=n.dashOffset,s.beginPath(),l4(t,i,a,r),s.closePath(),s.stroke(),s.restore())}(this,n,e,l,s)}}),s.display){for(r.save(),t=l-1;t>=0;t--){let a=s.setContext(this.getPointLabelContext(t)),{color:o,lineWidth:l}=a;l&&o&&(r.lineWidth=l,r.strokeStyle=o,r.setLineDash(a.borderDash),r.lineDashOffset=a.borderDashOffset,e=this.getDistanceFromCenterForValue(n.ticks.reverse?this.min:this.max),i=this.getPointPosition(t,e),r.beginPath(),r.moveTo(this.xCenter,this.yCenter),r.lineTo(i.x,i.y),r.stroke())}r.restore()}}drawBorder(){}drawLabels(){let t,e;let i=this.ctx,r=this.options,n=r.ticks;if(!n.display)return;let s=this.getIndexAngle(0);i.save(),i.translate(this.xCenter,this.yCenter),i.rotate(s),i.textAlign="center",i.textBaseline="middle",this.ticks.forEach((s,a)=>{if(0===a&&!r.reverse)return;let o=n.setContext(this.getContext(a)),l=sK(o.font);if(t=this.getDistanceFromCenterForValue(this.ticks[a].value),o.showLabelBackdrop){i.font=l.string,e=i.measureText(s.label).width,i.fillStyle=o.backdropColor;let r=sq(o.backdropPadding);i.fillRect(-e/2-r.left,-t-l.size/2-r.top,e+r.width,l.size+r.height)}sV(i,s.label,0,-t,l,{color:o.color,strokeColor:o.textStrokeColor,strokeWidth:o.textStrokeWidth})}),i.restore()}drawTitle(){}}const l7={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},ht=/* #__PURE__ */Object.keys(l7);function he(t,e){return t-e}function hi(t,e){if(nx(e))return null;let i=t._adapter,{parser:r,round:n,isoWeekday:s}=t._parseOpts,a=e;return("function"==typeof r&&(a=r(a)),nv(a)||(a="string"==typeof r?i.parse(a,r):i.parse(a)),null===a)?null:(n&&(a="week"===n&&(nZ(s)||!0===s)?i.startOf(a,"isoWeek",s):i.startOf(a,n)),+a)}function hr(t,e,i,r){let n=ht.length;for(let s=ht.indexOf(t);s<n-1;++s){let t=l7[ht[s]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=r)return ht[s]}return ht[n-1]}function hn(t,e,i){if(i){if(i.length){let{lo:r,hi:n}=n7(i,e),s=i[r]>=e?i[r]:i[n];t[s]=!0}}else t[e]=!0}function hs(t,e,i){let r,n;let s=[],a={},o=e.length;for(r=0;r<o;++r)a[n=e[r]]=r,s.push({value:n,major:!1});return 0!==o&&i?function(t,e,i,r){let n,s;let a=t._adapter,o=+a.startOf(e[0].value,r),l=e[e.length-1].value;for(n=o;n<=l;n=+a.add(n,1,r))(s=i[n])>=0&&(e[s].major=!0);return e}(t,s,a,i):s}class ha extends oE{static id="time";static defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}};constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),r=this._adapter=new a1._date(t.adapters.date);r.init(e),nE(i.displayFormats,r.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:hi(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:r,max:n,minDefined:s,maxDefined:a}=this.getUserBounds();function o(t){s||isNaN(t.min)||(r=Math.min(r,t.min)),a||isNaN(t.max)||(n=Math.max(n,t.max))}s&&a||(o(this._getLabelBounds()),("ticks"!==t.bounds||"labels"!==t.ticks.source)&&o(this.getMinMax(!1))),r=nv(r)&&!isNaN(r)?r:+e.startOf(Date.now(),i),n=nv(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(r,n-1),this.max=Math.max(r+1,n)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,r="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let n=this.min,s=this.max,a=/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */function(t,e,i){let r=0,n=t.length;for(;r<n&&t[r]<e;)r++;for(;n>r&&t[n-1]>i;)n--;return r>0||n<t.length?t.slice(r,n):t}(r,n,s);return this._unit=e.unit||(i.autoSkip?hr(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,r,n){for(let s=ht.length-1;s>=ht.indexOf(i);s--){let i=ht[s];if(l7[i].common&&t._adapter.diff(n,r,i)>=e-1)return i}return ht[i?ht.indexOf(i):0]}(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=ht.indexOf(t)+1,i=ht.length;e<i;++e)if(l7[ht[e]].common)return ht[e]}(this._unit):void 0,this.initOffsets(r),t.reverse&&a.reverse(),hs(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e,i,r=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),r=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);let s=t.length<3?.5:.25;r=n4(r,0,s),n=n4(n,0,s),this._offsets={start:r,end:n,factor:1/(r+1+n)}}_generate(){let t,e;let i=this._adapter,r=this.min,n=this.max,s=this.options,a=s.time,o=a.unit||hr(a.minUnit,r,n,this._getLabelCapacity(r)),l=nw(s.ticks.stepSize,1),h="week"===o&&a.isoWeekday,d=nZ(h)||!0===h,c={},u=r;if(d&&(u=+i.startOf(u,"isoWeek",h)),u=+i.startOf(u,d?"day":o),i.diff(n,r,o)>1e5*l)throw Error(r+" and "+n+" are too far apart with stepSize of "+l+" "+o);let f="data"===s.ticks.source&&this.getDataTimestamps();for(t=u,e=0;t<n;t=+i.add(t,l,o),e++)hn(c,t,f);return(t===n||"ticks"===s.bounds||1===e)&&hn(c,t,f),Object.keys(c).sort(he).map(t=>+t)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let i=this.options,r=i.time.displayFormats,n=this._unit,s=e||r[n];return this._adapter.format(t,s)}_tickFormatFunction(t,e,i,r){let n=this.options,s=n.ticks.callback;if(s)return nS(s,[t,e,i],this);let a=n.time.displayFormats,o=this._unit,l=this._majorUnit,h=o&&a[o],d=l&&a[l],c=i[e],u=l&&d&&c&&c.major;return this._adapter.format(t,r||(u?d:h))}generateTickLabels(t){let e,i,r;for(e=0,i=t.length;e<i;++e)(r=t[e]).label=this._tickFormatFunction(r.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,r=n0(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(r),s=Math.sin(r),a=this._resolveTickFontOptions(0).size;return{w:i*n+a*s,h:i*s+a*n}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,r=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,hs(this,[t],this._majorUnit),r),s=this._getLabelSize(n),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,e=r.length;t<e;++t)i=i.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){let t,e;let i=this._cache.labels||[];if(i.length)return i;let r=this.getLabels();for(t=0,e=r.length;t<e;++t)i.push(hi(this,r[t]));return this._cache.labels=this._normalized?i:this.normalize(i)}normalize(t){return sn(t.sort(he))}}function ho(t,e,i){let r,n,s,a,o=0,l=t.length-1;i?(e>=t[o].pos&&e<=t[l].pos&&({lo:o,hi:l}=st(t,"pos",e)),{pos:r,time:s}=t[o],{pos:n,time:a}=t[l]):(e>=t[o].time&&e<=t[l].time&&({lo:o,hi:l}=st(t,"time",e)),{time:r,pos:s}=t[o],{time:n,pos:a}=t[l]);let h=n-r;return h?s+(a-s)*(e-r)/h:s}class hl extends ha{static id="timeseries";static defaults=ha.defaults;constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=ho(e,this.min),this._tableRange=ho(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let e,i,r;let{min:n,max:s}=this,a=[],o=[];for(e=0,i=t.length;e<i;++e)(r=t[e])>=n&&r<=s&&a.push(r);if(a.length<2)return[{time:n,pos:0},{time:s,pos:1}];for(e=0,i=a.length;e<i;++e)Math.round((a[e+1]+a[e-1])/2)!==(r=a[e])&&o.push({time:r,pos:e/(i-1)});return o}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return i.includes(t)&&i.length||i.splice(0,0,t),i.includes(e)&&1!==i.length||i.push(e),i.sort((t,e)=>t-e)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t}getDecimalForValue(t){return(ho(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return ho(this._table,i*this._tableRange+this._minPos,!0)}}var hh=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:class extends oE{static id="category";static defaults={ticks:{callback:lG}};constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let t=this.getLabels();for(let{index:i,label:r}of e)t[i]===r&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(nx(t))return null;let i=this.getLabels();return lK(e=isFinite(e)&&i[e]===t?e:function(t,e,i,r){let n=t.indexOf(e);if(-1===n)return lq(t,e,i,r);let s=t.lastIndexOf(e);return n!==s?i:n}(i,t,nw(e,t),this._addedLabels),i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:r}=this.getMinMax(!0);"ticks"!==this.options.bounds||(t||(i=0),e||(r=this.getLabels().length-1)),this.min=i,this.max=r}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,r=[],n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)r.push({value:i});return r}getLabelForValue(t){return lG.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}},LinearScale:lQ,LogarithmicScale:l3,RadialLinearScale:l8,TimeScale:ha,TimeSeriesScale:hl});const hd=[aZ,lu,lU,hh],hc={modes:{/**
     * Point mode returns all elements that hit test based on the event position
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @return {AnnotationElement[]} - elements that are found
     */point:(t,e)=>hf(t,e,{intersect:!0}),/**
     * Nearest mode returns the element closest to the event position
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found (only 1 element)
     */nearest:(t,e,i)=>{let r;return r=Number.POSITIVE_INFINITY,hf(t,e,i).reduce((t,n)=>{var s;let a=n.getCenterPoint(),o="x"===(s=i.axis)?{x:e.x,y:a.y}:"y"===s?{x:a.x,y:e.y}:a,l=(0,$50e8ddfc489f09fc$exports.distanceBetweenPoints)(e,o);return l<r?(t=[n],r=l):l===r&&t.push(n),t},[]).sort((t,e)=>t._index-e._index).slice(0,1)},/**
     * x mode returns the elements that hit-test at the current x coordinate
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */x:(t,e,i)=>hf(t,e,{intersect:i.intersect,axis:"x"}),/**
     * y mode returns the elements that hit-test at the current y coordinate
     * @param {Object} state - the state of the plugin
     * @param {ChartEvent} event - the event we are find things at
     * @param {Object} options - interaction options to use
     * @return {AnnotationElement[]} - elements that are found
     */y:(t,e,i)=>hf(t,e,{intersect:i.intersect,axis:"y"})}};/**
 * Returns all elements that hit test based on the event position
 * @param {Object} state - the state of the plugin
 * @param {ChartEvent} event - the event we are find things at
 * @param {Object} options - interaction options to use
 * @return {AnnotationElement[]} - elements that are found
 */function hu(t,e,i){let r=hc.modes[i.mode]||hc.modes.nearest;return r(t,e,i)}function hf(t,e,i){return t.visibleElements.filter(t=>{var r;return i.intersect?t.inRange(e.x,e.y):"x"!==(r=i.axis)&&"y"!==r?t.inRange(e.x,e.y,"x",!0)||t.inRange(e.x,e.y,"y",!0):t.inRange(e.x,e.y,r,!0)})}const hp=(t,e)=>e>t||t.length>e.length&&t.slice(0,e.length)===e,hg=(t,e,i)=>Math.min(i,Math.max(e,t));/**
 * @param {Point} point
 * @param {{x: number, y: number, x2: number, y2: number}} rect
 * @param {InteractionAxis} axis
 * @param {number} borderWidth
 * @returns {boolean}
 */function hm(t,{x:e,y:i,x2:r,y2:n},s,a){let o=a/2,l=t.x>=e-o-.001&&t.x<=r+o+.001,h=t.y>=i-o-.001&&t.y<=n+o+.001;return"x"===s?l:"y"===s?h:l&&h}/**
 * @param {AnnotationElement} element
 * @param {boolean} useFinalPosition
 * @returns {Point}
 */function hx(t,e){let{centerX:i,centerY:r}=t.getProps(["centerX","centerY"],e);return{x:i,y:r}}const hb=t=>"string"==typeof t&&t.endsWith("%"),hy=t=>parseFloat(t)/100,hv=t=>hg(hy(t),0,1),h_=(t,e)=>({x:t,y:e,x2:t,y2:e,width:0,height:0}),hw={box:t=>h_(t.centerX,t.centerY),ellipse:t=>({centerX:t.centerX,centerY:t.centerX,radius:0,width:0,height:0}),label:t=>h_(t.centerX,t.centerY),line:t=>h_(t.x,t.y),point:t=>({centerX:t.centerX,centerY:t.centerY,radius:0,width:0,height:0}),polygon:t=>h_(t.centerX,t.centerY)};/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import('../../types/element').AnnotationBoxModel } AnnotationBoxModel
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 * @typedef { import('../../types/options').AnnotationPointCoordinates } AnnotationPointCoordinates
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 * @typedef { import('../../types/label').LabelPositionObject } LabelPositionObject
 *//**
 * @param {number} size
 * @param {number|string} position
 * @returns {number}
 */function hM(t,e){return"start"===e?0:"end"===e?t:hb(e)?hv(e)*t:t/2}/**
 * @param {number} size
 * @param {number|string} value
 * @param {boolean} [positivePercent=true]
 * @returns {number}
 */function hk(t,e,i=!0){return"number"==typeof e?e:hb(e)?(i?hv(e):hy(e))*t:t}/**
 * @param {{x: number|string, y: number|string}|string|number} value
 * @param {string|number} defaultValue
 * @returns {{x: number|string, y: number|string}}
 */function hS(t,e="center"){return(0,$50e8ddfc489f09fc$exports.isObject)(t)?{x:(0,$50e8ddfc489f09fc$exports.valueOrDefault)(t.x,e),y:(0,$50e8ddfc489f09fc$exports.valueOrDefault)(t.y,e)}:{x:t=(0,$50e8ddfc489f09fc$exports.valueOrDefault)(t,e),y:t}}/**
 * @param {AnnotationPointCoordinates} options
 * @returns {boolean}
 */function hP(t){return t&&((0,$50e8ddfc489f09fc$exports.defined)(t.xValue)||(0,$50e8ddfc489f09fc$exports.defined)(t.yValue))}/**
 * @param {Chart} chart
 * @param {AnnotationBoxModel} properties
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationElement}
 */function hC(t,e,i){let r=i.init;return r?!0===r?hA(e,i):function(t,e,i){let r=(0,$50e8ddfc489f09fc$exports.callback)(i.init,[{chart:t,properties:e,options:i}]);return!0===r?hA(e,i):(0,$50e8ddfc489f09fc$exports.isObject)(r)?r:void 0}(t,e,i):void 0}/**
 * @param {Object} options
 * @param {Array} hooks
 * @param {Object} hooksContainer
 * @returns {boolean}
 */function hD(t,e,i){let r=!1;return e.forEach(e=>{(0,$50e8ddfc489f09fc$exports.isFunction)(t[e])?(r=!0,i[e]=t[e]):(0,$50e8ddfc489f09fc$exports.defined)(i[e])&&delete i[e]}),r}function hA(t,e){let i=e.type||"line";return hw[i](t)}const hO=new Map,hT=t=>isNaN(t)||t<=0,hE=t=>t.reduce(function(t,e){return t+e.string},"");/**
 * @typedef { import('chart.js').Point } Point
 * @typedef { import('../../types/label').CoreLabelOptions } CoreLabelOptions
 * @typedef { import('../../types/options').PointAnnotationOptions } PointAnnotationOptions
 *//**
 * Determine if content is an image or a canvas.
 * @param {*} content
 * @returns boolean|undefined
 * @todo move this function to chart.js helpers
 */function hI(t){if(t&&"object"==typeof t){let e=t.toString();return"[object HTMLImageElement]"===e||"[object HTMLCanvasElement]"===e}}/**
 * Set the translation on the canvas if the rotation must be applied.
 * @param {CanvasRenderingContext2D} ctx - chart canvas context
 * @param {Point} point - the point of translation
 * @param {number} rotation - rotation (in degrees) to apply
 */function hR(t,{x:e,y:i},r){r&&(t.translate(e,i),t.rotate((0,$50e8ddfc489f09fc$exports.toRadians)(r)),t.translate(-e,-i))}/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 * @returns {boolean|undefined}
 */function hL(t,e){if(e&&e.borderWidth)return t.lineCap=e.borderCapStyle,t.setLineDash(e.borderDash),t.lineDashOffset=e.borderDashOffset,t.lineJoin=e.borderJoinStyle,t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,!0}/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} options
 */function h$(t,e){t.shadowColor=e.backgroundShadowColor,t.shadowBlur=e.shadowBlur,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY}/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CoreLabelOptions} options
 * @returns {{width: number, height: number}}
 */function hF(t,e){let i=e.content;if(hI(i))return{width:hk(i.width,e.width),height:hk(i.height,e.height)};let r=e.font,n=(0,$50e8ddfc489f09fc$exports.isArray)(r)?r.map(t=>(0,$50e8ddfc489f09fc$exports.toFont)(t)):[(0,$50e8ddfc489f09fc$exports.toFont)(r)],s=e.textStrokeWidth,a=(0,$50e8ddfc489f09fc$exports.isArray)(i)?i:[i],o=a.join()+hE(n)+s+(t._measureText?"-spriting":"");return hO.has(o)||hO.set(o,function(t,e,i,r){t.save();let n=e.length,s=0,a=r;for(let o=0;o<n;o++){let n=i[Math.min(o,i.length-1)];t.font=n.string;let l=e[o];s=Math.max(s,t.measureText(l).width+r),a+=n.lineHeight}return t.restore(),{width:s,height:a}}(t,a,n,s)),hO.get(o)}/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {Object} options
 */function hz(t,e,i){let{x:r,y:n,width:s,height:a}=e;t.save(),h$(t,i);let o=hL(t,i);t.fillStyle=i.backgroundColor,t.beginPath(),(0,$50e8ddfc489f09fc$exports.addRoundedRectPath)(t,{x:r,y:n,w:s,h:a,radius:/**
 * @param {Object} obj
 * @param {number} from
 * @param {number} to
 * @returns {Object}
 */function(t,e,i){for(let e of Object.keys(t))t[e]=hg(t[e],0,i);return t}((0,$50e8ddfc489f09fc$exports.toTRBLCorners)(i.borderRadius),0,Math.min(s,a)/2)}),t.closePath(),t.fill(),o&&(t.shadowColor=i.borderShadowColor,t.stroke()),t.restore()}const hN={xScaleID:{min:"xMin",max:"xMax",start:"left",end:"right",startProp:"x",endProp:"x2"},yScaleID:{min:"yMin",max:"yMax",start:"bottom",end:"top",startProp:"y",endProp:"y2"}};/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import("chart.js").Point } Point
 * @typedef { import('../../types/element').AnnotationBoxModel } AnnotationBoxModel
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 * @typedef { import('../../types/options').LineAnnotationOptions } LineAnnotationOptions
 * @typedef { import('../../types/options').PointAnnotationOptions } PointAnnotationOptions
 * @typedef { import('../../types/options').PolygonAnnotationOptions } PolygonAnnotationOptions
 *//**
 * @param {Scale} scale
 * @param {number|string} value
 * @param {number} fallback
 * @returns {number}
 */function hV(t,e,i){return e="number"==typeof e?e:t.parse(e),(0,$50e8ddfc489f09fc$exports.isFinite)(e)?t.getPixelForValue(e):i}/**
 * Search the scale defined in chartjs by the axis related to the annotation options key.
 * @param {{ [key: string]: Scale }} scales
 * @param {CoreAnnotationOptions} options
 * @param {string} key
 * @returns {string}
 */function hW(t,e,i){let r=e[i];if(r||"scaleID"===i)return r;let n=i.charAt(0),s=Object.values(t).filter(t=>t.axis&&t.axis===n);return s.length?s[0].id:n}/**
 * @param {Scale} scale
 * @param {{min: number, max: number, start: number, end: number}} options
 * @returns {{start: number, end: number}|undefined}
 */function hj(t,e){if(t){let i=t.options.reverse,r=hV(t,e.min,i?e.end:e.start),n=hV(t,e.max,i?e.start:e.end);return{start:r,end:n}}}/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {Point}
 */function hB(t,e){let{chartArea:i,scales:r}=t,n=r[hW(r,e,"xScaleID")],s=r[hW(r,e,"yScaleID")],a=i.width/2,o=i.height/2;return n&&(a=hV(n,e.xValue,n.left+n.width/2)),s&&(o=hV(s,e.yValue,s.top+s.height/2)),{x:a,y:o}}/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */function hH(t,e){let i=t.scales,r=i[hW(i,e,"xScaleID")],n=i[hW(i,e,"yScaleID")];if(!r&&!n)return{};let{left:s,right:a}=r||t.chartArea,{top:o,bottom:l}=n||t.chartArea,h=hU(r,{min:e.xMin,max:e.xMax,start:s,end:a});s=h.start,a=h.end;let d=hU(n,{min:e.yMin,max:e.yMax,start:l,end:o});return{x:s,y:o=d.start,x2:a,y2:l=d.end,width:a-s,height:l-o,centerX:s+(a-s)/2,centerY:o+(l-o)/2}}/**
 * @param {Chart} chart
 * @param {PointAnnotationOptions|PolygonAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */function hY(t,e){if(!hP(e)){let i=hH(t,e),r=e.radius;(!r||isNaN(r))&&(r=Math.min(i.width,i.height)/2,e.radius=r);let n=2*r,s=i.centerX+e.xAdjust,a=i.centerY+e.yAdjust;return{x:s-r,y:a-r,x2:s+r,y2:a+r,centerX:s,centerY:a,width:n,height:n,radius:r}}return function(t,e){let i=hB(t,e),r=2*e.radius;return{x:i.x-e.radius+e.xAdjust,y:i.y-e.radius+e.yAdjust,x2:i.x+e.radius+e.xAdjust,y2:i.y+e.radius+e.yAdjust,centerX:i.x+e.xAdjust,centerY:i.y+e.yAdjust,radius:e.radius,width:r,height:r}}(t,e)}/**
 * @param {Chart} chart
 * @param {CoreAnnotationOptions} options
 * @param {boolean} [centerBased=false]
 * @returns {AnnotationBoxModel}
 */function hX(t,e){let i=hH(t,e);return i.initProperties=hC(t,i,e),i.elements=[{type:"label",optionScope:"label",properties:function(t,e,i){let r=i.label;r.backgroundColor="transparent",r.callout.display=!1;let n=hS(r.position),s=(0,$50e8ddfc489f09fc$exports.toPadding)(r.padding),a=hF(t.ctx,r),o=function({properties:t,options:e},i,r,n){let{x:s,x2:a,width:o}=t;return hq({start:s,end:a,size:o,borderWidth:e.borderWidth},{position:r.x,padding:{start:n.left,end:n.right},adjust:e.label.xAdjust,size:i.width})}({properties:e,options:i},a,n,s),l=function({properties:t,options:e},i,r,n){let{y:s,y2:a,height:o}=t;return hq({start:s,end:a,size:o,borderWidth:e.borderWidth},{position:r.y,padding:{start:n.top,end:n.bottom},adjust:e.label.yAdjust,size:i.height})}({properties:e,options:i},a,n,s),h=a.width+s.width,d=a.height+s.height;return{x:o,y:l,x2:o+h,y2:l+d,width:h,height:d,centerX:o+h/2,centerY:l+d/2,rotation:r.rotation}}(t,i,e),initProperties:i.initProperties}],i}function hU(t,e){let i=hj(t,e)||e;return{start:Math.min(i.start,i.end),end:Math.max(i.start,i.end)}}function hq(t,e){let{start:i,end:r,borderWidth:n}=t,{position:s,padding:{start:a,end:o},adjust:l}=e,h=r-n-i-a-o-e.size;return i+n/2+l+hM(h,s)}/**
 * @typedef {import('chart.js').Point} Point
 *//**
 * Rotate a `point` relative to `center` point by `angle`
 * @param {Point} point - the point to rotate
 * @param {Point} center - center point for rotation
 * @param {number} angle - angle for rotation, in radians
 * @returns {Point} rotated point
 */function hK(t,e,i){let r=Math.cos(i),n=Math.sin(i),s=e.x,a=e.y;return{x:s+r*(t.x-s)-n*(t.y-a),y:a+n*(t.x-s)+r*(t.y-a)}}const hG=["enter","leave"],hJ=hG.concat("click");function hZ({state:t,event:e},i,r,n){let s;for(let a of r)0>n.indexOf(a)&&(s=hQ(a.options[i]||t.listeners[i],a,e)||s);return s}function hQ(t,e,i){return!0===(0,$50e8ddfc489f09fc$exports.callback)(t,[e.$context,i])}/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import('../../types/options').AnnotationPluginOptions } AnnotationPluginOptions
 * @typedef { import('../../types/element').AnnotationElement } AnnotationElement
 */const h0=["afterDraw","beforeDraw"];/**
 * @param {Object} state
 * @param {AnnotationElement} element
 * @param {string} hook
 */function h1(t,e,i){if(t.hooked){let r=e.options[i]||t.hooks[i];return(0,$50e8ddfc489f09fc$exports.callback)(r,[e.$context])}}function h2(t,e,i,r){var n;if((0,$50e8ddfc489f09fc$exports.isFinite)(e[i])&&(n=t.options,!((0,$50e8ddfc489f09fc$exports.defined)(n[i])||(0,$50e8ddfc489f09fc$exports.defined)(n[r])))){let r=t[i]!==e[i];return t[i]=e[i],r}}function h5(t,e,i,r){for(let n of i){let i=t[n];if((0,$50e8ddfc489f09fc$exports.defined)(i)){let t=e.parse(i);r.min=Math.min(r.min,t),r.max=Math.max(r.max,t)}}}class h3 extends ok{inRange(t,e,i,r){let{x:n,y:s}=hK({x:t,y:e},this.getCenterPoint(r),(0,$50e8ddfc489f09fc$exports.toRadians)(-this.options.rotation));return hm({x:n,y:s},this.getProps(["x","y","x2","y2"],r),i,this.options.borderWidth)}getCenterPoint(t){return hx(this,t)}draw(t){t.save(),hR(t,this.getCenterPoint(),this.options.rotation),hz(t,this,this.options),t.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(t,e){return hX(t,e)}}h3.id="boxAnnotation",h3.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,label:{backgroundColor:"transparent",borderWidth:0,callout:{display:!1},color:"black",content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,opacity:void 0,padding:6,position:"center",rotation:void 0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},h3.defaultRoutes={borderColor:"color",backgroundColor:"color"},h3.descriptors={label:{_fallback:!0}};const h6=["left","bottom","top","right"];class h9 extends ok{inRange(t,e,i,r){let{x:n,y:s}=hK({x:t,y:e},this.getCenterPoint(r),(0,$50e8ddfc489f09fc$exports.toRadians)(-this.rotation));return hm({x:n,y:s},this.getProps(["x","y","x2","y2"],r),i,this.options.borderWidth)}getCenterPoint(t){return hx(this,t)}draw(t){let e=this.options,i=!(0,$50e8ddfc489f09fc$exports.defined)(this._visible)||this._visible;e.display&&e.content&&i&&(t.save(),hR(t,this.getCenterPoint(),this.rotation),function(t,e){let{pointX:i,pointY:r,options:n}=e,s=n.callout,a=s&&s.display&&function(t,e){let i=e.position;return h6.includes(i)?i:function(t,e){let{x:i,y:r,x2:n,y2:s,width:a,height:o,pointX:l,pointY:h,centerX:d,centerY:c,rotation:u}=t,f={x:d,y:c},p=e.start,g=hk(a,p),m=hk(o,p),x=[i,i+g,i+g,n],b=[r+m,s,r,s],y=[];for(let t=0;t<4;t++){let e=hK({x:x[t],y:b[t]},f,(0,$50e8ddfc489f09fc$exports.toRadians)(u));y.push({position:h6[t],distance:(0,$50e8ddfc489f09fc$exports.distanceBetweenPoints)(e,{x:l,y:h})})}return y.sort((t,e)=>t.distance-e.distance)[0].position}(t,e)}(e,s);if(!a||function(t,e,i){let{pointX:r,pointY:n}=t,s=e.margin,a=r,o=n;return"left"===i?a+=s:"right"===i?a-=s:"top"===i?o+=s:"bottom"===i&&(o-=s),t.inRange(a,o)}(e,s,a))return;t.save(),t.beginPath();let o=hL(t,s);if(!o)return t.restore();let{separatorStart:l,separatorEnd:h}=function(t,e){let i,r;let{x:n,y:s,x2:a,y2:o}=t,l=function(t,e){let{width:i,height:r,options:n}=t,s=n.callout.margin+n.borderWidth/2;return"right"===e?i+s:"bottom"===e?r+s:-s}(t,e);return r="left"===e||"right"===e?{x:(i={x:n+l,y:s}).x,y:o}:{x:a,y://  position 'top' or 'bottom'
(i={x:n,y:s+l}).y},{separatorStart:i,separatorEnd:r}}(e,a),{sideStart:d,sideEnd:c}=function(t,e,i){let r,n;let{y:s,width:a,height:o,options:l}=t,h=l.callout.start,d=function(t,e){let i=e.side;return"left"===t||"top"===t?-i:i}(e,l.callout);return n="left"===e||"right"===e?{x:(r={x:i.x,y:s+hk(o,h)}).x+d,y:r.y}:{x://  position 'top' or 'bottom'
(r={x:i.x+hk(a,h),y:i.y}).x,y:r.y+d},{sideStart:r,sideEnd:n}}(e,a,l);(s.margin>0||0===n.borderWidth)&&(t.moveTo(l.x,l.y),t.lineTo(h.x,h.y)),t.moveTo(d.x,d.y),t.lineTo(c.x,c.y);let u=hK({x:i,y:r},e.getCenterPoint(),(0,$50e8ddfc489f09fc$exports.toRadians)(-e.rotation));t.lineTo(u.x,u.y),t.stroke(),t.restore()}(t,this),hz(t,this,e),/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{x: number, y: number, width: number, height: number}} rect
 * @param {CoreLabelOptions} options
 */function(t,e,i){let r=i.content;if(hI(r)){t.save(),t.globalAlpha=function(t,e){let i=(0,$50e8ddfc489f09fc$exports.isNumber)(t)?t:e;return(0,$50e8ddfc489f09fc$exports.isNumber)(i)?hg(i,0,1):1}(i.opacity,r.style.opacity),t.drawImage(r,e.x,e.y,e.width,e.height),t.restore();return}let n=(0,$50e8ddfc489f09fc$exports.isArray)(r)?r:[r],s=i.font,a=(0,$50e8ddfc489f09fc$exports.isArray)(s)?s.map(t=>(0,$50e8ddfc489f09fc$exports.toFont)(t)):[(0,$50e8ddfc489f09fc$exports.toFont)(s)],o=i.color,l=(0,$50e8ddfc489f09fc$exports.isArray)(o)?o:[o],h=/**
 * @param {{x: number, width: number}} size
 * @param {CoreLabelOptions} options
 * @returns {number}
 */function(t,e){let{x:i,width:r}=t,n=e.textAlign;return"center"===n?i+r/2:"end"===n||"right"===n?i+r:i}(e,i),d=e.y+i.textStrokeWidth/2;t.save(),t.textBaseline="middle",t.textAlign=i.textAlign,function(t,e){if(e.textStrokeWidth>0)return(// https://stackoverflow.com/questions/13627111/drawing-text-with-an-outer-stroke-with-html5s-canvas
t.lineJoin="round",t.miterLimit=2,t.lineWidth=e.textStrokeWidth,t.strokeStyle=e.textStrokeColor,!0)}(t,i)&&function(t,{x:e,y:i},r,n){t.beginPath();let s=0;r.forEach(function(r,a){let o=n[Math.min(a,n.length-1)],l=o.lineHeight;t.font=o.string,t.strokeText(r,e,i+l/2+s),s+=l}),t.stroke()}(t,{x:h,y:d},n,a),function(t,{x:e,y:i},r,{fonts:n,colors:s}){let a=0;r.forEach(function(r,o){let l=s[Math.min(o,s.length-1)],h=n[Math.min(o,n.length-1)],d=h.lineHeight;t.beginPath(),t.font=h.string,t.fillStyle=l,t.fillText(r,e,i+d/2+a),a+=d,t.fill()})}(t,{x:h,y:d},n,{fonts:a,colors:l}),t.restore()}(t,function({x:t,y:e,width:i,height:r,options:n}){let s=n.borderWidth/2,a=(0,$50e8ddfc489f09fc$exports.toPadding)(n.padding);return{x:t+a.left+s,y:e+a.top+s,width:i-a.left-a.right-n.borderWidth,height:r-a.top-a.bottom-n.borderWidth}}(this),e),t.restore())}resolveElementProperties(t,e){let i;if(hP(e))i=hB(t,e);else{let{centerX:r,centerY:n}=hH(t,e);i={x:r,y:n}}let r=(0,$50e8ddfc489f09fc$exports.toPadding)(e.padding),n=hF(t.ctx,e),s=function(t,e,i,r){let n=e.width+r.width+i.borderWidth,s=e.height+r.height+i.borderWidth,a=hS(i.position,"center"),o=h4(t.x,n,i.xAdjust,a.x),l=h4(t.y,s,i.yAdjust,a.y);return{x:o,y:l,x2:o+n,y2:l+s,width:n,height:s,centerX:o+n/2,centerY:l+s/2}}(i,n,e,r);return{initProperties:hC(t,s,e),pointX:i.x,pointY:i.y,...s,rotation:e.rotation}}}function h4(t,e,i=0,r){return t-hM(e,r)+i}h9.id="labelAnnotation",h9.defaults={adjustScaleRange:!0,backgroundColor:"transparent",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:0,callout:{borderCapStyle:"butt",borderColor:void 0,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:1,display:!1,margin:5,position:"auto",side:5,start:"50%"},color:"black",content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,init:void 0,opacity:void 0,padding:6,position:"center",rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},h9.defaultRoutes={borderColor:"color"};const h8=(t,e,i)=>({x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}),h7=(t,e,i)=>h8(e,i,Math.abs((t-e.y)/(i.y-e.y))).x,dt=(t,e,i)=>h8(e,i,Math.abs((t-e.x)/(i.x-e.x))).y,de=t=>t*t,di=(t,e,{x:i,y:r,x2:n,y2:s},a)=>"y"===a?{start:Math.min(r,s),end:Math.max(r,s),value:e}:{start:Math.min(i,n),end:Math.max(i,n),value:t},dr=(t,e,i,r)=>(1-r)*(1-r)*t+2*(1-r)*r*e+r*r*i,dn=(t,e,i,r)=>({x:dr(t.x,e.x,i.x,r),y:dr(t.y,e.y,i.y,r)}),ds=(t,e,i,r)=>2*(1-r)*(e-t)+2*r*(i-e),da=(t,e,i,r)=>-Math.atan2(ds(t.x,e.x,i.x,r),ds(t.y,e.y,i.y,r))+.5*$50e8ddfc489f09fc$exports.PI;class dl extends ok{inRange(t,e,i,r){let n=this.options.borderWidth/2;if("x"!==i&&"y"!==i){let i={mouseX:t,mouseY:e},{path:s,ctx:a}=this;if(s){hL(a,this.options);let{chart:n}=this.$context,o=t*n.currentDevicePixelRatio,l=e*n.currentDevicePixelRatio,h=a.isPointInStroke(s,o,l)||dc(this,i,r);return a.restore(),h}let o=de(n);return function(t,{mouseX:e,mouseY:i},r=.001,n){let s,a;// Adapted from https://stackoverflow.com/a/6853926/25507
let{x:o,y:l,x2:h,y2:d}=t.getProps(["x","y","x2","y2"],n),c=h-o,u=d-l,f=de(c)+de(u),p=0===f?-1:((e-o)*c+(i-l)*u)/f;return p<0?(s=o,a=l):p>1?(s=h,a=d):(s=o+p*c,a=l+p*u),de(e-s)+de(i-a)<=r}(this,i,o,r)||dc(this,i,r)}return function(t,{mouseX:e,mouseY:i},r,{hBorderWidth:n,useFinalPosition:s}){let a=di(e,i,t.getProps(["x","y","x2","y2"],s),r);return a.value>=a.start-n&&a.value<=a.end+n||dc(t,{mouseX:e,mouseY:i},s,r)}(this,{mouseX:t,mouseY:e},i,{hBorderWidth:n,useFinalPosition:r})}getCenterPoint(t){return hx(this,t)}draw(t){let{x:e,y:i,x2:r,y2:n,cp:s,options:a}=this;if(t.save(),!hL(t,a))return t.restore();h$(t,a);let o=Math.sqrt(Math.pow(r-e,2)+Math.pow(n-i,2));if(a.curve&&s)return function(t,e,i,r){let{x:n,y:s,x2:a,y2:o,options:l}=e,{startOpts:h,endOpts:d,startAdjust:c,endAdjust:u}=dp(e),f={x:n,y:s},p={x:a,y:o},g=da(f,i,p,0),m=da(f,i,p,1)-$50e8ddfc489f09fc$exports.PI,x=dn(f,i,p,c/r),b=dn(f,i,p,1-u/r),y=new Path2D;t.beginPath(),y.moveTo(x.x,x.y),y.quadraticCurveTo(i.x,i.y,b.x,b.y),t.shadowColor=l.borderShadowColor,t.stroke(y),e.path=y,e.ctx=t,dx(t,x,{angle:g,adjust:c},h),dx(t,b,{angle:m,adjust:u},d)}(t,this,s,o),t.restore();let{startOpts:l,endOpts:h,startAdjust:d,endAdjust:c}=dp(this),u=Math.atan2(n-i,r-e);t.translate(e,i),t.rotate(u),t.beginPath(),t.moveTo(0+d,0),t.lineTo(o-c,0),t.shadowColor=a.borderShadowColor,t.stroke(),dm(t,0,d,l),dm(t,o,-c,h),t.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(t,e){let i=/**
 * @param {Chart} chart
 * @param {LineAnnotationOptions} options
 * @returns {AnnotationBoxModel}
 */function(t,e){let{scales:i,chartArea:r}=t,n=i[e.scaleID],s={x:r.left,y:r.top,x2:r.right,y2:r.bottom};return n?function(t,e,i){let r=hV(t,i.value,NaN),n=hV(t,i.endValue,r);t.isHorizontal()?(e.x=r,e.x2=n):(e.y=r,e.y2=n)}(n,s,e):function(t,e,i){for(let r of Object.keys(hN)){let n=t[hW(t,i,r)];if(n){let{min:t,max:s,start:a,end:o,startProp:l,endProp:h}=hN[r],d=hj(n,{min:i[t],max:i[s],start:n[a],end:n[o]});e[l]=d.start,e[h]=d.end}}}(i,s,e),s}(t,e),{x:r,y:n,x2:s,y2:a}=i,o=function({x:t,y:e,x2:i,y2:r},{top:n,right:s,bottom:a,left:o}){return!(t<o&&i<o||t>s&&i>s||e<n&&r<n||e>a&&r>a)}(i,t.chartArea),l=o?function(t,e,i){let{x:r,y:n}=dd(t,e,i),{x:s,y:a}=dd(e,t,i);return{x:r,y:n,x2:s,y2:a,width:Math.abs(s-r),height:Math.abs(a-n)}}({x:r,y:n},{x:s,y:a},t.chartArea):{x:r,y:n,x2:s,y2:a,width:Math.abs(s-r),height:Math.abs(a-n)};if(l.centerX=(s+r)/2,l.centerY=(a+n)/2,l.initProperties=hC(t,l,e),e.curve){let t={x:l.x,y:l.y},i={x:l.x2,y:l.y2};l.cp=function(t,e,i){let{x:r,y:n,x2:s,y2:a,centerX:o,centerY:l}=t,h=hS(e.controlPoint,0),d={x:o+hk(i,h.x,!1),y:l+hk(i,h.y,!1)};return hK(d,{x:o,y:l},Math.atan2(a-n,s-r))}(l,e,(0,$50e8ddfc489f09fc$exports.distanceBetweenPoints)(t,i))}let h=function(t,e,i){let r=i.borderWidth,n=(0,$50e8ddfc489f09fc$exports.toPadding)(i.padding),s=hF(t.ctx,i),a=s.width+n.width+r,o=s.height+n.height+r;return function(t,e,i,r){let{width:n,height:s,padding:a}=i,{xAdjust:o,yAdjust:l}=e,h={x:t.x,y:t.y},d={x:t.x2,y:t.y2},c="auto"===e.rotation?function(t){let{x:e,y:i,x2:r,y2:n}=t,s=Math.atan2(n-i,r-e);// Flip the rotation if it goes > PI/2 or < -PI/2, so label stays upright
return s>$50e8ddfc489f09fc$exports.PI/2?s-$50e8ddfc489f09fc$exports.PI:s<-($50e8ddfc489f09fc$exports.PI/2)?s+$50e8ddfc489f09fc$exports.PI:s}(t):(0,$50e8ddfc489f09fc$exports.toRadians)(e.rotation),u=function(t,e,i){let r=Math.cos(i),n=Math.sin(i);return{w:Math.abs(t*r)+Math.abs(e*n),h:Math.abs(t*n)+Math.abs(e*r)}}(n,s,c),f=function(t,e,i,r){let n=function(t,e){let{x:i,x2:r,y:n,y2:s}=t,a=Math.min(n,s)-e.top,o=Math.min(i,r)-e.left,l=e.bottom-Math.max(n,s),h=e.right-Math.max(i,r);return{x:Math.min(o,h),y:Math.min(a,l),dx:o<=h?1:-1,dy:a<=l?1:-1}}(t,r);return"start"===e.position?du({w:t.x2-t.x,h:t.y2-t.y},i,e,n):"end"===e.position?1-du({w:t.x-t.x2,h:t.y-t.y2},i,e,n):hM(1,e.position)}(t,e,{labelSize:u,padding:a},r),p=t.cp?dn(h,t.cp,d,f):h8(h,d,f),g={size:u.w,min:r.left,max:r.right,padding:a.left},m={size:u.h,min:r.top,max:r.bottom,padding:a.top},x=df(p.x,g)+o,b=df(p.y,m)+l;return{x:x-n/2,y:b-s/2,x2:x+n/2,y2:b+s/2,centerX:x,centerY:b,pointX:p.x,pointY:p.y,width:n,height:s,rotation:(0,$50e8ddfc489f09fc$exports.toDegrees)(c)}}(e,i,{width:a,height:o,padding:n},t.chartArea)}(t,l,e.label);return(// additonal prop to manage zoom/pan
h._visible=o,l.elements=[{type:"label",optionScope:"label",properties:h,initProperties:l.initProperties}],l)}}dl.id="lineAnnotation";const dh={backgroundColor:void 0,backgroundShadowColor:void 0,borderColor:void 0,borderDash:void 0,borderDashOffset:void 0,borderShadowColor:void 0,borderWidth:void 0,display:void 0,fill:void 0,length:void 0,shadowBlur:void 0,shadowOffsetX:void 0,shadowOffsetY:void 0,width:void 0};function dd({x:t,y:e},i,{top:r,right:n,bottom:s,left:a}){return t<a&&(e=dt(a,{x:t,y:e},i),t=a),t>n&&(e=dt(n,{x:t,y:e},i),t=n),e<r&&(t=h7(r,{x:t,y:e},i),e=r),e>s&&(t=h7(s,{x:t,y:e},i),e=s),{x:t,y:e}}function dc(t,{mouseX:e,mouseY:i},r,n){let s=t.label;return s.options.display&&s.inRange(e,i,n,r)}function du(t,e,i,r){let{labelSize:n,padding:s}=e,a=t.w*r.dx,o=t.h*r.dy,l=a>0&&(n.w/2+s.left-r.x)/a,h=o>0&&(n.h/2+s.top-r.y)/o;return hg(Math.max(l,h),0,.25)}function df(t,e){let{size:i,min:r,max:n,padding:s}=e,a=i/2;return i>n-r?(n+r)/2:(r>=t-s-a&&(t=r+s+a),n<=t+s+a&&(t=n-s-a),t)}function dp(t){let e=t.options,i=e.arrowHeads&&e.arrowHeads.start,r=e.arrowHeads&&e.arrowHeads.end;return{startOpts:i,endOpts:r,startAdjust:dg(t,i),endAdjust:dg(t,r)}}function dg(t,e){if(!e||!e.display)return 0;let{length:i,width:r}=e,n=t.options.borderWidth/2;return Math.abs(h7(0,{x:i,y:r+n},{x:0,y:n}))}function dm(t,e,i,r){if(!r||!r.display)return;let{length:n,width:s,fill:a,backgroundColor:o,borderColor:l}=r,h=Math.abs(e-n)+i;t.beginPath(),h$(t,r),hL(t,r),t.moveTo(h,-s),t.lineTo(e+i,0),t.lineTo(h,s),!0===a?(t.fillStyle=o||l,t.closePath(),t.fill(),t.shadowColor="transparent"):t.shadowColor=r.borderShadowColor,t.stroke()}function dx(t,{x:e,y:i},{angle:r,adjust:n},s){s&&s.display&&(t.save(),t.translate(e,i),t.rotate(r),dm(t,0,-n,s),t.restore())}dl.defaults={adjustScaleRange:!0,arrowHeads:{display:!1,end:Object.assign({},dh),fill:!1,length:12,start:Object.assign({},dh),width:6},borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:2,curve:!1,controlPoint:{y:"-50%"},display:!0,endValue:void 0,init:void 0,label:{backgroundColor:"rgba(0,0,0,0.8)",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderColor:"black",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:6,borderShadowColor:"transparent",borderWidth:0,callout:Object.assign({},h9.defaults.callout),color:"#fff",content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,opacity:void 0,padding:6,position:"center",rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},scaleID:void 0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,value:void 0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},dl.descriptors={arrowHeads:{start:{_fallback:!0},end:{_fallback:!0},_fallback:!0}},dl.defaultRoutes={borderColor:"color"};class db extends ok{inRange(t,e,i,r){let n=this.options.rotation,s=this.options.borderWidth;if("x"!==i&&"y"!==i)return function(t,e,i,r){let{width:n,height:s,centerX:a,centerY:o}=e,l=n/2,h=s/2;if(l<=0||h<=0)return!1;// https://stackoverflow.com/questions/7946187/point-and-ellipse-rotated-position-test-algorithm
let d=(0,$50e8ddfc489f09fc$exports.toRadians)(i||0),c=r/2||0,u=Math.cos(d),f=Math.sin(d),p=Math.pow(u*(t.x-a)+f*(t.y-o),2),g=Math.pow(f*(t.x-a)-u*(t.y-o),2);return p/Math.pow(l+c,2)+g/Math.pow(h+c,2)<=1.0001}({x:t,y:e},this.getProps(["width","height","centerX","centerY"],r),n,s);let{x:a,y:o,x2:l,y2:h}=this.getProps(["x","y","x2","y2"],r),d=s/2,c="y"===i?{start:o,end:h}:{start:a,end:l},u=hK({x:t,y:e},this.getCenterPoint(r),(0,$50e8ddfc489f09fc$exports.toRadians)(-n));return u[i]>=c.start-d-.001&&u[i]<=c.end+d+.001}getCenterPoint(t){return hx(this,t)}draw(t){let{width:e,height:i,centerX:r,centerY:n,options:s}=this;t.save(),hR(t,this.getCenterPoint(),s.rotation),h$(t,this.options),t.beginPath(),t.fillStyle=s.backgroundColor;let a=hL(t,s);t.ellipse(r,n,i/2,e/2,$50e8ddfc489f09fc$exports.PI/2,0,2*$50e8ddfc489f09fc$exports.PI),t.fill(),a&&(t.shadowColor=s.borderShadowColor,t.stroke()),t.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(t,e){return hX(t,e)}}db.id="ellipseAnnotation",db.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,label:Object.assign({},h3.defaults.label),rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0},db.defaultRoutes={borderColor:"color",backgroundColor:"color"},db.descriptors={label:{_fallback:!0}};class dy extends ok{inRange(t,e,i,r){let{x:n,y:s,x2:a,y2:o,width:l}=this.getProps(["x","y","x2","y2","width"],r),h=this.options.borderWidth;if("x"!==i&&"y"!==i){var d,c,u;return d={x:t,y:e},c=this.getCenterPoint(r),u=l/2,!!d&&!!c&&!(u<=0)&&Math.pow(d.x-c.x,2)+Math.pow(d.y-c.y,2)<=Math.pow(u+h/2,2)}let f=h/2,p="y"===i?{start:s,end:o,value:e}:{start:n,end:a,value:t};return p.value>=p.start-f&&p.value<=p.end+f}getCenterPoint(t){return hx(this,t)}draw(t){let e=this.options,i=e.borderWidth;if(e.radius<.1)return;t.save(),t.fillStyle=e.backgroundColor,h$(t,e);let r=hL(t,e);!/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {{radius: number, options: PointAnnotationOptions}} element
 * @param {number} x
 * @param {number} y
 */function(t,e,i,r){let{radius:n,options:s}=e,a=s.pointStyle,o=s.rotation,l=(o||0)*$50e8ddfc489f09fc$exports.RAD_PER_DEG;if(hI(a)){t.save(),t.translate(i,r),t.rotate(l),t.drawImage(a,-a.width/2,-a.height/2,a.width,a.height),t.restore();return}hT(n)||function(t,{x:e,y:i,radius:r,rotation:n,style:s,rad:a}){let o,l,h,d;switch(t.beginPath(),s){// Default includes circle
default:t.arc(e,i,r,0,$50e8ddfc489f09fc$exports.TAU),t.closePath();break;case"triangle":t.moveTo(e+Math.sin(a)*r,i-Math.cos(a)*r),a+=$50e8ddfc489f09fc$exports.TWO_THIRDS_PI,t.lineTo(e+Math.sin(a)*r,i-Math.cos(a)*r),a+=$50e8ddfc489f09fc$exports.TWO_THIRDS_PI,t.lineTo(e+Math.sin(a)*r,i-Math.cos(a)*r),t.closePath();break;case"rectRounded":// NOTE: the rounded rect implementation changed to use `arc` instead of
// `quadraticCurveTo` since it generates better results when rect is
// almost a circle. 0.516 (instead of 0.5) produces results with visually
// closer proportion to the previous impl and it is inscribed in the
// circle with `radius`. For more details, see the following PRs:
// https://github.com/chartjs/Chart.js/issues/5597
// https://github.com/chartjs/Chart.js/issues/5858
d=.516*r,h=r-d,o=Math.cos(a+$50e8ddfc489f09fc$exports.QUARTER_PI)*h,l=Math.sin(a+$50e8ddfc489f09fc$exports.QUARTER_PI)*h,t.arc(e-o,i-l,d,a-$50e8ddfc489f09fc$exports.PI,a-$50e8ddfc489f09fc$exports.HALF_PI),t.arc(e+l,i-o,d,a-$50e8ddfc489f09fc$exports.HALF_PI,a),t.arc(e+o,i+l,d,a,a+$50e8ddfc489f09fc$exports.HALF_PI),t.arc(e-l,i+o,d,a+$50e8ddfc489f09fc$exports.HALF_PI,a+$50e8ddfc489f09fc$exports.PI),t.closePath();break;case"rect":if(!n){h=Math.SQRT1_2*r,t.rect(e-h,i-h,2*h,2*h);break}a+=$50e8ddfc489f09fc$exports.QUARTER_PI;/* falls through */case"rectRot":o=Math.cos(a)*r,l=Math.sin(a)*r,t.moveTo(e-o,i-l),t.lineTo(e+l,i-o),t.lineTo(e+o,i+l),t.lineTo(e-l,i+o),t.closePath();break;case"crossRot":a+=$50e8ddfc489f09fc$exports.QUARTER_PI;/* falls through */case"cross":o=Math.cos(a)*r,l=Math.sin(a)*r,t.moveTo(e-o,i-l),t.lineTo(e+o,i+l),t.moveTo(e+l,i-o),t.lineTo(e-l,i+o);break;case"star":o=Math.cos(a)*r,l=Math.sin(a)*r,t.moveTo(e-o,i-l),t.lineTo(e+o,i+l),t.moveTo(e+l,i-o),t.lineTo(e-l,i+o),a+=$50e8ddfc489f09fc$exports.QUARTER_PI,o=Math.cos(a)*r,l=Math.sin(a)*r,t.moveTo(e-o,i-l),t.lineTo(e+o,i+l),t.moveTo(e+l,i-o),t.lineTo(e-l,i+o);break;case"line":o=Math.cos(a)*r,l=Math.sin(a)*r,t.moveTo(e-o,i-l),t.lineTo(e+o,i+l);break;case"dash":t.moveTo(e,i),t.lineTo(e+Math.cos(a)*r,i+Math.sin(a)*r)}t.fill()}(t,{x:i,y:r,radius:n,rotation:o,style:a,rad:l})}(t,this,this.centerX,this.centerY),r&&!hI(e.pointStyle)&&(t.shadowColor=e.borderShadowColor,t.stroke()),t.restore(),e.borderWidth=i}resolveElementProperties(t,e){let i=hY(t,e);return i.initProperties=hC(t,i,e),i}}dy.id="pointAnnotation",dy.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,pointStyle:"circle",radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},dy.defaultRoutes={borderColor:"color",backgroundColor:"color"};class dv extends ok{inRange(t,e,i,r){if("x"!==i&&"y"!==i)return this.options.radius>=.1&&this.elements.length>1&&function(t,e,i,r){let n=!1,s=t[t.length-1].getProps(["bX","bY"],r);for(let a of t){let t=a.getProps(["bX","bY"],r);t.bY>i!=s.bY>i&&e<(s.bX-t.bX)*(i-t.bY)/(s.bY-t.bY)+t.bX&&(n=!n),s=t}return n}(this.elements,t,e,r);let n=hK({x:t,y:e},this.getCenterPoint(r),(0,$50e8ddfc489f09fc$exports.toRadians)(-this.options.rotation)),s=this.elements.map(t=>"y"===i?t.bY:t.bX);return n[i]>=Math.min(...s)&&n[i]<=Math.max(...s)}getCenterPoint(t){return hx(this,t)}draw(t){let{elements:e,options:i}=this;t.save(),t.beginPath(),t.fillStyle=i.backgroundColor,h$(t,i);let r=hL(t,i),n=!0;for(let i of e)n?(t.moveTo(i.x,i.y),n=!1):t.lineTo(i.x,i.y);t.closePath(),t.fill(),r&&(t.shadowColor=i.borderShadowColor,t.stroke()),t.restore()}resolveElementProperties(t,e){let i=hY(t,e),{sides:r,rotation:n}=e,s=[],a=2*$50e8ddfc489f09fc$exports.PI/r,o=n*$50e8ddfc489f09fc$exports.RAD_PER_DEG;for(let n=0;n<r;n++,o+=a){let r=function({centerX:t,centerY:e},{radius:i,borderWidth:r},n){let s=r/2,a=Math.sin(n),o=Math.cos(n),l={x:t+a*i,y:e-o*i};return{type:"point",optionScope:"point",properties:{x:l.x,y:l.y,centerX:l.x,centerY:l.y,bX:t+a*(i+s),bY:e-o*(i+s)}}}(i,e,o);r.initProperties=hC(t,i,e),s.push(r)}return i.elements=s,i}}dv.id="polygonAnnotation",dv.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,point:{radius:0},radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,sides:3,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0},dv.defaultRoutes={borderColor:"color",backgroundColor:"color"};const d_={box:h3,ellipse:db,label:h9,line:dl,point:dy,polygon:dv};/**
 * Register fallback for annotation elements
 * For example lineAnnotation options would be looked through:
 * - the annotation object (options.plugins.annotation.annotations[id])
 * - element options (options.elements.lineAnnotation)
 * - element defaults (defaults.elements.lineAnnotation)
 * - annotation plugin defaults (defaults.plugins.annotation, this is what we are registering here)
 */Object.keys(d_).forEach(t=>{sA.describe(`elements.${d_[t].id}`,{_fallback:"plugins.annotation.common"})});const dw={update:Object.assign},dM=hJ.concat(h0),dk=(t,e)=>(0,$50e8ddfc489f09fc$exports.isObject)(e)?dA(t,e):t,dS=t=>"color"===t||"font"===t;/**
 * Resolve the annotation type, checking if is supported.
 * @param {string} [type=line] - annotation type
 * @returns {string} resolved annotation type
 */function dP(t="line"){return d_[t]?t:(console.warn(`Unknown annotation type: '${t}', defaulting to 'line'`),"line")}function dC(t,e,i,r){let n=d_[dP(i)],s=t[e];return s&&s instanceof n||Object.assign(s=t[e]=new n,r),s}function dD(t){let e=d_[dP(t.type)],i={};for(let r of(i.id=t.id,i.type=t.type,i.drawTime=t.drawTime,Object.assign(i,dA(t,e.defaults),dA(t,e.defaultRoutes)),dM))i[r]=t[r];return i}function dA(t,e){let i={};for(let r of Object.keys(e)){let n=e[r],s=t[r];dS(r)&&(0,$50e8ddfc489f09fc$exports.isArray)(s)?i[r]=s.map(t=>dk(t,n)):i[r]=dk(s,n)}return i}const dO=new Map,dT=hJ.concat(h0);var dE={id:"annotation",version:"3.0.1",beforeRegister(){!/**
 * @param {string} pkg
 * @param {string} min
 * @param {string} ver
 * @param {boolean} [strict=true]
 * @returns {boolean}
 */function(t,e,i,r=!0){let n=i.split("."),s=0;for(let a of e.split(".")){let o=n[s++];if(parseInt(a,10)<parseInt(o,10))break;if(hp(o,a)){if(!r)return!1;throw Error(`${t} v${i} is not supported. v${e} or newer is required.`)}}}("chart.js","4.0",o3.version)},afterRegister(){o3.register(d_)},afterUnregister(){o3.unregister(d_)},beforeInit(t){dO.set(t,{annotations:[],elements:[],visibleElements:[],listeners:{},listened:!1,moveListened:!1,hooks:{},hooked:!1,hovered:[]})},beforeUpdate(t,e,i){let r=dO.get(t),n=r.annotations=[],s=i.annotations;(0,$50e8ddfc489f09fc$exports.isObject)(s)?Object.keys(s).forEach(t=>{let e=s[t];(0,$50e8ddfc489f09fc$exports.isObject)(e)&&(e.id=t,n.push(e))}):(0,$50e8ddfc489f09fc$exports.isArray)(s)&&n.push(...s),/**
 * @param {CoreAnnotationOptions[]} annotations
 * @param {{ [key: string]: Scale }} scales
 */function(t,e){for(let i of t)(function(t,e){for(let i of["scaleID","xScaleID","yScaleID"]){let r=hW(e,t,i);r&&!e[r]&&function(t,e){if("scaleID"===e)return!0;let i=e.charAt(0);for(let e of["Min","Max","Value"])if((0,$50e8ddfc489f09fc$exports.defined)(t[i+e]))return!0;return!1}(t,i)&&console.warn(`No scale found with id '${r}' for annotation '${t.id}'`)}})(i,e)}(n,t.scales)},afterDataLimits(t,e){let i=dO.get(t);!/**
 * @typedef { import("chart.js").Chart } Chart
 * @typedef { import("chart.js").Scale } Scale
 * @typedef { import('../../types/options').CoreAnnotationOptions } CoreAnnotationOptions
 *//**
 * @param {Chart} chart
 * @param {Scale} scale
 * @param {CoreAnnotationOptions[]} annotations
 */function(t,e,i){let r=function(t,e,i){let r=e.axis,n=e.id,s=r+"ScaleID",a={min:(0,$50e8ddfc489f09fc$exports.valueOrDefault)(e.min,Number.NEGATIVE_INFINITY),max:(0,$50e8ddfc489f09fc$exports.valueOrDefault)(e.max,Number.POSITIVE_INFINITY)};for(let o of i)o.scaleID===n?h5(o,e,["value","endValue"],a):hW(t,o,s)===n&&h5(o,e,[r+"Min",r+"Max",r+"Value"],a);return a}(t.scales,e,i),n=h2(e,r,"min","suggestedMin");(n=h2(e,r,"max","suggestedMax")||n)&&(0,$50e8ddfc489f09fc$exports.isFunction)(e.handleTickRangeOptions)&&e.handleTickRangeOptions()}(t,e.scale,i.annotations.filter(t=>t.display&&t.adjustScaleRange))},afterUpdate(t,e,i){let r=dO.get(t);r.listened=hD(i,hJ,r.listeners),r.moveListened=!1,r._getElements=hu,hG.forEach(t=>{(0,$50e8ddfc489f09fc$exports.isFunction)(i[t])&&(r.moveListened=!0)}),r.listened&&r.moveListened||r.annotations.forEach(t=>{!r.listened&&(0,$50e8ddfc489f09fc$exports.isFunction)(t.click)&&(r.listened=!0),r.moveListened||hG.forEach(e=>{(0,$50e8ddfc489f09fc$exports.isFunction)(t[e])&&(r.listened=!0,r.moveListened=!0)})}),/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 * @param {UpdateMode} mode
 */function(t,e,i,r){var n;let s=(n=i.animations,"reset"===r||"none"===r||"resize"===r?dw:new aE(t,n)),a=e.annotations,o=function(t,e){let i=e.length,r=t.length;if(r<i){let e=i-r;t.splice(r,0,...Array(e))}else r>i&&t.splice(i,r-i);return t}(e.elements,a);for(let e=0;e<a.length;e++){let i=a[e],r=dC(o,e,i.type),n=i.setContext(r.$context||(r.$context=Object.assign(Object.create(t.getContext()),{element:r,id:i.id,type:"annotation"}))),l=r.resolveElementProperties(t,n);l.skip=isNaN(l.x)||isNaN(l.y),"elements"in l&&(function(t,e,i,r){let n=t.elements||(t.elements=[]);n.length=e.length;for(let t=0;t<e.length;t++){let s=e[t],a=s.properties,o=dC(n,t,s.type,s.initProperties),l=i[s.optionScope].override(s);a.options=dD(l),r.update(o,a)}}(r,l.elements,n,s),// Remove the sub-element definitions from properties, so the actual elements
// are not overwritten by their definitions
delete l.elements),(0,$50e8ddfc489f09fc$exports.defined)(r.x)||// make them readily awailable to any scriptable options. If we do not do this,
// the properties retruned by `resolveElementProperties` are available only
// after options resolution.
Object.assign(r,l),Object.assign(r,l.initProperties),l.options=dD(n),s.update(r,l)}}(t,r,i,e.mode),r.visibleElements=r.elements.filter(t=>!t.skip&&t.options.display),/**
 * @param {Chart} chart
 * @param {Object} state
 * @param {AnnotationPluginOptions} options
 */function(t,e,i){let r=e.visibleElements;e.hooked=hD(i,h0,e.hooks),e.hooked||r.forEach(t=>{e.hooked||h0.forEach(i=>{(0,$50e8ddfc489f09fc$exports.isFunction)(t.options[i])&&(e.hooked=!0)})})}(0,r,i)},beforeDatasetsDraw(t,e,i){dI(t,"beforeDatasetsDraw",i.clip)},afterDatasetsDraw(t,e,i){dI(t,"afterDatasetsDraw",i.clip)},beforeDraw(t,e,i){dI(t,"beforeDraw",i.clip)},afterDraw(t,e,i){dI(t,"afterDraw",i.clip)},beforeEvent(t,e,i){let r=dO.get(t);/**
 * @param {Object} state
 * @param {ChartEvent} event
 * @param {AnnotationPluginOptions} options
 * @return {boolean|undefined}
 */(function(t,e,i){if(t.listened)switch(e.type){case"mousemove":case"mouseout":return function(t,e,i){let r;if(!t.moveListened)return;r="mousemove"===e.type?hu(t,e,i.interaction):[];let n=t.hovered;t.hovered=r;let s={state:t,event:e},a=hZ(s,"leave",n,r);return hZ(s,"enter",r,n)||a}(t,e,i);case"click":return function(t,e,i){let r;let n=t.listeners,s=hu(t,e,i.interaction);for(let t of s)r=hQ(t.options.click||n.click,t,e)||r;return r}(t,e,i)}})(r,e.event,i)&&(e.changed=!0)},afterDestroy(t){dO.delete(t)},_getState:t=>dO.get(t),defaults:{animations:{numbers:{properties:["x","y","x2","y2","width","height","centerX","centerY","pointX","pointY","radius"],type:"number"}},clip:!0,interaction:{mode:void 0,axis:void 0,intersect:void 0},common:{drawTime:"afterDatasetsDraw",init:!1,label:{}}},descriptors:{_indexable:!1,_scriptable:t=>!dT.includes(t)&&"init"!==t,annotations:{_allKeys:!1,_fallback:(t,e)=>`elements.${d_[dP(e.type)].id}`},interaction:{_fallback:!0},common:{label:{_indexable:dS,_fallback:!0},_indexable:dS}},additionalOptionScopes:[""]};function dI(t,e,i){let{ctx:r,chartArea:n}=t,s=dO.get(t);i&&(0,$50e8ddfc489f09fc$exports.clipArea)(r,n);let a=(function(t,e){let i=[];for(let r of t)if(r.options.drawTime===e&&i.push({element:r,main:!0}),r.elements&&r.elements.length)for(let t of r.elements)t.options.display&&t.options.drawTime===e&&i.push({element:t});return i})(s.visibleElements,e).sort((t,e)=>t.element.options.z-e.element.options.z);for(let t of a)!function(t,e,i,r){let n=r.element;r.main?(h1(i,n,"beforeDraw"),n.draw(t,e),h1(i,n,"afterDraw")):n.draw(t,e)}(r,n,s,t);i&&(0,$50e8ddfc489f09fc$exports.unclipArea)(r)}function dR(t,e,i,r){// Define the table size
let n=t.length,s=t[0].length,a=document.createElement("table"),o=document.createElement("tr"),l=document.createElement("th");o.appendChild(l);// Create the header cells for the columns
for(let r=0;r<s;r++){let n=document.createElement("th");n.contentEditable="true",n.oninput=()=>{null!=n.textContent&&(i[r]=n.textContent,dF(t,e,i))},n.textContent=i[r],o.appendChild(n)}if(r){let r=document.createElement("th");r.textContent="+",r.onclick=()=>{(function(t,e,i){for(let e=0;e<t.length;e++)t[e].push(Math.floor(10*Math.random())+1);i.push("E"),dz(t,e,i),dF(t,e,i)})(t,e,i)},o.appendChild(r)}a.appendChild(o);// Create the table rows
for(let o=0;o<n;o++){let n=document.createElement("tr"),l=document.createElement("th");l.textContent=e[o],n.appendChild(l),l.contentEditable="true",l.oninput=()=>{null!=l.textContent&&(e[o]=l.textContent,dF(t,e,i))};// Create the data cells for the row
for(let e=0;e<s;e++){let i=document.createElement("td");r?i.textContent=t[o][e].toString():i.textContent=t[o][e].toFixed(2),n.appendChild(i)}a.appendChild(n)}if(r){let r=document.createElement("tr"),n=document.createElement("th");n.textContent="+",r.appendChild(n),n.onclick=()=>{(function(t,e,i){t.push([]);for(let e=0;e<t[0].length;e++)t[t.length-1].push(Math.floor(10*Math.random())+1);e.push("yo"),dz(t,e,i),dF(t,e,i)})(t,e,i)},a.appendChild(r)}return a}function dL(t){let e=[];for(let i=0;i<t.length;i++){let r=[];for(let e=0;e<t[i].length;e++)r.push(t[i][e]);e.push(r)}return e}function d$(t){let e=0;for(let i of t)for(let t of i)e+=t;return e}function dF(t,e,r){let n=document.getElementById("indep");n&&n.remove(),(n=document.getElementById("diff"))&&n.remove(),(n=document.getElementById("final"))&&n.remove(),(n=document.getElementById("resultats"))&&n.remove(),(n=document.getElementById("gammaChart"))&&n.remove();let s=function(t){let e=dL(t),i=d$(t);for(let r=0;r<t.length;r++){let n=0;for(let e=0;e<t[r].length;e++)n+=t[r][e];for(let s=0;s<t[r].length;s++){let a=0;for(let e=0;e<t.length;e++)a+=t[e][s];e[r][s]=n*a/i}}return e}(t),a=dR(s,e,r,!1);a.id="indep",document.body.appendChild(a);let o=function(t,e){let i=dL(t);for(let r=0;r<t.length;r++)for(let n=0;n<t[r].length;n++)i[r][n]=Math.pow(t[r][n]-e[r][n],2)/e[r][n];return i}(t,s),h=dR(o,e,r,!1);h.id="diff",document.body.appendChild(h);let d=d$(o),c=(t.length-1)*(t[0].length-1),u=Math.sqrt(d/(d$(t)*c)),f=1-/*@__PURE__*/i(l)(d,c/2,.5);console.log(f);let p=0;for(;.95>/*@__PURE__*/i(l)(p,c/2,.5);)p+=.01;console.log("kcomp",p);let g=[[d],[p],[u],[f],[c]],m=dR(g,["Khi2 calcul\xe9","Khi2 th\xe9orique 0.05","Cramer","pValue","ddl"],["",""],!1);m.id="final",document.body.appendChild(m);let x=document.createElement("p");x.id="resultats",d>p?x.innerHTML="Les variables sont <b>ind\xe9pendantes</b>.":x.innerHTML="Les variables sont <b>li\xe9es</b>.",document.body.appendChild(x);let b=document.querySelectorAll("#final td");b.forEach(t=>{if(null===t.textContent)return;let e=parseFloat(t.textContent);t.style.backgroundColor=`rgb(${Math.floor(255*e)}, ${Math.floor((1-e)*255)}, 0)`});let y=document.querySelectorAll("#initial td");y.forEach(e=>{if(null===e.textContent)return;let i=parseFloat(e.textContent),r=e.parentNode.rowIndex-1,n=e.cellIndex-1;i=10*o[r][n]/d$(t);let s=Math.floor(255*i);e.style.backgroundColor=`rgb(${s}, 0, 0)`});let v=document.createElement("canvas");v.width=600,v.height=300,document.body.appendChild(v),v.id="gammaChart";let _=function(t,e){let r=[];for(let n=0;n<=e;n+=.1){let e=/*@__PURE__*/i(l)(n,t/2,.5);r.push({x:n,y:e})}return r}(c,2*p),w=v.getContext("2d");null!=w&&new o3(w,{type:"line",data:{datasets:[{label:"cos",data:_,borderColor:"rgb(244,244,244)",fill:!1,pointRadius:0}]},options:{responsive:!1,scales:{x:{type:"linear",position:"bottom",min:0,max:2*p},y:{type:"linear",position:"left",min:0,max:1}},plugins:{annotation:{annotations:{line1:{type:"line",xMin:p,xMax:p,yMax:.95,borderColor:"rgb(0, 0, 255)",borderWidth:4},label1:{type:"label",xValue:p,yValue:.5,content:["Khi2 th\xe9orique"],backgroundColor:"rgba(0,0,255)",color:"white",font:{size:12}},label2:{type:"label",xValue:d+.2,yValue:.5,content:["Khi2"],backgroundColor:"rgba(255,0,0)",color:"white",font:{size:12}},line2:{type:"line",xMin:d,xMax:d,yMax:1-f,borderColor:"rgb(255, 0, 0)",borderWidth:4}}}}}})}function dz(t,e,i){let r=document.getElementById("initial");r&&r.remove();let n=dR(t,e,i,!0);n.id="initial",document.body.appendChild(n);let s=document.querySelectorAll("#initial td");s.forEach(r=>{r.contentEditable="true",r.addEventListener("input",()=>{if(null===r.textContent)return;let n=r.parentNode.rowIndex-1,s=r.cellIndex-1;t[n][s]=parseFloat(r.textContent),dF(t,e,i)}),r.addEventListener("wheel",n=>{if(n.preventDefault(),n.deltaY,null===r.textContent)return;let s=parseFloat(r.textContent),a=n.deltaY>0?s-1:s+1;if(a<0)return;r.textContent=a.toString();let o=r.parentNode.rowIndex-1,l=r.cellIndex-1;t[o][l]=a,dF(t,e,i)})})}!function(){o3.register(...hd),o3.register(dE);let t=["a","b","c","d"],e=["A","B","C","D"],i=function(t,e){let i=[];for(let t=0;t<2;t++){let t=[];for(let e=0;e<2;e++){// Generate a random integer between 1 and 10
let e=Math.floor(10*Math.random())+1;t.push(e)}i.push(t)}return i}(0,0);i[0][0]=3,i[0][1]=4,i[1][0]=4,i[1][1]=2,dz(i,t,e),dF(i,t,e)}();//# sourceMappingURL=index.ed7174ef.js.map

//# sourceMappingURL=index.ed7174ef.js.map
