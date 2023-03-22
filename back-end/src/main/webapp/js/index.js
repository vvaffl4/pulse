
window.onload = async function() {
	const systems = await fetch('./systems').then(response => response.json());
	
	document.body.textContent = JSON.stringify(systems);
}