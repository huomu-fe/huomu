"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{79876:function(B,l,e){e.r(l),e.d(l,{demos:function(){return I}});var D=e(59496),r=e(36849),I={}},61249:function(B,l,e){e.r(l),e.d(l,{demos:function(){return y}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(78121),g=e(2506),y={"button-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,2506));case 2:return o=n.sent,u=o.LoadingButton,n.abrupt("return",{default:function(){return p.createElement("div",null,p.createElement(u,{onClick:function(){}},"\u70B9\u51FB"),p.createElement(u,{onClick:function(){return new Promise(function(c){setTimeout(c,1e3)})}},"\u70B9\u51FB 1000ms resolve"),p.createElement(u,{onClick:function(){return new Promise(function(c,a){setTimeout(a,1e3)})}},"\u70B9\u51FB 1000ms reject"))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"button-demo-0",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoadingButton } from '@huomu/core';

export default () => {
  return (
    <div>
      <LoadingButton
        onClick={() => {
          return;
        }}
      >
        \u70B9\u51FB
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((resolve) => {
            setTimeout(resolve, 1000);
          })
        }
      >
        \u70B9\u51FB 1000ms resolve
      </LoadingButton>

      <LoadingButton
        onClick={() =>
          new Promise((_, reject) => {
            setTimeout(reject, 1000);
          })
        }
      >
        \u70B9\u51FB 1000ms reject
      </LoadingButton>
    </div>
  );
};`},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/core":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},39147:function(B,l,e){e.r(l),e.d(l,{demos:function(){return y}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(82415),g=e(22076),y={"curd-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.Normal,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { Normal } from './demo';

export default Normal;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-1":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.ReadDetail,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { ReadDetail } from './demo';

export default ReadDetail;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-2":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.RemoteData,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { RemoteData } from './demo';

export default RemoteData;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-3":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.Ref,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-3",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { Ref } from './demo';

export default Ref;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-4":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.ActionRef,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-4",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { ActionRef } from './demo';

export default ActionRef;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-5":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.NoSearch,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-5",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { NoSearch } from './demo';

export default NoSearch;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-6":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.CustomText,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-6",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CustomText } from './demo';

export default CustomText;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},27140:function(B,l,e){var D;e.r(l),e.d(l,{demos:function(){return u}});var r=e(90228),I=e.n(r),i=e(48305),p=e.n(i),K=e(87999),g=e.n(K),y=e(59496),v=e(34812),o=e(2506),u={"editor_javascript-demo-0":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(`const name = 'world';
console.log('hello', name);
`),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJavascript,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-0",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJavascript } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    \`const name = 'world';
console.log('hello', name);
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_javascript-demo-1":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(`const name = 'world';
console.log('hello', name);
`),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S,readonly:!0}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJavascript,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-1",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJavascript } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    \`const name = 'world';
console.log('hello', name);
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJavascript value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},97504:function(B,l,e){var D;e.r(l),e.d(l,{demos:function(){return u}});var r=e(90228),I=e.n(r),i=e(48305),p=e.n(i),K=e(87999),g=e.n(K),y=e(59496),v=e(76619),o=e(2506),u={"editor_json-demo-0":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(JSON.stringify({name:"world"},null,2)),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJSON,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-0",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-1":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(JSON.stringify({name:"world"},null,2)),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S,readonly:!0}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJSON,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-1",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-2":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(JSON.stringify({name:"world"},null,2)),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S,mode:"tree",readonly:!0}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJSON,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-2",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} mode="tree" readonly />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-3":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(JSON.stringify({name:"world"},null,2)),j=p()(U,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L,onChange:S,readonly:!0,mode:"tree",mainMenuBar:!1}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorJSON,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-3",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorJSON } from '@huomu/core';

function Demo() {
  const [value, setValue] = useState(
    JSON.stringify(
      {
        name: 'world',
      },
      null,
      2
    )
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorJSON value={value} onChange={setValue} readonly mode="tree" mainMenuBar={false} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},89800:function(B,l,e){e.r(l),e.d(l,{demos:function(){return y}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(1923),g=e(2506),y={"editor_logs-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u,s;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=function(){return p.createElement(u,{logs:[{timestamp:"2023-01-01 12:00:00",level:"info",message:"This is an info log message."},{timestamp:"2023-01-01 12:00:00",level:"warn",message:"This is a warning log message."},{timestamp:"2023-01-01 12:00:00",level:"error",message:"This is an error log message."},{timestamp:"2023-01-01 12:00:00",level:"system",message:"This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message"}]})},m.next=3,Promise.resolve().then(e.bind(e,2506));case 3:return o=m.sent,u=o.EditorLogs,m.abrupt("return",{default:s});case 6:case"end":return m.stop()}},v)})))),asset:{type:"BLOCK",id:"editor_logs-demo-0",refAtomIds:["editor_logs"],dependencies:{"index.tsx":{type:"FILE",value:`import { EditorLogs } from '@huomu/core';

function Demo() {
  return (
    <EditorLogs
      logs={[
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'info',
          message: 'This is an info log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'warn',
          message: 'This is a warning log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'error',
          message: 'This is an error log message.',
        },
        {
          timestamp: '2023-01-01 12:00:00',
          level: 'system',
          message:
            'This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message',
        },
      ]}
    />
  );
}

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/core":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},21497:function(B,l,e){var D;e.r(l),e.d(l,{demos:function(){return u}});var r=e(90228),I=e.n(r),i=e(48305),p=e.n(i),K=e(87999),g=e.n(K),y=e(59496),v=e(8574),o=e(2506),u={"editor_markdown-demo-0":{component:y.memo(y.lazy(g()(I()().mark(function s(){var n,m,t,c,a;return I()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(){var U=m(`# hello

world
`),j=p()(U,1),L=j[0];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(c,{value:L}))},h.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=h.sent,m=n.useState,h.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return t=h.sent,c=t.EditorMarkdown,h.abrupt("return",{default:a});case 10:case"end":return h.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_markdown-demo-0",refAtomIds:["editor_markdown"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { EditorMarkdown } from '@huomu/core';

function Demo() {
  const [value] = useState(
    \`# hello

world
\`
  );

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <EditorMarkdown value={value} />
    </div>
  );
}

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{react:D||(D=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(I()().mark(function m(){var t,c=arguments;return I()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,e.e(987).then(e.bind(e,49987));case 2:return E.abrupt("return",(t=E.sent).default.apply(t,c));case 3:case"end":return E.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},8458:function(B,l,e){e.r(l),e.d(l,{demos:function(){return v}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(65488),g=e(7214),y=e(2506),v={"form-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return p.createElement(s,null,p.createElement(m,{name:"json",initialValue:JSON.stringify({name:"world"},null,2)}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return n=a.sent,m=n.HMProFormJSON,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-0",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(987).then(e.bind(e,49987));case 2:return c.abrupt("return",(n=c.sent).default.apply(n,m));case 3:case"end":return c.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-1":{component:p.memo(p.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return p.createElement(s,null,p.createElement(m,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1}}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return n=a.sent,m=n.HMProFormJSON,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-1",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJSON
        name="json"
        readonly
        initialValue={JSON.stringify({ name: 'world' }, null, 2)}
        fieldProps={{
          mainMenuBar: false,
        }}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(987).then(e.bind(e,49987));case 2:return c.abrupt("return",(n=c.sent).default.apply(n,m));case 3:case"end":return c.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-2":{component:p.memo(p.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return p.createElement(s,null,p.createElement(m,{name:"json",initialValue:`const name = 'world';
