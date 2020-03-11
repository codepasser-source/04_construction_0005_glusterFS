/* ===========================================================
 * bootstrap-popover.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var e=this.tip(),n=this.getTitle(),i=this.getContent();e.find(".popover-title")[t.type(n)=="object"?"append":"html"](n),e.find(".popover-content > *")[t.type(i)=="object"?"append":"html"](i),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,n=this.options;return t=e.attr("data-content")||(typeof n.content=="function"?n.content.call(e[0]):n.content),t=t.toString().replace(/(^\s*|\s*$)/,"")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}}),t.fn.popover=function(n){return this.each(function(){var i=t(this),r=i.data("popover"),a="object"==typeof n&&n;r||i.data("popover",r=new e(this,a)),"string"==typeof n&&r[n]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);