// widget.js
(function() {
    var container = document.getElementById('widget-container'); // Assuming there's a container element with ID "widget-container"
    var iframe = document.createElement('iframe');
    iframe.src = 'https://lucent-starlight-8fc3b9.netlify.app/custom-widget.html'; // Replace with the URL of your widget's HTML file hosted on Netlify
    iframe.width = '220';
    iframe.height = '100';
    iframe.style.border = 'none';
    container.appendChild(iframe);
})();