console.log('hello', name);
`}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return n=a.sent,m=n.HMProFormJavascript,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-2",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { HMProFormJavascript } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJavascript
        name="json"
        initialValue={\`const name = 'world';
console.log('hello', name);
\`}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(987).then(e.bind(e,49987));case 2:return c.abrupt("return",(n=c.sent).default.apply(n,m));case 3:case"end":return c.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-3":{component:p.memo(p.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return p.createElement(s,null,p.createElement(m,{name:"json",readonly:!0,initialValue:`const name = 'world';
console.log('hello', name);
`}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,2506));case 7:return n=a.sent,m=n.HMProFormJavascript,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-3",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { HMProFormJavascript } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJavascript
        name="json"
        readonly
        initialValue={\`const name = 'world';
console.log('hello', name);
\`}
      />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.e(987).then(e.bind(e,49987));case 2:return c.abrupt("return",(n=c.sent).default.apply(n,m));case 3:case"end":return c.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}}}},58668:function(B,l,e){e.r(l),e.d(l,{demos:function(){return I}});var D=e(59496),r=e(50671),I={}},43163:function(B,l,e){e.r(l),e.d(l,{demos:function(){return s}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(44340),g=e(2506),y=e(7214),v=e(96167),o=e(16483),u=e.n(o),s={"value_type_map-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function n(){var m,t,c,a,E,h,F,U,j,L,S,$,ne,Z;return r()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return $=function(){return $=i()(r()().mark(function se(){var ae;return r()().wrap(function(oe){for(;;)switch(oe.prev=oe.next){case 0:return ae=U(5).map(function(Ee){return{id:"".concat(Ee),timeStr:"2024-10-01 10:00:00",timeNumber:+L("2024-10-01 10:00:00"),dateStr:"2024-10-01",dateNumber:+L("2024-10-01"),jsonText:JSON.stringify({name:"hello world hello world hello world"})}}),oe.abrupt("return",Promise.resolve({data:{data:ae,success:!0,totalSize:100}}));case 2:case"end":return oe.stop()}},se)})),$.apply(this,arguments)},S=function(){return $.apply(this,arguments)},J.next=4,Promise.resolve().then(e.bind(e,2506));case 4:return m=J.sent,t=m.CURD,c=m.customValueTypeMap,a=m.CustomValueTypeEnum,J.next=10,Promise.resolve().then(e.bind(e,7214));case 10:return E=J.sent,h=E.ProConfigProvider,J.next=14,Promise.resolve().then(e.bind(e,96167));case 14:return F=J.sent,U=F.range,J.next=18,Promise.resolve().then(e.t.bind(e,16483,23));case 18:return j=J.sent,L=j.default,ne=function(){var se=[{title:"id",dataIndex:"id"},{title:"\u65F6\u95F4 str",dataIndex:"timeStr",valueType:a.CustomDateTimeAndDateRange,search:!0},{title:"\u65F6\u95F4 number",dataIndex:"timeNumber",valueType:a.CustomDateTimeAndDateRange,search:!0},{title:"\u65E5\u671F str",dataIndex:"dateStr",valueType:a.CustomDateAndDateRange,search:!0},{title:"\u65E5\u671F number",dataIndex:"dateNumber",valueType:a.CustomDateAndDateRange,search:!0},{title:"json",dataIndex:"jsonText",ellipsis:!0,valueType:a.CustomJSON}];return p.createElement(t,{actions:[],hmTableProps:{hmColumns:se,hmRequest:S}})},Z=function(){return p.createElement(h,{valueTypeMap:c},p.createElement(ne,null))},J.abrupt("return",{default:Z});case 23:case"end":return J.stop()}},n)})))),asset:{type:"BLOCK",id:"value_type_map-demo-0",refAtomIds:["value_type_map"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, customValueTypeMap, CustomValueTypeEnum } from '@huomu/core';
import { ProConfigProvider } from '@ant-design/pro-components';
import { range } from 'lodash-es';
import dayjs from 'dayjs';

async function fakeHMRequest() {
  const data = range(5).map((item) => ({
    id: \`\${item}\`,
    timeStr: \`2024-10-01 10:00:00\`,
    timeNumber: +dayjs('2024-10-01 10:00:00'),
    dateStr: \`2024-10-01\`,
    dateNumber: +dayjs('2024-10-01'),
    jsonText: JSON.stringify({ name: 'hello world hello world hello world' }),
  }));

  return Promise.resolve({
    data: {
      data,
      success: true,
      totalSize: 100,
    },
  }) as Promise<any>;
}

const Table = () => {
  const hmColumns: any[] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '\u65F6\u95F4 str',
      dataIndex: 'timeStr',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '\u65F6\u95F4 number',
      dataIndex: 'timeNumber',
      valueType: CustomValueTypeEnum.CustomDateTimeAndDateRange,
      search: true,
    },
    {
      title: '\u65E5\u671F str',
      dataIndex: 'dateStr',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: '\u65E5\u671F number',
      dataIndex: 'dateNumber',
      valueType: CustomValueTypeEnum.CustomDateAndDateRange,
      search: true,
    },
    {
      title: 'json',
      dataIndex: 'jsonText',
      ellipsis: true,
      valueType: CustomValueTypeEnum.CustomJSON,
    },
  ];

  return (
    <CURD
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <Table />
  </ProConfigProvider>
);

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.8.2"},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"lodash-es":{type:"NPM",value:"4.17.21"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{"@huomu/core":g,"@ant-design/pro-components":y,"lodash-es":v,dayjs:o},renderOpts:{compile:function(){var n=i()(r()().mark(function t(){var c,a=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(987).then(e.bind(e,49987));case 2:return h.abrupt("return",(c=h.sent).default.apply(c,a));case 3:case"end":return h.stop()}},t)}));function m(){return n.apply(this,arguments)}return m}()}}}},63271:function(B,l,e){e.r(l),e.d(l,{demos:function(){return I}});var D=e(59496),r=e(32505),I={}},21276:function(B,l,e){e.r(l),e.d(l,{demos:function(){return I}});var D=e(59496),r=e(9076),I={}},34302:function(B,l,e){e.r(l),e.d(l,{demos:function(){return I}});var D=e(59496),r=e(4981),I={}},89489:function(B,l,e){e.r(l),e.d(l,{demos:function(){return y}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(59496),K=e(12894),g=e(90001),y={"packages-tool-src-pinyin-demo-0":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyin,n.abrupt("return",{default:function(){return p.createElement("div",null,u("\u4F60\u597D"))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@huomu/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D')}</div>;
};`},"@huomu/tool":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-1":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyin,n.abrupt("return",{default:function(){return p.createElement("div",null,u("\u4F60\u597D","first_letter")," ")}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@huomu/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D', 'first_letter')} </div>;
};`},"@huomu/tool":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-2":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyinMatch,n.abrupt("return",{default:function(){return p.createElement(p.Fragment,null,p.createElement("div",null,u("\u4F60\u597D","nh")+""),p.createElement("div",null,u("\u4F60\u597D","wo")+""," "))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinMatch } from '@huomu/tool';

export default () => {
  return (
    <>
      <div>{pinyinMatch('\u4F60\u597D', 'nh') + ''}</div>
      <div>{pinyinMatch('\u4F60\u597D', 'wo') + ''} </div>
    </>
  );
};`},"@huomu/tool":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-3":{component:p.memo(p.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyinFilter,n.abrupt("return",{default:function(){return p.createElement(p.Fragment,null,p.createElement("div",null,u(["\u4F60\u597D"," \u6211\u4EEC"],"nh")," "),p.createElement("div",null,u(["\u4F60\u597D"," \u6211\u4EEC"],"wo")," "))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinFilter } from '@huomu/tool';

