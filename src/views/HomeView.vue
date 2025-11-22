<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emailjs from '@emailjs/browser'
// Import the config we created
import { emailConfig } from '@/config/emailjs'

// --- PARALLAX & SCROLL LOGIC ---
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// --- CONTACT FORM LOGIC (EmailJS) ---
const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSending = ref(false)
const emailStatus = ref(null) // 'success' | 'error' | null

const sendEmail = async () => {
  // Basic validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all fields.')
    return
  }

  isSending.value = true
  emailStatus.value = null

  try {
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_name: 'Marc',             // Your name (optional but good practice)
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message
    }

    // 1. Send Notification to YOU
    await emailjs.send(
        emailConfig.serviceId,
        emailConfig.adminTemplateId,
        templateParams,
        emailConfig.publicKey
    )

    // 2. Send Confirmation to USER
    await emailjs.send(
        emailConfig.serviceId,
        emailConfig.userTemplateId,
        templateParams,
        emailConfig.publicKey
    )

    // Success state
    emailStatus.value = 'success'
    form.value = { name: '', email: '', message: '' } // Clear form

  } catch (error) {
    console.error('Email failed to send:', error)
    emailStatus.value = 'error'
  } finally {
    isSending.value = false
  }
}
</script>

<template>
  <main class="home-page">

    <!-- 1. GLOBAL BACKGROUNDS (Fixed) -->
    <div class="aurora-container">
      <div class="aurora-layer layer-1"></div>
      <div class="aurora-layer layer-2"></div>
      <div class="aurora-layer layer-3"></div>
    </div>

    <!-- 2. PARALLAX SILHOUETTES (Fixed) -->
    <div
        class="silhouette mountains"
        :style="{ transform: `translateY(${Math.min(50, scrollY * 0.05)}px)` }"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="shape-svg">
        <path fill="#1A2E3B" fill-opacity="0.95" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div
        class="silhouette trees"
        :style="{ transform: `translateY(${Math.min(80, scrollY * 0.08)}px)` }"
    >
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="shape-svg">
        <path fill="#0F1C24" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>


    <!-- 3. SCROLLING CONTENT -->
    <div class="content-wrapper">

      <!-- HERO -->
      <section class="hero">
        <div class="logo-wrapper">
          <div class="brand-card">
            <img src="@/assets/norzenix-logo.png" alt="Norzenix Logo" class="main-logo" />
          </div>
        </div>
        <p class="lead-text">
          Norzenix combines Scandinavian functionality with Japanese craftsmanship
          to build digital experiences that last.
        </p>
      </section>

      <!-- FEATURED SHOWCASE (ID: projects) -->
      <section id="projects" class="showcase">
        <h2 class="section-title">Core Engagement</h2>

        <div class="project-highlight">
          <div class="highlight-content">
            <span class="project-year">2022 — Present</span>
            <h3>Property Management Platform</h3>
            <p>
              A 3-year tenure driving the full-stack evolution of a core business system.
              Responsible for bridging the gap between complex Java Spring Boot logic and
              intuitive Vue.js interfaces.
            </p>
            <div class="tags">
              <span class="tag">Vue.js</span>
              <span class="tag">Java Spring Boot</span>
              <span class="tag">MySQL</span>
              <!-- ADDED SKILLS HERE -->
              <span class="tag">Azure</span>
              <span class="tag">Git</span>
            </div>
            <router-link to="/project/property-management" class="cta-link">View Case Study &rarr;</router-link>
          </div>

          <!-- RIGHT SIDE: Dark Mode Data Visual -->
          <div class="highlight-visual dashboard-scene">
            <div class="dashboard-window">
              <div class="table-top-bar">
                <div class="table-title">Units/Residents</div>
                <div class="search-bar">Search...</div>
              </div>
              <div class="dash-table">
                <div class="table-row header">
                  <span class="col-unit">Unit ID</span>
                  <span class="col-res">Resident</span>
                  <span class="col-rent">Rent/m²</span>
                  <span class="col-stat">Status</span>
                </div>
                <div class="table-row">
                  <span class="col-unit">001-001</span>
                  <span class="col-res">Jensen, A.</span>
                  <span class="col-rent">1,200.00</span>
                  <span class="col-stat"><span class="status-dot red"></span></span>
                </div>
                <div class="table-row">
                  <span class="col-unit">001-002</span>
                  <span class="col-res text-muted">—</span>
                  <span class="col-rent">1,200.00</span>
                  <span class="col-stat"><span class="status-dot yellow"></span></span>
                </div>
                <div class="table-row">
                  <span class="col-unit">001-003</span>
                  <span class="col-res">Nielsen, P.</span>
                  <span class="col-rent">1,200.00</span>
                  <span class="col-stat"><span class="status-dot green"></span></span>
                </div>
                <div class="table-row">
                  <span class="col-unit">001-004</span>
                  <span class="col-res">Larsen, K.</span>
                  <span class="col-rent">1,200.00</span>
                  <span class="col-stat"><span class="status-dot green"></span></span>
                </div>
                <div class="table-row">
                  <span class="col-unit">001-005</span>
                  <span class="col-res">Hansen, T.</span>
                  <span class="col-rent">1,200.00</span>
                  <span class="col-stat"><span class="status-dot green"></span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="breakdown-grid">
          <div class="mini-card">
            <h4>Fullstack Integration</h4>
            <p>
              Architected seamless data flow between the Spring Boot backend and frontend,
              optimizing API structures for reliability and speed.
            </p>
          </div>
          <div class="mini-card">
            <h4>UX & Workflow</h4>
            <p>
              Translated complex property data into clean Vue.js interfaces, reducing
              operational friction for property managers.
            </p>
          </div>
          <div class="mini-card">
            <h4>Strategic Planning</h4>
            <p>
              Moved beyond coding to contribute to project roadmaps, identifying technical
              opportunities to align with business goals.
            </p>
          </div>
        </div>

      </section>

      <!-- ABOUT ME SECTION (ID: about) -->
      <section id="about" class="about-section">
        <div class="about-container">

          <!-- Left: The Story -->
          <div class="about-content">
            <h2 class="section-title">Beyond the Code</h2>
            <p class="bio-intro">
              I'm a Danish developer living in Tokyo. I got hooked on Japan years ago while studying how culture shapes everything from design to daily routines. Reading Hofstede's cultural dimensions opened my eyes to how differently we solve the same problems. Met my wife here, and eventually the regular visits turned into just... staying. I'm fascinated by the interplay between Scandinavian and Japanese approaches, and I believe here's a lot we can learn from each other.
            </p>

            <p class="bio-text">
              My journey into tech wasn't a straight line. It started with a childhood love for building things, which evolved
              into a passion for <strong>Interior Design</strong>. I believe a codebase, like a home, must be structurally sound (Backend)
              but also a joy to live in (Frontend).
              <br><br>
              I studied <strong>Marketing</strong> and <strong>UX Design</strong> before mastering web development, giving me a unique ability
              to see products from every angle: business, user, and engineering. I am fascinated by <strong>psychology</strong>,
              constantly analyzing <em>why</em> users behave the way they do, while striving to create supportive, empathetic environments for my team.
            </p>
          </div>

          <!-- Right: The Image Placeholder -->
          <div class="about-visual">
            <div class="profile-frame">
              <div class="profile-placeholder">
                <img src="@/assets/profile.jpg" alt="profile picture" class="bio-image" />
              </div>
              <!-- Decorative Elements -->
              <div class="deco-circle"></div>
              <div class="deco-square"></div>
            </div>
          </div>

        </div>

        <!-- Interests Grid (3 Columns) -->
        <div class="interests-full-container">
          <div class="interests-grid">
            <div class="interest-item">
              <span class="interest-icon">
                <i class="fas fa-layer-group"></i>
              </span>
              <h4>Digital Interior Design</h4>
              <p>
                Creating interfaces that feel furnished, not just built. Focusing on flow, light, and structure.
              </p>
            </div>
            <div class="interest-item">
              <span class="interest-icon">
                <i class="fas fa-brain"></i>
              </span>
              <h4>User Psychology</h4>
              <p>
                Understanding the human behind the screen to build intuitive, stress-free workflows.
              </p>
            </div>
            <div class="interest-item">
              <span class="interest-icon">
                <i class="fas fa-handshake"></i>
              </span>
              <h4>Team & Service</h4>
              <p>
                Fostering a collaborative culture where developers thrive and customers feel heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT SECTION (ID: contact) -->
      <section id="contact" class="contact-section">
        <div class="contact-container">
          <div class="contact-intro">
            <h2 class="contact-title">May I buy you a coffee?</h2>
            <p class="contact-text">
              Whether you have a complex project that needs architectural guidance or simply want to discuss
              the intersection of Scandinavian and Japanese design. I am always open for a chat.
            </p>
            <p class="contact-subtext">
              Available for in-person meetings in Tokyo or virtual calls worldwide.
            </p>
          </div>

          <form @submit.prevent="sendEmail" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="How should I address you?" required :disabled="isSending" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Where can I reach you?" required :disabled="isSending" />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="Tell me about your project or idea..." required :disabled="isSending"></textarea>
            </div>

            <button type="submit" class="send-btn" :disabled="isSending">
              <span v-if="!isSending">Send Message <i class="fas fa-paper-plane ml-2"></i></span>
              <span v-else>Sending...</span>
            </button>

            <!-- Success/Error Messages -->
            <p v-if="emailStatus === 'success'" class="status-msg success">
              Message sent successfully! I'll get back to you soon.
            </p>
            <p v-if="emailStatus === 'error'" class="status-msg error">
              Oops! Something went wrong. Please try again later.
            </p>
          </form>
        </div>

        <footer class="footer">
          &copy; 2025 Norzenix. Built with Vue 3.
        </footer>
      </section>

    </div>

  </main>
