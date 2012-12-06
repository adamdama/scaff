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
	  @member Scaff
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
	 * Original HTML markup before Scaff modifications
	 * @type jQuery
	 */
	origData: null,
	/**
	 * Configuration data for Scaff
	 */
	config:
	{
		/**
		 * The minimum top value at distribution
		 */
		minTop: 0,
		/**
		 * The maximum top value at distribution
		 */
		maxTop: function()
		{
			return $(window).height();
		}
	},
	/**
	 * Initialisation method for Scaff.
	 * Collects all divs on $root and calls distribute
	 * @see Scaff.distribute
	 */
	init: function()
	{
		var scaff = this;
		
		// save the original state of root
		this.origData = this.$root.html();
		
		// create the initial scaffolding and frame
		var $scaffolding = $('<div id="scaffolding" />').append('<div id="scaff-frame" />');
		
		// loop over elements, wrap them and move them into the scaffolding
		this.$root.children('div').each(function(index)
		{
			var $this = $(this),
				$wrapper = $('<div class="elem">');
			
			$wrapper.append($this).appendTo($scaffolding);
			scaff.elements.push($wrapper);			
		});
		
		// add the scaffolding to the root
		$scaffolding.prependTo(this.$root)
		
		// start the distribution process
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
			left = 0,
			top = 0,
			numElems = this.elements.length,			
			rotationPerElem = 360 / numElems,
			xRotation,
			/**
			 * Utility function to set next and previous data on each element
			 * @param {Element} HTML element to set data on
			 */
			setNextPrev = function(elem)
			{
				// set data on each element about the next and previous element
				var $this = $(elem);
				
				$this.data('prev', prev);
					
				if(prev)
					prev.data('next', $this);
				
				prev = $this;
				
				if(!first)
					first = $this;
			};
		
		// loop over elements and position them
		$(this.elements).each(function(index)
		{
			setNextPrev(this);
			
			var $this = $(this),
				width = $this.width(),
				zTranslate = (width/2) / Math.tan(rotationPerElem * Math.PI/180);
			
        	xRotation = rotationPerElem * index;
        	
			// position each element			
			$this.css(
			{
				'position': 'absolute',
				//'left': left,
				//'top': top,
				'-webkit-transform': 'rotateX(' + xRotation + 'deg) translateZ(' + zTranslate + 'px)',
				'-webkit-perspective': left+'px'
			});
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

/**
 * Required jQuery plugins
 * 
 * @param {Object} jQuery a reference to the jQuery library
 */
(function(jQuery)
{
	/**
	 * InserAt jQuery plugin for inserting an element at a particular index
	 * 
	 * @param {Object} index index to insert at
	 * @param {Object} element element to insert
	 * @member jQuery
	 */
	jQuery.fn.insertAt = function(index, element)
	{
		var lastIndex = this.children().size();
		
		if (index < 0)
			index = Math.max(0, lastIndex + 1 + index);
			
		this.append(element);
		
		if (index < lastIndex)
			this.children().eq(index).before(this.children().last());
			
		return this;
	};
})($); 