export default () => {
  return (
    <>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'nh')} </div>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'wo')} </div>
    </>
  );
};`},"@huomu/tool":{type:"NPM",value:"1.8.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},22076:function(B,l,e){e.r(l),e.d(l,{ActionRef:function(){return Re},CustomText:function(){return Ne},NoSearch:function(){return Ce},Normal:function(){return We},ReadDetail:function(){return be},Ref:function(){return Fe},RemoteData:function(){return Ue}});var D=e(90228),r=e.n(D),I=e(87999),i=e.n(I),p=e(48305),K=e.n(p),g=e(26068),y=e.n(g),v=e(59496),o=e(2506),u=e(78960),s=e(94624),n=e(11850),m=e(89152),t=e(62802),c={\u5E7F\u5DDE:["\u767D\u4E91","\u9EC4\u57D4","\u589E\u57CE"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71","\u5B9D\u5B89"]},a={HIGH:{text:"\u9AD8"},MEDIUM:{text:"\u4E2D"},LOW:{text:"\u4F4E"}},E=[{value:"0",label:"\u7B2C\u4E00\u5C0F\u5B66"},{value:"1",label:"\u7B2C\u4E8C\u5C0F\u5B66"},{value:"2",label:"\u7B2C\u4E09\u5C0F\u5B66"}];function h(R){return Math.floor(Math.random()*R)}function F(){return Object.keys(c)[h(Object.keys(c).length+1)]}function U(R){if(R.city)return R.city&&c[R.city][h(c[R.city].length+1)]}function j(){return Object.keys(a)[h(Object.keys(a).length+1)]}function L(R){return(0,t.Z)(R).map(function(A){var b=F(),M=U({city:b});return{id:"".concat(A),name:"\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57 ".concat(A),city:b,area:M,level:j(),status:h(2)===1,school:""+h(E.length)}})}var S=L(21);function $(R){return ne.apply(this,arguments)}function ne(){return ne=i()(r()().mark(function R(A){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMRequest",A),M.abrupt("return",new Promise(function(z){setTimeout(function(){z({data:{data:S,success:!0,totalSize:S.length}})},1e3)}));case 2:case"end":return M.stop()}},R)})),ne.apply(this,arguments)}function Z(R){return me.apply(this,arguments)}function me(){return me=i()(r()().mark(function R(A){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMDeleteById",A),S=S.filter(function(z){return z.id!==A.id}),M.abrupt("return",Promise.resolve({}));case 3:case"end":return M.stop()}},R)})),me.apply(this,arguments)}function J(R){return te.apply(this,arguments)}function te(){return te=i()(r()().mark(function R(A){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMGetById",A),M.abrupt("return",new Promise(function(z){setTimeout(function(){z({data:{data:S.find(function(ie){return ie.id===A.id})}})},1e3)}));case 2:case"end":return M.stop()}},R)})),te.apply(this,arguments)}function se(R){return ae.apply(this,arguments)}function ae(){return ae=i()(r()().mark(function R(A){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMAdd",A),S.push(y()({id:S.length+1},A)),M.abrupt("return",Promise.resolve({}));case 3:case"end":return M.stop()}},R)})),ae.apply(this,arguments)}function le(R){return oe.apply(this,arguments)}function oe(){return oe=i()(r()().mark(function R(A){return r()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMUpdateById",A),S=S.map(function(z){return z.id===A.id?y()(y()({},z),A):z}),M.abrupt("return",Promise.resolve({}));case 3:case"end":return M.stop()}},R)})),oe.apply(this,arguments)}function Ee(){return Promise.resolve(Object.keys(c))}function Se(R){return R!=null&&R.city?Promise.resolve(c[R.city]):Promise.resolve(Object.values(c).reduce(function(A,b){return A.concat(b)},[]))}function Le(){return Promise.resolve(E)}var W=e(4637),We=function(){var A=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57(\u7701\u7565)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return(0,W.jsx)(o.CURD,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:A,hmRequest:$},deleteById:Z,deleteProps:{nameIndex:"name"},detailForm:function(M){return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(s.Z,y()(y()({},M),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]}))})},requestGetById:J,requestAdd:se,requestUpdateById:le})};function be(){var R=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,W.jsx)(o.CURD,{actions:["read_detail"],hmTableProps:{hmColumns:R,hmRequest:$}})}function Fe(){var R=(0,v.useRef)(),A=n.A.useForm(),b=K()(A,1),M=b[0];window._detailFormInstance=M;var z=n.A.useWatch("name",R.current),ie=n.A.useWatch("name",M);console.log("useWatch",z,ie);var X=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,W.jsx)(o.CURD,{actions:["create","read","update"],hmTableProps:{formRef:R,hmColumns:X,hmRequest:$},detailFormInstance:M,detailForm:function(ce){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(s.Z,y()(y()({},ce),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}],initialValue:"default"})),(0,W.jsx)(m.Z,y()(y()({},ce),{},{name:"status",label:"\u5F00\u542F",initialValue:!1}))]})},requestGetById:J,requestAdd:se,requestUpdateById:le})}function Re(){var R=(0,v.useRef)(),A=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(u.ZP,{onClick:function(){var M;return(M=R.current.getActionRef().current)===null||M===void 0?void 0:M.reload()},children:"reload"}),(0,W.jsx)(o.CURD,{ref:R,actions:[],hmTableProps:{hmColumns:A,hmRequest:$}})]})}function Ue(){var R=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},y()({title:"\u7B49\u7EA7(\u672C\u5730\u6570\u636E)",dataIndex:"level",search:!0,valueEnum:a},o.proFormSelectSearchProps),y()({title:"city(\u8FDC\u7AEF\u6570\u636E)",dataIndex:"city",search:!0,request:function(){var A=i()(r()().mark(function M(){var z;return r()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return console.log("request"),X.next=3,Ee();case 3:return z=X.sent,X.abrupt("return",z.map(function(q){return{label:q,value:q}})||[]);case 5:case"end":return X.stop()}},M)}));function b(){return A.apply(this,arguments)}return b}()},o.proFormSelectSearchProps),y()({title:"area(\u8054\u52A8 city)",dataIndex:"area",search:!0,request:function(){var A=i()(r()().mark(function M(z){var ie;return r()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return console.log("params",z),q.next=3,Se(z);case 3:return ie=q.sent,q.abrupt("return",ie.map(function(ce){return{label:ce,value:ce}})||[]);case 5:case"end":return q.stop()}},M)}));function b(M){return A.apply(this,arguments)}return b}(),dependencies:["city"]},o.proFormSelectSearchProps),y()({title:"\u5B66\u6821(\u8FDC\u7AEF\u6570\u636E label value)",dataIndex:"school",search:!0,valueType:"select",request:function(){return Le()}},o.proFormSelectSearchProps)];return(0,W.jsx)(o.CURD,{actions:[],hmTableProps:{hmColumns:R,hmRequest:$}})}function Ce(){var R=(0,v.useRef)(),A=[{title:"id",dataIndex:"id"},{title:"\u540D\u5B57",dataIndex:"name"}];return(0,W.jsx)(o.CURD,{ref:R,actions:[],hmTableProps:{hmColumns:A,hmRequest:$}})}var Ne=function(){var A=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0,ellipsis:!0}];return(0,W.jsx)(o.CURD,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:A,hmRequest:$},operateColumnProps:{width:230,moreOperator:function(){return(0,W.jsx)("div",{children:"custom"})}},readProps:{operateText:"\u67E5\u770B\u5566"},deleteById:Z,deleteProps:{nameIndex:"name",operateText:"\u5220\u9664\u5566"},detailForm:function(M){return(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(s.Z,y()(y()({},M),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]}))})},requestGetById:J,requestAdd:se,addProps:{successText:"\u65B0\u5EFA\u6210\u529F\u5566"},updateProps:{operateText:"\u66F4\u65B0\u5566",successText:"\u66F4\u65B0\u6210\u529F\u5566"},requestUpdateById:le})}},2506:function(B,l,e){e.r(l),e.d(l,{CURD:function(){return oe},CURDDetail:function(){return le},CustomValueTypeEnum:function(){return Pe},EditorJSON:function(){return Ce},EditorJavascript:function(){return Re},EditorLogs:function(){return q},EditorMarkdown:function(){return b},FileUpload:function(){return on},HMDescriptions:function(){return tn},HMProFormJSON:function(){return Ye},HMProFormJavascript:function(){return Xe},HMTable:function(){return U},LoadingButton:function(){return Se},OperateDelete:function(){return $},createStore:function(){return ln},customValueTypeMap:function(){return vn},getTableScroll:function(){return j},proFormSelectSearchProps:function(){return ke},useDelete:function(){return S}});var D=e(15558),r=e.n(D),I=e(26068),i=e.n(I),p=e(60774),K=e(78960),g=e(59496),y=e(5791),v=e(33553),o=e(90228),u=e.n(o),s=e(67825),n=e.n(s),m=e(87999),t=e.n(m),c=e(81019),a=e(4637),E=["current","pageSize"],h=["hmRequest","request","hmColumns","columns","rowKey"];function F(d){return function(){var f=t()(u()().mark(function P(O){var C,T,x,_;return u()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return C=O.current,T=O.pageSize,x=n()(O,E),N.next=3,d(i()({page:C,pageSize:T},x));case 3:return _=N.sent,N.abrupt("return",{data:_.data.data,success:_.data.success,total:_.data.totalSize});case 5:case"end":return N.stop()}},P)}));return function(P){return f.apply(this,arguments)}}()}function U(d){var f=d.hmRequest,P=d.request,O=d.hmColumns,C=d.columns,T=d.rowKey,x=T===void 0?"id":T,_=n()(d,h),w=(0,g.useCallback)(function(G){return f?F(f)(G):P(G,{},{})},[f,P]),N=(0,g.useMemo)(function(){return O?O.map(function(G){return i()({search:!1},G)}):C},[C,O]);return(0,a.jsx)(c.Z,i()({cardBordered:!0,rowKey:x,pagination:i()({showSizeChanger:!0,showQuickJumper:!0},_.pagination),options:!1,request:w,columns:N},_))}function j(d){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,P={x:0,y:void 0};return d==null||d.forEach(function(O){O.hideInTable||(P.x+=Number(O.width)||f)}),P}var L=e(87055);function S(d){var f=d.name,P=d.desc,O=d.onDelete,C=(0,g.useCallback)(function(){L.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(f,"\u201D \u5417\uFF1F"),content:P||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){O()}})},[f,P,O]);return{doDelete:C}}function $(d){var f=d.name,P=d.desc,O=d.onDelete,C=d.operateText,T=(0,g.useCallback)(function(){L.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(f,"\u201D \u5417\uFF1F"),content:P||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){O()}})},[f,P,O]);return(0,a.jsx)("a",{style:{color:"red"},onClick:T,children:C||"\u5220\u9664"})}var ne=e(48305),Z=e.n(ne),me=e(70162),J=e(51349),te=e(11850),se=e(19331),ae=e(83873);function le(d){var f=d.action,P=d.id,O=d.record,C=d.trigger,T=d.onSuccess,x=d.detailForm,_=d.requestGetById,w=d.requestGetByRecord,N=d.addProps,G=d.requestAdd,ue=d.updateProps,ve=d.requestUpdateById,Te=d.detailFormInstance,_e=(0,g.useState)(!1),Ie=Z()(_e,2),De=Ie[0],re=Ie[1],Ae=(0,g.useState)(!!P),Oe=Z()(Ae,2),de=Oe[0],Me=Oe[1],ye=te.A.useForm(Te),Be=Z()(ye,1),k=Be[0],pe=(0,g.useCallback)(function(){var ee=t()(u()().mark(function ge(Q){var fe,je,H;return u()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(V.prev=0,!(f==="create"&&G)){V.next=8;break}return V.next=4,G(Q);case 4:fe=V.sent,je="\u65B0\u5EFA\u6210\u529F",N!=null&&N.successText&&(je=(0,ae.Z)(N.successText)?N.successText:N.successText()),me.ZP.open({type:"success",content:je});case 8:if(!(f==="update"&&ve)){V.next=15;break}return V.next=11,ve(i()(i()({},Q),{},{id:P}));case 11:fe=V.sent,H="\u66F4\u65B0\u6210\u529F",ue!=null&&ue.successText&&(H=(0,ae.Z)(ue.successText)?ue.successText:ue.successText()),me.ZP.open({type:"success",content:H});case 15:if(T==null||T(),fe===!1){V.next=18;break}return V.abrupt("return",!0);case 18:V.next=23;break;case 20:V.prev=20,V.t0=V.catch(0),setTimeout(function(){throw V.t0},10);case 23:case"end":return V.stop()}},ge,null,[[0,20]])}));return function(ge){return ee.apply(this,arguments)}}(),[f,G,ve,T,N,P,ue]),Ke=(0,g.useCallback)(function(){var ee=t()(u()().mark(function ge(Q){var fe;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(Q){H.next=4;break}return k==null||k.resetFields(),re(Q),H.abrupt("return");case 4:if(re(Q),!P){H.next=17;break}if(Me(!0),!w){H.next=11;break}return H.next=10,w(O);case 10:fe=H.sent;case 11:if(!_){H.next=15;break}return H.next=14,_({id:P});case 14:fe=H.sent;case 15:k==null||k.setFieldsValue(fe.data.data),Me(!1);case 17:return H.abrupt("return");case 18:case"end":return H.stop()}},ge)}));return function(ge){return ee.apply(this,arguments)}}(),[k,P,_,w,O]),Y=(0,g.useMemo)(function(){return!x||!De?null:de?(0,a.jsx)("div",{className:"pt-[100px] flex justify-center",children:(0,a.jsx)(J.Z,{})}):x({readonly:f==="read"&&!!P},{action:f})},[De,de,x,f,P]);return(0,a.jsx)(se.a,{form:k,trigger:C,autoFocusFirstInput:!0,onFinish:pe,onOpenChange:Ke,layout:"vertical",readonly:f==="read"&&!!P,drawerProps:{destroyOnClose:!0},children:Y})}var oe=(0,g.forwardRef)(function(f,P){var O=f.actions,C=f.hmTableProps,T=f.createButton,x=f.operateColumnProps,_=f.readProps,w=f.deleteById,N=f.deleteByRecord,G=f.deleteProps,ue=f.detailIdIndex,ve=f.detailForm,Te=f.requestGetById,_e=f.requestGetByRecord,Ie=f.addProps,De=f.requestAdd,re=f.updateProps,Ae=f.requestUpdateById,Oe=f.detailFormInstance,de=(0,g.useRef)(),Me=(0,y.TH)();(0,g.useImperativeHandle)(P,function(){return{getActionRef:function(){return de}}},[de]);var ye=(0,g.useMemo)(function(){return{detailForm:ve,requestGetById:Te,requestGetByRecord:_e,requestAdd:De,requestUpdateById:Ae,detailFormInstance:Oe,addProps:Ie,updateProps:re}},[ve,Te,_e,De,Ae,Oe,Ie,re]),Be=(0,g.useCallback)(function(Y){return function(){if(w)return w({id:Y.id,ids:[Y.id]}).then(function(){var ee;(ee=de.current)===null||ee===void 0||ee.reload()});if(N)return N(Y).then(function(){var ee;(ee=de.current)===null||ee===void 0||ee.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[w,N]),k=(0,g.useCallback)(function(){var Y;(Y=de.current)===null||Y===void 0||Y.reload()},[]),pe=(0,g.useMemo)(function(){var Y={title:"\u64CD\u4F5C",fixed:"right",width:(x==null?void 0:x.width)||120,render:function(ge,Q){return(0,a.jsxs)(p.Z,{children:[(x==null?void 0:x.moreOperator)&&x.moreOperator(Q),O.includes("read")&&(0,a.jsx)(le,i()({id:Q.id,record:Q,onSuccess:k,trigger:(0,a.jsx)("a",{children:(_==null?void 0:_.operateText)||"\u67E5\u770B"}),action:"read"},ye)),O.includes("read_detail")&&(0,a.jsx)(v.rU,{to:"".concat(Me.pathname,"/detail/").concat(Q[ue||"id"]),children:(_==null?void 0:_.operateText)||"\u67E5\u770B"}),O.includes("update")&&(0,a.jsx)(le,i()({id:Q.id,record:Q,onSuccess:k,trigger:(0,a.jsx)("a",{children:(re==null?void 0:re.operateText)||"\u7F16\u8F91"}),action:"update"},ye)),O.includes("delete")&&G&&(0,a.jsx)($,{name:Q[G.nameIndex],desc:G.desc,operateText:G.operateText,onDelete:Be(Q)})]})}};return O.includes("read")||O.includes("read_detail")||O.includes("update")||O.includes("delete")?[].concat(r()(C.hmColumns||C.columns||[]),[Y]):C.hmColumns},[O,_==null?void 0:_.operateText,G,ue,ye,Be,k,C.columns,C.hmColumns,Me.pathname,x,re==null?void 0:re.operateText]),Ke=!!(pe!=null&&pe.find(function(Y){return Y.search}));return(0,a.jsx)("div",{className:"",children:(0,a.jsx)(U,i()(i()({rowKey:"id"},C),{},{scroll:j(pe),actionRef:de,toolBarRender:function(){return[].concat(r()(C.toolBarRender?C.toolBarRender.apply(C,arguments):[]),[O.includes("create")&&(0,a.jsx)(le,i()({onSuccess:k,trigger:T||(0,a.jsx)(K.ZP,{type:"primary",children:"\u65B0\u5EFA"}),action:"create"},ye))])},search:Ke&&i()({layout:"vertical",defaultCollapsed:!1},C.search),hmColumns:pe}))})}),Ee=["onClick"];function Se(d){var f=d.onClick,P=n()(d,Ee),O=(0,g.useState)(!1),C=Z()(O,2),T=C[0],x=C[1],_=(0,g.useCallback)(function(w){x(!0),Promise.resolve(f&&f(w)).finally(function(){x(!1)})},[f]);return(0,a.jsx)(K.ZP,i()(i()({loading:T},P),{},{onClick:_}))}var Le=e(34019),W=e(15915),We=e(41142),be=e(19656),Fe={width:"100%",height:"100%"};function Re(d){var f=d.value,P=d.onChange,O=d.readonly;return(0,a.jsx)(Le.ZP,{style:Fe,mode:"javascript",theme:"monokai",value:f,onChange:P,readOnly:O,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var Ue=e(34813);function Ce(d){var f=d.value,P=d.onChange,O=d.readonly,C=d.mode,T=d.mainMenuBar,x=(0,g.useRef)(null),_=(0,g.useRef)(null),w=(0,g.useRef)(P);return(0,g.useEffect)(function(){var N;(N=_.current)===null||N===void 0||N.update({text:f||""})},[f]),(0,g.useEffect)(function(){_.current=new Ue.q9({target:x.current,props:{mainMenuBar:T,tabSize:2,mode:C||"text",readOnly:O,askToFormat:!1,content:{text:f||""},onChange:function(G){w.current(G.text)}}})},[]),(0,a.jsx)("div",{ref:x,className:"h-full w-full"})}var Ne=e(949),R=e(51709),A=["children","className","node"];function b(d){var f=d.value;return(0,a.jsx)(Ne.U,{unwrapDisallowed:!0,components:{code:function(O){var C=O.children,T=O.className,x=O.node,_=n()(O,A),w=/language-(\w+)/.exec(T||"");return w?(0,a.jsx)(R.Z,i()(i()({},_),{},{PreTag:"div",wrapLongLines:!0,children:String(C).replace(/\n$/,""),language:w[1].toLowerCase()})):(0,a.jsx)("code",i()(i()({},_),{},{className:T,children:C}))}},children:f||""})}var M=e(43349),z=e(27893),ie=e(16374),X=e(61365),q=function(f){var P=f.logs,O=P.map(function(x){var _="[".concat(x.level,"]").padEnd(8," ");return"".concat(x.timestamp," ").concat(_.toUpperCase()," ").concat(x.message)}).join(`
`),C=[z.il.define({token:function(_){return _.match(/.*\[WARN\s*\].*/)?"keyword":_.match(/.*\[ERROR\s*\].*/)?"invalid":_.match(/.*\[SYSTEM\].*/)?"comment":(_.next(),null)}})],T=(0,ie.j)({theme:"dark",settings:{background:"#2e3235",foreground:"rgba(243, 244, 246, 1)"},styles:[{tag:X.pJ.keyword,color:"rgba(252, 211, 77, 1)"},{tag:X.pJ.invalid,color:"rgba(248, 113, 113, 1)"},{tag:X.pJ.comment,color:"rgba(96, 165, 250, 1)"}]});return(0,a.jsx)(M.ZP,{value:O,theme:T,extensions:C,editable:!1,height:"400px",style:{overflowY:"auto"}})},ce=e(79161),Ve=["readonly","fieldProps"],Ge=["readonly","fieldProps"];function Ze(d){return(0,a.jsx)("div",{style:{height:"300px"},children:(0,a.jsx)(Ce,i()({},d))})}function Ye(d){var f=d.readonly,P=d.fieldProps,O=n()(d,Ve);return(0,a.jsx)(te.A.Item,i()(i()({},O),{},{children:(0,a.jsx)(Ze,i()({readonly:f},P))}))}function Qe(d){return(0,a.jsx)("div",{style:{height:"300px"},children:(0,a.jsx)(Re,i()({},d))})}function Xe(d){var f=d.readonly,P=d.fieldProps,O=n()(d,Ge);return(0,a.jsx)(te.A.Item,i()(i()({},O),{},{children:(0,a.jsx)(Qe,i()({readonly:f},P))}))}var ke={fieldProps:{showSearch:!0,filterOption:function(f,P){return(0,ce.n)(P.label,f)},fetchDataOnSearch:!1}},qe=e(19634),en=e(16483),he=e.n(en),nn=["hmItems","items"];function tn(d){var f=d.hmItems,P=d.items,O=n()(d,nn),C=(0,g.useMemo)(function(){return f?f.map(function(T){var x=T.children;return T.children!==null&&T.children!==void 0&&(T.valueType==="date"?x=he()(x).format("YYYY-MM-DD"):T.valueType==="dateTime"?x=he()(x).format("YYYY-MM-DD HH:mm:ss"):T.valueType==="time"&&(x=he()(x).format("HH:mm:ss"))),i()(i()({},T),{},{children:x||"-"})}):P},[f,P]);return(0,a.jsx)(qe.Z,i()({items:C},O))}var rn=e(30038),an=e(71917);function on(d){var f=d.value,P=d.onChange,O=function(x){return P==null||P(x),!1},C=function(){P==null||P(void 0)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(an.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:f?[f]:void 0,beforeUpload:O,onRemove:C,children:(0,a.jsx)(K.ZP,{icon:(0,a.jsx)(rn.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var ze=e(85081),un=e(33329),sn=function(f){return function(P,O,C){var T=(0,un.mW)(f);return T(P,O,C)}},Je=sn,ln=function(f){return f?(0,ze.Ue)()(Je(f)):function(P){return(0,ze.Ue)()(Je(P))}},dn=e(82092),$e=e.n(dn),mn=e(61873);function we(d){return(0,ae.Z)(d)&&/^\d+$/.test(d)?he()(parseInt(d)):he()(d)}var cn={dateTime:function(f){return f?(0,a.jsx)("div",{children:we(f).format("YYYY-MM-DD HH:mm:ss")}):(0,a.jsx)("div",{children:"-"})},date:function(f){return f?(0,a.jsx)("div",{children:we(f).format("YYYY-MM-DD")}):(0,a.jsx)("div",{children:"-"})}},hn={dateRange:function(f,P){return(0,a.jsx)(mn.Z,i()(i()({},P),{},{fieldProps:i()(i()({},P.fieldProps),{},{onChange:function(C){var T,x,_=C&&[he()(C[0]).startOf("day"),he()(C[1]).endOf("day")];(T=(x=P.fieldProps).onChange)===null||T===void 0||T.call(x,_)}})}))}},xe={renderMap:cn,renderFormItemMap:hn},pn=e(84846);function fn(d){var f=d;if(!d)return(0,a.jsx)("div",{children:"-"});try{f=JSON.stringify(JSON.parse(d),null,2)}catch(P){console.error(P,d)}return(0,a.jsx)(pn.Z.Text,{className:"block max-w-full overflow-hidden",ellipsis:{tooltip:{title:(0,a.jsx)("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"},children:f})}},children:d})}var He={render:fn,renderFormItem:function(){return(0,a.jsx)(a.Fragment,{})}},Pe=function(d){return d.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",d.CustomDateAndDateRange="CustomDateAndDateRange",d.CustomJSON="CustomJSON",d}(Pe||{}),vn=$e()($e()($e()({},Pe.CustomDateTimeAndDateRange,{render:xe.renderMap.dateTime,renderFormItem:xe.renderFormItemMap.dateRange}),Pe.CustomDateAndDateRange,{render:xe.renderMap.date,renderFormItem:xe.renderFormItemMap.dateRange}),Pe.CustomJSON,{render:He.render,renderFormItem:He.renderFormItem})},90001:function(B,l,e){e.r(l),e.d(l,{pinyin:function(){return D.N},pinyinFilter:function(){return r.E},pinyinMatch:function(){return r.n}});var D=e(1077),r=e(79161)},79161:function(B,l,e){e.d(l,{E:function(){return K},n:function(){return g}});var D=e(1077),r=e(12908),I=e(83873),i=e(55247),p=function(v){return v};function K(y,v){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:p;return v?(v=v.toLowerCase(),(0,r.Z)(y,function(u){return g(o(u),v)})):y||[]}function g(y,v){var o=y;(0,I.Z)(o)||(o=""),o=o.toLowerCase();var u=(0,i.Z)((0,D.N)(o),function(n){return n[0]}).join(""),s=(0,i.Z)((0,D.N)(o,"first_letter"),function(n){return n[0]}).join("");return o.indexOf(v)>-1||u.indexOf(v)>-1||s.indexOf(v)>-1}},1077:function(B,l,e){e.d(l,{N:function(){return I}});var D=e(79156),r,I=function(p,K){if(r)return r(p,K);var g={\u963F:"a",\u54CE:"ai",\u5B89:"an",\u80AE:"ang",\u51F9:"ao",\u4E37:"ba",\u6300:"bai",\u6273:"ban",\u90A6:"bang",\u52F9:"bao",\u9642:"bei",\u5954:"ben",\u4F3B:"beng",\u5C44:"bi",\u8FB9:"bian",\u706C:"biao",\u618B:"bie",\u6C43:"bin",\u51AB:"bing",\u7676:"bo",\u5CEC:"bu",\u5693:"ca",\u5072:"cai",\u53C2:"can",\u4ED3:"cang",\u64A1:"cao",\u518A:"ce",\u5D7E:"cen",\u66FD:"ceng",\u53C9:"cha",\u8286:"chai",\u8FBF:"chan",\u4F25:"chang",\u6284:"chao",\u8F66:"che",\u62BB:"chen",\u9637:"cheng",\u5403:"chi",\u5145:"chong",\u62BD:"chou",\u51FA:"chu",\u6B3B:"chua",\u63E3:"chuai",\u5DDB:"chuan",\u5205:"chuang",\u5439:"chui",\u65FE:"chun",\u9034:"chuo",\u5472:"ci",\u5306:"cong",\u51D1:"cou",\u7C97:"cu",\u6C46:"cuan",\u5D14:"cui",\u90A8:"cun",\u6413:"cuo",\u5491:"da",\u5446:"dai",\u4E39:"dan",\u5F53:"dang",\u5200:"dao",\u561A:"de",\u6265:"dun",\u706F:"deng",\u6C10:"di",\u7538:"dian",\u5201:"diao",\u7239:"die",\u4E01:"ding",\u4E1F:"diu",\u4E1C:"dong",\u543A:"dou",\u53BE:"du",\u8011:"duan",\u5796:"dui",\u5428:"dun",\u591A:"duo",\u59B8:"e",\u8BF6:"ei",\u5940:"en",\u97A5:"eng",\u513F:"er",\u53D1:"fa",\u5E06:"fan",\u531A:"fang",\u98DE:"fei",\u5206:"fen",\u4E30:"feng",\u8985:"fiao",\u4ECF:"fo",\u7D11:"fou",\u592B:"fu",\u65EE:"ga",\u4F85:"gai",\u7518:"gan",\u5188:"gang",\u768B:"gao",\u6208:"ge",\u7ED9:"gei",\u6839:"gen",\u522F:"geng",\u5DE5:"gong",\u52FE:"gou",\u4F30:"gu",\u74DC:"gua",\u4E56:"guai",\u5173:"guan",\u5149:"guang",\u5F52:"gui",\u4E28:"gun",\u5459:"guo",\u54C8:"ha",\u548D:"hai",\u4F44:"han",\u592F:"hang",\u8320:"hao",\u8BC3:"he",\u9ED2:"hei",\u62EB:"hen",\u4EA8:"heng",\u5677:"hm",\u53FF:"hong",\u9F41:"hou",\u4E4E:"hu",\u82B1:"hua",\u6000:"huai",\u6B22:"huan",\u5DDF:"huang",\u7070:"hui",\u660F:"hun",\u5419:"huo",\u4E0C:"ji",\u52A0:"jia",\u620B:"jian",\u6C5F:"jiang",\u827D:"jiao",\u9636:"jie",\u5DFE:"jin",\u5755:"jing",\u5182:"jiong",\u4E29:"jiu",\u51E5:"ju",\u59E2:"juan",\u5658:"jue",\u519B:"jun",\u5494:"ka",\u5F00:"kai",\u520A:"kan",\u5FFC:"kang",\u5C3B:"kao",\u533C:"ke",\u808E:"ken",\u52A5:"keng",\u7A7A:"kong",\u62A0:"kou",\u625D:"ku",\u5938:"kua",\u84AF:"kuai",\u5BBD:"kuan",\u5321:"kuang",\u4E8F:"kui",\u5764:"kun",\u6269:"kuo",\u5783:"la",\u6765:"lai",\u5170:"lan",\u5577:"lang",\u635E:"lao",\u808B:"le",\u52D2:"lei",\u5D1A:"leng",\u54E9:"li",\u4FE9:"lia",\u5941:"lian",\u826F:"liang",\u64A9:"liao",\u6BDF:"lie",\u62CE:"lin",\u4F36:"ling",\u6E9C:"liu",\u56D6:"lo",\u9F99:"long",\u779C:"lou",\u565C:"lu",\u9A74:"lv",\u5A08:"luan",\u63A0:"l\xFCe",\u62A1:"lun",\u7F57:"luo",\u5463:"m",\u5988:"ma",\u57CB:"mai",\u5ADA:"man",\u7264:"mang",\u732B:"mao",\u5692:"me",\u5445:"mei",\u691A:"men",\u64DD:"meng",\u54AA:"mi",\u5B80:"mian",\u55B5:"miao",\u4E5C:"mie",\u6C11:"min",\u540D:"ming",\u8C2C:"miu",\u6478:"mo",\u54DE:"mou",\u6BEA:"mu",\u55EF:"\u0144g",\u62CF:"na",\u8149:"nai",\u56E1:"nan",\u56D4:"nang",\u5B6C:"nao",\u7592:"ne",\u5A1E:"nei",\u6041:"nen",\u80FD:"neng",\u59AE:"ni",\u62C8:"nian",\u5A18:"niang",\u9E1F:"niao",\u634F:"nie",\u56DC:"nin",\u5B81:"ning",\u599E:"niu",\u519C:"nong",\u7FBA:"nou",\u5974:"nu",\u5973:"nv",\u597B:"nuan",\u759F:"n\xFCe",\u9EC1:"nun",\u632A:"nuo",\u5594:"o",\u8BB4:"ou",\u5991:"pa",\u62CD:"pai",\u7705:"pan",\u4E53:"pang",\u629B:"pao",\u5478:"pei",\u55B7:"pen",\u5309:"peng",\u4E15:"pi",\u56E8:"pian",\u527D:"piao",\u6C15:"pie",\u59D8:"pin",\u4E52:"ping",\u948B:"po",\u5256:"pou",\u4EC6:"pu",\u4E03:"qi",\u6390:"qia",\u5343:"qian",\u545B:"qiang",\u6084:"qiao",\u82C6:"qie",\u4EB2:"qin",\u9751:"qing",\u536D:"qiong",\u4E18:"qiu",\u533A:"qu",\u594D:"quan",\u7F3A:"que",\u590B:"qun",\u5465:"ran",\u7A63:"rang",\u5A06:"rao",\u60F9:"re",\u4EBA:"ren",\u6254:"reng",\u65E5:"ri",\u8338:"rong",\u53B9:"rou",\u909A:"ru",\u633C:"rua",\u5827:"ruan",\u5A51:"rui",\u77A4:"run",\u637C:"ruo",\u4EE8:"sa",\u6BE2:"sai",\u4E09:"san",\u6852:"sang",\u63BB:"sao",\u95AA:"se",\u68EE:"sen",\u50E7:"seng",\u6740:"sha",\u7B5B:"shai",\u5C71:"shan",\u4F24:"shang",\u5F30:"shao",\u5962:"she",\u7533:"shen",\u5347:"sheng",\u5C38:"shi",\u53CE:"shou",\u4E66:"shu",\u5237:"shua",\u8870:"shuai",\u95E9:"shuan",\u53CC:"shuang",\u813D:"shui",\u542E:"shun",\u8BF4:"shuo",\u53B6:"si",\u5FEA:"song",\u51C1:"sou",\u82CF:"su",\u72FB:"suan",\u590A:"sui",\u5B59:"sun",\u5506:"suo",\u4ED6:"ta",\u56FC:"tai",\u574D:"tan",\u6C64:"tang",\u5932:"tao",\u5FD1:"te",\u71A5:"teng",\u5254:"ti",\u5929:"tian",\u65EB:"tiao",\u5E16:"tie",\u5385:"ting",\u56F2:"tong",\u5077:"tou",\u51F8:"tu",\u6E4D:"tuan",\u63A8:"tui",\u541E:"tun",\u4E47:"tuo",\u5C72:"wa",\u6B6A:"wai",\u5F2F:"wan",\u5C23:"wang",\u5371:"wei",\u6637:"wen",\u7FC1:"weng",\u631D:"wo",\u4E4C:"wu",\u5915:"xi",\u8672:"xia",\u4ED9:"xian",\u4E61:"xiang",\u7071:"xiao",\u4E9B:"xie",\u5FC3:"xin",\u661F:"xing",\u51F6:"xiong",\u4F11:"xiu",\u5401:"xu",\u5405:"xuan",\u524A:"xue",\u5743:"xun",\u4E2B:"ya",\u6079:"yan",\u592E:"yang",\u5E7A:"yao",\u503B:"ye",\u4E00:"yi",\u56D9:"yin",\u5E94:"ying",\u54DF:"yo",\u4F63:"yong",\u4F18:"you",\u8FBC:"yu",\u56E6:"yuan",\u66F0:"yue",\u6655:"yun",\u5E00:"za",\u707D:"zai",\u5142:"zan",\u5328:"zang",\u50AE:"zao",\u5219:"ze",\u8D3C:"zei",\u600E:"zen",\u5897:"zeng",\u624E:"zha",\u5908:"zhai",\u67AC:"zhan",\u5F20:"zhang",\u4F4B:"zhao",\u8707:"zhe",\u8D1E:"zhen",\u51E7:"zheng",\u4E4B:"zhi",\u4E2D:"zhong",\u5DDE:"zhou",\u6731:"zhu",\u6293:"zhua",\u62FD:"zhuai",\u4E13:"zhuan",\u5986:"zhuang",\u96B9:"zhui",\u5B92:"zhun",\u5353:"zhuo",\u4E72:"zi",\u5B97:"zong",\u90B9:"zou",\u79DF:"zu",\u94BB:"zuan",\u539C:"zui",\u5C0A:"zun",\u6628:"zuo"},y={\u6C88:"shen",\u55F2:"dia",\u78A1:"zhou",\u8052:"guo",\u7094:"que",\u86B5:"ke",\u7809:"hua",\u5B24:"mo",\u8E52:"pan",\u4E2C:"pan",\u9730:"xian",\u8C49:"chi",\u9967:"xing",\u5E27:"zhen",\u90CD:"na",\u828E:"xiong",\u8C01:"shui"},v=Object.keys(g),o=Object.values(g),u=Object.assign({},g,y),s=!!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);if(s){var n={\u4E37:"\u516B",\u62BD:"\u5A64",\u51D1:"\u8160",\u53BE:"\u8254",\u592B:"\u4F15",\u52FE:"\u4F5D",\u4E4E:"\u4E6F",\u6B22:"\u72BF",\u54E9:"\u5215",\u6BDF:"\u5217",\u4F36:"\u5222",\u5692:"\u4E48",\u691A:"\u95E8",\u64DD:"\u753F",\u5A18:"\u5B22",\u5256:"\u5A1D",\u82C6:"\u767F",\u536D:"\u5314",\u594D:"\u5CD1",\u51C1:"\u635C",\u5077:"\u5078",\u5C72:"\u7A75",\u4ED9:"\u4EDA",\u8FBC:"\u625C",\u4F18:"\u6538",\u5908:"\u635A",\u67AC:"\u6CBE",\u51E7:"\u4E89",\u5DDE:"\u8BCC"};Object.keys(n).forEach(function(h){v[v.indexOf(h)]=n[h]});var m={\u51D2:"ai",\u8C8B:"an",\u98F9:"bao",\u86FD:"bei",\u698C:"bi",\u7541:"bi",\u7986:"bi",\u7371:"bian",\u6E8A:"bo",\u6DFF:"bo",\u9E14:"bu",\u5ECD:"bu",\u7938:"ca",\u835D:"ce",\u72B2:"chai",\u4EE9:"chang",\u7F49:"cheng",\u9423:"cheng",\u7C9A:"chi",\u9D44:"chi",\u6521:"chi",\u8094:"chi",\u69C6:"chun",\u5AA8:"cu",\u81A5:"cun",\u8FCF:"da",\u8FDA:"da",\u8DF6:"da",\u4EA3:"da",\u4FA2:"dai",\u86AE:"dai",\u8254:"dao",\u60B3:"de",\u67A4:"di",\u521F:"diao",\u921F:"diao",\u8B75:"dui",\u907B:"e",\u7B29:"fa",\u5325:"fan",\u4EEE:"fan",\u80D0:"fei",\u8965:"fu",\u7139:"gang",\u7A01:"gao",\u5CFC:"gao",\u6404:"gen",\u5314:"gong",\u7C3C:"gou",\u8E80:"guan",\u8901:"guo",\u99F4:"hai",\u5475:"he",\u5BC9:"he",\u71FA:"he",\u739C:"hong",\u95C0:"hong",\u8624:"hua",\u8AD9:"hua",\u9BF6:"huan",\u5C76:"hui",\u6A85:"hui",\u53DD:"ji",\u8EA4:"ji",\u7B05:"jiao",\u9782:"jie",\u63B6:"jie",\u5AAB:"jie",\u5DBB:"jie",\u64EE:"jie",\u790D:"jie",\u77DD:"jin",\u7161:"jin",\u7484:"jing",\u71DB:"jiong",\u9F30:"ju",\u70E5:"ju",\u704D:"jue",\u9D55:"jun",\u94B6:"ke",\u72C5:"kuang",\u8EE0:"kuang",\u92DB:"kuang",\u55E0:"lao",\u77CB:"lei",\u7AF0:"li",\u7AC2:"liao",\u8B22:"lu",\u7C35:"lu",\u7387:"lv",\u7EFF:"lv",\u5638:"m",\u88AE:"mi",\u7C8E:"mi",\u6763:"mian",\u5AF9:"miao",\u741D:"min",\u5436:"na",\u5450:"na",\u62A9:"nan",\u7175:"nan",\u8E19:"nie",\u503F:"ning",\u6335:"nong",\u8842:"nv",\u6E12:"pai",\u8420:"pan",\u8615:"peng",\u9303:"pi",\u882F:"pi",\u9166:"po",\u7087:"pu",\u5711:"pu",\u669C:"pu",\u637F:"qi",\u7D2A:"qi",\u5D5C:"qi",\u8900:"qi",\u9A39:"qi",\u5CE0:"qia",\u5042:"qian",\u5B31:"qian",\u97A9:"qiao",\u5392:"qie",\u922B:"qin",\u512C:"qing",\u6FEA:"qing",\u5CF5:"rong",\u9491:"sa",\u70B6:"shan",\u692B:"shan",\u7F59:"shen",\u9BD3:"shen",\u67A1:"sheng",\u935F:"sheng",\u7E04:"sheng",\u8184:"shou",\u6BFA:"shu",\u66BA:"tan",\u7819:"wa",\u6665:"wan",\u77A3:"wan",\u69B2:"wen",\u9942:"wen",\u651A:"weng",\u909C:"xi",\u6E7A:"xian",\u9DCD:"xiao",\u70A8:"xie",\u5302:"xiong",\u6F43:"xiu",\u71C5:"xun",\u8A2E:"yan",\u6EE7:"yao",\u647F:"yao",\u78D8:"yao",\u6D02:"ye",\u6359:"ye",\u748D:"ye",\u6E0F:"yi",\u9825:"yi",\u9218:"yi",\u8C96:"yi",\u88AC:"yu",\u9D27:"yu",\u4F1D:"yun",\u9F6B:"yun",\u6CAF:"za",\u6EA8:"zai",\u7170:"zao",\u6B75:"ze",\u830B:"zhi",\u96B2:"zhi",\u9483:"zhu",\u8D7C:"zi",\u8362:"zi",\u71EA:"zong",\u5528:"zu"};Object.assign(u,m)}var t=19968,c=40869,a=function(F,U){var j=F.charCodeAt(0);if(j<t||j>c)return F;if(u[F])return U==="first_letter"?u[F].charAt(0):u[F];for(var L=0,S=v.length-1,$=-1,ne,Z;L<=S;)if($=Math.floor((L+S)/2),ne=v[$],Z=F.localeCompare(ne,["zh-CN"]),Z===1)L=$+1;else if(Z===-1)S=$-1;else break;return Z<0&&$--,u[F]=o[$],U==="first_letter"?o[$].charAt(0):o[$]},E=function(F,U){if(typeof F!="string")return F;var j="";return(0,D.Z)(F,function(L){j+=a(L,U)}),j};return function(h,F){return r||(r=E),r(h,F)}(p,K)}},69287:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(36849);const r=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72025:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(78121);const r=[]},15406:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(82415);const r=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:1,tocIndex:0},{value:"\u8C03\u6574 actions \u4E3A ",paraId:2,tocIndex:3},{value:"['read_detail']",paraId:2,tocIndex:3},{value:"\uFF0C\u70B9\u51FB<\u67E5\u770B>\u8DF3\u8F6C\u5230 ",paraId:2,tocIndex:3},{value:"xxx/detail/[id]",paraId:2,tocIndex:3},{value:"\uFF0C",paraId:2,tocIndex:3},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ref \u4F60\u53EF\u4EE5\u505A\u66F4\u591A\u64CD\u4F5C",paraId:4,tocIndex:6},{value:`import type { ReactNode } from 'react';
import type { HMTableProps } from '../table';
import type { ProFormInstance, ActionType } from '@ant-design/pro-components';

