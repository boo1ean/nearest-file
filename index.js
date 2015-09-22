var pathModule = require('path'),
    fs = require('fs');

var find = function(path, filename) {
	if (!path) {
		return null;
	}

	var filepath = pathModule.join(path, filename);
	if (fs.existsSync(filepath)) {
		return fs.readFileSync(filepath).toString();
	}

	var nextpath = pathModule.dirname(path);
	return find(nextpath !== path ? nextpath : '', filename);
};

module.exports = find;
