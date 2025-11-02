(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ko="169",zi={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ch=0,gA=1,hh=2,Pl=1,kl=2,bn=3,jn=0,Ne=1,dn=2,Jn=0,Oi=1,mA=2,IA=3,EA=4,uh=5,Ai=100,dh=101,fh=102,ph=103,gh=104,mh=200,Ih=201,Eh=202,Ch=203,Ga=204,za=205,xh=206,yh=207,_h=208,vh=209,Bh=210,Sh=211,bh=212,wh=213,Mh=214,Oa=0,Ha=1,Ya=2,Wi=3,Va=4,qa=5,Wa=6,Ja=7,Gl=0,Qh=1,Th=2,Xn=0,Dh=1,Rh=2,Lh=3,Nh=4,Uh=5,Fh=6,Ph=7,zl=300,Ji=301,Xi=302,Xa=303,Ka=304,br=306,ja=1e3,hi=1001,Za=1002,Ie=1003,kh=1004,ws=1005,on=1006,Wr=1007,ui=1008,Gh=1008,Oe=1009,Ol=1010,Hl=1011,Is=1012,Go=1013,Ge=1014,wn=1015,ys=1016,zo=1017,Oo=1018,Ki=1020,Yl=35902,Vl=1021,ql=1022,_e=1023,Wl=1024,Jl=1025,Hi=1026,ji=1027,Xl=1028,Ho=1029,Kl=1030,wr=1031,Tn=1033,ir=33776,sr=33777,rr=33778,ar=33779,$a=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,ao=37808,oo=37809,Ao=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,go=37817,mo=37818,Io=37819,Eo=37820,Co=37821,or=36492,xo=36494,yo=36495,jl=36283,_o=36284,vo=36285,Bo=36286,zh=3200,Oh=3201,Zl=0,Hh=1,Wn="",Ze="srgb",Zn="srgb-linear",Yo="display-p3",Mr="display-p3-linear",fr="linear",ne="srgb",pr="rec709",gr="p3",Ci=7680,CA=519,Yh=512,Vh=513,qh=514,$l=515,Wh=516,Jh=517,Xh=518,Kh=519,xA=35044,jh=35048,mr="300 es",Mn=2e3,Ir=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,So=180/Math.PI;function _s(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Zh(i,t){return(i%t+t)%t}function Jr(i,t,e){return(1-e)*i+e*t}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $h={DEG2RAD:Ar};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,s,r,a,o,l,A){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,A)}set(t,e,n,s,r,a,o,l,A){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=a,c[8]=A,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],A=n[1],c=n[4],h=n[7],u=n[2],p=n[5],g=n[8],m=s[0],f=s[3],d=s[6],_=s[1],E=s[4],v=s[7],Q=s[2],b=s[5],S=s[8];return r[0]=a*m+o*_+l*Q,r[3]=a*f+o*E+l*b,r[6]=a*d+o*v+l*S,r[1]=A*m+c*_+h*Q,r[4]=A*f+c*E+h*b,r[7]=A*d+c*v+h*S,r[2]=u*m+p*_+g*Q,r[5]=u*f+p*E+g*b,r[8]=u*d+p*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8];return e*a*c-e*o*A-n*r*c+n*o*l+s*r*A-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8],h=c*a-o*A,u=o*l-c*r,p=A*r-a*l,g=e*h+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=h*m,t[1]=(s*A-c*n)*m,t[2]=(o*n-s*a)*m,t[3]=u*m,t[4]=(c*e-s*l)*m,t[5]=(s*r-o*e)*m,t[6]=p*m,t[7]=(n*l-A*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),A=Math.sin(r);return this.set(n*l,n*A,-n*(l*a+A*o)+a+t,-s*A,s*l,-s*(-A*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Xr.makeScale(t,e)),this}rotate(t){return this.premultiply(Xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xr=new Nt;function tc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tu(){const i=Er("canvas");return i.style.display="block",i}const yA={};function lr(i){i in yA||(yA[i]=!0,console.warn(i))}function eu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function nu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function iu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _A=new Nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vA=new Nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Zn]:{transfer:fr,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ze]:{transfer:ne,primaries:pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Mr]:{transfer:fr,primaries:gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(vA),fromReference:i=>i.applyMatrix3(_A)},[Yo]:{transfer:ne,primaries:gr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(vA),fromReference:i=>i.applyMatrix3(_A).convertLinearToSRGB()}},su=new Set([Zn,Mr]),Kt={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!su.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ns[t].toReference,s=ns[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ns[i].primaries},getTransfer:function(i){return i===Wn?fr:ns[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ns[t].luminanceCoefficients)}};function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xi;class ru{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=Er("canvas")),xi.width=t.width,xi.height=t.height;const n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Er("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yi(e[n]/255)*255):e[n]=Yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let au=0;class ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(jr(s[a].image)):r.push(jr(s[a]))}else r=jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class Me extends Ii{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=hi,s=hi,r=on,a=ui,o=_e,l=Oe,A=Me.DEFAULT_ANISOTROPY,c=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=_s(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=A,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=zl;Me.DEFAULT_ANISOTROPY=1;class Gt{constructor(t=0,e=0,n=0,s=1){Gt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,A=l[0],c=l[4],h=l[8],u=l[1],p=l[5],g=l[9],m=l[2],f=l[6],d=l[10];if(Math.abs(c-u)<.01&&Math.abs(h-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(c+u)<.1&&Math.abs(h+m)<.1&&Math.abs(g+f)<.1&&Math.abs(A+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(A+1)/2,v=(p+1)/2,Q=(d+1)/2,b=(c+u)/4,S=(h+m)/4,T=(g+f)/4;return E>v&&E>Q?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=S/n):v>Q?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=T/s):Q<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(Q),n=S/r,s=T/r),this.set(n,s,r,e),this}let _=Math.sqrt((f-g)*(f-g)+(h-m)*(h-m)+(u-c)*(u-c));return Math.abs(_)<.001&&(_=1),this.x=(f-g)/_,this.y=(h-m)/_,this.z=(u-c)/_,this.w=Math.acos((A+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Au extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Gt(0,0,t,e),this.scissorTest=!1,this.viewport=new Gt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Au{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class pn extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nc extends gn{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new pn(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class ic extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ae{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],A=n[s+1],c=n[s+2],h=n[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],m=r[a+3];if(o===0){t[e+0]=l,t[e+1]=A,t[e+2]=c,t[e+3]=h;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=m;return}if(h!==m||l!==u||A!==p||c!==g){let f=1-o;const d=l*u+A*p+c*g+h*m,_=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const Q=Math.sqrt(E),b=Math.atan2(Q,d*_);f=Math.sin(f*b)/Q,o=Math.sin(o*b)/Q}const v=o*_;if(l=l*f+u*v,A=A*f+p*v,c=c*f+g*v,h=h*f+m*v,f===1-o){const Q=1/Math.sqrt(l*l+A*A+c*c+h*h);l*=Q,A*=Q,c*=Q,h*=Q}}t[e]=l,t[e+1]=A,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],A=n[s+2],c=n[s+3],h=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+c*h+l*p-A*u,t[e+1]=l*g+c*u+A*h-o*p,t[e+2]=A*g+c*p+o*u-l*h,t[e+3]=c*g-o*h-l*u-A*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,A=o(n/2),c=o(s/2),h=o(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*h+A*p*g,this._y=A*p*h-u*c*g,this._z=A*c*g+u*p*h,this._w=A*c*h-u*p*g;break;case"YXZ":this._x=u*c*h+A*p*g,this._y=A*p*h-u*c*g,this._z=A*c*g-u*p*h,this._w=A*c*h+u*p*g;break;case"ZXY":this._x=u*c*h-A*p*g,this._y=A*p*h+u*c*g,this._z=A*c*g+u*p*h,this._w=A*c*h-u*p*g;break;case"ZYX":this._x=u*c*h-A*p*g,this._y=A*p*h+u*c*g,this._z=A*c*g-u*p*h,this._w=A*c*h+u*p*g;break;case"YZX":this._x=u*c*h+A*p*g,this._y=A*p*h+u*c*g,this._z=A*c*g-u*p*h,this._w=A*c*h-u*p*g;break;case"XZY":this._x=u*c*h-A*p*g,this._y=A*p*h-u*c*g,this._z=A*c*g+u*p*h,this._w=A*c*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],A=e[2],c=e[6],h=e[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-A)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+A)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-A)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+A)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,A=e._z,c=e._w;return this._x=n*c+a*o+s*A-r*l,this._y=s*c+a*l+r*o-n*A,this._z=r*c+a*A+n*l-s*o,this._w=a*c-n*o-s*l-r*A,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const A=Math.sqrt(l),c=Math.atan2(A,o),h=Math.sin((1-e)*c)/A,u=Math.sin(e*c)/A;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(BA.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(BA.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,A=2*(a*s-o*n),c=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*A+a*h-o*c,this.y=n+l*c+o*A-r*h,this.z=s+l*h+r*c-a*A,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new w,BA=new ae;class Un{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ms.copy(n.boundingBox)),Ms.applyMatrix4(t.matrixWorld),this.union(Ms)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Qs.subVectors(this.max,is),yi.subVectors(t.a,is),_i.subVectors(t.b,is),vi.subVectors(t.c,is),Pn.subVectors(_i,yi),kn.subVectors(vi,_i),ti.subVectors(yi,vi);let e=[0,-Pn.z,Pn.y,0,-kn.z,kn.y,0,-ti.z,ti.y,Pn.z,0,-Pn.x,kn.z,0,-kn.x,ti.z,0,-ti.x,-Pn.y,Pn.x,0,-kn.y,kn.x,0,-ti.y,ti.x,0];return!$r(e,yi,_i,vi,Qs)||(e=[1,0,0,0,1,0,0,0,1],!$r(e,yi,_i,vi,Qs))?!1:(Ts.crossVectors(Pn,kn),e=[Ts.x,Ts.y,Ts.z],$r(e,yi,_i,vi,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new w,new w,new w,new w,new w,new w,new w,new w],en=new w,Ms=new Un,yi=new w,_i=new w,vi=new w,Pn=new w,kn=new w,ti=new w,is=new w,Qs=new w,Ts=new w,ei=new w;function $r(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);const o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),A=e.dot(ei),c=n.dot(ei);if(Math.max(-Math.max(l,A,c),Math.min(l,A,c))>o)return!1}return!0}const lu=new Un,ss=new w,ta=new w;class Qr{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(ta)),this.expandByPoint(ss.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new w,ea=new w,Ds=new w,Gn=new w,na=new w,Rs=new w,ia=new w;class Tr{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ea);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ds),o=Gn.dot(this.direction),l=-Gn.dot(Ds),A=Gn.lengthSq(),c=Math.abs(1-a*a);let h,u,p,g;if(c>0)if(h=a*l-o,u=a*o-l,g=r*c,h>=0)if(u>=-g)if(u<=g){const m=1/c;h*=m,u*=m,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+A}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+A):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+A):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+A);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+A;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ea).addScaledVector(Ds,u),p}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const A=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return A>=0?(n=(t.min.x-u.x)*A,s=(t.max.x-u.x)*A):(n=(t.max.x-u.x)*A,s=(t.min.x-u.x)*A),c>=0?(r=(t.min.y-u.y)*c,a=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,a=(t.min.y-u.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),Rs.subVectors(n,t),ia.crossVectors(na,Rs);let a=this.direction.dot(ia),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(Rs.crossVectors(Gn,Rs));if(l<0)return null;const A=o*this.direction.dot(na.cross(Gn));if(A<0||l+A>a)return null;const c=-o*Gn.dot(ia);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(t,e,n,s,r,a,o,l,A,c,h,u,p,g,m,f){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,A,c,h,u,p,g,m,f)}set(t,e,n,s,r,a,o,l,A,c,h,u,p,g,m,f){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=A,d[6]=c,d[10]=h,d[14]=u,d[3]=p,d[7]=g,d[11]=m,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),a=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),A=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const u=a*c,p=a*h,g=o*c,m=o*h;e[0]=l*c,e[4]=-l*h,e[8]=A,e[1]=p+g*A,e[5]=u-m*A,e[9]=-o*l,e[2]=m-u*A,e[6]=g+p*A,e[10]=a*l}else if(t.order==="YXZ"){const u=l*c,p=l*h,g=A*c,m=A*h;e[0]=u+m*o,e[4]=g*o-p,e[8]=a*A,e[1]=a*h,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=m+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*c,p=l*h,g=A*c,m=A*h;e[0]=u-m*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=m-u*o,e[2]=-a*A,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*c,p=a*h,g=o*c,m=o*h;e[0]=l*c,e[4]=g*A-p,e[8]=u*A+m,e[1]=l*h,e[5]=m*A+u,e[9]=p*A-g,e[2]=-A,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*A,g=o*l,m=o*A;e[0]=l*c,e[4]=m-u*h,e[8]=g*h+p,e[1]=h,e[5]=a*c,e[9]=-o*c,e[2]=-A*c,e[6]=p*h+g,e[10]=u-m*h}else if(t.order==="XZY"){const u=a*l,p=a*A,g=o*l,m=o*A;e[0]=l*c,e[4]=-h,e[8]=A*c,e[1]=u*h+m,e[5]=a*c,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*c,e[10]=m*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,hu)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),zn.crossVectors(n,We),zn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),zn.crossVectors(n,We)),zn.normalize(),Ls.crossVectors(We,zn),s[0]=zn.x,s[4]=Ls.x,s[8]=We.x,s[1]=zn.y,s[5]=Ls.y,s[9]=We.y,s[2]=zn.z,s[6]=Ls.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],A=n[12],c=n[1],h=n[5],u=n[9],p=n[13],g=n[2],m=n[6],f=n[10],d=n[14],_=n[3],E=n[7],v=n[11],Q=n[15],b=s[0],S=s[4],T=s[8],Y=s[12],I=s[1],x=s[5],N=s[9],P=s[13],z=s[2],J=s[6],U=s[10],K=s[14],O=s[3],nt=s[7],it=s[11],rt=s[15];return r[0]=a*b+o*I+l*z+A*O,r[4]=a*S+o*x+l*J+A*nt,r[8]=a*T+o*N+l*U+A*it,r[12]=a*Y+o*P+l*K+A*rt,r[1]=c*b+h*I+u*z+p*O,r[5]=c*S+h*x+u*J+p*nt,r[9]=c*T+h*N+u*U+p*it,r[13]=c*Y+h*P+u*K+p*rt,r[2]=g*b+m*I+f*z+d*O,r[6]=g*S+m*x+f*J+d*nt,r[10]=g*T+m*N+f*U+d*it,r[14]=g*Y+m*P+f*K+d*rt,r[3]=_*b+E*I+v*z+Q*O,r[7]=_*S+E*x+v*J+Q*nt,r[11]=_*T+E*N+v*U+Q*it,r[15]=_*Y+E*P+v*K+Q*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],A=t[13],c=t[2],h=t[6],u=t[10],p=t[14],g=t[3],m=t[7],f=t[11],d=t[15];return g*(+r*l*h-s*A*h-r*o*u+n*A*u+s*o*p-n*l*p)+m*(+e*l*p-e*A*u+r*a*u-s*a*p+s*A*c-r*l*c)+f*(+e*A*h-e*o*p-r*a*h+n*a*p+r*o*c-n*A*c)+d*(-s*o*c-e*l*h+e*o*u+s*a*h-n*a*u+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],A=t[7],c=t[8],h=t[9],u=t[10],p=t[11],g=t[12],m=t[13],f=t[14],d=t[15],_=h*f*A-m*u*A+m*l*p-o*f*p-h*l*d+o*u*d,E=g*u*A-c*f*A-g*l*p+a*f*p+c*l*d-a*u*d,v=c*m*A-g*h*A+g*o*p-a*m*p-c*o*d+a*h*d,Q=g*h*l-c*m*l-g*o*u+a*m*u+c*o*f-a*h*f,b=e*_+n*E+s*v+r*Q;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return t[0]=_*S,t[1]=(m*u*r-h*f*r-m*s*p+n*f*p+h*s*d-n*u*d)*S,t[2]=(o*f*r-m*l*r+m*s*A-n*f*A-o*s*d+n*l*d)*S,t[3]=(h*l*r-o*u*r-h*s*A+n*u*A+o*s*p-n*l*p)*S,t[4]=E*S,t[5]=(c*f*r-g*u*r+g*s*p-e*f*p-c*s*d+e*u*d)*S,t[6]=(g*l*r-a*f*r-g*s*A+e*f*A+a*s*d-e*l*d)*S,t[7]=(a*u*r-c*l*r+c*s*A-e*u*A-a*s*p+e*l*p)*S,t[8]=v*S,t[9]=(g*h*r-c*m*r-g*n*p+e*m*p+c*n*d-e*h*d)*S,t[10]=(a*m*r-g*o*r+g*n*A-e*m*A-a*n*d+e*o*d)*S,t[11]=(c*o*r-a*h*r-c*n*A+e*h*A+a*n*p-e*o*p)*S,t[12]=Q*S,t[13]=(c*m*s-g*h*s+g*n*u-e*m*u-c*n*f+e*h*f)*S,t[14]=(g*o*s-a*m*s-g*n*l+e*m*l+a*n*f-e*o*f)*S,t[15]=(a*h*s-c*o*s+c*n*l-e*h*l-a*n*u+e*o*u)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,A=r*a,c=r*o;return this.set(A*a+n,A*o-s*l,A*l+s*o,0,A*o+s*l,c*o+n,c*l-s*a,0,A*l-s*o,c*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,A=r+r,c=a+a,h=o+o,u=r*A,p=r*c,g=r*h,m=a*c,f=a*h,d=o*h,_=l*A,E=l*c,v=l*h,Q=n.x,b=n.y,S=n.z;return s[0]=(1-(m+d))*Q,s[1]=(p+v)*Q,s[2]=(g-E)*Q,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(u+d))*b,s[6]=(f+_)*b,s[7]=0,s[8]=(g+E)*S,s[9]=(f-_)*S,s[10]=(1-(u+m))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const a=Bi.set(s[4],s[5],s[6]).length(),o=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const A=1/r,c=1/a,h=1/o;return nn.elements[0]*=A,nn.elements[1]*=A,nn.elements[2]*=A,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Mn){const l=this.elements,A=2*r/(e-t),c=2*r/(n-s),h=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(o===Mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ir)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=A,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Mn){const l=this.elements,A=1/(e-t),c=1/(n-s),h=1/(a-r),u=(e+t)*A,p=(n+s)*c;let g,m;if(o===Mn)g=(a+r)*h,m=-2*h;else if(o===Ir)g=r*h,m=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*A,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bi=new w,nn=new Ht,cu=new w(0,0,0),hu=new w(1,1,1),zn=new w,Ls=new w,We=new w,SA=new Ht,bA=new ae;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],A=s[5],c=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,A),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,A)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,A)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,A));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,A),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,A),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return SA.makeRotationFromQuaternion(t),this.setFromRotationMatrix(SA,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bA.setFromEuler(this),this.setFromQuaternion(bA,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Vo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uu=0;const wA=new w,Si=new ae,_n=new Ht,Ns=new w,rs=new w,du=new w,fu=new ae,MA=new w(1,0,0),QA=new w(0,1,0),TA=new w(0,0,1),DA={type:"added"},pu={type:"removed"},bi={type:"childadded",child:null},sa={type:"childremoved",child:null};class le extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=le.DEFAULT_UP.clone();const t=new w,e=new mn,n=new ae,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Nt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(MA,t)}rotateY(t){return this.rotateOnAxis(QA,t)}rotateZ(t){return this.rotateOnAxis(TA,t)}translateOnAxis(t,e){return wA.copy(t).applyQuaternion(this.quaternion),this.position.add(wA.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(MA,t)}translateY(t){return this.translateOnAxis(QA,t)}translateZ(t){return this.translateOnAxis(TA,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ns.copy(t):Ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(rs,Ns,this.up):_n.lookAt(Ns,rs,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(_n),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(DA),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pu),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(DA),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let A=0,c=l.length;A<c;A++){const h=l[A];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,A=this.material.length;l<A;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),A=a(t.textures),c=a(t.images),h=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),A.length>0&&(n.textures=A),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const A in o){const c=o[A];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}le.DEFAULT_UP=new w(0,1,0);le.DEFAULT_MATRIX_AUTO_UPDATE=!0;le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new w,vn=new w,ra=new w,Bn=new w,wi=new w,Mi=new w,RA=new w,aa=new w,oa=new w,Aa=new w,la=new Gt,ca=new Gt,ha=new Gt;class An{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){sn.subVectors(s,e),vn.subVectors(n,e),ra.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(vn),l=sn.dot(ra),A=vn.dot(vn),c=vn.dot(ra),h=a*A-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(A*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(t,e,n,s){return sn.subVectors(n,e),vn.subVectors(t,e),sn.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),sn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return An.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Mi.subVectors(r,n),aa.subVectors(t,n);const l=wi.dot(aa),A=Mi.dot(aa);if(l<=0&&A<=0)return e.copy(n);oa.subVectors(t,s);const c=wi.dot(oa),h=Mi.dot(oa);if(c>=0&&h<=c)return e.copy(s);const u=l*h-c*A;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(wi,a);Aa.subVectors(t,r);const p=wi.dot(Aa),g=Mi.dot(Aa);if(g>=0&&p<=g)return e.copy(r);const m=p*A-l*g;if(m<=0&&A>=0&&g<=0)return o=A/(A-g),e.copy(n).addScaledVector(Mi,o);const f=c*g-p*h;if(f<=0&&h-c>=0&&p-g>=0)return RA.subVectors(r,s),o=(h-c)/(h-c+(p-g)),e.copy(s).addScaledVector(RA,o);const d=1/(f+m+u);return a=m*d,o=u*d,e.copy(n).addScaledVector(wi,a).addScaledVector(Mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=Zh(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ua(a,r,t+1/3),this.g=ua(a,r,t),this.b=ua(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yi(t.r),this.g=Yi(t.g),this.b=Yi(t.b),this}copyLinearToSRGB(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Kt.fromWorkingColorSpace(Be.copy(this),t),Math.round(Re(Be.r*255,0,255))*65536+Math.round(Re(Be.g*255,0,255))*256+Math.round(Re(Be.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,A;const c=(o+a)/2;if(o===a)l=0,A=0;else{const h=a-o;switch(A=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=A,t.l=c,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ze){Kt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Us);const n=Jr(On.h,Us.h,e),s=Jr(On.s,Us.s,e),r=Jr(On.l,Us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Tt;Tt.NAMES=sc;let gu=0;class $i extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Oi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=za,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CA,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==za&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==CA&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qo extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new w,Fs=new vt;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xA,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xA&&(t.usage=this.usage),t}}class rc extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let mu=0;const je=new Ht,da=new le,Qi=new w,Je=new Un,as=new Un,ge=new w;class He extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tc(t)?ac:rc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Je.min,as.min),Je.expandByPoint(ge),ge.addVectors(Je.max,as.max),Je.expandByPoint(ge)):(Je.expandByPoint(as.min),Je.expandByPoint(as.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let A=0,c=o.count;A<c;A++)ge.fromBufferAttribute(o,A),l&&(Qi.fromBufferAttribute(t,A),ge.add(Qi)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new w,l[T]=new w;const A=new w,c=new w,h=new w,u=new vt,p=new vt,g=new vt,m=new w,f=new w;function d(T,Y,I){A.fromBufferAttribute(n,T),c.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,I),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,I),c.sub(A),h.sub(A),p.sub(u),g.sub(u);const x=1/(p.x*g.y-g.x*p.y);isFinite(x)&&(m.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(x),f.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(x),o[T].add(m),o[Y].add(m),o[I].add(m),l[T].add(f),l[Y].add(f),l[I].add(f))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,Y=_.length;T<Y;++T){const I=_[T],x=I.start,N=I.count;for(let P=x,z=x+N;P<z;P+=3)d(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new w,v=new w,Q=new w,b=new w;function S(T){Q.fromBufferAttribute(s,T),b.copy(Q);const Y=o[T];E.copy(Y),E.sub(Q.multiplyScalar(Q.dot(Y))).normalize(),v.crossVectors(b,Y);const x=v.dot(l[T])<0?-1:1;a.setXYZW(T,E.x,E.y,E.z,x)}for(let T=0,Y=_.length;T<Y;++T){const I=_[T],x=I.start,N=I.count;for(let P=x,z=x+N;P<z;P+=3)S(t.getX(P+0)),S(t.getX(P+1)),S(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new w,r=new w,a=new w,o=new w,l=new w,A=new w,c=new w,h=new w;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),m=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,f),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),A.fromBufferAttribute(n,f),o.add(c),l.add(c),A.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(f,A.x,A.y,A.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const A=o.array,c=o.itemSize,h=o.normalized,u=new A.constructor(l.length*c);let p=0,g=0;for(let m=0,f=l.length;m<f;m++){o.isInterleavedBufferAttribute?p=l[m]*o.data.stride+o.offset:p=l[m]*c;for(let d=0;d<c;d++)u[g++]=A[p++]}return new Xe(u,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],A=t(l,n);e.setAttribute(o,A)}const r=this.morphAttributes;for(const o in r){const l=[],A=r[o];for(let c=0,h=A.length;c<h;c++){const u=A[c],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const A=a[o];e.addGroup(A.start,A.count,A.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const A in l)l[A]!==void 0&&(t[A]=l[A]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const A=n[l];t.data.attributes[l]=A.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const A=this.morphAttributes[l],c=[];for(let h=0,u=A.length;h<u;h++){const p=A[h];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const A in s){const c=s[A];this.setAttribute(A,c.clone(e))}const r=t.morphAttributes;for(const A in r){const c=[],h=r[A];for(let u=0,p=h.length;u<p;u++)c.push(h[u].clone(e));this.morphAttributes[A]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let A=0,c=a.length;A<c;A++){const h=a[A];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const LA=new Ht,ni=new Tr,Ps=new Qr,NA=new w,ks=new w,Gs=new w,zs=new w,fa=new w,Os=new w,UA=new w,Hs=new w;class we extends le{constructor(t=new He,e=new qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Os.set(0,0,0);for(let l=0,A=r.length;l<A;l++){const c=o[l],h=r[l];c!==0&&(fa.fromBufferAttribute(h,t),a?Os.addScaledVector(fa,c):Os.addScaledVector(fa.sub(e),c))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ps.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ps,NA)===null||ni.origin.distanceToSquared(NA)>(t.far-t.near)**2))&&(LA.copy(r).invert(),ni.copy(t.ray).applyMatrix4(LA),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,A=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const f=u[g],d=a[f.materialIndex],_=Math.max(f.start,p.start),E=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let v=_,Q=E;v<Q;v+=3){const b=o.getX(v),S=o.getX(v+1),T=o.getX(v+2);s=Ys(this,d,t,n,A,c,h,b,S,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(o.count,p.start+p.count);for(let f=g,d=m;f<d;f+=3){const _=o.getX(f),E=o.getX(f+1),v=o.getX(f+2);s=Ys(this,a,t,n,A,c,h,_,E,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,m=u.length;g<m;g++){const f=u[g],d=a[f.materialIndex],_=Math.max(f.start,p.start),E=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let v=_,Q=E;v<Q;v+=3){const b=v,S=v+1,T=v+2;s=Ys(this,d,t,n,A,c,h,b,S,T),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let f=g,d=m;f<d;f+=3){const _=f,E=f+1,v=f+2;s=Ys(this,a,t,n,A,c,h,_,E,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Iu(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;Hs.copy(o),Hs.applyMatrix4(i.matrixWorld);const A=e.ray.origin.distanceTo(Hs);return A<e.near||A>e.far?null:{distance:A,point:Hs.clone(),object:i}}function Ys(i,t,e,n,s,r,a,o,l,A){i.getVertexPosition(o,ks),i.getVertexPosition(l,Gs),i.getVertexPosition(A,zs);const c=Iu(i,t,e,n,ks,Gs,zs,UA);if(c){const h=new w;An.getBarycoord(UA,ks,Gs,zs,h),s&&(c.uv=An.getInterpolatedAttribute(s,o,l,A,h,new vt)),r&&(c.uv1=An.getInterpolatedAttribute(r,o,l,A,h,new vt)),a&&(c.normal=An.getInterpolatedAttribute(a,o,l,A,h,new w),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:l,c:A,normal:new w,materialIndex:0};An.getNormal(ks,Gs,zs,u.normal),c.face=u,c.barycoord=h}return c}class Kn extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],A=[],c=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(A,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2));function g(m,f,d,_,E,v,Q,b,S,T,Y){const I=v/S,x=Q/T,N=v/2,P=Q/2,z=b/2,J=S+1,U=T+1;let K=0,O=0;const nt=new w;for(let it=0;it<U;it++){const rt=it*x-P;for(let Dt=0;Dt<J;Dt++){const Mt=Dt*I-N;nt[m]=Mt*_,nt[f]=rt*E,nt[d]=z,A.push(nt.x,nt.y,nt.z),nt[m]=0,nt[f]=0,nt[d]=b>0?1:-1,c.push(nt.x,nt.y,nt.z),h.push(Dt/S),h.push(1-it/T),K+=1}}for(let it=0;it<T;it++)for(let rt=0;rt<S;rt++){const Dt=u+rt+J*it,Mt=u+rt+J*(it+1),V=u+(rt+1)+J*(it+1),j=u+(rt+1)+J*it;l.push(Dt,Mt,j),l.push(Mt,V,j),O+=6}o.addGroup(p,O,Y),p+=O,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function Eu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const Cu={clone:Zi,merge:Te};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ac extends le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new w,FA=new vt,PA=new vt;class Le extends Ac{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=So*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return So*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-t/Hn.z)}getViewSize(t,e){return this.getViewBounds(t,FA,PA),e.subVectors(PA,FA)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,A=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/A,s*=a.width/l,n*=a.height/A}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ti=-90,Di=1;class lc extends le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(Ti,Di,t,e);s.layers=this.layers,this.add(s);const r=new Le(Ti,Di,t,e);r.layers=this.layers,this.add(r);const a=new Le(Ti,Di,t,e);a.layers=this.layers,this.add(a);const o=new Le(Ti,Di,t,e);o.layers=this.layers,this.add(o);const l=new Le(Ti,Di,t,e);l.layers=this.layers,this.add(l);const A=new Le(Ti,Di,t,e);A.layers=this.layers,this.add(A)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const A of e)this.remove(A);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const A of e)this.add(A),A.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,A,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,A),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(h,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Me{constructor(t,e,n,s,r,a,o,l,A,c){t=t!==void 0?t:[],e=e!==void 0?e:Ji,super(t,e,n,s,r,a,o,l,A,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hc extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new cc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Jn});r.uniforms.tEquirect.value=e;const a=new we(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=on),new lc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const pa=new w,_u=new w,vu=new Nt;class qn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=pa.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vu.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Qr,Vs=new w;class Wo{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],A=s[4],c=s[5],h=s[6],u=s[7],p=s[8],g=s[9],m=s[10],f=s[11],d=s[12],_=s[13],E=s[14],v=s[15];if(n[0].setComponents(l-r,u-A,f-p,v-d).normalize(),n[1].setComponents(l+r,u+A,f+p,v+d).normalize(),n[2].setComponents(l+a,u+c,f+g,v+_).normalize(),n[3].setComponents(l-a,u-c,f-g,v-_).normalize(),n[4].setComponents(l-o,u-h,f-m,v-E).normalize(),e===Mn)n[5].setComponents(l+o,u+h,f+m,v+E).normalize();else if(e===Ir)n[5].setComponents(o,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bu(i){const t=new WeakMap;function e(o,l){const A=o.array,c=o.usage,h=A.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,A,c),o.onUploadCallback();let p;if(A instanceof Float32Array)p=i.FLOAT;else if(A instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(A instanceof Int16Array)p=i.SHORT;else if(A instanceof Uint32Array)p=i.UNSIGNED_INT;else if(A instanceof Int32Array)p=i.INT;else if(A instanceof Int8Array)p=i.BYTE;else if(A instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:u,type:p,bytesPerElement:A.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,A){const c=l.array,h=l.updateRanges;if(i.bindBuffer(A,o),h.length===0)i.bufferSubData(A,0,c);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],m=h[p];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++u,h[u]=m)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const m=h[p];i.bufferSubData(A,m.start*c.BYTES_PER_ELEMENT,c,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const A=t.get(o);if(A===void 0)t.set(o,e(o,l));else if(A.version<o.version){if(A.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(A.buffer,o,l),A.version=o.version}}return{get:s,remove:r,update:a}}class Dr extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),A=o+1,c=l+1,h=t/o,u=e/l,p=[],g=[],m=[],f=[];for(let d=0;d<c;d++){const _=d*u-a;for(let E=0;E<A;E++){const v=E*h-r;g.push(v,-_,0),m.push(0,0,1),f.push(E/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<o;_++){const E=_+A*d,v=_+A*(d+1),Q=_+1+A*(d+1),b=_+1+A*d;p.push(E,v,b),p.push(v,Q,b)}this.setIndex(p),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(m,3)),this.setAttribute("uv",new Ee(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",id=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,md=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Md=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,af=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ff=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$f=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Su,alphahash_pars_fragment:bu,alphamap_fragment:wu,alphamap_pars_fragment:Mu,alphatest_fragment:Qu,alphatest_pars_fragment:Tu,aomap_fragment:Du,aomap_pars_fragment:Ru,batching_pars_vertex:Lu,batching_vertex:Nu,begin_vertex:Uu,beginnormal_vertex:Fu,bsdfs:Pu,iridescence_fragment:ku,bumpmap_pars_fragment:Gu,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Yu,color_fragment:Vu,color_pars_fragment:qu,color_pars_vertex:Wu,color_vertex:Ju,common:Xu,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:ju,displacementmap_pars_vertex:Zu,displacementmap_vertex:$u,emissivemap_fragment:td,emissivemap_pars_fragment:ed,colorspace_fragment:nd,colorspace_pars_fragment:id,envmap_fragment:sd,envmap_common_pars_fragment:rd,envmap_pars_fragment:ad,envmap_pars_vertex:od,envmap_physical_pars_fragment:Id,envmap_vertex:Ad,fog_vertex:ld,fog_pars_vertex:cd,fog_fragment:hd,fog_pars_fragment:ud,gradientmap_pars_fragment:dd,lightmap_pars_fragment:fd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:gd,lights_pars_begin:md,lights_toon_fragment:Ed,lights_toon_pars_fragment:Cd,lights_phong_fragment:xd,lights_phong_pars_fragment:yd,lights_physical_fragment:_d,lights_physical_pars_fragment:vd,lights_fragment_begin:Bd,lights_fragment_maps:Sd,lights_fragment_end:bd,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:Md,logdepthbuf_pars_vertex:Qd,logdepthbuf_vertex:Td,map_fragment:Dd,map_pars_fragment:Rd,map_particle_fragment:Ld,map_particle_pars_fragment:Nd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Fd,morphinstance_vertex:Pd,morphcolor_vertex:kd,morphnormal_vertex:Gd,morphtarget_pars_vertex:zd,morphtarget_vertex:Od,normal_fragment_begin:Hd,normal_fragment_maps:Yd,normal_pars_fragment:Vd,normal_pars_vertex:qd,normal_vertex:Wd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:Kd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Zd,opaque_fragment:$d,packing:tf,premultiplied_alpha_fragment:ef,project_vertex:nf,dithering_fragment:sf,dithering_pars_fragment:rf,roughnessmap_fragment:af,roughnessmap_pars_fragment:of,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:ff,skinnormal_vertex:pf,specularmap_fragment:gf,specularmap_pars_fragment:mf,tonemapping_fragment:If,tonemapping_pars_fragment:Ef,transmission_fragment:Cf,transmission_pars_fragment:xf,uv_pars_fragment:yf,uv_pars_vertex:_f,uv_vertex:vf,worldpos_vertex:Bf,background_vert:Sf,background_frag:bf,backgroundCube_vert:wf,backgroundCube_frag:Mf,cube_vert:Qf,cube_frag:Tf,depth_vert:Df,depth_frag:Rf,distanceRGBA_vert:Lf,distanceRGBA_frag:Nf,equirect_vert:Uf,equirect_frag:Ff,linedashed_vert:Pf,linedashed_frag:kf,meshbasic_vert:Gf,meshbasic_frag:zf,meshlambert_vert:Of,meshlambert_frag:Hf,meshmatcap_vert:Yf,meshmatcap_frag:Vf,meshnormal_vert:qf,meshnormal_frag:Wf,meshphong_vert:Jf,meshphong_frag:Xf,meshphysical_vert:Kf,meshphysical_frag:jf,meshtoon_vert:Zf,meshtoon_frag:$f,points_vert:tp,points_frag:ep,shadow_vert:np,shadow_frag:ip,sprite_vert:sp,sprite_frag:rp},st={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},un={basic:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Te([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Te([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Te([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Te([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Te([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Te([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Te([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Te([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Te([st.common,st.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Te([st.lights,st.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};un.physical={uniforms:Te([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const qs={r:0,b:0,g:0},si=new mn,ap=new Ht;function op(i,t,e,n,s,r,a){const o=new Tt(0);let l=r===!0?0:1,A,c,h=null,u=0,p=null;function g(_){let E=_.isScene===!0?_.background:null;return E&&E.isTexture&&(E=(_.backgroundBlurriness>0?e:t).get(E)),E}function m(_){let E=!1;const v=g(_);v===null?d(o,l):v&&v.isColor&&(d(v,1),E=!0);const Q=i.xr.getEnvironmentBlendMode();Q==="additive"?n.buffers.color.setClear(0,0,0,1,a):Q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(_,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===br)?(c===void 0&&(c=new we(new Kn(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(Q,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),si.copy(E.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(si)),c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ne,(h!==v||u!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,p=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(A===void 0&&(A=new we(new Dr(2,2),new cn({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(A)),A.material.uniforms.t2D.value=v,A.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,A.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),A.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||p!==i.toneMapping)&&(A.material.needsUpdate=!0,h=v,u=v.version,p=i.toneMapping),A.layers.enableAll(),_.unshift(A,A.geometry,A.material,0,0,null))}function d(_,E){_.getRGB(qs,oc(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(o,l)},render:m,addToRenderList:f}}function Ap(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(I,x,N,P,z){let J=!1;const U=h(P,N,x);r!==U&&(r=U,A(r.object)),J=p(I,P,N,z),J&&g(I,P,N,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(I,x,N,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function A(I){return i.bindVertexArray(I)}function c(I){return i.deleteVertexArray(I)}function h(I,x,N){const P=N.wireframe===!0;let z=n[I.id];z===void 0&&(z={},n[I.id]=z);let J=z[x.id];J===void 0&&(J={},z[x.id]=J);let U=J[P];return U===void 0&&(U=u(l()),J[P]=U),U}function u(I){const x=[],N=[],P=[];for(let z=0;z<e;z++)x[z]=0,N[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:N,attributeDivisors:P,object:I,attributes:{},index:null}}function p(I,x,N,P){const z=r.attributes,J=x.attributes;let U=0;const K=N.getAttributes();for(const O in K)if(K[O].location>=0){const it=z[O];let rt=J[O];if(rt===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(rt=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(rt=I.instanceColor)),it===void 0||it.attribute!==rt||rt&&it.data!==rt.data)return!0;U++}return r.attributesNum!==U||r.index!==P}function g(I,x,N,P){const z={},J=x.attributes;let U=0;const K=N.getAttributes();for(const O in K)if(K[O].location>=0){let it=J[O];it===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(it=I.instanceColor));const rt={};rt.attribute=it,it&&it.data&&(rt.data=it.data),z[O]=rt,U++}r.attributes=z,r.attributesNum=U,r.index=P}function m(){const I=r.newAttributes;for(let x=0,N=I.length;x<N;x++)I[x]=0}function f(I){d(I,0)}function d(I,x){const N=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;N[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),z[I]!==x&&(i.vertexAttribDivisor(I,x),z[I]=x)}function _(){const I=r.newAttributes,x=r.enabledAttributes;for(let N=0,P=x.length;N<P;N++)x[N]!==I[N]&&(i.disableVertexAttribArray(N),x[N]=0)}function E(I,x,N,P,z,J,U){U===!0?i.vertexAttribIPointer(I,x,N,z,J):i.vertexAttribPointer(I,x,N,P,z,J)}function v(I,x,N,P){m();const z=P.attributes,J=N.getAttributes(),U=x.defaultAttributeValues;for(const K in J){const O=J[K];if(O.location>=0){let nt=z[K];if(nt===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),nt!==void 0){const it=nt.normalized,rt=nt.itemSize,Dt=t.get(nt);if(Dt===void 0)continue;const Mt=Dt.buffer,V=Dt.type,j=Dt.bytesPerElement,ot=V===i.INT||V===i.UNSIGNED_INT||nt.gpuType===Go;if(nt.isInterleavedBufferAttribute){const $=nt.data,yt=$.stride,mt=nt.offset;if($.isInstancedInterleavedBuffer){for(let Qt=0;Qt<O.locationSize;Qt++)d(O.location+Qt,$.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Qt=0;Qt<O.locationSize;Qt++)f(O.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Qt=0;Qt<O.locationSize;Qt++)E(O.location+Qt,rt/O.locationSize,V,it,yt*j,(mt+rt/O.locationSize*Qt)*j,ot)}else{if(nt.isInstancedBufferAttribute){for(let $=0;$<O.locationSize;$++)d(O.location+$,nt.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let $=0;$<O.locationSize;$++)f(O.location+$);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let $=0;$<O.locationSize;$++)E(O.location+$,rt/O.locationSize,V,it,rt*j,rt/O.locationSize*$*j,ot)}}else if(U!==void 0){const it=U[K];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(O.location,it);break;case 3:i.vertexAttrib3fv(O.location,it);break;case 4:i.vertexAttrib4fv(O.location,it);break;default:i.vertexAttrib1fv(O.location,it)}}}}_()}function Q(){T();for(const I in n){const x=n[I];for(const N in x){const P=x[N];for(const z in P)c(P[z].object),delete P[z];delete x[N]}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const x=n[I.id];for(const N in x){const P=x[N];for(const z in P)c(P[z].object),delete P[z];delete x[N]}delete n[I.id]}function S(I){for(const x in n){const N=n[x];if(N[I.id]===void 0)continue;const P=N[I.id];for(const z in P)c(P[z].object),delete P[z];delete N[I.id]}}function T(){Y(),a=!0,r!==s&&(r=s,A(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:Y,dispose:Q,releaseStatesOfGeometry:b,releaseStatesOfProgram:S,initAttributes:m,enableAttribute:f,disableUnusedAttributes:_}}function lp(i,t,e){let n;function s(A){n=A}function r(A,c){i.drawArrays(n,A,c),e.update(c,n,1)}function a(A,c,h){h!==0&&(i.drawArraysInstanced(n,A,c,h),e.update(c,n,h))}function o(A,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,A,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];e.update(p,n,1)}function l(A,c,h,u){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<A.length;g++)a(A[g],c[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,A,0,c,0,u,0,h);let g=0;for(let m=0;m<h;m++)g+=c[m];for(let m=0;m<u.length;m++)e.update(g,n,u[m])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function cp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(S){return!(S!==_e&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const T=S===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==Oe&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==wn&&!T)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let A=e.precision!==void 0?e.precision:"highp";const c=l(A);c!==A&&(console.warn("THREE.WebGLRenderer:",A,"not supported, using",c,"instead."),A=c);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Q=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:A,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:Q,maxSamples:b}}function hp(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new qn,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=c(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?c(null):A();else{const _=r?0:n,E=_*4;let v=d.clippingState||null;l.value=v,v=c(g,u,E,p);for(let Q=0;Q!==E;++Q)v[Q]=e[Q];d.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function A(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,u,p,g){const m=h!==null?h.length:0;let f=null;if(m!==0){if(f=l.value,g!==!0||f===null){const d=p+m*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(f===null||f.length<d)&&(f=new Float32Array(d));for(let E=0,v=p;E!==m;++E,v+=4)a.copy(h[E]).applyMatrix4(_,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,f}}function up(i){let t=new WeakMap;function e(a,o){return o===Xa?a.mapping=Ji:o===Ka&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xa||o===Ka)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const A=new hc(l.height);return A.fromEquirectangularTexture(i,a),t.set(a,A),a.addEventListener("dispose",s),e(A.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Jo extends Ac{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const A=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=A*this.view.offsetX,a=r+A*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,kA=[.125,.215,.35,.446,.526,.582],li=20,ga=new Jo,GA=new Tt;let ma=null,Ia=0,Ea=0,Ca=!1;const ai=(1+Math.sqrt(5))/2,Ri=1/ai,zA=[new w(-ai,Ri,0),new w(ai,Ri,0),new w(-Ri,0,ai),new w(Ri,0,ai),new w(0,ai,-Ri),new w(0,ai,Ri),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class bo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ma=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=YA(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=HA(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma,Ia,Ea),this._renderer.xr.enabled=Ca,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ea=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:ys,format:_e,colorSpace:Zn,depthBuffer:!1},s=OA(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=OA(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dp(r)),this._blurMaterial=fp(r,t,e)}return s}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],A=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(GA),c.toneMapping=Xn,c.autoClear=!1;const p=new qo({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new we(new Kn,p);let m=!1;const f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,m=!0):(p.color.copy(GA),m=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,l[d],0),o.lookAt(A[d],0,0)):_===1?(o.up.set(0,0,l[d]),o.lookAt(0,A[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,A[d]));const E=this._cubeSize;Ws(s,_*E,d>2?E:0,E,E),c.setRenderTarget(s),m&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=u,c.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ji||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=YA()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=HA());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new we(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zA[(s-r-1)%zA.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,A=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new we(this._lodPlanes[s],A),u=A.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),m=r/g,f=isFinite(r)?1+Math.floor(c*m):li;f>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${li}`);const d=[];let _=0;for(let S=0;S<li;++S){const T=S/m,Y=Math.exp(-T*T/2);d.push(Y),S===0?_+=Y:S<f&&(_+=2*Y)}for(let S=0;S<d.length;S++)d[S]=d[S]/_;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=d,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const v=this._sizeLods[s],Q=3*v*(s>E-ki?s-E+ki:0),b=4*(this._cubeSize-v);Ws(e,Q,b,3*v,2*v),l.setRenderTarget(e),l.render(h,ga)}}function dp(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+kA.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ki?l=kA[a-i+ki-1]:a===0&&(l=0),n.push(l);const A=1/(o-2),c=-A,h=1+A,u=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,m=3,f=2,d=1,_=new Float32Array(m*g*p),E=new Float32Array(f*g*p),v=new Float32Array(d*g*p);for(let b=0;b<p;b++){const S=b%3*2/3-1,T=b>2?0:-1,Y=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];_.set(Y,m*g*b),E.set(u,f*g*b);const I=[b,b,b,b,b,b];v.set(I,d*g*b)}const Q=new He;Q.setAttribute("position",new Xe(_,m)),Q.setAttribute("uv",new Xe(E,f)),Q.setAttribute("faceIndex",new Xe(v,d)),t.push(Q),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function OA(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fp(i,t,e){const n=new Float32Array(li),s=new w(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function HA(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function YA(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,A=l===Xa||l===Ka,c=l===Ji||l===Xi;if(A||c){let h=t.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new bo(i)),h=A?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return A&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new bo(i)),h=A?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const A=6;for(let c=0;c<A;c++)o[c]!==void 0&&l++;return l===A}function r(o){const l=o.target;l.removeEventListener("dispose",r);const A=t.get(l);A!==void 0&&(t.delete(l),A.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){const s={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const m=u.morphAttributes[g];for(let f=0,d=m.length;f<d;f++)t.remove(m[f])}u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const m=p[g];for(let f=0,d=m.length;f<d;f++)t.update(m[f],i.ARRAY_BUFFER)}}function A(h){const u=[],p=h.index,g=h.attributes.position;let m=0;if(p!==null){const _=p.array;m=p.version;for(let E=0,v=_.length;E<v;E+=3){const Q=_[E+0],b=_[E+1],S=_[E+2];u.push(Q,b,b,S,S,Q)}}else if(g!==void 0){const _=g.array;m=g.version;for(let E=0,v=_.length/3-1;E<v;E+=3){const Q=E+0,b=E+1,S=E+2;u.push(Q,b,b,S,S,Q)}}else return;const f=new(tc(u)?ac:rc)(u,1);f.version=m;const d=r.get(h);d&&t.remove(d),r.set(h,f)}function c(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&A(h)}else A(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function Ip(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*a),e.update(p,n,1)}function A(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function c(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let f=0;for(let d=0;d<g;d++)f+=p[d];e.update(f,n,1)}function h(u,p,g,m){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<u.length;d++)A(u[d]/a,p[d],m[d]);else{f.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,m,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_];for(let _=0;_<m.length;_++)e.update(d,n,m[_])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=A,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function Ep(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cp(i,t,e){const n=new WeakMap,s=new Gt;function r(a,o,l){const A=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let Y=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",Y)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let v=o.attributes.position.count*E,Q=1;v>t.maxTextureSize&&(Q=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*Q*4*h),S=new pn(b,v,Q,h);S.type=wn,S.needsUpdate=!0;const T=E*4;for(let I=0;I<h;I++){const x=f[I],N=d[I],P=_[I],z=v*Q*4*I;for(let J=0;J<x.count;J++){const U=J*T;p===!0&&(s.fromBufferAttribute(x,J),b[z+U+0]=s.x,b[z+U+1]=s.y,b[z+U+2]=s.z,b[z+U+3]=0),g===!0&&(s.fromBufferAttribute(N,J),b[z+U+4]=s.x,b[z+U+5]=s.y,b[z+U+6]=s.z,b[z+U+7]=0),m===!0&&(s.fromBufferAttribute(P,J),b[z+U+8]=s.x,b[z+U+9]=s.y,b[z+U+10]=s.z,b[z+U+11]=P.itemSize===4?s.w:1)}}u={count:h,texture:S,size:new vt(v,Q)},n.set(o,u),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let m=0;m<A.length;m++)p+=A[m];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",A)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xp(i,t,e,n){let s=new WeakMap;function r(l){const A=n.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==A&&(t.update(h),s.set(h,A)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==A&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,A))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==A&&(u.update(),s.set(u,A))}return h}function a(){s=new WeakMap}function o(l){const A=l.target;A.removeEventListener("dispose",o),e.remove(A.instanceMatrix),A.instanceColor!==null&&e.remove(A.instanceColor)}return{update:r,dispose:a}}class dc extends Me{constructor(t,e,n,s,r,a,o,l,A,c=Hi){if(c!==Hi&&c!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Hi&&(n=Ge),n===void 0&&c===ji&&(n=Ki),super(null,s,r,a,o,l,c,n,A),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fc=new Me,VA=new dc(1,1),pc=new pn,gc=new ic,mc=new cc,qA=[],WA=[],JA=new Float32Array(16),XA=new Float32Array(9),KA=new Float32Array(4);function ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qA[s];if(r===void 0&&(r=new Float32Array(s),qA[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rr(i,t){let e=WA[t];e===void 0&&(e=new Int32Array(t),WA[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function Bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function Sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;KA.set(n),i.uniformMatrix2fv(this.addr,!1,KA),fe(e,n)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;XA.set(n),i.uniformMatrix3fv(this.addr,!1,XA),fe(e,n)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;JA.set(n),i.uniformMatrix4fv(this.addr,!1,JA),fe(e,n)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(VA.compareFunction=$l,r=VA):r=fc,e.setTexture2D(t||r,s)}function Pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gc,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mc,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pc,s)}function zp(i){switch(i){case 5126:return yp;case 35664:return _p;case 35665:return vp;case 35666:return Bp;case 35674:return Sp;case 35675:return bp;case 35676:return wp;case 5124:case 35670:return Mp;case 35667:case 35671:return Qp;case 35668:case 35672:return Tp;case 35669:case 35673:return Dp;case 5125:return Rp;case 36294:return Lp;case 36295:return Np;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Op(i,t){i.uniform1fv(this.addr,t)}function Hp(i,t){const e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Yp(i,t){const e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Vp(i,t){const e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function qp(i,t){const e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wp(i,t){const e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jp(i,t){const e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xp(i,t){i.uniform1iv(this.addr,t)}function Kp(i,t){i.uniform2iv(this.addr,t)}function jp(i,t){i.uniform3iv(this.addr,t)}function Zp(i,t){i.uniform4iv(this.addr,t)}function $p(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||fc,r[a])}function sg(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gc,r[a])}function rg(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||mc,r[a])}function ag(i,t,e){const n=this.cache,s=t.length,r=Rr(e,s);de(n,r)||(i.uniform1iv(this.addr,r),fe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pc,r[a])}function og(i){switch(i){case 5126:return Op;case 35664:return Hp;case 35665:return Yp;case 35666:return Vp;case 35674:return qp;case 35675:return Wp;case 35676:return Jp;case 5124:case 35670:return Xp;case 35667:case 35671:return Kp;case 35668:case 35672:return jp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class Ag{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zp(e.type)}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}}class cg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function jA(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",A=r[3];if(l&&(o=o|0),A===void 0||A==="["&&a+2===s){jA(e,A===void 0?new Ag(o,i,t):new lg(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new cg(o),jA(e,h)),e=h}}}class cr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);hg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function ZA(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ug=37297;let dg=0;function fg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function pg(i){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i);let n;switch(t===e?n="":t===gr&&e===pr?n="LinearDisplayP3ToLinearSRGB":t===pr&&e===gr&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case Mr:return[n,"LinearTransferOETF"];case Ze:case Yo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $A(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(t),a)}else return s}function gg(i,t){const e=pg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mg(i,t){let e;switch(t){case Dh:e="Linear";break;case Rh:e="Reinhard";break;case Lh:e="Cineon";break;case Nh:e="ACESFilmic";break;case Fh:e="AgX";break;case Ph:e="Neutral";break;case Uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new w;function Ig(){Kt.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Cg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ls(i){return i!==""}function tl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(i){return i.replace(yg,vg)}const _g=new Map;function vg(i,t){let e=Ft[t];if(e===void 0){const n=_g.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}const Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Bg,Sg)}function Sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Xi:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case Th:t="ENVMAP_BLENDING_ADD";break}return t}function Tg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=bg(e),A=wg(e),c=Mg(e),h=Qg(e),u=Tg(e),p=Eg(e),g=Cg(r),m=s.createProgram();let f,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),d.length>0&&(d+=`
`)):(f=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),d=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+A:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Xn?mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=wo(a),a=tl(a,e),a=el(a,e),o=wo(o),o=tl(o,e),o=el(o,e),a=nl(a),o=nl(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=_+f+a,v=_+d+o,Q=ZA(s,s.VERTEX_SHADER,E),b=ZA(s,s.FRAGMENT_SHADER,v);s.attachShader(m,Q),s.attachShader(m,b),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(x){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(Q).trim(),z=s.getShaderInfoLog(b).trim();let J=!0,U=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,Q,b);else{const K=$A(s,Q,"vertex"),O=$A(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+N+`
`+K+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||z==="")&&(U=!1);U&&(x.diagnostics={runnable:J,programLog:N,vertexShader:{log:P,prefix:f},fragmentShader:{log:z,prefix:d}})}s.deleteShader(Q),s.deleteShader(b),T=new cr(s,m),Y=xg(s,m)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let Y;this.getAttributes=function(){return Y===void 0&&S(this),Y};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,ug)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=Q,this.fragmentShader=b,this}let Rg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Rg++,this.code=t,this.usedTimes=0}}function Ug(i,t,e,n,s,r,a){const o=new Vo,l=new Lg,A=new Set,c=[],h=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(I){return A.add(I),I===0?"uv":`uv${I}`}function d(I,x,N,P,z){const J=P.fog,U=z.geometry,K=I.isMeshStandardMaterial?P.environment:null,O=(I.isMeshStandardMaterial?e:t).get(I.envMap||K),nt=O&&O.mapping===br?O.image.height:null,it=m[I.type];I.precision!==null&&(g=s.getMaxPrecision(I.precision),g!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));const rt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Dt=rt!==void 0?rt.length:0;let Mt=0;U.morphAttributes.position!==void 0&&(Mt=1),U.morphAttributes.normal!==void 0&&(Mt=2),U.morphAttributes.color!==void 0&&(Mt=3);let V,j,ot,$;if(it){const Fe=un[it];V=Fe.vertexShader,j=Fe.fragmentShader}else V=I.vertexShader,j=I.fragmentShader,l.update(I),ot=l.getVertexShaderID(I),$=l.getFragmentShaderID(I);const yt=i.getRenderTarget(),mt=z.isInstancedMesh===!0,Qt=z.isBatchedMesh===!0,Pt=!!I.map,Rt=!!I.matcap,M=!!O,xe=!!I.aoMap,Ut=!!I.lightMap,kt=!!I.bumpMap,_t=!!I.normalMap,Vt=!!I.displacementMap,Ct=!!I.emissiveMap,B=!!I.metalnessMap,C=!!I.roughnessMap,F=I.anisotropy>0,W=I.clearcoat>0,Z=I.dispersion>0,q=I.iridescence>0,It=I.sheen>0,at=I.transmission>0,ut=F&&!!I.anisotropyMap,zt=W&&!!I.clearcoatMap,tt=W&&!!I.clearcoatNormalMap,dt=W&&!!I.clearcoatRoughnessMap,bt=q&&!!I.iridescenceMap,wt=q&&!!I.iridescenceThicknessMap,ft=It&&!!I.sheenColorMap,Ot=It&&!!I.sheenRoughnessMap,Lt=!!I.specularMap,te=!!I.specularColorMap,D=!!I.specularIntensityMap,ct=at&&!!I.transmissionMap,H=at&&!!I.thicknessMap,X=!!I.gradientMap,At=!!I.alphaMap,ht=I.alphaTest>0,Yt=!!I.alphaHash,oe=!!I.extensions;let Ue=Xn;I.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const Wt={shaderID:it,shaderType:I.type,shaderName:I.name,vertexShader:V,fragmentShader:j,defines:I.defines,customVertexShaderID:ot,customFragmentShaderID:$,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&z._colorsTexture!==null,instancing:mt,instancingColor:mt&&z.instanceColor!==null,instancingMorph:mt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Zn,alphaToCoverage:!!I.alphaToCoverage,map:Pt,matcap:Rt,envMap:M,envMapMode:M&&O.mapping,envMapCubeUVHeight:nt,aoMap:xe,lightMap:Ut,bumpMap:kt,normalMap:_t,displacementMap:p&&Vt,emissiveMap:Ct,normalMapObjectSpace:_t&&I.normalMapType===Hh,normalMapTangentSpace:_t&&I.normalMapType===Zl,metalnessMap:B,roughnessMap:C,anisotropy:F,anisotropyMap:ut,clearcoat:W,clearcoatMap:zt,clearcoatNormalMap:tt,clearcoatRoughnessMap:dt,dispersion:Z,iridescence:q,iridescenceMap:bt,iridescenceThicknessMap:wt,sheen:It,sheenColorMap:ft,sheenRoughnessMap:Ot,specularMap:Lt,specularColorMap:te,specularIntensityMap:D,transmission:at,transmissionMap:ct,thicknessMap:H,gradientMap:X,opaque:I.transparent===!1&&I.blending===Oi&&I.alphaToCoverage===!1,alphaMap:At,alphaTest:ht,alphaHash:Yt,combine:I.combine,mapUv:Pt&&f(I.map.channel),aoMapUv:xe&&f(I.aoMap.channel),lightMapUv:Ut&&f(I.lightMap.channel),bumpMapUv:kt&&f(I.bumpMap.channel),normalMapUv:_t&&f(I.normalMap.channel),displacementMapUv:Vt&&f(I.displacementMap.channel),emissiveMapUv:Ct&&f(I.emissiveMap.channel),metalnessMapUv:B&&f(I.metalnessMap.channel),roughnessMapUv:C&&f(I.roughnessMap.channel),anisotropyMapUv:ut&&f(I.anisotropyMap.channel),clearcoatMapUv:zt&&f(I.clearcoatMap.channel),clearcoatNormalMapUv:tt&&f(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&f(I.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&f(I.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&f(I.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(I.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&f(I.sheenRoughnessMap.channel),specularMapUv:Lt&&f(I.specularMap.channel),specularColorMapUv:te&&f(I.specularColorMap.channel),specularIntensityMapUv:D&&f(I.specularIntensityMap.channel),transmissionMapUv:ct&&f(I.transmissionMap.channel),thicknessMapUv:H&&f(I.thicknessMap.channel),alphaMapUv:At&&f(I.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_t||F),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Pt||At),fog:!!J,useFog:I.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:Mt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Pt&&I.map.isVideoTexture===!0&&Kt.getTransfer(I.map.colorSpace)===ne,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===dn,flipSided:I.side===Ne,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:oe&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&I.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Wt.vertexUv1s=A.has(1),Wt.vertexUv2s=A.has(2),Wt.vertexUv3s=A.has(3),A.clear(),Wt}function _(I){const x=[];if(I.shaderID?x.push(I.shaderID):(x.push(I.customVertexShaderID),x.push(I.customFragmentShaderID)),I.defines!==void 0)for(const N in I.defines)x.push(N),x.push(I.defines[N]);return I.isRawShaderMaterial===!1&&(E(x,I),v(x,I),x.push(i.outputColorSpace)),x.push(I.customProgramCacheKey),x.join()}function E(I,x){I.push(x.precision),I.push(x.outputColorSpace),I.push(x.envMapMode),I.push(x.envMapCubeUVHeight),I.push(x.mapUv),I.push(x.alphaMapUv),I.push(x.lightMapUv),I.push(x.aoMapUv),I.push(x.bumpMapUv),I.push(x.normalMapUv),I.push(x.displacementMapUv),I.push(x.emissiveMapUv),I.push(x.metalnessMapUv),I.push(x.roughnessMapUv),I.push(x.anisotropyMapUv),I.push(x.clearcoatMapUv),I.push(x.clearcoatNormalMapUv),I.push(x.clearcoatRoughnessMapUv),I.push(x.iridescenceMapUv),I.push(x.iridescenceThicknessMapUv),I.push(x.sheenColorMapUv),I.push(x.sheenRoughnessMapUv),I.push(x.specularMapUv),I.push(x.specularColorMapUv),I.push(x.specularIntensityMapUv),I.push(x.transmissionMapUv),I.push(x.thicknessMapUv),I.push(x.combine),I.push(x.fogExp2),I.push(x.sizeAttenuation),I.push(x.morphTargetsCount),I.push(x.morphAttributeCount),I.push(x.numDirLights),I.push(x.numPointLights),I.push(x.numSpotLights),I.push(x.numSpotLightMaps),I.push(x.numHemiLights),I.push(x.numRectAreaLights),I.push(x.numDirLightShadows),I.push(x.numPointLightShadows),I.push(x.numSpotLightShadows),I.push(x.numSpotLightShadowsWithMaps),I.push(x.numLightProbes),I.push(x.shadowMapType),I.push(x.toneMapping),I.push(x.numClippingPlanes),I.push(x.numClipIntersection),I.push(x.depthPacking)}function v(I,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),I.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.alphaToCoverage&&o.enable(20),I.push(o.mask)}function Q(I){const x=m[I.type];let N;if(x){const P=un[x];N=Cu.clone(P.uniforms)}else N=I.uniforms;return N}function b(I,x){let N;for(let P=0,z=c.length;P<z;P++){const J=c[P];if(J.cacheKey===x){N=J,++N.usedTimes;break}}return N===void 0&&(N=new Dg(i,x,I,r),c.push(N)),N}function S(I){if(--I.usedTimes===0){const x=c.indexOf(I);c[x]=c[c.length-1],c.pop(),I.destroy()}}function T(I){l.remove(I)}function Y(){l.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:Q,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:Y}}function Fg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Pg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,u,p,g,m,f){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:f},i[t]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=m,d.group=f),t++,d}function o(h,u,p,g,m,f){const d=a(h,u,p,g,m,f);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,u,p,g,m,f){const d=a(h,u,p,g,m,f);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function A(h,u){e.length>1&&e.sort(h||Pg),n.length>1&&n.sort(u||sl),s.length>1&&s.sort(u||sl)}function c(){for(let h=t,u=i.length;h<u;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:c,sort:A}}function kg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new rl,i.set(n,[a])):s>=r.length?(a=new rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Tt};break;case"SpotLight":e={position:new w,direction:new w,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function zg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Og=0;function Hg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Gg,e=zg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let A=0;A<9;A++)n.probe.push(new w);const s=new w,r=new Ht,a=new Ht;function o(A){let c=0,h=0,u=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let p=0,g=0,m=0,f=0,d=0,_=0,E=0,v=0,Q=0,b=0,S=0;A.sort(Hg);for(let Y=0,I=A.length;Y<I;Y++){const x=A[Y],N=x.color,P=x.intensity,z=x.distance,J=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)c+=N.r*P,h+=N.g*P,u+=N.b*P;else if(x.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(x.sh.coefficients[U],P);S++}else if(x.isDirectionalLight){const U=t.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const K=x.shadow,O=e.get(x);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=x.shadow.matrix,_++}n.directional[p]=U,p++}else if(x.isSpotLight){const U=t.get(x);U.position.setFromMatrixPosition(x.matrixWorld),U.color.copy(N).multiplyScalar(P),U.distance=z,U.coneCos=Math.cos(x.angle),U.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),U.decay=x.decay,n.spot[m]=U;const K=x.shadow;if(x.map&&(n.spotLightMap[Q]=x.map,Q++,K.updateMatrices(x),x.castShadow&&b++),n.spotLightMatrix[m]=K.matrix,x.castShadow){const O=e.get(x);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,n.spotShadow[m]=O,n.spotShadowMap[m]=J,v++}m++}else if(x.isRectAreaLight){const U=t.get(x);U.color.copy(N).multiplyScalar(P),U.halfWidth.set(x.width*.5,0,0),U.halfHeight.set(0,x.height*.5,0),n.rectArea[f]=U,f++}else if(x.isPointLight){const U=t.get(x);if(U.color.copy(x.color).multiplyScalar(x.intensity),U.distance=x.distance,U.decay=x.decay,x.castShadow){const K=x.shadow,O=e.get(x);O.shadowIntensity=K.intensity,O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=x.shadow.matrix,E++}n.point[g]=U,g++}else if(x.isHemisphereLight){const U=t.get(x);U.skyColor.copy(x.color).multiplyScalar(P),U.groundColor.copy(x.groundColor).multiplyScalar(P),n.hemi[d]=U,d++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==m||T.rectAreaLength!==f||T.hemiLength!==d||T.numDirectionalShadows!==_||T.numPointShadows!==E||T.numSpotShadows!==v||T.numSpotMaps!==Q||T.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=f,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+Q-b,n.spotLightMap.length=Q,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=S,T.directionalLength=p,T.pointLength=g,T.spotLength=m,T.rectAreaLength=f,T.hemiLength=d,T.numDirectionalShadows=_,T.numPointShadows=E,T.numSpotShadows=v,T.numSpotMaps=Q,T.numLightProbes=S,n.version=Og++)}function l(A,c){let h=0,u=0,p=0,g=0,m=0;const f=c.matrixWorldInverse;for(let d=0,_=A.length;d<_;d++){const E=A[d];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),h++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(f),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(E.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(f),u++}else if(E.isHemisphereLight){const v=n.hemi[m];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function al(i){const t=new Yg(i),e=[],n=[];function s(c){A.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function l(c){t.setupView(e,c)}const A={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:A,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Vg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new al(i),t.set(s,[o])):r>=a.length?(o=new al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class qg extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wg extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kg(i,t,e){let n=new Wo;const s=new vt,r=new vt,a=new Gt,o=new qg({depthPacking:Oh}),l=new Wg,A={},c=e.maxTextureSize,h={[jn]:Ne,[Ne]:jn,[dn]:dn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Jg,fragmentShader:Xg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new we(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let d=this.type;this.render=function(b,S,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const Y=i.getRenderTarget(),I=i.getActiveCubeFace(),x=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Jn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=d!==bn&&this.type===bn,z=d===bn&&this.type!==bn;for(let J=0,U=b.length;J<U;J++){const K=b[J],O=K.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const nt=O.getFrameExtents();if(s.multiply(nt),r.copy(O.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/nt.x),s.x=r.x*nt.x,O.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/nt.y),s.y=r.y*nt.y,O.mapSize.y=r.y)),O.map===null||P===!0||z===!0){const rt=this.type!==bn?{minFilter:Ie,magFilter:Ie}:{};O.map!==null&&O.map.dispose(),O.map=new gn(s.x,s.y,rt),O.map.texture.name=K.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const it=O.getViewportCount();for(let rt=0;rt<it;rt++){const Dt=O.getViewport(rt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),N.viewport(a),O.updateMatrices(K,rt),n=O.getFrustum(),v(S,T,O.camera,K,this.type)}O.isPointLightShadow!==!0&&this.type===bn&&_(O,T),O.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(Y,I,x)};function _(b,S){const T=t.update(m);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,T,u,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,T,p,m,null)}function E(b,S,T,Y){let I=null;const x=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(x!==void 0)I=x;else if(I=T.isPointLight===!0?l:o,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=I.uuid,P=S.uuid;let z=A[N];z===void 0&&(z={},A[N]=z);let J=z[P];J===void 0&&(J=I.clone(),z[P]=J,S.addEventListener("dispose",Q)),I=J}if(I.visible=S.visible,I.wireframe=S.wireframe,Y===bn?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:h[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.map=S.map,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=i.properties.get(I);N.light=T}return I}function v(b,S,T,Y,I){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===bn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const P=t.update(b),z=b.material;if(Array.isArray(z)){const J=P.groups;for(let U=0,K=J.length;U<K;U++){const O=J[U],nt=z[O.materialIndex];if(nt&&nt.visible){const it=E(b,nt,Y,I);b.onBeforeShadow(i,b,S,T,P,it,O),i.renderBufferDirect(T,null,P,it,b,O),b.onAfterShadow(i,b,S,T,P,it,O)}}}else if(z.visible){const J=E(b,z,Y,I);b.onBeforeShadow(i,b,S,T,P,J,null),i.renderBufferDirect(T,null,P,J,b,null),b.onAfterShadow(i,b,S,T,P,J,null)}}const N=b.children;for(let P=0,z=N.length;P<z;P++)v(N[P],S,T,Y,I)}function Q(b){b.target.removeEventListener("dispose",Q);for(const T in A){const Y=A[T],I=b.target.uuid;I in Y&&(Y[I].dispose(),delete Y[I])}}}const jg={[Oa]:Ha,[Ya]:Wa,[Va]:Ja,[Wi]:qa,[Ha]:Oa,[Wa]:Ya,[Ja]:Va,[qa]:Wi};function Zg(i){function t(){let D=!1;const ct=new Gt;let H=null;const X=new Gt(0,0,0,0);return{setMask:function(At){H!==At&&!D&&(i.colorMask(At,At,At,At),H=At)},setLocked:function(At){D=At},setClear:function(At,ht,Yt,oe,Ue){Ue===!0&&(At*=oe,ht*=oe,Yt*=oe),ct.set(At,ht,Yt,oe),X.equals(ct)===!1&&(i.clearColor(At,ht,Yt,oe),X.copy(ct))},reset:function(){D=!1,H=null,X.set(-1,0,0,0)}}}function e(){let D=!1,ct=!1,H=null,X=null,At=null;return{setReversed:function(ht){ct=ht},setTest:function(ht){ht?ot(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ht){H!==ht&&!D&&(i.depthMask(ht),H=ht)},setFunc:function(ht){if(ct&&(ht=jg[ht]),X!==ht){switch(ht){case Oa:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=ht}},setLocked:function(ht){D=ht},setClear:function(ht){At!==ht&&(i.clearDepth(ht),At=ht)},reset:function(){D=!1,H=null,X=null,At=null}}}function n(){let D=!1,ct=null,H=null,X=null,At=null,ht=null,Yt=null,oe=null,Ue=null;return{setTest:function(Wt){D||(Wt?ot(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(Wt){ct!==Wt&&!D&&(i.stencilMask(Wt),ct=Wt)},setFunc:function(Wt,Fe,Cn){(H!==Wt||X!==Fe||At!==Cn)&&(i.stencilFunc(Wt,Fe,Cn),H=Wt,X=Fe,At=Cn)},setOp:function(Wt,Fe,Cn){(ht!==Wt||Yt!==Fe||oe!==Cn)&&(i.stencilOp(Wt,Fe,Cn),ht=Wt,Yt=Fe,oe=Cn)},setLocked:function(Wt){D=Wt},setClear:function(Wt){Ue!==Wt&&(i.clearStencil(Wt),Ue=Wt)},reset:function(){D=!1,ct=null,H=null,X=null,At=null,ht=null,Yt=null,oe=null,Ue=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let A={},c={},h=new WeakMap,u=[],p=null,g=!1,m=null,f=null,d=null,_=null,E=null,v=null,Q=null,b=new Tt(0,0,0),S=0,T=!1,Y=null,I=null,x=null,N=null,P=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,U=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(K)[1]),J=U>=1):K.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),J=U>=2);let O=null,nt={};const it=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Dt=new Gt().fromArray(it),Mt=new Gt().fromArray(rt);function V(D,ct,H,X){const At=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<H;Yt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ht}const j={};j[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),r.setFunc(Wi),Ut(!1),kt(gA),ot(i.CULL_FACE),M(Jn);function ot(D){A[D]!==!0&&(i.enable(D),A[D]=!0)}function $(D){A[D]!==!1&&(i.disable(D),A[D]=!1)}function yt(D,ct){return c[D]!==ct?(i.bindFramebuffer(D,ct),c[D]=ct,D===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=ct),D===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function mt(D,ct){let H=u,X=!1;if(D){H=h.get(ct),H===void 0&&(H=[],h.set(ct,H));const At=D.textures;if(H.length!==At.length||H[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Yt=At.length;ht<Yt;ht++)H[ht]=i.COLOR_ATTACHMENT0+ht;H.length=At.length,X=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,X=!0);X&&i.drawBuffers(H)}function Qt(D){return p!==D?(i.useProgram(D),p=D,!0):!1}const Pt={[Ai]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};Pt[ph]=i.MIN,Pt[gh]=i.MAX;const Rt={[mh]:i.ZERO,[Ih]:i.ONE,[Eh]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[xh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[za]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[Sh]:i.CONSTANT_COLOR,[bh]:i.ONE_MINUS_CONSTANT_COLOR,[wh]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function M(D,ct,H,X,At,ht,Yt,oe,Ue,Wt){if(D===Jn){g===!0&&($(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),D!==uh){if(D!==m||Wt!==T){if((f!==Ai||E!==Ai)&&(i.blendEquation(i.FUNC_ADD),f=Ai,E=Ai),Wt)switch(D){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mA:i.blendFunc(i.ONE,i.ONE);break;case IA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case EA:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mA:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case IA:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case EA:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,_=null,v=null,Q=null,b.set(0,0,0),S=0,m=D,T=Wt}return}At=At||ct,ht=ht||H,Yt=Yt||X,(ct!==f||At!==E)&&(i.blendEquationSeparate(Pt[ct],Pt[At]),f=ct,E=At),(H!==d||X!==_||ht!==v||Yt!==Q)&&(i.blendFuncSeparate(Rt[H],Rt[X],Rt[ht],Rt[Yt]),d=H,_=X,v=ht,Q=Yt),(oe.equals(b)===!1||Ue!==S)&&(i.blendColor(oe.r,oe.g,oe.b,Ue),b.copy(oe),S=Ue),m=D,T=!1}function xe(D,ct){D.side===dn?$(i.CULL_FACE):ot(i.CULL_FACE);let H=D.side===Ne;ct&&(H=!H),Ut(H),D.blending===Oi&&D.transparent===!1?M(Jn):M(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const X=D.stencilWrite;a.setTest(X),X&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){Y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),Y=D)}function kt(D){D!==ch?(ot(i.CULL_FACE),D!==I&&(D===gA?i.cullFace(i.BACK):D===hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),I=D}function _t(D){D!==x&&(J&&i.lineWidth(D),x=D)}function Vt(D,ct,H){D?(ot(i.POLYGON_OFFSET_FILL),(N!==ct||P!==H)&&(i.polygonOffset(ct,H),N=ct,P=H)):$(i.POLYGON_OFFSET_FILL)}function Ct(D){D?ot(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function B(D){D===void 0&&(D=i.TEXTURE0+z-1),O!==D&&(i.activeTexture(D),O=D)}function C(D,ct,H){H===void 0&&(O===null?H=i.TEXTURE0+z-1:H=O);let X=nt[H];X===void 0&&(X={type:void 0,texture:void 0},nt[H]=X),(X.type!==D||X.texture!==ct)&&(O!==H&&(i.activeTexture(H),O=H),i.bindTexture(D,ct||j[D]),X.type=D,X.texture=ct)}function F(){const D=nt[O];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function wt(D){Dt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Dt.copy(D))}function ft(D){Mt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Mt.copy(D))}function Ot(D,ct){let H=l.get(ct);H===void 0&&(H=new WeakMap,l.set(ct,H));let X=H.get(D);X===void 0&&(X=i.getUniformBlockIndex(ct,D.name),H.set(D,X))}function Lt(D,ct){const X=l.get(ct).get(D);o.get(ct)!==X&&(i.uniformBlockBinding(ct,X,D.__bindingPointIndex),o.set(ct,X))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),A={},O=null,nt={},c={},h=new WeakMap,u=[],p=null,g=!1,m=null,f=null,d=null,_=null,E=null,v=null,Q=null,b=new Tt(0,0,0),S=0,T=!1,Y=null,I=null,x=null,N=null,P=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ot,disable:$,bindFramebuffer:yt,drawBuffers:mt,useProgram:Qt,setBlending:M,setMaterial:xe,setFlipSided:Ut,setCullFace:kt,setLineWidth:_t,setPolygonOffset:Vt,setScissorTest:Ct,activeTexture:B,bindTexture:C,unbindTexture:F,compressedTexImage2D:W,compressedTexImage3D:Z,texImage2D:dt,texImage3D:bt,updateUBOMapping:Ot,uniformBlockBinding:Lt,texStorage2D:zt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:It,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:wt,viewport:ft,reset:te}}function ol(i,t,e,n){const s=$g(n);switch(e){case Vl:return i*t;case Wl:return i*t;case Jl:return i*t*2;case Xl:return i*t/s.components*s.byteLength;case Ho:return i*t/s.components*s.byteLength;case Kl:return i*t*2/s.components*s.byteLength;case wr:return i*t*2/s.components*s.byteLength;case ql:return i*t*3/s.components*s.byteLength;case _e:return i*t*4/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case ir:case sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case $a:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case or:case xo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jl:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $g(i){switch(i){case Oe:case Ol:return{byteLength:1,components:1};case Is:case Hl:case ys:return{byteLength:2,components:1};case zo:case Oo:return{byteLength:2,components:4};case Ge:case Go:case wn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),A=new vt,c=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(B,C){return p?new OffscreenCanvas(B,C):Er("canvas")}function m(B,C,F){let W=1;const Z=Ct(B);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const q=Math.floor(W*Z.width),It=Math.floor(W*Z.height);h===void 0&&(h=g(q,It));const at=C?g(q,It):h;return at.width=q,at.height=It,at.getContext("2d").drawImage(B,0,0,q,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+It+")."),at}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),B;return B}function f(B){return B.generateMipmaps&&B.minFilter!==Ie&&B.minFilter!==on}function d(B){i.generateMipmap(B)}function _(B,C,F,W,Z=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let q=C;if(C===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),C===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),C===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),C===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),C===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),C===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),C===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),C===i.RGBA){const It=Z?fr:Kt.getTransfer(W);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=It===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function E(B,C){let F;return B?C===null||C===Ge||C===Ki?F=i.DEPTH24_STENCIL8:C===wn?F=i.DEPTH32F_STENCIL8:C===Is&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ge||C===Ki?F=i.DEPTH_COMPONENT24:C===wn?F=i.DEPTH_COMPONENT32F:C===Is&&(F=i.DEPTH_COMPONENT16),F}function v(B,C){return f(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ie&&B.minFilter!==on?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function Q(B){const C=B.target;C.removeEventListener("dispose",Q),S(C),C.isVideoTexture&&c.delete(C)}function b(B){const C=B.target;C.removeEventListener("dispose",b),Y(C)}function S(B){const C=n.get(B);if(C.__webglInit===void 0)return;const F=B.source,W=u.get(F);if(W){const Z=W[C.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(B),Object.keys(W).length===0&&u.delete(F)}n.remove(B)}function T(B){const C=n.get(B);i.deleteTexture(C.__webglTexture);const F=B.source,W=u.get(F);delete W[C.__cacheKey],a.memory.textures--}function Y(B){const C=n.get(B);if(B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(C.__webglFramebuffer[W]))for(let Z=0;Z<C.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(C.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(C.__webglFramebuffer[W]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[W])}else{if(Array.isArray(C.__webglFramebuffer))for(let W=0;W<C.__webglFramebuffer.length;W++)i.deleteFramebuffer(C.__webglFramebuffer[W]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let W=0;W<C.__webglColorRenderbuffer.length;W++)C.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[W]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const F=B.textures;for(let W=0,Z=F.length;W<Z;W++){const q=n.get(F[W]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(B)}let I=0;function x(){I=0}function N(){const B=I;return B>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),I+=1,B}function P(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function z(B,C){const F=n.get(B);if(B.isVideoTexture&&_t(B),B.isRenderTargetTexture===!1&&B.version>0&&F.__version!==B.version){const W=B.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(F,B,C);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+C)}function J(B,C){const F=n.get(B);if(B.version>0&&F.__version!==B.version){Mt(F,B,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+C)}function U(B,C){const F=n.get(B);if(B.version>0&&F.__version!==B.version){Mt(F,B,C);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+C)}function K(B,C){const F=n.get(B);if(B.version>0&&F.__version!==B.version){V(F,B,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+C)}const O={[ja]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},nt={[Ie]:i.NEAREST,[kh]:i.NEAREST_MIPMAP_NEAREST,[ws]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},it={[Yh]:i.NEVER,[Kh]:i.ALWAYS,[Vh]:i.LESS,[$l]:i.LEQUAL,[qh]:i.EQUAL,[Xh]:i.GEQUAL,[Wh]:i.GREATER,[Jh]:i.NOTEQUAL};function rt(B,C){if(C.type===wn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===on||C.magFilter===Wr||C.magFilter===ws||C.magFilter===ui||C.minFilter===on||C.minFilter===Wr||C.minFilter===ws||C.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,O[C.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,O[C.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,O[C.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,nt[C.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,nt[C.minFilter]),C.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ie||C.minFilter!==ws&&C.minFilter!==ui||C.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Dt(B,C){let F=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",Q));const W=C.source;let Z=u.get(W);Z===void 0&&(Z={},u.set(W,Z));const q=P(C);if(q!==B.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[q].usedTimes++;const It=Z[B.__cacheKey];It!==void 0&&(Z[B.__cacheKey].usedTimes--,It.usedTimes===0&&T(C)),B.__cacheKey=q,B.__webglTexture=Z[q].texture}return F}function Mt(B,C,F){let W=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(W=i.TEXTURE_3D);const Z=Dt(B,C),q=C.source;e.bindTexture(W,B.__webglTexture,i.TEXTURE0+F);const It=n.get(q);if(q.version!==It.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const at=Kt.getPrimaries(Kt.workingColorSpace),ut=C.colorSpace===Wn?null:Kt.getPrimaries(C.colorSpace),zt=C.colorSpace===Wn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let tt=m(C.image,!1,s.maxTextureSize);tt=Vt(C,tt);const dt=r.convert(C.format,C.colorSpace),bt=r.convert(C.type);let wt=_(C.internalFormat,dt,bt,C.colorSpace,C.isVideoTexture);rt(W,C);let ft;const Ot=C.mipmaps,Lt=C.isVideoTexture!==!0,te=It.__version===void 0||Z===!0,D=q.dataReady,ct=v(C,tt);if(C.isDepthTexture)wt=E(C.format===ji,C.type),te&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,wt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,wt,tt.width,tt.height,0,dt,bt,null));else if(C.isDataTexture)if(Ot.length>0){Lt&&te&&e.texStorage2D(i.TEXTURE_2D,ct,wt,Ot[0].width,Ot[0].height);for(let H=0,X=Ot.length;H<X;H++)ft=Ot[H],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,bt,ft.data):e.texImage2D(i.TEXTURE_2D,H,wt,ft.width,ft.height,0,dt,bt,ft.data);C.generateMipmaps=!1}else Lt?(te&&e.texStorage2D(i.TEXTURE_2D,ct,wt,tt.width,tt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,bt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,wt,tt.width,tt.height,0,dt,bt,tt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Lt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,wt,Ot[0].width,Ot[0].height,tt.depth);for(let H=0,X=Ot.length;H<X;H++)if(ft=Ot[H],C.format!==_e)if(dt!==null)if(Lt){if(D)if(C.layerUpdates.size>0){const At=ol(ft.width,ft.height,C.format,C.type);for(const ht of C.layerUpdates){const Yt=ft.data.subarray(ht*At/ft.data.BYTES_PER_ELEMENT,(ht+1)*At/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,ht,ft.width,ft.height,1,dt,Yt,0,0)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ft.width,ft.height,tt.depth,dt,ft.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,wt,ft.width,ft.height,tt.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,ft.width,ft.height,tt.depth,dt,bt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,wt,ft.width,ft.height,tt.depth,0,dt,bt,ft.data)}else{Lt&&te&&e.texStorage2D(i.TEXTURE_2D,ct,wt,Ot[0].width,Ot[0].height);for(let H=0,X=Ot.length;H<X;H++)ft=Ot[H],C.format!==_e?dt!==null?Lt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,H,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ft.width,ft.height,dt,bt,ft.data):e.texImage2D(i.TEXTURE_2D,H,wt,ft.width,ft.height,0,dt,bt,ft.data)}else if(C.isDataArrayTexture)if(Lt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,wt,tt.width,tt.height,tt.depth),D)if(C.layerUpdates.size>0){const H=ol(tt.width,tt.height,C.format,C.type);for(const X of C.layerUpdates){const At=tt.data.subarray(X*H/tt.data.BYTES_PER_ELEMENT,(X+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,tt.width,tt.height,1,dt,bt,At)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,bt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,dt,bt,tt.data);else if(C.isData3DTexture)Lt?(te&&e.texStorage3D(i.TEXTURE_3D,ct,wt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,bt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,dt,bt,tt.data);else if(C.isFramebufferTexture){if(te)if(Lt)e.texStorage2D(i.TEXTURE_2D,ct,wt,tt.width,tt.height);else{let H=tt.width,X=tt.height;for(let At=0;At<ct;At++)e.texImage2D(i.TEXTURE_2D,At,wt,H,X,0,dt,bt,null),H>>=1,X>>=1}}else if(Ot.length>0){if(Lt&&te){const H=Ct(Ot[0]);e.texStorage2D(i.TEXTURE_2D,ct,wt,H.width,H.height)}for(let H=0,X=Ot.length;H<X;H++)ft=Ot[H],Lt?D&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,dt,bt,ft):e.texImage2D(i.TEXTURE_2D,H,wt,dt,bt,ft);C.generateMipmaps=!1}else if(Lt){if(te){const H=Ct(tt);e.texStorage2D(i.TEXTURE_2D,ct,wt,H.width,H.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,bt,tt)}else e.texImage2D(i.TEXTURE_2D,0,wt,dt,bt,tt);f(C)&&d(W),It.__version=q.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function V(B,C,F){if(C.image.length!==6)return;const W=Dt(B,C),Z=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+F);const q=n.get(Z);if(Z.version!==q.__version||W===!0){e.activeTexture(i.TEXTURE0+F);const It=Kt.getPrimaries(Kt.workingColorSpace),at=C.colorSpace===Wn?null:Kt.getPrimaries(C.colorSpace),ut=C.colorSpace===Wn||It===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const zt=C.isCompressedTexture||C.image[0].isCompressedTexture,tt=C.image[0]&&C.image[0].isDataTexture,dt=[];for(let X=0;X<6;X++)!zt&&!tt?dt[X]=m(C.image[X],!0,s.maxCubemapSize):dt[X]=tt?C.image[X].image:C.image[X],dt[X]=Vt(C,dt[X]);const bt=dt[0],wt=r.convert(C.format,C.colorSpace),ft=r.convert(C.type),Ot=_(C.internalFormat,wt,ft,C.colorSpace),Lt=C.isVideoTexture!==!0,te=q.__version===void 0||W===!0,D=Z.dataReady;let ct=v(C,bt);rt(i.TEXTURE_CUBE_MAP,C);let H;if(zt){Lt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,bt.width,bt.height);for(let X=0;X<6;X++){H=dt[X].mipmaps;for(let At=0;At<H.length;At++){const ht=H[At];C.format!==_e?wt!==null?Lt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At,0,0,ht.width,ht.height,wt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At,Ot,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At,0,0,ht.width,ht.height,wt,ft,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At,Ot,ht.width,ht.height,0,wt,ft,ht.data)}}}else{if(H=C.mipmaps,Lt&&te){H.length>0&&ct++;const X=Ct(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Ot,X.width,X.height)}for(let X=0;X<6;X++)if(tt){Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,dt[X].width,dt[X].height,wt,ft,dt[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ot,dt[X].width,dt[X].height,0,wt,ft,dt[X].data);for(let At=0;At<H.length;At++){const Yt=H[At].image[X].image;Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At+1,0,0,Yt.width,Yt.height,wt,ft,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At+1,Ot,Yt.width,Yt.height,0,wt,ft,Yt.data)}}else{Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,wt,ft,dt[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ot,wt,ft,dt[X]);for(let At=0;At<H.length;At++){const ht=H[At];Lt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At+1,0,0,wt,ft,ht.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,At+1,Ot,wt,ft,ht.image[X])}}}f(C)&&d(i.TEXTURE_CUBE_MAP),q.__version=Z.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function j(B,C,F,W,Z,q){const It=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ut=_(F.internalFormat,It,at,F.colorSpace);if(!n.get(C).__hasExternalTextures){const tt=Math.max(1,C.width>>q),dt=Math.max(1,C.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,q,ut,tt,dt,C.depth,0,It,at,null):e.texImage2D(Z,q,ut,tt,dt,0,It,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),kt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,n.get(F).__webglTexture,0,Ut(C)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,n.get(F).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(B,C,F){if(i.bindRenderbuffer(i.RENDERBUFFER,B),C.depthBuffer){const W=C.depthTexture,Z=W&&W.isDepthTexture?W.type:null,q=E(C.stencilBuffer,Z),It=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Ut(C);kt(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,q,C.width,C.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,q,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,q,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,B)}else{const W=C.textures;for(let Z=0;Z<W.length;Z++){const q=W[Z],It=r.convert(q.format,q.colorSpace),at=r.convert(q.type),ut=_(q.internalFormat,It,at,q.colorSpace),zt=Ut(C);F&&kt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,ut,C.width,C.height):kt(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt,ut,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,ut,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(B,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const W=n.get(C.depthTexture).__webglTexture,Z=Ut(C);if(C.depthTexture.format===Hi)kt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,W,0);else if(C.depthTexture.format===ji)kt(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function yt(B){const C=n.get(B),F=B.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==B.depthTexture){const W=B.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),W){const Z=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),C.__depthDisposeCallback=Z}C.__boundDepthTexture=W}if(B.depthTexture&&!C.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");$(C.__webglFramebuffer,B)}else if(F){C.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[W]),C.__webglDepthbuffer[W]===void 0)C.__webglDepthbuffer[W]=i.createRenderbuffer(),ot(C.__webglDepthbuffer[W],B,!1);else{const Z=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=C.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ot(C.__webglDepthbuffer,B,!1);else{const W=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(B,C,F){const W=n.get(B);C!==void 0&&j(W.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&yt(B)}function Qt(B){const C=B.texture,F=n.get(B),W=n.get(C);B.addEventListener("dispose",b);const Z=B.textures,q=B.isWebGLCubeRenderTarget===!0,It=Z.length>1;if(It||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=C.version,a.memory.textures++),q){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<C.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<C.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(It)for(let at=0,ut=Z.length;at<ut;at++){const zt=n.get(Z[at]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),a.memory.textures++)}if(B.samples>0&&kt(B)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ut=Z[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const zt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),dt=_(ut.internalFormat,zt,tt,ut.colorSpace,B.isXRRenderTarget===!0),bt=Ut(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,dt,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),rt(i.TEXTURE_CUBE_MAP,C);for(let at=0;at<6;at++)if(C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)j(F.__webglFramebuffer[at][ut],B,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else j(F.__webglFramebuffer[at],B,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);f(C)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let at=0,ut=Z.length;at<ut;at++){const zt=Z[at],tt=n.get(zt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),rt(i.TEXTURE_2D,zt),j(F.__webglFramebuffer,B,zt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),f(zt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(at=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,W.__webglTexture),rt(at,C),C.mipmaps&&C.mipmaps.length>0)for(let ut=0;ut<C.mipmaps.length;ut++)j(F.__webglFramebuffer[ut],B,C,i.COLOR_ATTACHMENT0,at,ut);else j(F.__webglFramebuffer,B,C,i.COLOR_ATTACHMENT0,at,0);f(C)&&d(at),e.unbindTexture()}B.depthBuffer&&yt(B)}function Pt(B){const C=B.textures;for(let F=0,W=C.length;F<W;F++){const Z=C[F];if(f(Z)){const q=B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,It=n.get(Z).__webglTexture;e.bindTexture(q,It),d(q),e.unbindTexture()}}}const Rt=[],M=[];function xe(B){if(B.samples>0){if(kt(B)===!1){const C=B.textures,F=B.width,W=B.height;let Z=i.COLOR_BUFFER_BIT;const q=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(B),at=C.length>1;if(at)for(let ut=0;ut<C.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let ut=0;ut<C.length;ut++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[ut]);const zt=n.get(C[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,Z,i.NEAREST),l===!0&&(Rt.length=0,M.length=0,Rt.push(i.COLOR_ATTACHMENT0+ut),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Rt.push(q),M.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,M)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<C.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,It.__webglColorRenderbuffer[ut]);const zt=n.get(C[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&l){const C=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Ut(B){return Math.min(s.maxSamples,B.samples)}function kt(B){const C=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function _t(B){const C=a.render.frame;c.get(B)!==C&&(c.set(B,C),B.update())}function Vt(B,C){const F=B.colorSpace,W=B.format,Z=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||F!==Zn&&F!==Wn&&(Kt.getTransfer(F)===ne?(W!==_e||Z!==Oe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),C}function Ct(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(A.width=B.naturalWidth||B.width,A.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(A.width=B.displayWidth,A.height=B.displayHeight):(A.width=B.width,A.height=B.height),A}this.allocateTextureUnit=N,this.resetTextureUnits=x,this.setTexture2D=z,this.setTexture2DArray=J,this.setTexture3D=U,this.setTextureCube=K,this.rebindTextures=mt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=j,this.useMultisampledRTT=kt}function em(i,t){function e(n,s=Wn){let r;const a=Kt.getTransfer(s);if(n===Oe)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===Ge)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===ys)return i.HALF_FLOAT;if(n===Vl)return i.ALPHA;if(n===ql)return i.RGB;if(n===_e)return i.RGBA;if(n===Wl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===ji)return i.DEPTH_STENCIL;if(n===Xl)return i.RED;if(n===Ho)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===wr)return i.RG_INTEGER;if(n===Tn)return i.RGBA_INTEGER;if(n===ir||n===sr||n===rr||n===ar)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ao||n===oo||n===Ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===go||n===mo||n===Io||n===Eo||n===Co)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ao)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===or||n===xo||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===or)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===_o||n===vo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class nm extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class cs extends le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const im={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,A=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(A&&t.hand){a=!0;for(const m of t.hand.values()){const f=e.getJointPose(m,n),d=this._getHandJoint(A,m);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}const c=A.joints["index-finger-tip"],h=A.joints["thumb-tip"],u=c.position.distanceTo(h.position),p=.02,g=.005;A.inputState.pinching&&u>p+g?(A.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!A.inputState.pinching&&u<=p-g&&(A.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(im)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),A!==null&&(A.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Me,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new cn({vertexShader:sm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class om extends Ii{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,A=null,c=null,h=null,u=null,p=null,g=null;const m=new am,f=e.getContextAttributes();let d=null,_=null;const E=[],v=[],Q=new vt;let b=null;const S=new Le;S.layers.enable(1),S.viewport=new Gt;const T=new Le;T.layers.enable(2),T.viewport=new Gt;const Y=[S,T],I=new nm;I.layers.enable(1),I.layers.enable(2);let x=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=E[V];return j===void 0&&(j=new ya,E[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=E[V];return j===void 0&&(j=new ya,E[V]=j),j.getGripSpace()},this.getHand=function(V){let j=E[V];return j===void 0&&(j=new ya,E[V]=j),j.getHandSpace()};function P(V){const j=v.indexOf(V.inputSource);if(j===-1)return;const ot=E[j];ot!==void 0&&(ot.update(V.inputSource,V.frame,A||a),ot.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",J);for(let V=0;V<E.length;V++){const j=v[V];j!==null&&(v[V]=null,E[V].disconnect(j))}x=null,N=null,m.reset(),t.setRenderTarget(d),p=null,u=null,h=null,s=null,_=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(Q.width,Q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||a},this.setReferenceSpace=function(V){A=V},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",z),s.addEventListener("inputsourceschange",J),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(Q),s.renderState.layers===void 0){const j={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,j),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new gn(p.framebufferWidth,p.framebufferHeight,{format:_e,type:Oe,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let j=null,ot=null,$=null;f.depth&&($=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=f.stencil?ji:Hi,ot=f.stencil?Ki:Ge);const yt={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:r};h=new XRWebGLBinding(s,e),u=h.createProjectionLayer(yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new gn(u.textureWidth,u.textureHeight,{format:_e,type:Oe,depthTexture:new dc(u.textureWidth,u.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),A=null,a=await s.requestReferenceSpace(o),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(V){for(let j=0;j<V.removed.length;j++){const ot=V.removed[j],$=v.indexOf(ot);$>=0&&(v[$]=null,E[$].disconnect(ot))}for(let j=0;j<V.added.length;j++){const ot=V.added[j];let $=v.indexOf(ot);if($===-1){for(let mt=0;mt<E.length;mt++)if(mt>=v.length){v.push(ot),$=mt;break}else if(v[mt]===null){v[mt]=ot,$=mt;break}if($===-1)break}const yt=E[$];yt&&yt.connect(ot)}}const U=new w,K=new w;function O(V,j,ot){U.setFromMatrixPosition(j.matrixWorld),K.setFromMatrixPosition(ot.matrixWorld);const $=U.distanceTo(K),yt=j.projectionMatrix.elements,mt=ot.projectionMatrix.elements,Qt=yt[14]/(yt[10]-1),Pt=yt[14]/(yt[10]+1),Rt=(yt[9]+1)/yt[5],M=(yt[9]-1)/yt[5],xe=(yt[8]-1)/yt[0],Ut=(mt[8]+1)/mt[0],kt=Qt*xe,_t=Qt*Ut,Vt=$/(-xe+Ut),Ct=Vt*-xe;if(j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ct),V.translateZ(Vt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),yt[10]===-1)V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const B=Qt+Vt,C=Pt+Vt,F=kt-Ct,W=_t+($-Ct),Z=Rt*Pt/C*B,q=M*Pt/C*B;V.projectionMatrix.makePerspective(F,W,Z,q,B,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function nt(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let j=V.near,ot=V.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),I.near=T.near=S.near=j,I.far=T.far=S.far=ot,(x!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),x=I.near,N=I.far);const $=V.parent,yt=I.cameras;nt(I,$);for(let mt=0;mt<yt.length;mt++)nt(yt[mt],$);yt.length===2?O(I,S,T):I.projectionMatrix.copy(S.projectionMatrix),it(V,I,$)};function it(V,j,ot){ot===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(ot.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=So*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)};let rt=null;function Dt(V,j){if(c=j.getViewerPose(A||a),g=j,c!==null){const ot=c.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let $=!1;ot.length!==I.cameras.length&&(I.cameras.length=0,$=!0);for(let mt=0;mt<ot.length;mt++){const Qt=ot[mt];let Pt=null;if(p!==null)Pt=p.getViewport(Qt);else{const M=h.getViewSubImage(u,Qt);Pt=M.viewport,mt===0&&(t.setRenderTargetTextures(_,M.colorTexture,u.ignoreDepthValues?void 0:M.depthStencilTexture),t.setRenderTarget(_))}let Rt=Y[mt];Rt===void 0&&(Rt=new Le,Rt.layers.enable(mt),Rt.viewport=new Gt,Y[mt]=Rt),Rt.matrix.fromArray(Qt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Qt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(I.matrix.copy(Rt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),$===!0&&I.cameras.push(Rt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const mt=h.getDepthInformation(ot[0]);mt&&mt.isValid&&mt.texture&&m.init(t,mt,s.renderState)}}for(let ot=0;ot<E.length;ot++){const $=v[ot],yt=E[ot];$!==null&&yt!==void 0&&yt.update($,j,A||a)}rt&&rt(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Mt=new uc;Mt.setAnimationLoop(Dt),this.setAnimationLoop=function(V){rt=V},this.dispose=function(){}}}const ri=new mn,Am=new Ht;function lm(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,oc(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,_,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),h(f,d)):d.isMeshPhongMaterial?(r(f,d),c(f,d)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&p(f,d,v)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),m(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,_,E):d.isSpriteMaterial?A(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===Ne&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===Ne&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const _=t.get(d),E=_.envMap,v=_.envMapRotation;E&&(f.envMap.value=E,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),f.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(ri)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,_,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*_,f.scale.value=E*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function A(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function h(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,_){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function m(f,d){const _=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(_.matrixWorld),f.nearDistance.value=_.shadow.camera.near,f.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){const v=E.program;n.uniformBlockBinding(_,v)}function A(_,E){let v=s[_.id];v===void 0&&(g(_),v=c(_),s[_.id]=v,_.addEventListener("dispose",f));const Q=E.program;n.updateUBOMapping(_,Q);const b=t.render.frame;r[_.id]!==b&&(u(_),r[_.id]=b)}function c(_){const E=h();_.__bindingPointIndex=E;const v=i.createBuffer(),Q=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,Q,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function h(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const E=s[_.id],v=_.uniforms,Q=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,S=v.length;b<S;b++){const T=Array.isArray(v[b])?v[b]:[v[b]];for(let Y=0,I=T.length;Y<I;Y++){const x=T[Y];if(p(x,b,Y,Q)===!0){const N=x.__offset,P=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let J=0;J<P.length;J++){const U=P[J],K=m(U);typeof U=="number"||typeof U=="boolean"?(x.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,N+z,x.__data)):U.isMatrix3?(x.__data[0]=U.elements[0],x.__data[1]=U.elements[1],x.__data[2]=U.elements[2],x.__data[3]=0,x.__data[4]=U.elements[3],x.__data[5]=U.elements[4],x.__data[6]=U.elements[5],x.__data[7]=0,x.__data[8]=U.elements[6],x.__data[9]=U.elements[7],x.__data[10]=U.elements[8],x.__data[11]=0):(U.toArray(x.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,x.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,E,v,Q){const b=_.value,S=E+"_"+v;if(Q[S]===void 0)return typeof b=="number"||typeof b=="boolean"?Q[S]=b:Q[S]=b.clone(),!0;{const T=Q[S];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return Q[S]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(_){const E=_.uniforms;let v=0;const Q=16;for(let S=0,T=E.length;S<T;S++){const Y=Array.isArray(E[S])?E[S]:[E[S]];for(let I=0,x=Y.length;I<x;I++){const N=Y[I],P=Array.isArray(N.value)?N.value:[N.value];for(let z=0,J=P.length;z<J;z++){const U=P[z],K=m(U),O=v%Q,nt=O%K.boundary,it=O+nt;v+=nt,it!==0&&Q-it<K.storage&&(v+=Q-it),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=K.storage}}}const b=v%Q;return b>0&&(v+=Q-b),_.__size=v,_.__cache={},this}function m(_){const E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),E}function f(_){const E=_.target;E.removeEventListener("dispose",f);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:A,dispose:d}}class hm{constructor(t={}){const{canvas:e=tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:A=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const d=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Xn,this.toneMappingExposure=1;const E=this;let v=!1,Q=0,b=0,S=null,T=-1,Y=null;const I=new Gt,x=new Gt;let N=null;const P=new Tt(0);let z=0,J=e.width,U=e.height,K=1,O=null,nt=null;const it=new Gt(0,0,J,U),rt=new Gt(0,0,J,U);let Dt=!1;const Mt=new Wo;let V=!1,j=!1;const ot=new Ht,$=new Ht,yt=new w,mt=new Gt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Rt(){return S===null?K:1}let M=n;function xe(y,R){return e.getContext(y,R)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:A,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ko}`),e.addEventListener("webglcontextlost",X,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",ht,!1),M===null){const R="webgl2";if(M=xe(R,y),M===null)throw xe(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ut,kt,_t,Vt,Ct,B,C,F,W,Z,q,It,at,ut,zt,tt,dt,bt,wt,ft,Ot,Lt,te,D;function ct(){Ut=new gp(M),Ut.init(),Lt=new em(M,Ut),kt=new cp(M,Ut,t,Lt),_t=new Zg(M),kt.reverseDepthBuffer&&_t.buffers.depth.setReversed(!0),Vt=new Ep(M),Ct=new Fg,B=new tm(M,Ut,_t,Ct,kt,Lt,Vt),C=new up(E),F=new pp(E),W=new Bu(M),te=new Ap(M,W),Z=new mp(M,W,Vt,te),q=new xp(M,Z,W,Vt),wt=new Cp(M,kt,B),tt=new hp(Ct),It=new Ug(E,C,F,Ut,kt,te,tt),at=new lm(E,Ct),ut=new kg,zt=new Vg(Ut),bt=new op(E,C,F,_t,q,u,l),dt=new Kg(E,q,kt),D=new cm(M,Vt,kt,_t),ft=new lp(M,Ut,Vt),Ot=new Ip(M,Ut,Vt),Vt.programs=It.programs,E.capabilities=kt,E.extensions=Ut,E.properties=Ct,E.renderLists=ut,E.shadowMap=dt,E.state=_t,E.info=Vt}ct();const H=new om(E,M);this.xr=H,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const y=Ut.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ut.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(J,U,!1))},this.getSize=function(y){return y.set(J,U)},this.setSize=function(y,R,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,U=R,e.width=Math.floor(y*K),e.height=Math.floor(R*K),k===!0&&(e.style.width=y+"px",e.style.height=R+"px"),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(J*K,U*K).floor()},this.setDrawingBufferSize=function(y,R,k){J=y,U=R,K=k,e.width=Math.floor(y*k),e.height=Math.floor(R*k),this.setViewport(0,0,y,R)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(it)},this.setViewport=function(y,R,k,G){y.isVector4?it.set(y.x,y.y,y.z,y.w):it.set(y,R,k,G),_t.viewport(I.copy(it).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(rt)},this.setScissor=function(y,R,k,G){y.isVector4?rt.set(y.x,y.y,y.z,y.w):rt.set(y,R,k,G),_t.scissor(x.copy(rt).multiplyScalar(K).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(y){_t.setScissorTest(Dt=y)},this.setOpaqueSort=function(y){O=y},this.setTransparentSort=function(y){nt=y},this.getClearColor=function(y){return y.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(y=!0,R=!0,k=!0){let G=0;if(y){let L=!1;if(S!==null){const et=S.texture.format;L=et===Tn||et===wr||et===Ho}if(L){const et=S.texture.type,lt=et===Oe||et===Ge||et===Is||et===Ki||et===zo||et===Oo,pt=bt.getClearColor(),gt=bt.getClearAlpha(),Bt=pt.r,St=pt.g,Et=pt.b;lt?(p[0]=Bt,p[1]=St,p[2]=Et,p[3]=gt,M.clearBufferuiv(M.COLOR,0,p)):(g[0]=Bt,g[1]=St,g[2]=Et,g[3]=gt,M.clearBufferiv(M.COLOR,0,g))}else G|=M.COLOR_BUFFER_BIT}R&&(G|=M.DEPTH_BUFFER_BIT,M.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(G|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",X,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),ut.dispose(),zt.dispose(),Ct.dispose(),C.dispose(),F.dispose(),q.dispose(),te.dispose(),D.dispose(),It.dispose(),H.dispose(),H.removeEventListener("sessionstart",AA),H.removeEventListener("sessionend",lA),$n.stop()};function X(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const y=Vt.autoReset,R=dt.enabled,k=dt.autoUpdate,G=dt.needsUpdate,L=dt.type;ct(),Vt.autoReset=y,dt.enabled=R,dt.autoUpdate=k,dt.needsUpdate=G,dt.type=L}function ht(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Yt(y){const R=y.target;R.removeEventListener("dispose",Yt),oe(R)}function oe(y){Ue(y),Ct.remove(y)}function Ue(y){const R=Ct.get(y).programs;R!==void 0&&(R.forEach(function(k){It.releaseProgram(k)}),y.isShaderMaterial&&It.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,k,G,L,et){R===null&&(R=Qt);const lt=L.isMesh&&L.matrixWorld.determinant()<0,pt=ah(y,R,k,G,L);_t.setMaterial(G,lt);let gt=k.index,Bt=1;if(G.wireframe===!0){if(gt=Z.getWireframeAttribute(k),gt===void 0)return;Bt=2}const St=k.drawRange,Et=k.attributes.position;let jt=St.start*Bt,ee=(St.start+St.count)*Bt;et!==null&&(jt=Math.max(jt,et.start*Bt),ee=Math.min(ee,(et.start+et.count)*Bt)),gt!==null?(jt=Math.max(jt,0),ee=Math.min(ee,gt.count)):Et!=null&&(jt=Math.max(jt,0),ee=Math.min(ee,Et.count));const se=ee-jt;if(se<0||se===1/0)return;te.setup(L,G,pt,k,gt);let Ve,Jt=ft;if(gt!==null&&(Ve=W.get(gt),Jt=Ot,Jt.setIndex(Ve)),L.isMesh)G.wireframe===!0?(_t.setLineWidth(G.wireframeLinewidth*Rt()),Jt.setMode(M.LINES)):Jt.setMode(M.TRIANGLES);else if(L.isLine){let xt=G.linewidth;xt===void 0&&(xt=1),_t.setLineWidth(xt*Rt()),L.isLineSegments?Jt.setMode(M.LINES):L.isLineLoop?Jt.setMode(M.LINE_LOOP):Jt.setMode(M.LINE_STRIP)}else L.isPoints?Jt.setMode(M.POINTS):L.isSprite&&Jt.setMode(M.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)Jt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))Jt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const xt=L._multiDrawStarts,ye=L._multiDrawCounts,Xt=L._multiDrawCount,tn=gt?W.get(gt).bytesPerElement:1,Ei=Ct.get(G).currentProgram.getUniforms();for(let qe=0;qe<Xt;qe++)Ei.setValue(M,"_gl_DrawID",qe),Jt.render(xt[qe]/tn,ye[qe])}else if(L.isInstancedMesh)Jt.renderInstances(jt,se,L.count);else if(k.isInstancedBufferGeometry){const xt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ye=Math.min(k.instanceCount,xt);Jt.renderInstances(jt,se,ye)}else Jt.render(jt,se)};function Wt(y,R,k){y.transparent===!0&&y.side===dn&&y.forceSinglePass===!1?(y.side=Ne,y.needsUpdate=!0,bs(y,R,k),y.side=jn,y.needsUpdate=!0,bs(y,R,k),y.side=dn):bs(y,R,k)}this.compile=function(y,R,k=null){k===null&&(k=y),f=zt.get(k),f.init(R),_.push(f),k.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),y!==k&&y.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(f.pushLight(L),L.castShadow&&f.pushShadow(L))}),f.setupLights();const G=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const et=L.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const pt=et[lt];Wt(pt,k,L),G.add(pt)}else Wt(et,k,L),G.add(et)}),_.pop(),f=null,G},this.compileAsync=function(y,R,k=null){const G=this.compile(y,R,k);return new Promise(L=>{function et(){if(G.forEach(function(lt){Ct.get(lt).currentProgram.isReady()&&G.delete(lt)}),G.size===0){L(y);return}setTimeout(et,10)}Ut.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Fe=null;function Cn(y){Fe&&Fe(y)}function AA(){$n.stop()}function lA(){$n.start()}const $n=new uc;$n.setAnimationLoop(Cn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(y){Fe=y,H.setAnimationLoop(y),y===null?$n.stop():$n.start()},H.addEventListener("sessionstart",AA),H.addEventListener("sessionend",lA),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(R),R=H.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,R,S),f=zt.get(y,_.length),f.init(R),_.push(f),$.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Mt.setFromProjectionMatrix($),j=this.localClippingEnabled,V=tt.init(this.clippingPlanes,j),m=ut.get(y,d.length),m.init(),d.push(m),H.enabled===!0&&H.isPresenting===!0){const et=E.xr.getDepthSensingMesh();et!==null&&Hr(et,R,-1/0,E.sortObjects)}Hr(y,R,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(O,nt),Pt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Pt&&bt.addToRenderList(m,y),this.info.render.frame++,V===!0&&tt.beginShadows();const k=f.state.shadowsArray;dt.render(k,y,R),V===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,L=m.transmissive;if(f.setupLights(),R.isArrayCamera){const et=R.cameras;if(L.length>0)for(let lt=0,pt=et.length;lt<pt;lt++){const gt=et[lt];hA(G,L,y,gt)}Pt&&bt.render(y);for(let lt=0,pt=et.length;lt<pt;lt++){const gt=et[lt];cA(m,y,gt,gt.viewport)}}else L.length>0&&hA(G,L,y,R),Pt&&bt.render(y),cA(m,y,R);S!==null&&(B.updateMultisampleRenderTarget(S),B.updateRenderTargetMipmap(S)),y.isScene===!0&&y.onAfterRender(E,y,R),te.resetDefaultState(),T=-1,Y=null,_.pop(),_.length>0?(f=_[_.length-1],V===!0&&tt.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function Hr(y,R,k,G){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Mt.intersectsSprite(y)){G&&mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4($);const lt=q.update(y),pt=y.material;pt.visible&&m.push(y,lt,pt,k,mt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Mt.intersectsObject(y))){const lt=q.update(y),pt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),mt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),mt.copy(lt.boundingSphere.center)),mt.applyMatrix4(y.matrixWorld).applyMatrix4($)),Array.isArray(pt)){const gt=lt.groups;for(let Bt=0,St=gt.length;Bt<St;Bt++){const Et=gt[Bt],jt=pt[Et.materialIndex];jt&&jt.visible&&m.push(y,lt,jt,k,mt.z,Et)}}else pt.visible&&m.push(y,lt,pt,k,mt.z,null)}}const et=y.children;for(let lt=0,pt=et.length;lt<pt;lt++)Hr(et[lt],R,k,G)}function cA(y,R,k,G){const L=y.opaque,et=y.transmissive,lt=y.transparent;f.setupLightsView(k),V===!0&&tt.setGlobalState(E.clippingPlanes,k),G&&_t.viewport(I.copy(G)),L.length>0&&Ss(L,R,k),et.length>0&&Ss(et,R,k),lt.length>0&&Ss(lt,R,k),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function hA(y,R,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new gn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?ys:Oe,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const et=f.state.transmissionRenderTarget[G.id],lt=G.viewport||I;et.setSize(lt.z,lt.w);const pt=E.getRenderTarget();E.setRenderTarget(et),E.getClearColor(P),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear(),Pt&&bt.render(k);const gt=E.toneMapping;E.toneMapping=Xn;const Bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),V===!0&&tt.setGlobalState(E.clippingPlanes,G),Ss(y,k,G),B.updateMultisampleRenderTarget(et),B.updateRenderTargetMipmap(et),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Et=0,jt=R.length;Et<jt;Et++){const ee=R[Et],se=ee.object,Ve=ee.geometry,Jt=ee.material,xt=ee.group;if(Jt.side===dn&&se.layers.test(G.layers)){const ye=Jt.side;Jt.side=Ne,Jt.needsUpdate=!0,uA(se,k,G,Ve,Jt,xt),Jt.side=ye,Jt.needsUpdate=!0,St=!0}}St===!0&&(B.updateMultisampleRenderTarget(et),B.updateRenderTargetMipmap(et))}E.setRenderTarget(pt),E.setClearColor(P,z),Bt!==void 0&&(G.viewport=Bt),E.toneMapping=gt}function Ss(y,R,k){const G=R.isScene===!0?R.overrideMaterial:null;for(let L=0,et=y.length;L<et;L++){const lt=y[L],pt=lt.object,gt=lt.geometry,Bt=G===null?lt.material:G,St=lt.group;pt.layers.test(k.layers)&&uA(pt,R,k,gt,Bt,St)}}function uA(y,R,k,G,L,et){y.onBeforeRender(E,R,k,G,L,et),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(E,R,k,G,y,et),L.transparent===!0&&L.side===dn&&L.forceSinglePass===!1?(L.side=Ne,L.needsUpdate=!0,E.renderBufferDirect(k,R,G,L,y,et),L.side=jn,L.needsUpdate=!0,E.renderBufferDirect(k,R,G,L,y,et),L.side=dn):E.renderBufferDirect(k,R,G,L,y,et),y.onAfterRender(E,R,k,G,L,et)}function bs(y,R,k){R.isScene!==!0&&(R=Qt);const G=Ct.get(y),L=f.state.lights,et=f.state.shadowsArray,lt=L.state.version,pt=It.getParameters(y,L.state,et,R,k),gt=It.getProgramCacheKey(pt);let Bt=G.programs;G.environment=y.isMeshStandardMaterial?R.environment:null,G.fog=R.fog,G.envMap=(y.isMeshStandardMaterial?F:C).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,Bt===void 0&&(y.addEventListener("dispose",Yt),Bt=new Map,G.programs=Bt);let St=Bt.get(gt);if(St!==void 0){if(G.currentProgram===St&&G.lightsStateVersion===lt)return fA(y,pt),St}else pt.uniforms=It.getUniforms(y),y.onBeforeCompile(pt,E),St=It.acquireProgram(pt,gt),Bt.set(gt,St),G.uniforms=pt.uniforms;const Et=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Et.clippingPlanes=tt.uniform),fA(y,pt),G.needsLights=Ah(y),G.lightsStateVersion=lt,G.needsLights&&(Et.ambientLightColor.value=L.state.ambient,Et.lightProbe.value=L.state.probe,Et.directionalLights.value=L.state.directional,Et.directionalLightShadows.value=L.state.directionalShadow,Et.spotLights.value=L.state.spot,Et.spotLightShadows.value=L.state.spotShadow,Et.rectAreaLights.value=L.state.rectArea,Et.ltc_1.value=L.state.rectAreaLTC1,Et.ltc_2.value=L.state.rectAreaLTC2,Et.pointLights.value=L.state.point,Et.pointLightShadows.value=L.state.pointShadow,Et.hemisphereLights.value=L.state.hemi,Et.directionalShadowMap.value=L.state.directionalShadowMap,Et.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Et.spotShadowMap.value=L.state.spotShadowMap,Et.spotLightMatrix.value=L.state.spotLightMatrix,Et.spotLightMap.value=L.state.spotLightMap,Et.pointShadowMap.value=L.state.pointShadowMap,Et.pointShadowMatrix.value=L.state.pointShadowMatrix),G.currentProgram=St,G.uniformsList=null,St}function dA(y){if(y.uniformsList===null){const R=y.currentProgram.getUniforms();y.uniformsList=cr.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function fA(y,R){const k=Ct.get(y);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function ah(y,R,k,G,L){R.isScene!==!0&&(R=Qt),B.resetTextureUnits();const et=R.fog,lt=G.isMeshStandardMaterial?R.environment:null,pt=S===null?E.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Zn,gt=(G.isMeshStandardMaterial?F:C).get(G.envMap||lt),Bt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,St=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,ee=!!k.morphAttributes.color;let se=Xn;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(se=E.toneMapping);const Ve=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Jt=Ve!==void 0?Ve.length:0,xt=Ct.get(G),ye=f.state.lights;if(V===!0&&(j===!0||y!==Y)){const Ke=y===Y&&G.id===T;tt.setState(G,y,Ke)}let Xt=!1;G.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==ye.state.version||xt.outputColorSpace!==pt||L.isBatchedMesh&&xt.batching===!1||!L.isBatchedMesh&&xt.batching===!0||L.isBatchedMesh&&xt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&xt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&xt.instancing===!1||!L.isInstancedMesh&&xt.instancing===!0||L.isSkinnedMesh&&xt.skinning===!1||!L.isSkinnedMesh&&xt.skinning===!0||L.isInstancedMesh&&xt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&xt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&xt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&xt.instancingMorph===!1&&L.morphTexture!==null||xt.envMap!==gt||G.fog===!0&&xt.fog!==et||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==tt.numPlanes||xt.numIntersection!==tt.numIntersection)||xt.vertexAlphas!==Bt||xt.vertexTangents!==St||xt.morphTargets!==Et||xt.morphNormals!==jt||xt.morphColors!==ee||xt.toneMapping!==se||xt.morphTargetsCount!==Jt)&&(Xt=!0):(Xt=!0,xt.__version=G.version);let tn=xt.currentProgram;Xt===!0&&(tn=bs(G,R,L));let Ei=!1,qe=!1,Yr=!1;const re=tn.getUniforms(),Fn=xt.uniforms;if(_t.useProgram(tn.program)&&(Ei=!0,qe=!0,Yr=!0),G.id!==T&&(T=G.id,qe=!0),Ei||Y!==y){kt.reverseDepthBuffer?(ot.copy(y.projectionMatrix),nu(ot),iu(ot),re.setValue(M,"projectionMatrix",ot)):re.setValue(M,"projectionMatrix",y.projectionMatrix),re.setValue(M,"viewMatrix",y.matrixWorldInverse);const Ke=re.map.cameraPosition;Ke!==void 0&&Ke.setValue(M,yt.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(M,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&re.setValue(M,"isOrthographic",y.isOrthographicCamera===!0),Y!==y&&(Y=y,qe=!0,Yr=!0)}if(L.isSkinnedMesh){re.setOptional(M,L,"bindMatrix"),re.setOptional(M,L,"bindMatrixInverse");const Ke=L.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),re.setValue(M,"boneTexture",Ke.boneTexture,B))}L.isBatchedMesh&&(re.setOptional(M,L,"batchingTexture"),re.setValue(M,"batchingTexture",L._matricesTexture,B),re.setOptional(M,L,"batchingIdTexture"),re.setValue(M,"batchingIdTexture",L._indirectTexture,B),re.setOptional(M,L,"batchingColorTexture"),L._colorsTexture!==null&&re.setValue(M,"batchingColorTexture",L._colorsTexture,B));const Vr=k.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0)&&wt.update(L,k,tn),(qe||xt.receiveShadow!==L.receiveShadow)&&(xt.receiveShadow=L.receiveShadow,re.setValue(M,"receiveShadow",L.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Fn.envMap.value=gt,Fn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&R.environment!==null&&(Fn.envMapIntensity.value=R.environmentIntensity),qe&&(re.setValue(M,"toneMappingExposure",E.toneMappingExposure),xt.needsLights&&oh(Fn,Yr),et&&G.fog===!0&&at.refreshFogUniforms(Fn,et),at.refreshMaterialUniforms(Fn,G,K,U,f.state.transmissionRenderTarget[y.id]),cr.upload(M,dA(xt),Fn,B)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(cr.upload(M,dA(xt),Fn,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&re.setValue(M,"center",L.center),re.setValue(M,"modelViewMatrix",L.modelViewMatrix),re.setValue(M,"normalMatrix",L.normalMatrix),re.setValue(M,"modelMatrix",L.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Ke=G.uniformsGroups;for(let qr=0,lh=Ke.length;qr<lh;qr++){const pA=Ke[qr];D.update(pA,tn),D.bind(pA,tn)}}return tn}function oh(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function Ah(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(y,R,k){Ct.get(y.texture).__webglTexture=R,Ct.get(y.depthTexture).__webglTexture=k;const G=Ct.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||Ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,R){const k=Ct.get(y);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,k=0){S=y,Q=R,b=k;let G=!0,L=null,et=!1,lt=!1;if(y){const gt=Ct.get(y);if(gt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(M.FRAMEBUFFER,null),G=!1;else if(gt.__webglFramebuffer===void 0)B.setupRenderTarget(y);else if(gt.__hasExternalTextures)B.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Et=y.depthTexture;if(gt.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(y.width!==Et.image.width||y.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(y)}}const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(lt=!0);const St=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(St[R])?L=St[R][k]:L=St[R],et=!0):y.samples>0&&B.useMultisampledRTT(y)===!1?L=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(St)?L=St[k]:L=St,I.copy(y.viewport),x.copy(y.scissor),N=y.scissorTest}else I.copy(it).multiplyScalar(K).floor(),x.copy(rt).multiplyScalar(K).floor(),N=Dt;if(_t.bindFramebuffer(M.FRAMEBUFFER,L)&&G&&_t.drawBuffers(y,L),_t.viewport(I),_t.scissor(x),_t.setScissorTest(N),et){const gt=Ct.get(y.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+R,gt.__webglTexture,k)}else if(lt){const gt=Ct.get(y.texture),Bt=R||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,gt.__webglTexture,k||0,Bt)}T=-1},this.readRenderTargetPixels=function(y,R,k,G,L,et,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){_t.bindFramebuffer(M.FRAMEBUFFER,pt);try{const gt=y.texture,Bt=gt.format,St=gt.type;if(!kt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-G&&k>=0&&k<=y.height-L&&M.readPixels(R,k,G,L,Lt.convert(Bt),Lt.convert(St),et)}finally{const gt=S!==null?Ct.get(S).__webglFramebuffer:null;_t.bindFramebuffer(M.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(y,R,k,G,L,et,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const gt=y.texture,Bt=gt.format,St=gt.type;if(!kt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(R>=0&&R<=y.width-G&&k>=0&&k<=y.height-L){_t.bindFramebuffer(M.FRAMEBUFFER,pt);const Et=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Et),M.bufferData(M.PIXEL_PACK_BUFFER,et.byteLength,M.STREAM_READ),M.readPixels(R,k,G,L,Lt.convert(Bt),Lt.convert(St),0);const jt=S!==null?Ct.get(S).__webglFramebuffer:null;_t.bindFramebuffer(M.FRAMEBUFFER,jt);const ee=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await eu(M,ee,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Et),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,et),M.deleteBuffer(Et),M.deleteSync(ee),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,R=null,k=0){y.isTexture!==!0&&(lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),R=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-k),L=Math.floor(y.image.width*G),et=Math.floor(y.image.height*G),lt=R!==null?R.x:0,pt=R!==null?R.y:0;B.setTexture2D(y,0),M.copyTexSubImage2D(M.TEXTURE_2D,k,0,0,lt,pt,L,et),_t.unbindTexture()},this.copyTextureToTexture=function(y,R,k=null,G=null,L=0){y.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],R=arguments[2],L=arguments[3]||0,k=null);let et,lt,pt,gt,Bt,St;k!==null?(et=k.max.x-k.min.x,lt=k.max.y-k.min.y,pt=k.min.x,gt=k.min.y):(et=y.image.width,lt=y.image.height,pt=0,gt=0),G!==null?(Bt=G.x,St=G.y):(Bt=0,St=0);const Et=Lt.convert(R.format),jt=Lt.convert(R.type);B.setTexture2D(R,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,R.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,R.unpackAlignment);const ee=M.getParameter(M.UNPACK_ROW_LENGTH),se=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Ve=M.getParameter(M.UNPACK_SKIP_PIXELS),Jt=M.getParameter(M.UNPACK_SKIP_ROWS),xt=M.getParameter(M.UNPACK_SKIP_IMAGES),ye=y.isCompressedTexture?y.mipmaps[L]:y.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,ye.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ye.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,pt),M.pixelStorei(M.UNPACK_SKIP_ROWS,gt),y.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,L,Bt,St,et,lt,Et,jt,ye.data):y.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,L,Bt,St,ye.width,ye.height,Et,ye.data):M.texSubImage2D(M.TEXTURE_2D,L,Bt,St,et,lt,Et,jt,ye),M.pixelStorei(M.UNPACK_ROW_LENGTH,ee),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,se),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ve),M.pixelStorei(M.UNPACK_SKIP_ROWS,Jt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,xt),L===0&&R.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(y,R,k=null,G=null,L=0){y.isTexture!==!0&&(lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,y=arguments[2],R=arguments[3],L=arguments[4]||0);let et,lt,pt,gt,Bt,St,Et,jt,ee;const se=y.isCompressedTexture?y.mipmaps[L]:y.image;k!==null?(et=k.max.x-k.min.x,lt=k.max.y-k.min.y,pt=k.max.z-k.min.z,gt=k.min.x,Bt=k.min.y,St=k.min.z):(et=se.width,lt=se.height,pt=se.depth,gt=0,Bt=0,St=0),G!==null?(Et=G.x,jt=G.y,ee=G.z):(Et=0,jt=0,ee=0);const Ve=Lt.convert(R.format),Jt=Lt.convert(R.type);let xt;if(R.isData3DTexture)B.setTexture3D(R,0),xt=M.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)B.setTexture2DArray(R,0),xt=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,R.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,R.unpackAlignment);const ye=M.getParameter(M.UNPACK_ROW_LENGTH),Xt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),tn=M.getParameter(M.UNPACK_SKIP_PIXELS),Ei=M.getParameter(M.UNPACK_SKIP_ROWS),qe=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,se.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,se.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,gt),M.pixelStorei(M.UNPACK_SKIP_ROWS,Bt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,St),y.isDataTexture||y.isData3DTexture?M.texSubImage3D(xt,L,Et,jt,ee,et,lt,pt,Ve,Jt,se.data):R.isCompressedArrayTexture?M.compressedTexSubImage3D(xt,L,Et,jt,ee,et,lt,pt,Ve,se.data):M.texSubImage3D(xt,L,Et,jt,ee,et,lt,pt,Ve,Jt,se),M.pixelStorei(M.UNPACK_ROW_LENGTH,ye),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Xt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,tn),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ei),M.pixelStorei(M.UNPACK_SKIP_IMAGES,qe),L===0&&R.generateMipmaps&&M.generateMipmap(xt),_t.unbindTexture()},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&B.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?B.setTextureCube(y,0):y.isData3DTexture?B.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?B.setTexture2DArray(y,0):B.setTexture2D(y,0),_t.unbindTexture()},this.resetState=function(){Q=0,b=0,S=null,_t.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Yo?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Mr?"display-p3":"srgb"}}class um extends le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dm extends Me{constructor(t=null,e=1,n=1,s,r,a,o,l,A=Ie,c=Ie,h,u){super(null,a,o,l,A,c,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fm extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class Ko extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cr=new w,xr=new w,Al=new Ht,os=new Tr,Xs=new Qr,_a=new w,ll=new w;class pm extends le{constructor(t=new He,e=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Cr.fromBufferAttribute(e,s-1),xr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Cr.distanceTo(xr);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Al.copy(s).invert(),os.copy(t.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,A=this.isLineSegments?2:1,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let m=p,f=g-1;m<f;m+=A){const d=c.getX(m),_=c.getX(m+1),E=Ks(this,t,os,l,d,_);E&&e.push(E)}if(this.isLineLoop){const m=c.getX(g-1),f=c.getX(p),d=Ks(this,t,os,l,m,f);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let m=p,f=g-1;m<f;m+=A){const d=Ks(this,t,os,l,m,m+1);d&&e.push(d)}if(this.isLineLoop){const m=Ks(this,t,os,l,g-1,p);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ks(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Cr.fromBufferAttribute(a,s),xr.fromBufferAttribute(a,r),e.distanceSqToSegment(Cr,xr,_a,ll)>n)return;_a.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:ll.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const cl=new w,hl=new w;class Ic extends pm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)cl.fromBufferAttribute(e,s),hl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+cl.distanceTo(hl);t.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yr extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const A=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],u=[],p=[];let g=0;const m=[],f=n/2;let d=0;_(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2));function _(){const v=new w,Q=new w;let b=0;const S=(e-t)/n;for(let T=0;T<=r;T++){const Y=[],I=T/r,x=I*(e-t)+t;for(let N=0;N<=s;N++){const P=N/s,z=P*l+o,J=Math.sin(z),U=Math.cos(z);Q.x=x*J,Q.y=-I*n+f,Q.z=x*U,h.push(Q.x,Q.y,Q.z),v.set(J,S,U).normalize(),u.push(v.x,v.y,v.z),p.push(P,1-I),Y.push(g++)}m.push(Y)}for(let T=0;T<s;T++)for(let Y=0;Y<r;Y++){const I=m[Y][T],x=m[Y+1][T],N=m[Y+1][T+1],P=m[Y][T+1];t>0&&(c.push(I,x,P),b+=3),e>0&&(c.push(x,N,P),b+=3)}A.addGroup(d,b,0),d+=b}function E(v){const Q=g,b=new vt,S=new w;let T=0;const Y=v===!0?t:e,I=v===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,f*I,0),u.push(0,I,0),p.push(.5,.5),g++;const x=g;for(let N=0;N<=s;N++){const z=N/s*l+o,J=Math.cos(z),U=Math.sin(z);S.x=Y*U,S.y=f*I,S.z=Y*J,h.push(S.x,S.y,S.z),u.push(0,I,0),b.x=J*.5+.5,b.y=U*.5*I+.5,p.push(b.x,b.y),g++}for(let N=0;N<s;N++){const P=Q+N,z=x+N;v===!0?c.push(z,z+1,P):c.push(z+1,z,P),T+=3}A.addGroup(d,T,v===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jo extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _r extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ul={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gm{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const A=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return A.push(c,h),this},this.removeHandler=function(c){const h=A.indexOf(c);return h!==-1&&A.splice(h,2),this},this.getHandler=function(c){for(let h=0,u=A.length;h<u;h+=2){const p=A[h],g=A[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const mm=new gm;class Zo{constructor(t){this.manager=t!==void 0?t:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sn={};class Im extends Error{constructor(t,e){super(t),this.response=e}}class Em extends Zo{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ul.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Sn[t]!==void 0){Sn[t].push({onLoad:e,onProgress:n,onError:s});return}Sn[t]=[],Sn[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(A=>{if(A.status===200||A.status===0){if(A.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||A.body===void 0||A.body.getReader===void 0)return A;const c=Sn[t],h=A.body.getReader(),u=A.headers.get("X-File-Size")||A.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let m=0;const f=new ReadableStream({start(d){_();function _(){h.read().then(({done:E,value:v})=>{if(E)d.close();else{m+=v.byteLength;const Q=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let b=0,S=c.length;b<S;b++){const T=c[b];T.onProgress&&T.onProgress(Q)}d.enqueue(v),_()}},E=>{d.error(E)})}}});return new Response(f)}else throw new Im(`fetch for "${A.url}" responded with ${A.status}: ${A.statusText}`,A)}).then(A=>{switch(l){case"arraybuffer":return A.arrayBuffer();case"blob":return A.blob();case"document":return A.text().then(c=>new DOMParser().parseFromString(c,o));case"json":return A.json();default:if(o===void 0)return A.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return A.arrayBuffer().then(g=>p.decode(g))}}}).then(A=>{ul.add(t,A);const c=Sn[t];delete Sn[t];for(let h=0,u=c.length;h<u;h++){const p=c[h];p.onLoad&&p.onLoad(A)}}).catch(A=>{const c=Sn[t];if(c===void 0)throw this.manager.itemError(t),A;delete Sn[t];for(let h=0,u=c.length;h<u;h++){const p=c[h];p.onError&&p.onError(A)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class $o extends le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const va=new Ht,dl=new w,fl=new w;class Ec{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(dl),fl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fl),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pl=new Ht,As=new w,Ba=new w;class Cm extends Ec{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(t.matrixWorld),n.position.copy(As),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-As.x,-As.y,-As.z),pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl)}}class xm extends $o{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ym extends Ec{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends $o{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(le.DEFAULT_UP),this.updateMatrix(),this.target=new le,this.shadow=new ym}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vm extends $o{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bm extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Cc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gl(){return performance.now()}const ml=new Ht;class Sm{constructor(t,e,n=0,s=1/0){this.ray=new Tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ml.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ml),this}intersectObject(t,e=!0,n=[]){return Mo(t,this,n,e),n.sort(Il),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mo(t[s],this,n,e);return n.sort(Il),n}}function Il(i,t){return i.distance-t.distance}function Mo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Mo(r[a],t,e,!0)}}class El{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lr{constructor(t,e,n,s){Lr.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}}class bm extends Ic{constructor(t=10,e=10,n=4473924,s=8947848){n=new Tt(n),s=new Tt(s);const r=e/2,a=t/e,o=t/2,l=[],A=[];for(let u=0,p=0,g=-o;u<=e;u++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const m=u===r?n:s;m.toArray(A,p),p+=3,m.toArray(A,p),p+=3,m.toArray(A,p),p+=3,m.toArray(A,p),p+=3}const c=new He;c.setAttribute("position",new Ee(l,3)),c.setAttribute("color",new Ee(A,3));const h=new Ko({vertexColors:!0,toneMapped:!1});super(c,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class wm extends Ic{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new He;s.setAttribute("position",new Ee(e,3)),s.setAttribute("color",new Ee(n,3));const r=new Ko({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Tt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Mm extends Ii{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ko);const Cl={type:"change"},tA={type:"start"},xc={type:"end"},js=new Tr,xl=new qn,Qm=Math.cos(70*$h.DEG2RAD),ce=new w,ke=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6;class Tm extends Mm{constructor(t,e=null){super(t,e),this.state=Zt.NONE,this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zi.ROTATE,MIDDLE:zi.DOLLY,RIGHT:zi.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new ae,this._lastTargetPosition=new w,this._quat=new ae().setFromUnitVectors(t.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new El,this._sphericalDelta=new El,this._scale=1,this._panOffset=new w,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new w,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rm.bind(this),this._onPointerDown=Dm.bind(this),this._onPointerUp=Lm.bind(this),this._onContextMenu=zm.bind(this),this._onMouseWheel=Fm.bind(this),this._onKeyDown=Pm.bind(this),this._onTouchStart=km.bind(this),this._onTouchMove=Gm.bind(this),this._onMouseDown=Nm.bind(this),this._onMouseMove=Um.bind(this),this._interceptControlDown=Om.bind(this),this._interceptControlUp=Hm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cl),this.update(),this.state=Zt.NONE}update(t=null){const e=this.object.position;ce.copy(e).sub(this.target),ce.applyQuaternion(this._quat),this._spherical.setFromVector3(ce),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ke:n>Math.PI&&(n-=ke),s<-Math.PI?s+=ke:s>Math.PI&&(s-=ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ce.setFromSpherical(this._spherical),ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ce.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new w(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const A=new w(this._mouse.x,this._mouse.y,0);A.unproject(this.object),this.object.position.sub(A).add(o),this.object.updateMatrixWorld(),a=ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(js.origin.copy(this.object.position),js.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(js.direction))<Qm?this.object.lookAt(this.target):(xl.setFromNormalAndCoplanarPoint(this.object.up,this.target),js.intersectPlane(xl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(Cl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ce.setFromMatrixColumn(e,0),ce.multiplyScalar(-t),this._panOffset.add(ce)}_panUp(t,e){this.screenSpacePanning===!0?ce.setFromMatrixColumn(e,1):(ce.setFromMatrixColumn(e,0),ce.crossVectors(this.object.up,ce)),ce.multiplyScalar(t),this._panOffset.add(ce)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ce.copy(s).sub(this.target);let r=ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Dm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Rm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xc),this.state=Zt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Zt.DOLLY;break;case zi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}break;case zi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(tA)}function Um(i){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(i.preventDefault(),this.dispatchEvent(tA),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xc))}function Pm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function km(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Zt.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Zt.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(tA)}function Gm(i){switch(this._trackPointer(i),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Zt.NONE}}function zm(i){this.enabled!==!1&&i.preventDefault()}function Om(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ym=new Jo(-1,1,1,-1,0,1);class Vm extends He{constructor(){super(),this.setAttribute("position",new Ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ee([0,2,0,0,2,0],2))}}const qm=new Vm;class yc{constructor(t){this._mesh=new we(qm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ym)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}var me=Uint8Array,fs=Uint16Array,Wm=Int32Array,_c=new me([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vc=new me([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Jm=new me([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bc=function(i,t){for(var e=new fs(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var s=new Wm(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)s[r]=r-e[n]<<5|n;return{b:e,r:s}},Sc=Bc(_c,2),bc=Sc.b,Xm=Sc.r;bc[28]=258,Xm[258]=28;var Km=Bc(vc,0),jm=Km.b,wc=new fs(32768);for(var ie=0;ie<32768;++ie){var Yn=(ie&43690)>>1|(ie&21845)<<1;Yn=(Yn&52428)>>2|(Yn&13107)<<2,Yn=(Yn&61680)>>4|(Yn&3855)<<4,wc[ie]=((Yn&65280)>>8|(Yn&255)<<8)>>1}var ps=function(i,t,e){for(var n=i.length,s=0,r=new fs(t);s<n;++s)i[s]&&++r[i[s]-1];var a=new fs(t);for(s=1;s<t;++s)a[s]=a[s-1]+r[s-1]<<1;var o;{o=new fs(1<<t);var l=15-t;for(s=0;s<n;++s)if(i[s])for(var A=s<<4|i[s],c=t-i[s],h=a[i[s]-1]++<<c,u=h|(1<<c)-1;h<=u;++h)o[wc[h]>>l]=A}return o},vs=new me(288);for(var ie=0;ie<144;++ie)vs[ie]=8;for(var ie=144;ie<256;++ie)vs[ie]=9;for(var ie=256;ie<280;++ie)vs[ie]=7;for(var ie=280;ie<288;++ie)vs[ie]=8;var Mc=new me(32);for(var ie=0;ie<32;++ie)Mc[ie]=5;var Zm=ps(vs,9),$m=ps(Mc,5),ba=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},rn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},wa=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Qc=function(i){return(i+7)/8|0},Vi=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new me(i.subarray(t,e))},tI=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],De=function(i,t,e){var n=new Error(t||tI[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,De),!e)throw n;return n},Tc=function(i,t,e,n){var s=i.length,r=n?n.length:0;if(!s||t.f&&!t.l)return e||new me(0);var a=!e,o=a||t.i!=2,l=t.i;a&&(e=new me(s*3));var A=function(Pt){var Rt=e.length;if(Pt>Rt){var M=new me(Math.max(Rt*2,Pt));M.set(e),e=M}},c=t.f||0,h=t.p||0,u=t.b||0,p=t.l,g=t.d,m=t.m,f=t.n,d=s*8;do{if(!p){c=rn(i,h,1);var _=rn(i,h+1,3);if(h+=3,_)if(_==1)p=Zm,g=$m,m=9,f=5;else if(_==2){var b=rn(i,h,31)+257,S=rn(i,h+10,15)+4,T=b+rn(i,h+5,31)+1;h+=14;for(var Y=new me(T),I=new me(19),x=0;x<S;++x)I[Jm[x]]=rn(i,h+x*3,7);h+=S*3;for(var N=ba(I),P=(1<<N)-1,z=ps(I,N),x=0;x<T;){var J=z[rn(i,h,P)];h+=J&15;var E=J>>4;if(E<16)Y[x++]=E;else{var U=0,K=0;for(E==16?(K=3+rn(i,h,3),h+=2,U=Y[x-1]):E==17?(K=3+rn(i,h,7),h+=3):E==18&&(K=11+rn(i,h,127),h+=7);K--;)Y[x++]=U}}var O=Y.subarray(0,b),nt=Y.subarray(b);m=ba(O),f=ba(nt),p=ps(O,m),g=ps(nt,f)}else De(1);else{var E=Qc(h)+4,v=i[E-4]|i[E-3]<<8,Q=E+v;if(Q>s){l&&De(0);break}o&&A(u+v),e.set(i.subarray(E,Q),u),t.b=u+=v,t.p=h=Q*8,t.f=c;continue}if(h>d){l&&De(0);break}}o&&A(u+131072);for(var it=(1<<m)-1,rt=(1<<f)-1,Dt=h;;Dt=h){var U=p[wa(i,h)&it],Mt=U>>4;if(h+=U&15,h>d){l&&De(0);break}if(U||De(2),Mt<256)e[u++]=Mt;else if(Mt==256){Dt=h,p=null;break}else{var V=Mt-254;if(Mt>264){var x=Mt-257,j=_c[x];V=rn(i,h,(1<<j)-1)+bc[x],h+=j}var ot=g[wa(i,h)&rt],$=ot>>4;ot||De(3),h+=ot&15;var nt=jm[$];if($>3){var j=vc[$];nt+=wa(i,h)&(1<<j)-1,h+=j}if(h>d){l&&De(0);break}o&&A(u+131072);var yt=u+V;if(u<nt){var mt=r-nt,Qt=Math.min(nt,yt);for(mt+u<0&&De(3);u<Qt;++u)e[u]=n[mt+u]}for(;u<yt;++u)e[u]=e[u-nt]}}t.l=p,t.p=Dt,t.b=u,t.f=c,p&&(c=1,t.m=m,t.d=g,t.n=f)}while(!c);return u!=e.length&&a?Vi(e,0,u):e.subarray(0,u)},eI=new me(0),fn=function(i,t){return i[t]|i[t+1]<<8},an=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},Ma=function(i,t){return an(i,t)+an(i,t+4)*4294967296},nI=function(i){(i[0]!=31||i[1]!=139||i[2]!=8)&&De(6,"invalid gzip data");var t=i[3],e=10;t&4&&(e+=(i[10]|i[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!i[e++]);return e+(t&2)},Qa=(function(){function i(t,e){typeof t=="function"&&(e=t,t={}),this.ondata=e;var n=t&&t.dictionary&&t.dictionary.subarray(-32768);this.s={i:0,b:n?n.length:0},this.o=new me(32768),this.p=new me(0),n&&this.o.set(n)}return i.prototype.e=function(t){if(this.ondata||De(5),this.d&&De(4),!this.p.length)this.p=t;else if(t.length){var e=new me(this.p.length+t.length);e.set(this.p),e.set(t,this.p.length),this.p=e}},i.prototype.c=function(t){this.s.i=+(this.d=t||!1);var e=this.s.b,n=Tc(this.p,this.s,this.o);this.ondata(Vi(n,e,this.s.b),this.d),this.o=Vi(n,this.s.b-32768),this.s.b=this.o.length,this.p=Vi(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(t,e){this.e(t),this.c(e)},i})();function iI(i,t){return Tc(i,{i:2},t&&t.out,t&&t.dictionary)}var sI=(function(){function i(t,e){this.v=1,this.r=0,Qa.call(this,t,e)}return i.prototype.push=function(t,e){if(Qa.prototype.e.call(this,t),this.r+=t.length,this.v){var n=this.p.subarray(this.v-1),s=n.length>3?nI(n):4;if(s>n.length){if(!e)return}else this.v>1&&this.onmember&&this.onmember(this.r-n.length);this.p=n.subarray(s),this.v=0}Qa.prototype.c.call(this,e),this.s.f&&!this.s.l&&!e&&(this.v=Qc(this.s.p)+9,this.s={i:0},this.o=new me(0),this.push(new me(0),e))},i})(),Qo=typeof TextDecoder<"u"&&new TextDecoder,rI=0;try{Qo.decode(eI,{stream:!0}),rI=1}catch{}var aI=function(i){for(var t="",e=0;;){var n=i[e++],s=(n>127)+(n>223)+(n>239);if(e+s>i.length)return{s:t,r:Vi(i,e-1)};s?s==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):s&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function oI(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Qo)return Qo.decode(i);var s=aI(i),r=s.s,e=s.r;return e.length&&De(8),r}}var AI=function(i,t){return t+30+fn(i,t+26)+fn(i,t+28)},lI=function(i,t,e){var n=fn(i,t+28),s=oI(i.subarray(t+46,t+46+n),!(fn(i,t+8)&2048)),r=t+46+n,a=an(i,t+20),o=e&&a==4294967295?cI(i,r):[a,an(i,t+24),an(i,t+42)],l=o[0],A=o[1],c=o[2];return[fn(i,t+10),l,A,s,r+fn(i,t+30)+fn(i,t+32),c]},cI=function(i,t){for(;fn(i,t)!=1;t+=4+fn(i,t+2));return[Ma(i,t+12),Ma(i,t+4),Ma(i,t+20)]};function hI(i,t){for(var e={},n=i.length-22;an(i,n)!=101010256;--n)(!n||i.length-n>65558)&&De(13);var s=fn(i,n+8);if(!s)return{};var r=an(i,n+16),a=r==4294967295||s==65535;if(a){var o=an(i,n-12);a=an(i,o)==101075792,a&&(s=an(i,o+32),r=an(i,o+48))}for(var l=t&&t.filter,A=0;A<s;++A){var c=lI(i,r,a),h=c[0],u=c[1],p=c[2],g=c[3],m=c[4],f=c[5],d=AI(i,f);r=m,(!l||l({name:g,size:u,originalSize:p,compression:h}))&&(h?h==8?e[g]=iI(i.subarray(d,d+u),{out:new me(p)}):De(14,"unknown compression type "+h):e[g]=Vi(i,d,d+u))}return e}let Dn;const Dc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Dc.decode();let hs=null;function uI(){return(hs===null||hs.byteLength===0)&&(hs=new Uint8Array(Dn.memory.buffer)),hs}function dI(i,t){return i=i>>>0,Dc.decode(uI().subarray(i,i+t))}function fI(i,t,e,n,s,r,a,o,l,A,c,h,u){return Dn.raycast_splats(i,t,e,n,s,r,a,o,l,A,c,h,u)}async function pI(i,t){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,t)}catch(n){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const e=await i.arrayBuffer();return await WebAssembly.instantiate(e,t)}else{const e=await WebAssembly.instantiate(i,t);return e instanceof WebAssembly.Instance?{instance:e,module:i}:e}}function gI(){const i={};return i.wbg={},i.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},i.wbg.__wbg_length_3b4f022188ae8db6=function(t){return t.length},i.wbg.__wbg_length_6ca527665d89694d=function(t){return t.length},i.wbg.__wbg_length_8cfd2c6409af88ad=function(t){return t.length},i.wbg.__wbg_new_9fee97a409b32b68=function(t){return new Uint16Array(t)},i.wbg.__wbg_new_e3b321dcfef89fc7=function(t){return new Uint32Array(t)},i.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354=function(t,e,n){return new Float32Array(t,e>>>0,n>>>0)},i.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212=function(t,e,n){return new Uint32Array(t,e>>>0,n>>>0)},i.wbg.__wbg_newwithlength_5a5efe313cfd59f1=function(t){return new Float32Array(t>>>0)},i.wbg.__wbg_set_10bad9bee0e9c58b=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_set_d23661d19148b229=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_set_f4f1f0daa30696fc=function(t,e,n){t.set(e,n>>>0)},i.wbg.__wbg_subarray_3aaeec89bb2544f0=function(t,e,n){return t.subarray(e>>>0,n>>>0)},i.wbg.__wbg_subarray_769e1e0f81bb259b=function(t,e,n){return t.subarray(e>>>0,n>>>0)},i.wbg.__wbindgen_init_externref_table=function(){const t=Dn.__wbindgen_export_0,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)},i.wbg.__wbindgen_memory=function(){return Dn.memory},i.wbg.__wbindgen_throw=function(t,e){throw new Error(dI(t,e))},i}function mI(i,t){return Dn=i.exports,Rc.__wbindgen_wasm_module=t,hs=null,Dn.__wbindgen_start(),Dn}async function Rc(i){if(Dn!==void 0)return Dn;typeof i<"u"&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof i>"u"&&(i=new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYG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ACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==",import.meta.url));const t=gI();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:e,module:n}=await pI(await i,t);return mI(e,n)}const Rn=-12,Ln=9,II=-30,Ta=Math.exp(II),EI=11,CI=11,$t=1<<EI,di=1<<CI,xI=1;function yI(i){return i==="bool"||i==="bvec2"||i==="bvec3"||i==="bvec4"}function fi(i){return i==="int"||i==="ivec2"||i==="ivec3"||i==="ivec4"}function pi(i){return i==="uint"||i==="uvec2"||i==="uvec3"||i==="uvec4"}function _I(i){return i==="float"||i==="vec2"||i==="vec3"||i==="vec4"}function vI(i){return i==="mat2"||i==="mat2x2"||i==="mat2x3"||i==="mat2x4"||i==="mat3"||i==="mat3x2"||i==="mat3x3"||i==="mat3x4"||i==="mat4"||i==="mat4x2"||i==="mat4x3"||i==="mat4x4"}function Es(i){return _I(i)||vI(i)}function Li(i){return i==="mat2"||i==="mat2x2"}function Ni(i){return i==="mat3"||i==="mat3x3"}function Ui(i){return i==="mat4"||i==="mat4x4"}function BI(i){switch(i){case"vec2":return"float";case"vec3":return"float";case"vec4":return"float";case"ivec2":return"int";case"ivec3":return"int";case"ivec4":return"int";case"uvec2":return"uint";case"uvec3":return"uint";case"uvec4":return"uint";default:throw new Error(`Invalid vector type: ${i}`)}}function SI(i){switch(i){case"vec2":case"ivec2":case"uvec2":return 2;case"vec3":case"ivec3":case"uvec3":return 3;case"vec4":case"ivec4":case"uvec4":return 4;default:throw new Error(`Invalid vector type: ${i}`)}}function he(i){return Math.trunc(i).toString()}function ue(i){return`${Math.max(0,Math.trunc(i)).toString()}u`}function qt(i){return i===Number.POSITIVE_INFINITY?"INFINITY":i===Number.NEGATIVE_INFINITY?"-INFINITY":Number.isInteger(i)?i.toFixed(1):i.toString()}function Qn(i){return i instanceof gi?i.type:i.dynoOut().type}class gi{constructor(t){this.__isDynoValue=!0,this.type=t}}class ze extends gi{constructor(t,e){super(t.outTypes[e]),this.dyno=t,this.key=e}}class hr extends gi{constructor(t,e){super(t),this.literal=e}getLiteral(){return this.literal}}class bI extends hr{constructor(t,e){super(t,""),this.value=e}getLiteral(){const{type:t,value:e}=this;switch(t){case"bool":return e?"true":"false";case"uint":return ue(e);case"int":return he(e);case"float":return qt(e);case"bvec2":{const n=e;return`bvec2(${n[0]}, ${n[1]})`}case"uvec2":{if(e instanceof vt)return`uvec2(${ue(e.x)}, ${ue(e.y)})`;const n=e;return`uvec2(${ue(n[0])}, ${ue(n[1])})`}case"ivec2":{if(e instanceof vt)return`ivec2(${he(e.x)}, ${he(e.y)})`;const n=e;return`ivec2(${he(n[0])}, ${he(n[1])})`}case"vec2":{if(e instanceof vt)return`vec2(${qt(e.x)}, ${qt(e.y)})`;const n=e;return`vec2(${qt(n[0])}, ${qt(n[1])})`}case"bvec3":{const n=e;return`bvec3(${n[0]}, ${n[1]}, ${n[2]})`}case"uvec3":{if(e instanceof w)return`uvec3(${ue(e.x)}, ${ue(e.y)}, ${ue(e.z)})`;const n=e;return`uvec3(${ue(n[0])}, ${ue(n[1])}, ${ue(n[2])})`}case"ivec3":{if(e instanceof w)return`ivec3(${he(e.x)}, ${he(e.y)}, ${he(e.z)})`;const n=e;return`ivec3(${he(n[0])}, ${he(n[1])}, ${he(n[2])})`}case"vec3":{if(e instanceof w)return`vec3(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)})`;const n=e;return`vec3(${qt(n[0])}, ${qt(n[1])}, ${qt(n[2])})`}case"bvec4":{const n=e;return`bvec4(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`}case"uvec4":{if(e instanceof Gt)return`uvec4(${ue(e.x)}, ${ue(e.y)}, ${ue(e.z)}, ${ue(e.w)})`;const n=e;return`uvec4(${ue(n[0])}, ${ue(n[1])}, ${ue(n[2])}, ${ue(n[3])})`}case"ivec4":{if(e instanceof Gt)return`ivec4(${he(e.x)}, ${he(e.y)}, ${he(e.z)}, ${he(e.w)})`;const n=e;return`ivec4(${he(n[0])}, ${he(n[1])}, ${he(n[2])}, ${he(n[3])})`}case"vec4":{if(e instanceof Gt)return`vec4(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)}, ${qt(e.w)})`;if(e instanceof ae)return`vec4(${qt(e.x)}, ${qt(e.y)}, ${qt(e.z)}, ${qt(e.w)})`;const n=e;return`vec4(${qt(n[0])}, ${qt(n[1])}, ${qt(n[2])}, ${qt(n[3])})`}case"mat2":case"mat2x2":{const n=e,s=n instanceof Lr?n.elements:e,r=new Array(4).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat2x3":{const n=e,s=new Array(6).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat2x4":{const n=e,s=new Array(8).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat3":case"mat3x3":{const n=e,s=n instanceof Nt?n.elements:e,r=new Array(9).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat3x2":{const n=e,s=new Array(6).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat3x4":{const n=e,s=new Array(12).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat4":case"mat4x4":{const n=e,s=n instanceof Ht?n.elements:e,r=new Array(16).fill(0).map((a,o)=>qt(s[o]));return`${t}(${r.join(", ")})`}case"mat4x2":{const n=e,s=new Array(8).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}case"mat4x3":{const n=e,s=new Array(12).fill(0).map((r,a)=>qt(n[a]));return`${t}(${s.join(", ")})`}default:throw new Error(`Type not implemented: ${String(t)}`)}}}function gs(i,t){return new bI(i,t)}function Zs(i){const t=String(i);if(yI(i))return`${t}(false)`;if(Es(i))return`${t}(0.0)`;if(fi(i))return`${t}(0)`;if(pi(i))return`${t}(0u)`;throw new Error(`Type not implemented: ${t}`)}const yl="    ";class wI{constructor({indent:t}={}){this.globals=new Set,this.statements=[],this.uniforms={},this.declares=new Set,this.updaters=[],this.sequence=0,this.indent=yl,this.indent=t??yl}nextSequence(){return this.sequence++}}class Ce{constructor({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,statements:a,generate:o}){this.inTypes=t??{},this.outTypes=e??{},this.inputs=n??{},this.update=s,this.globals=r,this.statements=a,this.generate=o??(({inputs:l,outputs:A,compile:c})=>{var h,u;return{globals:(h=this.globals)==null?void 0:h.call(this,{inputs:l,outputs:A,compile:c}),statements:(u=this.statements)==null?void 0:u.call(this,{inputs:l,outputs:A,compile:c})}})}get outputs(){const t={};for(const e in this.outTypes)t[e]=new ze(this,e);return t}apply(t){return Object.assign(this.inputs,t),this.outputs}compile({inputs:t,outputs:e,compile:n}){const s=[`// ${this.constructor.name}(${Object.values(t).join(", ")}) => (${Object.values(e).join(", ")})`],r=[];for(const A in e){const c=e[A];c&&!n.declares.has(c)&&(n.declares.add(c),r.push(A))}const{globals:a,statements:o,uniforms:l}=this.generate({inputs:t,outputs:e,compile:n});for(const A of a??[])n.globals.add(A);for(const A in l)n.uniforms[A]=l[A];this.update&&n.updaters.push(this.update);for(const A of r){const c=e[A];c&&(n.uniforms[c]||s.push(`${Lc(c,this.outTypes[A])};`))}return o?.length&&(s.push("{"),s.push(...o.map(A=>n.indent+A)),s.push("}")),s}}class MI extends Ce{constructor({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,construct:a}){super({inTypes:t,outTypes:e,inputs:n,update:s,globals:r,generate:o=>this.generateBlock(o)}),this.construct=a}generateBlock({inputs:t,outputs:e,compile:n}){var s,r;const a={},o={};for(const f in t)t[f]!=null&&(a[f]=new hr(this.inTypes[f],t[f]));for(const f in e)e[f]!=null&&(o[f]=new gi(this.outTypes[f]));const l={roots:[]},A=this.construct(a,o,l);for(const f of((s=this.globals)==null?void 0:s.call(this,{inputs:t,outputs:e,compile:n}))??[])n.globals.add(f);const c=[],h=new Map;function u(f,d,_){let E=h.get(f);if(!E){E={sequence:n.nextSequence(),outNames:new Map,newOuts:new Set},h.set(f,E);for(const v in f.inputs){let Q=f.inputs[v];for(;Q;){if(Q instanceof gi){Q instanceof ze&&u(Q.dyno,Q.key);break}Q=Q.dynoOut()}}c.push(f)}d&&(_||E.newOuts.add(d),E.outNames.set(d,_??`${d}_${E.sequence}`))}for(const f of l.roots)u(f);for(const f in o){let d=A?.[f]??o[f];for(;d;){if(d instanceof gi){d instanceof ze&&u(d.dyno,d.key,e[f]);break}d=d.dynoOut()}o[f]=d}const p=[];for(const f of c){const d={},_={};for(const Q in f.inputs){let b=f.inputs[Q];for(;b;){if(b instanceof gi){if(b instanceof hr)d[Q]=b.getLiteral();else if(b instanceof ze){const S=(r=h.get(b.dyno))==null?void 0:r.outNames.get(b.key);if(!S)throw new Error(`Source not found for ${b.dyno.constructor.name}.${b.key}`);d[Q]=S}break}b=b.dynoOut()}}const E=h.get(f)??{outNames:new Map};for(const[Q,b]of E.outNames.entries())_[Q]=b;const v=f.compile({inputs:d,outputs:_,compile:n});p.push(v)}const g=[];for(const f in e)o[f]instanceof hr&&g.push(`${e[f]} = ${o[f].getLiteral()};`);return g.length>0&&p.push(g),{statements:p.flatMap((f,d)=>d===0?f:["",...f])}}}function Nn(i,t,e,{update:n,globals:s}={}){return new MI({inTypes:i,outTypes:t,construct:e,update:n,globals:s})}function Nr({inTypes:i,outTypes:t,inputs:e,update:n,globals:s,statements:r,generate:a}){return new Ce({inTypes:i,outTypes:t,inputs:e,update:n,globals:s,statements:r,generate:a})}function Lc(i,t,e){const n=typeof t=="string"?t:t.type;if(!n)throw new Error(`Invalid DynoType: ${String(t)}`);return`${n} ${i}${e!=null?`[${e}]`:""}`}function In(i){var t;let e=!1;const n=i.split(`
`).map(a=>{const o=a.trimEnd();return e?o:o.length>0?(e=!0,o):null}).filter(a=>a!=null);for(;n.length>0&&n[n.length-1].length===0;)n.pop();if(n.length===0)return[];const s=(t=n[0].match(/^\s*/))==null?void 0:t[0];if(!s)return n;const r=new RegExp(`^${s}`);return n.map(a=>a.replace(r,""))}function Ye(i){return In(i).join(`
`)}class Ur extends Ce{constructor({a:t,outKey:e,outTypeFunc:n}){const s={a:Qn(t)},r=n(Qn(t)),a={[e]:r};super({inTypes:s,outTypes:a,inputs:{a:t}}),this.outKey=e}dynoOut(){return new ze(this,this.outKey)}}class Fr extends Ce{constructor({a:t,b:e,outKey:n,outTypeFunc:s}){const r={a:Qn(t),b:Qn(e)},a=s(Qn(t),Qn(e)),o={[n]:a};super({inTypes:r,outTypes:o,inputs:{a:t,b:e}}),this.outKey=n}dynoOut(){return new ze(this,this.outKey)}}const pe={type:"Gsplat"},Pr={type:"PackedSplats"},ms=(i,t)=>new TI({packedSplats:i,index:t}),QI=(i,t,e,n)=>new DI({packedSplats:i,index:t,base:e,count:n}),ur=i=>new RI({gsplat:i}),Da=({gsplat:i,flags:t,index:e,center:n,scales:s,quaternion:r,rgba:a,rgb:o,opacity:l,x:A,y:c,z:h,r:u,g:p,b:g})=>new LI({gsplat:i,flags:t,index:e,center:n,scales:s,quaternion:r,rgba:a,rgb:o,opacity:l,x:A,y:c,z:h,r:u,g:p,b:g}),Nc=(i,{scale:t,rotate:e,translate:n,recolor:s})=>new NI({gsplat:i,scale:t,rotate:e,translate:n,recolor:s}),En=Ye(`
  struct Gsplat {
    vec3 center;
    uint flags;
    vec3 scales;
    int index;
    vec4 quaternion;
    vec4 rgba;
  };
  const uint GSPLAT_FLAG_ACTIVE = 1u << 0u;

  bool isGsplatActive(uint flags) {
    return (flags & GSPLAT_FLAG_ACTIVE) != 0u;
  }
`),eA=Ye(`
  struct PackedSplats {
    usampler2DArray texture;
    int numSplats;
    vec4 rgbMinMaxLnScaleMinMax;
  };
`),Uc=Ye(`
  bool readPackedSplat(usampler2DArray texture, int numSplats, vec4 rgbMinMaxLnScaleMinMax, int index, out Gsplat gsplat) {
    if ((index >= 0) && (index < numSplats)) {
      uvec4 packed = texelFetch(texture, splatTexCoord(index), 0);
      unpackSplatEncoding(packed, gsplat.center, gsplat.scales, gsplat.quaternion, gsplat.rgba, rgbMinMaxLnScaleMinMax);
      return true;
    } else {
      return false;
    }
  }
`);class TI extends Ce{constructor({packedSplats:t,index:e}){super({inTypes:{packedSplats:Pr,index:"int"},outTypes:{gsplat:pe},inputs:{packedSplats:t,index:e},globals:()=>[En,eA,Uc],statements:({inputs:n,outputs:s})=>{const{gsplat:r}=s;if(!r)return[];const{packedSplats:a,index:o}=n;let l;return a&&o?l=In(`
            if (readPackedSplat(${a}.texture, ${a}.numSplats, ${a}.rgbMinMaxLnScaleMinMax, ${o}, ${r})) {
              bool zeroSize = all(equal(${r}.scales, vec3(0.0, 0.0, 0.0)));
              ${r}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
            } else {
              ${r}.flags = 0u;
            }
          `):l=[`${r}.flags = 0u;`],l.push(`${r}.index = ${o??"0"};`),l}})}dynoOut(){return new ze(this,"gsplat")}}class DI extends Ce{constructor({packedSplats:t,index:e,base:n,count:s}){super({inTypes:{packedSplats:Pr,index:"int",base:"int",count:"int"},outTypes:{gsplat:pe},inputs:{packedSplats:t,index:e,base:n,count:s},globals:()=>[En,eA,Uc],statements:({inputs:r,outputs:a})=>{const{gsplat:o}=a;if(!o)return[];const{packedSplats:l,index:A,base:c,count:h}=r;let u;return l&&A&&c&&h?u=In(`
            ${o}.flags = 0u;
            if ((${A} >= ${c}) && (${A} < (${c} + ${h}))) {
              if (readPackedSplat(${l}.texture, ${l}.numSplats, ${l}.rgbMinMaxLnScaleMinMax, ${A}, ${o})) {
                bool zeroSize = all(equal(${o}.scales, vec3(0.0, 0.0, 0.0)));
                ${o}.flags = zeroSize ? 0u : GSPLAT_FLAG_ACTIVE;
              }
            }
          `):u=[`${o}.flags = 0u;`],u.push(`${o}.index = ${A??"0"};`),u}})}dynoOut(){return new ze(this,"gsplat")}}class RI extends Ce{constructor({gsplat:t}){super({inTypes:{gsplat:pe},outTypes:{flags:"uint",active:"bool",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},inputs:{gsplat:t},globals:()=>[En],statements:({inputs:e,outputs:n})=>{const{gsplat:s}=e,{flags:r,active:a,index:o,center:l,scales:A,quaternion:c,rgba:h,rgb:u,opacity:p,x:g,y:m,z:f,r:d,g:_,b:E}=n;return[r?`${r} = ${s?`${s}.flags`:"0u"};`:null,a?`${a} = isGsplatActive(${s?`${s}.flags`:"0u"});`:null,o?`${o} = ${s?`${s}.index`:"0"};`:null,l?`${l} = ${s?`${s}.center`:"vec3(0.0, 0.0, 0.0)"};`:null,A?`${A} = ${s?`${s}.scales`:"vec3(0.0, 0.0, 0.0)"};`:null,c?`${c} = ${s?`${s}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)"};`:null,h?`${h} = ${s?`${s}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)"};`:null,u?`${u} = ${s?`${s}.rgba.rgb`:"vec3(0.0, 0.0, 0.0)"};`:null,p?`${p} = ${s?`${s}.rgba.a`:"0.0"};`:null,g?`${g} = ${s?`${s}.center.x`:"0.0"};`:null,m?`${m} = ${s?`${s}.center.y`:"0.0"};`:null,f?`${f} = ${s?`${s}.center.z`:"0.0"};`:null,d?`${d} = ${s?`${s}.rgba.r`:"0.0"};`:null,_?`${_} = ${s?`${s}.rgba.g`:"0.0"};`:null,E?`${E} = ${s?`${s}.rgba.b`:"0.0"};`:null].filter(Boolean)}})}}class LI extends Ce{constructor({gsplat:t,flags:e,index:n,center:s,scales:r,quaternion:a,rgba:o,rgb:l,opacity:A,x:c,y:h,z:u,r:p,g,b:m}){super({inTypes:{gsplat:pe,flags:"uint",index:"int",center:"vec3",scales:"vec3",quaternion:"vec4",rgba:"vec4",rgb:"vec3",opacity:"float",x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"},outTypes:{gsplat:pe},inputs:{gsplat:t,flags:e,index:n,center:s,scales:r,quaternion:a,rgba:o,rgb:l,opacity:A,x:c,y:h,z:u,r:p,g,b:m},globals:()=>[En],statements:({inputs:f,outputs:d})=>{const{gsplat:_}=d;if(!_)return[];const{gsplat:E,flags:v,index:Q,center:b,scales:S,quaternion:T,rgba:Y,rgb:I,opacity:x,x:N,y:P,z,r:J,g:U,b:K}=f;return[`${_}.flags = ${v??(E?`${E}.flags`:"0u")};`,`${_}.index = ${Q??(E?`${E}.index`:"0")};`,`${_}.center = ${b??(E?`${E}.center`:"vec3(0.0, 0.0, 0.0)")};`,`${_}.scales = ${S??(E?`${E}.scales`:"vec3(0.0, 0.0, 0.0)")};`,`${_}.quaternion = ${T??(E?`${E}.quaternion`:"vec4(0.0, 0.0, 0.0, 1.0)")};`,`${_}.rgba = ${Y??(E?`${E}.rgba`:"vec4(0.0, 0.0, 0.0, 0.0)")};`,I?`${_}.rgba.rgb = ${I};`:null,x?`${_}.rgba.a = ${x};`:null,N?`${_}.center.x = ${N};`:null,P?`${_}.center.y = ${P};`:null,z?`${_}.center.z = ${z};`:null,J?`${_}.rgba.r = ${J};`:null,U?`${_}.rgba.g = ${U};`:null,K?`${_}.rgba.b = ${K};`:null].filter(Boolean)}})}dynoOut(){return new ze(this,"gsplat")}}Ye(`
  vec3 gsplatNormal(vec3 scales, vec4 quaternion) {
    float minScale = min(scales.x, min(scales.y, scales.z));
    vec3 normal;
    if (scales.z == minScale) {
      normal = vec3(0.0, 0.0, 1.0);
    } else if (scales.y == minScale) {
      normal = vec3(0.0, 1.0, 0.0);
    } else {
      normal = vec3(1.0, 0.0, 0.0);
    }
    return quatVec(quaternion, normal);
  }
`);class NI extends Ce{constructor({gsplat:t,scale:e,rotate:n,translate:s,recolor:r}){super({inTypes:{gsplat:pe,scale:"float",rotate:"vec4",translate:"vec3",recolor:"vec4"},outTypes:{gsplat:pe},inputs:{gsplat:t,scale:e,rotate:n,translate:s,recolor:r},globals:()=>[En],statements:({inputs:a,outputs:o,compile:l})=>{const{gsplat:A}=o;if(!A||!a.gsplat)return[];const{scale:c,rotate:h,translate:u,recolor:p}=a,g=l.indent;return[`${A} = ${a.gsplat};`,`if (isGsplatActive(${A}.flags)) {`,c?`${g}${A}.center *= ${c};`:null,h?`${g}${A}.center = quatVec(${h}, ${A}.center);`:null,u?`${g}${A}.center += ${u};`:null,c?`${g}${A}.scales *= ${c};`:null,h?`${g}${A}.quaternion = quatQuat(${h}, ${A}.quaternion);`:null,p?`${g}${A}.rgba *= ${p};`:null,"}"].filter(Boolean)}})}dynoOut(){return new ze(this,"gsplat")}}const UI=(i,t)=>new FI({gsplat:i,rgbMinMaxLnScaleMinMax:t});class FI extends Ce{constructor({gsplat:t,rgbMinMaxLnScaleMinMax:e}){super({inTypes:{gsplat:pe,rgbMinMaxLnScaleMinMax:"vec4"},inputs:{gsplat:t,rgbMinMaxLnScaleMinMax:e},globals:()=>[En],statements:({inputs:n,outputs:s})=>{const{output:r}=s;if(!r)return[];const{gsplat:a,rgbMinMaxLnScaleMinMax:o}=n;return a?In(`
            if (isGsplatActive(${a}.flags)) {
              ${r} = packSplatEncoding(${a}.center, ${a}.scales, ${a}.quaternion, ${a}.rgba, ${o});
            } else {
              ${r} = uvec4(0u, 0u, 0u, 0u);
            }
          `):[`${r} = uvec4(0u, 0u, 0u, 0u);`]}})}dynoOut(){return new ze(this,"output")}}class PI extends Ce{constructor({rgba8:t}){super({inTypes:{rgba8:"vec4"},inputs:{rgba8:t},statements:({inputs:e,outputs:n})=>[`target = ${e.rgba8??"vec4(0.0, 0.0, 0.0, 0.0)"};`]})}dynoOut(){return new ze(this,"rgba8")}}class hn extends Ce{constructor({key:t,type:e,count:n,value:s,update:r,globals:a}){t=t??"value",super({outTypes:{[t]:e},update:()=>{if(r){const o=r(this.value);o!==void 0&&(this.value=o)}this.uniform.value=this.value},generate:({inputs:o,outputs:l})=>{const A=a?.({inputs:o,outputs:l})??[],c={},h=l[t];return h&&(A.push(`uniform ${Lc(h,e,n)};`),c[h]=this.uniform),{globals:A,uniforms:c}}}),this.type=e,this.count=n,this.value=s,this.uniform={value:s},this.outKey=t}dynoOut(){return new ze(this,this.outKey)}}class _l extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"bool",value:e,update:n})}}class To extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"int",value:e,update:n})}}class Cs extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"float",value:e,update:n})}}class Ra extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec2",value:e,update:n})}}class vr extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec3",value:e,update:n})}}class kr extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"vec4",value:e,update:n})}}class La extends hn{constructor({key:t,value:e,update:n}){super({key:t,type:"usampler2DArray",value:e,update:n})}}const nA=new Float32Array(1),Fc=new Uint32Array(nA.buffer),iA="Float16Array"in globalThis,Br=iA?new globalThis.Float16Array(1):null,Pc=new Uint16Array(Br?.buffer),Na=iA?kI:GI,Ua=iA?zI:OI;function kI(i){return Br[0]=i,Pc[0]}function GI(i){nA[0]=i;const t=Fc[0],e=t>>31&1,n=t>>23&255,s=t&8388607,r=e<<15;if(n===255)return s!==0?r|32767:r|31744;const a=n-127+15;if(a>=31)return r|31744;if(a<=0){if(a<-10)return r;const l=(s|8388608)>>1-a+13;return r|l}const o=s>>13;return r|a<<10|o}function zI(i){return Pc[0]=i,Br[0]}function OI(i){const t=i>>15&1,e=i>>10&31,n=i&1023;let s;if(e===0)if(n===0)s=t<<31;else{let r=n,a=-14;for(;(r&1024)===0;)r<<=1,a--;r&=1023;const o=a+127,l=r<<13;s=t<<31|o<<23|l}else if(e===31)n===0?s=t<<31|2139095040:s=t<<31|2143289344;else{const r=e-15+127,a=n<<13;s=t<<31|r<<23|a}return Fc[0]=s,nA[0]}function $s(i){return Math.max(0,Math.min(255,Math.round(i*255)))}function HI(i){const t=[],e=new Set;function n(s){s&&typeof s=="object"&&!e.has(s)&&(e.add(s),s instanceof ArrayBuffer?t.push(s):ArrayBuffer.isView(s)?t.push(s.buffer):Array.isArray(s)?s.forEach(n):Object.values(s).forEach(n))}return n(i),t}class YI{constructor({allocate:t,dispose:e,valid:n}){this.items=[],this.allocate=t,this.dispose=e,this.valid=n}alloc(t){for(;;){const e=this.items.pop();if(!e)break;if(this.valid(e,t))return e;this.dispose&&this.dispose(e)}return this.allocate(t)}free(t){this.items.push(t)}disposeAll(){let t;for(t=this.items.pop();t;)this.dispose&&this.dispose(t),t=this.items.pop()}}function vl(i,t,e,n,s,r,a,o,l,A,c,h,u,p,g,m,f){const d=f?.rgbMin??0,E=(f?.rgbMax??1)-d,v=$s((p-d)/E),Q=$s((g-d)/E),b=$s((m-d)/E),S=$s(u),T=iE(VI.set(l,A,c,h)),Y=T&255,I=T>>>8&255,x=T>>>16&255,N=f?.lnScaleMin??Rn,z=254/((f?.lnScaleMax??Ln)-N),J=r<Ta?0:Math.min(255,Math.max(1,Math.round((Math.log(r)-N)*z)+1)),U=a<Ta?0:Math.min(255,Math.max(1,Math.round((Math.log(a)-N)*z)+1)),K=o<Ta?0:Math.min(255,Math.max(1,Math.round((Math.log(o)-N)*z)+1)),O=Na(e),nt=Na(n),it=Na(s),rt=t*4;i[rt]=v|Q<<8|b<<16|S<<24,i[rt+1]=O|nt<<16,i[rt+2]=it|Y<<16|I<<24,i[rt+3]=J|U<<8|K<<16|x<<24}const VI=new ae,qI=new w,WI=new w,JI=new ae,XI=new Tt,KI={center:qI,scales:WI,quaternion:JI,color:XI,opacity:0};function Bl(i,t,e){const n=KI,s=t*4,r=i[s],a=i[s+1],o=i[s+2],l=i[s+3],A=e?.rgbMin??0,h=(e?.rgbMax??1)-A;n.color.set(A+(r&255)/255*h,A+(r>>>8&255)/255*h,A+(r>>>16&255)/255*h),n.opacity=(r>>>24&255)/255,n.center.set(Ua(a&65535),Ua(a>>>16&65535),Ua(o&65535));const u=e?.lnScaleMin??Rn,g=((e?.lnScaleMax??Ln)-u)/254,m=l&255;n.scales.x=m===0?0:Math.exp(u+(m-1)*g);const f=l>>>8&255;n.scales.y=f===0?0:Math.exp(u+(f-1)*g);const d=l>>>16&255;n.scales.z=d===0?0:Math.exp(u+(d-1)*g);const _=o>>>16&65535|l>>>8&16711680;return sE(_,n.quaternion),n}function $e(i){const t=$t,e=Math.max(xI,Math.min(di,Math.ceil(i/t))),n=Math.ceil(i/(t*e)),s=t*e*n;return{width:t,height:e,depth:n,maxSplats:s}}function jI(i){const t=new Cc(i.autoStart);return t.startTime=i.startTime,t.oldTime=i.oldTime,t.elapsedTime=i.elapsedTime,t.running=i.running,t}const ZI=Ye(`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`);function $I(i){const t=new w;for(const e of i)t.add(e);return t.divideScalar(i.length)}function tE(i){if(i.length===0)return new ae;const t=i[0].clone();for(let e=1;e<i.length;e++)i[e].dot(i[0])<0?(t.x-=i[e].x,t.y-=i[e].y,t.z-=i[e].z,t.w-=i[e].w):(t.x+=i[e].x,t.y+=i[e].y,t.z+=i[e].z,t.w+=i[e].w);return t.normalize()}function eE(i,t){const[e,n]=[new w,new ae],[s,r]=[new w,new ae];i.decompose(e,n,new w),t.decompose(s,r,new w);const a=e.distanceTo(s),o=Math.abs(n.dot(r));return{distance:a,coorient:o}}function Do({matrix1:i,matrix2:t,maxDistance:e,minCoorient:n}){const{distance:s,coorient:r}=eE(i,t);return s<=e&&(n==null||r>=n)}const nE=new ae,Ro=new w;function iE(i){const t=nE.copy(i).normalize();t.w<0&&t.set(-t.x,-t.y,-t.z,-t.w);const e=2*Math.acos(t.w),n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z),s=n<1e-6?Ro.set(1,0,0):Ro.set(t.x,t.y,t.z).divideScalar(n),r=Math.abs(s.x)+Math.abs(s.y)+Math.abs(s.z);let a=s.x/r,o=s.y/r;if(s.z<0){const p=a;a=(1-Math.abs(o))*(a>=0?1:-1),o=(1-Math.abs(p))*(o>=0?1:-1)}const l=a*.5+.5,A=o*.5+.5,c=Math.round(l*255),h=Math.round(A*255);return Math.round(e*(255/Math.PI))<<16|h<<8|c}function sE(i,t){const e=i&255,n=i>>>8&255,s=i>>>16&255,r=e/255,a=n/255;let o=(r-.5)*2,l=(a-.5)*2;const A=1-(Math.abs(o)+Math.abs(l)),c=Math.max(-A,0);o+=o>=0?-c:c,l+=l>=0?-c:c;const h=Ro.set(o,l,A).normalize(),p=s/255*Math.PI*.5,g=Math.sin(p),m=Math.cos(p);return t.set(h.x*g,h.y*g,h.z*g,m),t}function rE(i,t){const e=[];let n=0,s=null;const r=new sI((l,A)=>{if(e.push(l),n+=l.length,A||n>=t){const c=new Uint8Array(n);let h=0;for(const u of e)c.set(u,h),h+=u.length;s=c.slice(0,t)}}),a=1024;let o=0;for(;s==null&&o<i.length;){const l=i.slice(o,o+a);r.push(l,!1),o+=a}if(s==null&&(r.push(new Uint8Array,!0),s==null))throw new Error("Failed to decompress partial gzip");return s}class kc{constructor({graph:t,inputs:e,outputs:n,template:s}){this.graph=t,this.template=s,this.inputs=e??{},this.outputs=n??{};const r=new wI({indent:this.template.indent});for(const o in this.outputs)this.outputs[o]&&r.declares.add(this.outputs[o]);const a=t.compile({inputs:this.inputs,outputs:this.outputs,compile:r});this.shader=s.generate({globals:r.globals,statements:a}),this.uniforms=r.uniforms,this.updaters=r.updaters}prepareMaterial(){return aE(this)}update(){for(const t of this.updaters)t()}}class Gc{constructor(t){const e=t.match(/^([ \t]*)\{\{\s*GLOBALS\s*\}\}/m),n=t.match(/^([ \t]*)\{\{\s*STATEMENTS\s*\}\}/m);if(!e||!n)throw new Error("Template must contain {{ GLOBALS }} and {{ STATEMENTS }}");this.before=t.substring(0,e.index),this.between=t.substring(e.index+e[0].length,n.index),this.after=t.substring(n.index+n[0].length),this.indent=n[1]}generate({globals:t,statements:e}){return this.before+Array.from(t).join(`

`)+this.between+e.map(n=>this.indent+n).join(`
`)+this.after}}const Sl=new Map;function aE(i){let t=Sl.get(i);return t||(t=new jo({glslVersion:mr,vertexShader:ZI,fragmentShader:i.shader,uniforms:i.uniforms}),Sl.set(i,t),t)}function zc(i,t,e="add"){const n=()=>{throw new Error(`Invalid ${e} types: ${i}, ${t}`)};if(i===t)return i;if(i==="int"){if(fi(t))return t;n()}if(t==="int"){if(fi(i))return i;n()}if(i==="uint"){if(pi(t))return t;n()}if(t==="uint"){if(pi(i))return i;n()}if(i==="float"){if(Es(t))return t;n()}if(t==="float"){if(Es(i))return i;n()}throw new Error(`Invalid ${e} types: ${i}, ${t}`)}function oE(i,t){return zc(i,t,"sub")}function AE(i,t){const e=()=>{throw new Error(`Invalid mul types: ${i}, ${t}`)},n=s=>s;if(i==="int"){if(fi(t))return n(t);e()}if(t==="int"){if(fi(i))return n(i);e()}if(i==="uint"){if(pi(t))return n(t);e()}if(t==="uint"){if(pi(i))return n(i);e()}if(i==="float"){if(Es(t))return n(t);e()}if(t==="float"){if(Es(i))return n(i);e()}if(fi(i)||pi(i)||fi(t)||pi(t)){if(i===t)return n(i);e()}if(i==="vec2"){if(t==="vec2"||Li(t))return n("vec2");if(t==="mat3x2")return n("vec3");if(t==="mat4x2")return n("vec4");e()}if(i==="vec3"){if(t==="mat2x3")return n("vec2");if(t==="vec3"||Ni(t))return n("vec3");if(t==="mat4x3")return n("vec4");e()}if(i==="vec4"){if(t==="mat2x4")return n("vec2");if(t==="mat3x4")return n("vec3");if(t==="vec4"||Ui(t))return n("vec4");e()}if(t==="vec2"){if(Li(i))return n("vec2");if(i==="mat2x3")return n("vec3");if(i==="mat2x4")return n("vec4");e()}if(t==="vec3"){if(i==="mat3x2")return n("vec2");if(Ni(i))return n("vec3");if(i==="mat3x4")return n("vec4");e()}if(t==="vec4"){if(i==="mat4x2")return n("vec2");if(i==="mat4x3")return n("vec3");if(Ui(i))return n("vec4");e()}if(Li(i)){if(Li(t))return n("mat2");if(t==="mat3x2")return n("mat3x2");if(t==="mat4x2")return n("mat4x2");e()}if(i==="mat2x3"){if(Li(t))return n("mat2x3");if(t==="mat3x2")return n("mat3");if(t==="mat4x2")return n("mat4x3");e()}if(i==="mat2x4"){if(Li(t))return n("mat2x4");if(t==="mat3x2")return n("mat3x4");if(t==="mat4x2")return n("mat4");e()}if(i==="mat3x2"){if(t==="mat2x3")return n("mat2");if(Ni(t))return n("mat3x2");if(t==="mat4x3")return n("mat4x2");e()}if(Ni(i)){if(t==="mat2x3")return n("mat2x3");if(Ni(t))return n("mat3");if(t==="mat4x3")return n("mat4x3");e()}if(i==="mat3x4"){if(t==="mat2x3")return n("mat2x4");if(Ni(t))return n("mat3x4");if(t==="mat4x3")return n("mat4");e()}if(i==="mat4x2"){if(t==="mat2x4")return n("mat2");if(t==="mat3x4")return n("mat3x2");if(Ui(t))return n("mat4x2");e()}if(i==="mat4x3"){if(t==="mat2x4")return n("mat2x3");if(t==="mat3x4")return n("mat3");if(Ui(t))return n("mat4x3");e()}if(Ui(i)){if(t==="mat2x4")return n("mat2x4");if(t==="mat3x4")return n("mat3x4");if(Ui(t))return n("mat4");e()}throw new Error(`Invalid mul types: ${i}, ${t}`)}const ci=(i,t)=>new lE({a:i,b:t}),bl=(i,t)=>new cE({a:i,b:t}),us=(i,t)=>new hE({a:i,b:t});class lE extends Fr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"sum",outTypeFunc:zc}),this.statements=({inputs:n,outputs:s})=>[`${s.sum} = ${n.a} + ${n.b};`]}}class cE extends Fr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"difference",outTypeFunc:oE}),this.statements=({inputs:n,outputs:s})=>[`${s.difference} = ${n.a} - ${n.b};`]}}class hE extends Fr{constructor({a:t,b:e}){super({a:t,b:e,outKey:"product",outTypeFunc:AE}),this.statements=({inputs:n,outputs:s})=>[`${s.product} = ${n.a} * ${n.b};`]}}const uE=i=>new fE({value:i}),dE=i=>new pE({value:i}),wl=i=>new gE({value:i});class fE extends Ur{constructor({value:t}){super({a:t,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:e,outputs:n})=>[`${n.uint} = floatBitsToUint(${e.a});`]}}class pE extends Ur{constructor({value:t}){super({a:t,outKey:"uint",outTypeFunc:()=>"uint"}),this.statements=({inputs:e,outputs:n})=>[`${n.uint} = packHalf2x16(${e.a});`]}}class gE extends Ur{constructor({value:t}){super({a:t,outKey:"rgba8",outTypeFunc:()=>"vec4"}),this.statements=({inputs:e,outputs:n})=>[`uvec4 uRgba = uvec4(${e.a} & 0xffu, (${e.a} >> 8u) & 0xffu, (${e.a} >> 16u) & 0xffu, (${e.a} >> 24u) & 0xffu);`,`${n.rgba8} = vec4(uRgba) / 255.0;`]}}const mE=i=>new xE({a:i}),IE=i=>new BE({vector:i}),EE=({vector:i,vectorType:t,x:e,y:n,z:s,w:r,r:a,g:o,b:l,a:A})=>new SE({vector:i,vectorType:t,x:e,y:n,z:s,w:r,r:a,g:o,b:l,a:A}),CE=(i,t)=>new _E({a:i,b:t});class xE extends Ur{constructor({a:t}){super({a:t,outTypeFunc:e=>e,outKey:"normalize"}),this.statements=({inputs:e,outputs:n})=>[`${n.normalize} = normalize(${e.a});`]}}function yE(i){if(i==="float")return"vec2";if(i==="vec2")return"vec3";if(i==="vec3")return"vec4";throw new Error("Invalid type")}class _E extends Fr{constructor({a:t,b:e}){const n=Qn(t),s=yE(n);super({a:t,b:e,outKey:"extend",outTypeFunc:()=>s}),this.statements=({inputs:r,outputs:a})=>[`${a.extend} = ${s}(${r.a}, ${r.b});`]}}function vE(i){const t=e=>e;switch(i){case"vec2":return t({x:"float",y:"float",r:"float",g:"float"});case"vec3":return t({x:"float",y:"float",z:"float",r:"float",g:"float",b:"float"});case"vec4":return t({x:"float",y:"float",z:"float",w:"float",r:"float",g:"float",b:"float",a:"float"});case"ivec2":return t({x:"int",y:"int",r:"int",g:"int"});case"ivec3":return t({x:"int",y:"int",z:"int",r:"int",g:"int",b:"int"});case"ivec4":return t({x:"int",y:"int",z:"int",w:"int",r:"int",g:"int",b:"int",a:"int"});case"uvec2":return t({x:"uint",y:"uint",r:"uint",g:"uint"});case"uvec3":return t({x:"uint",y:"uint",z:"uint",r:"uint",g:"uint",b:"uint"});case"uvec4":return t({x:"uint",y:"uint",z:"uint",w:"uint",r:"uint",g:"uint",b:"uint",a:"uint"});default:throw new Error(`Invalid vector type: ${i}`)}}class BE extends Ce{constructor({vector:t}){const n={vector:Qn(t)},s=vE(n.vector);super({inTypes:n,outTypes:s,inputs:{vector:t}}),this.statements=({inputs:r,outputs:a})=>{const{x:o,y:l,z:A,w:c,r:h,g:u,b:p,a:g}=a,{vector:m}=r;return[o?`${o} = ${m}.x;`:null,l?`${l} = ${m}.y;`:null,A?`${A} = ${m}.z;`:null,c?`${c} = ${m}.w;`:null,h?`${h} = ${m}.r;`:null,u?`${u} = ${m}.g;`:null,p?`${p} = ${m}.b;`:null,g?`${g} = ${m}.a;`:null].filter(Boolean)}}}class SE extends Ce{constructor({vector:t,vectorType:e,x:n,y:s,z:r,w:a,r:o,g:l,b:A,a:c}){if(!t&&!e)throw new Error("Either vector or vectorType must be provided");const h=e??Qn(t),u=BI(h),p=SI(h),g={vector:h,x:u,y:u,r:u,g:u},m={vector:t,x:n,y:s,r:o,g:l};p>=3&&(Object.assign(g,{z:u,b:u}),Object.assign(m,{z:r,b:A})),p>=4&&(Object.assign(g,{w:u,a:u}),Object.assign(m,{w:a,a:c})),super({inTypes:g,outTypes:{vector:h},inputs:m}),this.statements=({inputs:f,outputs:d})=>{const{vector:_}=d,{vector:E,x:v,y:Q,z:b,w:S,r:T,g:Y,b:I,a:x}=f,N=[`${_}.x = ${v??T??(E?`${E}.x`:Zs(u))};`,`${_}.y = ${Q??Y??(E?`${E}.y`:Zs(u))};`];return p>=3&&N.push(`${_}.z = ${b??I??(E?`${E}.z`:Zs(u))};`),p>=4&&N.push(`${_}.w = ${S??x??(E?`${E}.w`:Zs(u))};`),N}}dynoOut(){return new ze(this,"vector")}}const bE=(i,{scale:t,scales:e,rotate:n,translate:s})=>new ME({position:i,scale:t,scales:e,rotate:n,translate:s}).outputs.position,wE=(i,{scale:t,scales:e,rotate:n})=>new QE({dir:i,scale:t,scales:e,rotate:n}).outputs.dir;class ME extends Ce{constructor({position:t,scale:e,scales:n,rotate:s,translate:r}){super({inTypes:{position:"vec3",scale:"float",scales:"vec3",rotate:"vec4",translate:"vec3"},outTypes:{position:"vec3"},inputs:{position:t,scale:e,scales:n,rotate:s,translate:r},statements:({inputs:a,outputs:o})=>{const{position:l}=o;if(!l)return[];const{scale:A,scales:c,rotate:h,translate:u}=a;return[`${l} = ${a.position??"vec3(0.0, 0.0, 0.0)"};`,A?`${l} *= ${A};`:null,c?`${l} *= ${c};`:null,h?`${l} = quatVec(${h}, ${l});`:null,u?`${l} += ${u};`:null].filter(Boolean)}})}}class QE extends Ce{constructor({dir:t,scale:e,scales:n,rotate:s}){super({inTypes:{dir:"vec3",scale:"float",scales:"vec3",rotate:"vec4"},outTypes:{dir:"vec3"},inputs:{dir:t,scale:e,scales:n,rotate:s},statements:({inputs:r,outputs:a})=>{const{dir:o}=a;if(!o)return[];const{scale:l,scales:A,rotate:c}=r;return[`${o} = ${r.dir??"vec3(0.0, 0.0, 0.0)"};`,l?`${o} *= ${l};`:null,A?`${o} *= ${A};`:null,c?`${o} = quatVec(${c}, ${o});`:null].filter(Boolean)}})}}var TE=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out vec4 target;

{{ GLOBALS }}

void computeReadback(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        computeReadback(index);
    } else {
        target = vec4(0.0, 0.0, 0.0, 0.0);
    }
}`;const Gr=class Vn{constructor({renderer:t}={}){this.renderer=t,this.capacity=0,this.count=0}dispose(){this.target&&(this.target.dispose(),this.target=void 0)}ensureBuffer(t,e){const s=Math.ceil(Math.max(1,t)/$t)*$t*4;if(e.byteLength>=s)return e;const r=new ArrayBuffer(s);if(e instanceof ArrayBuffer)return r;const a=e.constructor;return new a(r)}ensureCapacity(t){const{width:e,height:n,depth:s,maxSplats:r}=$e(t);(!this.target||r>this.capacity)&&(this.dispose(),this.capacity=r,this.target=new nc(e,n,s,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:Ie,minFilter:Ie}),this.target.texture.format=_e,this.target.texture.type=Oe,this.target.texture.internalFormat="RGBA8",this.target.scissorTest=!0)}prepareProgramMaterial(t){let e=Vn.readbackProgram.get(t);if(!e){const s=Nn({index:"int"},{rgba8:"vec4"},({index:r})=>(t.inputs.index=r,{rgba8:new PI({rgba8:t.outputs.rgba8})}));Vn.programTemplate||(Vn.programTemplate=new Gc(TE)),e=new kc({graph:s,inputs:{index:"index"},outputs:{rgba8:"target"},template:Vn.programTemplate}),Object.assign(e.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),Vn.readbackProgram.set(t,e)}const n=e.prepareMaterial();return Vn.fullScreenQuad.material=n,{program:e,material:n}}saveRenderState(t){return{xrEnabled:t.xr.enabled,autoClear:t.autoClear}}resetRenderState(t,e){t.setRenderTarget(null),t.xr.enabled=e.xrEnabled,t.autoClear=e.autoClear}process({count:t,material:e}){const n=this.renderer;if(!n)throw new Error("No renderer");if(!this.target)throw new Error("No target");const s=$t*di;e.uniforms.targetBase.value=0,e.uniforms.targetCount.value=t;let r=0;for(;r<t;){const a=Math.floor(r/s),o=a*s,l=Math.min(di,Math.ceil((t-o)/$t));e.uniforms.targetLayer.value=a,this.target.scissor.set(0,0,$t,l),n.setRenderTarget(this.target,a),n.xr.enabled=!1,n.autoClear=!1,Vn.fullScreenQuad.render(n),r+=$t*l}this.count=t}async read({readback:t}){const e=this.renderer;if(!e)throw new Error("No renderer");if(!this.target)throw new Error("No target");const n=Math.ceil(this.count/$t)*$t;if(t.byteLength<n*4)throw new Error(`Readback buffer too small: ${t.byteLength} < ${n*4}`);const s=new Uint8Array(t instanceof ArrayBuffer?t:t.buffer),r=$t*di;let a=0;const o=[];for(;a<this.count;){const l=Math.floor(a/r),A=l*r,c=Math.min(di,Math.ceil((this.count-A)/$t));e.setRenderTarget(this.target,l);const h=$t*c*4,u=s.subarray(A*4,A*4+h),p=e?.readRenderTargetPixelsAsync(this.target,0,0,$t,c,u);o.push(p),a+=$t*c}return Promise.all(o).then(()=>t)}render({reader:t,count:e,renderer:n}){if(this.renderer=n||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(e);const{program:s,material:r}=this.prepareProgramMaterial(t);s.update();const a=this.saveRenderState(this.renderer);this.process({count:e,material:r}),this.resetRenderState(this.renderer,a)}async readback({readback:t}){if(!this.renderer)throw new Error("No renderer");const e=this.saveRenderState(this.renderer),n=this.read({readback:t});return this.resetRenderState(this.renderer,e),n}async renderReadback({reader:t,count:e,renderer:n,readback:s}){if(this.renderer=n||this.renderer,!this.renderer)throw new Error("No renderer");this.ensureCapacity(e);const{program:r,material:a}=this.prepareProgramMaterial(t);r.update();const o=this.saveRenderState(this.renderer);this.process({count:e,material:a});const l=this.read({readback:s});return this.resetRenderState(this.renderer,o),l}getTexture(){var t;return(t=this.target)==null?void 0:t.texture}};Gr.programTemplate=null;Gr.readbackProgram=new Map;Gr.fullScreenQuad=new yc(new jo({visible:!1}));let Oc=Gr;const sA=class Qe{constructor(t={}){this.capacity=0,this.count=0,this.array=null,this.readback=null,this.source=null,this.needsUpdate=!0,this.dyno=new hn({key:"rgbaArray",type:Hc,globals:()=>[Yc],value:{texture:Qe.getEmpty(),count:0},update:e=>{var n;return e.texture=((n=this.readback)==null?void 0:n.getTexture())??this.source??Qe.getEmpty(),e.count=this.count,e}}),t.array?(this.array=t.array,this.capacity=Math.floor(this.array.length/4),this.capacity=Math.floor(this.capacity/$t)*$t,this.count=Math.min(this.capacity,t.count??Number.POSITIVE_INFINITY)):(this.capacity=t.capacity??0,this.count=0)}dispose(){this.readback&&(this.readback.dispose(),this.readback=null),this.source&&(this.source.dispose(),this.source=null)}ensureCapacity(t){var e;if(!this.array||t>(((e=this.array)==null?void 0:e.length)??0)/4){this.capacity=$e(t).maxSplats;const n=new Uint8Array(this.capacity*4);this.array&&n.set(this.array),this.array=n}return this.array}getTexture(){var t;let e=(t=this.readback)==null?void 0:t.getTexture();return(this.source||this.array)&&(e=this.maybeUpdateSource()),e??Qe.getEmpty()}maybeUpdateSource(){if(!this.array)throw new Error("No array");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:t,height:e,depth:n}=this.source.image;this.capacity!==t*e*n&&(this.source.dispose(),this.source=null)}if(this.source)this.array.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.array.buffer));else{const{width:t,height:e,depth:n}=$e(this.capacity);this.source=new pn(this.array,t,e,n),this.source.format=_e,this.source.type=Oe,this.source.internalFormat="RGBA8",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}render({reader:t,count:e,renderer:n}){this.readback||(this.readback=new Oc({renderer:n})),this.readback.render({reader:t,count:e,renderer:n}),this.capacity=this.readback.capacity,this.count=this.readback.count}fromPackedSplats({packedSplats:t,base:e,count:n,renderer:s}){const{dynoSplats:r,dynoBase:a,dynoCount:o,reader:l}=Qe.makeDynos();return r.packedSplats=t,a.value=e,o.value=n,this.render({reader:l,count:n,renderer:s}),this}async read(){if(!this.readback)throw new Error("No readback");return(!this.array||this.array.length<this.count*4)&&(this.array=new Uint8Array(this.capacity*4)),(await this.readback.readback({readback:this.array})).subarray(0,this.count*4)}static getEmpty(){if(!Qe.emptySource){const t=new Uint8Array(4);Qe.emptySource=new pn(t,1,1,1),Qe.emptySource.format=_e,Qe.emptySource.type=Oe,Qe.emptySource.internalFormat="RGBA8",Qe.emptySource.needsUpdate=!0}return Qe.emptySource}static makeDynos(){if(!Qe.dynos){const t=new aA,e=new To({value:0}),n=new To({value:0}),s=Nn({index:"int"},{rgba8:"vec4"},({index:r})=>{if(!r)throw new Error("index is undefined");r=ci(r,e);const a=QI(t,r,e,n);return{rgba8:ur(a).outputs.rgba}});Qe.dynos={dynoSplats:t,dynoBase:e,dynoCount:n,reader:s}}return Qe.dynos}};sA.emptySource=null;sA.dynos=null;let DE=sA;const Hc={type:"RgbaArray"},Yc=Ye(`
  struct RgbaArray {
    sampler2DArray texture;
    int count;
  };
`);function RE(i,t){return new Ce({inTypes:{rgba:Hc,index:"int"},outTypes:{rgba:"vec4"},inputs:{rgba:i,index:t},globals:()=>[Yc],statements:({inputs:n,outputs:s})=>In(`
        if ((index >= 0) && (index < ${n.rgba}.count)) {
          ${s.rgba} = texelFetch(${n.rgba}.texture, splatTexCoord(index), 0);
        } else {
          ${s.rgba} = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `)}).outputs.rgba}function LE(i){switch(i){case"all":return 0;case"plane":return 1;case"sphere":return 2;case"box":return 3;case"ellipsoid":return 4;case"cylinder":return 5;case"capsule":return 6;case"infinite_cone":return 7;default:throw new Error(`Unknown SDF type: ${i}`)}}function NE(i){switch(i){case"multiply":return 0;case"set_rgb":return 1;case"add_rgba":return 2;default:throw new Error(`Unknown blend mode: ${i}`)}}class UE extends le{constructor(t={}){super();const{type:e,invert:n,opacity:s,color:r,displace:a,radius:o}=t;this.type=e??"sphere",this.invert=n??!1,this.opacity=s??1,this.color=r??new Tt(1,1,1),this.displace=a??new w(0,0,0),this.radius=o??0}}const Vc=class qc extends le{constructor(t={}){const{name:e,rgbaBlendMode:n="multiply",sdfSmooth:s=0,softEdge:r=0,invert:a=!1,sdfs:o=null}=t;super(),this.rgbaBlendMode=n,this.sdfSmooth=s,this.softEdge=r,this.invert=a,this.sdfs=o,this.ordering=qc.nextOrdering++,this.name=e??`Edit ${this.ordering}`}addSdf(t){this.sdfs==null&&(this.sdfs=[]),this.sdfs.includes(t)||this.sdfs.push(t)}removeSdf(t){this.sdfs!=null&&(this.sdfs=this.sdfs.filter(e=>e!==t))}};Vc.nextOrdering=1;let Wc=Vc;class FE{constructor({maxSdfs:t,maxEdits:e}){this.maxSdfs=Math.max(16,t??0),this.numSdfs=0,this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs),this.dynoSdfArray=new hn({key:"sdfArray",type:Jc,globals:()=>[Xc],value:{numSdfs:0,sdfTexture:this.sdfTexture},update:n=>(n.numSdfs=this.numSdfs,n.sdfTexture=this.sdfTexture,n)}),this.maxEdits=Math.max(16,e??0),this.numEdits=0,this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoNumEdits=new To({value:0}),this.dynoEdits=this.newEdits(this.editData,this.maxEdits)}newSdfTexture(t,e){const n=new dm(t,8,e,Tn,Ge);return n.internalFormat="RGBA32UI",n.needsUpdate=!0,n}newEdits(t,e){return new hn({key:"edits",type:"uvec4",count:e,globals:()=>[Kc],value:t})}ensureCapacity({maxSdfs:t,maxEdits:e}){let n=!1;return t>this.sdfTexture.image.height&&(this.sdfTexture.dispose(),this.maxSdfs=Math.max(this.maxSdfs*2,t),this.sdfData=new Uint32Array(this.maxSdfs*8*4),this.sdfFloatData=new Float32Array(this.sdfData.buffer),this.sdfTexture=this.newSdfTexture(this.sdfData,this.maxSdfs)),e>(this.dynoEdits.count??0)&&(this.maxEdits=Math.max(this.maxEdits*2,e),this.editData=new Uint32Array(this.maxEdits*4),this.editFloatData=new Float32Array(this.editData.buffer),this.dynoEdits=this.newEdits(this.editData,this.maxEdits),n=!0),n}updateEditData(t,e){const n=this.editData[t]!==e;return this.editData[t]=e,n}updateEditFloatData(t,e){Fi[0]=e;const n=this.editFloatData[t]!==Fi[0];return n&&(this.editFloatData[t]=Fi[0]),n}encodeEdit(t,{sdfFirst:e,sdfCount:n,invert:s,rgbaBlendMode:r,softEdge:a,sdfSmooth:o}){const l=t*4;let A=!1;return A=this.updateEditData(l+0,r|(s?256:0))||A,A=this.updateEditData(l+1,e|n<<16)||A,A=this.updateEditFloatData(l+2,a)||A,A=this.updateEditFloatData(l+3,o)||A,A}updateSdfData(t,e){const n=this.sdfData[t]!==e;return this.sdfData[t]=e,n}updateSdfFloatData(t,e){Fi[0]=e;const n=this.sdfFloatData[t]!==Fi[0];return n&&(this.sdfFloatData[t]=Fi[0]),n}encodeSdf(t,{sdfType:e,invert:n,center:s,quaternion:r,scale:a,sizes:o},l){const A=t*32,c=e|(n?256:0);let h=!1;h=this.updateSdfFloatData(A+0,s?.x??0)||h,h=this.updateSdfFloatData(A+1,s?.y??0)||h,h=this.updateSdfFloatData(A+2,s?.z??0)||h,h=this.updateSdfData(A+3,c)||h,h=this.updateSdfFloatData(A+4,r?.x??0)||h,h=this.updateSdfFloatData(A+5,r?.y??0)||h,h=this.updateSdfFloatData(A+6,r?.z??0)||h,h=this.updateSdfFloatData(A+7,r?.w??0)||h,h=this.updateSdfFloatData(A+8,a?.x??0)||h,h=this.updateSdfFloatData(A+9,a?.y??0)||h,h=this.updateSdfFloatData(A+10,a?.z??0)||h,h=this.updateSdfData(A+11,0)||h,h=this.updateSdfFloatData(A+12,o?.x??0)||h,h=this.updateSdfFloatData(A+13,o?.y??0)||h,h=this.updateSdfFloatData(A+14,o?.z??0)||h,h=this.updateSdfFloatData(A+15,o?.w??0)||h;const u=Math.min(4,l.length);for(let p=0;p<u;++p){const g=A+16+p*4;h=this.updateSdfFloatData(g+0,l[p].x)||h,h=this.updateSdfFloatData(g+1,l[p].y)||h,h=this.updateSdfFloatData(g+2,l[p].z)||h,h=this.updateSdfFloatData(g+3,l[p].w)||h}return h}update(t){const e=t.reduce((h,{sdfs:u})=>h+u.length,0),n=this.ensureCapacity({maxEdits:t.length,maxSdfs:e}),s=[new Gt,new Gt],r=new w,a=new ae,o=new w,l=new Gt;let A=0,c=n;t.length!==this.dynoNumEdits.value&&(this.dynoNumEdits.value=t.length,this.numEdits=t.length,c=!0);for(const[h,{edit:u,sdfs:p}]of t.entries()){c=this.encodeEdit(h,{sdfFirst:A,sdfCount:p.length,invert:u.invert,rgbaBlendMode:NE(u.rgbaBlendMode),softEdge:u.softEdge,sdfSmooth:u.sdfSmooth})||c;let g=!1;for(const m of p)l.set(m.scale.x,m.scale.y,m.scale.z,m.radius),m.scale.setScalar(1),m.updateMatrixWorld(),m.matrixWorld.clone().invert().decompose(r,a,o),m.scale.set(l.x,l.y,l.z),m.updateMatrixWorld(),s[0].set(m.color.r,m.color.g,m.color.b,m.opacity),s[1].set(m.displace.x,m.displace.y,m.displace.z,1),g=this.encodeSdf(A,{sdfType:LE(m.type),invert:m.invert,center:r,quaternion:a,scale:o,sizes:l},s)||g,A+=1;this.numSdfs=A,g&&(this.sdfTexture.needsUpdate=!0),c||(c=g)}return{updated:c,dynoUpdated:n}}modify(t){return PE(t,this.dynoSdfArray,this.dynoNumEdits,this.dynoEdits)}}const Jc={type:"SdfArray"},Xc=Ye(`
  struct SdfArray {
    int numSdfs;
    usampler2D sdfTexture;
  };

  void unpackSdfArray(
    usampler2D sdfTexture, int sdfIndex, out uint flags,
    out vec3 center, out vec4 quaternion, out vec3 scale, out vec4 sizes,
    int numValues, out vec4 values[4]
  ) {
    uvec4 temp = texelFetch(sdfTexture, ivec2(0, sdfIndex), 0);
    flags = temp.w;
    center = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(1, sdfIndex), 0);
    quaternion = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    temp = texelFetch(sdfTexture, ivec2(2, sdfIndex), 0);
    scale = vec3(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z));

    temp = texelFetch(sdfTexture, ivec2(3, sdfIndex), 0);
    sizes = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));

    for (int i = 0; i < numValues; ++i) {
      temp = texelFetch(sdfTexture, ivec2(4 + i, sdfIndex), 0);
      values[i] = vec4(uintBitsToFloat(temp.x), uintBitsToFloat(temp.y), uintBitsToFloat(temp.z), uintBitsToFloat(temp.w));
    }
  }

  const uint SDF_FLAG_TYPE = 0xFFu;
  const uint SDF_FLAG_INVERT = 1u << 8u;

  const uint SDF_TYPE_ALL = 0u;
  const uint SDF_TYPE_PLANE = 1u;
  const uint SDF_TYPE_SPHERE = 2u;
  const uint SDF_TYPE_BOX = 3u;
  const uint SDF_TYPE_ELLIPSOID = 4u;
  const uint SDF_TYPE_CYLINDER = 5u;
  const uint SDF_TYPE_CAPSULE = 6u;
  const uint SDF_TYPE_INFINITE_CONE = 7u;

  float evaluateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 outValues[4]
  ) {
    float distanceAccum = (smoothK == 0.0) ? 1.0 / 0.0 : 0.0;
    float maxExp = -1.0 / 0.0;
    for (int i = 0; i < numValues; ++i) {
        outValues[i] = vec4(0.0);
    }

    uint flags;
    vec3 center, scale;
    vec4 quaternion, sizes;
    vec4 values[4];

    int sdfLast = min(sdfFirst + sdfCount, numSdfs);
    for (int index = sdfFirst; index < sdfLast; ++index) {
      unpackSdfArray(sdfTexture, index, flags, center, quaternion, scale, sizes, numValues, values);
      uint sdfType = flags & SDF_FLAG_TYPE;
      vec3 sdfPos = quatVec(quaternion, pos * scale) + center;

      float distance;
      switch (sdfType) {
        case SDF_TYPE_ALL:
          distance = -1.0 / 0.0;
          break;
        case SDF_TYPE_PLANE: {
          distance = sdfPos.z;
          break;
        }
        case SDF_TYPE_SPHERE: {
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_BOX: {
          vec3 q = abs(sdfPos) - sizes.xyz + sizes.w;
          distance = length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - sizes.w;
          break;
        }
        case SDF_TYPE_ELLIPSOID: {
          vec3 sizes = sizes.xyz;
          float k0 = length(sdfPos / sizes);
          float k1 = length(sdfPos / dot(sizes, sizes));
          distance = k0 * (k0 - 1.0) / k1;
          break;
        }
        case SDF_TYPE_CYLINDER: {
          vec2 d = abs(vec2(length(sdfPos.xz), sdfPos.y)) - sizes.wy;
          distance = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
          break;
        }
        case SDF_TYPE_CAPSULE: {
          sdfPos.y -= clamp(sdfPos.y, -0.5 * sizes.y, 0.5 * sizes.y);
          distance = length(sdfPos) - sizes.w;
          break;
        }
        case SDF_TYPE_INFINITE_CONE: {
          float angle = 0.25 * PI * sizes.w;
          vec2 c = vec2(sin(angle), cos(angle));
          vec2 q = vec2(length(sdfPos.xy), -sdfPos.z);
          float d = length(q - c * max(dot(q, c), 0.0));
          distance = d * (((q.x * c.y - q.y * c.x) < 0.0) ? -1.0 : 1.0);
          break;
        }
      }

      if ((flags & SDF_FLAG_INVERT) != 0u) {
        distance = -distance;
      }

      if (smoothK == 0.0) {
        if (distance < distanceAccum) {
          distanceAccum = distance;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] = values[i];
          }
        }
      } else {
        float scaledDistance = -distance / smoothK;
        if (scaledDistance > maxExp) {
          float scale = exp(maxExp - scaledDistance);
          distanceAccum *= scale;
          for (int i = 0; i < numValues; ++i) {
            outValues[i] *= scale;
          }
          maxExp = scaledDistance;
        }

        float weight = exp(scaledDistance - maxExp);
        distanceAccum += weight;
        for (int i = 0; i < numValues; ++i) {
          outValues[i] += weight * values[i];
        }
      }
    }

    if (smoothK == 0.0) {
      return distanceAccum;
    } else {
      // Very distant SDFs may result in 0 accumulation
      if (distanceAccum == 0.0) {
        return 1.0 / 0.0;
      }
      for (int i = 0; i < numValues; ++i) {
        outValues[i] /= distanceAccum;
      }
      return (-log(distanceAccum) - maxExp) * smoothK;
    }
  }

  float modulateSdfArray(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, vec3 pos,
    float smoothK, int numValues, out vec4 values[4],
    float softEdge, bool invert
  ) {
    float distance = evaluateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, numValues, values);
    if (invert) {
      distance = -distance;
    }

    return (softEdge == 0.0) ? ((distance < 0.0) ? 1.0 : 0.0)
      : clamp(-distance / softEdge + 0.5, 0.0, 1.0);
  }
`),Kc=Ye(`
  const uint EDIT_FLAG_BLEND = 0xFFu;
  const uint EDIT_BLEND_MULTIPLY = 0u;
  const uint EDIT_BLEND_SET_RGB = 1u;
  const uint EDIT_BLEND_ADD_RGBA = 2u;
  const uint EDIT_FLAG_INVERT = 0x100u;

  void decodeEdit(
    uvec4 packedEdit, out int sdfFirst, out int sdfCount,
    out bool invert, out uint rgbaBlendMode, out float softEdge, out float sdfSmooth
  ) {
    rgbaBlendMode = packedEdit.x & EDIT_FLAG_BLEND;
    invert = (packedEdit.x & EDIT_FLAG_INVERT) != 0u;

    sdfFirst = int(packedEdit.y & 0xFFFFu);
    sdfCount = int(packedEdit.y >> 16u);

    softEdge = uintBitsToFloat(packedEdit.z);
    sdfSmooth = uintBitsToFloat(packedEdit.w);
  }

  void applyRgbaDisplaceEdit(
    usampler2D sdfTexture, int numSdfs, int sdfFirst, int sdfCount, inout vec3 pos,
    float smoothK, float softEdge, bool invert, uint rgbaBlendMode, inout vec4 rgba
  ) {
    vec4 values[4];
    float modulate = modulateSdfArray(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, smoothK, 2, values, softEdge, invert);
    // On Android, moving values[0] is necessary to work around a compiler bug.
    vec4 sdfRgba = values[0];
    vec4 sdfDisplaceScale = values[1];

    vec4 target;
    switch (rgbaBlendMode) {
      case EDIT_BLEND_MULTIPLY:
        target = rgba * sdfRgba;
        break;
      case EDIT_BLEND_SET_RGB:
        target = vec4(sdfRgba.rgb, rgba.a * sdfRgba.a);
        break;
      case EDIT_BLEND_ADD_RGBA:
        target = rgba + sdfRgba;
        break;
      default:
        // Debug output if blend mode not set
        target = vec4(fract(pos), 1.0);
    }
    rgba = mix(rgba, target, modulate);
    pos += sdfDisplaceScale.xyz * modulate;
  }

  void applyPackedRgbaDisplaceEdit(uvec4 packedEdit, usampler2D sdfTexture, int numSdfs, inout vec3 pos, inout vec4 rgba) {
    int sdfFirst, sdfCount;
    bool invert;
    uint rgbaBlendMode;
    float softEdge, sdfSmooth;
    decodeEdit(packedEdit, sdfFirst, sdfCount, invert, rgbaBlendMode, softEdge, sdfSmooth);
    applyRgbaDisplaceEdit(sdfTexture, numSdfs, sdfFirst, sdfCount, pos, sdfSmooth, softEdge, invert, rgbaBlendMode, rgba);
  }
`);function PE(i,t,e,n){return new Ce({inTypes:{gsplat:pe,sdfArray:Jc,numEdits:"int",rgbaDisplaceEdits:"uvec4"},outTypes:{gsplat:pe},globals:()=>[Xc,Kc],inputs:{gsplat:i,sdfArray:t,numEdits:e,rgbaDisplaceEdits:n},statements:({inputs:r,outputs:a})=>{const{sdfArray:o,numEdits:l,rgbaDisplaceEdits:A}=r,{gsplat:c}=a;return In(`
        ${c} = ${r.gsplat};
        if (isGsplatActive(${c}.flags)) {
          for (int editIndex = 0; editIndex < ${l}; ++editIndex) {
            applyPackedRgbaDisplaceEdit(
              ${A}[editIndex], ${o}.sdfTexture, ${o}.numSdfs,
              ${c}.center, ${c}.rgba
            );
          }
        }
      `)}}).outputs.gsplat}const Fi=new Float32Array(1);class kE{constructor(t){this.modifier=t,this.cache=new Map}apply(t){let e=this.cache.get(t);return e||(e=Nn({index:"int"},{gsplat:pe},({index:n})=>{const{gsplat:s}=t.apply({index:n});return this.modifier.apply({gsplat:s})}),this.cache.set(t,e)),e}}class tr{constructor(){this.scale=new Cs({value:Number.NEGATIVE_INFINITY}),this.rotate=new kr({value:new ae(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)}),this.translate=new vr({value:new w(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY)})}apply(t){return bE(t,{scale:this.scale,rotate:this.rotate,translate:this.translate})}applyDir(t){return wE(t,{rotate:this.rotate})}applyGsplat(t){return Nc(t,{scale:this.scale,rotate:this.rotate,translate:this.translate})}updateFromMatrix(t){const e=new w,n=new ae,s=new w;t.decompose(s,n,e);const r=(e.x+e.y+e.z)/3;let a=!1;return r!==this.scale.value&&(this.scale.value=r,a=!0),s.equals(this.translate.value)||(this.translate.value.copy(s),a=!0),n.equals(this.rotate.value)||(this.rotate.value.copy(n),a=!0),a}update(t){return t.updateMatrixWorld(),this.updateFromMatrix(t.matrixWorld)}}class Lo extends le{constructor({numSplats:t,generator:e,construct:n,update:s}){if(super(),this.numSplats=t??0,this.generator=e,this.frameUpdate=s,this.version=0,n){const r=n(this);Object.assign(this,r)}}updateVersion(){this.version+=1}set needsUpdate(t){t&&this.updateVersion()}}const xs=class No extends Lo{constructor(t={}){const e=new tr,n=new tr,s=new tr,r=new tr,a=new kr({value:new Gt(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY)}),o=new Cs({value:0}),l=new Cs({value:0}),A={transform:e,viewToWorld:n,worldToView:s,viewToObject:r,recolor:a,time:o,deltaTime:l};if(super({update:({time:c,deltaTime:h,viewToWorld:u,globalEdits:p})=>this.update({time:c,deltaTime:h,viewToWorld:u,globalEdits:p})}),this.isInitialized=!1,this.recolor=new Tt(1,1,1),this.opacity=1,this.enableViewToObject=!1,this.enableViewToWorld=!1,this.enableWorldToView=!1,this.skinning=null,this.edits=null,this.rgbaDisplaceEdits=null,this.splatRgba=null,this.maxSh=3,this.packedSplats=t.packedSplats??new mi,this.packedSplats.splatEncoding=t.splatEncoding??{...zr},this.numSplats=this.packedSplats.numSplats,this.editable=t.editable??!0,this.onFrame=t.onFrame,this.context=A,this.objectModifier=t.objectModifier,this.worldModifier=t.worldModifier,this.updateGenerator(),t.url||t.fileBytes||t.constructSplats||t.packedSplats&&!t.packedSplats.isInitialized)this.initialized=this.asyncInitialize(t).then(async()=>{if(this.updateGenerator(),this.isInitialized=!0,t.onLoad){const c=t.onLoad(this);c instanceof Promise&&await c}return this});else if(this.isInitialized=!0,this.initialized=Promise.resolve(this),t.onLoad){const c=t.onLoad(this);c instanceof Promise&&(this.initialized=c.then(()=>this))}this.add(JE())}async asyncInitialize(t){const{url:e,fileBytes:n,fileType:s,fileName:r,maxSplats:a,constructSplats:o,splatEncoding:l}=t;if(e||n||o){const A={url:e,fileBytes:n,fileType:s,fileName:r,maxSplats:a,construct:o,splatEncoding:l};this.packedSplats.reinitialize(A)}this.packedSplats&&(await this.packedSplats.initialized,this.numSplats=this.packedSplats.numSplats,this.updateGenerator())}static async staticInitialize(){await Rc(),No.isStaticInitialized=!0}pushSplat(t,e,n,s,r){this.packedSplats.pushSplat(t,e,n,s,r)}forEachSplat(t){this.packedSplats.forEachSplat(t)}dispose(){this.packedSplats.dispose()}getBoundingBox(t=!0){if(!this.initialized)throw new Error("Cannot get bounding box before SplatMesh is initialized");const e=new w(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),n=new w(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),s=new w,r=[-1,1];return this.packedSplats.forEachSplat((o,l,A,c,h,u)=>{if(t)e.min(l),n.max(l);else for(const p of r)for(const g of r)for(const m of r)s.set(p*A.x,g*A.y,m*A.z),s.applyQuaternion(c),s.add(l),e.min(s),n.max(s)}),new Un(e,n)}constructGenerator(t){const{transform:e,viewToObject:n,recolor:s}=t,r=Nn({index:"int"},{gsplat:pe},({index:a})=>{if(!a)throw new Error("index is undefined");let o=ms(this.packedSplats.dyno,a);if(this.maxSh>=1){const{sh1Texture:A,sh2Texture:c,sh3Texture:h}=this.ensureShTextures();if(A){let u=function(E,v){const{x:Q,y:b}=IE(v).outputs,S=us(ci(Q,b),gs("float",.5)),T=us(bl(b,Q),gs("float",.5));return ci(S,us(E,T))};const p=n.translate,{center:g}=ur(o).outputs,m=mE(bl(g,p)),f=HE(o,A,m);let d=u(f,this.packedSplats.dynoSh1MinMax);if(this.maxSh>=2&&c){const E=YE(o,c,m);d=ci(d,u(E,this.packedSplats.dynoSh2MinMax))}if(this.maxSh>=3&&h){const E=VE(o,h,m);d=ci(d,u(E,this.packedSplats.dynoSh3MinMax))}let{rgba:_}=ur(o).outputs;_=ci(_,CE(d,gs("float",0))),o=Da({gsplat:o,rgba:_})}}if(this.splatRgba){const A=RE(this.splatRgba.dyno,a);o=Da({gsplat:o,rgba:A})}this.skinning&&(o=this.skinning.modify(o)),this.objectModifier&&(o=this.objectModifier.apply({gsplat:o}).gsplat),o=e.applyGsplat(o);const l=us(s,ur(o).outputs.rgba);return o=Da({gsplat:o,rgba:l}),this.rgbaDisplaceEdits&&(o=this.rgbaDisplaceEdits.modify(o)),this.worldModifier&&(o=this.worldModifier.apply({gsplat:o}).gsplat),{gsplat:o}});this.generator=r}updateGenerator(){this.constructGenerator(this.context)}update({time:t,viewToWorld:e,deltaTime:n,globalEdits:s}){var r;this.numSplats=this.packedSplats.numSplats,this.context.time.value=t,this.context.deltaTime.value=n,No.dynoTime.value=t;const{transform:a,viewToObject:o,recolor:l}=this.context;let A=a.update(this);this.context.viewToWorld.updateFromMatrix(e)&&this.enableViewToWorld&&(A=!0);const c=e.clone().invert();this.context.worldToView.updateFromMatrix(c)&&this.enableWorldToView&&(A=!0);const p=new Ht().compose(a.translate.value,a.rotate.value,new w().setScalar(a.scale.value)).invert().multiply(e);o.updateFromMatrix(p)&&(this.enableViewToObject||this.packedSplats.extra.sh1)&&(A=!0);const g=new Gt(this.recolor.r,this.recolor.g,this.recolor.b,this.opacity);g.equals(l.value)||(l.value.copy(g),A=!0);const m=this.editable?(this.edits??[]).concat(s):[];this.editable&&!this.edits&&this.traverseVisible(d=>{d instanceof Wc&&m.push(d)}),m.sort((d,_)=>d.ordering-_.ordering);const f=m.map(d=>{if(d.sdfs!=null)return{edit:d,sdfs:d.sdfs};const _=[];return d.traverseVisible(E=>{E instanceof UE&&_.push(E)}),{edit:d,sdfs:_}});if(f.length>0&&!this.rgbaDisplaceEdits){const d=f.length,_=f.reduce((E,v)=>E+v.sdfs.length,0);this.rgbaDisplaceEdits=new FE({maxEdits:d,maxSdfs:_}),this.updateGenerator()}if(this.rgbaDisplaceEdits){const d=this.rgbaDisplaceEdits.update(f);A||(A=d.updated),d.dynoUpdated&&this.updateGenerator()}A&&this.updateVersion(),(r=this.onFrame)==null||r.call(this,{mesh:this,time:t,deltaTime:n})}raycast(t,e){var n,s;if(!this.packedSplats.packedArray||!this.packedSplats.numSplats)return;const{near:r,far:a,ray:o}=t,l=this.matrixWorld.clone().invert(),A=new Nt().setFromMatrix4(l),c=o.origin.clone().applyMatrix4(l),h=o.direction.clone().applyMatrix3(A),u=new w;l.decompose(new w,new ae,u),(u.x*u.y*u.z)**(1/3);const g=fI(c.x,c.y,c.z,h.x,h.y,h.z,r,a,this.packedSplats.numSplats,this.packedSplats.packedArray,!0,((n=this.packedSplats.splatEncoding)==null?void 0:n.lnScaleMin)??Rn,((s=this.packedSplats.splatEncoding)==null?void 0:s.lnScaleMax)??Ln);for(const m of g){const f=o.direction.clone().multiplyScalar(m).add(o.origin);e.push({distance:m,point:f,object:this})}}ensureShTextures(){if(!this.packedSplats.extra.sh1)return{};let t=this.packedSplats.extra.sh1Texture;if(!t){let s=this.packedSplats.extra.sh1;const{width:r,height:a,depth:o,maxSplats:l}=$e(s.length/2);if(s.length<l*2){const c=new Uint32Array(l*2);c.set(s),this.packedSplats.extra.sh1=c,s=c}const A=new pn(s,r,a,o);A.format=wr,A.type=Ge,A.internalFormat="RG32UI",A.needsUpdate=!0,t=new La({value:A,key:"sh1"}),this.packedSplats.extra.sh1Texture=t}if(!this.packedSplats.extra.sh2)return{sh1Texture:t};let e=this.packedSplats.extra.sh2Texture;if(!e){let s=this.packedSplats.extra.sh2;const{width:r,height:a,depth:o,maxSplats:l}=$e(s.length/4);if(s.length<l*4){const c=new Uint32Array(l*4);c.set(s),this.packedSplats.extra.sh2=c,s=c}const A=new pn(s,r,a,o);A.format=Tn,A.type=Ge,A.internalFormat="RGBA32UI",A.needsUpdate=!0,e=new La({value:A,key:"sh2"}),this.packedSplats.extra.sh2Texture=e}if(!this.packedSplats.extra.sh3)return{sh1Texture:t,sh2Texture:e};let n=this.packedSplats.extra.sh3Texture;if(!n){let s=this.packedSplats.extra.sh3;const{width:r,height:a,depth:o,maxSplats:l}=$e(s.length/4);if(s.length<l*4){const c=new Uint32Array(l*4);c.set(s),this.packedSplats.extra.sh3=c,s=c}const A=new pn(s,r,a,o);A.format=Tn,A.type=Ge,A.internalFormat="RGBA32UI",A.needsUpdate=!0,n=new La({value:A,key:"sh3"}),this.packedSplats.extra.sh3Texture=n}return{sh1Texture:t,sh2Texture:e,sh3Texture:n}}};xs.staticInitialized=xs.staticInitialize();xs.isStaticInitialized=!1;xs.dynoTime=new Cs({value:0});let qi=xs;const GE=Ye(`
  vec3 evaluateSH1(Gsplat gsplat, usampler2DArray sh1, vec3 viewDir) {
    // Extract sint7 values packed into 2 x uint32
    uvec2 packed = texelFetch(sh1, splatTexCoord(gsplat.index), 0).rg;
    vec3 sh1_0 = vec3(ivec3(
      int(packed.x << 25u) >> 25,
      int(packed.x << 18u) >> 25,
      int(packed.x << 11u) >> 25
    )) / 63.0;
    vec3 sh1_1 = vec3(ivec3(
      int(packed.x << 4u) >> 25,
      int((packed.x >> 3u) | (packed.y << 29u)) >> 25,
      int(packed.y << 22u) >> 25
    )) / 63.0;
    vec3 sh1_2 = vec3(ivec3(
      int(packed.y << 15u) >> 25,
      int(packed.y << 8u) >> 25,
      int(packed.y << 1u) >> 25
    )) / 63.0;

    return sh1_0 * (-0.4886025 * viewDir.y)
      + sh1_1 * (0.4886025 * viewDir.z)
      + sh1_2 * (-0.4886025 * viewDir.x);
  }
`),zE=Ye(`
  vec3 evaluateSH2(Gsplat gsplat, usampler2DArray sh2, vec3 viewDir) {
    // Extract sint8 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh2, splatTexCoord(gsplat.index), 0);
    vec3 sh2_0 = vec3(ivec3(
      int(packed.x << 24u) >> 24,
      int(packed.x << 16u) >> 24,
      int(packed.x << 8u) >> 24
    )) / 127.0;
    vec3 sh2_1 = vec3(ivec3(
      int(packed.x) >> 24,
      int(packed.y << 24u) >> 24,
      int(packed.y << 16u) >> 24
    )) / 127.0;
    vec3 sh2_2 = vec3(ivec3(
      int(packed.y << 8u) >> 24,
      int(packed.y) >> 24,
      int(packed.z << 24u) >> 24
    )) / 127.0;
    vec3 sh2_3 = vec3(ivec3(
      int(packed.z << 16u) >> 24,
      int(packed.z << 8u) >> 24,
      int(packed.z) >> 24
    )) / 127.0;
    vec3 sh2_4 = vec3(ivec3(
      int(packed.w << 24u) >> 24,
      int(packed.w << 16u) >> 24,
      int(packed.w << 8u) >> 24
    )) / 127.0;

    return sh2_0 * (1.0925484 * viewDir.x * viewDir.y)
      + sh2_1 * (-1.0925484 * viewDir.y * viewDir.z)
      + sh2_2 * (0.3153915 * (2.0 * viewDir.z * viewDir.z - viewDir.x * viewDir.x - viewDir.y * viewDir.y))
      + sh2_3 * (-1.0925484 * viewDir.x * viewDir.z)
      + sh2_4 * (0.5462742 * (viewDir.x * viewDir.x - viewDir.y * viewDir.y));
  }
`),OE=Ye(`
  vec3 evaluateSH3(Gsplat gsplat, usampler2DArray sh3, vec3 viewDir) {
    // Extract sint6 values packed into 4 x uint32
    uvec4 packed = texelFetch(sh3, splatTexCoord(gsplat.index), 0);
    vec3 sh3_0 = vec3(ivec3(
      int(packed.x << 26u) >> 26,
      int(packed.x << 20u) >> 26,
      int(packed.x << 14u) >> 26
    )) / 31.0;
    vec3 sh3_1 = vec3(ivec3(
      int(packed.x << 8u) >> 26,
      int(packed.x << 2u) >> 26,
      int((packed.x >> 4u) | (packed.y << 28u)) >> 26
    )) / 31.0;
    vec3 sh3_2 = vec3(ivec3(
      int(packed.y << 22u) >> 26,
      int(packed.y << 16u) >> 26,
      int(packed.y << 10u) >> 26
    )) / 31.0;
    vec3 sh3_3 = vec3(ivec3(
      int(packed.y << 4u) >> 26,
      int((packed.y >> 2u) | (packed.z << 30u)) >> 26,
      int(packed.z << 24u) >> 26
    )) / 31.0;
    vec3 sh3_4 = vec3(ivec3(
      int(packed.z << 18u) >> 26,
      int(packed.z << 12u) >> 26,
      int(packed.z << 6u) >> 26
    )) / 31.0;
    vec3 sh3_5 = vec3(ivec3(
      int(packed.z) >> 26,
      int(packed.w << 26u) >> 26,
      int(packed.w << 20u) >> 26
    )) / 31.0;
    vec3 sh3_6 = vec3(ivec3(
      int(packed.w << 14u) >> 26,
      int(packed.w << 8u) >> 26,
      int(packed.w << 2u) >> 26
    )) / 31.0;

    float xx = viewDir.x * viewDir.x;
    float yy = viewDir.y * viewDir.y;
    float zz = viewDir.z * viewDir.z;
    float xy = viewDir.x * viewDir.y;
    float yz = viewDir.y * viewDir.z;
    float zx = viewDir.z * viewDir.x;

    return sh3_0 * (-0.5900436 * viewDir.y * (3.0 * xx - yy))
      + sh3_1 * (2.8906114 * xy * viewDir.z) +
      + sh3_2 * (-0.4570458 * viewDir.y * (4.0 * zz - xx - yy))
      + sh3_3 * (0.3731763 * viewDir.z * (2.0 * zz - 3.0 * xx - 3.0 * yy))
      + sh3_4 * (-0.4570458 * viewDir.x * (4.0 * zz - xx - yy))
      + sh3_5 * (1.4453057 * viewDir.z * (xx - yy))
      + sh3_6 * (-0.5900436 * viewDir.x * (xx - 3.0 * yy));
  }
`);function HE(i,t,e){return Nr({inTypes:{gsplat:pe,sh1:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh1:t,viewDir:e},globals:()=>[En,GE],statements:({inputs:n,outputs:s})=>In(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH1(${n.gsplat}, ${n.sh1}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function YE(i,t,e){return Nr({inTypes:{gsplat:pe,sh2:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh2:t,viewDir:e},globals:()=>[En,zE],statements:({inputs:n,outputs:s})=>In(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH2(${n.gsplat}, ${n.sh2}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}function VE(i,t,e){return Nr({inTypes:{gsplat:pe,sh3:"usampler2DArray",viewDir:"vec3"},outTypes:{rgb:"vec3"},inputs:{gsplat:i,sh3:t,viewDir:e},globals:()=>[En,OE],statements:({inputs:n,outputs:s})=>In(`
        if (isGsplatActive(${n.gsplat}.flags)) {
          ${s.rgb} = evaluateSH3(${n.gsplat}, ${n.sh3}, ${n.viewDir});
        } else {
          ${s.rgb} = vec3(0.0);
        }
      `)}).outputs.rgb}const qE=new He,WE=new cn;function JE(){const i=new we(qE,WE);return i.frustumCulled=!1,i.onBeforeRender=function(t,e){if(!e.isScene){this.removeFromParent();return}let n=!1;e.traverse(s=>{s instanceof Nl&&(n=!0)}),n||e.add(new Nl({renderer:t})),this.removeFromParent()},i}const Ml=["char","uchar","short","ushort","int","uint","float","double"],jc=class dr{constructor({fileBytes:t}){this.header="",this.littleEndian=!0,this.elements={},this.comments=[],this.data=null,this.numSplats=0,this.fileBytes=t instanceof ArrayBuffer?new Uint8Array(t):t}async parseHeader(){const e=new ReadableStream({start:a=>{a.enqueue(this.fileBytes.slice(0,65536)),a.close()}}).pipeThrough(new TextDecoderStream).getReader();this.header="";const n=`end_header
`;for(;;){const{value:a,done:o}=await e.read();if(o)throw new Error("Failed to read header");this.header+=a;const l=this.header.indexOf(n);if(l>=0){this.header=this.header.slice(0,l+n.length);break}}const s=new TextEncoder().encode(this.header).length;this.data=new DataView(this.fileBytes.buffer,s),this.elements={};let r=null;this.comments=[],this.header.trim().split(`
`).forEach((a,o)=>{const l=a.trim();if(o===0){if(l!=="ply")throw new Error("Invalid PLY header");return}if(l.length===0)return;const A=l.split(" ");switch(A[0]){case"format":if(A[1]==="binary_little_endian")this.littleEndian=!0;else if(A[1]==="binary_big_endian")this.littleEndian=!1;else throw new Error(`Unsupported PLY format: ${A[1]}`);if(A[2]!=="1.0")throw new Error(`Unsupported PLY version: ${A[2]}`);break;case"end_header":break;case"comment":this.comments.push(l.slice(8));break;case"element":{const c=A[1];r={name:c,count:Number.parseInt(A[2]),properties:{}},this.elements[c]=r;break}case"property":if(r==null)throw new Error("Property must be inside an element");A[1]==="list"?r.properties[A[4]]={isList:!0,type:A[3],countType:A[2]}:r.properties[A[2]]={isList:!1,type:A[1]};break}}),this.elements.vertex&&(this.numSplats=this.elements.vertex.count)}parseData(t){let e=0;const n=this.data;if(n==null)throw new Error("No data to parse");for(const s in this.elements){const r=this.elements[s],{count:a,properties:o}=r,l=ZE(o),A=$E(o,this.littleEndian),c=t(r)??(()=>{});for(let h=0;h<a;h++)e=A(n,e,l),c(h,l)}}parseSplats(t,e){if(this.elements.vertex==null)throw new Error("No vertex element found");let n=!1;const s=[];let r=0,a=[],o=[],l=[],A,c,h;function u(){const d=jE[r];a=new Array(3).fill(null).flatMap((_,E)=>[0,1,2].map((v,Q)=>E+Q*d/3)),o=new Array(5).fill(null).flatMap((_,E)=>[0,1,2].map((v,Q)=>3+E+Q*d/3)),l=new Array(7).fill(null).flatMap((_,E)=>[0,1,2].map((v,Q)=>8+E+Q*d/3)),A=r>=1?new Float32Array(9):void 0,c=r>=2?new Float32Array(15):void 0,h=r>=3?new Float32Array(21):void 0}function p(d,_){if(!A)throw new Error("Missing sh1");const E=_.f_rest;for(let v=0;v<a.length;v++)A[v]=E[a[v]]*8/255-4;if(c)for(let v=0;v<o.length;v++)c[v]=E[o[v]]*8/255-4;if(h)for(let v=0;v<l.length;v++)h[v]=E[l[v]]*8/255-4;e?.(d,A,c,h)}function g(d){const{min_x:_,min_y:E,min_z:v,max_x:Q,max_y:b,max_z:S,min_scale_x:T,min_scale_y:Y,min_scale_z:I,max_scale_x:x,max_scale_y:N,max_scale_z:P}=d.properties;if(!_||!E||!v||!Q||!b||!S||!T||!Y||!I||!x||!N||!P)throw new Error("Missing PLY chunk properties");return n=!0,(z,J)=>{const{min_x:U,min_y:K,min_z:O,max_x:nt,max_y:it,max_z:rt,min_scale_x:Dt,min_scale_y:Mt,min_scale_z:V,max_scale_x:j,max_scale_y:ot,max_scale_z:$,min_r:yt,min_g:mt,min_b:Qt,max_r:Pt,max_g:Rt,max_b:M}=J;s.push({min_x:U,min_y:K,min_z:O,max_x:nt,max_y:it,max_z:rt,min_scale_x:Dt,min_scale_y:Mt,min_scale_z:V,max_scale_x:j,max_scale_y:ot,max_scale_z:$,min_r:yt,min_g:mt,min_b:Qt,max_r:Pt,max_g:Rt,max_b:M})}}function m(d){if(e&&d.name==="sh")return r=Uo(d.properties),u(),p;if(d.name!=="vertex")return null;const{packed_position:_,packed_rotation:E,packed_scale:v,packed_color:Q}=d.properties;if(!_||!E||!v||!Q)throw new Error("Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color");const b=Math.sqrt(2);return(S,T)=>{const Y=s[S>>>8];if(Y==null)throw new Error("Missing PLY chunk");const{min_x:I,min_y:x,min_z:N,max_x:P,max_y:z,max_z:J,min_scale_x:U,min_scale_y:K,min_scale_z:O,max_scale_x:nt,max_scale_y:it,max_scale_z:rt,min_r:Dt,min_g:Mt,min_b:V,max_r:j,max_g:ot,max_b:$}=Y,{packed_position:yt,packed_rotation:mt,packed_scale:Qt,packed_color:Pt}=T,Rt=(yt>>>21&2047)/2047*(P-I)+I,M=(yt>>>11&1023)/1023*(z-x)+x,xe=(yt&2047)/2047*(J-N)+N,Ut=((mt>>>20&1023)/1023-.5)*b,kt=((mt>>>10&1023)/1023-.5)*b,_t=((mt&1023)/1023-.5)*b,Vt=Math.sqrt(Math.max(0,1-Ut*Ut-kt*kt-_t*_t)),Ct=mt>>>30,B=Ct===0?Ut:Ct===1?Vt:kt,C=Ct<=1?kt:Ct===2?Vt:_t,F=Ct<=2?_t:Vt,W=Ct===0?Vt:Ut,Z=Math.exp((Qt>>>21&2047)/2047*(nt-U)+U),q=Math.exp((Qt>>>11&1023)/1023*(it-K)+K),It=Math.exp((Qt&2047)/2047*(rt-O)+O),at=(Pt>>>24&255)/255*((j??1)-(Dt??0))+(Dt??0),ut=(Pt>>>16&255)/255*((ot??1)-(Mt??0))+(Mt??0),zt=(Pt>>>8&255)/255*(($??1)-(V??0))+(V??0),tt=(Pt&255)/255;t(S,Rt,M,xe,Z,q,It,B,C,F,W,tt,at,ut,zt)}}const f=d=>{if(d.name==="chunk")return g(d);if(n)return m(d);if(d.name!=="vertex")return null;const{x:_,y:E,z:v,scale_0:Q,scale_1:b,scale_2:S,rot_0:T,rot_1:Y,rot_2:I,rot_3:x,opacity:N,f_dc_0:P,f_dc_1:z,f_dc_2:J,red:U,green:K,blue:O,alpha:nt}=d.properties;if(!_||!E||!v)throw new Error("Missing PLY properties: x, y, z");const it=Q&&b&&S,rt=T&&Y&&I&&x,Dt=nt!=null?nr[nt.type]:1,Mt=U!=null?nr[U.type]:1,V=K!=null?nr[K.type]:1,j=O!=null?nr[O.type]:1;return r=Uo(d.properties),u(),(ot,$)=>{const yt=it?Math.exp($.scale_0):dr.defaultPointScale,mt=it?Math.exp($.scale_1):dr.defaultPointScale,Qt=it?Math.exp($.scale_2):dr.defaultPointScale,Pt=rt?$.rot_1:0,Rt=rt?$.rot_2:0,M=rt?$.rot_3:0,xe=rt?$.rot_0:1,Ut=N!=null?1/(1+Math.exp(-$.opacity)):nt!=null?$.alpha/Dt:1,kt=P!=null?$.f_dc_0*er+.5:U!=null?$.red/Mt:1,_t=z!=null?$.f_dc_1*er+.5:K!=null?$.green/V:1,Vt=J!=null?$.f_dc_2*er+.5:O!=null?$.blue/j:1;if(t(ot,$.x,$.y,$.z,yt,mt,Qt,Pt,Rt,M,xe,Ut,kt,_t,Vt),e&&A){const Ct=$.f_rest;if(A)for(let B=0;B<a.length;B++)A[B]=Ct[a[B]];if(c)for(let B=0;B<o.length;B++)c[B]=Ct[o[B]];if(h)for(let B=0;B<l.length;B++)h[B]=Ct[l[B]];e(ot,A,c,h)}}};this.parseData(f)}injectRgba(t){let e=0;const n=this.data;if(n==null)throw new Error("No parsed data");if(t.length!==this.numSplats*4)throw new Error("Invalid RGBA array length");for(const s in this.elements){const r=this.elements[s],{count:a,properties:o}=r,l=[];let A=0;const c=s==="vertex";if(c){for(const h of["opacity","f_dc_0","f_dc_1","f_dc_2"])if(!o[h]||o[h].type!=="float")throw new Error(`Can't injectRgba due to property: ${h}`)}for(const[h,u]of Object.entries(o))if(u.isList)l.push(()=>{const p=Gi[u.countType](n,e,this.littleEndian);e+=ln[u.countType],e+=p*ln[u.type]});else{if(c)if(h==="f_dc_0"||h==="f_dc_1"||h==="f_dc_2"){const p=Number.parseInt(h.slice(5));l.push(()=>{const g=(t[A+p]/255-.5)/er;Ql[u.type](n,e,this.littleEndian,g)})}else h==="opacity"&&l.push(()=>{const p=Math.max(-100,Math.min(100,-Math.log(1/(t[A+3]/255)-1)));Ql[u.type](n,e,this.littleEndian,p)});l.push(()=>{e+=ln[u.type]})}for(let h=0;h<a;h++){for(const u of l)u();c&&(A+=4)}}}};jc.defaultPointScale=.001;let XE=jc;const er=.28209479177387814,Gi={char:(i,t,e)=>i.getInt8(t),uchar:(i,t,e)=>i.getUint8(t),short:(i,t,e)=>i.getInt16(t,e),ushort:(i,t,e)=>i.getUint16(t,e),int:(i,t,e)=>i.getInt32(t,e),uint:(i,t,e)=>i.getUint32(t,e),float:(i,t,e)=>i.getFloat32(t,e),double:(i,t,e)=>i.getFloat64(t,e)},Ql={char:(i,t,e,n)=>{i.setInt8(t,n)},uchar:(i,t,e,n)=>{i.setUint8(t,n)},short:(i,t,e,n)=>{i.setInt16(t,n,e)},ushort:(i,t,e,n)=>{i.setUint16(t,n,e)},int:(i,t,e,n)=>{i.setInt32(t,n,e)},uint:(i,t,e,n)=>{i.setUint32(t,n,e)},float:(i,t,e,n)=>{i.setFloat32(t,n,e)},double:(i,t,e,n)=>{i.setFloat64(t,n,e)}},ln={char:1,uchar:1,short:2,ushort:2,int:4,uint:4,float:4,double:8},nr={char:127,uchar:255,short:32767,ushort:65535,int:2147483647,uint:4294967295,float:1,double:1},KE={0:0,9:1,24:2,45:3},jE={0:0,1:9,2:24,3:45},rA=/^f_rest_([0-9]{1,2})$/;function ZE(i){const t={};for(const[e,n]of Object.entries(i))rA.test(e)?t.f_rest=new Array(Uo(i)):t[e]=n.isList?[]:0;return t}function $E(i,t){return nC(i)?iC(i,t):sC(i,t)}const tC=(()=>{try{new Function("return 42;")}catch{return!1}return!0})(),eC=/^[a-zA-Z0-9_]+$/;function nC(i){if(!tC)return!1;for(const[t,e]of Object.entries(i))if(!eC.test(t)||e.isList&&!Ml.includes(e.countType)||!Ml.includes(e.type))return!1;return!0}function iC(i,t){const e=["let list;"];for(const[s,r]of Object.entries(i)){const a=s.match(rA);if(a){const o=+a[1];e.push(`
        item.f_rest[${o}] = PARSE_FIELD['${r.type}'](data, offset, ${t});
        offset += ${ln[r.type]};
      `)}else r.isList?e.push(`
        list = item['${s}'];
        list.length = PARSE_FIELD['${r.countType}'](data, offset, ${t});
        offset += ${ln[r.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['${r.type}'](data, offset, ${t});
          offset += ${ln[r.type]};
        }
      `):e.push(`
        item['${s}'] = PARSE_FIELD['${r.type}'](data, offset, ${t});
        offset += ${ln[r.type]};
      `)}e.push("return offset;");const n=new Function("data","offset","item","PARSE_FIELD",e.join(`
`));return(s,r,a)=>n(s,r,a,Gi)}function sC(i,t){const e=[];for(const[n,s]of Object.entries(i)){const r=n.match(rA);if(r){const a=+r[1];e.push((o,l,A)=>(A.f_rest[a]=Gi[s.type](o,l,t),l+ln[s.type]))}else s.isList?e.push((a,o,l)=>{const A=l[n];A.length=Gi[s.countType](a,o,t);let c=o+ln[s.countType];for(let h=0;h<A.length;h++)A[h]=Gi[s.type](a,c,t),c+=ln[s.type];return c}):e.push((a,o,l)=>(l[n]=Gi[s.type](a,o,t),o+ln[s.type]))}return(n,s,r)=>{let a=s;for(let o=0;o<e.length;o++)a=e[o](n,a,r);return a}}function Uo(i){let t=0;for(;i[`f_rest_${t}`];)t+=1;const e=KE[t];if(e==null)throw new Error(`Unsupported number of SH coefficients: ${t}`);return e}const Zc=`(function() {
  "use strict";
  let wasm;
  const cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
    throw Error("TextDecoder not available");
  } };
  if (typeof TextDecoder !== "undefined") {
    cachedTextDecoder.decode();
  }
  let cachedUint8ArrayMemory0 = null;
  function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
      cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
  }
  function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
  }
  function sort_splats(num_splats, readback, ordering) {
    const ret = wasm.sort_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  function sort32_splats(num_splats, readback, ordering) {
    const ret = wasm.sort32_splats(num_splats, readback, ordering);
    return ret >>> 0;
  }
  async function __wbg_load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn("\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n", e);
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module };
      } else {
        return instance;
      }
    }
  }
  function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_buffer_609cc3eee51ed158 = function(arg0) {
      const ret = arg0.buffer;
      return ret;
    };
    imports.wbg.__wbg_length_3b4f022188ae8db6 = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_6ca527665d89694d = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_length_8cfd2c6409af88ad = function(arg0) {
      const ret = arg0.length;
      return ret;
    };
    imports.wbg.__wbg_new_9fee97a409b32b68 = function(arg0) {
      const ret = new Uint16Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_new_e3b321dcfef89fc7 = function(arg0) {
      const ret = new Uint32Array(arg0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_e6b7e69acd4c7354 = function(arg0, arg1, arg2) {
      const ret = new Float32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_f1dead44d1fc7212 = function(arg0, arg1, arg2) {
      const ret = new Uint32Array(arg0, arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_newwithlength_5a5efe313cfd59f1 = function(arg0) {
      const ret = new Float32Array(arg0 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_set_10bad9bee0e9c58b = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_d23661d19148b229 = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_set_f4f1f0daa30696fc = function(arg0, arg1, arg2) {
      arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbg_subarray_3aaeec89bb2544f0 = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbg_subarray_769e1e0f81bb259b = function(arg0, arg1, arg2) {
      const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
      return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
      const table = wasm.__wbindgen_export_0;
      const offset = table.grow(4);
      table.set(0, void 0);
      table.set(offset + 0, void 0);
      table.set(offset + 1, null);
      table.set(offset + 2, true);
      table.set(offset + 3, false);
    };
    imports.wbg.__wbindgen_memory = function() {
      const ret = wasm.memory;
      return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    };
    return imports;
  }
  function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
  }
  async function __wbg_init(module_or_path) {
    if (wasm !== void 0) return wasm;
    if (typeof module_or_path !== "undefined") {
      if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
        ({ module_or_path } = module_or_path);
      } else {
        console.warn("using deprecated parameters for the initialization function; pass a single object instead");
      }
    }
    if (typeof module_or_path === "undefined") {
      module_or_path = new URL("data:application/wasm;base64,AGFzbQEAAAABzAEeYAJ/fwF/YAJ/fwBgA39/fwF/YAF/AX9gA39/fwBgAX8AYAV/f39/fwBgA29/fwFvYAV/f39/fwF/YAFvAW9gA29vfwBgAW8Bf2AAAX9gBH9/f38AYAAAYAR/f39/AX9gA39vbwF/YAF/AW9gAAFvYAF9AX1gBn9/f39/fwBgDX19fX19fX19f29/fX0Bb2AGf39/f39/AX9gBX9/fH9/AGAEf3x/fwBgBX9/fX9/AGAEf31/fwBgBX9/fn9/AGAEf35/fwBgAn19AX0C8gQRA3diZx1fX3diZ19idWZmZXJfNjA5Y2MzZWVlNTFlZDE1OAAJA3diZxpfX3diZ19uZXdfOWZlZTk3YTQwOWIzMmI2OAAJA3diZxpfX3diZ19zZXRfZjRmMWYwZGFhMzA2OTZmYwAKA3diZx1fX3diZ19sZW5ndGhfOGNmZDJjNjQwOWFmODhhZAALA3diZzFfX3diZ19uZXd3aXRoYnl0ZW9mZnNldGFuZGxlbmd0aF9mMWRlYWQ0NGQxZmM3MjEyAAcDd2JnGl9fd2JnX25ld19lM2IzMjFkY2ZlZjg5ZmM3AAkDd2JnGl9fd2JnX3NldF9kMjM2NjFkMTkxNDhiMjI5AAoDd2JnHV9fd2JnX2xlbmd0aF82Y2E1Mjc2NjVkODk2OTRkAAsDd2JnMV9fd2JnX25ld3dpdGhieXRlb2Zmc2V0YW5kbGVuZ3RoX2U2YjdlNjlhY2Q0YzczNTQABwN3YmcaX193Ymdfc2V0XzEwYmFkOWJlZTBlOWM1OGIACgN3YmcdX193YmdfbGVuZ3RoXzNiNGYwMjIxODhhZThkYjYACwN3YmcfX193Ymdfc3ViYXJyYXlfNzY5ZTFlMGY4MWJiMjU5YgAHA3diZx9fX3diZ19zdWJhcnJheV8zYWFlZWM4OWJiMjU0NGYwAAcDd2JnJF9fd2JnX25ld3dpdGhsZW5ndGhfNWE1ZWZlMzEzY2ZkNTlmMQARA3diZxBfX3diaW5kZ2VuX3Rocm93AAEDd2JnEV9fd2JpbmRnZW5fbWVtb3J5ABIDd2JnH19fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUADgNhYAMAAQIIBQQCEwEMAAEBAgAAAQwBBAYFBQQAAQYFFAENBAAGBQQEAQQOAgECAQAIBAAVARYG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ACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBACACQR9HG3QhBQNAIAMgBUEddkEEcWpBEGoiBCgCACICRQ0CIAVBAXQhBSACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBCAANgIAIAAgAzYCGCAAIAA2AgwgACAANgIIC/MCAQR/IwBBMGsiACQAAkACQEGQksAAKAIARQRAQaiSwAAoAgAhAUGoksAAQQA2AgAgAUUNASAAQRhqIAERBQAgAEEQaiICIABBJGopAgA3AwAgACAAKQIcNwMIIAAoAhghAUGQksAAKAIAIgMNAgJAIANFDQBBlJLAACgCACICRQ0AQZiSwAAoAgAgAkECdBBlC0GUksAAIAE2AgBBkJLAAEEBNgIAQZiSwAAgACkDCDcCAEGgksAAIABBEGopAwA3AgALIABBMGokAEGUksAADwsgAEEANgIoIABBATYCHCAAQaCHwAA2AhggAEIENwIgIABBGGpBiIjAABBDAAsgAEEoaiACKQMANwIAIAAgACkDCDcCICAAIAE2AhwgAEEBNgIYAkAgAEEYaiIBKAIARQ0AIAEoAgQiAkUNACABKAIIIAJBAnQQZQsgAEEANgIoIABBATYCHCAAQaiIwAA2AhggAEIENwIgIAFBsIjAABBDAAuoAgIDfwF+IwBBQGoiAiQAIAEoAgBBgICAgHhGBEAgASgCDCEDIAJBJGoiBEEANgIAIAJCgICAgBA3AhwgAkEwaiADKAIAIgNBCGopAgA3AwAgAkE4aiADQRBqKQIANwMAIAIgAykCADcDKCACQRxqQcCIwAAgAkEoahAYGiACQRhqIAQoAgAiAzYCACACIAIpAhwiBTcDECABQQhqIAM2AgAgASAFNwIACyABKQIAIQUgAUKAgICAEDcCACACQQhqIgMgAUEIaiIBKAIANgIAIAFBADYCAEGxk8AALQAAGiACIAU3AwBBDEEEEF0iAUUEQEEEQQwQbQALIAEgAikDADcCACABQQhqIAMoAgA2AgAgAEHgisAANgIEIAAgATYCACACQUBrJAAL0gECBH8BfiMAQSBrIgMkACABIAEgAmoiAksEQEEAQQAQUgALQQggACgCACIEQQF0IgEgAiABIAJLGyICIAJBCEkb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QQRqrUKAgICA4ACENwMoIAEgAa1CgICAgOAAhDcDICABIAFBIGo2AhAgAUEIakHIj8AAEEMAC2kCAX8BfiMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBAjYCDCADQfyNwAA2AgggA0ICNwIUIANCgICAgOAAIgQgA62ENwMoIAMgBCADQQRqrYQ3AyAgAyADQSBqNgIQIANBCGogAhBDAAtpAgF/AX4jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQQI2AgwgA0H4kcAANgIIIANCAjcCFCADQoCAgIDgACIEIANBBGqthDcDKCADIAQgA62ENwMgIAMgA0EgajYCECADQQhqIAIQQwALZgAjAEEwayIAJABBsJPAAC0AAARAIABBAjYCDCAAQbCKwAA2AgggAEIBNwIUIAAgATYCLCAAIABBLGqtQoCAgIDgAIQ3AyAgACAAQSBqNgIQIABBCGpB0IrAABBDAAsgAEEwaiQAC5QBAgN/AW8jAEEgayIDJAAgAyAAKAIAEHAiBDYCACADIAI2AgQgAiAERwRAIANBADYCCCADIANBBGogA0EIahBAAAsQWyIEEFMiBSUBEAUhBhAbIgIgBiYBIAVBhAFPBEAgBRAtCyACIAAoAgAgAUECdhBkIAJBhAFPBEAgAhAtCyAEQYQBTwRAIAQQLQsgA0EgaiQAC08BAX8jAEEwayIAJAAgAEEBNgIMIABBwI3AADYCCCAAQgE3AhQgACAAQS9qrUKAgICAoAWENwMgIAAgAEEgajYCECAAQQhqQcSBwAAQQwALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhAlIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALTQECf0Gxk8AALQAAGiABKAIEIQIgASgCACEDQQhBBBBdIgFFBEBBBEEIEG0ACyABIAI2AgQgASADNgIAIABB8IrAADYCBCAAIAE2AgALQQEBfyACIAAoAgAgACgCCCIDa0sEQCAAIAMgAhApIAAoAgghAwsgACgCBCADaiABIAIQHxogACACIANqNgIIQQALQQEBfyMAQSBrIgIkACACQQA2AhAgAkEBNgIEIAJCBDcCCCACQS42AhwgAiAANgIYIAIgAkEYajYCACACIAEQQwALswIBA38gACgCACECIAEoAhwiAEEQcUUE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ZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkTGF6eSBpbnN0YW5jZSBoYXMgcHJldmlvdXNseSBiZWVuIHBvaXNvbmVkdgMQACoAAAAvVXNlcnMvZG1hcmNvcy8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL29uY2VfY2VsbC0xLjIxLjMvc3JjL2xpYi5ycwCoAxAAXwAAAAgDAAAZAAAAcmVlbnRyYW50IGluaXQAABgEEAAOAAAAqAMQAF8AAAB6AgAADQAAABYAAAAMAAAABAAAABcAAAAYAAAAGQAAAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjYvc3JjL2RsbWFsbG9jLnJzYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZABYBBAAKQAAAKgEAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPD0gc2l6ZSArIG1heF9vdmVyaGVhZAAAWAQQACkAAACuBAAADQAAAEFjY2Vzc0Vycm9ybWVtb3J5IGFsbG9jYXRpb24gb2YgIGJ5dGVzIGZhaWxlZAAAAAsFEAAVAAAAIAUQAA0AAABzdGQvc3JjL2FsbG9jLnJzQAUQABAAAABjAQAACQAAABYAAAAMAAAABAAAABoAAAAAAAAACAAAAAQAAAAbAAAAAAAAAAgAAAAEAAAAHAAAAB0AAAAeAAAAHwAAACAAAAAQAAAABAAAACEAAAAiAAAAIwAAACQAAABFcnJvcgAAACUAAAAMAAAABAAAACYAAAAnAAAAKAAAAGNhcGFjaXR5IG92ZXJmbG93AAAA2AUQABEAAABhbGxvYy9zcmMvcmF3X3ZlYy5yc/QFEAAUAAAAGAAAAAUAQaCMwAAL8AUBAAAAKQAAAGEgZm9ybWF0dGluZyB0cmFpdCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB3aGVuIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSBkaWQgbm90YWxsb2Mvc3JjL2ZtdC5ycwAAfgYQABAAAAB+AgAADgAAAEJvcnJvd011dEVycm9yYWxyZWFkeSBib3Jyb3dlZDogrgYQABIAAABpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzICBidXQgdGhlIGluZGV4IGlzIAAAyAYQACAAAADoBhAAEgAAAD09IT1tYXRjaGVzYXNzZXJ0aW9uIGBsZWZ0ICByaWdodGAgZmFpbGVkCiAgbGVmdDogCiByaWdodDogABcHEAAQAAAAJwcQABcAAAA+BxAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAAXBxAAEAAAAGAHEAAQAAAAcAcQAAkAAAA+BxAACQAAADogAAABAAAAAAAAAJwHEAACAAAAfSB9Y29yZS9zcmMvZm10L251bS5ycwAAswcQABMAAABmAAAAFwAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTlyYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAACiCBAAEgAAALQIEAAiAAAAcmFuZ2UgZW5kIGluZGV4IOgIEAAQAAAAtAgQACIAAAAAAAA/AAAAvwBBqJLAAAsBFABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS44My4wICg5MGIzNWE2MjMgMjAyNC0xMS0yNikGd2FscnVzBjAuMjMuMwx3YXNtLWJpbmRnZW4HMC4yLjEwMABJD3RhcmdldF9mZWF0dXJlcwQrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQrD3JlZmVyZW5jZS10eXBlcysKbXVsdGl2YWx1ZQ==", self.location.href);
    }
    const imports = __wbg_get_imports();
    if (typeof module_or_path === "string" || typeof Request === "function" && module_or_path instanceof Request || typeof URL === "function" && module_or_path instanceof URL) {
      module_or_path = fetch(module_or_path);
    }
    const { instance, module } = await __wbg_load(await module_or_path, imports);
    return __wbg_finalize_init(instance, module);
  }
  var ch2 = {};
  var wk = function(c, id, msg, transfer, cb) {
    var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
      c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
    ], { type: "text/javascript" }))));
    w.onmessage = function(e) {
      var d = e.data, ed = d.$e$;
      if (ed) {
        var err2 = new Error(ed[0]);
        err2["code"] = ed[1];
        err2.stack = ed[2];
        cb(err2, null);
      } else
        cb(null, d);
    };
    w.postMessage(msg, transfer);
    return w;
  };
  var u8 = Uint8Array, u16 = Uint16Array, i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i2 = 0; i2 < 31; ++i2) {
      b[i2] = start += 1 << eb[i2 - 1];
    }
    var r = new i32(b[30]);
    for (var i2 = 1; i2 < 30; ++i2) {
      for (var j = b[i2]; j < b[i2 + 1]; ++j) {
        r[j] = j - b[i2] << 5 | i2;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2), fl = _a.b, revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0), fd = _b.b;
  var rev = new u16(32768);
  for (var i = 0; i < 32768; ++i) {
    var x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i2 = 0;
    var l = new u16(mb);
    for (; i2 < s; ++i2) {
      if (cd[i2])
        ++l[cd[i2] - 1];
    }
    var le = new u16(mb);
    for (i2 = 1; i2 < mb; ++i2) {
      le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          var sv = i2 << 4 | cd[i2];
          var r_1 = mb - cd[i2];
          var v = le[cd[i2] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (var i = 0; i < 144; ++i)
    flt[i] = 8;
  for (var i = 144; i < 256; ++i)
    flt[i] = 9;
  for (var i = 256; i < 280; ++i)
    flt[i] = 7;
  for (var i = 280; i < 288; ++i)
    flt[i] = 8;
  var fdt = new u8(32);
  for (var i = 0; i < 32; ++i)
    fdt[i] = 5;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i2 = 1; i2 < a.length; ++i2) {
      if (a[i2] > m)
        m = a[i2];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i2 = 0; i2 < hcLen; ++i2) {
            clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i2 = 0; i2 < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i2++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i2++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i2 = sym - 257, b = fleb[i2];
            add = bits(dat, pos, (1 << b) - 1) + fl[i2];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var mrg = function(a, b) {
    var o = {};
    for (var k in a)
      o[k] = a[k];
    for (var k in b)
      o[k] = b[k];
    return o;
  };
  var wcln = function(fn, fnStr, td2) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\\s+/g, "").split(",");
    for (var i2 = 0; i2 < dt.length; ++i2) {
      var v = dt[i2], k = ks[i2];
      if (typeof v == "function") {
        fnStr += ";" + k + "=";
        var st_1 = v.toString();
        if (v.prototype) {
          if (st_1.indexOf("[native code]") != -1) {
            var spInd = st_1.indexOf(" ", 8) + 1;
            fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
          } else {
            fnStr += st_1;
            for (var t in v.prototype)
              fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
          }
        } else
          fnStr += st_1;
      } else
        td2[k] = v;
    }
    return fnStr;
  };
  var ch = [];
  var cbfs = function(v) {
    var tl = [];
    for (var k in v) {
      if (v[k].buffer) {
        tl.push((v[k] = new v[k].constructor(v[k])).buffer);
      }
    }
    return tl;
  };
  var wrkr = function(fns, init, id, cb) {
    if (!ch[id]) {
      var fnStr = "", td_1 = {}, m = fns.length - 1;
      for (var i2 = 0; i2 < m; ++i2)
        fnStr = wcln(fns[i2], fnStr, td_1);
      ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
    }
    var td2 = mrg({}, ch[id].e);
    return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
  };
  var bInflt = function() {
    return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
  };
  var pbf = function(msg) {
    return postMessage(msg, [msg.buffer]);
  };
  var gopt = function(o) {
    return o && {
      out: o.size && new u8(o.size),
      dictionary: o.dictionary
    };
  };
  var cbify = function(dat, opts, fns, init, id, cb) {
    var w = wrkr(fns, init, id, function(err2, dat2) {
      w.terminate();
      cb(err2, dat2);
    });
    w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
    return function() {
      w.terminate();
    };
  };
  var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
  };
  var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
  };
  var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
  };
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += (d[10] | d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var Inflate = /* @__PURE__ */ function() {
    function Inflate2(opts, cb) {
      if (typeof opts == "function")
        cb = opts, opts = {};
      this.ondata = cb;
      var dict = opts && opts.dictionary && opts.dictionary.subarray(-32768);
      this.s = { i: 0, b: dict ? dict.length : 0 };
      this.o = new u8(32768);
      this.p = new u8(0);
      if (dict)
        this.o.set(dict);
    }
    Inflate2.prototype.e = function(c) {
      if (!this.ondata)
        err(5);
      if (this.d)
        err(4);
      if (!this.p.length)
        this.p = c;
      else if (c.length) {
        var n = new u8(this.p.length + c.length);
        n.set(this.p), n.set(c, this.p.length), this.p = n;
      }
    };
    Inflate2.prototype.c = function(final) {
      this.s.i = +(this.d = final || false);
      var bts = this.s.b;
      var dt = inflt(this.p, this.s, this.o);
      this.ondata(slc(dt, bts, this.s.b), this.d);
      this.o = slc(dt, this.s.b - 32768), this.s.b = this.o.length;
      this.p = slc(this.p, this.s.p / 8 | 0), this.s.p &= 7;
    };
    Inflate2.prototype.push = function(chunk, final) {
      this.e(chunk), this.c(final);
    };
    return Inflate2;
  }();
  function inflate(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    return cbify(data, opts, [
      bInflt
    ], function(ev) {
      return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
    }, 1, cb);
  }
  function inflateSync(data, opts) {
    return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
  }
  var Gunzip = /* @__PURE__ */ function() {
    function Gunzip2(opts, cb) {
      this.v = 1;
      this.r = 0;
      Inflate.call(this, opts, cb);
    }
    Gunzip2.prototype.push = function(chunk, final) {
      Inflate.prototype.e.call(this, chunk);
      this.r += chunk.length;
      if (this.v) {
        var p = this.p.subarray(this.v - 1);
        var s = p.length > 3 ? gzs(p) : 4;
        if (s > p.length) {
          if (!final)
            return;
        } else if (this.v > 1 && this.onmember) {
          this.onmember(this.r - p.length);
        }
        this.p = p.subarray(s), this.v = 0;
      }
      Inflate.prototype.c.call(this, final);
      if (this.s.f && !this.s.l && !final) {
        this.v = shft(this.s.p) + 9;
        this.s = { i: 0 };
        this.o = new u8(0);
        this.push(new u8(0), final);
      }
    };
    return Gunzip2;
  }();
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  try {
    td.decode(et, { stream: true });
  } catch (e) {
  }
  var dutf8 = function(d) {
    for (var r = "", i2 = 0; ; ) {
      var c = d[i2++];
      var eb = (c > 127) + (c > 223) + (c > 239);
      if (i2 + eb > d.length)
        return { s: r, r: slc(d, i2 - 1) };
      if (!eb)
        r += String.fromCharCode(c);
      else if (eb == 3) {
        c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
      } else if (eb & 1)
        r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
      else
        r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
    }
  };
  function strFromU8(dat, latin1) {
    if (latin1) {
      var r = "";
      for (var i2 = 0; i2 < dat.length; i2 += 16384)
        r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
      return r;
    } else if (td) {
      return td.decode(dat);
    } else {
      var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
      if (r.length)
        err(8);
      return s;
    }
  }
  var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
  };
  var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
    var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
    return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
  };
  var z64e = function(d, b) {
    for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
      ;
    return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
  };
  var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
    fn();
  };
  function unzip(data, opts, cb) {
    if (!cb)
      cb = opts, opts = {};
    if (typeof cb != "function")
      err(7);
    var term = [];
    var tAll = function() {
      for (var i3 = 0; i3 < term.length; ++i3)
        term[i3]();
    };
    var files = {};
    var cbd = function(a, b) {
      mt(function() {
        cb(a, b);
      });
    };
    mt(function() {
      cbd = cb;
    });
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558) {
        cbd(err(13, 0, 1), null);
        return tAll;
      }
    }
    var lft = b2(data, e + 8);
    if (lft) {
      var c = lft;
      var o = b4(data, e + 16);
      var z = o == 4294967295 || c == 65535;
      if (z) {
        var ze = b4(data, e - 12);
        z = b4(data, ze) == 101075792;
        if (z) {
          c = lft = b4(data, ze + 32);
          o = b4(data, ze + 48);
        }
      }
      var fltr = opts && opts.filter;
      var _loop_3 = function(i3) {
        var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
        o = no;
        var cbl = function(e2, d) {
          if (e2) {
            tAll();
            cbd(e2, null);
          } else {
            if (d)
              files[fn] = d;
            if (!--lft)
              cbd(null, files);
          }
        };
        if (!fltr || fltr({
          name: fn,
          size: sc,
          originalSize: su,
          compression: c_1
        })) {
          if (!c_1)
            cbl(null, slc(data, b, b + sc));
          else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (su < 524288 || sc > 0.8 * su) {
              try {
                cbl(null, inflateSync(infl, { out: new u8(su) }));
              } catch (e2) {
                cbl(e2, null);
              }
            } else
              term.push(inflate(infl, { size: su }, cbl));
          } else
            cbl(err(14, "unknown compression type " + c_1, 1), null);
        } else
          cbl(null, null);
      };
      for (var i2 = 0; i2 < c; ++i2) {
        _loop_3(i2);
      }
    } else
      cbd(null, {});
    return tAll;
  }
  function unzipSync(data, opts) {
    var files = {};
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558)
        err(13);
    }
    var c = b2(data, e + 8);
    if (!c)
      return {};
    var o = b4(data, e + 16);
    var z = o == 4294967295 || c == 65535;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    for (var i2 = 0; i2 < c; ++i2) {
      var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_2
      })) {
        if (!c_2)
          files[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
          files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
        else
          err(14, "unknown compression type " + c_2);
      }
    }
    return files;
  }
  /**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const REVISION = "178";
  const NoColorSpace = "";
  const SRGBColorSpace = "srgb";
  const LinearSRGBColorSpace = "srgb-linear";
  const LinearTransfer = "linear";
  const SRGBTransfer = "srgb";
  function clamp(value, min, max2) {
    return Math.max(min, Math.min(max2, value));
  }
  function euclideanModulo(n, m) {
    return (n % m + m) % m;
  }
  function lerp(x2, y, t) {
    return (1 - t) * x2 + t * y;
  }
  class Quaternion {
    /**
     * Constructs a new quaternion.
     *
     * @param {number} [x=0] - The x value of this quaternion.
     * @param {number} [y=0] - The y value of this quaternion.
     * @param {number} [z=0] - The z value of this quaternion.
     * @param {number} [w=1] - The w value of this quaternion.
     */
    constructor(x2 = 0, y = 0, z = 0, w = 1) {
      this.isQuaternion = true;
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
    }
    /**
     * Interpolates between two quaternions via SLERP. This implementation assumes the
     * quaternion data are managed  in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @param {number} t - The interpolation factor in the range \`[0,1]\`.
     * @see {@link Quaternion#slerp}
     */
    static slerpFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
      let x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
      if (t === 0) {
        dst[dstOffset + 0] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return;
      }
      if (t === 1) {
        dst[dstOffset + 0] = x1;
        dst[dstOffset + 1] = y1;
        dst[dstOffset + 2] = z1;
        dst[dstOffset + 3] = w1;
        return;
      }
      if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
        let s = 1 - t;
        const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = cos >= 0 ? 1 : -1, sqrSin = 1 - cos * cos;
        if (sqrSin > Number.EPSILON) {
          const sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
          s = Math.sin(s * len) / sin;
          t = Math.sin(t * len) / sin;
        }
        const tDir = t * dir;
        x0 = x0 * s + x1 * tDir;
        y0 = y0 * s + y1 * tDir;
        z0 = z0 * s + z1 * tDir;
        w0 = w0 * s + w1 * tDir;
        if (s === 1 - t) {
          const f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
          x0 *= f;
          y0 *= f;
          z0 *= f;
          w0 *= f;
        }
      }
      dst[dstOffset] = x0;
      dst[dstOffset + 1] = y0;
      dst[dstOffset + 2] = z0;
      dst[dstOffset + 3] = w0;
    }
    /**
     * Multiplies two quaternions. This implementation assumes the quaternion data are managed
     * in flat arrays.
     *
     * @param {Array<number>} dst - The destination array.
     * @param {number} dstOffset - An offset into the destination array.
     * @param {Array<number>} src0 - The source array of the first quaternion.
     * @param {number} srcOffset0 - An offset into the first source array.
     * @param {Array<number>} src1 -  The source array of the second quaternion.
     * @param {number} srcOffset1 - An offset into the second source array.
     * @return {Array<number>} The destination array.
     * @see {@link Quaternion#multiplyQuaternions}.
     */
    static multiplyQuaternionsFlat(dst, dstOffset, src0, srcOffset0, src1, srcOffset1) {
      const x0 = src0[srcOffset0];
      const y0 = src0[srcOffset0 + 1];
      const z0 = src0[srcOffset0 + 2];
      const w0 = src0[srcOffset0 + 3];
      const x1 = src1[srcOffset1];
      const y1 = src1[srcOffset1 + 1];
      const z1 = src1[srcOffset1 + 2];
      const w1 = src1[srcOffset1 + 3];
      dst[dstOffset] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
      dst[dstOffset + 1] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
      dst[dstOffset + 2] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
      dst[dstOffset + 3] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;
      return dst;
    }
    /**
     * The x value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get x() {
      return this._x;
    }
    set x(value) {
      this._x = value;
      this._onChangeCallback();
    }
    /**
     * The y value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get y() {
      return this._y;
    }
    set y(value) {
      this._y = value;
      this._onChangeCallback();
    }
    /**
     * The z value of this quaternion.
     *
     * @type {number}
     * @default 0
     */
    get z() {
      return this._z;
    }
    set z(value) {
      this._z = value;
      this._onChangeCallback();
    }
    /**
     * The w value of this quaternion.
     *
     * @type {number}
     * @default 1
     */
    get w() {
      return this._w;
    }
    set w(value) {
      this._w = value;
      this._onChangeCallback();
    }
    /**
     * Sets the quaternion components.
     *
     * @param {number} x - The x value of this quaternion.
     * @param {number} y - The y value of this quaternion.
     * @param {number} z - The z value of this quaternion.
     * @param {number} w - The w value of this quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    set(x2, y, z, w) {
      this._x = x2;
      this._y = y;
      this._z = z;
      this._w = w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Returns a new quaternion with copied values from this instance.
     *
     * @return {Quaternion} A clone of this instance.
     */
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    /**
     * Copies the values of the given quaternion to this instance.
     *
     * @param {Quaternion} quaternion - The quaternion to copy.
     * @return {Quaternion} A reference to this quaternion.
     */
    copy(quaternion) {
      this._x = quaternion.x;
      this._y = quaternion.y;
      this._z = quaternion.z;
      this._w = quaternion.w;
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the rotation specified by the given
     * Euler angles.
     *
     * @param {Euler} euler - The Euler angles.
     * @param {boolean} [update=true] - Whether the internal \`onChange\` callback should be executed or not.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromEuler(euler, update = true) {
      const x2 = euler._x, y = euler._y, z = euler._z, order = euler._order;
      const cos = Math.cos;
      const sin = Math.sin;
      const c1 = cos(x2 / 2);
      const c2 = cos(y / 2);
      const c3 = cos(z / 2);
      const s1 = sin(x2 / 2);
      const s2 = sin(y / 2);
      const s3 = sin(z / 2);
      switch (order) {
        case "XYZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "YXZ":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "ZXY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "ZYX":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        case "YZX":
          this._x = s1 * c2 * c3 + c1 * s2 * s3;
          this._y = c1 * s2 * c3 + s1 * c2 * s3;
          this._z = c1 * c2 * s3 - s1 * s2 * c3;
          this._w = c1 * c2 * c3 - s1 * s2 * s3;
          break;
        case "XZY":
          this._x = s1 * c2 * c3 - c1 * s2 * s3;
          this._y = c1 * s2 * c3 - s1 * c2 * s3;
          this._z = c1 * c2 * s3 + s1 * s2 * c3;
          this._w = c1 * c2 * c3 + s1 * s2 * s3;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + order);
      }
      if (update === true) this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given axis and angle.
     *
     * @param {Vector3} axis - The normalized axis.
     * @param {number} angle - The angle in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromAxisAngle(axis, angle) {
      const halfAngle = angle / 2, s = Math.sin(halfAngle);
      this._x = axis.x * s;
      this._y = axis.y * s;
      this._z = axis.z * s;
      this._w = Math.cos(halfAngle);
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion from the given rotation matrix.
     *
     * @param {Matrix4} m - A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromRotationMatrix(m) {
      const te = m.elements, m11 = te[0], m12 = te[4], m13 = te[8], m21 = te[1], m22 = te[5], m23 = te[9], m31 = te[2], m32 = te[6], m33 = te[10], trace = m11 + m22 + m33;
      if (trace > 0) {
        const s = 0.5 / Math.sqrt(trace + 1);
        this._w = 0.25 / s;
        this._x = (m32 - m23) * s;
        this._y = (m13 - m31) * s;
        this._z = (m21 - m12) * s;
      } else if (m11 > m22 && m11 > m33) {
        const s = 2 * Math.sqrt(1 + m11 - m22 - m33);
        this._w = (m32 - m23) / s;
        this._x = 0.25 * s;
        this._y = (m12 + m21) / s;
        this._z = (m13 + m31) / s;
      } else if (m22 > m33) {
        const s = 2 * Math.sqrt(1 + m22 - m11 - m33);
        this._w = (m13 - m31) / s;
        this._x = (m12 + m21) / s;
        this._y = 0.25 * s;
        this._z = (m23 + m32) / s;
      } else {
        const s = 2 * Math.sqrt(1 + m33 - m11 - m22);
        this._w = (m21 - m12) / s;
        this._x = (m13 + m31) / s;
        this._y = (m23 + m32) / s;
        this._z = 0.25 * s;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Sets this quaternion to the rotation required to rotate the direction vector
     * \`vFrom\` to the direction vector \`vTo\`.
     *
     * @param {Vector3} vFrom - The first (normalized) direction vector.
     * @param {Vector3} vTo - The second (normalized) direction vector.
     * @return {Quaternion} A reference to this quaternion.
     */
    setFromUnitVectors(vFrom, vTo) {
      let r = vFrom.dot(vTo) + 1;
      if (r < 1e-8) {
        r = 0;
        if (Math.abs(vFrom.x) > Math.abs(vFrom.z)) {
          this._x = -vFrom.y;
          this._y = vFrom.x;
          this._z = 0;
          this._w = r;
        } else {
          this._x = 0;
          this._y = -vFrom.z;
          this._z = vFrom.y;
          this._w = r;
        }
      } else {
        this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
        this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
        this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
        this._w = r;
      }
      return this.normalize();
    }
    /**
     * Returns the angle between this quaternion and the given one in radians.
     *
     * @param {Quaternion} q - The quaternion to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(q) {
      return 2 * Math.acos(Math.abs(clamp(this.dot(q), -1, 1)));
    }
    /**
     * Rotates this quaternion by a given angular step to the given quaternion.
     * The method ensures that the final quaternion will not overshoot \`q\`.
     *
     * @param {Quaternion} q - The target quaternion.
     * @param {number} step - The angular step in radians.
     * @return {Quaternion} A reference to this quaternion.
     */
    rotateTowards(q, step) {
      const angle = this.angleTo(q);
      if (angle === 0) return this;
      const t = Math.min(1, step / angle);
      this.slerp(q, t);
      return this;
    }
    /**
     * Sets this quaternion to the identity quaternion; that is, to the
     * quaternion that represents "no rotation".
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    identity() {
      return this.set(0, 0, 0, 1);
    }
    /**
     * Inverts this quaternion via {@link Quaternion#conjugate}. The
     * quaternion is assumed to have unit length.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    invert() {
      return this.conjugate();
    }
    /**
     * Returns the rotational conjugate of this quaternion. The conjugate of a
     * quaternion represents the same rotation in the opposite direction about
     * the rotational axis.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    conjugate() {
      this._x *= -1;
      this._y *= -1;
      this._z *= -1;
      this._onChangeCallback();
      return this;
    }
    /**
     * Calculates the dot product of this quaternion and the given one.
     *
     * @param {Quaternion} v - The quaternion to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;
    }
    /**
     * Computes the squared Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector. This can be useful if you are comparing the
     * lengths of two quaternions, as this is a slightly more efficient calculation than
     * {@link Quaternion#length}.
     *
     * @return {number} The squared Euclidean length.
     */
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    /**
     * Computes the Euclidean length (straight-line length) of this quaternion,
     * considered as a 4 dimensional vector.
     *
     * @return {number} The Euclidean length.
     */
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    /**
     * Normalizes this quaternion - that is, calculated the quaternion that performs
     * the same rotation as this one, but has a length equal to \`1\`.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    normalize() {
      let l = this.length();
      if (l === 0) {
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._w = 1;
      } else {
        l = 1 / l;
        this._x = this._x * l;
        this._y = this._y * l;
        this._z = this._z * l;
        this._w = this._w * l;
      }
      this._onChangeCallback();
      return this;
    }
    /**
     * Multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiply(q) {
      return this.multiplyQuaternions(this, q);
    }
    /**
     * Pre-multiplies this quaternion by the given one.
     *
     * @param {Quaternion} q - The quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    premultiply(q) {
      return this.multiplyQuaternions(q, this);
    }
    /**
     * Multiplies the given quaternions and stores the result in this instance.
     *
     * @param {Quaternion} a - The first quaternion.
     * @param {Quaternion} b - The second quaternion.
     * @return {Quaternion} A reference to this quaternion.
     */
    multiplyQuaternions(a, b) {
      const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
      const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;
      this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
      this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
      this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
      this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between quaternions.
     *
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerp(qb, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(qb);
      const x2 = this._x, y = this._y, z = this._z, w = this._w;
      let cosHalfTheta = w * qb._w + x2 * qb._x + y * qb._y + z * qb._z;
      if (cosHalfTheta < 0) {
        this._w = -qb._w;
        this._x = -qb._x;
        this._y = -qb._y;
        this._z = -qb._z;
        cosHalfTheta = -cosHalfTheta;
      } else {
        this.copy(qb);
      }
      if (cosHalfTheta >= 1) {
        this._w = w;
        this._x = x2;
        this._y = y;
        this._z = z;
        return this;
      }
      const sqrSinHalfTheta = 1 - cosHalfTheta * cosHalfTheta;
      if (sqrSinHalfTheta <= Number.EPSILON) {
        const s = 1 - t;
        this._w = s * w + t * this._w;
        this._x = s * x2 + t * this._x;
        this._y = s * y + t * this._y;
        this._z = s * z + t * this._z;
        this.normalize();
        return this;
      }
      const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
      const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
      const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
      this._w = w * ratioA + this._w * ratioB;
      this._x = x2 * ratioA + this._x * ratioB;
      this._y = y * ratioA + this._y * ratioB;
      this._z = z * ratioA + this._z * ratioB;
      this._onChangeCallback();
      return this;
    }
    /**
     * Performs a spherical linear interpolation between the given quaternions
     * and stores the result in this quaternion.
     *
     * @param {Quaternion} qa - The source quaternion.
     * @param {Quaternion} qb - The target quaternion.
     * @param {number} t - The interpolation factor in the closed interval \`[0, 1]\`.
     * @return {Quaternion} A reference to this quaternion.
     */
    slerpQuaternions(qa, qb, t) {
      return this.copy(qa).slerp(qb, t);
    }
    /**
     * Sets this quaternion to a uniformly random, normalized quaternion.
     *
     * @return {Quaternion} A reference to this quaternion.
     */
    random() {
      const theta1 = 2 * Math.PI * Math.random();
      const theta2 = 2 * Math.PI * Math.random();
      const x0 = Math.random();
      const r1 = Math.sqrt(1 - x0);
      const r2 = Math.sqrt(x0);
      return this.set(
        r1 * Math.sin(theta1),
        r1 * Math.cos(theta1),
        r2 * Math.sin(theta2),
        r2 * Math.cos(theta2)
      );
    }
    /**
     * Returns \`true\` if this quaternion is equal with the given one.
     *
     * @param {Quaternion} quaternion - The quaternion to test for equality.
     * @return {boolean} Whether this quaternion is equal with the given one.
     */
    equals(quaternion) {
      return quaternion._x === this._x && quaternion._y === this._y && quaternion._z === this._z && quaternion._w === this._w;
    }
    /**
     * Sets this quaternion's components from the given array.
     *
     * @param {Array<number>} array - An array holding the quaternion component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromArray(array, offset = 0) {
      this._x = array[offset];
      this._y = array[offset + 1];
      this._z = array[offset + 2];
      this._w = array[offset + 3];
      this._onChangeCallback();
      return this;
    }
    /**
     * Writes the components of this quaternion to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the quaternion components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The quaternion components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this._x;
      array[offset + 1] = this._y;
      array[offset + 2] = this._z;
      array[offset + 3] = this._w;
      return array;
    }
    /**
     * Sets the components of this quaternion from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding quaternion data.
     * @param {number} index - The index into the attribute.
     * @return {Quaternion} A reference to this quaternion.
     */
    fromBufferAttribute(attribute, index) {
      this._x = attribute.getX(index);
      this._y = attribute.getY(index);
      this._z = attribute.getZ(index);
      this._w = attribute.getW(index);
      this._onChangeCallback();
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the
     * numerical elements of this quaternion in an array of format \`[x, y, z, w]\`.
     *
     * @return {Array<number>} The serialized quaternion.
     */
    toJSON() {
      return this.toArray();
    }
    _onChange(callback) {
      this._onChangeCallback = callback;
      return this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x;
      yield this._y;
      yield this._z;
      yield this._w;
    }
  }
  class Vector3 {
    /**
     * Constructs a new 3D vector.
     *
     * @param {number} [x=0] - The x value of this vector.
     * @param {number} [y=0] - The y value of this vector.
     * @param {number} [z=0] - The z value of this vector.
     */
    constructor(x2 = 0, y = 0, z = 0) {
      Vector3.prototype.isVector3 = true;
      this.x = x2;
      this.y = y;
      this.z = z;
    }
    /**
     * Sets the vector components.
     *
     * @param {number} x - The value of the x component.
     * @param {number} y - The value of the y component.
     * @param {number} z - The value of the z component.
     * @return {Vector3} A reference to this vector.
     */
    set(x2, y, z) {
      if (z === void 0) z = this.z;
      this.x = x2;
      this.y = y;
      this.z = z;
      return this;
    }
    /**
     * Sets the vector components to the same value.
     *
     * @param {number} scalar - The value to set for all vector components.
     * @return {Vector3} A reference to this vector.
     */
    setScalar(scalar) {
      this.x = scalar;
      this.y = scalar;
      this.z = scalar;
      return this;
    }
    /**
     * Sets the vector's x component to the given value
     *
     * @param {number} x - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setX(x2) {
      this.x = x2;
      return this;
    }
    /**
     * Sets the vector's y component to the given value
     *
     * @param {number} y - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setY(y) {
      this.y = y;
      return this;
    }
    /**
     * Sets the vector's z component to the given value
     *
     * @param {number} z - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setZ(z) {
      this.z = z;
      return this;
    }
    /**
     * Allows to set a vector component with an index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @param {number} value - The value to set.
     * @return {Vector3} A reference to this vector.
     */
    setComponent(index, value) {
      switch (index) {
        case 0:
          this.x = value;
          break;
        case 1:
          this.y = value;
          break;
        case 2:
          this.z = value;
          break;
        default:
          throw new Error("index is out of range: " + index);
      }
      return this;
    }
    /**
     * Returns the value of the vector component which matches the given index.
     *
     * @param {number} index - The component index. \`0\` equals to x, \`1\` equals to y, \`2\` equals to z.
     * @return {number} A vector component value.
     */
    getComponent(index) {
      switch (index) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + index);
      }
    }
    /**
     * Returns a new vector with copied values from this instance.
     *
     * @return {Vector3} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    /**
     * Copies the values of the given vector to this instance.
     *
     * @param {Vector3} v - The vector to copy.
     * @return {Vector3} A reference to this vector.
     */
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    /**
     * Adds the given vector to this instance.
     *
     * @param {Vector3} v - The vector to add.
     * @return {Vector3} A reference to this vector.
     */
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    /**
     * Adds the given scalar value to all components of this instance.
     *
     * @param {number} s - The scalar to add.
     * @return {Vector3} A reference to this vector.
     */
    addScalar(s) {
      this.x += s;
      this.y += s;
      this.z += s;
      return this;
    }
    /**
     * Adds the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    addVectors(a, b) {
      this.x = a.x + b.x;
      this.y = a.y + b.y;
      this.z = a.z + b.z;
      return this;
    }
    /**
     * Adds the given vector scaled by the given factor to this instance.
     *
     * @param {Vector3|Vector4} v - The vector.
     * @param {number} s - The factor that scales \`v\`.
     * @return {Vector3} A reference to this vector.
     */
    addScaledVector(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      this.z += v.z * s;
      return this;
    }
    /**
     * Subtracts the given vector from this instance.
     *
     * @param {Vector3} v - The vector to subtract.
     * @return {Vector3} A reference to this vector.
     */
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    /**
     * Subtracts the given scalar value from all components of this instance.
     *
     * @param {number} s - The scalar to subtract.
     * @return {Vector3} A reference to this vector.
     */
    subScalar(s) {
      this.x -= s;
      this.y -= s;
      this.z -= s;
      return this;
    }
    /**
     * Subtracts the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    subVectors(a, b) {
      this.x = a.x - b.x;
      this.y = a.y - b.y;
      this.z = a.z - b.z;
      return this;
    }
    /**
     * Multiplies the given vector with this instance.
     *
     * @param {Vector3} v - The vector to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiply(v) {
      this.x *= v.x;
      this.y *= v.y;
      this.z *= v.z;
      return this;
    }
    /**
     * Multiplies the given scalar value with all components of this instance.
     *
     * @param {number} scalar - The scalar to multiply.
     * @return {Vector3} A reference to this vector.
     */
    multiplyScalar(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      this.z *= scalar;
      return this;
    }
    /**
     * Multiplies the given vectors and stores the result in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    multiplyVectors(a, b) {
      this.x = a.x * b.x;
      this.y = a.y * b.y;
      this.z = a.z * b.z;
      return this;
    }
    /**
     * Applies the given Euler rotation to this vector.
     *
     * @param {Euler} euler - The Euler angles.
     * @return {Vector3} A reference to this vector.
     */
    applyEuler(euler) {
      return this.applyQuaternion(_quaternion$4.setFromEuler(euler));
    }
    /**
     * Applies a rotation specified by an axis and an angle to this vector.
     *
     * @param {Vector3} axis - A normalized vector representing the rotation axis.
     * @param {number} angle - The angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    applyAxisAngle(axis, angle) {
      return this.applyQuaternion(_quaternion$4.setFromAxisAngle(axis, angle));
    }
    /**
     * Multiplies this vector with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix3(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[3] * y + e[6] * z;
      this.y = e[1] * x2 + e[4] * y + e[7] * z;
      this.z = e[2] * x2 + e[5] * y + e[8] * z;
      return this;
    }
    /**
     * Multiplies this vector by the given normal matrix and normalizes
     * the result.
     *
     * @param {Matrix3} m - The normal matrix.
     * @return {Vector3} A reference to this vector.
     */
    applyNormalMatrix(m) {
      return this.applyMatrix3(m).normalize();
    }
    /**
     * Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
     * divides by perspective.
     *
     * @param {Matrix4} m - The matrix to apply.
     * @return {Vector3} A reference to this vector.
     */
    applyMatrix4(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      const w = 1 / (e[3] * x2 + e[7] * y + e[11] * z + e[15]);
      this.x = (e[0] * x2 + e[4] * y + e[8] * z + e[12]) * w;
      this.y = (e[1] * x2 + e[5] * y + e[9] * z + e[13]) * w;
      this.z = (e[2] * x2 + e[6] * y + e[10] * z + e[14]) * w;
      return this;
    }
    /**
     * Applies the given Quaternion to this vector.
     *
     * @param {Quaternion} q - The Quaternion.
     * @return {Vector3} A reference to this vector.
     */
    applyQuaternion(q) {
      const vx = this.x, vy = this.y, vz = this.z;
      const qx = q.x, qy = q.y, qz = q.z, qw = q.w;
      const tx = 2 * (qy * vz - qz * vy);
      const ty = 2 * (qz * vx - qx * vz);
      const tz = 2 * (qx * vy - qy * vx);
      this.x = vx + qw * tx + qy * tz - qz * ty;
      this.y = vy + qw * ty + qz * tx - qx * tz;
      this.z = vz + qw * tz + qx * ty - qy * tx;
      return this;
    }
    /**
     * Projects this vector from world space into the camera's normalized
     * device coordinate (NDC) space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    project(camera) {
      return this.applyMatrix4(camera.matrixWorldInverse).applyMatrix4(camera.projectionMatrix);
    }
    /**
     * Unprojects this vector from the camera's normalized device coordinate (NDC)
     * space into world space.
     *
     * @param {Camera} camera - The camera.
     * @return {Vector3} A reference to this vector.
     */
    unproject(camera) {
      return this.applyMatrix4(camera.projectionMatrixInverse).applyMatrix4(camera.matrixWorld);
    }
    /**
     * Transforms the direction of this vector by a matrix (the upper left 3 x 3
     * subset of the given 4x4 matrix and then normalizes the result.
     *
     * @param {Matrix4} m - The matrix.
     * @return {Vector3} A reference to this vector.
     */
    transformDirection(m) {
      const x2 = this.x, y = this.y, z = this.z;
      const e = m.elements;
      this.x = e[0] * x2 + e[4] * y + e[8] * z;
      this.y = e[1] * x2 + e[5] * y + e[9] * z;
      this.z = e[2] * x2 + e[6] * y + e[10] * z;
      return this.normalize();
    }
    /**
     * Divides this instance by the given vector.
     *
     * @param {Vector3} v - The vector to divide.
     * @return {Vector3} A reference to this vector.
     */
    divide(v) {
      this.x /= v.x;
      this.y /= v.y;
      this.z /= v.z;
      return this;
    }
    /**
     * Divides this vector by the given scalar.
     *
     * @param {number} scalar - The scalar to divide.
     * @return {Vector3} A reference to this vector.
     */
    divideScalar(scalar) {
      return this.multiplyScalar(1 / scalar);
    }
    /**
     * If this vector's x, y or z value is greater than the given vector's x, y or z
     * value, replace that value with the corresponding min value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    min(v) {
      this.x = Math.min(this.x, v.x);
      this.y = Math.min(this.y, v.y);
      this.z = Math.min(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is less than the given vector's x, y or z
     * value, replace that value with the corresponding max value.
     *
     * @param {Vector3} v - The vector.
     * @return {Vector3} A reference to this vector.
     */
    max(v) {
      this.x = Math.max(this.x, v.x);
      this.y = Math.max(this.y, v.y);
      this.z = Math.max(this.z, v.z);
      return this;
    }
    /**
     * If this vector's x, y or z value is greater than the max vector's x, y or z
     * value, it is replaced by the corresponding value.
     * If this vector's x, y or z value is less than the min vector's x, y or z value,
     * it is replaced by the corresponding value.
     *
     * @param {Vector3} min - The minimum x, y and z values.
     * @param {Vector3} max - The maximum x, y and z values in the desired range.
     * @return {Vector3} A reference to this vector.
     */
    clamp(min, max2) {
      this.x = clamp(this.x, min.x, max2.x);
      this.y = clamp(this.y, min.y, max2.y);
      this.z = clamp(this.z, min.z, max2.z);
      return this;
    }
    /**
     * If this vector's x, y or z values are greater than the max value, they are
     * replaced by the max value.
     * If this vector's x, y or z values are less than the min value, they are
     * replaced by the min value.
     *
     * @param {number} minVal - The minimum value the components will be clamped to.
     * @param {number} maxVal - The maximum value the components will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampScalar(minVal, maxVal) {
      this.x = clamp(this.x, minVal, maxVal);
      this.y = clamp(this.y, minVal, maxVal);
      this.z = clamp(this.z, minVal, maxVal);
      return this;
    }
    /**
     * If this vector's length is greater than the max value, it is replaced by
     * the max value.
     * If this vector's length is less than the min value, it is replaced by the
     * min value.
     *
     * @param {number} min - The minimum value the vector length will be clamped to.
     * @param {number} max - The maximum value the vector length will be clamped to.
     * @return {Vector3} A reference to this vector.
     */
    clampLength(min, max2) {
      const length = this.length();
      return this.divideScalar(length || 1).multiplyScalar(clamp(length, min, max2));
    }
    /**
     * The components of this vector are rounded down to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded up to the nearest integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded to the nearest integer value
     *
     * @return {Vector3} A reference to this vector.
     */
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    /**
     * The components of this vector are rounded towards zero (up if negative,
     * down if positive) to an integer value.
     *
     * @return {Vector3} A reference to this vector.
     */
    roundToZero() {
      this.x = Math.trunc(this.x);
      this.y = Math.trunc(this.y);
      this.z = Math.trunc(this.z);
      return this;
    }
    /**
     * Inverts this vector - i.e. sets x = -x, y = -y and z = -z.
     *
     * @return {Vector3} A reference to this vector.
     */
    negate() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    }
    /**
     * Calculates the dot product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the dot product with.
     * @return {number} The result of the dot product.
     */
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    // TODO lengthSquared?
    /**
     * Computes the square of the Euclidean length (straight-line length) from
     * (0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
     * compare the length squared instead as it is slightly more efficient to calculate.
     *
     * @return {number} The square length of this vector.
     */
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).
     *
     * @return {number} The length of this vector.
     */
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    /**
     * Computes the Manhattan length of this vector.
     *
     * @return {number} The length of this vector.
     */
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    /**
     * Converts this vector to a unit vector - that is, sets it equal to a vector
     * with the same direction as this one, but with a vector length of \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    /**
     * Sets this vector to a vector with the same direction as this one, but
     * with the specified length.
     *
     * @param {number} length - The new length of this vector.
     * @return {Vector3} A reference to this vector.
     */
    setLength(length) {
      return this.normalize().multiplyScalar(length);
    }
    /**
     * Linearly interpolates between the given vector and this instance, where
     * alpha is the percent distance along the line - alpha = 0 will be this
     * vector, and alpha = 1 will be the given one.
     *
     * @param {Vector3} v - The vector to interpolate towards.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerp(v, alpha) {
      this.x += (v.x - this.x) * alpha;
      this.y += (v.y - this.y) * alpha;
      this.z += (v.z - this.z) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given vectors, where alpha is the percent
     * distance along the line - alpha = 0 will be first vector, and alpha = 1 will
     * be the second one. The result is stored in this instance.
     *
     * @param {Vector3} v1 - The first vector.
     * @param {Vector3} v2 - The second vector.
     * @param {number} alpha - The interpolation factor, typically in the closed interval \`[0, 1]\`.
     * @return {Vector3} A reference to this vector.
     */
    lerpVectors(v1, v2, alpha) {
      this.x = v1.x + (v2.x - v1.x) * alpha;
      this.y = v1.y + (v2.y - v1.y) * alpha;
      this.z = v1.z + (v2.z - v1.z) * alpha;
      return this;
    }
    /**
     * Calculates the cross product of the given vector with this instance.
     *
     * @param {Vector3} v - The vector to compute the cross product with.
     * @return {Vector3} The result of the cross product.
     */
    cross(v) {
      return this.crossVectors(this, v);
    }
    /**
     * Calculates the cross product of the given vectors and stores the result
     * in this instance.
     *
     * @param {Vector3} a - The first vector.
     * @param {Vector3} b - The second vector.
     * @return {Vector3} A reference to this vector.
     */
    crossVectors(a, b) {
      const ax = a.x, ay = a.y, az = a.z;
      const bx = b.x, by = b.y, bz = b.z;
      this.x = ay * bz - az * by;
      this.y = az * bx - ax * bz;
      this.z = ax * by - ay * bx;
      return this;
    }
    /**
     * Projects this vector onto the given one.
     *
     * @param {Vector3} v - The vector to project to.
     * @return {Vector3} A reference to this vector.
     */
    projectOnVector(v) {
      const denominator = v.lengthSq();
      if (denominator === 0) return this.set(0, 0, 0);
      const scalar = v.dot(this) / denominator;
      return this.copy(v).multiplyScalar(scalar);
    }
    /**
     * Projects this vector onto a plane by subtracting this
     * vector projected onto the plane's normal from this vector.
     *
     * @param {Vector3} planeNormal - The plane normal.
     * @return {Vector3} A reference to this vector.
     */
    projectOnPlane(planeNormal) {
      _vector$c.copy(this).projectOnVector(planeNormal);
      return this.sub(_vector$c);
    }
    /**
     * Reflects this vector off a plane orthogonal to the given normal vector.
     *
     * @param {Vector3} normal - The (normalized) normal vector.
     * @return {Vector3} A reference to this vector.
     */
    reflect(normal) {
      return this.sub(_vector$c.copy(normal).multiplyScalar(2 * this.dot(normal)));
    }
    /**
     * Returns the angle between the given vector and this instance in radians.
     *
     * @param {Vector3} v - The vector to compute the angle with.
     * @return {number} The angle in radians.
     */
    angleTo(v) {
      const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
      if (denominator === 0) return Math.PI / 2;
      const theta = this.dot(v) / denominator;
      return Math.acos(clamp(theta, -1, 1));
    }
    /**
     * Computes the distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the distance to.
     * @return {number} The distance.
     */
    distanceTo(v) {
      return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes the squared distance from the given vector to this instance.
     * If you are just comparing the distance with another distance, you should compare
     * the distance squared instead as it is slightly more efficient to calculate.
     *
     * @param {Vector3} v - The vector to compute the squared distance to.
     * @return {number} The squared distance.
     */
    distanceToSquared(v) {
      const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
      return dx * dx + dy * dy + dz * dz;
    }
    /**
     * Computes the Manhattan distance from the given vector to this instance.
     *
     * @param {Vector3} v - The vector to compute the Manhattan distance to.
     * @return {number} The Manhattan distance.
     */
    manhattanDistanceTo(v) {
      return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {Spherical} s - The spherical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromSpherical(s) {
      return this.setFromSphericalCoords(s.radius, s.phi, s.theta);
    }
    /**
     * Sets the vector components from the given spherical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} phi - The phi angle in radians.
     * @param {number} theta - The theta angle in radians.
     * @return {Vector3} A reference to this vector.
     */
    setFromSphericalCoords(radius, phi, theta) {
      const sinPhiRadius = Math.sin(phi) * radius;
      this.x = sinPhiRadius * Math.sin(theta);
      this.y = Math.cos(phi) * radius;
      this.z = sinPhiRadius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {Cylindrical} c - The cylindrical coordinates.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindrical(c) {
      return this.setFromCylindricalCoords(c.radius, c.theta, c.y);
    }
    /**
     * Sets the vector components from the given cylindrical coordinates.
     *
     * @param {number} radius - The radius.
     * @param {number} theta - The theta angle in radians.
     * @param {number} y - The y value.
     * @return {Vector3} A reference to this vector.
     */
    setFromCylindricalCoords(radius, theta, y) {
      this.x = radius * Math.sin(theta);
      this.y = y;
      this.z = radius * Math.cos(theta);
      return this;
    }
    /**
     * Sets the vector components to the position elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixPosition(m) {
      const e = m.elements;
      this.x = e[12];
      this.y = e[13];
      this.z = e[14];
      return this;
    }
    /**
     * Sets the vector components to the scale elements of the
     * given transformation matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixScale(m) {
      const sx = this.setFromMatrixColumn(m, 0).length();
      const sy = this.setFromMatrixColumn(m, 1).length();
      const sz = this.setFromMatrixColumn(m, 2).length();
      this.x = sx;
      this.y = sy;
      this.z = sz;
      return this;
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrixColumn(m, index) {
      return this.fromArray(m.elements, index * 4);
    }
    /**
     * Sets the vector components from the specified matrix column.
     *
     * @param {Matrix3} m - The 3x3 matrix.
     * @param {number} index - The column index.
     * @return {Vector3} A reference to this vector.
     */
    setFromMatrix3Column(m, index) {
      return this.fromArray(m.elements, index * 3);
    }
    /**
     * Sets the vector components from the given Euler angles.
     *
     * @param {Euler} e - The Euler angles to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromEuler(e) {
      this.x = e._x;
      this.y = e._y;
      this.z = e._z;
      return this;
    }
    /**
     * Sets the vector components from the RGB components of the
     * given color.
     *
     * @param {Color} c - The color to set.
     * @return {Vector3} A reference to this vector.
     */
    setFromColor(c) {
      this.x = c.r;
      this.y = c.g;
      this.z = c.b;
      return this;
    }
    /**
     * Returns \`true\` if this vector is equal with the given one.
     *
     * @param {Vector3} v - The vector to test for equality.
     * @return {boolean} Whether this vector is equal with the given one.
     */
    equals(v) {
      return v.x === this.x && v.y === this.y && v.z === this.z;
    }
    /**
     * Sets this vector's x value to be \`array[ offset ]\`, y value to be \`array[ offset + 1 ]\`
     * and z value to be \`array[ offset + 2 ]\`.
     *
     * @param {Array<number>} array - An array holding the vector component values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Vector3} A reference to this vector.
     */
    fromArray(array, offset = 0) {
      this.x = array[offset];
      this.y = array[offset + 1];
      this.z = array[offset + 2];
      return this;
    }
    /**
     * Writes the components of this vector to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the vector components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The vector components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.x;
      array[offset + 1] = this.y;
      array[offset + 2] = this.z;
      return array;
    }
    /**
     * Sets the components of this vector from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding vector data.
     * @param {number} index - The index into the attribute.
     * @return {Vector3} A reference to this vector.
     */
    fromBufferAttribute(attribute, index) {
      this.x = attribute.getX(index);
      this.y = attribute.getY(index);
      this.z = attribute.getZ(index);
      return this;
    }
    /**
     * Sets each component of this vector to a pseudo-random value between \`0\` and
     * \`1\`, excluding \`1\`.
     *
     * @return {Vector3} A reference to this vector.
     */
    random() {
      this.x = Math.random();
      this.y = Math.random();
      this.z = Math.random();
      return this;
    }
    /**
     * Sets this vector to a uniformly random point on a unit sphere.
     *
     * @return {Vector3} A reference to this vector.
     */
    randomDirection() {
      const theta = Math.random() * Math.PI * 2;
      const u = Math.random() * 2 - 1;
      const c = Math.sqrt(1 - u * u);
      this.x = c * Math.cos(theta);
      this.y = u;
      this.z = c * Math.sin(theta);
      return this;
    }
    *[Symbol.iterator]() {
      yield this.x;
      yield this.y;
      yield this.z;
    }
  }
  const _vector$c = /* @__PURE__ */ new Vector3();
  const _quaternion$4 = /* @__PURE__ */ new Quaternion();
  class Matrix3 {
    /**
     * Constructs a new 3x3 matrix. The arguments are supposed to be
     * in row-major order. If no arguments are provided, the constructor
     * initializes the matrix as an identity matrix.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     */
    constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      Matrix3.prototype.isMatrix3 = true;
      this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ];
      if (n11 !== void 0) {
        this.set(n11, n12, n13, n21, n22, n23, n31, n32, n33);
      }
    }
    /**
     * Sets the elements of the matrix.The arguments are supposed to be
     * in row-major order.
     *
     * @param {number} [n11] - 1-1 matrix element.
     * @param {number} [n12] - 1-2 matrix element.
     * @param {number} [n13] - 1-3 matrix element.
     * @param {number} [n21] - 2-1 matrix element.
     * @param {number} [n22] - 2-2 matrix element.
     * @param {number} [n23] - 2-3 matrix element.
     * @param {number} [n31] - 3-1 matrix element.
     * @param {number} [n32] - 3-2 matrix element.
     * @param {number} [n33] - 3-3 matrix element.
     * @return {Matrix3} A reference to this matrix.
     */
    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
      const te = this.elements;
      te[0] = n11;
      te[1] = n21;
      te[2] = n31;
      te[3] = n12;
      te[4] = n22;
      te[5] = n32;
      te[6] = n13;
      te[7] = n23;
      te[8] = n33;
      return this;
    }
    /**
     * Sets this matrix to the 3x3 identity matrix.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    identity() {
      this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Copies the values of the given matrix to this instance.
     *
     * @param {Matrix3} m - The matrix to copy.
     * @return {Matrix3} A reference to this matrix.
     */
    copy(m) {
      const te = this.elements;
      const me = m.elements;
      te[0] = me[0];
      te[1] = me[1];
      te[2] = me[2];
      te[3] = me[3];
      te[4] = me[4];
      te[5] = me[5];
      te[6] = me[6];
      te[7] = me[7];
      te[8] = me[8];
      return this;
    }
    /**
     * Extracts the basis of this matrix into the three axis vectors provided.
     *
     * @param {Vector3} xAxis - The basis's x axis.
     * @param {Vector3} yAxis - The basis's y axis.
     * @param {Vector3} zAxis - The basis's z axis.
     * @return {Matrix3} A reference to this matrix.
     */
    extractBasis(xAxis, yAxis, zAxis) {
      xAxis.setFromMatrix3Column(this, 0);
      yAxis.setFromMatrix3Column(this, 1);
      zAxis.setFromMatrix3Column(this, 2);
      return this;
    }
    /**
     * Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.
     *
     * @param {Matrix4} m - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    setFromMatrix4(m) {
      const me = m.elements;
      this.set(
        me[0],
        me[4],
        me[8],
        me[1],
        me[5],
        me[9],
        me[2],
        me[6],
        me[10]
      );
      return this;
    }
    /**
     * Post-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    multiply(m) {
      return this.multiplyMatrices(this, m);
    }
    /**
     * Pre-multiplies this matrix by the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix to multiply with.
     * @return {Matrix3} A reference to this matrix.
     */
    premultiply(m) {
      return this.multiplyMatrices(m, this);
    }
    /**
     * Multiples the given 3x3 matrices and stores the result
     * in this matrix.
     *
     * @param {Matrix3} a - The first matrix.
     * @param {Matrix3} b - The second matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyMatrices(a, b) {
      const ae = a.elements;
      const be = b.elements;
      const te = this.elements;
      const a11 = ae[0], a12 = ae[3], a13 = ae[6];
      const a21 = ae[1], a22 = ae[4], a23 = ae[7];
      const a31 = ae[2], a32 = ae[5], a33 = ae[8];
      const b11 = be[0], b12 = be[3], b13 = be[6];
      const b21 = be[1], b22 = be[4], b23 = be[7];
      const b31 = be[2], b32 = be[5], b33 = be[8];
      te[0] = a11 * b11 + a12 * b21 + a13 * b31;
      te[3] = a11 * b12 + a12 * b22 + a13 * b32;
      te[6] = a11 * b13 + a12 * b23 + a13 * b33;
      te[1] = a21 * b11 + a22 * b21 + a23 * b31;
      te[4] = a21 * b12 + a22 * b22 + a23 * b32;
      te[7] = a21 * b13 + a22 * b23 + a23 * b33;
      te[2] = a31 * b11 + a32 * b21 + a33 * b31;
      te[5] = a31 * b12 + a32 * b22 + a33 * b32;
      te[8] = a31 * b13 + a32 * b23 + a33 * b33;
      return this;
    }
    /**
     * Multiplies every component of the matrix by the given scalar.
     *
     * @param {number} s - The scalar.
     * @return {Matrix3} A reference to this matrix.
     */
    multiplyScalar(s) {
      const te = this.elements;
      te[0] *= s;
      te[3] *= s;
      te[6] *= s;
      te[1] *= s;
      te[4] *= s;
      te[7] *= s;
      te[2] *= s;
      te[5] *= s;
      te[8] *= s;
      return this;
    }
    /**
     * Computes and returns the determinant of this matrix.
     *
     * @return {number} The determinant.
     */
    determinant() {
      const te = this.elements;
      const a = te[0], b = te[1], c = te[2], d = te[3], e = te[4], f = te[5], g = te[6], h = te[7], i2 = te[8];
      return a * e * i2 - a * f * h - b * d * i2 + b * f * g + c * d * h - c * e * g;
    }
    /**
     * Inverts this matrix, using the [analytic method]{@link https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution}.
     * You can not invert with a determinant of zero. If you attempt this, the method produces
     * a zero matrix instead.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    invert() {
      const te = this.elements, n11 = te[0], n21 = te[1], n31 = te[2], n12 = te[3], n22 = te[4], n32 = te[5], n13 = te[6], n23 = te[7], n33 = te[8], t11 = n33 * n22 - n32 * n23, t12 = n32 * n13 - n33 * n12, t13 = n23 * n12 - n22 * n13, det = n11 * t11 + n21 * t12 + n31 * t13;
      if (det === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const detInv = 1 / det;
      te[0] = t11 * detInv;
      te[1] = (n31 * n23 - n33 * n21) * detInv;
      te[2] = (n32 * n21 - n31 * n22) * detInv;
      te[3] = t12 * detInv;
      te[4] = (n33 * n11 - n31 * n13) * detInv;
      te[5] = (n31 * n12 - n32 * n11) * detInv;
      te[6] = t13 * detInv;
      te[7] = (n21 * n13 - n23 * n11) * detInv;
      te[8] = (n22 * n11 - n21 * n12) * detInv;
      return this;
    }
    /**
     * Transposes this matrix in place.
     *
     * @return {Matrix3} A reference to this matrix.
     */
    transpose() {
      let tmp;
      const m = this.elements;
      tmp = m[1];
      m[1] = m[3];
      m[3] = tmp;
      tmp = m[2];
      m[2] = m[6];
      m[6] = tmp;
      tmp = m[5];
      m[5] = m[7];
      m[7] = tmp;
      return this;
    }
    /**
     * Computes the normal matrix which is the inverse transpose of the upper
     * left 3x3 portion of the given 4x4 matrix.
     *
     * @param {Matrix4} matrix4 - The 4x4 matrix.
     * @return {Matrix3} A reference to this matrix.
     */
    getNormalMatrix(matrix4) {
      return this.setFromMatrix4(matrix4).invert().transpose();
    }
    /**
     * Transposes this matrix into the supplied array, and returns itself unchanged.
     *
     * @param {Array<number>} r - An array to store the transposed matrix elements.
     * @return {Matrix3} A reference to this matrix.
     */
    transposeIntoArray(r) {
      const m = this.elements;
      r[0] = m[0];
      r[1] = m[3];
      r[2] = m[6];
      r[3] = m[1];
      r[4] = m[4];
      r[5] = m[7];
      r[6] = m[2];
      r[7] = m[5];
      r[8] = m[8];
      return this;
    }
    /**
     * Sets the UV transform matrix from offset, repeat, rotation, and center.
     *
     * @param {number} tx - Offset x.
     * @param {number} ty - Offset y.
     * @param {number} sx - Repeat x.
     * @param {number} sy - Repeat y.
     * @param {number} rotation - Rotation, in radians. Positive values rotate counterclockwise.
     * @param {number} cx - Center x of rotation.
     * @param {number} cy - Center y of rotation
     * @return {Matrix3} A reference to this matrix.
     */
    setUvTransform(tx, ty, sx, sy, rotation, cx, cy) {
      const c = Math.cos(rotation);
      const s = Math.sin(rotation);
      this.set(
        sx * c,
        sx * s,
        -sx * (c * cx + s * cy) + cx + tx,
        -sy * s,
        sy * c,
        -sy * (-s * cx + c * cy) + cy + ty,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Scales this matrix with the given scalar values.
     *
     * @param {number} sx - The amount to scale in the X axis.
     * @param {number} sy - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    scale(sx, sy) {
      this.premultiply(_m3.makeScale(sx, sy));
      return this;
    }
    /**
     * Rotates this matrix by the given angle.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    rotate(theta) {
      this.premultiply(_m3.makeRotation(-theta));
      return this;
    }
    /**
     * Translates this matrix by the given scalar values.
     *
     * @param {number} tx - The amount to translate in the X axis.
     * @param {number} ty - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    translate(tx, ty) {
      this.premultiply(_m3.makeTranslation(tx, ty));
      return this;
    }
    // for 2D Transforms
    /**
     * Sets this matrix as a 2D translation transform.
     *
     * @param {number|Vector2} x - The amount to translate in the X axis or alternatively a translation vector.
     * @param {number} y - The amount to translate in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeTranslation(x2, y) {
      if (x2.isVector2) {
        this.set(
          1,
          0,
          x2.x,
          0,
          1,
          x2.y,
          0,
          0,
          1
        );
      } else {
        this.set(
          1,
          0,
          x2,
          0,
          1,
          y,
          0,
          0,
          1
        );
      }
      return this;
    }
    /**
     * Sets this matrix as a 2D rotational transformation.
     *
     * @param {number} theta - The rotation in radians.
     * @return {Matrix3} A reference to this matrix.
     */
    makeRotation(theta) {
      const c = Math.cos(theta);
      const s = Math.sin(theta);
      this.set(
        c,
        -s,
        0,
        s,
        c,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Sets this matrix as a 2D scale transform.
     *
     * @param {number} x - The amount to scale in the X axis.
     * @param {number} y - The amount to scale in the Y axis.
     * @return {Matrix3} A reference to this matrix.
     */
    makeScale(x2, y) {
      this.set(
        x2,
        0,
        0,
        0,
        y,
        0,
        0,
        0,
        1
      );
      return this;
    }
    /**
     * Returns \`true\` if this matrix is equal with the given one.
     *
     * @param {Matrix3} matrix - The matrix to test for equality.
     * @return {boolean} Whether this matrix is equal with the given one.
     */
    equals(matrix) {
      const te = this.elements;
      const me = matrix.elements;
      for (let i2 = 0; i2 < 9; i2++) {
        if (te[i2] !== me[i2]) return false;
      }
      return true;
    }
    /**
     * Sets the elements of the matrix from the given array.
     *
     * @param {Array<number>} array - The matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Matrix3} A reference to this matrix.
     */
    fromArray(array, offset = 0) {
      for (let i2 = 0; i2 < 9; i2++) {
        this.elements[i2] = array[i2 + offset];
      }
      return this;
    }
    /**
     * Writes the elements of this matrix to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the matrix elements in column-major order.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The matrix elements in column-major order.
     */
    toArray(array = [], offset = 0) {
      const te = this.elements;
      array[offset] = te[0];
      array[offset + 1] = te[1];
      array[offset + 2] = te[2];
      array[offset + 3] = te[3];
      array[offset + 4] = te[4];
      array[offset + 5] = te[5];
      array[offset + 6] = te[6];
      array[offset + 7] = te[7];
      array[offset + 8] = te[8];
      return array;
    }
    /**
     * Returns a matrix with copied values from this instance.
     *
     * @return {Matrix3} A clone of this instance.
     */
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const _m3 = /* @__PURE__ */ new Matrix3();
  const _cache = {};
  function warnOnce(message) {
    if (message in _cache) return;
    _cache[message] = true;
    console.warn(message);
  }
  const LINEAR_REC709_TO_XYZ = /* @__PURE__ */ new Matrix3().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  );
  const XYZ_TO_LINEAR_REC709 = /* @__PURE__ */ new Matrix3().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
  function createColorManagement() {
    const ColorManagement2 = {
      enabled: true,
      workingColorSpace: LinearSRGBColorSpace,
      /**
       * Implementations of supported color spaces.
       *
       * Required:
       *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
       *	- whitePoint: reference white [ x y ]
       *	- transfer: transfer function (pre-defined)
       *	- toXYZ: Matrix3 RGB to XYZ transform
       *	- fromXYZ: Matrix3 XYZ to RGB transform
       *	- luminanceCoefficients: RGB luminance coefficients
       *
       * Optional:
       *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
       *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
       *
       * Reference:
       * - https://www.russellcottrell.com/photo/matrixCalculator.htm
       */
      spaces: {},
      convert: function(color, sourceColorSpace, targetColorSpace) {
        if (this.enabled === false || sourceColorSpace === targetColorSpace || !sourceColorSpace || !targetColorSpace) {
          return color;
        }
        if (this.spaces[sourceColorSpace].transfer === SRGBTransfer) {
          color.r = SRGBToLinear(color.r);
          color.g = SRGBToLinear(color.g);
          color.b = SRGBToLinear(color.b);
        }
        if (this.spaces[sourceColorSpace].primaries !== this.spaces[targetColorSpace].primaries) {
          color.applyMatrix3(this.spaces[sourceColorSpace].toXYZ);
          color.applyMatrix3(this.spaces[targetColorSpace].fromXYZ);
        }
        if (this.spaces[targetColorSpace].transfer === SRGBTransfer) {
          color.r = LinearToSRGB(color.r);
          color.g = LinearToSRGB(color.g);
          color.b = LinearToSRGB(color.b);
        }
        return color;
      },
      workingToColorSpace: function(color, targetColorSpace) {
        return this.convert(color, this.workingColorSpace, targetColorSpace);
      },
      colorSpaceToWorking: function(color, sourceColorSpace) {
        return this.convert(color, sourceColorSpace, this.workingColorSpace);
      },
      getPrimaries: function(colorSpace) {
        return this.spaces[colorSpace].primaries;
      },
      getTransfer: function(colorSpace) {
        if (colorSpace === NoColorSpace) return LinearTransfer;
        return this.spaces[colorSpace].transfer;
      },
      getLuminanceCoefficients: function(target, colorSpace = this.workingColorSpace) {
        return target.fromArray(this.spaces[colorSpace].luminanceCoefficients);
      },
      define: function(colorSpaces) {
        Object.assign(this.spaces, colorSpaces);
      },
      // Internal APIs
      _getMatrix: function(targetMatrix, sourceColorSpace, targetColorSpace) {
        return targetMatrix.copy(this.spaces[sourceColorSpace].toXYZ).multiply(this.spaces[targetColorSpace].fromXYZ);
      },
      _getDrawingBufferColorSpace: function(colorSpace) {
        return this.spaces[colorSpace].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function(colorSpace = this.workingColorSpace) {
        return this.spaces[colorSpace].workingColorSpaceConfig.unpackColorSpace;
      },
      // Deprecated
      fromWorkingColorSpace: function(color, targetColorSpace) {
        warnOnce("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().");
        return ColorManagement2.workingToColorSpace(color, targetColorSpace);
      },
      toWorkingColorSpace: function(color, sourceColorSpace) {
        warnOnce("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().");
        return ColorManagement2.colorSpaceToWorking(color, sourceColorSpace);
      }
    };
    const REC709_PRIMARIES = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
    const REC709_LUMINANCE_COEFFICIENTS = [0.2126, 0.7152, 0.0722];
    const D65 = [0.3127, 0.329];
    ColorManagement2.define({
      [LinearSRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: LinearTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      },
      [SRGBColorSpace]: {
        primaries: REC709_PRIMARIES,
        whitePoint: D65,
        transfer: SRGBTransfer,
        toXYZ: LINEAR_REC709_TO_XYZ,
        fromXYZ: XYZ_TO_LINEAR_REC709,
        luminanceCoefficients: REC709_LUMINANCE_COEFFICIENTS,
        outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
      }
    });
    return ColorManagement2;
  }
  const ColorManagement = /* @__PURE__ */ createColorManagement();
  function SRGBToLinear(c) {
    return c < 0.04045 ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
  }
  function LinearToSRGB(c) {
    return c < 31308e-7 ? c * 12.92 : 1.055 * Math.pow(c, 0.41666) - 0.055;
  }
  class Box3 {
    /**
     * Constructs a new bounding box.
     *
     * @param {Vector3} [min=(Infinity,Infinity,Infinity)] - A vector representing the lower boundary of the box.
     * @param {Vector3} [max=(-Infinity,-Infinity,-Infinity)] - A vector representing the upper boundary of the box.
     */
    constructor(min = new Vector3(Infinity, Infinity, Infinity), max2 = new Vector3(-Infinity, -Infinity, -Infinity)) {
      this.isBox3 = true;
      this.min = min;
      this.max = max2;
    }
    /**
     * Sets the lower and upper boundaries of this box.
     * Please note that this method only copies the values from the given objects.
     *
     * @param {Vector3} min - The lower boundary of the box.
     * @param {Vector3} max - The upper boundary of the box.
     * @return {Box3} A reference to this bounding box.
     */
    set(min, max2) {
      this.min.copy(min);
      this.max.copy(max2);
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<number>} array - An array holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromArray(array) {
      this.makeEmpty();
      for (let i2 = 0, il = array.length; i2 < il; i2 += 3) {
        this.expandByPoint(_vector$b.fromArray(array, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - A buffer attribute holding 3D position data.
     * @return {Box3} A reference to this bounding box.
     */
    setFromBufferAttribute(attribute) {
      this.makeEmpty();
      for (let i2 = 0, il = attribute.count; i2 < il; i2++) {
        this.expandByPoint(_vector$b.fromBufferAttribute(attribute, i2));
      }
      return this;
    }
    /**
     * Sets the upper and lower bounds of this box so it encloses the position data
     * in the given array.
     *
     * @param {Array<Vector3>} points - An array holding 3D position data as instances of {@link Vector3}.
     * @return {Box3} A reference to this bounding box.
     */
    setFromPoints(points) {
      this.makeEmpty();
      for (let i2 = 0, il = points.length; i2 < il; i2++) {
        this.expandByPoint(points[i2]);
      }
      return this;
    }
    /**
     * Centers this box on the given center vector and sets this box's width, height and
     * depth to the given size values.
     *
     * @param {Vector3} center - The center of the box.
     * @param {Vector3} size - The x, y and z dimensions of the box.
     * @return {Box3} A reference to this bounding box.
     */
    setFromCenterAndSize(center, size) {
      const halfSize = _vector$b.copy(size).multiplyScalar(0.5);
      this.min.copy(center).sub(halfSize);
      this.max.copy(center).add(halfSize);
      return this;
    }
    /**
     * Computes the world-axis-aligned bounding box for the given 3D object
     * (including its children), accounting for the object's, and children's,
     * world transforms. The function may result in a larger box than strictly necessary.
     *
     * @param {Object3D} object - The 3D object to compute the bounding box for.
     * @param {boolean} [precise=false] - If set to \`true\`, the method computes the smallest
     * world-axis-aligned bounding box at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    setFromObject(object, precise = false) {
      this.makeEmpty();
      return this.expandByObject(object, precise);
    }
    /**
     * Returns a new box with copied values from this instance.
     *
     * @return {Box3} A clone of this instance.
     */
    clone() {
      return new this.constructor().copy(this);
    }
    /**
     * Copies the values of the given box to this instance.
     *
     * @param {Box3} box - The box to copy.
     * @return {Box3} A reference to this bounding box.
     */
    copy(box) {
      this.min.copy(box.min);
      this.max.copy(box.max);
      return this;
    }
    /**
     * Makes this box empty which means in encloses a zero space in 3D.
     *
     * @return {Box3} A reference to this bounding box.
     */
    makeEmpty() {
      this.min.x = this.min.y = this.min.z = Infinity;
      this.max.x = this.max.y = this.max.z = -Infinity;
      return this;
    }
    /**
     * Returns true if this box includes zero points within its bounds.
     * Note that a box with equal lower and upper bounds still includes one
     * point, the one both bounds share.
     *
     * @return {boolean} Whether this box is empty or not.
     */
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    /**
     * Returns the center point of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The center point.
     */
    getCenter(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    /**
     * Returns the dimensions of this box.
     *
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The size.
     */
    getSize(target) {
      return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
    }
    /**
     * Expands the boundaries of this box to include the given point.
     *
     * @param {Vector3} point - The point that should be included by the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByPoint(point) {
      this.min.min(point);
      this.max.max(point);
      return this;
    }
    /**
     * Expands this box equilaterally by the given vector. The width of this
     * box will be expanded by the x component of the vector in both
     * directions. The height of this box will be expanded by the y component of
     * the vector in both directions. The depth of this box will be
     * expanded by the z component of the vector in both directions.
     *
     * @param {Vector3} vector - The vector that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByVector(vector) {
      this.min.sub(vector);
      this.max.add(vector);
      return this;
    }
    /**
     * Expands each dimension of the box by the given scalar. If negative, the
     * dimensions of the box will be contracted.
     *
     * @param {number} scalar - The scalar value that should expand the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    expandByScalar(scalar) {
      this.min.addScalar(-scalar);
      this.max.addScalar(scalar);
      return this;
    }
    /**
     * Expands the boundaries of this box to include the given 3D object and
     * its children, accounting for the object's, and children's, world
     * transforms. The function may result in a larger box than strictly
     * necessary (unless the precise parameter is set to true).
     *
     * @param {Object3D} object - The 3D object that should expand the bounding box.
     * @param {boolean} precise - If set to \`true\`, the method expands the bounding box
     * as little as necessary at the expense of more computation.
     * @return {Box3} A reference to this bounding box.
     */
    expandByObject(object, precise = false) {
      object.updateWorldMatrix(false, false);
      const geometry = object.geometry;
      if (geometry !== void 0) {
        const positionAttribute = geometry.getAttribute("position");
        if (precise === true && positionAttribute !== void 0 && object.isInstancedMesh !== true) {
          for (let i2 = 0, l = positionAttribute.count; i2 < l; i2++) {
            if (object.isMesh === true) {
              object.getVertexPosition(i2, _vector$b);
            } else {
              _vector$b.fromBufferAttribute(positionAttribute, i2);
            }
            _vector$b.applyMatrix4(object.matrixWorld);
            this.expandByPoint(_vector$b);
          }
        } else {
          if (object.boundingBox !== void 0) {
            if (object.boundingBox === null) {
              object.computeBoundingBox();
            }
            _box$4.copy(object.boundingBox);
          } else {
            if (geometry.boundingBox === null) {
              geometry.computeBoundingBox();
            }
            _box$4.copy(geometry.boundingBox);
          }
          _box$4.applyMatrix4(object.matrixWorld);
          this.union(_box$4);
        }
      }
      const children = object.children;
      for (let i2 = 0, l = children.length; i2 < l; i2++) {
        this.expandByObject(children[i2], precise);
      }
      return this;
    }
    /**
     * Returns \`true\` if the given point lies within or on the boundaries of this box.
     *
     * @param {Vector3} point - The point to test.
     * @return {boolean} Whether the bounding box contains the given point or not.
     */
    containsPoint(point) {
      return point.x >= this.min.x && point.x <= this.max.x && point.y >= this.min.y && point.y <= this.max.y && point.z >= this.min.z && point.z <= this.max.z;
    }
    /**
     * Returns \`true\` if this bounding box includes the entirety of the given bounding box.
     * If this box and the given one are identical, this function also returns \`true\`.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the bounding box contains the given bounding box or not.
     */
    containsBox(box) {
      return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y && this.min.z <= box.min.z && box.max.z <= this.max.z;
    }
    /**
     * Returns a point as a proportion of this box's width, height and depth.
     *
     * @param {Vector3} point - A point in 3D space.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} A point as a proportion of this box's width, height and depth.
     */
    getParameter(point, target) {
      return target.set(
        (point.x - this.min.x) / (this.max.x - this.min.x),
        (point.y - this.min.y) / (this.max.y - this.min.y),
        (point.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    /**
     * Returns \`true\` if the given bounding box intersects with this bounding box.
     *
     * @param {Box3} box - The bounding box to test.
     * @return {boolean} Whether the given bounding box intersects with this bounding box.
     */
    intersectsBox(box) {
      return box.max.x >= this.min.x && box.min.x <= this.max.x && box.max.y >= this.min.y && box.min.y <= this.max.y && box.max.z >= this.min.z && box.min.z <= this.max.z;
    }
    /**
     * Returns \`true\` if the given bounding sphere intersects with this bounding box.
     *
     * @param {Sphere} sphere - The bounding sphere to test.
     * @return {boolean} Whether the given bounding sphere intersects with this bounding box.
     */
    intersectsSphere(sphere) {
      this.clampPoint(sphere.center, _vector$b);
      return _vector$b.distanceToSquared(sphere.center) <= sphere.radius * sphere.radius;
    }
    /**
     * Returns \`true\` if the given plane intersects with this bounding box.
     *
     * @param {Plane} plane - The plane to test.
     * @return {boolean} Whether the given plane intersects with this bounding box.
     */
    intersectsPlane(plane) {
      let min, max2;
      if (plane.normal.x > 0) {
        min = plane.normal.x * this.min.x;
        max2 = plane.normal.x * this.max.x;
      } else {
        min = plane.normal.x * this.max.x;
        max2 = plane.normal.x * this.min.x;
      }
      if (plane.normal.y > 0) {
        min += plane.normal.y * this.min.y;
        max2 += plane.normal.y * this.max.y;
      } else {
        min += plane.normal.y * this.max.y;
        max2 += plane.normal.y * this.min.y;
      }
      if (plane.normal.z > 0) {
        min += plane.normal.z * this.min.z;
        max2 += plane.normal.z * this.max.z;
      } else {
        min += plane.normal.z * this.max.z;
        max2 += plane.normal.z * this.min.z;
      }
      return min <= -plane.constant && max2 >= -plane.constant;
    }
    /**
     * Returns \`true\` if the given triangle intersects with this bounding box.
     *
     * @param {Triangle} triangle - The triangle to test.
     * @return {boolean} Whether the given triangle intersects with this bounding box.
     */
    intersectsTriangle(triangle) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(_center);
      _extents.subVectors(this.max, _center);
      _v0$2.subVectors(triangle.a, _center);
      _v1$7.subVectors(triangle.b, _center);
      _v2$4.subVectors(triangle.c, _center);
      _f0.subVectors(_v1$7, _v0$2);
      _f1.subVectors(_v2$4, _v1$7);
      _f2.subVectors(_v0$2, _v2$4);
      let axes = [
        0,
        -_f0.z,
        _f0.y,
        0,
        -_f1.z,
        _f1.y,
        0,
        -_f2.z,
        _f2.y,
        _f0.z,
        0,
        -_f0.x,
        _f1.z,
        0,
        -_f1.x,
        _f2.z,
        0,
        -_f2.x,
        -_f0.y,
        _f0.x,
        0,
        -_f1.y,
        _f1.x,
        0,
        -_f2.y,
        _f2.x,
        0
      ];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      axes = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      if (!satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents)) {
        return false;
      }
      _triangleNormal.crossVectors(_f0, _f1);
      axes = [_triangleNormal.x, _triangleNormal.y, _triangleNormal.z];
      return satForAxes(axes, _v0$2, _v1$7, _v2$4, _extents);
    }
    /**
     * Clamps the given point within the bounds of this box.
     *
     * @param {Vector3} point - The point to clamp.
     * @param {Vector3} target - The target vector that is used to store the method's result.
     * @return {Vector3} The clamped point.
     */
    clampPoint(point, target) {
      return target.copy(point).clamp(this.min, this.max);
    }
    /**
     * Returns the euclidean distance from any edge of this box to the specified point. If
     * the given point lies inside of this box, the distance will be \`0\`.
     *
     * @param {Vector3} point - The point to compute the distance to.
     * @return {number} The euclidean distance.
     */
    distanceToPoint(point) {
      return this.clampPoint(point, _vector$b).distanceTo(point);
    }
    /**
     * Returns a bounding sphere that encloses this bounding box.
     *
     * @param {Sphere} target - The target sphere that is used to store the method's result.
     * @return {Sphere} The bounding sphere that encloses this bounding box.
     */
    getBoundingSphere(target) {
      if (this.isEmpty()) {
        target.makeEmpty();
      } else {
        this.getCenter(target.center);
        target.radius = this.getSize(_vector$b).length() * 0.5;
      }
      return target;
    }
    /**
     * Computes the intersection of this bounding box and the given one, setting the upper
     * bound of this box to the lesser of the two boxes' upper bounds and the
     * lower bound of this box to the greater of the two boxes' lower bounds. If
     * there's no overlap, makes this box empty.
     *
     * @param {Box3} box - The bounding box to intersect with.
     * @return {Box3} A reference to this bounding box.
     */
    intersect(box) {
      this.min.max(box.min);
      this.max.min(box.max);
      if (this.isEmpty()) this.makeEmpty();
      return this;
    }
    /**
     * Computes the union of this box and another and the given one, setting the upper
     * bound of this box to the greater of the two boxes' upper bounds and the
     * lower bound of this box to the lesser of the two boxes' lower bounds.
     *
     * @param {Box3} box - The bounding box that will be unioned with this instance.
     * @return {Box3} A reference to this bounding box.
     */
    union(box) {
      this.min.min(box.min);
      this.max.max(box.max);
      return this;
    }
    /**
     * Transforms this bounding box by the given 4x4 transformation matrix.
     *
     * @param {Matrix4} matrix - The transformation matrix.
     * @return {Box3} A reference to this bounding box.
     */
    applyMatrix4(matrix) {
      if (this.isEmpty()) return this;
      _points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(matrix);
      _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(matrix);
      _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(matrix);
      _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(matrix);
      _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(matrix);
      this.setFromPoints(_points);
      return this;
    }
    /**
     * Adds the given offset to both the upper and lower bounds of this bounding box,
     * effectively moving it in 3D space.
     *
     * @param {Vector3} offset - The offset that should be used to translate the bounding box.
     * @return {Box3} A reference to this bounding box.
     */
    translate(offset) {
      this.min.add(offset);
      this.max.add(offset);
      return this;
    }
    /**
     * Returns \`true\` if this bounding box is equal with the given one.
     *
     * @param {Box3} box - The box to test for equality.
     * @return {boolean} Whether this bounding box is equal with the given one.
     */
    equals(box) {
      return box.min.equals(this.min) && box.max.equals(this.max);
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @return {Object} Serialized structure with fields representing the object state.
     */
    toJSON() {
      return {
        min: this.min.toArray(),
        max: this.max.toArray()
      };
    }
    /**
     * Returns a serialized structure of the bounding box.
     *
     * @param {Object} json - The serialized json to set the box from.
     * @return {Box3} A reference to this bounding box.
     */
    fromJSON(json) {
      this.min.fromArray(json.min);
      this.max.fromArray(json.max);
      return this;
    }
  }
  const _points = [
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3(),
    /* @__PURE__ */ new Vector3()
  ];
  const _vector$b = /* @__PURE__ */ new Vector3();
  const _box$4 = /* @__PURE__ */ new Box3();
  const _v0$2 = /* @__PURE__ */ new Vector3();
  const _v1$7 = /* @__PURE__ */ new Vector3();
  const _v2$4 = /* @__PURE__ */ new Vector3();
  const _f0 = /* @__PURE__ */ new Vector3();
  const _f1 = /* @__PURE__ */ new Vector3();
  const _f2 = /* @__PURE__ */ new Vector3();
  const _center = /* @__PURE__ */ new Vector3();
  const _extents = /* @__PURE__ */ new Vector3();
  const _triangleNormal = /* @__PURE__ */ new Vector3();
  const _testAxis = /* @__PURE__ */ new Vector3();
  function satForAxes(axes, v0, v1, v2, extents) {
    for (let i2 = 0, j = axes.length - 3; i2 <= j; i2 += 3) {
      _testAxis.fromArray(axes, i2);
      const r = extents.x * Math.abs(_testAxis.x) + extents.y * Math.abs(_testAxis.y) + extents.z * Math.abs(_testAxis.z);
      const p0 = v0.dot(_testAxis);
      const p1 = v1.dot(_testAxis);
      const p2 = v2.dot(_testAxis);
      if (Math.max(-Math.max(p0, p1, p2), Math.min(p0, p1, p2)) > r) {
        return false;
      }
    }
    return true;
  }
  const _colorKeywords = {
    "aliceblue": 15792383,
    "antiquewhite": 16444375,
    "aqua": 65535,
    "aquamarine": 8388564,
    "azure": 15794175,
    "beige": 16119260,
    "bisque": 16770244,
    "black": 0,
    "blanchedalmond": 16772045,
    "blue": 255,
    "blueviolet": 9055202,
    "brown": 10824234,
    "burlywood": 14596231,
    "cadetblue": 6266528,
    "chartreuse": 8388352,
    "chocolate": 13789470,
    "coral": 16744272,
    "cornflowerblue": 6591981,
    "cornsilk": 16775388,
    "crimson": 14423100,
    "cyan": 65535,
    "darkblue": 139,
    "darkcyan": 35723,
    "darkgoldenrod": 12092939,
    "darkgray": 11119017,
    "darkgreen": 25600,
    "darkgrey": 11119017,
    "darkkhaki": 12433259,
    "darkmagenta": 9109643,
    "darkolivegreen": 5597999,
    "darkorange": 16747520,
    "darkorchid": 10040012,
    "darkred": 9109504,
    "darksalmon": 15308410,
    "darkseagreen": 9419919,
    "darkslateblue": 4734347,
    "darkslategray": 3100495,
    "darkslategrey": 3100495,
    "darkturquoise": 52945,
    "darkviolet": 9699539,
    "deeppink": 16716947,
    "deepskyblue": 49151,
    "dimgray": 6908265,
    "dimgrey": 6908265,
    "dodgerblue": 2003199,
    "firebrick": 11674146,
    "floralwhite": 16775920,
    "forestgreen": 2263842,
    "fuchsia": 16711935,
    "gainsboro": 14474460,
    "ghostwhite": 16316671,
    "gold": 16766720,
    "goldenrod": 14329120,
    "gray": 8421504,
    "green": 32768,
    "greenyellow": 11403055,
    "grey": 8421504,
    "honeydew": 15794160,
    "hotpink": 16738740,
    "indianred": 13458524,
    "indigo": 4915330,
    "ivory": 16777200,
    "khaki": 15787660,
    "lavender": 15132410,
    "lavenderblush": 16773365,
    "lawngreen": 8190976,
    "lemonchiffon": 16775885,
    "lightblue": 11393254,
    "lightcoral": 15761536,
    "lightcyan": 14745599,
    "lightgoldenrodyellow": 16448210,
    "lightgray": 13882323,
    "lightgreen": 9498256,
    "lightgrey": 13882323,
    "lightpink": 16758465,
    "lightsalmon": 16752762,
    "lightseagreen": 2142890,
    "lightskyblue": 8900346,
    "lightslategray": 7833753,
    "lightslategrey": 7833753,
    "lightsteelblue": 11584734,
    "lightyellow": 16777184,
    "lime": 65280,
    "limegreen": 3329330,
    "linen": 16445670,
    "magenta": 16711935,
    "maroon": 8388608,
    "mediumaquamarine": 6737322,
    "mediumblue": 205,
    "mediumorchid": 12211667,
    "mediumpurple": 9662683,
    "mediumseagreen": 3978097,
    "mediumslateblue": 8087790,
    "mediumspringgreen": 64154,
    "mediumturquoise": 4772300,
    "mediumvioletred": 13047173,
    "midnightblue": 1644912,
    "mintcream": 16121850,
    "mistyrose": 16770273,
    "moccasin": 16770229,
    "navajowhite": 16768685,
    "navy": 128,
    "oldlace": 16643558,
    "olive": 8421376,
    "olivedrab": 7048739,
    "orange": 16753920,
    "orangered": 16729344,
    "orchid": 14315734,
    "palegoldenrod": 15657130,
    "palegreen": 10025880,
    "paleturquoise": 11529966,
    "palevioletred": 14381203,
    "papayawhip": 16773077,
    "peachpuff": 16767673,
    "peru": 13468991,
    "pink": 16761035,
    "plum": 14524637,
    "powderblue": 11591910,
    "purple": 8388736,
    "rebeccapurple": 6697881,
    "red": 16711680,
    "rosybrown": 12357519,
    "royalblue": 4286945,
    "saddlebrown": 9127187,
    "salmon": 16416882,
    "sandybrown": 16032864,
    "seagreen": 3050327,
    "seashell": 16774638,
    "sienna": 10506797,
    "silver": 12632256,
    "skyblue": 8900331,
    "slateblue": 6970061,
    "slategray": 7372944,
    "slategrey": 7372944,
    "snow": 16775930,
    "springgreen": 65407,
    "steelblue": 4620980,
    "tan": 13808780,
    "teal": 32896,
    "thistle": 14204888,
    "tomato": 16737095,
    "turquoise": 4251856,
    "violet": 15631086,
    "wheat": 16113331,
    "white": 16777215,
    "whitesmoke": 16119285,
    "yellow": 16776960,
    "yellowgreen": 10145074
  };
  const _hslA = { h: 0, s: 0, l: 0 };
  const _hslB = { h: 0, s: 0, l: 0 };
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
    return p;
  }
  class Color {
    /**
     * Constructs a new color.
     *
     * Note that standard method of specifying color in three.js is with a hexadecimal triplet,
     * and that method is used throughout the rest of the documentation.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     */
    constructor(r, g, b) {
      this.isColor = true;
      this.r = 1;
      this.g = 1;
      this.b = 1;
      return this.set(r, g, b);
    }
    /**
     * Sets the colors's components from the given values.
     *
     * @param {(number|string|Color)} [r] - The red component of the color. If \`g\` and \`b\` are
     * not provided, it can be hexadecimal triplet, a CSS-style string or another \`Color\` instance.
     * @param {number} [g] - The green component.
     * @param {number} [b] - The blue component.
     * @return {Color} A reference to this color.
     */
    set(r, g, b) {
      if (g === void 0 && b === void 0) {
        const value = r;
        if (value && value.isColor) {
          this.copy(value);
        } else if (typeof value === "number") {
          this.setHex(value);
        } else if (typeof value === "string") {
          this.setStyle(value);
        }
      } else {
        this.setRGB(r, g, b);
      }
      return this;
    }
    /**
     * Sets the colors's components to the given scalar value.
     *
     * @param {number} scalar - The scalar value.
     * @return {Color} A reference to this color.
     */
    setScalar(scalar) {
      this.r = scalar;
      this.g = scalar;
      this.b = scalar;
      return this;
    }
    /**
     * Sets this color from a hexadecimal value.
     *
     * @param {number} hex - The hexadecimal value.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHex(hex, colorSpace = SRGBColorSpace) {
      hex = Math.floor(hex);
      this.r = (hex >> 16 & 255) / 255;
      this.g = (hex >> 8 & 255) / 255;
      this.b = (hex & 255) / 255;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} r - Red channel value between \`0.0\` and \`1.0\`.
     * @param {number} g - Green channel value between \`0.0\` and \`1.0\`.
     * @param {number} b - Blue channel value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setRGB(r, g, b, colorSpace = ColorManagement.workingColorSpace) {
      this.r = r;
      this.g = g;
      this.b = b;
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from RGB values.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setHSL(h, s, l, colorSpace = ColorManagement.workingColorSpace) {
      h = euclideanModulo(h, 1);
      s = clamp(s, 0, 1);
      l = clamp(l, 0, 1);
      if (s === 0) {
        this.r = this.g = this.b = l;
      } else {
        const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
        const q = 2 * l - p;
        this.r = hue2rgb(q, p, h + 1 / 3);
        this.g = hue2rgb(q, p, h);
        this.b = hue2rgb(q, p, h - 1 / 3);
      }
      ColorManagement.colorSpaceToWorking(this, colorSpace);
      return this;
    }
    /**
     * Sets this color from a CSS-style string. For example, \`rgb(250, 0,0)\`,
     * \`rgb(100%, 0%, 0%)\`, \`hsl(0, 100%, 50%)\`, \`#ff0000\`, \`#f00\`, or \`red\` ( or
     * any [X11 color name]{@link https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart} -
     * all 140 color names are supported).
     *
     * @param {string} style - Color as a CSS-style string.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setStyle(style, colorSpace = SRGBColorSpace) {
      function handleAlpha(string) {
        if (string === void 0) return;
        if (parseFloat(string) < 1) {
          console.warn("THREE.Color: Alpha component of " + style + " will be ignored.");
        }
      }
      let m;
      if (m = /^(\\w+)\\(([^\\)]*)\\)/.exec(style)) {
        let color;
        const name = m[1];
        const components = m[2];
        switch (name) {
          case "rgb":
          case "rgba":
            if (color = /^\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(255, parseInt(color[1], 10)) / 255,
                Math.min(255, parseInt(color[2], 10)) / 255,
                Math.min(255, parseInt(color[3], 10)) / 255,
                colorSpace
              );
            }
            if (color = /^\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*,\\s*(\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setRGB(
                Math.min(100, parseInt(color[1], 10)) / 100,
                Math.min(100, parseInt(color[2], 10)) / 100,
                Math.min(100, parseInt(color[3], 10)) / 100,
                colorSpace
              );
            }
            break;
          case "hsl":
          case "hsla":
            if (color = /^\\s*(\\d*\\.?\\d+)\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*,\\s*(\\d*\\.?\\d+)\\%\\s*(?:,\\s*(\\d*\\.?\\d+)\\s*)?$/.exec(components)) {
              handleAlpha(color[4]);
              return this.setHSL(
                parseFloat(color[1]) / 360,
                parseFloat(color[2]) / 100,
                parseFloat(color[3]) / 100,
                colorSpace
              );
            }
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + style);
        }
      } else if (m = /^\\#([A-Fa-f\\d]+)$/.exec(style)) {
        const hex = m[1];
        const size = hex.length;
        if (size === 3) {
          return this.setRGB(
            parseInt(hex.charAt(0), 16) / 15,
            parseInt(hex.charAt(1), 16) / 15,
            parseInt(hex.charAt(2), 16) / 15,
            colorSpace
          );
        } else if (size === 6) {
          return this.setHex(parseInt(hex, 16), colorSpace);
        } else {
          console.warn("THREE.Color: Invalid hex color " + style);
        }
      } else if (style && style.length > 0) {
        return this.setColorName(style, colorSpace);
      }
      return this;
    }
    /**
     * Sets this color from a color name. Faster than {@link Color#setStyle} if
     * you don't need the other CSS-style formats.
     *
     * For convenience, the list of names is exposed in \`Color.NAMES\` as a hash.
     * \`\`\`js
     * Color.NAMES.aliceblue // returns 0xF0F8FF
     * \`\`\`
     *
     * @param {string} style - The color name.
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {Color} A reference to this color.
     */
    setColorName(style, colorSpace = SRGBColorSpace) {
      const hex = _colorKeywords[style.toLowerCase()];
      if (hex !== void 0) {
        this.setHex(hex, colorSpace);
      } else {
        console.warn("THREE.Color: Unknown color " + style);
      }
      return this;
    }
    /**
     * Returns a new color with copied values from this instance.
     *
     * @return {Color} A clone of this instance.
     */
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    /**
     * Copies the values of the given color to this instance.
     *
     * @param {Color} color - The color to copy.
     * @return {Color} A reference to this color.
     */
    copy(color) {
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copySRGBToLinear(color) {
      this.r = SRGBToLinear(color.r);
      this.g = SRGBToLinear(color.g);
      this.b = SRGBToLinear(color.b);
      return this;
    }
    /**
     * Copies the given color into this color, and then converts this color from
     * \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @param {Color} color - The color to copy/convert.
     * @return {Color} A reference to this color.
     */
    copyLinearToSRGB(color) {
      this.r = LinearToSRGB(color.r);
      this.g = LinearToSRGB(color.g);
      this.b = LinearToSRGB(color.b);
      return this;
    }
    /**
     * Converts this color from \`SRGBColorSpace\` to \`LinearSRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertSRGBToLinear() {
      this.copySRGBToLinear(this);
      return this;
    }
    /**
     * Converts this color from \`LinearSRGBColorSpace\` to \`SRGBColorSpace\`.
     *
     * @return {Color} A reference to this color.
     */
    convertLinearToSRGB() {
      this.copyLinearToSRGB(this);
      return this;
    }
    /**
     * Returns the hexadecimal value of this color.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {number} The hexadecimal value.
     */
    getHex(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      return Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
    }
    /**
     * Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The hexadecimal value as a string.
     */
    getHexString(colorSpace = SRGBColorSpace) {
      return ("000000" + this.getHex(colorSpace).toString(16)).slice(-6);
    }
    /**
     * Converts the colors RGB values into the HSL format and stores them into the
     * given target object.
     *
     * @param {{h:number,s:number,l:number}} target - The target object that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {{h:number,s:number,l:number}} The HSL representation of this color.
     */
    getHSL(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      const max2 = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let hue, saturation;
      const lightness = (min + max2) / 2;
      if (min === max2) {
        hue = 0;
        saturation = 0;
      } else {
        const delta = max2 - min;
        saturation = lightness <= 0.5 ? delta / (max2 + min) : delta / (2 - max2 - min);
        switch (max2) {
          case r:
            hue = (g - b) / delta + (g < b ? 6 : 0);
            break;
          case g:
            hue = (b - r) / delta + 2;
            break;
          case b:
            hue = (r - g) / delta + 4;
            break;
        }
        hue /= 6;
      }
      target.h = hue;
      target.s = saturation;
      target.l = lightness;
      return target;
    }
    /**
     * Returns the RGB values of this color and stores them into the given target object.
     *
     * @param {Color} target - The target color that is used to store the method's result.
     * @param {string} [colorSpace=ColorManagement.workingColorSpace] - The color space.
     * @return {Color} The RGB representation of this color.
     */
    getRGB(target, colorSpace = ColorManagement.workingColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      target.r = _color.r;
      target.g = _color.g;
      target.b = _color.b;
      return target;
    }
    /**
     * Returns the value of this color as a CSS style string. Example: \`rgb(255,0,0)\`.
     *
     * @param {string} [colorSpace=SRGBColorSpace] - The color space.
     * @return {string} The CSS representation of this color.
     */
    getStyle(colorSpace = SRGBColorSpace) {
      ColorManagement.workingToColorSpace(_color.copy(this), colorSpace);
      const r = _color.r, g = _color.g, b = _color.b;
      if (colorSpace !== SRGBColorSpace) {
        return \`color(\${colorSpace} \${r.toFixed(3)} \${g.toFixed(3)} \${b.toFixed(3)})\`;
      }
      return \`rgb(\${Math.round(r * 255)},\${Math.round(g * 255)},\${Math.round(b * 255)})\`;
    }
    /**
     * Adds the given HSL values to this color's values.
     * Internally, this converts the color's RGB values to HSL, adds HSL
     * and then converts the color back to RGB.
     *
     * @param {number} h - Hue value between \`0.0\` and \`1.0\`.
     * @param {number} s - Saturation value between \`0.0\` and \`1.0\`.
     * @param {number} l - Lightness value between \`0.0\` and \`1.0\`.
     * @return {Color} A reference to this color.
     */
    offsetHSL(h, s, l) {
      this.getHSL(_hslA);
      return this.setHSL(_hslA.h + h, _hslA.s + s, _hslA.l + l);
    }
    /**
     * Adds the RGB values of the given color to the RGB values of this color.
     *
     * @param {Color} color - The color to add.
     * @return {Color} A reference to this color.
     */
    add(color) {
      this.r += color.r;
      this.g += color.g;
      this.b += color.b;
      return this;
    }
    /**
     * Adds the RGB values of the given colors and stores the result in this instance.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @return {Color} A reference to this color.
     */
    addColors(color1, color2) {
      this.r = color1.r + color2.r;
      this.g = color1.g + color2.g;
      this.b = color1.b + color2.b;
      return this;
    }
    /**
     * Adds the given scalar value to the RGB values of this color.
     *
     * @param {number} s - The scalar to add.
     * @return {Color} A reference to this color.
     */
    addScalar(s) {
      this.r += s;
      this.g += s;
      this.b += s;
      return this;
    }
    /**
     * Subtracts the RGB values of the given color from the RGB values of this color.
     *
     * @param {Color} color - The color to subtract.
     * @return {Color} A reference to this color.
     */
    sub(color) {
      this.r = Math.max(0, this.r - color.r);
      this.g = Math.max(0, this.g - color.g);
      this.b = Math.max(0, this.b - color.b);
      return this;
    }
    /**
     * Multiplies the RGB values of the given color with the RGB values of this color.
     *
     * @param {Color} color - The color to multiply.
     * @return {Color} A reference to this color.
     */
    multiply(color) {
      this.r *= color.r;
      this.g *= color.g;
      this.b *= color.b;
      return this;
    }
    /**
     * Multiplies the given scalar value with the RGB values of this color.
     *
     * @param {number} s - The scalar to multiply.
     * @return {Color} A reference to this color.
     */
    multiplyScalar(s) {
      this.r *= s;
      this.g *= s;
      this.b *= s;
      return this;
    }
    /**
     * Linearly interpolates this color's RGB values toward the RGB values of the
     * given color. The alpha argument can be thought of as the ratio between
     * the two colors, where \`0.0\` is this color and \`1.0\` is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerp(color, alpha) {
      this.r += (color.r - this.r) * alpha;
      this.g += (color.g - this.g) * alpha;
      this.b += (color.b - this.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates between the given colors and stores the result in this instance.
     * The alpha argument can be thought of as the ratio between the two colors, where \`0.0\`
     * is the first and \`1.0\` is the second color.
     *
     * @param {Color} color1 - The first color.
     * @param {Color} color2 - The second color.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpColors(color1, color2, alpha) {
      this.r = color1.r + (color2.r - color1.r) * alpha;
      this.g = color1.g + (color2.g - color1.g) * alpha;
      this.b = color1.b + (color2.b - color1.b) * alpha;
      return this;
    }
    /**
     * Linearly interpolates this color's HSL values toward the HSL values of the
     * given color. It differs from {@link Color#lerp} by not interpolating straight
     * from one color to the other, but instead going through all the hues in between
     * those two colors. The alpha argument can be thought of as the ratio between
     * the two colors, where 0.0 is this color and 1.0 is the first argument.
     *
     * @param {Color} color - The color to converge on.
     * @param {number} alpha - The interpolation factor in the closed interval \`[0,1]\`.
     * @return {Color} A reference to this color.
     */
    lerpHSL(color, alpha) {
      this.getHSL(_hslA);
      color.getHSL(_hslB);
      const h = lerp(_hslA.h, _hslB.h, alpha);
      const s = lerp(_hslA.s, _hslB.s, alpha);
      const l = lerp(_hslA.l, _hslB.l, alpha);
      this.setHSL(h, s, l);
      return this;
    }
    /**
     * Sets the color's RGB components from the given 3D vector.
     *
     * @param {Vector3} v - The vector to set.
     * @return {Color} A reference to this color.
     */
    setFromVector3(v) {
      this.r = v.x;
      this.g = v.y;
      this.b = v.z;
      return this;
    }
    /**
     * Transforms this color with the given 3x3 matrix.
     *
     * @param {Matrix3} m - The matrix.
     * @return {Color} A reference to this color.
     */
    applyMatrix3(m) {
      const r = this.r, g = this.g, b = this.b;
      const e = m.elements;
      this.r = e[0] * r + e[3] * g + e[6] * b;
      this.g = e[1] * r + e[4] * g + e[7] * b;
      this.b = e[2] * r + e[5] * g + e[8] * b;
      return this;
    }
    /**
     * Returns \`true\` if this color is equal with the given one.
     *
     * @param {Color} c - The color to test for equality.
     * @return {boolean} Whether this bounding color is equal with the given one.
     */
    equals(c) {
      return c.r === this.r && c.g === this.g && c.b === this.b;
    }
    /**
     * Sets this color's RGB components from the given array.
     *
     * @param {Array<number>} array - An array holding the RGB values.
     * @param {number} [offset=0] - The offset into the array.
     * @return {Color} A reference to this color.
     */
    fromArray(array, offset = 0) {
      this.r = array[offset];
      this.g = array[offset + 1];
      this.b = array[offset + 2];
      return this;
    }
    /**
     * Writes the RGB components of this color to the given array. If no array is provided,
     * the method returns a new instance.
     *
     * @param {Array<number>} [array=[]] - The target array holding the color components.
     * @param {number} [offset=0] - Index of the first element in the array.
     * @return {Array<number>} The color components.
     */
    toArray(array = [], offset = 0) {
      array[offset] = this.r;
      array[offset + 1] = this.g;
      array[offset + 2] = this.b;
      return array;
    }
    /**
     * Sets the components of this color from the given buffer attribute.
     *
     * @param {BufferAttribute} attribute - The buffer attribute holding color data.
     * @param {number} index - The index into the attribute.
     * @return {Color} A reference to this color.
     */
    fromBufferAttribute(attribute, index) {
      this.r = attribute.getX(index);
      this.g = attribute.getY(index);
      this.b = attribute.getZ(index);
      return this;
    }
    /**
     * This methods defines the serialization result of this class. Returns the color
     * as a hexadecimal value.
     *
     * @return {number} The hexadecimal value.
     */
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r;
      yield this.g;
      yield this.b;
    }
  }
  const _color = /* @__PURE__ */ new Color();
  Color.NAMES = _colorKeywords;
  if (typeof __THREE_DEVTOOLS__ !== "undefined") {
    __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
      revision: REVISION
    } }));
  }
  if (typeof window !== "undefined") {
    if (window.__THREE__) {
      console.warn("WARNING: Multiple instances of Three.js being imported.");
    } else {
      window.__THREE__ = REVISION;
    }
  }
  const LN_SCALE_MIN = -12;
  const LN_SCALE_MAX = 9;
  const LN_SCALE_ZERO = -30;
  const SCALE_ZERO = Math.exp(LN_SCALE_ZERO);
  const SPLAT_TEX_WIDTH_BITS = 11;
  const SPLAT_TEX_HEIGHT_BITS = 11;
  const SPLAT_TEX_WIDTH = 1 << SPLAT_TEX_WIDTH_BITS;
  const SPLAT_TEX_HEIGHT = 1 << SPLAT_TEX_HEIGHT_BITS;
  const SPLAT_TEX_MIN_HEIGHT = 1;
  function unindentLines(s) {
    var _a2;
    let seenNonEmpty = false;
    const lines = s.split("\\n").map((line) => {
      const trimmedLine = line.trimEnd();
      if (seenNonEmpty) {
        return trimmedLine;
      }
      if (trimmedLine.length > 0) {
        seenNonEmpty = true;
        return trimmedLine;
      }
      return null;
    }).filter((line) => line != null);
    while (lines.length > 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
    if (lines.length === 0) {
      return [];
    }
    const indent = (_a2 = lines[0].match(/^\\s*/)) == null ? void 0 : _a2[0];
    if (!indent) {
      return lines;
    }
    const regex = new RegExp(\`^\${indent}\`);
    return lines.map((line) => line.replace(regex, ""));
  }
  function unindent(s) {
    return unindentLines(s).join("\\n");
  }
  const f32buffer = new Float32Array(1);
  const u32buffer = new Uint32Array(f32buffer.buffer);
  const supportsFloat16Array = "Float16Array" in globalThis;
  const f16buffer = supportsFloat16Array ? new globalThis["Float16Array"](1) : null;
  const u16buffer = new Uint16Array(f16buffer == null ? void 0 : f16buffer.buffer);
  function normalize(vec) {
    const norm = Math.sqrt(vec.reduce((acc, v) => acc + v * v, 0));
    return vec.map((v) => v / norm);
  }
  const toHalf = supportsFloat16Array ? toHalfNative : toHalfJS;
  const fromHalf = supportsFloat16Array ? fromHalfNative : fromHalfJS;
  function toHalfNative(f) {
    f16buffer[0] = f;
    return u16buffer[0];
  }
  function toHalfJS(f) {
    f32buffer[0] = f;
    const bits2 = u32buffer[0];
    const sign = bits2 >> 31 & 1;
    const exp = bits2 >> 23 & 255;
    const frac = bits2 & 8388607;
    const halfSign = sign << 15;
    if (exp === 255) {
      if (frac !== 0) {
        return halfSign | 32767;
      }
      return halfSign | 31744;
    }
    const newExp = exp - 127 + 15;
    if (newExp >= 31) {
      return halfSign | 31744;
    }
    if (newExp <= 0) {
      if (newExp < -10) {
        return halfSign;
      }
      const subFrac = (frac | 8388608) >> 1 - newExp + 13;
      return halfSign | subFrac;
    }
    const halfFrac = frac >> 13;
    return halfSign | newExp << 10 | halfFrac;
  }
  function fromHalfNative(u) {
    u16buffer[0] = u;
    return f16buffer[0];
  }
  function fromHalfJS(h) {
    const sign = h >> 15 & 1;
    const exp = h >> 10 & 31;
    const frac = h & 1023;
    let f32bits;
    if (exp === 0) {
      if (frac === 0) {
        f32bits = sign << 31;
      } else {
        let mant = frac;
        let e = -14;
        while ((mant & 1024) === 0) {
          mant <<= 1;
          e--;
        }
        mant &= 1023;
        const newExp = e + 127;
        const newFrac = mant << 13;
        f32bits = sign << 31 | newExp << 23 | newFrac;
      }
    } else if (exp === 31) {
      if (frac === 0) {
        f32bits = sign << 31 | 2139095040;
      } else {
        f32bits = sign << 31 | 2143289344;
      }
    } else {
      const newExp = exp - 15 + 127;
      const newFrac = frac << 13;
      f32bits = sign << 31 | newExp << 23 | newFrac;
    }
    u32buffer[0] = f32bits;
    return f32buffer[0];
  }
  function floatToUint8(v) {
    return Math.max(0, Math.min(255, Math.round(v * 255)));
  }
  function getArrayBuffers(ctx) {
    const buffers = [];
    const seen = /* @__PURE__ */ new Set();
    function traverse(obj) {
      if (obj && typeof obj === "object" && !seen.has(obj)) {
        seen.add(obj);
        if (obj instanceof ArrayBuffer) {
          buffers.push(obj);
        } else if (ArrayBuffer.isView(obj)) {
          buffers.push(obj.buffer);
        } else if (Array.isArray(obj)) {
          obj.forEach(traverse);
        } else {
          Object.values(obj).forEach(traverse);
        }
      }
    }
    traverse(ctx);
    return buffers;
  }
  function setPackedSplat(packedSplats, index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(opacity);
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | uQuatZ << 24;
  }
  function setPackedSplatCenter(packedSplats, index, x2, y, z) {
    const uCenterX = toHalf(x2);
    const uCenterY = toHalf(y);
    const uCenterZ = toHalf(z);
    const i4 = index * 4;
    packedSplats[i4 + 1] = uCenterX | uCenterY << 16;
    packedSplats[i4 + 2] = uCenterZ | packedSplats[i4 + 2] & 4294901760;
  }
  function setPackedSplatScales(packedSplats, index, scaleX, scaleY, scaleZ, encoding) {
    const lnScaleMin = (encoding == null ? void 0 : encoding.lnScaleMin) ?? LN_SCALE_MIN;
    const lnScaleMax = (encoding == null ? void 0 : encoding.lnScaleMax) ?? LN_SCALE_MAX;
    const lnScaleScale = 254 / (lnScaleMax - lnScaleMin);
    const uScaleX = scaleX < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleX) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleY = scaleY < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleY) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const uScaleZ = scaleZ < SCALE_ZERO ? 0 : Math.min(
      255,
      Math.max(
        1,
        Math.round((Math.log(scaleZ) - lnScaleMin) * lnScaleScale) + 1
      )
    );
    const i4 = index * 4;
    packedSplats[i4 + 3] = uScaleX | uScaleY << 8 | uScaleZ << 16 | packedSplats[i4 + 3] & 4278190080;
  }
  const tempQuaternion = new Quaternion();
  function setPackedSplatQuat(packedSplats, index, quatX, quatY, quatZ, quatW) {
    const uQuat = encodeQuatOctXy88R8(
      tempQuaternion.set(quatX, quatY, quatZ, quatW)
    );
    const uQuatX = uQuat & 255;
    const uQuatY = uQuat >>> 8 & 255;
    const uQuatZ = uQuat >>> 16 & 255;
    const i4 = index * 4;
    packedSplats[i4 + 2] = packedSplats[i4 + 2] & 65535 | uQuatX << 16 | uQuatY << 24;
    packedSplats[i4 + 3] = packedSplats[i4 + 3] & 16777215 | uQuatZ << 24;
  }
  function setPackedSplatRgba(packedSplats, index, r, g, b, a, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const uA = floatToUint8(a);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | uA << 24;
  }
  function setPackedSplatRgb(packedSplats, index, r, g, b, encoding) {
    const rgbMin = (encoding == null ? void 0 : encoding.rgbMin) ?? 0;
    const rgbMax = (encoding == null ? void 0 : encoding.rgbMax) ?? 1;
    const rgbRange = rgbMax - rgbMin;
    const uR = floatToUint8((r - rgbMin) / rgbRange);
    const uG = floatToUint8((g - rgbMin) / rgbRange);
    const uB = floatToUint8((b - rgbMin) / rgbRange);
    const i4 = index * 4;
    packedSplats[i4] = uR | uG << 8 | uB << 16 | packedSplats[i4] & 4278190080;
  }
  function setPackedSplatOpacity(packedSplats, index, opacity) {
    const uA = floatToUint8(opacity);
    const i4 = index * 4;
    packedSplats[i4] = packedSplats[i4] & 16777215 | uA << 24;
  }
  new Vector3();
  new Vector3();
  new Color();
  function getTextureSize(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    const maxSplats = width * height * depth;
    return { width, height, depth, maxSplats };
  }
  function computeMaxSplats(numSplats) {
    const width = SPLAT_TEX_WIDTH;
    const height = Math.max(
      SPLAT_TEX_MIN_HEIGHT,
      Math.min(SPLAT_TEX_HEIGHT, Math.ceil(numSplats / width))
    );
    const depth = Math.ceil(numSplats / (width * height));
    return width * height * depth;
  }
  unindent(\`
  precision highp float;

  in vec3 position;

  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
\`);
  const tempNormalizedQuaternion = new Quaternion();
  const tempAxis = new Vector3();
  function encodeQuatOctXy88R8(q) {
    const qnorm = tempNormalizedQuaternion.copy(q).normalize();
    if (qnorm.w < 0) {
      qnorm.set(-qnorm.x, -qnorm.y, -qnorm.z, -qnorm.w);
    }
    const theta = 2 * Math.acos(qnorm.w);
    const xyz_norm = Math.sqrt(
      qnorm.x * qnorm.x + qnorm.y * qnorm.y + qnorm.z * qnorm.z
    );
    const axis = xyz_norm < 1e-6 ? tempAxis.set(1, 0, 0) : tempAxis.set(qnorm.x, qnorm.y, qnorm.z).divideScalar(xyz_norm);
    const sum = Math.abs(axis.x) + Math.abs(axis.y) + Math.abs(axis.z);
    let p_x = axis.x / sum;
    let p_y = axis.y / sum;
    if (axis.z < 0) {
      const tmp = p_x;
      p_x = (1 - Math.abs(p_y)) * (p_x >= 0 ? 1 : -1);
      p_y = (1 - Math.abs(tmp)) * (p_y >= 0 ? 1 : -1);
    }
    const u_f = p_x * 0.5 + 0.5;
    const v_f = p_y * 0.5 + 0.5;
    const quantU = Math.round(u_f * 255);
    const quantV = Math.round(v_f * 255);
    const angleInt = Math.round(theta * (255 / Math.PI));
    return angleInt << 16 | quantV << 8 | quantU;
  }
  function packSint8Bytes(b0, b1, b22, b3) {
    const clampedB0 = Math.max(-127, Math.min(127, b0 * 127));
    const clampedB1 = Math.max(-127, Math.min(127, b1 * 127));
    const clampedB2 = Math.max(-127, Math.min(127, b22 * 127));
    const clampedB3 = Math.max(-127, Math.min(127, b3 * 127));
    return clampedB0 & 255 | (clampedB1 & 255) << 8 | (clampedB2 & 255) << 16 | (clampedB3 & 255) << 24;
  }
  function encodeSh1Rgb(sh1Array, index, sh1Rgb, encoding) {
    const sh1Min = (encoding == null ? void 0 : encoding.sh1Min) ?? -1;
    const sh1Max = (encoding == null ? void 0 : encoding.sh1Max) ?? 1;
    const sh1Mid = 0.5 * (sh1Min + sh1Max);
    const sh1Scale = 126 / (sh1Max - sh1Min);
    const base = index * 2;
    for (let i2 = 0; i2 < 9; ++i2) {
      const s = (sh1Rgb[i2] - sh1Mid) * sh1Scale;
      const value = Math.round(Math.max(-63, Math.min(63, s))) & 127;
      const bitStart = i2 * 7;
      const bitEnd = bitStart + 7;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh1Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh1Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function encodeSh2Rgb(sh2Array, index, sh2Rgb, encoding) {
    const sh2Min = (encoding == null ? void 0 : encoding.sh2Min) ?? -1;
    const sh2Max = (encoding == null ? void 0 : encoding.sh2Max) ?? 1;
    const sh2Mid = 0.5 * (sh2Min + sh2Max);
    const sh2Scale = 2 / (sh2Max - sh2Min);
    sh2Array[index * 4 + 0] = packSint8Bytes(
      (sh2Rgb[0] - sh2Mid) * sh2Scale,
      (sh2Rgb[1] - sh2Mid) * sh2Scale,
      (sh2Rgb[2] - sh2Mid) * sh2Scale,
      (sh2Rgb[3] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 1] = packSint8Bytes(
      (sh2Rgb[4] - sh2Mid) * sh2Scale,
      (sh2Rgb[5] - sh2Mid) * sh2Scale,
      (sh2Rgb[6] - sh2Mid) * sh2Scale,
      (sh2Rgb[7] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 2] = packSint8Bytes(
      (sh2Rgb[8] - sh2Mid) * sh2Scale,
      (sh2Rgb[9] - sh2Mid) * sh2Scale,
      (sh2Rgb[10] - sh2Mid) * sh2Scale,
      (sh2Rgb[11] - sh2Mid) * sh2Scale
    );
    sh2Array[index * 4 + 3] = packSint8Bytes(
      (sh2Rgb[12] - sh2Mid) * sh2Scale,
      (sh2Rgb[13] - sh2Mid) * sh2Scale,
      (sh2Rgb[14] - sh2Mid) * sh2Scale,
      0
    );
  }
  function encodeSh3Rgb(sh3Array, index, sh3Rgb, encoding) {
    const sh3Min = (encoding == null ? void 0 : encoding.sh3Min) ?? -1;
    const sh3Max = (encoding == null ? void 0 : encoding.sh3Max) ?? 1;
    const sh3Mid = 0.5 * (sh3Min + sh3Max);
    const sh3Scale = 62 / (sh3Max - sh3Min);
    const base = index * 4;
    for (let i2 = 0; i2 < 21; ++i2) {
      const s = (sh3Rgb[i2] - sh3Mid) * sh3Scale;
      const value = Math.round(Math.max(-31, Math.min(31, s))) & 63;
      const bitStart = i2 * 6;
      const bitEnd = bitStart + 6;
      const wordStart = Math.floor(bitStart / 32);
      const bitOffset = bitStart - wordStart * 32;
      const firstWord = value << bitOffset & 4294967295;
      sh3Array[base + wordStart] |= firstWord;
      if (bitEnd > wordStart * 32 + 32) {
        const secondWord = value >>> 32 - bitOffset & 4294967295;
        sh3Array[base + wordStart + 1] |= secondWord;
      }
    }
  }
  function decompressPartialGzip(fileBytes, numBytes) {
    const chunks = [];
    let totalBytes = 0;
    let result = null;
    const gunzip = new Gunzip((data, final) => {
      chunks.push(data);
      totalBytes += data.length;
      if (final || totalBytes >= numBytes) {
        const allBytes = new Uint8Array(totalBytes);
        let offset2 = 0;
        for (const chunk of chunks) {
          allBytes.set(chunk, offset2);
          offset2 += chunk.length;
        }
        result = allBytes.slice(0, numBytes);
      }
    });
    const CHUNK_SIZE = 1024;
    let offset = 0;
    while (result == null && offset < fileBytes.length) {
      const chunk = fileBytes.slice(offset, offset + CHUNK_SIZE);
      gunzip.push(chunk, false);
      offset += CHUNK_SIZE;
    }
    if (result == null) {
      gunzip.push(new Uint8Array(), true);
      if (result == null) {
        throw new Error("Failed to decompress partial gzip");
      }
    }
    return result;
  }
  class GunzipReader {
    constructor({
      fileBytes,
      chunkBytes = 64 * 1024
    }) {
      this.fileBytes = fileBytes;
      this.chunkBytes = chunkBytes;
      this.chunks = [];
      this.totalBytes = 0;
      const ds = new DecompressionStream("gzip");
      const decompressionStream = new Blob([fileBytes]).stream().pipeThrough(ds);
      this.reader = decompressionStream.getReader();
    }
    async read(numBytes) {
      while (this.totalBytes < numBytes) {
        const { value: chunk, done: readerDone } = await this.reader.read();
        if (readerDone) {
          break;
        }
        this.chunks.push(chunk);
        this.totalBytes += chunk.length;
      }
      if (this.totalBytes < numBytes) {
        throw new Error(
          \`Unexpected EOF: needed \${numBytes}, got \${this.totalBytes}\`
        );
      }
      const allBytes = new Uint8Array(this.totalBytes);
      let outOffset = 0;
      for (const chunk of this.chunks) {
        allBytes.set(chunk, outOffset);
        outOffset += chunk.length;
      }
      const result = allBytes.subarray(0, numBytes);
      this.chunks = [allBytes.subarray(numBytes)];
      this.totalBytes -= numBytes;
      return result;
    }
  }
  function decodeAntiSplat(fileBytes, initNumSplats, splatCallback) {
    const numSplats = Math.floor(fileBytes.length / 32);
    if (numSplats * 32 !== fileBytes.length) {
      throw new Error("Invalid .splat file size");
    }
    initNumSplats(numSplats);
    const f32 = new Float32Array(fileBytes.buffer);
    for (let i2 = 0; i2 < numSplats; ++i2) {
      const i322 = i2 * 32;
      const i8 = i2 * 8;
      const x2 = f32[i8 + 0];
      const y = f32[i8 + 1];
      const z = f32[i8 + 2];
      const scaleX = f32[i8 + 3];
      const scaleY = f32[i8 + 4];
      const scaleZ = f32[i8 + 5];
      const r = fileBytes[i322 + 24] / 255;
      const g = fileBytes[i322 + 25] / 255;
      const b = fileBytes[i322 + 26] / 255;
      const opacity = fileBytes[i322 + 27] / 255;
      const quatW = (fileBytes[i322 + 28] - 128) / 128;
      const quatX = (fileBytes[i322 + 29] - 128) / 128;
      const quatY = (fileBytes[i322 + 30] - 128) / 128;
      const quatZ = (fileBytes[i322 + 31] - 128) / 128;
      splatCallback(
        i2,
        x2,
        y,
        z,
        scaleX,
        scaleY,
        scaleZ,
        quatX,
        quatY,
        quatZ,
        quatW,
        opacity,
        r,
        g,
        b
      );
    }
  }
  function unpackAntiSplat(fileBytes, splatEncoding) {
    let numSplats = 0;
    let maxSplats = 0;
    let packedArray = new Uint32Array(0);
    decodeAntiSplat(
      fileBytes,
      (cbNumSplats) => {
        numSplats = cbNumSplats;
        maxSplats = computeMaxSplats(numSplats);
        packedArray = new Uint32Array(maxSplats * 4);
      },
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      }
    );
    return { packedArray, numSplats };
  }
  const KSPLAT_COMPRESSION = {
    0: {
      bytesPerCenter: 12,
      bytesPerScale: 12,
      bytesPerRotation: 16,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 4,
      scaleOffsetBytes: 12,
      rotationOffsetBytes: 24,
      colorOffsetBytes: 40,
      sphericalHarmonicsOffsetBytes: 44,
      scaleRange: 1
    },
    1: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 2,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    },
    2: {
      bytesPerCenter: 6,
      bytesPerScale: 6,
      bytesPerRotation: 8,
      bytesPerColor: 4,
      bytesPerSphericalHarmonicsComponent: 1,
      scaleOffsetBytes: 6,
      rotationOffsetBytes: 12,
      colorOffsetBytes: 20,
      sphericalHarmonicsOffsetBytes: 24,
      scaleRange: 32767
    }
  };
  const KSPLAT_SH_DEGREE_TO_COMPONENTS = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  function decodeKsplat(fileBytes, initNumSplats, splatCallback, shCallback) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        splatCallback(
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b
        );
        if (sphericalHarmonicsDegree >= 1 && sh1) {
          for (const [i22, key] of sh1Index.entries()) {
            sh1[i22] = getSh(splatOffset, key);
          }
          if (sh2) {
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
          }
          if (sh3) {
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
      sectionBase += storageSizeBytes;
    }
  }
  function unpackKsplat(fileBytes, splatEncoding) {
    var _a2;
    const HEADER_BYTES = 4096;
    const SECTION_BYTES = 1024;
    let headerOffset = 0;
    const header = new DataView(fileBytes.buffer, headerOffset, HEADER_BYTES);
    headerOffset += HEADER_BYTES;
    const versionMajor = header.getUint8(0);
    const versionMinor = header.getUint8(1);
    if (versionMajor !== 0 || versionMinor < 1) {
      throw new Error(
        \`Unsupported .ksplat version: \${versionMajor}.\${versionMinor}\`
      );
    }
    const maxSectionCount = header.getUint32(4, true);
    const splatCount = header.getUint32(16, true);
    const compressionLevel = header.getUint16(20, true);
    if (compressionLevel < 0 || compressionLevel > 2) {
      throw new Error(\`Invalid .ksplat compression level: \${compressionLevel}\`);
    }
    const minSphericalHarmonicsCoeff = header.getFloat32(36, true) || -1.5;
    const maxSphericalHarmonicsCoeff = header.getFloat32(40, true) || 1.5;
    const numSplats = splatCount;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    let sectionBase = HEADER_BYTES + maxSectionCount * SECTION_BYTES;
    for (let section = 0; section < maxSectionCount; ++section) {
      let getSh = function(splatOffset, component) {
        if (compressionLevel === 0) {
          return data.getFloat32(
            splatOffset + sphericalHarmonicsOffsetBytes + component * 4,
            true
          );
        }
        if (compressionLevel === 1) {
          return fromHalf(
            data.getUint16(
              splatOffset + sphericalHarmonicsOffsetBytes + component * 2,
              true
            )
          );
        }
        const t = data.getUint8(splatOffset + sphericalHarmonicsOffsetBytes + component) / 255;
        return minSphericalHarmonicsCoeff + t * (maxSphericalHarmonicsCoeff - minSphericalHarmonicsCoeff);
      };
      const section2 = new DataView(fileBytes.buffer, headerOffset, SECTION_BYTES);
      headerOffset += SECTION_BYTES;
      const sectionSplatCount = section2.getUint32(0, true);
      const sectionMaxSplatCount = section2.getUint32(4, true);
      const bucketSize = section2.getUint32(8, true);
      const bucketCount = section2.getUint32(12, true);
      const bucketBlockSize = section2.getFloat32(16, true);
      const bucketStorageSizeBytes = section2.getUint16(20, true);
      const compressionScaleRange = (section2.getUint32(24, true) || ((_a2 = KSPLAT_COMPRESSION[compressionLevel]) == null ? void 0 : _a2.scaleRange)) ?? 1;
      const fullBucketCount = section2.getUint32(32, true);
      const fullBucketSplats = fullBucketCount * bucketSize;
      const partiallyFilledBucketCount = section2.getUint32(36, true);
      const bucketsMetaDataSizeBytes = partiallyFilledBucketCount * 4;
      const bucketsStorageSizeBytes = bucketStorageSizeBytes * bucketCount + bucketsMetaDataSizeBytes;
      const sphericalHarmonicsDegree = section2.getUint16(40, true);
      const shComponents = KSPLAT_SH_DEGREE_TO_COMPONENTS[sphericalHarmonicsDegree];
      const {
        bytesPerCenter,
        bytesPerScale,
        bytesPerRotation,
        bytesPerColor,
        bytesPerSphericalHarmonicsComponent,
        scaleOffsetBytes,
        rotationOffsetBytes,
        colorOffsetBytes,
        sphericalHarmonicsOffsetBytes
      } = KSPLAT_COMPRESSION[compressionLevel];
      const bytesPerSplat = bytesPerCenter + bytesPerScale + bytesPerRotation + bytesPerColor + shComponents * bytesPerSphericalHarmonicsComponent;
      const splatDataStorageSizeBytes = bytesPerSplat * sectionMaxSplatCount;
      const storageSizeBytes = splatDataStorageSizeBytes + bucketsStorageSizeBytes;
      const sh1Index = [0, 3, 6, 1, 4, 7, 2, 5, 8];
      const sh2Index = [
        9,
        14,
        19,
        10,
        15,
        20,
        11,
        16,
        21,
        12,
        17,
        22,
        13,
        18,
        23
      ];
      const sh3Index = [
        24,
        31,
        38,
        25,
        32,
        39,
        26,
        33,
        40,
        27,
        34,
        41,
        28,
        35,
        42,
        29,
        36,
        43,
        30,
        37,
        44
      ];
      const sh1 = sphericalHarmonicsDegree >= 1 ? new Float32Array(3 * 3) : void 0;
      const sh2 = sphericalHarmonicsDegree >= 2 ? new Float32Array(5 * 3) : void 0;
      const sh3 = sphericalHarmonicsDegree >= 3 ? new Float32Array(7 * 3) : void 0;
      const compressionScaleFactor = bucketBlockSize / 2 / compressionScaleRange;
      const bucketsBase = sectionBase + bucketsMetaDataSizeBytes;
      const dataBase = sectionBase + bucketsStorageSizeBytes;
      const data = new DataView(
        fileBytes.buffer,
        dataBase,
        splatDataStorageSizeBytes
      );
      const bucketArray = new Float32Array(
        fileBytes.buffer,
        bucketsBase,
        bucketCount * 3
      );
      const partiallyFilledBucketLengths = new Uint32Array(
        fileBytes.buffer,
        sectionBase,
        partiallyFilledBucketCount
      );
      let partialBucketIndex = fullBucketCount;
      let partialBucketBase = fullBucketSplats;
      for (let i2 = 0; i2 < sectionSplatCount; ++i2) {
        const splatOffset = i2 * bytesPerSplat;
        let bucketIndex;
        if (i2 < fullBucketSplats) {
          bucketIndex = Math.floor(i2 / bucketSize);
        } else {
          const bucketLength = partiallyFilledBucketLengths[partialBucketIndex - fullBucketCount];
          if (i2 >= partialBucketBase + bucketLength) {
            partialBucketIndex += 1;
            partialBucketBase += bucketLength;
          }
          bucketIndex = partialBucketIndex;
        }
        const x2 = compressionLevel === 0 ? data.getFloat32(splatOffset + 0, true) : (data.getUint16(splatOffset + 0, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 0];
        const y = compressionLevel === 0 ? data.getFloat32(splatOffset + 4, true) : (data.getUint16(splatOffset + 2, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 1];
        const z = compressionLevel === 0 ? data.getFloat32(splatOffset + 8, true) : (data.getUint16(splatOffset + 4, true) - compressionScaleRange) * compressionScaleFactor + bucketArray[3 * bucketIndex + 2];
        const scaleX = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 0, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 0, true));
        const scaleY = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 4, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 2, true));
        const scaleZ = compressionLevel === 0 ? data.getFloat32(splatOffset + scaleOffsetBytes + 8, true) : fromHalf(data.getUint16(splatOffset + scaleOffsetBytes + 4, true));
        const quatW = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 0, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 0, true)
        );
        const quatX = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 4, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 2, true)
        );
        const quatY = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 8, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 4, true)
        );
        const quatZ = compressionLevel === 0 ? data.getFloat32(splatOffset + rotationOffsetBytes + 12, true) : fromHalf(
          data.getUint16(splatOffset + rotationOffsetBytes + 6, true)
        );
        const r = data.getUint8(splatOffset + colorOffsetBytes + 0) / 255;
        const g = data.getUint8(splatOffset + colorOffsetBytes + 1) / 255;
        const b = data.getUint8(splatOffset + colorOffsetBytes + 2) / 255;
        const opacity = data.getUint8(splatOffset + colorOffsetBytes + 3) / 255;
        setPackedSplat(
          packedArray,
          i2,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
        if (sphericalHarmonicsDegree >= 1) {
          if (sh1) {
            if (!extra.sh1) {
              extra.sh1 = new Uint32Array(numSplats * 2);
            }
            for (const [i22, key] of sh1Index.entries()) {
              sh1[i22] = getSh(splatOffset, key);
            }
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          }
          if (sh2) {
            if (!extra.sh2) {
              extra.sh2 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh2Index.entries()) {
              sh2[i22] = getSh(splatOffset, key);
            }
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          }
          if (sh3) {
            if (!extra.sh3) {
              extra.sh3 = new Uint32Array(numSplats * 4);
            }
            for (const [i22, key] of sh3Index.entries()) {
              sh3[i22] = getSh(splatOffset, key);
            }
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
          }
        }
      }
      sectionBase += storageSizeBytes;
    }
    return { packedArray, numSplats, extra };
  }
  const PLY_PROPERTY_TYPES = [
    "char",
    "uchar",
    "short",
    "ushort",
    "int",
    "uint",
    "float",
    "double"
  ];
  const _PlyReader = class _PlyReader {
    // Create a PlyReader from a Uint8Array/ArrayBuffer, no parsing done yet
    constructor({ fileBytes }) {
      this.header = "";
      this.littleEndian = true;
      this.elements = {};
      this.comments = [];
      this.data = null;
      this.numSplats = 0;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
    }
    // Identify and parse the PLY text header (assumed to be <64KB in size).
    // this.elements will contain all the elements in the file, typically
    // "vertex" contains the Gsplat data.
    async parseHeader() {
      const bufferStream = new ReadableStream({
        start: (controller) => {
          controller.enqueue(this.fileBytes.slice(0, 65536));
          controller.close();
        }
      });
      const decoder = bufferStream.pipeThrough(new TextDecoderStream()).getReader();
      this.header = "";
      const headerTerminator = "end_header\\n";
      while (true) {
        const { value, done } = await decoder.read();
        if (done) {
          throw new Error("Failed to read header");
        }
        this.header += value;
        const endHeader = this.header.indexOf(headerTerminator);
        if (endHeader >= 0) {
          this.header = this.header.slice(0, endHeader + headerTerminator.length);
          break;
        }
      }
      const headerLen = new TextEncoder().encode(this.header).length;
      this.data = new DataView(this.fileBytes.buffer, headerLen);
      this.elements = {};
      let curElement = null;
      this.comments = [];
      this.header.trim().split("\\n").forEach((line, lineIndex) => {
        const trimmedLine = line.trim();
        if (lineIndex === 0) {
          if (trimmedLine !== "ply") {
            throw new Error("Invalid PLY header");
          }
          return;
        }
        if (trimmedLine.length === 0) {
          return;
        }
        const fields = trimmedLine.split(" ");
        switch (fields[0]) {
          case "format":
            if (fields[1] === "binary_little_endian") {
              this.littleEndian = true;
            } else if (fields[1] === "binary_big_endian") {
              this.littleEndian = false;
            } else {
              throw new Error(\`Unsupported PLY format: \${fields[1]}\`);
            }
            if (fields[2] !== "1.0") {
              throw new Error(\`Unsupported PLY version: \${fields[2]}\`);
            }
            break;
          case "end_header":
            break;
          case "comment":
            this.comments.push(trimmedLine.slice("comment ".length));
            break;
          case "element": {
            const name = fields[1];
            curElement = {
              name,
              count: Number.parseInt(fields[2]),
              properties: {}
            };
            this.elements[name] = curElement;
            break;
          }
          case "property":
            if (curElement == null) {
              throw new Error("Property must be inside an element");
            }
            if (fields[1] === "list") {
              curElement.properties[fields[4]] = {
                isList: true,
                type: fields[3],
                countType: fields[2]
              };
            } else {
              curElement.properties[fields[2]] = {
                isList: false,
                type: fields[1]
              };
            }
            break;
        }
      });
      if (this.elements.vertex) {
        this.numSplats = this.elements.vertex.count;
      }
    }
    parseData(elementCallback) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No data to parse");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const item = createEmptyItem(properties);
        const parseFn = createParseFn(properties, this.littleEndian);
        const callback = elementCallback(element) ?? (() => {
        });
        for (let index = 0; index < count; index++) {
          offset = parseFn(data, offset, item);
          callback(index, item);
        }
      }
    }
    // Parse all the Gsplat data in the PLY file in go, invoking the given
    // callbacks for each Gsplat.
    parseSplats(splatCallback, shCallback) {
      if (this.elements.vertex == null) {
        throw new Error("No vertex element found");
      }
      let isSuperSplat = false;
      const ssChunks = [];
      let numSh = 0;
      let sh1Props = [];
      let sh2Props = [];
      let sh3Props = [];
      let sh1 = void 0;
      let sh2 = void 0;
      let sh3 = void 0;
      function prepareSh() {
        const num_f_rest = NUM_SH_TO_NUM_F_REST[numSh];
        sh1Props = new Array(3).fill(null).flatMap((_, k) => [0, 1, 2].map((_2, d) => k + d * num_f_rest / 3));
        sh2Props = new Array(5).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 3 + k + d * num_f_rest / 3)
        );
        sh3Props = new Array(7).fill(null).flatMap(
          (_, k) => [0, 1, 2].map((_2, d) => 8 + k + d * num_f_rest / 3)
        );
        sh1 = numSh >= 1 ? new Float32Array(3 * 3) : void 0;
        sh2 = numSh >= 2 ? new Float32Array(5 * 3) : void 0;
        sh3 = numSh >= 3 ? new Float32Array(7 * 3) : void 0;
      }
      function ssShCallback(index, item) {
        if (!sh1) {
          throw new Error("Missing sh1");
        }
        const sh = item.f_rest;
        for (let i2 = 0; i2 < sh1Props.length; i2++) {
          sh1[i2] = sh[sh1Props[i2]] * 8 / 255 - 4;
        }
        if (sh2) {
          for (let i2 = 0; i2 < sh2Props.length; i2++) {
            sh2[i2] = sh[sh2Props[i2]] * 8 / 255 - 4;
          }
        }
        if (sh3) {
          for (let i2 = 0; i2 < sh3Props.length; i2++) {
            sh3[i2] = sh[sh3Props[i2]] * 8 / 255 - 4;
          }
        }
        shCallback == null ? void 0 : shCallback(index, sh1, sh2, sh3);
      }
      function initSuperSplat(element) {
        const {
          min_x,
          min_y,
          min_z,
          max_x,
          max_y,
          max_z,
          min_scale_x,
          min_scale_y,
          min_scale_z,
          max_scale_x,
          max_scale_y,
          max_scale_z
        } = element.properties;
        if (!min_x || !min_y || !min_z || !max_x || !max_y || !max_z || !min_scale_x || !min_scale_y || !min_scale_z || !max_scale_x || !max_scale_y || !max_scale_z) {
          throw new Error("Missing PLY chunk properties");
        }
        isSuperSplat = true;
        return (index, item) => {
          const {
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = item;
          ssChunks.push({
            min_x: min_x2,
            min_y: min_y2,
            min_z: min_z2,
            max_x: max_x2,
            max_y: max_y2,
            max_z: max_z2,
            min_scale_x: min_scale_x2,
            min_scale_y: min_scale_y2,
            min_scale_z: min_scale_z2,
            max_scale_x: max_scale_x2,
            max_scale_y: max_scale_y2,
            max_scale_z: max_scale_z2,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          });
        };
      }
      function decodeSuperSplat(element) {
        if (shCallback && element.name === "sh") {
          numSh = getNumSh(element.properties);
          prepareSh();
          return ssShCallback;
        }
        if (element.name !== "vertex") {
          return null;
        }
        const { packed_position, packed_rotation, packed_scale, packed_color } = element.properties;
        if (!packed_position || !packed_rotation || !packed_scale || !packed_color) {
          throw new Error(
            "Missing PLY properties: packed_position, packed_rotation, packed_scale, packed_color"
          );
        }
        const SQRT2 = Math.sqrt(2);
        return (index, item) => {
          const chunk = ssChunks[index >>> 8];
          if (chunk == null) {
            throw new Error("Missing PLY chunk");
          }
          const {
            min_x,
            min_y,
            min_z,
            max_x,
            max_y,
            max_z,
            min_scale_x,
            min_scale_y,
            min_scale_z,
            max_scale_x,
            max_scale_y,
            max_scale_z,
            min_r,
            min_g,
            min_b,
            max_r,
            max_g,
            max_b
          } = chunk;
          const { packed_position: packed_position2, packed_rotation: packed_rotation2, packed_scale: packed_scale2, packed_color: packed_color2 } = item;
          const x2 = (packed_position2 >>> 21 & 2047) / 2047 * (max_x - min_x) + min_x;
          const y = (packed_position2 >>> 11 & 1023) / 1023 * (max_y - min_y) + min_y;
          const z = (packed_position2 & 2047) / 2047 * (max_z - min_z) + min_z;
          const r0 = ((packed_rotation2 >>> 20 & 1023) / 1023 - 0.5) * SQRT2;
          const r1 = ((packed_rotation2 >>> 10 & 1023) / 1023 - 0.5) * SQRT2;
          const r2 = ((packed_rotation2 & 1023) / 1023 - 0.5) * SQRT2;
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = packed_rotation2 >>> 30;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          const scaleX = Math.exp(
            (packed_scale2 >>> 21 & 2047) / 2047 * (max_scale_x - min_scale_x) + min_scale_x
          );
          const scaleY = Math.exp(
            (packed_scale2 >>> 11 & 1023) / 1023 * (max_scale_y - min_scale_y) + min_scale_y
          );
          const scaleZ = Math.exp(
            (packed_scale2 & 2047) / 2047 * (max_scale_z - min_scale_z) + min_scale_z
          );
          const r = (packed_color2 >>> 24 & 255) / 255 * ((max_r ?? 1) - (min_r ?? 0)) + (min_r ?? 0);
          const g = (packed_color2 >>> 16 & 255) / 255 * ((max_g ?? 1) - (min_g ?? 0)) + (min_g ?? 0);
          const b = (packed_color2 >>> 8 & 255) / 255 * ((max_b ?? 1) - (min_b ?? 0)) + (min_b ?? 0);
          const opacity = (packed_color2 & 255) / 255;
          splatCallback(
            index,
            x2,
            y,
            z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            opacity,
            r,
            g,
            b
          );
        };
      }
      const elementCallback = (element) => {
        if (element.name === "chunk") {
          return initSuperSplat(element);
        }
        if (isSuperSplat) {
          return decodeSuperSplat(element);
        }
        if (element.name !== "vertex") {
          return null;
        }
        const {
          x: x2,
          y,
          z,
          scale_0,
          scale_1,
          scale_2,
          rot_0,
          rot_1,
          rot_2,
          rot_3,
          opacity,
          f_dc_0,
          f_dc_1,
          f_dc_2,
          red,
          green,
          blue,
          alpha
        } = element.properties;
        if (!x2 || !y || !z) {
          throw new Error("Missing PLY properties: x, y, z");
        }
        const hasScales = scale_0 && scale_1 && scale_2;
        const hasRots = rot_0 && rot_1 && rot_2 && rot_3;
        const alphaDiv = alpha != null ? FIELD_SCALE[alpha.type] : 1;
        const redDiv = red != null ? FIELD_SCALE[red.type] : 1;
        const greenDiv = green != null ? FIELD_SCALE[green.type] : 1;
        const blueDiv = blue != null ? FIELD_SCALE[blue.type] : 1;
        numSh = getNumSh(element.properties);
        prepareSh();
        return (index, item) => {
          const scaleX = hasScales ? Math.exp(item.scale_0) : _PlyReader.defaultPointScale;
          const scaleY = hasScales ? Math.exp(item.scale_1) : _PlyReader.defaultPointScale;
          const scaleZ = hasScales ? Math.exp(item.scale_2) : _PlyReader.defaultPointScale;
          const quatX = hasRots ? item.rot_1 : 0;
          const quatY = hasRots ? item.rot_2 : 0;
          const quatZ = hasRots ? item.rot_3 : 0;
          const quatW = hasRots ? item.rot_0 : 1;
          const op = opacity != null ? 1 / (1 + Math.exp(-item.opacity)) : alpha != null ? item.alpha / alphaDiv : 1;
          const r = f_dc_0 != null ? item.f_dc_0 * SH_C0$1 + 0.5 : red != null ? item.red / redDiv : 1;
          const g = f_dc_1 != null ? item.f_dc_1 * SH_C0$1 + 0.5 : green != null ? item.green / greenDiv : 1;
          const b = f_dc_2 != null ? item.f_dc_2 * SH_C0$1 + 0.5 : blue != null ? item.blue / blueDiv : 1;
          splatCallback(
            index,
            item.x,
            item.y,
            item.z,
            scaleX,
            scaleY,
            scaleZ,
            quatX,
            quatY,
            quatZ,
            quatW,
            op,
            r,
            g,
            b
          );
          if (shCallback && sh1) {
            const sh = item.f_rest;
            if (sh1) {
              for (let i2 = 0; i2 < sh1Props.length; i2++) {
                sh1[i2] = sh[sh1Props[i2]];
              }
            }
            if (sh2) {
              for (let i2 = 0; i2 < sh2Props.length; i2++) {
                sh2[i2] = sh[sh2Props[i2]];
              }
            }
            if (sh3) {
              for (let i2 = 0; i2 < sh3Props.length; i2++) {
                sh3[i2] = sh[sh3Props[i2]];
              }
            }
            shCallback(index, sh1, sh2, sh3);
          }
        };
      };
      this.parseData(elementCallback);
    }
    // Inject RGBA values into original PLY file, which can be used to modify
    // the color/opacity of the Gsplats and write out the modified PLY file.
    injectRgba(rgba) {
      let offset = 0;
      const data = this.data;
      if (data == null) {
        throw new Error("No parsed data");
      }
      if (rgba.length !== this.numSplats * 4) {
        throw new Error("Invalid RGBA array length");
      }
      for (const elementName in this.elements) {
        const element = this.elements[elementName];
        const { count, properties } = element;
        const parsers = [];
        let rgbaOffset = 0;
        const isVertex = elementName === "vertex";
        if (isVertex) {
          for (const name of ["opacity", "f_dc_0", "f_dc_1", "f_dc_2"]) {
            if (!properties[name] || properties[name].type !== "float") {
              throw new Error(\`Can't injectRgba due to property: \${name}\`);
            }
          }
        }
        for (const [propertyName, property] of Object.entries(properties)) {
          if (!property.isList) {
            if (isVertex) {
              if (propertyName === "f_dc_0" || propertyName === "f_dc_1" || propertyName === "f_dc_2") {
                const component = Number.parseInt(
                  propertyName.slice("f_dc_".length)
                );
                parsers.push(() => {
                  const value = (rgba[rgbaOffset + component] / 255 - 0.5) / SH_C0$1;
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              } else if (propertyName === "opacity") {
                parsers.push(() => {
                  const value = Math.max(
                    -100,
                    Math.min(
                      100,
                      -Math.log(1 / (rgba[rgbaOffset + 3] / 255) - 1)
                    )
                  );
                  SET_FIELD[property.type](
                    data,
                    offset,
                    this.littleEndian,
                    value
                  );
                });
              }
            }
            parsers.push(() => {
              offset += FIELD_BYTES[property.type];
            });
          } else {
            parsers.push(() => {
              const length = PARSE_FIELD[property.countType](
                data,
                offset,
                this.littleEndian
              );
              offset += FIELD_BYTES[property.countType];
              offset += length * FIELD_BYTES[property.type];
            });
          }
        }
        for (let index = 0; index < count; index++) {
          for (const parser of parsers) {
            parser();
          }
          if (isVertex) {
            rgbaOffset += 4;
          }
        }
      }
    }
  };
  _PlyReader.defaultPointScale = 1e-3;
  let PlyReader = _PlyReader;
  const SH_C0$1 = 0.28209479177387814;
  const PARSE_FIELD = {
    char: (data, offset, littleEndian) => {
      return data.getInt8(offset);
    },
    uchar: (data, offset, littleEndian) => {
      return data.getUint8(offset);
    },
    short: (data, offset, littleEndian) => {
      return data.getInt16(offset, littleEndian);
    },
    ushort: (data, offset, littleEndian) => {
      return data.getUint16(offset, littleEndian);
    },
    int: (data, offset, littleEndian) => {
      return data.getInt32(offset, littleEndian);
    },
    uint: (data, offset, littleEndian) => {
      return data.getUint32(offset, littleEndian);
    },
    float: (data, offset, littleEndian) => {
      return data.getFloat32(offset, littleEndian);
    },
    double: (data, offset, littleEndian) => {
      return data.getFloat64(offset, littleEndian);
    }
  };
  const SET_FIELD = {
    char: (data, offset, littleEndian, value) => {
      data.setInt8(offset, value);
    },
    uchar: (data, offset, littleEndian, value) => {
      data.setUint8(offset, value);
    },
    short: (data, offset, littleEndian, value) => {
      data.setInt16(offset, value, littleEndian);
    },
    ushort: (data, offset, littleEndian, value) => {
      data.setUint16(offset, value, littleEndian);
    },
    int: (data, offset, littleEndian, value) => {
      data.setInt32(offset, value, littleEndian);
    },
    uint: (data, offset, littleEndian, value) => {
      data.setUint32(offset, value, littleEndian);
    },
    float: (data, offset, littleEndian, value) => {
      data.setFloat32(offset, value, littleEndian);
    },
    double: (data, offset, littleEndian, value) => {
      data.setFloat64(offset, value, littleEndian);
    }
  };
  const FIELD_BYTES = {
    char: 1,
    uchar: 1,
    short: 2,
    ushort: 2,
    int: 4,
    uint: 4,
    float: 4,
    double: 8
  };
  const FIELD_SCALE = {
    char: 127,
    uchar: 255,
    short: 32767,
    ushort: 65535,
    int: 2147483647,
    uint: 4294967295,
    float: 1,
    double: 1
  };
  const NUM_F_REST_TO_NUM_SH = {
    0: 0,
    9: 1,
    24: 2,
    45: 3
  };
  const NUM_SH_TO_NUM_F_REST = {
    0: 0,
    1: 9,
    2: 24,
    3: 45
  };
  const F_REST_REGEX = /^f_rest_([0-9]{1,2})$/;
  function createEmptyItem(properties) {
    const item = {};
    for (const [propertyName, property] of Object.entries(properties)) {
      if (F_REST_REGEX.test(propertyName)) {
        item.f_rest = new Array(getNumSh(properties));
      } else {
        item[propertyName] = property.isList ? [] : 0;
      }
    }
    return item;
  }
  function createParseFn(properties, littleEndian) {
    if (safeToCompile(properties)) {
      return createCompiledParserFn(properties, littleEndian);
    }
    return createDynamicParserFn(properties, littleEndian);
  }
  const UNSAFE_EVAL_ALLOWED = (() => {
    try {
      new Function("return 42;");
    } catch (e) {
      return false;
    }
    return true;
  })();
  const PROPERTY_NAME_REGEX = /^[a-zA-Z0-9_]+$/;
  function safeToCompile(properties) {
    if (!UNSAFE_EVAL_ALLOWED) {
      return false;
    }
    for (const [propertyName, property] of Object.entries(properties)) {
      if (!PROPERTY_NAME_REGEX.test(propertyName)) {
        return false;
      }
      if (property.isList && !PLY_PROPERTY_TYPES.includes(property.countType)) {
        return false;
      }
      if (!PLY_PROPERTY_TYPES.includes(property.type)) {
        return false;
      }
    }
    return true;
  }
  function createCompiledParserFn(properties, littleEndian) {
    const parserSrc = ["let list;"];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parserSrc.push(
          /*js*/
          \`
        item.f_rest[\${fRestIndex}] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else if (!property.isList) {
        parserSrc.push(
          /*js*/
          \`
        item['\${propertyName}'] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.type]};
      \`
        );
      } else {
        parserSrc.push(
          /*js*/
          \`
        list = item['\${propertyName}'];
        list.length = PARSE_FIELD['\${property.countType}'](data, offset, \${littleEndian});
        offset += \${FIELD_BYTES[property.countType]};
        for (let i = 0; i < list.length; i++) {
          list[i] = PARSE_FIELD['\${property.type}'](data, offset, \${littleEndian});
          offset += \${FIELD_BYTES[property.type]};
        }
      \`
        );
      }
    }
    parserSrc.push("return offset;");
    const fn = new Function(
      "data",
      "offset",
      "item",
      "PARSE_FIELD",
      parserSrc.join("\\n")
    );
    return (data, offset, item) => fn(data, offset, item, PARSE_FIELD);
  }
  function createDynamicParserFn(properties, littleEndian) {
    const parsers = [];
    for (const [propertyName, property] of Object.entries(properties)) {
      const fRestMatch = propertyName.match(F_REST_REGEX);
      if (fRestMatch) {
        const fRestIndex = +fRestMatch[1];
        parsers.push(
          (data, offset, item) => {
            item.f_rest[fRestIndex] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else if (!property.isList) {
        parsers.push(
          (data, offset, item) => {
            item[propertyName] = PARSE_FIELD[property.type](
              data,
              offset,
              littleEndian
            );
            return offset + FIELD_BYTES[property.type];
          }
        );
      } else {
        parsers.push(
          (data, offset, item) => {
            const list = item[propertyName];
            list.length = PARSE_FIELD[property.countType](
              data,
              offset,
              littleEndian
            );
            let currentOffset = offset + FIELD_BYTES[property.countType];
            for (let i2 = 0; i2 < list.length; i2++) {
              list[i2] = PARSE_FIELD[property.type](
                data,
                currentOffset,
                littleEndian
              );
              currentOffset += FIELD_BYTES[property.type];
            }
            return currentOffset;
          }
        );
      }
    }
    return (data, offset, item) => {
      let currentOffset = offset;
      for (let parserIndex = 0; parserIndex < parsers.length; parserIndex++) {
        currentOffset = parsers[parserIndex](data, currentOffset, item);
      }
      return currentOffset;
    };
  }
  function getNumSh(properties) {
    let num_f_rest = 0;
    while (properties[\`f_rest_\${num_f_rest}\`]) {
      num_f_rest += 1;
    }
    const numSh = NUM_F_REST_TO_NUM_SH[num_f_rest];
    if (numSh == null) {
      throw new Error(\`Unsupported number of SH coefficients: \${num_f_rest}\`);
    }
    return numSh;
  }
  var SplatFileType = /* @__PURE__ */ ((SplatFileType2) => {
    SplatFileType2["PLY"] = "ply";
    SplatFileType2["SPZ"] = "spz";
    SplatFileType2["SPLAT"] = "splat";
    SplatFileType2["KSPLAT"] = "ksplat";
    SplatFileType2["PCSOGS"] = "pcsogs";
    SplatFileType2["PCSOGSZIP"] = "pcsogszip";
    return SplatFileType2;
  })(SplatFileType || {});
  function getSplatFileType(fileBytes) {
    const view = new DataView(fileBytes.buffer);
    if ((view.getUint32(0, true) & 16777215) === 7957616) {
      return "ply";
    }
    if ((view.getUint32(0, true) & 16777215) === 559903) {
      const header = decompressPartialGzip(fileBytes, 4);
      const gView = new DataView(header.buffer);
      if (gView.getUint32(0, true) === 1347635022) {
        return "spz";
      }
      return void 0;
    }
    if (view.getUint32(0, true) === 67324752) {
      if (tryPcSogsZip(fileBytes)) {
        return "pcsogszip";
      }
      return void 0;
    }
    return void 0;
  }
  function getFileExtension(pathOrUrl) {
    const noTrailing = pathOrUrl.split(/[?#]/, 1)[0];
    const lastSlash = Math.max(
      noTrailing.lastIndexOf("/"),
      noTrailing.lastIndexOf("\\\\")
    );
    const filename = noTrailing.slice(lastSlash + 1);
    const lastDot = filename.lastIndexOf(".");
    if (lastDot <= 0 || lastDot === filename.length - 1) {
      return "";
    }
    return filename.slice(lastDot + 1).toLowerCase();
  }
  function getSplatFileTypeFromPath(pathOrUrl) {
    const extension = getFileExtension(pathOrUrl);
    if (extension === "ply") {
      return "ply";
    }
    if (extension === "spz") {
      return "spz";
    }
    if (extension === "splat") {
      return "splat";
    }
    if (extension === "ksplat") {
      return "ksplat";
    }
    if (extension === "sog") {
      return "pcsogszip";
    }
    return void 0;
  }
  function tryPcSogs(input) {
    try {
      let text;
      if (typeof input === "string") {
        text = input;
      } else {
        const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
        if (fileBytes.length > 65536) {
          return void 0;
        }
        text = new TextDecoder().decode(fileBytes);
      }
      const json = JSON.parse(text);
      if (!json || typeof json !== "object" || Array.isArray(json)) {
        return void 0;
      }
      const isVersion2 = json.version === 2;
      for (const key of ["means", "scales", "quats", "sh0"]) {
        if (!json[key] || typeof json[key] !== "object" || Array.isArray(json[key])) {
          return void 0;
        }
        if (isVersion2) {
          if (!json[key].files) {
            return void 0;
          }
          if ((key === "scales" || key === "sh0") && !json[key].codebook) {
            return void 0;
          }
          if (key === "means" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        } else {
          if (!json[key].shape || !json[key].files) {
            return void 0;
          }
          if (key !== "quats" && (!json[key].mins || !json[key].maxs)) {
            return void 0;
          }
        }
      }
      return json;
    } catch {
      return void 0;
    }
  }
  function tryPcSogsZip(input) {
    try {
      const fileBytes = input instanceof ArrayBuffer ? new Uint8Array(input) : input;
      let metaFilename = null;
      const unzipped = unzipSync(fileBytes, {
        filter: ({ name }) => {
          const filename = name.split(/[\\\\/]/).pop();
          if (filename === "meta.json") {
            metaFilename = name;
            return true;
          }
          return false;
        }
      });
      if (!metaFilename) {
        return void 0;
      }
      const json = tryPcSogs(unzipped[metaFilename]);
      if (!json) {
        return void 0;
      }
      return { name: metaFilename, json };
    } catch {
      return void 0;
    }
  }
  class SplatData {
    constructor({ maxSplats = 1 } = {}) {
      this.numSplats = 0;
      this.maxSplats = getTextureSize(maxSplats).maxSplats;
      this.centers = new Float32Array(this.maxSplats * 3);
      this.scales = new Float32Array(this.maxSplats * 3);
      this.quaternions = new Float32Array(this.maxSplats * 4);
      this.opacities = new Float32Array(this.maxSplats);
      this.colors = new Float32Array(this.maxSplats * 3);
    }
    pushSplat() {
      const index = this.numSplats;
      this.ensureIndex(index);
      this.numSplats += 1;
      return index;
    }
    unpushSplat(index) {
      if (index === this.numSplats - 1) {
        this.numSplats -= 1;
      } else {
        throw new Error("Cannot unpush splat from non-last position");
      }
    }
    ensureCapacity(numSplats) {
      if (numSplats > this.maxSplats) {
        const targetSplats = Math.max(numSplats, this.maxSplats * 2);
        const newCenters = new Float32Array(targetSplats * 3);
        const newScales = new Float32Array(targetSplats * 3);
        const newQuaternions = new Float32Array(targetSplats * 4);
        const newOpacities = new Float32Array(targetSplats);
        const newColors = new Float32Array(targetSplats * 3);
        newCenters.set(this.centers);
        newScales.set(this.scales);
        newQuaternions.set(this.quaternions);
        newOpacities.set(this.opacities);
        newColors.set(this.colors);
        this.centers = newCenters;
        this.scales = newScales;
        this.quaternions = newQuaternions;
        this.opacities = newOpacities;
        this.colors = newColors;
        if (this.sh1) {
          const newSh1 = new Float32Array(targetSplats * 9);
          newSh1.set(this.sh1);
          this.sh1 = newSh1;
        }
        if (this.sh2) {
          const newSh2 = new Float32Array(targetSplats * 15);
          newSh2.set(this.sh2);
          this.sh2 = newSh2;
        }
        if (this.sh3) {
          const newSh3 = new Float32Array(targetSplats * 21);
          newSh3.set(this.sh3);
          this.sh3 = newSh3;
        }
        this.maxSplats = targetSplats;
      }
    }
    ensureIndex(index) {
      this.ensureCapacity(index + 1);
    }
    setCenter(index, x2, y, z) {
      this.centers[index * 3] = x2;
      this.centers[index * 3 + 1] = y;
      this.centers[index * 3 + 2] = z;
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      this.scales[index * 3] = scaleX;
      this.scales[index * 3 + 1] = scaleY;
      this.scales[index * 3 + 2] = scaleZ;
    }
    setQuaternion(index, x2, y, z, w) {
      this.quaternions[index * 4] = x2;
      this.quaternions[index * 4 + 1] = y;
      this.quaternions[index * 4 + 2] = z;
      this.quaternions[index * 4 + 3] = w;
    }
    setOpacity(index, opacity) {
      this.opacities[index] = opacity;
    }
    setColor(index, r, g, b) {
      this.colors[index * 3] = r;
      this.colors[index * 3 + 1] = g;
      this.colors[index * 3 + 2] = b;
    }
    setSh1(index, sh1) {
      if (!this.sh1) {
        this.sh1 = new Float32Array(this.maxSplats * 9);
      }
      for (let j = 0; j < 9; ++j) {
        this.sh1[index * 9 + j] = sh1[j];
      }
    }
    setSh2(index, sh2) {
      if (!this.sh2) {
        this.sh2 = new Float32Array(this.maxSplats * 15);
      }
      for (let j = 0; j < 15; ++j) {
        this.sh2[index * 15 + j] = sh2[j];
      }
    }
    setSh3(index, sh3) {
      if (!this.sh3) {
        this.sh3 = new Float32Array(this.maxSplats * 21);
      }
      for (let j = 0; j < 21; ++j) {
        this.sh3[index * 21 + j] = sh3[j];
      }
    }
  }
  async function unpackPcSogs(json, extraFiles, splatEncoding) {
    const isVersion2 = "version" in json;
    if (!isVersion2 && json.quats.encoding !== "quaternion_packed") {
      throw new Error("Unsupported quaternion encoding");
    }
    const numSplats = isVersion2 ? json.count : json.means.shape[0];
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    const meansPromise = Promise.all([
      decodeImageRgba(extraFiles[json.means.files[0]]),
      decodeImageRgba(extraFiles[json.means.files[1]])
    ]).then((means) => {
      for (let i2 = 0; i2 < numSplats; ++i2) {
        const i4 = i2 * 4;
        const fx = (means[0][i4 + 0] + (means[1][i4 + 0] << 8)) / 65535;
        const fy = (means[0][i4 + 1] + (means[1][i4 + 1] << 8)) / 65535;
        const fz = (means[0][i4 + 2] + (means[1][i4 + 2] << 8)) / 65535;
        let x2 = json.means.mins[0] + (json.means.maxs[0] - json.means.mins[0]) * fx;
        let y = json.means.mins[1] + (json.means.maxs[1] - json.means.mins[1]) * fy;
        let z = json.means.mins[2] + (json.means.maxs[2] - json.means.mins[2]) * fz;
        x2 = Math.sign(x2) * (Math.exp(Math.abs(x2)) - 1);
        y = Math.sign(y) * (Math.exp(Math.abs(y)) - 1);
        z = Math.sign(z) * (Math.exp(Math.abs(z)) - 1);
        setPackedSplatCenter(packedArray, i2, x2, y, z);
      }
    });
    const scalesPromise = decodeImageRgba(extraFiles[json.scales.files[0]]).then(
      (scales) => {
        let xLookup;
        let yLookup;
        let zLookup;
        if (isVersion2) {
          xLookup = yLookup = zLookup = json.scales.codebook.map((x2) => Math.exp(x2));
        } else {
          xLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[0] + (json.scales.maxs[0] - json.scales.mins[0]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          yLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[1] + (json.scales.maxs[1] - json.scales.mins[1]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
          zLookup = new Array(256).fill(0).map(
            (_, i2) => json.scales.mins[2] + (json.scales.maxs[2] - json.scales.mins[2]) * (i2 / 255)
          ).map((x2) => Math.exp(x2));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatScales(
            packedArray,
            i2,
            xLookup[scales[i4 + 0]],
            yLookup[scales[i4 + 1]],
            zLookup[scales[i4 + 2]],
            splatEncoding
          );
        }
      }
    );
    const quatsPromise = decodeImageRgba(extraFiles[json.quats.files[0]]).then(
      (quats) => {
        const SQRT2 = Math.sqrt(2);
        const lookup = new Array(256).fill(0).map((_, i2) => (i2 / 255 - 0.5) * SQRT2);
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const r0 = lookup[quats[i4 + 0]];
          const r1 = lookup[quats[i4 + 1]];
          const r2 = lookup[quats[i4 + 2]];
          const rr = Math.sqrt(Math.max(0, 1 - r0 * r0 - r1 * r1 - r2 * r2));
          const rOrder = quats[i4 + 3] - 252;
          const quatX = rOrder === 0 ? r0 : rOrder === 1 ? rr : r1;
          const quatY = rOrder <= 1 ? r1 : rOrder === 2 ? rr : r2;
          const quatZ = rOrder <= 2 ? r2 : rr;
          const quatW = rOrder === 0 ? rr : r0;
          setPackedSplatQuat(packedArray, i2, quatX, quatY, quatZ, quatW);
        }
      }
    );
    const sh0Promise = decodeImageRgba(extraFiles[json.sh0.files[0]]).then(
      (sh0) => {
        const SH_C02 = 0.28209479177387814;
        let rLookup;
        let gLookup;
        let bLookup;
        let aLookup;
        if (isVersion2) {
          rLookup = gLookup = bLookup = json.sh0.codebook.map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map((_, i2) => i2 / 255);
        } else {
          rLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[0] + (json.sh0.maxs[0] - json.sh0.mins[0]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          gLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[1] + (json.sh0.maxs[1] - json.sh0.mins[1]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          bLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[2] + (json.sh0.maxs[2] - json.sh0.mins[2]) * (i2 / 255)
          ).map((x2) => SH_C02 * x2 + 0.5);
          aLookup = new Array(256).fill(0).map(
            (_, i2) => json.sh0.mins[3] + (json.sh0.maxs[3] - json.sh0.mins[3]) * (i2 / 255)
          ).map((x2) => 1 / (1 + Math.exp(-x2)));
        }
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          setPackedSplatRgba(
            packedArray,
            i2,
            rLookup[sh0[i4 + 0]],
            gLookup[sh0[i4 + 1]],
            bLookup[sh0[i4 + 2]],
            aLookup[sh0[i4 + 3]],
            splatEncoding
          );
        }
      }
    );
    const promises = [meansPromise, scalesPromise, quatsPromise, sh0Promise];
    if (json.shN) {
      const useSH3 = isVersion2 ? json.shN.bands >= 3 : json.shN.shape[1] >= 48 - 3;
      const useSH2 = isVersion2 ? json.shN.bands >= 2 : json.shN.shape[1] >= 27 - 3;
      const useSH1 = isVersion2 ? json.shN.bands >= 1 : json.shN.shape[1] >= 12 - 3;
      if (useSH1) extra.sh1 = new Uint32Array(numSplats * 2);
      if (useSH2) extra.sh2 = new Uint32Array(numSplats * 4);
      if (useSH3) extra.sh3 = new Uint32Array(numSplats * 4);
      const sh1 = new Float32Array(9);
      const sh2 = new Float32Array(15);
      const sh3 = new Float32Array(21);
      const shN = json.shN;
      const shNPromise = Promise.all([
        decodeImage(extraFiles[json.shN.files[0]]),
        decodeImage(extraFiles[json.shN.files[1]])
      ]).then(([centroids, labels]) => {
        const lookup = "codebook" in shN ? shN.codebook : new Array(256).fill(0).map((_, i2) => shN.mins + (shN.maxs - shN.mins) * (i2 / 255));
        for (let i2 = 0; i2 < numSplats; ++i2) {
          const i4 = i2 * 4;
          const label = labels.rgba[i4 + 0] + (labels.rgba[i4 + 1] << 8);
          const col = (label & 63) * 15;
          const row = label >>> 6;
          const offset = row * centroids.width + col;
          for (let d = 0; d < 3; ++d) {
            if (useSH1) {
              for (let k = 0; k < 3; ++k) {
                sh1[k * 3 + d] = lookup[centroids.rgba[(offset + k) * 4 + d]];
              }
            }
            if (useSH2) {
              for (let k = 0; k < 5; ++k) {
                sh2[k * 3 + d] = lookup[centroids.rgba[(offset + 3 + k) * 4 + d]];
              }
            }
            if (useSH3) {
              for (let k = 0; k < 7; ++k) {
                sh3[k * 3 + d] = lookup[centroids.rgba[(offset + 8 + k) * 4 + d]];
              }
            }
          }
          if (useSH1)
            encodeSh1Rgb(extra.sh1, i2, sh1, splatEncoding);
          if (useSH2)
            encodeSh2Rgb(extra.sh2, i2, sh2, splatEncoding);
          if (useSH3)
            encodeSh3Rgb(extra.sh3, i2, sh3, splatEncoding);
        }
      });
      promises.push(shNPromise);
    }
    await Promise.all(promises);
    return { packedArray, numSplats, extra };
  }
  let offscreenGlContext = null;
  async function decodeImage(fileBytes) {
    if (!offscreenGlContext) {
      const canvas = new OffscreenCanvas(1, 1);
      offscreenGlContext = canvas.getContext("webgl2");
      if (!offscreenGlContext) {
        throw new Error("Failed to create WebGL2 context");
      }
    }
    const imageBlob = new Blob([fileBytes]);
    const bitmap = await createImageBitmap(imageBlob, {
      premultiplyAlpha: "none"
    });
    const gl = offscreenGlContext;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    const framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
    const data = new Uint8Array(bitmap.width * bitmap.height * 4);
    gl.readPixels(
      0,
      0,
      bitmap.width,
      bitmap.height,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      data
    );
    gl.deleteTexture(texture);
    gl.deleteFramebuffer(framebuffer);
    return { rgba: data, width: bitmap.width, height: bitmap.height };
  }
  async function decodeImageRgba(fileBytes) {
    const { rgba } = await decodeImage(fileBytes);
    return rgba;
  }
  async function unpackPcSogsZip(fileBytes, splatEncoding) {
    var _a2;
    const nameJson = tryPcSogsZip(fileBytes);
    if (!nameJson) {
      throw new Error("Invalid PC SOGS zip file");
    }
    const { name, json } = nameJson;
    const lastSlash = name.lastIndexOf("/");
    const lastBackslash = name.lastIndexOf("\\\\");
    const prefix = name.slice(0, Math.max(lastSlash, lastBackslash) + 1);
    const fileMap = /* @__PURE__ */ new Map();
    const refFiles = [
      ...json.means.files,
      ...json.scales.files,
      ...json.quats.files,
      ...json.sh0.files,
      ...((_a2 = json.shN) == null ? void 0 : _a2.files) ?? []
    ];
    for (const file of refFiles) {
      fileMap.set(prefix + file, file);
    }
    const unzipped = await new Promise(
      (resolve, reject) => {
        unzip(
          fileBytes,
          {
            filter: ({ name: name2 }) => {
              return fileMap.has(name2);
            }
          },
          (err2, files) => {
            if (err2) {
              reject(err2);
            } else {
              resolve(files);
            }
          }
        );
      }
    );
    const extraFiles = {};
    for (const [full, name2] of fileMap.entries()) {
      extraFiles[name2] = unzipped[full];
    }
    return await unpackPcSogs(json, extraFiles, splatEncoding);
  }
  class SpzReader {
    constructor({ fileBytes }) {
      this.version = -1;
      this.numSplats = 0;
      this.shDegree = 0;
      this.fractionalBits = 0;
      this.flags = 0;
      this.flagAntiAlias = false;
      this.reserved = 0;
      this.headerParsed = false;
      this.parsed = false;
      this.fileBytes = fileBytes instanceof ArrayBuffer ? new Uint8Array(fileBytes) : fileBytes;
      this.reader = new GunzipReader({ fileBytes: this.fileBytes });
    }
    async parseHeader() {
      if (this.headerParsed) {
        throw new Error("SPZ file header already parsed");
      }
      const header = new DataView((await this.reader.read(16)).buffer);
      if (header.getUint32(0, true) !== 1347635022) {
        throw new Error("Invalid SPZ file");
      }
      this.version = header.getUint32(4, true);
      if (this.version < 1 || this.version > 3) {
        throw new Error(\`Unsupported SPZ version: \${this.version}\`);
      }
      this.numSplats = header.getUint32(8, true);
      this.shDegree = header.getUint8(12);
      this.fractionalBits = header.getUint8(13);
      this.flags = header.getUint8(14);
      this.flagAntiAlias = (this.flags & 1) !== 0;
      this.reserved = header.getUint8(15);
      this.headerParsed = true;
      this.parsed = false;
    }
    async parseSplats(centerCallback, alphaCallback, rgbCallback, scalesCallback, quatCallback, shCallback) {
      if (!this.headerParsed) {
        throw new Error("SPZ file header must be parsed first");
      }
      if (this.parsed) {
        throw new Error("SPZ file already parsed");
      }
      this.parsed = true;
      if (this.version === 1) {
        const centerBytes = await this.reader.read(this.numSplats * 3 * 2);
        const centerUint16 = new Uint16Array(centerBytes.buffer);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const x2 = fromHalf(centerUint16[i3]);
          const y = fromHalf(centerUint16[i3 + 1]);
          const z = fromHalf(centerUint16[i3 + 2]);
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else if (this.version === 2 || this.version === 3) {
        const fixed = 1 << this.fractionalBits;
        const centerBytes = await this.reader.read(this.numSplats * 3 * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i9 = i2 * 9;
          const x2 = ((centerBytes[i9 + 2] << 24 | centerBytes[i9 + 1] << 16 | centerBytes[i9] << 8) >> 8) / fixed;
          const y = ((centerBytes[i9 + 5] << 24 | centerBytes[i9 + 4] << 16 | centerBytes[i9 + 3] << 8) >> 8) / fixed;
          const z = ((centerBytes[i9 + 8] << 24 | centerBytes[i9 + 7] << 16 | centerBytes[i9 + 6] << 8) >> 8) / fixed;
          centerCallback == null ? void 0 : centerCallback(i2, x2, y, z);
        }
      } else {
        throw new Error("Unreachable");
      }
      {
        const bytes = await this.reader.read(this.numSplats);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          alphaCallback == null ? void 0 : alphaCallback(i2, bytes[i2] / 255);
        }
      }
      {
        const rgbBytes = await this.reader.read(this.numSplats * 3);
        const scale = SH_C0 / 0.15;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const r = (rgbBytes[i3] / 255 - 0.5) * scale + 0.5;
          const g = (rgbBytes[i3 + 1] / 255 - 0.5) * scale + 0.5;
          const b = (rgbBytes[i3 + 2] / 255 - 0.5) * scale + 0.5;
          rgbCallback == null ? void 0 : rgbCallback(i2, r, g, b);
        }
      }
      {
        const scalesBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const scaleX = Math.exp(scalesBytes[i3] / 16 - 10);
          const scaleY = Math.exp(scalesBytes[i3 + 1] / 16 - 10);
          const scaleZ = Math.exp(scalesBytes[i3 + 2] / 16 - 10);
          scalesCallback == null ? void 0 : scalesCallback(i2, scaleX, scaleY, scaleZ);
        }
      }
      if (this.version === 3) {
        const maxValue = 1 / Math.sqrt(2);
        const quatBytes = await this.reader.read(this.numSplats * 4);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 4;
          const quaternion = [0, 0, 0, 0];
          const values = [
            quatBytes[i3],
            quatBytes[i3 + 1],
            quatBytes[i3 + 2],
            quatBytes[i3 + 3]
          ];
          const combinedValues = values[0] + (values[1] << 8) + (values[2] << 16) + (values[3] << 24);
          const valueMask = (1 << 9) - 1;
          const largestIndex = combinedValues >>> 30;
          let remainingValues = combinedValues;
          let sumSquares = 0;
          for (let i22 = 3; i22 >= 0; --i22) {
            if (i22 !== largestIndex) {
              const value = remainingValues & valueMask;
              const sign = remainingValues >>> 9 & 1;
              remainingValues = remainingValues >>> 10;
              quaternion[i22] = maxValue * (value / valueMask);
              quaternion[i22] = sign === 0 ? quaternion[i22] : -quaternion[i22];
              sumSquares += quaternion[i22] * quaternion[i22];
            }
          }
          const square = 1 - sumSquares;
          quaternion[largestIndex] = Math.sqrt(Math.max(square, 0));
          quatCallback == null ? void 0 : quatCallback(
            i2,
            quaternion[0],
            quaternion[1],
            quaternion[2],
            quaternion[3]
          );
        }
      } else {
        const quatBytes = await this.reader.read(this.numSplats * 3);
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          const i3 = i2 * 3;
          const quatX = quatBytes[i3] / 127.5 - 1;
          const quatY = quatBytes[i3 + 1] / 127.5 - 1;
          const quatZ = quatBytes[i3 + 2] / 127.5 - 1;
          const quatW = Math.sqrt(
            Math.max(0, 1 - quatX * quatX - quatY * quatY - quatZ * quatZ)
          );
          quatCallback == null ? void 0 : quatCallback(i2, quatX, quatY, quatZ, quatW);
        }
      }
      if (shCallback && this.shDegree >= 1) {
        const sh1 = new Float32Array(3 * 3);
        const sh2 = this.shDegree >= 2 ? new Float32Array(5 * 3) : void 0;
        const sh3 = this.shDegree >= 3 ? new Float32Array(7 * 3) : void 0;
        const shBytes = await this.reader.read(
          this.numSplats * SH_DEGREE_TO_VECS[this.shDegree] * 3
        );
        let offset = 0;
        for (let i2 = 0; i2 < this.numSplats; i2++) {
          for (let j = 0; j < 9; ++j) {
            sh1[j] = (shBytes[offset + j] - 128) / 128;
          }
          offset += 9;
          if (sh2) {
            for (let j = 0; j < 15; ++j) {
              sh2[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 15;
          }
          if (sh3) {
            for (let j = 0; j < 21; ++j) {
              sh3[j] = (shBytes[offset + j] - 128) / 128;
            }
            offset += 21;
          }
          shCallback == null ? void 0 : shCallback(i2, sh1, sh2, sh3);
        }
      }
    }
  }
  const SH_DEGREE_TO_VECS = { 1: 3, 2: 8, 3: 15 };
  const SH_C0 = 0.28209479177387814;
  const SPZ_MAGIC = 1347635022;
  const SPZ_VERSION = 3;
  const FLAG_ANTIALIASED = 1;
  class SpzWriter {
    constructor({
      numSplats,
      shDegree,
      fractionalBits = 12,
      flagAntiAlias = true
    }) {
      this.clippedCount = 0;
      const splatSize = 9 + // Position
      1 + // Opacity
      3 + // Scale
      3 + // DC-rgb
      4 + // Rotation
      (shDegree >= 1 ? 9 : 0) + (shDegree >= 2 ? 15 : 0) + (shDegree >= 3 ? 21 : 0);
      const bufferSize = 16 + numSplats * splatSize;
      this.buffer = new ArrayBuffer(bufferSize);
      this.view = new DataView(this.buffer);
      this.view.setUint32(0, SPZ_MAGIC, true);
      this.view.setUint32(4, SPZ_VERSION, true);
      this.view.setUint32(8, numSplats, true);
      this.view.setUint8(12, shDegree);
      this.view.setUint8(13, fractionalBits);
      this.view.setUint8(14, flagAntiAlias ? FLAG_ANTIALIASED : 0);
      this.view.setUint8(15, 0);
      this.numSplats = numSplats;
      this.shDegree = shDegree;
      this.fractionalBits = fractionalBits;
      this.fraction = 1 << fractionalBits;
      this.flagAntiAlias = flagAntiAlias;
    }
    setCenter(index, x2, y, z) {
      const xRounded = Math.round(x2 * this.fraction);
      const xInt = Math.max(-8388607, Math.min(8388607, xRounded));
      const yRounded = Math.round(y * this.fraction);
      const yInt = Math.max(-8388607, Math.min(8388607, yRounded));
      const zRounded = Math.round(z * this.fraction);
      const zInt = Math.max(-8388607, Math.min(8388607, zRounded));
      const clipped = xRounded !== xInt || yRounded !== yInt || zRounded !== zInt;
      if (clipped) {
        this.clippedCount += 1;
      }
      const i9 = index * 9;
      const base = 16 + i9;
      this.view.setUint8(base, xInt & 255);
      this.view.setUint8(base + 1, xInt >> 8 & 255);
      this.view.setUint8(base + 2, xInt >> 16 & 255);
      this.view.setUint8(base + 3, yInt & 255);
      this.view.setUint8(base + 4, yInt >> 8 & 255);
      this.view.setUint8(base + 5, yInt >> 16 & 255);
      this.view.setUint8(base + 6, zInt & 255);
      this.view.setUint8(base + 7, zInt >> 8 & 255);
      this.view.setUint8(base + 8, zInt >> 16 & 255);
    }
    setAlpha(index, alpha) {
      const base = 16 + this.numSplats * 9 + index;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round(alpha * 255)))
      );
    }
    static scaleRgb(r) {
      const v = ((r - 0.5) / (SH_C0 / 0.15) + 0.5) * 255;
      return Math.max(0, Math.min(255, Math.round(v)));
    }
    setRgb(index, r, g, b) {
      const base = 16 + this.numSplats * 10 + index * 3;
      this.view.setUint8(base, SpzWriter.scaleRgb(r));
      this.view.setUint8(base + 1, SpzWriter.scaleRgb(g));
      this.view.setUint8(base + 2, SpzWriter.scaleRgb(b));
    }
    setScale(index, scaleX, scaleY, scaleZ) {
      const base = 16 + this.numSplats * 13 + index * 3;
      this.view.setUint8(
        base,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleX) + 10) * 16)))
      );
      this.view.setUint8(
        base + 1,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleY) + 10) * 16)))
      );
      this.view.setUint8(
        base + 2,
        Math.max(0, Math.min(255, Math.round((Math.log(scaleZ) + 10) * 16)))
      );
    }
    setQuat(index, ...q) {
      const base = 16 + this.numSplats * 16 + index * 4;
      const quat = normalize(q);
      let iLargest = 0;
      for (let i2 = 1; i2 < 4; ++i2) {
        if (Math.abs(quat[i2]) > Math.abs(quat[iLargest])) {
          iLargest = i2;
        }
      }
      const negate = quat[iLargest] < 0 ? 1 : 0;
      let comp = iLargest;
      for (let i2 = 0; i2 < 4; ++i2) {
        if (i2 !== iLargest) {
          const negbit = (quat[i2] < 0 ? 1 : 0) ^ negate;
          const mag = Math.floor(
            ((1 << 9) - 1) * (Math.abs(quat[i2]) / Math.SQRT1_2) + 0.5
          );
          comp = comp << 10 | negbit << 9 | mag;
        }
      }
      this.view.setUint8(base, comp & 255);
      this.view.setUint8(base + 1, comp >> 8 & 255);
      this.view.setUint8(base + 2, comp >> 16 & 255);
      this.view.setUint8(base + 3, comp >>> 24 & 255);
    }
    static quantizeSh(sh, bits2) {
      const value = Math.round(sh * 128) + 128;
      const bucketSize = 1 << 8 - bits2;
      const quantized = Math.floor((value + bucketSize / 2) / bucketSize) * bucketSize;
      return Math.max(0, Math.min(255, quantized));
    }
    setSh(index, sh1, sh2, sh3) {
      const shVecs = SH_DEGREE_TO_VECS[this.shDegree] || 0;
      const base1 = 16 + this.numSplats * 20 + index * shVecs * 3;
      for (let j = 0; j < 9; ++j) {
        this.view.setUint8(base1 + j, SpzWriter.quantizeSh(sh1[j], 5));
      }
      if (sh2) {
        const base2 = base1 + 9;
        for (let j = 0; j < 15; ++j) {
          this.view.setUint8(base2 + j, SpzWriter.quantizeSh(sh2[j], 4));
        }
        if (sh3) {
          const base3 = base2 + 15;
          for (let j = 0; j < 21; ++j) {
            this.view.setUint8(base3 + j, SpzWriter.quantizeSh(sh3[j], 4));
          }
        }
      }
    }
    async finalize() {
      const input = new Uint8Array(this.buffer);
      const stream = new ReadableStream({
        async start(controller) {
          controller.enqueue(input);
          controller.close();
        }
      });
      const compressed = stream.pipeThrough(new CompressionStream("gzip"));
      const response = new Response(compressed);
      const buffer = await response.arrayBuffer();
      console.log(
        "Compressed",
        input.length,
        "bytes to",
        buffer.byteLength,
        "bytes"
      );
      return new Uint8Array(buffer);
    }
  }
  async function transcodeSpz(input) {
    var _a2, _b2, _c;
    const splats = new SplatData();
    const {
      inputs,
      clipXyz,
      maxSh,
      fractionalBits = 12,
      opacityThreshold
    } = input;
    for (const input2 of inputs) {
      let transformPos = function(pos) {
        pos.multiplyScalar(scale);
        pos.applyQuaternion(quaternion);
        pos.add(translate);
        return pos;
      }, transformScales = function(scales) {
        scales.multiplyScalar(scale);
        return scales;
      }, transformQuaternion = function(quat) {
        quat.premultiply(quaternion);
        return quat;
      }, withinClip = function(p) {
        return !clip || clip.containsPoint(p);
      }, withinOpacity = function(opacity) {
        return opacityThreshold !== void 0 ? opacity >= opacityThreshold : true;
      };
      const scale = ((_a2 = input2.transform) == null ? void 0 : _a2.scale) ?? 1;
      const quaternion = new Quaternion().fromArray(
        ((_b2 = input2.transform) == null ? void 0 : _b2.quaternion) ?? [0, 0, 0, 1]
      );
      const translate = new Vector3().fromArray(
        ((_c = input2.transform) == null ? void 0 : _c.translate) ?? [0, 0, 0]
      );
      const clip = clipXyz ? new Box3(
        new Vector3().fromArray(clipXyz.min),
        new Vector3().fromArray(clipXyz.max)
      ) : void 0;
      let fileType = input2.fileType;
      if (!fileType) {
        fileType = getSplatFileType(input2.fileBytes);
        if (!fileType && input2.pathOrUrl) {
          fileType = getSplatFileTypeFromPath(input2.pathOrUrl);
        }
      }
      switch (fileType) {
        case SplatFileType.PLY: {
          const ply = new PlyReader({ fileBytes: input2.fileBytes });
          await ply.parseHeader();
          let lastIndex = null;
          ply.parseSplats(
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (sh1 && lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
              }
              if (sh2 && lastIndex !== null) {
                splats.setSh2(lastIndex, sh2);
              }
              if (sh3 && lastIndex !== null) {
                splats.setSh3(lastIndex, sh3);
              }
            }
          );
          break;
        }
        case SplatFileType.SPZ: {
          const spz2 = new SpzReader({ fileBytes: input2.fileBytes });
          await spz2.parseHeader();
          const mapping = new Int32Array(spz2.numSplats);
          mapping.fill(-1);
          const centers = new Float32Array(spz2.numSplats * 3);
          const center = new Vector3();
          spz2.parseSplats(
            (index, x2, y, z) => {
              const center2 = transformPos(new Vector3(x2, y, z));
              centers[index * 3] = center2.x;
              centers[index * 3 + 1] = center2.y;
              centers[index * 3 + 2] = center2.z;
            },
            (index, alpha) => {
              center.fromArray(centers, index * 3);
              if (withinClip(center) && withinOpacity(alpha)) {
                mapping[index] = splats.pushSplat();
                splats.setCenter(mapping[index], center.x, center.y, center.z);
                splats.setOpacity(mapping[index], alpha);
              }
            },
            (index, r, g, b) => {
              if (mapping[index] >= 0) {
                splats.setColor(mapping[index], r, g, b);
              }
            },
            (index, scaleX, scaleY, scaleZ) => {
              if (mapping[index] >= 0) {
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(mapping[index], scales.x, scales.y, scales.z);
              }
            },
            (index, quatX, quatY, quatZ, quatW) => {
              if (mapping[index] >= 0) {
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  mapping[index],
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
              }
            },
            (index, sh1, sh2, sh3) => {
              if (mapping[index] >= 0) {
                splats.setSh1(mapping[index], sh1);
                if (sh2) {
                  splats.setSh2(mapping[index], sh2);
                }
                if (sh3) {
                  splats.setSh3(mapping[index], sh3);
                }
              }
            }
          );
          break;
        }
        case SplatFileType.SPLAT:
          decodeAntiSplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                const index2 = splats.pushSplat();
                splats.setCenter(index2, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(index2, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  index2,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(index2, opacity);
                splats.setColor(index2, r, g, b);
              }
            }
          );
          break;
        case SplatFileType.KSPLAT: {
          let lastIndex = null;
          decodeKsplat(
            input2.fileBytes,
            (numSplats) => {
            },
            (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
              const center = transformPos(new Vector3(x2, y, z));
              if (withinClip(center) && withinOpacity(opacity)) {
                lastIndex = splats.pushSplat();
                splats.setCenter(lastIndex, center.x, center.y, center.z);
                const scales = transformScales(
                  new Vector3(scaleX, scaleY, scaleZ)
                );
                splats.setScale(lastIndex, scales.x, scales.y, scales.z);
                const quaternion2 = transformQuaternion(
                  new Quaternion(quatX, quatY, quatZ, quatW)
                );
                splats.setQuaternion(
                  lastIndex,
                  quaternion2.x,
                  quaternion2.y,
                  quaternion2.z,
                  quaternion2.w
                );
                splats.setOpacity(lastIndex, opacity);
                splats.setColor(lastIndex, r, g, b);
              } else {
                lastIndex = null;
              }
            },
            (index, sh1, sh2, sh3) => {
              if (lastIndex !== null) {
                splats.setSh1(lastIndex, sh1);
                if (sh2) {
                  splats.setSh2(lastIndex, sh2);
                }
                if (sh3) {
                  splats.setSh3(lastIndex, sh3);
                }
              }
            }
          );
          break;
        }
        default:
          throw new Error(\`transcodeSpz not implemented for \${fileType}\`);
      }
    }
    const shDegree = Math.min(
      maxSh ?? 3,
      splats.sh3 ? 3 : splats.sh2 ? 2 : splats.sh1 ? 1 : 0
    );
    const spz = new SpzWriter({
      numSplats: splats.numSplats,
      shDegree,
      fractionalBits,
      flagAntiAlias: true
    });
    for (let i2 = 0; i2 < splats.numSplats; ++i2) {
      const i3 = i2 * 3;
      const i4 = i2 * 4;
      spz.setCenter(
        i2,
        splats.centers[i3],
        splats.centers[i3 + 1],
        splats.centers[i3 + 2]
      );
      spz.setScale(
        i2,
        splats.scales[i3],
        splats.scales[i3 + 1],
        splats.scales[i3 + 2]
      );
      spz.setQuat(
        i2,
        splats.quaternions[i4],
        splats.quaternions[i4 + 1],
        splats.quaternions[i4 + 2],
        splats.quaternions[i4 + 3]
      );
      spz.setAlpha(i2, splats.opacities[i2]);
      spz.setRgb(
        i2,
        splats.colors[i3],
        splats.colors[i3 + 1],
        splats.colors[i3 + 2]
      );
      if (splats.sh1 && shDegree >= 1) {
        spz.setSh(
          i2,
          splats.sh1.slice(i2 * 9, (i2 + 1) * 9),
          shDegree >= 2 && splats.sh2 ? splats.sh2.slice(i2 * 15, (i2 + 1) * 15) : void 0,
          shDegree >= 3 && splats.sh3 ? splats.sh3.slice(i2 * 21, (i2 + 1) * 21) : void 0
        );
      }
    }
    const spzBytes = await spz.finalize();
    return { fileBytes: spzBytes, clippedCount: spz.clippedCount };
  }
  async function onMessage(event) {
    const { name, args, id } = event.data;
    let result = void 0;
    let error = void 0;
    try {
      switch (name) {
        case "unpackPly": {
          const { packedArray, fileBytes, splatEncoding } = args;
          const decoded = await unpackPly({
            packedArray,
            fileBytes,
            splatEncoding
          });
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeSpz": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackSpz(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodeAntiSplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackAntiSplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray
          };
          break;
        }
        case "decodeKsplat": {
          const { fileBytes, splatEncoding } = args;
          const decoded = unpackKsplat(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogs": {
          const { fileBytes, extraFiles, splatEncoding } = args;
          const json = JSON.parse(
            new TextDecoder().decode(fileBytes)
          );
          const decoded = await unpackPcSogs(json, extraFiles, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "decodePcSogsZip": {
          const { fileBytes, splatEncoding } = args;
          const decoded = await unpackPcSogsZip(fileBytes, splatEncoding);
          result = {
            id,
            numSplats: decoded.numSplats,
            packedArray: decoded.packedArray,
            extra: decoded.extra
          };
          break;
        }
        case "sortSplats": {
          const { totalSplats, readback, ordering } = args;
          result = {
            id,
            readback,
            ...sortSplats({ totalSplats, readback, ordering })
          };
          break;
        }
        case "sortDoubleSplats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "sort32Splats": {
          const { numSplats, readback, ordering } = args;
          {
            result = {
              id,
              readback,
              ordering,
              activeSplats: sort32_splats(numSplats, readback, ordering)
            };
          }
          break;
        }
        case "transcodeSpz": {
          const input = args;
          const spzBytes = await transcodeSpz(input);
          result = {
            id,
            fileBytes: spzBytes,
            input
          };
          break;
        }
        default: {
          throw new Error(\`Unknown name: \${name}\`);
        }
      }
    } catch (e) {
      error = e;
      console.error(error);
    }
    self.postMessage(
      { id, result, error },
      { transfer: getArrayBuffers(result) }
    );
  }
  async function unpackPly({
    packedArray,
    fileBytes,
    splatEncoding
  }) {
    const ply = new PlyReader({ fileBytes });
    await ply.parseHeader();
    const numSplats = ply.numSplats;
    const extra = {};
    ply.parseSplats(
      (index, x2, y, z, scaleX, scaleY, scaleZ, quatX, quatY, quatZ, quatW, opacity, r, g, b) => {
        setPackedSplat(
          packedArray,
          index,
          x2,
          y,
          z,
          scaleX,
          scaleY,
          scaleZ,
          quatX,
          quatY,
          quatZ,
          quatW,
          opacity,
          r,
          g,
          b,
          splatEncoding
        );
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  async function unpackSpz(fileBytes, splatEncoding) {
    const spz = new SpzReader({ fileBytes });
    await spz.parseHeader();
    const numSplats = spz.numSplats;
    const maxSplats = computeMaxSplats(numSplats);
    const packedArray = new Uint32Array(maxSplats * 4);
    const extra = {};
    await spz.parseSplats(
      (index, x2, y, z) => {
        setPackedSplatCenter(packedArray, index, x2, y, z);
      },
      (index, alpha) => {
        setPackedSplatOpacity(packedArray, index, alpha);
      },
      (index, r, g, b) => {
        setPackedSplatRgb(packedArray, index, r, g, b, splatEncoding);
      },
      (index, scaleX, scaleY, scaleZ) => {
        setPackedSplatScales(
          packedArray,
          index,
          scaleX,
          scaleY,
          scaleZ,
          splatEncoding
        );
      },
      (index, quatX, quatY, quatZ, quatW) => {
        setPackedSplatQuat(packedArray, index, quatX, quatY, quatZ, quatW);
      },
      (index, sh1, sh2, sh3) => {
        if (sh1) {
          if (!extra.sh1) {
            extra.sh1 = new Uint32Array(numSplats * 2);
          }
          encodeSh1Rgb(extra.sh1, index, sh1, splatEncoding);
        }
        if (sh2) {
          if (!extra.sh2) {
            extra.sh2 = new Uint32Array(numSplats * 4);
          }
          encodeSh2Rgb(extra.sh2, index, sh2, splatEncoding);
        }
        if (sh3) {
          if (!extra.sh3) {
            extra.sh3 = new Uint32Array(numSplats * 4);
          }
          encodeSh3Rgb(extra.sh3, index, sh3, splatEncoding);
        }
      }
    );
    return { packedArray, numSplats, extra };
  }
  const DEPTH_INFINITY_F16 = 31744;
  const DEPTH_SIZE_16 = DEPTH_INFINITY_F16 + 1;
  let depthArray16 = null;
  function sortSplats({
    totalSplats,
    readback,
    ordering
  }) {
    if (!depthArray16) {
      depthArray16 = new Uint32Array(DEPTH_SIZE_16);
    }
    depthArray16.fill(0);
    const readbackUint32 = readback.map((layer) => new Uint32Array(layer.buffer));
    const layerSize = readbackUint32[0].length;
    const numLayers = Math.ceil(totalSplats / layerSize);
    let layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    let activeSplats = 0;
    for (let j = 0; j < DEPTH_SIZE_16; ++j) {
      const nextIndex = activeSplats + depthArray16[j];
      depthArray16[j] = activeSplats;
      activeSplats = nextIndex;
    }
    layerBase = 0;
    for (let layer = 0; layer < numLayers; ++layer) {
      const readbackLayer = readbackUint32[layer];
      const layerSplats = Math.min(readbackLayer.length, totalSplats - layerBase);
      for (let i2 = 0; i2 < layerSplats; ++i2) {
        const pri = readbackLayer[i2] & 32767;
        if (pri < DEPTH_INFINITY_F16) {
          ordering[depthArray16[pri]] = layerBase + i2;
          depthArray16[pri] += 1;
        }
      }
      layerBase += layerSplats;
    }
    if (depthArray16[DEPTH_SIZE_16 - 1] !== activeSplats) {
      throw new Error(
        \`Expected \${activeSplats} active splats but got \${depthArray16[DEPTH_SIZE_16 - 1]}\`
      );
    }
    return { activeSplats, ordering };
  }
  const messageBuffer = [];
  function bufferMessage(event) {
    messageBuffer.push(event);
  }
  async function initialize() {
    self.addEventListener("message", bufferMessage);
    await __wbg_init();
    self.removeEventListener("message", bufferMessage);
    self.addEventListener("message", onMessage);
    for (const event of messageBuffer) {
      onMessage(event);
    }
    messageBuffer.length = 0;
  }
  initialize().catch(console.error);
})();
//# sourceMappingURL=worker-CaMzlx2k.js.map
`,Tl=typeof self<"u"&&self.Blob&&new Blob([Zc],{type:"text/javascript;charset=utf-8"});function rC(i){let t;try{if(t=Tl&&(self.URL||self.webkitURL).createObjectURL(Tl),!t)throw"";const e=new Worker(t,{name:i?.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Zc),{name:i?.name})}finally{t&&(self.URL||self.webkitURL).revokeObjectURL(t)}}class aC{constructor(){this.messages={},this.messageIdNext=0,this.worker=new rC,this.worker.onmessage=t=>this.onMessage(t)}makeMessageId(){return++this.messageIdNext}makeMessagePromiseId(){const t=this.makeMessageId(),e=new Promise((n,s)=>{this.messages[t]={resolve:n,reject:s}});return{id:t,promise:e}}onMessage(t){const{id:e,result:n,error:s}=t.data,r=this.messages[e];r&&(delete this.messages[e],s?r.reject(s):r.resolve(n))}async call(t,e){const{id:n,promise:s}=this.makeMessagePromiseId();return this.worker.postMessage({name:t,args:e,id:n},{transfer:HI(e)}),s}}let $c=4,Sr=0;const th=[],eh=[];async function oC(){const i=th.shift();if(i)return i;if(Sr<$c){const t=new aC;return Sr+=1,t}return new Promise(t=>{eh.push(t)})}function AC(i){if(Sr>$c){Sr-=1;return}const t=eh.shift();if(t){t(i);return}th.push(i)}async function oi(i){const t=await oC();try{return await i(t)}finally{AC(t)}}class lC extends Zo{constructor(t){super(t),this.fileLoader=new Em(t)}load(t,e,n,s){const r=this.manager.resolveURL((this.path??"")+(t??"")),a=new Headers(this.requestHeader),o=this.withCredentials?"include":"same-origin",l=new Request(r,{headers:a,credentials:o});let A=this.fileType;this.manager.itemStart(r),Dl(l,n).then(async c=>{var h;const u=[new ProgressEvent("progress",{lengthComputable:!0,loaded:c.byteLength,total:c.byteLength})];function p(){if(n){const d=u.every(v=>v.lengthComputable||v.loaded===0&&v.total===0),_=u.reduce((v,Q)=>v+Q.loaded,0),E=u.reduce((v,Q)=>v+Q.total,0);n(new ProgressEvent("progress",{lengthComputable:d,loaded:_,total:E}))}}const g={},m=[],f=nh(c);if(A==="pcsogs"&&f===void 0)throw new Error("Invalid PC SOGS file");if(f!==void 0){A="pcsogs";for(const d of["means","scales","quats","sh0","shN"]){const _=f[d];if(_)for(const E of _.files){const v=new URL(E,r).toString(),Q=u.length;u.push(new ProgressEvent("progress")),this.manager.itemStart(v);const b=new Request(v,{headers:a,credentials:o}),S=Dl(b,T=>{u[Q]=T,p()}).then(T=>{g[E]=T}).catch(T=>{throw this.manager.itemError(v),T}).finally(()=>{this.manager.itemEnd(v)});m.push(S)}}}if(await Promise.all(m),e){const d=((h=this.packedSplats)==null?void 0:h.splatEncoding)??zr,_=await ih({input:c,extraFiles:g,fileType:A,pathOrUrl:r,splatEncoding:d});this.packedSplats?(this.packedSplats.initialize(_),e(this.packedSplats)):e(new mi(_))}}).catch(c=>{this.manager.itemError(r),s?.(c)}).finally(()=>{this.manager.itemEnd(r)})}async loadAsync(t,e){return new Promise((n,s)=>{this.load(t,r=>{n(r)},e,s)})}parse(t){return new qi({packedSplats:t})}}async function Dl(i,t){const e=await fetch(i);if(!e.ok)throw new Error(`${e.status} "${e.statusText}" fetching URL: ${i.url}`);if(!e.body)throw new Error(`Response body is null for URL: ${i.url}`);const n=e.body.getReader(),s=Number.parseInt(e.headers.get("Content-Length")||"0"),r=Number.isNaN(s)?0:s;let a=0;const o=[];for(;;){const{done:c,value:h}=await n.read();if(c)break;o.push(h),a+=h.length,t&&t(new ProgressEvent("progress",{lengthComputable:r!==0,loaded:a,total:r}))}const l=new Uint8Array(a);let A=0;for(const c of o)l.set(c,A),A+=c.length;return l.buffer}function cC(i){const t=new DataView(i.buffer);if((t.getUint32(0,!0)&16777215)===7957616)return"ply";if((t.getUint32(0,!0)&16777215)===559903){const e=rE(i,4);return new DataView(e.buffer).getUint32(0,!0)===1347635022?"spz":void 0}if(t.getUint32(0,!0)===67324752)return dC(i)?"pcsogszip":void 0}function hC(i){const t=i.split(/[?#]/,1)[0],e=Math.max(t.lastIndexOf("/"),t.lastIndexOf("\\")),n=t.slice(e+1),s=n.lastIndexOf(".");return s<=0||s===n.length-1?"":n.slice(s+1).toLowerCase()}function uC(i){const t=hC(i);if(t==="ply")return"ply";if(t==="spz")return"spz";if(t==="splat")return"splat";if(t==="ksplat")return"ksplat";if(t==="sog")return"pcsogszip"}function nh(i){try{let t;if(typeof i=="string")t=i;else{const s=i instanceof ArrayBuffer?new Uint8Array(i):i;if(s.length>65536)return;t=new TextDecoder().decode(s)}const e=JSON.parse(t);if(!e||typeof e!="object"||Array.isArray(e))return;const n=e.version===2;for(const s of["means","scales","quats","sh0"]){if(!e[s]||typeof e[s]!="object"||Array.isArray(e[s]))return;if(n){if(!e[s].files||(s==="scales"||s==="sh0")&&!e[s].codebook||s==="means"&&(!e[s].mins||!e[s].maxs))return}else if(!e[s].shape||!e[s].files||s!=="quats"&&(!e[s].mins||!e[s].maxs))return}return e}catch{return}}function dC(i){try{const t=i instanceof ArrayBuffer?new Uint8Array(i):i;let e=null;const n=hI(t,{filter:({name:r})=>r.split(/[\\/]/).pop()==="meta.json"?(e=r,!0):!1});if(!e)return;const s=nh(n[e]);return s?{name:e,json:s}:void 0}catch{return}}async function ih({input:i,extraFiles:t,fileType:e,pathOrUrl:n,splatEncoding:s}){const r=i instanceof ArrayBuffer?new Uint8Array(i):i;let a=e;switch(e||(a=cC(r),!a&&n&&(a=uC(n))),a){case"ply":{const o=new XE({fileBytes:r});await o.parseHeader();const l=o.numSplats,A=$e(l).maxSplats,c={fileBytes:r,packedArray:new Uint32Array(A*4),splatEncoding:s};return await oi(async h=>{const{packedArray:u,numSplats:p,extra:g}=await h.call("unpackPly",c);return{packedArray:u,numSplats:p,extra:g}})}case"spz":return await oi(async o=>{const{packedArray:l,numSplats:A,extra:c}=await o.call("decodeSpz",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:c}});case"splat":return await oi(async o=>{const{packedArray:l,numSplats:A}=await o.call("decodeAntiSplat",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A}});case"ksplat":return await oi(async o=>{const{packedArray:l,numSplats:A,extra:c}=await o.call("decodeKsplat",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:c}});case"pcsogs":return await oi(async o=>{const{packedArray:l,numSplats:A,extra:c}=await o.call("decodePcSogs",{fileBytes:r,extraFiles:t,splatEncoding:s});return{packedArray:l,numSplats:A,extra:c}});case"pcsogszip":return await oi(async o=>{const{packedArray:l,numSplats:A,extra:c}=await o.call("decodePcSogsZip",{fileBytes:r,splatEncoding:s});return{packedArray:l,numSplats:A,extra:c}});default:throw new Error(`Unknown splat file type: ${a}`)}}var fC=`precision highp float;
precision highp int;
precision highp sampler2D;
precision highp usampler2D;
precision highp isampler2D;
precision highp sampler2DArray;
precision highp usampler2DArray;
precision highp isampler2DArray;
precision highp sampler3D;
precision highp usampler3D;
precision highp isampler3D;

#include <splatDefines>

uniform uint targetLayer;
uniform int targetBase;
uniform int targetCount;

out uvec4 target;

{{ GLOBALS }}

void produceSplat(int index) {
    {{ STATEMENTS }}
}

void main() {
    int targetIndex = int(targetLayer << SPLAT_TEX_LAYER_BITS) + int(uint(gl_FragCoord.y) << SPLAT_TEX_WIDTH_BITS) + int(gl_FragCoord.x);
    int index = targetIndex - targetBase;

    if ((index >= 0) && (index < targetCount)) {
        produceSplat(index);
    } else {
        target = uvec4(0u, 0u, 0u, 0u);
    }
}`;const zr={rgbMin:0,rgbMax:1,lnScaleMin:Rn,lnScaleMax:Ln,sh1Min:-1,sh1Max:1,sh2Min:-1,sh2Max:1,sh3Min:-1,sh3Max:1},Bs=class Se{constructor(t={}){this.maxSplats=0,this.numSplats=0,this.packedArray=null,this.isInitialized=!1,this.target=null,this.source=null,this.needsUpdate=!0,this.extra={},this.dyno=new aA({packedSplats:this}),this.dynoRgbMinMaxLnScaleMinMax=new kr({key:"rgbMinMaxLnScaleMinMax",value:new Gt(0,1,Rn,Ln),update:e=>{var n,s,r,a;return e.set(((n=this.splatEncoding)==null?void 0:n.rgbMin)??0,((s=this.splatEncoding)==null?void 0:s.rgbMax)??1,((r=this.splatEncoding)==null?void 0:r.lnScaleMin)??Rn,((a=this.splatEncoding)==null?void 0:a.lnScaleMax)??Ln),e}}),this.dynoSh1MinMax=new Ra({key:"sh1MinMax",value:new vt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh1Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh1Max)??1),e}}),this.dynoSh2MinMax=new Ra({key:"sh2MinMax",value:new vt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh2Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh2Max)??1),e}}),this.dynoSh3MinMax=new Ra({key:"sh3MinMax",value:new vt(-1,1),update:e=>{var n,s;return e.set(((n=this.splatEncoding)==null?void 0:n.sh3Min)??-1,((s=this.splatEncoding)==null?void 0:s.sh3Max)??1),e}}),this.initialized=Promise.resolve(this),this.reinitialize(t)}reinitialize(t){this.isInitialized=!1,this.extra={},this.splatEncoding=t.splatEncoding,t.url||t.fileBytes||t.construct?this.initialized=this.asyncInitialize(t).then(()=>(this.isInitialized=!0,this)):(this.initialize(t),this.isInitialized=!0,this.initialized=Promise.resolve(this))}initialize(t){t.packedArray?(this.packedArray=t.packedArray,this.maxSplats=Math.floor(this.packedArray.length/4),this.maxSplats=Math.floor(this.maxSplats/$t)*$t,this.numSplats=Math.min(this.maxSplats,t.numSplats??Number.POSITIVE_INFINITY)):(this.maxSplats=t.maxSplats??0,this.numSplats=0),this.extra=t.extra??{}}async asyncInitialize(t){const{url:e,fileBytes:n,construct:s}=t;if(e){const r=new lC;r.packedSplats=this,await r.loadAsync(e)}else if(n){const r=await ih({input:n,fileType:t.fileType,pathOrUrl:t.fileName??e,splatEncoding:t.splatEncoding??zr});this.initialize(r)}if(s){const r=s(this);r instanceof Promise&&await r}}dispose(){this.target&&(this.target.dispose(),this.target=null),this.source&&(this.source.dispose(),this.source=null)}ensureSplats(t){const e=t<=this.maxSplats?this.maxSplats:Math.max(t,2*this.maxSplats),n=this.packedArray?this.packedArray.length/4:0;if(!this.packedArray||e>n){this.maxSplats=$e(e).maxSplats;const s=new Uint32Array(this.maxSplats*4);this.packedArray&&s.set(this.packedArray),this.packedArray=s}return this.packedArray}ensureSplatsSh(t,e){let n,s;if(t===0)return this.ensureSplats(e);if(t===1)n=2,s="sh1";else if(t===2)n=4,s="sh2";else if(t===3)n=4,s="sh3";else throw new Error(`Invalid level: ${t}`);let r=this.extra[s]?this.extra[s].length/n:0;const a=e<=r?r:Math.max(e,2*r);if(!this.extra[s]||a>r){r=$e(a).maxSplats;const o=new Uint32Array(r*n);this.extra[s]&&o.set(this.extra[s]),this.extra[s]=o}return this.extra[s]}getSplat(t){if(!this.packedArray||t>=this.numSplats)throw new Error("Invalid index");return Bl(this.packedArray,t,this.splatEncoding)}setSplat(t,e,n,s,r,a){const o=this.ensureSplats(t+1);vl(o,t,e.x,e.y,e.z,n.x,n.y,n.z,s.x,s.y,s.z,s.w,r,a.r,a.g,a.b),this.numSplats=Math.max(this.numSplats,t+1)}pushSplat(t,e,n,s,r){const a=this.ensureSplats(this.numSplats+1);vl(a,this.numSplats,t.x,t.y,t.z,e.x,e.y,e.z,n.x,n.y,n.z,n.w,s,r.r,r.g,r.b),++this.numSplats}forEachSplat(t){if(!(!this.packedArray||!this.numSplats))for(let e=0;e<this.numSplats;++e){const n=Bl(this.packedArray,e,this.splatEncoding);t(e,n.center,n.scales,n.quaternion,n.opacity,n.color)}}ensureGenerate(t){if(this.target&&(t??1)<=this.maxSplats)return!1;this.dispose();const e=$e(t??1),{width:n,height:s,depth:r}=e;return this.maxSplats=e.maxSplats,this.target=new nc(n,s,r,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,magFilter:Ie,minFilter:Ie}),this.target.texture.format=Tn,this.target.texture.type=Ge,this.target.texture.internalFormat="RGBA32UI",this.target.scissorTest=!0,!0}generateMapping(t){let e=0;const n=t.map(s=>{const r=e,a=Math.ceil(s/$t)*$t;return e+=a,{base:r,count:s}});return{maxSplats:e,mapping:n}}getTexture(){return this.target?this.target.texture:this.source||this.packedArray?this.maybeUpdateSource():Se.getEmpty()}maybeUpdateSource(){if(!this.packedArray)throw new Error("No packed splats");if(this.needsUpdate||!this.source){if(this.needsUpdate=!1,this.source){const{width:t,height:e,depth:n}=this.source.image;this.maxSplats!==t*e*n&&(this.source.dispose(),this.source=null)}if(this.source)this.packedArray.buffer!==this.source.image.data.buffer&&(this.source.image.data=new Uint8Array(this.packedArray.buffer));else{const{width:t,height:e,depth:n}=$e(this.maxSplats);this.source=new pn(this.packedArray,t,e,n),this.source.format=Tn,this.source.type=Ge,this.source.internalFormat="RGBA32UI",this.source.needsUpdate=!0}this.source.needsUpdate=!0}return this.source}static getEmpty(){if(!Se.emptySource){const{width:t,height:e,depth:n,maxSplats:s}=$e(1),r=new Uint32Array(s*4);Se.emptySource=new pn(r,t,e,n),Se.emptySource.format=Tn,Se.emptySource.type=Ge,Se.emptySource.internalFormat="RGBA32UI",Se.emptySource.needsUpdate=!0}return Se.emptySource}prepareProgramMaterial(t){let e=Se.generatorProgram.get(t);if(!e){const s=Nn({index:"int"},{output:"uvec4"},({index:r})=>{t.inputs.index=r;const a=t.outputs.gsplat;return{output:UI(a,this.dynoRgbMinMaxLnScaleMinMax)}});Se.programTemplate||(Se.programTemplate=new Gc(fC)),e=new kc({graph:s,inputs:{index:"index"},outputs:{output:"target"},template:Se.programTemplate}),Object.assign(e.uniforms,{targetLayer:{value:0},targetBase:{value:0},targetCount:{value:0}}),Se.generatorProgram.set(t,e)}const n=e.prepareMaterial();return Se.fullScreenQuad.material=n,{program:e,material:n}}saveRenderState(t){return{xrEnabled:t.xr.enabled,autoClear:t.autoClear}}resetRenderState(t,e){t.setRenderTarget(null),t.xr.enabled=e.xrEnabled,t.autoClear=e.autoClear}generate({generator:t,base:e,count:n,renderer:s}){if(!this.target)throw new Error("Target must be initialized with ensureSplats");if(e+n>this.maxSplats)throw new Error("Base + count exceeds maxSplats");const{program:r,material:a}=this.prepareProgramMaterial(t);r.update();const o=this.saveRenderState(s),l=Math.ceil((e+n)/$t)*$t,A=$t*di;for(a.uniforms.targetBase.value=e,a.uniforms.targetCount.value=n;e<l;){const c=Math.floor(e/A);a.uniforms.targetLayer.value=c;const h=c*A,u=Math.floor((e-h)/$t),p=Math.min(di,Math.ceil((l-h)/$t));this.target.scissor.set(0,u,$t,p-u),s.setRenderTarget(this.target,c),s.xr.enabled=!1,s.autoClear=!1,Se.fullScreenQuad.render(s),e+=$t*(p-u)}return this.resetRenderState(s,o),{nextBase:l}}};Bs.emptySource=null;Bs.programTemplate=null;Bs.generatorProgram=new Map;Bs.fullScreenQuad=new yc(new jo({visible:!1}));let mi=Bs;class aA extends hn{constructor({packedSplats:t}={}){super({key:"packedSplats",type:Pr,globals:()=>[eA],value:{texture:mi.getEmpty(),numSplats:0,rgbMinMaxLnScaleMinMax:new Gt(0,1,Rn,Ln)},update:e=>{var n,s,r,a,o,l,A,c,h,u;return e.texture=((n=this.packedSplats)==null?void 0:n.getTexture())??mi.getEmpty(),e.numSplats=((s=this.packedSplats)==null?void 0:s.numSplats)??0,e.rgbMinMaxLnScaleMinMax.set(((a=(r=this.packedSplats)==null?void 0:r.splatEncoding)==null?void 0:a.rgbMin)??0,((l=(o=this.packedSplats)==null?void 0:o.splatEncoding)==null?void 0:l.rgbMax)??1,((c=(A=this.packedSplats)==null?void 0:A.splatEncoding)==null?void 0:c.lnScaleMin)??Rn,((u=(h=this.packedSplats)==null?void 0:h.splatEncoding)==null?void 0:u.lnScaleMax)??Ln),e}}),this.packedSplats=t}}class Fo extends Bm{constructor(t,e){super(),this.ordering=t,this.setAttribute("position",new Xe(pC,3)),this.setIndex(new Xe(gC,1)),this._maxInstanceCount=t.length,this.instanceCount=e,this.attribute=new fm(t,1,!1,1),this.attribute.setUsage(jh),this.setAttribute("splatIndex",this.attribute)}update(t,e){this.ordering=t,this.attribute.array=t,this.instanceCount=e,this.attribute.addUpdateRange(0,e),this.attribute.needsUpdate=!0}}const pC=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),gC=new Uint16Array([0,1,2,0,2,3]),oA=class ds{constructor(t){if(this.lastTime=null,this.encodeLinear=!1,this.superXY=1,this.display=null,this.sorting=null,this.pending=null,this.sortingCheck=!1,this.readback16=new Uint16Array(0),this.readback32=new Uint32Array(0),this.spark=t.spark,this.camera=t.camera,this.viewToWorld=t.viewToWorld??new Ht,t.target){const{width:e,height:n,doubleBuffer:s}=t.target,r=Math.max(1,Math.min(4,t.target.superXY??1));if(this.superXY=r,e*r>8192||n*r>8192)throw new Error("Target size too large");this.target=new gn(e*r,n*r,{format:_e,type:Oe,colorSpace:Ze}),s&&(this.back=new gn(e*r,n*r,{format:_e,type:Oe,colorSpace:Ze})),this.encodeLinear=!0}this.onTextureUpdated=t.onTextureUpdated,this.sortRadial=t.sortRadial??!0,this.sortDistance=t.sortDistance,this.sortCoorient=t.sortCoorient,this.depthBias=t.depthBias,this.sort360=t.sort360,this.sort32=t.sort32,this.stochastic=t.stochastic??!1,this.orderingFreelist=new YI({allocate:e=>new Uint32Array(e),valid:(e,n)=>e.length===n}),this.autoUpdate=!1,this.setAutoUpdate(t.autoUpdate??!1)}dispose(){var t;this.setAutoUpdate(!1),this.target&&(this.target.dispose(),this.target=void 0),this.back&&(this.back.dispose(),this.back=void 0),this.display&&(this.spark.releaseAccumulator(this.display.accumulator),this.display.geometry.dispose(),this.display=null),(t=this.pending)!=null&&t.accumulator&&(this.spark.releaseAccumulator(this.pending.accumulator),this.pending=null)}setAutoUpdate(t){!this.autoUpdate&&t?this.spark.autoViewpoints.push(this):this.autoUpdate&&!t&&(this.spark.autoViewpoints=this.spark.autoViewpoints.filter(e=>e!==this)),this.autoUpdate=t}async prepare({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}){var a;for(n?this.viewToWorld=n:(this.camera=e??this.camera,this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone()));s??!0;){const l=r?this.viewToWorld:void 0;if(this.spark.updateInternal({scene:t,originToWorld:l}))break;await new Promise(c=>setTimeout(c,10))}const o=this.spark.active;o!==((a=this.display)==null?void 0:a.accumulator)&&(this.spark.active.refCount+=1),await this.sortUpdate({accumulator:o,viewToWorld:this.viewToWorld})}renderTarget({scene:t,camera:e}){var n;const s=this.back??this.target;if(!s)throw new Error("Must initialize SparkViewpoint with target");if(e=e??this.camera,!e)throw new Error("Must provide camera");if(e instanceof Le){const r=new Le().copy(e,!1);r.aspect=s.width/s.height,r.updateProjectionMatrix(),e=r}this.viewToWorld=e.matrixWorld.clone();try{this.spark.renderer.setRenderTarget(s),this.spark.prepareViewpoint(this),this.spark.renderer.render(t,e)}finally{this.spark.prepareViewpoint(this.spark.defaultView),this.spark.renderer.setRenderTarget(null)}s!==this.target&&([this.target,this.back]=[this.back,this.target]),(n=this.onTextureUpdated)==null||n.call(this,s.texture)}async readTarget(){if(!this.target)throw new Error("Must initialize SparkViewpoint with target");const{width:t,height:e}=this.target,n=t*e*4;(!this.superPixels||this.superPixels.length<n)&&(this.superPixels=new Uint8Array(n)),await this.spark.renderer.readRenderTargetPixelsAsync(this.target,0,0,t,e,this.superPixels);const{superXY:s}=this;if(s===1)return this.superPixels;const r=t/s,a=e/s,o=r*a*4;(!this.pixels||this.pixels.length<o)&&(this.pixels=new Uint8Array(o));const{superPixels:l,pixels:A}=this,c=s*s;for(let h=0;h<a;h++){const u=h*r;for(let p=0;p<r;p++){const g=p*s;let m=0,f=0,d=0,_=0;for(let v=0;v<s;v++){const Q=(h*s+v)*this.target.width;for(let b=0;b<s;b++){const S=(Q+g+b)*4;m+=l[S],f+=l[S+1],d+=l[S+2],_+=l[S+3]}}const E=(u+p)*4;A[E]=m/c,A[E+1]=f/c,A[E+2]=d/c,A[E+3]=_/c}}return A}async prepareRenderPixels({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}){return await this.prepare({scene:t,camera:e,viewToWorld:n,update:s,forceOrigin:r}),this.renderTarget({scene:t,camera:e}),this.readTarget()}autoPoll({accumulator:t}){var e,n,s;this.camera&&(this.camera.updateMatrixWorld(),this.viewToWorld=this.camera.matrixWorld.clone());let r=!1,a=!1;if(!this.display)r=!0;else if(t){r=!0;const{mappingVersion:l}=this.display.accumulator;t.mappingVersion===l&&(t.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=t,this.display.viewToWorld.copy(this.viewToWorld),a=!0,this.spark.viewpoint===this&&this.spark.prepareViewpoint(this))}const o=((e=this.sorting)==null?void 0:e.viewToWorld)??((n=this.display)==null?void 0:n.viewToWorld);o&&!Do({matrix1:this.viewToWorld,matrix2:o,maxDistance:this.sortDistance??.01,minCoorient:this.sortCoorient??this.sortRadial?.99:.999})&&(r=!0),r&&(t&&(t.refCount+=1),(s=this.pending)!=null&&s.accumulator&&this.spark.releaseAccumulator(this.pending.accumulator),this.pending={accumulator:t,viewToWorld:this.viewToWorld,displayed:a},this.driveSort())}async driveSort(){for(var t;;){if(this.sorting||!this.pending)return;const{viewToWorld:e,displayed:n}=this.pending;let s=this.pending.accumulator;if(s||(s=((t=this.display)==null?void 0:t.accumulator)??this.spark.active,s.refCount+=1),this.pending=null,!s)throw new Error("No accumulator to sort");this.sorting={viewToWorld:e},await this.sortUpdate({accumulator:s,viewToWorld:e,displayed:n}),this.sorting=null,this.spark.releaseAccumulator(s)}}async sortUpdate({accumulator:t,viewToWorld:e,displayed:n=!1}){if(this.sortingCheck)throw new Error("Only one sort at a time");this.sortingCheck=!0,t=t??this.spark.active;const{numSplats:s,maxSplats:r}=t.splats;let a=0,o=this.orderingFreelist.alloc(r);if(this.stochastic){a=s;for(let l=0;l<s;++l)o[l]=l}else if(s>0){const{reader:l,doubleSortReader:A,sort32Reader:c,dynoSortRadial:h,dynoOrigin:u,dynoDirection:p,dynoDepthBias:g,dynoSort360:m,dynoSplats:f}=ds.makeSorter(),d=this.sort32??!1;let _;if(d)this.readback32=l.ensureBuffer(r,this.readback32),_=this.readback32;else{const T=Math.ceil(r/2);this.readback16=l.ensureBuffer(T,this.readback16),_=this.readback16}const E=t.toWorld.clone().invert(),v=e.clone().premultiply(E);h.value=this.sort360?!0:this.sortRadial,u.value.set(0,0,0).applyMatrix4(v),p.value.set(0,0,-1).applyMatrix4(v).sub(u.value).normalize(),g.value=this.depthBias??1,m.value=this.sort360??!1,f.packedSplats=t.splats;const Q=d?c:A,b=d?s:Math.ceil(s/2);await l.renderReadback({renderer:this.spark.renderer,reader:Q,count:b,readback:_});const S=await oi(async T=>{const Y=d?"sort32Splats":"sortDoubleSplats";return T.call(Y,{maxSplats:r,numSplats:s,readback:_,ordering:o})});d?this.readback32=S.readback:this.readback16=S.readback,o=S.ordering,a=S.activeSplats}this.updateDisplay({accumulator:t,viewToWorld:e,ordering:o,activeSplats:a,displayed:n}),this.sortingCheck=!1}updateDisplay({accumulator:t,viewToWorld:e,ordering:n,activeSplats:s,displayed:r=!1}){if(!this.display)t.refCount+=1,this.display={accumulator:t,viewToWorld:e,geometry:new Fo(n,s)};else{!r&&t!==this.display.accumulator&&(t.refCount+=1,this.spark.releaseAccumulator(this.display.accumulator),this.display.accumulator=t),this.display.viewToWorld=e;const a=this.display.geometry.ordering;a.length===n.length?this.display.geometry.update(n,s):(this.display.geometry.dispose(),this.display.geometry=new Fo(n,s)),this.orderingFreelist.free(a)}this.spark.viewpoint===this&&this.spark.prepareViewpoint(this)}static makeSorter(){if(!ds.dynos){const t=new _l({value:!0}),e=new vr({value:new w}),n=new vr({value:new w}),s=new Cs({value:1}),r=new _l({value:!1}),a=new aA,o=new Oc,l=Nn({index:"int"},{rgba8:"vec4"},({index:c})=>{if(!c)throw new Error("No index");const h={sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},u=us(c,gs("int",2)),p=ms(a,u),g=Fa({gsplat:p,...h}),m=ms(a,ci(u,gs("int",1))),f=Fa({gsplat:m,...h}),d=EE({vectorType:"vec2",x:g,y:f});return{rgba8:wl(dE(d))}}),A=Nn({index:"int"},{rgba8:"vec4"},({index:c})=>{if(!c)throw new Error("No index");const h={sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},u=ms(a,c),p=Fa({gsplat:u,...h});return{rgba8:wl(uE(p))}});ds.dynos={dynoSortRadial:t,dynoOrigin:e,dynoDirection:n,dynoDepthBias:s,dynoSort360:r,dynoSplats:a,reader:o,doubleSortReader:l,sort32Reader:A}}return ds.dynos}};oA.EMPTY_TEXTURE=new Me;oA.dynos=null;let Rl=oA;const mC=Ye(`
  float computeSort(Gsplat gsplat, bool sortRadial, vec3 sortOrigin, vec3 sortDirection, float sortDepthBias, bool sort360) {
    if (!isGsplatActive(gsplat.flags)) {
      return INFINITY;
    }

    vec3 center = gsplat.center - sortOrigin;
    float biasedDepth = dot(center, sortDirection) + sortDepthBias;
    if (!sort360 && (biasedDepth <= 0.0)) {
      return INFINITY;
    }

    return sortRadial ? length(center) : biasedDepth;
  }
`);function Fa({gsplat:i,sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r}){return Nr({inTypes:{gsplat:pe,sortRadial:"bool",sortOrigin:"vec3",sortDirection:"vec3",sortDepthBias:"float",sort360:"bool"},outTypes:{metric:"float"},globals:()=>[En,mC],inputs:{gsplat:i,sortRadial:t,sortOrigin:e,sortDirection:n,sortDepthBias:s,sort360:r},statements:({inputs:a,outputs:o})=>{const{gsplat:l,sortRadial:A,sortOrigin:c,sortDirection:h,sortDepthBias:u,sort360:p}=a;return In(`
        ${o.metric} = computeSort(${l}, ${A}, ${c}, ${h}, ${u}, ${p});
      `)}}).outputs.metric}class Pa{constructor(){this.splats=new mi,this.toWorld=new Ht,this.mapping=[],this.refCount=0,this.splatsVersion=-1,this.mappingVersion=-1}ensureGenerate(t){this.splats.ensureGenerate(t)&&(this.mapping=[])}generateSplats({renderer:t,modifier:e,generators:n,forceUpdate:s,originToWorld:r}){const a=this.mapping.reduce((A,c)=>(A.set(c.node,c),A),new Map);let o=0,l=0;for(const{node:A,generator:c,version:h,base:u,count:p}of n){const g=a.get(A);if((s||c!==g?.generator||h!==g?.version||u!==g?.base||p!==g?.count)&&c&&p>0){const m=e.apply(c);try{this.splats.generate({generator:m,base:u,count:p,renderer:t})}catch(f){A.generator=void 0,A.generatorError=f}o+=1}l=Math.max(l,u+p)}return this.splats.numSplats=l,this.toWorld.copy(r),this.mapping=n,o!==0}hasCorrespondence(t){return this.mapping.length!==t.mapping.length?!1:this.mapping.every(({node:e,base:n,count:s},r)=>{const{node:a,base:o,count:l}=t.mapping[r];return e===a&&n===o&&s===l})}}var IC=`const float LN_SCALE_MIN = -12.0;
const float LN_SCALE_MAX = 9.0;

const uint SPLAT_TEX_WIDTH_BITS = 11u;
const uint SPLAT_TEX_HEIGHT_BITS = 11u;
const uint SPLAT_TEX_DEPTH_BITS = 11u;
const uint SPLAT_TEX_LAYER_BITS = SPLAT_TEX_WIDTH_BITS + SPLAT_TEX_HEIGHT_BITS;

const uint SPLAT_TEX_WIDTH = 1u << SPLAT_TEX_WIDTH_BITS;
const uint SPLAT_TEX_HEIGHT = 1u << SPLAT_TEX_HEIGHT_BITS;
const uint SPLAT_TEX_DEPTH = 1u << SPLAT_TEX_DEPTH_BITS;

const uint SPLAT_TEX_WIDTH_MASK = SPLAT_TEX_WIDTH - 1u;
const uint SPLAT_TEX_HEIGHT_MASK = SPLAT_TEX_HEIGHT - 1u;
const uint SPLAT_TEX_DEPTH_MASK = SPLAT_TEX_DEPTH - 1u;

const uint F16_INF = 0x7c00u;
const float PI = 3.1415926535897932384626433832795;

const float INFINITY = 1.0 / 0.0;
const float NEG_INFINITY = -INFINITY;

float sqr(float x) {
    return x * x;
}

float pow4(float x) {
    float x2 = x * x;
    return x2 * x2;
}

float pow8(float x) {
    float x4 = pow4(x);
    return x4 * x4;
}

vec3 srgbToLinear(vec3 rgb) {
    return pow(rgb, vec3(2.2));
}

vec3 linearToSrgb(vec3 rgb) {
    return pow(rgb, vec3(1.0 / 2.2));
}

uint encodeQuatOctXy88R8(vec4 q) {
    
    if (q.w < 0.0) {
        q = -q;
    }
    
    float theta = 2.0 * acos(q.w);
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    
    vec3 axis = (abs(s) < 1e-6) ? vec3(1.0, 0.0, 0.0) : q.xyz / s;
    
    
    
    float sum = abs(axis.x) + abs(axis.y) + abs(axis.z);
    vec2 p = vec2(axis.x, axis.y) / sum;
    
    if (axis.z < 0.0) {
        float oldPx = p.x;
        p.x = (1.0 - abs(p.y)) * (p.x >= 0.0 ? 1.0 : -1.0);
        p.y = (1.0 - abs(oldPx)) * (p.y >= 0.0 ? 1.0 : -1.0);
    }
    
    float u_f = p.x * 0.5 + 0.5;
    float v_f = p.y * 0.5 + 0.5;
    
    uint quantU = uint(clamp(round(u_f * 255.0), 0.0, 255.0));
    uint quantV = uint(clamp(round(v_f * 255.0), 0.0, 255.0));
    
    
    
    uint angleInt = uint(clamp(round((theta / 3.14159265359) * 255.0), 0.0, 255.0));
    
    
    return (angleInt << 16u) | (quantV << 8u) | quantU;
}

vec4 decodeQuatOctXy88R8(uint encoded) {
    
    uint quantU = encoded & uint(0xFFu);               
    uint quantV = (encoded >> 8u) & uint(0xFFu);         
    uint angleInt = encoded >> 16u;                      

    
    float u_f = float(quantU) / 255.0;
    float v_f = float(quantV) / 255.0;
    vec2 f = vec2(u_f * 2.0 - 1.0, v_f * 2.0 - 1.0);

    vec3 axis = vec3(f.xy, 1.0 - abs(f.x) - abs(f.y));
    float t = max(-axis.z, 0.0);
    axis.x += (axis.x >= 0.0) ? -t : t;
    axis.y += (axis.y >= 0.0) ? -t : t;
    axis = normalize(axis);
    
    
    float theta = (float(angleInt) / 255.0) * 3.14159265359;
    float halfTheta = theta * 0.5;
    float s = sin(halfTheta);
    float w = cos(halfTheta);
    
    return vec4(axis * s, w);
}

    

    

    

    

    

    

    

    

    

    

uvec4 packSplatEncoding(
    vec3 center, vec3 scales, vec4 quaternion, vec4 rgba, vec4 rgbMinMaxLnScaleMinMax
) {
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    vec3 encRgb = (rgba.rgb - vec3(rgbMin)) / (rgbMax - rgbMin);
    uvec4 uRgba = uvec4(round(clamp(vec4(encRgb, rgba.a) * 255.0, 0.0, 255.0)));

    uint uQuat = encodeQuatOctXy88R8(quaternion);
    
    
    uvec3 uQuat3 = uvec3(uQuat & 0xffu, (uQuat >> 8u) & 0xffu, (uQuat >> 16u) & 0xffu);

    
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = 254.0 / (lnScaleMax - lnScaleMin);
    uvec3 uScales = uvec3(
        (scales.x == 0.0) ? 0u : uint(round(clamp((log(scales.x) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.y == 0.0) ? 0u : uint(round(clamp((log(scales.y) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u,
        (scales.z == 0.0) ? 0u : uint(round(clamp((log(scales.z) - lnScaleMin) * lnScaleScale, 0.0, 254.0))) + 1u
    );

    
    uint word0 = uRgba.r | (uRgba.g << 8u) | (uRgba.b << 16u) | (uRgba.a << 24u);
    uint word1 = packHalf2x16(center.xy);
    uint word2 = packHalf2x16(vec2(center.z, 0.0)) | (uQuat3.x << 16u) | (uQuat3.y << 24u);
    uint word3 = uScales.x | (uScales.y << 8u) | (uScales.z << 16u) | (uQuat3.z << 24u);
    return uvec4(word0, word1, word2, word3);
}

uvec4 packSplat(vec3 center, vec3 scales, vec4 quaternion, vec4 rgba) {
    return packSplatEncoding(center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

void unpackSplatEncoding(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba, vec4 rgbMinMaxLnScaleMinMax) {
    uint word0 = packed.x, word1 = packed.y, word2 = packed.z, word3 = packed.w;

    uvec4 uRgba = uvec4(word0 & 0xffu, (word0 >> 8u) & 0xffu, (word0 >> 16u) & 0xffu, (word0 >> 24u) & 0xffu);
    float rgbMin = rgbMinMaxLnScaleMinMax.x;
    float rgbMax = rgbMinMaxLnScaleMinMax.y;
    rgba = (vec4(uRgba) / 255.0);
    rgba.rgb = rgba.rgb * (rgbMax - rgbMin) + rgbMin;

    center = vec4(
        unpackHalf2x16(word1),
        unpackHalf2x16(word2 & 0xffffu)
    ).xyz;

    uvec3 uScales = uvec3(word3 & 0xffu, (word3 >> 8u) & 0xffu, (word3 >> 16u) & 0xffu);
    float lnScaleMin = rgbMinMaxLnScaleMinMax.z;
    float lnScaleMax = rgbMinMaxLnScaleMinMax.w;
    float lnScaleScale = (lnScaleMax - lnScaleMin) / 254.0;
    scales = vec3(
        (uScales.x == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.x - 1u) * lnScaleScale),
        (uScales.y == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.y - 1u) * lnScaleScale),
        (uScales.z == 0u) ? 0.0 : exp(lnScaleMin + float(uScales.z - 1u) * lnScaleScale)
    );

    uint uQuat = ((word2 >> 16u) & 0xFFFFu) | ((word3 >> 8u) & 0xFF0000u);
    quaternion = decodeQuatOctXy88R8(uQuat);
    
    
}

void unpackSplat(uvec4 packed, out vec3 center, out vec3 scales, out vec4 quaternion, out vec4 rgba) {
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, vec4(0.0, 1.0, LN_SCALE_MIN, LN_SCALE_MAX));
}

vec3 quatVec(vec4 q, vec3 v) {
    
    vec3 t = 2.0 * cross(q.xyz, v);
    return v + q.w * t + cross(q.xyz, t);
}

vec4 quatQuat(vec4 q1, vec4 q2) {
    return vec4(
        q1.w * q2.x + q1.x * q2.w + q1.y * q2.z - q1.z * q2.y,
        q1.w * q2.y - q1.x * q2.z + q1.y * q2.w + q1.z * q2.x,
        q1.w * q2.z + q1.x * q2.y - q1.y * q2.x + q1.z * q2.w,
        q1.w * q2.w - q1.x * q2.x - q1.y * q2.y - q1.z * q2.z
    );
}

mat3 scaleQuaternionToMatrix(vec3 s, vec4 q) {
    
    return mat3(
        s.x * (1.0 - 2.0 * (q.y * q.y + q.z * q.z)),
        s.x * (2.0 * (q.x * q.y + q.w * q.z)),
        s.x * (2.0 * (q.x * q.z - q.w * q.y)),
        s.y * (2.0 * (q.x * q.y - q.w * q.z)),
        s.y * (1.0 - 2.0 * (q.x * q.x + q.z * q.z)),
        s.y * (2.0 * (q.y * q.z + q.w * q.x)),
        s.z * (2.0 * (q.x * q.z + q.w * q.y)),
        s.z * (2.0 * (q.y * q.z - q.w * q.x)),
        s.z * (1.0 - 2.0 * (q.x * q.x + q.y * q.y))
    );
}

vec4 slerp(vec4 q1, vec4 q2, float t) {
    
    float cosHalfTheta = dot(q1, q2);

    
    if (abs(cosHalfTheta) >= 0.999) {
        return q1;
    }
    
    
    
    if (cosHalfTheta < 0.0) {
        q2 = -q2;
        cosHalfTheta = -cosHalfTheta;
    }

    
    float halfTheta = acos(cosHalfTheta);
    float sinHalfTheta = sqrt(1.0 - cosHalfTheta * cosHalfTheta);

    
    float ratioA = sin((1.0 - t) * halfTheta) / sinHalfTheta;
    float ratioB = sin(t * halfTheta) / sinHalfTheta;

    
    return q1 * ratioA + q2 * ratioB;
}

ivec3 splatTexCoord(int index) {
    uint x = uint(index) & SPLAT_TEX_WIDTH_MASK;
    uint y = (uint(index) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK;
    uint z = uint(index) >> SPLAT_TEX_LAYER_BITS;
    return ivec3(x, y, z);
}`,EC=`precision highp float;
precision highp int;

#include <splatDefines>
#include <logdepthbuf_pars_fragment>

uniform float near;
uniform float far;
uniform bool encodeLinear;
uniform float time;
uniform bool debugFlag;
uniform float maxStdDev;
uniform float minAlpha;
uniform bool stochastic;
uniform bool disableFalloff;
uniform float falloff;

uniform bool splatTexEnable;
uniform sampler3D splatTexture;
uniform mat2 splatTexMul;
uniform vec2 splatTexAdd;
uniform float splatTexNear;
uniform float splatTexFar;
uniform float splatTexMid;

out vec4 fragColor;

in vec4 vRgba;
in vec2 vSplatUv;
in vec3 vNdc;
flat in uint vSplatIndex;

void main() {
    vec4 rgba = vRgba;

    float z = dot(vSplatUv, vSplatUv);
    if (!splatTexEnable) {
        if (z > (maxStdDev * maxStdDev)) {
            discard;
        }
    } else {
        vec2 uv = splatTexMul * vSplatUv + splatTexAdd;
        float ndcZ = vNdc.z;
        float depth = (2.0 * near * far) / (far + near - ndcZ * (far - near));
        float clampedFar = max(splatTexFar, splatTexNear);
        float clampedDepth = clamp(depth, splatTexNear, clampedFar);
        float logDepth = log2(clampedDepth + 1.0);
        float logNear = log2(splatTexNear + 1.0);
        float logFar = log2(clampedFar + 1.0);

        float texZ;
        if (splatTexMid > 0.0) {
            float clampedMid = clamp(splatTexMid, splatTexNear, clampedFar);
            float logMid = log2(clampedMid + 1.0);
            texZ = (clampedDepth <= clampedMid) ?
                (0.5 * ((logDepth - logNear) / (logMid - logNear))) :
                (0.5 * ((logDepth - logMid) / (logFar - logMid)) + 0.5);
        } else {
            texZ = (logDepth - logNear) / (logFar - logNear);
        }

        vec4 modulate = texture(splatTexture, vec3(uv, 1.0 - texZ));
        rgba *= modulate;
    }

    rgba.a *= mix(1.0, exp(-0.5 * z), falloff);

    if (rgba.a < minAlpha) {
        discard;
    }
    if (encodeLinear) {
        rgba.rgb = srgbToLinear(rgba.rgb);
    }

    if (stochastic) {
        const bool STEADY = false;
        uint uTime = STEADY ? 0u : floatBitsToUint(time);
        uvec2 coord = uvec2(gl_FragCoord.xy);
        uint state = uTime + 0x9e3779b9u * coord.x + 0x85ebca6bu * coord.y + 0xc2b2ae35u * uint(vSplatIndex);
        state = state * 747796405u + 2891336453u;
        uint hash = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
        hash = (hash >> 22u) ^ hash;
        float rand = float(hash) / 4294967296.0;
        if (rand < rgba.a) {
            fragColor = vec4(rgba.rgb, 1.0);
        } else {
            discard;
        }
    } else {
        #ifdef PREMULTIPLIED_ALPHA
            fragColor = vec4(rgba.rgb * rgba.a, rgba.a);
        #else
            fragColor = rgba;
        #endif
    }
    #include <logdepthbuf_fragment>
}`,CC=`precision highp float;
precision highp int;
precision highp usampler2DArray;

#include <splatDefines>
#include <logdepthbuf_pars_vertex>

attribute uint splatIndex;

out vec4 vRgba;
out vec2 vSplatUv;
out vec3 vNdc;
flat out uint vSplatIndex;

uniform vec2 renderSize;
uniform uint numSplats;
uniform vec4 renderToViewQuat;
uniform vec3 renderToViewPos;
uniform float maxStdDev;
uniform float minPixelRadius;
uniform float maxPixelRadius;
uniform float time;
uniform float deltaTime;
uniform bool debugFlag;
uniform float minAlpha;
uniform bool stochastic;
uniform bool enable2DGS;
uniform float blurAmount;
uniform float preBlurAmount;
uniform float focalDistance;
uniform float apertureAngle;
uniform float clipXY;
uniform float focalAdjustment;

uniform usampler2DArray packedSplats;
uniform vec4 rgbMinMaxLnScaleMinMax;

#ifdef USE_LOGDEPTHBUF
    bool isPerspectiveMatrix( mat4 m ) {
      return m[ 2 ][ 3 ] == - 1.0;
    }
#endif

void main() {
    
    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);

    if (uint(gl_InstanceID) >= numSplats) {
        return;
    }

    ivec3 texCoord;
    if (stochastic) {
        texCoord = ivec3(
            uint(gl_InstanceID) & SPLAT_TEX_WIDTH_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            (uint(gl_InstanceID) >> SPLAT_TEX_LAYER_BITS)
        );
    } else {
        if (splatIndex == 0xffffffffu) {
            
            return;
        }
        texCoord = ivec3(
            splatIndex & SPLAT_TEX_WIDTH_MASK,
            (splatIndex >> SPLAT_TEX_WIDTH_BITS) & SPLAT_TEX_HEIGHT_MASK,
            splatIndex >> SPLAT_TEX_LAYER_BITS
        );
    }
    uvec4 packed = texelFetch(packedSplats, texCoord, 0);

    vec3 center, scales;
    vec4 quaternion, rgba;
    unpackSplatEncoding(packed, center, scales, quaternion, rgba, rgbMinMaxLnScaleMinMax);

    if (rgba.a < minAlpha) {
        return;
    }
    bvec3 zeroScales = equal(scales, vec3(0.0));
    if (all(zeroScales)) {
        return;
    }

    
    vec3 viewCenter = quatVec(renderToViewQuat, center) + renderToViewPos;

    
    if (viewCenter.z >= 0.0) {
        return;
    }

    
    vec4 clipCenter = projectionMatrix * vec4(viewCenter, 1.0);

    
    if (abs(clipCenter.z) >= clipCenter.w) {
        return;
    }

    
    float clip = clipXY * clipCenter.w;
    if (abs(clipCenter.x) > clip || abs(clipCenter.y) > clip) {
        return;
    }

    
    vSplatIndex = splatIndex;

    
    vec4 viewQuaternion = quatQuat(renderToViewQuat, quaternion);

    if (enable2DGS && any(zeroScales)) {
        vRgba = rgba;
        vSplatUv = position.xy * maxStdDev;

        vec3 offset;
        if (zeroScales.z) {
            offset = vec3(vSplatUv.xy * scales.xy, 0.0);
        } else if (zeroScales.y) {
            offset = vec3(vSplatUv.x * scales.x, 0.0, vSplatUv.y * scales.z);
        } else {
            offset = vec3(0.0, vSplatUv.xy * scales.yz);
        }

        vec3 viewPos = viewCenter + quatVec(viewQuaternion, offset);
        gl_Position = projectionMatrix * vec4(viewPos, 1.0);
        vNdc = gl_Position.xyz / gl_Position.w;
        return;
    }

    
    vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

    
    mat3 RS = scaleQuaternionToMatrix(scales, viewQuaternion);
    mat3 cov3D = RS * transpose(RS);

    
    vec2 scaledRenderSize = renderSize * focalAdjustment;
    vec2 focal = 0.5 * scaledRenderSize * vec2(projectionMatrix[0][0], projectionMatrix[1][1]);

    mat3 J;
    if(isOrthographic) {
        J = mat3(
            focal.x, 0.0, 0.0,
            0.0, focal.y, 0.0,
            0.0, 0.0, 0.0
        );
    } else {
        float invZ = 1.0 / viewCenter.z;
        vec2 J1 = focal * invZ;
        vec2 J2 = -(J1 * viewCenter.xy) * invZ;
        J = mat3(
            J1.x, 0.0, J2.x,
            0.0, J1.y, J2.y,
            0.0, 0.0, 0.0
        );
    }

    
    
    
    
    
    
    
    mat3 cov2D = transpose(J) * cov3D * J;
    float a = cov2D[0][0];
    float d = cov2D[1][1];
    float b = cov2D[0][1];

    
    a += preBlurAmount;
    d += preBlurAmount;

    float fullBlurAmount = blurAmount;
    if ((focalDistance > 0.0) && (apertureAngle > 0.0)) {
        float focusRadius = maxPixelRadius;
        if (viewCenter.z < 0.0) {
            float focusBlur = abs((-viewCenter.z - focalDistance) / viewCenter.z);
            float apertureRadius = focal.x * tan(0.5 * apertureAngle);
            focusRadius = focusBlur * apertureRadius;
        }
        fullBlurAmount = clamp(sqr(focusRadius), blurAmount, sqr(maxPixelRadius));
    }

    
    float detOrig = a * d - b * b;
    a += fullBlurAmount;
    d += fullBlurAmount;
    float det = a * d - b * b;

    
    float blurAdjust = sqrt(max(0.0, detOrig / det));
    rgba.a *= blurAdjust;
    if (rgba.a < minAlpha) {
        return;
    }

    
    float eigenAvg = 0.5 * (a + d);
    float eigenDelta = sqrt(max(0.0, eigenAvg * eigenAvg - det));
    float eigen1 = eigenAvg + eigenDelta;
    float eigen2 = eigenAvg - eigenDelta;

    vec2 eigenVec1 = normalize(vec2((abs(b) < 0.001) ? 1.0 : b, eigen1 - a));
    vec2 eigenVec2 = vec2(eigenVec1.y, -eigenVec1.x);

    float scale1 = min(maxPixelRadius, maxStdDev * sqrt(eigen1));
    float scale2 = min(maxPixelRadius, maxStdDev * sqrt(eigen2));
    if (scale1 < minPixelRadius && scale2 < minPixelRadius) {
        return;
    }

    
    vec2 pixelOffset = position.x * eigenVec1 * scale1 + position.y * eigenVec2 * scale2;
    vec2 ndcOffset = (2.0 / scaledRenderSize) * pixelOffset;
    vec3 ndc = vec3(ndcCenter.xy + ndcOffset, ndcCenter.z);

    vRgba = rgba;
    vSplatUv = position.xy * maxStdDev;
    vNdc = ndc;
    gl_Position = vec4(ndc.xy * clipCenter.w, clipCenter.zw);
    #include <logdepthbuf_vertex>
}`;let ka=null;function xC(){return ka||(Ft.splatDefines=IC,ka={splatVertex:CC,splatFragment:EC}),ka}const Ll=5,Or=class be extends we{constructor(t){const e=be.makeUniforms(),n=xC(),s=t.premultipliedAlpha??!0,r=new cn({glslVersion:mr,vertexShader:n.splatVertex,fragmentShader:n.splatFragment,uniforms:e,premultipliedAlpha:s,transparent:!0,depthTest:!0,depthWrite:!1,side:dn});super(Ul,r),this.splatTexture=null,this.autoViewpoints=[],this.rotateToAccumulator=new kr({value:new ae}),this.translateToAccumulator=new vr({value:new w}),this.lastFrame=-1,this.lastUpdateTime=null,this.defaultCameras=[],this.lastStochastic=null,this.pendingUpdate={scene:null,originToWorld:new Ht,timeoutId:-1},this.envViewpoint=null,this.frustumCulled=!1,this.renderer=t.renderer,this.material=r,this.uniforms=e;const a=Nn({gsplat:pe},{gsplat:pe},({gsplat:o})=>{if(!o)throw new Error("gsplat not defined");return o=Nc(o,{rotate:this.rotateToAccumulator,translate:this.translateToAccumulator}),{gsplat:o}});this.modifier=new kE(a),this.premultipliedAlpha=s,this.autoUpdate=t.autoUpdate??!0,this.preUpdate=t.preUpdate??!1,this.needsUpdate=!1,this.originDistance=t.originDistance??1,this.maxStdDev=t.maxStdDev??Math.sqrt(8),this.minPixelRadius=t.minPixelRadius??0,this.maxPixelRadius=t.maxPixelRadius??512,this.minAlpha=t.minAlpha??.5*(1/255),this.enable2DGS=t.enable2DGS??!1,this.preBlurAmount=t.preBlurAmount??0,this.blurAmount=t.blurAmount??.3,this.focalDistance=t.focalDistance??0,this.apertureAngle=t.apertureAngle??0,this.falloff=t.falloff??1,this.clipXY=t.clipXY??1.4,this.focalAdjustment=t.focalAdjustment??1,this.splatEncoding=t.splatEncoding??{...zr},this.active=new Pa,this.active.refCount=1,this.accumulatorCount=1,this.freeAccumulators=[];for(let o=0;o<1;++o)this.freeAccumulators.push(new Pa),this.accumulatorCount+=1;this.defaultView=new Rl({...t.view,autoUpdate:!0,spark:this}),this.viewpoint=this.defaultView,this.prepareViewpoint(this.viewpoint),this.clock=t.clock?jI(t.clock):new Cc}static makeUniforms(){return{renderSize:{value:new vt},near:{value:.1},far:{value:1e3},numSplats:{value:0},renderToViewQuat:{value:new ae},renderToViewPos:{value:new w},maxStdDev:{value:1},minPixelRadius:{value:0},maxPixelRadius:{value:512},minAlpha:{value:.00196078431372549},stochastic:{value:!1},enable2DGS:{value:!1},preBlurAmount:{value:0},blurAmount:{value:.3},focalDistance:{value:0},apertureAngle:{value:0},falloff:{value:1},clipXY:{value:1.4},focalAdjustment:{value:1},splatTexEnable:{value:!1},splatTexture:{type:"t",value:be.EMPTY_SPLAT_TEXTURE},splatTexMul:{value:new Lr},splatTexAdd:{value:new vt},splatTexNear:{value:.1},splatTexFar:{value:1e3},splatTexMid:{value:0},packedSplats:{type:"t",value:mi.getEmpty()},rgbMinMaxLnScaleMinMax:{value:new Gt},time:{value:0},deltaTime:{value:0},encodeLinear:{value:!1},debugFlag:{value:!1}}}canAllocAccumulator(){return this.freeAccumulators.length>0||this.accumulatorCount<Ll}maybeAllocAccumulator(){let t=this.freeAccumulators.pop();if(t===void 0){if(this.accumulatorCount>=Ll)return null;t=new Pa,this.accumulatorCount+=1}return t.refCount=1,t}releaseAccumulator(t){t.refCount-=1,t.refCount===0&&this.freeAccumulators.push(t)}newViewpoint(t){return new Rl({...t,spark:this})}onBeforeRender(t,e,n){var s,r;const a=this.time??this.clock.getElapsedTime(),o=a-(this.viewpoint.lastTime??a);this.viewpoint.lastTime=a;const l=t.info.render.frame,A=l!==this.lastFrame;this.lastFrame=l;const c=this.viewpoint;if(c===this.defaultView){if(A)if(!t.xr.isPresenting)this.defaultView.viewToWorld=n.matrixWorld.clone(),this.defaultCameras=[this.defaultView.viewToWorld];else{const m=t.xr.getCamera().cameras;this.defaultCameras=m.map(f=>f.matrixWorld),this.defaultView.viewToWorld=yC(this.defaultCameras)??new Ht}this.autoUpdate&&this.update({scene:e,viewToWorld:this.defaultView.viewToWorld})}if(A&&(this.material.premultipliedAlpha!==this.premultipliedAlpha&&(this.material.premultipliedAlpha=this.premultipliedAlpha,this.material.needsUpdate=!0),this.uniforms.time.value=a,this.uniforms.deltaTime.value=o,this.uniforms.debugFlag.value=performance.now()/1e3%2<1,c.display&&c.stochastic&&(this.geometry.instanceCount=this.uniforms.numSplats.value)),c.target)this.uniforms.renderSize.value.set(c.target.width,c.target.height);else{const m=t.getDrawingBufferSize(this.uniforms.renderSize.value);if(m.x===1&&m.y===1){const f=(s=t.xr.getSession())==null?void 0:s.renderState.baseLayer;f&&(m.x=f.framebufferWidth,m.y=f.framebufferHeight)}}const h=n;if(this.uniforms.near.value=h.near,this.uniforms.far.value=h.far,this.uniforms.encodeLinear.value=c.encodeLinear,this.uniforms.maxStdDev.value=this.maxStdDev,this.uniforms.minPixelRadius.value=this.minPixelRadius,this.uniforms.maxPixelRadius.value=this.maxPixelRadius,this.uniforms.minAlpha.value=this.minAlpha,this.uniforms.stochastic.value=c.stochastic,this.uniforms.enable2DGS.value=this.enable2DGS,this.uniforms.preBlurAmount.value=this.preBlurAmount,this.uniforms.blurAmount.value=this.blurAmount,this.uniforms.focalDistance.value=this.focalDistance,this.uniforms.apertureAngle.value=this.apertureAngle,this.uniforms.falloff.value=this.falloff,this.uniforms.clipXY.value=this.clipXY,this.uniforms.focalAdjustment.value=this.focalAdjustment,this.lastStochastic!==!c.stochastic&&(this.lastStochastic=!c.stochastic,this.material.transparent=!c.stochastic,this.material.depthWrite=c.stochastic,this.material.needsUpdate=!0),this.splatTexture){const{enable:m,texture:f,multiply:d,add:_,near:E,far:v,mid:Q}=this.splatTexture;m&&f?(this.uniforms.splatTexEnable.value=!0,this.uniforms.splatTexture.value=f,d?this.uniforms.splatTexMul.value.fromArray(d.elements):this.uniforms.splatTexMul.value.set(.5/this.maxStdDev,0,0,.5/this.maxStdDev),this.uniforms.splatTexAdd.value.set(_?.x??.5,_?.y??.5),this.uniforms.splatTexNear.value=E??this.uniforms.near.value,this.uniforms.splatTexFar.value=v??this.uniforms.far.value,this.uniforms.splatTexMid.value=Q??0):(this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=be.EMPTY_SPLAT_TEXTURE)}else this.uniforms.splatTexEnable.value=!1,this.uniforms.splatTexture.value=be.EMPTY_SPLAT_TEXTURE;const u=((r=c.display)==null?void 0:r.accumulator.toWorld)??new Ht,p=n.matrixWorld.clone().invert();u.clone().premultiply(p).decompose(this.uniforms.renderToViewPos.value,this.uniforms.renderToViewQuat.value,new w)}prepareViewpoint(t){var e,n,s,r;if(this.viewpoint=t??this.viewpoint,this.viewpoint.display){const{accumulator:a,geometry:o}=this.viewpoint.display;this.uniforms.numSplats.value=a.splats.numSplats,this.uniforms.packedSplats.value=a.splats.getTexture(),this.uniforms.rgbMinMaxLnScaleMinMax.value.set(((e=a.splats.splatEncoding)==null?void 0:e.rgbMin)??0,((n=a.splats.splatEncoding)==null?void 0:n.rgbMax)??1,((s=a.splats.splatEncoding)==null?void 0:s.lnScaleMin)??Rn,((r=a.splats.splatEncoding)==null?void 0:r.lnScaleMax)??Ln),this.geometry=o,this.material.transparent=!this.viewpoint.stochastic,this.material.depthWrite=this.viewpoint.stochastic,this.material.needsUpdate=!0}else this.uniforms.numSplats.value=0,this.uniforms.packedSplats.value=mi.getEmpty(),this.geometry=Ul}update({scene:t,viewToWorld:e}){const n=this.matrixWorld;this.preUpdate?this.updateInternal({scene:t,originToWorld:n.clone(),viewToWorld:e}):(this.pendingUpdate.scene=t,this.pendingUpdate.originToWorld.copy(n),this.pendingUpdate.timeoutId===-1&&(this.pendingUpdate.timeoutId=setTimeout(()=>{const{scene:s,originToWorld:r}=this.pendingUpdate;this.pendingUpdate.scene=null,this.pendingUpdate.timeoutId=-1,this.updateInternal({scene:s,originToWorld:r,viewToWorld:e})&&this.renderer.getContext().flush()},1)))}updateInternal({scene:t,originToWorld:e,viewToWorld:n}){var s;if(!this.canAllocAccumulator())return!1;e||(e=this.active.toWorld),n=n??e.clone();const r=this.time??this.clock.getElapsedTime(),a=r-(this.lastUpdateTime??r);this.lastUpdateTime=r;const o=this.active.mapping.reduce((m,f)=>(m.set(f.node,f),m),new Map),{generators:l,visibleGenerators:A,globalEdits:c}=this.compileScene(t);for(const m of l)(s=m.frameUpdate)==null||s.call(m,{object:m,time:r,deltaTime:a,viewToWorld:n,globalEdits:c});const h=new Set(A.map(m=>m.uuid));for(const m of l){const f=o.get(m),_=m.generator&&h.has(m.uuid)?m.numSplats:0;(this.needsUpdate||m.generator!==f?.generator||_!==f?.count)&&m.updateVersion()}const u=!Do({matrix1:e,matrix2:this.active.toWorld,maxDistance:this.originDistance}),p=this.needsUpdate||u||l.length!==o.size||l.some(m=>{var f;return m.version!==((f=o.get(m))==null?void 0:f.version)});this.needsUpdate=!1;let g=null;if(p){if(g=this.maybeAllocAccumulator(),!g)throw new Error("Unreachable");const m=!Do({matrix1:e,matrix2:g.toWorld,maxDistance:1e-5,minCoorient:.99999}),d=A.map((S,T)=>{const Y=o.get(S);return Y?[S.version-Y.version,Y.base,S]:[Number.POSITIVE_INFINITY,S.version,S]}).sort((S,T)=>S[0]!==T[0]?S[0]-T[0]:S[1]-T[1]).map(([S,T,Y])=>Y),_=d.map(S=>S.numSplats),{maxSplats:E,mapping:v}=g.splats.generateMapping(_),Q=d.map((S,T)=>{const{base:Y,count:I}=v[T];return{node:S,generator:S.generator,version:S.version,base:Y,count:I}});e.clone().invert().decompose(this.translateToAccumulator.value,this.rotateToAccumulator.value,new w),g.ensureGenerate(E),g.splats.splatEncoding={...this.splatEncoding},g.generateSplats({renderer:this.renderer,modifier:this.modifier,generators:Q,forceUpdate:m,originToWorld:e}),g.splatsVersion=this.active.splatsVersion+1;const b=g.hasCorrespondence(this.active);g.mappingVersion=this.active.mappingVersion+(b?0:1),this.releaseAccumulator(this.active),this.active=g,this.prepareViewpoint()}return setTimeout(()=>{for(const m of this.autoViewpoints)m.autoPoll({accumulator:g??void 0})},1),!0}compileScene(t){const e=[];t.traverse(r=>{r instanceof Lo&&e.push(r)});const n=[];t.traverseVisible(r=>{r instanceof Lo&&n.push(r)});const s=new Set;return t.traverseVisible(r=>{if(r instanceof Wc){let a=r.parent;for(;a!=null&&!(a instanceof qi);)a=a.parent;a==null&&s.add(r)}}),{generators:e,visibleGenerators:n,globalEdits:Array.from(s)}}async renderEnvMap({renderer:t,scene:e,worldCenter:n,size:s=256,near:r=.1,far:a=1e3,hideObjects:o=[],update:l=!1}){var A,c;if(this.envViewpoint||(this.envViewpoint=this.newViewpoint({sort360:!0})),!be.cubeRender||be.cubeRender.target.width!==s||be.cubeRender.near!==r||be.cubeRender.far!==a){be.cubeRender&&be.cubeRender.target.dispose();const m=new hc(s,{format:_e,generateMipmaps:!0,minFilter:Gh}),f=new lc(r,a,m);be.cubeRender={target:m,camera:f,near:r,far:a}}be.pmrem||(be.pmrem=new bo(t??this.renderer));const h=new Ht().setPosition(n);await((A=this.envViewpoint)==null?void 0:A.prepare({scene:e,viewToWorld:h,update:l}));const{target:u,camera:p}=be.cubeRender;p.position.copy(n);const g=new Map;for(const m of o)g.set(m,m.visible),m.visible=!1;this.prepareViewpoint(this.envViewpoint),p.update(t??this.renderer,e),this.prepareViewpoint(this.defaultView);for(const[m,f]of g.entries())m.visible=f;return(c=be.pmrem)==null?void 0:c.fromCubemap(u.texture).texture}recurseSetEnvMap(t,e){t.traverse(n=>{if(n instanceof we)if(Array.isArray(n.material))for(const s of n.material)s instanceof _r&&(s.envMap=e);else n.material instanceof _r&&(n.material.envMap=e)})}getRgba({generator:t,rgba:e}){const n=this.active.mapping.find(({node:s})=>s===t);if(!n)throw new Error("Generator not found");return e=e??new DE,e.fromPackedSplats({packedSplats:this.active.splats,base:n.base,count:n.count,renderer:this.renderer}),e}async readRgba({generator:t,rgba:e}){return e=this.getRgba({generator:t,rgba:e}),e.read()}};Or.cubeRender=null;Or.pmrem=null;Or.EMPTY_SPLAT_TEXTURE=new ic;let Nl=Or;const Ul=new Fo(new Uint32Array(1),0);Nn({packedSplats:Pr,index:"int"},{gsplat:pe},({packedSplats:i,index:t})=>{if(!i||!t)throw new Error("Invalid input");return{gsplat:ms(i,t)}});function yC(i){if(i.length===0)return null;const t=new w,e=new ae,n=new w,s=[],r=[];for(const a of i)a.decompose(t,e,n),s.push(t),r.push(e);return new Ht().compose($I(s),tE(r),new w(1,1,1))}Ye(`
  struct GsplatSkinning {
    int numSplats;
    int numBones;
    usampler2DArray skinTexture;
    sampler2D boneTexture;
  };
`);Ye(`
  void applyGsplatSkinning(
    int numSplats, int numBones,
    usampler2DArray skinTexture, sampler2D boneTexture,
    int splatIndex, inout vec3 center, inout vec4 quaternion
  ) {
    if ((splatIndex < 0) || (splatIndex >= numSplats)) {
      return;
    }

    uvec4 skinData = texelFetch(skinTexture, splatTexCoord(splatIndex), 0);

    float weights[4];
    weights[0] = float(skinData.x & 0xffu) / 255.0;
    weights[1] = float(skinData.y & 0xffu) / 255.0;
    weights[2] = float(skinData.z & 0xffu) / 255.0;
    weights[3] = float(skinData.w & 0xffu) / 255.0;

    uint boneIndices[4];
    boneIndices[0] = (skinData.x >> 8u) & 0xffu;
    boneIndices[1] = (skinData.y >> 8u) & 0xffu;
    boneIndices[2] = (skinData.z >> 8u) & 0xffu;
    boneIndices[3] = (skinData.w >> 8u) & 0xffu;

    vec4 quat = vec4(0.0);
    vec4 dual = vec4(0.0);
    for (int i = 0; i < 4; i++) {
      if (weights[i] > 0.0) {
        int boneIndex = int(boneIndices[i]);
        vec4 boneQuat = vec4(0.0, 0.0, 0.0, 1.0);
        vec4 boneDual = vec4(0.0);
        if (boneIndex < numBones) {
          boneQuat = texelFetch(boneTexture, ivec2(2, boneIndex), 0);
          boneDual = texelFetch(boneTexture, ivec2(3, boneIndex), 0);
        }

        if ((i > 0) && (dot(quat, boneQuat) < 0.0)) {
          // Flip sign if next blend is pointing in the opposite direction
          boneQuat = -boneQuat;
          boneDual = -boneDual;
        }
        quat += weights[i] * boneQuat;
        dual += weights[i] * boneDual;
      }
    }

    // Normalize dual quaternion
    float norm = length(quat);
    quat /= norm;
    dual /= norm;
    vec3 translate = vec3(
      2.0 * (-dual.w * quat.x + dual.x * quat.w - dual.y * quat.z + dual.z * quat.y),
      2.0 * (-dual.w * quat.y + dual.x * quat.z + dual.y * quat.w - dual.z * quat.x),
      2.0 * (-dual.w * quat.z - dual.x * quat.y + dual.y * quat.x + dual.z * quat.w)
    );

    center = quatVec(quat, center) + translate;
    quaternion = quatQuat(quat, quaternion);
  }
`);new Un(new w(-1,-1,-1),new w(1,1,1)),new w(-1,-3,1).normalize(),new Tt(1,1,1),new Tt(.5,.5,1),new w(1,1,1);new Un(new w(-2,-1,-2),new w(2,5,2)),new w(0,-1,0),new Tt(1,1,1),new Tt(.25,.25,.5),new w(.1,1,.1);const sh=class Po{static createButton(t,e={}){const n=navigator.xr;if(!n)return null;const s=n,r=document.createElement("button");t.xr.enabled=!0,t.xr.setReferenceSpaceType("local");function a(){let h=null;async function u(m){console.log("onSessionStarted"),m.addEventListener("end",p),await t.xr.setSession(m),r.textContent="EXIT VR",h=m}function p(){console.log("onSessionEnded"),h?.removeEventListener("end",p),r.textContent="ENTER VR",h=null}r.style.display="",r.style.cursor="pointer",r.style.left="calc(50% - 100px)",r.style.width="200px",r.style.height="100px",r.textContent="ENTER VR";const g={...e,optionalFeatures:[...e.optionalFeatures||[]]};r.onmouseenter=()=>{r.style.opacity="1.0"},r.onmouseleave=()=>{r.style.opacity="0.5"},r.onclick=()=>{h===null?(console.log("requesting session"),s.requestSession("immersive-vr",g).then(u)):(console.log("ending session"),h.end())}}function o(){r.style.display="none",r.style.cursor="auto",r.style.left="calc(50% - 75px)",r.style.width="150px",r.onmouseenter=null,r.onmouseleave=null,r.onclick=null}function l(){o(),r.textContent="VR NOT SUPPORTED"}function A(h){o(),console.warn("Exception when trying to call xr.isSessionSupported",h),r.textContent="VR NOT ALLOWED"}function c(h){h.style.position="absolute",h.style.bottom="20px",h.style.padding="12px 6px",h.style.border="1px solid #fff",h.style.borderRadius="4px",h.style.background="rgba(0,0,0,0.1)",h.style.color="#fff",h.style.font="normal 13px sans-serif",h.style.textAlign="center",h.style.opacity="0.5",h.style.outline="none",h.style.zIndex="999"}return r.id="VRButton",r.style.display="none",c(r),s.isSessionSupported("immersive-vr").then(h=>{h?a():l(),h&&Po.xrSessionIsGranted&&r.click()}).catch(A),r}static registerSessionGrantedListener(){const t=navigator.xr;if(!t)return null;const e=t;/WebXRViewer\//i.test(navigator.userAgent)||e.addEventListener("sessiongranted",()=>{Po.xrSessionIsGranted=!0})}};sh.xrSessionIsGranted=!1;let _C=sh;_C.registerSessionGrantedListener();var rh=(i=>(i.w="wrist",i.t0="thumb-metacarpal",i.t1="thumb-phalanx-proximal",i.t2="thumb-phalanx-distal",i.t3="thumb-tip",i.i0="index-finger-metacarpal",i.i1="index-finger-phalanx-proximal",i.i2="index-finger-phalanx-intermediate",i.i3="index-finger-phalanx-distal",i.i4="index-finger-tip",i.m0="middle-finger-metacarpal",i.m1="middle-finger-phalanx-proximal",i.m2="middle-finger-phalanx-intermediate",i.m3="middle-finger-phalanx-distal",i.m4="middle-finger-tip",i.r0="ring-finger-metacarpal",i.r1="ring-finger-phalanx-proximal",i.r2="ring-finger-phalanx-intermediate",i.r3="ring-finger-phalanx-distal",i.r4="ring-finger-tip",i.p0="pinky-finger-metacarpal",i.p1="pinky-finger-phalanx-proximal",i.p2="pinky-finger-phalanx-intermediate",i.p3="pinky-finger-phalanx-distal",i.p4="pinky-finger-tip",i))(rh||{});const vC=Object.keys(rh);vC.length;new w(0,0,-1),new w(0,0,1),new w(-1,0,0),new w(1,0,0),new w(0,1,0),new w(0,-1,0);new w(0,0,-1),new w(0,0,1),new w(-1,0,0),new w(1,0,0),new w(0,1,0),new w(0,-1,0);new w(0,0,1),new w(0,0,-1);new w(0,-1,0),new w(0,1,0),new w(-1,0,0),new w(1,0,0);async function BC(i){return new Promise((t,e)=>{try{const n=new qi({url:i});typeof n.load=="function"?n.load().then(()=>{t(n)}).catch(s=>{e(s)}):setTimeout(()=>{t(n)},100)}catch(n){e(n)}})}class SC extends cs{tableId;tableConfig;tableMesh;tableLegs=[];constructor(t){super(),this.tableId=t.id,this.tableConfig=t,this.createTable(),this.updateTransform()}createTable(){const{type:t,color:e}=this.tableConfig,n=parseInt(e.replace("#",""),16);let s;const r=.05,a=.75;switch(t){case"round":s=new yr(.5,.5,r,32);break;case"square":s=new Kn(1,r,1);break;case"rectangular":s=new Kn(1.5,r,.8);break;default:s=new Kn(1,r,1)}const o=new _r({color:n,roughness:.7,metalness:.1});this.tableMesh=new we(s,o),this.tableMesh.position.y=a,this.tableMesh.castShadow=!0,this.tableMesh.receiveShadow=!0,this.add(this.tableMesh);const l=new yr(.03,.03,.7,8),A=new _r({color:6636321,roughness:.8}),c=[],h=.35;switch(t){case"round":for(let d=0;d<4;d++){const _=d/4*Math.PI*2;c.push([Math.cos(_)*.35,Math.sin(_)*.35])}break;case"square":case"rectangular":const m=t==="rectangular"?.65:.45,f=t==="rectangular"?.35:.45;c.push([m,f],[-m,f],[m,-f],[-m,-f]);break}c.forEach(([m,f])=>{const d=new we(l,A);d.position.set(m,h,f),d.castShadow=!0,this.tableLegs.push(d),this.add(d)});const u=s.clone();u.scale(1.05,1.05,1.05);const p=new qo({color:65280,side:Ne}),g=new we(u,p);g.position.y=a,g.visible=!1,this.add(g),this.outline=g}updateTransform(){const[t,e,n]=this.tableConfig.position,[s,r,a]=this.tableConfig.rotation;this.position.set(t,e,n),this.rotation.set(s,r,a),this.scale.setScalar(this.tableConfig.scale)}updateConfig(t){this.tableConfig={...this.tableConfig,...t},(t.type||t.color)&&(this.tableMesh.removeFromParent(),this.tableLegs.forEach(e=>e.removeFromParent()),this.tableLegs=[],this.createTable()),this.updateTransform()}setSelected(t){this.outline&&(this.outline.visible=t)}getConfig(){return{...this.tableConfig}}}class bC{scene;camera;renderer;controls;roomScene;selectedTable=null;raycaster;mouse;constructor(t){this.scene=new um,this.scene.background=new Tt(15790320);const e=t.clientWidth/t.clientHeight;this.camera=new Le(75,e,.1,1e3),this.camera.position.set(5,5,5),this.camera.lookAt(0,0,0),this.renderer=new hm({antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=kl,t.appendChild(this.renderer.domElement),this.controls=new Tm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=2,this.controls.maxDistance=20,this.raycaster=new Sm,this.mouse=new vt,this.roomScene={tables:new Map},this.setupLighting(),this.setupHelpers(),this.setupEventListeners(),this.animate()}setupLighting(){const t=new vm(16777215,.6);this.scene.add(t);const e=new _m(16777215,.8);e.position.set(5,10,5),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=50,e.shadow.camera.left=-10,e.shadow.camera.right=10,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,this.scene.add(e);const n=new xm(16777215,.5);n.position.set(-5,8,-5),this.scene.add(n)}setupHelpers(){const t=new bm(20,20,8947848,13421772);this.scene.add(t);const e=new wm(2);this.scene.add(e)}setupEventListeners(){window.addEventListener("resize",()=>this.onWindowResize()),this.renderer.domElement.addEventListener("click",t=>{this.onMouseClick(t)})}onWindowResize(){const t=this.renderer.domElement.parentElement;if(!t)return;const e=t.clientWidth,n=t.clientHeight;this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}onMouseClick(t){const e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.selectedTable&&(this.selectedTable.setSelected(!1),this.selectedTable=null);const n=Array.from(this.roomScene.tables.values()),s=this.raycaster.intersectObjects(n,!0);if(s.length>0){let r=null;for(const a of n){const o=s[0].object;if(a===o||o.parent&&o.parent===a){r=a;break}}r&&(this.selectedTable=r,this.selectedTable.setSelected(!0),this.dispatchTableSelectedEvent(r))}}dispatchTableSelectedEvent(t){const e=new CustomEvent("tableSelected",{detail:t.getConfig()});window.dispatchEvent(e)}async loadRoom(t){try{this.roomScene.roomMesh&&(this.scene.remove(this.roomScene.roomMesh),this.roomScene.roomMesh instanceof qi&&this.roomScene.roomMesh.dispose());const e=await BC(t);this.roomScene.roomMesh=e,this.scene.add(e),setTimeout(()=>{if(e instanceof qi){const n=new Un().setFromObject(e);if(!n.isEmpty()){const s=new w;n.getCenter(s);const r=new w;n.getSize(r);const a=Math.max(r.x,r.y,r.z),o=a*1.5;this.camera.position.set(o,a*.8,o),this.camera.lookAt(s),this.controls.target.copy(s),this.controls.update()}}},1e3)}catch(e){throw console.error("Error loading PLY file as Gaussian Splat:",e),e}}addTable(t){const e=new SC(t);return this.roomScene.tables.set(t.id,e),this.scene.add(e),e}removeTable(t){const e=this.roomScene.tables.get(t);return e?(this.scene.remove(e),this.roomScene.tables.delete(t),this.selectedTable===e&&(this.selectedTable=null),!0):!1}updateTable(t,e){const n=this.roomScene.tables.get(t);return n?(n.updateConfig(e),!0):!1}getTable(t){return this.roomScene.tables.get(t)}getAllTables(){return Array.from(this.roomScene.tables.values())}getSelectedTable(){return this.selectedTable}animate(){requestAnimationFrame(()=>this.animate()),this.controls.update(),this.roomScene.roomMesh instanceof qi,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),window.removeEventListener("resize",()=>this.onWindowResize())}}class wC{sceneManager;tableCounter=0;constructor(t){this.sceneManager=t,this.createUI(),this.setupEventListeners()}createUI(){const t=document.createElement("div");t.id="ui-container",t.innerHTML=`
      <div class="ui-panel">
        <h2>3D Room Designer</h2>
        
        <div class="ui-section">
          <h3>Load Room</h3>
          <input type="file" id="ply-file-input" accept=".ply" />
          <button id="load-room-btn">Load PLY Room</button>
        </div>

        <div class="ui-section">
          <h3>Tables</h3>
          <button id="add-table-btn">Add Table</button>
          <button id="remove-table-btn" disabled>Remove Selected</button>
        </div>

        <div class="ui-section" id="table-config" style="display: none;">
          <h3>Table Configuration</h3>
          <div class="form-group">
            <label>Type:</label>
            <select id="table-type">
              <option value="round">Round</option>
              <option value="square">Square</option>
              <option value="rectangular">Rectangular</option>
            </select>
          </div>
          <div class="form-group">
            <label>Color:</label>
            <input type="color" id="table-color" value="#8B4513" />
          </div>
          <div class="form-group">
            <label>Position X:</label>
            <input type="number" id="pos-x" step="0.1" value="0" />
          </div>
          <div class="form-group">
            <label>Position Y:</label>
            <input type="number" id="pos-y" step="0.1" value="0" />
          </div>
          <div class="form-group">
            <label>Position Z:</label>
            <input type="number" id="pos-z" step="0.1" value="0" />
          </div>
          <div class="form-group">
            <label>Rotation Y:</label>
            <input type="number" id="rot-y" step="0.1" value="0" />
          </div>
          <div class="form-group">
            <label>Scale:</label>
            <input type="number" id="table-scale" step="0.1" min="0.1" max="3" value="1" />
          </div>
          <button id="update-table-btn" disabled>Update Table</button>
        </div>
      </div>
    `,document.body.appendChild(t);const e=document.createElement("style");e.textContent=`
      #ui-container {
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 100;
        font-family: Arial, sans-serif;
      }
      .ui-panel {
        background: rgba(255, 255, 255, 0.95);
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        min-width: 250px;
        max-height: 90vh;
        overflow-y: auto;
      }
      .ui-panel h2 {
        margin-top: 0;
        color: #333;
      }
      .ui-panel h3 {
        margin-top: 15px;
        margin-bottom: 10px;
        color: #555;
        font-size: 14px;
        text-transform: uppercase;
      }
      .ui-section {
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
      }
      .ui-section:last-child {
        border-bottom: none;
      }
      button {
        background: #4CAF50;
        color: white;
        border: none;
        padding: 8px 16px;
        margin: 5px 5px 5px 0;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
      button:hover:not(:disabled) {
        background: #45a049;
      }
      button:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
      #remove-table-btn {
        background: #f44336;
      }
      #remove-table-btn:hover:not(:disabled) {
        background: #da190b;
      }
      #update-table-btn {
        background: #2196F3;
      }
      #update-table-btn:hover:not(:disabled) {
        background: #0b7dda;
      }
      input[type="file"] {
        margin-bottom: 10px;
        font-size: 12px;
      }
      .form-group {
        margin-bottom: 10px;
      }
      .form-group label {
        display: block;
        margin-bottom: 4px;
        font-size: 12px;
        color: #666;
      }
      .form-group input[type="number"],
      .form-group select,
      .form-group input[type="color"] {
        width: 100%;
        padding: 6px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 12px;
      }
      .form-group input[type="color"] {
        height: 35px;
      }
    `,document.head.appendChild(e)}setupEventListeners(){document.getElementById("ply-file-input").addEventListener("change",async a=>{const o=a.target.files?.[0];if(o){const l=URL.createObjectURL(o);try{await this.sceneManager.loadRoom(l),console.log("Room loaded successfully")}catch(A){console.error("Failed to load room:",A),alert("Failed to load PLY file. Please check the console for details.")}}}),document.getElementById("add-table-btn").addEventListener("click",()=>{const a=`table-${++this.tableCounter}`,o={id:a,position:[Math.random()*2-1,0,Math.random()*2-1],rotation:[0,Math.random()*Math.PI*2,0],scale:1,type:"round",color:"#8B4513"};this.sceneManager.addTable(o),console.log("Table added:",a)});const n=document.getElementById("remove-table-btn");n.addEventListener("click",()=>{const a=this.sceneManager.getSelectedTable();a&&(this.sceneManager.removeTable(a.tableId),this.hideTableConfig(),n.disabled=!0,console.log("Table removed:",a.tableId))});const s=document.getElementById("update-table-btn");s.addEventListener("click",()=>{const a=this.sceneManager.getSelectedTable();if(a){const o=this.getTableConfigFromUI();this.sceneManager.updateTable(a.tableId,o),console.log("Table updated:",a.tableId)}}),window.addEventListener("tableSelected",(a=>{const o=a.detail;this.showTableConfig(o),n.disabled=!1,s.disabled=!1})),["pos-x","pos-y","pos-z","rot-y","table-scale","table-type","table-color"].forEach(a=>{document.getElementById(a).addEventListener("change",()=>{if(this.sceneManager.getSelectedTable()){const l=this.getTableConfigFromUI();this.sceneManager.updateTable(this.sceneManager.getSelectedTable().tableId,l)}})})}getTableConfigFromUI(){return{type:document.getElementById("table-type").value,color:document.getElementById("table-color").value,position:[parseFloat(document.getElementById("pos-x").value),parseFloat(document.getElementById("pos-y").value),parseFloat(document.getElementById("pos-z").value)],rotation:[0,parseFloat(document.getElementById("rot-y").value),0],scale:parseFloat(document.getElementById("table-scale").value)}}showTableConfig(t){const e=document.getElementById("table-config");e.style.display="block",document.getElementById("table-type").value=t.type,document.getElementById("table-color").value=t.color,document.getElementById("pos-x").value=t.position[0].toFixed(2),document.getElementById("pos-y").value=t.position[1].toFixed(2),document.getElementById("pos-z").value=t.position[2].toFixed(2),document.getElementById("rot-y").value=t.rotation[1].toFixed(2),document.getElementById("table-scale").value=t.scale.toString()}hideTableConfig(){const t=document.getElementById("table-config");t.style.display="none"}}function Fl(){const i=document.getElementById("app-container");if(!i)throw new Error("Container element not found");const t=new bC(i);new wC(t),console.log("3D Room Designer initialized")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fl):Fl();
