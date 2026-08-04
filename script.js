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
            "cs1.desc": "Solved medical data scarcity by generating high-resolution synthetic cervical images, elevating DenseNet121 CNN classification accuracy from 82.5% to 91.2%.",
            "cs2.title": "Automated Data Analytics & Visualization Dashboard",
            "cs2.desc": "Engineered automated Python data-harvesting scripts and dynamic visualization dashboards to parse multi-stage experimental logs and model metrics.",
            "cs3.title": "Relational SQL Querying & Business Analytics Pipeline",
            "cs3.desc": "Engineered relational database queries, table aggregations, and data extraction pipelines for structured business logic analysis.",
            "cs4.title": "Generative Vision Baseline Exploration (DCGAN & WGAN-GP)",
            "cs4.desc": "Designed comparative Deep Convolutional GANs and Wasserstein GANs with Gradient Penalty for patch synthesis and stability evaluation.",
            "btn.click_insights": "Click for Recruiter Insights →",
            "exp.subtitle": "Track Record & Impact",
            "exp.title": 'Work Experience & <span class="text-gold">Leadership Roles</span>',
            "exp.r1_badge": "AI Research",
            "exp.r1_role": "Undergraduate AI Researcher & Developer",
            "exp.r1_bullets": '<li>Conducted comparative analysis of StyleGAN2-ADA vs StyleGAN3 to address data scarcity in medical AI.</li><li>Achieved peak FID score of 59.49 and elevated DenseNet121 classification accuracy to 91.2%.</li><li>Formulated clean, modular open-source repositories with strict data security standards.</li>',
            "exp.r2_badge": "Leadership",
            "exp.r2_role": "Committee Member & Martial Arts Division Lead",
            "exp.r2_bullets": '<li>Directed the Martial Arts Division, overseeing training schedules and member athletic development.</li><li>Managed committee responsibilities for organizational events, fostering teamwork, operational efficiency, and event coordination under pressure.</li>',
            "exp.r3_badge": "Internship",
            "exp.r3_role": "IT & Systems Intern",
            "exp.r3_bullets": '<li>Gained practical exposure to local government IT systems workflows and infrastructure maintenance.</li>',
            "certs.subtitle": "Verified Credentials",
            "certs.title": 'Certifications & <span class="text-gold">Continuous Learning</span>',
            "contact.subtitle": "Get In Touch",
            "contact.title": 'Ready to add value to your <span class="text-gold">tech team</span>.',
            "contact.desc": 'Actively seeking opportunities for <strong>AI Engineer, Data Scientist, Computer Vision Specialist, Machine Learning Engineer, Data Analyst,</strong> and <strong>AI Developer</strong> roles. Open for full-time, relocation, and remote positions.',
            "contact.email_label": "Email Address",
            "contact.phone_label": "Phone / WhatsApp",
            "contact.linkedin_label": "LinkedIn Profile",
            "contact.github_label": "GitHub Account",
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
            "cs1.desc": "Mengatasi kelangkaan data medis dengan menghasilkan citra serviks sintetis berkualitas tinggi, meningkatkan akurasi DenseNet121 dari 82.5% ke 91.2%.",
            "cs2.title": "Dashboard Analisis & Visualisasi Data Otomatis",
            "cs2.desc": "Merancang skrip otomatisasi Python dan dashboard visualisasi dinamis untuk mengolah log eksperimen dan metrik model.",
            "cs3.title": "Query SQL Relasional & Pipeline Analisis Bisnis",
            "cs3.desc": "Merancang query database relasional, agregasi tabel, dan pipeline ekstraksi data untuk analisis logika bisnis.",
            "cs4.title": "Eksplorasi Baseline Generative Vision (DCGAN & WGAN-GP)",
            "cs4.desc": "Merancang dan membandingkan model DCGAN dan WGAN-GP dengan Gradient Penalty untuk sintesis gambar dan evaluasi stabilitas.",
            "btn.click_insights": "Klik untuk Insight Recruiter →",
            "exp.subtitle": "Pengalaman & Dampak",
            "exp.title": 'Pengalaman Kerja & <span class="text-gold">Peran Kepemimpinan</span>',
            "exp.r1_badge": "Riset AI",
            "exp.r1_role": "Peneliti & Developer AI",
            "exp.r1_bullets": '<li>Melakukan analisis komparatif StyleGAN2-ADA vs StyleGAN3 untuk mengatasi kelangkaan data AI medis.</li><li>Mencapai skor FID terbaik 59.49 dan meningkatkan akurasi klasifikasi DenseNet121 menjadi 91.2%.</li><li>Menyusun repositori open-source modular dan memenuhi standar keamanan data.</li>',
            "exp.r2_badge": "Kepemimpinan",
            "exp.r2_role": "Ketua Divisi Beladiri & Anggota Pengurus",
            "exp.r2_bullets": '<li>Memimpin Divisi Beladiri UKM Taekwondo UNSRI, mengawasi program latihan dan perkembangan atlet.</li><li>Mengelola tanggung jawab panitia event organisasi, membina kerja sama tim dan efisiensi operasional.</li>',
            "exp.r3_badge": "Magang",
            "exp.r3_role": "Magang IT & Sistem Informasi",
            "exp.r3_bullets": '<li>Mendapatkan pengalaman praktis terkait alur kerja sistem IT pemerintah daerah dan perawatan infrastruktur.</li>',
            "certs.subtitle": "Kredensial Terverifikasi",
            "certs.title": 'Sertifikasi & <span class="text-gold">Pembelajaran Berkelanjutan</span>',
            "contact.subtitle": "Hubungi Saya",
            "contact.title": 'Siap memberi nilai tambah bagi <span class="text-gold">tim teknologi Anda</span>.',
            "contact.desc": 'Aktif membuka peluang untuk posisi <strong>AI Engineer, Data Scientist, Computer Vision Specialist, Machine Learning Engineer, Data Analyst,</strong> dan <strong>AI Developer</strong>. Terbuka untuk purna waktu, relokasi, maupun kerja remote.',
            "contact.email_label": "Alamat Email",
            "contact.phone_label": "Telepon / WhatsApp",
            "contact.linkedin_label": "Profil LinkedIn",
            "contact.github_label": "Akun GitHub",
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
            "cs1.desc": "通过生成高分辨率合成宫颈图像，解决医疗数据稀缺问题，将 DenseNet121 CNN 分类准确率从 82.5% 提升至 91.2%。",
            "cs2.title": "自动化数据分析与可视化仪表盘",
            "cs2.desc": "编写 Python 自动化数据采集脚本与动态可视化仪表盘，解析多阶段实验日志与模型收敛指标。",
            "cs3.title": "关系型 SQL 查询与业务分析流水线",
            "cs3.desc": "构建关系型数据库查询、数据聚合与数据提取流水线，进行结构化业务逻辑分析。",
            "cs4.title": "生成式视觉基线探索 (DCGAN & WGAN-GP)",
            "cs4.desc": "设计并对比 DCGAN 与带有梯度惩罚的 WGAN-GP 图像块生成模型，评估训练稳定性。",
            "btn.click_insights": "点击查看招聘官深度解析 →",
            "exp.subtitle": "履历与成就",
            "exp.title": '工作经历 & <span class="text-gold">领导力角色</span>',
            "exp.r1_badge": "AI 前沿研究",
            "exp.r1_role": "本科 AI 研究员与开发者",
            "exp.r1_bullets": '<li>深入对比 StyleGAN2-ADA 与 StyleGAN3 在医疗 AI 数据稀缺场景下的效果。</li><li>取得 59.49 的最佳 FID 指标，并将 DenseNet121 分类准确率提升至 91.2%。</li><li>构建符合高标准数据安全规范的模块化开源代码仓库。</li>',
            "exp.r2_badge": "团队领导力",
            "exp.r2_role": "武术部负责人与委员会成员",
            "exp.r2_bullets": '<li>负责 UNSRI 跆拳道协会武术部门，统筹训练计划与运动员竞技水平提升。</li><li>组织大型团队活动，培养团队协作能力、高执行效率与高压下的沟通调度能力。</li>',
            "exp.r3_badge": "实习经历",
            "exp.r3_role": "IT 与系统实习生",
            "exp.r3_bullets": '<li>参与地方政府 IT 系统工作流与网络基础设施日常运维。</li>',
            "certs.subtitle": "权威认证",
            "certs.title": '专业认证 & <span class="text-gold">持续学习</span>',
            "contact.subtitle": "联系我",
            "contact.title": '随时准备为您的<span class="text-gold">技术团队</span>创造价值',
            "contact.desc": '积极寻找 **AI工程师、数据科学家、计算机视觉专家、机器学习工程师、数据分析师** 与 **AI开发者** 等岗位。支持全职、异地入职与远程办公 (Remote Ready)。',
            "contact.email_label": "电子邮箱",
            "contact.phone_label": "电话 / WhatsApp",
            "contact.linkedin_label": "LinkedIn 领英主页",
            "contact.github_label": "GitHub 主页",
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
        dashboard: {
            tag: "Data Science & Visualization Pipeline",
            title: "Automated Data Analytics & Visualization Dashboard",
            body: `
                <h4>Technical Problem & Solution</h4>
                <p>Multi-stage deep learning experiments produce massive raw JSON metric logs. Manual tracking is slow and error-prone.</p>

                <h4>Implementation & Value-Add</h4>
                <ul>
                    <li>Engineered automated Python data-harvesting scripts to parse cumulative training metrics and FID scores.</li>
                    <li>Generated publication-ready statistical visualizations using Matplotlib & Seaborn.</li>
                    <li>Streamlined metric tracking and experiment convergence auditing.</li>
                </ul>
            `,
            link: "https://github.com/aral3000/cervical-cancer-stylegan2-densenet121"
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

    // 7. Contact Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)';
                submitBtn.style.color = '#fff';

                showToast(currentLang === 'zh' ? `感谢 ${nameInput}，您的留言已成功发送！` : currentLang === 'id' ? `Terima kasih ${nameInput}, pesan Anda telah terkirim!` : `Thank you ${nameInput}, your inquiry has been submitted!`);

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
