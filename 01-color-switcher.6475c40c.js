!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;t.addEventListener("click",(function(){e=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),this.disabled=!0})),n.addEventListener("click",(function(){clearInterval(e),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.6475c40c.js.map
