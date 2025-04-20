const themeBtn = document.getElementById('theme-button');

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                themeBtn.textContent = 'dark_mode';
            } else {
                themeBtn.textContent = 'light_mode';
            }
        });

        // Hover bounce animation
        document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.classList.add('animate__bounce');
                icon.addEventListener('animationend', () => {
                    icon.classList.remove('animate__bounce');
                }, { once: true });
            });
        });