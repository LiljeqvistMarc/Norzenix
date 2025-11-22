<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()
const router = useRouter()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Close menu when route changes
watch(route, () => {
  isOpen.value = false
})

// Lock body scroll when menu is open
watch(isOpen, (isMenuOpen) => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// --- SMART SCROLL FUNCTION ---
const handleNav = (sectionId) => {
  // 1. If we are already on Home, just scroll there directly
  if (route.path === '/') {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu if open
    if (isOpen.value) isOpen.value = false
  }
  // 2. If we are on another page, let the router handle it
  else {
    router.push({ path: '/', hash: `#${sectionId}` })
  }
}
</script>

<template>
  <nav class="navbar" :class="{ 'nav-open': isOpen }">

    <div class="logo-slot">
      <RouterLink to="/" class="brand-logo">
        <span class="text-white">Nor</span><span class="text-sage">zenix</span>
      </RouterLink>
    </div>

    <!-- DESKTOP MENU -->
    <ul class="desktop-links">
      <!-- Standard link to top -->
      <li><RouterLink to="/">Home</RouterLink></li>

      <!-- Custom Click Handlers for Sections -->
      <li><a href="#projects" @click.prevent="handleNav('projects')">Projects</a></li>
      <li><a href="#about" @click.prevent="handleNav('about')">About</a></li>
      <li><a href="#contact" @click.prevent="handleNav('contact')">Contact</a></li>
    </ul>

    <button
        class="hamburger"
        @click="toggleMenu"
        aria-label="Toggle navigation"
    >
      <span class="bar top"></span>
      <span class="bar middle"></span>
      <span class="bar bottom"></span>
    </button>

    <!-- MOBILE OVERLAY MENU -->
    <Transition name="fade">
      <div v-if="isOpen" class="mobile-overlay">
        <ul class="mobile-links">
          <li style="--delay: 0.1s">
            <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
          </li>
          <li style="--delay: 0.2s">
            <a href="#projects" @click.prevent="handleNav('projects')">Projects</a>
          </li>
          <li style="--delay: 0.3s">
            <a href="#about" @click.prevent="handleNav('about')">About</a>
          </li>
          <li style="--delay: 0.4s">
            <a href="#contact" @click.prevent="handleNav('contact')">Contact</a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
/* --- 1. LAYOUT --- */
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 9999;
  transition: padding 0.3s ease;

  background-color: rgba(15, 28, 36, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- 2. LOGO TEXT --- */
.logo-slot {
  position: absolute;
  left: 2rem;
  z-index: 10002;
  display: flex;
  align-items: center;
}

.brand-logo {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.6rem;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
}

.text-white { color: #fff; }
.text-sage { color: var(--brand-sage); }

/* --- 3. DESKTOP LINKS --- */
.desktop-links {
  display: flex;
  gap: 3rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Target both RouterLink (a) and standard (a) tags */
.desktop-links a {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-text);
  opacity: 0.8;
  transition: all 0.3s;
  cursor: pointer;
}

.desktop-links a:hover {
  opacity: 1;
  color: var(--brand-gold);
}

.desktop-links a.router-link-active {
  opacity: 1;
  color: var(--brand-gold);
}

/* --- 4. HAMBURGER --- */
.hamburger {
  display: none;
  position: absolute;
  right: 2rem;
  z-index: 10002;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
}

.bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.nav-open .bar.top { transform: translateY(9px) rotate(45deg); }
.nav-open .bar.middle { opacity: 0; transform: translateX(-10px); }
.nav-open .bar.bottom { transform: translateY(-9px) rotate(-45deg); }

/* --- 5. MOBILE OVERLAY --- */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
}

.mobile-links {
  list-style: none;
  padding: 0;
  text-align: center;
}

.mobile-links a {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  transition: color 0.3s;
  cursor: pointer;
}

.mobile-links a:hover {
  color: var(--brand-gold);
  font-style: italic;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.mobile-links li {
  opacity: 0;
  transform: translateY(30px);
  animation: slideIn 0.5s forwards ease-out var(--delay);
}

@keyframes slideIn {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .desktop-links { display: none; }
  .hamburger { display: flex; }
  .logo-slot { left: 1.5rem; }
  .hamburger { right: 1.5rem; }
}
</style>