</template>

<style scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* --- SCROLL MARGIN FOR NAV LINKS --- */
section {
  scroll-margin-top: 100px;
}

/* --- SILHOUETTES & AURORA --- */
.silhouette {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
  will-change: transform;
}
.shape-svg {
  display: block;
  width: 100%;
  height: auto;
  min-height: 150px;
  max-height: 50vh;
}
.mountains { z-index: -2; bottom: -50px; opacity: 0.8; }
.trees { z-index: -1; bottom: -20px; }

.aurora-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -4; /* Furthest back */
  pointer-events: none;
  background: var(--color-bg);
}
.aurora-layer {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  filter: blur(80px);
  opacity: 0.7;
  mix-blend-mode: screen;
}
.layer-1 { background: radial-gradient(ellipse at top left, rgba(72, 137, 152, 0.6), transparent 60%); animation: float-1 18s ease-in-out infinite alternate; }
.layer-2 { background: radial-gradient(ellipse at bottom right, rgba(148, 180, 159, 0.5), transparent 60%); animation: float-2 22s ease-in-out infinite alternate; }
.layer-3 { top: 0; left: -50%; width: 200%; height: 100%; background: linear-gradient(100deg, transparent 20%, rgba(217, 165, 91, 0.3) 50%, transparent 80%); transform: skewY(-15deg); animation: wave 30s linear infinite; filter: blur(60px); }

