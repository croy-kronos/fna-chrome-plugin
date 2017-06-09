var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.textContent = '(function() {window.postMessage({type: "wtf", text: "Hi mommy"}, "*");})();'
document.head.appendChild(script);