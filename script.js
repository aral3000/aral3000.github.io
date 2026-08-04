// ==========================================================================
// ATHALLAH. PORTFOLIO INTERACTIVE SCRIPT (ROYAL CLOVER DIAGONAL EDITION)
// Author: M. Athallah Rafif Aldera
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Diagonal Floating Clover Leaf Particle Canvas Background
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let clovers = [];
        const cloverCount = 30;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Helper function to draw 4-leaf clover pattern (Daun Semanggi)
        function drawClover(ctx, x, y, size, rotation, color, alpha) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.lineWidth = Math.max(1, size * 0.12);

            // Draw 4 heart-shaped leaves at 90-degree rotations
            for (let i = 0; i < 4; i++) {
                ctx.save();
                ctx.rotate((i * Math.PI) / 2);
                ctx.beginPath();
                let r = size;
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-r * 0.6, -r * 0.5, -r * 0.8, -r * 1.2, 0, -r * 1.5);
                ctx.bezierCurveTo(r * 0.8, -r * 1.2, r * 0.6, -r * 0.5, 0, 0);
                ctx.fill();
                ctx.restore();
            }

            // Curved Stem (Tangkai Semanggi)
            ctx.beginPath();
            ctx.moveTo(0, size * 0.2);
            ctx.quadraticCurveTo(size * 0.3, size * 0.9, size * 0.1, size * 1.4);
            ctx.stroke();

            ctx.restore();
        }

        class CloverParticle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                // Diagonal trajectory: moving down and right (45 degrees)
                this.size = Math.random() * 12 + 10; // Clover radius 10px to 22px
                this.speed = Math.random() * 0.75 + 0.35;
                this.angle = Math.PI / 4; // 45 degrees diagonal angle
                this.dx = Math.cos(this.angle) * this.speed;
                this.dy = Math.sin(this.angle) * this.speed;

                if (initial) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                } else {
                    // Spawn from top or left border for continuous diagonal flow
                    if (Math.random() > 0.5) {
                        this.x = -40;
                        this.y = Math.random() * canvas.height;
                    } else {
                        this.x = Math.random() * canvas.width;
                        this.y = -40;
                    }
                }

                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.015;
                this.alpha = Math.random() * 0.35 + 0.15;
                this.color = Math.random() > 0.5 ? '#D4AF37' : '#8B0000';
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;
                this.rotation += this.rotationSpeed;

                // Out of screen bounds check
                if (this.x > canvas.width + 50 || this.y > canvas.height + 50) {
                    this.reset(false);
                }
            }

            draw() {
                drawClover(ctx, this.x, this.y, this.size, this.rotation, this.color, this.alpha);
            }
        }

        for (let i = 0; i < cloverCount; i++) {
            clovers.push(new CloverParticle());
        }

        function animateClovers() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clovers.forEach(c => {
                c.update();
                c.draw();
            });
            requestAnimationFrame(animateClovers);
        }
        animateClovers();
    }

    // 2. Navbar Scroll Effect & Active Section Tracking
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 160)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 3. Interactive Skill Matrix Filter Tabs
    const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-progress-card');

    skillTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Interactive Case Study Modal Viewer
    const projectCards = document.querySelectorAll('.interactive-project-card');
    const modalOverlay = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTag = document.getElementById('modal-tag');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');

    const projectDetails = {
        stylegan: {
            tag: "Generative AI & Deep Learning Case Study",
            title: "StyleGAN2-ADA Cervical Image Augmentation & DenseNet121 Classification",
            body: `
                <h4>Business & Research Challenge</h4>
                <p>Medical image classification for cervical cancer screening via Visual Inspection with Acetic Acid (VIA) often suffers from extreme class imbalance and scarce annotated datasets (only 666 original images available).</p>

                <h4>Technical Solution & Engineering</h4>
                <p>Engineered a multi-stage generative pipeline using StyleGAN2 with Adaptive Data Augmentation (ADA) trained on Kaggle Dual T4 GPUs. Synthesized 666 high-resolution (128x128) abnormal synthetic images without discriminator collapse.</p>

                <h4>Quantifiable Results & Value-Add</h4>
                <ul>
                    <li><strong>FID Score Convergence:</strong> Achieved peak Fréchet Inception Distance of <strong>59.49</strong> (down from 89.23 in initial stages).</li>
                    <li><strong>Classification Accuracy Lift:</strong> Injected synthetic images into a DenseNet121 CNN under strict Zero Data-Leakage protocols, boosting test accuracy from <strong>82.5%</strong> (Baseline) to <strong>91.2%</strong> (Augmented).</li>
                    <li><strong>Code Governance:</strong> Published production-ready modular Python codebase with automated harvest scripts.</li>
                </ul>

                <h4>Sample Python Snippet</h4>
                <div class="code-box-preview">
# StyleGAN2 Synthetic Image Generation Pipeline
device = torch.device('cuda')
with open(NETWORK_PKL, 'rb') as f:
    G = pickle.load(f)['G_ema'].to(device)

z = torch.randn([1, G.z_dim]).to(device)
img = G(z, None)
img = (img.permute(0, 2, 3, 1) * 127.5 + 128).clamp(0, 255).to(torch.uint8)
                </div>
            `,
            link: "https://github.com/aral3000/cervical-cancer-stylegan2-densenet121"
        },
        diskominfo: {
            tag: "IT Systems & Infrastructure Experience",
            title: "Municipal IT & Systems Management (Diskominfo Kota Prabumulih)",
            body: `
                <h4>Role & Responsibilities</h4>
                <p>Served as IT & Systems Intern at Diskominfo Kota Prabumulih (February 2026), assisting municipal IT infrastructure management and digital transformation initiatives.</p>

                <h4>Key Deliverables</h4>
                <ul>
                    <li>Maintained local government network infrastructure and server maintenance protocols.</li>
                    <li>Supported digital transformation workflows and technical troubleshooting for municipal services.</li>
                    <li>Collaborated across municipal IT teams to ensure zero downtime during critical operations.</li>
                </ul>
            `,
            link: "#contact"
        },
        sql: {
            tag: "Data Science & Database Querying",
            title: "Relational SQL Querying & Analytics Pipeline",
            body: `
                <h4>Technical Overview</h4>
                <p>Certified by Dicoding Indonesia in Relational Databases and SQL (ID: 4EXG1WJKEPRL). Designed data extraction and analytics pipelines for business logic verification.</p>

                <h4>Key Competencies</h4>
                <ul>
                    <li>Complex SQL queries with INNER/LEFT JOINs, subqueries, and GROUP BY aggregations.</li>
                    <li>Relational database schema modeling and data integrity enforcement.</li>
                    <li>Integration of SQL query results with Python (Pandas/NumPy) for automated reporting.</li>
                </ul>
            `,
            link: "#contact"
        },
        vision: {
            tag: "Computer Vision & Generative Baseline",
            title: "DCGAN & WGAN-GP Baseline Exploration",
            body: `
                <h4>Technical Overview</h4>
                <p>Conducted baseline experiments with Deep Convolutional GANs (DCGAN) and Wasserstein GANs with Gradient Penalty (WGAN-GP) for image patch generation.</p>

                <h4>Key Technical Achievements</h4>
                <ul>
                    <li>Implemented WGAN-GP loss function to enforce 1-Lipschitz constraint via gradient penalty coefficient.</li>
                    <li>Compared Mode Collapse behavior between vanilla GANs vs WGAN-GP on custom image patches.</li>
                </ul>
            `,
            link: "#contact"
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const key = card.getAttribute('data-project');
            const data = projectDetails[key];

            if (data && modalOverlay) {
                modalTag.textContent = data.tag;
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.body;
                
                modalFooter.innerHTML = `
                    <a href="${data.link}" target="_blank" class="btn-primary-gold">
                        <i class="fab fa-github"></i> View Details / Repository
                    </a>
                `;

                modalOverlay.classList.add('active');
            }
        });
    });

    if (modalCloseBtn && modalOverlay) {
        modalCloseBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }

    // 5. Email Copy & Quick CV Buttons
    const btnCopyEmail = document.getElementById('btn-copy-email-hero');
    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', () => {
            navigator.clipboard.writeText('mathallahrafifaldera@gmail.com');
            showToast('Email address copied to clipboard!');
        });
    }

    const btnQuickCV = document.getElementById('btn-quick-cv');
    if (btnQuickCV) {
        btnQuickCV.addEventListener('click', () => {
            showToast('Opening Resume Summary...');
            window.location.href = '#about';
        });
    }

    // 6. Contact Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
                submitBtn.style.color = '#fff';

                showToast(`Thank you ${nameInput}, your inquiry has been submitted!`);

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 4000);
            }, 1200);
        });
    }

    // Toast Notification Creator
    function showToast(message) {
        let toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.innerHTML = `<i class="fas fa-award text-gold"></i> <span>${message}</span>`;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: '#12121A',
            color: '#F5F5F7',
            border: '1px solid #D4AF37',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '0.95rem'
        });

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            toast.style.transition = 'all 0.4s ease';
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

});