@keyframes float-1 { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(10%, 10%) scale(1.1); } }
@keyframes float-2 { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(-15%, -5%) scale(1.2); } }
@keyframes wave { 0% { transform: skewY(-15deg) translateX(-25%); } 50% { transform: skewY(-10deg) translateX(10%); } 100% { transform: skewY(-15deg) translateX(-25%); } }

/* --- CONTENT WRAPPER --- */
.content-wrapper {
  position: relative;
  z-index: 1;
  padding-top: 18vh;
}

.hero {
  padding: 0 5%;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  min-height: 82vh; /* Full screen feel */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10vh;
}

.logo-wrapper { display: flex; justify-content: center; margin-bottom: 4vh; }

.brand-card {
  display: inline-block;
  animation: floatUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.main-logo {
  width: clamp(200px, 30vw, 350px);
  height: auto;
  display: block;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.6));
}

@keyframes floatUp { to { opacity: 1; transform: translateY(0); } }

.lead-text {
  font-size: clamp(1rem, 2vw, 1.35rem);
  color: var(--brand-sage);
  opacity: 0.9;
  max-width: 650px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

/* --- SHOWCASE SECTION --- */
.showcase {
  padding: 0 5%;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 15vh;
}

.section-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--color-text);
  margin-bottom: 3rem;
  border-left: 4px solid var(--brand-gold);
  padding-left: 1rem;
}

/* The Big Highlight Card */
.project-highlight {
  background: rgba(15, 28, 36, 0.7);
  border: 1px solid rgba(148, 180, 159, 0.3);
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
}

