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

function printPdf(){
	
	elts = document.getElementsByClassName('pdf')
	for (const elt of elts){
		elt.style.display = "block";
	}
	
	const element = document.getElementById("content");
	html2pdf(element, {
		filename: 'Julien_Bellion-cv.pdf',
		margin:  0.5,
		jsPDF: { unit: 'cm', format: 'A4', orientation: 'portrait' }
	});
	
	setTimeout(() => {  
		elts = document.getElementsByClassName('pdf')
		for (const elt of elts){
			elt.style.display = "";
		}
	}, 5000);
	
	
}
