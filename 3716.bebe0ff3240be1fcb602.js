(self.webpackChunkmycrypto=self.webpackChunkmycrypto||[]).push([[3716],{5522:function(e,t,r){var n,o;void 0===(o="function"==typeof(n=function(){var e,t,r,n,o,i={},a={},l={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},s={currentLocale:l.currentLocale,zeroFormat:l.zeroFormat,nullFormat:l.nullFormat,defaultFormat:l.defaultFormat,scalePercentBy100:l.scalePercentBy100};function u(e,t){this._input=e,this._value=t}return(e=function(r){var n,o,a,l;if(e.isNumeral(r))n=r.value();else if(0===r||void 0===r)n=0;else if(null===r||t.isNaN(r))n=null;else if("string"==typeof r)if(s.zeroFormat&&r===s.zeroFormat)n=0;else if(s.nullFormat&&r===s.nullFormat||!r.replace(/[^0-9]+/g,"").length)n=null;else{for(o in i)if((l="function"==typeof i[o].regexps.unformat?i[o].regexps.unformat():i[o].regexps.unformat)&&r.match(l)){a=i[o].unformat;break}n=(a=a||e._.stringToNumber)(r)}else n=Number(r)||null;return new u(r,n)}).version="2.0.6",e.isNumeral=function(e){return e instanceof u},e._=t={numberToFormat:function(t,r,n){var o,i,l,s,u,c,f,m,d=a[e.options.currentLocale],h=!1,p=!1,g="",b=1e12,_=1e9,v=1e6,y="",x=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(h=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(u=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(g=" "),r=r.replace(new RegExp(g+"a[kmbt]?"),""),i>=b&&!o||"t"===o?(g+=d.abbreviations.trillion,t/=b):i<b&&i>=_&&!o||"b"===o?(g+=d.abbreviations.billion,t/=_):i<_&&i>=v&&!o||"m"===o?(g+=d.abbreviations.million,t/=v):(i<v&&i>=1e3&&!o||"k"===o)&&(g+=d.abbreviations.thousand,t/=1e3)),e._.includes(r,"[.]")&&(p=!0,r=r.replace("[.]",".")),l=t.toString().split(".")[0],s=r.split(".")[1],c=r.indexOf(","),m=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,s?(e._.includes(s,"[")?(s=(s=s.replace("]","")).split("["),y=e._.toFixed(t,s[0].length+s[1].length,n,s[1].length)):y=e._.toFixed(t,s.length,n),l=y.split(".")[0],y=e._.includes(y,".")?d.delimiters.decimal+y.split(".")[1]:"",p&&0===Number(y.slice(1))&&(y="")):l=e._.toFixed(t,0,n),g&&!o&&Number(l)>=1e3&&g!==d.abbreviations.trillion)switch(l=String(Number(l)/1e3),g){case d.abbreviations.thousand:g=d.abbreviations.million;break;case d.abbreviations.million:g=d.abbreviations.billion;break;case d.abbreviations.billion:g=d.abbreviations.trillion}if(e._.includes(l,"-")&&(l=l.slice(1),x=!0),l.length<m)for(var Z=m-l.length;Z>0;Z--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+d.delimiters.thousands)),0===r.indexOf(".")&&(l=""),f=l+y+(g||""),h?f=(h&&x?"(":"")+f+(h&&x?")":""):u>=0?f=0===u?(x?"-":"+")+f:f+(x?"-":"+"):x&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,o=a[s.currentLocale],i=e,l={thousand:3,million:6,billion:9,trillion:12};if(s.zeroFormat&&e===s.zeroFormat)r=0;else if(s.nullFormat&&e===s.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)r=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[i++]}for(;i<o;i++)i in n&&(r=t(r,n[i],i,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,t,r,n){var o,i,a,l,s=e.toString().split("."),u=t-(n||0);return o=2===s.length?Math.min(Math.max(s[1].length,u),t):u,a=Math.pow(10,o),l=(r(e+"e+"+o)/a).toFixed(o),n>t-o&&(i=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),l=l.replace(i,"")),l}},e.options=s,e.formats=i,e.locales=a,e.locale=function(e){return e&&(s.currentLocale=e.toLowerCase()),s.currentLocale},e.localeData=function(e){if(!e)return a[s.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in l)s[e]=l[e]},e.zeroFormat=function(e){s.zeroFormat="string"==typeof e?e:null},e.nullFormat=function(e){s.nullFormat="string"==typeof e?e:null},e.defaultFormat=function(e){s.defaultFormat="string"==typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,i,a,l,s,u,c;if("string"!=typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(f){u=e.localeData(e.locale())}return i=u.currency.symbol,l=u.abbreviations,n=u.delimiters.decimal,o="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,!(null!==(c=t.match(/^[^\d]+/))&&(t=t.substr(1),c[0]!==i)||null!==(c=t.match(/[^\d]+$/))&&(t=t.slice(0,-1),c[0]!==l.thousand&&c[0]!==l.million&&c[0]!==l.billion&&c[0]!==l.trillion)||(s=new RegExp(o+"{2}"),t.match(/[^\d.,]/g)||(a=t.split(n)).length>2||(a.length<2?!a[0].match(/^\d+.*\d$/)||a[0].match(s):1===a[0].length?!a[0].match(/^\d+$/)||a[0].match(s)||!a[1].match(/^\d+$/):!a[0].match(/^\d+.*\d$/)||a[0].match(s)||!a[1].match(/^\d+$/))))},e.fn=u.prototype={clone:function(){return e(this)},format:function(t,r){var n,o,a,l=this._value,u=t||s.defaultFormat;if(r=r||Math.round,0===l&&null!==s.zeroFormat)o=s.zeroFormat;else if(null===l&&null!==s.nullFormat)o=s.nullFormat;else{for(n in i)if(u.match(i[n].regexps.format)){a=i[n].format;break}o=(a=a||e._.numberToFormat)(l,u,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],function(e,t,n,o){return e+Math.round(r*t)},0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],function(e,t,n,o){return e-Math.round(r*t)},Math.round(this._value*r))/r,this},multiply:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)},1),this},divide:function(e){return this._value=t.reduce([this._value,e],function(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,i=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),o="("+(o=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat((n={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]}).suffixes.filter(function(e){return r.suffixes.indexOf(e)<0})).join("|")).replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(t,o,i){var a,l,s,u=e._.includes(o,"ib")?n:r,c=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=u.suffixes.length;a++)if(l=Math.pow(u.base,a),s=Math.pow(u.base,a+1),null===t||0===t||t>=l&&t<s){c+=u.suffixes[a],l>0&&(t/=l);break}return e._.numberToFormat(t,o,i)+c},unformat:function(t){var o,i,a=e._.stringToNumber(t);if(a){for(o=r.suffixes.length-1;o>=0;o--){if(e._.includes(t,r.suffixes[o])){i=Math.pow(r.base,o);break}if(e._.includes(t,n.suffixes[o])){i=Math.pow(n.base,o);break}}a*=i||1}return a}}),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,i,a=e.locales[e.options.currentLocale],l={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":o=i===l.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(l.after.length-(1+i)));break;case" ":o=i===l.after.length-1?o+" ":e._.insert(o," ",-(l.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!=typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],function(t,r,n,o){var i=e._.correctionFactor(t,r);return t*i*(r*i)/(i*i)},1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],i=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),i+=o.ordinal(t),e._.numberToFormat(t,r,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,i=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=o)},3716:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Tab1PageModule:()=>b});var n=r(7143),o=r(8583),i=r(665),a=r(1323),l=r(8720),s=r(5522),u=r(7811);const c=function(e){return["/ui/edit",e]};function f(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"ion-item-sliding"),l.TgZ(1,"ion-item",3),l.TgZ(2,"ion-avatar",4),l._UZ(3,"img",5),l.qZA(),l.TgZ(4,"ion-label"),l.TgZ(5,"h2"),l._uU(6),l.qZA(),l.TgZ(7,"p"),l._uU(8),l.qZA(),l.TgZ(9,"p"),l._uU(10),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"ion-item-options",6),l.NdJ("ionSwipe",function(){const t=l.CHM(e).$implicit;return l.oxw().deleteHolding(t)}),l.TgZ(12,"ion-item-option",7),l.NdJ("click",function(){const t=l.CHM(e).$implicit;return l.oxw().deleteHolding(t)}),l._UZ(13,"ion-icon",8),l.qZA(),l.qZA(),l.qZA()}if(2&e){const e=t.$implicit,r=l.oxw();l.xp6(1),l.Q6J("routerLink",l.VKq(6,c,e._key)),l.xp6(2),l.Q6J("src",r.getHoldingImage(e),l.LSH),l.xp6(3),l.Oqu(e.symbol),l.xp6(2),l.AsE("",r.formatNumber(e.amount)," ",e.symbol,""),l.xp6(2),l.Oqu(e.exchange)}}let m=(()=>{class e{constructor(e){this.holdingsService=e,this.searchTerm="",this.searchTerm="",setTimeout(()=>{this.refreshHoldings(null)},1e3)}ngOnInit(){}get holdings(){return this.holdingsService.holdings.filter(e=>e.symbol.toLowerCase().includes(this.searchTerm.toLowerCase())||e.exchange.toLowerCase().includes(this.searchTerm.toLowerCase())||e.amount.toString().startsWith(this.searchTerm.toLowerCase()))}refreshHoldings(e){this.holdingsService.refresh(),null==e||e.target.complete()}deleteHolding(e){this.holdingsService.delete(e._key)}formatNumber(e){return s(e).format("0,0.00")}getHoldingImage(e){return"https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(u.l))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-home"]],decls:6,vars:2,consts:[[3,"ngModel","ngModelChange"],["slot","fixed",3,"ionRefresh"],[4,"ngFor","ngForOf"],[3,"routerLink"],["slot","start"],[3,"src"],["side","end",3,"ionSwipe"],["color","danger","expandable","",3,"click"],["slot","icon-only","name","trash"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-searchbar",0),l.NdJ("ngModelChange",function(e){return t.searchTerm=e}),l.qZA(),l.TgZ(1,"ion-content"),l.TgZ(2,"ion-refresher",1),l.NdJ("ionRefresh",function(e){return t.refreshHoldings(e)}),l._UZ(3,"ion-refresher-content"),l.qZA(),l.TgZ(4,"ion-list"),l.YNc(5,f,14,8,"ion-item-sliding",2),l.qZA(),l.qZA()),2&e&&(l.Q6J("ngModel",t.searchTerm),l.xp6(5),l.Q6J("ngForOf",t.holdings))},directives:[n.VI,n.j9,i.JJ,i.On,n.W2,n.nJ,n.Wo,n.q_,o.sg,n.td,n.Ie,n.YI,a.rH,n.BJ,n.Q$,n.IK,n.u8,n.gu],styles:["ion-content[_ngcontent-%COMP%]{margin-bottom:56px}"]}),e})();const d=function(){return["/ui/new"]};function h(e,t){1&e&&(l.TgZ(0,"ion-buttons",5),l.TgZ(1,"ion-button",8),l._UZ(2,"ion-icon",7),l.qZA(),l.qZA()),2&e&&(l.xp6(1),l.Q6J("routerLink",l.DdM(1,d)))}const p=[{path:"",component:(()=>{class e{constructor(e){this.platform=e}get platformHeaderIsSupported(){return this.platform.is("ios")}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(n.t4))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-tab1"]],decls:14,vars:6,consts:[[3,"translucent"],["slot","end",4,"ngIf"],[1,"home__container",3,"fullscreen","scrollY"],["collapse","condense"],["size","large"],["slot","end"],[3,"routerLink"],["name","add"],["color","primary",3,"routerLink"]],template:function(e,t){1&e&&(l.TgZ(0,"ion-header",0),l.TgZ(1,"ion-toolbar"),l.TgZ(2,"ion-title"),l._uU(3,"My Holdings"),l.qZA(),l.YNc(4,h,3,2,"ion-buttons",1),l.qZA(),l.qZA(),l.TgZ(5,"ion-content",2),l.TgZ(6,"ion-header",3),l.TgZ(7,"ion-toolbar"),l.TgZ(8,"ion-title",4),l._uU(9,"My Holdings"),l.qZA(),l.TgZ(10,"ion-buttons",5),l.TgZ(11,"ion-button",6),l._UZ(12,"ion-icon",7),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(13,"app-home"),l.qZA()),2&e&&(l.Q6J("translucent",!0),l.xp6(4),l.Q6J("ngIf",!t.platformHeaderIsSupported),l.xp6(1),l.Q6J("fullscreen",!0)("scrollY",!1),l.xp6(6),l.Q6J("routerLink",l.DdM(5,d)))},directives:[n.Gu,n.sr,n.wd,o.O5,n.W2,n.Sm,n.YG,n.YI,a.rH,n.gu,m],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.Bz.forChild(p)],a.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[n.Pc,o.ez,i.u5,g]]}),e})()}}]);