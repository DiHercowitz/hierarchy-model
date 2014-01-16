/*
by Di Hercowitz o/
fb: facebook.com/dihercowitz
g+: dihercowitz@gmail.com
in: linkedin.com/in/dihercowitz
*/
var hmDynamicContent = $('.hierarchy-model-content-repeat').html();;
var hmContentSize = $('.hierarchy-model-content').outerWidth(true);
var hmMainWrapper = $('.hierarchy-model>li');

function clickCreateSameLevelElement () {
	var hmNewElement = $(hmDynamicContent);
	$(this).closest('ul').append(hmNewElement)
	hmNewElement.find('.btSameLevel').on('click',clickCreateSameLevelElement);
	hmNewElement.find('.btOtherLevel').on('click',clickCreateOtherLevelElement);
	hmNewElement.find('.btDelete').on('click',clickDeleteElement);				
};

function clickCreateOtherLevelElement () {
	var hmNewElement = $(hmDynamicContent)
	if ($(this).closest('li').find('>ul').length == 0) {
		$(this).closest('li').append('<ul></ul>');
	} else {
	};
	$(this).closest('li').find('>ul').append(hmNewElement);
	hmNewElement.find('.btSameLevel').on('click',clickCreateSameLevelElement);
	hmNewElement.find('.btOtherLevel').on('click',clickCreateOtherLevelElement);
	hmNewElement.find('.btDelete').on('click',clickDeleteElement);
};

function clickDeleteElement () {
	if ($(this).closest('li').siblings().length <= 0){
		$(this).closest('ul').addClass('hierarchy-model-deleted').delay(900).queue(function() {
			$(this).remove();
		});		
	} else {
		$(this).closest('li').addClass('hierarchy-model-deleted').delay(900).queue(function() {
			$(this).remove();
		});
	};
};
$('.btSameLevel').on('click',clickCreateSameLevelElement);	
$('.btOtherLevel').on('click',clickCreateOtherLevelElement);	
$('.btDelete').on('click',clickDeleteElement);