/**
 * create \u521B\u5EFA
 * read \u67E5\u770B
 * read_detail \u8BE6\u60C5\u9875\u67E5\u770B
 * update \u7F16\u8F91
 * delete \u5220\u9664
 */
type CurdAction = 'create' | 'read' | 'read_detail' | 'update' | 'delete';

interface CURDProps {
  actions: CurdAction[];

  /** \u8868\u683C\u76F8\u5173 */
  hmTableProps: HMTableProps;

  /** \u65B0\u5EFA\u6309\u94AE\uFF0C\u9ED8\u8BA4\u65B0\u5EFA */
  createButton?: ReactNode;

  operateColumnProps?: {
    width?: number;
    /** \u6269\u5C55\u64CD\u4F5C\u533A\u57DF */
    moreOperator?: (record) => ReactNode;
  };

  readProps?: {
    /** \u6587\u672C */
    operateText?: string;
  };

  /** \u5220\u9664\u63A5\u53E3 */
  deleteById?: ({ id, ids }) => Promise<any>;
  deleteByRecord?: (record) => Promise<any>;
  /** \u5220\u9664\u76F8\u5173 */
  deleteProps?: {
    /** \u663E\u793A\u540D\u79F0\u7D22\u5F15 */
    nameIndex: string;
    /** \u5220\u9664\u786E\u8BA4\u63CF\u8FF0 */
    desc?: string;
    /** \u6587\u672C */
    operateText?: string;
  };

