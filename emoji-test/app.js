(function (window, emojis) {
  const smiley = ':)';
  const redHeart = '<3';
  const smileyImage = `<img  src=${emojis[':)']} alt=""/>`;
  const redHeartImage = `<img  src=${emojis['<3']} alt=""/>`;

  const el = document.getElementById('user-input');
  el.addEventListener("input", function () {
      setImageAndCaretposition(this);
  });

  function setImageAndCaretposition(containerEl) {

      var sel, range, text;

      if (window.getSelection) {
          sel = window.getSelection();
          if (sel.rangeCount > 0) {
              range = sel.getRangeAt(0).cloneRange(); 
              range.collapse(true);
              range.setStart(containerEl, 0);
              text = range.toString();
          }
      }

      if (text && text.slice(-2) == smiley) {
          range.setStart(range.endContainer, range.endOffset - smiley.length);
          range.setEnd(range.endContainer, range.endOffset);
          range.deleteContents();
          range.insertNode(document.createTextNode(' '));

          var el = document.createElement("div");
          el.innerHTML = smileyImage;
          var frag = document.createDocumentFragment(), node, lastNode;
          while ((node = el.firstChild)) {
              lastNode = frag.appendChild(node);
          }
          var firstNode = frag.firstChild;
          range.insertNode(frag);

          // Preserve the selection
          if (lastNode) {
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
          }

          return true;
      }
      else if (text && text.slice(-2) == redHeart) {
          range.setStart(range.endContainer, range.endOffset - redHeart.length);
          range.setEnd(range.endContainer, range.endOffset);
          range.deleteContents();
          range.insertNode(document.createTextNode(' '));

          var el = document.createElement("div");
          el.innerHTML = redHeartImage;
          var frag = document.createDocumentFragment(), node, lastNode;
          while ((node = el.firstChild)) {
              lastNode = frag.appendChild(node);
          }
          var firstNode = frag.firstChild;
          range.insertNode(frag);

          // Preserve the selection
          if (lastNode) {
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
          }

          return true;
      }

      return false;

  }
})(window, {
  ':)': './img/smiling-face.png',
  '<3': './img/heart-red.png'
});