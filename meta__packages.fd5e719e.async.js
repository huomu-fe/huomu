"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{79876:function(A,d,e){e.r(d),e.d(d,{demos:function(){return D}});var O=e(59496),r=e(36849),D={}},61249:function(A,d,e){e.r(d),e.d(d,{demos:function(){return y}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(78121),g=e(22473),y={"button-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22473));case 2:return o=n.sent,u=o.LoadingButton,n.abrupt("return",{default:function(){return f.createElement("div",null,f.createElement(u,{onClick:function(){}},"\u70B9\u51FB"),f.createElement(u,{onClick:function(){return new Promise(function(h){setTimeout(h,1e3)})}},"\u70B9\u51FB 1000ms resolve"),f.createElement(u,{onClick:function(){return new Promise(function(h,a){setTimeout(a,1e3)})}},"\u70B9\u51FB 1000ms reject"))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"button-demo-0",refAtomIds:["button"],dependencies:{"index.tsx":{type:"FILE",value:`import { LoadingButton } from '@huomu/core';

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
};`},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/core":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},39147:function(A,d,e){e.r(d),e.d(d,{demos:function(){return y}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(82415),g=e(22076),y={"curd-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.Normal,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { Normal } from './demo';

export default Normal;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-1":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.ReadDetail,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { ReadDetail } from './demo';

export default ReadDetail;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-2":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.RemoteData,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { RemoteData } from './demo';

export default RemoteData;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-3":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.Ref,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-3",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { Ref } from './demo';

export default Ref;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-4":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.ActionRef,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-4",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { ActionRef } from './demo';

export default ActionRef;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-5":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.NoSearch,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-5",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { NoSearch } from './demo';

export default NoSearch;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"curd-demo-6":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,22076));case 2:return o=n.sent,u=o.CustomText,n.abrupt("return",{default:u});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"curd-demo-6",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CustomText } from './demo';

export default CustomText;`},"./demo.tsx":{type:"FILE",value:e(56281).Z}},entry:"index.tsx"},context:{"/home/runner/work/huomu/huomu/packages/core/src/curd/demo/index.tsx":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},27140:function(A,d,e){var O;e.r(d),e.d(d,{demos:function(){return u}});var r=e(90228),D=e.n(r),i=e(48305),f=e.n(i),b=e(87999),g=e.n(b),y=e(59496),v=e(34812),o=e(22473),u={"editor_javascript-demo-0":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(`const name = 'world';
console.log('hello', name);
`),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJavascript,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-0",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_javascript-demo-1":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(`const name = 'world';
console.log('hello', name);
`),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S,readonly:!0}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJavascript,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_javascript-demo-1",refAtomIds:["editor_javascript"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},97504:function(A,d,e){var O;e.r(d),e.d(d,{demos:function(){return u}});var r=e(90228),D=e.n(r),i=e(48305),f=e.n(i),b=e(87999),g=e.n(b),y=e(59496),v=e(76619),o=e(22473),u={"editor_json-demo-0":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(JSON.stringify({name:"world"},null,2)),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJSON,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-0",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-1":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(JSON.stringify({name:"world"},null,2)),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S,readonly:!0}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJSON,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-1",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-2":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(JSON.stringify({name:"world"},null,2)),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S,mode:"tree",readonly:!0}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJSON,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-2",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}},"editor_json-demo-3":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(JSON.stringify({name:"world"},null,2)),j=f()(N,2),L=j[0],S=j[1];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L,onChange:S,readonly:!0,mode:"tree",mainMenuBar:!1}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorJSON,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_json-demo-3",refAtomIds:["editor_json"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},89800:function(A,d,e){e.r(d),e.d(d,{demos:function(){return y}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(1923),g=e(22473),y={"editor_logs-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u,s;return r()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=function(){return f.createElement(u,{logs:[{timestamp:"2023-01-01 12:00:00",level:"info",message:"This is an info log message."},{timestamp:"2023-01-01 12:00:00",level:"warn",message:"This is a warning log message."},{timestamp:"2023-01-01 12:00:00",level:"error",message:"This is an error log message."},{timestamp:"2023-01-01 12:00:00",level:"system",message:"This is a debug log message. This is a debug log message This is a debug log message This is a debug log message This is a debug log message"}]})},m.next=3,Promise.resolve().then(e.bind(e,22473));case 3:return o=m.sent,u=o.EditorLogs,m.abrupt("return",{default:s});case 6:case"end":return m.stop()}},v)})))),asset:{type:"BLOCK",id:"editor_logs-demo-0",refAtomIds:["editor_logs"],dependencies:{"index.tsx":{type:"FILE",value:`import { EditorLogs } from '@huomu/core';

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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/core":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},21497:function(A,d,e){var O;e.r(d),e.d(d,{demos:function(){return u}});var r=e(90228),D=e.n(r),i=e(48305),f=e.n(i),b=e(87999),g=e.n(b),y=e(59496),v=e(8574),o=e(22473),u={"editor_markdown-demo-0":{component:y.memo(y.lazy(g()(D()().mark(function s(){var n,m,t,h,a;return D()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=function(){var N=m(`# hello

world
`),j=f()(N,1),L=j[0];return y.createElement("div",{style:{width:"500px",height:"500px"}},y.createElement(h,{value:L}))},p.next=3,Promise.resolve().then(e.t.bind(e,59496,19));case 3:return n=p.sent,m=n.useState,p.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return t=p.sent,h=t.EditorMarkdown,p.abrupt("return",{default:a});case 10:case"end":return p.stop()}},s)})))),asset:{type:"BLOCK",id:"editor_markdown-demo-0",refAtomIds:["editor_markdown"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{react:O||(O=e.t(y,2)),"@huomu/core":o},renderOpts:{compile:function(){var s=g()(D()().mark(function m(){var t,h=arguments;return D()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(987).then(e.bind(e,49987));case 2:return P.abrupt("return",(t=P.sent).default.apply(t,h));case 3:case"end":return P.stop()}},m)}));function n(){return s.apply(this,arguments)}return n}()}}}},8458:function(A,d,e){e.r(d),e.d(d,{demos:function(){return v}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(65488),g=e(7214),y=e(22473),v={"form-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return f.createElement(s,null,f.createElement(m,{name:"json",initialValue:JSON.stringify({name:"world"},null,2)}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return n=a.sent,m=n.HMProFormJSON,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-0",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
import { HMProFormJSON } from '@huomu/core';

function Demo() {
  return (
    <ProForm>
      <HMProFormJSON name="json" initialValue={JSON.stringify({ name: 'world' }, null, 2)} />
    </ProForm>
  );
}

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(987).then(e.bind(e,49987));case 2:return h.abrupt("return",(n=h.sent).default.apply(n,m));case 3:case"end":return h.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-1":{component:f.memo(f.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return f.createElement(s,null,f.createElement(m,{name:"json",readonly:!0,initialValue:JSON.stringify({name:"world"},null,2),fieldProps:{mainMenuBar:!1}}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return n=a.sent,m=n.HMProFormJSON,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-1",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
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

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(987).then(e.bind(e,49987));case 2:return h.abrupt("return",(n=h.sent).default.apply(n,m));case 3:case"end":return h.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-2":{component:f.memo(f.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return f.createElement(s,null,f.createElement(m,{name:"json",initialValue:`const name = 'world';
console.log('hello', name);
`}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return n=a.sent,m=n.HMProFormJavascript,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-2",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
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

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(987).then(e.bind(e,49987));case 2:return h.abrupt("return",(n=h.sent).default.apply(n,m));case 3:case"end":return h.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}},"form-demo-3":{component:f.memo(f.lazy(i()(r()().mark(function o(){var u,s,n,m,t;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=function(){return f.createElement(s,null,f.createElement(m,{name:"json",readonly:!0,initialValue:`const name = 'world';
console.log('hello', name);
`}))},a.next=3,Promise.resolve().then(e.bind(e,7214));case 3:return u=a.sent,s=u.ProForm,a.next=7,Promise.resolve().then(e.bind(e,22473));case 7:return n=a.sent,m=n.HMProFormJavascript,a.abrupt("return",{default:t});case 10:case"end":return a.stop()}},o)})))),asset:{type:"BLOCK",id:"form-demo-3",refAtomIds:["form"],dependencies:{"index.tsx":{type:"FILE",value:`import { ProForm } from '@ant-design/pro-components';
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

export default Demo;`},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"@huomu/core":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@ant-design/pro-components":g,"@huomu/core":y},renderOpts:{compile:function(){var o=i()(r()().mark(function s(){var n,m=arguments;return r()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(987).then(e.bind(e,49987));case 2:return h.abrupt("return",(n=h.sent).default.apply(n,m));case 3:case"end":return h.stop()}},s)}));function u(){return o.apply(this,arguments)}return u}()}}}},58668:function(A,d,e){e.r(d),e.d(d,{demos:function(){return D}});var O=e(59496),r=e(50671),D={}},43163:function(A,d,e){e.r(d),e.d(d,{demos:function(){return s}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(44340),g=e(22473),y=e(7214),v=e(83693),o=e(16483),u=e.n(o),s={"value_type_map-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function n(){var m,t,h,a,P,p,U,N,j,L,S,$,re,Z;return r()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return $=function(){return $=i()(r()().mark(function le(){var ue;return r()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return ue=N(5).map(function(he){return{id:"".concat(he),timeStr:"2024-10-01 10:00:00",timeNumber:+L("2024-10-01 10:00:00"),dateStr:"2024-10-01",dateNumber:+L("2024-10-01"),jsonText:JSON.stringify({name:"hello world hello world hello world"})}}),se.abrupt("return",Promise.resolve({data:{data:ue,success:!0,totalSize:100}}));case 2:case"end":return se.stop()}},le)})),$.apply(this,arguments)},S=function(){return $.apply(this,arguments)},G.next=4,Promise.resolve().then(e.bind(e,22473));case 4:return m=G.sent,t=m.CURD,h=m.customValueTypeMap,a=m.CustomValueTypeEnum,G.next=10,Promise.resolve().then(e.bind(e,7214));case 10:return P=G.sent,p=P.ProConfigProvider,G.next=14,Promise.resolve().then(e.bind(e,83693));case 14:return U=G.sent,N=U.range,G.next=18,Promise.resolve().then(e.t.bind(e,16483,23));case 18:return j=G.sent,L=j.default,re=function(){var le=[{title:"id",dataIndex:"id"},{title:"\u65F6\u95F4 str",dataIndex:"timeStr",valueType:a.CustomDateTimeAndDateRange,search:!0},{title:"\u65F6\u95F4 number",dataIndex:"timeNumber",valueType:a.CustomDateTimeAndDateRange,search:!0},{title:"\u65E5\u671F str",dataIndex:"dateStr",valueType:a.CustomDateAndDateRange,search:!0},{title:"\u65E5\u671F number",dataIndex:"dateNumber",valueType:a.CustomDateAndDateRange,search:!0},{title:"json",dataIndex:"jsonText",ellipsis:!0,valueType:a.CustomJSON}];return f.createElement(t,{actions:[],hmTableProps:{hmColumns:le,hmRequest:S}})},Z=function(){return f.createElement(p,{valueTypeMap:h},f.createElement(re,null))},G.abrupt("return",{default:Z});case 23:case"end":return G.stop()}},n)})))),asset:{type:"BLOCK",id:"value_type_map-demo-0",refAtomIds:["value_type_map"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, customValueTypeMap, CustomValueTypeEnum } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.9.2"},"@ant-design/pro-components":{type:"NPM",value:"2.7.19"},"lodash-es":{type:"NPM",value:"4.17.21"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{"@huomu/core":g,"@ant-design/pro-components":y,"lodash-es":v,dayjs:o},renderOpts:{compile:function(){var n=i()(r()().mark(function t(){var h,a=arguments;return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(987).then(e.bind(e,49987));case 2:return p.abrupt("return",(h=p.sent).default.apply(h,a));case 3:case"end":return p.stop()}},t)}));function m(){return n.apply(this,arguments)}return m}()}}}},63271:function(A,d,e){e.r(d),e.d(d,{demos:function(){return D}});var O=e(59496),r=e(32505),D={}},21276:function(A,d,e){e.r(d),e.d(d,{demos:function(){return D}});var O=e(59496),r=e(9076),D={}},34302:function(A,d,e){e.r(d),e.d(d,{demos:function(){return D}});var O=e(59496),r=e(4981),D={}},89489:function(A,d,e){e.r(d),e.d(d,{demos:function(){return y}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(59496),b=e(12894),g=e(90001),y={"packages-tool-src-pinyin-demo-0":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyin,n.abrupt("return",{default:function(){return f.createElement("div",null,u("\u4F60\u597D"))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@huomu/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D')}</div>;
};`},"@huomu/tool":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-1":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyin,n.abrupt("return",{default:function(){return f.createElement("div",null,u("\u4F60\u597D","first_letter")," ")}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyin } from '@huomu/tool';

