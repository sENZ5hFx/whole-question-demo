/* Public demonstration only. Hand-authored case rules; not AI inference. */
(function(root){
'use strict';
function assess(caseId, ids){
 if(!Array.isArray(ids)||ids.some(x=>typeof x!=='string')) throw new TypeError('Evidence IDs must be an array of strings');
 const allowed={draft:['d1','d2','d3'],signal:['s1','s2','s3'],release:['r1','r2','r3']};
 if(!Object.hasOwn(allowed,caseId)) throw new RangeError('Unknown case');
 if(ids.some(x=>!allowed[caseId].includes(x))) throw new RangeError('Unknown evidence for this case');
 const selected=[...new Set(ids)].sort(); const has=id=>selected.includes(id);
 let title,interpretation,next,limit;
 if(caseId==='draft'){
  if(has('d3')){title='Repair the missed requirement first.';interpretation='The brief asked for a scene; the delivered draft was a strategy outline. Rejection is compatible with an execution miss. It does not establish an impossible client.';next='Deliver one scene against the original acceptance criteria. Then ask whether the remaining objection concerns voice, content, or the criteria themselves.';}
  else if(has('d2')){title='A stable criterion is visible.';interpretation='The feedback identifies repeated structure and asks for a concrete scene. This weakens a blanket “nothing will satisfy them” explanation, without proving the draft was good.';next='Inspect the original brief and delivered draft together. Ask what actually changed, rather than asking for more praise or more words.';}
  else {title='The reason for rejection is still open.';interpretation='A rejected draft alone cannot distinguish unclear criteria, poor execution, changed preferences, or a mismatch of form.';next='Obtain the actual brief, draft, and feedback before assigning a personal explanation.';}
  limit='One fictional exchange cannot establish anyone’s personality or general ability.';
 }else if(caseId==='signal'){
  if(has('s3')){title='Support expansion fits the current evidence.';interpretation='The public documentation describes support coverage for an existing product. That is a stronger explanation of the jobs than an unannounced product launch, while other plans remain unknown.';next='Keep the inexpensive contingency; wait for a public release or a direct public commitment before changing the launch plan.';}
  else if(has('s2')){title='Three posts are one underlying signal.';interpretation='The listings are copies of the same requisition, not independent confirmations. New product, replacement hiring, and evergreen recruitment remain live explanations.';next='Find an independent dated artifact: a product release, technical documentation, or a public presentation.';}
  else {title='A possibility, not a launch announcement.';interpretation='A hiring post supports interest in a skill. It does not establish a product, timing, or intent.';next='Keep several explanations and seek an observation that would distinguish them.';}
  limit='Only fictional public professional signals are used. No covert collection or contact is needed.';
 }else{
  if(has('r3')&&has('r2')){title='The tested static package is ready to transfer.';interpretation='A current-candidate test receipt and the public-file review support sharing this static package. They do not establish that a hosted deployment exists.';next='Deploy only this reviewed public directory to an authorized host, verify the live bytes and interactions, and retain the previous release for rollback.';}
  else if(has('r3')){title='The candidate passed tests; disclosure review is missing.';interpretation='Runtime evidence is useful, but technical success does not decide whether the bundle is safe to disclose.';next='Review the exact output for personal data, source links, secrets, and proprietary implementation before transfer.';}
  else {title='Current-candidate proof is missing.';interpretation='A test on a previous build cannot certify a changed release. File review alone also cannot establish correct behavior.';next='Run the relevant checks on the exact release bytes and preserve their receipt.';}
  limit='Static-package readiness, hosted availability, security assurance, and user benefit are separate claims.';
 }
 return {caseId,selected,title,interpretation,next,limit};
}
function publicExport(result){
 if(!result||typeof result!=='object') throw new TypeError('Result required');
 const verified=assess(result.caseId,result.selected);
 return {format:'whole-question-demo/v1',data:'fictional',...verified};
}
const api={assess,publicExport};
if(typeof module!=='undefined'&&module.exports) module.exports=api;
else root.WholeQuestion=api;
})(typeof globalThis!=='undefined'?globalThis:this);