  /** \u5F39\u7A97\u8868\u5355 */
  detailForm?: (formProps: { readonly: boolean }, info: { action: CurdAction }) => ReactNode;
  /** detailForm \u7684 formRef */
  detailFormInstance?: ProFormInstance;

  /** \u65B0\u589E\u63A5\u53E3 */
  requestAdd?: (values) => Promise<any>;

  addProps?: {
    /** \u6210\u529F\u6587\u6848 */
    successText?: string | (() => string);
  };

  /** \u66F4\u65B0\u63A5\u53E3 */
  requestUpdateById?: (values) => Promise<any>;
  updateProps?: {
    /** \u6587\u672C */
    operateText?: string;
    /** \u6210\u529F\u6587\u6848 */
    successText?: string | (() => string);
  };

  /** \u83B7\u53D6\u8BE6\u60C5\u63A5\u53E3 */
  requestGetById?: ({ id }) => Promise<any>;

  /** \u83B7\u53D6\u8BE6\u60C5\u63A5\u53E3\uFF0C\u975E id \u7684\u65F6\u5019 */
  requestGetByRecord?: (record) => Promise<any>;

  /** \u8DF3\u8F6C\u5230\u8BE6\u60C5\u7684 id \u6240\u4EE5\uFF0C\u9ED8\u8BA4 id */
  detailIdIndex?: string;
}

