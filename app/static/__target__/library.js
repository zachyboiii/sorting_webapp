// Transcrypt'ed from Python, 2024-09-13 03:53:11
var random = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, _sort, abs, all, any, assert, bin, bool, bytearray, bytes, callable, chr, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, hex, input, int, isinstance, issubclass, len, list, map, max, min, object, oct, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_random__ from './random.js';
__nest__ (random, '', __module_random__);
var __name__ = '__main__';
export var gen_random_int = function (number, seed) {
	random.seed (seed);
	var arr = [];
	for (var i = 0; i < number; i++) {
		arr.append (random.randint (0, 10));
	}
	return arr;
};
export var generate = function () {
	var number = 10;
	var seed = 200;
	var array = gen_random_int (10, 200);
	var array_str = listToStr (array);
	var array_str = array_str + '.';
	document.getElementById ('generate').innerHTML = array_str;
};
export var sortnumber1 = function () {
	var nums_str = document.getElementById ('generate').innerHTML;
	var nums_str = nums_str.__getslice__ (0, -(1), 1).py_split (', ');
	var nums = [];
	for (var i of nums_str) {
		nums.append (int (i));
	}
	bubbleSort (nums);
	var array_str = listToStr (nums);
	var array_str = array_str + '.';
	document.getElementById ('sorted').innerHTML = array_str;
};
export var sortnumber2 = function () {
	var value = document.getElementsByName ('numbers') [0].value;
	if (value == '') {
		window.alert ('Your textbox is empty');
		return ;
	}
	var value = value.py_split (', ');
	var nums = [];
	for (var i of value) {
		nums.append (int (i));
	}
	bubbleSort (nums);
	var array_str = listToStr (nums);
	document.getElementById ('sorted').innerHTML = array_str;
};
export var listToStr = function (array) {
	var array_str = ', '.join ((function () {
		var __accu0__ = [];
		for (var x of array) {
			__accu0__.append (str (x));
		}
		return py_iter (__accu0__);
	}) ());
	return array_str;
};
export var bubbleSort = function (array) {
	var n = len (array);
	var swapped = true;
	while (swapped == true) {
		var swapped = false;
		var new_n = 0;
		for (var j = 1; j < n; j++) {
			if (array [j - 1] > array [j]) {
				var __left0__ = tuple ([array [j], array [j - 1]]);
				array [j - 1] = __left0__ [0];
				array [j] = __left0__ [1];
				var swapped = true;
				var new_n = j;
			}
		}
		var n = n - 1;
	}
};

//# sourceMappingURL=library.map