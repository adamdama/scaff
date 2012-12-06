/**
 * Scaff - HTML5 JS 3D Web Layout
 *
 * @author Adam Cox
 * @email adamdama@hotmail.com
 * @version 0
 * @created 04/12/2012
 */

/**
 * Scaff constructor sets the $root property ready for initialisation
 * @class Scaff
 * @constructor
 * @property {jQuery} $root jQuery object of root element
 * @property {Array} elements a collection of all root the elements that make up the scaffolding
 * @param {Object} selector Object or String to be passed to jQuery selector to be set as $root property
 */
var Scaff = function(selector)
{
	this.$root = $(selector);
	this.elements = new Array();
};

/**
 * Prototype definition for Scaff
 */
Scaff.prototype =
{
	/**#@+
	  @memberOf Scaff
	*/
	/**
	 * The $root element of Scaff stored as a jQuery object
	 * @type jQuery
	 */
	$root: null,
	/**
	 * Collection of all the elements that make up Scaff
	 * @type Array
	 */
	elements: null,
	/**
	 * Initialisation method for Scaff.
	 * Collects all divs on $root and calls distribute
	 * @see Scaff.distribute
	 */
	init: function()
	{
		var scaff = this;

		// loop over elements positioning them
		$('div', this.$root).each(function(index)
		{
			var $this = $(this);
			
			$this.addClass('elem ' + $this.index());
			scaff.elements.push($this);

		}).wrapAll($('<div id="scaffolding" />')).wrapAll('<div class="frame" />');
		
		this.distribute();
		
		//fade in scaff
		this.$root.fadeIn(1000);
	},
	/**
	 * Method to distribute the elements.
	 * Sets next and previous element data on each element.
	 * Sets each elements place in the scaffolding
	 */
	distribute: function()
	{
		if(this.elements.length === 0)
			return;
			
		var prev,
			first,
			angle = 0,
			left = 0
			axis = ['X','Y','Z'],
			count = 0,
			/** 
			 * @description Utility function for getting the next axis
			 * @return {string} X, Y or Z */
			getAxis = function()
			{
				var a = axis[count];
				
				count++;
				
				if(count >= axis.length)
					count = 0;
					
				return a;
			};
			
		$(this.elements).each(function()
		{
			// set data on each element about the next and previous element
			var $this = $(this);
			
			$this.data('prev', prev);
				
			if(prev)
				prev.data('next', $this);
			
			prev = $this;
			
			if(!first)
				first = $this;
			
			// position each element			
			$this.css(
			{
				'position': 'absolute',
				'left': left,
				'-webkit-transform': 'rotate'+getAxis()+'('+angle+'deg) translate'+getAxis()+'(100px)',
				'-webkit-perspective': left+'px'
			})

			left += $this.width();
			angle += 45 + Math.round(Math.random() * 35);
		});
	}
	/**#@-*/
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
