
// draw the player collisions
context.fillStyle = "#FF0";
context.fillRect(player.position.x, player.position.y, TILE, TILE);

// draw the collision map
context.fillStyle = "#f00";
for (var i = 0; i < cells.length; ++i) {
	if (i != 1) continue;
	var layer = cells[i];
	for (var y = 0; y < layer.length; ++y) {
		var row = layer[y];
		for (var x = 0; x < row.length; ++x) {
			var cell = row[x];
			if (cell) {
				context.fillRect(x * TILE - 1, y * TILE - 1, TILE - 2, TILE - 2);
			}
		}
	}
}
