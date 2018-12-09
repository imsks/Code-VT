// To making it centralised model
$(document).ready(function(){
    // Header Links
    $(".navbar-brand").attr("href","https://www.google.com"); // Logo 
    $(".navbar-brand img").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
    $(".nav-logo").css({"margin":"3% 0% 0% 10%","width":"50%"}); // CSS of logo
    $(".navbar-nav").css({"margin":"2% 0% 0% 40%"}); // CSS of logo
    $(".navbar").css({"background-color":"#e5b9ca", "z-index":"100", "top":"0"}); // Background Color
    $("* #nav-link").css({"color":"#333366", "font-size":"110%"});
    // Navigation Links
    $("[href='#home']").attr("href","https://www.home.com"); // Home
    $("[href='#features']").attr("href","https://www.features.com"); // Features
    $("[href='#about']").attr("href","https://www.about.com"); // About
    $("[href='#services']").attr("href","https://www.services.com"); // Services
    $("[href='#pricing']").attr("href","https://www.pricing.com"); // Pricing
    $("[href='#join']").attr("href","https://www.join.com"); // Join
    $("[href='#contact-us']").attr("href","https://www.contact.com"); // Contact

    // Footer
    $(".footer-logo").attr("src","Assest/images/logos/Logo-Navigation.png"); // Image
    $(".footer-logo").css({"margin":"2% 0% 0% 13%","width":"70%"}); // CSS of logo
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
    
});
