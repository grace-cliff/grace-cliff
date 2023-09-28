// header.js

const header = document.getElementById('header');

const headerHTML = `<div class="desktop-only">
                        <div class="flex">
                            <a href="/layout/portfolio.html" title="Link to the portfolio page">
                                <h1><img src="/grace-cliff/assets/logo/logo.png" alt="Logo for Grace Cliff depicting a face with a thumbprint." width="170" height="170"></h1>
                            </a>
                            <nav class="navigation">
                                <ul>
                                    <li><a class="about" href="/grace-cliff/layout/about.html" title="Link to the about page">About</a></li>
                                    <li><a class="portfolio" href="/grace-cliff/layout/portfolio.html" title="Link to the portfolio page">Portfolio</a></li>
                                    <li><a class="contact" href="/grace-cliff/layout/contact.html" title="Link to the contact page">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="mobile-only">
                        <div class="flex">
                            <nav class="navigation">
                                <ul>
                                    <li><a class="about-mobile" href="/grace-cliff/layout/about.html" title="Link to the about page">About</a></li> 
                                </ul>
                            </nav>
                            <a href="/grace-cliff/layout/portfolio.html" title="Link to the portfolio page">
                                <h2><img src="/grace-cliff/assets/logo/logo.png" alt="Logo for Grace Cliff depicting a face with a thumbprint." width="170" height="170"></h2>
                            </a>
                            <nav class="navigation">
                                <ul>
                                    <li><a class="contact-mobile" href="/grace-cliff/layout/contact.html" title="Link to the contact page">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>`

header.innerHTML = headerHTML;

var currentLocation = window.location.pathname;

if (currentLocation.indexOf("about") !== -1) {
    var aboutLink = document.querySelector('.about');
    var aboutLinkM = document.querySelector('.about-mobile');
    aboutLink.classList.add('active');
    aboutLinkM.classList.add('active');
}

if (currentLocation.indexOf("portfolio") !== -1) {
    var portfolioLink = document.querySelector('.portfolio');
    portfolioLink.classList.add('active');
}

if (currentLocation.indexOf("contact") !== -1) {
    var contactLink = document.querySelector('.contact');
    var contactLinkM = document.querySelector('.contact-mobile');
    contactLink.classList.add('active');
    contactLinkM.classList.add('active');
}
