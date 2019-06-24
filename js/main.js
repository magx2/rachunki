$(".editable").dblclick(event, function () {
	var span = $(event.target);
	var text = span.text();
	span.empty();
	var edit = $("<input type=\"text\" id=\"editing\" value='" + text + "' />");
	span.append(edit)
	edit.focusout(function () {
		console.log("out");
		var text = edit.val();
		span.empty();
		span.append(text);
	});
});