.highlight-content {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.project-year {
  font-family: 'Courier New', monospace;
  color: var(--brand-gold);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: block;
}

.highlight-content h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.highlight-content p {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(255,255,255,0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.8rem;
  color: var(--brand-sage);
}

.cta-link {
  color: var(--brand-gold);
  font-weight: 700;
  font-size: 1.1rem;
  align-self: flex-start;
  border-bottom: 2px solid transparent;
  text-decoration: none;
}
.cta-link:hover { border-bottom-color: var(--brand-gold); }

/* --- DASHBOARD VISUAL --- */
.highlight-visual {
  background: linear-gradient(135deg, var(--brand-navy), #1A2E3B);
  min-height: 350px;
  border-left: 1px solid rgba(255,255,255,0.05);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dashboard-window {
  width: 90%;
  height: 280px;
  background: #0B1216;
  border: 1px solid rgba(148, 180, 159, 0.2);
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: perspective(1000px) rotateY(-5deg) rotateX(2deg);
  transition: transform 0.3s ease;
}

.project-highlight:hover .dashboard-window {
  transform: perspective(1000px) rotateY(0) rotateX(0);
}

.table-top-bar {
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--brand-sage);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search-bar {
  width: 100px;
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 50px;
}

.dash-table {
  flex: 1;
  background: transparent;
  color: #A0AFA0;
  font-family: 'Courier New', monospace;
}

.table-row {
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr 1fr;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  font-size: 0.7rem;
  align-items: center;
}

.table-row:last-child { border-bottom: none; }

.table-row.header {
  background: rgba(255, 255, 255, 0.03);
  color: white;
  font-weight: 600;
}

.text-muted { opacity: 0.3; }

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 0 8px currentColor;
}

.red { background: #FF5F56; color: #FF5F56; }
.yellow { background: #FFBD2E; color: #FFBD2E; }
.green { background: #27C93F; color: #27C93F; }

/* --- MINI CARDS --- */
.breakdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.mini-card {
  background: rgba(255,255,255,0.03);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.3s ease;
}
.mini-card:hover {
  transform: translateY(-5px);
  background: rgba(255,255,255,0.05);
}
.mini-card h4 { color: var(--brand-teal); margin-bottom: 0.5rem; }
.mini-card p { font-size: 0.9rem; opacity: 0.7; }

/* --- ABOUT SECTION --- */
.about-section {
  background-color: #0d1820;
  padding: 8rem 5%;
  position: relative;
  z-index: 1;
}

.about-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.bio-intro {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #fff;
}

.bio-text {
  font-size: 1rem;
  color: #a9b7c6;
  line-height: 1.8;
  margin-bottom: 0;
}

.interests-full-container {
  max-width: 1100px;
  margin: 4rem auto 0 auto;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.interest-item {
  background: rgba(255,255,255,0.03);
  padding: 2rem;
  border-radius: 16px;
  border-left: 1px solid rgba(255,255,255,0.05);
  border-top: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.interest-item:hover {
  background: rgba(255,255,255,0.06);
  transform: translateY(-5px);
  border-color: var(--brand-gold);
}

.interest-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: inline-block;
  background: rgba(255,255,255,0.05);
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 16px;
}

.interest-item h4 { color: white; margin-bottom: 0.5rem; font-size: 1.2rem; }
.interest-item p { font-size: 0.95rem; color: #a9b7c6; margin: 0; line-height: 1.6; }

/* About Visual */
.about-visual {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 150px;
  height: fit-content;
}

.profile-frame {
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 3/4;
}

.profile-placeholder {
  width: 100%;
  height: 100%;
  background: #1A2E3B;
  border-radius: 24px;
  border: 1px solid rgba(148, 180, 159, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
}

.bio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  display: block;
  transition: all 0.5s ease;
}

.profile-frame:hover .bio-image {
  transform: scale(1.03);
}

.deco-circle {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--brand-gold), transparent);
  opacity: 0.2;
  z-index: 1;
}

.deco-square {
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  z-index: 0;
}

/* --- CONTACT SECTION --- */
.contact-section {
  position: relative;
  padding: 10rem 0 6rem 0;
  background: linear-gradient(to bottom, rgba(13, 24, 32, 0.6) 0%, rgba(13, 24, 32, 0.95) 100%);
  z-index: 5;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  /* Glassmorphism */
  background: rgba(15, 28, 36, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 3rem;
  border-radius: 24px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.contact-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

.contact-text {
  font-size: 1.1rem;
  color: #a9b7c6;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.contact-subtext {
  font-size: 0.9rem;
  color: var(--brand-sage);
  font-style: italic;
  margin-bottom: 3rem;
}

.contact-form .form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.contact-form label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--brand-sage);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  color: white;
  font-family: inherit;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--brand-gold);
  background: rgba(255,255,255,0.08);
}

.send-btn {
  width: 100%;
  padding: 1rem;
  background: var(--brand-gold);
  color: #0F1C24;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, filter 0.2s;
}

.send-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}

.status-msg {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
}

.status-msg.success {
  background: rgba(39, 201, 63, 0.1);
  color: #27C93F;
  border: 1px solid rgba(39, 201, 63, 0.3);
}

.status-msg.error {
  background: rgba(255, 95, 86, 0.1);
  color: #FF5F56;
  border: 1px solid rgba(255, 95, 86, 0.3);
}

.ml-2 { margin-left: 0.5rem; }

.footer {
  text-align: center;
  margin-top: 6rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
}

@media (max-width: 900px) {
  .project-highlight { grid-template-columns: 1fr; }
  .highlight-visual { height: 320px; min-height: auto; order: -1; }
  .highlight-content { padding: 2rem; }
  .dashboard-window { width: 95%; transform: none; height: auto; }

  /* About Section Mobile */
  .about-container { grid-template-columns: 1fr; gap: 3rem; align-items: center; }
  .about-visual { order: -1; position: static; }
  .profile-frame { max-width: 300px; margin: 0 auto; }
  .interests-grid { grid-template-columns: 1fr; }

  /* Contact Mobile */
  .contact-container { padding: 2rem; width: 90%; }
  .contact-title { font-size: 2rem; }
}
</style>