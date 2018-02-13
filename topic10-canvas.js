function drawCanvas() {


		var x = document.getElementById('draw').getContext('2d');
		x.canvas.addEventListener('mousemove', function(event){
			var mouseX = event.clientX - x.canvas.offsetLeft;
			var mouseY = event.clientY - x.canvas.offsetTop;
			var status = document.getElementById('status');
			status.innerHTML = mouseX+" | "+mouseY;
		});
		x.canvas.addEventListener('click', function(event){
				var mouseX = event.clientX - x.canvas.offsetLeft;
				var mouseY = event.clientY - x.canvas.offsetTop;
				//alert(mouseX+" | "+mouseY);
				x.fillStyle = "red";
				x.fillRect(mouseX-10, mouseY-10, 20, 20);
			
		});
	
}
window.addEventListener('load', function(event) {
	drawCanvas();
});