export default () => {
  return <div>{pinyin('\u4F60\u597D', 'first_letter')} </div>;
};`},"@huomu/tool":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-2":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyinMatch,n.abrupt("return",{default:function(){return f.createElement(f.Fragment,null,f.createElement("div",null,u("\u4F60\u597D","nh")+""),f.createElement("div",null,u("\u4F60\u597D","wo")+""," "))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinMatch } from '@huomu/tool';

export default () => {
  return (
    <>
      <div>{pinyinMatch('\u4F60\u597D', 'nh') + ''}</div>
      <div>{pinyinMatch('\u4F60\u597D', 'wo') + ''} </div>
    </>
  );
};`},"@huomu/tool":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}},"packages-tool-src-pinyin-demo-3":{component:f.memo(f.lazy(i()(r()().mark(function v(){var o,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,90001));case 2:return o=n.sent,u=o.pinyinFilter,n.abrupt("return",{default:function(){return f.createElement(f.Fragment,null,f.createElement("div",null,u(["\u4F60\u597D"," \u6211\u4EEC"],"nh")," "),f.createElement("div",null,u(["\u4F60\u597D"," \u6211\u4EEC"],"wo")," "))}});case 5:case"end":return n.stop()}},v)})))),asset:{type:"BLOCK",id:"packages-tool-src-pinyin-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { pinyinFilter } from '@huomu/tool';

export default () => {
  return (
    <>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'nh')} </div>
      <div>{pinyinFilter(['\u4F60\u597D', ' \u6211\u4EEC'], 'wo')} </div>
    </>
  );
};`},"@huomu/tool":{type:"NPM",value:"1.9.2"}},entry:"index.tsx"},context:{"@huomu/tool":g},renderOpts:{compile:function(){var v=i()(r()().mark(function u(){var s,n=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(987).then(e.bind(e,49987));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,n));case 3:case"end":return t.stop()}},u)}));function o(){return v.apply(this,arguments)}return o}()}}}},22076:function(A,d,e){e.r(d),e.d(d,{ActionRef:function(){return ze},CustomText:function(){return $e},NoSearch:function(){return Ne},Normal:function(){return Se},ReadDetail:function(){return Le},Ref:function(){return Fe},RemoteData:function(){return Ue}});var O=e(90228),r=e.n(O),D=e(87999),i=e.n(D),f=e(48305),b=e.n(f),g=e(26068),y=e.n(g),v=e(59496),o=e(22473),u=e(78960),s=e(94624),n=e(11850),m=e(89152),t=e(62802),h={\u5E7F\u5DDE:["\u767D\u4E91","\u9EC4\u57D4","\u589E\u57CE"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71","\u5B9D\u5B89"]},a={HIGH:{text:"\u9AD8"},MEDIUM:{text:"\u4E2D"},LOW:{text:"\u4F4E"}},P=[{value:"0",label:"\u7B2C\u4E00\u5C0F\u5B66"},{value:"1",label:"\u7B2C\u4E8C\u5C0F\u5B66"},{value:"2",label:"\u7B2C\u4E09\u5C0F\u5B66"}];function p(T){return Math.floor(Math.random()*T)}function U(){return Object.keys(h)[p(Object.keys(h).length+1)]}function N(T){if(T.city)return T.city&&h[T.city][p(h[T.city].length+1)]}function j(){return Object.keys(a)[p(Object.keys(a).length+1)]}function L(T){return(0,t.Z)(T).map(function(_){var z=U(),C=N({city:z});return{id:"".concat(_),name:"\u8FD9\u662F\u540D\u5B57\u8FD9\u662F\u540D\u5B57 ".concat(_),city:z,area:C,level:j(),status:p(2)===1,school:""+p(P.length)}})}var S=L(21);function $(T){return re.apply(this,arguments)}function re(){return re=i()(r()().mark(function T(_){return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("fakeHMRequest",_),C.abrupt("return",new Promise(function(w){setTimeout(function(){w({data:{data:S,success:!0,totalSize:S.length}})},1e3)}));case 2:case"end":return C.stop()}},T)})),re.apply(this,arguments)}function Z(T){return pe.apply(this,arguments)}function pe(){return pe=i()(r()().mark(function T(_){return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("fakeHMDeleteById",_),S=S.filter(function(w){return w.id!==_.id}),C.abrupt("return",Promise.resolve({}));case 3:case"end":return C.stop()}},T)})),pe.apply(this,arguments)}function G(T){return ae.apply(this,arguments)}function ae(){return ae=i()(r()().mark(function T(_){return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("fakeHMGetById",_),C.abrupt("return",new Promise(function(w){setTimeout(function(){w({data:{data:S.find(function(ie){return ie.id===_.id})}})},1e3)}));case 2:case"end":return C.stop()}},T)})),ae.apply(this,arguments)}function le(T){return ue.apply(this,arguments)}function ue(){return ue=i()(r()().mark(function T(_){return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("fakeHMAdd",_),S.push(y()({id:S.length+1},_)),C.abrupt("return",Promise.resolve({}));case 3:case"end":return C.stop()}},T)})),ue.apply(this,arguments)}function Pe(T){return se.apply(this,arguments)}function se(){return se=i()(r()().mark(function T(_){return r()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return console.log("fakeHMUpdateById",_),S=S.map(function(w){return w.id===_.id?y()(y()({},w),_):w}),C.abrupt("return",Promise.resolve({}));case 3:case"end":return C.stop()}},T)})),se.apply(this,arguments)}function he(){return Promise.resolve(Object.keys(h))}function Ae(T){return T!=null&&T.city?Promise.resolve(h[T.city]):Promise.resolve(Object.values(h).reduce(function(_,z){return _.concat(z)},[]))}function je(){return Promise.resolve(P)}var K=e(4637),Se=function(){var _=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57(\u7701\u7565)",dataIndex:"name",search:!0,ellipsis:!0},{title:"city",dataIndex:"city"},{title:"area",dataIndex:"area"}];return(0,K.jsx)(o.CURD,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:_,hmRequest:$},deleteById:Z,deleteProps:{nameIndex:"name"},detailForm:function(C){return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(s.Z,y()(y()({},C),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}],extra:"extra extra extra extra"}))})},requestGetById:G,requestAdd:le,requestUpdateById:Pe})};function Le(){var T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,K.jsx)(o.CURD,{actions:["read_detail"],hmTableProps:{hmColumns:T,hmRequest:$}})}function Fe(){var T=(0,v.useRef)(),_=n.A.useForm(),z=b()(_,1),C=z[0];window._detailFormInstance=C;var w=n.A.useWatch("name",T.current),ie=n.A.useWatch("name",C);console.log("useWatch",w,ie);var q=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,K.jsx)(o.CURD,{actions:["create","read","update"],hmTableProps:{formRef:T,hmColumns:q,hmRequest:$},detailFormInstance:C,detailForm:function(fe){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(s.Z,y()(y()({},fe),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}],initialValue:"default"})),(0,K.jsx)(m.Z,y()(y()({},fe),{},{name:"status",label:"\u5F00\u542F",initialValue:!1}))]})},requestGetById:G,requestAdd:le,requestUpdateById:Pe})}function ze(){var T=(0,v.useRef)(),_=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0}];return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(u.ZP,{onClick:function(){var C;return(C=T.current.getActionRef().current)===null||C===void 0?void 0:C.reload()},children:"reload"}),(0,K.jsx)(o.CURD,{ref:T,actions:[],hmTableProps:{hmColumns:_,hmRequest:$}})]})}function Ue(){var T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},y()({title:"\u7B49\u7EA7(\u672C\u5730\u6570\u636E)",dataIndex:"level",search:!0,valueEnum:a},o.proFormSelectSearchProps),y()({title:"city(\u8FDC\u7AEF\u6570\u636E)",dataIndex:"city",search:!0,request:function(){var _=i()(r()().mark(function C(){var w;return r()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return console.log("request"),q.next=3,he();case 3:return w=q.sent,q.abrupt("return",w.map(function(ee){return{label:ee,value:ee}})||[]);case 5:case"end":return q.stop()}},C)}));function z(){return _.apply(this,arguments)}return z}()},o.proFormSelectSearchProps),y()({title:"area(\u8054\u52A8 city)",dataIndex:"area",search:!0,request:function(){var _=i()(r()().mark(function C(w){var ie;return r()().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:return console.log("params",w),ee.next=3,Ae(w);case 3:return ie=ee.sent,ee.abrupt("return",ie.map(function(fe){return{label:fe,value:fe}})||[]);case 5:case"end":return ee.stop()}},C)}));function z(C){return _.apply(this,arguments)}return z}(),dependencies:["city"]},o.proFormSelectSearchProps),y()({title:"\u5B66\u6821(\u8FDC\u7AEF\u6570\u636E label value)",dataIndex:"school",search:!0,valueType:"select",request:function(){return je()}},o.proFormSelectSearchProps)];return(0,K.jsx)(o.CURD,{actions:[],hmTableProps:{hmColumns:T,hmRequest:$}})}function Ne(){var T=(0,v.useRef)(),_=[{title:"id",dataIndex:"id"},{title:"\u540D\u5B57",dataIndex:"name"}];return(0,K.jsx)(o.CURD,{ref:T,actions:[],hmTableProps:{hmColumns:_,hmRequest:$}})}var $e=function(){var _=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0,ellipsis:!0}];return(0,K.jsx)(o.CURD,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:_,hmRequest:$},operateColumnProps:{width:230,moreOperator:function(){return(0,K.jsx)("div",{children:"custom"})}},readProps:{operateText:"\u67E5\u770B\u5566"},deleteById:Z,deleteProps:{nameIndex:"name",operateText:"\u5220\u9664\u5566"},detailForm:function(C){return(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(s.Z,y()(y()({},C),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]}))})},requestGetById:G,requestAdd:le,addProps:{successText:"\u65B0\u5EFA\u6210\u529F\u5566"},updateProps:{operateText:"\u66F4\u65B0\u5566",successText:"\u66F4\u65B0\u6210\u529F\u5566"},requestUpdateById:Pe})}},22473:function(A,d,e){e.r(d),e.d(d,{CURD:function(){return Ae},CURDDetail:function(){return he},CustomValueTypeEnum:function(){return Re},EditorJSON:function(){return q},EditorJavascript:function(){return w},EditorLogs:function(){return ke},EditorMarkdown:function(){return Ze},FileUpload:function(){return pn},HMCRUD:function(){return Fe},HMDescriptions:function(){return mn},HMProFormJSON:function(){return rn},HMProFormJavascript:function(){return on},HMTable:function(){return N},LoadingButton:function(){return Ne},OperateDelete:function(){return $},createStore:function(){return yn},customValueTypeMap:function(){return Rn},getTableScroll:function(){return j},proFormSelectSearchProps:function(){return un},useDelete:function(){return S}});var O=e(15558),r=e.n(O),D=e(26068),i=e.n(D),f=e(60774),b=e(78960),g=e(59496),y=e(5791),v=e(33553),o=e(90228),u=e.n(o),s=e(67825),n=e.n(s),m=e(87999),t=e.n(m),h=e(81019),a=e(4637),P=["current","pageSize"],p=["hmRequest","request","hmColumns","columns","rowKey"];function U(l){return function(){var c=t()(u()().mark(function E(I){var R,x,M,B;return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return R=I.current,x=I.pageSize,M=n()(I,P),F.next=3,l(i()({page:R,pageSize:x},M));case 3:return B=F.sent,F.abrupt("return",{data:B.data.data,success:B.data.success,total:B.data.totalSize});case 5:case"end":return F.stop()}},E)}));return function(E){return c.apply(this,arguments)}}()}function N(l){var c=l.hmRequest,E=l.request,I=l.hmColumns,R=l.columns,x=l.rowKey,M=x===void 0?"id":x,B=n()(l,p),W=(0,g.useCallback)(function(J){return c?U(c)(J):E(J,{},{})},[c,E]),F=(0,g.useMemo)(function(){return I?I.map(function(J){return i()({search:!1},J)}):R},[R,I]);return(0,a.jsx)(h.Z,i()({cardBordered:!0,rowKey:M,pagination:i()({showSizeChanger:!0,showQuickJumper:!0},B.pagination),options:!1,request:W,columns:F},B))}function j(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,E={x:0,y:void 0};return l==null||l.forEach(function(I){I.hideInTable||(E.x+=Number(I.width)||c)}),E}var L=e(87055);function S(l){var c=l.name,E=l.desc,I=l.onDelete,R=(0,g.useCallback)(function(){L.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(c,"\u201D \u5417\uFF1F"),content:E||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){I()}})},[c,E,I]);return{doDelete:R}}function $(l){var c=l.name,E=l.desc,I=l.onDelete,R=l.operateText,x=(0,g.useCallback)(function(){L.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(c,"\u201D \u5417\uFF1F"),content:E||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){I()}})},[c,E,I]);return(0,a.jsx)("a",{style:{color:"red"},onClick:x,children:R||"\u5220\u9664"})}var re=e(48305),Z=e.n(re),pe=e(70162),G=e(51349),ae=e(11850),le=e(19331),ue=e(83873),Pe=e(82187),se=e.n(Pe);function he(l){var c=l.action,E=l.id,I=l.record,R=l.trigger,x=l.onSuccess,M=l.detailForm,B=l.requestGetById,W=l.requestGetByRecord,F=l.addProps,J=l.requestAdd,X=l.updateProps,de=l.requestUpdateById,ye=l.detailFormInstance,me=(0,g.useState)(!1),Ie=Z()(me,2),ne=Ie[0],oe=Ie[1],Te=(0,g.useState)(!!E),Me=Z()(Te,2),ce=Me[0],Ce=Me[1],De=ae.A.useForm(ye),Be=Z()(De,1),k=Be[0],ge=(0,g.useCallback)(function(){var te=t()(u()().mark(function Oe(Q){var Ee,_e,H;return u()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(V.prev=0,!(c==="create"&&J)){V.next=8;break}return V.next=4,J(Q);case 4:Ee=V.sent,_e="\u65B0\u5EFA\u6210\u529F",F!=null&&F.successText&&(_e=(0,ue.Z)(F.successText)?F.successText:F.successText()),pe.ZP.open({type:"success",content:_e});case 8:if(!(c==="update"&&de)){V.next=15;break}return V.next=11,de(i()(i()({},Q),{},{id:E}));case 11:Ee=V.sent,H="\u66F4\u65B0\u6210\u529F",X!=null&&X.successText&&(H=(0,ue.Z)(X.successText)?X.successText:X.successText()),pe.ZP.open({type:"success",content:H});case 15:if(x==null||x(),Ee===!1){V.next=18;break}return V.abrupt("return",!0);case 18:V.next=23;break;case 20:V.prev=20,V.t0=V.catch(0),setTimeout(function(){throw V.t0},10);case 23:case"end":return V.stop()}},Oe,null,[[0,20]])}));return function(Oe){return te.apply(this,arguments)}}(),[c,J,de,x,F,E,X]),We=(0,g.useCallback)(function(){var te=t()(u()().mark(function Oe(Q){var Ee;return u()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:if(Q){H.next=4;break}return k==null||k.resetFields(),oe(Q),H.abrupt("return");case 4:if(oe(Q),!E){H.next=17;break}if(Ce(!0),!W){H.next=11;break}return H.next=10,W(I);case 10:Ee=H.sent;case 11:if(!B){H.next=15;break}return H.next=14,B({id:E});case 14:Ee=H.sent;case 15:k==null||k.setFieldsValue(Ee.data.data),Ce(!1);case 17:return H.abrupt("return");case 18:case"end":return H.stop()}},Oe)}));return function(Oe){return te.apply(this,arguments)}}(),[k,E,B,W,I]),Y=(0,g.useMemo)(function(){return!M||!ne?null:ce?(0,a.jsx)("div",{className:"pt-[100px] flex justify-center",children:(0,a.jsx)(G.Z,{})}):(0,a.jsx)("div",{className:se()("curd-detail","curd-detail-action-".concat(c),{"curd-detail-hide-extra":c==="read"}),children:M({readonly:c==="read"&&!!E},{action:c})})},[ne,ce,M,c,E]);return(0,a.jsx)(le.a,{form:k,trigger:R,autoFocusFirstInput:!0,onFinish:ge,onOpenChange:We,layout:"vertical",readonly:c==="read"&&!!E,drawerProps:{destroyOnClose:!0},children:Y})}var Ae=(0,g.forwardRef)(function(c,E){var I=c.actions,R=c.hmTableProps,x=c.createButton,M=c.operateColumnProps,B=c.readProps,W=c.deleteById,F=c.deleteByRecord,J=c.deleteProps,X=c.detailIdIndex,de=c.detailForm,ye=c.requestGetById,me=c.requestGetByRecord,Ie=c.addProps,ne=c.requestAdd,oe=c.updateProps,Te=c.requestUpdateById,Me=c.detailFormInstance,ce=(0,g.useRef)(),Ce=(0,y.TH)();(0,g.useImperativeHandle)(E,function(){return{getActionRef:function(){return ce}}},[ce]);var De=(0,g.useMemo)(function(){return{detailForm:de,requestGetById:ye,requestGetByRecord:me,requestAdd:ne,requestUpdateById:Te,detailFormInstance:Me,addProps:Ie,updateProps:oe}},[de,ye,me,ne,Te,Me,Ie,oe]),Be=(0,g.useCallback)(function(Y){return function(){if(W)return W({id:Y.id,ids:[Y.id]}).then(function(){var te;(te=ce.current)===null||te===void 0||te.reload()});if(F)return F(Y).then(function(){var te;(te=ce.current)===null||te===void 0||te.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[W,F]),k=(0,g.useCallback)(function(){var Y;(Y=ce.current)===null||Y===void 0||Y.reload()},[]),ge=(0,g.useMemo)(function(){var Y={title:"\u64CD\u4F5C",fixed:"right",width:(M==null?void 0:M.width)||120,render:function(Oe,Q){return(0,a.jsxs)(f.Z,{children:[(M==null?void 0:M.moreOperator)&&M.moreOperator(Q),I.includes("read")&&(0,a.jsx)(he,i()({id:Q.id,record:Q,onSuccess:k,trigger:(0,a.jsx)("a",{children:(B==null?void 0:B.operateText)||"\u67E5\u770B"}),action:"read"},De)),I.includes("read_detail")&&(0,a.jsx)(v.rU,{to:"".concat(Ce.pathname,"/detail/").concat(Q[X||"id"]),children:(B==null?void 0:B.operateText)||"\u67E5\u770B"}),I.includes("update")&&(0,a.jsx)(he,i()({id:Q.id,record:Q,onSuccess:k,trigger:(0,a.jsx)("a",{children:(oe==null?void 0:oe.operateText)||"\u7F16\u8F91"}),action:"update"},De)),I.includes("delete")&&J&&(0,a.jsx)($,{name:Q[J.nameIndex],desc:J.desc,operateText:J.operateText,onDelete:Be(Q)})]})}};return I.includes("read")||I.includes("read_detail")||I.includes("update")||I.includes("delete")?[].concat(r()(R.hmColumns||R.columns||[]),[Y]):R.hmColumns},[I,B==null?void 0:B.operateText,J,X,De,Be,k,R.columns,R.hmColumns,Ce.pathname,M,oe==null?void 0:oe.operateText]),We=!!(ge!=null&&ge.find(function(Y){return Y.search}));return(0,a.jsx)("div",{className:"curd-table",children:(0,a.jsx)(N,i()(i()({rowKey:"id"},R),{},{scroll:j(ge),actionRef:ce,toolBarRender:function(){return[].concat(r()(R.toolBarRender?R.toolBarRender.apply(R,arguments):[]),[I.includes("create")&&(0,a.jsx)(he,i()({onSuccess:k,trigger:x||(0,a.jsx)(b.ZP,{type:"primary",children:"\u65B0\u5EFA"}),action:"create"},De))])},search:We&&i()({layout:"vertical",defaultCollapsed:!1},R.search),hmColumns:ge}))})}),je=e(34690),K=["tableProps","hmRequestGetByRecord"],Se=["current","pageSize"],Le=null,Fe=(0,g.forwardRef)(function(l,c){var E=l.tableProps,I=l.hmRequestGetByRecord,R=n()(l,K),x=(0,g.useMemo)(function(){return E.hmRequest?i()(i()({},E),{},{request:function(){var B=t()(u()().mark(function F(J){var X,de,ye,me;return u()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return X=J.current,de=J.pageSize,ye=n()(J,Se),ne.next=3,E.hmRequest(i()({page:X,pageSize:de},ye));case 3:return me=ne.sent,ne.abrupt("return",{data:me.data.data,success:me.data.success,total:me.data.totalSize});case 5:case"end":return ne.stop()}},F)}));function W(F){return B.apply(this,arguments)}return W}()}):E},[E]),M=(0,g.useCallback)(function(B){return I(B).then(function(W){return W.data.data})},[I]);return(0,a.jsx)(je.cO,i()(i()({ref:c},R),{},{tableProps:x,requestGetByRecord:I?M:l.requestGetByRecord}))}),ze=function(c){var E=c.hmRequestGetByRecord,I=_objectWithoutProperties(c,Le),R=useCallback(function(x){return E(x).then(function(M){return M.data.data})},[E]);return _jsx(CRUDDetail,_objectSpread(_objectSpread({},I),{},{requestGetByRecord:E?R:I.requestGetByRecord}))},Ue=["onClick"];function Ne(l){var c=l.onClick,E=n()(l,Ue),I=(0,g.useState)(!1),R=Z()(I,2),x=R[0],M=R[1],B=(0,g.useCallback)(function(W){M(!0),Promise.resolve(c&&c(W)).finally(function(){M(!1)})},[c]);return(0,a.jsx)(b.ZP,i()(i()({loading:x},E),{},{onClick:B}))}var $e=e(34019),T=e(15915),_=e(41142),z=e(19656),C={width:"100%",height:"100%"};function w(l){var c=l.value,E=l.onChange,I=l.readonly;return(0,a.jsx)($e.ZP,{style:C,mode:"javascript",theme:"monokai",value:c,onChange:E,readOnly:I,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var ie=e(34813);function q(l){var c=l.value,E=l.onChange,I=l.readonly,R=l.mode,x=l.mainMenuBar,M=(0,g.useRef)(null),B=(0,g.useRef)(null),W=(0,g.useRef)(E);return(0,g.useEffect)(function(){var F;(F=B.current)===null||F===void 0||F.update({text:c||""})},[c]),(0,g.useEffect)(function(){B.current=new ie.q9({target:M.current,props:{mainMenuBar:x,tabSize:2,mode:R||"text",readOnly:I,askToFormat:!1,content:{text:c||""},onChange:function(J){W.current(J.text)}}})},[]),(0,a.jsx)("div",{ref:M,className:"h-full w-full"})}var ee=e(949),fe=e(51709),Ve=["children","className","node"];function Ze(l){var c=l.value;return(0,a.jsx)(ee.U,{unwrapDisallowed:!0,components:{code:function(I){var R=I.children,x=I.className,M=I.node,B=n()(I,Ve),W=/language-(\w+)/.exec(x||"");return W?(0,a.jsx)(fe.Z,i()(i()({},B),{},{PreTag:"div",wrapLongLines:!0,children:String(R).replace(/\n$/,""),language:W[1].toLowerCase()})):(0,a.jsx)("code",i()(i()({},B),{},{className:x,children:R}))}},children:c||""})}var Ye=e(43349),Qe=e(27893),Xe=e(16374),Ke=e(61365),ke=function(c){var E=c.logs,I=E.map(function(M){var B="[".concat(M.level,"]").padEnd(8," ");return"".concat(M.timestamp," ").concat(B.toUpperCase()," ").concat(M.message)}).join(`
`),R=[Qe.il.define({token:function(B){return B.match(/.*\[WARN\s*\].*/)?"keyword":B.match(/.*\[ERROR\s*\].*/)?"invalid":B.match(/.*\[SYSTEM\].*/)?"comment":(B.next(),null)}})],x=(0,Xe.j)({theme:"dark",settings:{background:"#2e3235",foreground:"rgba(243, 244, 246, 1)"},styles:[{tag:Ke.pJ.keyword,color:"rgba(252, 211, 77, 1)"},{tag:Ke.pJ.invalid,color:"rgba(248, 113, 113, 1)"},{tag:Ke.pJ.comment,color:"rgba(96, 165, 250, 1)"}]});return(0,a.jsx)(Ye.ZP,{value:I,theme:x,extensions:R,editable:!1,height:"400px",style:{overflowY:"auto"}})},qe=e(79161),en=["readonly","fieldProps"],nn=["readonly","fieldProps"];function tn(l){return(0,a.jsx)("div",{style:{height:"300px"},children:(0,a.jsx)(q,i()({},l))})}function rn(l){var c=l.readonly,E=l.fieldProps,I=n()(l,en);return(0,a.jsx)(ae.A.Item,i()(i()({},I),{},{children:(0,a.jsx)(tn,i()({readonly:c},E))}))}function an(l){return(0,a.jsx)("div",{style:{height:"300px"},children:(0,a.jsx)(w,i()({},l))})}function on(l){var c=l.readonly,E=l.fieldProps,I=n()(l,nn);return(0,a.jsx)(ae.A.Item,i()(i()({},I),{},{children:(0,a.jsx)(an,i()({readonly:c},E))}))}var un={fieldProps:{showSearch:!0,filterOption:function(c,E){return(0,qe.n)(E.label,c)},fetchDataOnSearch:!1}},sn=e(19634),ln=e(16483),ve=e.n(ln),dn=["hmItems","items"];function mn(l){var c=l.hmItems,E=l.items,I=n()(l,dn),R=(0,g.useMemo)(function(){return c?c.map(function(x){var M=x.children;return x.children!==null&&x.children!==void 0&&(x.valueType==="date"?M=ve()(M).format("YYYY-MM-DD"):x.valueType==="dateTime"?M=ve()(M).format("YYYY-MM-DD HH:mm:ss"):x.valueType==="time"&&(M=ve()(M).format("HH:mm:ss"))),i()(i()({},x),{},{children:M||"-"})}):E},[c,E]);return(0,a.jsx)(sn.Z,i()({items:R},I))}var cn=e(30038),hn=e(71917);function pn(l){var c=l.value,E=l.onChange,I=function(M){return E==null||E(M),!1},R=function(){E==null||E(void 0)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(hn.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:c?[c]:void 0,beforeUpload:I,onRemove:R,children:(0,a.jsx)(b.ZP,{icon:(0,a.jsx)(cn.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var we=e(85081),fn=e(33329),vn=function(c){return function(E,I,R){var x=(0,fn.mW)(c);return x(E,I,R)}},Je=vn,yn=function(c){return c?(0,we.Ue)()(Je(c)):function(E){return(0,we.Ue)()(Je(E))}},gn=e(82092),be=e.n(gn),En=e(61873);function Ge(l){return(0,ue.Z)(l)&&/^\d+$/.test(l)?ve()(parseInt(l)):ve()(l)}var Pn={dateTime:function(c){return c?(0,a.jsx)("div",{children:Ge(c).format("YYYY-MM-DD HH:mm:ss")}):(0,a.jsx)("div",{children:"-"})},date:function(c){return c?(0,a.jsx)("div",{children:Ge(c).format("YYYY-MM-DD")}):(0,a.jsx)("div",{children:"-"})}},In={dateRange:function(c,E){return(0,a.jsx)(En.Z,i()(i()({},E),{},{fieldProps:i()(i()({},E.fieldProps),{},{onChange:function(R){var x,M,B=R&&[ve()(R[0]).startOf("day"),ve()(R[1]).endOf("day")];(x=(M=E.fieldProps).onChange)===null||x===void 0||x.call(M,B)}})}))}},xe={renderMap:Pn,renderFormItemMap:In},Dn=e(84846);function On(l){var c=l;if(!l)return(0,a.jsx)("div",{children:"-"});try{c=JSON.stringify(JSON.parse(l),null,2)}catch(E){console.error(E,l)}return(0,a.jsx)(Dn.Z.Text,{className:"block max-w-full overflow-hidden",ellipsis:{tooltip:{title:(0,a.jsx)("pre",{style:{whiteSpace:"pre-wrap",wordWrap:"break-word"},children:c})}},children:l})}var He={render:On,renderFormItem:function(){return(0,a.jsx)(a.Fragment,{})}},Re=function(l){return l.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",l.CustomDateAndDateRange="CustomDateAndDateRange",l.CustomJSON="CustomJSON",l}(Re||{}),Rn=be()(be()(be()({},Re.CustomDateTimeAndDateRange,{render:xe.renderMap.dateTime,renderFormItem:xe.renderFormItemMap.dateRange}),Re.CustomDateAndDateRange,{render:xe.renderMap.date,renderFormItem:xe.renderFormItemMap.dateRange}),Re.CustomJSON,{render:He.render,renderFormItem:He.renderFormItem})},90001:function(A,d,e){e.r(d),e.d(d,{pinyin:function(){return O.N},pinyinFilter:function(){return r.E},pinyinMatch:function(){return r.n}});var O=e(1077),r=e(79161)},79161:function(A,d,e){e.d(d,{E:function(){return b},n:function(){return g}});var O=e(1077),r=e(12908),D=e(83873),i=e(55247),f=function(v){return v};function b(y,v){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:f;return v?(v=v.toLowerCase(),(0,r.Z)(y,function(u){return g(o(u),v)})):y||[]}function g(y,v){var o=y;(0,D.Z)(o)||(o=""),o=o.toLowerCase();var u=(0,i.Z)((0,O.N)(o),function(n){return n[0]}).join(""),s=(0,i.Z)((0,O.N)(o,"first_letter"),function(n){return n[0]}).join("");return o.indexOf(v)>-1||u.indexOf(v)>-1||s.indexOf(v)>-1}},1077:function(A,d,e){e.d(d,{N:function(){return D}});var O=e(79156),r,D=function(f,b){if(r)return r(f,b);var g={\u963F:"a",\u54CE:"ai",\u5B89:"an",\u80AE:"ang",\u51F9:"ao",\u4E37:"ba",\u6300:"bai",\u6273:"ban",\u90A6:"bang",\u52F9:"bao",\u9642:"bei",\u5954:"ben",\u4F3B:"beng",\u5C44:"bi",\u8FB9:"bian",\u706C:"biao",\u618B:"bie",\u6C43:"bin",\u51AB:"bing",\u7676:"bo",\u5CEC:"bu",\u5693:"ca",\u5072:"cai",\u53C2:"can",\u4ED3:"cang",\u64A1:"cao",\u518A:"ce",\u5D7E:"cen",\u66FD:"ceng",\u53C9:"cha",\u8286:"chai",\u8FBF:"chan",\u4F25:"chang",\u6284:"chao",\u8F66:"che",\u62BB:"chen",\u9637:"cheng",\u5403:"chi",\u5145:"chong",\u62BD:"chou",\u51FA:"chu",\u6B3B:"chua",\u63E3:"chuai",\u5DDB:"chuan",\u5205:"chuang",\u5439:"chui",\u65FE:"chun",\u9034:"chuo",\u5472:"ci",\u5306:"cong",\u51D1:"cou",\u7C97:"cu",\u6C46:"cuan",\u5D14:"cui",\u90A8:"cun",\u6413:"cuo",\u5491:"da",\u5446:"dai",\u4E39:"dan",\u5F53:"dang",\u5200:"dao",\u561A:"de",\u6265:"dun",\u706F:"deng",\u6C10:"di",\u7538:"dian",\u5201:"diao",\u7239:"die",\u4E01:"ding",\u4E1F:"diu",\u4E1C:"dong",\u543A:"dou",\u53BE:"du",\u8011:"duan",\u5796:"dui",\u5428:"dun",\u591A:"duo",\u59B8:"e",\u8BF6:"ei",\u5940:"en",\u97A5:"eng",\u513F:"er",\u53D1:"fa",\u5E06:"fan",\u531A:"fang",\u98DE:"fei",\u5206:"fen",\u4E30:"feng",\u8985:"fiao",\u4ECF:"fo",\u7D11:"fou",\u592B:"fu",\u65EE:"ga",\u4F85:"gai",\u7518:"gan",\u5188:"gang",\u768B:"gao",\u6208:"ge",\u7ED9:"gei",\u6839:"gen",\u522F:"geng",\u5DE5:"gong",\u52FE:"gou",\u4F30:"gu",\u74DC:"gua",\u4E56:"guai",\u5173:"guan",\u5149:"guang",\u5F52:"gui",\u4E28:"gun",\u5459:"guo",\u54C8:"ha",\u548D:"hai",\u4F44:"han",\u592F:"hang",\u8320:"hao",\u8BC3:"he",\u9ED2:"hei",\u62EB:"hen",\u4EA8:"heng",\u5677:"hm",\u53FF:"hong",\u9F41:"hou",\u4E4E:"hu",\u82B1:"hua",\u6000:"huai",\u6B22:"huan",\u5DDF:"huang",\u7070:"hui",\u660F:"hun",\u5419:"huo",\u4E0C:"ji",\u52A0:"jia",\u620B:"jian",\u6C5F:"jiang",\u827D:"jiao",\u9636:"jie",\u5DFE:"jin",\u5755:"jing",\u5182:"jiong",\u4E29:"jiu",\u51E5:"ju",\u59E2:"juan",\u5658:"jue",\u519B:"jun",\u5494:"ka",\u5F00:"kai",\u520A:"kan",\u5FFC:"kang",\u5C3B:"kao",\u533C:"ke",\u808E:"ken",\u52A5:"keng",\u7A7A:"kong",\u62A0:"kou",\u625D:"ku",\u5938:"kua",\u84AF:"kuai",\u5BBD:"kuan",\u5321:"kuang",\u4E8F:"kui",\u5764:"kun",\u6269:"kuo",\u5783:"la",\u6765:"lai",\u5170:"lan",\u5577:"lang",\u635E:"lao",\u808B:"le",\u52D2:"lei",\u5D1A:"leng",\u54E9:"li",\u4FE9:"lia",\u5941:"lian",\u826F:"liang",\u64A9:"liao",\u6BDF:"lie",\u62CE:"lin",\u4F36:"ling",\u6E9C:"liu",\u56D6:"lo",\u9F99:"long",\u779C:"lou",\u565C:"lu",\u9A74:"lv",\u5A08:"luan",\u63A0:"l\xFCe",\u62A1:"lun",\u7F57:"luo",\u5463:"m",\u5988:"ma",\u57CB:"mai",\u5ADA:"man",\u7264:"mang",\u732B:"mao",\u5692:"me",\u5445:"mei",\u691A:"men",\u64DD:"meng",\u54AA:"mi",\u5B80:"mian",\u55B5:"miao",\u4E5C:"mie",\u6C11:"min",\u540D:"ming",\u8C2C:"miu",\u6478:"mo",\u54DE:"mou",\u6BEA:"mu",\u55EF:"\u0144g",\u62CF:"na",\u8149:"nai",\u56E1:"nan",\u56D4:"nang",\u5B6C:"nao",\u7592:"ne",\u5A1E:"nei",\u6041:"nen",\u80FD:"neng",\u59AE:"ni",\u62C8:"nian",\u5A18:"niang",\u9E1F:"niao",\u634F:"nie",\u56DC:"nin",\u5B81:"ning",\u599E:"niu",\u519C:"nong",\u7FBA:"nou",\u5974:"nu",\u5973:"nv",\u597B:"nuan",\u759F:"n\xFCe",\u9EC1:"nun",\u632A:"nuo",\u5594:"o",\u8BB4:"ou",\u5991:"pa",\u62CD:"pai",\u7705:"pan",\u4E53:"pang",\u629B:"pao",\u5478:"pei",\u55B7:"pen",\u5309:"peng",\u4E15:"pi",\u56E8:"pian",\u527D:"piao",\u6C15:"pie",\u59D8:"pin",\u4E52:"ping",\u948B:"po",\u5256:"pou",\u4EC6:"pu",\u4E03:"qi",\u6390:"qia",\u5343:"qian",\u545B:"qiang",\u6084:"qiao",\u82C6:"qie",\u4EB2:"qin",\u9751:"qing",\u536D:"qiong",\u4E18:"qiu",\u533A:"qu",\u594D:"quan",\u7F3A:"que",\u590B:"qun",\u5465:"ran",\u7A63:"rang",\u5A06:"rao",\u60F9:"re",\u4EBA:"ren",\u6254:"reng",\u65E5:"ri",\u8338:"rong",\u53B9:"rou",\u909A:"ru",\u633C:"rua",\u5827:"ruan",\u5A51:"rui",\u77A4:"run",\u637C:"ruo",\u4EE8:"sa",\u6BE2:"sai",\u4E09:"san",\u6852:"sang",\u63BB:"sao",\u95AA:"se",\u68EE:"sen",\u50E7:"seng",\u6740:"sha",\u7B5B:"shai",\u5C71:"shan",\u4F24:"shang",\u5F30:"shao",\u5962:"she",\u7533:"shen",\u5347:"sheng",\u5C38:"shi",\u53CE:"shou",\u4E66:"shu",\u5237:"shua",\u8870:"shuai",\u95E9:"shuan",\u53CC:"shuang",\u813D:"shui",\u542E:"shun",\u8BF4:"shuo",\u53B6:"si",\u5FEA:"song",\u51C1:"sou",\u82CF:"su",\u72FB:"suan",\u590A:"sui",\u5B59:"sun",\u5506:"suo",\u4ED6:"ta",\u56FC:"tai",\u574D:"tan",\u6C64:"tang",\u5932:"tao",\u5FD1:"te",\u71A5:"teng",\u5254:"ti",\u5929:"tian",\u65EB:"tiao",\u5E16:"tie",\u5385:"ting",\u56F2:"tong",\u5077:"tou",\u51F8:"tu",\u6E4D:"tuan",\u63A8:"tui",\u541E:"tun",\u4E47:"tuo",\u5C72:"wa",\u6B6A:"wai",\u5F2F:"wan",\u5C23:"wang",\u5371:"wei",\u6637:"wen",\u7FC1:"weng",\u631D:"wo",\u4E4C:"wu",\u5915:"xi",\u8672:"xia",\u4ED9:"xian",\u4E61:"xiang",\u7071:"xiao",\u4E9B:"xie",\u5FC3:"xin",\u661F:"xing",\u51F6:"xiong",\u4F11:"xiu",\u5401:"xu",\u5405:"xuan",\u524A:"xue",\u5743:"xun",\u4E2B:"ya",\u6079:"yan",\u592E:"yang",\u5E7A:"yao",\u503B:"ye",\u4E00:"yi",\u56D9:"yin",\u5E94:"ying",\u54DF:"yo",\u4F63:"yong",\u4F18:"you",\u8FBC:"yu",\u56E6:"yuan",\u66F0:"yue",\u6655:"yun",\u5E00:"za",\u707D:"zai",\u5142:"zan",\u5328:"zang",\u50AE:"zao",\u5219:"ze",\u8D3C:"zei",\u600E:"zen",\u5897:"zeng",\u624E:"zha",\u5908:"zhai",\u67AC:"zhan",\u5F20:"zhang",\u4F4B:"zhao",\u8707:"zhe",\u8D1E:"zhen",\u51E7:"zheng",\u4E4B:"zhi",\u4E2D:"zhong",\u5DDE:"zhou",\u6731:"zhu",\u6293:"zhua",\u62FD:"zhuai",\u4E13:"zhuan",\u5986:"zhuang",\u96B9:"zhui",\u5B92:"zhun",\u5353:"zhuo",\u4E72:"zi",\u5B97:"zong",\u90B9:"zou",\u79DF:"zu",\u94BB:"zuan",\u539C:"zui",\u5C0A:"zun",\u6628:"zuo"},y={\u6C88:"shen",\u55F2:"dia",\u78A1:"zhou",\u8052:"guo",\u7094:"que",\u86B5:"ke",\u7809:"hua",\u5B24:"mo",\u8E52:"pan",\u4E2C:"pan",\u9730:"xian",\u8C49:"chi",\u9967:"xing",\u5E27:"zhen",\u90CD:"na",\u828E:"xiong",\u8C01:"shui"},v=Object.keys(g),o=Object.values(g),u=Object.assign({},g,y),s=!!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);if(s){var n={\u4E37:"\u516B",\u62BD:"\u5A64",\u51D1:"\u8160",\u53BE:"\u8254",\u592B:"\u4F15",\u52FE:"\u4F5D",\u4E4E:"\u4E6F",\u6B22:"\u72BF",\u54E9:"\u5215",\u6BDF:"\u5217",\u4F36:"\u5222",\u5692:"\u4E48",\u691A:"\u95E8",\u64DD:"\u753F",\u5A18:"\u5B22",\u5256:"\u5A1D",\u82C6:"\u767F",\u536D:"\u5314",\u594D:"\u5CD1",\u51C1:"\u635C",\u5077:"\u5078",\u5C72:"\u7A75",\u4ED9:"\u4EDA",\u8FBC:"\u625C",\u4F18:"\u6538",\u5908:"\u635A",\u67AC:"\u6CBE",\u51E7:"\u4E89",\u5DDE:"\u8BCC"};Object.keys(n).forEach(function(p){v[v.indexOf(p)]=n[p]});var m={\u51D2:"ai",\u8C8B:"an",\u98F9:"bao",\u86FD:"bei",\u698C:"bi",\u7541:"bi",\u7986:"bi",\u7371:"bian",\u6E8A:"bo",\u6DFF:"bo",\u9E14:"bu",\u5ECD:"bu",\u7938:"ca",\u835D:"ce",\u72B2:"chai",\u4EE9:"chang",\u7F49:"cheng",\u9423:"cheng",\u7C9A:"chi",\u9D44:"chi",\u6521:"chi",\u8094:"chi",\u69C6:"chun",\u5AA8:"cu",\u81A5:"cun",\u8FCF:"da",\u8FDA:"da",\u8DF6:"da",\u4EA3:"da",\u4FA2:"dai",\u86AE:"dai",\u8254:"dao",\u60B3:"de",\u67A4:"di",\u521F:"diao",\u921F:"diao",\u8B75:"dui",\u907B:"e",\u7B29:"fa",\u5325:"fan",\u4EEE:"fan",\u80D0:"fei",\u8965:"fu",\u7139:"gang",\u7A01:"gao",\u5CFC:"gao",\u6404:"gen",\u5314:"gong",\u7C3C:"gou",\u8E80:"guan",\u8901:"guo",\u99F4:"hai",\u5475:"he",\u5BC9:"he",\u71FA:"he",\u739C:"hong",\u95C0:"hong",\u8624:"hua",\u8AD9:"hua",\u9BF6:"huan",\u5C76:"hui",\u6A85:"hui",\u53DD:"ji",\u8EA4:"ji",\u7B05:"jiao",\u9782:"jie",\u63B6:"jie",\u5AAB:"jie",\u5DBB:"jie",\u64EE:"jie",\u790D:"jie",\u77DD:"jin",\u7161:"jin",\u7484:"jing",\u71DB:"jiong",\u9F30:"ju",\u70E5:"ju",\u704D:"jue",\u9D55:"jun",\u94B6:"ke",\u72C5:"kuang",\u8EE0:"kuang",\u92DB:"kuang",\u55E0:"lao",\u77CB:"lei",\u7AF0:"li",\u7AC2:"liao",\u8B22:"lu",\u7C35:"lu",\u7387:"lv",\u7EFF:"lv",\u5638:"m",\u88AE:"mi",\u7C8E:"mi",\u6763:"mian",\u5AF9:"miao",\u741D:"min",\u5436:"na",\u5450:"na",\u62A9:"nan",\u7175:"nan",\u8E19:"nie",\u503F:"ning",\u6335:"nong",\u8842:"nv",\u6E12:"pai",\u8420:"pan",\u8615:"peng",\u9303:"pi",\u882F:"pi",\u9166:"po",\u7087:"pu",\u5711:"pu",\u669C:"pu",\u637F:"qi",\u7D2A:"qi",\u5D5C:"qi",\u8900:"qi",\u9A39:"qi",\u5CE0:"qia",\u5042:"qian",\u5B31:"qian",\u97A9:"qiao",\u5392:"qie",\u922B:"qin",\u512C:"qing",\u6FEA:"qing",\u5CF5:"rong",\u9491:"sa",\u70B6:"shan",\u692B:"shan",\u7F59:"shen",\u9BD3:"shen",\u67A1:"sheng",\u935F:"sheng",\u7E04:"sheng",\u8184:"shou",\u6BFA:"shu",\u66BA:"tan",\u7819:"wa",\u6665:"wan",\u77A3:"wan",\u69B2:"wen",\u9942:"wen",\u651A:"weng",\u909C:"xi",\u6E7A:"xian",\u9DCD:"xiao",\u70A8:"xie",\u5302:"xiong",\u6F43:"xiu",\u71C5:"xun",\u8A2E:"yan",\u6EE7:"yao",\u647F:"yao",\u78D8:"yao",\u6D02:"ye",\u6359:"ye",\u748D:"ye",\u6E0F:"yi",\u9825:"yi",\u9218:"yi",\u8C96:"yi",\u88AC:"yu",\u9D27:"yu",\u4F1D:"yun",\u9F6B:"yun",\u6CAF:"za",\u6EA8:"zai",\u7170:"zao",\u6B75:"ze",\u830B:"zhi",\u96B2:"zhi",\u9483:"zhu",\u8D7C:"zi",\u8362:"zi",\u71EA:"zong",\u5528:"zu"};Object.assign(u,m)}var t=19968,h=40869,a=function(U,N){var j=U.charCodeAt(0);if(j<t||j>h)return U;if(u[U])return N==="first_letter"?u[U].charAt(0):u[U];for(var L=0,S=v.length-1,$=-1,re,Z;L<=S;)if($=Math.floor((L+S)/2),re=v[$],Z=U.localeCompare(re,["zh-CN"]),Z===1)L=$+1;else if(Z===-1)S=$-1;else break;return Z<0&&$--,u[U]=o[$],N==="first_letter"?o[$].charAt(0):o[$]},P=function(U,N){if(typeof U!="string")return U;var j="";return(0,O.Z)(U,function(L){j+=a(L,N)}),j};return function(p,U){return r||(r=P),r(p,U)}(f,b)}},69287:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(36849);const r=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72025:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(78121);const r=[]},15406:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(82415);const r=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:1,tocIndex:0},{value:"\u8C03\u6574 actions \u4E3A ",paraId:2,tocIndex:3},{value:"['read_detail']",paraId:2,tocIndex:3},{value:"\uFF0C\u70B9\u51FB<\u67E5\u770B>\u8DF3\u8F6C\u5230 ",paraId:2,tocIndex:3},{value:"xxx/detail/[id]",paraId:2,tocIndex:3},{value:"\uFF0C",paraId:2,tocIndex:3},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:3,tocIndex:5},{value:"\u901A\u8FC7 ref \u4F60\u53EF\u4EE5\u505A\u66F4\u591A\u64CD\u4F5C",paraId:4,tocIndex:6},{value:`import type { ReactNode } from 'react';
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
`,paraId:5,tocIndex:9}]},77394:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(34812);const r=[{value:`interface EditorJavascriptProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
}
`,paraId:0,tocIndex:4}]},36602:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(76619);const r=[{value:`import type { JSONEditor } from 'vanilla-jsoneditor';

