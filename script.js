// ==========================================================================
// ATHALLAH. PORTFOLIO INTERACTIVE SCRIPT (APPLE KEYNOTE BURGUNDY V2)
// Author: M. Athallah Rafif Aldera
// Default Language: English (EN) | Optional: Indonesian (ID)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add('js-ready');

    // 1. Multi-Language i18n Dictionary (EN Default + ID Toggle, Zero Em-Dashes)
    const translations = {
        en: {
            "nav.home": "Overview",
            "nav.about": "About",
            "nav.skills": "Capabilities",
            "nav.projects": "Work",
            "nav.experience": "Experience",
            "nav.certifications": "Credentials",
            "btn.quick_cv": "Quick CV",
            "btn.hire": "Contact",
            "hero.open_to_work": "Open to Work",
            "hero.tag": "Computer Systems, S.Kom. · Sriwijaya University",
            "hero.title": "Engineered for Intelligence.",
            "hero.desc": "M. Athallah Rafif Aldera, S.Kom. AI Engineer &amp; Data Scientist building Generative AI, Computer Vision, and applied ML pipelines.",
            "manifesto.kicker": "Keynote Thesis",
            "manifesto.text": "From scarce clinical cervical imagery to 630K+ phishing URLs, every system is engineered with StyleGAN2-ADA precision, 97.00% verified accuracy, and production-ready PyTorch discipline.",
            "cutout.kicker": "Editorial Keynote Stage",
            "cutout.sub": "Class of 2026 · Faculty of Computer Science",
            "btn.get_in_touch": "Get In Touch",
            "btn.explore_case_studies": "Explore Work",
            "btn.copy_email": "Copy Email",
            "hero.caption_degree": "B.S. Computer Systems · Class of 2026",
            "hero.target_roles_label": "Target Roles",
            "hero.target_roles_val": "AI Engineer · Data Scientist · Computer Vision · ML Engineer",
            "hero.location_label": "Location & Readiness",
            "hero.location_val": "Prabumulih · Open to Relocation & Remote",
            "hero.contact_label": "Direct Contact",
            "summary.eyebrow": "Keynote Recap",
            "summary.title": "Built for accuracy, scale, and speed.",
            "summary.k1": "DenseNet121 Classification",
            "summary.k2": "Generative Quality",
            "summary.k3": "Cybersecurity Scale",
            "summary.k4": "Academic Distinction",
            "summary.k5": "Verified Badges",
            "summary.k6": "Production Stack",
            "metrics.acc": "Peak test accuracy using 50:50 Real + StyleGAN2-ADA synthetic mix (and 95.00% on 100% synthetic training).",
            "metrics.fid": "Lowest Fréchet Inception Distance on clinical VIA cervical imagery, outperforming StyleGAN3 & DCGAN.",
            "metrics.urls": "URLs trained in a lexical Random Forest phishing pipeline (89.0% test accuracy) for Diskominfo.",
            "metrics.degree": "Cumulative GPA · Bachelor of Computer Systems (UNSRI '26)",
            "metrics.certs": "Verified credentials across Google Cloud Credly, Komdigi DTS, ASEAN, UNSRI & Dicoding.",
            "metrics.stack": "End-to-end engineering from GPU training loops to REST services, Streamlit UI, and pytest suites.",
            "about.subtitle": "Candidate Overview",
            "about.title": "Precision engineering meets rapid execution.",
            "about.drag_hint": "Drag badge to test spring physics",
            "about.card_title": "Profile & Engineering Philosophy",
            "about.text": "<p>Graduated in Computer Systems from <strong>Sriwijaya University (UNSRI)</strong>, focused on building reliable systems across Machine Learning, Deep Generative Modeling, Computer Vision, and Data Analytics.</p><p>Known for disciplined execution under tight deadlines: moving seamlessly from experimental PyTorch research and SQL pipelines to clean, tested CLI and API deployments.</p>",
            "why.p1_title": "Deep Learning & Generative AI",
            "why.p1_desc": "Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN architectures paired with DenseNet121 classifiers in PyTorch and TensorFlow.",
            "why.p2_title": "Data Science & Analytics Pipelines",
            "why.p2_desc": "Structured SQL extraction, exploratory analysis, lexical feature engineering, and Scikit-Learn modeling at 630K+ scale.",
            "why.p3_title": "Athletic & Competitive Discipline",
            "why.p3_desc": "Directed training and athlete development as Martial Arts Division Lead at UKM Beladiri Taekwondo UNSRI, winning 3rd Place (Under 70kg) at PORKAB IV Ogan Ilir 2023.",
            "skills.subtitle": "Technical Stack",
            "skills.title": "Core Capabilities.",
            "skills.desc": "Filter technical competencies across AI engineering, data science, and computer vision pipelines.",
            "tabs.all": "All",
            "tabs.ai": "AI & Deep Learning",
            "tabs.ds": "Data Science & SQL",
            "tabs.cv": "Computer Vision & Tools",
            "sp.pytorch": "Deep Learning model training, custom loss functions, CNN heads, and GPU optimization.",
            "sp.stylegan": "Multi-stage StyleGAN training, ADA adaptive augmentation, and FID metric convergence analysis.",
            "sp.densenet": "Transfer learning, feature extraction, binary cross-entropy, and confusion matrix validation.",
            "sp.python": "OOP, scripting, automation, test suites, and end-to-end data processing pipelines.",
            "sp.sql": "Relational queries, aggregations, joins, data extraction, and Dicoding SQL certification.",
            "sp.pandas": "Data cleaning, EDA, feature scaling, evaluation metrics, and statistical analytics.",
            "sp.opencv": "Image resizing, channel transformations, augmentation pipelines, and PIL/pyspng integration.",
            "sp.git": "Branching strategy, data hygiene with .gitignore, GitHub Pages, and version control.",
            "sp.plotlib": "Automated chart generation, multi-stage training curve visualization, and publication-ready plots.",
            "projects.subtitle": "Case Studies",
            "projects.title": "Selected Engineering Work.",
            "projects.desc": "Switch views inside the flagship showcase or click any card to inspect the full architecture and repository.",
            "projects.flagship_badge": "Flagship Research",
            "flagship.tab_arch": "Methodology",
            "flagship.tab_fid": "FID Curve",
            "flagship.tab_bench": "Benchmarks",
            "bench.fid_title": "FID Score (Lower is Better)",
            "bench.acc_title": "DenseNet121 Accuracy",
            "cs1.title": "Generative AI Medical Image Augmentation (StyleGAN2-ADA & DenseNet121)",
            "cs1.desc": "Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN on clinical VIA cervical datasets (peak FID 49.62), elevating DenseNet121 accuracy to 97.00% (50:50 mix) and 95.00% on 100% synthetic substitution.",
            "cs1.m1": "Peak Test Accuracy",
            "cs1.m2": "Lowest FID Score",
            "cs2.title": "Real-Time Phishing URL Detection (630K URLs)",
            "cs2.desc": "Built an end-to-end cybersecurity ML pipeline for Dinas Kominfo trained on 630,071 URLs (89.0% test accuracy) with FastAPI and Streamlit.",
            "cs3.title": "Autonomous Market Research Agent (ReAct)",
            "cs3.desc": "Engineered an autonomous multi-step ReAct agent with web search tools, custom NumPy cosine similarity vector memory, and report synthesis.",
            "cs4.title": "Python AI Core Toolkit (TDD & NumPy)",
            "cs4.desc": "Modular software engineering and AI fundamentals monorepo implementing O(1) data structures, vectorized cosine matrices, and Pandas ETL verified by pytest.",
            "btn.click_insights": "Inspect full case study",
            "btn.click_insights_short": "View architecture",
            "exp.subtitle": "Track Record",
            "exp.title": "Experience & Achievements.",
            "exp.r1_badge": "AI Research",
            "exp.r1_role": "Undergraduate AI Researcher & Developer",
            "exp.r1_bullets": "<li>Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN under Prof. Ir. Siti Nurmaini, M.T., Ph.D. to address clinical VIA cervical image scarcity.</li><li>Achieved peak FID score of 49.62 (StyleGAN2-ADA), elevated DenseNet121 accuracy to 97.00% (50:50 mix), and proved 95.00% accuracy on 100% synthetic substitution.</li><li>Published reproducible open-source inference CLI and test suite on GitHub.</li>",
            "exp.r1_cap": "FID score progression curve over 2,000 training epochs",
            "exp.r3_badge": "Internship",
            "exp.r3_role": "Web Developer & Applied ML Intern",
            "exp.r3_bullets": "<li>Developed and refined responsive internal web application modules using HTML, CSS, PHP, and JavaScript (Evaluated Grade A / 89.83).</li><li>Engineered a Random Forest URL phishing detection prototype trained on 630,071 URLs (89.0% test accuracy) to support public-sector digital security literacy.</li>",
            "exp.r3_cap1": "Bidding & Training Room, Diskominfo Prabumulih",
            "exp.r3_cap2": "With field supervisors & TIK engineering team",
            "exp.r2_badge": "Leadership",
            "exp.r2_role": "Committee Member & Martial Arts Division Lead",
            "exp.r2_bullets": "<li>Directed the Martial Arts Division, overseeing training schedules and athlete development; won 3rd Place (Under 70kg) at PORKAB IV Ogan Ilir 2023.</li><li>Managed committee responsibilities for organizational events, fostering teamwork and operational discipline under pressure.</li>",
            "exp.r2_cap": "UKM Beladiri Taekwondo UNSRI · PORKAB IV Bronze Medalist",
            "certs.subtitle": "Verified Credentials",
            "certs.title": "Certifications & Training.",
            "certs.verify": "Verify",
            "contact.subtitle": "Connect",
            "contact.title": "Ready to contribute to your engineering team.",
            "contact.desc": "Open to full-time, relocation, and remote roles across <strong>AI Engineering, Data Science, Computer Vision, Machine Learning,</strong> and <strong>Data Analytics</strong>.",
            "contact.email_label": "Email",
            "contact.phone_label": "WhatsApp",
            "contact.linkedin_label": "LinkedIn",
            "contact.github_label": "GitHub",
            "contact.discord_label": "Discord",
            "form.title": "Send a Direct Message",
            "form.name_label": "Your Name / Company",
            "form.email_label": "Work Email",
            "form.msg_label": "Message / Role Details",
            "form.btn_send": "Send Message",
            "footer.tag": "M. Athallah Rafif Aldera · AI Engineer & Data Scientist"
        },
        id: {
            "nav.home": "Ringkasan",
            "nav.about": "Tentang",
            "nav.skills": "Keahlian",
            "nav.projects": "Karya",
            "nav.experience": "Pengalaman",
            "nav.certifications": "Sertifikasi",
            "btn.quick_cv": "Ringkasan CV",
            "btn.hire": "Kontak",
            "hero.open_to_work": "Siap Bekerja",
            "hero.tag": "Sistem Komputer, S.Kom. · Universitas Sriwijaya",
            "hero.title": "Dirancang untuk Kecerdasan.",
            "hero.desc": "M. Athallah Rafif Aldera, S.Kom. AI Engineer &amp; Data Scientist di bidang Generative AI, Computer Vision, dan pipeline ML terapan.",
            "manifesto.kicker": "Tesis Keynote",
            "manifesto.text": "Dari keterbatasan citra klinis hingga 630K+ URL phishing, setiap sistem dibangun dengan presisi StyleGAN2-ADA, akurasi 97.00% teruji, dan disiplin PyTorch siap produksi.",
            "cutout.kicker": "Panggung Keynote Editorial",
            "cutout.sub": "Angkatan 2026 · Fakultas Ilmu Komputer",
            "btn.get_in_touch": "Hubungi Saya",
            "btn.explore_case_studies": "Lihat Karya",
            "btn.copy_email": "Salin Email",
            "hero.caption_degree": "S.Kom. Sistem Komputer · Angkatan 2026",
            "hero.target_roles_label": "Target Posisi",
            "hero.target_roles_val": "AI Engineer · Data Scientist · Computer Vision · ML Engineer",
            "hero.location_label": "Lokasi & Kesiapan",
            "hero.location_val": "Prabumulih · Siap Relokasi & Kerja Remote",
            "hero.contact_label": "Kontak Langsung",
            "summary.eyebrow": "Ringkasan Keynote",
            "summary.title": "Dirancang untuk akurasi, skala, dan kecepatan.",
            "summary.k1": "Klasifikasi DenseNet121",
            "summary.k2": "Kualitas Generatif",
            "summary.k3": "Skala Keamanan Siber",
            "summary.k4": "Predikat Akademik",
            "summary.k5": "Sertifikasi Terverifikasi",
            "summary.k6": "Tech Stack Produksi",
            "metrics.acc": "Akurasi uji puncak dengan campuran 50:50 data asli + sintetis StyleGAN2-ADA (95.00% pada 100% sintetis).",
            "metrics.fid": "Skor Fréchet Inception Distance terendah pada citra klinis VIA, mengungguli StyleGAN3 & DCGAN.",
            "metrics.urls": "URL terlatih dalam pipeline Random Forest deteksi phishing (akurasi uji 89.0%) untuk Diskominfo.",
            "metrics.degree": "IPK Kumulatif · Sarjana Sistem Komputer (UNSRI '26)",
            "metrics.certs": "Kredensial terverifikasi dari Google Cloud Credly, Komdigi DTS, ASEAN, UNSRI & Dicoding.",
            "metrics.stack": "Rekayasa end-to-end mulai dari pelatihan GPU PyTorch hingga REST API, Streamlit, dan suite pytest.",
            "about.subtitle": "Profil Kandidat",
            "about.title": "Rekayasa presisi dengan eksekusi cepat.",
            "about.drag_hint": "Tarik kartu untuk uji fisika pegas",
            "about.card_title": "Profil & Prinsip Rekayasa",
            "about.text": "<p>Lulusan Sistem Komputer dari <strong>Universitas Sriwijaya (UNSRI)</strong> yang berdedikasi membangun sistem andal di bidang Machine Learning, Deep Generative Modeling, Computer Vision, dan Data Analytics.</p><p>Terbiasa bekerja terstruktur di bawah tenggat ketat: menjembatani riset eksperimental PyTorch dan pipeline SQL hingga menjadi CLI dan API yang teruji.</p>",
            "why.p1_title": "Deep Learning & Generative AI",
            "why.p1_desc": "Membandingkan arsitektur StyleGAN2-ADA, StyleGAN3, dan DCGAN serta klasifikasi DenseNet121 menggunakan PyTorch dan TensorFlow.",
            "why.p2_title": "Pipeline Data Science & Analytics",
            "why.p2_desc": "Ekstraksi SQL terstruktur, analisis eksploratif, rekayasa fitur leksikal, dan pemodelan Scikit-Learn pada skala 630K+ data.",
            "why.p3_title": "Disiplin Atletik & Kompetitif",
            "why.p3_desc": "Memimpin jadwal latihan dan pembinaan atlet sebagai Ketua Divisi Beladiri UKM Taekwondo UNSRI, meraih Juara 3 (Under 70kg) di PORKAB IV Ogan Ilir 2023.",
            "skills.subtitle": "Kompetensi Teknis",
            "skills.title": "Keahlian Utama.",
            "skills.desc": "Saring kompetensi teknis di bidang AI engineering, data science, dan computer vision.",
            "tabs.all": "Semua",
            "tabs.ai": "AI & Deep Learning",
            "tabs.ds": "Data Science & SQL",
            "tabs.cv": "Computer Vision & Tools",
            "sp.pytorch": "Pelatihan model Deep Learning, fungsi loss kustom, head CNN, dan optimasi GPU.",
            "sp.stylegan": "Pelatihan StyleGAN bertahap, augmentasi adaptif ADA, dan analisis konvergensi FID.",
            "sp.densenet": "Transfer learning, ekstraksi fitur, binary cross-entropy, dan validasi matriks konfusi.",
            "sp.python": "OOP, skrip otomatisasi, rangkaian uji pytest, dan pipeline pengolahan data.",
            "sp.sql": "Query relasional, agregasi, join tabel, ekstraksi data, dan sertifikasi SQL Dicoding.",
            "sp.pandas": "Pembersihan data, EDA, feature scaling, metrik evaluasi, dan analisis statistik.",
            "sp.opencv": "Resize citra, transformasi kanal warna, pipeline augmentasi, dan integrasi PIL/pyspng.",
            "sp.git": "Strategi branching, proteksi data via .gitignore, GitHub Pages, dan kontrol versi.",
            "sp.plotlib": "Pembuatan grafik otomatis, kurva pelatihan bertahap, dan visualisasi kualitas publikasi.",
            "projects.subtitle": "Studi Kasus",
            "projects.title": "Karya Rekayasa Pilihan.",
            "projects.desc": "Ganti tampilan di kartu riset utama atau klik kartu proyek untuk membuka arsitektur lengkap dan repositori.",
            "projects.flagship_badge": "Riset Utama",
            "flagship.tab_arch": "Metodologi",
            "flagship.tab_fid": "Kurva FID",
            "flagship.tab_bench": "Tolok Ukur",
            "bench.fid_title": "Skor FID (Lebih Kecil Lebih Baik)",
            "bench.acc_title": "Akurasi DenseNet121",
            "cs1.title": "Augmentasi Citra Medis Generative AI (StyleGAN2-ADA & DenseNet121)",
            "cs1.desc": "Menguji StyleGAN2-ADA, StyleGAN3, dan DCGAN pada dataset klinis serviks VIA (FID terbaik 49.62), meningkatkan akurasi DenseNet121 ke 97.00% (50:50) dan 95.00% pada substitusi sintetis penuh.",
            "cs1.m1": "Akurasi Uji Puncak",
            "cs1.m2": "Skor FID Terbaik",
            "cs2.title": "Deteksi URL Phishing Real-Time (630K URL)",
            "cs2.desc": "Membangun pipeline Machine Learning keamanan siber untuk Dinas Kominfo pada 630.071 URL (akurasi uji 89.0%) dengan FastAPI dan Streamlit.",
            "cs3.title": "Autonomous Market Research Agent (ReAct)",
            "cs3.desc": "Merancang agen ReAct otonom multi-langkah dengan tool pencarian web, memori vektor kemiripan kosinus NumPy, dan sintesis laporan.",
            "cs4.title": "Python AI Core Toolkit (TDD & NumPy)",
            "cs4.desc": "Monorepo fundamental rekayasa perangkat lunak & AI dengan struktur data O(1), matriks kosinus tervektorisasi, dan ETL Pandas teruji pytest.",
            "btn.click_insights": "Buka studi kasus lengkap",
            "btn.click_insights_short": "Lihat arsitektur",
            "exp.subtitle": "Rekam Jejak",
            "exp.title": "Pengalaman & Prestasi.",
            "exp.r1_badge": "Riset AI",
            "exp.r1_role": "Peneliti & Developer AI Sarjana",
            "exp.r1_bullets": "<li>Menguji StyleGAN2-ADA, StyleGAN3, dan DCGAN di bawah bimbingan Prof. Ir. Siti Nurmaini, M.T., Ph.D. untuk mengatasi keterbatasan citra klinis VIA serviks.</li><li>Mencapai skor FID terbaik 49.62 (StyleGAN2-ADA), menaikkan akurasi DenseNet121 ke 97.00% (campuran 50:50), serta membuktikan akurasi 95.00% pada substitusi sintetis penuh.</li><li>Merilis CLI inferensi open-source dan suite uji otomatis di GitHub.</li>",
            "exp.r1_cap": "Grafik konvergensi skor FID selama 2.000 epoch pelatihan",
            "exp.r3_badge": "Magang",
            "exp.r3_role": "Web Developer & Applied ML Intern",
            "exp.r3_bullets": "<li>Mengembangkan modul aplikasi web internal menggunakan HTML, CSS, PHP, dan JavaScript dengan evaluasi Nilai A (89,83).</li><li>Merancang prototipe deteksi URL phishing berbasis Random Forest pada 630.071 URL (akurasi uji 89,0%) untuk literasi keamanan digital publik.</li>",
            "exp.r3_cap1": "Bidding & Training Room, Diskominfo Prabumulih",
            "exp.r3_cap2": "Bersama pembimbing lapangan & tim TIK Diskominfo",
            "exp.r2_badge": "Kepemimpinan",
            "exp.r2_role": "Ketua Divisi Beladiri & Anggota Pengurus",
            "exp.r2_bullets": "<li>Memimpin Divisi Beladiri UKM Taekwondo UNSRI, membina jadwal latihan atlet, dan meraih Juara III Kelas Under 70kg di PORKAB IV Ogan Ilir 2023.</li><li>Mengelola kepanitiaan event organisasi dan koordinasi tim di bawah tekanan.</li>",
            "exp.r2_cap": "UKM Beladiri Taekwondo UNSRI · Perunggu PORKAB IV",
            "certs.subtitle": "Kredensial Terverifikasi",
            "certs.title": "Sertifikasi & Pelatihan.",
            "certs.verify": "Verifikasi",
            "contact.subtitle": "Hubungi Saya",
            "contact.title": "Siap berkontribusi di tim teknologi Anda.",
            "contact.desc": "Terbuka untuk peluang penuh waktu, relokasi, dan kerja jarak jauh di bidang <strong>AI Engineering, Data Science, Computer Vision, Machine Learning,</strong> dan <strong>Data Analytics</strong>.",
            "contact.email_label": "Email",
            "contact.phone_label": "WhatsApp",
            "contact.linkedin_label": "LinkedIn",
            "contact.github_label": "GitHub",
            "contact.discord_label": "Discord",
            "form.title": "Kirim Pesan Langsung",
            "form.name_label": "Nama / Perusahaan",
            "form.email_label": "Email Kerja",
            "form.msg_label": "Pesan / Detail Posisi",
            "form.btn_send": "Kirim Pesan",
            "footer.tag": "M. Athallah Rafif Aldera · AI Engineer & Data Scientist"
        }
    };

    const storedLang = localStorage.getItem('portfolio_lang');
    let currentLang = (storedLang && translations[storedLang]) ? storedLang : 'en';
    let scrubWords = [];
    const manifestoTrack = document.getElementById('manifesto');

    function updateScrubHighlight() {
        if (prefersReducedMotion || !manifestoTrack || scrubWords.length === 0) return;
        const mRect = manifestoTrack.getBoundingClientRect();
        const mTotal = manifestoTrack.offsetHeight - window.innerHeight;
        const mProg = mTotal > 0 ? Math.max(0, Math.min(1, -mRect.top / mTotal)) : 0;
        const litCount = Math.floor(mProg * scrubWords.length);
        scrubWords.forEach((word, idx) => word.classList.toggle('lit', idx <= litCount));
    }

    function initScrubWords() {
        const scrubParagraph = document.getElementById('scrub-text');
        if (!scrubParagraph) return;
        const highlights = new Set(['StyleGAN2-ADA', '97.00%', 'production-ready', 'PyTorch', '630K+', 'teruji', 'produksi']);
        const tokens = scrubParagraph.textContent.trim().split(/\s+/);
        scrubParagraph.innerHTML = tokens.map(word => {
            const clean = word.replace(/[.,]/g, '');
            const hl = highlights.has(clean) ? ' highlight' : '';
            return `<span class="scrub-word${hl}">${word}</span>`;
        }).join(' ');
        scrubWords = Array.from(scrubParagraph.querySelectorAll('.scrub-word'));
        if (prefersReducedMotion) {
            scrubWords.forEach(w => w.classList.add('lit'));
        } else {
            updateScrubHighlight();
        }
    }

    // Populate 7 Seamless Diagonal Kinetic Rows inside Cutout Poster
    const diagWall = document.getElementById('diagonal-type-wall');
    if (diagWall) {
        const rowConfigs = [
            { dir: 'dir-left',  style: 'style-outline', speed: '' },
            { dir: 'dir-right', style: 'style-solid',   speed: 'row-fast' },
            { dir: 'dir-left',  style: 'style-hero',    speed: '' },
            { dir: 'dir-right', style: 'style-outline', speed: '' },
            { dir: 'dir-left',  style: 'style-solid',   speed: 'row-fast' },
            { dir: 'dir-right', style: 'style-hero',    speed: '' },
            { dir: 'dir-left',  style: 'style-outline', speed: '' }
        ];
        const phraseUnit = `<span class="diag-word">M. ATHALLAH RAFIF ALDERA</span><span class="diag-sep">/</span>`;
        const halfChunk = phraseUnit.repeat(4);
        diagWall.innerHTML = rowConfigs.map(cfg => `
            <div class="diag-row ${cfg.dir} ${cfg.style} ${cfg.speed}">
                <div class="diag-track">${halfChunk}${halfChunk}</div>
            </div>
        `).join('');
    }

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'en';
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        initScrubWords();
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const chosen = btn.getAttribute('data-lang');
            setLanguage(chosen);
            showToast(chosen === 'id' ? 'Bahasa Indonesia diaktifkan' : 'Switched to English');
        });
    });

    setLanguage(currentLang);

    // 2. Scroll Reveal Choreography
    const revealEls = document.querySelectorAll('.reveal-up');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        revealEls.forEach(el => revealObserver.observe(el));
    }

    // 3. Animated Keynote Number Count-Ups
    const counterEls = document.querySelectorAll('[data-count-to]');
    function animateCounter(el) {
        if (el.dataset.counted === 'true') return;
        el.dataset.counted = 'true';

        const target = parseFloat(el.getAttribute('data-count-to'));
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';

        if (prefersReducedMotion || isNaN(target)) {
            el.textContent = target.toFixed(decimals) + suffix;
            return;
        }

        const duration = 1100;
        const startTime = performance.now();

        function tick(now) {
            const elapsed = Math.min(1, (now - startTime) / duration);
            const eased = 1 - Math.pow(1 - elapsed, 3);
            const val = target * eased;
            el.textContent = val.toFixed(decimals) + suffix;
            if (elapsed < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target.toFixed(decimals) + suffix;
            }
        }
        requestAnimationFrame(tick);
    }

    if (counterEls.length > 0) {
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            counterEls.forEach(animateCounter);
        } else {
            const countObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.25 });
            counterEls.forEach(el => countObserver.observe(el));
        }
    }

    // 4. Animated Progress & Benchmark Bars on Scroll
    const animatedBars = document.querySelectorAll('.sp-bar-fill[data-width], .bench-fill-light[data-width]');
    function activateBar(bar) {
        const w = bar.getAttribute('data-width');
        if (w) bar.style.width = w;
        bar.classList.add('bar-animated');
    }

    if (animatedBars.length > 0) {
        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            animatedBars.forEach(activateBar);
        } else {
            const barObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        activateBar(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            animatedBars.forEach(bar => barObserver.observe(bar));
        }
    }

    // 5. Cursor-Tracking Specular Spotlight on Dark Keynote Cards
    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                card.style.setProperty('--my', `${e.clientY - rect.top}px`);
            });
        });
    }

    // 6. Keynote Progress Bar, Formal Portrait Zoom, Scrub Words & Cutout Scale
    const progressEl = document.getElementById('keynote-progress');
    const formalWrap = document.getElementById('formal-portrait-wrap');
    const posterFrame = document.getElementById('cutout-poster-frame');
    const cutoutSubject = document.getElementById('cutout-subject');
    const keynoteMedia = document.querySelectorAll('.keynote-media');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const trackedSections = document.querySelectorAll('section[id]');

    let scrollTicking = false;
    let cutoutScrollScale = 1;
    function onScrollUpdate() {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (progressEl && docHeight > 0) {
            const pct = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
            progressEl.style.width = `${pct.toFixed(2)}%`;
        }

        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 40);
        }

        if (!prefersReducedMotion) {
            if (formalWrap && scrollY < 900) {
                const s = 0.96 + Math.min(0.08, scrollY * 0.00022);
                formalWrap.style.transform = `scale(${s.toFixed(4)})`;
            }

            updateScrubHighlight();

            if (posterFrame && cutoutSubject) {
                const pRect = posterFrame.getBoundingClientRect();
                const vh = window.innerHeight || 900;
                if (pRect.bottom > 0 && pRect.top < vh) {
                    const cp = 1 - Math.abs((pRect.top + pRect.height / 2 - vh / 2) / vh);
                    cutoutScrollScale = 1 + Math.max(0, Math.min(1, cp)) * 0.015;
                }
            }

            const vh = window.innerHeight || 900;
            keynoteMedia.forEach(img => {
                const rect = img.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > vh) return;
                const progress = 1 - Math.abs((rect.top + rect.height / 2 - vh / 2) / vh);
                const scale = 1 + Math.max(0, Math.min(1, progress)) * 0.035;
                img.style.transform = `scale(${scale.toFixed(4)})`;
            });
        }

        let current = 'home';
        trackedSections.forEach(sec => {
            if (scrollY >= sec.offsetTop - 140) {
                current = sec.getAttribute('id');
            }
        });
        if (current === 'manifesto' || current === 'editorial-poster' || current === 'highlights') {
            current = 'home';
        }
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });

        scrollTicking = false;
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(onScrollUpdate);
            scrollTicking = true;
        }
    }, { passive: true });
    onScrollUpdate();

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        const closeMenu = () => {
            navMenu.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        };

        mobileToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars', !isOpen);
                icon.classList.toggle('fa-xmark', isOpen);
            }
        });

        navLinks.forEach(link => link.addEventListener('click', closeMenu));
    }

    // 7. Interactive Capabilities Filter Tabs
    const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-progress-card');

    skillTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                const match = filter === 'all' || card.getAttribute('data-category') === filter;
                card.style.display = match ? 'block' : 'none';
                if (match) {
                    const bar = card.querySelector('.sp-bar-fill[data-width]');
                    if (bar) activateBar(bar);
                    if (!prefersReducedMotion) {
                        card.style.animation = 'fadeIn 0.35s ease forwards';
                    }
                }
            });
        });
    });

    // 8. Flagship Research Interactive View Switcher (Isolated from Modal Open)
    const flagshipStage = document.getElementById('flagship-media-stage');
    if (flagshipStage) {
        flagshipStage.addEventListener('click', (e) => e.stopPropagation());
        flagshipStage.addEventListener('keydown', (e) => e.stopPropagation());

        const flagshipTabs = flagshipStage.querySelectorAll('.flagship-tab-btn');
        const flagshipPanels = flagshipStage.querySelectorAll('.flagship-panel');

        flagshipTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                const target = tab.getAttribute('data-flagship-tab');
                flagshipTabs.forEach(t => {
                    const active = t === tab;
                    t.classList.toggle('active', active);
                    t.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                flagshipPanels.forEach(panel => {
                    panel.classList.toggle('active', panel.getAttribute('data-flagship-panel') === target);
                });
            });
        });
    }

    // 9. Interactive Case Study Modal
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
                <p>Medical image classification for cervical cancer screening via Visual Inspection with Acetic Acid (VIA) suffers from severe class imbalance and clinical data scarcity.</p>

                <h4>Technical Solution & Engineering</h4>
                <p>Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN on clinical VIA cervical datasets under strict zero data-leakage protocols. Synthesized high-resolution (256x256) abnormal cervical images and evaluated downstream DenseNet121 CNN classification across two scenarios.</p>

                <h4>Quantifiable Results & Value-Add</h4>
                <ul>
                    <li><strong>FID Score Convergence:</strong> StyleGAN2-ADA achieved a peak Fréchet Inception Distance of <strong>49.62</strong>, outperforming StyleGAN3 (62.66) and DCGAN (210.01).</li>
                    <li><strong>Scenario A (50% Real + 50% Synthetic):</strong> Elevated DenseNet121 test accuracy to <strong>97.00%</strong> (vs 96.00% baseline).</li>
                    <li><strong>Scenario B (100% Synthetic Substitution):</strong> Achieved <strong>95.00% test accuracy</strong>, <strong>96% F1-score</strong>, and <strong>100.00% positive precision &amp; specificity</strong> using purely synthetic abnormal training samples.</li>
                </ul>

                <h4>Sample Python CLI Usage</h4>
                <div class="code-box-preview">
