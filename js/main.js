$(document).ready(init);

function init(){
	$("#revista").booklet(
		{
		width: 1200,
		height: 400,
		closed: true,
		
		autoCenter: true,
		pagePadding: 0,
		hoverWidht: 100,
		pageNumbers: false,

		}
	);
}
