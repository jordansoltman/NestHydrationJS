'use strict';

var NestHydrationJS = require('../../lib/NestHydrationJS')();

describe('NestHydrationJS', function () {
	describe('buildMeta method', function () {
		describe('simple mapping', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: 'aColumnName'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['aColumnName']],
					idMap: {
						aColumnName: {
							valueList: [
								{prop: 'a', column: 'aColumnName', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});
		
		describe('simple mapping with number type', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', type: 'NUMBER'}
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'a', column: 'a', type: 'NUMBER', default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});
		
		describe('simple mapping with boolean type', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', type: 'BOOLEAN'}
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'a', column: 'a', type: 'BOOLEAN', default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('simple mapping with id default value', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', type: 'BOOLEAN', default: 'a_default'}
				};
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'a', column: 'a', type: 'BOOLEAN', default: 'a_default'}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: 'a_default'}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('simple mapping with array flag', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', array: true}
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [],
							toOneList: [],
							toManyPropList: [],
							arraysList: [
								{prop: 'a', column: 'a', type: undefined, default: undefined}
							],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: 'a',
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'a', column: 'a', type: undefined, default: undefined},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping with single array flag', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', array: true},
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [
								{prop: 'a', column: 'a', type: undefined, default: undefined}
							],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping with both array flags', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', array: true},
					b: {column: 'b', array: true}
				};
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [],
							toOneList: [],
							toManyPropList: [],
							arraysList: [
								{prop: 'a', column: 'a', type: undefined, default: undefined},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping having id with default', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					a: {column: 'a', default: 'a_default'},
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['a']],
					idMap: {
						a: {
							valueList: [
								{prop: 'a', column: 'a', type: undefined, default: 'a_default'},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: {a: 'a_default'}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping complex having default', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					id: 'id',
					a: {
						c: {column: 'c', default: 'c_default'}
					},
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['id']],
					idMap: {
						c: {
							valueList: [
								{prop: 'c', column: 'c', type: undefined, default: 'c_default'}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: ['id'],
							ownProp: 'a',
							isOneOfMany: false,
							cache: {},
							containingIdUsage: {},
							defaults: {c: 'c_default'}
						},
						id: {
							valueList: [
								{prop: 'id', column: 'id', type: undefined, default: undefined},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [{prop: 'a', column: 'c'}],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: { id: null }
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping complex with array flag', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					id: 'id',
					a: {
						c: {column: 'c', array: true}
					},
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['id']],
					idMap: {
						c: {
							valueList: [],
							toOneList: [],
							toManyPropList: [],
							arraysList: [
								{prop: 'c', column: 'c', type: undefined, default: undefined}
							],
							containingColumn: ['id'],
							ownProp: 'a',
							isOneOfMany: false,
							cache: {},
							containingIdUsage: {},
							defaults: {c: null}
						},
						id: {
							valueList: [
								{prop: 'id', column: 'id', type: undefined, default: undefined},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [{prop: 'a', column: 'c'}],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: { id: null }
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping complex with composite id', function () {
			var result;
			beforeEach(function () {
				var mapping = {
					id: 'id',
					a: {
						c: {column: 'c', id: true},
						d: {column: 'd', id: true}
					},
					b: 'b'
				};
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['id']],
					idMap: {
						'c, d': {
							valueList: [ 
								{ prop: 'c', column: 'c', type: undefined, default: undefined },
								{ prop: 'd', column: 'd', type: undefined, default: undefined } 
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: ['id'],
							ownProp: 'a',
							isOneOfMany: false,
							cache: {},
							containingIdUsage: {},
							defaults: {c: null, d: null}
						},
						id: {
							valueList: [
								{prop: 'id', column: 'id', type: undefined, default: undefined},
								{prop: 'b', column: 'b', type: undefined, default: undefined}
							],
							toOneList: [{prop: 'a', column: 'c'}],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: false,
							cache: {},
							containingIdUsage: null,
							defaults: { id: null }
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping array', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: '_a',
					b: '_b'
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a']],
					idMap: {
						_a: {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: undefined},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: { a: null }
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});
		
		describe('multiple mapping array, id being non first', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: '_a',
					b: {column: '_b', id: true}
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_b']],
					idMap: {
						_b: {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: undefined},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: {b: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});
		
		describe('multiple mapping array with id having type', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: {column: '_a', type: 'NUMBER'},
					b: '_b'
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a']],
					idMap: {
						_a: {
							valueList: [
								{prop: 'a', column: '_a', type: 'NUMBER', default: undefined},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping array with id having default', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: {column: '_a', default: 'a_default'},
					b: '_b'
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a']],
					idMap: {
						_a: {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: 'a_default'},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: {a: 'a_default'}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping array with composite id', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: {column: '_a', id: true},
					b: {column: '_b', id: true}
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a', '_b']],
					idMap: {
						'_a, _b': {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: undefined},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: {a: null, b: null}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping array with composite id and defaults', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: {column: '_a', id: true, default: 'a_default'},
					b: {column: '_b', id: true, default: 'b_default'}
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});

			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a', '_b']],
					idMap: {
						'_a, _b': {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: 'a_default'},
								{prop: 'b', column: '_b', type: undefined, default: 'b_default'}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: {a: 'a_default', b: 'b_default'}
						}
					}
				};
				expect(result).toEqual(expected);
			});
		});

		describe('multiple mapping complex', function () {
			var result;
			beforeEach(function () {
				var mapping = [{
					a: '_a',
					b: '_b',
					c: {
						d: '_c_d'
					},
					e: [{
						f: '_e__f',
						g: '_e__g'
					}]
				}];
				result = NestHydrationJS.buildMeta(mapping);
			});
			
			it('should match expected structure', function () {
				var expected = {
					primeIdColumnList: [['_a'], ['_e__f']],
					idMap: {
						'_a': {
							valueList: [
								{prop: 'a', column: '_a', type: undefined, default: undefined},
								{prop: 'b', column: '_b', type: undefined, default: undefined}
							],
							toOneList: [
								{prop: 'c', column: '_c_d'}
							],
							toManyPropList: [
								'e'
							],
							arraysList: [],
							containingColumn: null,
							ownProp: null,
							isOneOfMany: true,
							cache: {},
							containingIdUsage: null,
							defaults: { a: null }
						},
						'_c_d': {
							valueList: [
								{prop: 'd', column: '_c_d', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: ['_a'],
							ownProp: 'c',
							isOneOfMany: false,
							cache: {},
							containingIdUsage: {},
							defaults: { d: null }
						},
						'_e__f': {
							valueList: [
								{prop: 'f', column: '_e__f', type: undefined, default: undefined},
								{prop: 'g', column: '_e__g', type: undefined, default: undefined}
							],
							toOneList: [],
							toManyPropList: [],
							arraysList: [],
							containingColumn: ['_a'],
							ownProp: 'e',
							isOneOfMany: true,
							cache: {},
							containingIdUsage: {},
							defaults: { f: null }
						}
					}
				};
				expect(result.primeIdColumnList).toEqual(expected.primeIdColumnList);
				expect(result.idMap['_a']).toEqual(expected.idMap['_a']);
				expect(result.idMap['_c_d']).toEqual(expected.idMap['_c_d']);
				expect(result.idMap['_e__f']).toEqual(expected.idMap['_e__f']);
				// expect(result).toEqual(expected);
			});
		});
		
		describe('malformed mapping, empty array in place as property', function () {
			var error;
			beforeEach(function () {
				var mapping = {
					a: []
				};
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - property \'a\' can not be an empty array');
			});
		});
		
		describe('malformed mapping, base array should not have a multiple items as there can only be one root to the datastructure', function () {
			var error;
			beforeEach(function () {
				// bad formatting, doesn't even make sense really
				var mapping = [
					{a: 'rootA_'},
					{b: 'rootB_'}
				];
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - can not have multiple roots for structPropToColumnMap, if an array it must only have one item');
			});
		});
		
		describe('malformed mapping, number as property', function () {
			var error;
			beforeEach(function () {
				var mapping = {
					a: 5
				};
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - property \'a\' must be either a string, a plain object or an array');
			});
		});
		
		describe('malformed mapping, non plain object as property', function () {
			var error;
			beforeEach(function () {
				var mapping = {
					a: new Error()
				};
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - property \'a\' must be either a string, a plain object or an array');
			});
		});
		
		describe('malformed mapping, empty object as property', function () {
			var error;
			beforeEach(function () {
				var mapping = {
					a: {}
				};
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - property \'a\' can not be an empty object');
			});
		});
		
		describe('malformed mapping, empty object as property', function () {
			var error;
			beforeEach(function () {
				var mapping = {};
				
				try {
					NestHydrationJS.buildMeta(mapping);
				} catch (err) {
					error = err;
				}
			});
			
			it('should match expected error', function () {
				expect(error.message).toEqual('invalid structPropToColumnMap format - the base object can not be an empty object');
			});
		});
	});
});
