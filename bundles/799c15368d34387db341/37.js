(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1570:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(103),c=n.n(a),r=n(106),o=n.n(r),i=n(93),s=n.n(i),l=n(99),d=n.n(l),u=n(905),b=n(94),m=n(96);function C(e){let{onCancelClick:t,onSaveClick:n,isSaveDisabled:a=!1}=e;return s.a.createElement("div",{className:"mx_EditWysiwygComposer_buttons"},s.a.createElement(m.a,{kind:"secondary",onClick:t},Object(b.a)("Cancel")),s.a.createElement(m.a,{kind:"primary",onClick:n,disabled:a},Object(b.a)("Save")))}var f=n(97),v=n(101),j=n(111),O=n(211),g=n(612);var E=n(105),p=n(807),k=n(623);var S=n(420),w=n(228),x=n(98);function y(e){const t=Object(j.c)(),n=Object(E.b)();return Object(i.useMemo)((()=>{if(e&&t.room)return function(e,t,n){const a=new w.a(t,n);let c;if(e.hasEditorState())c=e.getSerializedParts().map((e=>a.deserializePart(e)));else{if("org.matrix.custom.html"===e.getEvent().getContent().format)return function(e){var t;return(null===(t=e.getEvent().getContent().formatted_body)||void 0===t?void 0:t.replace(/<mx-reply>.*<\/mx-reply>/,""))||""}(e);c=Object(S.b)(e.getEvent(),a,{shouldEscape:x.b.getValue("MessageComposerInput.useMarkdown")})}return c.reduce(((e,t)=>e+t.text),"")}(e,t.room,n)}),[e,t,n])}const h=["editorStateTransfer","className"],M=Object(i.forwardRef)((function(e,t){let{disabled:n}=e;return function(e,t){const n=Object(j.c)(),a=Object(i.useRef)(null),c=Object(i.useCallback)((c=>{var r;if(e||!t.current)return;const o=null!==(r=c.context)&&void 0!==r?r:j.a.Room;c.action===v.a.FocusEditMessageComposer&&Object(g.a)(t,o,n,a)}),[e,t,a,n]);Object(O.a)(f.a,c)}(n,t),null}));function D(e){let{editorStateTransfer:t,className:n}=e,a=o()(e,h);const r=y(t),l=!t||void 0!==r,{editMessage:b,endEditing:m,onChange:f,isSaveDisabled:v}=function(e,t){const n=Object(j.c)(),a=Object(E.b)(),[c,r]=Object(i.useState)(!0),[o,s]=Object(i.useState)(t);return{onChange:Object(i.useCallback)((e=>{s(e),r((n=>n&&e===t))}),[t]),editMessage:Object(i.useCallback)((()=>void 0!==o&&Object(k.a)(o,{roomContext:n,mxClient:a,editorStateTransfer:e})),[o,n,a,e]),endEditing:Object(i.useCallback)((()=>Object(p.b)(n)),[n]),isSaveDisabled:c}}(t,r);return l?s.a.createElement(u.a,c()({className:d()("mx_EditWysiwygComposer",n),initialContent:r,onChange:f,onSend:b},a),(e=>s.a.createElement(s.a.Fragment,null,s.a.createElement(M,{disabled:a.disabled,ref:e}),s.a.createElement(C,{onCancelClick:m,onSaveClick:b,isSaveDisabled:v})))):null}}}]);
//# sourceMappingURL=37.js.map