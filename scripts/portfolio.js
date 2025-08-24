// portfolio.js


// Page: Portfolio
if (window.location.href.includes("portfolio.html")) {
    var portfolioContent = [
        { 
            category: "Chicago Architecture Center Promotional Motion Graphics",
            title: "Chicago Architecture Center Promotional Motion Graphics",
            medium: "Animation / Video",
            info: "Under Chicago Architecture Center I did a volume of projects. Some  include a promotional video for their new website launch, a 3 second motion graphic for the introduction to the architecture film series ‘Design Matters’ and small animated graphics added to video footage to further draw viewer interest. I worked closely with the videographer Emmely Aldave when making design decisions.",
            image: "../assets/portfolio/chicago-architecture-center.gif",
            url: "../portfolio/chicago-architecture-center.html"
        },
        { 
            category: "2024 Premiere Film Festival",
            title: "2024 Premiere Film Festival",
            medium: "Projection Design",
            info: "",
            image: "../assets/portfolio/premiere-film-festival.gif",
            url: "../portfolio/premiere-film-festival.html"
        },
        { 
            category: "2025 Premiere Film Showcase",
            title: "2025 Premiere Film Showcase",
            medium: "Projection Design",
            info: "",
            image: "../assets/portfolio/premiere_2025.gif",
            url: "../portfolio/2025-festival.html"
        },
        {
            category: "A Cyborg Manifesto",
            title: "A Cyborg Manifesto",
            medium: "Animation / Video",
            info: "",
            image: "../assets/portfolio/cyborg-manifesto.gif",
            url: "../portfolio/cyborg-manifesto.html"
        },
        { 
            category: "Landscape",
            title: "<i>Landscape of Time</i> Immersive Projections",
            medium: "Installation",
            info: "Landscape of Time is an immersive projection installation that plays with concepts of time, transportation, and postmodern imagery. Covid-19 changed my perception of time as this piece drives that idea of time as a landscape rather than an arrow.",
            image: "../assets/portfolio/landscape.gif",
            url: "../portfolio/landscape.html"
        },
        { 
            category: "Marz Community Brewing Social Media Motion Design",
            title: "Marz Community Brewing Social Media Motion Design",
            medium: "Animation / Video",
            info: "",
            image: "../assets/portfolio/marz-community-brewing.gif",
            url: "../portfolio/marz-community-brewing.html"
        },
        { 
            category: "Incline Gaming Marketing",
            title: "Incline Gaming Marketing",
            medium: "Graphic Design",
            info: "",
            image: "../assets/portfolio/incline.gif",
            url: "../portfolio/incline.html"
        },
        { 
            category: "Sheets and Shadows",
            title: "Sheets and Shadows",
            medium: "Installation",
            info: "<i>Sheets and Shadows</i> explores the concept of small day-to-day interactions and fleeting connections that typically go unnoticed with strangers.",
            image: "../assets/portfolio/art-institute.gif",
            url: "../portfolio/art-institute.html"
        },
        { 
            category: "Fashion",
            title: "College of DuPage Fashion Show <i>Euphoria</i>",
            medium: "Installation",
            info: "These abstract interactive shapes, with patterns taken from garments in the College of DuPage Fashion Show, create a meta experience. Using Cinema 4D these abstract shapes act like fabric colliding into each other swiftly.",
            image: "../assets/portfolio/fashion-show.gif",
            url: "../portfolio/fashion-show.html"
        },
        {
            category: "Sunday Morning Grooves",
            title: "Sunday Morning Grooves",
            medium: "Animation / Video",
            info: "",
            image: "../assets/portfolio/sunday-morning-grooves.gif",
            url: "../portfolio/sunday-morning-grooves.html"
        },
        { 
            category: "Projections",
            title: "<i>When it Rains, it Pours</i>",
            medium: "Projection Design",
            info: "Under the School of Theatre and Dance at Illinois State University 'When it Rains, it Pours' was staged on pre-professional dancers. These projection designs were created for professional modern dancer and choreographer Morgan 'Mo' Williams; founder and director of Water Street Dance Milwaukee.",
            image: "../assets/portfolio/projections.gif",
            url: "../portfolio/projections.html"
        },
        // {
        //     category: "Immersive Visualization Lab",
        //     title: "Immersive Visualization Lab",
        //     medium: "Installation",
        //     info: "This 360 space gives a consuming etheric experience with spiritual symbolism such as sound bowls, incense, crystals and nature. This piece reflects a meditative state of healing through the tapping in of spiritual symbols. Some people when meditating experience a spinning sensation which is reflected in the warped flowers and almost dizzying experience of light and color. The theme of circles is also repeatedly used throughout the piece through the circular space itself, the sound bath circles, and the circular swaying images.",
        //     image: "../assets/portfolio/immersive-visualization-lab.jpeg",
        //     url: "../portfolio/ivl.html"
        // },
        { 
            category: "Ballet Body",
            title: "<i>Ballet Body</i> Performance Art Piece",
            medium: "Animation / Video",
            info: "This is a performance art piece about the lack of conversation around body image in the dance community. Awarded 2nd Place 3D and selected to display video at the 2023 Cleve Carney Art Gallery Exhibition.",
            image: "../assets/portfolio/ballet.png",
            url: "../portfolio/ballet-body.html"
        },
        { 
            category: "Kinetic",
            title: "Standards Graphics Manual for Social Good",
            medium: "Graphic Design",
            info: "Kinetic Dance Apparel is a mock Clothing Company that focuses on providing clothing options that make dancers feel confident and comfortable in looser fitted athletic clothing.",
            image: "../assets/portfolio/kinetic.png",
            url: "../portfolio/kinetic.html"
        },
        { 
            category: "Fragmented",
            title: "<i>Fragmented / Illuminate</i>",
            medium: "Projection Design",
            info: "Under founder and artistic director Morgan 'Mo' Williams, for Water Street Dance Milwaukee, I created the projection designs for his company modern dancers. Fragmented / Illuminate is an evening-length work that incorporates seven chapters. Chapter I. Entity, II. Speaking to My Younger Self, III. Broken Veil, IV. “My God Aint This Yours” Ft. Brooklyn Llyod, V. Falling Into…, VI. Self ← Unseen, and VII. When it Rains, It Pours (restaged).",
            image: "../assets/portfolio/fragmented.gif",
            url: "../portfolio/fragmented.html"
        },
        // { 
        //     category: "Censored",
        //     title: "<i>This is a Censored Exhibition</i>",
        //     medium: "Installation",
        //     info: "On February 3 of 2023 a train carrying tons of hazardous and toxic chemicals derailed in Palestine, Ohio. This exhibition is a product of the little we know.",
        //     image: "../assets/portfolio/censored.png",
        //     url: "../portfolio/censored.html"
        // },
        { 
            category: "Expectations Vs. Reality",
            title: "<i>Expectations vs. Reality</i> Performace Art",
            medium: "Projection Design",
            info: "'Expectations vs Reality' is a multimedia piece that challenges one's predisposed notions of reality. It is a DADA inspired work with themes of playfulness, layered ideas, and avant-garde concepts. Time, color, and sound are all explored in this combination of projections with modern dance.",
            image: "../assets/portfolio/expectations-vs-reality.gif",
            url: "../portfolio/expectations-vs-reality.html"
        },
        // {
        //     category: "Kota the Friend",
        //     title: "Kota the Friend",
        //     medium: "Graphic Design",
        //     info: "This website (hover over image to the left; click to enter) was inspired by lyric rapper Kota the Friend. It mimic’s his phone screen with the apps you can steam his music, find his Discography under Safari, Gallery, and Albums under the Albums app.  HTML and CSS external stylesheets were used in the creation of the website. It is made for a 1280 by 800 monitor or iPad. My process began with researching facts about Kota the Friend to tailor a website that would accurately mimic his iPhone. I then created three wireframe designs and with the best mockup made an interactive prototypes in Adobe XD. After finalizing my mockup I coded all the HTML and CSS using the program ‘Brackets’. I chose Kota the Friend because I like the messages he raps in his music from being down to earth, humble, to hustling for your goals.",
        //     image: "../assets/kota-the-friend/image.png",
        //     url: "../portfolio/kota-the-friend.html"
        // },
        {
            category: "QWC",
            title: "Branding for Quality Work Construction",
            medium: "Graphic Design",
            info: "",
            image: "../assets/portfolio/qwc.png",
            url: "../portfolio/qwc.html"
        },
        { 
            category: "Starbucks",
            title: "Starbucks Rebranding",
            medium: "Graphic Design",
            info: "For a school project, I rebranded Starbucks because I admire their values and social impact as a company. Having worked at Starbucks, I gained an inside perspective that influenced my creative decisions.",
            image: "../assets/portfolio/starbucks.png",
            url: "../portfolio/starbucks.html"
        },
        { 
            category: "Animation / Video Compilation",
            title: "Animation / Video Compilation",
            medium: "Animation / Video",
            info: "",
            image: "../assets/portfolio/animation-video-compilation.png",
            url: "../portfolio/animation-video-compilation.html"
        },
        { 
            category: "Graphic Design Compilation",
            title: "Graphic Design Compilation",
            medium: "Graphic Design",
            info: "",
            image: "../assets/portfolio/graphic-design-compilation.png",
            url: "../portfolio/graphic-design-compilation.html"
        }
    ]

     // { 
        //     category: "Mixed Media",
        //     title: "Mixed Media",
        //     medium: "2D/3D Animation",
        //     info: "This is a compilation of mixed media from various projects and clients. This includes graphic design posters, logos, kinetic type videos, rotoscoping and dance reels.",
        //     image: "../assets/portfolio/mixed-media.png",
        //     url: "../portfolio/mixed-media.html"
        // },
        // { 
        //     category: "Breaking",
        //     title: "<i>Breaking</i> Magazine Spread Redesign",
        //     medium: "Graphic Design",
        //     info: "Diggit Magazine's article 'Breaking Global Cultural Boundaries Though Dance' redesigned page spreads bring light to the history of 'breaking' in a creative and fun manner.",
        //     image: "../assets/portfolio/breaking-magazine.png",
        //     url: "../portfolio/breaking-magazine.html"
        // },

    const portfolioGrid = document.getElementById('portfolioGrid');

    const portfolioGridHTML = portfolioContent
    .map(item => `<a href="${item.url}" title="Link to the ${item.category} page" data-category="${item.medium}" class="grid-item">
                        <picture>
                            <source srcset="${item.image}" media="(min-width: 600px)" />
                            <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                        <h2>${item.title}</h2>
                        <h3>${item.medium}</h3>
                        <p>${item.info}</p>
                    </a>`)
    .join('');

    portfolioGrid.innerHTML += portfolioGridHTML;



    const portfolioFilters = document.getElementById('portfolioFilters');
    const portfolioItems = document.querySelectorAll('.grid-item');

    const categories = [
        {
            title: "All",
            filter: "All"
        },
        {
            title: "Projection Design",
            filter: "Projection Design"
        },
        {
            title: "Graphic Design",
            filter: "Graphic Design"
        },
        {
            title: "Animation / Video",
            filter: "Animation / Video"
        },
        {
            title: "Installation",
            filter: "Installation"
        }
    ];

    const portfolioFiltersHTML = categories.map((title, index) => 
        `<li ${index === 0 ? 'class="active"' : '' }data-category="${title.filter}">${title.title}</li>`
    ).join('');
    portfolioFilters.innerHTML += portfolioFiltersHTML;


    function displayFilteredItems(filter) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filter === 'All' || itemCategory === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        function isElementAboveFold(element) {
            const rect = element.getBoundingClientRect();
            return rect.top < window.innerHeight;
          }
      
          // Get all elements with the specified class
          const elements = document.querySelectorAll('.grid-item');
      
          // Check visibility for each element
          elements.forEach(function(element, index) {
            if (isElementAboveFold(element)) {
              console.log(`Element ${index + 1} is above the fold`);
              element.classList.add('fade-in')
              element.classList.add('visible')
            } else {
              console.log(`Element ${index + 1} is below the fold`);
              element.classList.remove('fade-in')
            }
          });
    }

    const filterTrigger = document.querySelector('.portfolio-filter-trigger');
    const portfolioFiltersMobile = document.getElementById('portfolio-filters')

    filterTrigger.addEventListener('click', function(){
        var has_active_class = filterTrigger.classList.contains('active');
        has_active_class 
        ? (filterTrigger.classList.remove('active'), portfolioFiltersMobile.style.display = "none") 
        : (filterTrigger.classList.add('active'), portfolioFiltersMobile.style.display = "block");
    }); 
    
    portfolioFilters.addEventListener('click', (event) => {
    const targetCategory = event.target.getAttribute('data-category');

        portfolioFilters.querySelectorAll('li').forEach(item => {
            item.classList.remove('active');
        });

        var has_active_class = event.target.classList.contains('active');
            has_active_class ? event.target.classList.remove('active') : event.target.classList.add('active');

        displayFilteredItems(targetCategory);
    });

}


