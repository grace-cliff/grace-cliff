const footer = document.getElementById('footer');

const footerHTML = `<div class="flex justify-between">
                        <a target="_blank" href="https://www.linkedin.com/in/grace-cliff-11049b202">LinkedIn</a>
                        <a href="mailto:gracecliff13@gmail.com">Email Address</a>
                        <a target="_blank" href="https://www.instagram.com/cliff.mp4/">Instagram</a>
                    </div>
                    <copyright>@copyright Grace Cliff <span id="year"></span></copyright>
                    <p>Website Developed by <a href="https://annette-cliff.github.io/annette-cliff/layout/index.html" title="External link to Annette's website" target="_blank"><u>Annette Cliff</u></a></p>`

footer.innerHTML = footerHTML;


document.getElementById("year").textContent = new Date().getFullYear();