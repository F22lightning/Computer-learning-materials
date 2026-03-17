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
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const buttonsGrid = document.getElementById('buttonsGrid');
    
    // Sidebar elements
    const emptyState = document.getElementById('emptyState');
    const detailContent = document.getElementById('detailContent');
    const detailNumber = document.getElementById('detailNumber');
    const detailTitle = document.getElementById('detailTitle');
    const detailEngName = document.getElementById('detailEngName');
    const detailDesc = document.getElementById('detailDesc');
    
    // Video elements
    const videoContainer = document.getElementById('videoContainer');
    const detailVideo = document.getElementById('detailVideo');

    const homeView = document.getElementById('homeView');
    const detailView = document.getElementById('detailView');
    const backButton = document.getElementById('backButton');
    
    let activeButton = null;

    // Build the buttons grid
    function initButtons() {
        buttonsGrid.innerHTML = ''; // Clear previous if any
        
        components.forEach(comp => {
            const btn = document.createElement('button');
            btn.className = 'number-btn';
            
            // Allow the structure to have the number and a small text label beneath
            btn.innerHTML = `
                ${comp.id}
                <span class="btn-label">${comp.label}</span>
            `;
            
            btn.addEventListener('click', () => {
                showDetail(comp, btn);
            });
            
            buttonsGrid.appendChild(btn);
        });
    }

    function showDetail(comp, btnElement) {
        // Handle active states on buttons
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        btnElement.classList.add('active');
        activeButton = btnElement;

        // Switch Views
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
        
        // Handle Video Display
        if (comp.videoUrl) {
            // Load and show video
            detailVideo.src = comp.videoUrl;
            detailVideo.load();
            videoContainer.classList.remove('hidden');
            detailVideo.play().catch(e => console.log("Auto-play prevented", e));
        } else {
            // Hide video container if no video available
            videoContainer.classList.add('hidden');
            detailVideo.pause();
            detailVideo.src = "";
        }
        
        // Trigger animation
        detailWrapper.classList.add('fade-in');
    }

    // Handle Back Button
    backButton.addEventListener('click', () => {
        // Stop video
        detailVideo.pause();
        detailVideo.src = "";
        
        // Switch Views
        detailView.classList.add('hidden');
        homeView.classList.remove('hidden');
        
        // Clear active button state
        if (activeButton) {
            activeButton.classList.remove('active');
            activeButton = null;
        }
    });

    // Initialize the grid layout straight away
    initButtons();
});
