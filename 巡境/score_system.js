// ==========================================
// 巡境 XÚNJÌNG - 底层行为计分引擎 v1.0
// ==========================================

// 1. 初始化分数系统
function initScores() {
    if (!localStorage.getItem('score_conspiracy')) localStorage.setItem('score_conspiracy', '0');
    if (!localStorage.getItem('score_skeptic')) localStorage.setItem('score_skeptic', '0');
    if (!localStorage.getItem('score_meta')) localStorage.setItem('score_meta', '0');
}

// 2. 阴谋值 (Conspiracy Score) - 玩家倾向于相信非自然力、犯罪阴谋
function addConspiracy(points, reason = "") {
    let current = parseInt(localStorage.getItem('score_conspiracy') || '0');
    localStorage.setItem('score_conspiracy', current + points);
    console.log(`%c[计分系统] 阴谋值(Conspiracy) +${points} | 当前总分: ${current + points} | 触发行为: ${reason}`, 'color: #ff6b6b; font-weight: bold;');
}

// 3. 理性值 (Skeptic Score) - 玩家倾向于技术分析、寻找巧合或人为痕迹
function addSkeptic(points, reason = "") {
    let current = parseInt(localStorage.getItem('score_skeptic') || '0');
    localStorage.setItem('score_skeptic', current + points);
    console.log(`%c[计分系统] 理性值(Skeptic) +${points} | 当前总分: ${current + points} | 触发行为: ${reason}`, 'color: #4dabf7; font-weight: bold;');
}

// 4. 元叙事值 (Meta Score) - 玩家进行了违背常理的过度试探、打破第四面墙
function addMeta(points, reason = "") {
    let current = parseInt(localStorage.getItem('score_meta') || '0');
    localStorage.setItem('score_meta', current + points);
    console.log(`%c[计分系统] 元叙事(Meta) +${points} | 当前总分: ${current + points} | 触发行为: ${reason}`, 'color: #10b981; font-weight: bold;');
}

// 5. 全局重置 (当玩家在桌面重新选择语言时调用)
function resetScores() {
    localStorage.setItem('score_conspiracy', '0');
    localStorage.setItem('score_skeptic', '0');
    localStorage.setItem('score_meta', '0');
    console.log('%c[计分系统] 游戏进度重置，所有分数清零。', 'color: #888; font-style: italic;');
}

// 6. 获取当前所有分数状态 (供后续判定结局使用)
function getScores() {
    return {
        conspiracy: parseInt(localStorage.getItem('score_conspiracy') || '0'),
        skeptic: parseInt(localStorage.getItem('score_skeptic') || '0'),
        meta: parseInt(localStorage.getItem('score_meta') || '0')
    };
}

// 每次有页面加载此脚本时，自动初始化
initScores();