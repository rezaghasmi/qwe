document.addEventListener('DOMContentLoaded', function() {
    const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
        manifestUrl: 'https://qwe.freehost.io/r/manifest.json', // مسیر سرور محلی
        buttonRootId: 'connect-wallet-btn'
    });

    // Function to connect to wallet programmatically
    async function connectToWallet() {
        try {
            const connectedWallet = await tonConnectUI.connectWallet();
            if (connectedWallet) {
                document.getElementById('wallet-info').innerHTML = `
                    <p><strong>Wallet Address:</strong> ${connectedWallet.address}</p>
                    <p><strong>Wallet Name:</strong> ${connectedWallet.name}</p>
                `;
            } else {
                document.getElementById('wallet-info').innerHTML = '<p>Wallet connection failed!</p>';
            }
        } catch (error) {
            console.error("Error connecting to wallet:", error);
            document.getElementById('wallet-info').innerHTML = '<p>There was an error connecting the wallet.</p>';
        }
    }

    // Handle wallet connection
    document.getElementById('connect-wallet-btn').addEventListener('click', () => {
        connectToWallet();
    });
});
