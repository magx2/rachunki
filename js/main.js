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

$('#recount').click(function () {
	var rows = $('#expense-table tbody tr');
	var idx;
	for (idx = 0, len = rows.length; idx < len; ++idx) {
		var row = rows[idx];
		var quantity = parseFloat(row.find(".quantity"));
		var value = parseFloat(row.find(".value"));

		console.log(quantity + " * " + value + " " + " = " + (quantity * value));
		row.find(".sum").text(quantity * value);
	}
	console.log(rows[0]);
});