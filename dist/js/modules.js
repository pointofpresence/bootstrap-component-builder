/**
 * Copyright (c) 2015 pointofpresence
 * bootstrap-component-builder - Online component builder for Bootstrap 3
 * @version v1.0.12
 * @link https://github.com/pointofpresence/bootstrap-component-builder
 * @license MIT
 */
define("lib/Search",["jquery"],function($){"use strict";var t=function(t,n){this.$element=$(t),this.options=$.extend({},$.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=$(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=$.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=$.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){for(var i,t=[],n=[],r=[];i=e.shift();)i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=$(t).map(function(t,r){return t=$(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=$(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",$.proxy(this.focus,this)).on("blur",$.proxy(this.blur,this)).on("keypress",$.proxy(this.keypress,this)).on("keyup",$.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",$.proxy(this.keydown,this)),this.$menu.on("click",$.proxy(this.click,this)).on("mouseenter","li",$.proxy(this.mouseenter,this)).on("mouseleave","li",$.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t="function"==typeof this.$element[e]),t},move:function(e){if(this.shown){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()}},keydown:function(t){this.suppressKeyPressRepeat=~$.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),$(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=$.fn.typeahead;$.fn.typeahead=function(n){return this.each(function(){var r=$(this),i=r.data("typeahead"),s="object"==typeof n&&n;i||r.data("typeahead",i=new t(this,s)),"string"==typeof n&&i[n]()})},$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},$.fn.typeahead.Constructor=t,$.fn.typeahead.noConflict=function(){return $.fn.typeahead=n,this},$(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=$(this);n.data("typeahead")||n.typeahead(n.data())})}),define("models/Button",["backbone"],function(Backbone){"use strict";return Backbone.Model.extend({defaults:{name:"Default text here",size:2,fullwidth:!1,type:0,icon:"",iconplacement:"left",gadget:"Link"}})}),define("views/Button",["backbone","templates","jquery"],function(Backbone,templates,$){"use strict";return Backbone.View.extend({el:"#result",initialize:function(){this.$("#type-"+this.model.get("gadget")).prop("checked",!0),this.model.on("change",this.render,this),this.render()},events:{"click #output":"selectOutput","change .gadget":"setGadget"},setGadget:function(e){var g=$(e.currentTarget).data("type");this.model.set({gadget:g})},selectOutput:function(e){var t=$(e.currentTarget);t.select()},render:function(){var g=this.model.get("gadget"),d={type:components[this.model.get("gadget")].color[this.model.get("type")],size:components[this.model.get("gadget")].size[this.model.get("size")],fullwidth:this.model.get("fullwidth"),iconplacement:this.model.get("iconplacement"),icon:this.model.get("icon"),name:this.model.get("name")},t=templates["output"+g],e=t(d);this.$("#button").html(e),this.$("#output").val(e),components[this.model.get("gadget")].url&&this.$("#button").append(templates.More({url:components[this.model.get("gadget")].url,name:components[this.model.get("gadget")].name}))}})}),define("views/Color",["backbone","jquery"],function(Backbone,$){"use strict";return Backbone.View.extend({el:$("#types"),events:{"click button":"open"},open:function(e){this.model.set({type:parseInt($(e.currentTarget).data("value"))})}})}),define("views/Icon",["backbone","jquery"],function(Backbone,$){"use strict";return Backbone.View.extend({el:"#icons",events:{"click .bs-glyphicons a":"update","click #icon-position button":"updatePosition","click #icon-color button":"updateColor","change input#search":"updateFromSearch"},updatePosition:function(e){e.preventDefault(),this.model.set({iconplacement:e.currentTarget.value})},update:function(e){return e.preventDefault(),$(e.currentTarget).find("span").hasClass("empty-icon")?void this.model.set({icon:""}):void this.model.set({icon:$(e.currentTarget).find("span").attr("class")})},updateFromSearch:function(e){e.preventDefault(),this.model.set({icon:e.currentTarget.value})}})}),define("views/Name",["backbone"],function(Backbone){"use strict";return Backbone.View.extend({el:"#input",events:{"change input#name":"update"},update:function(e){e.preventDefault(),this.model.set({name:e.currentTarget.value})}})}),define("views/Size",["backbone","jquery"],function(Backbone,$){"use strict";return Backbone.View.extend({el:"#sizes",events:{"click button":"open","click .btn-block":"toggle"},open:function(e){e.preventDefault(),this.model.set({size:parseInt($(e.currentTarget).data("value"))})},toggle:function(e){e.preventDefault(),this.model.set({fullwidth:!this.model.get("fullwidth")})}})}),define("templates",function(require){"use strict";return{More:require("tpl!templates/More.ejs"),outputAccordion:require("tpl!templates/outputAccordion.ejs"),outputAlert:require("tpl!templates/outputAlert.ejs"),outputBreadcrumbs:require("tpl!templates/outputBreadcrumbs.ejs"),outputButton:require("tpl!templates/outputButton.ejs"),outputButtonBadge:require("tpl!templates/outputButtonBadge.ejs"),outputCarousel:require("tpl!templates/outputCarousel.ejs"),outputCheckboxButton:require("tpl!templates/outputCheckboxButton.ejs"),outputCollapse:require("tpl!templates/outputCollapse.ejs"),outputDismissAlert1:require("tpl!templates/outputDismissAlert1.ejs"),outputDismissAlert2:require("tpl!templates/outputDismissAlert2.ejs"),outputDropdownButton:require("tpl!templates/outputDropdownButton.ejs"),outputInputGroup:require("tpl!templates/outputInputGroup.ejs"),outputJumbotron:require("tpl!templates/outputJumbotron.ejs"),outputLabel:require("tpl!templates/outputLabel.ejs"),outputLink:require("tpl!templates/outputLink.ejs"),outputLinkBadge:require("tpl!templates/outputLinkBadge.ejs"),outputListGroup:require("tpl!templates/outputListGroup.ejs"),outputLoadingButton:require("tpl!templates/outputLoadingButton.ejs"),outputMedia:require("tpl!templates/outputMedia.ejs"),outputModal:require("tpl!templates/outputModal.ejs"),outputNavbar:require("tpl!templates/outputNavbar.ejs"),outputNavbarInverted:require("tpl!templates/outputNavbarInverted.ejs"),outputPageHeader:require("tpl!templates/outputPageHeader.ejs"),outputPager:require("tpl!templates/outputPager.ejs"),outputPagination:require("tpl!templates/outputPagination.ejs"),outputPanel:require("tpl!templates/outputPanel.ejs"),outputPills:require("tpl!templates/outputPills.ejs"),outputPopover:require("tpl!templates/outputPopover.ejs"),outputProgressbar:require("tpl!templates/outputProgressbar.ejs"),outputRadioButton:require("tpl!templates/outputRadioButton.ejs"),outputScrollSpy:require("tpl!templates/outputScrollSpy.ejs"),outputTabs:require("tpl!templates/outputTabs.ejs"),outputThumbnail:require("tpl!templates/outputThumbnail.ejs"),outputThumbnailCustom:require("tpl!templates/outputThumbnailCustom.ejs"),outputTooltip:require("tpl!templates/outputTooltip.ejs"),outputWell:require("tpl!templates/outputWell.ejs")}}),require.config({paths:{underscore:"//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",backbone:"//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",jquery:"//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min",bootstrap:"//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min"},shim:{underscore:{exports:"_"},backbone:{exports:"Backbone",deps:["jquery","underscore"]},bootstrap:{deps:["jquery"]}},waitSeconds:60}),require(["jquery","views/Button","views/Size","views/Color","views/Name","views/Icon","models/Button","lib/Search","bootstrap"],function($,ButtonView,SizeView,ColorView,NameView,IconView,ButtonModel){"use strict";$(function(){var button=new ButtonModel,buttonView=new ButtonView({model:button}),icons=(new SizeView({model:button}),new ColorView({model:button}),new NameView({model:button}),new IconView({model:button}),[]);$(".bs-glyphicons").children().each(function(){var classStr=$(this).find("a").find("span").attr("class");icons.push(classStr)}),$(".typeahead").typeahead({source:icons,items:12}),$('[data-toggle="tooltip"]').tooltip(),$("a.result-tab").on("shown.bs.tab",function(e){$($(e.target).attr("href")).find("input:first").trigger("click"),$($(e.relatedTarget).attr("href")).find("input").prop("checked",!1),buttonView.render()})})});