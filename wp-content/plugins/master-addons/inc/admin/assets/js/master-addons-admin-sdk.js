(()=>{var a,t={295:()=>{var a;(a=jQuery)("body").on("click",".jltma-upgrade-popup .popup-dismiss",(function(t){t.preventDefault(),a(this).closest(".jltma-upgrade-popup").fadeOut(200)})),a("body").on("click",".disabled",(function(t){t.preventDefault(),a(".jltma-upgrade-popup").fadeIn(200)})),a("body").on("click",".plugin-action-buttons .install-now",(function(t){if(t.preventDefault(),!a(this).hasClass("updating-message")){var e=a(this).attr("data-install-url");!function(a,t){a.removeClass("button-primary"),a.addClass("updating-message"),a.text("Installing..."),jQuery.ajax({url:JLTMACORE.admin_ajax,type:"POST",data:{action:"jltma_recommended_upgrade_plugin",type:"install",plugin:t,nonce:JLTMACORE.recommended_nonce},success:function(e){!0===e.success?(a.removeClass("updating-message"),a.addClass("updated-message installed button-disabled"),a.attr("disabled","disabled"),a.removeAttr("data-install-url"),a.text("Installed!"),setTimeout((function(){var e=jQuery(".plugin-status .plugin-status-not-install[data-plugin-url='"+t+"']");e.text("Active"),e.addClass("plugin-status-active"),e.removeClass("plugin-status-not-install"),e.removeAttr("data-install-url"),a.removeClass("install-now updated-message installed"),a.text("Activated"),a.removeAttr("aria-label")}),500)):(a.removeClass("updating-message"),a.addClass("button-primary"),a.text("Install Now"))}})}(a(this),e)}})),a("body").on("click",".plugin-action-buttons .activate-now",(function(){var t=a(this).attr("data-plugin-file");!function(a,t){a.addClass("button-disabled"),a.attr("disabled","disabled"),a.text("Processing..."),jQuery.ajax({url:JLTMACORE.admin_ajax,type:"POST",data:{action:"jltma_recommended_activate_plugin",file:t,nonce:JLTMACORE.recommended_nonce},success:function(e){if(!0===e.success){var s=jQuery(".plugin-status .plugin-status-inactive[data-plugin-file='"+t+"']");s.text("Active"),s.addClass("plugin-status-active"),s.removeClass("plugin-status-inactive"),a.removeClass("active-now"),a.text("Activated")}else a.removeClass("button-disabled"),a.prop("disabled",!1),a.text("Activated")}})}(a(this),t)})),a("body").on("click",".plugin-action-buttons .update-now",(function(){if(!a(this).hasClass("updating-message")){var t=a(this).attr("data-plugin");!function(a,t){a.addClass("updating-message"),a.text("Updating..."),jQuery.ajax({url:JLTMACORE.admin_ajax,type:"POST",data:{action:"jltma_recommended_upgrade_plugin",type:"update",plugin:t,nonce:JLTMACORE.recommended_nonce},success:function(e){if(!0===e.success){if(a.removeClass("updating-message"),a.addClass("updated-message button-disabled"),a.attr("disabled","disabled"),a.text("Updated!"),!1===e.data.active){var s=jQuery(".plugin-status .plugin-status-inactive[data-plugin-file='"+t+"']");s.text("Active"),s.addClass("plugin-status-active"),s.removeClass("plugin-status-inactive"),s.removeAttr("data-plugin-file")}}else a.removeClass("updating-message"),a.text("Update Now")}})}(a(this),t)}})),a(".filter-links").on("click","a",(function(t){t.preventDefault();var e=a(this).data("type");a(this).addClass("current").parent().siblings().find("a").removeClass("current"),a("#the-list .plugin-card").each((function(t,s){"all"==e||a(this).hasClass(e)?a(this).removeClass("hide"):a(this).addClass("hide")}))})),a(".jltma-search-plugins #search-plugins").on("keyup",(function(){var t=a(this).val(),e=new RegExp(t,"i");a("#the-list .plugin-card").each((function(){var t=a(this);t.find(".name h3 a, .desc p").text().search(e)>=0||t.addClass("hide"),t.find(".name h3 a, .desc p").text().search(e)>=0&&t.removeClass("hide")}))}))},132:()=>{},87:()=>{},10:()=>{},220:()=>{},783:()=>{},53:()=>{},764:()=>{},737:()=>{}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,a=[],s.O=(t,e,i,n)=>{if(!e){var l=1/0;for(o=0;o<a.length;o++){for(var[e,i,n]=a[o],d=!0,u=0;u<e.length;u++)(!1&n||l>=n)&&Object.keys(s.O).every((a=>s.O[a](e[u])))?e.splice(u--,1):(d=!1,n<l&&(l=n));if(d){a.splice(o--,1);var r=i();void 0!==r&&(t=r)}}return t}n=n||0;for(var o=a.length;o>0&&a[o-1][2]>n;o--)a[o]=a[o-1];a[o]=[e,i,n]},s.o=(a,t)=>Object.prototype.hasOwnProperty.call(a,t),(()=>{var a={228:0,240:0,373:0,506:0,701:0,128:0,469:0,299:0,412:0};s.O.j=t=>0===a[t];var t=(t,e)=>{var i,n,[l,d,u]=e,r=0;if(l.some((t=>0!==a[t]))){for(i in d)s.o(d,i)&&(s.m[i]=d[i]);if(u)var o=u(s)}for(t&&t(e);r<l.length;r++)n=l[r],s.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return s.O(o)},e=self.webpackChunkmaster_addons=self.webpackChunkmaster_addons||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})(),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(295))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(220))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(783))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(53))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(764))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(737))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(132))),s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(87)));var i=s.O(void 0,[240,373,506,701,128,469,299,412],(()=>s(10)));i=s.O(i)})();