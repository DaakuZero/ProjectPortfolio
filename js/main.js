$(document).ready(function() {

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	// MixItUp - фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery


}); 

// code for filter.highlight on click
var filters = document.getElementsByClassName('filterDiv__button');

for (let filterCount = 0; filterCount < filters.length; filterCount++) {	// on every filter search for
	
	filters[filterCount].addEventListener('click', function() {				// click.
		
		if (!filters[filterCount].classList.contains('filterDiv__button--active')) {	// on click if no highlight
			
			for (let otherFilterCount = 0; otherFilterCount < filters.length; otherFilterCount++) {		// disable highlight for all.
				filters[otherFilterCount].classList.remove('filterDiv__button--active');
			}
			
			filters[filterCount].classList.add('filterDiv__button--active');	// enable highlight for clicked filter.
		}
	})
}