require(['app/model', 'app/view','app/controller', 'app/Vertex'], 
	function(model, view, controller, Vertex){
	var c = canvas.getContext('2d');
	c.height = window.innerHeight;
	c.width = window.innerWidth;
});