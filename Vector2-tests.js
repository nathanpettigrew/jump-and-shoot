
//Vector2 basic tests
//NOTE: These aren't too extensive, they are just some basic checks.

function test(what, check, expected) {
	var val = eval(check);
	document.writeln("<p>" + what + ": " + check + " " + (val == expected ? "SUCCESS" : "FAILED") + "</p>");
	document.writeln("<p>Expected: " + expected + "</p>");
	document.writeln("<p>Result: " + val + "</p>");
}

try {
	var a = new Vector2();
	a.set(2, 3);

	test("Setting part 1: ", "a.x", 2);
	test("Setting part 2: ", "a.y", 3);

	var b = new Vector2();
	b.set(7, 3);

	a.add(b);
	test("Adding part 1: ", "a.x", 9);
	test("Adding part 2: ", "a.y", 6);

	b.subtract(a);
	test("Subtracting part 2: ", "b.x", -2);
	test("Subtracting part 2: ", "b.y", -3);

	var c = new Vector2();
	c.set(0, -10000);
	c.normalize();

	test("Normalizing part 1: ", "c.x", 0);
	test("Normalizing part 2: ", "c.y", -1);
	
	document.writeln("All tests complete.");

} catch (ex) {
	document.writeln("Error before test code could finish: " + ex);
}