# Single-image or batch VIA abnormality inference CLI
python infer.py --image sample_via.png --weights models/densenet121_cervical.pth
# Output: {"prediction": "ABNORMAL (VIA+)", "confidence": 0.984, "latency_ms": 18.2}
                </div>
            `,
            link: "https://github.com/aral3000/cervical-cancer-stylegan2-densenet121"
        },
        dashboard: {
            tag: "Applied ML & Cybersecurity Case Study",
            title: "Real-Time Phishing URL Detection System (630,071 URLs · Random Forest)",
            body: `
                <h4>Problem Statement</h4>
                <p>Malicious phishing URLs evolve rapidly, requiring fast lexical inspection that does not rely solely on static blacklists or slow page-rendering sandboxes.</p>

                <h4>Technical Implementation</h4>
                <ul>
                    <li>Engineered 9 fast lexical URL feature extractors (length, subdomain depth, IP-in-host, suspicious TLDs, entropy/special characters, brand-spoofing tokens).</li>
                    <li>Trained and evaluated a Random Forest classifier on <strong>630,071 URLs</strong> (Dinas Kominfo dataset), achieving <strong>89.0% test accuracy</strong>.</li>
                    <li>Deployed an interactive Streamlit inspection dashboard and FastAPI REST endpoint with full pytest verification.</li>
                </ul>
            `,
            link: "https://github.com/aral3000/phishing-detection-system"
        },
        sql: {
            tag: "Agentic AI & Vector Memory Case Study",
            title: "Autonomous Market Research Agent (ReAct Loop & Cosine Vector Store)",
            body: `
                <h4>Technical Overview</h4>
                <p>Designed an autonomous multi-step ReAct (Reason + Act) agent that plans research queries, executes web search and scraping tools, stores findings in a vectorized NumPy cosine similarity memory store, and synthesizes structured executive reports.</p>

                <h4>Key Engineering Highlights</h4>
                <ul>
                    <li>Zero-dependency custom Cosine Similarity Vector Store built with vectorized NumPy operations.</li>
                    <li>Deterministic ReAct loop with tool-call tracing, confidence scoring, and markdown report export.</li>
                    <li>Includes CLI runner, FastAPI service, Streamlit UI, and 100% passing pytest suite.</li>
                </ul>
            `,
            link: "https://github.com/aral3000/autonomous-market-research-agent"
        },
        vision: {
            tag: "Software Engineering & AI Fundamentals (TDD)",
            title: "Python AI Core Toolkit (Data Structures, NumPy & Pandas Pipelines)",
            body: `
                <h4>Technical Overview</h4>
                <p>A Test-Driven Development (TDD) monorepo demonstrating core data structures, vectorized numerical computing, and reproducible tabular feature engineering without heavy framework bloat.</p>

                <h4>Key Modules</h4>
                <ul>
                    <li><strong>O(1) Data Structures:</strong> Custom LRU Cache and Sliding Window Rate Limiter for high-throughput APIs.</li>
                    <li><strong>Vectorized NumPy:</strong> Batch Cosine Similarity matrix computation without Python loops.</li>
                    <li><strong>Pandas Feature Pipeline:</strong> Automated missing-value imputation, outlier clipping, and Z-score normalization verified by pytest.</li>
                </ul>
            `,
            link: "https://github.com/aral3000/python-ai-core-toolkit"
        }
    };

    function openProjectModal(key) {
        const data = projectDetails[key];
        if (!data || !modalOverlay) return;
        modalTag.textContent = data.tag;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        modalFooter.innerHTML = `
            <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="btn-primary-gold">
                <i class="fab fa-github" aria-hidden="true"></i> View Repository
            </a>
        `;
        modalOverlay.classList.add('active');
    }

    function closeProjectModal() {
        if (modalOverlay) modalOverlay.classList.remove('active');
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => openProjectModal(card.getAttribute('data-project')));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card.getAttribute('data-project'));
            }
        });
    });

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectModal(btn.getAttribute('data-open-modal'));
        });
    });

    if (modalCloseBtn && modalOverlay) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeProjectModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeProjectModal();
            }
        });
    }

    // 10. Email Copy & Quick CV Actions
    const btnCopyEmail = document.getElementById('btn-copy-email-hero');
    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', () => {
            navigator.clipboard.writeText('mathallahrafifaldera@gmail.com');
            showToast(currentLang === 'id' ? 'Alamat email berhasil disalin.' : 'Email address copied to clipboard.');
        });
    }

    const btnQuickCV = document.getElementById('btn-quick-cv');
    if (btnQuickCV) {
        btnQuickCV.addEventListener('click', () => {
            showToast(currentLang === 'id' ? 'Membuka Ringkasan CV...' : 'Jumping to Candidate Summary...');
            window.location.href = '#about';
        });
    }

    // 11. Contact Form Dispatch
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('message').value;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
            submitBtn.disabled = true;

            fetch('https://formspree.io/f/xvovbkgp', {
                method: 'POST',
                body: new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            }).then(() => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle" aria-hidden="true"></i> Sent';
                showToast(currentLang === 'id'
                    ? `Terima kasih ${nameInput}, pesan Anda terkirim.`
                    : `Thank you ${nameInput}, your message has been sent.`);
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 3500);
            }).catch(() => {
                const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] From: ${nameInput}`);
                const mailtoBody = encodeURIComponent(`Name: ${nameInput}\nEmail: ${emailInput}\n\nMessage:\n${messageInput}`);
                window.location.href = `mailto:mathallahrafifaldera@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showToast(currentLang === 'id'
                    ? 'Membuka aplikasi email default...'
                    : 'Opening your default email client...');
            });
        });
    }

    // Toast Notification
    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.innerHTML = `<i class="fas fa-check-circle" style="color:#F2E199" aria-hidden="true"></i> <span>${message}</span>`;

        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#191939',
            color: '#F8FAFD',
            border: '1px solid rgba(242, 225, 153, 0.45)',
            padding: '0.85rem 1.3rem',
            borderRadius: '12px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45)',
            zIndex: '9999',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontFamily: 'inherit',
            fontSize: '0.9rem',
            fontWeight: '600'
        });

        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(14px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // 12. 3D Interactive Lanyard with Elastic Canvas Rope (Burgundy Silk & Champagne Titanium)
    function init3DLanyard() {
        const wrapper = document.getElementById('lanyard-wrapper');
        const canvas = document.getElementById('lanyard-rope-canvas');
        const card = document.getElementById('lanyard-card');
        const glare = document.getElementById('badge-glare');
        if (!wrapper || !canvas || !card) return;

        const ctx = canvas.getContext('2d');

        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;
        let vx = 0, vy = 0;

        let currentRotX = 0, currentRotY = 0, currentRotZ = 0;
        let targetRotX = 0, targetRotY = 0, targetRotZ = 0;
        let vRotX = 0, vRotY = 0, vRotZ = 0;

        let isDragging = false;
        let dragPointerStartX = 0, dragPointerStartY = 0;
        let dragInitialX = 0, dragInitialY = 0;
        let isHovered = false;
        let idleTime = 0;

        const springK = 0.082;
        const damping = 0.85;

        function resizeCanvas() {
            const rect = wrapper.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.max(1, rect.width * dpr);
            canvas.height = Math.max(1, rect.height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        if ('ResizeObserver' in window) {
            new ResizeObserver(resizeCanvas).observe(wrapper);
        }

        function updateIdle() {
            if (!isDragging && !isHovered && !prefersReducedMotion) {
                idleTime += 0.028;
                targetX = Math.sin(idleTime) * 10;
                targetY = Math.cos(idleTime * 0.7) * 3;
                targetRotZ = (targetX / 10) * 4.5;
                targetRotY = (targetX / 10) * 5.5;
                targetRotX = (targetY / 3) * 1.5;
            }
        }

        function drawLanyardRope() {
            const rect = wrapper.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            const anchorX = rect.width / 2;
            const anchorY = 10;
            const slotX = (rect.width / 2) + currentX;
            const slotY = 85 + currentY + 15.5;

            const toAnchorX = anchorX - slotX;
            const toAnchorY = anchorY - slotY;
            const pullAngle = Math.atan2(toAnchorY, toAnchorX);

            const clampTopX = slotX + Math.cos(pullAngle) * 26;
            const clampTopY = slotY + Math.sin(pullAngle) * 26;

            const dx = clampTopX - anchorX;
            const dy = clampTopY - anchorY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const naturalLen = 65;

            const stretch = Math.max(1, dist / naturalLen);
            const strapWidth = Math.max(14, 24 / Math.sqrt(stretch));

            const sagFactor = Math.max(2, (naturalLen / (dist + 1)) * 14);
            const ctrlX = anchorX + (dx * 0.45);
            const ctrlY = anchorY + (dy * 0.5) + sagFactor;

            // A. Top Suspension Ring
            ctx.save();
            ctx.shadowColor = 'rgba(16, 18, 42, 0.28)';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetY = 2;
            const topRingGrad = ctx.createLinearGradient(anchorX - 9, 0, anchorX + 9, 0);
            topRingGrad.addColorStop(0, '#5a5557');
            topRingGrad.addColorStop(0.35, '#d6d0d2');
            topRingGrad.addColorStop(0.7, '#ffffff');
            topRingGrad.addColorStop(1, '#4a4547');
            ctx.strokeStyle = topRingGrad;
            ctx.lineWidth = 3.2;
            ctx.beginPath();
            ctx.arc(anchorX, 9, 8, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#F2E199';
            ctx.beginPath();
            ctx.arc(anchorX, 9, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // B. City at Night Navy Silk Satin Strap
            ctx.save();
            ctx.shadowColor = 'rgba(16, 18, 42, 0.35)';
            ctx.shadowBlur = 8;
            ctx.shadowOffsetY = 4;

            ctx.beginPath();
            ctx.moveTo(anchorX, anchorY);
            ctx.quadraticCurveTo(ctrlX, ctrlY, clampTopX, clampTopY);
            ctx.lineWidth = strapWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const strapGrad = ctx.createLinearGradient(anchorX, anchorY, clampTopX, clampTopY);
            strapGrad.addColorStop(0, '#10122A');
            strapGrad.addColorStop(0.3, '#1B3A68');
            strapGrad.addColorStop(0.55, '#191939');
            strapGrad.addColorStop(0.8, '#1B3A68');
            strapGrad.addColorStop(1, '#264F8A');
            ctx.strokeStyle = strapGrad;
            ctx.stroke();

            ctx.shadowColor = 'transparent';
            ctx.beginPath();
            ctx.moveTo(anchorX, anchorY);
            ctx.quadraticCurveTo(ctrlX, ctrlY, clampTopX, clampTopY);
            ctx.lineWidth = Math.max(1.4, 2.2 / Math.sqrt(stretch));
            ctx.strokeStyle = 'rgba(242, 225, 153, 0.78)';
            ctx.stroke();
            ctx.restore();

            // C. Hardware Assembly
            ctx.save();
            ctx.translate(slotX, slotY);
            ctx.rotate(pullAngle + Math.PI / 2);

            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetY = 1;
            ctx.fillStyle = 'rgba(245, 246, 248, 0.96)';
            ctx.strokeStyle = 'rgba(180, 185, 192, 0.9)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-5.5, -13, 11, 16, 2);
            } else {
                ctx.rect(-5.5, -13, 11, 16);
            }
            ctx.fill();
            ctx.stroke();

            const snapGrad = ctx.createRadialGradient(-0.6, -5.6, 0.4, 0, -5, 4);
            snapGrad.addColorStop(0, '#ffffff');
            snapGrad.addColorStop(0.45, '#d4d8de');
            snapGrad.addColorStop(1, '#686e74');
            ctx.fillStyle = snapGrad;
            ctx.strokeStyle = '#4a4d52';
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.arc(0, -5, 3.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#222';
            ctx.beginPath();
            ctx.arc(0, -5, 1.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
            ctx.shadowBlur = 5;
            ctx.shadowOffsetY = 2;

            const clampGrad = ctx.createLinearGradient(-12, 0, 12, 0);
            clampGrad.addColorStop(0, '#10122A');
            clampGrad.addColorStop(0.3, '#191939');
            clampGrad.addColorStop(0.55, '#1B3A68');
            clampGrad.addColorStop(0.8, '#191939');
            clampGrad.addColorStop(1, '#10122A');
            ctx.fillStyle = clampGrad;
            ctx.strokeStyle = 'rgba(242, 225, 153, 0.8)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-12, -26, 24, 14, 2.5);
            } else {
                ctx.rect(-12, -26, 24, 14);
            }
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
            ctx.fillRect(-8, -20.5, 16, 3);
            ctx.restore();

            ctx.restore();
        }

        function animate() {
            updateIdle();

            const fx = (targetX - currentX) * springK;
            const fy = (targetY - currentY) * springK;
            vx = (vx + fx) * damping;
            vy = (vy + fy) * damping;
            currentX += vx;
            currentY += vy;

            const fRotX = (targetRotX - currentRotX) * springK * 1.2;
            const fRotY = (targetRotY - currentRotY) * springK * 1.2;
            const fRotZ = (targetRotZ - currentRotZ) * springK * 1.2;
            vRotX = (vRotX + fRotX) * damping;
            vRotY = (vRotY + fRotY) * damping;
            vRotZ = (vRotZ + fRotZ) * damping;
            currentRotX += vRotX;
            currentRotY += vRotY;
            currentRotZ += vRotZ;

            card.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg)`;

            if (glare) {
                const glareX = 50 + (currentRotY * 2.2);
                const glareY = 50 + (currentRotX * 2.2);
                glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.35) 0%, rgba(242, 225, 153, 0.16) 35%, transparent 70%)`;
            }

            drawLanyardRope();
            requestAnimationFrame(animate);
        }

        wrapper.addEventListener('mouseenter', () => { isHovered = true; });
        wrapper.addEventListener('mouseleave', () => {
            isHovered = false;
            if (!isDragging) {
                targetX = 0; targetY = 0;
                targetRotX = 0; targetRotY = 0; targetRotZ = 0;
            }
        });

        wrapper.addEventListener('mousemove', (e) => {
            if (isDragging) return;
            const rect = wrapper.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + 85 + 200);
            targetX = Math.max(-35, Math.min(35, relX * 0.32));
            targetY = Math.max(-15, Math.min(35, relY * 0.22));
            targetRotY = Math.max(-18, Math.min(18, relX * 0.16));
            targetRotX = Math.max(-14, Math.min(14, -relY * 0.11));
            targetRotZ = (targetX / 35) * 10;
        });

        function onDragStart(e) {
            isDragging = true;
            dragPointerStartX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            dragPointerStartY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
            dragInitialX = currentX;
            dragInitialY = currentY;
            card.style.cursor = 'grabbing';
        }

        function onDragMove(e) {
            if (!isDragging) return;
            const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
            const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
            const dx = clientX - dragPointerStartX;
            const dy = clientY - dragPointerStartY;
            targetX = Math.max(-120, Math.min(120, dragInitialX + dx));
            targetY = Math.max(-40, Math.min(140, dragInitialY + dy));
            targetRotZ = Math.max(-35, Math.min(35, (targetX / 120) * 32));
            targetRotY = Math.max(-28, Math.min(28, (targetX / 120) * 25));
            targetRotX = Math.max(-20, Math.min(20, -(targetY / 140) * 22));
        }

        function onDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            card.style.cursor = 'grab';
            targetX = 0; targetY = 0;
            targetRotX = 0; targetRotY = 0; targetRotZ = 0;
        }

        card.addEventListener('mousedown', onDragStart);
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);
        card.addEventListener('touchstart', onDragStart, { passive: true });
        window.addEventListener('touchmove', onDragMove, { passive: true });
        window.addEventListener('touchend', onDragEnd);

        requestAnimationFrame(animate);
    }

    // 14. Kinetic 9-Tone Progressive Starry Night ASCII Canvas (280x110 -> 200x78 -> 112x44 Offscreen Blit)
    function initStarryAscii() {
        const data = window.STARRY_ASCII_DATA;
        const canvases = Array.from(document.querySelectorAll('canvas.starry-ascii-canvas'));
        if (!data || !canvases.length) return;

        const { cols: srcCols, rows: srcRows, palette, c: colorStr, l: tierStr } = data;
        const POOLS = [" .'", ".:,-", "r+=c/", "cv71>", "3SX%?", "8DHYN", "HMWA@", "@#$MW"];
        const BASE_ALPHA = [0.94, 0.42, 0.82, 0.86, 0.88, 0.92, 0.94, 0.96, 0.98];
        const PRESETS = {
            high:    { cols: 280, rows: 110, waveCount: 6, twinkleCap: 260, bgHex: '#191939' },
            mid:     { cols: 200, rows: 78,  waveCount: 4, twinkleCap: 150, bgHex: '#10122A' },
            low:     { cols: 112, rows: 44,  waveCount: 3, twinkleCap: 85,  bgHex: '#10122A' },
            whisper: { cols: 112, rows: 44,  waveCount: 2, twinkleCap: 70,  bgHex: '#191939' }
        };

        const states = canvases.map((canvas, slot) => {
            const res = canvas.getAttribute('data-starry-res') || 'high';
            const cfg = PRESETS[res] || PRESETS.high;
            const cols = Math.min(cfg.cols, srcCols);
            const rows = Math.min(cfg.rows, srcRows);
            const total = cols * rows;

            const colorIdx = new Uint8Array(total);
            const tierIdx = new Uint8Array(total);
            const buckets = Array.from({ length: palette.length }, () => []);
            const twinklePool = [];
            const chars = new Array(total);

            for (let r = 0; r < rows; r++) {
                const sr = (cols === srcCols && rows === srcRows)
                    ? r
                    : Math.min(srcRows - 1, Math.floor(((r + 0.5) * srcRows) / rows));
                for (let col = 0; col < cols; col++) {
                    const sc = (cols === srcCols && rows === srcRows)
                        ? col
                        : Math.min(srcCols - 1, Math.floor(((col + 0.5) * srcCols) / cols));
                    const sIdx = sr * srcCols + sc;
                    const i = r * cols + col;

                    const cI = colorStr.charCodeAt(sIdx) - 48;
                    const tier = tierStr.charCodeAt(sIdx) - 48;
                    colorIdx[i] = cI;
                    tierIdx[i] = tier;

                    if (cI === 1) {
                        if ((i & 3) === 0) buckets[1].push(i);
                    } else if (buckets[cI]) {
                        buckets[cI].push(i);
                        if (cI >= 6) twinklePool.push(i);
                    }

                    const pool = POOLS[tier] || POOLS[0];
                    const seed = ((i * 73 + slot * 19) ^ (i >> 3)) & 255;
                    chars[i] = pool[seed % pool.length];
                }
            }

            const baseCanvas = document.createElement('canvas');
            return {
                canvas,
                ctx: canvas.getContext('2d', { alpha: false }),
                baseCanvas,
                baseCtx: baseCanvas.getContext('2d', { alpha: false }),
                cols,
                rows,
                total,
                waveCount: cfg.waveCount,
                twinkleCap: cfg.twinkleCap,
                bgHex: cfg.bgHex,
                colorIdx,
                tierIdx,
                buckets,
                twinklePool,
                chars,
                width: 0,
                height: 0,
                dpr: 1,
                cellW: 5,
                cellH: 8,
                offsetX: 0,
                offsetY: 0,
                fontNormal: '',
                fontBold: '',
                visible: true
            };
        });

        function renderBase(st) {
            const bCtx = st.baseCtx;
            if (!bCtx || st.width === 0) return;

            bCtx.globalAlpha = 1;
            bCtx.fillStyle = st.bgHex;
            bCtx.fillRect(0, 0, st.width, st.height);

            const halfW = st.cellW * 0.5;
            const halfH = st.cellH * 0.5;

            for (let cI = 0; cI < st.buckets.length; cI++) {
                const list = st.buckets[cI];
                if (!list.length) continue;
                bCtx.font = cI >= 5 ? st.fontBold : st.fontNormal;
                bCtx.fillStyle = palette[cI];
                bCtx.globalAlpha = BASE_ALPHA[cI] || 0.85;

                for (let k = 0; k < list.length; k++) {
                    const i = list[k];
                    const r = (i / st.cols) | 0;
                    const col = i - r * st.cols;
                    const px = st.offsetX + col * st.cellW + halfW;
                    const py = st.offsetY + r * st.cellH + halfH;
                    if (px < -st.cellW || px > st.width + st.cellW || py < -st.cellH || py > st.height + st.cellH) {
                        continue;
                    }
                    bCtx.fillText(st.chars[i], px, py);
                }
            }
            bCtx.globalAlpha = 1;
        }

        function sizeCanvas(st) {
            if (!st.ctx || !st.baseCtx) return;
            const parent = st.canvas.parentElement;
            if (!parent) return;
            const rect = parent.getBoundingClientRect();
            const w = Math.max(1, Math.round(rect.width));
            const h = Math.max(1, Math.round(rect.height));
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

            st.dpr = dpr;
            st.width = w;
            st.height = h;
            st.canvas.width = Math.round(w * dpr);
            st.canvas.height = Math.round(h * dpr);
            st.baseCanvas.width = st.canvas.width;
            st.baseCanvas.height = st.canvas.height;

            st.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            st.baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cellH = Math.max(h / st.rows, w / (st.cols * 0.625));
            const cellW = cellH * 0.625;
            st.cellW = cellW;
            st.cellH = cellH;
            st.offsetX = (w - st.cols * cellW) * 0.5;
            st.offsetY = (h - st.rows * cellH) * 0.5;

            const fontPx = Math.max(4, Math.floor(Math.min(cellW / 0.72, cellH * 0.80)));
            st.fontNormal = `500 ${fontPx}px "SF Mono", ui-monospace, Menlo, Consolas, monospace`;
            st.fontBold = `700 ${fontPx}px "SF Mono", ui-monospace, Menlo, Consolas, monospace`;

            st.baseCtx.textAlign = 'center';
            st.baseCtx.textBaseline = 'middle';
            st.ctx.textAlign = 'center';
            st.ctx.textBaseline = 'middle';

            renderBase(st);
            st.ctx.globalAlpha = 1;
            st.ctx.drawImage(st.baseCanvas, 0, 0, st.width, st.height);
        }

        function drawTick(st, tick) {
            const ctx = st.ctx;
            if (!ctx || st.width === 0) return;

            ctx.globalAlpha = 1;
            ctx.drawImage(st.baseCanvas, 0, 0, st.width, st.height);

            const active = [];
            const seen = new Set();

            const pushVisible = (idx) => {
                if (seen.has(idx)) return;
                const r = (idx / st.cols) | 0;
                const col = idx - r * st.cols;
                const cx = st.offsetX + (col + 0.5) * st.cellW;
                const cy = st.offsetY + (r + 0.5) * st.cellH;
                if (cx < -st.cellW || cx > st.width + st.cellW || cy < -st.cellH || cy > st.height + st.cellH) return;
                seen.add(idx);
                active.push(idx);
            };

            const strideStep = Math.max(1, Math.floor(st.cols / st.waveCount));
            for (let r = 0; r < st.rows; r++) {
                const waveShift = Math.round(Math.sin(r * 0.21 - tick * 0.16) * (st.cols * 0.08));
                const startC = ((tick * 4 + waveShift) % st.cols + st.cols) % st.cols;
                for (let step = 0; step < st.waveCount; step++) {
                    pushVisible(r * st.cols + ((startC + step * strideStep) % st.cols));
                }
            }

            if (st.twinklePool.length > 0) {
                const stride = Math.max(1, Math.floor(st.twinklePool.length / st.twinkleCap));
                for (let s = tick % stride; s < st.twinklePool.length; s += stride) {
                    pushVisible(st.twinklePool[s]);
                }
            }

            ctx.fillStyle = st.bgHex;
            for (let k = 0; k < active.length; k++) {
                const i = active[k];
                const r = (i / st.cols) | 0;
                const col = i - r * st.cols;
                const x0 = Math.round(st.offsetX + col * st.cellW);
                const y0 = Math.round(st.offsetY + r * st.cellH);
                const w0 = Math.round(st.offsetX + (col + 1) * st.cellW) - x0;
                const h0 = Math.round(st.offsetY + (r + 1) * st.cellH) - y0;
                if (w0 > 0 && h0 > 0) ctx.fillRect(x0, y0, w0, h0);
            }

            const halfW = st.cellW * 0.5;
            const halfH = st.cellH * 0.5;
            for (let pass = 0; pass < 2; pass++) {
                ctx.font = pass === 0 ? st.fontNormal : st.fontBold;
                for (let k = 0; k < active.length; k++) {
                    const i = active[k];
                    const cI = st.colorIdx[i];
                    const isBold = cI >= 5;
                    if ((pass === 0 && isBold) || (pass === 1 && !isBold)) continue;

                    const r = (i / st.cols) | 0;
                    const col = i - r * st.cols;
                    const pool = POOLS[st.tierIdx[i]] || POOLS[0];
                    st.chars[i] = pool[(Math.random() * pool.length) | 0];

                    const baseA = BASE_ALPHA[cI] || 0.85;
                    ctx.fillStyle = palette[cI];
                    ctx.globalAlpha = cI >= 6 ? Math.min(1.0, baseA + 0.04) : Math.min(0.98, baseA + 0.08);
                    ctx.fillText(st.chars[i], st.offsetX + col * st.cellW + halfW, st.offsetY + r * st.cellH + halfH);
                }
            }
            ctx.globalAlpha = 1;
        }

        states.forEach(st => sizeCanvas(st));

        let resizeTimer = null;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                states.forEach(st => sizeCanvas(st));
            }, 140);
        }, { passive: true });

        if (prefersReducedMotion) return;

        if ('IntersectionObserver' in window) {
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const target = states.find(s => s.canvas === entry.target);
                    if (target) target.visible = entry.isIntersecting;
                });
            }, { threshold: 0.01 });
            states.forEach(st => obs.observe(st.canvas));
        }

        let tick = 0;
        let lastTs = 0;
        function loop(ts) {
            if (!lastTs || ts - lastTs >= 105) {
                lastTs = ts;
                tick++;
                for (let s = 0; s < states.length; s++) {
                    if (states[s].visible) {
                        drawTick(states[s], tick);
                    }
                }
            }
            requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
    }

    // 15. Photo Protection (Block Drag-and-Drop and Right-Click Save on Images)
    function initPhotoProtection() {
        const photoSelector = 'img, figure, .formal-portrait-wrap, .cutout-poster-frame, .exp-photo-frame, .flagship-media, .badge-photo-frame';
        document.addEventListener('contextmenu', (e) => {
            if (e.target && e.target.closest && e.target.closest(photoSelector)) {
                e.preventDefault();
            }
        });
        document.addEventListener('dragstart', (e) => {
            if (e.target && e.target.closest && e.target.closest(photoSelector)) {
                e.preventDefault();
            }
        });
    }

    // 16. Invincible / CapCut 2.5D Sway & Counter-Parallax on Graduation Cutout Poster
    function initCutoutInvincibleMotion() {
        if (prefersReducedMotion || !posterFrame || !cutoutSubject) return;

        const cutoutHalo = posterFrame.querySelector('.cutout-halo');
        const finePointer = window.matchMedia('(pointer: fine)').matches;

        let targetHoverX = 0;
        let targetHoverY = 0;
        let hoverX = 0;
        let hoverY = 0;
        let isVisible = !('IntersectionObserver' in window);
        let rafId = null;
        let startTs = null;
        let introStartTs = null;
        let triggerIntro = !('IntersectionObserver' in window);
        let introArmed = true;

        if (finePointer) {
            posterFrame.addEventListener('pointermove', (e) => {
                const rect = posterFrame.getBoundingClientRect();
                if (!rect.width || !rect.height) return;
                targetHoverX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
                targetHoverY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            }, { passive: true });
            posterFrame.addEventListener('pointerleave', () => {
                targetHoverX = 0;
                targetHoverY = 0;
            });
        }

        function stopLoop() {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        }

        function startLoop() {
            if (rafId === null && isVisible && !document.hidden) {
                rafId = requestAnimationFrame(step);
            }
        }

        function step(ts) {
            rafId = null;
            if (!isVisible || document.hidden) return;
            if (startTs === null) startTs = ts;
            if (triggerIntro) {
                introStartTs = ts;
                triggerIntro = false;
            }

            const t = (ts - startTs) * 0.001;
            const phase = t * 1.05;
            const sway = Math.sin(phase);
            const groove = Math.cos(phase * 2);
            const breath = 0.5 + 0.5 * Math.sin(phase * 1.5);
            const introAge = introStartTs !== null ? (ts - introStartTs) * 0.001 : 1;
            const introEnv = introAge < 0.55 ? Math.pow(1 - introAge / 0.55, 2) : 0;
            const introWave = introEnv > 0 ? Math.sin(introAge * 26) : 0;
            const introPop = introEnv > 0 ? Math.sin((introAge / 0.55) * Math.PI) * introEnv : 0;
            const m = posterFrame.clientWidth < 640 ? 0.65 : 1;

            hoverX += (targetHoverX - hoverX) * 0.06;
            hoverY += (targetHoverY - hoverY) * 0.06;

            const tx = (sway * 8 + introWave * 14 * introEnv) * m + hoverX * 7;
            const ty = (groove * 2.2 + 1.0 + Math.cos(introAge * 22) * 5 * introEnv) * m + hoverY * 3;
            const rotY = (sway * 5.2 + introWave * 9 * introEnv) * m + hoverX * 4.5;
            const rotZ = (sway * 1.4 + introWave * 2.8 * introEnv) * m + hoverX * 0.8;
            const rotX = Math.sin(t * 0.75) * 1.3 * m - hoverY * 2.8;
            const scale = cutoutScrollScale * (1.012 + breath * 0.015 + introPop * 0.045);

            // Keep perspective inline so overflow:hidden + border-radius never clip 3D layers in Chromium
            cutoutSubject.style.transform = `translateX(-50%) perspective(900px) translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) rotateZ(${rotZ.toFixed(2)}deg) scale(${scale.toFixed(4)})`;

            if (diagWall) {
                const bgX = -tx * 1.55;
                const bgY = -ty * 1.45;
                const bgRotY = -rotY * 0.42;
                const bgRotX = -rotX * 0.35;
                const bgScale = 1.05 + (1 - breath) * 0.012 + introEnv * 0.02;
                diagWall.style.transform = `perspective(900px) translate3d(${bgX.toFixed(2)}px, ${bgY.toFixed(2)}px, 0) rotateY(${bgRotY.toFixed(2)}deg) rotateX(${bgRotX.toFixed(2)}deg) rotate(-11deg) scale(${bgScale.toFixed(4)})`;
            }

            if (cutoutHalo) {
                const hX = tx * 0.65;
                const hY = ty * 0.65;
                const hScale = 1 + breath * 0.04 + introPop * 0.06;
                cutoutHalo.style.transform = `translate3d(calc(-50% + ${hX.toFixed(2)}px), ${hY.toFixed(2)}px, 0) scale(${hScale.toFixed(4)})`;
            }

            rafId = requestAnimationFrame(step);
        }

        if ('IntersectionObserver' in window) {
            const visObs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    isVisible = entry.isIntersecting;
                    if (!entry.isIntersecting) {
                        introArmed = true;
                    } else if (introArmed && entry.intersectionRatio >= 0.35) {
                        introArmed = false;
                        triggerIntro = true;
                    }
                });
                if (isVisible) startLoop();
                else stopLoop();
            }, { threshold: [0.01, 0.35] });
            visObs.observe(posterFrame);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopLoop();
            else startLoop();
        });

        startLoop();
    }

    init3DLanyard();
    initStarryAscii();
    initPhotoProtection();
    initCutoutInvincibleMotion();
});
