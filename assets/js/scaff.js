/**
 * Scaff - HTML5 JS 3D Web Layout
 * 
 * @author Adam Cox
 * @email adamdama@hotmail.com
 * @version 0
 * @created 04/12/2012
 */

/**
 * Scaff constructor sets the root property ready for initialisation
 * @constructor 
 * @param {Object} selector Object or String to be passed to jQuery selector to be set as root property
 */
var Scaff = function(selector)
{
	this.root = $(selector);
	this.panels = new Array();
};

/**
 * Prototype definition for Scaff 
 */
Scaff.prototype = 
{
	/**
	 * The root element of Scaff stored as a jQuery object
	 */
	root: null,
	/**
	 * Collection of all the panels that make up Scaff
	 */
	panels: null,
	/**
	 * Initialisation method for Scaff.
	 * Collects all divs on root and arranges them in a row 
	 */
	init: function()
	{
		
	}
};

/**
 * Class representing each panel
 * 
 * @param {Object} element the container div that the panel is to be made from
 */
var Panel = function(element)
{
	
};

/**
 * Prototype definition for Panel
 */
Panel.prototype = 
{
	
};
