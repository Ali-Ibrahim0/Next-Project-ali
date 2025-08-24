function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.getElementById('toggle-sidebar');
            const isVisible = sidebar.style.transform === 'translateX(0px) scale(1)';
            if (isVisible) {
                gsap.to(sidebar, {
                    x: '-100%',
                    scale: 0.95,
                    duration: 0.4,
                    ease: 'power3.in'
                });
                gsap.to(toggleBtn, { rotation: 0, scale: 1, duration: 0.3, ease: 'power3.out' });
                toggleBtn.textContent = '≡';
            } else {
                gsap.fromTo(sidebar,
                    { x: '-100%', scale: 0.95, opacity: 0 },
                    { x: 0, scale: 1, opacity: 1, duration: 0.4, ease: 'power3.out' }
                );
                gsap.to(toggleBtn, { rotation: 90, scale: 1.1, duration: 0.3, ease: 'power3.out' });
                toggleBtn.textContent = '×';
                gsap.from('#sidebar button', {
                    opacity: 0,
                    x: -20,
                    scale: 0.9,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: 'power2.out',
                    delay: 0.1
                });
            }
        }

        function mockShowSection(sectionId) {
            alert(`Navigating to ${sectionId} section (mock navigation)`);
        }

        function logout() {
            alert('Logged out (mock)');
        }