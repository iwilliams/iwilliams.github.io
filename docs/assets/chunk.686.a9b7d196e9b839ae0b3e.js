"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[686],{31:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})
class n extends Error{}class r extends n{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends n{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class i extends n{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class u extends n{}class a extends n{constructor(e){super(`Invalid unit ${e}`)}}class o extends n{}class l extends n{constructor(){super("Zone is an abstract class")}}const c="numeric",h="short",d="long",f={year:c,month:c,day:c},m={year:c,month:h,day:c},D={year:c,month:h,day:c,weekday:h},p={year:c,month:d,day:c},g={year:c,month:d,day:c,weekday:d},y={hour:c,minute:c},F={hour:c,minute:c,second:c},w={hour:c,minute:c,second:c,timeZoneName:h},k={hour:c,minute:c,second:c,timeZoneName:d},v={hour:c,minute:c,hourCycle:"h23"},E={hour:c,minute:c,second:c,hourCycle:"h23"},A={hour:c,minute:c,second:c,hourCycle:"h23",timeZoneName:h},C={hour:c,minute:c,second:c,hourCycle:"h23",timeZoneName:d},b={year:c,month:c,day:c,hour:c,minute:c},x={year:c,month:c,day:c,hour:c,minute:c,second:c},S={year:c,month:h,day:c,hour:c,minute:c},T={year:c,month:h,day:c,hour:c,minute:c,second:c},B={year:c,month:h,day:c,weekday:h,hour:c,minute:c},O={year:c,month:d,day:c,hour:c,minute:c,timeZoneName:h},M={year:c,month:d,day:c,hour:c,minute:c,second:c,timeZoneName:h},_={year:c,month:d,day:c,weekday:d,hour:c,minute:c,timeZoneName:d},N={year:c,month:d,day:c,weekday:d,hour:c,minute:c,second:c,timeZoneName:d}
function $(e){return void 0===e}function z(e){return"number"==typeof e}function I(e){return"number"==typeof e&&e%1==0}function V(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function Z(e,t,n){if(0!==e.length)return e.reduce(((e,r)=>{const s=[t(r),r]
return e&&n(e[0],s[0])===e[0]?e:s}),null)[1]}function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function R(e,t,n){return I(e)&&e>=t&&e<=n}function q(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
const n=e<0
let r
return r=n?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0"),r}function j(e){return $(e)||null===e||""===e?void 0:parseInt(e,10)}function U(e){return $(e)||null===e||""===e?void 0:parseFloat(e)}function P(e){if(!$(e)&&null!==e&&""!==e){const t=1e3*parseFloat("0."+e)
return Math.floor(t)}}function H(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const r=10**t,s=n?Math.trunc:Math.round
return s(e*r)/r}function W(e){return e%4==0&&(e%100!=0||e%400==0)}function J(e){return W(e)?366:365}function Y(e,t){const n=(r=t-1)-12*Math.floor(r/12)+1
var r
return 2===n?W(e+(t-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function G(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond)
return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(t.getUTCFullYear()-1900)),+t}function Q(e){const t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,n=e-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7
return 4===t||3===r?53:52}function X(e){return e>99?e:e>60?1900+e:2e3+e}function K(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
const s=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}
r&&(i.timeZone=r)
const u={timeZoneName:t,...i},a=new Intl.DateTimeFormat(n,u).formatToParts(s).find((e=>"timezonename"===e.type.toLowerCase()))
return a?a.value:null}function ee(e,t){let n=parseInt(e,10)
Number.isNaN(n)&&(n=0)
const r=parseInt(t,10)||0
return 60*n+(n<0||Object.is(n,-0)?-r:r)}function te(e){const t=Number(e)
if("boolean"==typeof e||""===e||Number.isNaN(t))throw new o(`Invalid unit value ${e}`)
return t}function ne(e,t){const n={}
for(const r in e)if(L(e,r)){const s=e[r]
if(null==s)continue
n[t(r)]=te(s)}return n}function re(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),s=e>=0?"+":"-"
switch(t){case"short":return`${s}${q(n,2)}:${q(r,2)}`
case"narrow":return`${s}${n}${r>0?`:${r}`:""}`
case"techie":return`${s}${q(n,2)}${q(r,2)}`
default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function se(e){return function(e,t){return["hour","minute","second","millisecond"].reduce(((t,n)=>(t[n]=e[n],t)),{})}(e)}const ie=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,ue=["January","February","March","April","May","June","July","August","September","October","November","December"],ae=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],oe=["J","F","M","A","M","J","J","A","S","O","N","D"]
function le(e){switch(e){case"narrow":return[...oe]
case"short":return[...ae]
case"long":return[...ue]
case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"]
case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"]
default:return null}}const ce=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],he=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],de=["M","T","W","T","F","S","S"]
function fe(e){switch(e){case"narrow":return[...de]
case"short":return[...he]
case"long":return[...ce]
case"numeric":return["1","2","3","4","5","6","7"]
default:return null}}const me=["AM","PM"],De=["Before Christ","Anno Domini"],pe=["BC","AD"],ge=["B","A"]
function ye(e){switch(e){case"narrow":return[...ge]
case"short":return[...pe]
case"long":return[...De]
default:return null}}function Fe(e,t){let n=""
for(const r of e)r.literal?n+=r.val:n+=t(r.val)
return n}const we={D:f,DD:m,DDD:p,DDDD:g,t:y,tt:F,ttt:w,tttt:k,T:v,TT:E,TTT:A,TTTT:C,f:b,ff:S,fff:O,ffff:_,F:x,FF:T,FFF:M,FFFF:N}
class ke{static create(e){return new ke(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}static parseFormat(e){let t=null,n="",r=!1
const s=[]
for(let i=0;i<e.length;i++){const u=e.charAt(i)
"'"===u?(n.length>0&&s.push({literal:r,val:n}),t=null,n="",r=!r):r||u===t?n+=u:(n.length>0&&s.push({literal:!1,val:n}),n=u,t=u)}return n.length>0&&s.push({literal:r,val:n}),s}static macroTokenToFormatOpts(e){return we[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTime(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(e,{...this.opts,...t}).format()}formatDateTimeParts(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(e,{...this.opts,...t}).formatToParts()}resolvedOptions(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(e,{...this.opts,...t}).resolvedOptions()}num(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(this.opts.forceSimple)return q(e,t)
const n={...this.opts}
return t>0&&(n.padTo=t),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,t){const n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,s=(t,n)=>this.loc.extract(e,t,n),i=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",u=(t,r)=>n?function(e,t){return le(t)[e.month-1]}(e,t):s(r?{month:t}:{month:t,day:"numeric"},"month"),a=(t,r)=>n?function(e,t){return fe(t)[e.weekday-1]}(e,t):s(r?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),o=t=>{const n=ke.macroTokenToFormatOpts(t)
return n?this.formatWithSystemDefault(e,n):t},l=t=>n?function(e,t){return ye(t)[e.year<0?0:1]}(e,t):s({era:t},"era")
return Fe(ke.parseFormat(t),(t=>{switch(t){case"S":return this.num(e.millisecond)
case"u":case"SSS":return this.num(e.millisecond,3)
case"s":return this.num(e.second)
case"ss":return this.num(e.second,2)
case"uu":return this.num(Math.floor(e.millisecond/10),2)
case"uuu":return this.num(Math.floor(e.millisecond/100))
case"m":return this.num(e.minute)
case"mm":return this.num(e.minute,2)
case"h":return this.num(e.hour%12==0?12:e.hour%12)
case"hh":return this.num(e.hour%12==0?12:e.hour%12,2)
case"H":return this.num(e.hour)
case"HH":return this.num(e.hour,2)
case"Z":return i({format:"narrow",allowZ:this.opts.allowZ})
case"ZZ":return i({format:"short",allowZ:this.opts.allowZ})
case"ZZZ":return i({format:"techie",allowZ:this.opts.allowZ})
case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale})
case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale})
case"z":return e.zoneName
case"a":return n?function(e){return me[e.hour<12?0:1]}(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod")
case"d":return r?s({day:"numeric"},"day"):this.num(e.day)
case"dd":return r?s({day:"2-digit"},"day"):this.num(e.day,2)
case"c":case"E":return this.num(e.weekday)
case"ccc":return a("short",!0)
case"cccc":return a("long",!0)
case"ccccc":return a("narrow",!0)
case"EEE":return a("short",!1)
case"EEEE":return a("long",!1)
case"EEEEE":return a("narrow",!1)
case"L":return r?s({month:"numeric",day:"numeric"},"month"):this.num(e.month)
case"LL":return r?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2)
case"LLL":return u("short",!0)
case"LLLL":return u("long",!0)
case"LLLLL":return u("narrow",!0)
case"M":return r?s({month:"numeric"},"month"):this.num(e.month)
case"MM":return r?s({month:"2-digit"},"month"):this.num(e.month,2)
case"MMM":return u("short",!1)
case"MMMM":return u("long",!1)
case"MMMMM":return u("narrow",!1)
case"y":return r?s({year:"numeric"},"year"):this.num(e.year)
case"yy":return r?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2)
case"yyyy":return r?s({year:"numeric"},"year"):this.num(e.year,4)
case"yyyyyy":return r?s({year:"numeric"},"year"):this.num(e.year,6)
case"G":return l("short")
case"GG":return l("long")
case"GGGGG":return l("narrow")
case"kk":return this.num(e.weekYear.toString().slice(-2),2)
case"kkkk":return this.num(e.weekYear,4)
case"W":return this.num(e.weekNumber)
case"WW":return this.num(e.weekNumber,2)
case"o":return this.num(e.ordinal)
case"ooo":return this.num(e.ordinal,3)
case"q":return this.num(e.quarter)
case"qq":return this.num(e.quarter,2)
case"X":return this.num(Math.floor(e.ts/1e3))
case"x":return this.num(e.ts)
default:return o(t)}}))}formatDurationFromString(e,t){const n=e=>{switch(e[0]){case"S":return"millisecond"
case"s":return"second"
case"m":return"minute"
case"h":return"hour"
case"d":return"day"
case"w":return"week"
case"M":return"month"
case"y":return"year"
default:return null}},r=ke.parseFormat(t),s=r.reduce(((e,t)=>{let{literal:n,val:r}=t
return n?e:e.concat(r)}),[])
return Fe(r,(e=>t=>{const r=n(t)
return r?this.num(e.get(r),t.length):t})(e.shiftTo(...s.map(n).filter((e=>e)))))}}class ve{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}class Ee{get type(){throw new l}get name(){throw new l}get ianaName(){return this.name}get isUniversal(){throw new l}offsetName(e,t){throw new l}formatOffset(e,t){throw new l}offset(e){throw new l}equals(e){throw new l}get isValid(){throw new l}}let Ae=null
class Ce extends Ee{static get instance(){return null===Ae&&(Ae=new Ce),Ae}get type(){return"system"}get name(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,t){let{format:n,locale:r}=t
return K(e,n,r)}formatOffset(e,t){return re(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let be={}
const xe={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6}
let Se={}
class Te extends Ee{static create(e){return Se[e]||(Se[e]=new Te(e)),Se[e]}static resetCache(){Se={},be={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1
try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=Te.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,t){let{format:n,locale:r}=t
return K(e,n,r,this.name)}formatOffset(e,t){return re(this.offset(e),t)}offset(e){const t=new Date(e)
if(isNaN(t))return NaN
const n=(r=this.name,be[r]||(be[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),be[r])
var r
let[s,i,u,a,o,l,c]=n.formatToParts?function(e,t){const n=e.formatToParts(t),r=[]
for(let s=0;s<n.length;s++){const{type:e,value:t}=n[s],i=xe[e]
"era"===e?r[i]=t:$(i)||(r[i]=parseInt(t,10))}return r}(n,t):function(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,s,i,u,a,o,l,c]=r
return[u,s,i,a,o,l,c]}(n,t)
"BC"===a&&(s=1-Math.abs(s))
let h=+t
const d=h%1e3
return h-=d>=0?d:1e3+d,(G({year:s,month:i,day:u,hour:24===o?0:o,minute:l,second:c,millisecond:0})-h)/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let Be=null
class Oe extends Ee{static get utcInstance(){return null===Be&&(Be=new Oe(0)),Be}static instance(e){return 0===e?Oe.utcInstance:new Oe(e)}static parseSpecifier(e){if(e){const t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
if(t)return new Oe(ee(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${re(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${re(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return re(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class Me extends Ee{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function _e(e,t){if($(e)||null===e)return t
if(e instanceof Ee)return e
if("string"==typeof e){const n=e.toLowerCase()
return"default"===n?t:"local"===n||"system"===n?Ce.instance:"utc"===n||"gmt"===n?Oe.utcInstance:Oe.parseSpecifier(n)||Te.create(e)}return z(e)?Oe.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Me(e)}let Ne,$e=()=>Date.now(),ze="system",Ie=null,Ve=null,Ze=null
class Le{static get now(){return $e}static set now(e){$e=e}static set defaultZone(e){ze=e}static get defaultZone(){return _e(ze,Ce.instance)}static get defaultLocale(){return Ie}static set defaultLocale(e){Ie=e}static get defaultNumberingSystem(){return Ve}static set defaultNumberingSystem(e){Ve=e}static get defaultOutputCalendar(){return Ze}static set defaultOutputCalendar(e){Ze=e}static get throwOnInvalid(){return Ne}static set throwOnInvalid(e){Ne=e}static resetCaches(){Qe.resetCache(),Te.resetCache()}}let Re={},qe={}
function je(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([e,t])
let r=qe[n]
return r||(r=new Intl.DateTimeFormat(e,t),qe[n]=r),r}let Ue={},Pe={},He=null
function We(e,t,n,r,s){const i=e.listingMode(n)
return"error"===i?null:"en"===i?r(t):s(t)}class Je{constructor(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1
const{padTo:r,floor:s,...i}=n
if(!t||Object.keys(i).length>0){const t={useGrouping:!1,...n}
n.padTo>0&&(t.minimumIntegerDigits=n.padTo),this.inf=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([e,t])
let r=Ue[n]
return r||(r=new Intl.NumberFormat(e,t),Ue[n]=r),r}(e,t)}}format(e){if(this.inf){const t=this.floor?Math.floor(e):e
return this.inf.format(t)}return q(this.floor?Math.floor(e):H(e,3),this.padTo)}}class Ye{constructor(e,t,n){let r
if(this.opts=n,e.zone.isUniversal){const t=e.offset/60*-1,s=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`
0!==e.offset&&Te.create(s).valid?(r=s,this.dt=e):(r="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:Gn.fromMillis(e.ts+60*e.offset*1e3))}else"system"===e.zone.type?this.dt=e:(this.dt=e,r=e.zone.name)
const s={...this.opts}
r&&(s.timeZone=r),this.dtf=je(t,s)}format(){return this.dtf.format(this.dt.toJSDate())}formatToParts(){return this.dtf.formatToParts(this.dt.toJSDate())}resolvedOptions(){return this.dtf.resolvedOptions()}}class Ge{constructor(e,t,n){this.opts={style:"long",...n},!t&&V()&&(this.rtf=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{base:n,...r}=t,s=JSON.stringify([e,r])
let i=Pe[s]
return i||(i=new Intl.RelativeTimeFormat(e,t),Pe[s]=i),i}(e,n))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"always",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=-1===["hours","minutes","seconds"].indexOf(e)
if("auto"===n&&i){const n="days"===e
switch(t){case 1:return n?"tomorrow":`next ${s[e][0]}`
case-1:return n?"yesterday":`last ${s[e][0]}`
case 0:return n?"today":`this ${s[e][0]}`}}const u=Object.is(t,-0)||t<0,a=Math.abs(t),o=1===a,l=s[e],c=r?o?l[1]:l[2]||l[1]:o?s[e][0]:e
return u?`${a} ${c} ago`:`in ${a} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}class Qe{static fromOpts(e){return Qe.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)}static create(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
const s=e||Le.defaultLocale,i=s||(r?"en-US":He||(He=(new Intl.DateTimeFormat).resolvedOptions().locale,He)),u=t||Le.defaultNumberingSystem,a=n||Le.defaultOutputCalendar
return new Qe(i,u,a,s)}static resetCache(){He=null,qe={},Ue={},Pe={}}static fromObject(){let{locale:e,numberingSystem:t,outputCalendar:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Qe.create(e,t,n)}constructor(e,t,n,r){const[s,i,u]=function(e){const t=e.indexOf("-u-")
if(-1===t)return[e]
{let n
const r=e.substring(0,t)
try{n=je(e).resolvedOptions()}catch(e){n=je(r).resolvedOptions()}const{numberingSystem:s,calendar:i}=n
return[r,s,i]}}(e)
this.locale=s,this.numberingSystem=t||i||null,this.outputCalendar=n||u||null,this.intl=function(e,t,n){return n||t?(e+="-u",n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`),e):e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){var e
return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar)
return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?Qe.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this}redefaultToEN(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.clone({...e,defaultToEN:!0})}redefaultToSystem(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.clone({...e,defaultToEN:!1})}months(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return We(this,e,!(arguments.length>2&&void 0!==arguments[2])||arguments[2],le,(()=>{const n=t?{month:e,day:"numeric"}:{month:e},r=t?"format":"standalone"
return this.monthsCache[r][e]||(this.monthsCache[r][e]=function(e){const t=[]
for(let n=1;n<=12;n++){const r=Gn.utc(2016,n,1)
t.push(e(r))}return t}((e=>this.extract(e,n,"month")))),this.monthsCache[r][e]}))}weekdays(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return We(this,e,!(arguments.length>2&&void 0!==arguments[2])||arguments[2],fe,(()=>{const n=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},r=t?"format":"standalone"
return this.weekdaysCache[r][e]||(this.weekdaysCache[r][e]=function(e){const t=[]
for(let n=1;n<=7;n++){const r=Gn.utc(2016,11,13+n)
t.push(e(r))}return t}((e=>this.extract(e,n,"weekday")))),this.weekdaysCache[r][e]}))}meridiems(){return We(this,void 0,!(arguments.length>0&&void 0!==arguments[0])||arguments[0],(()=>me),(()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"}
this.meridiemCache=[Gn.utc(2016,11,13,9),Gn.utc(2016,11,13,19)].map((t=>this.extract(t,e,"dayperiod")))}return this.meridiemCache}))}eras(e){return We(this,e,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],ye,(()=>{const t={era:e}
return this.eraCache[e]||(this.eraCache[e]=[Gn.utc(-40,1,1),Gn.utc(2017,1,1)].map((e=>this.extract(e,t,"era")))),this.eraCache[e]}))}extract(e,t,n){const r=this.dtFormatter(e,t).formatToParts().find((e=>e.type.toLowerCase()===n))
return r?r.value:null}numberFormatter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Je(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return new Ye(e,this.intl,t)}relFormatter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Ge(this.intl,this.isEnglish(),e)}listFormatter(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([e,t])
let r=Re[n]
return r||(r=new Intl.ListFormat(e,t),Re[n]=r),r}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=t.reduce(((e,t)=>e+t.source),"")
return RegExp(`^${r}$`)}function Ke(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return e=>t.reduce(((t,n)=>{let[r,s,i]=t
const[u,a,o]=n(e,i)
return[{...r,...u},a||s,o]}),[{},null,1]).slice(0,2)}function et(e){if(null==e)return[null,null]
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
for(const[s,i]of n){const t=s.exec(e)
if(t)return i(t)}return[null,null]}function tt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return(e,n)=>{const r={}
let s
for(s=0;s<t.length;s++)r[t[s]]=j(e[n+s])
return[r,null,n+s]}}const nt=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,rt=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,st=RegExp(`${rt.source}(?:${nt.source}?(?:\\[(${ie.source})\\])?)?`),it=RegExp(`(?:T${st.source})?`),ut=tt("weekYear","weekNumber","weekDay"),at=tt("year","ordinal"),ot=RegExp(`${rt.source} ?(?:${nt.source}|(${ie.source}))?`),lt=RegExp(`(?: ${ot.source})?`)
function ct(e,t,n){const r=e[t]
return $(r)?n:j(r)}function ht(e,t){return[{hours:ct(e,t,0),minutes:ct(e,t+1,0),seconds:ct(e,t+2,0),milliseconds:P(e[t+3])},null,t+4]}function dt(e,t){const n=!e[t]&&!e[t+1],r=ee(e[t+1],e[t+2])
return[{},n?null:Oe.instance(r),t+3]}function ft(e,t){return[{},e[t]?Te.create(e[t]):null,t+1]}const mt=RegExp(`^T?${rt.source}$`),Dt=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/
function pt(e){const[t,n,r,s,i,u,a,o,l]=e,c="-"===t[0],h=o&&"-"===o[0],d=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return void 0!==e&&(t||e&&c)?-e:e}
return[{years:d(U(n)),months:d(U(r)),weeks:d(U(s)),days:d(U(i)),hours:d(U(u)),minutes:d(U(a)),seconds:d(U(o),"-0"===o),milliseconds:d(P(l),h)}]}const gt={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function yt(e,t,n,r,s,i,u){const a={year:2===t.length?X(j(t)):j(t),month:ae.indexOf(n)+1,day:j(r),hour:j(s),minute:j(i)}
return u&&(a.second=j(u)),e&&(a.weekday=e.length>3?ce.indexOf(e)+1:he.indexOf(e)+1),a}const Ft=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function wt(e){const[,t,n,r,s,i,u,a,o,l,c,h]=e,d=yt(t,s,r,n,i,u,a)
let f
return f=o?gt[o]:l?0:ee(c,h),[d,new Oe(f)]}const kt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,vt=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Et=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function At(e){const[,t,n,r,s,i,u,a]=e
return[yt(t,s,r,n,i,u,a),Oe.utcInstance]}function Ct(e){const[,t,n,r,s,i,u,a]=e
return[yt(t,a,n,r,s,i,u),Oe.utcInstance]}const bt=Xe(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,it),xt=Xe(/(\d{4})-?W(\d\d)(?:-?(\d))?/,it),St=Xe(/(\d{4})-?(\d{3})/,it),Tt=Xe(st),Bt=Ke((function(e,t){return[{year:ct(e,t),month:ct(e,t+1,1),day:ct(e,t+2,1)},null,t+3]}),ht,dt,ft),Ot=Ke(ut,ht,dt,ft),Mt=Ke(at,ht,dt,ft),_t=Ke(ht,dt,ft),Nt=Ke(ht),$t=Xe(/(\d{4})-(\d\d)-(\d\d)/,lt),zt=Xe(ot),It=Ke(ht,dt,ft),Vt={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Zt={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...Vt},Lt={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...Vt},Rt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],qt=Rt.slice(0).reverse()
function jt(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix}
return new Pt(r)}function Ut(e,t,n,r,s){const i=e[s][n],u=t[n]/i,a=Math.sign(u)!==Math.sign(r[s])&&0!==r[s]&&Math.abs(u)<=1?function(e){return e<0?Math.floor(e):Math.ceil(e)}(u):Math.trunc(u)
r[s]+=a,t[n]-=a*i}class Pt{constructor(e){const t="longterm"===e.conversionAccuracy||!1
let n=t?Lt:Zt
e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||Qe.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,t){return Pt.fromObject({milliseconds:e},t)}static fromObject(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(null==e||"object"!=typeof e)throw new o("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e))
return new Pt({values:ne(e,Pt.normalizeUnit),loc:Qe.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(z(e))return Pt.fromMillis(e)
if(Pt.isDuration(e))return e
if("object"==typeof e)return Pt.fromObject(e)
throw new o(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){const[n]=function(e){return et(e,[Dt,pt])}(e)
return n?Pt.fromObject(n,t):Pt.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){const[n]=function(e){return et(e,[mt,Nt])}(e)
return n?Pt.fromObject(n,t):Pt.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!e)throw new o("need to specify a reason the Duration is invalid")
const n=e instanceof ve?e:new ve(e,t)
if(Le.throwOnInvalid)throw new i(n)
return new Pt({invalid:n})}static normalizeUnit(e){const t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e]
if(!t)throw new a(e)
return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n={...t,floor:!1!==t.round&&!1!==t.floor}
return this.isValid?ke.create(this.loc,n).formatDurationFromString(this,e):"Invalid Duration"}toHuman(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=Rt.map((t=>{const n=this.values[t]
return $(n)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:t.slice(0,-1)}).format(n)})).filter((e=>e))
return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(t)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null
let e="P"
return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=H(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const t=this.toMillis()
if(t<0||t>=864e5)return null
e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e}
const n=this.shiftTo("hours","minutes","seconds","milliseconds")
let r="basic"===e.format?"hhmm":"hh:mm"
e.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"))
let s=n.toFormat(r)
return e.includePrefix&&(s="T"+s),s}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.as("milliseconds")}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this
const t=Pt.fromDurationLike(e),n={}
for(const r of Rt)(L(t.values,r)||L(this.values,r))&&(n[r]=t.get(r)+this.get(r))
return jt(this,{values:n},!0)}minus(e){if(!this.isValid)return this
const t=Pt.fromDurationLike(e)
return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this
const t={}
for(const n of Object.keys(this.values))t[n]=te(e(this.values[n],n))
return jt(this,{values:t},!0)}get(e){return this[Pt.normalizeUnit(e)]}set(e){return this.isValid?jt(this,{values:{...this.values,...ne(e,Pt.normalizeUnit)}}):this}reconfigure(){let{locale:e,numberingSystem:t,conversionAccuracy:n,matrix:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return jt(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:r,conversionAccuracy:n})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this
const e=this.toObject()
return function(e,t){qt.reduce(((n,r)=>$(t[r])?n:(n&&Ut(e,t,n,t,r),r)),null)}(this.matrix,e),jt(this,{values:e},!0)}rescale(){return this.isValid?jt(this,{values:function(e){const t={}
for(const[n,r]of Object.entries(e))0!==r&&(t[n]=r)
return t}(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(!this.isValid)return this
if(0===t.length)return this
t=t.map((e=>Pt.normalizeUnit(e)))
const r={},s={},i=this.toObject()
let u
for(const a of Rt)if(t.indexOf(a)>=0){u=a
let e=0
for(const n in s)e+=this.matrix[n][a]*s[n],s[n]=0
z(i[a])&&(e+=i[a])
const t=Math.trunc(e)
r[a]=t,s[a]=(1e3*e-1e3*t)/1e3
for(const n in i)Rt.indexOf(n)>Rt.indexOf(a)&&Ut(this.matrix,i,n,r,a)}else z(i[a])&&(s[a]=i[a])
for(const a in s)0!==s[a]&&(r[u]+=a===u?s[a]:s[a]/this.matrix[u][a])
return jt(this,{values:r},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this
const e={}
for(const t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t]
return jt(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid)return!1
if(!this.loc.equals(e.loc))return!1
for(const r of Rt)if(t=this.values[r],n=e.values[r],!(void 0===t||0===t?void 0===n||0===n:t===n))return!1
var t,n
return!0}}const Ht="Invalid Interval"
class Wt{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!e)throw new o("need to specify a reason the Interval is invalid")
const n=e instanceof ve?e:new ve(e,t)
if(Le.throwOnInvalid)throw new s(n)
return new Wt({invalid:n})}static fromDateTimes(e,t){const n=Qn(e),r=Qn(t),s=function(e,t){return e&&e.isValid?t&&t.isValid?t<e?Wt.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null:Wt.invalid("missing or invalid end"):Wt.invalid("missing or invalid start")}(n,r)
return null==s?new Wt({start:n,end:r}):s}static after(e,t){const n=Pt.fromDurationLike(t),r=Qn(e)
return Wt.fromDateTimes(r,r.plus(n))}static before(e,t){const n=Pt.fromDurationLike(t),r=Qn(e)
return Wt.fromDateTimes(r.minus(n),r)}static fromISO(e,t){const[n,r]=(e||"").split("/",2)
if(n&&r){let e,s,i,u
try{e=Gn.fromISO(n,t),s=e.isValid}catch(r){s=!1}try{i=Gn.fromISO(r,t),u=i.isValid}catch(r){u=!1}if(s&&u)return Wt.fromDateTimes(e,i)
if(s){const n=Pt.fromISO(r,t)
if(n.isValid)return Wt.after(e,n)}else if(u){const e=Pt.fromISO(n,t)
if(e.isValid)return Wt.before(i,e)}}return Wt.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds"
return this.isValid?this.toDuration(e).get(e):NaN}count(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds"
if(!this.isValid)return NaN
const t=this.start.startOf(e),n=this.end.startOf(e)
return Math.floor(n.diff(t,e).get(e))+1}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set(){let{start:e,end:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?Wt.fromDateTimes(e||this.s,t||this.e):this}splitAt(){if(!this.isValid)return[]
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=t.map(Qn).filter((e=>this.contains(e))).sort(),s=[]
let{s:i}=this,u=0
for(;i<this.e;){const e=r[u]||this.e,t=+e>+this.e?this.e:e
s.push(Wt.fromDateTimes(i,t)),i=t,u+=1}return s}splitBy(e){const t=Pt.fromDurationLike(e)
if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[]
let n,{s:r}=this,s=1
const i=[]
for(;r<this.e;){const e=this.start.plus(t.mapUnits((e=>e*s)))
n=+e>+this.e?this.e:e,i.push(Wt.fromDateTimes(r,n)),r=n,s+=1}return i}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!(!this.isValid||!e.isValid)&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this
const t=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e
return t>=n?null:Wt.fromDateTimes(t,n)}union(e){if(!this.isValid)return this
const t=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e
return Wt.fromDateTimes(t,n)}static merge(e){const[t,n]=e.sort(((e,t)=>e.s-t.s)).reduce(((e,t)=>{let[n,r]=e
return r?r.overlaps(t)||r.abutsStart(t)?[n,r.union(t)]:[n.concat([r]),t]:[n,t]}),[[],null])
return n&&t.push(n),t}static xor(e){let t=null,n=0
const r=[],s=e.map((e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}])),i=Array.prototype.concat(...s).sort(((e,t)=>e.time-t.time))
for(const u of i)n+="s"===u.type?1:-1,1===n?t=u.time:(t&&+t!=+u.time&&r.push(Wt.fromDateTimes(t,u.time)),t=null)
return Wt.merge(r)}difference(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return Wt.xor([this].concat(t)).map((e=>this.intersection(e))).filter((e=>e&&!e.isEmpty()))}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ht}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Ht}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ht}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Ht}toFormat(e){let{separator:t=" – "}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:Ht}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):Pt.invalid(this.invalidReason)}mapEndpoints(e){return Wt.fromDateTimes(e(this.s),e(this.e))}}class Jt{static hasDST(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le.defaultZone
const t=Gn.now().setZone(e).set({month:12})
return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return Te.isValidZone(e)}static normalizeZone(e){return _e(e,Le.defaultZone)}static months(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qe.create(t,n,s)).months(e)}static monthsFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:t=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qe.create(t,n,s)).months(e,!0)}static weekdays(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:t=null,numberingSystem:n=null,locObj:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qe.create(t,n,null)).weekdays(e)}static weekdaysFormat(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:t=null,numberingSystem:n=null,locObj:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qe.create(t,n,null)).weekdays(e,!0)}static meridiems(){let{locale:e=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Qe.create(e).meridiems()}static eras(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"short",{locale:t=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Qe.create(t,null,"gregory").eras(e)}static features(){return{relative:V()}}}function Yt(e,t){const n=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e)
return Math.floor(Pt.fromMillis(r).as("days"))}const Gt={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Qt={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Xt=Gt.hanidec.replace(/[\[|\]]/g,"").split("")
function Kt(e){let t=parseInt(e,10)
if(isNaN(t)){t=""
for(let n=0;n<e.length;n++){const r=e.charCodeAt(n)
if(-1!==e[n].search(Gt.hanidec))t+=Xt.indexOf(e[n])
else for(const e in Qt){const[n,s]=Qt[e]
r>=n&&r<=s&&(t+=r-n)}}return parseInt(t,10)}return t}function en(e){let{numberingSystem:t}=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return new RegExp(`${Gt[t||"latn"]}${n}`)}function tn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e
return{regex:e,deser:e=>{let[n]=e
return t(Kt(n))}}}const nn=`[ ${String.fromCharCode(160)}]`,rn=new RegExp(nn,"g")
function sn(e){return e.replace(/\./g,"\\.?").replace(rn,nn)}function un(e){return e.replace(/\./g,"").replace(rn," ").toLowerCase()}function an(e,t){return null===e?null:{regex:RegExp(e.map(sn).join("|")),deser:n=>{let[r]=n
return e.findIndex((e=>un(r)===un(e)))+t}}}function on(e,t){return{regex:e,deser:e=>{let[,t,n]=e
return ee(t,n)},groups:t}}function ln(e){return{regex:e,deser:e=>{let[t]=e
return t}}}const cn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}}
let hn=null
function dn(e,t){return Array.prototype.concat(...e.map((e=>function(e,t){if(e.literal)return e
const n=mn(ke.macroTokenToFormatOpts(e.val),t)
return null==n||n.includes(void 0)?e:n}(e,t))))}function fn(e,t,n){const r=dn(ke.parseFormat(n),e),s=r.map((t=>function(e,t){const n=en(t),r=en(t,"{2}"),s=en(t,"{3}"),i=en(t,"{4}"),u=en(t,"{6}"),a=en(t,"{1,2}"),o=en(t,"{1,3}"),l=en(t,"{1,6}"),c=en(t,"{1,9}"),h=en(t,"{2,4}"),d=en(t,"{4,6}"),f=e=>{return{regex:RegExp((t=e.val,t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:e=>{let[t]=e
return t},literal:!0}
var t},m=(m=>{if(e.literal)return f(m)
switch(m.val){case"G":return an(t.eras("short",!1),0)
case"GG":return an(t.eras("long",!1),0)
case"y":return tn(l)
case"yy":case"kk":return tn(h,X)
case"yyyy":case"kkkk":return tn(i)
case"yyyyy":return tn(d)
case"yyyyyy":return tn(u)
case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return tn(a)
case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return tn(r)
case"MMM":return an(t.months("short",!0,!1),1)
case"MMMM":return an(t.months("long",!0,!1),1)
case"LLL":return an(t.months("short",!1,!1),1)
case"LLLL":return an(t.months("long",!1,!1),1)
case"o":case"S":return tn(o)
case"ooo":case"SSS":return tn(s)
case"u":return ln(c)
case"uu":return ln(a)
case"uuu":case"E":case"c":return tn(n)
case"a":return an(t.meridiems(),0)
case"EEE":return an(t.weekdays("short",!1,!1),1)
case"EEEE":return an(t.weekdays("long",!1,!1),1)
case"ccc":return an(t.weekdays("short",!0,!1),1)
case"cccc":return an(t.weekdays("long",!0,!1),1)
case"Z":case"ZZ":return on(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2)
case"ZZZ":return on(new RegExp(`([+-]${a.source})(${r.source})?`),2)
case"z":return ln(/[a-z_+-/]{1,256}?/i)
default:return f(m)}})(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}
return m.token=e,m}(t,e))),i=s.find((e=>e.invalidReason))
if(i)return{input:t,tokens:r,invalidReason:i.invalidReason}
{const[e,n]=function(e){return[`^${e.map((e=>e.regex)).reduce(((e,t)=>`${e}(${t.source})`),"")}$`,e]}(s),i=RegExp(e,"i"),[a,o]=function(e,t,n){const r=e.match(t)
if(r){const e={}
let t=1
for(const s in n)if(L(n,s)){const i=n[s],u=i.groups?i.groups+1:1
!i.literal&&i.token&&(e[i.token.val[0]]=i.deser(r.slice(t,t+u))),t+=u}return[r,e]}return[r,{}]}(t,i,n),[l,c,h]=o?function(e){let t,n=null
return $(e.z)||(n=Te.create(e.z)),$(e.Z)||(n||(n=new Oe(e.Z)),t=e.Z),$(e.q)||(e.M=3*(e.q-1)+1),$(e.h)||(e.h<12&&1===e.a?e.h+=12:12===e.h&&0===e.a&&(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),$(e.u)||(e.S=P(e.u)),[Object.keys(e).reduce(((t,n)=>{const r=(e=>{switch(e){case"S":return"millisecond"
case"s":return"second"
case"m":return"minute"
case"h":case"H":return"hour"
case"d":return"day"
case"o":return"ordinal"
case"L":case"M":return"month"
case"y":return"year"
case"E":case"c":return"weekday"
case"W":return"weekNumber"
case"k":return"weekYear"
case"q":return"quarter"
default:return null}})(n)
return r&&(t[r]=e[n]),t}),{}),n,t]}(o):[null,null,void 0]
if(L(o,"a")&&L(o,"H"))throw new u("Can't include meridiem when specifying 24-hour format")
return{input:t,tokens:r,regex:i,rawMatches:a,matches:o,result:l,zone:c,specificOffset:h}}}function mn(e,t){return e?ke.create(t,e).formatDateTimeParts((hn||(hn=Gn.fromMillis(1555555555555)),hn)).map((t=>function(e,t,n){const{type:r,value:s}=e
if("literal"===r)return{literal:!0,val:s}
const i=n[r]
let u=cn[r]
return"object"==typeof u&&(u=u[i]),u?{literal:!1,val:u}:void 0}(t,0,e))):null}const Dn=[0,31,59,90,120,151,181,212,243,273,304,334],pn=[0,31,60,91,121,152,182,213,244,274,305,335]
function gn(e,t){return new ve("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function yn(e,t,n){const r=new Date(Date.UTC(e,t-1,n))
e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900)
const s=r.getUTCDay()
return 0===s?7:s}function Fn(e,t,n){return n+(W(e)?pn:Dn)[t-1]}function wn(e,t){const n=W(e)?pn:Dn,r=n.findIndex((e=>e<t))
return{month:r+1,day:t-n[r]}}function kn(e){const{year:t,month:n,day:r}=e,s=Fn(t,n,r),i=yn(t,n,r)
let u,a=Math.floor((s-i+10)/7)
return a<1?(u=t-1,a=Q(u)):a>Q(t)?(u=t+1,a=1):u=t,{weekYear:u,weekNumber:a,weekday:i,...se(e)}}function vn(e){const{weekYear:t,weekNumber:n,weekday:r}=e,s=yn(t,1,4),i=J(t)
let u,a=7*n+r-s-3
a<1?(u=t-1,a+=J(u)):a>i?(u=t+1,a-=J(t)):u=t
const{month:o,day:l}=wn(u,a)
return{year:u,month:o,day:l,...se(e)}}function En(e){const{year:t,month:n,day:r}=e
return{year:t,ordinal:Fn(t,n,r),...se(e)}}function An(e){const{year:t,ordinal:n}=e,{month:r,day:s}=wn(t,n)
return{year:t,month:r,day:s,...se(e)}}function Cn(e){const t=I(e.year),n=R(e.month,1,12),r=R(e.day,1,Y(e.year,e.month))
return t?n?!r&&gn("day",e.day):gn("month",e.month):gn("year",e.year)}function bn(e){const{hour:t,minute:n,second:r,millisecond:s}=e,i=R(t,0,23)||24===t&&0===n&&0===r&&0===s,u=R(n,0,59),a=R(r,0,59),o=R(s,0,999)
return i?u?a?!o&&gn("millisecond",s):gn("second",r):gn("minute",n):gn("hour",t)}const xn="Invalid DateTime",Sn=864e13
function Tn(e){return new ve("unsupported zone",`the zone "${e.name}" is not supported`)}function Bn(e){return null===e.weekData&&(e.weekData=kn(e.c)),e.weekData}function On(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid}
return new Gn({...n,...t,old:n})}function Mn(e,t,n){let r=e-60*t*1e3
const s=n.offset(r)
if(t===s)return[r,t]
r-=60*(s-t)*1e3
const i=n.offset(r)
return s===i?[r,s]:[e-60*Math.min(s,i)*1e3,Math.max(s,i)]}function _n(e,t){const n=new Date(e+=60*t*1e3)
return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Nn(e,t,n){return Mn(G(e),t,n)}function $n(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),s=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),i={...e.c,year:r,month:s,day:Math.min(e.c.day,Y(r,s))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},u=Pt.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=G(i)
let[o,l]=Mn(a,n,e.zone)
return 0!==u&&(o+=u,l=e.zone.offset(o)),{ts:o,o:l}}function zn(e,t,n,r,s,i){const{setZone:u,zone:a}=n
if(e&&0!==Object.keys(e).length){const r=t||a,s=Gn.fromObject(e,{...n,zone:r,specificOffset:i})
return u?s:s.setZone(a)}return Gn.invalid(new ve("unparsable",`the input "${s}" can't be parsed as ${r}`))}function In(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return e.isValid?ke.create(Qe.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Vn(e,t){const n=e.c.year>9999||e.c.year<0
let r=""
return n&&e.c.year>=0&&(r+="+"),r+=q(e.c.year,n?6:4),t?(r+="-",r+=q(e.c.month),r+="-",r+=q(e.c.day)):(r+=q(e.c.month),r+=q(e.c.day)),r}function Zn(e,t,n,r,s,i){let u=q(e.c.hour)
return t?(u+=":",u+=q(e.c.minute),0===e.c.second&&n||(u+=":")):u+=q(e.c.minute),0===e.c.second&&n||(u+=q(e.c.second),0===e.c.millisecond&&r||(u+=".",u+=q(e.c.millisecond,3))),s&&(e.isOffsetFixed&&0===e.offset&&!i?u+="Z":e.o<0?(u+="-",u+=q(Math.trunc(-e.o/60)),u+=":",u+=q(Math.trunc(-e.o%60))):(u+="+",u+=q(Math.trunc(e.o/60)),u+=":",u+=q(Math.trunc(e.o%60)))),i&&(u+="["+e.zone.ianaName+"]"),u}const Ln={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Rn={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},qn={ordinal:1,hour:0,minute:0,second:0,millisecond:0},jn=["year","month","day","hour","minute","second","millisecond"],Un=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Pn=["year","ordinal","hour","minute","second","millisecond"]
function Hn(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()]
if(!t)throw new a(e)
return t}function Wn(e,t){const n=_e(t.zone,Le.defaultZone),r=Qe.fromObject(t),s=Le.now()
let i,u
if($(e.year))i=s
else{for(const n of jn)$(e[n])&&(e[n]=Ln[n])
const t=Cn(e)||bn(e)
if(t)return Gn.invalid(t)
const r=n.offset(s);[i,u]=Nn(e,r,n)}return new Gn({ts:i,zone:n,loc:r,o:u})}function Jn(e,t,n){const r=!!$(n.round)||n.round,s=(e,s)=>(e=H(e,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(e,s)),i=r=>n.calendary?t.hasSame(e,r)?0:t.startOf(r).diff(e.startOf(r),r).get(r):t.diff(e,r).get(r)
if(n.unit)return s(i(n.unit),n.unit)
for(const u of n.units){const e=i(u)
if(Math.abs(e)>=1)return s(e,u)}return s(e>t?-0:0,n.units[n.units.length-1])}function Yn(e){let t,n={}
return e.length>0&&"object"==typeof e[e.length-1]?(n=e[e.length-1],t=Array.from(e).slice(0,e.length-1)):t=Array.from(e),[n,t]}class Gn{constructor(e){const t=e.zone||Le.defaultZone
let n=e.invalid||(Number.isNaN(e.ts)?new ve("invalid input"):null)||(t.isValid?null:Tn(t))
this.ts=$(e.ts)?Le.now():e.ts
let r=null,s=null
if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[r,s]=[e.old.c,e.old.o]
else{const e=t.offset(this.ts)
r=_n(this.ts,e),n=Number.isNaN(r.year)?new ve("invalid input"):null,r=n?null:r,s=n?null:e}this._zone=t,this.loc=e.loc||Qe.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=s,this.isLuxonDateTime=!0}static now(){return new Gn({})}static local(){const[e,t]=Yn(arguments),[n,r,s,i,u,a,o]=t
return Wn({year:n,month:r,day:s,hour:i,minute:u,second:a,millisecond:o},e)}static utc(){const[e,t]=Yn(arguments),[n,r,s,i,u,a,o]=t
return e.zone=Oe.utcInstance,Wn({year:n,month:r,day:s,hour:i,minute:u,second:a,millisecond:o},e)}static fromJSDate(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=(r=e,"[object Date]"===Object.prototype.toString.call(r)?e.valueOf():NaN)
var r
if(Number.isNaN(n))return Gn.invalid("invalid input")
const s=_e(t.zone,Le.defaultZone)
return s.isValid?new Gn({ts:n,zone:s,loc:Qe.fromObject(t)}):Gn.invalid(Tn(s))}static fromMillis(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(z(e))return e<-Sn||e>Sn?Gn.invalid("Timestamp out of range"):new Gn({ts:e,zone:_e(t.zone,Le.defaultZone),loc:Qe.fromObject(t)})
throw new o(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(z(e))return new Gn({ts:1e3*e,zone:_e(t.zone,Le.defaultZone),loc:Qe.fromObject(t)})
throw new o("fromSeconds requires a numerical input")}static fromObject(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
e=e||{}
const n=_e(t.zone,Le.defaultZone)
if(!n.isValid)return Gn.invalid(Tn(n))
const r=Le.now(),s=$(t.specificOffset)?n.offset(r):t.specificOffset,i=ne(e,Hn),a=!$(i.ordinal),o=!$(i.year),l=!$(i.month)||!$(i.day),c=o||l,h=i.weekYear||i.weekNumber,d=Qe.fromObject(t)
if((c||a)&&h)throw new u("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(l&&a)throw new u("Can't mix ordinal dates with month/day")
const f=h||i.weekday&&!c
let m,D,p=_n(r,s)
f?(m=Un,D=Rn,p=kn(p)):a?(m=Pn,D=qn,p=En(p)):(m=jn,D=Ln)
let g=!1
for(const u of m)$(i[u])?i[u]=g?D[u]:p[u]:g=!0
const y=f?function(e){const t=I(e.weekYear),n=R(e.weekNumber,1,Q(e.weekYear)),r=R(e.weekday,1,7)
return t?n?!r&&gn("weekday",e.weekday):gn("week",e.week):gn("weekYear",e.weekYear)}(i):a?function(e){const t=I(e.year),n=R(e.ordinal,1,J(e.year))
return t?!n&&gn("ordinal",e.ordinal):gn("year",e.year)}(i):Cn(i),F=y||bn(i)
if(F)return Gn.invalid(F)
const w=f?vn(i):a?An(i):i,[k,v]=Nn(w,s,n),E=new Gn({ts:k,zone:n,o:v,loc:d})
return i.weekday&&c&&e.weekday!==E.weekday?Gn.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${E.toISO()}`):E}static fromISO(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(e){return et(e,[bt,Bt],[xt,Ot],[St,Mt],[Tt,_t])}(e)
return zn(n,r,t,"ISO 8601",e)}static fromRFC2822(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(e){return et(function(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(e),[Ft,wt])}(e)
return zn(n,r,t,"RFC 2822",e)}static fromHTTP(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(e){return et(e,[kt,At],[vt,At],[Et,Ct])}(e)
return zn(n,r,t,"HTTP",t)}static fromFormat(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if($(e)||$(t))throw new o("fromFormat requires an input string and a format")
const{locale:r=null,numberingSystem:s=null}=n,i=Qe.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),[u,a,l,c]=function(e,t,n){const{result:r,zone:s,specificOffset:i,invalidReason:u}=fn(e,t,n)
return[r,s,i,u]}(i,e,t)
return c?Gn.invalid(c):zn(u,a,n,`format ${t}`,e,l)}static fromString(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Gn.fromFormat(e,t,n)}static fromSQL(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(e){return et(e,[$t,Bt],[zt,It])}(e)
return zn(n,r,t,"SQL",e)}static invalid(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!e)throw new o("need to specify a reason the DateTime is invalid")
const n=e instanceof ve?e:new ve(e,t)
if(Le.throwOnInvalid)throw new r(n)
return new Gn({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=mn(e,Qe.fromObject(t))
return n?n.map((e=>e?e.val:null)).join(""):null}static expandFormat(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return dn(ke.parseFormat(e),Qe.fromObject(t)).map((e=>e.val)).join("")}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?Bn(this).weekYear:NaN}get weekNumber(){return this.isValid?Bn(this).weekNumber:NaN}get weekday(){return this.isValid?Bn(this).weekday:NaN}get ordinal(){return this.isValid?En(this.c).ordinal:NaN}get monthShort(){return this.isValid?Jt.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Jt.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Jt.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Jt.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}get isInLeapYear(){return W(this.year)}get daysInMonth(){return Y(this.year,this.month)}get daysInYear(){return this.isValid?J(this.year):NaN}get weeksInWeekYear(){return this.isValid?Q(this.weekYear):NaN}resolvedLocaleOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{locale:t,numberingSystem:n,calendar:r}=ke.create(this.loc.clone(e),e).resolvedOptions(this)
return{locale:t,numberingSystem:n,outputCalendar:r}}toUTC(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.setZone(Oe.instance(e),t)}toLocal(){return this.setZone(Le.defaultZone)}setZone(e){let{keepLocalTime:t=!1,keepCalendarTime:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if((e=_e(e,Le.defaultZone)).equals(this.zone))return this
if(e.isValid){let r=this.ts
if(t||n){const t=e.offset(this.ts),n=this.toObject();[r]=Nn(n,t,e)}return On(this,{ts:r,zone:e})}return Gn.invalid(Tn(e))}reconfigure(){let{locale:e,numberingSystem:t,outputCalendar:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return On(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:n})})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this
const t=ne(e,Hn),n=!$(t.weekYear)||!$(t.weekNumber)||!$(t.weekday),r=!$(t.ordinal),s=!$(t.year),i=!$(t.month)||!$(t.day),a=s||i,o=t.weekYear||t.weekNumber
if((a||r)&&o)throw new u("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(i&&r)throw new u("Can't mix ordinal dates with month/day")
let l
n?l=vn({...kn(this.c),...t}):$(t.ordinal)?(l={...this.toObject(),...t},$(t.day)&&(l.day=Math.min(Y(l.year,l.month),l.day))):l=An({...En(this.c),...t})
const[c,h]=Nn(l,this.o,this.zone)
return On(this,{ts:c,o:h})}plus(e){return this.isValid?On(this,$n(this,Pt.fromDurationLike(e))):this}minus(e){return this.isValid?On(this,$n(this,Pt.fromDurationLike(e).negate())):this}startOf(e){if(!this.isValid)return this
const t={},n=Pt.normalizeUnit(e)
switch(n){case"years":t.month=1
case"quarters":case"months":t.day=1
case"weeks":case"days":t.hour=0
case"hours":t.minute=0
case"minutes":t.second=0
case"seconds":t.millisecond=0}if("weeks"===n&&(t.weekday=1),"quarters"===n){const e=Math.ceil(this.month/3)
t.month=3*(e-1)+1}return this.set(t)}endOf(e){return this.isValid?this.plus({[e]:1}).startOf(e).minus(1):this}toFormat(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?ke.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):xn}toLocaleString(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?ke.create(this.loc.clone(t),e).formatDateTime(this):xn}toLocaleParts(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?ke.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO(){let{format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:s=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const i="extended"===e
let u=Vn(this,i)
return u+="T",u+=Zn(this,i,t,n,r,s),u}toISODate(){let{format:e="extended"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?Vn(this,"extended"===e):null}toISOWeekDate(){return In(this,"kkkk-'W'WW-c")}toISOTime(){let{suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:s=!1,format:i="extended"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?(r?"T":"")+Zn(this,"extended"===i,t,e,n,s):null}toRFC2822(){return In(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return In(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Vn(this,!0):null}toSQLTime(){let{includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="HH:mm:ss.SSS"
return(t||e)&&(n&&(r+=" "),t?r+="z":e&&(r+="ZZ")),In(this,r,!0)}toSQL(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():xn}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return{}
const t={...this.c}
return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"milliseconds",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!this.isValid||!e.isValid)return Pt.invalid("created by diffing an invalid DateTime")
const r={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=(a=t,Array.isArray(a)?a:[a]).map(Pt.normalizeUnit),i=e.valueOf()>this.valueOf(),u=function(e,t,n,r){let[s,i,u,a]=function(e,t,n){const r=[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+4*(t.year-e.year)],["months",(e,t)=>t.month-e.month+12*(t.year-e.year)],["weeks",(e,t)=>{const n=Yt(e,t)
return(n-n%7)/7}],["days",Yt]],s={}
let i,u
for(const[a,o]of r)if(n.indexOf(a)>=0){i=a
let n=o(e,t)
u=e.plus({[a]:n}),u>t?(e=e.plus({[a]:n-1}),n-=1):e=u,s[a]=n}return[e,s,u,i]}(e,t,n)
const o=t-s,l=n.filter((e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0))
0===l.length&&(u<t&&(u=s.plus({[a]:1})),u!==s&&(i[a]=(i[a]||0)+o/(u-s)))
const c=Pt.fromObject(i,r)
return l.length>0?Pt.fromMillis(o,r).shiftTo(...l).plus(c):c}(i?this:e,i?e:this,s,r)
var a
return i?u.negate():u}diffNow(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.diff(Gn.now(),e,t)}until(e){return this.isValid?Wt.fromDateTimes(this,e):this}hasSame(e,t){if(!this.isValid)return!1
const n=e.valueOf(),r=this.setZone(e.zone,{keepLocalTime:!0})
return r.startOf(t)<=n&&n<=r.endOf(t)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const t=e.base||Gn.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0
let r=["years","months","days","hours","minutes","seconds"],s=e.unit
return Array.isArray(e.unit)&&(r=e.unit,s=void 0),Jn(t,this.plus(n),{...e,numeric:"always",units:r,unit:s})}toRelativeCalendar(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?Jn(e.base||Gn.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(!t.every(Gn.isDateTime))throw new o("min requires all arguments be DateTimes")
return Z(t,(e=>e.valueOf()),Math.min)}static max(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
if(!t.every(Gn.isDateTime))throw new o("max requires all arguments be DateTimes")
return Z(t,(e=>e.valueOf()),Math.max)}static fromFormatExplain(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{locale:r=null,numberingSystem:s=null}=n
return fn(Qe.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),e,t)}static fromStringExplain(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Gn.fromFormatExplain(e,t,n)}static get DATE_SHORT(){return f}static get DATE_MED(){return m}static get DATE_MED_WITH_WEEKDAY(){return D}static get DATE_FULL(){return p}static get DATE_HUGE(){return g}static get TIME_SIMPLE(){return y}static get TIME_WITH_SECONDS(){return F}static get TIME_WITH_SHORT_OFFSET(){return w}static get TIME_WITH_LONG_OFFSET(){return k}static get TIME_24_SIMPLE(){return v}static get TIME_24_WITH_SECONDS(){return E}static get TIME_24_WITH_SHORT_OFFSET(){return A}static get TIME_24_WITH_LONG_OFFSET(){return C}static get DATETIME_SHORT(){return b}static get DATETIME_SHORT_WITH_SECONDS(){return x}static get DATETIME_MED(){return S}static get DATETIME_MED_WITH_SECONDS(){return T}static get DATETIME_MED_WITH_WEEKDAY(){return B}static get DATETIME_FULL(){return O}static get DATETIME_FULL_WITH_SECONDS(){return M}static get DATETIME_HUGE(){return _}static get DATETIME_HUGE_WITH_SECONDS(){return N}}function Qn(e){if(Gn.isDateTime(e))return e
if(e&&e.valueOf&&z(e.valueOf()))return Gn.fromJSDate(e)
if(e&&"object"==typeof e)return Gn.fromObject(e)
throw new o(`Unknown datetime argument: ${e}, of type ${typeof e}`)}t.DateTime=Gn,t.Duration=Pt,t.FixedOffsetZone=Oe,t.IANAZone=Te,t.Info=Jt,t.Interval=Wt,t.InvalidZone=Me,t.Settings=Le,t.SystemZone=Ce,t.VERSION="3.1.0",t.Zone=Ee},970:(e,t)=>{function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(n)return(n=n.call(e)).next.bind(n)
if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var s=0
return function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.defaults={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}
var u=/[&<>"']/,a=new RegExp(u.source,"g"),o=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,l=new RegExp(o.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},h=function(e){return c[e]}
function d(e,t){if(t){if(u.test(e))return e.replace(a,h)}else if(o.test(e))return e.replace(l,h)
return e}var f=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function m(e){return e.replace(f,(function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""}))}var D=/(^|[^\[])\^/g
function p(e,t){e="string"==typeof e?e:e.source,t=t||""
var n={replace:function(t,r){return r=(r=r.source||r).replace(D,"$1"),e=e.replace(t,r),n},getRegex:function(){return new RegExp(e,t)}}
return n}var g=/[^\w:]/g,y=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
function F(e,t,n){if(e){var r
try{r=decodeURIComponent(m(n)).replace(g,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!y.test(n)&&(n=function(e,t){w[" "+e]||(k.test(e)?w[" "+e]=e+"/":w[" "+e]=x(e,"/",!0))
var n=-1===(e=w[" "+e]).indexOf(":")
return"//"===t.substring(0,2)?n?t:e.replace(v,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(E,"$1")+t:e+t}(t,n))
try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n}var w={},k=/^[^:]+:\/*[^/]*$/,v=/^([^:]+:)[\s\S]*$/,E=/^([^:]+:\/*[^/]*)[\s\S]*$/,A={exec:function(){}}
function C(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e}function b(e,t){var n=e.replace(/\|/g,(function(e,t,n){for(var r=!1,s=t;--s>=0&&"\\"===n[s];)r=!r
return r?"|":" |"})).split(/ \|/),r=0
if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>t)n.splice(t)
else for(;n.length<t;)n.push("")
for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|")
return n}function x(e,t,n){var r=e.length
if(0===r)return""
for(var s=0;s<r;){var i=e.charAt(r-s-1)
if(i!==t||n){if(i===t||!n)break
s++}else s++}return e.slice(0,r-s)}function S(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function T(e,t){if(t<1)return""
for(var n="";t>1;)1&t&&(n+=e),t>>=1,e+=e
return n+e}function B(e,t,n,r){var s=t.href,i=t.title?d(t.title):null,u=e[1].replace(/\\([\[\]])/g,"$1")
if("!"!==e[0].charAt(0)){r.state.inLink=!0
var a={type:"link",raw:n,href:s,title:i,text:u,tokens:r.inlineTokens(u)}
return r.state.inLink=!1,a}return{type:"image",raw:n,href:s,title:i,text:d(u)}}var O=function(){function e(e){this.options=e||t.defaults}var n=e.prototype
return n.space=function(e){var t=this.rules.block.newline.exec(e)
if(t&&t[0].length>0)return{type:"space",raw:t[0]}},n.code=function(e){var t=this.rules.block.code.exec(e)
if(t){var n=t[0].replace(/^ {1,4}/gm,"")
return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:x(n,"\n")}}},n.fences=function(e){var t=this.rules.block.fences.exec(e)
if(t){var n=t[0],r=function(e,t){var n=e.match(/^(\s+)(?:```)/)
if(null===n)return t
var r=n[1]
return t.split("\n").map((function(e){var t=e.match(/^\s+/)
return null===t?e:t[0].length>=r.length?e.slice(r.length):e})).join("\n")}(n,t[3]||"")
return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}},n.heading=function(e){var t=this.rules.block.heading.exec(e)
if(t){var n=t[2].trim()
if(/#$/.test(n)){var r=x(n,"#")
this.options.pedantic?n=r.trim():r&&!/ $/.test(r)||(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}},n.hr=function(e){var t=this.rules.block.hr.exec(e)
if(t)return{type:"hr",raw:t[0]}},n.blockquote=function(e){var t=this.rules.block.blockquote.exec(e)
if(t){var n=t[0].replace(/^ *>[ \t]?/gm,"")
return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(n,[]),text:n}}},n.list=function(e){var t=this.rules.block.list.exec(e)
if(t){var n,r,i,u,a,o,l,c,h,d,f,m,D=t[1].trim(),p=D.length>1,g={type:"list",raw:"",ordered:p,start:p?+D.slice(0,-1):"",loose:!1,items:[]}
D=p?"\\d{1,9}\\"+D.slice(-1):"\\"+D,this.options.pedantic&&(D=p?D:"[*+-]")
for(var y=new RegExp("^( {0,3}"+D+")((?:[\t ][^\\n]*)?(?:\\n|$))");e&&(m=!1,t=y.exec(e))&&!this.rules.block.hr.test(e);){if(n=t[0],e=e.substring(n.length),c=t[2].split("\n",1)[0],h=e.split("\n",1)[0],this.options.pedantic?(u=2,f=c.trimLeft()):(u=(u=t[2].search(/[^ ]/))>4?1:u,f=c.slice(u),u+=t[1].length),o=!1,!c&&/^ *$/.test(h)&&(n+=h+"\n",e=e.substring(h.length+1),m=!0),!m)for(var F=new RegExp("^ {0,"+Math.min(3,u-1)+"}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))"),w=new RegExp("^ {0,"+Math.min(3,u-1)+"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"),k=new RegExp("^ {0,"+Math.min(3,u-1)+"}(?:```|~~~)"),v=new RegExp("^ {0,"+Math.min(3,u-1)+"}#");e&&(c=d=e.split("\n",1)[0],this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!k.test(c))&&!v.test(c)&&!F.test(c)&&!w.test(e);){if(c.search(/[^ ]/)>=u||!c.trim())f+="\n"+c.slice(u)
else{if(o)break
f+="\n"+c}o||c.trim()||(o=!0),n+=d+"\n",e=e.substring(d.length+1)}g.loose||(l?g.loose=!0:/\n *\n *$/.test(n)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(f))&&(i="[ ] "!==r[0],f=f.replace(/^\[[ xX]\] +/,"")),g.items.push({type:"list_item",raw:n,task:!!r,checked:i,loose:!1,text:f}),g.raw+=n}g.items[g.items.length-1].raw=n.trimRight(),g.items[g.items.length-1].text=f.trimRight(),g.raw=g.raw.trimRight()
var E=g.items.length
for(a=0;a<E;a++){this.lexer.state.top=!1,g.items[a].tokens=this.lexer.blockTokens(g.items[a].text,[])
var A=g.items[a].tokens.filter((function(e){return"space"===e.type})),C=A.every((function(e){for(var t,n=0,r=s(e.raw.split(""));!(t=r()).done;)if("\n"===t.value&&(n+=1),n>1)return!0
return!1}))
!g.loose&&A.length&&C&&(g.loose=!0,g.items[a].loose=!0)}return g}},n.html=function(e){var t=this.rules.block.html.exec(e)
if(t){var n={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]}
if(this.options.sanitize){var r=this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0])
n.type="paragraph",n.text=r,n.tokens=this.lexer.inline(r)}return n}},n.def=function(e){var t=this.rules.block.def.exec(e)
if(t){var n=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3]
return{type:"def",tag:n,raw:t[0],href:r,title:s}}},n.table=function(e){var t=this.rules.block.table.exec(e)
if(t){var n={type:"table",header:b(t[1]).map((function(e){return{text:e}})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]}
if(n.header.length===n.align.length){n.raw=t[0]
var r,s,i,u,a=n.align.length
for(r=0;r<a;r++)/^ *-+: *$/.test(n.align[r])?n.align[r]="right":/^ *:-+: *$/.test(n.align[r])?n.align[r]="center":/^ *:-+ *$/.test(n.align[r])?n.align[r]="left":n.align[r]=null
for(a=n.rows.length,r=0;r<a;r++)n.rows[r]=b(n.rows[r],n.header.length).map((function(e){return{text:e}}))
for(a=n.header.length,s=0;s<a;s++)n.header[s].tokens=this.lexer.inline(n.header[s].text)
for(a=n.rows.length,s=0;s<a;s++)for(u=n.rows[s],i=0;i<u.length;i++)u[i].tokens=this.lexer.inline(u[i].text)
return n}}},n.lheading=function(e){var t=this.rules.block.lheading.exec(e)
if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}},n.paragraph=function(e){var t=this.rules.block.paragraph.exec(e)
if(t){var n="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1]
return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}},n.text=function(e){var t=this.rules.block.text.exec(e)
if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}},n.escape=function(e){var t=this.rules.inline.escape.exec(e)
if(t)return{type:"escape",raw:t[0],text:d(t[1])}},n.tag=function(e){var t=this.rules.inline.tag.exec(e)
if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):d(t[0]):t[0]}},n.link=function(e){var t=this.rules.inline.link.exec(e)
if(t){var n=t[2].trim()
if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return
var r=x(n.slice(0,-1),"\\")
if((n.length-r.length)%2==0)return}else{var s=function(e,t){if(-1===e.indexOf(t[1]))return-1
for(var n=e.length,r=0,s=0;s<n;s++)if("\\"===e[s])s++
else if(e[s]===t[0])r++
else if(e[s]===t[1]&&--r<0)return s
return-1}(t[2],"()")
if(s>-1){var i=(0===t[0].indexOf("!")?5:4)+t[1].length+s
t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,i).trim(),t[3]=""}}var u=t[2],a=""
if(this.options.pedantic){var o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u)
o&&(u=o[1],a=o[3])}else a=t[3]?t[3].slice(1,-1):""
return u=u.trim(),/^</.test(u)&&(u=this.options.pedantic&&!/>$/.test(n)?u.slice(1):u.slice(1,-1)),B(t,{href:u?u.replace(this.rules.inline._escapes,"$1"):u,title:a?a.replace(this.rules.inline._escapes,"$1"):a},t[0],this.lexer)}},n.reflink=function(e,t){var n
if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){var r=(n[2]||n[1]).replace(/\s+/g," ")
if(!(r=t[r.toLowerCase()])){var s=n[0].charAt(0)
return{type:"text",raw:s,text:s}}return B(n,r,n[0],this.lexer)}},n.emStrong=function(e,t,n){void 0===n&&(n="")
var r=this.rules.inline.emStrong.lDelim.exec(e)
if(r&&(!r[3]||!n.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))){var s=r[1]||r[2]||""
if(!s||s&&(""===n||this.rules.inline.punctuation.exec(n))){var i,u,a=r[0].length-1,o=a,l=0,c="*"===r[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd
for(c.lastIndex=0,t=t.slice(-1*e.length+a);null!=(r=c.exec(t));)if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6])if(u=i.length,r[3]||r[4])o+=u
else if(!((r[5]||r[6])&&a%3)||(a+u)%3){if(!((o-=u)>0)){u=Math.min(u,u+o+l)
var h=e.slice(0,a+r.index+(r[0].length-i.length)+u)
if(Math.min(a,u)%2){var d=h.slice(1,-1)
return{type:"em",raw:h,text:d,tokens:this.lexer.inlineTokens(d)}}var f=h.slice(2,-2)
return{type:"strong",raw:h,text:f,tokens:this.lexer.inlineTokens(f)}}}else l+=u}}},n.codespan=function(e){var t=this.rules.inline.code.exec(e)
if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n)
return r&&s&&(n=n.substring(1,n.length-1)),n=d(n,!0),{type:"codespan",raw:t[0],text:n}}},n.br=function(e){var t=this.rules.inline.br.exec(e)
if(t)return{type:"br",raw:t[0]}},n.del=function(e){var t=this.rules.inline.del.exec(e)
if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}},n.autolink=function(e,t){var n,r,s=this.rules.inline.autolink.exec(e)
if(s)return r="@"===s[2]?"mailto:"+(n=d(this.options.mangle?t(s[1]):s[1])):n=d(s[1]),{type:"link",raw:s[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}},n.url=function(e,t){var n
if(n=this.rules.inline.url.exec(e)){var r,s
if("@"===n[2])s="mailto:"+(r=d(this.options.mangle?t(n[0]):n[0]))
else{var i
do{i=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0]}while(i!==n[0])
r=d(n[0]),s="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}},n.inlineText=function(e,t){var n,r=this.rules.inline.text.exec(e)
if(r)return n=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):d(r[0]):r[0]:d(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:n}},e}(),M={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:A,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/}
M.def=p(M.def).replace("label",M._label).replace("title",M._title).getRegex(),M.bullet=/(?:[*+-]|\d{1,9}[.)])/,M.listItemStart=p(/^( *)(bull) */).replace("bull",M.bullet).getRegex(),M.list=p(M.list).replace(/bull/g,M.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+M.def.source+")").getRegex(),M._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",M._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,M.html=p(M.html,"i").replace("comment",M._comment).replace("tag",M._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),M.paragraph=p(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.blockquote=p(M.blockquote).replace("paragraph",M.paragraph).getRegex(),M.normal=C({},M),M.gfm=C({},M.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),M.gfm.table=p(M.gfm.table).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.gfm.paragraph=p(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",M.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.pedantic=C({},M.normal,{html:p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",M._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:p(M.normal._paragraph).replace("hr",M.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",M.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()})
var _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:A,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:A,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/}
function N(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function $(e){var t,n,r="",s=e.length
for(t=0;t<s;t++)n=e.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";"
return r}_._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",_.punctuation=p(_.punctuation).replace(/punctuation/g,_._punctuation).getRegex(),_.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,_.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,_._comment=p(M._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),_.emStrong.lDelim=p(_.emStrong.lDelim).replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimAst=p(_.emStrong.rDelimAst,"g").replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimUnd=p(_.emStrong.rDelimUnd,"g").replace(/punct/g,_._punctuation).getRegex(),_._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,_.autolink=p(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex(),_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,_.tag=p(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex(),_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,_.link=p(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex(),_.reflink=p(_.reflink).replace("label",_._label).replace("ref",M._label).getRegex(),_.nolink=p(_.nolink).replace("ref",M._label).getRegex(),_.reflinkSearch=p(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex(),_.normal=C({},_),_.pedantic=C({},_.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()}),_.gfm=C({},_.normal,{escape:p(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),_.gfm.url=p(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex(),_.breaks=C({},_.gfm,{br:p(_.br).replace("{2,}","*").getRegex(),text:p(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()})
var z=function(){function e(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||t.defaults,this.options.tokenizer=this.options.tokenizer||new O,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0}
var n={block:M.normal,inline:_.normal}
this.options.pedantic?(n.block=M.pedantic,n.inline=_.pedantic):this.options.gfm&&(n.block=M.gfm,this.options.breaks?n.inline=_.breaks:n.inline=_.gfm),this.tokenizer.rules=n}e.lex=function(t,n){return new e(n).lex(t)},e.lexInline=function(t,n){return new e(n).inlineTokens(t)}
var r,s,i=e.prototype
return i.lex=function(e){var t
for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens)
return this.tokens},i.blockTokens=function(e,t){var n,r,s,i,u=this
for(void 0===t&&(t=[]),e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(function(e,t,n){return t+"    ".repeat(n.length)}));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((function(r){return!!(n=r.call({lexer:u},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)}))))if(n=this.tokenizer.space(e))e=e.substring(n.raw.length),1===n.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(n)
else if(n=this.tokenizer.code(e))e=e.substring(n.raw.length),!(r=t[t.length-1])||"paragraph"!==r.type&&"text"!==r.type?t.push(n):(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text)
else if(n=this.tokenizer.fences(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.heading(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.hr(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.blockquote(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.list(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.html(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.def(e))e=e.substring(n.raw.length),!(r=t[t.length-1])||"paragraph"!==r.type&&"text"!==r.type?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(r.raw+="\n"+n.raw,r.text+="\n"+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text)
else if(n=this.tokenizer.table(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.lheading(e))e=e.substring(n.raw.length),t.push(n)
else if(s=e,this.options.extensions&&this.options.extensions.startBlock&&function(){var t=1/0,n=e.slice(1),r=void 0
u.options.extensions.startBlock.forEach((function(e){"number"==typeof(r=e.call({lexer:this},n))&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}(),this.state.top&&(n=this.tokenizer.paragraph(s)))r=t[t.length-1],i&&"paragraph"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),i=s.length!==e.length,e=e.substring(n.raw.length)
else if(n=this.tokenizer.text(e))e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===r.type?(r.raw+="\n"+n.raw,r.text+="\n"+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n)
else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(a)
break}throw new Error(a)}return this.state.top=!0,t},i.inline=function(e,t){return void 0===t&&(t=[]),this.inlineQueue.push({src:e,tokens:t}),t},i.inlineTokens=function(e,t){var n,r,s,i=this
void 0===t&&(t=[])
var u,a,o,l=e
if(this.tokens.links){var c=Object.keys(this.tokens.links)
if(c.length>0)for(;null!=(u=this.tokenizer.rules.inline.reflinkSearch.exec(l));)c.includes(u[0].slice(u[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,u.index)+"["+T("a",u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(u=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,u.index)+"["+T("a",u[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)
for(;null!=(u=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,u.index+u[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--
for(;e;)if(a||(o=""),a=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((function(r){return!!(n=r.call({lexer:i},e,t))&&(e=e.substring(n.raw.length),t.push(n),!0)}))))if(n=this.tokenizer.escape(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.tag(e))e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n)
else if(n=this.tokenizer.link(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(n.raw.length),(r=t[t.length-1])&&"text"===n.type&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n)
else if(n=this.tokenizer.emStrong(e,l,o))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.codespan(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.br(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.del(e))e=e.substring(n.raw.length),t.push(n)
else if(n=this.tokenizer.autolink(e,$))e=e.substring(n.raw.length),t.push(n)
else if(this.state.inLink||!(n=this.tokenizer.url(e,$))){if(s=e,this.options.extensions&&this.options.extensions.startInline&&function(){var t=1/0,n=e.slice(1),r=void 0
i.options.extensions.startInline.forEach((function(e){"number"==typeof(r=e.call({lexer:this},n))&&r>=0&&(t=Math.min(t,r))})),t<1/0&&t>=0&&(s=e.substring(0,t+1))}(),n=this.tokenizer.inlineText(s,N))e=e.substring(n.raw.length),"_"!==n.raw.slice(-1)&&(o=n.raw.slice(-1)),a=!0,(r=t[t.length-1])&&"text"===r.type?(r.raw+=n.raw,r.text+=n.text):t.push(n)
else if(e){var h="Infinite loop on byte: "+e.charCodeAt(0)
if(this.options.silent){console.error(h)
break}throw new Error(h)}}else e=e.substring(n.raw.length),t.push(n)
return t},r=e,(s=[{key:"rules",get:function(){return{block:M,inline:_}}}])&&n(r,s),Object.defineProperty(r,"prototype",{writable:!1}),e}(),I=function(){function e(e){this.options=e||t.defaults}var n=e.prototype
return n.code=function(e,t,n){var r=(t||"").match(/\S*/)[0]
if(this.options.highlight){var s=this.options.highlight(e,r)
null!=s&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+d(r)+'">'+(n?e:d(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:d(e,!0))+"</code></pre>\n"},n.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},n.html=function(e){return e},n.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+(this.options.headerPrefix+r.slug(n))+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},n.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},n.list=function(e,t,n){var r=t?"ol":"ul"
return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},n.listitem=function(e){return"<li>"+e+"</li>\n"},n.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},n.paragraph=function(e){return"<p>"+e+"</p>\n"},n.table=function(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"},n.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},n.tablecell=function(e,t){var n=t.header?"th":"td"
return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},n.strong=function(e){return"<strong>"+e+"</strong>"},n.em=function(e){return"<em>"+e+"</em>"},n.codespan=function(e){return"<code>"+e+"</code>"},n.br=function(){return this.options.xhtml?"<br/>":"<br>"},n.del=function(e){return"<del>"+e+"</del>"},n.link=function(e,t,n){if(null===(e=F(this.options.sanitize,this.options.baseUrl,e)))return n
var r='<a href="'+e+'"'
return t&&(r+=' title="'+t+'"'),r+">"+n+"</a>"},n.image=function(e,t,n){if(null===(e=F(this.options.sanitize,this.options.baseUrl,e)))return n
var r='<img src="'+e+'" alt="'+n+'"'
return t&&(r+=' title="'+t+'"'),r+(this.options.xhtml?"/>":">")},n.text=function(e){return e},e}(),V=function(){function e(){}var t=e.prototype
return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),Z=function(){function e(){this.seen={}}var t=e.prototype
return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0
if(this.seen.hasOwnProperty(n)){r=this.seen[e]
do{n=e+"-"+ ++r}while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={})
var n=this.serialize(e)
return this.getNextSafeSlug(n,t.dryrun)},e}(),L=function(){function e(e){this.options=e||t.defaults,this.options.renderer=this.options.renderer||new I,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new V,this.slugger=new Z}e.parse=function(t,n){return new e(n).parse(t)},e.parseInline=function(t,n){return new e(n).parseInline(t)}
var n=e.prototype
return n.parse=function(e,t){void 0===t&&(t=!0)
var n,r,s,i,u,a,o,l,c,h,d,f,D,p,g,y,F,w,k,v="",E=e.length
for(n=0;n<E;n++)if(h=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[h.type])||!1===(k=this.options.extensions.renderers[h.type].call({parser:this},h))&&["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(h.type))switch(h.type){case"space":continue
case"hr":v+=this.renderer.hr()
continue
case"heading":v+=this.renderer.heading(this.parseInline(h.tokens),h.depth,m(this.parseInline(h.tokens,this.textRenderer)),this.slugger)
continue
case"code":v+=this.renderer.code(h.text,h.lang,h.escaped)
continue
case"table":for(l="",o="",i=h.header.length,r=0;r<i;r++)o+=this.renderer.tablecell(this.parseInline(h.header[r].tokens),{header:!0,align:h.align[r]})
for(l+=this.renderer.tablerow(o),c="",i=h.rows.length,r=0;r<i;r++){for(o="",u=(a=h.rows[r]).length,s=0;s<u;s++)o+=this.renderer.tablecell(this.parseInline(a[s].tokens),{header:!1,align:h.align[s]})
c+=this.renderer.tablerow(o)}v+=this.renderer.table(l,c)
continue
case"blockquote":c=this.parse(h.tokens),v+=this.renderer.blockquote(c)
continue
case"list":for(d=h.ordered,f=h.start,D=h.loose,i=h.items.length,c="",r=0;r<i;r++)y=(g=h.items[r]).checked,F=g.task,p="",g.task&&(w=this.renderer.checkbox(y),D?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=w+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=w+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:w}):p+=w),p+=this.parse(g.tokens,D),c+=this.renderer.listitem(p,F,y)
v+=this.renderer.list(c,d,f)
continue
case"html":v+=this.renderer.html(h.text)
continue
case"paragraph":v+=this.renderer.paragraph(this.parseInline(h.tokens))
continue
case"text":for(c=h.tokens?this.parseInline(h.tokens):h.text;n+1<E&&"text"===e[n+1].type;)c+="\n"+((h=e[++n]).tokens?this.parseInline(h.tokens):h.text)
v+=t?this.renderer.paragraph(c):c
continue
default:var A='Token with "'+h.type+'" type was not found.'
if(this.options.silent)return void console.error(A)
throw new Error(A)}else v+=k||""
return v},n.parseInline=function(e,t){t=t||this.renderer
var n,r,s,i="",u=e.length
for(n=0;n<u;n++)if(r=e[n],!(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type])||!1===(s=this.options.extensions.renderers[r.type].call({parser:this},r))&&["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))switch(r.type){case"escape":case"text":i+=t.text(r.text)
break
case"html":i+=t.html(r.text)
break
case"link":i+=t.link(r.href,r.title,this.parseInline(r.tokens,t))
break
case"image":i+=t.image(r.href,r.title,r.text)
break
case"strong":i+=t.strong(this.parseInline(r.tokens,t))
break
case"em":i+=t.em(this.parseInline(r.tokens,t))
break
case"codespan":i+=t.codespan(r.text)
break
case"br":i+=t.br()
break
case"del":i+=t.del(this.parseInline(r.tokens,t))
break
default:var a='Token with "'+r.type+'" type was not found.'
if(this.options.silent)return void console.error(a)
throw new Error(a)}else i+=s||""
return i},e}()
function R(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null")
if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")
if("function"==typeof t&&(n=t,t=null),S(t=C({},R.defaults,t||{})),n){var r,s=t.highlight
try{r=z.lex(e,t)}catch(e){return n(e)}var i=function(e){var i
if(!e)try{t.walkTokens&&R.walkTokens(r,t.walkTokens),i=L.parse(r,t)}catch(t){e=t}return t.highlight=s,e?n(e):n(null,i)}
if(!s||s.length<3)return i()
if(delete t.highlight,!r.length)return i()
var u=0
return R.walkTokens(r,(function(e){"code"===e.type&&(u++,setTimeout((function(){s(e.text,e.lang,(function(t,n){if(t)return i(t)
null!=n&&n!==e.text&&(e.text=n,e.escaped=!0),0==--u&&i()}))}),0))})),void(0===u&&i())}function a(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(e.message+"",!0)+"</pre>"
throw e}try{var o=z.lex(e,t)
if(t.walkTokens){if(t.async)return Promise.all(R.walkTokens(o,t.walkTokens)).then((function(){return L.parse(o,t)})).catch(a)
R.walkTokens(o,t.walkTokens)}return L.parse(o,t)}catch(e){a(e)}}R.options=R.setOptions=function(e){var n
return C(R.defaults,e),n=R.defaults,t.defaults=n,R},R.getDefaults=i,R.defaults=t.defaults,R.use=function(){for(var e=R.defaults.extensions||{renderers:{},childTokens:{}},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
n.forEach((function(t){var n=C({},t)
if(n.async=R.defaults.async||n.async,t.extensions&&(t.extensions.forEach((function(t){if(!t.name)throw new Error("extension name required")
if(t.renderer){var n=e.renderers[t.name]
e.renderers[t.name]=n?function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s]
var i=t.renderer.apply(this,r)
return!1===i&&(i=n.apply(this,r)),i}:t.renderer}if(t.tokenizer){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'")
e[t.level]?e[t.level].unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}t.childTokens&&(e.childTokens[t.name]=t.childTokens)})),n.extensions=e),t.renderer&&function(){var e=R.defaults.renderer||new I,r=function(n){var r=e[n]
e[n]=function(){for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u]
var a=t.renderer[n].apply(e,i)
return!1===a&&(a=r.apply(e,i)),a}}
for(var s in t.renderer)r(s)
n.renderer=e}(),t.tokenizer&&function(){var e=R.defaults.tokenizer||new O,r=function(n){var r=e[n]
e[n]=function(){for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u]
var a=t.tokenizer[n].apply(e,i)
return!1===a&&(a=r.apply(e,i)),a}}
for(var s in t.tokenizer)r(s)
n.tokenizer=e}(),t.walkTokens){var r=R.defaults.walkTokens
n.walkTokens=function(e){var n=[]
return n.push(t.walkTokens.call(this,e)),r&&(n=n.concat(r.call(this,e))),n}}R.setOptions(n)}))},R.walkTokens=function(e,t){for(var n,r=[],i=function(){var e=n.value
switch(r=r.concat(t.call(R,e)),e.type){case"table":for(var i,u=s(e.header);!(i=u()).done;){var a=i.value
r=r.concat(R.walkTokens(a.tokens,t))}for(var o,l=s(e.rows);!(o=l()).done;)for(var c,h=s(o.value);!(c=h()).done;){var d=c.value
r=r.concat(R.walkTokens(d.tokens,t))}break
case"list":r=r.concat(R.walkTokens(e.items,t))
break
default:R.defaults.extensions&&R.defaults.extensions.childTokens&&R.defaults.extensions.childTokens[e.type]?R.defaults.extensions.childTokens[e.type].forEach((function(n){r=r.concat(R.walkTokens(e[n],t))})):e.tokens&&(r=r.concat(R.walkTokens(e.tokens,t)))}},u=s(e);!(n=u()).done;)i()
return r},R.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null")
if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")
S(t=C({},R.defaults,t||{}))
try{var n=z.lexInline(e,t)
return t.walkTokens&&R.walkTokens(n,t.walkTokens),L.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+d(e.message+"",!0)+"</pre>"
throw e}},R.Parser=L,R.parser=L.parse,R.Renderer=I,R.TextRenderer=V,R.Lexer=z,R.lexer=z.lex,R.Tokenizer=O,R.Slugger=Z,R.parse=R
var q=R.options,j=R.setOptions,U=R.use,P=R.walkTokens,H=R.parseInline,W=R,J=L.parse,Y=z.lex
t.Lexer=z,t.Parser=L,t.Renderer=I,t.Slugger=Z,t.TextRenderer=V,t.Tokenizer=O,t.getDefaults=i,t.lexer=Y,t.marked=R,t.options=q,t.parse=W,t.parseInline=H,t.parser=J,t.setOptions=j,t.use=U,t.walkTokens=P}}])
