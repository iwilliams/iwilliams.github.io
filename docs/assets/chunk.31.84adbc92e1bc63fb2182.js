"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[31],{31:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0})
class n extends Error{}class r extends n{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class s extends n{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class i extends n{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class o extends n{}class a extends n{constructor(t){super(`Invalid unit ${t}`)}}class u extends n{}class l extends n{constructor(){super("Zone is an abstract class")}}const c="numeric",h="short",d="long",m={year:c,month:c,day:c},f={year:c,month:h,day:c},y={year:c,month:h,day:c,weekday:h},g={year:c,month:d,day:c},w={year:c,month:d,day:c,weekday:d},v={hour:c,minute:c},p={hour:c,minute:c,second:c},T={hour:c,minute:c,second:c,timeZoneName:h},S={hour:c,minute:c,second:c,timeZoneName:d},b={hour:c,minute:c,hourCycle:"h23"},O={hour:c,minute:c,second:c,hourCycle:"h23"},k={hour:c,minute:c,second:c,hourCycle:"h23",timeZoneName:h},M={hour:c,minute:c,second:c,hourCycle:"h23",timeZoneName:d},N={year:c,month:c,day:c,hour:c,minute:c},D={year:c,month:c,day:c,hour:c,minute:c,second:c},E={year:c,month:h,day:c,hour:c,minute:c},V={year:c,month:h,day:c,hour:c,minute:c,second:c},x={year:c,month:h,day:c,weekday:h,hour:c,minute:c},I={year:c,month:d,day:c,hour:c,minute:c,timeZoneName:h},C={year:c,month:d,day:c,hour:c,minute:c,second:c,timeZoneName:h},F={year:c,month:d,day:c,weekday:d,hour:c,minute:c,timeZoneName:d},Z={year:c,month:d,day:c,weekday:d,hour:c,minute:c,second:c,timeZoneName:d}
function $(t){return void 0===t}function L(t){return"number"==typeof t}function z(t){return"number"==typeof t&&t%1==0}function A(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(t){return!1}}function q(t,e,n){if(0!==t.length)return t.reduce(((t,r)=>{const s=[e(r),r]
return t&&n(t[0],s[0])===t[0]?t:s}),null)[1]}function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function j(t,e,n){return z(t)&&t>=e&&t<=n}function U(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
const n=t<0
let r
return r=n?"-"+(""+-t).padStart(e,"0"):(""+t).padStart(e,"0"),r}function H(t){return $(t)||null===t||""===t?void 0:parseInt(t,10)}function W(t){return $(t)||null===t||""===t?void 0:parseFloat(t)}function R(t){if(!$(t)&&null!==t&&""!==t){const e=1e3*parseFloat("0."+t)
return Math.floor(e)}}function J(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const r=10**e,s=n?Math.trunc:Math.round
return s(t*r)/r}function P(t){return t%4==0&&(t%100!=0||t%400==0)}function Y(t){return P(t)?366:365}function G(t,e){const n=(r=e-1)-12*Math.floor(r/12)+1
var r
return 2===n?P(t+(e-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function B(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond)
return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(e.getUTCFullYear()-1900)),+e}function Q(t){const e=(t+Math.floor(t/4)-Math.floor(t/100)+Math.floor(t/400))%7,n=t-1,r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400))%7
return 4===e||3===r?53:52}function K(t){return t>99?t:t>60?1900+t:2e3+t}function X(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
const s=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}
r&&(i.timeZone=r)
const o={timeZoneName:e,...i},a=new Intl.DateTimeFormat(n,o).formatToParts(s).find((t=>"timezonename"===t.type.toLowerCase()))
return a?a.value:null}function tt(t,e){let n=parseInt(t,10)
Number.isNaN(n)&&(n=0)
const r=parseInt(e,10)||0
return 60*n+(n<0||Object.is(n,-0)?-r:r)}function et(t){const e=Number(t)
if("boolean"==typeof t||""===t||Number.isNaN(e))throw new u(`Invalid unit value ${t}`)
return e}function nt(t,e){const n={}
for(const r in t)if(_(t,r)){const s=t[r]
if(null==s)continue
n[e(r)]=et(s)}return n}function rt(t,e){const n=Math.trunc(Math.abs(t/60)),r=Math.trunc(Math.abs(t%60)),s=t>=0?"+":"-"
switch(e){case"short":return`${s}${U(n,2)}:${U(r,2)}`
case"narrow":return`${s}${n}${r>0?`:${r}`:""}`
case"techie":return`${s}${U(n,2)}${U(r,2)}`
default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function st(t){return function(t,e){return["hour","minute","second","millisecond"].reduce(((e,n)=>(e[n]=t[n],e)),{})}(t)}const it=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/,ot=["January","February","March","April","May","June","July","August","September","October","November","December"],at=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ut=["J","F","M","A","M","J","J","A","S","O","N","D"]
function lt(t){switch(t){case"narrow":return[...ut]
case"short":return[...at]
case"long":return[...ot]
case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"]
case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"]
default:return null}}const ct=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],ht=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],dt=["M","T","W","T","F","S","S"]
function mt(t){switch(t){case"narrow":return[...dt]
case"short":return[...ht]
case"long":return[...ct]
case"numeric":return["1","2","3","4","5","6","7"]
default:return null}}const ft=["AM","PM"],yt=["Before Christ","Anno Domini"],gt=["BC","AD"],wt=["B","A"]
function vt(t){switch(t){case"narrow":return[...wt]
case"short":return[...gt]
case"long":return[...yt]
default:return null}}function pt(t,e){let n=""
for(const r of t)r.literal?n+=r.val:n+=e(r.val)
return n}const Tt={D:m,DD:f,DDD:g,DDDD:w,t:v,tt:p,ttt:T,tttt:S,T:b,TT:O,TTT:k,TTTT:M,f:N,ff:E,fff:I,ffff:F,F:D,FF:V,FFF:C,FFFF:Z}
class St{static create(t){return new St(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}static parseFormat(t){let e=null,n="",r=!1
const s=[]
for(let i=0;i<t.length;i++){const o=t.charAt(i)
"'"===o?(n.length>0&&s.push({literal:r,val:n}),e=null,n="",r=!r):r||o===e?n+=o:(n.length>0&&s.push({literal:!1,val:n}),n=o,e=o)}return n.length>0&&s.push({literal:r,val:n}),s}static macroTokenToFormatOpts(t){return Tt[t]}constructor(t,e){this.opts=e,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,e){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...e}).format()}formatDateTime(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(t,{...this.opts,...e}).format()}formatDateTimeParts(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(t,{...this.opts,...e}).formatToParts()}resolvedOptions(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.loc.dtFormatter(t,{...this.opts,...e}).resolvedOptions()}num(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(this.opts.forceSimple)return U(t,e)
const n={...this.opts}
return e>0&&(n.padTo=e),this.loc.numberFormatter(n).format(t)}formatDateTimeFromString(t,e){const n="en"===this.loc.listingMode(),r=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,s=(e,n)=>this.loc.extract(t,e,n),i=e=>t.isOffsetFixed&&0===t.offset&&e.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,e.format):"",o=(e,r)=>n?function(t,e){return lt(e)[t.month-1]}(t,e):s(r?{month:e}:{month:e,day:"numeric"},"month"),a=(e,r)=>n?function(t,e){return mt(e)[t.weekday-1]}(t,e):s(r?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday"),u=e=>{const n=St.macroTokenToFormatOpts(e)
return n?this.formatWithSystemDefault(t,n):e},l=e=>n?function(t,e){return vt(e)[t.year<0?0:1]}(t,e):s({era:e},"era")
return pt(St.parseFormat(e),(e=>{switch(e){case"S":return this.num(t.millisecond)
case"u":case"SSS":return this.num(t.millisecond,3)
case"s":return this.num(t.second)
case"ss":return this.num(t.second,2)
case"uu":return this.num(Math.floor(t.millisecond/10),2)
case"uuu":return this.num(Math.floor(t.millisecond/100))
case"m":return this.num(t.minute)
case"mm":return this.num(t.minute,2)
case"h":return this.num(t.hour%12==0?12:t.hour%12)
case"hh":return this.num(t.hour%12==0?12:t.hour%12,2)
case"H":return this.num(t.hour)
case"HH":return this.num(t.hour,2)
case"Z":return i({format:"narrow",allowZ:this.opts.allowZ})
case"ZZ":return i({format:"short",allowZ:this.opts.allowZ})
case"ZZZ":return i({format:"techie",allowZ:this.opts.allowZ})
case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale})
case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale})
case"z":return t.zoneName
case"a":return n?function(t){return ft[t.hour<12?0:1]}(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod")
case"d":return r?s({day:"numeric"},"day"):this.num(t.day)
case"dd":return r?s({day:"2-digit"},"day"):this.num(t.day,2)
case"c":case"E":return this.num(t.weekday)
case"ccc":return a("short",!0)
case"cccc":return a("long",!0)
case"ccccc":return a("narrow",!0)
case"EEE":return a("short",!1)
case"EEEE":return a("long",!1)
case"EEEEE":return a("narrow",!1)
case"L":return r?s({month:"numeric",day:"numeric"},"month"):this.num(t.month)
case"LL":return r?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2)
case"LLL":return o("short",!0)
case"LLLL":return o("long",!0)
case"LLLLL":return o("narrow",!0)
case"M":return r?s({month:"numeric"},"month"):this.num(t.month)
case"MM":return r?s({month:"2-digit"},"month"):this.num(t.month,2)
case"MMM":return o("short",!1)
case"MMMM":return o("long",!1)
case"MMMMM":return o("narrow",!1)
case"y":return r?s({year:"numeric"},"year"):this.num(t.year)
case"yy":return r?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2)
case"yyyy":return r?s({year:"numeric"},"year"):this.num(t.year,4)
case"yyyyyy":return r?s({year:"numeric"},"year"):this.num(t.year,6)
case"G":return l("short")
case"GG":return l("long")
case"GGGGG":return l("narrow")
case"kk":return this.num(t.weekYear.toString().slice(-2),2)
case"kkkk":return this.num(t.weekYear,4)
case"W":return this.num(t.weekNumber)
case"WW":return this.num(t.weekNumber,2)
case"o":return this.num(t.ordinal)
case"ooo":return this.num(t.ordinal,3)
case"q":return this.num(t.quarter)
case"qq":return this.num(t.quarter,2)
case"X":return this.num(Math.floor(t.ts/1e3))
case"x":return this.num(t.ts)
default:return u(e)}}))}formatDurationFromString(t,e){const n=t=>{switch(t[0]){case"S":return"millisecond"
case"s":return"second"
case"m":return"minute"
case"h":return"hour"
case"d":return"day"
case"w":return"week"
case"M":return"month"
case"y":return"year"
default:return null}},r=St.parseFormat(e),s=r.reduce(((t,e)=>{let{literal:n,val:r}=e
return n?t:t.concat(r)}),[])
return pt(r,(t=>e=>{const r=n(e)
return r?this.num(t.get(r),e.length):e})(t.shiftTo(...s.map(n).filter((t=>t)))))}}class bt{constructor(t,e){this.reason=t,this.explanation=e}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}class Ot{get type(){throw new l}get name(){throw new l}get ianaName(){return this.name}get isUniversal(){throw new l}offsetName(t,e){throw new l}formatOffset(t,e){throw new l}offset(t){throw new l}equals(t){throw new l}get isValid(){throw new l}}let kt=null
class Mt extends Ot{static get instance(){return null===kt&&(kt=new Mt),kt}get type(){return"system"}get name(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,e){let{format:n,locale:r}=e
return X(t,n,r)}formatOffset(t,e){return rt(this.offset(t),e)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return"system"===t.type}get isValid(){return!0}}let Nt={}
const Dt={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6}
let Et={}
class Vt extends Ot{static create(t){return Et[t]||(Et[t]=new Vt(t)),Et[t]}static resetCache(){Et={},Nt={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1
try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(t){return!1}}constructor(t){super(),this.zoneName=t,this.valid=Vt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,e){let{format:n,locale:r}=e
return X(t,n,r,this.name)}formatOffset(t,e){return rt(this.offset(t),e)}offset(t){const e=new Date(t)
if(isNaN(e))return NaN
const n=(r=this.name,Nt[r]||(Nt[r]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:r,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Nt[r])
var r
let[s,i,o,a,u,l,c]=n.formatToParts?function(t,e){const n=t.formatToParts(e),r=[]
for(let s=0;s<n.length;s++){const{type:t,value:e}=n[s],i=Dt[t]
"era"===t?r[i]=e:$(i)||(r[i]=parseInt(e,10))}return r}(n,e):function(t,e){const n=t.format(e).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,s,i,o,a,u,l,c]=r
return[o,s,i,a,u,l,c]}(n,e)
"BC"===a&&(s=1-Math.abs(s))
let h=+e
const d=h%1e3
return h-=d>=0?d:1e3+d,(B({year:s,month:i,day:o,hour:24===u?0:u,minute:l,second:c,millisecond:0})-h)/6e4}equals(t){return"iana"===t.type&&t.name===this.name}get isValid(){return this.valid}}let xt=null
class It extends Ot{static get utcInstance(){return null===xt&&(xt=new It(0)),xt}static instance(t){return 0===t?It.utcInstance:new It(t)}static parseSpecifier(t){if(t){const e=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i)
if(e)return new It(tt(e[1],e[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${rt(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${rt(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,e){return rt(this.fixed,e)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return"fixed"===t.type&&t.fixed===this.fixed}get isValid(){return!0}}class Ct extends Ot{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Ft(t,e){if($(t)||null===t)return e
if(t instanceof Ot)return t
if("string"==typeof t){const n=t.toLowerCase()
return"default"===n?e:"local"===n||"system"===n?Mt.instance:"utc"===n||"gmt"===n?It.utcInstance:It.parseSpecifier(n)||Vt.create(t)}return L(t)?It.instance(t):"object"==typeof t&&t.offset&&"number"==typeof t.offset?t:new Ct(t)}let Zt,$t=()=>Date.now(),Lt="system",zt=null,At=null,qt=null
class _t{static get now(){return $t}static set now(t){$t=t}static set defaultZone(t){Lt=t}static get defaultZone(){return Ft(Lt,Mt.instance)}static get defaultLocale(){return zt}static set defaultLocale(t){zt=t}static get defaultNumberingSystem(){return At}static set defaultNumberingSystem(t){At=t}static get defaultOutputCalendar(){return qt}static set defaultOutputCalendar(t){qt=t}static get throwOnInvalid(){return Zt}static set throwOnInvalid(t){Zt=t}static resetCaches(){Qt.resetCache(),Vt.resetCache()}}let jt={},Ut={}
function Ht(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([t,e])
let r=Ut[n]
return r||(r=new Intl.DateTimeFormat(t,e),Ut[n]=r),r}let Wt={},Rt={},Jt=null
function Pt(t,e,n,r,s){const i=t.listingMode(n)
return"error"===i?null:"en"===i?r(e):s(e)}class Yt{constructor(t,e,n){this.padTo=n.padTo||0,this.floor=n.floor||!1
const{padTo:r,floor:s,...i}=n
if(!e||Object.keys(i).length>0){const e={useGrouping:!1,...n}
n.padTo>0&&(e.minimumIntegerDigits=n.padTo),this.inf=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([t,e])
let r=Wt[n]
return r||(r=new Intl.NumberFormat(t,e),Wt[n]=r),r}(t,e)}}format(t){if(this.inf){const e=this.floor?Math.floor(t):t
return this.inf.format(e)}return U(this.floor?Math.floor(t):J(t,3),this.padTo)}}class Gt{constructor(t,e,n){let r
if(this.opts=n,t.zone.isUniversal){const e=t.offset/60*-1,s=e>=0?`Etc/GMT+${e}`:`Etc/GMT${e}`
0!==t.offset&&Vt.create(s).valid?(r=s,this.dt=t):(r="UTC",n.timeZoneName?this.dt=t:this.dt=0===t.offset?t:Bn.fromMillis(t.ts+60*t.offset*1e3))}else"system"===t.zone.type?this.dt=t:(this.dt=t,r=t.zone.name)
const s={...this.opts}
r&&(s.timeZone=r),this.dtf=Ht(e,s)}format(){return this.dtf.format(this.dt.toJSDate())}formatToParts(){return this.dtf.formatToParts(this.dt.toJSDate())}resolvedOptions(){return this.dtf.resolvedOptions()}}class Bt{constructor(t,e,n){this.opts={style:"long",...n},!e&&A()&&(this.rtf=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{base:n,...r}=e,s=JSON.stringify([t,r])
let i=Rt[s]
return i||(i=new Intl.RelativeTimeFormat(t,e),Rt[s]=i),i}(t,n))}format(t,e){return this.rtf?this.rtf.format(t,e):function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"always",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=-1===["hours","minutes","seconds"].indexOf(t)
if("auto"===n&&i){const n="days"===t
switch(e){case 1:return n?"tomorrow":`next ${s[t][0]}`
case-1:return n?"yesterday":`last ${s[t][0]}`
case 0:return n?"today":`this ${s[t][0]}`}}const o=Object.is(e,-0)||e<0,a=Math.abs(e),u=1===a,l=s[t],c=r?u?l[1]:l[2]||l[1]:u?s[t][0]:t
return o?`${a} ${c} ago`:`in ${a} ${c}`}(e,t,this.opts.numeric,"long"!==this.opts.style)}formatToParts(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]}}class Qt{static fromOpts(t){return Qt.create(t.locale,t.numberingSystem,t.outputCalendar,t.defaultToEN)}static create(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
const s=t||_t.defaultLocale,i=s||(r?"en-US":Jt||(Jt=(new Intl.DateTimeFormat).resolvedOptions().locale,Jt)),o=e||_t.defaultNumberingSystem,a=n||_t.defaultOutputCalendar
return new Qt(i,o,a,s)}static resetCache(){Jt=null,Ut={},Wt={},Rt={}}static fromObject(){let{locale:t,numberingSystem:e,outputCalendar:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Qt.create(t,e,n)}constructor(t,e,n,r){const[s,i,o]=function(t){const e=t.indexOf("-u-")
if(-1===e)return[t]
{let n
const r=t.substring(0,e)
try{n=Ht(t).resolvedOptions()}catch(t){n=Ht(r).resolvedOptions()}const{numberingSystem:s,calendar:i}=n
return[r,s,i]}}(t)
this.locale=s,this.numberingSystem=e||i||null,this.outputCalendar=n||o||null,this.intl=function(t,e,n){return n||e?(t+="-u",n&&(t+=`-ca-${n}`),e&&(t+=`-nu-${e}`),t):t}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}get fastNumbers(){var t
return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(t=this).numberingSystem||"latn"===t.numberingSystem)&&("latn"===t.numberingSystem||!t.locale||t.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),e=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar)
return t&&e?"en":"intl"}clone(t){return t&&0!==Object.getOwnPropertyNames(t).length?Qt.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,t.defaultToEN||!1):this}redefaultToEN(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.clone({...t,defaultToEN:!0})}redefaultToSystem(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.clone({...t,defaultToEN:!1})}months(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return Pt(this,t,!(arguments.length>2&&void 0!==arguments[2])||arguments[2],lt,(()=>{const n=e?{month:t,day:"numeric"}:{month:t},r=e?"format":"standalone"
return this.monthsCache[r][t]||(this.monthsCache[r][t]=function(t){const e=[]
for(let n=1;n<=12;n++){const r=Bn.utc(2016,n,1)
e.push(t(r))}return e}((t=>this.extract(t,n,"month")))),this.monthsCache[r][t]}))}weekdays(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return Pt(this,t,!(arguments.length>2&&void 0!==arguments[2])||arguments[2],mt,(()=>{const n=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},r=e?"format":"standalone"
return this.weekdaysCache[r][t]||(this.weekdaysCache[r][t]=function(t){const e=[]
for(let n=1;n<=7;n++){const r=Bn.utc(2016,11,13+n)
e.push(t(r))}return e}((t=>this.extract(t,n,"weekday")))),this.weekdaysCache[r][t]}))}meridiems(){return Pt(this,void 0,!(arguments.length>0&&void 0!==arguments[0])||arguments[0],(()=>ft),(()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"}
this.meridiemCache=[Bn.utc(2016,11,13,9),Bn.utc(2016,11,13,19)].map((e=>this.extract(e,t,"dayperiod")))}return this.meridiemCache}))}eras(t){return Pt(this,t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],vt,(()=>{const e={era:t}
return this.eraCache[t]||(this.eraCache[t]=[Bn.utc(-40,1,1),Bn.utc(2017,1,1)].map((t=>this.extract(t,e,"era")))),this.eraCache[t]}))}extract(t,e,n){const r=this.dtFormatter(t,e).formatToParts().find((t=>t.type.toLowerCase()===n))
return r?r.value:null}numberFormatter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Yt(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return new Gt(t,this.intl,e)}relFormatter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Bt(this.intl,this.isEnglish(),t)}listFormatter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=JSON.stringify([t,e])
let r=jt[n]
return r||(r=new Intl.ListFormat(t,e),jt[n]=r),r}(this.intl,t)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}}function Kt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
const r=e.reduce(((t,e)=>t+e.source),"")
return RegExp(`^${r}$`)}function Xt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return t=>e.reduce(((e,n)=>{let[r,s,i]=e
const[o,a,u]=n(t,i)
return[{...r,...o},a||s,u]}),[{},null,1]).slice(0,2)}function te(t){if(null==t)return[null,null]
for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
for(const[s,i]of n){const e=s.exec(t)
if(e)return i(e)}return[null,null]}function ee(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return(t,n)=>{const r={}
let s
for(s=0;s<e.length;s++)r[e[s]]=H(t[n+s])
return[r,null,n+s]}}const ne=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,re=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,se=RegExp(`${re.source}(?:${ne.source}?(?:\\[(${it.source})\\])?)?`),ie=RegExp(`(?:T${se.source})?`),oe=ee("weekYear","weekNumber","weekDay"),ae=ee("year","ordinal"),ue=RegExp(`${re.source} ?(?:${ne.source}|(${it.source}))?`),le=RegExp(`(?: ${ue.source})?`)
function ce(t,e,n){const r=t[e]
return $(r)?n:H(r)}function he(t,e){return[{hours:ce(t,e,0),minutes:ce(t,e+1,0),seconds:ce(t,e+2,0),milliseconds:R(t[e+3])},null,e+4]}function de(t,e){const n=!t[e]&&!t[e+1],r=tt(t[e+1],t[e+2])
return[{},n?null:It.instance(r),e+3]}function me(t,e){return[{},t[e]?Vt.create(t[e]):null,e+1]}const fe=RegExp(`^T?${re.source}$`),ye=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/
function ge(t){const[e,n,r,s,i,o,a,u,l]=t,c="-"===e[0],h=u&&"-"===u[0],d=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return void 0!==t&&(e||t&&c)?-t:t}
return[{years:d(W(n)),months:d(W(r)),weeks:d(W(s)),days:d(W(i)),hours:d(W(o)),minutes:d(W(a)),seconds:d(W(u),"-0"===u),milliseconds:d(R(l),h)}]}const we={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480}
function ve(t,e,n,r,s,i,o){const a={year:2===e.length?K(H(e)):H(e),month:at.indexOf(n)+1,day:H(r),hour:H(s),minute:H(i)}
return o&&(a.second=H(o)),t&&(a.weekday=t.length>3?ct.indexOf(t)+1:ht.indexOf(t)+1),a}const pe=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/
function Te(t){const[,e,n,r,s,i,o,a,u,l,c,h]=t,d=ve(e,s,r,n,i,o,a)
let m
return m=u?we[u]:l?0:tt(c,h),[d,new It(m)]}const Se=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,be=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Oe=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/
function ke(t){const[,e,n,r,s,i,o,a]=t
return[ve(e,s,r,n,i,o,a),It.utcInstance]}function Me(t){const[,e,n,r,s,i,o,a]=t
return[ve(e,a,n,r,s,i,o),It.utcInstance]}const Ne=Kt(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,ie),De=Kt(/(\d{4})-?W(\d\d)(?:-?(\d))?/,ie),Ee=Kt(/(\d{4})-?(\d{3})/,ie),Ve=Kt(se),xe=Xt((function(t,e){return[{year:ce(t,e),month:ce(t,e+1,1),day:ce(t,e+2,1)},null,e+3]}),he,de,me),Ie=Xt(oe,he,de,me),Ce=Xt(ae,he,de,me),Fe=Xt(he,de,me),Ze=Xt(he),$e=Kt(/(\d{4})-(\d\d)-(\d\d)/,le),Le=Kt(ue),ze=Xt(he,de,me),Ae={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},qe={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...Ae},_e={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:4.3481250000000005,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...Ae},je=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Ue=je.slice(0).reverse()
function He(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const r={values:n?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix}
return new Re(r)}function We(t,e,n,r,s){const i=t[s][n],o=e[n]/i,a=Math.sign(o)!==Math.sign(r[s])&&0!==r[s]&&Math.abs(o)<=1?function(t){return t<0?Math.floor(t):Math.ceil(t)}(o):Math.trunc(o)
r[s]+=a,e[n]-=a*i}class Re{constructor(t){const e="longterm"===t.conversionAccuracy||!1
let n=e?_e:qe
t.matrix&&(n=t.matrix),this.values=t.values,this.loc=t.loc||Qt.create(),this.conversionAccuracy=e?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(t,e){return Re.fromObject({milliseconds:t},e)}static fromObject(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(null==t||"object"!=typeof t)throw new u("Duration.fromObject: argument expected to be an object, got "+(null===t?"null":typeof t))
return new Re({values:nt(t,Re.normalizeUnit),loc:Qt.fromObject(e),conversionAccuracy:e.conversionAccuracy,matrix:e.matrix})}static fromDurationLike(t){if(L(t))return Re.fromMillis(t)
if(Re.isDuration(t))return t
if("object"==typeof t)return Re.fromObject(t)
throw new u(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,e){const[n]=function(t){return te(t,[ye,ge])}(t)
return n?Re.fromObject(n,e):Re.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,e){const[n]=function(t){return te(t,[fe,Ze])}(t)
return n?Re.fromObject(n,e):Re.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!t)throw new u("need to specify a reason the Duration is invalid")
const n=t instanceof bt?t:new bt(t,e)
if(_t.throwOnInvalid)throw new i(n)
return new Re({invalid:n})}static normalizeUnit(t){const e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t?t.toLowerCase():t]
if(!e)throw new a(t)
return e}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n={...e,floor:!1!==e.round&&!1!==e.floor}
return this.isValid?St.create(this.loc,n).formatDurationFromString(this,t):"Invalid Duration"}toHuman(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const e=je.map((e=>{const n=this.values[e]
return $(n)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:e.slice(0,-1)}).format(n)})).filter((t=>t))
return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(e)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null
let t="P"
return 0!==this.years&&(t+=this.years+"Y"),0===this.months&&0===this.quarters||(t+=this.months+3*this.quarters+"M"),0!==this.weeks&&(t+=this.weeks+"W"),0!==this.days&&(t+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(t+="T"),0!==this.hours&&(t+=this.hours+"H"),0!==this.minutes&&(t+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(t+=J(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===t&&(t+="T0S"),t}toISOTime(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const e=this.toMillis()
if(e<0||e>=864e5)return null
t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t}
const n=this.shiftTo("hours","minutes","seconds","milliseconds")
let r="basic"===t.format?"hhmm":"hh:mm"
t.suppressSeconds&&0===n.seconds&&0===n.milliseconds||(r+="basic"===t.format?"ss":":ss",t.suppressMilliseconds&&0===n.milliseconds||(r+=".SSS"))
let s=n.toFormat(r)
return t.includePrefix&&(s="T"+s),s}toJSON(){return this.toISO()}toString(){return this.toISO()}toMillis(){return this.as("milliseconds")}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this
const e=Re.fromDurationLike(t),n={}
for(const r of je)(_(e.values,r)||_(this.values,r))&&(n[r]=e.get(r)+this.get(r))
return He(this,{values:n},!0)}minus(t){if(!this.isValid)return this
const e=Re.fromDurationLike(t)
return this.plus(e.negate())}mapUnits(t){if(!this.isValid)return this
const e={}
for(const n of Object.keys(this.values))e[n]=et(t(this.values[n],n))
return He(this,{values:e},!0)}get(t){return this[Re.normalizeUnit(t)]}set(t){return this.isValid?He(this,{values:{...this.values,...nt(t,Re.normalizeUnit)}}):this}reconfigure(){let{locale:t,numberingSystem:e,conversionAccuracy:n,matrix:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return He(this,{loc:this.loc.clone({locale:t,numberingSystem:e}),matrix:r,conversionAccuracy:n})}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this
const t=this.toObject()
return function(t,e){Ue.reduce(((n,r)=>$(e[r])?n:(n&&We(t,e,n,e,r),r)),null)}(this.matrix,t),He(this,{values:t},!0)}rescale(){return this.isValid?He(this,{values:function(t){const e={}
for(const[n,r]of Object.entries(t))0!==r&&(e[n]=r)
return e}(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
if(!this.isValid)return this
if(0===e.length)return this
e=e.map((t=>Re.normalizeUnit(t)))
const r={},s={},i=this.toObject()
let o
for(const a of je)if(e.indexOf(a)>=0){o=a
let t=0
for(const n in s)t+=this.matrix[n][a]*s[n],s[n]=0
L(i[a])&&(t+=i[a])
const e=Math.trunc(t)
r[a]=e,s[a]=(1e3*t-1e3*e)/1e3
for(const n in i)je.indexOf(n)>je.indexOf(a)&&We(this.matrix,i,n,r,a)}else L(i[a])&&(s[a]=i[a])
for(const a in s)0!==s[a]&&(r[o]+=a===o?s[a]:s[a]/this.matrix[o][a])
return He(this,{values:r},!0).normalize()}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this
const t={}
for(const e of Object.keys(this.values))t[e]=0===this.values[e]?0:-this.values[e]
return He(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid)return!1
if(!this.loc.equals(t.loc))return!1
for(const r of je)if(e=this.values[r],n=t.values[r],!(void 0===e||0===e?void 0===n||0===n:e===n))return!1
var e,n
return!0}}const Je="Invalid Interval"
class Pe{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!t)throw new u("need to specify a reason the Interval is invalid")
const n=t instanceof bt?t:new bt(t,e)
if(_t.throwOnInvalid)throw new s(n)
return new Pe({invalid:n})}static fromDateTimes(t,e){const n=Qn(t),r=Qn(e),s=function(t,e){return t&&t.isValid?e&&e.isValid?e<t?Pe.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null:Pe.invalid("missing or invalid end"):Pe.invalid("missing or invalid start")}(n,r)
return null==s?new Pe({start:n,end:r}):s}static after(t,e){const n=Re.fromDurationLike(e),r=Qn(t)
return Pe.fromDateTimes(r,r.plus(n))}static before(t,e){const n=Re.fromDurationLike(e),r=Qn(t)
return Pe.fromDateTimes(r.minus(n),r)}static fromISO(t,e){const[n,r]=(t||"").split("/",2)
if(n&&r){let t,s,i,o
try{t=Bn.fromISO(n,e),s=t.isValid}catch(r){s=!1}try{i=Bn.fromISO(r,e),o=i.isValid}catch(r){o=!1}if(s&&o)return Pe.fromDateTimes(t,i)
if(s){const n=Re.fromISO(r,e)
if(n.isValid)return Pe.after(t,n)}else if(o){const t=Re.fromISO(n,e)
if(t.isValid)return Pe.before(i,t)}}return Pe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds"
return this.isValid?this.toDuration(t).get(t):NaN}count(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds"
if(!this.isValid)return NaN
const e=this.start.startOf(t),n=this.end.startOf(t)
return Math.floor(n.diff(e,t).get(t))+1}hasSame(t){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,t))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return!!this.isValid&&this.s>t}isBefore(t){return!!this.isValid&&this.e<=t}contains(t){return!!this.isValid&&this.s<=t&&this.e>t}set(){let{start:t,end:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?Pe.fromDateTimes(t||this.s,e||this.e):this}splitAt(){if(!this.isValid)return[]
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
const r=e.map(Qn).filter((t=>this.contains(t))).sort(),s=[]
let{s:i}=this,o=0
for(;i<this.e;){const t=r[o]||this.e,e=+t>+this.e?this.e:t
s.push(Pe.fromDateTimes(i,e)),i=e,o+=1}return s}splitBy(t){const e=Re.fromDurationLike(t)
if(!this.isValid||!e.isValid||0===e.as("milliseconds"))return[]
let n,{s:r}=this,s=1
const i=[]
for(;r<this.e;){const t=this.start.plus(e.mapUnits((t=>t*s)))
n=+t>+this.e?this.e:t,i.push(Pe.fromDateTimes(r,n)),r=n,s+=1}return i}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return!!this.isValid&&+this.e==+t.s}abutsEnd(t){return!!this.isValid&&+t.e==+this.s}engulfs(t){return!!this.isValid&&this.s<=t.s&&this.e>=t.e}equals(t){return!(!this.isValid||!t.isValid)&&this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this
const e=this.s>t.s?this.s:t.s,n=this.e<t.e?this.e:t.e
return e>=n?null:Pe.fromDateTimes(e,n)}union(t){if(!this.isValid)return this
const e=this.s<t.s?this.s:t.s,n=this.e>t.e?this.e:t.e
return Pe.fromDateTimes(e,n)}static merge(t){const[e,n]=t.sort(((t,e)=>t.s-e.s)).reduce(((t,e)=>{let[n,r]=t
return r?r.overlaps(e)||r.abutsStart(e)?[n,r.union(e)]:[n.concat([r]),e]:[n,e]}),[[],null])
return n&&e.push(n),e}static xor(t){let e=null,n=0
const r=[],s=t.map((t=>[{time:t.s,type:"s"},{time:t.e,type:"e"}])),i=Array.prototype.concat(...s).sort(((t,e)=>t.time-e.time))
for(const o of i)n+="s"===o.type?1:-1,1===n?e=o.time:(e&&+e!=+o.time&&r.push(Pe.fromDateTimes(e,o.time)),e=null)
return Pe.merge(r)}difference(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return Pe.xor([this].concat(e)).map((t=>this.intersection(t))).filter((t=>t&&!t.isEmpty()))}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Je}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:Je}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Je}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:Je}toFormat(t){let{separator:e=" – "}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?`${this.s.toFormat(t)}${e}${this.e.toFormat(t)}`:Je}toDuration(t,e){return this.isValid?this.e.diff(this.s,t,e):Re.invalid(this.invalidReason)}mapEndpoints(t){return Pe.fromDateTimes(t(this.s),t(this.e))}}class Ye{static hasDST(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t.defaultZone
const e=Bn.now().setZone(t).set({month:12})
return!t.isUniversal&&e.offset!==e.set({month:6}).offset}static isValidIANAZone(t){return Vt.isValidZone(t)}static normalizeZone(t){return Ft(t,_t.defaultZone)}static months(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:e=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qt.create(e,n,s)).months(t)}static monthsFormat(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:e=null,numberingSystem:n=null,locObj:r=null,outputCalendar:s="gregory"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qt.create(e,n,s)).months(t,!0)}static weekdays(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:e=null,numberingSystem:n=null,locObj:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qt.create(e,n,null)).weekdays(t)}static weekdaysFormat(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long",{locale:e=null,numberingSystem:n=null,locObj:r=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(r||Qt.create(e,n,null)).weekdays(t,!0)}static meridiems(){let{locale:t=null}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Qt.create(t).meridiems()}static eras(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"short",{locale:e=null}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Qt.create(e,null,"gregory").eras(t)}static features(){return{relative:A()}}}function Ge(t,e){const n=t=>t.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(e)-n(t)
return Math.floor(Re.fromMillis(r).as("days"))}const Be={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Qe={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Ke=Be.hanidec.replace(/[\[|\]]/g,"").split("")
function Xe(t){let e=parseInt(t,10)
if(isNaN(e)){e=""
for(let n=0;n<t.length;n++){const r=t.charCodeAt(n)
if(-1!==t[n].search(Be.hanidec))e+=Ke.indexOf(t[n])
else for(const t in Qe){const[n,s]=Qe[t]
r>=n&&r<=s&&(e+=r-n)}}return parseInt(e,10)}return e}function tn(t){let{numberingSystem:e}=t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return new RegExp(`${Be[e||"latn"]}${n}`)}function en(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t=>t
return{regex:t,deser:t=>{let[n]=t
return e(Xe(n))}}}const nn=`[ ${String.fromCharCode(160)}]`,rn=new RegExp(nn,"g")
function sn(t){return t.replace(/\./g,"\\.?").replace(rn,nn)}function on(t){return t.replace(/\./g,"").replace(rn," ").toLowerCase()}function an(t,e){return null===t?null:{regex:RegExp(t.map(sn).join("|")),deser:n=>{let[r]=n
return t.findIndex((t=>on(r)===on(t)))+e}}}function un(t,e){return{regex:t,deser:t=>{let[,e,n]=t
return tt(e,n)},groups:e}}function ln(t){return{regex:t,deser:t=>{let[e]=t
return e}}}const cn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}}
let hn=null
function dn(t,e){return Array.prototype.concat(...t.map((t=>function(t,e){if(t.literal)return t
const n=fn(St.macroTokenToFormatOpts(t.val),e)
return null==n||n.includes(void 0)?t:n}(t,e))))}function mn(t,e,n){const r=dn(St.parseFormat(n),t),s=r.map((e=>function(t,e){const n=tn(e),r=tn(e,"{2}"),s=tn(e,"{3}"),i=tn(e,"{4}"),o=tn(e,"{6}"),a=tn(e,"{1,2}"),u=tn(e,"{1,3}"),l=tn(e,"{1,6}"),c=tn(e,"{1,9}"),h=tn(e,"{2,4}"),d=tn(e,"{4,6}"),m=t=>{return{regex:RegExp((e=t.val,e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"))),deser:t=>{let[e]=t
return e},literal:!0}
var e},f=(f=>{if(t.literal)return m(f)
switch(f.val){case"G":return an(e.eras("short",!1),0)
case"GG":return an(e.eras("long",!1),0)
case"y":return en(l)
case"yy":case"kk":return en(h,K)
case"yyyy":case"kkkk":return en(i)
case"yyyyy":return en(d)
case"yyyyyy":return en(o)
case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return en(a)
case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return en(r)
case"MMM":return an(e.months("short",!0,!1),1)
case"MMMM":return an(e.months("long",!0,!1),1)
case"LLL":return an(e.months("short",!1,!1),1)
case"LLLL":return an(e.months("long",!1,!1),1)
case"o":case"S":return en(u)
case"ooo":case"SSS":return en(s)
case"u":return ln(c)
case"uu":return ln(a)
case"uuu":case"E":case"c":return en(n)
case"a":return an(e.meridiems(),0)
case"EEE":return an(e.weekdays("short",!1,!1),1)
case"EEEE":return an(e.weekdays("long",!1,!1),1)
case"ccc":return an(e.weekdays("short",!0,!1),1)
case"cccc":return an(e.weekdays("long",!0,!1),1)
case"Z":case"ZZ":return un(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2)
case"ZZZ":return un(new RegExp(`([+-]${a.source})(${r.source})?`),2)
case"z":return ln(/[a-z_+-/]{1,256}?/i)
default:return m(f)}})(t)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}
return f.token=t,f}(e,t))),i=s.find((t=>t.invalidReason))
if(i)return{input:e,tokens:r,invalidReason:i.invalidReason}
{const[t,n]=function(t){return[`^${t.map((t=>t.regex)).reduce(((t,e)=>`${t}(${e.source})`),"")}$`,t]}(s),i=RegExp(t,"i"),[a,u]=function(t,e,n){const r=t.match(e)
if(r){const t={}
let e=1
for(const s in n)if(_(n,s)){const i=n[s],o=i.groups?i.groups+1:1
!i.literal&&i.token&&(t[i.token.val[0]]=i.deser(r.slice(e,e+o))),e+=o}return[r,t]}return[r,{}]}(e,i,n),[l,c,h]=u?function(t){let e,n=null
return $(t.z)||(n=Vt.create(t.z)),$(t.Z)||(n||(n=new It(t.Z)),e=t.Z),$(t.q)||(t.M=3*(t.q-1)+1),$(t.h)||(t.h<12&&1===t.a?t.h+=12:12===t.h&&0===t.a&&(t.h=0)),0===t.G&&t.y&&(t.y=-t.y),$(t.u)||(t.S=R(t.u)),[Object.keys(t).reduce(((e,n)=>{const r=(t=>{switch(t){case"S":return"millisecond"
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
return r&&(e[r]=t[n]),e}),{}),n,e]}(u):[null,null,void 0]
if(_(u,"a")&&_(u,"H"))throw new o("Can't include meridiem when specifying 24-hour format")
return{input:e,tokens:r,regex:i,rawMatches:a,matches:u,result:l,zone:c,specificOffset:h}}}function fn(t,e){return t?St.create(e,t).formatDateTimeParts((hn||(hn=Bn.fromMillis(1555555555555)),hn)).map((e=>function(t,e,n){const{type:r,value:s}=t
if("literal"===r)return{literal:!0,val:s}
const i=n[r]
let o=cn[r]
return"object"==typeof o&&(o=o[i]),o?{literal:!1,val:o}:void 0}(e,0,t))):null}const yn=[0,31,59,90,120,151,181,212,243,273,304,334],gn=[0,31,60,91,121,152,182,213,244,274,305,335]
function wn(t,e){return new bt("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function vn(t,e,n){const r=new Date(Date.UTC(t,e-1,n))
t<100&&t>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900)
const s=r.getUTCDay()
return 0===s?7:s}function pn(t,e,n){return n+(P(t)?gn:yn)[e-1]}function Tn(t,e){const n=P(t)?gn:yn,r=n.findIndex((t=>t<e))
return{month:r+1,day:e-n[r]}}function Sn(t){const{year:e,month:n,day:r}=t,s=pn(e,n,r),i=vn(e,n,r)
let o,a=Math.floor((s-i+10)/7)
return a<1?(o=e-1,a=Q(o)):a>Q(e)?(o=e+1,a=1):o=e,{weekYear:o,weekNumber:a,weekday:i,...st(t)}}function bn(t){const{weekYear:e,weekNumber:n,weekday:r}=t,s=vn(e,1,4),i=Y(e)
let o,a=7*n+r-s-3
a<1?(o=e-1,a+=Y(o)):a>i?(o=e+1,a-=Y(e)):o=e
const{month:u,day:l}=Tn(o,a)
return{year:o,month:u,day:l,...st(t)}}function On(t){const{year:e,month:n,day:r}=t
return{year:e,ordinal:pn(e,n,r),...st(t)}}function kn(t){const{year:e,ordinal:n}=t,{month:r,day:s}=Tn(e,n)
return{year:e,month:r,day:s,...st(t)}}function Mn(t){const e=z(t.year),n=j(t.month,1,12),r=j(t.day,1,G(t.year,t.month))
return e?n?!r&&wn("day",t.day):wn("month",t.month):wn("year",t.year)}function Nn(t){const{hour:e,minute:n,second:r,millisecond:s}=t,i=j(e,0,23)||24===e&&0===n&&0===r&&0===s,o=j(n,0,59),a=j(r,0,59),u=j(s,0,999)
return i?o?a?!u&&wn("millisecond",s):wn("second",r):wn("minute",n):wn("hour",e)}const Dn="Invalid DateTime",En=864e13
function Vn(t){return new bt("unsupported zone",`the zone "${t.name}" is not supported`)}function xn(t){return null===t.weekData&&(t.weekData=Sn(t.c)),t.weekData}function In(t,e){const n={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid}
return new Bn({...n,...e,old:n})}function Cn(t,e,n){let r=t-60*e*1e3
const s=n.offset(r)
if(e===s)return[r,e]
r-=60*(s-e)*1e3
const i=n.offset(r)
return s===i?[r,s]:[t-60*Math.min(s,i)*1e3,Math.max(s,i)]}function Fn(t,e){const n=new Date(t+=60*e*1e3)
return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Zn(t,e,n){return Cn(B(t),e,n)}function $n(t,e){const n=t.o,r=t.c.year+Math.trunc(e.years),s=t.c.month+Math.trunc(e.months)+3*Math.trunc(e.quarters),i={...t.c,year:r,month:s,day:Math.min(t.c.day,G(r,s))+Math.trunc(e.days)+7*Math.trunc(e.weeks)},o=Re.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=B(i)
let[u,l]=Cn(a,n,t.zone)
return 0!==o&&(u+=o,l=t.zone.offset(u)),{ts:u,o:l}}function Ln(t,e,n,r,s,i){const{setZone:o,zone:a}=n
if(t&&0!==Object.keys(t).length){const r=e||a,s=Bn.fromObject(t,{...n,zone:r,specificOffset:i})
return o?s:s.setZone(a)}return Bn.invalid(new bt("unparsable",`the input "${s}" can't be parsed as ${r}`))}function zn(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return t.isValid?St.create(Qt.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(t,e):null}function An(t,e){const n=t.c.year>9999||t.c.year<0
let r=""
return n&&t.c.year>=0&&(r+="+"),r+=U(t.c.year,n?6:4),e?(r+="-",r+=U(t.c.month),r+="-",r+=U(t.c.day)):(r+=U(t.c.month),r+=U(t.c.day)),r}function qn(t,e,n,r,s,i){let o=U(t.c.hour)
return e?(o+=":",o+=U(t.c.minute),0===t.c.second&&n||(o+=":")):o+=U(t.c.minute),0===t.c.second&&n||(o+=U(t.c.second),0===t.c.millisecond&&r||(o+=".",o+=U(t.c.millisecond,3))),s&&(t.isOffsetFixed&&0===t.offset&&!i?o+="Z":t.o<0?(o+="-",o+=U(Math.trunc(-t.o/60)),o+=":",o+=U(Math.trunc(-t.o%60))):(o+="+",o+=U(Math.trunc(t.o/60)),o+=":",o+=U(Math.trunc(t.o%60)))),i&&(o+="["+t.zone.ianaName+"]"),o}const _n={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},jn={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Un={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Hn=["year","month","day","hour","minute","second","millisecond"],Wn=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Rn=["year","ordinal","hour","minute","second","millisecond"]
function Jn(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()]
if(!e)throw new a(t)
return e}function Pn(t,e){const n=Ft(e.zone,_t.defaultZone),r=Qt.fromObject(e),s=_t.now()
let i,o
if($(t.year))i=s
else{for(const n of Hn)$(t[n])&&(t[n]=_n[n])
const e=Mn(t)||Nn(t)
if(e)return Bn.invalid(e)
const r=n.offset(s);[i,o]=Zn(t,r,n)}return new Bn({ts:i,zone:n,loc:r,o:o})}function Yn(t,e,n){const r=!!$(n.round)||n.round,s=(t,s)=>(t=J(t,r||n.calendary?0:2,!0),e.loc.clone(n).relFormatter(n).format(t,s)),i=r=>n.calendary?e.hasSame(t,r)?0:e.startOf(r).diff(t.startOf(r),r).get(r):e.diff(t,r).get(r)
if(n.unit)return s(i(n.unit),n.unit)
for(const o of n.units){const t=i(o)
if(Math.abs(t)>=1)return s(t,o)}return s(t>e?-0:0,n.units[n.units.length-1])}function Gn(t){let e,n={}
return t.length>0&&"object"==typeof t[t.length-1]?(n=t[t.length-1],e=Array.from(t).slice(0,t.length-1)):e=Array.from(t),[n,e]}class Bn{constructor(t){const e=t.zone||_t.defaultZone
let n=t.invalid||(Number.isNaN(t.ts)?new bt("invalid input"):null)||(e.isValid?null:Vn(e))
this.ts=$(t.ts)?_t.now():t.ts
let r=null,s=null
if(!n)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e))[r,s]=[t.old.c,t.old.o]
else{const t=e.offset(this.ts)
r=Fn(this.ts,t),n=Number.isNaN(r.year)?new bt("invalid input"):null,r=n?null:r,s=n?null:t}this._zone=e,this.loc=t.loc||Qt.create(),this.invalid=n,this.weekData=null,this.c=r,this.o=s,this.isLuxonDateTime=!0}static now(){return new Bn({})}static local(){const[t,e]=Gn(arguments),[n,r,s,i,o,a,u]=e
return Pn({year:n,month:r,day:s,hour:i,minute:o,second:a,millisecond:u},t)}static utc(){const[t,e]=Gn(arguments),[n,r,s,i,o,a,u]=e
return t.zone=It.utcInstance,Pn({year:n,month:r,day:s,hour:i,minute:o,second:a,millisecond:u},t)}static fromJSDate(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=(r=t,"[object Date]"===Object.prototype.toString.call(r)?t.valueOf():NaN)
var r
if(Number.isNaN(n))return Bn.invalid("invalid input")
const s=Ft(e.zone,_t.defaultZone)
return s.isValid?new Bn({ts:n,zone:s,loc:Qt.fromObject(e)}):Bn.invalid(Vn(s))}static fromMillis(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(L(t))return t<-En||t>En?Bn.invalid("Timestamp out of range"):new Bn({ts:t,zone:Ft(e.zone,_t.defaultZone),loc:Qt.fromObject(e)})
throw new u(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(L(t))return new Bn({ts:1e3*t,zone:Ft(e.zone,_t.defaultZone),loc:Qt.fromObject(e)})
throw new u("fromSeconds requires a numerical input")}static fromObject(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
t=t||{}
const n=Ft(e.zone,_t.defaultZone)
if(!n.isValid)return Bn.invalid(Vn(n))
const r=_t.now(),s=$(e.specificOffset)?n.offset(r):e.specificOffset,i=nt(t,Jn),a=!$(i.ordinal),u=!$(i.year),l=!$(i.month)||!$(i.day),c=u||l,h=i.weekYear||i.weekNumber,d=Qt.fromObject(e)
if((c||a)&&h)throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(l&&a)throw new o("Can't mix ordinal dates with month/day")
const m=h||i.weekday&&!c
let f,y,g=Fn(r,s)
m?(f=Wn,y=jn,g=Sn(g)):a?(f=Rn,y=Un,g=On(g)):(f=Hn,y=_n)
let w=!1
for(const o of f)$(i[o])?i[o]=w?y[o]:g[o]:w=!0
const v=m?function(t){const e=z(t.weekYear),n=j(t.weekNumber,1,Q(t.weekYear)),r=j(t.weekday,1,7)
return e?n?!r&&wn("weekday",t.weekday):wn("week",t.week):wn("weekYear",t.weekYear)}(i):a?function(t){const e=z(t.year),n=j(t.ordinal,1,Y(t.year))
return e?!n&&wn("ordinal",t.ordinal):wn("year",t.year)}(i):Mn(i),p=v||Nn(i)
if(p)return Bn.invalid(p)
const T=m?bn(i):a?kn(i):i,[S,b]=Zn(T,s,n),O=new Bn({ts:S,zone:n,o:b,loc:d})
return i.weekday&&c&&t.weekday!==O.weekday?Bn.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${O.toISO()}`):O}static fromISO(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(t){return te(t,[Ne,xe],[De,Ie],[Ee,Ce],[Ve,Fe])}(t)
return Ln(n,r,e,"ISO 8601",t)}static fromRFC2822(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(t){return te(function(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}(t),[pe,Te])}(t)
return Ln(n,r,e,"RFC 2822",t)}static fromHTTP(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(t){return te(t,[Se,ke],[be,ke],[Oe,Me])}(t)
return Ln(n,r,e,"HTTP",e)}static fromFormat(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if($(t)||$(e))throw new u("fromFormat requires an input string and a format")
const{locale:r=null,numberingSystem:s=null}=n,i=Qt.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),[o,a,l,c]=function(t,e,n){const{result:r,zone:s,specificOffset:i,invalidReason:o}=mn(t,e,n)
return[r,s,i,o]}(i,t,e)
return c?Bn.invalid(c):Ln(o,a,n,`format ${e}`,t,l)}static fromString(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Bn.fromFormat(t,e,n)}static fromSQL(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[n,r]=function(t){return te(t,[$e,xe],[Le,ze])}(t)
return Ln(n,r,e,"SQL",t)}static invalid(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
if(!t)throw new u("need to specify a reason the DateTime is invalid")
const n=t instanceof bt?t:new bt(t,e)
if(_t.throwOnInvalid)throw new r(n)
return new Bn({invalid:n})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=fn(t,Qt.fromObject(e))
return n?n.map((t=>t?t.val:null)).join(""):null}static expandFormat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return dn(St.parseFormat(t),Qt.fromObject(e)).map((t=>t.val)).join("")}get(t){return this[t]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?xn(this).weekYear:NaN}get weekNumber(){return this.isValid?xn(this).weekNumber:NaN}get weekday(){return this.isValid?xn(this).weekday:NaN}get ordinal(){return this.isValid?On(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ye.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ye.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ye.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ye.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}get isInLeapYear(){return P(this.year)}get daysInMonth(){return G(this.year,this.month)}get daysInYear(){return this.isValid?Y(this.year):NaN}get weeksInWeekYear(){return this.isValid?Q(this.weekYear):NaN}resolvedLocaleOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{locale:e,numberingSystem:n,calendar:r}=St.create(this.loc.clone(t),t).resolvedOptions(this)
return{locale:e,numberingSystem:n,outputCalendar:r}}toUTC(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.setZone(It.instance(t),e)}toLocal(){return this.setZone(_t.defaultZone)}setZone(t){let{keepLocalTime:e=!1,keepCalendarTime:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if((t=Ft(t,_t.defaultZone)).equals(this.zone))return this
if(t.isValid){let r=this.ts
if(e||n){const e=t.offset(this.ts),n=this.toObject();[r]=Zn(n,e,t)}return In(this,{ts:r,zone:t})}return Bn.invalid(Vn(t))}reconfigure(){let{locale:t,numberingSystem:e,outputCalendar:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return In(this,{loc:this.loc.clone({locale:t,numberingSystem:e,outputCalendar:n})})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this
const e=nt(t,Jn),n=!$(e.weekYear)||!$(e.weekNumber)||!$(e.weekday),r=!$(e.ordinal),s=!$(e.year),i=!$(e.month)||!$(e.day),a=s||i,u=e.weekYear||e.weekNumber
if((a||r)&&u)throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals")
if(i&&r)throw new o("Can't mix ordinal dates with month/day")
let l
n?l=bn({...Sn(this.c),...e}):$(e.ordinal)?(l={...this.toObject(),...e},$(e.day)&&(l.day=Math.min(G(l.year,l.month),l.day))):l=kn({...On(this.c),...e})
const[c,h]=Zn(l,this.o,this.zone)
return In(this,{ts:c,o:h})}plus(t){return this.isValid?In(this,$n(this,Re.fromDurationLike(t))):this}minus(t){return this.isValid?In(this,$n(this,Re.fromDurationLike(t).negate())):this}startOf(t){if(!this.isValid)return this
const e={},n=Re.normalizeUnit(t)
switch(n){case"years":e.month=1
case"quarters":case"months":e.day=1
case"weeks":case"days":e.hour=0
case"hours":e.minute=0
case"minutes":e.second=0
case"seconds":e.millisecond=0}if("weeks"===n&&(e.weekday=1),"quarters"===n){const t=Math.ceil(this.month/3)
e.month=3*(t-1)+1}return this.set(e)}endOf(t){return this.isValid?this.plus({[t]:1}).startOf(t).minus(1):this}toFormat(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?St.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):Dn}toLocaleString(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.isValid?St.create(this.loc.clone(e),t).formatDateTime(this):Dn}toLocaleParts(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?St.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO(){let{format:t="extended",suppressSeconds:e=!1,suppressMilliseconds:n=!1,includeOffset:r=!0,extendedZone:s=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const i="extended"===t
let o=An(this,i)
return o+="T",o+=qn(this,i,e,n,r,s),o}toISODate(){let{format:t="extended"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?An(this,"extended"===t):null}toISOWeekDate(){return zn(this,"kkkk-'W'WW-c")}toISOTime(){let{suppressMilliseconds:t=!1,suppressSeconds:e=!1,includeOffset:n=!0,includePrefix:r=!1,extendedZone:s=!1,format:i="extended"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?(r?"T":"")+qn(this,"extended"===i,e,t,n,s):null}toRFC2822(){return zn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return zn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?An(this,!0):null}toSQLTime(){let{includeOffset:t=!0,includeZone:e=!1,includeOffsetSpace:n=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r="HH:mm:ss.SSS"
return(e||t)&&(n&&(r+=" "),e?r+="z":t&&(r+="ZZ")),zn(this,r,!0)}toSQL(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():Dn}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return{}
const e={...this.c}
return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"milliseconds",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!this.isValid||!t.isValid)return Re.invalid("created by diffing an invalid DateTime")
const r={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=(a=e,Array.isArray(a)?a:[a]).map(Re.normalizeUnit),i=t.valueOf()>this.valueOf(),o=function(t,e,n,r){let[s,i,o,a]=function(t,e,n){const r=[["years",(t,e)=>e.year-t.year],["quarters",(t,e)=>e.quarter-t.quarter+4*(e.year-t.year)],["months",(t,e)=>e.month-t.month+12*(e.year-t.year)],["weeks",(t,e)=>{const n=Ge(t,e)
return(n-n%7)/7}],["days",Ge]],s={}
let i,o
for(const[a,u]of r)if(n.indexOf(a)>=0){i=a
let n=u(t,e)
o=t.plus({[a]:n}),o>e?(t=t.plus({[a]:n-1}),n-=1):t=o,s[a]=n}return[t,s,o,i]}(t,e,n)
const u=e-s,l=n.filter((t=>["hours","minutes","seconds","milliseconds"].indexOf(t)>=0))
0===l.length&&(o<e&&(o=s.plus({[a]:1})),o!==s&&(i[a]=(i[a]||0)+u/(o-s)))
const c=Re.fromObject(i,r)
return l.length>0?Re.fromMillis(u,r).shiftTo(...l).plus(c):c}(i?this:t,i?t:this,s,r)
var a
return i?o.negate():o}diffNow(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"milliseconds",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return this.diff(Bn.now(),t,e)}until(t){return this.isValid?Pe.fromDateTimes(this,t):this}hasSame(t,e){if(!this.isValid)return!1
const n=t.valueOf(),r=this.setZone(t.zone,{keepLocalTime:!0})
return r.startOf(e)<=n&&n<=r.endOf(e)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.isValid)return null
const e=t.base||Bn.fromObject({},{zone:this.zone}),n=t.padding?this<e?-t.padding:t.padding:0
let r=["years","months","days","hours","minutes","seconds"],s=t.unit
return Array.isArray(t.unit)&&(r=t.unit,s=void 0),Yn(e,this.plus(n),{...t,numeric:"always",units:r,unit:s})}toRelativeCalendar(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return this.isValid?Yn(t.base||Bn.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
if(!e.every(Bn.isDateTime))throw new u("min requires all arguments be DateTimes")
return q(e,(t=>t.valueOf()),Math.min)}static max(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
if(!e.every(Bn.isDateTime))throw new u("max requires all arguments be DateTimes")
return q(e,(t=>t.valueOf()),Math.max)}static fromFormatExplain(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{locale:r=null,numberingSystem:s=null}=n
return mn(Qt.fromOpts({locale:r,numberingSystem:s,defaultToEN:!0}),t,e)}static fromStringExplain(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return Bn.fromFormatExplain(t,e,n)}static get DATE_SHORT(){return m}static get DATE_MED(){return f}static get DATE_MED_WITH_WEEKDAY(){return y}static get DATE_FULL(){return g}static get DATE_HUGE(){return w}static get TIME_SIMPLE(){return v}static get TIME_WITH_SECONDS(){return p}static get TIME_WITH_SHORT_OFFSET(){return T}static get TIME_WITH_LONG_OFFSET(){return S}static get TIME_24_SIMPLE(){return b}static get TIME_24_WITH_SECONDS(){return O}static get TIME_24_WITH_SHORT_OFFSET(){return k}static get TIME_24_WITH_LONG_OFFSET(){return M}static get DATETIME_SHORT(){return N}static get DATETIME_SHORT_WITH_SECONDS(){return D}static get DATETIME_MED(){return E}static get DATETIME_MED_WITH_SECONDS(){return V}static get DATETIME_MED_WITH_WEEKDAY(){return x}static get DATETIME_FULL(){return I}static get DATETIME_FULL_WITH_SECONDS(){return C}static get DATETIME_HUGE(){return F}static get DATETIME_HUGE_WITH_SECONDS(){return Z}}function Qn(t){if(Bn.isDateTime(t))return t
if(t&&t.valueOf&&L(t.valueOf()))return Bn.fromJSDate(t)
if(t&&"object"==typeof t)return Bn.fromObject(t)
throw new u(`Unknown datetime argument: ${t}, of type ${typeof t}`)}e.DateTime=Bn,e.Duration=Re,e.FixedOffsetZone=It,e.IANAZone=Vt,e.Info=Ye,e.Interval=Pe,e.InvalidZone=Ct,e.Settings=_t,e.SystemZone=Mt,e.VERSION="3.1.0",e.Zone=Ot}}])