// Page: About
if (window.location.href.includes("about.html")) {
    var about = [
        { 
            title: "Hello, I'm Grace Cliff",
            info_1: "<p>I am a highly creative interdisciplinary designer with a strong vision for brand design, social media marketing, and audiovisual storytelling. My specialization is in graphic design, motion graphics, and video editing.</p> <p>I am pursuing a MA in Animation with a concentration in Motion Graphics at DePaul University’s Jarvis College of Computing. I graduated from Illinois State University, magna cum laude, with a B.A. Graphic Design, B.A. in Creative Technology, and a minor in Dance. </p><p>Some of my client work includes social media marketing for nonprofit start-up entrepreneurial companies, projection designs for modern dance company Waterstreet Dance Milwaukee, and 3D animations for Chicago local Brewery Marz Community Brewing.<br></br> I am currently in the market for full-time or freelance design positions.</p>",
            video: "https://player.vimeo.com/video/1088474443",
            image: "../assets/about/image.jpg",
            resume: "../assets/about/GraceCliff_Resume.pdf"
        }
    ]
    
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = about
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <div class="button-wrap">
                                <a href="${item.resume}" target="_blank" class="button" title="External link to resume">Resume</a>
                            </div>
                        </div>
                    </div>

                    <div class="grid-item about-video">
                        <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;    
}


// Page: Chicago Architecture Center
if (window.location.href.includes("chicago-architecture-center.html")) {
    var chicago_architecture_center = [
        { 
            title: "Chicago Architecture Center",
            info_1: "<p>Under the Chicago Architecture Center I did a volume of 2D and 3D Motion Graphics for their social media and website. Some projects include promotional videos for the new website launch and Open House Chicago, 3D animations of the gift shop items, and a 3 second motion graphic for the introduction of the architecture film series ‘Design Matters’.</p>",
            image: "https://www.youtube.com/embed/ll9eg7tWUtE",
            video_1: "https://www.youtube.com/embed/SIOQutHYTSE",
            video_2: "https://www.youtube.com/embed/NP30IyoZFQw",
            video_3: "https://www.youtube.com/embed/yBQdkXp7oO4",
            video_4: "https://www.youtube.com/embed/1wle_rcqDFI",
            video_5: "https://www.youtube.com/embed/dMAEEtbak-g",
            image_1: "../assets/chicago-architecture-center/image_1.jpg",
            image_2: "../assets/chicago-architecture-center/image_2.jpg",
            image_3: "../assets/chicago-architecture-center/image_3.jpg",
            image_4: "../assets/chicago-architecture-center/image_4.jpg"
        }
    ]
 
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = chicago_architecture_center
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.image}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = chicago_architecture_center.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                     <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_4}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                     <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_5}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 5; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML += mainGridHTML.join('');
}


