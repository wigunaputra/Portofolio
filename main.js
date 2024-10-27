window.onscroll = function() {
    var scrollTopButton = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.classList.add('active');
    } else {
        scrollTopButton.classList.remove('active');
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('.scroll-top').onclick = scrollToTop;

// Function to show loading screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    loadingScreen.style.display = 'flex'; // Show loading screen
    mainContent.style.display = 'none'; // Hide main content

    // Simulate loading time (e.g., fetching data)
    setTimeout(() => {
        loadingScreen.style.opacity = '0'; // Fade out loading screen
        setTimeout(() => {
            loadingScreen.style.display = 'none'; // Hide loading screen after fade out
            mainContent.style.display = 'block'; // Show main content
        }, 500); // Wait for fade out animation to complete
    }, 2000); // Simulated loading time (2 seconds)
}

// Show loading screen on page load
showLoadingScreen();

// Show loading screen when clicking the "Load More Content" button
document.getElementById('loadMore').addEventListener('click', showLoadingScreen);

// Function to remove the text block
function removeTextBlock() {
    const mainContent = document.getElementById('mainContent');
    
    // Remove the specific paragraph containing the text
    const paragraph = mainContent.querySelector('p');
    if (paragraph) {
        mainContent.removeChild(paragraph);
    }
}

// Call the function to remove the text block
removeTextBlock();