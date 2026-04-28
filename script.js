 
    /* ── Year ──────────────────────────────── */
    document.getElementById('year').textContent = new Date().getFullYear();

    /* ── Hamburger menu ────────────────────── */
    const hamburger  = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    function closeMobile() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }

    /* ── Scroll reveal ─────────────────────── */
    const revealEls = document.querySelectorAll('.reveal');
    const observer  = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    revealEls.forEach(el => observer.observe(el));

    /* ── Back to top ───────────────────────── */
    const backTop = document.getElementById('backTop');
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 400);
    });
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ── Active nav highlight ──────────────── */
    const sections  = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
      });
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--green)' : '';
      });
    });

    /* ── Contact form ──────────────────────── */
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();

      const name    = document.getElementById('name').value.trim();
      const email   = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgEl   = document.getElementById('form-msg');

      // Simple validation
      if (!name || !email || !message) {
        msgEl.textContent = 'Please fill in all fields.';
        msgEl.className   = 'form-msg error';
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        msgEl.textContent = 'Please enter a valid email address.';
        msgEl.className   = 'form-msg error';
        return;
      }

      // Simulate submission (replace with EmailJS / Formspree for real emails)
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        msgEl.textContent = '✓ Message sent! I\'ll get back to you soon.';
        msgEl.className   = 'form-msg success';
        this.reset();
        btn.textContent = 'Send Message →';
        btn.disabled    = false;
      }, 1200);
    });
