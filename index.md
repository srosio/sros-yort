---
layout: default
---

<!-- Hero Section -->
<section class="hero" id="home">
  <!-- Glitch overlay remains -->
  <div class="glitch-overlay"></div>
  <div class="container hero-content fade-up">
    <div class="hero-text">
      <!-- Glitch title effect remains -->
      <h1 class="glitch-title" data-text="SROS">Hi, I'm <span>Sros</span></h1>
      <p>
        Building Scalable Backend Solutions for Modern Digital Banking &amp; FinTech
      </p>
      <a href="#projects" class="btn-primary neon-btn">View My Work</a>
    </div>
    <!-- Hero image (the only one we keep) -->
    <div class="hero-img">
      <img
        src="/assets/profile.jpg"
        alt="Profile"
        class="profile-pic"
      />
    </div>
  </div>
  <!-- Cyber Wave SVG -->
  <div class="wave-container">
    <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path
        fill="#ff0080"
        fill-opacity="0.4"
        d="M0,96L30,112C60,128,120,160,180,186.7C240,213,300,235,360,213.3C420,192,480,128,540,133.3C600,139,660,213,720,229.3C780,245,840,203,900,170.7C960,139,1020,117,1080,128C1140,139,1200,181,1260,170.7C1320,160,1380,96,1410,64L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>

<!-- About Section -->
<section class="section about fade-up" id="about">
  <div class="container section-content">
    <div class="section-title">
      <h2>About Me</h2>
      <div class="underline"></div>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <p>
          I’m a Lead Java Backend Engineer with a passion for crafting
          scalable, secure, and innovative FinTech solutions. With expertise in
          microservices, team leadership, and system optimization, I help
          financial institutions evolve in a fast-paced digital landscape.
        </p>
      </div>
      <!-- Removed the about image entirely -->
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="section fade-up" id="skills">
  <div class="container section-content">
    <div class="section-title">
      <h2>Skills</h2>
      <div class="underline"></div>
    </div>
    <p class="contact-intro">
      Here are some core technologies and areas I specialize in:
    </p>
    <ul class="skills-list">
      <li>Java</li>
      <li>Spring Boot</li>
      <li>Microservices</li>
      <li>Performance Tuning</li>
      <li>System Architecture</li>
      <li>AWS</li>
      <li>Docker</li>
      <li>CI/CD Pipelines</li>
      <li>Git &amp; GitHub</li>
      <li>TDD &amp; Unit Testing</li>
    </ul>
  </div>
</section>

<!-- Projects Section -->
<section class="section projects fade-up" id="projects">
  <div class="container section-content">
    <div class="section-title">
      <h2>Projects</h2>
      <div class="underline"></div>
    </div>
    <div class="projects-grid">
      <!-- Removed project images; keep only text/descriptions. -->
      <div class="project-card neon-card">
        <div class="project-info">
          <h3>Digital Banking &amp; FinTech</h3>
          <p>
            Designed and implemented a scalable digital banking platform using
            Java and Spring Boot, enabling seamless transactions for millions
            of users.
          </p>
          <p><strong>Technologies:</strong> Java, Spring Boot, Microservices, AWS</p>
        </div>
      </div>
      <div class="project-card neon-card">
        <div class="project-info">
          <h3>Payment Gateway Integration</h3>
          <p>
            Developed a secure payment gateway integration for frictionless
            and reliable transactions.
          </p>
          <p><strong>Technologies:</strong> Java, REST APIs, Docker</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Experience Section (Progress Bars) -->
<section class="section fade-up" id="experience">
  <div class="container section-content">
    <div class="section-title">
      <h2>Experience</h2>
      <div class="underline"></div>
    </div>
    <div class="experience-list">
      <!-- Each experience item is now a progress bar with a label. -->
      <div class="experience-progress">
        <div class="exp-title">
          <strong>Lead Java Backend Engineer - Mbanq</strong>
          <span>Sep 2023 - Present · Phnom Penh, Cambodia</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:80%;">
            <span>Core Banking / Team Leadership (80%)</span>
          </div>
        </div>
      </div>

      <div class="experience-progress">
        <div class="exp-title">
          <strong>Senior Java Backend Engineer - Mbanq</strong>
          <span>Apr 2021 - Sep 2023 · Remote</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:70%;">
            <span>Performance &amp; Scalability (70%)</span>
          </div>
        </div>
      </div>

      <div class="experience-progress">
        <div class="exp-title">
          <strong>Software Engineer - Kim &amp; Lim Soft Co., Ltd.</strong>
          <span>Sep 2019 - Apr 2021 · Phnom Penh, Cambodia</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:60%;">
            <span>Security / R&amp;D Projects (60%)</span>
          </div>
        </div>
      </div>

      <div class="experience-progress">
        <div class="exp-title">
          <strong>Core Developer - TrueMoney Cambodia</strong>
          <span>Sep 2018 - Sep 2019 · Phnom Penh, Cambodia</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:50%;">
            <span>CORE APIs / Collaboration (50%)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="section fade-up" id="testimonials">
  <div class="container section-content">
    <div class="section-title">
      <h2>Testimonials</h2>
      <div class="underline"></div>
    </div>
    <div class="testimonial-list">
      <div class="testimonial-item neon-card">
        <h3>Sean Mengkong</h3>
        <p><em>Deputy Head of Digital Banking</em></p>
        <blockquote>
          "Sros is an outstanding backend Java developer with a deep
          understanding of frameworks like Spring, Hibernate, and microservices.
          His expertise in designing scalable systems and optimizing performance
          significantly contributed to our project's success."
        </blockquote>
      </div>
      <div class="testimonial-item neon-card">
        <h3>Chanheng SEANG</h3>
        <p><em>Lead Architect</em></p>
        <blockquote>
          "I had the pleasure of working with Yort Sros at Mbanq. He fosters a
          collaborative environment where team members can grow and learn, all
          while delivering high-quality, scalable solutions. His hands-on
          approach and leadership style drive outstanding technical results."
        </blockquote>
      </div>
    </div>
  </div>
</section>

<!-- Contact Section -->
<section class="section contact fade-up" id="contact">
  <div class="container section-content">
    <div class="section-title">
      <h2>Contact</h2>
      <div class="underline"></div>
    </div>
    <p class="contact-intro">
      Interested in collaborating or have a question? Drop me a message below!
    </p>
    <form action="#" class="contact-form">
      <div class="input-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
      ></textarea>
      <button type="submit" class="btn-primary neon-btn">Send Message</button>
    </form>
  </div>
</section>