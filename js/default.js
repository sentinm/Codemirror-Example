$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[900];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});
});

