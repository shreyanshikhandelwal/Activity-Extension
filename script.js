fetch('https://www.boredapi.com/api/activity')
.then(data => data.json())
.then(activeData => {
    const activeText = activeData.activity;
    const element = document.getElementById('element');
    element.innerHTML = activeText;
})