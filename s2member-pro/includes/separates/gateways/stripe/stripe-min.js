jQuery(document).ready(function(c){var a=function(){if(window.StripeCheckout){clearInterval(d),b()}},d=setInterval(a,100);c.ajax({cache:true,dataType:"script",url:"https://checkout.stripe.com/checkout.js"});var b=function(){var F,l,w,q,s,v,E={"aria-required":"true"},i={"aria-required":"false"},o={"aria-required":"false",disabled:"disabled"},H={disabled:"disabled"},Q,x,J,B,p,K,P,y=true,O,u,m,I,j,G,f,h,L,M,T,R,U,C,A,g,n,z,N,S,t,k,D,r;F=new Image(),F.src='<?php echo $vars["i"]; ?>/ajax-loader.gif';if(c("form.s2member-pro-stripe-registration-form").length>1||c("form.s2member-pro-stripe-checkout-form").length>1||c("form.s2member-pro-stripe-sp-checkout-form").length>1){return alert("Detected more than one s2Member Pro Form.\n\nPlease use only ONE s2Member Pro Form Shortcode on each Post/Page. Attempting to serve more than one Pro Form on each Post/Page (even w/ DHTML) may result in unexpected/broken functionality.")}if((l=c("form#s2member-pro-stripe-cancellation-form")).length===1){S="div#s2member-pro-stripe-cancellation-form-captcha-section",t="div#s2member-pro-stripe-cancellation-form-submission-section",D=c(t+" button#s2member-pro-stripe-cancellation-submit");ws_plugin__s2member_animateProcessing(D,"reset"),D.removeAttr("disabled");l.submit(function(){var Y=this,W="",V="",Z="",X=c(S+" input#recaptcha_response_field");c(":input",Y).each(function(){var aa=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(aa&&(W=c.trim(c('label[for="'+aa+'"]',Y).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(V=ws_plugin__s2member_validationErrors(W,this,Y)){Z+=V+"\n\n"}}});if(Z=c.trim(Z)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+Z);return false}else{if(X.length&&!X.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}D.attr(H),ws_plugin__s2member_animateProcessing(D);return true})}else{if((w=c("form#s2member-pro-stripe-update-form")).length===1){C="div#s2member-pro-stripe-update-form-billing-method-section",cardType=C+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_update[card_type]")+'"]',N="div#s2member-pro-stripe-update-form-billing-address-section",S="div#s2member-pro-stripe-update-form-captcha-section",t="div#s2member-pro-stripe-update-form-submission-section",D=c(t+" button#s2member-pro-stripe-update-submit");ws_plugin__s2member_animateProcessing(D,"reset"),D.removeAttr("disabled");(B=function(V){var W=c(cardType+":checked").val();if(c.inArray(W,["Visa","MasterCard","Amex","Discover"])!==-1){c(C+" > div.s2member-pro-stripe-update-form-div").show();c(C+" > div.s2member-pro-stripe-update-form-div :input").attr(E);c(C+" > div#s2member-pro-stripe-update-form-card-start-date-issue-number-div").hide();c(C+" > div#s2member-pro-stripe-update-form-card-start-date-issue-number-div :input").attr(i);c(N+" > div.s2member-pro-stripe-update-form-div").show();c(N+" > div.s2member-pro-stripe-update-form-div :input").attr(E);c(N).show(),(V)?c(C+" input#s2member-pro-stripe-update-card-number").focus():null}else{if(c.inArray(W,["Maestro","Solo"])!==-1){c(C+" > div.s2member-pro-stripe-update-form-div").show();c(C+" > div.s2member-pro-stripe-update-form-div :input").attr(E);c(N+" > div.s2member-pro-stripe-update-form-div").show();c(N+" > div.s2member-pro-stripe-update-form-div :input").attr(E);c(N).show(),(V)?c(C+" input#s2member-pro-stripe-update-card-number").focus():null}else{if(!W){c(C+" > div.s2member-pro-stripe-update-form-div").hide();c(C+" > div.s2member-pro-stripe-update-form-div :input").attr(i);c(C+" > div#s2member-pro-stripe-update-form-card-type-div").show();c(C+" > div#s2member-pro-stripe-update-form-card-type-div :input").attr(E);c(N+" > div.s2member-pro-stripe-update-form-div").hide();c(N+" > div.s2member-pro-stripe-update-form-div :input").attr(i);c(N).hide(),(V)?c(t+" button#s2member-pro-stripe-update-submit").focus():null}}}})();c(cardType).click(B).change(B);w.submit(function(){var Y=this,W="",V="",Z="",X=c(S+" input#recaptcha_response_field");if(!c(cardType+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}c(":input",Y).each(function(){var aa=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(aa&&(W=c.trim(c('label[for="'+aa.replace(/-(month|year)/,"")+'"]',Y).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(V=ws_plugin__s2member_validationErrors(W,this,Y)){Z+=V+"\n\n"}}});if(Z=c.trim(Z)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+Z);return false}else{if(X.length&&!X.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}D.attr(H),ws_plugin__s2member_animateProcessing(D);return true})}else{if((q=c("form#s2member-pro-stripe-registration-form")).length===1){R="div#s2member-pro-stripe-registration-form-registration-section",S="div#s2member-pro-stripe-registration-form-captcha-section",t="div#s2member-pro-stripe-registration-form-submission-section",D=c(t+" button#s2member-pro-stripe-registration-submit");ws_plugin__s2member_animateProcessing(D,"reset"),D.removeAttr("disabled");(Q=function(V){if(c(t+" input#s2member-pro-stripe-registration-names-not-required-or-not-possible").length){c(R+" > div#s2member-pro-stripe-registration-form-first-name-div").hide();c(R+" > div#s2member-pro-stripe-registration-form-first-name-div :input").attr(o);c(R+" > div#s2member-pro-stripe-registration-form-last-name-div").hide();c(R+" > div#s2member-pro-stripe-registration-form-last-name-div :input").attr(o)}})();(x=function(V){if(c(t+" input#s2member-pro-stripe-registration-password-not-required-or-not-possible").length){c(R+" > div#s2member-pro-stripe-registration-form-password-div").hide();c(R+" > div#s2member-pro-stripe-registration-form-password-div :input").attr(o)}})();c(R+" > div#s2member-pro-stripe-registration-form-password-div :input").keyup(function(){ws_plugin__s2member_passwordStrength(c(R+" input#s2member-pro-stripe-registration-username"),c(R+" input#s2member-pro-stripe-registration-password1"),c(R+" input#s2member-pro-stripe-registration-password2"),c(R+" div#s2member-pro-stripe-registration-form-password-strength"))});q.submit(function(){var Y=this,W="",V="",ab="",X=c(S+" input#recaptcha_response_field"),aa=c(R+' input#s2member-pro-stripe-registration-password1[aria-required="true"]'),Z=c(R+" input#s2member-pro-stripe-registration-password2");c(":input",Y).each(function(){var ac=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(ac&&(W=c.trim(c('label[for="'+ac+'"]',Y).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(V=ws_plugin__s2member_validationErrors(W,this,Y)){ab+=V+"\n\n"}}});if(ab=c.trim(ab)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+ab);return false}else{if(aa.length&&c.trim(aa.val())!==c.trim(Z.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(aa.length&&c.trim(aa.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(X.length&&!X.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}D.attr(H),ws_plugin__s2member_animateProcessing(D);return true})}else{if((s=c("form#s2member-pro-stripe-sp-checkout-form")).length===1){f="div#s2member-pro-stripe-sp-checkout-form-options-section",L="div#s2member-pro-stripe-sp-checkout-form-description-section",M="div#s2member-pro-stripe-sp-checkout-form-coupon-section",T=M+" input#s2member-pro-stripe-sp-checkout-coupon-apply",R="div#s2member-pro-stripe-sp-checkout-form-registration-section",C="div#s2member-pro-stripe-sp-checkout-form-billing-method-section",cardType=C+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_sp_checkout[card_type]")+'"]',N="div#s2member-pro-stripe-sp-checkout-form-billing-address-section",G=c(N+" > div#s2member-pro-stripe-sp-checkout-form-ajax-tax-div"),S="div#s2member-pro-stripe-sp-checkout-form-captcha-section",t="div#s2member-pro-stripe-sp-checkout-form-submission-section",r=t+" input#s2member-pro-stripe-sp-checkout-nonce",k=t+" button#s2member-pro-stripe-sp-checkout-submit";ws_plugin__s2member_animateProcessing(c(k),"reset"),c(k).removeAttr("disabled"),c(T).removeAttr("disabled");(p=function(V){if(!c(f+" select#s2member-pro-stripe-sp-checkout-options option").length){c(f).hide();c(L).show()}else{c(f).show();c(L).hide();c(f+" select#s2member-pro-stripe-sp-checkout-options").change(function(){c(r).val("option");s.attr("action",s.attr("action").replace(/#.*$/,"")+"#s2p-form");s.submit()})}})();(K=function(V){if(c(t+" input#s2member-pro-stripe-sp-checkout-coupons-not-required-or-not-possible").length){c(M).hide()}else{c(M).show()}})();(P=function(V){if(c(t+" input#s2member-pro-stripe-sp-checkout-tax-not-required-or-not-possible").length){G.hide(),y=false}})();(O=function(W){if(y&&!(W&&W.interval&&document.activeElement.id==="s2member-pro-stripe-sp-checkout-country")){var V=c(t+" input#s2member-pro-stripe-sp-checkout-attr").val(),Z=c.trim(c(N+" input#s2member-pro-stripe-sp-checkout-state").val()),aa=c(N+" select#s2member-pro-stripe-sp-checkout-country").val(),Y=c.trim(c(N+" input#s2member-pro-stripe-sp-checkout-zip").val()),X=Z+"|"+aa+"|"+Y;if(Z&&aa&&Y&&X&&(!j||j!==X)&&(j=X)){(I)?I.abort():null,clearTimeout(m),m=0;G.html('<div><img src="'+ws_plugin__s2member_escAttr(F.src)+'" alt="<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(esc_attr(_x("Calculating Sales Tax...", "s2member-front", "s2member"))); ?>" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("calculating sales tax...", "s2member-front", "s2member")); ?></div>');m=setTimeout(function(){I=c.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(admin_url("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_stripe_ajax_tax",ws_plugin__s2member_pro_stripe_ajax_tax:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(c_ws_plugin__s2member_utils_encryption::encrypt("ws-plugin--s2member-pro-stripe-ajax-tax")); ?>',"ws_plugin__s2member_pro_stripe_ajax_tax_vars[attr]":V,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[state]":Z,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[country]":aa,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[zip]":Y},function(ab){clearTimeout(m),m=0;try{G.html("<div>"+c.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((ab.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),((ab.tax_per)?"<em>"+ab.tax_per+"</em> ( "+ab.cur_symbol+""+ab.tax+" )":ab.cur_symbol+""+ab.tax),((ab.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),ab.cur_symbol+""+ab.total)+"</div>")}catch(ac){console.log(ac)}},"json")},((W&&W.keyCode)?1000:100))}else{if(!Z||!aa||!Y||!X){G.html(""),j=null}}}})();u=function(V){setTimeout(function(){O(V)},10)};c(N+" input#s2member-pro-stripe-sp-checkout-state").bind("keyup blur",O).bind("cut paste",u);c(N+" input#s2member-pro-stripe-sp-checkout-zip").bind("keyup blur",O).bind("cut paste",u);c(N+" select#s2member-pro-stripe-sp-checkout-country").bind("change",O);setInterval(function(){O({interval:true})},1000);(J=function(V){if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){c(R+" input#s2member-pro-stripe-sp-checkout-first-name").each(function(){var W=c(this),X=W.val();(!X)?W.val(S2MEMBER_CURRENT_USER_FIRST_NAME):null});c(R+" input#s2member-pro-stripe-sp-checkout-last-name").each(function(){var W=c(this),X=W.val();(!X)?W.val(S2MEMBER_CURRENT_USER_LAST_NAME):null});c(R+" input#s2member-pro-stripe-sp-checkout-email").each(function(){var W=c(this),X=W.val();(!X)?W.val(S2MEMBER_CURRENT_USER_EMAIL):null})}})();(B=function(V){if(c(t+" input#s2member-pro-stripe-sp-checkout-payment-not-required-or-not-possible").length){c(cardType).val(["Free"])}var W=c(cardType+":checked").val();if(c.inArray(W,["Free"])!==-1){c(C).hide(),c(N).hide();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div").hide();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(i);c(N+" > div.s2member-pro-stripe-sp-checkout-form-div").hide();c(N+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(i);(!y)?G.hide():null;(V)?c(t+" button#s2member-pro-stripe-sp-checkout-submit").focus():null}else{if(c.inArray(W,["Visa","MasterCard","Amex","Discover"])!==-1){c(C).show(),c(N).show();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div").show();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(E);c(C+" > div#s2member-pro-stripe-sp-checkout-form-card-start-date-issue-number-div").hide();c(C+" > div#s2member-pro-stripe-sp-checkout-form-card-start-date-issue-number-div :input").attr(i);c(N+" > div.s2member-pro-stripe-sp-checkout-form-div").show();c(N+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(E);(!y)?G.hide():null;(V)?c(C+" input#s2member-pro-stripe-sp-checkout-card-number").focus():null}else{if(c.inArray(W,["Maestro","Solo"])!==-1){c(C).show(),c(N).show();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div").show();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(E);c(N+" > div.s2member-pro-stripe-sp-checkout-form-div").show();c(N+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(E);(!y)?G.hide():null;(V)?c(C+" input#s2member-pro-stripe-sp-checkout-card-number").focus():null}else{if(!W){c(C).show(),c(N).hide();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div").hide();c(C+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(i);c(C+" > div#s2member-pro-stripe-sp-checkout-form-card-type-div").show();c(C+" > div#s2member-pro-stripe-sp-checkout-form-card-type-div :input").attr(E);c(N+" > div.s2member-pro-stripe-sp-checkout-form-div").hide();c(N+" > div.s2member-pro-stripe-sp-checkout-form-div :input").attr(i);(!y)?G.hide():null;(V)?c(t+" button#s2member-pro-stripe-sp-checkout-submit").focus():null}}}}P()})();c(cardType).click(B).change(B);c(T).click(function(){c(r).val("apply-coupon"),s.submit()});s.submit(function(){if(c.inArray(c(r).val(),["option","apply-coupon"])===-1){var Y=this,W="",V="",Z="",X=c(S+" input#recaptcha_response_field");if(!c(cardType+":checked").val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Please choose a Billing Method.", "s2member-front", "s2member")); ?>');return false}c(":input",Y).each(function(){var aa=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(aa&&(W=c.trim(c('label[for="'+aa.replace(/-(month|year)/,"")+'"]',Y).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(V=ws_plugin__s2member_validationErrors(W,this,Y)){Z+=V+"\n\n"}}});if(Z=c.trim(Z)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+Z);return false}else{if(X.length&&!X.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}c(k).attr(H),ws_plugin__s2member_animateProcessing(c(k)),c(T).attr(H);return true})}else{if((v=c("form#s2member-pro-stripe-checkout-form")).length===1){f="div#s2member-pro-stripe-checkout-form-options-section",h=f+" select#s2member-pro-stripe-checkout-options",L="div#s2member-pro-stripe-checkout-form-description-section",M="div#s2member-pro-stripe-checkout-form-coupon-section",T=M+" input#s2member-pro-stripe-checkout-coupon-apply",R="div#s2member-pro-stripe-checkout-form-registration-section",U="div#s2member-pro-stripe-checkout-form-custom-fields-section",C="div#s2member-pro-stripe-checkout-form-billing-method-section",A=C+" button#s2member-pro-stripe-checkout-form-card-token-button",g=C+" div#s2member-pro-stripe-checkout-form-card-token-summary",N="div#s2member-pro-stripe-checkout-form-billing-address-section",G=c(N+" > div#s2member-pro-stripe-checkout-form-ajax-tax-div"),S="div#s2member-pro-stripe-checkout-form-captcha-section",t="div#s2member-pro-stripe-checkout-form-submission-section",n=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_checkout[card_token]")+'"]',z=t+' input[name="'+ws_plugin__s2member_escjQAttr("s2member_pro_stripe_checkout[card_token_summary]")+'"]',r=t+" input#s2member-pro-stripe-checkout-nonce",k=t+" button#s2member-pro-stripe-checkout-submit";c(h).removeAttr("disabled"),c(T).removeAttr("disabled"),c(k).removeAttr("disabled"),ws_plugin__s2member_animateProcessing(c(k),"reset");if(!c(h+" option").length){c(f).hide(),c(L).show()}else{c(f).show(),c(L).hide(),c(h).on("change",function(){c(r).val("option"),v.attr("action",v.attr("action").replace(/#.*$/,"")+"#s2p-form"),v.submit()})}if(c(t+" input#s2member-pro-stripe-checkout-coupons-not-required-or-not-possible").length){c(M).hide()}else{c(M).show(),c(T).on("click",function(){c(r).val("apply-coupon"),v.submit()})}if(S2MEMBER_CURRENT_USER_IS_LOGGED_IN){c(R+" input#s2member-pro-stripe-checkout-first-name").each(function(){var V=c(this),W=V.val();if(!W){V.val(S2MEMBER_CURRENT_USER_FIRST_NAME)}});c(R+" input#s2member-pro-stripe-checkout-last-name").each(function(){var V=c(this),W=V.val();if(!W){V.val(S2MEMBER_CURRENT_USER_LAST_NAME)}});c(R+" input#s2member-pro-stripe-checkout-email").val(S2MEMBER_CURRENT_USER_EMAIL).attr(o),c(R+" input#s2member-pro-stripe-checkout-username").val(S2MEMBER_CURRENT_USER_LOGIN).attr(o);c(R+" > div#s2member-pro-stripe-checkout-form-password-div").hide(),c(R+" > div#s2member-pro-stripe-checkout-form-password-div :input").attr(o);if(c.trim(c(R+" > div#s2member-pro-stripe-checkout-form-registration-section-title").html())==='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Create Profile", "s2member-front", "s2member")); ?>'){c(R+" > div#s2member-pro-stripe-checkout-form-registration-section-title").html('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Your Profile", "s2member-front", "s2member")); ?>')}c(U).hide(),c(U+" :input").attr(o)}if(c(t+" input#s2member-pro-stripe-checkout-password-not-required-or-not-possible").length){c(R+" > div#s2member-pro-stripe-checkout-form-password-div").hide(),c(R+" > div#s2member-pro-stripe-checkout-form-password-div :input").attr(o)}else{c(R+" > div#s2member-pro-stripe-checkout-form-password-div :input").on("keyup",function(){ws_plugin__s2member_passwordStrength(c(R+" input#s2member-pro-stripe-checkout-username"),c(R+" input#s2member-pro-stripe-checkout-password1"),c(R+" input#s2member-pro-stripe-checkout-password2"),c(R+" div#s2member-pro-stripe-checkout-form-password-strength"))})}if(c(t+" input#s2member-pro-stripe-checkout-tax-not-required-or-not-possible").length){G.hide(),y=false}else{u=function(V){setTimeout(function(){O(V)},10)};O=function(Z){if(!y){return}if(Z&&Z.interval&&document.activeElement&&document.activeElement.id==="s2member-pro-stripe-checkout-country"){return}var aa=c(t+" input#s2member-pro-stripe-checkout-attr").val(),V=c.trim(c(N+" input#s2member-pro-stripe-checkout-state").val()),X=c.trim(c(N+" select#s2member-pro-stripe-checkout-country").val()),W=c.trim(c(N+" input#s2member-pro-stripe-checkout-zip").val()),Y=V+"|"+X+"|"+W;if(V&&X&&W&&Y&&(!j||j!==Y)){clearTimeout(m),m=0,j=Y;if(I){I.abort()}var ab='<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(c_ws_plugin__s2member_utils_encryption::encrypt("ws-plugin--s2member-pro-stripe-ajax-tax")); ?>',ad='<div><img src="'+ws_plugin__s2member_escAttr(F.src)+'" alt="" /> <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("calculating sales tax...", "s2member-front", "s2member")); ?></div>',ac=function(){I=c.post('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(admin_url("/admin-ajax.php")); ?>',{action:"ws_plugin__s2member_pro_stripe_ajax_tax",ws_plugin__s2member_pro_stripe_ajax_tax:ab,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[attr]":aa,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[state]":V,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[country]":X,"ws_plugin__s2member_pro_stripe_ajax_tax_vars[zip]":W},function(ae,af){clearTimeout(m),m=0;if(typeof ae==="object"&&ae.hasOwnProperty("tax")){G.html("<div>"+c.sprintf('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("<strong>Sales Tax%s:</strong> %s<br /><strong>— Total%s:</strong> %s", "s2member-front", "s2member")); ?>',((ae.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),((ae.tax_per)?"<em>"+ae.tax_per+"</em> ( "+ae.cur_symbol+""+ae.tax+" )":ae.cur_symbol+""+ae.tax),((ae.trial)?' <?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Today", "s2member-front", "s2member")); ?>':""),ae.cur_symbol+""+ae.total)+"</div>")}},"json")};G.html(ad),m=setTimeout(ac,((Z&&Z.keyCode)?1000:100))}else{if(!V||!X||!W||!Y){clearTimeout(m),m=0,j="";if(I){I.abort()}G.html("")}}};setInterval(function(){O({interval:true})},1000),c(N+" input#s2member-pro-stripe-checkout-state").on("keyup blur",O).on("cut paste",u),c(N+" input#s2member-pro-stripe-checkout-zip").on("keyup blur",O).on("cut paste",u),c(N+" select#s2member-pro-stripe-checkout-country").on("change",O),O()}B=function(V){if(c(t+" input#s2member-pro-stripe-checkout-payment-not-required-or-not-possible").length){c(n).val("free")}var W=c(n).val();if(W){if(W==="free"){c(C).hide(),c(C+" > div.s2member-pro-stripe-checkout-form-div").hide(),c(C+" > div.s2member-pro-stripe-checkout-form-div :input").attr(i)}else{c(C).show(),c(C+" > div.s2member-pro-stripe-checkout-form-div").show(),c(C+" > div.s2member-pro-stripe-checkout-form-div :input").attr(E)}if(W!=="free"&&y){c(N).show(),c(N+" > div.s2member-pro-stripe-checkout-form-div").show(),c(N+" > div.s2member-pro-stripe-checkout-form-div :input").attr(E)}else{c(N).hide(),c(N+" > div.s2member-pro-stripe-checkout-form-div").hide(),c(N+" > div.s2member-pro-stripe-checkout-form-div :input").attr(i)}if(V){c(t+" button#s2member-pro-stripe-checkout-submit").focus()}}else{if(!W){c(C).show(),c(C+" > div.s2member-pro-stripe-checkout-form-div").show(),c(C+" > div.s2member-pro-stripe-checkout-form-div :input").attr(E);c(N).hide(),c(N+" > div.s2member-pro-stripe-checkout-form-div").hide(),c(N+" > div.s2member-pro-stripe-checkout-form-div :input").attr(i)}}};B();c(A).on("click",function(){var V=StripeCheckout.configure({key:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_publishable_key"]); ?>',zipCode:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_validate_zipcode"]); ?>'=="1",image:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_stripe_api_image"]); ?>',panelLabel:'<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Add", "s2member-front", "s2member")); ?>',email:c(R+" input#s2member-pro-stripe-checkout-email").val(),allowRememberMe:true,token:function(W){c(n).val(W.id),c(z).val(e(W)),c(g).html(ws_plugin__s2member_escHtml(e(W))),B()}});V.open()});v.on("submit",function(){if(c.inArray(c(r).val(),["option","apply-coupon"])===-1){var Y=this,W="",V="",ab="",X=c(S+" input#recaptcha_response_field"),aa=c(R+' input#s2member-pro-stripe-checkout-password1[aria-required="true"]'),Z=c(R+" input#s2member-pro-stripe-checkout-password2");if(!c(n).val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("No Billing Method; please try again.", "s2member-front", "s2member")); ?>');return false}c(":input",Y).each(function(){var ac=c.trim(c(this).attr("id")).replace(/---[0-9]+$/g,"");if(ac&&(W=c.trim(c('label[for="'+ac.replace(/-(month|year)/,"")+'"]',Y).first().children("span").first().text().replace(/[\r\n\t]+/g," ")))){if(V=ws_plugin__s2member_validationErrors(W,this,Y)){ab+=V+"\n\n"}}});if(ab=c.trim(ab)){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n'+ab);return false}else{if(aa.length&&c.trim(aa.val())!==c.trim(Z.val())){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Passwords do not match up. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(aa.length&&c.trim(aa.val()).length<6){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Password MUST be at least 6 characters. Please try again.", "s2member-front", "s2member")); ?>');return false}else{if(X.length&&!X.val()){alert('<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("— Oops, you missed something: —", "s2member-front", "s2member")); ?>\n\n<?php echo c_ws_plugin__s2member_utils_strings::esc_js_sq(_x("Security Code missing. Please try again.", "s2member-front", "s2member")); ?>');return false}}}}}c(h).attr(H),c(T).attr(H),c(k).attr(H),ws_plugin__s2member_animateProcessing(c(k));return true})}}}}}var e=function(V){if(typeof V!=="object"){return""}if(V.type==="bank_account"&&V.bank_account){return V.bank_account.bank_name+" "+V.bank_account.last4}if(V.type==="card"&&V.card){return V.card.brand+" "+V.card.last4}return"token "+V.id};c("div#s2member-pro-stripe-form-response").each(function(){scrollTo(0,c(this).offset().top-100)})}});