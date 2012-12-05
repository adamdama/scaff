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
 * @param {Object} selector Object or String to be passed to jQuery selector to
 * be set as root property
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
	 * Collects all divs on root and arranges them
	 */
	init: function()
	{
		// put the first panel on the left hand side
		var angle = -75,
			left = 0,
			scaff = this;

		// loop over panels positioning them
		$('div', this.root).each(function(index)
		{
			var $this = $(this);
			$this.addClass('panel ' + $this.index()).css(
			{
				'position': 'absolute',
				'left': left,
				'-webkit-transform': 'rotateY('+angle+'deg) translateZ('+$this.width()*$this.index()+'px)'
			});

			scaff.panels.push($this);

			left += $this.width();
			angle += 90

		}).wrapAll($('<div id="scaffolding" />'));
	}
};

// /**
// * Class representing each panel
// *
// * @param {Object} element the container div that the panel is to be made from
// */
// var Panel = function(elem)
// {
// this.element = elem;
// this.element.addClass('panel ' + elem.index()).css(
// {
// 'position': 'absolute',
// 'left': 'block',
//
// });
// };
//
// /**
// * Prototype definition for Panel
// */
// Panel.prototype =
// {
// /**
// * Property to store the element this panel represents
// */
// element: null
// };
