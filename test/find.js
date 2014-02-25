var find = require('../'),
    join = require('path').join;

describe('Find file', function() {
	var path = join(__dirname, 'a/b/c/d');

	it('Should find nearest file', function() {
		find(path, 'a.txt').should.be.equal('a\n');
		find(path, 'b.txt').should.be.equal('b\n');
		find(path, 'c.txt').should.be.equal('c\n');
		find(path, 'd.txt').should.be.equal('d\n');
	})
});