interface CURDMethods {
  getActionRef: () => React.MutableRefObject<ActionType | undefined>;
}
`,paraId:5,tocIndex:9}]},77394:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(34812);const r=[{value:`interface EditorJavascriptProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
`,paraId:0,tocIndex:4}]},36602:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(76619);const r=[{value:`import type { JSONEditor } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
  mode?: JSONEditor['mode'];
}
`,paraId:0,tocIndex:6}]},47725:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(1923);const r=[{value:"LogViewer",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\u7684 React \u7EC4\u4EF6\u3002\u5B83\u4F7F\u7528 CodeMirror \u7F16\u8F91\u5668\u6765\u5448\u73B0\u65E5\u5FD7\uFF0C\u63D0\u4F9B\u4E86\u8BED\u6CD5\u9AD8\u4EAE\u548C\u4E3B\u9898\u652F\u6301\u3002",paraId:0,tocIndex:0}]},75455:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(8574);const r=[{value:`interface EditorMarkdownProps {
  value: string;
}
`,paraId:0,tocIndex:3}]},94629:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(65488);const r=[{value:"JSON",paraId:0,tocIndex:1},{value:"readonly",paraId:1},{value:"JSON",paraId:2,tocIndex:2},{value:"readonly",paraId:3}]},62761:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(50671);const r=[{value:"\u5BF9 ProTable \u505A\u6269\u5C55\u4EE5\u6EE1\u8DB3\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u641C\u7D22\u5173\u95ED\uFF0C\u9700\u8981\u518D\u6253\u5F00 ",paraId:1,tocIndex:0},{value:"search: true",paraId:1,tocIndex:0},{value:"\u589E\u52A0 hmRequest\uFF0C\u4EE5\u9002\u914D huomu \u7684\u8BF7\u6C42\u3002",paraId:1,tocIndex:0},{value:"\u66F4\u591A\u7ED3\u5408 CURD \u4F7F\u7528\u3002",paraId:2,tocIndex:0}]},22511:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(44340);const r=[{value:"\u81EA\u5B9A\u4E49 valueType",paraId:0,tocIndex:0},{value:`import { customValueTypeMap } from '@huomu/core';
import { ProConfigProvider } from '@ant-design/pro-components';