// Page: Art Institute
if (window.location.href.includes("art-institute.html")) {
    var art = [
        { 
            title: "'Sheets and Shadows'",
            info_1: "<p>'Sheets and Shadows' is a collaborative exhibition that explores the small day-to-day interactions and fleeting connections that often go unnoticed. Using our own shadows, we created a meditative piece that allows viewers to take a step back from their normal reality, allowing them to ruminate over these small moments in time. </p> <p> In Collaboration With: Grace Cliff, Brianna King, Tess McBride, Angelo Mendez, Philio Milioti, and Janine Orihuela.</p> <p> This piece was shown at The Art Institute of Chicago May 5th through Partner Day with College of DuPage in the Ryan Learning Center </p>",
            video_1: "https://player.vimeo.com/video/826754466?h=906d1b6e14",
            image: "https://www.youtube.com/embed/-OdjJCfDZwk",
            image_1: "../assets/art-institute/image_1.jpg",
            image_2: "../assets/art-institute/image_2.jpg",
            image_3: "../assets/art-institute/image_3.jpg",
            image_4: "../assets/art-institute/image_4.jpg",
            image_5: "../assets/art-institute/image_5.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = art
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.image}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = art.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 5; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Ballet Body
if (window.location.href.includes("ballet-body.html")) {
    var ballet = [
        { 
            title: "Ballet Body Performance Art",
            info_1: "Awarded 2nd Place 3D and selected to display a video of my performance piece 'Ballet Body' in the 2023 Cleve Carney Art Gallery Exhibition Issued by Juror Erin Washington. ‘The Ballet Body’ is a performance art piece that starts the conversation around body image in the dance world. I want to change the concept of how one should look by redirecting the focus to athleticism and health. There is no one ‘dancer body’. The imagery of a long neck, small waist, and long legs that Ballenchine instilled in dance leads to unhealthy and unrealistic expectations that most dancers can not obtain. Yes, some dancers can maintain this body and be healthy but that should not be the standard. This topic brings attention to a subject that is still rarely talked about in the ballet/dance community. I have personal experiences relating to this subject having danced my whole life and being immersed in studio dance and college dance. This piece is broken down into three sections with the first section tying the pointe shoes, a performance, and concluding with the pointe shoes being untied. Audio of prominent dancers play including Misty Copeland, Kathryn Morgan, and Luna Montana. Body image is discussed while tying and untying the pointe shoes symbolizing the thoughts that go through a dancer’s mind before and after a show. One piece that inspired me was ‘How we experience time and memory through art: Sarah Sze Interview’ through the specific objects I chose to include in the performance art. In regards to the space, a curtain is draped with a single industrial light casted over my body. I wanted this to allude to the backstage of a theatre where a dancer would quickly change before performing on stage. The way the curtain is draped is similar to the classical era just as ballet’s origin is during the classical era. Most of my body sits in shadow with a rather somber mood. In an interview, Sarah Sze talks about objects occupying spaces in the form of memory. I wanted to create a space that held memories of past performances. Another inspiration is ‘The Case for Performance Art (The Art Assignment)’ The piece is not about the dancing but the emotional cost that comes with being a dancer.",
            image: "https://player.vimeo.com/video/818557472?h=fe875a1c64",
            image_1: "../assets/ballet-body/image_1.jpg",
            image_2: "../assets/ballet-body/image_2.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = ballet
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.image}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = ballet.map((item) => {
        const images = [];
        for (let i = 1; i <= 2; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Breaking Magazine
if (window.location.href.includes("breaking-magazine.html")) {
    var magazine = [
        { 
            title: "Breaking Magazine Spreads",
            info_1: "This magazine cover and spreads redesigns Diggit Magazine's Article <i>Breaking Global Cultural Boundaries through Dance</i> on Breaking and how the Hip-Hop industry has changed from the 1970's. Adobe InDesign and Illustrator were used in designing this piece. All the text is from the original article but visual imagery and stylization is not.",
            link_text: "Original Source",
            link: "https://www.diggitmagazine.com/papers/breakdance-breaking-global",
            image: "../assets/breaking-magazine/image.jpg",
            image_1: "../assets/breaking-magazine/image_1.jpg",
            image_2: "../assets/breaking-magazine/image_2.jpg",
            image_3: "../assets/breaking-magazine/image_3.jpg",
            image_4: "../assets/breaking-magazine/image_4.jpg",
            image_5: "../assets/breaking-magazine/image_5.jpg",
            image_6: "../assets/breaking-magazine/image_6.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = magazine
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <p>${item.link_text}: <a href="${item.link}" target="_blank" title="External link to the ${item.link_text}">${item.link}</a></p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = magazine.map((item) => {
        const images = [];
        for (let i = 1; i <= 6; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Censored
if (window.location.href.includes("censored.html")) {
    var censored = [
        { 
            title: "This is a Censored Exhibition",
            info_1: "<p>On February 3 of 2023 a train carrying tons of hazardous and toxic chemicals derailed in Palestine, Ohio-chemicals such as vinyl chloride, isobutylene, butyl acrylates, benzene, and ethylhexyl acrylate, all of which are flammable and combustible liquids or gasses. While the train burned and pumped clouds of thick black smoke into the air, the media coverage of the disaster was absent. Little to no word is getting published about this environmental catastrophe. Our exhibition confronts censorship at its target destination: the public. In making this exhibition, we, (Alex Morgan, Angelo Mendez, Benson, Grace Cliff, and Tess McBride), hope to bring to light the many forms of censorship still present in America today. This is a censored exhibition. The content of our work is confined by the content available to us. Our exhibition is a product of the little amount that we know.</p><p>MassArt Studio Foundation Brant Gallery in Boston exhibited visual material from <i>This is a Censored Exhibition</i> in their show titled Energy: <i>A Closer Look</i></p>",
            info_2: "<b>Press:</b> The Courier <i>This is a Censored Exhibition:</i> Art Gallery About Ohio Train Derailment March 2023 Newspaper Publication by Mariyam Syed",
            image: "../assets/censored/image.png",
            image_1: "../assets/censored/image_1.png",
            image_2: "../assets/censored/image_2.png",
            image_3: "../assets/censored/image_3.png",
            image_4: "../assets/censored/image_4.png",
            image_5: "../assets/censored/image_5.png",
            image_6: "../assets/censored/image_6.png",
            image_7: "../assets/censored/image_7.png",
            video_1: "https://player.vimeo.com/video/806976313?h=d036c51ddb"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = censored
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <p>${item.info_2}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = censored.map((item) => {
        const images = [];
        for (let i = 1; i <= 7; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }

        images.push(`<div class="grid-item"><iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe></div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML += mainGridHTML.join('');
}



// Page: Expectations vs. Reality
if (window.location.href.includes("expectations-vs-reality.html")) {
    var expectations = [
        { 
            title: "Expectations vs. Reality",
            info_1: "<p><i>Expectations versus Reality</i> challenges one's predisposed notions of reality. This surrealistic and DADA inspired multimedia work incorporates visual and sound pairings that initiates questions about the phenomenon we live in. For example, when cutting a melon one would expect fruit inside but what if that is not the case. In the history of surrealism, pieces are based on the subconscious mind and do not make logical sense just as this piece does not follow linear thinking. This piece reflects surrealism with ambiguity towards time and exaggerated color. Themes of DADA are shown through playfulness, layered ideas, and avant-garde concepts.</p><p>Artist Mika Rottenberg I first drew inspiration from in her video <i>Spaghetti Blockchain</i> when I attended her exhibit at the Museum of Contemporary Art in Chicago. I was also influenced by the episode <i>Identity</i> by Art of the 21st Century Season 1 when Steve Martin sets the scene. Finally, the music videos <i>Locket</i> and <i> M.R.</i> for the band <i>Crumb.</i></p>",
            image: "https://player.vimeo.com/video/492938005",
            video_1: "https://www.youtube.com/embed/GILdaPoTNIM",
            video_2: "https://player.vimeo.com/video/680264144?h=43ca499a3c",
            image_1: "../assets/expectations-vs-reality/image_1.jpg",
            image_2: "../assets/expectations-vs-reality/image_2.jpg",
            image_3: "../assets/expectations-vs-reality/image_3.jpg",
            image_4: "../assets/expectations-vs-reality/image_4.jpg",
            image_5: "../assets/expectations-vs-reality/image_5.jpg",
            image_6: "../assets/expectations-vs-reality/image_6.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = expectations
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.image}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = expectations.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 6; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Fashion Show
if (window.location.href.includes("fashion-show.html")) {
    var fashion = [
        { 
            title: "College of DuPage Fashion Show Projections 'Euphoria'",
            info_1: "<p>For the 2023 College of DuPage Fashion Show I collaborated with a sculpture student to create abstract interactive shapes from garments in the show. Using Cinema 4D, I designed soft, pillow-like forms that slowly collided and moved across the screen evoking energy and rhythm to mirror the flow of the fashion pieces. For my process I took photos of different garments that were in the show and then UV mapped the images onto the 3D objects. The projection aimed to bring dynamic movement into the space, aligning with the show's theme of Euphoria—a word rooted in the Greek phrase \"I'm bringing something good.\" The sculpture was made with styrofoam and plastic sheets that were glued in a way to further add texture to the projections. It was then placed adjacent to the fashion show walkway and played on a seamless loop during the show.</p><p>Sculpture and music are influenced by sea waves and indie music created by Philio Milioti.</p>",
            image: "../assets/fashion-show/image.jpg",
            video_1: "https://player.vimeo.com/video/827116854?h=2b4d5813d8",
            image_1: "../assets/fashion-show/image_1.gif",
            image_2: "../assets/fashion-show/image_2.jpg",
            image_3: "../assets/fashion-show/image_3.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = fashion
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = fashion.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 3; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Fragmented
if (window.location.href.includes("fragmented.html")) {
    var fragmented = [
        { 
            title: "Fragmented / Illuminate",
            info_1: "<p>Under founder and artistic director Morgan 'Mo' Williams, for Water Street Dance Milwaukee, I created the projection designs for his company's modern dancers. Fragmented / Illuminate is an evening-length work that incorporates seven chapters. Chapter I. Entity, II. Speaking to My Younger Self, III. Broken Veil, IV. “My God Aint This Yours” Ft. Brooklyn Llyod, V. Falling Into…, VI. Self ← Unseen, and VII. When it Rains, It Pours (restaged). </p><p> <i>Fragmented</i> was staged at Water Street Dance Milwaukee January 2023. This intimate space, close with the dancers, allowed for an immersive experience. <i>Illuminate</i> was staged at Broadway Theatre Center Milwaukee June 2023 taking elements of the <i>Fragmented</i> Show.</p>",
            info_2: "Chapter I. Entity, II. Speaking to My Younger Self, III. Broken Veil, IV. “My God Aint This Yours” Ft. Brooklyn Llyod, V. Falling Into…, VI. Self ← Unseen, and VII. When it Rains, It Pours (restaged). Fragmented was staged at Water Street Dance Milwaukee January 2023. This intimate space, close with the dancers, allowed for an immersive experience. Illuminate was staged at Broadway Theatre Center Milwaukee June 2023 taking elements of the Fragmented Show. Fragmented to Illuminate Changes:",
            info_3: "<b>Fragmented to Illuminate Changes:</b>",
            info_4: "<b>Chapter I. Entity:</b> an ethereal rainbow video plays in the background which was added with the animated circles. More linework was also added during the solo.",
            info_5: "<b>Chapter II. Speaking to My Younger Self:</b> the projections were cut so the blackouts throughout this section would be more prominent.",
            info_6: "<b>Chapter III. Broken Veil:</b> All new footage was used from <i>Fragmented</i> to <i>Illuminate</i>. Originally wavy lines were used to mimic soundwaves with the static-like audio. I chose to use crayons and charcoal drawings playing with texture and noise as well as color instead. This was projected on the wooden prop.",
            info_7: "<b>Chapter VII. When it Rains, It Pours (Restaged):</b> Was originally set on Illinois State University dancers in April 2022 when I designed the projections. When restaged, no modifications were made from ISU to <i>Fragmented</i>. 'When it Rains, It Pours' was not in the <i>Illuminate</i> Show.",
            image: "../assets/fragmented/image.jpg",
            video_1: "https://player.vimeo.com/video/806939078?h=c97c720961",
            video_2: "https://player.vimeo.com/video/853824331?h=d0e64d6610",
            video_3: "https://player.vimeo.com/video/853832578?h=c60428555e",
            video_4: "https://player.vimeo.com/video/806944546?h=5c6129bd86",
            video_5: "https://player.vimeo.com/video/806940893?h=d4f225c881",
            video_6: "https://player.vimeo.com/video/853819174?h=47c40b818c",
            video_7: "https://player.vimeo.com/video/853834196?h=e0999d81f7",
            video_8: "https://player.vimeo.com/video/806942966?h=b32920b7d8",
            image_1: "../assets/fragmented/image_1.png",
            image_2: "../assets/fragmented/image_2.png",
            image_3: "../assets/fragmented/image_3.jpg",
            image_4: "../assets/fragmented/image_4.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = fragmented
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <p>${item.info_2}</p>
                            <p>${item.info_3}</p>
                            <p>${item.info_4}</p>
                            <p>${item.info_5}</p>
                            <p>${item.info_6}</p>
                            <p>${item.info_7}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = fragmented.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <picture>
                            <source srcset="${item.image_1}" media="(min-width: 600px)" />
                            <img src="${item.image_1}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                    </div>
                    <div class="grid-item">
                        <picture>
                            <source srcset="${item.image_2}" media="(min-width: 600px)" />
                            <img src="${item.image_2}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_4}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_5}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_6}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_7}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_8}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <picture>
                            <source srcset="${item.image_3}" media="(min-width: 600px)" />
                            <img src="${item.image_3}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                    </div>
                    <div class="grid-item">
                        <picture>
                            <source srcset="${item.image_4}" media="(min-width: 600px)" />
                            <img src="${item.image_4}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                        </picture>
                    </div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: IVL
if (window.location.href.includes("ivl.html")) {
    var ivl = [
        { 
            title: "360 Immersive Visualization Lab",
            info_1: "This 360 space gives a consuming etheric experience with spiritual symbolism such as sound bowls, incense, crystals and nature. This piece reflects a meditative state of healing through the tapping in of spiritual symbols. Some people when meditating experience a spinning sensation which is reflected in the warped flowers and almost dizzying experience of light and color. The theme of circles is also repeatedly used throughout the piece through the circular space itself, the sound bath circles, and the circular swaying images.",
            image: "https://player.vimeo.com/video/827020634?h=a3134b5332",
            image_1: "../assets/ivl/image_1.jpg",
            image_2: "../assets/ivl/image_2.jpg",
            image_3: "../assets/ivl/image_3.jpg",
            image_4: "../assets/ivl/image_4.jpg",
            image_5: "../assets/ivl/image_5.jpg",
            image_6: "../assets/ivl/image_6.jpg",
            image_7: "../assets/ivl/image_7.jpg",
            image_8: "../assets/ivl/image_8.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = ivl
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.image}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = ivl.map((item) => {
        const images = [];
        for (let i = 1; i <= 8; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML += mainGridHTML.join('');
}



// Page: Kinetic
if (window.location.href.includes("kinetic.html")) {
    var kinetic = [
        { 
            title: "Kinetic Dance Clothing",
            info_1: " Kinetic Dance Apparel is a Clothing Company that focuses on giving clothing options that make the dancer feel as confident and comfortable as possible through looser fitted athletic clothing. Our mission is to change dancer’s relationship with their body to a more positive, healthy mindset. Currently in the dance world there is a lot of adversity dancer’s go through in order to fit the ‘ideal body image’ that has been put on them. These body images are often unhealthy and unattainable for most body types. Kinetic Dance Apparel is changing the narrative by creating a safe space and redirecting the focus to athleticism instead of looks. Our goal is to fight negative body image in the Dance World through progressive changes and education.",
            image: "../assets/kinetic/image.jpg",
            image_1: "../assets/kinetic/image_1.jpg",
            image_2: "../assets/kinetic/image_2.jpg",
            image_3: "../assets/kinetic/image_3.jpg",
            image_4: "../assets/kinetic/image_4.jpg",
            image_5: "../assets/kinetic/image_5.jpg",
            image_6: "../assets/kinetic/image_6.jpg",
            image_7: "../assets/kinetic/image_7.jpg",
            image_8: "../assets/kinetic/image_8.jpg",
            video_1: "https://player.vimeo.com/video/870483781?h=8549e62663",
            image_9: "../assets/kinetic/image_9.jpg",
            image_10: "../assets/kinetic/image_10.jpg",
            image_11: "../assets/kinetic/image_11.jpg",
            image_12: "../assets/kinetic/image_12.jpg",
            image_13: "../assets/kinetic/image_13.jpg",
            image_14: "../assets/kinetic/image_14.jpg",
            image_15: "../assets/kinetic/image_15.jpg",
            image_16: "../assets/kinetic/image_16.jpg",
            image_17: "../assets/kinetic/image_17.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = kinetic
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = kinetic.map((item) => {
        const images = [];
        for (let i = 1; i <= 8; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        images.push(`<div class="grid-item">
            <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>`)
        for (let i = 9; i <= 17; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Kota The Friend
if (window.location.href.includes("kota-the-friend.html")) {
    var kota = [
        { 
            title: "Kota the Friend Website",
            info_1: "This website is inspired by lyric rapper Kota the Friend. It mimic's his personal phone screen with the apps you can stream his music, discography under safari, gallery, and albums. HTML and CSS external style sheets were used in the creation of the website. It is made for a 1280 by 800 monitor or iPad. My process began with researching facts about Kota the Friend to tailor a website that would accurately mimic his iPhone. I then created three wireframe designs and with the best mockup made interactive prototypes in Adobe XD. I chose Kota the Friend because I like the messages he raps about from being down to earth, humble, to hustling for your goals.",
            image: "../assets/kota-the-friend/image.png",
            image_1: "../assets/kota-the-friend/image_1.png",
            image_2: "../assets/kota-the-friend/image_2.png",
            image_3: "../assets/kota-the-friend/image_3.png",
            image_4: "../assets/kota-the-friend/image_4.png",
            image_5: "../assets/kota-the-friend/image_5.png",
            image_6: "../assets/kota-the-friend/image_6.png",
            image_7: "../assets/kota-the-friend/image_7.png",
            image_8: "../assets/kota-the-friend/image_8.png"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = kota
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <div class="button-wrap">
                                <a class="button" target="_blank" href="https://gmclif1.github.io/kotathefriend/">See the site</a>
                            </div>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = kota.map((item) => {
        const images = [];
        for (let i = 1; i <= 8; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}


// Page: Landscape
if (window.location.href.includes("landscape.html")) {
    var landscape = [
        { 
            title: "Landscape of Time",
            info_1: "<i>Landscape of Time</i> is an immersive projection installation that plays with concepts of time, transportation, and post-modern imagery. One inspiration is Abbass & Rahme piece <i>Contingency</i> inspired through the use of sound as a spatial practice, distortion, and use of lighting. Another inspiration for this piece is Barbara Kruger's use of typography. Covid-19 has changed my perception of time as this piece drives that idea of time being a landscape rather than an arrow.",
            video_1: "https://player.vimeo.com/video/779073211?h=2bcbe0ec12",
            video_2: "https://player.vimeo.com/video/779076708?h=7a5ec6e269",
            video_3: "https://player.vimeo.com/video/779078032?h=f33e9161ca",
            image: "../assets/landscape/image.jpg",
            image_1: "../assets/landscape/image_1.jpg",
            image_2: "../assets/landscape/image_2.jpg",
            image_3: "../assets/landscape/image_3.jpg"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = landscape
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = landscape.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 3; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Mixed Media
if (window.location.href.includes("mixed-media.html")) {
    var media = [
        { 
            title: "Mixed Media",
            image_1: "../assets/mixed-media/image_1.png",
            image_2: "../assets/mixed-media/image_2.png",
            image_3: "../assets/mixed-media/image_3.png",
            image_4: "../assets/mixed-media/image_4.png",
            image_5: "../assets/mixed-media/image_5.png",
            image_6: "../assets/mixed-media/image_6.png",
            image_7: "../assets/mixed-media/image_7.png",
            image_8: "../assets/mixed-media/image_8.jpg",
            image_9: "../assets/mixed-media/image_9.jpg",
            image_10: "../assets/mixed-media/image_10.jpg",
            image_11: "../assets/mixed-media/image_11.jpg",
            image_12: "../assets/mixed-media/image_12.jpg",
            image_13: "../assets/mixed-media/image_13.jpg",
            image_14: "../assets/mixed-media/image_14.png",
            image_15: "../assets/mixed-media/image_15.jpg",
            video_1: "https://player.vimeo.com/video/549486822?h=6e186bba76",
            video_2: "https://player.vimeo.com/video/640242995?h=5491d0fe86",
            video_3: "https://player.vimeo.com/video/650166803?h=0bbeda93c1",
            video_4: "https://player.vimeo.com/video/811611017?h=12a4d824ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = media
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="info">
                            <h2>${item.title}</h2>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = media.map((item) => {
        const images = [];
        for (let i = 1; i <= 15; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_4}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
}



// Page: Projections
if (window.location.href.includes("projections.html")) {
    var projections = [
        { 
            title: "When it Rains, it Pours",
            info_1: "Under the School of Theatre and Dance at Illinois State I designed projections for modern dance choreographer Morgan 'Mo' Williams; director of Water Street Dance Milwaukee. He staged his work on pre-professional dancers as I worked closely with him and the dancers as creative assistant. My intention was to further emphasize the choreography through the linework. In my creative process I wanted to animate an abstract storm starting with a drizzle that is sparse, slowly transforming into lines that create puddles of water at the bottom of the screen. As the performance progressed, the projection intensified into abstracted, rhythmic rainfall, mirroring the choreography.",
            info_2: "<b>Costume Designer</b> Kari Rust",
            info_3: "<b>Lighting Designer</b> Ash Parra",
            info_4: "<b>Photography</b> Pete Guither",
            video_1: "https://player.vimeo.com/video/712161548?h=d90052fe4c",
            video_2: "https://player.vimeo.com/video/712599018?h=44ee6278ea",
            video_3: "https://player.vimeo.com/video/712605717?h=91517b956c",
            image: "../assets/projections/image.jpg",
            image_1: "../assets/projections/image_1.jpg",
            image_2: "../assets/projections/image_2.jpg",
            image_3: "../assets/projections/image_3.jpg",
            image_4: "../assets/projections/image_4.jpg",
            image_5: "../assets/projections/image_5.jpg",
            image_6: "../assets/projections/image_6.jpg",
            image_7: "../assets/projections/image_7.jpg"
            // image_8: "../assets/projections/image_8.jpg",
            // image_9: "../assets/projections/image_9.png"
        }
    ]

    // top section
    const topSection = document.getElementById('topSection');

    const topSectionHTML = projections
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                            <ul>
                                <li>${item.info_2}</li>
                                <li>${item.info_3}</li>
                                <li>${item.info_4}</li>
                            </ul>
                        </div>
                    </div>`)
    .join('');

    topSection.innerHTML = topSectionHTML;

    // grid
    const mainGrid = document.getElementById('mainGrid');

    const mainGridHTML = projections.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 9; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });

    mainGrid.innerHTML = mainGridHTML.join('');
}


// Page: Starbucks
if (window.location.href.includes("starbucks.html")) {
    var starbucks = [
        { 
            title: "Starbucks Rebranding",
            info_1: "This Starbucks rebrand is influenced by previous company rebrands. Having worked as a barista at Starbucks, I gained an inside perspective which influenced my creative decisions. I also admire the values and social impact of the company. When observing previous rebrands, I noticed the simplification of the logo. As a result, the Starbuck crown makes up the logo following these trends. I also wanted warmer colors and put more emphasis on the Starbucks experience and less on the quick convenient aspects of Starbucks. Below is a mood board from initial research, animated logo, ephemeral variety, website, and phone mockups.",
            image: "../assets/starbucks/image.jpg",
            image_1: "../assets/starbucks/image_1.jpg",
            image_2: "../assets/starbucks/image_2.jpg",
            image_3: "../assets/starbucks/image_3.jpg",
            image_4: "../assets/starbucks/image_4.jpg",
            image_5: "../assets/starbucks/image_5.jpg",
            image_6: "../assets/starbucks/image_6.jpg",
            image_7: "../assets/starbucks/image_7.png",
            video: "https://www.youtube.com/embed/95gDOqT7foE"
        }
    ]
    
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = starbucks
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = starbucks.map((item) => {
        const images = [];
        for (let i = 1; i <= 9; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}


// Page: QWC
if (window.location.href.includes("qwc.html")) {
    var qwc = [
        { 
            title: "Branding for Quality Work Construction",
            info_1: "In collaboration with Quality Work Construction I redesigned their branding style guide, business cards, door placards, and email banners. When considering their visual identity, I wanted to emphasize a company that is approachable and producing quality work. To ensure creativity and consistency with the brand, I initially spoke with the CEO to fully understand the purpose of the redesign and how to better visually align the brand's mission, values, tone, audience, and competitors. I then established visual rules such as color usage and logo variations with do’s / don’t and real-world application examples such as t-shirt designs and social media. To ensure creativity, I left room for alternate logo treatments and secondary color pallets.The final style guide was created in Adobe Illustrator and delivered to the client as a single, professionally formatted PDF.",
            image: "../assets/qwc/image.png",
            image_2: "../assets/qwc/image_2.png",
            image_3: "../assets/qwc/image_3.png",
            image_4: "../assets/qwc/image_4.png",
            image_5: "../assets/qwc/image_5.png",
            image_6: "../assets/qwc/image_6.png",
            image_7: "../assets/qwc/image_7.png",
            image_8: "../assets/qwc/image_8.png",
            image_9: "../assets/qwc/image_9.png",
            image_10: "../assets/qwc/image_10.jpg",
            image_11: "../assets/qwc/image_11.png",
            image_12: "../assets/qwc/image_12.png"
        }
    ]
    
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = qwc
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = qwc.map((item) => {
        const images = [];
        for (let i = 1; i <= 12; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        // images.push(`<div class="grid-item">
        //                 <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        //             </div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}


// Page: Sunday Morning Grooves
if (window.location.href.includes("sunday-morning-grooves.html")) {
    var sundayMorning = [
        { 
            title: "Sunday Morning Grooves",
            info_1: "Sunday Morning Grooves encompasses the overall feeling of a warm summer Sunday morning. The piece starts slow as the sun rises and windchimes initiate movement in the scene. Soon jazz music plays as the morning picks up with a record player coming together to hip-hop. The video is heavily influenced by the rubber hose animation style and lofi beats videos. Autodesk Maya was used in modeling, rigging, animation, and rendering.",
            image_1: "../assets/sunday-morning-grooves/image_1.jpg",
            image_2: "../assets/sunday-morning-grooves/image_2.jpg",
            video: "https://www.youtube.com/embed/e5M4KIXG_7Y"
        }
    ]
    
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = sundayMorning
    .map(item => `<div class="flex large--flex-row flex-column">
                    <div class="image">
                        <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="info">
                        <h2>${item.title}</h2>
                        <p>${item.info_1}</p>
                    </div>
                </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = sundayMorning.map((item) => {
        const images = [];
        for (let i = 1; i <= 3; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}


// Page: Animation / Video Compilation
if (window.location.href.includes("animation-video-compilation.html")) {
    var animationVideoCompilation = [
        { 
            video_1: "https://player.vimeo.com/video/1088474443", // grace 
            video_2: "https://player.vimeo.com/video/949979129?h=d7926e3da", // title credits
            video_3: "https://player.vimeo.com/video/904986202?h=d52d48f242", // reckless
            video_4: "https://www.youtube.com/embed/HcmJQkRmaRs", // kinetic typography
            video_5: "https://player.vimeo.com/video/950094095?h=556e8fe436", // griselda
            video_6: "https://player.vimeo.com/video/927211117?h=917a20d787", // evil eye
            video_7: "https://www.youtube.com/embed/aXNsmdYLEYs", // premiere
            video_8: "https://www.youtube.com/embed/XKp9zxVJErc", // berin
            video_9: "https://www.youtube.com/embed/flPOLmTcJyw", // abstraction
            video_10: "https://player.vimeo.com/video/899581434?h=cc606bc6e8", // look for the light
            video_11: "https://player.vimeo.com/video/640242995?h=5491d0fe86", // pride
            video_12: "https://player.vimeo.com/video/650166803?h=0bbeda93c1", // mulberry
            video_13: "https://player.vimeo.com/video/871249923?h=aff3bc09be", //art of observing
            video_13_class: "vertical"
            // video_9: "https://www.youtube.com/embed/95gDOqT7foE",
            // video_11: "https://player.vimeo.com/video/486157970?h=dadfed684e",
            // video_11_class: "vertical",
            // video_11: "https://player.vimeo.com/video/720066249?h=d2e1658671",
            // video_11_class: "vertical",
            // video_12: "https://player.vimeo.com/video/720064003?h=17a17a80c5",
            // video_12_class: "vertical",
            // video_13: "https://player.vimeo.com/video/720067511?h=cfc0237ccf",
            // video_13_class: "vertical",
        }
    ]
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = animationVideoCompilation.map((item) => {
        const images = [];
        for (let i = 1; i <= 14; i++) {
            if (item[`video_${i}`]) {
                
                const videoTitle = item[`video_${i}_title`];
                const titleHtml = videoTitle ? `<h2>${videoTitle}</h2>` : '';

                const videoClass = item[`video_${i}_class`];
                const classHTML = videoClass ? "vertical" : '';

                images.push(`<div class="grid-item ${classHTML}">
                                <iframe title="vimeo-player" src="${item[`video_${i}`]}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                                ${titleHtml}
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');

}


// Page: Graphic Design Compilation
if (window.location.href.includes("graphic-design-compilation.html")) {
    var graphicDesignCompilation = [
        { 
            image_1: "../assets/graphic-design-compilation/image_1.png",
            image_1_title: "Personal Logo",
            image_2: "../assets/graphic-design-compilation/image_2.png",
            image_2_title: "Self Portrait",
            image_3: "../assets/graphic-design-compilation/image_3.jpg",
            image_3_title: "Free Falling",
            image_4: "../assets/graphic-design-compilation/image_4.png",
            image_4_title: "This is a Censored Exhibition Poster (1/2)",
            image_5: "../assets/graphic-design-compilation/image_5.png",
            image_5_title: "This is a Censored Exhibition Poster (2/2)",
            // image_6: "../assets/graphic-design-compilation/image_6.png",
            // image_6_title: "This is a Censored Exhibition Poster (3/3)",
            image_7: "../assets/graphic-design-compilation/image_7.png",
            image_7_title: "This is a Censored Exhibition Cards",
            image_8: "../assets/graphic-design-compilation/image_8.png",
            image_8_title: "Cartoon Character Design",
            image_9: "../assets/graphic-design-compilation/image_9.png",
            image_9_title: "Construction Owner to CEO Non-Profit Program Promotion",
            image_10: "../assets/graphic-design-compilation/image_10.png",
            image_10_title: "Big Idea Pitch Contest Non-Profit Program Promotion",
            image_11: "../assets/graphic-design-compilation/image_11.png",
            image_11_title: "Invasive Species Forest Poster",
            // image_12: "../assets/graphic-design-compilation/image_12.png",
            // image_12_title: "Invasive Species Forest Posters (2/2)",
            image_13: "../assets/graphic-design-compilation/image_13.png",
            image_13_title: "Hunter x Hunter",
            image_14: "../assets/graphic-design-compilation/image_14.jpg",
            image_14_title: "Water Lilies",
            image_15: "../assets/graphic-design-compilation/image_15.jpg",
            image_15_title: "Globe Calendar",
            image_16: "../assets/graphic-design-compilation/image_16.png",
            image_16_title: "Girl! You Need Therapy Podcast Logo",
            image_17: "../assets/graphic-design-compilation/image_17.png",
            image_17_title: "5th Anniversary Celebration",
            // image_18: "../assets/graphic-design-compilation/image_18.png",
            // image_18_title: "Your Money Matters",
            image_19: "../assets/graphic-design-compilation/image_19.png",
            image_19_title: "Your Money Matters",
            image_20: "../assets/graphic-design-compilation/image_20.png",
            image_20_title: "Spring Party",
            // image_19: "../assets/graphic-design-compilation/image_19.pdf",
            // image_19_title: "Ivy League Potential",
            image_21: "../assets/graphic-design-compilation/image_21.png",
            image_21_title: "Spring Party",
            image_22: "../assets/graphic-design-compilation/image_22.png",
            image_22_title: "Pickleball",
            image_23: "../assets/graphic-design-compilation/image_23.png",
            image_23_title: "Ivy League Potential",
            image_24: "../assets/graphic-design-compilation/image_24.png",
            image_24_title: "Ivy League Potential",
            image_25: "../assets/graphic-design-compilation/image_25.png",
            image_25_title: "Ivy League Potential",
            image_26: "../assets/graphic-design-compilation/image_26.png",
            image_26_title: "Grace Cliff Logo",
            image_27: "../assets/graphic-design-compilation/image_27.png",
            image_27_title: "Premiere Film Showcase",
            image_28: "../assets/graphic-design-compilation/image_28.png",
            image_28_title: "Premiere Film Showcase",
            image_29: "../assets/graphic-design-compilation/image_29.jpeg",
            image_29_title: "Incline (1/2)",
            image_30: "../assets/graphic-design-compilation/image_30.jpeg",
            image_30_title: "Incline (2/2)",
            image_31: "../assets/graphic-design-compilation/image_31.jpeg",
            image_31_title: "Incline (1/2)",
            image_32: "../assets/graphic-design-compilation/image_32.png",
            image_32_title: "Incline (2/2)",
        }
    ]
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = graphicDesignCompilation.map((item) => {
        const images = [];
        for (let i = 1; i <= 32; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item[`image_${i}_title`]}'s featured image" width="450" height="450" loading="lazy" data-slideshow-id="${i}">
                                </picture>
                                ${''}<!--  <p class="heading-lg">${item[`image_${i}_title`]}</p> --!>
                            </div>`);
            }
        }

        return images.join('');
    });

    
    mainGrid.innerHTML = mainGridHTML.join('');
    

    document.addEventListener('DOMContentLoaded', function () {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');
        const prevBtn = document.querySelector('.prev');
        const nextBtn = document.querySelector('.next');
        const mainGrid = document.getElementById('mainGrid');
        const thePage = document.querySelector('.page--graphic-design-compilation');
        const header = document.getElementById('header');
        let currentImageIndex;
    
        const images = Array.from(document.querySelectorAll('[data-slideshow-id]'));
    
        function openModal(index) {
            modal.style.display = 'block';
            currentImageIndex = index;
            showImage(currentImageIndex);
            mainGrid.style.display = 'none';
            header.style.display = 'none';
            thePage.classList.add('modal-open');
        }
    
        function closeModal() {
            modal.style.display = 'none';
            mainGrid.style.display = 'grid';
            header.style.display = 'block';
            thePage.classList.remove('modal-open');
        }
    
        function showImage(index) {
            if (index >= 0 && index < images.length) {
                modalImg.src = images[index].src;
            }
        }
    
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        }
    
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        }
    
        images.forEach((img, index) => {
            img.addEventListener('click', () => openModal(index));
        });
    
        closeBtn.addEventListener('click', closeModal);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
    
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                closeModal();
            }
        });
    
        window.addEventListener('keydown', (event) => {
            if (modal.style.display === 'block') {
                if (event.key === 'ArrowRight') {
                    nextImage();
                } else if (event.key === 'ArrowLeft') {
                    prevImage();
                } else if (event.key === 'Escape') {
                    closeModal();
                }
            }
        });
    });

}



// Page: Premiere Film Festival
if (window.location.href.includes("premiere-film-festival")) {
    var premiere = [
        { 
            title: "2024 Premiere Film Festival",
            info_1: "For the 2024 Depaul University Premiere Film Festival at the Music Box Theatre, I designed two 8 second animations introducing various awards. In collaboration with other graduate students, I designed the animations for ‘Best Producing,’ ‘Best Documentary,’ as well as the graphic design for the program. These animations were then composited into a 3D space using Cinema 4D and presented in a Keynote during the award announcements. In regard to aesthetics, the theme was a more literal interpretation of the theatre space with how the light interacts in the space. The only source of light comes from the screen at the center of the composition.",
            image: "../assets/premiere/image.png",
            video: "https://player.vimeo.com/video/950007356?h=f635b1499d",
            video_1: "https://player.vimeo.com/video/953340141?h=fb67d163ea",
            video_2: "https://player.vimeo.com/video/950004873?h=d34ed574fb",
            image_1: "../assets/premiere/image_1.gif",
            image_2: "../assets/premiere/image_2.png",
            image_3: "../assets/premiere/image_3.png",
        }
    ]
   
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = premiere
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = premiere.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        for (let i = 1; i <= 4; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}


// Page: 2025 Premiere Film Showcase
if (window.location.href.includes("2025-festival")) {
    var premiere_showcase = [
        { 
            title: "2025 Premiere Film Showcase",
            info_1: "For the DePaul 2025 Premiere Showcase at the Music Box Theatre, I collaborated with six other graduate students to design the introduction to the awards segment. Together, we created five unique 3D animations and developed eight distinct 2D text layouts to represent the 25 different awards. I was responsible for designing one of the 3D animations and four of the 2D text layouts. The final designs were presented as part of a Keynote presentation during the award announcements. <br><br><b>Collaborators</b><br>Manuela Garcia Gonzalez<br>Lea Hall<br>Aanya Mishra<br>Maria Gabriela Perez Duran<br>Emory Wise",
            video_1: "https://player.vimeo.com/video/1088572008",
            video_2: "https://player.vimeo.com/video/1088583512",
            video_3: "https://player.vimeo.com/video/1088583073",
            video_4: "https://player.vimeo.com/video/1088583728",
            video_5: "https://player.vimeo.com/video/1088570685",
            video_6: "https://player.vimeo.com/video/1088584108",
            video_7: "https://player.vimeo.com/video/1088571322",
            video_8: "https://player.vimeo.com/video/1088584712"
        }
    ]
   
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = premiere_showcase
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                           <div class="grid-item">
                            <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = premiere_showcase.map((item) => {
        const images = [];
        images.push(`<div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_4}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_5}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_6}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_7}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="grid-item">
                        <iframe title="vimeo-player" src="${item.video_8}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>`)
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}

// Page: Cyborg Manifesto
if (window.location.href.includes("cyborg-manifesto")) {
    var cyborg = [
        { 
            title: "A Cyborg Manifesto",
            info_1: "This prompt was to develop a professional creative Pitch Deck for an imaginary main title sequence. I developed my own short narrative, logline, and synopsis loosely based off of A Cyborg Manifesto by Donna J. Haraway. Below is the moodboard, style frames, and a motion test for two of the style frames. <br><br> <b> Narrative</b><br> The cyborg is a rejection of the rigid boundaries between human, animal, and machine. The divide between human and animal has been blurred by evolution. The divide between physical and non-physical has been blurred by digital technologies. <br> <br> <b>Chapters</b><br> Transformation<br> Identity<br> Acceptance",
            image: "",
            video: "https://www.youtube.com/embed/F65HKpC4TPQ",
            image_1: "../assets/cyborg/image_1.png",
            image_2: "../assets/cyborg/image_2.png",
            image_3: "../assets/cyborg/image_3.png",
            video_1: "https://www.youtube.com/embed/5AEU-UwFWAo",
            image_4: "../assets/cyborg/image_4.png",
            image_5: "../assets/cyborg/image_5.png",
            image_6: "../assets/cyborg/image_6.png",
            image_7: "../assets/cyborg/image_7.png",
        }
    ]
   
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = cyborg
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = cyborg.map((item) => {
        const images = [];
        for (let i = 1; i <= 3; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        images.push(`
            <div class="grid-item">
                <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
        `)
        for (let i = 4; i <= 7; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}

// Page: Incline
if (window.location.href.includes("incline")) {
    var incline = [
        { 
            title: "Incline Gaming Marketing",
            info_1: "Incline is a B2C marketing services company focused on the global regulated sports betting and online casino markets. As a graphic designer / motion graphic designer my role included designing graphics for upcoming gambling promotions, animating engaging graphics for various casino games, and editing assets to fit the context of graphics. I often would switch out the latest game assets within a template depending on the week’s promotion. My tasks often involved frequently updating promotional templates by swapping out game-specific assets such as logos, footage, icons (e.g. coins), background images, and promotional text for titles like Gates of Olympus. Additionally, I provided closed captioning for social media videos (primarily TikTok) and tailored disclaimers by adhering to regulatory guidelines for states such as Michigan, South Carolina, and Virginia.",
            image: "../assets/incline/image.png",
            image_1: "../assets/incline/image_1.jpeg",
            image_2: "../assets/incline/image_2.jpeg",
            image_3: "../assets/incline/image_3.png",
            image_4: "../assets/incline/image_4.png",
            image_5: "../assets/incline/image_5.png",
            video_1: "https://www.youtube.com/embed/SFXrqHO0p4A",
            video_2: "https://www.youtube.com/embed/G3Dx5_2ZUnA",
            video_3: "https://www.youtube.com/embed/UFdvieIczt8",
            video_4: "https://www.youtube.com/embed/SUx0NwYNu0Q",
            image_6: "../assets/incline/image_6.png",
            image_7: "../assets/incline/image_7.png",
        }
    ]
   
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = incline
    .map(item => `<div class="flex large--flex-row flex-column">
                        <div class="image">
                            <picture>
                                <source srcset="${item.image}" media="(min-width: 600px)" />
                                <img src="${item.image}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                            </picture>
                        </div>
                        <div class="info">
                            <h2>${item.title}</h2>
                            <p>${item.info_1}</p>
                        </div>
                    </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = incline.map((item) => {
        const images = [];
        for (let i = 1; i <= 5; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        images.push(`
            <div class="grid-item">
                <iframe title="vimeo-player" src="${item.video_1}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
             <div class="grid-item">
                <iframe title="vimeo-player" src="${item.video_2}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
             <div class="grid-item">
                <iframe title="vimeo-player" src="${item.video_3}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
             <div class="grid-item">
                <iframe title="vimeo-player" src="${item.video_4}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>
        `)
        for (let i = 6; i <= 8; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}

// Page: Marz Community Brewing
if (window.location.href.includes("marz-community-brewing")) {
    var marz = [
        { 
            title: "Marz Community Brewing Social Media Motion Design",
            info_1: "This Chicago-based brewery requested 3D designs, using their provided assets, to create a 5-10 second animation for Instagram. My goal was to make this piece vibrant and fun, with high-energy music enhancing the fast-paced visuals. The creative process began with a pitch featuring 3D rendered images outlining the animation concept, which then evolved into the final product.",
            image: "../assets/portfolio/marz-community-brewing.png",
            image_1: "../assets/marz/image_1.png",
            image_2: "../assets/marz/image_2.png",
            image_3: "../assets/marz/image_3.png",
            image_4: "../assets/marz/image_4.png",
            image_5: "../assets/marz/image_5.png",
            image_6: "../assets/marz/image_6.png",
            image_7: "../assets/marz/image_7.png",
            image_8: "../assets/marz/image_8.png",
            image_9: "../assets/marz/image_9.jpg",
            image_10: "../assets/marz/image_10.jpg",
            video: "https://player.vimeo.com/video/950843224?h=02ca765946"
        }
    ]
    
    // top section
    const topSection = document.getElementById('topSection');
    
    const topSectionHTML = marz
    .map(item => `<div class="flex large--flex-row flex-column">
                    <div class="image">
                        <iframe title="vimeo-player" src="${item.video}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="info">
                        <h2>${item.title}</h2>
                        <p>${item.info_1}</p>
                    </div>
                </div>`)
    .join('');
    
    topSection.innerHTML = topSectionHTML;
    
    // grid
    const mainGrid = document.getElementById('mainGrid');
    
    const mainGridHTML = marz.map((item) => {
        const images = [];
        for (let i = 1; i <= 10; i++) {
            if (item[`image_${i}`]) {
                images.push(`<div class="grid-item">
                                <picture>
                                    <source srcset="${item[`image_${i}`]}" media="(min-width: 600px)" />
                                    <img src="${item[`image_${i}`]}" alt="${item.title}'s featured image" width="450" height="450" loading="lazy">
                                </picture>
                            </div>`);
            }
        }
        return images.join('');
    });
    
    mainGrid.innerHTML = mainGridHTML.join('');
    
}


document.addEventListener("DOMContentLoaded", function() {
    // Function to check if an element is above the fold
    function isElementAboveFold(element) {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight;
    }

    // Get all elements with the specified class
    const elements = document.querySelectorAll('.grid-item');

    // Check visibility for each element
    elements.forEach(function(element, index) {
      if (isElementAboveFold(element)) {
        console.log(`Element ${index + 1} is above the fold`);
        element.classList.add('fade-in')
        element.classList.add('visible')
      } else {
        console.log(`Element ${index + 1} is below the fold`);
        element.classList.remove('fade-in')
      }
    });

    // Use a scroll event listener to dynamically update visibility
    window.addEventListener("scroll", function() {
      elements.forEach(function(element, index) {
        if (isElementAboveFold(element)) {
          console.log(`Element ${index + 1} is now above the fold`);
          element.classList.add('fade-in')
        } else {
          console.log(`Element ${index + 1} is now below the fold`);
          element.classList.remove('fade-in')
        }
      });
    });
  });


if(window.location.href.includes("portfolio.html")) {
    // Scroll To Top
    var scrollToTop = document.querySelector('#scrollToTop');
    scrollToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    scrollToTop.addEventListener('keyup', function(event) {
        if (event.code === 'Enter') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
}