$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[10];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});
});

