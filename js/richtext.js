function clearText(richText){
    var content = richText.replace(/<.+?>/g, '');
    content = content.replace(/ /ig, '');
    content = content.replace(/\s/ig, '');
    console.log(content);
}


function subcontent(richText){
  /* 限制字数后添加省略号 */
    let temporaryText = '';
    /* 设置多长后添加省略号 */
    const len = 142;
    if (richText.length * 2 <= len) {
      return richText;
    }
    /* 用于记录文字内容的总长度 */
    let strLength = 0;
    for (let i = 0; i < richText.length; i++) {
      temporaryText = temporaryText + richText.charAt(i);
      /* charCodeAt()返回指定位置的字符的Unicode编码，值为128以下时一个字符占一位，当值在128以上是一个字符占两位 */
      if (richText.charCodeAt(i) > 128) {
        strLength = strLength + 2;
        if (strLength >= len) {
          return temporaryText.substring(0, temporaryText.length - 1) + "...";
        }
      } else {
        strLength = strLength + 1;
        if (strLength >= len) {
          return temporaryText.substring(0, temporaryText.length - 2) + "...";
        }
      }
    }
    return temporaryText;
}
