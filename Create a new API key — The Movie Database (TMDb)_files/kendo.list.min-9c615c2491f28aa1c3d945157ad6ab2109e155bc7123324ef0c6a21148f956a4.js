/** 
 * Kendo UI v2018.3.1017 (http://www.telerik.com/kendo-ui)                                                                                                                                              
 * Copyright 2018 Telerik EAD. All rights reserved.                                                                                                                                                     
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
!function(e,define){define("kendo.list.min",["kendo.data.min","kendo.popup.min"],e)}(function(){return function(e,t){function i(e,i){return e!==t&&""!==e&&null!==e&&("boolean"===i?e=!!e:"number"===i?e=+e:"string"===i&&(e=""+e)),e}function a(e){return e[e.length-1]}function n(e){var t=e.selectedIndex;return t>-1?e.options[t]:{}}function s(e,t){var i,a,n,s,r=t.length,l=e.length,o=[],u=[];if(l)for(n=0;n<l;n++){for(i=e[n],a=!1,s=0;s<r;s++)if(i===t[s]){a=!0,o.push({index:n,item:i});break}a||u.push(i)}return{changed:o,unchanged:u}}function r(t){return!(!t||e.isEmptyObject(t))&&!(t.filters&&!t.filters.length)}function l(t,i){var a,n=!1;return t.filters&&(a=e.grep(t.filters,function(e){return n=l(e,i),e.filters?e.filters.length:e.field!=i}),n||t.filters.length===a.length||(n=!0),t.filters=a),n}var o,u,c=window.kendo,d=c.ui,h=c._outerHeight,f=/^\d+(\.\d+)?%$/i,p=d.Widget,_=c.keys,g=c.support,m=c.htmlEncode,v=c._activeElement,b=c._outerWidth,x=c.data.ObservableArray,I="id",w="change",S="k-state-focused",y="k-state-hover",F="k-i-loading",T=".k-group-header",V=".k-item",k="_label",C="open",D="close",H="cascade",E="select",B="selected",P="requestStart",L="requestEnd",G=e.extend,W=e.proxy,q=e.isArray,A=g.browser,O="k-hidden",N="width",R=A.msie,M=R&&A.version<9,U=/"/g,z={ComboBox:"DropDownList",DropDownList:"ComboBox"},j=c.ui.DataBoundWidget.extend({init:function(t,i){var a,n=this,s=n.ns;p.fn.init.call(n,t,i),t=n.element,i=n.options,n._isSelect=t.is(E),n._isSelect&&n.element[0].length&&(i.dataSource||(i.dataTextField=i.dataTextField||"text",i.dataValueField=i.dataValueField||"value")),n.ul=e('<ul unselectable="on" class="k-list k-reset"/>').attr({tabIndex:-1,"aria-hidden":!0}),n.list=e("<div class='k-list-container'/>").append(n.ul).on("mousedown"+s,W(n._listMousedown,n)),a=t.attr(I),a&&(n.list.attr(I,a+"-list"),n.ul.attr(I,a+"_listbox")),i.columns&&i.columns.length&&(n.ul.removeClass("k-list").addClass("k-grid-list"),n._columnsHeader()),n._header(),n._noData(),n._footer(),n._accessors(),n._initValue()},options:{valuePrimitive:!1,footerTemplate:"",headerTemplate:"",noDataTemplate:"No data found."},setOptions:function(e){p.fn.setOptions.call(this,e),e&&e.enable!==t&&(e.enabled=e.enable),e.columns&&e.columns.length&&this._columnsHeader(),this._header(),this._noData(),this._footer(),this._renderFooter(),this._renderNoData()},focus:function(){this._focused.focus()},readonly:function(e){this._editable({readonly:e===t||e,disable:!1})},enable:function(e){this._editable({readonly:!1,disable:!(e=e===t||e)})},_header:function(){var i,a=this,n=e(a.header),s=a.options.headerTemplate;return this._angularElement(n,"cleanup"),c.destroy(n),n.remove(),s?(i="function"!=typeof s?c.template(s):s,n=e(i({})),a.header=n[0]?n:null,a.list.prepend(n),this._angularElement(a.header,"compile"),t):(a.header=null,t)},_columnsHeader:function(){var t,i,a,n,s,r,l,o,u,d,h,p=this,_=e(p.columnsHeader);for(this._angularElement(_,"cleanup"),c.destroy(_),_.remove(),t="<div class='k-grid-header'><div class='k-grid-header-wrap'><table>",i="<colgroup>",a="<tr>",n=0;n<this.options.columns.length;n++)s=this.options.columns[n],r=s.title||s.field||"",l=s.headerTemplate||r,o="function"!=typeof l?c.template(l):l,u=s.width,d=parseInt(u,10),h="",u&&!isNaN(d)&&(h+="style='width:",h+=d,h+=f.test(u)?"%":"px",h+=";'"),i+="<col "+h+"/>",a+="<th class='k-header'>",a+=o(s),a+="</th>";i+="</colgroup>",a+="</tr>",t+=i,t+=a,t+="</table></div></div>",p.columnsHeader=_=e(t),p.list.prepend(_),this._angularElement(p.columnsHeader,"compile")},_noData:function(){var i=this,a=e(i.noData),n=i.options.noDataTemplate;return i.angular("cleanup",function(){return{elements:a}}),c.destroy(a),a.remove(),n?(i.noData=e('<div class="k-nodata" style="display:none"><div></div></div>').appendTo(i.list),i.noDataTemplate="function"!=typeof n?c.template(n):n,t):(i.noData=null,t)},_footer:function(){var i=this,a=e(i.footer),n=i.options.footerTemplate;return this._angularElement(a,"cleanup"),c.destroy(a),a.remove(),n?(i.footer=e('<div class="k-footer"></div>').appendTo(i.list),i.footerTemplate="function"!=typeof n?c.template(n):n,t):(i.footer=null,t)},_listOptions:function(t){var i=this,a=i.options,n=a.virtual,s={change:W(i._listChange,i)},r=W(i._listBound,i);return n="object"==typeof n?n:{},t=e.extend({autoBind:!1,selectable:!0,dataSource:i.dataSource,click:W(i._click,i),activate:W(i._activateItem,i),columns:a.columns,deactivate:W(i._deactivateItem,i),dataBinding:function(){i.trigger("dataBinding")},dataBound:r,height:a.height,dataValueField:a.dataValueField,dataTextField:a.dataTextField,groupTemplate:a.groupTemplate,fixedGroupTemplate:a.fixedGroupTemplate,template:a.template},t,n,s),t.template||(t.template="#:"+c.expr(t.dataTextField,"data")+"#"),a.$angular&&(t.$angular=a.$angular),t},_initList:function(){var e=this,t=e._listOptions({selectedItemChange:W(e._listChange,e)});e.listView=e.options.virtual?new c.ui.VirtualList(e.ul,t):new c.ui.StaticList(e.ul,t),e.listView.bind("listBound",W(e._listBound,e)),e._setListValue()},_setListValue:function(e){e=e||this.options.value,e!==t&&this.listView.value(e).done(W(this._updateSelectionState,this))},_updateSelectionState:e.noop,_listMousedown:function(e){this.filterInput&&this.filterInput[0]===e.target||e.preventDefault()},_isFilterEnabled:function(){var e=this.options.filter;return e&&"none"!==e},_hideClear:function(){var e=this;e._clear&&e._clear.addClass(O)},_showClear:function(){this._clear&&this._clear.removeClass(O)},_clearValue:function(){this._clearText(),this._accessor(""),this.listView.value([]),this._isSelect&&(this._customOption=t),this._isFilterEnabled()&&!this.options.enforceMinLength&&(this._filter({word:"",open:!1}),this.options.highlightFirst&&this.listView.focus(0)),this._change()},_clearText:function(){this.text("")},_clearFilter:function(){this.options.virtual||this.listView.bound(!1),this._filterSource()},_filterSource:function(e,t){var i,a,n=this,s=n.options,o=s.filterFields&&e&&e.logic&&e.filters&&e.filters.length,u=n.dataSource,c=G({},u.filter()||{}),d=e||c.filters&&c.filters.length&&!e,h=l(c,s.dataTextField);if(this._clearFilterExpressions(c),!e&&!h||!n.trigger("filtering",{filter:e}))return i={filters:[],logic:"and"},o?i.filters.push(e):this._pushFilterExpression(i,e),r(c)&&(i.logic===c.logic?i.filters=i.filters.concat(c.filters):i.filters.push(c)),n._cascading&&this.listView.setDSFilter(i),a=G({},{page:d?1:u.page(),pageSize:d?u.options.pageSize:u.pageSize(),sort:u.sort(),filter:u.filter(),group:u.group(),aggregate:u.aggregate()},{filter:i}),u[t?"read":"query"](u._mergeState(a))},_pushFilterExpression:function(t,i){r(i)&&e.trim(i.value).length&&t.filters.push(i)},_clearFilterExpressions:function(e){var t,i;if(e.filters){for(i=0;i<e.filters.length;i++)"fromFilter"in e.filters[i]&&(t=i);isNaN(t)||e.filters.splice(t,1)}},_angularElement:function(e,t){e&&this.angular(t,function(){return{elements:e}})},_renderNoData:function(){var e=this,t=e.noData;t&&(this._angularElement(t,"cleanup"),t.children(":first").html(e.noDataTemplate({instance:e})),this._angularElement(t,"compile"))},_toggleNoData:function(t){e(this.noData).toggle(t)},_toggleHeader:function(e){var t=this.listView.content.prev(T);t.toggle(e)},_renderFooter:function(){var e=this,t=e.footer;t&&(this._angularElement(t,"cleanup"),t.html(e.footerTemplate({instance:e})),this._angularElement(t,"compile"))},_allowOpening:function(){return this.options.noDataTemplate||this.dataSource.flatView().length},_initValue:function(){var e=this,t=e.options.value;null!==t?e.element.val(t):(t=e._accessor(),e.options.value=t),e._old=t},_ignoreCase:function(){var e,t=this,i=t.dataSource.reader.model;i&&i.fields&&(e=i.fields[t.options.dataTextField],e&&e.type&&"string"!==e.type&&(t.options.ignoreCase=!1))},_focus:function(e){return this.listView.focus(e)},_filter:function(e){var t,i,a=this,n=a.options,s=e.word,r=n.filterFields,l=n.dataTextField;if(r&&r.length)for(t={logic:"or",filters:[],fromFilter:!0},i=0;i<r.length;i++)this._pushFilterExpression(t,a._buildExpression(s,r[i]));else t=a._buildExpression(s,l);a._open=e.open,a._filterSource(t)},_buildExpression:function(e,t){var i=this,a=i.options,n=a.ignoreCase;return{value:n?e.toLowerCase():e,field:t,operator:a.filter,ignoreCase:n}},_clearButton:function(){var t=this,i=t.options.messages&&t.options.messages.clear?t.options.messages.clear:"clear";t._clear||(t._clear=e('<span unselectable="on" class="k-icon k-clear-value k-i-close" title="'+i+'"></span>').attr({role:"button",tabIndex:-1})),t.options.clearButton||t._clear.remove(),this._hideClear()},search:function(t){var i=this.options;t="string"==typeof t?t:this._inputValue(),clearTimeout(this._typingTimeout),(!i.enforceMinLength&&!t.length||t.length>=i.minLength)&&(this._state="filter",this.listView&&(this.listView._emptySearch=!e.trim(t).length),this._isFilterEnabled()?this._filter({word:t,open:!0}):this._searchByWord(t))},current:function(e){return this._focus(e)},items:function(){return this.ul[0].children},destroy:function(){var e=this,t=e.ns;p.fn.destroy.call(e),e._unbindDataSource(),e.listView.destroy(),e.list.off(t),e.popup.destroy(),e._form&&e._form.off("reset",e._resetHandler)},dataItem:function(i){var a=this;if(i===t)return a.listView.selectedDataItems()[0];if("number"!=typeof i){if(a.options.virtual)return a.dataSource.getByUid(e(i).data("uid"));i=e(a.items()).index(i)}return a.dataSource.flatView()[i]},_activateItem:function(){var e=this.listView.focus();e&&this._focused.add(this.filterInput).attr("aria-activedescendant",e.attr("id"))},_deactivateItem:function(){this._focused.add(this.filterInput).removeAttr("aria-activedescendant")},_accessors:function(){var e=this,t=e.element,i=e.options,a=c.getter,n=t.attr(c.attr("text-field")),s=t.attr(c.attr("value-field"));!i.dataTextField&&n&&(i.dataTextField=n),!i.dataValueField&&s&&(i.dataValueField=s),e._text=a(i.dataTextField),e._value=a(i.dataValueField)},_aria:function(e){var i=this,a=i.options,n=i._focused.add(i.filterInput);a.suggest!==t&&n.attr("aria-autocomplete",a.suggest?"both":"list"),e=e?e+" "+i.ul[0].id:i.ul[0].id,n.attr("aria-owns",e),i.ul.attr("aria-live",i._isFilterEnabled()?"polite":"off"),i._ariaLabel()},_ariaLabel:function(){var t,i=this,a=i._focused,n=i.element,s=n.attr("id"),r=e('label[for="'+s+'"]'),l=n.attr("aria-label"),o=n.attr("aria-labelledby");a!==n&&(l?a.attr("aria-label",l):o?a.attr("aria-labelledby",o):r.length&&(t=r.attr("id")||i._generateLabelId(r,s),a.attr("aria-labelledby",t)))},_generateLabelId:function(e,t){var i=t+k;return e.attr("id",i),i},_blur:function(){var e=this;e._change(),e.close()},_change:function(){var e,a=this,n=a.selectedIndex,s=a.options.value,r=a.value();a._isSelect&&!a.listView.bound()&&s&&(r=s),r!==i(a._old,typeof r)?e=!0:a._valueBeforeCascade!==t&&a._valueBeforeCascade!==i(a._old,typeof a._valueBeforeCascade)&&a._userTriggered?e=!0:n===t||n===a._oldIndex||a.listView.isFiltered()||(e=!0),e&&(a._valueBeforeCascade=a._old=null===a._old||""===a._old||""===r?r:a.dataItem()?a.options.dataValueField?a.dataItem()[a.options.dataValueField]:a.dataItem():null,a._oldIndex=n,a._typing||a.element.trigger(w),a.trigger(w)),a.typing=!1},_data:function(){return this.dataSource.view()},_enable:function(){var e=this,i=e.options,a=e.element.is("[disabled]");i.enable!==t&&(i.enabled=i.enable),!i.enabled||a?e.enable(!1):e.readonly(e.element.is("[readonly]"))},_dataValue:function(e){var i=this._value(e);return i===t&&(i=this._text(e)),i},_offsetHeight:function(){var t=0,i=this.listView.content.prevAll(":visible");return i.each(function(){var i=e(this);t+=h(i,!0)}),t},_height:function(i){var a,n,s,r=this,l=r.list,o=r.options.height,u=r.popup.visible();if(i||r.options.noDataTemplate){if(n=l.add(l.parent(".k-animation-container")).show(),!l.is(":visible"))return n.hide(),t;o=r.listView.content[0].scrollHeight>o?o:"auto",n.height(o),"auto"!==o&&(a=r._offsetHeight(),s=h(e(r.footer))||0,o=o-a-s),r.listView.content.height(o),u||n.hide()}return o},_openHandler:function(e){this._adjustListWidth(),this.trigger(C)?e.preventDefault():(this._focused.attr("aria-expanded",!0),this.ul.attr("aria-hidden",!1))},_adjustListWidth:function(){var e,t,i=this,a=i.list,n=a[0].style.width,s=i.wrapper;if(a.data(N)||!n)return e=window.getComputedStyle?window.getComputedStyle(s[0],null):0,t=parseFloat(e&&e.width)||b(s),e&&A.msie&&(t+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth)),n="border-box"!==a.css("box-sizing")?t-(b(a)-a.width()):t,a.css({fontFamily:s.css("font-family"),width:i.options.autoWidth?"auto":n,minWidth:n,whiteSpace:i.options.autoWidth?"nowrap":"normal"}).data(N,n),!0},_closeHandler:function(e){this.trigger(D)?e.preventDefault():(this._focused.attr("aria-expanded",!1),this.ul.attr("aria-hidden",!0))},_focusItem:function(){var e=this.listView,i=!e.focus(),n=a(e.select());n===t&&this.options.highlightFirst&&i&&(n=0),n!==t?e.focus(n):i&&e.scrollToIndex(0)},_calculateGroupPadding:function(e){var t=this.ul.children(".k-first:first"),i=this.listView.content.prev(T),a=0;i[0]&&"none"!==i[0].style.display&&("auto"!==e&&(a=c.support.scrollbar()),a+=parseFloat(t.css("border-right-width"),10)+parseFloat(t.children(".k-group").css("padding-right"),10),i.css("padding-right",a))},_calculatePopupHeight:function(e){var t=this._height(this.dataSource.flatView().length||e);this._calculateGroupPadding(t),this._calculateColumnsHeaderPadding(t)},_calculateColumnsHeaderPadding:function(e){var t,i,a;this.options.columns&&this.options.columns.length&&(t=this,i=g.isRtl(t.wrapper),a=c.support.scrollbar(),t.columnsHeader.css(i?"padding-left":"padding-right","auto"!==e?a:0))},_resizePopup:function(e){this.options.virtual||(this.popup.element.is(":visible")?this._calculatePopupHeight(e):this.popup.one("open",function(e){return W(function(){this._calculatePopupHeight(e)},this)}.call(this,e)))},_popup:function(){var e=this;e.popup=new d.Popup(e.list,G({},e.options.popup,{anchor:e.wrapper,open:W(e._openHandler,e),close:W(e._closeHandler,e),animation:e.options.animation,isRtl:g.isRtl(e.wrapper),autosize:e.options.autoWidth}))},_makeUnselectable:function(){M&&this.list.find("*").not(".k-textbox").attr("unselectable","on")},_toggleHover:function(t){e(t.currentTarget).toggleClass(y,"mouseenter"===t.type)},_toggle:function(e,i){var a=this,n=g.mobileOS&&(g.touch||g.MSPointers||g.pointers);e=e!==t?e:!a.popup.visible(),i||n||a._focused[0]===v()||(a._prevent=!0,a._focused.focus(),a._prevent=!1),a[e?C:D]()},_triggerCascade:function(){var e=this;e._cascadeTriggered&&e.value()===i(e._cascadedValue,typeof e.value())||(e._cascadedValue=e.value(),e._cascadeTriggered=!0,e.trigger(H,{userTriggered:e._userTriggered}))},_triggerChange:function(){this._valueBeforeCascade!==this.value()&&this.trigger(w)},_unbindDataSource:function(){var e=this;e.dataSource.unbind(P,e._requestStartHandler).unbind(L,e._requestEndHandler).unbind("error",e._errorHandler)},requireValueMapper:function(e,t){var i=(e.value instanceof Array?e.value.length:e.value)||(t instanceof Array?t.length:t);if(i&&e.virtual&&"function"!=typeof e.virtual.valueMapper)throw Error("ValueMapper is not provided while the value is being set. See http://docs.telerik.com/kendo-ui/controls/editors/combobox/virtualization#the-valuemapper-function")}});G(j,{inArray:function(e,t){var i,a,n=t.children;if(!e||e.parentNode!==t)return-1;for(i=0,a=n.length;i<a;i++)if(e===n[i])return i;return-1},unifyType:i}),c.ui.List=j,d.Select=j.extend({init:function(e,t){j.fn.init.call(this,e,t),this._initial=this.element.val()},setDataSource:function(e){var t,i=this;i.options.dataSource=e,i._dataSource(),i.listView.bound()&&(i._initialIndex=null,i.listView._current=null),i.listView.setDataSource(i.dataSource),i.options.autoBind&&i.dataSource.fetch(),t=i._parentWidget(),t&&i._cascadeSelect(t)},close:function(){this.popup.close()},select:function(e){var i=this;return e===t?i.selectedIndex:i._select(e).done(function(){i._cascadeValue=i._old=i._accessor(),i._oldIndex=i.selectedIndex})},_accessor:function(e,t){return this[this._isSelect?"_accessorSelect":"_accessorInput"](e,t)},_accessorInput:function(e){var i=this.element[0];return e===t?i.value:(null===e&&(e=""),i.value=e,t)},_accessorSelect:function(e,i){var a,s=this.element[0];return e===t?n(s).value||"":(n(s).selected=!1,i===t&&(i=-1),a=null!==e&&""!==e,a&&i==-1?this._custom(e):e?s.value=e:s.selectedIndex=i,t)},_syncValueAndText:function(){return!0},_custom:function(t){var i=this,a=i.element,n=i._customOption;n||(n=e("<option/>"),i._customOption=n,a.append(n)),n.text(t),n[0].selected=!0},_hideBusy:function(){var e=this;clearTimeout(e._busy),e._arrowIcon.removeClass(F),e._focused.attr("aria-busy",!1),e._busy=null,e._showClear()},_showBusy:function(e){var t=this;e.isDefaultPrevented()||(t._request=!0,t._busy||(t._busy=setTimeout(function(){t._arrowIcon&&(t._focused.attr("aria-busy",!0),t._arrowIcon.addClass(F),t._hideClear())},100)))},_requestEnd:function(){this._request=!1,this._hideBusy()},_dataSource:function(){var t,i=this,a=i.element,n=i.options,s=n.dataSource||{};s=e.isArray(s)?{data:s}:s,i._isSelect&&(t=a[0].selectedIndex,t>-1&&(n.index=t),s.select=a,s.fields=[{field:n.dataTextField},{field:n.dataValueField}]),i.dataSource?i._unbindDataSource():(i._requestStartHandler=W(i._showBusy,i),i._requestEndHandler=W(i._requestEnd,i),i._errorHandler=W(i._hideBusy,i)),i.dataSource=c.data.DataSource.create(s).bind(P,i._requestStartHandler).bind(L,i._requestEndHandler).bind("error",i._errorHandler)},_firstItem:function(){this.listView.focusFirst()},_lastItem:function(){this.listView.focusLast()},_nextItem:function(){this.listView.focusNext()},_prevItem:function(){this.listView.focusPrev()},_move:function(e){var i,a,n,s,r,l,o=this,u=o.listView,c=e.keyCode,d=c===_.DOWN;if(c===_.UP||d){if(e.altKey)o.toggle(d);else{if(!u.bound()&&!o.ul[0].firstChild)return o._fetch||(o.dataSource.one(w,function(){o._fetch=!1,o._move(e)}),o._fetch=!0,o._filterSource()),e.preventDefault(),!0;if(n=o._focus(),o._fetch||n&&!n.hasClass("k-state-selected")||(d?(o._nextItem(),o._focus()||o._lastItem()):(o._prevItem(),o._focus()||o._firstItem())),i=u.dataItemByIndex(u.getElementIndex(o._focus())),o.trigger(E,{dataItem:i,item:o._focus()}))return o._focus(n),t;o._select(o._focus(),!0).done(function(){o.popup.visible()||o._blur(),o._cascadedValue=null===o._cascadedValue?o.value():o.dataItem()?o.dataItem()[o.options.dataValueField]||o.dataItem():null})}e.preventDefault(),a=!0}else if(c===_.ENTER||c===_.TAB){if(o.popup.visible()&&e.preventDefault(),n=o._focus(),i=o.dataItem(),o.popup.visible()||i&&o.text()===o._text(i)||(n=null),s=o.filterInput&&o.filterInput[0]===v(),n){if(i=u.dataItemByIndex(u.getElementIndex(n)),r=!0,i&&(r=o._value(i)!==j.unifyType(o.value(),typeof o._value(i))),r&&o.trigger(E,{dataItem:i,item:n}))return;o._select(n)}else o.input&&((o._syncValueAndText()||o._isSelect)&&o._accessor(o.input.val()),o.listView.value(o.input.val()));o._focusElement&&o._focusElement(o.wrapper),s&&c===_.TAB?o.wrapper.focusout():o._blur(),o.close(),a=!0}else c===_.ESC?(o.popup.visible()&&e.preventDefault(),o.close(),a=!0):!o.popup.visible()||c!==_.PAGEDOWN&&c!==_.PAGEUP||(e.preventDefault(),l=c===_.PAGEDOWN?1:-1,u.scrollWith(l*u.screenHeight()),a=!0);return a},_fetchData:function(){var e=this,t=!!e.dataSource.view().length;e._request||e.options.cascadeFrom||e.listView.bound()||e._fetch||t||(e._fetch=!0,e.dataSource.fetch().done(function(){e._fetch=!1}))},_options:function(e,i,a){var s,r,l,o,u=this,c=u.element,d=c[0],h=e.length,f="",p=0;for(i&&(f=i);p<h;p++)s="<option",r=e[p],l=u._text(r),o=u._value(r),o!==t&&(o+="",o.indexOf('"')!==-1&&(o=o.replace(U,"&quot;")),s+=' value="'+o+'"'),s+=">",l!==t&&(s+=m(l)),s+="</option>",f+=s;c.html(f),a!==t&&(d.value=a,d.value&&!a&&(d.selectedIndex=-1)),d.selectedIndex!==-1&&(s=n(d),s&&s.setAttribute(B,B))},_reset:function(){var t=this,i=t.element,a=i.attr("form"),n=a?e("#"+a):i.closest("form");n[0]&&(t._resetHandler=function(){setTimeout(function(){t.value(t._initial)})},t._form=n.on("reset",t._resetHandler))},_parentWidget:function(){var t,i,a=this.options.name;if(this.options.cascadeFrom)return t=e("#"+this.options.cascadeFrom),i=t.data("kendo"+a),i||(i=t.data("kendo"+z[a])),i},_cascade:function(){var e,t=this,i=t.options,a=i.cascadeFrom;if(a){if(e=t._parentWidget(),!e)return;t._cascadeHandlerProxy=W(t._cascadeHandler,t),t._cascadeFilterRequests=[],i.autoBind=!1,e.bind("set",function(){t.one("set",function(e){t._selectedValue=e.value||t._accessor()})}),e.first(H,t._cascadeHandlerProxy),e.listView.bound()?(t._toggleCascadeOnFocus(),t._cascadeSelect(e)):(e.one("dataBound",function(){t._toggleCascadeOnFocus(),e.popup.visible()&&e._focused.focus()}),e.value()||t.enable(!1))}},_toggleCascadeOnFocus:function(){var e=this,t=e._parentWidget(),i=R?"blur":"focusout";t._focused.add(t.filterInput).bind("focus",function(){t.unbind(H,e._cascadeHandlerProxy),t.first(w,e._cascadeHandlerProxy)}),t._focused.add(t.filterInput).bind(i,function(){t.unbind(w,e._cascadeHandlerProxy),t.first(H,e._cascadeHandlerProxy)})},_cascadeHandler:function(e){var t=this._parentWidget(),i=this.value();this._userTriggered=e.userTriggered,this.listView.bound()&&this._clearSelection(t,!0),this._cascadeSelect(t,i)},_cascadeChange:function(e){var t=this,a=t._accessor()||t._selectedValue;t._cascadeFilterRequests.length||(t._selectedValue=null),t._userTriggered?t._clearSelection(e,!0):a?(a!==i(t.listView.value()[0],typeof a)&&t.value(a),t.dataSource.view()[0]&&t.selectedIndex!==-1||t._clearSelection(e,!0)):t.dataSource.flatView().length&&t.select(t.options.index),t.enable(),t._triggerCascade(),t._triggerChange(),t._userTriggered=!1},_cascadeSelect:function(e,i){var a,n,s=this,r=e.dataItem(),o=r?r[s.options.cascadeFromParentField]||e._value(r):null,u=s.options.cascadeFromField||e.options.dataValueField;s._valueBeforeCascade=i!==t?i:s.value(),o||0===o?(a=s.dataSource.filter()||{},l(a,u),n=function(){var t=s._cascadeFilterRequests.shift();t&&s.unbind("dataBound",t),t=s._cascadeFilterRequests[0],t&&s.first("dataBound",t),s._cascadeChange(e)},s._cascadeFilterRequests.push(n),1===s._cascadeFilterRequests.length&&s.first("dataBound",n),s._cascading=!0,s._filterSource({field:u,operator:"eq",value:o}),s._cascading=!1):(s.enable(!1),s._clearSelection(e),s._triggerCascade(),s._triggerChange(),s._userTriggered=!1)}}),o=".StaticList",u=c.ui.DataBoundWidget.extend({init:function(t,i){p.fn.init.call(this,t,i),this.element.attr("role","listbox").on("click"+o,"li",W(this._click,this)).on("mouseenter"+o,"li",function(){e(this).addClass(y)}).on("mouseleave"+o,"li",function(){e(this).removeClass(y)}),g.touch&&this._touchHandlers(),"multiple"===this.options.selectable&&this.element.attr("aria-multiselectable",!0),this.content=this.element.wrap("<div class='k-list-scroller' unselectable='on'></div>").parent(),this.header=this.content.before('<div class="k-group-header" style="display:none"></div>').prev(),this.bound(!1),this._optionID=c.guid(),this._selectedIndices=[],this._view=[],this._dataItems=[],this._values=[];var a=this.options.value;a&&(this._values=e.isArray(a)?a.slice(0):[a]),this._getter(),this._templates(),this.setDataSource(this.options.dataSource),this._onScroll=W(function(){var e=this;clearTimeout(e._scrollId),e._scrollId=setTimeout(function(){e._renderHeader()},50)},this)},options:{name:"StaticList",dataValueField:null,valuePrimitive:!1,selectable:!0,template:null,groupTemplate:null,fixedGroupTemplate:null},events:["click",w,"activate","deactivate","dataBinding","dataBound","selectedItemChange"],setDataSource:function(t){var i,a=this,n=t||{};n=e.isArray(n)?{data:n}:n,n=c.data.DataSource.create(n),a.dataSource?(a.dataSource.unbind(w,a._refreshHandler),i=a.value(),a.value([]),a.bound(!1),a.value(i)):a._refreshHandler=W(a.refresh,a),a.setDSFilter(n.filter()),a.dataSource=n.bind(w,a._refreshHandler),a._fixedHeader()},_touchHandlers:function(){var t,i,a=this,n=function(e){return(e.originalEvent||e).changedTouches[0].pageY};a.element.on("touchstart"+o,function(e){t=n(e)}),a.element.on("touchend"+o,function(s){s.isDefaultPrevented()||(i=n(s),Math.abs(i-t)<10&&(s.preventDefault(),a.trigger("click",{item:e(s.target.closest(V))})))})},skip:function(){return this.dataSource.skip()},setOptions:function(e){p.fn.setOptions.call(this,e),this._getter(),this._templates(),this._render()},destroy:function(){this.element.off(o),this._refreshHandler&&this.dataSource.unbind(w,this._refreshHandler),clearTimeout(this._scrollId),p.fn.destroy.call(this)},dataItemByIndex:function(e){return this.dataSource.flatView()[e]},screenHeight:function(){return this.content[0].clientHeight},scrollToIndex:function(e){var t=this.element[0].children[e];t&&this.scroll(t)},scrollWith:function(e){this.content.scrollTop(this.content.scrollTop()+e)},scroll:function(e){if(e){e[0]&&(e=e[0]);var t=this.content[0],i=e.offsetTop,a=e.offsetHeight,n=t.scrollTop,s=t.clientHeight,r=i+a;n>i?n=i:r>n+s&&(n=r-s),t.scrollTop=n}},selectedDataItems:function(e){return e===t?this._dataItems.slice():(this._dataItems=e,this._values=this._getValues(e),t)},_getValues:function(t){var i=this._valueGetter;return e.map(t,function(e){return i(e)})},focusNext:function(){var e=this.focus();e=e?e.next():0,this.focus(e)},focusPrev:function(){var e=this.focus();e=e?e.prev():this.element[0].children.length-1,this.focus(e)},focusFirst:function(){this.focus(this.element[0].children[0])},focusLast:function(){this.focus(a(this.element[0].children))},focus:function(i){var n,s=this,r=s._optionID;return i===t?s._current:(i=a(s._get(i)),i=e(this.element[0].children[i]),s._current&&(s._current.removeClass(S).removeAttr(I),s.trigger("deactivate")),n=!!i[0],n&&(i.addClass(S),s.scroll(i),i.attr("id",r)),s._current=n?i:null,s.trigger("activate"),t)},focusIndex:function(){return this.focus()?this.focus().index():t},skipUpdate:function(e){this._skipUpdate=e},select:function(i){var n,s,r,l=this,o=l.options.selectable,u="multiple"!==o&&o!==!1,c=l._selectedIndices,d=[],h=[];return i===t?c.slice():(i=l._get(i),1===i.length&&i[0]===-1&&(i=[]),s=e.Deferred().resolve(),r=l.isFiltered(),r&&!u&&l._deselectFiltered(i)?s:u&&!r&&e.inArray(a(i),c)!==-1?(l._dataItems.length&&l._view.length&&(l._dataItems=[l._view[c[0]].item]),s):(n=l._deselect(i),h=n.removed,i=n.indices,i.length&&(u&&(i=[a(i)]),d=l._select(i)),(d.length||h.length)&&(l._valueComparer=null,l.trigger(w,{added:d,removed:h})),s))},removeAt:function(e){return this._selectedIndices.splice(e,1),this._values.splice(e,1),this._valueComparer=null,{position:e,dataItem:this._dataItems.splice(e,1)[0]}},setValue:function(t){t=e.isArray(t)||t instanceof x?t.slice(0):[t],this._values=t,this._valueComparer=null},value:function(i){var a,n=this,s=n._valueDeferred;return i===t?n._values.slice():(n.setValue(i),s&&"resolved"!==s.state()||(n._valueDeferred=s=e.Deferred()),n.bound()&&(a=n._valueIndices(n._values),"multiple"===n.options.selectable&&n.select(-1),n.select(a),s.resolve()),n._skipUpdate=!1,s)},items:function(){return this.element.children(V)},_click:function(t){t.isDefaultPrevented()||this.trigger("click",{item:e(t.currentTarget)})||this.select(t.currentTarget)},_valueExpr:function(e,t){var a,n,s=this,r=0,l=[];if(!s._valueComparer||s._valueType!==e){for(s._valueType=e;r<t.length;r++)l.push(i(t[r],e));a="for (var idx = 0; idx < "+l.length+"; idx++) { if (current === values[idx]) {   return idx; }} return -1;",n=Function("current","values",a),s._valueComparer=function(e){return n(e,l)}}return s._valueComparer},_dataItemPosition:function(e,t){var i=this._valueGetter(e),a=this._valueExpr(typeof i,t);return a(i)},_getter:function(){this._valueGetter=c.getter(this.options.dataValueField)},_deselect:function(t){var i,a,n,s=this,r=s.element[0].children,l=s.options.selectable,o=s._selectedIndices,u=s._dataItems,c=s._values,d=[],h=0,f=0;if(t=t.slice(),l!==!0&&t.length){if("multiple"===l)for(;h<t.length;h++)if(a=t[h],e(r[a]).hasClass("k-state-selected"))for(i=0;i<o.length;i++)if(n=o[i],n===a){e(r[n]).removeClass("k-state-selected").attr("aria-selected",!1),d.push({position:i+f,dataItem:u.splice(i,1)[0]}),o.splice(i,1),t.splice(h,1),c.splice(i,1),f+=1,h-=1,i-=1;break}}else{for(;h<o.length;h++)e(r[o[h]]).removeClass("k-state-selected").attr("aria-selected",!1),d.push({position:h,dataItem:u[h]});s._values=[],s._dataItems=[],s._selectedIndices=[]}return{indices:t,removed:d}},_deselectFiltered:function(t){for(var i,a,n,s=this.element[0].children,r=[],l=0;l<t.length;l++)a=t[l],i=this._view[a].item,n=this._dataItemPosition(i,this._values),n>-1&&(r.push(this.removeAt(n)),e(s[a]).removeClass("k-state-selected"));return!!r.length&&(this.trigger(w,{added:[],removed:r}),!0)},_select:function(t){var i,n,s=this,r=s.element[0].children,l=s._view,o=[],u=0;for(a(t)!==-1&&s.focus(t);u<t.length;u++)n=t[u],i=l[n],n!==-1&&i&&(i=i.item,s._selectedIndices.push(n),s._dataItems.push(i),s._values.push(s._valueGetter(i)),e(r[n]).addClass("k-state-selected").attr("aria-selected",!0),o.push({dataItem:i}));return o},getElementIndex:function(t){return e(t).data("offset-index")},_get:function(e){return"number"==typeof e?e=[e]:q(e)||(e=this.getElementIndex(e),e=[e!==t?e:-1]),e},_template:function(){var e=this,t=e.options,i=t.template;return i?(i=c.template(i),i=function(e){return'<li tabindex="-1" role="option" unselectable="on" class="k-item">'+i(e)+"</li>"}):i=c.template('<li tabindex="-1" role="option" unselectable="on" class="k-item">${'+c.expr(t.dataTextField,"data")+"}</li>",{useWithBlock:!1}),i},_templates:function(){var e,t,i,a,n,s=this.options,r={template:s.template,groupTemplate:s.groupTemplate,fixedGroupTemplate:s.fixedGroupTemplate};if(s.columns)for(t=0;t<s.columns.length;t++)i=s.columns[t],a=i.field?""+i.field:"text",r["column"+t]=i.template||"#: "+a+"#";for(n in r)e=r[n],e&&"function"!=typeof e&&(r[n]=c.template(e));this.templates=r},_normalizeIndices:function(e){for(var i=[],a=0;a<e.length;a++)e[a]!==t&&i.push(e[a]);return i},_valueIndices:function(e,t){var i,a=this._view,n=0;if(t=t?t.slice():[],!e.length)return[];for(;n<a.length;n++)i=this._dataItemPosition(a[n].item,e),i!==-1&&(t[i]=n);return this._normalizeIndices(t)},_firstVisibleItem:function(){for(var t=this.element[0],i=this.content[0],a=i.scrollTop,n=e(t.children[0]).height(),s=Math.floor(a/n)||0,r=t.children[s]||t.lastChild,l=r.offsetTop<a;r;)if(l){if(r.offsetTop+n>a||!r.nextSibling)break;r=r.nextSibling}else{if(r.offsetTop<=a||!r.previousSibling)break;r=r.previousSibling}return this._view[e(r).data("offset-index")]},_fixedHeader:function(){this.isGrouped()&&this.templates.fixedGroupTemplate?(this.header.show(),this.content.scroll(this._onScroll)):(this.header.hide(),this.content.off("scroll",this._onScroll))},_renderHeader:function(){var e,t=this.templates.fixedGroupTemplate;t&&(e=this._firstVisibleItem(),e&&e.group&&this.header.html(t(e.group)))},_renderItem:function(e){var t='<li tabindex="-1" role="option" unselectable="on" class="k-item',i=e.item,a=0!==e.index,n=e.selected,s=this.isGrouped(),r=this.options.columns&&this.options.columns.length;return a&&e.newGroup&&(t+=" k-first"),e.isLastGroupedItem&&r&&(t+=" k-last"),n&&(t+=" k-state-selected"),t+='" aria-selected="'+(n?"true":"false")+'" data-offset-index="'+e.index+'">',t+=r?this._renderColumns(i):this.templates.template(i),a&&e.newGroup?t+=r?'<div class="k-cell k-group-cell"><span>'+this.templates.groupTemplate(e.group)+"</span></div>":'<div class="k-group">'+this.templates.groupTemplate(e.group)+"</div>":s&&r&&(t+="<div class='k-cell k-spacer-cell'></div>"),t+"</li>"},_renderColumns:function(e){var t,i,a,n,s="";for(t=0;t<this.options.columns.length;t++)i=this.options.columns[t].width,a=parseInt(i,10),n="",i&&!isNaN(a)&&(n+="style='width:",n+=a,n+=f.test(i)?"%":"px",n+=";'"),s+="<span class='k-cell' "+n+">",s+=this.templates["column"+t](e),s+="</span>";return s},_render:function(){var e,t,i,a,n="",s=0,r=0,l=[],o=this.dataSource.view(),u=this.value(),c=this.isGrouped();if(c)for(s=0;s<o.length;s++)for(t=o[s],i=!0,a=0;a<t.items.length;a++)e={selected:this._selected(t.items[a],u),
item:t.items[a],group:t.value,newGroup:i,isLastGroupedItem:a===t.items.length-1,index:r},l[r]=e,r+=1,n+=this._renderItem(e),i=!1;else for(s=0;s<o.length;s++)e={selected:this._selected(o[s],u),item:o[s],index:s},l[s]=e,n+=this._renderItem(e);this._view=l,this.element[0].innerHTML=n,c&&l.length&&this._renderHeader()},_selected:function(e,t){var i=!this.isFiltered()||"multiple"===this.options.selectable;return i&&this._dataItemPosition(e,t)!==-1},setDSFilter:function(e){this._lastDSFilter=G({},e)},isFiltered:function(){return this._lastDSFilter||this.setDSFilter(this.dataSource.filter()),!c.data.Query.compareFilters(this.dataSource.filter(),this._lastDSFilter)},refresh:function(e){var t,i=this,a=e&&e.action,n=i.options.skipUpdateOnBind,r="itemchange"===a;i.trigger("dataBinding"),i._angularItems("cleanup"),i._fixedHeader(),i._render(),i.bound(!0),r||"remove"===a?(t=s(i._dataItems,e.items),t.changed.length&&(r?i.trigger("selectedItemChange",{items:t.changed}):i.value(i._getValues(t.unchanged)))):i.isFiltered()||i._skipUpdate||i._emptySearch?(i.focus(0),i._skipUpdate&&(i._skipUpdate=!1,i._selectedIndices=i._valueIndices(i._values,i._selectedIndices))):n||a&&"add"!==a||i.value(i._values),i._valueDeferred&&i._valueDeferred.resolve(),i._angularItems("compile"),i.trigger("dataBound")},bound:function(e){return e===t?this._bound:(this._bound=e,t)},isGrouped:function(){return(this.dataSource.group()||[]).length}}),d.plugin(u)}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,t,i){(i||t)()});
//# sourceMappingURL=kendo.list.min.js.map;
