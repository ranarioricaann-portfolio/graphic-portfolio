(function(){
  "use strict";
  // Footer year
  var y=document.getElementById("year");
  if(y){y.textContent=new Date().getFullYear();}
  // Mobile nav toggle (keyboard accessible: real <button> with aria-expanded)
  var toggle=document.querySelector(".nav-toggle");
  var nav=document.getElementById("main-nav");
  if(toggle&&nav){
    toggle.addEventListener("click",function(){
      var open=nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded",open?"true":"false");
    });
    nav.addEventListener("keydown",function(e){
      if(e.key==="Escape"){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.focus();}
    });
  }
  // Active nav state based on current file
  var page=(window.location.pathname.split("/").pop()||"index.html");
  if(page===""){page="index.html";}
  document.querySelectorAll(".main-nav a[data-nav]").forEach(function(a){
    if(a.getAttribute("data-nav")===page){a.setAttribute("aria-current","page");}
  });
  // Portfolio filters
  var buttons=document.querySelectorAll(".filter-btn");
  var cards=document.querySelectorAll(".project-card");
  if(buttons.length&&cards.length){
    buttons.forEach(function(btn){
      btn.addEventListener("click",function(){
        var f=btn.getAttribute("data-filter");
        buttons.forEach(function(b){b.setAttribute("aria-pressed","false");});
        btn.setAttribute("aria-pressed","true");
        cards.forEach(function(card){
          var show=(f==="all"||card.getAttribute("data-category")===f);
          card.hidden=!show;
        });
        var status=document.getElementById("filter-status");
        if(status){
          var visible=Array.prototype.filter.call(cards,function(c){return !c.hidden;}).length;
          status.textContent=visible+" project(s) shown.";
        }
      });
    });
  }
})();