const Demo = () => (
  <ProConfigProvider valueTypeMap={customValueTypeMap}>
    <div>some</div>
  </ProConfigProvider>
);

export default Demo;
`,paraId:1,tocIndex:1},{value:`enum CustomValueTypeEnum {
  /** \u6E32\u67D3\u65F6\u95F4 + \u641C\u7D22\u65E5\u671F\u8303\u56F4 */
  CustomDateTimeAndDateRange = 'CustomDateTimeAndDateRange',
  /** \u6E32\u67D3\u65E5\u671F + \u641C\u7D22\u65E5\u671F\u8303\u56F4 */
  CustomDateAndDateRange = 'CustomDateAndDateRange',
  /** JSON */
  CustomJSON = 'CustomJSON',
}
`,paraId:2,tocIndex:2}]},6920:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(32505);const r=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},75553:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(9076);const r=[{value:"pnpm i @huomu/huomu-scripts",paraId:0,tocIndex:0},{value:`program
  .command('build_api')
  .description('swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5')
  .option('-i, --input <input>', 'package.json \u6240\u5728\u7684\u76EE\u5F55\uFF0C\u8BFB\u53D6 package.json \u4E2D\u7684 swaggerDocs \u5B57\u6BB5')
  .option('-o, --output <output>', '\u8F93\u51FA /api /swagger \u7684\u76EE\u5F55')
  .action(buildApi);

