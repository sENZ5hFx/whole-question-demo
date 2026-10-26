const test=require('node:test');const assert=require('node:assert/strict');const {assess,publicExport}=require('./engine.js');
for(const c of ['draft','signal','release'])test(c+' empty evidence stays bounded',()=>{const x=assess(c,[]);assert(x.next);assert(x.limit);assert.equal(x.selected.length,0)});
test('rejection is not diagnosis',()=>assert.match(assess('draft',['d1']).title,/still open/));
test('specific feedback changes interpretation',()=>assert.match(assess('draft',['d2']).title,/stable criterion/));
test('missed requirement retained',()=>assert.match(assess('draft',['d3']).title,/Repair/));
test('copies not independent',()=>assert.match(assess('signal',['s1','s2']).title,/one underlying/));
test('independent evidence changes interpretation',()=>assert.match(assess('signal',['s3']).title,/Support expansion/));
test('old candidate not current',()=>assert.match(assess('release',['r1','r2']).title,/missing/));
test('runtime alone not disclosure',()=>assert.match(assess('release',['r3']).title,/disclosure review is missing/));
test('review plus runtime not hosting',()=>assert.match(assess('release',['r2','r3']).interpretation,/do not establish/));
test('reject unknown case',()=>assert.throws(()=>assess('private',[]),RangeError));
test('reject foreign evidence',()=>assert.throws(()=>assess('draft',['r1']),RangeError));
test('reject string boolean or object coercion',()=>assert.throws(()=>assess('draft',[false]),TypeError));
test('duplicate evidence does not inflate',()=>assert.equal(assess('draft',['d1','d1']).selected.length,1));
test('export allowlist strips injected personal fields',()=>{const x=publicExport({...assess('draft',[]),email:'TEST_NOT_RETAINED_573',privateNotes:'secret'});assert(!JSON.stringify(x).includes('TEST_NOT_RETAINED'));assert(!Object.hasOwn(x,'email'));assert.equal(x.data,'fictional')});
test('export recomputes interpretation rather than trusting injected claims',()=>assert.notEqual(publicExport({...assess('draft',[]),title:'certified genius'}).title,'certified genius'));
// Exhaustively check all 24 evidence subsets. This is rule coverage, not real-world validity.
for(const [c,ids] of Object.entries({draft:['d1','d2','d3'],signal:['s1','s2','s3'],release:['r1','r2','r3']}))for(let mask=0;mask<8;mask++)test(`${c} subset ${mask} deterministic`,()=>{const sel=ids.filter((_,i)=>mask&(1<<i));assert.deepEqual(assess(c,sel),assess(c,[...sel].reverse()));assert.deepEqual(publicExport(assess(c,sel)).selected,[...sel].sort())});
