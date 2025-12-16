document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
    initParticles();
    loadDynamicContent();
    setupMobileMenu();
});

/* ==========================================================================
   1. CARREGAMENTO DE CONTEÚDO (Cards de Tech e Equipe)
   ========================================================================== */
function loadDynamicContent() {
    // Carregar Snippet de Código no Hero
    const codeElement = document.getElementById('code-snippet');
    if (codeElement && projectData.hero.codeSnippet) {
        // Colorir sintaxe básica (Simulação simples)
        let formattedCode = projectData.hero.codeSnippet
            .replace(/def /g, '<span class="code-keyword">def </span>')
            .replace(/if /g, '<span class="code-keyword">if </span>')
            .replace(/else:/g, '<span class="code-keyword">else:</span>')
            .replace(/return/g, '<span class="code-keyword">return</span>')
            .replace(/"(.*?)"/g, '<span class="code-string">"$1"</span>');
        
        codeElement.innerHTML = formattedCode.trim();
    }

    // Carregar Tecnologias
    const techGrid = document.getElementById('tech-grid');
    if (techGrid) {
        projectData.technologies.forEach(tech => {
            const card = document.createElement('div');
            card.className = 'tech-card';
            card.innerHTML = `
                <i class="ph ${tech.icon} tech-icon"></i>
                <h3 class="tech-title">${tech.title}</h3>
                <p class="tech-desc">${tech.desc}</p>
            `;
            techGrid.appendChild(card);
        });
    }

    // Carregar Equipe
    const membersGrid = document.getElementById('members-grid');
    if (membersGrid) {
        projectData.team.forEach(member => {
            const card = document.createElement('div');
            card.className = 'member-card';
            // Se não tiver avatar, usa um placeholder genérico
            const imgParams = member.avatar ? member.avatar : 'https://via.placeholder.com/80/2ecc71/000000?text=USER';
            
            card.innerHTML = `
                <img src="${imgParams}" alt="${member.name}" class="member-avatar">
                <h3 class="tech-title" style="font-size: 1.1rem">${member.name}</h3>
                <span class="member-role">${member.role}</span>
                <div class="social-links" style="justify-content: center; margin-top: 10px;">
                    <a href="${member.github}" target="_blank"><i class="ph ph-github-logo"></i></a>
                </div>
            `;
            membersGrid.appendChild(card);
        });
    }
}

/* ==========================================================================
   2. EFEITO DE DIGITAÇÃO (Typewriter)
   ========================================================================== */
function initTypingEffect() {
    const element = document.getElementById('typing-title');
    const text = projectData.hero.typingText;
    const speed = 100; // Velocidade da digitação
    let i = 0;

    if (!element) return;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Adiciona o cursor piscante no final
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    type();
}

/* ==========================================================================
   3. MENU MOBILE
   ========================================================================== */
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (btn && nav) {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            } else {
                nav.classList.add('active');
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            }
        });
    }
}

/* ==========================================================================
   4. ANIMAÇÃO DE FUNDO (PARTÍCULAS CONECTADAS)
   ========================================================================== */
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 60; // Quantidade de pontos
    const connectionDistance = 150;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5; // Velocidade X
            this.vy = (Math.random() - 0.5) * 0.5; // Velocidade Y
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bate e volta nas bordas
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(46, 204, 113, 0.5)'; // Cor Verde IFSP
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            // Desenhar conexões
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(46, 204, 113, ${1 - distance/connectionDistance})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    // Redimensionar canvas se a tela mudar
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    init();
    animate();
}