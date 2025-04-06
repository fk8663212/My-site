// JavaScript Document
var Arr = ["page-home", "page-about", "page-blog", "page-contact"];

var PageIndex = 0;
var isScrolling = false;
var scrollingTimeout;

// 更新活動菜單項
function updateActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        if (index === PageIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 滾動到指定頁面
function scrollToPage(index) {
    if (isScrolling) return;
    if (index < 0 || index >= Arr.length) return;
    
    isScrolling = true;
    PageIndex = index;
    document.getElementById(Arr[PageIndex]).scrollIntoView({ behavior: 'smooth' });
    updateActiveNavItem();
    
    clearTimeout(scrollingTimeout);
    scrollingTimeout = setTimeout(() => { 
        isScrolling = false;
    }, 1000);
}

document.addEventListener('wheel', function(event) {
    if (window.innerWidth <= 768) return; // 在小螢幕上不啟動整頁滾動
    
    const direction = event.deltaY > 0 ? 1 : -1;
    const newIndex = Math.min(Math.max(PageIndex + direction, 0), Arr.length - 1);
    scrollToPage(newIndex);
});

// 添加觸摸事件支持
let touchStartY = 0;
let touchEndY = 0;
const minSwipeDistance = 50;

document.addEventListener('touchstart', function(event) {
    if (window.innerWidth <= 768) return; // 在小螢幕上不啟動整頁滾動
    
    touchStartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    if (window.innerWidth <= 768) return; // 在小螢幕上不啟動整頁滾動
    
    touchEndY = event.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    if (isScrolling) return;
    
    const direction = touchStartY > touchEndY ? 1 : -1;
    const distance = Math.abs(touchStartY - touchEndY);
    
    if (distance > minSwipeDistance) {
        const newIndex = Math.min(Math.max(PageIndex + direction, 0), Arr.length - 1);
        scrollToPage(newIndex);
    }
}

// 設置導航點擊事件
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToPage(index);
        });
    });
    
    // 初始化當前頁面
    const hash = window.location.hash;
    if (hash) {
        const targetId = hash.substring(1);
        const targetIndex = Arr.findIndex(id => id === targetId);
        if (targetIndex >= 0) {
            PageIndex = targetIndex;
            document.getElementById(Arr[PageIndex]).scrollIntoView({ behavior: 'smooth' });
            updateActiveNavItem();
        }
    }
    
    // 根據螢幕大小設置滾動模式
    if (window.innerWidth <= 768) {
        document.body.style.overflowY = 'auto';
    } else {
        document.body.style.overflowY = 'hidden';
    }
    
    // 初始化活動菜單項
    updateActiveNavItem();
});

// 在視窗大小改變時更新導航狀態
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.body.style.overflowY = 'auto';
        
        // 重設導航位置
        if (window.scrollY > 0) {
            const sections = document.querySelectorAll('.page-home, .page-about, .page-blog, .page-contact');
            let currentSectionIndex = 0;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSectionIndex = index;
                }
            });
            
            PageIndex = currentSectionIndex;
            updateActiveNavItem();
        }
    } else {
        document.body.style.overflowY = 'hidden';
        
        // 確保在大螢幕上返回時正確顯示當前頁面
        document.getElementById(Arr[PageIndex]).scrollIntoView({ behavior: 'auto' });
    }
});

// 鍵盤導航
document.addEventListener('keydown', function(e) {
    if (window.innerWidth <= 768) return;
    
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        scrollToPage(PageIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        scrollToPage(PageIndex - 1);
    }
});

// 添加捲動檢測，以更新行動模式下的導航選中狀態
if (window.innerWidth <= 768) {
    window.addEventListener('scroll', function() {
        if (isScrolling) return;
        
        clearTimeout(scrollingTimeout);
        scrollingTimeout = setTimeout(() => {
            const sections = document.querySelectorAll('.page-home, .page-about, .page-blog, .page-contact');
            let currentSectionIndex = 0;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSectionIndex = index;
                }
            });
            
            if (PageIndex !== currentSectionIndex) {
                PageIndex = currentSectionIndex;
                updateActiveNavItem();
            }
        }, 50);
    });
}