interface EditorJSONProps {
  value: string;
  onChange: (value: string, event?: any) => void;
  readonly?: boolean;
  mode?: JSONEditor['mode'];
}
`,paraId:0,tocIndex:6}]},47725:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(1923);const r=[{value:"LogViewer",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u663E\u793A\u65E5\u5FD7\u5185\u5BB9\u7684 React \u7EC4\u4EF6\u3002\u5B83\u4F7F\u7528 CodeMirror \u7F16\u8F91\u5668\u6765\u5448\u73B0\u65E5\u5FD7\uFF0C\u63D0\u4F9B\u4E86\u8BED\u6CD5\u9AD8\u4EAE\u548C\u4E3B\u9898\u652F\u6301\u3002",paraId:0,tocIndex:0}]},75455:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(8574);const r=[{value:`interface EditorMarkdownProps {
  value: string;
}
`,paraId:0,tocIndex:3}]},94629:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(65488);const r=[{value:"JSON",paraId:0,tocIndex:1},{value:"readonly",paraId:1},{value:"JSON",paraId:2,tocIndex:2},{value:"readonly",paraId:3}]},62761:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(50671);const r=[{value:"\u5BF9 ProTable \u505A\u6269\u5C55\u4EE5\u6EE1\u8DB3\u5B9E\u9645\u4F7F\u7528\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u9ED8\u8BA4\u641C\u7D22\u5173\u95ED\uFF0C\u9700\u8981\u518D\u6253\u5F00 ",paraId:1,tocIndex:0},{value:"search: true",paraId:1,tocIndex:0},{value:"\u589E\u52A0 hmRequest\uFF0C\u4EE5\u9002\u914D huomu \u7684\u8BF7\u6C42\u3002",paraId:1,tocIndex:0},{value:"\u66F4\u591A\u7ED3\u5408 CURD \u4F7F\u7528\u3002",paraId:2,tocIndex:0}]},22511:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(44340);const r=[{value:"\u81EA\u5B9A\u4E49 valueType",paraId:0,tocIndex:0},{value:`import { customValueTypeMap } from '@huomu/core';
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
`,paraId:2,tocIndex:2}]},6920:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(32505);const r=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},75553:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(9076);const r=[{value:"pnpm i @huomu/huomu-scripts",paraId:0,tocIndex:0},{value:`program
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
`,paraId:12,tocIndex:2}]},51040:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(4981);const r=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]},35454:function(A,d,e){e.r(d),e.d(d,{texts:function(){return r}});var O=e(12894);const r=[{value:"\u5C06\u6C49\u5B57\u8F6C\u6362\u4E3A\u62FC\u97F3",paraId:0,tocIndex:0},{value:"\u8F93\u51FA\u62FC\u97F3",paraId:1,tocIndex:1},{value:"\u8F93\u51FA\u9996\u62FC\u97F3",paraId:2},{value:"\u5339\u914D",paraId:3},{value:"\u8FC7\u6EE4",paraId:4}]},56281:function(A,d){d.Z=`import React, { useRef } from 'react';
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
            extra="extra extra extra extra"
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
