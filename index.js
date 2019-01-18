// Making it centralised model
$(document).ready(function(){

	(function($) {

		function mediaSize() { 
			/* Set the matchMedia */
			/* For Large screens-------------------------------------------------- 1200 */
			if (window.matchMedia('(min-width: 1200px)').matches) {
			/* Changes when we reach the min-width  */
				// Header Links
			    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
			    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".nav-logo").css({"margin":"0% 0% 0% 10%","width":"50%"}); // CSS of logo
			    $(".navbar-nav").css({"margin":"0% 0% 0% 40%"}); // CSS of logo
			    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0", "position":"sticky"}); // Background Color
			    $("* #nav-link").css({"color":"#000000", "font-size":"110%"});
			    // Navigation Links
			    $("[href='#home']").attr("href","https://www.home.com"); // Home
			    $("[href='#features']").attr("href","https://www.features.com"); // Features
			    $("[href='#about']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
			    $("[href='#join']").attr("href","https://www.join.com"); // Join
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

			    // Footer
			    $(".footer-content .row").css({"background-color":"#3e3f42","margin":"2% 0% 0% 0%", "color":"#333366"}); // CSS of logo
			    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".footer-logo").css({"margin":"14% 0% 0% 25%","width":"40%"}); // CSS of logo
			    $(".footer-content .footer-our-vison, .footer-content .footer-links .footer-link-heading, .footer-content .footer-links a, .footer-content .email-signup, .footer-content .copyright-info, .footer-content .social-button .fa").css({"color":"#9a9b9e"});
			    // Website Links
			    $("[href='#about-us']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#faqs']").attr("href","https://www.faqs.com"); // FAQs
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact-us
			    $("[href='#suggest-us']").attr("href","https://www.suggest.com"); // Suggest-us
			    $("[href='#sitemap']").attr("href","https://www.sitemap.com"); // Sitemap
			    $("[href='#privacy-policy']").attr("href","https://www.privacypolicy.com"); // Privacy Policy
			    $("[href='#terms-of-use']").attr("href","https://www.termsofuse.com"); // Terms Of Use
			    // Social Buttons
			    $("[href='#facebook']").attr({"href":"https://www.facebook.com", "target":"_blank"}); // Fsacebook
			    $("[href='#instagram']").attr({"href":"https://www.instagram.com", "target":"_blank"}); // Instagram
			    $("[href='#twitter']").attr({"href":"https://www.twitter.com", "target":"_blank"}); // Twitter
			    $("[href='#whatsapp']").attr({"href":"https://www.whatsapp.com", "target":"_blank"}); // Whatsapp
			} 


			/* For Large screens-------------------------------------------------- 992 */
			if (window.matchMedia('(min-width: 993px) and (max-width: 1200px)').matches) {
			/* Changes when we reach the min-width  */
				// Header Links
			    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
			    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".nav-logo").css({"margin":"0% 0% 0% 10%","width":"50%"}); // CSS of logo
			    $(".navbar-nav").css({"margin":"0% 0% 0% 15%"}); // CSS of logo
			    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0", "position":"sticky"}); // Background Color
			    $("* #nav-link").css({"color":"#000000", "font-size":"110%"});
			    // Navigation Links
			    $("[href='#home']").attr("href","https://www.home.com"); // Home
			    $("[href='#features']").attr("href","https://www.features.com"); // Features
			    $("[href='#about']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
			    $("[href='#join']").attr("href","https://www.join.com"); // Join
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

			    // Footer
			    $(".footer-content .row").css({"background-color":"#3e3f42","margin":"2% 0% 0% 0%", "color":"#333366"}); // CSS of logo
			    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".footer-logo").css({"margin":"14% 0% 0% 25%","width":"50%"}); // CSS of logo
			    $(".footer-content .footer-our-vison, .footer-content .footer-links .footer-link-heading, .footer-content .footer-links a, .footer-content .email-signup, .footer-content .copyright-info, .footer-content .social-button .fa").css({"color":"#9a9b9e"});
			    // Website Links
			    $("[href='#about-us']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#faqs']").attr("href","https://www.faqs.com"); // FAQs
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact-us
			    $("[href='#suggest-us']").attr("href","https://www.suggest.com"); // Suggest-us
			    $("[href='#sitemap']").attr("href","https://www.sitemap.com"); // Sitemap
			    $("[href='#privacy-policy']").attr("href","https://www.privacypolicy.com"); // Privacy Policy
			    $("[href='#terms-of-use']").attr("href","https://www.termsofuse.com"); // Terms Of Use
			    // Social Buttons
			    $("[href='#facebook']").attr({"href":"https://www.facebook.com", "target":"_blank"}); // Fsacebook
			    $("[href='#instagram']").attr({"href":"https://www.instagram.com", "target":"_blank"}); // Instagram
			    $("[href='#twitter']").attr({"href":"https://www.twitter.com", "target":"_blank"}); // Twitter
			    $("[href='#whatsapp']").attr({"href":"https://www.whatsapp.com", "target":"_blank"}); // Whatsapp
			}


			/* For Large screens-------------------------------------------------- 768 */
			if (window.matchMedia('(min-width: 768px) and (max-width: 992px)').matches) {
			/* Changes when we reach the min-width  */
				// Header Links
			    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
			    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".nav-logo").css({"margin":"0% 0% 0% 10%","width":"50%"}); // CSS of logo
			    $(".navbar-nav").css({"margin":"0% 0% 0% 5%"}); // CSS of logo
			    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0", "position":"sticky"}); // Background Color
			    $("* #nav-link").css({"color":"#000000", "font-size":"110%"});
			    // Navigation Links
			    $("[href='#home']").attr("href","https://www.home.com"); // Home
			    $("[href='#features']").attr("href","https://www.features.com"); // Features
			    $("[href='#about']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
			    $("[href='#join']").attr("href","https://www.join.com"); // Join
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

			    // Footer
			    $(".footer-content .row").css({"background-color":"#3e3f42","margin":"2% 0% 0% 0%", "color":"#333366"}); // CSS of logo
			    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".footer-logo").css({"margin":"14% 0% 0% 20%","width":"60%"}); // CSS of logo
			    $(".footer-content .footer-our-vison, .footer-content .footer-links .footer-link-heading, .footer-content .footer-links a, .footer-content .email-signup, .footer-content .copyright-info, .footer-content .social-button .fa").css({"color":"#9a9b9e"});
			    // Website Links
			    $("[href='#about-us']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#faqs']").attr("href","https://www.faqs.com"); // FAQs
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact-us
			    $("[href='#suggest-us']").attr("href","https://www.suggest.com"); // Suggest-us
			    $("[href='#sitemap']").attr("href","https://www.sitemap.com"); // Sitemap
			    $("[href='#privacy-policy']").attr("href","https://www.privacypolicy.com"); // Privacy Policy
			    $("[href='#terms-of-use']").attr("href","https://www.termsofuse.com"); // Terms Of Use
			    // Social Buttons
			    $("[href='#facebook']").attr({"href":"https://www.facebook.com", "target":"_blank"}); // Fsacebook
			    $("[href='#instagram']").attr({"href":"https://www.instagram.com", "target":"_blank"}); // Instagram
			    $("[href='#twitter']").attr({"href":"https://www.twitter.com", "target":"_blank"}); // Twitter
			    $("[href='#whatsapp']").attr({"href":"https://www.whatsapp.com", "target":"_blank"}); // Whatsapp
			}


			/* For Large screens-------------------------------------------------- 600 MIN*/
			if (window.matchMedia('(min-width: 600px) and  (max-width: 768px)').matches) {
			/* Changes when we reach the min-width  */
				// Header Links
			    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
			    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".nav-logo").css({"margin":"0% 0% 0% 10%","width":"50%"}); // CSS of logo
			    $(".navbar-nav").css({"margin":"0% 0% 0% 6%"}); // CSS of logo
			    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0", "position":"sticky"}); // Background Color
			    $("* #nav-link").css({"color":"#000000", "font-size":"110%"});
			    // Navigation Links
			    $("[href='#home']").attr("href","https://www.home.com"); // Home
			    $("[href='#features']").attr("href","https://www.features.com"); // Features
			    $("[href='#about']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
			    $("[href='#join']").attr("href","https://www.join.com"); // Join
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

			    // Footer
			    $(".footer-content .row").css({"background-color":"#3e3f42","margin":"2% 0% 0% 0%", "color":"#333366"}); // CSS of logo
			    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".footer-logo").css({"margin":"10% 0% 0% 30%","width":"40%"}); // CSS of logo
			    $(".footer-content .footer-our-vison, .footer-content .footer-links .footer-link-heading, .footer-content .footer-links a, .footer-content .email-signup, .footer-content .copyright-info, .footer-content .social-button .fa").css({"color":"#9a9b9e"});
			    // Website Links
			    $("[href='#about-us']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#faqs']").attr("href","https://www.faqs.com"); // FAQs
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact-us
			    $("[href='#suggest-us']").attr("href","https://www.suggest.com"); // Suggest-us
			    $("[href='#sitemap']").attr("href","https://www.sitemap.com"); // Sitemap
			    $("[href='#privacy-policy']").attr("href","https://www.privacypolicy.com"); // Privacy Policy
			    $("[href='#terms-of-use']").attr("href","https://www.termsofuse.com"); // Terms Of Use
			    // Social Buttons
			    $("[href='#facebook']").attr({"href":"https://www.facebook.com", "target":"_blank"}); // Fsacebook
			    $("[href='#instagram']").attr({"href":"https://www.instagram.com", "target":"_blank"}); // Instagram
			    $("[href='#twitter']").attr({"href":"https://www.twitter.com", "target":"_blank"}); // Twitter
			    $("[href='#whatsapp']").attr({"href":"https://www.whatsapp.com", "target":"_blank"}); // Whatsapp

			}


			else if (window.matchMedia('(max-width: 600px)').matches){
				/* Changes when we reach the min-width  */
				// Header Links
			    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
			    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".nav-logo").css({"margin":"2% 0% 0% 20%","width":"70%"}); // CSS of logo
			    $(".navbar-nav").css({"margin":"2% 0% 2% 45%"}); // CSS of logo
			    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0", "position":"sticky"}); // Background Color
			    $("* #nav-link").css({"color":"#000000", "font-size":"110%"});
			    // Navigation Links
			    $("[href='#home']").attr("href","https://www.home.com"); // Home
			    $("[href='#features']").attr("href","https://www.features.com"); // Features
			    $("[href='#about']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
			    $("[href='#join']").attr("href","https://www.join.com"); // Join
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

			    // Footer
			    $(".footer-content .row").css({"background-color":"#3e3f42","margin":"2% 0% 0% 0%", "color":"#333366"}); // CSS of logo
			    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
			    $(".footer-logo").css({"margin":"10% 30% 0% 30%","width":"45%"}); // CSS of logo
			    $(".footer-content .footer-our-vison, .footer-content .footer-links .footer-link-heading, .footer-content .footer-links a, .footer-content .email-signup, .footer-content .copyright-info, .footer-content .social-button .fa").css({"color":"#9a9b9e"});
			    // Website Links
			    $("[href='#about-us']").attr("href","https://www.about.com"); // About
			    $("[href='#services']").attr("href","https://www.services.com"); // Services
			    $("[href='#faqs']").attr("href","https://www.faqs.com"); // FAQs
			    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact-us
			    $("[href='#suggest-us']").attr("href","https://www.suggest.com"); // Suggest-us
			    $("[href='#sitemap']").attr("href","https://www.sitemap.com"); // Sitemap
			    $("[href='#privacy-policy']").attr("href","https://www.privacypolicy.com"); // Privacy Policy
			    $("[href='#terms-of-use']").attr("href","https://www.termsofuse.com"); // Terms Of Use
			    // Social Buttons
			    $("[href='#facebook']").attr({"href":"https://www.facebook.com", "target":"_blank"}); // Fsacebook
			    $("[href='#instagram']").attr({"href":"https://www.instagram.com", "target":"_blank"}); // Instagram
			    $("[href='#twitter']").attr({"href":"https://www.twitter.com", "target":"_blank"}); // Twitter
			    $("[href='#whatsapp']").attr({"href":"https://www.whatsapp.com", "target":"_blank"}); // Whatsapp
			    $(".copyright-text").html("Copyright &copy;Virgin Tutor 2018");
			}
			

		};
		
		/* Call the function */
			mediaSize();
		/* Attach the function to the resize event listener */
			window.addEventListener('resize', mediaSize, false);  
	})(jQuery);
});
