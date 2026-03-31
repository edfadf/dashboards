(function(){
  if(sessionStorage.getItem('auth')!=='1'){
    var pw=prompt('Enter password:');
    if(pw!=='busty'){
      document.body.innerHTML='<p style="color:#888;padding:32px;text-align:center">Access denied.</p>';
      return;
    }
    sessionStorage.setItem('auth','1');
  }
})();
