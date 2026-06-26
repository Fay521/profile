/**
 * Light's Profile - 多语言切换（共享逻辑）
 * 依赖：window.TRANSLATIONS 由各页面的 i18n-{page}.js 提供
 */

(function () {
  // 获取语言按钮，如果页面没有按钮则跳过
  var zhBtn = document.getElementById('zhBtn');
  var enBtn = document.getElementById('enBtn');

  function setLanguage(lang) {
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (window.TRANSLATIONS && window.TRANSLATIONS[lang] && window.TRANSLATIONS[lang][key]) {
        el.textContent = window.TRANSLATIONS[lang][key];
      }
    });

    // 更新语言按钮样式
    if (lang === 'zh' || lang === 'zh-CN') {
      if (zhBtn) { zhBtn.className = zhBtn.className.replace(/bg-white text-primary/g, 'bg-primary text-white').replace(/bg-primary text-white/g, 'bg-primary text-white'); }
      if (enBtn) { enBtn.className = enBtn.className.replace(/bg-primary text-white/g, 'bg-white text-primary'); }
    } else {
      if (enBtn) { enBtn.className = enBtn.className.replace(/bg-white text-primary/g, 'bg-primary text-white'); }
      if (zhBtn) { zhBtn.className = zhBtn.className.replace(/bg-primary text-white/g, 'bg-white text-primary'); }
    }

    // 更新页面标题
    if (window.TRANSLATIONS && window.TRANSLATIONS[lang] && window.TRANSLATIONS[lang].pageTitle) {
      document.title = window.TRANSLATIONS[lang].pageTitle;
    }
  }

  // 绑定语言按钮事件
  if (zhBtn) { zhBtn.addEventListener('click', function () { setLanguage('zh'); }); }
  if (enBtn) { enBtn.addEventListener('click', function () { setLanguage('en'); }); }

  // 初始化：默认中文
  if (window.TRANSLATIONS) {
    setLanguage('zh');
  }
})();