$(function(){
	$('.dropdown-menu.catalog-select a').click(function(e){
		e.preventDefault();
		let letter = $(this).text();
		$('#letter').attr('value',letter);
		$('.dropdown-toggle').html(letter+' <span class="caret"></span>');
	});
	/* $('input[name="phone"').inputmask("+7 (999) 999-99-99"); */
})

/* close modal after the form sending */
$(document).on('af_complete', function(event,res) {
    var form = res.form;
    if (form.attr('id') == 'questionnaire-form') {
    		$('#q-modal').modal('show');
    } else {
    		if(res.success) $('.modal-dialog button.close').click();
    }
});

let buttonsRev = document.querySelectorAll('.reviews_name');
let company_country = document.querySelectorAll('.company_title');
let findInputCompany = document.querySelector('.compony_name');

buttonsRev.forEach((item, index) => { //форич по кнопкам
    item.addEventListener('click', (e) => {
        let target = e.currentTarget;
        company_country.forEach((item, findex) => { //форич по названию
        	if(index === findex){
        		findInputCompany.value = item.textContent; //присваимваем значение для скрытого инпута
        	}
        })
        
    })
});


