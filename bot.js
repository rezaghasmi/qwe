document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running');

    if (window.innerWidth > 768) {
        document.getElementById('desktopMessage').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
        return;
    } else {
        document.getElementById('desktopMessage').style.display = 'none';
        document.querySelector('.container').style.display = 'block';

        const progress = document.querySelector('.progress');
        const percentage = document.querySelector('.percentage');
        const message = document.getElementById('message');
        let width = 0;

        const updateProgress = () => {
            if (width >= 100) {
                clearInterval(interval);
                message.style.display = 'block';
                message.textContent = 'Bot is ready!';

                setTimeout(() => {
                    window.location.href = 'bot1.html'; // Replace with your target page
                }, 1000);
            } else {
                width++;
                progress.style.width = width + '%';
                percentage.textContent = width + '%';
            }
        };

        const interval = setInterval(updateProgress, 30);

        window.addEventListener('online', () => {
            const errorMessage = document.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        });

        window.addEventListener('offline', () => {
            let errorMessage = document.querySelector('.error-message');
            if (!errorMessage) {
                errorMessage = document.createElement('div');
                errorMessage.className = 'error-message';
                errorMessage.textContent = 'Your internet connection seems to be lost. Please check your connection.';
                document.querySelector('.container').appendChild(errorMessage);
            }
            errorMessage.style.display = 'block';
        });
    }
});
