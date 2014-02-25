var join = require('path').join;
    fs = require('fs'),
    exists = fs.existsSync,
    read = fs.readFileSync;

var find = function(path, filename) {
	if (!path.length) {
		return null;
	}

	var filepath = join(path, filename);
	if (exists(filepath)) {
		return read(filepath).toString();
	}

	return find(path.slice(0, path.lastIndexOf('/')), filename);
};

module.exports = find;
