// @timestamp thenkey 2024-03-10 09:21:49
(()=>{var e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var t,r={exports:{}},i=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));function n(){return t||(t=1,r.exports=(n=n||function(t,r){var n;if(typeof window<"u"&&window.crypto&&(n=window.crypto),typeof self<"u"&&self.crypto&&(n=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(n=globalThis.crypto),!n&&typeof window<"u"&&window.msCrypto&&(n=window.msCrypto),!n&&void 0!==e&&e.crypto&&(n=e.crypto),!n)try{n=i}catch{}var o=function(){if(n){if("function"==typeof n.getRandomValues)try{return n.getRandomValues(new Uint32Array(1))[0]}catch{}if("function"==typeof n.randomBytes)try{return n.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(t){var r;return e.prototype=t,r=new e,e.prototype=null,r}}(),s={},c=s.lib={},l=c.Base={extend:function(e){var t=a(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},u=c.WordArray=l.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||f).stringify(this)},concat:function(e){var t=this.words,r=e.words,i=this.sigBytes,n=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var a=r[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=a<<24-(i+o)%4*8}else for(var s=0;s<n;s+=4)t[i+s>>>2]=r[s>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var e=l.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],r=0;r<e;r+=4)t.push(o());return new u.init(t,e)}}),d=s.enc={},f=d.Hex={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n++){var o=t[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i+=2)r[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new u.init(r,t/2)}},p=d.Latin1={stringify:function(e){for(var t=e.words,r=e.sigBytes,i=[],n=0;n<r;n++){var o=t[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,r=[],i=0;i<t;i++)r[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new u.init(r,t)}},h=d.Utf8={stringify:function(e){try{return decodeURIComponent(escape(p.stringify(e)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(e){return p.parse(unescape(encodeURIComponent(e)))}},y=c.BufferedBlockAlgorithm=l.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=h.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(e){var r,i=this._data,n=i.words,o=i.sigBytes,a=this.blockSize,s=o/(4*a),c=(s=e?t.ceil(s):t.max((0|s)-this._minBufferSize,0))*a,l=t.min(4*c,o);if(c){for(var d=0;d<c;d+=a)this._doProcessBlock(n,d);r=n.splice(0,c),i.sigBytes-=l}return new u.init(r,l)},clone:function(){var e=l.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});c.Hasher=y.extend({cfg:l.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){y.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new m.HMAC.init(e,r).finalize(t)}}});var m=s.algo={};return s}(Math),n)),r.exports;var n}var o,a={exports:{}};var s,c={exports:{}},l={exports:{}},u={exports:{}};var d,f,p,h,y={exports:{}};function m(){return f||(f=1,l.exports=(e=n(),function(){return s||(s=1,u.exports=(t=(e=l=n()).lib,r=t.WordArray,i=t.Hasher,o=e.algo,a=[],c=o.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],l=0;l<80;l++){if(l<16)a[l]=0|e[t+l];else{var u=a[l-3]^a[l-8]^a[l-14]^a[l-16];a[l]=u<<1|u>>>31}var d=(i<<5|i>>>27)+c+a[l];d+=l<20?1518500249+(n&o|~n&s):l<40?1859775393+(n^o^s):l<60?(n&o|n&s|o&s)-1894007588:(n^o^s)-899497514,c=s,s=o,o=n<<30|n>>>2,n=i,i=d}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(r/4294967296),t[15+(i+64>>>9<<4)]=r,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this);return e._hash=this._hash.clone(),e}}),e.SHA1=i._createHelper(c),e.HmacSHA1=i._createHmacHelper(c),l.SHA1)),u.exports;var e,t,r,i,o,a,c,l}(),d||(d=1,y.exports=(m=(h=n()).lib.Base,v=h.enc.Utf8,void(h.algo.HMAC=m.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=v.parse(t));var r=e.blockSize,i=4*r;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var n=this._oKey=t.clone(),o=this._iKey=t.clone(),a=n.words,s=o.words,c=0;c<r;c++)a[c]^=1549556828,s[c]^=909522486;n.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,r=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(r))}})))),y.exports,r=(t=e).lib,i=r.Base,o=r.WordArray,a=t.algo,c=a.MD5,p=a.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:c,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r,i=this.cfg,n=i.hasher.create(),a=o.create(),s=a.words,c=i.keySize,l=i.iterations;s.length<c;){r&&n.update(r),r=n.update(e).finalize(t),n.reset();for(var u=1;u<l;u++)r=n.finalize(r),n.reset();a.concat(r)}return a.sigBytes=4*c,a}}),t.EvpKDF=function(e,t,r){return p.create(r).compute(e,t)},e.EvpKDF)),l.exports;var e,t,r,i,o,a,c,p,h,m,v}function v(){return p||(p=1,c.exports=(e=n(),m(),void(e.lib.Cipher||function(t){var r=e,i=r.lib,n=i.Base,o=i.WordArray,a=i.BufferedBlockAlgorithm,s=r.enc;s.Utf8;var c=s.Base64,l=r.algo.EvpKDF,u=i.Cipher=a.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?g:v}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()});i.StreamCipher=u.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var d=r.mode={},f=i.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),p=d.CBC=function(){var e=f.extend();function t(e,t,r){var i,n=this._iv;n?(i=n,this._iv=undefined):i=this._prevBlock;for(var o=0;o<r;o++)e[t+o]^=i[o]}return e.Encryptor=e.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize;t.call(this,e,r,n),i.encryptBlock(e,r),this._prevBlock=e.slice(r,r+n)}}),e.Decryptor=e.extend({processBlock:function(e,r){var i=this._cipher,n=i.blockSize,o=e.slice(r,r+n);i.decryptBlock(e,r),t.call(this,e,r,n),this._prevBlock=o}}),e}(),h=(r.pad={}).Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,a=[],s=0;s<i;s+=4)a.push(n);var c=o.create(a,i);e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}};i.BlockCipher=u.extend({cfg:u.cfg.extend({mode:p,padding:h}),reset:function(){var e;u.reset.call(this);var t=this.cfg,r=t.iv,i=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,r&&r.words):(this._mode=e.call(i,this,r&&r.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4});var y=i.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),m=(r.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;return(r?o.create([1398893684,1701076831]).concat(r).concat(t):t).toString(c)},parse:function(e){var t,r=c.parse(e),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(t=o.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),y.create({ciphertext:r,salt:t})}},v=i.SerializableCipher=n.extend({cfg:n.extend({format:m}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),o=n.finalize(t),a=n.cfg;return y.create({ciphertext:o,key:r,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){return i=this.cfg.extend(i),t=this._parse(t,i.format),e.createDecryptor(r,i).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),_=(r.kdf={}).OpenSSL={execute:function(e,t,r,i,n){if(i||(i=o.random(8)),n)a=l.create({keySize:t+r,hasher:n}).compute(e,i);else var a=l.create({keySize:t+r}).compute(e,i);var s=o.create(a.words.slice(t),4*r);return a.sigBytes=4*t,y.create({key:a,iv:s,salt:i})}},g=i.PasswordBasedCipher=v.extend({cfg:v.cfg.extend({kdf:_}),encrypt:function(e,t,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,e.keySize,e.ivSize,i.salt,i.hasher);i.iv=n.iv;var o=v.encrypt.call(this,e,t,n.key,i);return o.mixIn(n),o},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt,i.hasher);return i.iv=n.iv,v.decrypt.call(this,e,t,n.key,i)}})}()))),c.exports;var e}var _,g={exports:{}},k={exports:{}};function b(){return _||(_=1,k.exports=(r=n(),t=(e=r).lib.WordArray,e.enc.Base64={stringify:function(e){var t=e.words,r=e.sigBytes,i=this._map;e.clamp();for(var n=[],o=0;o<r;o+=3)for(var a=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,s=0;s<4&&o+.75*s<r;s++)n.push(i.charAt(a>>>6*(3-s)&63));var c=i.charAt(64);if(c)for(;n.length%4;)n.push(c);return n.join("")},parse:function(e){var r=e.length,i=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<i.length;o++)n[i.charCodeAt(o)]=o}var a=i.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(r=s)}return function(e,r,i){for(var n=[],o=0,a=0;a<r;a++)if(a%4){var s=i[e.charCodeAt(a-1)]<<a%4*2|i[e.charCodeAt(a)]>>>6-a%4*2;n[o>>>2]|=s<<24-o%4*8,o++}return t.create(n,o)}(e,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},r.enc.Base64)),k.exports;var e,t,r}var x,E,B,w,C={exports:{}};var S,A=function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}({exports:{}}.exports=function(e){return e}(n(),(o||(o=1,a.exports=(S=n(),function(){if("function"==typeof ArrayBuffer){var e=S.lib.WordArray,t=e.init,r=e.init=function(e){if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),(e instanceof Int8Array||typeof Uint8ClampedArray<"u"&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var r=e.byteLength,i=[],n=0;n<r;n++)i[n>>>2]|=e[n]<<24-n%4*8;t.call(this,i,r)}else t.apply(this,arguments)};r.prototype=e}}(),S.lib.WordArray)),a.exports),h||(h=1,w=n(),v(),w.mode.ECB=((B=w.lib.BlockCipherMode.extend()).Encryptor=B.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),B.Decryptor=B.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),B),w.mode.ECB),function(){return E?g.exports:(E=1,g.exports=(e=n(),b(),function(){return x||(x=1,C.exports=(e=n(),function(t){var r=e,i=r.lib,n=i.WordArray,o=i.Hasher,a=r.algo,s=[];!function(){for(var e=0;e<64;e++)s[e]=4294967296*t.abs(t.sin(e+1))|0}();var c=a.MD5=o.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var r=0;r<16;r++){var i=t+r,n=e[i];e[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,a=e[t+0],c=e[t+1],p=e[t+2],h=e[t+3],y=e[t+4],m=e[t+5],v=e[t+6],_=e[t+7],g=e[t+8],k=e[t+9],b=e[t+10],x=e[t+11],E=e[t+12],B=e[t+13],w=e[t+14],C=e[t+15],S=o[0],A=o[1],D=o[2],M=o[3];S=l(S,A,D,M,a,7,s[0]),M=l(M,S,A,D,c,12,s[1]),D=l(D,M,S,A,p,17,s[2]),A=l(A,D,M,S,h,22,s[3]),S=l(S,A,D,M,y,7,s[4]),M=l(M,S,A,D,m,12,s[5]),D=l(D,M,S,A,v,17,s[6]),A=l(A,D,M,S,_,22,s[7]),S=l(S,A,D,M,g,7,s[8]),M=l(M,S,A,D,k,12,s[9]),D=l(D,M,S,A,b,17,s[10]),A=l(A,D,M,S,x,22,s[11]),S=l(S,A,D,M,E,7,s[12]),M=l(M,S,A,D,B,12,s[13]),D=l(D,M,S,A,w,17,s[14]),S=u(S,A=l(A,D,M,S,C,22,s[15]),D,M,c,5,s[16]),M=u(M,S,A,D,v,9,s[17]),D=u(D,M,S,A,x,14,s[18]),A=u(A,D,M,S,a,20,s[19]),S=u(S,A,D,M,m,5,s[20]),M=u(M,S,A,D,b,9,s[21]),D=u(D,M,S,A,C,14,s[22]),A=u(A,D,M,S,y,20,s[23]),S=u(S,A,D,M,k,5,s[24]),M=u(M,S,A,D,w,9,s[25]),D=u(D,M,S,A,h,14,s[26]),A=u(A,D,M,S,g,20,s[27]),S=u(S,A,D,M,B,5,s[28]),M=u(M,S,A,D,p,9,s[29]),D=u(D,M,S,A,_,14,s[30]),S=d(S,A=u(A,D,M,S,E,20,s[31]),D,M,m,4,s[32]),M=d(M,S,A,D,g,11,s[33]),D=d(D,M,S,A,x,16,s[34]),A=d(A,D,M,S,w,23,s[35]),S=d(S,A,D,M,c,4,s[36]),M=d(M,S,A,D,y,11,s[37]),D=d(D,M,S,A,_,16,s[38]),A=d(A,D,M,S,b,23,s[39]),S=d(S,A,D,M,B,4,s[40]),M=d(M,S,A,D,a,11,s[41]),D=d(D,M,S,A,h,16,s[42]),A=d(A,D,M,S,v,23,s[43]),S=d(S,A,D,M,k,4,s[44]),M=d(M,S,A,D,E,11,s[45]),D=d(D,M,S,A,C,16,s[46]),S=f(S,A=d(A,D,M,S,p,23,s[47]),D,M,a,6,s[48]),M=f(M,S,A,D,_,10,s[49]),D=f(D,M,S,A,w,15,s[50]),A=f(A,D,M,S,m,21,s[51]),S=f(S,A,D,M,E,6,s[52]),M=f(M,S,A,D,h,10,s[53]),D=f(D,M,S,A,b,15,s[54]),A=f(A,D,M,S,c,21,s[55]),S=f(S,A,D,M,g,6,s[56]),M=f(M,S,A,D,C,10,s[57]),D=f(D,M,S,A,v,15,s[58]),A=f(A,D,M,S,B,21,s[59]),S=f(S,A,D,M,y,6,s[60]),M=f(M,S,A,D,x,10,s[61]),D=f(D,M,S,A,p,15,s[62]),A=f(A,D,M,S,k,21,s[63]),o[0]=o[0]+S|0,o[1]=o[1]+A|0,o[2]=o[2]+D|0,o[3]=o[3]+M|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32;var o=t.floor(i/4294967296),a=i;r[15+(n+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(n+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e.sigBytes=4*(r.length+1),this._process();for(var s=this._hash,c=s.words,l=0;l<4;l++){var u=c[l];c[l]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return s},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function l(e,t,r,i,n,o,a){var s=e+(t&r|~t&i)+n+a;return(s<<o|s>>>32-o)+t}function u(e,t,r,i,n,o,a){var s=e+(t&i|r&~i)+n+a;return(s<<o|s>>>32-o)+t}function d(e,t,r,i,n,o,a){var s=e+(t^r^i)+n+a;return(s<<o|s>>>32-o)+t}function f(e,t,r,i,n,o,a){var s=e+(r^(t|~i))+n+a;return(s<<o|s>>>32-o)+t}r.MD5=o._createHelper(c),r.HmacMD5=o._createHmacHelper(c)}(Math),e.MD5)),C.exports;var e}(),m(),v(),function(){var t=e,r=t.lib.BlockCipher,i=t.algo,n=[],o=[],a=[],s=[],c=[],l=[],u=[],d=[],f=[],p=[];!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var r=0,i=0;for(t=0;t<256;t++){var h=i^i<<1^i<<2^i<<3^i<<4;h=h>>>8^255&h^99,n[r]=h,o[h]=r;var y=e[r],m=e[y],v=e[m],_=257*e[h]^16843008*h;a[r]=_<<24|_>>>8,s[r]=_<<16|_>>>16,c[r]=_<<8|_>>>24,l[r]=_,_=16843009*v^65537*m^257*y^16843008*r,u[h]=_<<24|_>>>8,d[h]=_<<16|_>>>16,f[h]=_<<8|_>>>24,p[h]=_,r?(r=y^e[e[e[v^y]]],i^=e[e[i]]):r=i=1}}();var h=[0,1,2,4,8,16,32,64,128,27,54],y=i.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,r=e.sigBytes/4,i=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],a=0;a<i;a++)a<r?o[a]=t[a]:(l=o[a-1],a%r?r>6&&a%r==4&&(l=n[l>>>24]<<24|n[l>>>16&255]<<16|n[l>>>8&255]<<8|n[255&l]):(l=n[(l=l<<8|l>>>24)>>>24]<<24|n[l>>>16&255]<<16|n[l>>>8&255]<<8|n[255&l],l^=h[a/r|0]<<24),o[a]=o[a-r]^l);for(var s=this._invKeySchedule=[],c=0;c<i;c++){if(a=i-c,c%4)var l=o[a];else l=o[a-4];s[c]=c<4||a<=4?l:u[n[l>>>24]]^d[n[l>>>16&255]]^f[n[l>>>8&255]]^p[n[255&l]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,a,s,c,l,n)},decryptBlock:function(e,t){var r=e[t+1];e[t+1]=e[t+3],e[t+3]=r,this._doCryptBlock(e,t,this._invKeySchedule,u,d,f,p,o),r=e[t+1],e[t+1]=e[t+3],e[t+3]=r},_doCryptBlock:function(e,t,r,i,n,o,a,s){for(var c=this._nRounds,l=e[t]^r[0],u=e[t+1]^r[1],d=e[t+2]^r[2],f=e[t+3]^r[3],p=4,h=1;h<c;h++){var y=i[l>>>24]^n[u>>>16&255]^o[d>>>8&255]^a[255&f]^r[p++],m=i[u>>>24]^n[d>>>16&255]^o[f>>>8&255]^a[255&l]^r[p++],v=i[d>>>24]^n[f>>>16&255]^o[l>>>8&255]^a[255&u]^r[p++],_=i[f>>>24]^n[l>>>16&255]^o[u>>>8&255]^a[255&d]^r[p++];l=y,u=m,d=v,f=_}y=(s[l>>>24]<<24|s[u>>>16&255]<<16|s[d>>>8&255]<<8|s[255&f])^r[p++],m=(s[u>>>24]<<24|s[d>>>16&255]<<16|s[f>>>8&255]<<8|s[255&l])^r[p++],v=(s[d>>>24]<<24|s[f>>>16&255]<<16|s[l>>>8&255]<<8|s[255&u])^r[p++],_=(s[f>>>24]<<24|s[l>>>16&255]<<16|s[u>>>8&255]<<8|s[255&d])^r[p++],e[t]=y,e[t+1]=m,e[t+2]=v,e[t+3]=_},keySize:8});t.AES=r._createHelper(y)}(),e.AES));var e}())),D={words:[1698181731,1801809512,946104675,1751477816],sigBytes:16};function M(e){try{return e=A.AES.decrypt({ciphertext:A.lib.WordArray.create(e)},D,{mode:A.mode.ECB,padding:A.pad.Pkcs7}),JSON.parse(A.enc.Utf8.stringify(e))}catch(e){return null}}var O=typeof $task<"u",R=$request.url,L=$response.body,z=$response.headers;!(z["content-type"]||z["Content-Type"]||"").includes("application/json")&&!L&&$done({}),L=M(O?$response.bodyBytes:L);var P=()=>typeof Egern<"u"?"Egern":typeof $environment<"u"&&$environment["surge-version"]?"Surge":typeof $environment<"u"&&$environment["stash-version"]?"Stash":typeof module<"u"&&module.exports?"Node.js":typeof $task<"u"?"Quantumult X":typeof $loon<"u"?"Loon":typeof $rocket<"u"?"Shadowrocket":void 0,N=2e12,T=["PAGE_RECOMMEND_DAILY_RECOMMEND","PAGE_RECOMMEND_SPECIAL_CLOUD_VILLAGE_PLAYLIST","PAGE_RECOMMEND_SHORTCUT","PAGE_RECOMMEND_RADAR","PAGE_RECOMMEND_RANK"];function I(){let e=P();if("Surge"===e){if(typeof $argument<"u"&&""!==$argument)try{if(U=JSON.parse($argument),U?.homekard){let e=Number(U.homekard);isNaN(e)||(T=T.slice(0,e))}}catch{}}else if("Loon"===e){let e=Number($persistentStore.read("网易云音乐首页卡片数量"));isNaN(e)||(T=T.slice(0,e))}}var U,$={PAGE_RECOMMEND_SPECIAL_CLOUD_VILLAGE_PLAYLIST:0,PAGE_RECOMMEND_DAILY_RECOMMEND:1,PAGE_RECOMMEND_SHORTCUT:2,PAGE_RECOMMEND_RADAR:3,PAGE_RECOMMEND_RANK:4};function H(e){e.musicPackage&&(e.musicPackage&&(e.musicPackage.expireTime=N,e.musicPackage.vipLevel=7),e.associator&&(e.associator.expireTime=N,e.associator.vipLevel=7),e.voiceBookVip&&(e.voiceBookVip.expireTime=N,e.voiceBookVip.vipLevel=7),e.redplus={vipCode:300,expireTime:N,iconUrl:null,dynamicIconUrl:null,vipLevel:7,isSignDeduct:!1,isSignIap:!1,isSignIapDeduct:!1,isSign:!1},e.redVipLevel&&(e.redVipLevel=7))}if(null!==L)try{if(/api\/batch/.test(R))L["/api/comment/feed/inserted/resources"]?.data&&(L["/api/comment/feed/inserted/resources"].data={},L["/api/comment/feed/inserted/resources"].trp?.rules&&(L["/api/comment/feed/inserted/resources"].trp.rules=[])),L["/api/comment/tips/v2/get"]?.data&&(L["/api/comment/tips/v2/get"].data={count:0,offset:0,records:[]}),L["/api/event/rcmd/topic/list"]?.data?.topicList&&(L["/api/event/rcmd/topic/list"].data.topicList=[]),L["/api/platform/song/bff/grading/song/order/entrance"]?.data?.songOrderEntrance&&(L["/api/platform/song/bff/grading/song/order/entrance"].data.songOrderEntrance={}),L["/api/comment/tips/v2/get"]?.data&&(L["/api/comment/tips/v2/get"].data={}),L["/api/social/event/bff/ad/resources"]?.data&&(L["/api/social/event/bff/ad/resources"].data={}),L["/api/ad/get"]?.data&&(L["/api/ad/get"].data={code:200,ads:{}}),L["/api/v2/resource/comments"]?.data?.comments&&L["/api/v2/resource/comments"].data.comments.forEach((e=>{!1===e.user?.followed&&(e.user.followed=!0),e.user.vipRights=null,e.user.avatarDetail=null,e.userBizLevels=null,e.pendantData=null,e.tag.extDatas=[],e.tag.contentPicDatas=null})),L["/api/music-vip-membership/client/vip/info"]?.data&&H(L["/api/music-vip-membership/client/vip/info"].data);else if(/api\/v\d\/resource\/comment\/floor\/get/.test(R))L.data?.ownerComment&&(L.data.ownerComment.user.vipRights=null,L.data.ownerComment.user.avatarDetail={},L.data.ownerComment.pendantData=null),L.data?.comments&&L.data.comments.forEach((e=>{!1===e.user?.followed&&(e.user.followed=!0),e.user.vipRights=null,e.user.avatarDetail=null,e.userBizLevels=null,e.pendantData=null,e.tag.extDatas=[],e.tag.contentPicDatas=null}));else if(/music-vip-membership\/client\/vip\/info/.test(R))H(L.data);else if(/vipauth\/app\/auth\/recycle/.test(R))L.data&&(L.data=[{canUse:!0,resourceType:23,resourceId:0,userSrc:3},{canUse:!0,resourceType:22,resourceId:0,userSrc:3},{canUse:!0,resourceType:10,resourceId:-6,userSrc:4}]);else if(/vipnewcenter\/app\/resource\/newaccountpage/.test(R))L.data&&(L.data.mainTitle.vipCurrLevel=7,L.data.mainTitle.imgUrl="",L.data.mainTitle.jumpUrl="",L.data.mainTitle.reachMaxLevel=!0,L.data.subTitle.carousels=[],L.data.buttonTitle={});else if(/link\/home\/framework\/tab/.test(R)){let e=[],t=!1,r=P();if("Surge"===r)if(typeof $argument<"u"&&""!==$argument)try{U=JSON.parse($argument);for(let t in U)if(U[t])switch(t){case"MY":0==U[t]&&e.push("漫游");break;case"DT":0==U[t]&&e.push("动态");break;case"TJ":0==U[t]&&e.push("推荐");break;case"FX":0==U[t]&&e.push("发现")}}catch{t=!0}else t=!0;else"Loon"===r?e=["TAB_漫游","TAB_动态","TAB_推荐","TAB_发现"].filter((e=>"隐藏"===$persistentStore.read(e))).map((e=>e.replace("TAB_",""))):t=!0;t&&(e=["漫游"]),L.data?.commonResourceList&&(L.data.commonResourceList=L.data.commonResourceList.filter((t=>!e.includes(t.title))),L.data.commonResourceList.forEach((e=>{"发现"===e.title&&(e.subCommonResourceList=e.subCommonResourceList.filter((e=>!["直播"].includes(e.title))))})))}else if(/song\/play\/more\/list\/v\d/.test(R)){if(L.data?.bottomItem?.itemNodeList){let e=L.data.bottomItem.itemNodeList[0],t=e.find((e=>"effect"===e.type)),r=e.indexOf(t);-1!==r&&(e.splice(r,1),e.unshift(t))}}else if(/homepage\/block\/page/.test(R)){if(L.data?.blocks)for(let e=0;e<L.data.blocks.length;e++)if("BANNER"===L.data.blocks[e].showType){L.data.blocks[e].extInfo.banners=L.data.blocks[e].extInfo.banners.filter((e=>!["活动","广告"].includes(e.typeTitle)));break}}else if(/link\/page\/discovery\/resource\/show/.test(R)){if(L.data?.blockCodeOrderList)try{L.data.blockCodeOrderList=JSON.stringify(JSON.parse(L.data.blockCodeOrderList).filter((e=>!["PAGE_DISCOVERY_BANNER"].includes(e))))}catch{}L.data?.blocks&&(L.data.blocks=L.data.blocks.filter((e=>!["PAGE_DISCOVERY_BANNER"].includes(e.bizCode))))}else if(/link\/page\/rcmd\/resource\/show/.test(R)){if(I(),L.data?.blocks){if(L.data.blocks=L.data.blocks.filter((e=>T.includes(e.bizCode))),L.data.blocks.length>0)for(let e=0;e<L.data.blocks.length;e++)if("PAGE_RECOMMEND_GREETING"===L.data.blocks[e].bizCode){Object.keys(L.data.blocks[e].dslData).forEach((t=>{L.data.blocks[e].dslData[t].commonResourceList&&(L.data.blocks[e].dslData[t].commonResourceList=L.data.blocks[e].dslData[t].commonResourceList.forEach((e=>{(e.summary||e.extraMap||e.title)&&(e.summary&&(e.summary=""),e.extraMap&&(e.extraMap={}),e.trp_id&&(e.trp_id=""),e.log&&(e.log={}),e.icon&&(e.icon=""),e.actionUrl&&(e.actionUrl=""),e.s_ctrp&&(e.s_ctrp=""),e.resourceType&&(e.resourceType=""))})))}));break}L.data.blocks.sort(((e,t)=>$[e.bizCode]-$[t.bizCode]))}if(L.data?.blockCodeOrderList)try{L.data.blockCodeOrderList=JSON.stringify(JSON.parse(L.data.blockCodeOrderList).filter((e=>T.includes(e))))}catch{}}else if(/link\/page\/rcmd\/block\/resource\/multi\/refresh/.test(R)){if(L.data&&(I(),L.data=L.data.filter((e=>T.includes(e.blockCode))),L.data?.length>0))for(let e=0;e<L.data.length;e++)if("PAGE_RECOMMEND_GREETING"===L.data[e].blockCode){Object.keys(L.data[e].block.dslData).forEach((t=>{L.data[e].block.dslData[t].commonResourceList&&(L.data[e].block.dslData[t].commonResourceList=L.data[e].block.dslData[t].commonResourceList.forEach((e=>{(e.summary||e.extraMap||e.title)&&(e.summary&&(e.summary=""),e.extraMap&&(e.extraMap={}),e.trp_id&&(e.trp_id=""),e.log&&(e.log={}),e.icon&&(e.icon=""),e.actionUrl&&(e.actionUrl=""),e.s_ctrp&&(e.s_ctrp=""),e.resourceType&&(e.resourceType=""))})))}));break}}else/link\/position\/show\/resource/.test(R)?L.data?.crossPlatformResource?.positionCode&&"MyPageBar"===L.data.crossPlatformResource.positionCode&&(L.data.crossPlatformResource={}):/user\/follow\/users\/mixed\/get/.test(R)?L.data?.records&&L.data.records.forEach((e=>{null===e.mutualFollowDay&&(e.showContent={message:"💢他/她,未关注你",time:1e12,active:!0,boxContent:{}})})):/api\/ad\/get/.test(R)?L={code:200,ads:{}}:$done({});let e=function(e){e=A.AES.encrypt(JSON.stringify(e),D,{mode:A.mode.ECB,padding:A.pad.Pkcs7}).ciphertext;let t=new Uint8Array(e.sigBytes);for(let r=0;r<e.sigBytes;r++)t[r]=e.words[r>>>2]>>>24-r%4*8&255;return t}(L);O?$done({bodyBytes:e.buffer.slice(e.byteOffset,e.byteLength+e.byteOffset)}):$done({body:e})}catch(S){}finally{$done({})}else $done({})})();