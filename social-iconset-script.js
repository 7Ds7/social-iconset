var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if ( !isChrome ) {
  var si_doc = document._currentScript.ownerDocument
  var $ssheet = si_doc.querySelector('#SocialIconsetStyles');
  var $head = document.querySelector('head');
  $head.appendChild($ssheet);
}