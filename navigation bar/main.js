function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');
    if (sidebar.classList.contains('active') && 
        !sidebar.contains(e.target) && 
        !menuButton.contains(e.target)) {
        hideSidebar();
    }
});

// Close sidebar on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideSidebar();
    }
});