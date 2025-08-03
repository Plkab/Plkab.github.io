document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        'approche', 'projets', 'ressources', 'stm32', 'articles', 'contacts'
    ];

    const container = document.getElementById('sections-container');
    
    // Charger les sections
    sections.forEach(section => {
        fetch(`sections/${section}.html`)
            .then(response => response.text())
            .then(html => {
                container.innerHTML += html;
                
                // Appliquer la numérotation automatique après chargement
                if(section === 'projets' || section === 'ressources' || 
                   section === 'stm32' || section === 'articles') {
                    applyAutoNumbering(`#${section} ol`);
                }
            });
    });

    // Gestion de la navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
            });
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Appliquer la numérotation automatique
    function applyAutoNumbering(selector) {
        const lists = document.querySelectorAll(selector);
        lists.forEach(list => {
            const items = list.querySelectorAll('li');
            items.forEach((item, index) => {
                const number = document.createElement('span');
                number.className = 'item-number';
                number.textContent = `${index + 1}.`;
                item.insertBefore(number, item.firstChild);
            });
        });
    }
    
    // Gestion du scroll pour la navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navHeight = document.querySelector('nav').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});