(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{378:function(t,e,n){},387:function(t,e,n){"use strict";n(117),n(60);var a=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle:function(t){t.style.transition="transform ".concat(this.duration,"s ease-in-out ").concat(this.delay,"s, opacity ").concat(this.duration,"s ease-in-out ").concat(this.delay,"s"),t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle:function(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),r=(n(412),n(2)),o=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},412:function(t,e,n){"use strict";n(378)},413:function(t,e,n){"use strict";var a=n(1),r=n(30),o=n(18),i=n(3),s=n(38),c=[],l=c.sort,u=i((function(){c.sort(void 0)})),p=i((function(){c.sort(null)})),h=s("sort");a({target:"Array",proto:!0,forced:u||!p||!h},{sort:function(t){return void 0===t?l.call(o(this)):l.call(o(this),r(t))}})},417:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(380),r=(n(208),n(37),n(388)),o=n(411),i=n(118),s=(n(413),n(61),n(203),n(115),function(t,e){return t&&"object"===Object(i.a)(t.config)?Object.keys(t.config).filter((function(t){return e.startsWith(t)})).sort((function(t,e){return e.length-t.length})):[]}),c=o.a.extend({data:function(){return{encryptPasswordConfig:{}}},computed:{pathEncryptMatchKeys:function(){return s(this.encryptOptions,this.$route.path)},isPathEncrypted:function(){var t=this;if(0===this.pathEncryptMatchKeys.length)return!1;var e=this.encryptOptions.config;return this.pathEncryptMatchKeys.every((function(n){var a=e[n],o="string"==typeof a?[a]:a;return!t.encryptPasswordConfig[n]||o.every((function(e){return!Object(r.compareSync)(t.encryptPasswordConfig[n],e)}))}))}},mounted:function(){var t=localStorage.getItem("encryptConfig");t&&(this.encryptPasswordConfig=JSON.parse(t))},methods:{checkPathPassword:function(t){var e,n=this.$themeConfig.encrypt.config,o=Object(a.a)(this.pathEncryptMatchKeys);try{for(o.s();!(e=o.n()).done;){var i=e.value,s=n[i];if(("string"==typeof s?[s]:s).filter((function(e){return Object(r.compareSync)(t,e)}))){this.$set(this.encryptPasswordConfig,i,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptPasswordConfig));break}}}catch(t){o.e(t)}finally{o.f()}}}})},486:function(t,e,n){},487:function(t,e,n){},488:function(t,e,n){},489:function(t,e,n){},490:function(t,e,n){},491:function(t,e,n){},492:function(t,e,n){},493:function(t,e,n){},599:function(t,e,n){var a=n(1),r=n(600);a({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},600:function(t,e,n){"use strict";var a=n(21),r=n(62),o=n(17),i=n(38),s=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,u=i("lastIndexOf"),p=l||!u;t.exports=p?function(t){if(l)return c.apply(this,arguments)||0;var e=a(this),n=o(e.length),i=n-1;for(arguments.length>1&&(i=s(i,r(arguments[1]))),i<0&&(i=n+i);i>=0;i--)if(i in e&&e[i]===t)return i||0;return-1}:c},601:function(t,e,n){"use strict";n(486)},602:function(t,e,n){"use strict";n(487)},603:function(t,e,n){"use strict";n(488)},604:function(t,e,n){"use strict";n(489)},605:function(t,e,n){"use strict";n(490)},606:function(t,e,n){"use strict";n(491)},607:function(t,e,n){"use strict";n(492)},608:function(t,e,n){"use strict";n(493)},631:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(359),o=n(415),i=(n(84),n(387)),s=n(371),c=(n(203),n(44),n(599),n(60),a.a.extend({name:"Home",components:{MyTransition:i.a,NavLink:s.a},computed:{actionLinks:function(){var t=this.$frontmatter.action;return Array.isArray(t)?t:[t]}},methods:{navigate:function(t){!function(t,e,n){if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{var a=n.path.slice(0,n.path.lastIndexOf("/"));e.push("".concat(a,"/").concat(encodeURI(t)))}}(t,this.$router,this.$route)}}})),l=(n(601),n(2)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[n("MyTransition",[t.$frontmatter.heroImage?n("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("MyTransition",[t.$frontmatter.darkHeroImage?n("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),n("div",{staticClass:"hero-info"},[n("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?n("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.08}},[n("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?n("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return n("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?n("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(e,a){return[e.link?n("div",{key:a,staticClass:"feature link",class:"feature"+a%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(n){return t.navigate(e.link)}}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])]):n("div",{key:a,staticClass:"feature",class:"feature"+a%9},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])]}))],2):t._e()]),t._v(" "),n("MyTransition",{attrs:{delay:.24}},[n("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports,p=(n(7),n(204),n(116),n(479)),h=(n(386),n(27),n(364)),f=function(t,e){var n=e.text,a=e.link,r=e.level;return t("RouterLink",{props:{to:a,activeClass:"",exactActiveClass:""},class:Object(p.a)({"anchor-link":!0},r?"heading".concat(r):"",r)},[t("div",{},[n])])},d=function(t,e){var n=e.children,a=e.route;return t("ul",{class:"anchor-list"},n.map((function(e){var n=Object(h.e)(a,"".concat(a.path,"#").concat(e.slug));return t("li",{class:{anchor:!0,active:n}},[f(t,{text:e.title,link:"".concat(a.path,"#").concat(e.slug),level:e.level})])})))},m=a.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:function(){return[]}}},render:function(t,e){var n=e.props,a=e.parent,r=a.$page,o=a.$route;return t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[n.items.length?d(t,{children:n.items,route:o}):r.headers?d(t,{children:r.headers,route:o}):null])])])}}),g=(n(602),Object(l.a)(m,void 0,void 0,!1,null,null,null).exports),v=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon author-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,y={type:"disable"},_={"/zh/":{author:"作者🖊",time:"写作日期📅",origin:"原创💡",views:"访问量🔢",category:"分类🌈",tag:"标签🏷",readingTime:"阅读时间⌛",words:"字数🔠"},"/en/":{author:"Author🖊",time:"Writing Date📅",origin:"Original💡",views:"Page views🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Reading Time⌛",words:"Words🔠"},"/de/":{author:"Autor🖊",time:"Datum📅",origin:"Original💡",views:"Besucher🔢",category:"Kategorie🌈",tag:"Tags🏷",readingTime:"Lesezeit⌛",words:"Wörter🔠"},"/vi/":{author:"Người viết🖊",time:"Ngày viết📅",origin:"Nguồn💡",views:"Views của trang🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Thời gian đọc⌛",words:"Words🔠"},"/":{author:"Author🖊",time:"Writing Date📅",origin:"Original💡",views:"Page views🔢",category:"Category🌈",tag:"Tags🏷",readingTime:"Reading Time⌛",words:"Words🔠"}},b={"/zh/":{word:"约 $word 字",minute:"小于 1 分钟",time:"大约 $time 分钟"},"/en/":{word:"About $word words",minute:"Less than 1 minute",time:"About $time min"},"/de/":{word:"Um die $word Wörter",minute:"Weniger als eine Minute",time:"Ungefähr $time min"},"/vi/":{word:"Khoảng $word từ",minute:"Ít hơn 1 phút",time:"Khoảng $time phút"},"/":{word:"About $word words",minute:"Less than 1 minute",time:"About $time min"}},C=a.a.extend({name:"AuthorInfo",components:{AuthorIcon:v},data:function(){return{commentOption:y}},computed:{author:function(){var t=this.$frontmatter.author;return t||(!1===t?"":this.commentOption.author||"")},hint:function(){return _[this.$localePath||"/"].author}}}),$=Object(l.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return this.author?e("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("AuthorIcon"),this._v(" "),e("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports,w=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon category-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zm-.854 446.486H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zm446.371-446.486h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zm136.293 813.51H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,x=n(379),k=a.a.extend({name:"CategoryInfo",components:{CategoryIcon:w},props:{category:{type:String,default:""}},computed:{categoryName:function(){if(this.category)return Object(x.a)(this.category);var t=this.$frontmatter.category;return t?Object(x.a)(t):""},canUse:function(){return!1!==this.$themeConfig.blog},hint:function(){return _[this.$localePath||"/"].category}},methods:{navigate:function(){var t="/category/".concat(this.categoryName,"/");this.canUse&&this.$route.path!==t&&this.$router.push(t)}}}),T=(n(603),Object(l.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.categoryName?n("span",{staticClass:"category-info",class:{enable:t.canUse},attrs:{role:t.canUse?"navigation":"","aria-label":t.hint,"data-balloon-pos":"down"},on:{click:t.navigate}},[n("CategoryIcon"),t._v(" "),n("span",{attrs:{property:"articleSection"},domProps:{textContent:t._s(t.categoryName)}})],1):t._e()}),[],!1,null,null,null).exports),P=(n(28),n(20),Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon timer-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z",fill:"currentColor"}})])}),[],!1,null,null,null).exports),I=a.a.extend({name:"ReadingTimeInfo",components:{TimerIcon:P},computed:{readingTime:function(){return"PT".concat(Math.max(Math.round(this.$page.readingTime.minutes),1),"M")},text:function(){var t=b[this.$localePath||"/"].minute,e=b[this.$localePath||"/"].time;return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint:function(){return _[this.$localePath||"/"].readingTime}}}),O=Object(l.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("TimerIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),n("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,M=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon tag-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M939.902 458.563 910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 0 0 0 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,j=a.a.extend({name:"TagInfo",components:{TagIcon:M},props:{tags:{type:Array,default:function(){return[]}}},computed:{$tags:function(){if(0!==this.tags.length)return this.tags;var t=this.$frontmatter,e=t.tags,n=t.tag,a=void 0===n?e:n;return"string"==typeof a?[Object(x.a)(a)]:Array.isArray(a)?a.map((function(t){return Object(x.a)(t)})):[]},clickable:function(){return!1!==this.$themeConfig.blog},hint:function(){return _[this.$localePath||"/"].tag}},methods:{navigate:function(t){var e="/tag/".concat(t,"/");this.$route.path!==e&&this.$router.push(e)}}}),F=(n(604),Object(l.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==t.$tags.length?n("span",{attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("TagIcon"),t._v(" "),n("ul",{staticClass:"tags-wrapper"},t._l(t.$tags,(function(e,a){var r;return n("li",{key:e,staticClass:"tag",class:(r={clickable:t.clickable},r["tag"+a%9]=!0,r),on:{click:function(n){return t.navigate(e)}}},[n("span",{attrs:{role:t.clickable?"navigation":""},domProps:{textContent:t._s(e)}})])})),0),t._v(" "),n("meta",{attrs:{property:"keywords",content:t.$tags.join(",")}})],1):t._e()}),[],!1,null,null,null).exports),E=n(16),A=(n(205),n(206),Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon calendar-icon",attrs:{viewBox:"0 0 1030 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H180.6A134.314 134.314 0 0 0 46.66 277.595v535.756A134.314 134.314 0 0 0 180.6 947.289h669.74a134.36 134.36 0 0 0 133.94-133.938V277.595a134.314 134.314 0 0 0-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 0 1-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 0 1-33.472 33.473z",fill:"currentColor"}})])}),[],!1,null,null,null).exports),D=a.a.extend({name:"TimeInfo",components:{CalendarIcon:A},computed:{time:function(){var t=this.$frontmatter,e=t.date,n=t.time,a=void 0===n?e:n;if("string"==typeof a){if(-1!==a.indexOf("T")){var r=a.split("T"),o=Object(E.a)(r,2),i=o[0],s=o[1].split("."),c=Object(E.a)(s,1)[0];return"".concat(i," ").concat("00:00:00"===c?"":c)}return a}var l=this.$page.createTimeStamp;if(l){var u=new Date(l);return"".concat(u.getFullYear(),"-").concat(u.getMonth()+1,"-").concat(u.getDate())}return""},hint:function(){return _[this.$localePath||"/"].time}}}),L=Object(l.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return this.time?e("span",{staticClass:"time-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[e("CalendarIcon"),this._v(" "),e("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,B=(n(33),n(117),Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 0 0-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports),N=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,S=a.a.extend({name:"VisitorInfo",components:{EyeIcon:B,FireIcon:N},data:function(){return{count:0}},computed:{enableVisitor:function(){if(!Boolean("valine"===y.type&&y.appId&&y.appKey||"waline"===y.type&&y.serverURL))return!1;var t=!1!==y.visitor,e=this.$frontmatter.visitor;return t&&!1!==e||Boolean(e)},visitorID:function(){var t=this.$site.base;return t?"".concat(t.slice(0,t.length-1)).concat(this.$page.path):this.$page.path},hint:function(){return _[this.$localePath||"/"].views}},watch:{$route:function(t,e){var n=this;t.path!==e.path&&setTimeout((function(){n.getCount()}),500)}},mounted:function(){var t=this;setTimeout((function(){t.getCount()}),1500)},methods:{getCount:function(){var t=this,e=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(e){var n=e.textContent;n&&!isNaN(Number(n))?this.count=Number(n):setTimeout((function(){t.getCount()}),500)}}}}),z=Object(l.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.enableVisitor?n("span",{staticClass:"visitor-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[t.count<1e3?n("EyeIcon"):n("FireIcon"),t._v(" "),n("span",{staticClass:"leancloud_visitors",attrs:{id:t.visitorID,"data-flag-title":t.$page.title}},[n("span",{staticClass:"leancloud-visitors-count"},[t._v("...")])])],1):t._e()}),[],!1,null,null,null).exports,H=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 0 1 603.43 1.097a512 512 0 0 1 419.474 419.474 73.143 73.143 0 0 1-72.046 85.212H591.36a73.143 73.143 0 0 1-73.143-73.143z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0 1 73.143 85.577A457.143 457.143 0 1 1 371.566 117.76a73.143 73.143 0 0 1 85.577 73.143v339.383a36.571 36.571 0 0 0 36.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,V=a.a.extend({name:"ReadTimeInfo",components:{WordIcon:H},computed:{words:function(){return b[this.$localePath||"/"].word.replace("$word",this.$page.readingTime.words.toString())},hint:function(){return _[this.$localePath||"/"].words}}}),W=Object(l.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.words?n("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[n("WordIcon"),t._v(" "),n("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),n("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,R=(n(212),a.a.extend({name:"PageInfo",components:{AuthorInfo:$,CategoryInfo:T,ReadingTimeInfo:O,TagInfo:F,TimeInfo:L,VisitorInfo:z,WordInfo:W},data:function(){return{commentConfig:y}},computed:{config:function(){var t=this.$themeConfig.pageInfo,e=this.commentConfig.pageInfo,n=this.$page.frontmatter.pageInfo;return!1!==n&&(Array.isArray(n)?n:!1!==e&&(Array.isArray(e)?e:!1!==t&&(Array.isArray(t)?t:["author","visitor","time","category","tag","reading-time"])))},iconPrefix:function(){var t=this.$themeConfig.iconPrefix;return""===t?"":t||"icon-"},isOriginal:function(){return!0===this.$frontmatter.original},originText:function(){return _[this.$localePath||"/"].origin}}})),U=(n(605),Object(l.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[n("h1",[t.$frontmatter.icon?n("i",{class:"iconfont "+t.iconPrefix+t.$frontmatter.icon}):t._e(),t._v(" "),n("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?n("div",{staticClass:"page-info"},[t.isOriginal?n("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(e){return n(e+"-info",{key:t.$route.path+e,tag:"component"})}))],2):t._e(),t._v(" "),t.$frontmatter.image?n("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),n("hr")])}),[],!1,null,null,null).exports),K=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,J=a.a.extend({name:"PageMeta",components:{EditIcon:K},computed:{i18n:function(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors:function(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText:function(){return this.i18n.contributor},updateTime:function(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText:function(){return this.i18n.updateTime},editLink:function(){var t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,a=e.docsRepo;return!(!t||!n&&!a||!this.$page.relativePath)&&this.createEditLink()},editLinkText:function(){return this.i18n.editLink}},methods:{createEditLink:function(){var t=this.$themeConfig,e=t.repo,n=void 0===e?"":e,a=t.docsRepo,r=void 0===a?n:a,o=t.docsDir,i=void 0===o?"":o,s=t.docsBranch,c=void 0===s?"main":s;if(/bitbucket(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])org/.test(r))return"".concat(r.replace(h.a,""),"/src/").concat(c,"/").concat(i?"".concat(i.replace(h.a,""),"/"):"").concat(this.$page.relativePath,"?mode=edit&spa=0&at=").concat(c,"&fileviewer=file-view-default");if(/gitlab(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])com/.test(r))return"".concat(r.replace(h.a,""),"/-/edit/").concat(c,"/").concat(i?"".concat(i.replace(h.a,""),"/"):"").concat(this.$page.relativePath);var l=h.j.test(r)?r:"https://github.com/".concat(r);return"".concat(l.replace(h.a,""),"/edit/").concat(c,"/").concat(i?"".concat(i.replace(h.a,""),"/"):"").concat(this.$page.relativePath)}}}),Y=(n(606),Object(l.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-meta"},[t.editLink?n("div",{staticClass:"edit-link"},[n("EditIcon"),t._v(" "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?n("div",{staticClass:"meta-item update-time"},[n("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?n("div",{staticClass:"meta-item contributors"},[n("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),n("span",{staticClass:"info"},[t._l(t.contributors,(function(e,a){return[n("span",{key:a,staticClass:"contributor",attrs:{title:"email: "+e.email}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),a!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),q=n(380),G=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,Q=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,X=n(418),Z=function(t,e,n){var a=[];!function t(e,n){var a,r=Object(q.a)(e);try{for(r.s();!(a=r.n()).done;){var o=a.value;"group"===o.type?t(o.children||[],n):n.push(o)}}catch(t){r.e(t)}finally{r.f()}}(e,a);for(var r=0;r<a.length;r++){var o=a[r];if("page"===o.type&&o.path===decodeURIComponent(t.path))return a[r+n]}return!1},tt=function(t,e){var n=e.themeConfig,a=e.page,r=e.route,o=e.site,i=e.sidebarItems,s=n["".concat(t,"Links")],c=a.frontmatter[t];return!1!==s&&!1!==c&&("string"==typeof c?Object(X.c)(o.pages,Object(h.k)(c,r.path)):Z(a,i,"prev"===t?-1:1))},et=a.a.extend({name:"PageNav",components:{NextIcon:G,PrevIcon:Q},props:{sidebarItems:{type:Array,default:function(){return[]}}},computed:{prev:function(){return tt("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next:function(){return tt("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),nt=(n(607),Object(l.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},["external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[n("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("OutboundLink"),t._v(" "),n("NextIcon")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),at=n(416),rt=n(417).a.extend({name:"Page",components:{Anchor:g,Comment:r.a,MyTransition:i.a,PageInfo:U,PageMeta:Y,PageNav:nt,Password:at.a},props:{sidebarItems:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{password:""}},computed:{pagePassword:function(){var t=this.$frontmatter.password;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted:function(){return this.password===this.pagePassword}}}),ot=(n(608),Object(l.a)(rt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[n("MyTransition",[n("BreadCrumb",{key:t.$route.path})],1),t._v(" "),t._t("top"),t._v(" "),n("MyTransition",{attrs:{delay:.04}},[n("PageInfo",{key:t.$route.path})],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?n("MyTransition",{attrs:{delay:.08}},[n("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[n("MyTransition",{attrs:{delay:.12}},[n("Anchor",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),n("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[n("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),n("MyTransition",{attrs:{delay:.12}},[n("PageMeta",{key:t.$route.path})],1),t._v(" "),n("MyTransition",{attrs:{delay:.14}},[n("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),n("MyTransition",{attrs:{delay:.16}},[n("Comment",{key:t.$route.path})],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),it=a.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:r.a,Common:o.a,ContentBottom:r.a,ContentTop:r.a,Home:u,NavbarCenter:r.a,NavbarEnd:r.a,NavbarStart:r.a,Page:ot,PageBottom:r.a,PageTop:r.a,SidebarBottom:r.a,SidebarCenter:r.a,SidebarTop:r.a}}),st=Object(l.a)(it,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",[n("NavbarStart"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-start"}})])]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",[n("NavbarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-center"}})])]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",[n("NavbarEnd"),t._v(" "),n("Content",{attrs:{"slot-key":"navbar-end"}})])]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",[n("SidebarTop"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-top"}})])]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",[n("SidebarCenter"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-center"}})])]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",[n("SidebarBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"sidebar-bottom"}})])]},proxy:!0},{key:"default",fn:function(e){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?n("BlogHome"):t.$frontmatter.home?n("Home"):n("Page",{attrs:{headers:e.headers,"sidebar-items":e.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",[n("PageTop"),t._v(" "),n("Content",{attrs:{"slot-key":"page-top"}})])]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",[n("ContentTop"),t._v(" "),n("Content",{attrs:{"slot-key":"content-top"}})])]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",[n("ContentBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"content-bottom"}})])]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",[n("PageBottom"),t._v(" "),n("Content",{attrs:{"slot-key":"page-bottom"}})])]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=st.exports}}]);