//爆炸

// 动态更新图片尺寸以保持居中
function updateImageSize() {
    const mainImageContainer = document.querySelector('.main-image-container');
    const mainImage = document.querySelector('.main-image');
    const bgImages = document.querySelectorAll('.animated-bg');

    // 获取窗口尺寸
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 计算图片容器尺寸（窗口的75%）
    const containerWidth = windowWidth * 0.75;
    const containerHeight = windowHeight * 0.75;

    // 设置图片容器尺寸
    mainImageContainer.style.width = `${containerWidth}px`;
    mainImageContainer.style.height = `${containerHeight}px`;

    // 确保背景图片覆盖整个窗口
    bgImages.forEach(bg => {
        bg.style.width = `${windowWidth}px`;
        bg.style.height = `${windowHeight}px`;
    });

    // 计算图片尺寸以保持宽高比并适应容器
    const img = new Image();
    img.src = mainImage.src;
    img.onload = function() {
        const imgRatio = img.width / img.height;
        const containerRatio = containerWidth / containerHeight;

        if (imgRatio > containerRatio) {
            // 图片宽度决定尺寸
            mainImage.style.width = '100%';
            mainImage.style.height = 'auto';
        } else {
            // 图片高度决定尺寸
            mainImage.style.width = 'auto';
            mainImage.style.height = '100%';
        }
    };
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', updateImageSize);

// 窗口大小改变时更新
window.addEventListener('resize', updateImageSize);

// 重新触发背景图片动画 (4倍速度)
function restartAnimations() {
    const bgImages = document.querySelectorAll('.animated-bg');

    bgImages.forEach((bg, index) => {
        // 清除当前动画
        bg.style.animation = 'none';

        // 触发重绘
        void bg.offsetWidth;

        // 重新应用动画，每个延迟0.25秒
        const delay = index * 0.25;
        bg.style.animation = `pulse-animation 0.75s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite ${delay}s`;
    });
}

// 每3秒重新触发一次所有动画
setInterval(restartAnimations, 3000);