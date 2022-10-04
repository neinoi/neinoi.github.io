onload = (event) => { 
	initFilters();
};

function initFilters(){

	const els = document.getElementsByClassName('filter')
	
	for (const elt of els){
		initFilter(elt);
	}

}

function initFilter(elFilter){
	elFilter.addEventListener('click', function(ev){
		filter(elFilter, elFilter.dataset.filter);
	});
}

function filter(element, skill){
	
	undo = element.classList.contains('selectedFilter');
	
	els = document.getElementsByClassName('filter')
	for (const elt of els){
		elt.classList.remove('selectedFilter');
	}

	els = document.getElementsByClassName('filtered')
	for (const elt of els){
		elt.style.display = undo?'block':'none';
	}

	if (!undo) {
		element.classList.add('selectedFilter');
	
		els = document.getElementsByClassName(skill)
		for (const elt of els){
			elt.style.display = 'block';
		}
	} 
}
