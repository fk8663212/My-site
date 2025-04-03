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
    } else {
        document.body.style.overflowY = 'hidden';
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


