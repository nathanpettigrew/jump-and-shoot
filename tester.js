window.onload = function () {

var tests = document.getElementsByClassName("a-test");
for (var testIndex = 0; testIndex < tests.length; ++testIndex) {
	
	var test = tests[testIndex];
	var result = "";
	result +=("<h1>" + test.attributes["data-name"].value + " (Test " + (parseInt(testIndex) + 1) + "/" + tests.length + ")" + "</h1>")

	result +=("<table>");
	result +=("<tr><th>Setup Code</th><th>Checked Expression</th><th>Result</th></tr>");
	
	var lines = test.innerHTML.match(/[^\r\n]+/g);
	var executableCode = "";
	for (var lineIndex = 0; lineIndex < lines.length; ++lineIndex) {
		var line = lines[lineIndex].replace(/^\s+|\s+$/g, '');
		if (line.length > 3 && line.substr(0, 3) == "//$") {
			result +=("<tr>");
			
			result +=("<td class='codes'>");
			result += "<p>";
			result +=(executableCode.replace(/\r\n/g, "</p><p>"));
			result += "</p>";
			result +=("</td>");
			
			var checkException = null;
			var checkResult = false;
			var setupException = null;
			
			result +=("<td>");
			
			try {
				eval(executableCode);
			} catch (ex) {
				setupException = ex;
			}
			if (setupException) {
				result +=("Nothing checked, setup code caused exception");
			} else {
				result += "<span class='codes'>";
				var checkExpression = line.substr(3);
				result +=(checkExpression);
				try {
					checkResult = eval(checkExpression);
				} catch (ex) {
					checkException = ex;
				}
				result += "</span>";
			}
			result +=("</td>");
			
			var finalException = setupException || checkException;
			result +=("<td class='" + ((finalException || !checkResult) ? "check-failed" : "check-success") + "'>");
			result +=(finalException || (checkResult ? "SUCCESS" : "FAILED"));
			result +=("</td>");
			
			result +=("</tr>");
		} else {
			if (executableCode.length != 0) executableCode += "\r\n";
			executableCode += line;
		}
	}
	
	result +=("</table>");
	
	document.body.innerHTML += result;
}

};