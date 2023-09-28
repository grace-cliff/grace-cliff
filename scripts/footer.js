const footer = document.getElementById('footer');

const footerHTML = `<div class="flex justify-between">
                        <a target="_blank" href="https://www.linkedin.com/in/grace-cliff-11049b202">LinkedIn</a>
                        <a href="mailto:gracecliff13@gmail.com">Email Address</a>
                        <a target="_blank" href=" https://www.instagram.com/grace.cliff.art/">Art Instagram</a>
                    </div>
                    <copyright>@copyright Grace Cliff <span id="year"></span></copyright>
                    <p></p>`

footer.innerHTML = footerHTML;


document.getElementById("year").textContent = new Date().getFullYear();

// TODO: ADD TO FOOTER ONCE SITE IS LIVE
// <p>Website Developed by <a href="https://www.annette-cliff.dev" title="External link to Annette's website" target="_blank">Annette Cliff</a></p>