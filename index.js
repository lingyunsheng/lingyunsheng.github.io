function getUrlParam(sUrl, sKey) {
    if(!sUrl || typeof sUrl !== 'string') {
        return sKey ? '' : {}
    }
   let arr =  sUrl.split('?')[1].split('#')[0].split('&')
   for(let i=0; i