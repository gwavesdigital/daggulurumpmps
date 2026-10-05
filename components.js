// Dynamic Header, Footer, Map & Global Elements Injector
document.addEventListener("DOMContentLoaded", function() {
    
    // Header & Top Ribbon Injection
    const headerHTML = `
        <a href="https://wa.me/919666766688" class="whatsapp-float" target="_blank" title="Chat with Head Master">
            <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448c-1.805.992-3.86 1.517-5.946 1.518h-.005zm12.987-20.916c-5.464 0-9.914 4.45-9.917 9.916-.001 1.744.457 3.454 1.325 4.957l-.924 3.376 3.453-.906c1.447.788 3.102 1.203 4.793 1.204h.004c5.463 0 9.913-4.45 9.916-9.916.002-2.651-1.031-5.143-2.903-7.017-1.873-1.875-4.363-2.911-7.014-2.911zm5.441 14.238c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.166-.173.198-.346.222-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.787-1.48-1.76-1.653-2.057-.173-.297-.018-.458.13-.605.134-.133.297-.346.445-.52.148-.174.198-.297.297-.495.099-.198.05-.372-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.489-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.573-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.569-.347z"/></svg>
        </a>
        <div class="top-bar">
            <div class="top-bar-left">
                <span>📍 దగ్గులూరు, పాలకొల్లు మండలం</span>
                <button id="installBtn" class="install-app-btn" onclick="installApp()">📲 Install App</button>
            </div>
        </div>
        <header>
            <div class="navbar">
                <div class="logo-container">
                    <img src="images/ap-emblem.png" alt="AP Govt Logo" class="ap-logo">
                    <div class="logo-area">
                        <h1>ఎం.పి. మోడల్ ప్రైమరీ స్కూల్</h1>
                        <p>స్థాపితం: 1922 | నెం.1 - దగ్గులూరు</p>
                    </div>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">హోమ్</a></li>
                    <li><a href="about.html">మా గురించి</a></li>
                    <li><a href="faculty.html">ఉపాధ్యాయులు</a></li>
                    <li><a href="facilities.html">వసతులు</a></li>
                    <li><a href="schemes.html">పథకాలు</a></li>
                    <li><a href="digital-mana-badi.html">డిజిటల్ మన బడి</a></li>
                    <li><a href="gallery.html">గ్యాలరీ</a></li>
                    <li><a href="alumni.html">పూర్వ విద్యార్థులు</a></li>
                    <li><a href="parents-corner.html">పేరెంట్స్ కార్నర్</a></li>
                    <li><a href="contact.html">సంప్రదించండి</a></li>
                </ul>
            </div>
        </header>
    `;

    // Footer & Map Injection
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h3>పాఠశాల చిరునామా</h3>
                    <p>📍 <strong>మండల పరిషత్ మోడల్ ప్రైమరీ స్కూల్ నెం. 1</strong></p>
                    <p>దగ్గులూరు, పాలకొల్లు మండలం, పశ్చిమ గోదావరి జిల్లా - 534260</p>
                    <p>📞 హెడ్ మాస్టర్: <strong>9666766688</strong></p>
                </div>
                <div class="footer-section">
                    <h3>క్విక్ లింక్స్</h3>
                    <p><a href="about.html" style="color:#ddd; text-decoration:none;">మా గురించి & చరిత్ర</a></p>
                    <p><a href="digital-mana-badi.html" style="color:#ddd; text-decoration:none;">డిజిటల్ మన బడి కాన్సెప్ట్</a></p>
                    <p><a href="contact.html" style="color:#ddd; text-decoration:none;">గూగుల్ మ్యాప్ & కాంటాక్ట్</a></p>
                </div>
                <div class="footer-section">
                    <h3>లొకేషన్</h3>
                    <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.948050016019!2d81.66499657505977!3d16.528720126973397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d1134e74c66d%3A0x55708d80a13e87f2!2sMPPS%20NO%20%3A%201%20SCHOOL!5e0!3m2!1sen!2sin!4v1791197584994!5m2!1sen!2sin" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 ఎం.పి. మోడల్ ప్రైమరీ స్కూల్, దగ్గులూరు. సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.</p>
                <p>An Initiative of <span class="brand-credit" onclick="openModal()">@VALIASS team</span></p>
            </div>
        </footer>

        <!-- VALIASS Popup Modal -->
        <div class="modal-overlay" id="contactModal">
            <div class="modal-box">
                <div class="modal-header-banner">
                    <span class="close-modal" onclick="closeModal()">&times;</span>
                    <div class="modal-icon-badge">🛠️</div>
                    <h3>VALIASS Team Support</h3>
                </div>
                <div class="modal-body-content">
                    <p>డిజిటల్ మన బడి & వెబ్‌సైట్ సపోర్ట్ కొరకు మా టెక్నికల్ టీమ్‌ను సంప్రదించండి:</p>
                    <div class="modal-actions">
                        <a href="tel:8985361991" class="action-btn call-btn">📞 Call Now</a>
                        <a href="https://wa.me/918985361991" target="_blank" class="action-btn wa-btn">💬 WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});

// PWA Install Script (Works on Live Server / HTTPS)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null;
        });
    } else {
        alert('యాప్ ఇన్‌స్టాల్ చేయడానికి మీ బ్రౌజర్ మెనూ (...) నుండి "Add to Home screen" లేదా "Install App" సెలెక్ట్ చేయండి!');
    }
}

function openModal() { document.getElementById('contactModal').style.display = 'flex'; }
function closeModal() { document.getElementById('contactModal').style.display = 'none'; }
window.onclick = function(event) {
    let modal = document.getElementById('contactModal');
    if (event.target == modal) { modal.style.display = 'none'; }
}
