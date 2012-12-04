/**
 * Scaff - HTML5 JS 3D Web Layout
 * 
 * @author Adam Cox
 * @email adamdama@hotmail.com
 * @version 0
 * @created 04/12/2012
 */

$(document).ready(function()
{
	var angle = 45;
	$('section').each(function()
	{
		$(this).css('transform-z', angle);
		
		angle *= 2;
	});
});
