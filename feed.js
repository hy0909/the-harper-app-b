/* 에디터 큐레이션 피드: 접힌 카드를 누르면 펼치고, 펼쳐진 카드를 누르면 링크로 간다 */
(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll('.feed-card'));
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (card.classList.contains('feed-card--open')) return; /* 펼쳐진 카드는 그대로 이동 */
      e.preventDefault();
      cards.forEach(function (c) { c.classList.remove('feed-card--open'); });
      card.classList.add('feed-card--open');
    });
  });
})();
