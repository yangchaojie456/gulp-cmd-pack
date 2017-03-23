define(function(require,exports,module){
	function fn(){
		console.log('hello module a');
	}
	module.exports.fn = fn;
})