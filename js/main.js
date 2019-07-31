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

$("#add-row").click(function () {
	$('#expense-table tr:last').after('<tr>' +
		'<td><span class="editable">1</span></td>' +
		'<td><span class="editable">wypelnij</span></td>' +
		'<td><span class="editable">1,00</span></td>' +
		'<td><span class="editable">xxx</span>&nbsp;zł</td>' +
		'<td><span class="editable">xxx</span>&nbsp;zł</td>' +
		'</tr>');
});

function updateDate() {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + '.' + mm + '.' + yyyy + " r.";
	$("#date").text(today)
}

$(document).ready(function () {
	updateDate();
});