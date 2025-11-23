// Splash Screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splash-screen');
    
    if (splashScreen) {
        const loadingProgress = document.querySelector('.loading-progress');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            if (loadingProgress) {
                loadingProgress.style.width = `${progress}%`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    splashScreen.style.opacity = '0';
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                    }, 500);
                }, 500);
            }
        }, 10);
    }
});