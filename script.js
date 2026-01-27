(function(){
    const root = document.documentElement;
    const KEY = 'theme';
  
    function setTheme(t){
      root.setAttribute('data-theme', t);
      const btn = document.getElementById('theme-toggle');
      if(btn) btn.textContent = t==='dark' ? '☀️' : '🌙';
      try{ localStorage.setItem(KEY, t); }catch{}
    }
  
    document.addEventListener('DOMContentLoaded', () => {
      // Initialize theme
      let t; try{ t = localStorage.getItem(KEY); }catch{}
      if(t!=='light' && t!=='dark'){
        t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      setTheme(t);
  
      // Toggle theme
      const tBtn = document.getElementById('theme-toggle');
      tBtn && tBtn.addEventListener('click', () => {
        setTheme(root.getAttribute('data-theme')==='dark' ? 'light' : 'dark');
      });
  
      // Show/hide side nav on small screens
      const mBtn = document.getElementById('menu-toggle');
      const nav = document.querySelector('.side-nav');
      if(mBtn && nav){
        const mq = window.matchMedia('(max-width: 900px)');
        const syncNav = () => { if(!mq.matches) nav.classList.remove('is-open'); };
        mBtn.addEventListener('click', () => nav.classList.toggle('is-open'));
        if(mq.addEventListener){ mq.addEventListener('change', syncNav); }
        else if(mq.addListener){ mq.addListener(syncNav); }
        syncNav();
      }
  
      // Footer year
      const y = document.getElementById('year');
      if(y) y.textContent = new Date().getFullYear();
  
      // Scrollspy
      const links = [...document.querySelectorAll('.side-nav a[href^="#"]')];
      const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
      const setActive = () => {
        let cur = null, offset = 120;
        sections.forEach(sec => { if (sec.getBoundingClientRect().top <= offset) cur = '#' + sec.id; });
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === cur));
      };
      document.addEventListener('scroll', setActive, { passive:true });
      setActive();

      // Back to top visibility
      const btt = document.getElementById('back-to-top');
      if(btt){
        const toggle = () => btt.classList.toggle('show', window.scrollY > 400);
        document.addEventListener('scroll', toggle, { passive:true });
        toggle();
      }
    });
  })();
