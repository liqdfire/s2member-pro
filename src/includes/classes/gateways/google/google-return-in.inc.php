<?php
// @codingStandardsIgnoreFile
/**
* Google Return URL handler (inner processing routines).
*
* Copyright: © 2009-2011
* {@link http://websharks-inc.com/ WebSharks, Inc.}
* (coded in the USA)
*
* This WordPress plugin (s2Member Pro) is comprised of two parts:
*
* o (1) Its PHP code is licensed under the GPL license, as is WordPress.
* 	You should have received a copy of the GNU General Public License,
* 	along with this software. In the main directory, see: /licensing/
* 	If not, see: {@link http://www.gnu.org/licenses/}.
*
* o (2) All other parts of (s2Member Pro); including, but not limited to:
* 	the CSS code, some JavaScript code, images, and design;
* 	are licensed according to the license purchased.
* 	See: {@link http://s2member.com/prices/}
*
* Unless you have our prior written consent, you must NOT directly or indirectly license,
* sub-license, sell, resell, or provide for free; part (2) of the s2Member Pro Add-on;
* or make an offer to do any of these things. All of these things are strictly
* prohibited with part (2) of the s2Member Pro Add-on.
*
* Your purchase of s2Member Pro includes free lifetime upgrades via s2Member.com
* (i.e., new features, bug fixes, updates, improvements); along with full access
* to our video tutorial library: {@link http://s2member.com/videos/}
*
* @package s2Member\Google
* @since 131123
*/
if(!defined('WPINC')) // MUST have WordPress.
	exit("Do not access this file directly.");

if (!class_exists ("c_ws_plugin__s2member_pro_google_return_in"))
	{
		/**
		* Google Return URL handler (inner processing routines).
		*
		* @package s2Member\Google
		* @since 131123
		*/
		class c_ws_plugin__s2member_pro_google_return_in
			{
				/**
				* Handles Google Return URL processing.
				*
				* @package s2Member\Google
				* @since 131123
				*
				* @attaches-to ``add_action("init");``
				*
				* @return null Or exits script execution after redirection.
				*/
				public static function google_return ()
					{
						global /* For Multisite support. */ $current_site, $current_blog;

						if (!empty($_GET["s2member_pro_google_return"]) && $GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["pro_google_merchant_id"])
							{
								$google["s2member_log"][] = "Return URL processed on: " . date ("D M j, Y g:i:s a T");
								$google["s2member_log"][] = "Piping through s2Member's core/standard PayPal processor with `proxy_use` ( `ty-email` ).";
								$google["s2member_log"][] = "Please check PayPal RTN logs for further processing details.";

								$rtn_q = "&s2member_paypal_proxy=google&s2member_paypal_proxy_use=standard-emails,ty-email";
								if (!empty /* Using a custom Return URL on success? */ ($_GET["s2member_pro_google_return_success"]))
									$rtn_q .= "&s2member_paypal_return_success=" . rawurlencode (trim (stripslashes ($_GET["s2member_pro_google_return_success"])));

								$rtn_r = home_url ("/?s2member_pro_google_return&s2member_paypal_return=1" . $rtn_q);
								$rtn_r = c_ws_plugin__s2member_utils_urls::add_s2member_sig ($rtn_r, "s2member_paypal_proxy_verification");

								$google["s2member_log"][] = /* Log the full Return redirection URL here. */ $rtn_r;

								wp_redirect /* Proxy this through s2Member's core PayPal processor. */($rtn_r);

								$logt = c_ws_plugin__s2member_utilities::time_details ();
								$logv = c_ws_plugin__s2member_utilities::ver_details ();
								$logm = c_ws_plugin__s2member_utilities::mem_details ();
								$log4 = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] . "\nUser-Agent: " . @$_SERVER["HTTP_USER_AGENT"];
								$log4 = (is_multisite () && !is_main_site ()) ? ($_log4 = $current_blog->domain . $current_blog->path) . "\n" . $log4 : $log4;
								$log2 = (is_multisite () && !is_main_site ()) ? "google-rtn-4-" . trim (preg_replace ("/[^a-z0-9]/i", "-", $_log4), "-") . ".log" : "google-rtn.log";

								if ($GLOBALS["WS_PLUGIN__"]["s2member"]["o"]["gateway_debug_logs"])
									if (is_dir ($logs_dir = $GLOBALS["WS_PLUGIN__"]["s2member"]["c"]["logs_dir"]))
										if (is_writable ($logs_dir) && c_ws_plugin__s2member_utils_logs::archive_oversize_log_files ())
											file_put_contents ($logs_dir . "/" . $log2,
											                   "LOG ENTRY: ".$logt . "\n" . $logv . "\n" . $logm . "\n" . $log4 . "\n" .
											                                            c_ws_plugin__s2member_utils_logs::conceal_private_info(var_export ($google, true)) . "\n\n",
											                   FILE_APPEND);

								exit (); // Exit now.
							}
					}
			}
	}
