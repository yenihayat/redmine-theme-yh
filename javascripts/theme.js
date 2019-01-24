
function createBtn() {
	$("input[type=submit]").addClass("btn btn-sm btn-primary");
	$(".tab-content p a.icon").addClass("btn btn-sm btn-primary");
	$("#login-submit").addClass("btn btn-sm btn-primary");
	$("input[type=submit] + a.icon").addClass("btn btn-sm btn-outline-dark");
	$(".controller-enumerations.action-index #content p > a.icon").addClass("btn btn-sm btn-primary");
	$("#ajax-modal input[type=button]").addClass("btn btn-sm btn-outline-dark");
	$("#content").children(".contextual").find("a:first").addClass("btn btn-sm btn-primary");
	$("#content").children(".contextual").find("a:not(:first):not(.lock)").addClass("btn btn-sm btn-outline-dark");
	
	$(".issue .description .contextual a").addClass("btn btn-sm btn-outline-dark");
	$(".issue #relations .contextual a, .issue #issue_tree .contextual a").addClass("btn btn-sm btn-outline-dark");

	$("#content .contextual a.lock").addClass("btn btn-sm btn-danger");
	$(".news.box a:last").addClass("btn btn-sm btn-outline-dark");
	$("p.buttons a").addClass("btn btn-sm btn-outline-dark");
	$(".icon-fav-off").addClass("btn btn-sm btn-outline-dark");
	$("#activity_scope_form").find("p input").addClass("btn btn-sm btn-dark");
	$("table.query-columns .buttons input[type=button]").addClass("btn btn-sm btn-outline-dark");
}

function createDOMObserver(targetNode, callback) {
	if (targetNode) {
		const config = { attributes: true, childList: true, subtree: true };
		const observer = new MutationObserver(callback);
		observer.observe(targetNode, config);	
	}
}

function init() {
	$("table").wrap("<div class='table'></div>");
	$( "#ajax-modal" ).on( "dialogopen", function( event, ui ) {
		createBtn();	
	});
	createBtn();
	createDOMObserver(document.querySelectorAll('body')[0], (mutationsList, observer) => {
		for(var mutation of mutationsList) {
			console.log(mutation.type)
        if (mutation.type == 'attributes') {
          $("#member-add-submit").addClass("btn btn-sm btn-primary");
	 				$("#member-add-submit + input").addClass("btn btn-sm btn-outline-dark");
        }
    }
	});
}


$(document).ready(function() {
	init();
});