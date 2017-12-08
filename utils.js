if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame ||
      window.msRquestAniamtionFrame ||
      window.oRequestAnimationFrame || 
      function (callback){
          return setTimeout(callback,Math.floor(1000/60))
    }
  )
}