program
  .command('build_enum')
  .description('\u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801')
  .option('-i, --input <input>', 'enum \u914D\u7F6E\u6587\u4EF6')
  .option('-o, --output <output>', '\u8F93\u51FA /enum \u7684\u76EE\u5F55')
  .action(buildEnum);
`,paraId:1,tocIndex:0},{value:"\u751F\u6210\u8FD9\u6837\u7684\u4EE3\u7801",paraId:2,tocIndex:1},{value:"\u7ECF\u8FC7\u5904\u7406\u66B4\u6F0F api",paraId:3,tocIndex:1},{value:`import { Api as IotBaseApi } from './api/iot-base';
import { injectInterceptors } from './interceptors';

const iotBaseApi = new IotBaseApi({
  baseURL: '/iot-base',
});

injectInterceptors(iotBaseApi.instance);

export { iotBaseApi };
`,paraId:4,tocIndex:1},{value:"\u4E1A\u52A1\u4F7F\u7528",paraId:5,tocIndex:1},{value:`import { iotBaseApi } from '@lib/api';

iotBaseApi.thing.thingModelMainPageByParam({});
`,paraId:6,tocIndex:1},{value:"\u540E\u7AEF\u63A5\u53E3\u4F1A\u6709\u679A\u4E3E\uFF0C\u63D0\u73B0\u5728\u4EE3\u7801\u4E0A\u662F\u8054\u5408\u7C7B\u578B\u3002",paraId:7,tocIndex:2},{value:`  /** #\u53D1\u5E03\u72B6\u6001#ENUM#0:\u672A\u53D1\u5E03:NOT_RELEASE,2:\u53D1\u5E03\u6210\u529F:RELEASED# */
  releaseStatus?: 'NOT_RELEASE' | 'RELEASED';
`,paraId:8,tocIndex:2},{value:"\u6211\u4EEC\u7ECF\u5E38\u4F1A\u8FD9\u6837\u7684\u573A\u666F",paraId:9,tocIndex:2},{value:`// --- ReleaseStatus

export enum EnumReleaseStatus {
  NOT_RELEASE = 'NOT_RELEASE',
  RELEASED = 'RELEASED',
}

export const valueEnumReleaseStatus = {
  [EnumReleaseStatus.NOT_RELEASE]: {
    text: '\u672A\u53D1\u5E03',
    status: 'Default',
  },

  [EnumReleaseStatus.RELEASED]: {
    text: '\u5DF2\u53D1\u5E03',
    status: 'Success',
  },
};

export const listReleaseStatus = Object.keys(valueEnumReleaseStatus).map((key) => {
  const item = valueEnumReleaseStatus[key];

  return {
    value: key,
    label: item.text,
  };
});

export function TagReleaseStatus(props: { value?: EnumReleaseStatus | string }) {
  const item = props.value && valueEnumReleaseStatus[props.value];

  if (item) {
    return <Tag color={item.color}>{item.text}</Tag>;
  }

  return null;
}
`,paraId:10,tocIndex:2},{value:"\u4EBA\u5DE5\u5199\u592A\u6162\uFF0C\u53C8\u4E0D\u597D\u901A\u8FC7\u4EE3\u7801\u751F\u6210\uFF0C\u6240\u4EE5\u6574\u4E86\u4E2A\u811A\u672C\u3002\u811A\u672C\u9700\u8981\u914D\u7F6E enums.config.js\uFF0C\u5373\u53EF\u751F\u6210\u4E0A\u9762\u7684\u4EE3\u7801",paraId:11,tocIndex:2},{value:`const enums = {
  ReleaseStatus: {
    NOT_RELEASE: {
      text: '\u672A\u53D1\u5E03',
      status: 'Default',
      color: 'default',
    },
    RELEASED: {
      text: '\u5DF2\u53D1\u5E03',
      status: 'Success',
      color: 'success',
    },
  },
};
`,paraId:12,tocIndex:2}]},51040:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(4981);const r=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]},35454:function(B,l,e){e.r(l),e.d(l,{texts:function(){return r}});var D=e(12894);const r=[{value:"\u5C06\u6C49\u5B57\u8F6C\u6362\u4E3A\u62FC\u97F3",paraId:0,tocIndex:0},{value:"\u8F93\u51FA\u62FC\u97F3",paraId:1,tocIndex:1},{value:"\u8F93\u51FA\u9996\u62FC\u97F3",paraId:2},{value:"\u5339\u914D",paraId:3},{value:"\u8FC7\u6EE4",paraId:4}]},56281:function(B,l){l.Z=`import React, { useRef } from 'react';
import type { CURDProps } from '@huomu/core';
import { CURD, proFormSelectSearchProps } from '@huomu/core';
import { Button } from 'antd';
import { ProForm, ProFormSwitch, ProFormText } from '@ant-design/pro-components';
import {
  fakeRequest,
  fakeDeleteById,
  fakeAdd,
  fakeGetById,
  fakeUpdateById,
  fakeRequestCity,
  fakeRequestArea,
  levels,
  fakeRequestSchool,
} from './data';

const Normal = () => {
  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57(\u7701\u7565)',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
    {
      title: 'city',
      dataIndex: 'city',
    },
    {
      title: 'area',
      dataIndex: 'area',
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'delete', 'update']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
      deleteById={fakeDeleteById}
      deleteProps={{
        nameIndex: 'name',
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
          />
        </>
      )}
      requestGetById={fakeGetById}
      requestAdd={fakeAdd}
      requestUpdateById={fakeUpdateById}
    />
  );
};

function ReadDetail() {
  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <CURD
      actions={['read_detail']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
    />
  );
}

function Ref() {
  const formRef = useRef<any>();
  const [detailFormInstance] = ProForm.useForm();

  // @ts-ignore
  window._detailFormInstance = detailFormInstance;

  const name = ProForm.useWatch('name', formRef.current);
  const detailName = ProForm.useWatch('name', detailFormInstance);

  // \u4E0D\u77E5\u9053\u4E3A\u5565\u8FD9\u91CC name \u4E0D\u751F\u6548\uFF0C\u4F46\u662F\u9879\u76EE\u91CC\u662F\u751F\u6548\u7684\u3002\u5148\u5FFD\u7565
  console.log('useWatch', name, detailName);

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'update']}
      hmTableProps={{
        formRef,
        hmColumns,
        hmRequest: fakeRequest,
      }}
      detailFormInstance={detailFormInstance}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
            initialValue={'default'}
          />
          <ProFormSwitch {...formProps} name="status" label="\u5F00\u542F" initialValue={false} />
        </>
      )}
      requestGetById={fakeGetById}
      requestAdd={fakeAdd}
      requestUpdateById={fakeUpdateById}
    />
  );
}

function ActionRef() {
  const ref = useRef<any>();

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
  ];

  return (
    <>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CURD
        ref={ref}
        actions={[]}
        hmTableProps={{
          hmColumns,
          hmRequest: fakeRequest,
        }}
      />
    </>
  );
}

function RemoteData() {
  const hmColumns: CURDProps['hmTableProps']['hmColumns'] = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
    },
    {
      title: '\u7B49\u7EA7(\u672C\u5730\u6570\u636E)',
      dataIndex: 'level',
      search: true,
      valueEnum: levels,
      ...proFormSelectSearchProps,
    },
    {
      title: 'city(\u8FDC\u7AEF\u6570\u636E)',
      dataIndex: 'city',
      search: true,
      request: async () => {
        console.log('request');
        const res = await fakeRequestCity();

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      ...proFormSelectSearchProps,
    },
    {
      title: 'area(\u8054\u52A8 city)',
      dataIndex: 'area',
      search: true,
      request: async (params) => {
        console.log('params', params);
        const res = await fakeRequestArea(params);

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
      dependencies: ['city'],
      ...proFormSelectSearchProps,
    },
    {
      title: '\u5B66\u6821(\u8FDC\u7AEF\u6570\u636E label value)',
      dataIndex: 'school',
      search: true,
      valueType: 'select',
      request: () => fakeRequestSchool(),
      ...proFormSelectSearchProps,
    },
  ];

  return (
    <CURD
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
    />
  );
}

function NoSearch() {
  const ref = useRef<any>();

  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
    },
  ];

  return (
    <CURD
      ref={ref}
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
    />
  );
}

const CustomText = () => {
  const hmColumns = [
    {
      title: 'id',
      dataIndex: 'id',
      search: true,
    },
    {
      title: '\u540D\u5B57',
      dataIndex: 'name',
      search: true,
      ellipsis: true,
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'delete', 'update']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeRequest,
      }}
      operateColumnProps={{
        width: 230,
        moreOperator: () => <div>custom</div>,
      }}
      readProps={{
        operateText: '\u67E5\u770B\u5566',
      }}
      deleteById={fakeDeleteById}
      deleteProps={{
        nameIndex: 'name',
        operateText: '\u5220\u9664\u5566',
      }}
      detailForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
          />
        </>
      )}
      requestGetById={fakeGetById}
      requestAdd={fakeAdd}
      addProps={{
        successText: '\u65B0\u5EFA\u6210\u529F\u5566',
      }}
      updateProps={{
        operateText: '\u66F4\u65B0\u5566',
        successText: '\u66F4\u65B0\u6210\u529F\u5566',
      }}
      requestUpdateById={fakeUpdateById}
    />
  );
};

export { Normal, ReadDetail, Ref, ActionRef, RemoteData, NoSearch, CustomText };
`}}]);
