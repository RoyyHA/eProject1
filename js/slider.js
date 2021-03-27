<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script>


<script type="text/javascript">
$(document).ready(function(){
$(".custom-carousel").swipe({

	  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

		if (direction == 'left') $(this).carousel('next');
		if (direction == 'right') $(this).carousel('prev');

	  },
	  allowPageScroll:"vertical"

	});
		// This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
				if($(window).width() >= 992) {
            $('.custom-carousel .item').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<3;i++) {
			  itemToClone = itemToClone.next();

			  // wrap around if at end of item collection
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }

			  // grab item, clone, add marker class, add to collection
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  });
        }
        else if($(window).width() >= 768){
           $('.custom-carousel .item').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<2;i++) {
			  itemToClone = itemToClone.next();

			  // wrap around if at end of item collection
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }

			  // grab item, clone, add marker class, add to collection
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  });
        }
		else if($(window).width() <= 767){
           $('.custom-carousel .item').each(function(){
			var itemToClone = $(this);

			for (var i=1;i<1;i++) {
			  itemToClone = itemToClone.next();

			  // wrap around if at end of item collection
			  if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			  }

			  // grab item, clone, add marker class, add to collection
			  itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
			}
		  });
        }
	
        
    }).resize(); // This will simulate a resize to trigger the initial run.     
});
</script>