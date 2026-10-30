// ==========================================================================
// ATHALLAH. PORTFOLIO INTERACTIVE SCRIPT (MULTI-LANGUAGE EN/ID/ZH EDITION V5)
// Author: M. Athallah Rafif Aldera
// Default Language: English (EN)
// Supported Languages: English (en), Indonesian (id), Simplified Chinese (zh)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. Multi-Language i18n Translation Dictionary
    const translations = {
        en: {
            "nav.home": "Home",
            "nav.about": "About Me",
            "nav.skills": "Capabilities",
            "nav.projects": "Featured Work",
            "nav.experience": "Experience",
            "nav.certifications": "Certifications",
            "btn.quick_cv": "Quick CV",
            "btn.hire": "Hire / Contact",
            "hero.open_to_work": "Open to Work",
            "hero.tag": "Computer Systems Graduate | AI & Data Science Candidate",
            "hero.title": 'Hello, I\'m <span class="text-gold">M. Athallah Rafif Aldera.</span><br><span class="title-sub">AI Engineer & Data Scientist</span>',
            "hero.desc": 'Computer Systems graduate from <strong>Sriwijaya University</strong> specializing in <strong>Generative AI, Computer Vision, and Data Analytics</strong>. Equipped with a <em>hyper-focus execution rhythm</em> to solve complex technical challenges with speed, accuracy, and business value.',
            "btn.get_in_touch": "Get In Touch",
            "btn.explore_case_studies": "Explore Case Studies",
            "btn.copy_email": "Copy Email",
            "hero.target_roles_label": "Target Roles",
            "hero.target_roles_val": "AI Engineer | Data Scientist | Computer Vision Specialist | ML Engineer | Data Analyst | AI Developer",
            "hero.location_label": "Location & Status",
            "hero.location_val": "Prabumulih / Relocation & Remote Ready",
            "hero.contact_label": "Direct Contact",
            "metrics.acc": "DenseNet121 Classification Accuracy",
            "metrics.fid": "Peak FID Score (StyleGAN2-ADA)",
            "metrics.certs": "Google Cloud & Dicoding Certifications",
            "metrics.degree": "Bachelor of Computer Systems",
            "about.subtitle": "Candidate Overview",
            "about.title": 'Who I Am & <span class="text-gold">What I Bring to Your Team</span>',
            "about.card_title": "Professional Profile",
            "about.text": '<p>I am a Computer Systems graduate from <strong>Sriwijaya University (UNSRI)</strong>, dedicated to pursuing a professional career as an <strong>AI Engineer, Data Scientist, and Technology Innovator</strong>. My core expertise covers Machine Learning algorithms, Deep Learning (Generative AI & Computer Vision), and Data Analytics.</p><p>I operate with a <strong>hyper-focus execution rhythm</strong>—capable of mastering new technologies rapidly, tackling complex technical problems with high efficiency, and executing projects end-to-end from ideation to production. Ready to deliver immediate value to your organization.</p>',
            "tags.ai_pipelines": "End-to-End AI Pipelines",
            "tags.data_analytics": "Data Science & Analytics",
            "tags.cv_spec": "Computer Vision Specialist",
            "tags.hyper_focus": "Fast Learner & Hyper-Focus",
            "why.title": "Why Hire Me?",
            "why.p1_title": "Technical Mastery in AI/ML",
            "why.p1_desc": "Proven track record building generative models (StyleGAN2-ADA, StyleGAN3, DCGAN) & CNN classifiers using PyTorch & TensorFlow.",
            "why.p2_title": "Data Science & Analytical Pipelines",
            "why.p2_desc": "Proven skills in SQL database querying, exploratory data analysis, and predictive modeling using Scikit-Learn, Pandas & NumPy.",
            "why.p3_title": "Leadership & Execution Discipline",
            "why.p3_desc": "Led the Martial Arts Division at UKM Taekwondo UNSRI—managing events, athlete training schedules, and team coordination under pressure.",
            "skills.subtitle": "Interactive Competency Matrix",
            "skills.title": 'Core Capabilities & <span class="text-gold">Skill Proficiency</span>',
            "skills.desc": "Click tabs to filter skills and inspect proficiency metrics across AI Engineering, Data Science, and Computer Vision.",
            "tabs.all": "All Capabilities",
            "tabs.ai": "AI & Deep Learning",
            "tabs.ds": "Data Science & SQL",
            "tabs.cv": "Computer Vision & Tools",
            "sp.pytorch": "Deep Learning model training, loss functions, custom CNN heads, and GPU optimization.",
            "sp.stylegan": "Multi-stage StyleGAN training, ADA adaptive augmentation, and FID metric convergence analysis.",
            "sp.densenet": "Transfer learning, feature extraction, binary cross-entropy, and confusion matrix validation.",
            "sp.python": "OOP, scripting, automation, harvest utilities, and end-to-end data processing pipelines.",
            "sp.sql": "Relational queries, aggregations, joins, data extraction, and Dicoding SQL certification.",
            "sp.pandas": "Data cleaning, EDA, feature scaling, evaluation metrics, and statistical analytics.",
            "sp.opencv": "Image resizing, channel transformations, augmentation pipelines, and PIL/pyspng integration.",
            "sp.git": "Branching strategy, .gitignore data security enforcement, GitHub Pages, and version control.",
            "sp.plotlib": "Automated chart generation, multi-stage training curve visualization, and publication-ready plots.",
            "projects.subtitle": "Interactive Case Studies",
            "projects.title": 'Featured Projects & <span class="text-gold">Recruiter Insights</span>',
            "projects.desc": "Click on any project card to open the interactive case study modal with technical insights, problem solving, and code preview.",
            "projects.flagship_badge": "Featured Case Study",
            "cs1.title": "Generative AI Medical Image Augmentation (StyleGAN2-ADA & DenseNet121)",
            "cs1.desc": "Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN on clinical VIA cervical datasets (peak FID 49.62), elevating DenseNet121 accuracy to 97.00% (50:50 mix) and 95.00% on 100% synthetic substitution.",
            "cs2.title": "Real-Time Phishing URL Detection System (630K URLs • Random Forest)",
            "cs2.desc": "Built an end-to-end cybersecurity ML pipeline for Dinas Kominfo trained on 630,071 URLs (89.0% test accuracy), featuring 9 lexical URL extractors, FastAPI service, and Streamlit dashboard.",
            "cs3.title": "Autonomous Market Research Agent (ReAct & Cosine Vector Store)",
            "cs3.desc": "Engineered an autonomous multi-step ReAct agent with web search & scraper tools, custom NumPy cosine similarity vector memory, and structured executive report generation.",
            "cs4.title": "Python AI Core Toolkit (TDD Data Structures, NumPy & Pandas)",
            "cs4.desc": "Modular software engineering & AI fundamentals monorepo implementing O(1) data structures, vectorized NumPy cosine similarity matrices, and Pandas ETL pipelines verified by pytest.",
            "btn.click_insights": "Click for Recruiter Insights →",
            "exp.subtitle": "Track Record & Impact",
            "exp.title": 'Work Experience & <span class="text-gold">Leadership Roles</span>',
            "exp.r1_badge": "AI Research",
            "exp.r1_role": "Undergraduate AI Researcher & Developer",
            "exp.r1_bullets": '<li>Benchmarked StyleGAN2-ADA, StyleGAN3, and DCGAN under Prof. Ir. Siti Nurmaini, M.T., Ph.D. to address clinical VIA cervical image scarcity.</li><li>Achieved peak FID score of 49.62 (StyleGAN2-ADA), elevated DenseNet121 accuracy to 97.00% (50:50 mix), and proved 95.00% accuracy with 100% positive precision on 100% synthetic substitution.</li><li>Published reproducible open-source inference CLI and test suite on GitHub.</li>',
            "exp.r2_badge": "Leadership",
            "exp.r2_role": "Committee Member & Martial Arts Division Lead",
            "exp.r2_bullets": '<li>Directed the Martial Arts Division, overseeing training schedules and athlete development; won 3rd Place (Under 70kg) at PORKAB IV Ogan Ilir 2023.</li><li>Managed committee responsibilities for organizational events, fostering teamwork and operational discipline under pressure.</li>',
            "exp.r3_badge": "Internship",
            "exp.r3_role": "Web Developer & Applied ML Intern",
            "exp.r3_bullets": '<li>Developed and refined responsive internal web application modules using HTML, CSS, PHP, and JavaScript (Evaluated Grade A / 89.83).</li><li>Engineered a Random Forest URL phishing detection prototype trained on 630,071 URLs (89.0% test accuracy) to support public-sector digital security literacy.</li>',
            "certs.subtitle": "Verified Credentials",
            "certs.title": 'Certifications & <span class="text-gold">Continuous Learning</span>',
            "contact.subtitle": "Get In Touch",
            "contact.title": 'Ready to add value to your <span class="text-gold">tech team</span>.',
            "contact.desc": 'Actively seeking opportunities for <strong>AI Engineer, Data Scientist, Computer Vision Specialist, Machine Learning Engineer, Data Analyst,</strong> and <strong>AI Developer</strong> roles. Open for full-time, relocation, and remote positions.',
            "contact.email_label": "Email Address",
            "contact.phone_label": "Phone / WhatsApp",
            "contact.linkedin_label": "LinkedIn Profile",
            "contact.github_label": "GitHub Account",
            "contact.discord_label": "Discord Handle",
            "form.title": "Send a Recruiter Message",
            "form.name_label": "Your Name / Company",
            "form.email_label": "Work Email",
            "form.msg_label": "Message / Opportunity Details",
            "form.btn_send": "Send Direct Message",
            "footer.tag": "M. Athallah Rafif Aldera | AI Engineer & Data Scientist Candidate"
        },
        id: {
            "nav.home": "Beranda",
            "nav.about": "Tentang Saya",
            "nav.skills": "Keahlian",
            "nav.projects": "Portofolio",
            "nav.experience": "Pengalaman",
            "nav.certifications": "Sertifikasi",
            "btn.quick_cv": "Ringkasan CV",
            "btn.hire": "Rekrut / Kontak",
            "hero.open_to_work": "Siap Bekerja",
            "hero.tag": "Lulusan Sistem Komputer | Kandidat AI & Data Science",
            "hero.title": 'Halo, Saya <span class="text-gold">M. Athallah Rafif Aldera.</span><br><span class="title-sub">AI Engineer & Data Scientist</span>',
            "hero.desc": 'Lulusan Sistem Komputer dari <strong>Universitas Sriwijaya</strong> yang berfokus pada <strong>Generative AI, Computer Vision, dan Data Analytics</strong>. Dilengkapi dengan <em>ritme eksekusi hyper-focus</em> untuk menyelesaikan tantangan teknis yang rumit dengan cepat, presisi, dan memberikan nilai bisnis.',
            "btn.get_in_touch": "Hubungi Saya",
            "btn.explore_case_studies": "Lihat Studi Kasus",
            "btn.copy_email": "Salin Email",
            "hero.target_roles_label": "Target Posisi",
            "hero.target_roles_val": "AI Engineer | Data Scientist | Computer Vision Specialist | ML Engineer | Data Analyst | AI Developer",
            "hero.location_label": "Lokasi & Status",
            "hero.location_val": "Prabumulih / Siap Relokasi & Kerja Remote",
            "hero.contact_label": "Kontak Langsung",
            "metrics.acc": "Akurasi Klasifikasi DenseNet121",
            "metrics.fid": "Skor FID Terbaik (StyleGAN2-ADA)",
            "metrics.certs": "Sertifikasi Google Cloud & Dicoding",
            "metrics.degree": "Sarjana Sistem Komputer UNSRI",
            "about.subtitle": "Ringkasan Profil",
            "about.title": 'Siapa Saya & <span class="text-gold">Nilai Tambah untuk Tim Anda</span>',
            "about.card_title": "Profil Profesional",
            "about.text": '<p>Saya adalah lulusan Sistem Komputer dari <strong>Universitas Sriwijaya (UNSRI)</strong> yang berfokus merintis karir profesional sebagai <strong>AI Engineer, Data Scientist, dan Technology Innovator</strong>. Spesialisasi utama saya mencakup algoritma Machine Learning, Deep Learning (Generative AI & Computer Vision), dan Data Analytics.</p><p>Saya bekerja dengan <strong>ritme eksekusi hyper-focus</strong>—mampu mempelajari teknologi baru dengan cepat, menyelesaikan masalah teknis yang rumit dengan efisiensi tinggi, serta mengeksekusi proyek dari fase ideasi hingga siap pakai.</p>',
            "tags.ai_pipelines": "End-to-End AI Pipelines",
            "tags.data_analytics": "Data Science & Analytics",
            "tags.cv_spec": "Spesialis Computer Vision",
            "tags.hyper_focus": "Pembelajar Cepat & Hyper-Focus",
            "why.title": "Mengapa Merekrut Saya?",
            "why.p1_title": "Penguasaan Teknis AI/ML",
            "why.p1_desc": "Rekam jejak teruji dalam membangun model generatif (StyleGAN2-ADA, StyleGAN3, DCGAN) & CNN classifier dengan PyTorch & TensorFlow.",
            "why.p2_title": "Data Science & Analytics Pipeline",
            "why.p2_desc": "Keahlian teruji dalam query database SQL, analisis data eksploratif (EDA), dan pemodelan prediktif dengan Scikit-Learn, Pandas & NumPy.",
            "why.p3_title": "Kepemimpinan & Disiplin Eksekusi",
            "why.p3_desc": "Memimpin Divisi Beladiri di UKM Taekwondo UNSRI—mengelola jadwal latihan, event organisasi, dan koordinasi tim di bawah tekanan.",
            "skills.subtitle": "Matriks Kompetensi Interaktif",
            "skills.title": 'Keahlian Utama & <span class="text-gold">Tingkat Penguasaan</span>',
            "skills.desc": "Klik tab untuk menyaring keahlian teknis berdasarkan kategori AI, Data Science, dan Computer Vision.",
            "tabs.all": "Semua Keahlian",
            "tabs.ai": "AI & Deep Learning",
            "tabs.ds": "Data Science & SQL",
            "tabs.cv": "Computer Vision & Tools",
            "sp.pytorch": "Pelatihan model Deep Learning, fungsi kerugian, custom head CNN, dan optimasi GPU.",
            "sp.stylegan": "Pelatihan StyleGAN bertahap, augmentasi adaptif ADA, dan analisis konvergensi FID.",
            "sp.densenet": "Transfer learning, ekstraksi fitur, binary cross-entropy, dan validasi matriks konfusi.",
            "sp.python": "OOP, pembuatan skrip otomatisasi, utility harvest data, dan pipeline pengolahan data.",
            "sp.sql": "Relational query, agregasi data, join tabel, ekstraksi data, dan sertifikasi SQL Dicoding.",
            "sp.pandas": "Pembersihan data, EDA, scaling fitur, metrik evaluasi, dan analisis statistik.",
            "sp.opencv": "Resizing citra, transformasi kanal warna, pipeline augmentasi, dan integrasi PIL/pyspng.",
            "sp.git": "Strategi branching, pengamanan data via .gitignore, GitHub Pages, dan version control.",
            "sp.plotlib": "Visualisasi kurva pelatihan otomatis, chart interaktif, dan grafik kualitas publikasi.",
            "projects.subtitle": "Studi Kasus Interaktif",
            "projects.title": 'Proyek Unggulan & <span class="text-gold">Insight Recruiter</span>',
            "projects.desc": "Klik pada kartu proyek untuk membuka modal studi kasus interaktif yang berisi tantangan teknis, solusi, dan contoh kode.",
            "projects.flagship_badge": "Studi Kasus Unggulan",
            "cs1.title": "Augmentasi Citra Medis Generative AI (StyleGAN2-ADA & DenseNet121)",
            "cs1.desc": "Membandingkan StyleGAN2-ADA, StyleGAN3, dan DCGAN pada citra serviks VIA klinis (FID terbaik 49.62), meningkatkan akurasi DenseNet121 ke 97.00% (50:50) dan 95.00% pada substitusi sintetis 100%.",
            "cs2.title": "Sistem Deteksi URL Phishing Real-Time (630K URL • Random Forest)",
            "cs2.desc": "Membangun pipeline Machine Learning keamanan siber untuk Dinas Kominfo pada 630.071 URL (akurasi uji 89.0%), lengkap dengan 9 fitur leksikal URL, FastAPI, dan dashboard Streamlit.",
            "cs3.title": "Autonomous Market Research Agent (ReAct & Cosine Vector Store)",
            "cs3.desc": "Merancang agen ReAct otonom multi-langkah dengan tool pencarian web, memori vektor kemiripan kosinus NumPy, dan pembuatan laporan eksekutif terstruktur.",
            "cs4.title": "Python AI Core Toolkit (TDD Struktur Data, NumPy & Pandas)",
            "cs4.desc": "Monorepo fundamental rekayasa perangkat lunak & AI yang mengimplementasikan struktur data O(1), matriks kemiripan kosinus NumPy tervektorisasi, dan pipeline ETL Pandas teruji pytest.",
            "btn.click_insights": "Klik untuk Insight Recruiter →",
            "exp.subtitle": "Pengalaman & Dampak",
            "exp.title": 'Pengalaman Kerja & <span class="text-gold">Peran Kepemimpinan</span>',
            "exp.r1_badge": "Riset AI",
            "exp.r1_role": "Peneliti & Developer AI",
            "exp.r1_bullets": '<li>Melakukan benchmarking StyleGAN2-ADA, StyleGAN3, dan DCGAN di bawah bimbingan Prof. Ir. Siti Nurmaini, M.T., Ph.D. untuk mengatasi kelangkaan citra serviks VIA.</li><li>Mencapai skor FID terbaik 49.62 (StyleGAN2-ADA), meningkatkan akurasi klasifikasi DenseNet121 menjadi 97.00% (50:50), serta membuktikan akurasi 95.00% dengan presisi positif 100% pada substitusi sintetis penuh.</li><li>Mempublikasikan CLI inferensi open-source dan automated test suite di GitHub.</li>',
            "exp.r2_badge": "Kepemimpinan",
            "exp.r2_role": "Ketua Divisi Beladiri & Anggota Pengurus",
            "exp.r2_bullets": '<li>Memimpin Divisi Beladiri UKM Taekwondo UNSRI serta meraih Juara III Kelas Under 70 Kg Putra pada PORKAB IV Ogan Ilir 2023.</li><li>Mengelola tanggung jawab kepanitiaan event organisasi dan koordinasi tim di bawah tekanan.</li>',
            "exp.r3_badge": "Magang",
            "exp.r3_role": "Web Developer & Applied ML Intern",
            "exp.r3_bullets": '<li>Mengembangkan dan menyempurnakan modul antarmuka aplikasi web internal menggunakan HTML, CSS, PHP, dan JavaScript (Predikat Nilai A / 89,83).</li><li>Membangun prototipe deteksi tautan phishing berbasis Random Forest pada 630.071 URL (akurasi uji 89,0%) untuk mendukung literasi keamanan digital publik.</li>',
            "certs.subtitle": "Kredensial Terverifikasi",
            "certs.title": 'Sertifikasi & <span class="text-gold">Pembelajaran Berkelanjutan</span>',
            "contact.subtitle": "Hubungi Saya",
            "contact.title": 'Siap memberi nilai tambah bagi <span class="text-gold">tim teknologi Anda</span>.',
            "contact.desc": 'Aktif membuka peluang untuk posisi <strong>AI Engineer, Data Scientist, Computer Vision Specialist, Machine Learning Engineer, Data Analyst,</strong> dan <strong>AI Developer</strong>. Terbuka untuk purna waktu, relokasi, maupun kerja remote.',
            "contact.email_label": "Alamat Email",
            "contact.phone_label": "Telepon / WhatsApp",
            "contact.linkedin_label": "Profil LinkedIn",
            "contact.github_label": "Akun GitHub",
            "contact.discord_label": "Akun Discord",
            "form.title": "Kirim Pesan Recruiter",
            "form.name_label": "Nama Anda / Perusahaan",
            "form.email_label": "Email Kerja",
            "form.msg_label": "Pesan / Detail Peluang Kerja",
            "form.btn_send": "Kirim Pesan Langsung",
            "footer.tag": "M. Athallah Rafif Aldera | AI Engineer & Data Scientist Candidate"
        },
        zh: {
            "nav.home": "首页",
            "nav.about": "关于我",
            "nav.skills": "核心能力",
            "nav.projects": "精选项目",
            "nav.experience": "经历与领导力",
            "nav.certifications": "专业认证",
            "btn.quick_cv": "简历速览",
            "btn.hire": "招聘 / 联系",
            "hero.open_to_work": "随时到岗 (Open to Work)",
            "hero.tag": "计算机系统毕业生 | AI & 数据科学候选人",
            "hero.title": '你好，我是 <span class="text-gold">M. Athallah Rafif Aldera.</span><br><span class="title-sub">AI 工程师 & 数据科学家</span>',
            "hero.desc": '毕业于<strong>斯里维加亚大学（Sriwijaya University）</strong>计算机系统专业，专注于<strong>生成式人工智能（Generative AI）、计算机视觉（Computer Vision）与数据分析（Data Analytics）</strong>。具备高效的<em>深度专注执行节奏</em>，能够快速、精准地解决复杂技术难题并创造业务价值。',
            "btn.get_in_touch": "联系我",
            "btn.explore_case_studies": "浏览项目案例",
            "btn.copy_email": "复制邮箱",
            "hero.target_roles_label": "目标岗位",
            "hero.target_roles_val": "AI工程师 | 数据科学家 | 计算机视觉专家 | 机器学习工程师 | 数据分析师 | AI开发者",
            "hero.location_label": "工作地点与状态",
            "hero.location_val": "印尼巨港 / 支持异地入职与远程办公 (Remote Ready)",
            "hero.contact_label": "直接联系方式",
            "metrics.acc": "DenseNet121 分类准确率",
            "metrics.fid": "StyleGAN2-ADA 最佳 FID 指标",
            "metrics.certs": "Google Cloud & Dicoding 专业认证",
            "metrics.degree": "计算机系统学士学位",
            "about.subtitle": "候选人概述",
            "about.title": '我是谁 & <span class="text-gold">我能为团队带来的价值</span>',
            "about.card_title": "职业简介",
            "about.text": '<p>我是斯里维加亚大学（UNSRI）计算机系统专业毕业生，立志成为一名专业的 <strong>AI工程师、数据科学家与技术创新者</strong>。我的核心技术领域涵盖机器学习算法、深度学习（生成式AI与计算机视觉）以及数据分析。</p><p>我具备<strong>高度专注（Hyper-Focus）</strong>的工作节奏——能够快速掌握新技术，高效解决复杂技术难题，并将项目从概念阶段推进至落地应用。随时准备为贵公司创造切实的业务价值。</p>',
            "tags.ai_pipelines": "端到端 AI 端流水线",
            "tags.data_analytics": "数据科学与数据分析",
            "tags.cv_spec": "计算机视觉专家",
            "tags.hyper_focus": "快速学习与深度专注",
            "why.title": "为什么选择招聘我？",
            "why.p1_title": "AI/ML 技术精通",
            "why.p1_desc": "在 PyTorch & TensorFlow 框架下开发 StyleGAN2-ADA、StyleGAN3、DCGAN 生成模型与 CNN 分类器方面拥有扎实的技术实录。",
            "why.p2_title": "数据科学与分析流水线",
            "why.p2_desc": "具备熟练的 SQL 数据库查询、探索性数据分析 (EDA) 以及使用 Pandas、NumPy 与 Scikit-Learn 进行预测建模的能力。",
            "why.p3_title": "领导力与执行纪律",
            "why.p3_desc": "曾担任 UNSRI 跆拳道协会武术部负责人——管理训练计划、赛事筹备以及在压力下的团队协作。",
            "skills.subtitle": "交互式能力矩阵",
            "skills.title": '核心能力 & <span class="text-gold">技术熟练度</span>',
            "skills.desc": "点击标签过滤技术栈，查看 AI工程、数据科学与计算机视觉领域的具体熟练度指标。",
            "tabs.all": "全部能力",
            "tabs.ai": "AI 与深度学习",
            "tabs.ds": "数据科学与 SQL",
            "tabs.cv": "计算机视觉与工具",
            "sp.pytorch": "深度学习模型训练、损失函数设计、自定义 CNN 网络头与 GPU 硬件加速优化。",
            "sp.stylegan": "多阶段 StyleGAN 模型训练、ADA 自适应数据增强与 FID 评估收敛分析。",
            "sp.densenet": "迁移学习、特征提取、二元交叉熵损失以及混淆矩阵验证评估。",
            "sp.python": "面向对象编程、自动化脚本、数据采集工具与端到端数据处理流水线。",
            "sp.sql": "关系型数据库查询、复杂数据聚合、多表联结、数据提取及 Dicoding SQL 认证。",
            "sp.pandas": "数据清洗、探索性数据分析 (EDA)、特征缩放、评估指标计算与统计分析。",
            "sp.opencv": "图像尺寸调整、通道变换、数据增强流水线以及 PIL/pyspng 图像库集成。",
            "sp.git": " Git 分支策略、.gitignore 数据安全管理、GitHub Pages 部署与版本控制。",
            "sp.plotlib": "自动化图表生成、多阶段训练曲线绘制与出版级高质量数据图表呈现。",
            "projects.subtitle": "交互式项目案例",
            "projects.title": '精选项目 & <span class="text-gold">招聘官深度解析</span>',
            "projects.desc": "点击任意项目卡片打开交互式案例弹窗，查看技术难点解析、解决方案与核心代码预览。",
            "projects.flagship_badge": "旗舰精选案例",
            "cs1.title": "生成式 AI 医疗图像增强 (StyleGAN2-ADA & DenseNet121)",
            "cs1.desc": "对比 StyleGAN2-ADA、StyleGAN3 与 DCGAN 在临床宫颈图像上的表现（最佳 FID 49.62），将 DenseNet121 准确率提升至 97.00%（50:50 混合）及 95.00%（100% 合成图像替换）。",
            "cs2.title": "实时钓鱼网址检测系统 (63万 URL • 随机森林)",
            "cs2.desc": "为通信与信息部 (Diskominfo) 构建基于 630,071 条 URL 的网络安全机器学习流水线（测试准确率 89.0%），集成 9 项词法特征、FastAPI 与 Streamlit。",
            "cs3.title": "自主市场研究智能体 (ReAct & 余弦向量存储)",
            "cs3.desc": "构建具备网页搜索与抓取工具调用、NumPy 余弦相似度向量记忆及结构化高管报告生成的多步 ReAct 智能体。",
            "cs4.title": "Python AI 核心工具包 (TDD 数据结构、NumPy & Pandas)",
            "cs4.desc": "模块化软件工程与 AI 基础代码库，包含 O(1) 数据结构、向量化 NumPy 余弦相似度矩阵与 Pandas 特征工程流水线（100% 通过 pytest）。",
            "btn.click_insights": "点击查看招聘官深度解析 →",
            "exp.subtitle": "履历与成就",
            "exp.title": '工作经历 & <span class="text-gold">领导力角色</span>',
            "exp.r1_badge": "AI 前沿研究",
            "exp.r1_role": "本科 AI 研究员与开发者",
            "exp.r1_bullets": '<li>在 Prof. Ir. Siti Nurmaini, M.T., Ph.D. 指导下对比 StyleGAN2-ADA、StyleGAN3 与 DCGAN 在医疗 AI 数据稀缺场景下的表现。</li><li>取得 49.62 的最佳 FID 指标，将 DenseNet121 分类准确率提升至 97.00%（并在 100% 合成数据替换下取得 95.00% 准确率与 100% 阳性精确率）。</li><li>在 GitHub 发布可复现的推理 CLI 与自动化测试套件。</li>',
            "exp.r2_badge": "团队领导力",
            "exp.r2_role": "武术部负责人与委员会成员",
            "exp.r2_bullets": '<li>负责 UNSRI 跆拳道协会武术部门并荣获 2023 年第四届县运会 (PORKAB IV) 男子 70 公斤级以下季军。</li><li>组织团队活动，培养团队协作能力与高压下的执行纪律。</li>',
            "exp.r3_badge": "实习经历",
            "exp.r3_role": "Web 开发与机器学习应用实习生",
            "exp.r3_bullets": '<li>使用 HTML、CSS、PHP 与 JavaScript 开发并优化政府内部 Web 应用模块（实习考核成绩 A / 89.83）。</li><li>基于 630,071 条 URL 训练随机森林钓鱼链接检测原型（准确率 89.0%）。</li>',
            "certs.subtitle": "权威认证",
            "certs.title": '专业认证 & <span class="text-gold">持续学习</span>',
            "contact.subtitle": "联系我",
            "contact.title": '随时准备为您的<span class="text-gold">技术团队</span>创造价值',
            "contact.desc": '积极寻找 **AI工程师、数据科学家、计算机视觉专家、机器学习工程师、数据分析师** 与 **AI开发者** 等岗位。支持全职、异地入职与远程办公 (Remote Ready)。',
            "contact.email_label": "电子邮箱",
            "contact.phone_label": "电话 / WhatsApp",
            "contact.linkedin_label": "LinkedIn 领英主页",
            "contact.github_label": "GitHub 主页",
            "contact.discord_label": "Discord 账号",
            "form.title": "发送招聘留言",
            "form.name_label": "您的姓名 / 公司名称",
            "form.email_label": "工作邮箱",
            "form.msg_label": "留言内容 / 岗位详情",
            "form.btn_send": "直接发送留言",
            "footer.tag": "M. Athallah Rafif Aldera | AI 工程师 & 数据科学家候选人"
        }
    };

    let currentLang = localStorage.getItem('portfolio_lang') || 'en';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        // Update active class on language buttons
        const langBtns = document.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // Initialize Language Switcher Buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const chosenLang = btn.getAttribute('data-lang');
            setLanguage(chosenLang);
            showToast(chosenLang === 'zh' ? '已切换至 简体中文' : chosenLang === 'id' ? 'Bahasa Indonesia diaktifkan' : 'Switched to English');
        });
    });

    // Apply default language on load
    setLanguage(currentLang);

    // 2. Interactive Diagonal Floating Clover Leaf Particle Canvas Background
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let clovers = [];
        const cloverCount = 28;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Helper function to draw 4-leaf clover pattern (Daun Semanggi Presisi Tanpa Seam/Double Line)
        function drawClover(ctx, x, y, size, rotation, color, alpha) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rotation);
            ctx.globalAlpha = alpha;

            // 1. Stem - single clean stroke extending down from lower leaf junction
            ctx.strokeStyle = color;
            ctx.lineWidth = Math.max(1.2, size * 0.12);
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(0, size * 0.35);
            ctx.quadraticCurveTo(size * 0.35, size * 1.05, size * 0.18, size * 1.65);
            ctx.stroke();

            // 2. 4 Leaves - solid filled hearts with NO stroke lines inside
            ctx.fillStyle = color;
            for (let i = 0; i < 4; i++) {
                ctx.save();
                ctx.rotate((i * Math.PI / 2) + (Math.PI / 4));
                ctx.beginPath();
                let r = size;
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-r * 0.6, -r * 0.6, -r * 0.8, -r * 1.25, 0, -r * 1.35);
                ctx.bezierCurveTo(r * 0.8, -r * 1.25, r * 0.6, -r * 0.6, 0, 0);
                ctx.fill();
                ctx.restore();
            }

            ctx.restore();
        }

        class CloverParticle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.size = Math.random() * 12 + 10;
                this.speed = Math.random() * 0.75 + 0.35;
                this.angle = Math.PI / 4;
                this.dx = Math.cos(this.angle) * this.speed;
                this.dy = Math.sin(this.angle) * this.speed;

                if (initial) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                } else {
                    if (Math.random() > 0.5) {
                        this.x = -50;
                        this.y = Math.random() * canvas.height;
                    } else {
                        this.x = Math.random() * canvas.width;
                        this.y = -50;
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

                if (this.x > canvas.width + 60 || this.y > canvas.height + 60) {
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

    // 3. Navbar Scroll Effect & Active Section Tracking
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

    // 4. Interactive Skill Matrix Filter Tabs
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

    // 5. Interactive Case Study Modal Viewer
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
                    <li><strong>Scenario B (100% Synthetic Substitution):</strong> Achieved <strong>95.00% test accuracy</strong>, <strong>96% F1-score</strong>, and <strong>100.00% positive precision & specificity</strong> using purely synthetic abnormal training samples.</li>
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
            title: "Real-Time Phishing URL Detection System (630,071 URLs • Random Forest)",
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

    // 6. Email Copy & Quick CV Buttons
    const btnCopyEmail = document.getElementById('btn-copy-email-hero');
    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', () => {
            navigator.clipboard.writeText('mathallahrafifaldera@gmail.com');
            showToast(currentLang === 'zh' ? '已将邮箱地址复制到剪贴板！' : currentLang === 'id' ? 'Alamat email berhasil disalin!' : 'Email address copied to clipboard!');
        });
    }

    const btnQuickCV = document.getElementById('btn-quick-cv');
    if (btnQuickCV) {
        btnQuickCV.addEventListener('click', () => {
            showToast(currentLang === 'zh' ? '正在打开简历概要...' : currentLang === 'id' ? 'Membuka Ringkasan CV...' : 'Opening Resume Summary...');
            window.location.href = '#about';
        });
    }

    // 7. Contact Form Real Email Dispatch
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const messageInput = document.getElementById('message').value;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';
            submitBtn.disabled = true;

            // Form Data Payload for Real Email Dispatch
            const formData = new FormData(contactForm);

            fetch('https://formspree.io/f/xvovbkgp', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent to Gmail!';
                submitBtn.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
                submitBtn.style.color = '#fff';

                showToast(currentLang === 'zh' ? `感谢 ${nameInput}，您的留言已成功发送至 Athallah 的邮箱！` : currentLang === 'id' ? `Terima kasih ${nameInput}, pesan Anda telah terkirim ke Gmail Athallah!` : `Thank you ${nameInput}, your message has been sent directly to Athallah's Gmail!`);

                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 4000);
            }).catch(error => {
                // Direct Mailto Fallback if network blocks Formspree
                const mailtoSubject = encodeURIComponent(`[Portfolio Recruiter Inquiry] From: ${nameInput}`);
                const mailtoBody = encodeURIComponent(`Recruiter Name: ${nameInput}\nRecruiter Work Email: ${emailInput}\n\nMessage:\n${messageInput}`);
                window.location.href = `mailto:mathallahrafifaldera@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                showToast(currentLang === 'zh' ? '已通过默认邮件应用准备向 Athallah 发送邮件！' : currentLang === 'id' ? 'Membuka aplikasi email untuk mengirim ke Gmail Athallah!' : 'Opening email client to send message to Athallah\'s Gmail!');
            });
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

    // 8. Ambient Meteors / Falling Stars Spawner (Alfari-Inspired)
    function initMeteors() {
        const container = document.getElementById('meteor-container');
        if (!container) return;

        const meteorConfigs = [
            { top: '-10%', left: '15%', duration: '9s', delay: '-2s' },
            { top: '-15%', left: '38%', duration: '11s', delay: '-7s' },
            { top: '10%', left: '-8%', duration: '10s', delay: '-4s' },
            { top: '25%', left: '5%', duration: '12s', delay: '-9s' },
            { top: '-12%', left: '58%', duration: '8.5s', delay: '-1s' },
            { top: '-5%', left: '80%', duration: '12s', delay: '-6s' },
            { top: '8%', left: '22%', duration: '10.5s', delay: '-3s' },
            { top: '20%', left: '-5%', duration: '9.5s', delay: '-8s' },
            { top: '-8%', left: '92%', duration: '13s', delay: '-11s' },
            { top: '32%', left: '-10%', duration: '11s', delay: '-5s' },
            { top: '-14%', left: '48%', duration: '8s', delay: '-4s' },
            { top: '5%', left: '3%', duration: '12.5s', delay: '-1.5s' },
            { top: '16%', left: '32%', duration: '10s', delay: '-8.5s' },
            { top: '-4%', left: '68%', duration: '9s', delay: '-3.5s' }
        ];

        meteorConfigs.forEach(cfg => {
            const m = document.createElement('span');
            m.className = 'meteor';
            m.style.top = cfg.top;
            m.style.left = cfg.left;
            m.style.animationDuration = cfg.duration;
            m.style.animationDelay = cfg.delay;
            container.appendChild(m);
        });
    }
    initMeteors();

    // 9. 3D Interactive Lanyard with Elastic Canvas Rope (Real Stretch Physics)
    function init3DLanyard() {
        const wrapper = document.getElementById('lanyard-wrapper');
        const canvas = document.getElementById('lanyard-rope-canvas');
        const card = document.getElementById('lanyard-card');
        const glare = document.getElementById('badge-glare');
        if (!wrapper || !canvas || !card) return;

        const ctx = canvas.getContext('2d');

        // Physics State: Position and Velocity (Spring Simulation)
        let currentX = 0, currentY = 0;
        let targetX = 0, targetY = 0;
        let vx = 0, vy = 0;

        // Card Rotations (3D Tilt & Angular Inertia)
        let currentRotX = 0, currentRotY = 0, currentRotZ = 0;
        let targetRotX = 0, targetRotY = 0, targetRotZ = 0;
        let vRotX = 0, vRotY = 0, vRotZ = 0;

        // Dragging & Interaction State
        let isDragging = false;
        let dragPointerStartX = 0, dragPointerStartY = 0;
        let dragInitialX = 0, dragInitialY = 0;
        let isHovered = false;
        let idleTime = 0;

        // Spring Constants (tuned for authentic rubber/fabric elastic snap & melar)
        const springK = 0.082; // Hooke's spring constant
        const damping = 0.85;  // Friction damping

        // High-DPI Canvas Resizing
        function resizeCanvas() {
            const rect = wrapper.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Idle Motion (Gentle breathing pendulum swing)
        function updateIdle() {
            if (!isDragging && !isHovered) {
                idleTime += 0.032;
                targetX = Math.sin(idleTime) * 14;
                targetY = Math.cos(idleTime * 0.7) * 4;
                targetRotZ = (targetX / 14) * 6;
                targetRotY = (targetX / 14) * 7;
                targetRotX = (targetY / 4) * 2;
            }
        }

        // Draw Canvas Elastic Rope & Hardware Assembly (Tali -> Kotak Penjepit -> Penyangga PVC -> Kartu)
        function drawLanyardRope() {
            const rect = wrapper.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Anchor point (top center suspension ring)
            const anchorX = rect.width / 2;
            const anchorY = 10;

            // Target connection point: directly at the badge slot hole!
            const slotX = (rect.width / 2) + currentX;
            const slotY = 85 + currentY + 14; // 85px margin-top + 14px to slot hole

            // Hardware assembly:
            // - Penyangga PVC: slotY - 14 to slotY + 2
            // - Kotak Penjepit: slotY - 28 to slotY - 14
            // - Tali Strap masuk ke bagian atas kotak penjepit: slotY - 26
            const strapTargetX = slotX;
            const strapTargetY = slotY - 26;

            // Vector between top anchor and clamp top
            const dx = strapTargetX - anchorX;
            const dy = strapTargetY - anchorY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const naturalLen = 65; // Natural resting distance

            // STRETCH RATIO ("Melar"): as dist increases, stretch factor increases!
            const stretch = Math.max(1, dist / naturalLen);

            // POISSON CONTRACTION: Strap gets slightly narrower when stretched!
            const baseWidth = 24;
            const strapWidth = Math.max(14, baseWidth / Math.sqrt(stretch));

            // Dynamic Bezier Control Point (Catenary curve sag due to gravity)
            const sagFactor = Math.max(2, (naturalLen / (dist + 1)) * 16);
            const ctrlX = anchorX + (dx * 0.45);
            const ctrlY = anchorY + (dy * 0.5) + sagFactor;

            // --- A. Draw Top Suspension Ring (Gantungan Ring Kecil di Atas Layar) ---
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetY = 2;
            const topRingGrad = ctx.createLinearGradient(anchorX - 9, 0, anchorX + 9, 0);
            topRingGrad.addColorStop(0, '#666');
            topRingGrad.addColorStop(0.3, '#e5e5e5');
            topRingGrad.addColorStop(0.7, '#ffffff');
            topRingGrad.addColorStop(1, '#555');
            ctx.strokeStyle = topRingGrad;
            ctx.lineWidth = 3.2;
            ctx.beginPath();
            ctx.arc(anchorX, 9, 8, 0, Math.PI * 2);
            ctx.stroke();

            // Inner mounting rivet
            ctx.fillStyle = '#c5a059';
            ctx.beginPath();
            ctx.arc(anchorX, 9, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // --- B. Draw Elastic Stretchy Lanyard Strap (Satin Ribbon) ---
            ctx.save();
            // Drop shadow behind strap
            ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetY = 4;

            // Strap base curve: enters directly inside the top of the Clamp Box
            ctx.beginPath();
            ctx.moveTo(anchorX, anchorY);
            ctx.quadraticCurveTo(ctrlX, ctrlY, strapTargetX, strapTargetY);
            ctx.lineWidth = strapWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Red/Gold Woven Gradient along the strap
            const strapGrad = ctx.createLinearGradient(anchorX, anchorY, strapTargetX, strapTargetY);
            strapGrad.addColorStop(0, '#5a0809');
            strapGrad.addColorStop(0.25, '#7A0C0D');
            strapGrad.addColorStop(0.5, '#4a0607');
            strapGrad.addColorStop(0.75, '#7A0C0D');
            strapGrad.addColorStop(1, '#660a0b');
            ctx.strokeStyle = strapGrad;
            ctx.stroke();

            // Gold Border Stripes on the strap edges (Stretches with width!)
            ctx.shadowColor = 'transparent';
            ctx.beginPath();
            ctx.moveTo(anchorX, anchorY);
            ctx.quadraticCurveTo(ctrlX, ctrlY, strapTargetX, strapTargetY);
            ctx.lineWidth = Math.max(1.5, 2.5 / Math.sqrt(stretch));
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.85)';
            ctx.stroke();
            ctx.restore();

            // --- C. Draw Separated Hardware Assembly: Penyangga PVC + Kotak Penjepit ---
            // Tangent angle along the rope at the clamp connection:
            const tangentAngle = Math.atan2(strapTargetY - ctrlY, strapTargetX - ctrlX);
            const localAngle = tangentAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(slotX, slotY);
            ctx.rotate(localAngle); // Orient hardware with rope tension vector

            // 1. BAGIAN PENYANGGA (White / Translucent PVC Snap Strap between Clamp and Card)
            // Loops from beneath clamp box (y = -15) through the slot hole of the card (y = 2)
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.35)';
            ctx.shadowBlur = 4;
            ctx.shadowOffsetY = 1;

            ctx.fillStyle = 'rgba(240, 243, 246, 0.94)';
            ctx.strokeStyle = 'rgba(195, 205, 215, 0.85)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-5.5, -15, 11, 18, 2);
            } else {
                ctx.rect(-5.5, -15, 11, 18);
            }
            ctx.fill();
            ctx.stroke();

            // Silver Snap Button (Kancing penjepit pada penyangga PVC)
            const snapGrad = ctx.createRadialGradient(-0.6, -6.6, 0.4, 0, -6, 4);
            snapGrad.addColorStop(0, '#ffffff');
            snapGrad.addColorStop(0.4, '#d8dce0');
            snapGrad.addColorStop(0.8, '#a2a8af');
            snapGrad.addColorStop(1, '#686e74');
            ctx.fillStyle = snapGrad;
            ctx.strokeStyle = '#444';
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.arc(0, -6, 3.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Inner Rivet Pin Dot
            ctx.fillStyle = '#222';
            ctx.beginPath();
            ctx.arc(0, -6, 1.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // 2. KOTAK PENJEPIT TALI (Metal Clamp Stopper Box, seperti di foto produk)
            // Sits right at the strap end (from y = -29 to y = -14), gripping both ribbon and PVC strap
            ctx.save();
            ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetY = 2;

            const clampGrad = ctx.createLinearGradient(-12, 0, 12, 0);
            clampGrad.addColorStop(0, '#151518');
            clampGrad.addColorStop(0.25, '#35353d');
            clampGrad.addColorStop(0.55, '#62626e');
            clampGrad.addColorStop(0.8, '#35353d');
            clampGrad.addColorStop(1, '#151518');
            ctx.fillStyle = clampGrad;
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.75)'; // Luxury gold bevel border
            ctx.lineWidth = 1;
            ctx.beginPath();
            if (ctx.roundRect) {
                ctx.roundRect(-12, -29, 24, 15, 2.5);
            } else {
                ctx.rect(-12, -29, 24, 15);
            }
            ctx.fill();
            ctx.stroke();

            // Clamp Box Decorative Recessed Groove / Slot Line
            ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
            ctx.fillRect(-8, -23, 16, 3);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 0.5;
            ctx.strokeRect(-8, -23, 16, 3);

            // Metal specular highlights at top & bottom clamp lip
            ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
            ctx.fillRect(-10, -28, 20, 1);
            ctx.fillRect(-10, -15.5, 20, 1);
            ctx.restore();

            ctx.restore();
        }

        // Main Animation & Render Loop
        function animate() {
            updateIdle();

            // Spring Physics on Position: F = -k * (x - target)
            const fx = (targetX - currentX) * springK;
            const fy = (targetY - currentY) * springK;
            vx = (vx + fx) * damping;
            vy = (vy + fy) * damping;
            currentX += vx;
            currentY += vy;

            // Spring Physics on 3D Rotations
            const fRotX = (targetRotX - currentRotX) * springK * 1.2;
            const fRotY = (targetRotY - currentRotY) * springK * 1.2;
            const fRotZ = (targetRotZ - currentRotZ) * springK * 1.2;
            vRotX = (vRotX + fRotX) * damping;
            vRotY = (vRotY + fRotY) * damping;
            vRotZ = (vRotZ + fRotZ) * damping;
            currentRotX += vRotX;
            currentRotY += vRotY;
            currentRotZ += vRotZ;

            // 1. Transform the Card in 3D Space
            card.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) rotateZ(${currentRotZ.toFixed(2)}deg)`;

            // 2. Holographic Glare Shimmer
            if (glare) {
                const glareX = 50 + (currentRotY * 2.2);
                const glareY = 50 + (currentRotX * 2.2);
                glare.style.background = `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 215, 0, 0.2) 35%, transparent 70%)`;
            }

            // 3. Render Elastic Stretchy Rope & Metal Clip on Canvas
            drawLanyardRope();

            requestAnimationFrame(animate);
        }

        // --- Interaction Listeners ---
        wrapper.addEventListener('mouseenter', () => {
            isHovered = true;
        });

        wrapper.addEventListener('mouseleave', () => {
            isHovered = false;
            if (!isDragging) {
                targetX = 0;
                targetY = 0;
                targetRotX = 0;
                targetRotY = 0;
                targetRotZ = 0;
            }
        });

        wrapper.addEventListener('mousemove', (e) => {
            if (isDragging) return;
            const rect = wrapper.getBoundingClientRect();
            const relX = e.clientX - (rect.left + rect.width / 2);
            const relY = e.clientY - (rect.top + 85 + 200);

            // Subtle parallax tilt and stretch towards cursor
            targetX = Math.max(-35, Math.min(35, relX * 0.35));
            targetY = Math.max(-15, Math.min(40, relY * 0.25));
            targetRotY = Math.max(-20, Math.min(20, relX * 0.18));
            targetRotX = Math.max(-15, Math.min(15, -relY * 0.12));
            targetRotZ = (targetX / 35) * 12;
        });

        // Dragging & Stretching (Pointer / Touch)
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

            // Elastic drag: pull with rubber resistance & melar!
            targetX = Math.max(-120, Math.min(120, dragInitialX + dx));
            targetY = Math.max(-40, Math.min(140, dragInitialY + dy)); // Can stretch down up to +140px!

            // 3D Tilt responds to drag stretch
            targetRotZ = Math.max(-35, Math.min(35, (targetX / 120) * 32));
            targetRotY = Math.max(-28, Math.min(28, (targetX / 120) * 25));
            targetRotX = Math.max(-20, Math.min(20, -(targetY / 140) * 22));
        }

        function onDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            card.style.cursor = 'grab';
            // Snap back to natural position with spring elasticity!
            targetX = 0;
            targetY = 0;
            targetRotX = 0;
            targetRotY = 0;
            targetRotZ = 0;
        }

        card.addEventListener('mousedown', onDragStart);
        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);

        card.addEventListener('touchstart', onDragStart, { passive: true });
        window.addEventListener('touchmove', onDragMove, { passive: true });
        window.addEventListener('touchend', onDragEnd);

        requestAnimationFrame(animate);
    }
    init3DLanyard();

});
