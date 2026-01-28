function toggleMenu() {
    // 1. Find the sidebar by its name
        const sidebar = document.getElementById('sideBar');
        
        // 2. Toggle the "hidden" class
        // If it has "hidden", remove it. If it doesn't, add it.
        sidebar.classList.toggle('hidden');
        
        // 3. Make sure it displays as a flexbox when visible
        sidebar.classList.toggle('flex');
}