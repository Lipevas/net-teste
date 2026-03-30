// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Profile selection functionality
const profiles = document.querySelectorAll('.profile a');
profiles.forEach(a => {
    a.addEventListener('click', (e) => {
        e.preventDefault();
        const img = a.querySelector('img');
        const name = a.querySelector('figcaption').textContent;
        localStorage.setItem('perfilAtivoNome', name);
        localStorage.setItem('perfilAtivoImagem', img.src);
        window.location.href = a.href;
    });
});