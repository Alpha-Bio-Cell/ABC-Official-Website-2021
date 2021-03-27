(function($,document,window,undefined){

	$.fn.MWslider = function(config){
		
			this.elements = this.find("img");
			this.center = this.elements.filter(".center").index();

		var that= this,
			config=$.fn.MWslider.getConfig(config);

		$.fn.MWslider.setHeight(that);
		$(window).on("resize",function(){$.fn.MWslider.setHeight(that);});

		var move=$.fn.MWslider.moveSlider;
		$.fn.MWslider.addNav(that,move,config);




		that.mouse(function(e){
			$.fn.MWslider.mouseFollow.call(that,e,this.elements);
		});
		return that;
	}


	$.fn.MWslider.setHeight = function(that){

		var width=that.width(),
			proportion=parseInt(that.css("max-width"))/parseInt(that.css("max-height"));

			that.css("height",width/proportion);
		console.log(width,proportion);
	}

	$.fn.MWslider.mouseFollow = function(e,elem){
		var width = $(window).innerWidth();
			height = this.height();
	}


	

	$.fn.MWslider.addNav = function(that,f1,settings){
		var leftArrow=$("<div class='navContainer'><div class='"+settings.nav.leftClass+"'></div>").prependTo(that),
			rightArrow=$("<div class='navContainer'><div class='"+settings.nav.rightClass+"'></div>").appendTo(that);
		leftArrow.on("click",function(){f1(that,"left",settings);});
		rightArrow.on("click",function(){f1(that,"right",settings);});
	}



	$.fn.MWslider.getConfig = function(config){

		var defaultConfig = {
			"duration" : 500,
			"nav" : {
				"leftClass":"leftClass",
				"rightClass":"rightClass"	
			}
		}

		if(!(config instanceof Object))
		{
			return $.extend({},defaultConfig,config);
		}
		else
		{
			return $.extend({},defaultConfig);
		}
	}

	$.fn.MWslider.checkPosition = function(cent,len){
			var left=(cent-1)<0 ? len-1 : cent-1,
			right=(cent+2)>len ? 0 : cent+1,
			prevleft=(left-1)<0 ? len-1 : left-1,
			prevright=(right+2)>len ? 0 : right+1
			return [left,cent,right,prevleft,prevright];
	}

	$.fn.MWslider.moveSlider = function(that,side,config){

		var len=that.elements.length;

		if(side==="right")
			that.center= that.center+2>len ? 0 : that.center+1;		
		else if(side==="left")
			that.center= that.center-1<0 ? len-1 : that.center-1;


		var pos=$.fn.MWslider.checkPosition(that.center,len);
				
		that.elements.removeClass();
		that.elements.eq(pos[3]).addClass("right1");
		that.elements.eq(pos[2]).addClass("right");				
		that.elements.eq(pos[1]).addClass("center");
		that.elements.eq(pos[0]).addClass("left");
		that.elements.eq(pos[4]).addClass("left1");


	}



	$(window).on("load",function(){
		$(".slider").MWslider();
	});

})(jQuery,document,window);