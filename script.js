const components = [
    {
        id: 1,
        title: "ฮาร์ดดิสก์",
        english: "Hard Disk Drive (HDD)",
        description: "อุปกรณ์กักเก็บข้อมูลหลักของคอมพิวเตอร์ ที่ใช้ในการเก็บระบบปฏิบัติการ โปรแกรม และบันทึกไฟล์ข้อมูลต่างๆ แบบถาวรแม้ขณะปิดเครื่อง ลักษณะในภาพเป็นฮาร์ดดิสก์แบบจานหมุน (Mechanical Hard Drive)",
        label: "HDD",
        videoUrl: "ฮาร์ดดิสก์_Hard_Disk_Drive_.mp4"
    },
    {
        id: 2,
        title: "แรม",
        english: "Random Access Memory (RAM)",
        description: "หน่วยความจำชั่วคราวหลักของระบบ ทำหน้าที่รับข้อมูลและส่งไปให้ CPU ประมวลผล แรมจะช่วยให้คอมพิวเตอร์ทำงานหลายโปรแกรมพร้อมกันได้เร็วขึ้น แต่จะเก็บข้อมูลได้ก็ต่อเมื่อมีกระแสไฟฟ้าหล่อเลี้ยงเท่านั้น",
        label: "RAM",
        videoUrl: "แรม.mp4"
    },
    {
        id: 3,
        title: "เมนบอร์ดและซีพียู",
        english: "Motherboard & CPU",
        description: "เมนบอร์ดคือแผงวงจรหลักที่เป็นศูนย์กลางการเชื่อมต่อของอุปกรณ์ทั้งหมด ส่วนบริเวณกึ่งกลางคือกะเปาะซีพียู (CPU) ซึ่งเปรียบเสมือนสมองของคอมพิวเตอร์ ทำหน้าที่ประมวลผลคำสั่งต่างๆ",
        label: "Mainboard & CPU",
        videoUrl: "เมนบอร์ดและซีพียู_Motherboard.mp4"
    },
    {
        id: 4,
        title: "พัดลมระบายความร้อน",
        english: "Cooling Fan",
        description: "อุปกรณ์ที่ช่วยระบายความร้อนให้กับระบบคอมพิวเตอร์ เพื่อควบคุมอุณหภูมิไม่ให้สูงเกินไปจนทำให้อุปกรณ์อิเล็กทรอนิกส์อื่นๆ ภายในเคสเสียหายหรือทำงานผิดปกติ",
        label: "Fan",
        videoUrl: "ผัดลมระบายความร้อน.mp4"
    },
    {
        id: 5,
        title: "ออปติคอลไดรฟ์",
        english: "Optical Drive (CD/DVD ROM)",
        description: "อุปกรณ์สำหรับอ่านและเขียนข้อมูลบนแผ่นดิสก์ เช่น CD หรือ DVD แม้ในปัจจุบันอาจจะพบเห็นได้น้อยลงเนื่องจากการเข้ามาของแฟลชไดรฟ์ แต่ก็ยังคงใช้สำหรับสื่อเก็บบันทึกข้อมูลรุ่นเก่า",
        label: "CD/DVD",
        videoUrl: "เคลื่องเล่นcd.mp4"
    },
    {
        id: 6,
        title: "ลำโพงของคอมพิวเตอร์",
        english: "Computer Speaker",
        description: "อุปกรณ์แสดงผลชนิดหนึ่ง ทำหน้าที่แปลงสัญญาณไฟฟ้าให้กลายเป็นเสียง (Output) เพื่อให้ผู้ใช้งานได้ยินเสียงเพลง เสียงจากภาพยนตร์ หรือคลื่นเสียงต่างๆ จากคอมพิวเตอร์",
        label: "Speaker",
        videoUrl: "ลำโพง.mp4"
    },
    {
        id: 7,
        title: "โซลิดสเตตไดรฟ์ (SSD)",
        english: "Solid State Drive (SSD)",
        description: "อุปกรณ์จัดเก็บข้อมูลแบบถาวรที่พัฒนาต่อจากฮาร์ดดิสก์ (HDD) โดยใช้ชิปหน่วยความจำแฟลช (Flash Memory) ในการบันทึกข้อมูล ทำให้มีความเร็วในการอ่านและเขียนข้อมูลสูงกว่า น้ำหนักเบา และทนทานต่อแรงกระแทกได้ดีกว่ามาก",
        label: "SSD",
        videoUrl: "ssd.mp4" // ไฟล์วิดีโอ SSD
    }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log("v2.2: Auto-fullscreen disabled. Use '8' for manual fullscreen.");
    const buttonsGrid = document.getElementById('buttonsGrid');
    
    // Elements
    const detailNumber = document.getElementById('detailNumber');
    const detailTitle = document.getElementById('detailTitle');
    const detailEngName = document.getElementById('detailEngName');
    const detailDesc = document.getElementById('detailDesc');
    
    // Video elements
    const videoContainer = document.getElementById('videoContainer');
    const detailVideo = document.getElementById('detailVideo');

    // Views
    const homeView = document.getElementById('homeView');
    const detailView = document.getElementById('detailView');
    const backButton = document.getElementById('backButton');
    
    let activeButton = null;
    let currentIndex = -1; // Keep track of current item index

    // Build the buttons grid
    function initButtons() {
        buttonsGrid.innerHTML = ''; // Clear previous if any
        
        components.forEach((comp, index) => {
            const btn = document.createElement('button');
            btn.className = 'number-btn';
            
            // Allow the structure to have the number and a small text label beneath
            btn.innerHTML = `
                ${comp.id}
                <span class="btn-label">${comp.label}</span>
            `;
            
            btn.addEventListener('click', () => {
                showDetail(index);
            });
            
            buttonsGrid.appendChild(btn);
        });
    }

    // Function to handle showing the details view based on array index
    function showDetail(index) {
        if (index < 0 || index >= components.length) return;
        
        const comp = components[index];
        currentIndex = index;

        // Visual update on Home Buttons if needed
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        const targetBtn = buttonsGrid.children[index];
        if (targetBtn) {
            targetBtn.classList.add('active');
            activeButton = targetBtn;
        }

        // Switch Views (if not already opened)
        homeView.classList.add('hidden');
        detailView.classList.remove('hidden');
        
        // Remove animation class to re-trigger it
        const detailWrapper = detailView.querySelector('.detail-content-wrapper');
        detailWrapper.classList.remove('fade-in');
        
        // Force browser to redraw
        void detailWrapper.offsetWidth;
        
        // Populate new data
        detailNumber.innerText = comp.id;
        detailTitle.innerText = comp.title;
        detailEngName.innerText = comp.english;
        detailDesc.innerText = comp.description;
        
        // --- Handle Video Playback (No Auto-Fullscreen) ---
        if (comp.videoUrl) {
            detailVideo.src = comp.videoUrl;
            detailVideo.load();
            videoContainer.classList.remove('hidden');
            
            // Play video in the overlay automatically, but DON'T request native fullscreen yet
            detailVideo.play().catch(e => console.log("Auto-play prevented", e));
        } else {
            // Hide video container if no video available
            videoContainer.classList.add('hidden');
            detailVideo.pause();
            detailVideo.src = "";
        }
        // --------------------------------------------------
        
        // Trigger animation
        detailWrapper.classList.add('fade-in');
    }

    // Function to go back Home
    function goHome() {
        // Stop video
        detailVideo.pause();
        detailVideo.src = "";
        
        // Switch Views
        detailView.classList.add('hidden');
        homeView.classList.remove('hidden');
        
        // Clear state
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton = null;
        }
        currentIndex = -1;
    }

    // Handle Back Button Click
    backButton.addEventListener('click', goHome);

    // KEYBOARD NAVIGATION (Numpad / Keyboard Shortcuts)
    document.addEventListener('keydown', (e) => {
        const key = e.key;

        // 1. Direct number picking (1-7)
        if (key >= '1' && key <= '7') {
            const num = parseInt(key);
            const compIndex = components.findIndex(c => c.id === num);
            if (compIndex !== -1) {
                showDetail(compIndex);
            }
        }
        // 2. Play/Pause toggle (*0*)
        else if (key === '0') {
            if (currentIndex !== -1 && components[currentIndex].videoUrl) {
                if (detailVideo.paused) {
                    detailVideo.play();
                } else {
                    detailVideo.pause();
                }
            }
        }
        // 3. Next Component (*+*)
        else if (key === '+') {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= components.length) nextIndex = 0;
            showDetail(nextIndex);
        }
        // 4. Previous Component (*-*)
        else if (key === '-') {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) prevIndex = components.length - 1;
            showDetail(prevIndex);
        }
        // 5. Back to Home (*)
        else if (key === '*') {
            goHome();
        }
        // 6. Manual Video Fullscreen (8) 
        else if (key === '8') {
            if (currentIndex !== -1 && components[currentIndex].videoUrl) {
                if (detailVideo.requestFullscreen) {
                    detailVideo.requestFullscreen();
                } else if (detailVideo.webkitRequestFullscreen) {
                    detailVideo.webkitRequestFullscreen();
                }
            }
        }
        // 7. Exit Fullscreen / Back to Home (9) 
        else if (key === '9') {
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            } else {
                goHome();
            }
        }
    });

    // Initialize HTML grid
    initButtons();
});
