"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return ue}});var ne=e(59496),u=e(14625),ue={}},58229:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return Y}});var ne=e(90228),u=e.n(ne),ue=e(26068),f=e.n(ue),Pe=e(87999),n=e.n(Pe),K=e(59496),W=e(73134),Y={"curd-demo-0":{component:K.memo(K.lazy(n()(u()().mark(function J(){var w,g,y,M,D,t,j,h,b,C,P,T,X,U,p,A,L,G,m,te;return u()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return m=function(){return m=n()(u()().mark(function I(B){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("fakeHMUpdateById",B),b=b.map(function(q){return q.id===B.id?f()(f()({},q),B):q}),v.abrupt("return",Promise.resolve({}));case 3:case"end":return v.stop()}},I)})),m.apply(this,arguments)},G=function(I){return m.apply(this,arguments)},L=function(){return L=n()(u()().mark(function I(B){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("fakeHMAdd",B),b.push(f()({id:b.length+1},B)),v.abrupt("return",Promise.resolve({}));case 3:case"end":return v.stop()}},I)})),L.apply(this,arguments)},A=function(I){return L.apply(this,arguments)},p=function(){return p=n()(u()().mark(function I(B){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("fakeHMGetById",B),v.abrupt("return",new Promise(function(q){setTimeout(function(){q({data:{data:b.find(function(fe){return fe.id===B.id})}})},1e3)}));case 2:case"end":return v.stop()}},I)})),p.apply(this,arguments)},U=function(I){return p.apply(this,arguments)},X=function(){return X=n()(u()().mark(function I(B){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("fakeHMDeleteById",B),b=b.filter(function(q){return q.id!==B.id}),v.abrupt("return",Promise.resolve({}));case 3:case"end":return v.stop()}},I)})),X.apply(this,arguments)},T=function(I){return X.apply(this,arguments)},P=function(){return P=n()(u()().mark(function I(B){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("fakeHMRequest",B),v.abrupt("return",new Promise(function(q){setTimeout(function(){q({data:{data:b,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return v.stop()}},I)})),P.apply(this,arguments)},C=function(I){return P.apply(this,arguments)},k.next=12,Promise.resolve().then(e.bind(e,26440));case 12:return w=k.sent,g=w.CURD,k.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return y=k.sent,M=y.range,k.next=20,Promise.resolve().then(e.bind(e,77623));case 20:return D=k.sent,t=D.Button,k.next=24,Promise.resolve().then(e.bind(e,5765));case 24:return j=k.sent,h=j.ProFormText,b=M(10).map(function(x){return{id:"".concat(x),name:"name-".concat(x),address:"address-".concat(x)}}),te=function(){var I=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return K.createElement(g,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:I,hmRequest:C},createButton:K.createElement(t,{type:"primary"},"\u65B0\u5EFA"),deleteProps:{nameIndex:"name",deleteById:T},renderForm:function(le){return K.createElement(K.Fragment,null,K.createElement(h,f()(f()({},le),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),K.createElement(h,f()(f()({},le),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:U,requestAdd:A,requestUpdateById:G})},k.abrupt("return",{default:te});case 29:case"end":return k.stop()}},J)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';
import { ProFormText } from '@ant-design/pro-components';

let fakeData = range(10).map((item) => ({
  id: \`\${item}\`,
  name: \`name-\${item}\`,
  address: \`address-\${item}\`,
}));

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeHMDeleteById(params) {
  console.log('fakeHMDeleteById', params);

  fakeData = fakeData.filter((item) => item.id !== params.id);

  return Promise.resolve({});
}

async function fakeHMGetById(params) {
  console.log('fakeHMGetById', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData.find((item) => item.id === params.id),
        },
      });
    }, 1000);
  });
}

async function fakeHMAdd(params) {
  console.log('fakeHMAdd', params);

  fakeData.push({
    id: fakeData.length + 1,
    ...params,
  });

  return Promise.resolve({});
}

async function fakeHMUpdateById(params) {
  console.log('fakeHMUpdateById', params);

  fakeData = fakeData.map((item) => {
    if (item.id === params.id) {
      return {
        ...item,
        ...params,
      };
    }
    return item;
  });

  return Promise.resolve({});
}

const Demo = () => {
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
    {
      title: 'address',
      dataIndex: 'address',
    },
  ];

  return (
    <CURD
      actions={['create', 'read', 'delete', 'update']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
      createButton={<Button type="primary">\u65B0\u5EFA</Button>}
      deleteProps={{
        nameIndex: 'name',
        deleteById: fakeHMDeleteById,
      }}
      renderForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
          />
          <ProFormText {...formProps} name="age" label=" \u5E74\u9F84" required />
        </>
      )}
      requestGetById={fakeHMGetById}
      requestAdd={fakeHMAdd}
      requestUpdateById={fakeHMUpdateById}
    />
  );
};

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(26440),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var J=n()(u()().mark(function g(){var y,M=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(y=t.sent).default.apply(y,M));case 3:case"end":return t.stop()}},g)}));function w(){return J.apply(this,arguments)}return w}()}},"curd-demo-1":{component:K.memo(K.lazy(n()(u()().mark(function J(){var w,g,y,M,D,t,j,h;return u()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return j=function(){return j=n()(u()().mark(function T(X){return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return console.log("fakeHMRequest",X),p.abrupt("return",new Promise(function(A){setTimeout(function(){A({data:{data:D,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return p.stop()}},T)})),j.apply(this,arguments)},t=function(T){return j.apply(this,arguments)},C.next=4,Promise.resolve().then(e.bind(e,26440));case 4:return w=C.sent,g=w.CURD,C.next=8,Promise.resolve().then(e.bind(e,38548));case 8:return y=C.sent,M=y.range,D=M(10).map(function(P){return{id:"".concat(P),name:"name-".concat(P),age:P,address:"address-".concat(P)}}),h=function(){var T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return K.createElement(g,{actions:["read_detail"],hmTableProps:{hmColumns:T,hmRequest:t}})},C.abrupt("return",{default:h});case 13:case"end":return C.stop()}},J)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
import { range } from 'lodash-es';

let fakeData = range(10).map((item) => ({
  id: \`\${item}\`,
  name: \`name-\${item}\`,
  age: item,
  address: \`address-\${item}\`,
}));

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

const Demo = () => {
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
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
  ];

  return (
    <CURD
      actions={['read_detail']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(26440),"lodash-es":e(38548)},renderOpts:{compile:function(){var J=n()(u()().mark(function g(){var y,M=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(y=t.sent).default.apply(y,M));case 3:case"end":return t.stop()}},g)}));function w(){return J.apply(this,arguments)}return w}()}},"curd-demo-2":{component:K.memo(K.lazy(n()(u()().mark(function J(){var w,g,y,M,D,t,j,h,b,C,P,T;return u()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return P=function(){return P=n()(u()().mark(function A(L){return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return console.log("fakeHMRequest",L),m.abrupt("return",new Promise(function(te){setTimeout(function(){te({data:{data:b,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return m.stop()}},A)})),P.apply(this,arguments)},C=function(A){return P.apply(this,arguments)},U.next=4,Promise.resolve().then(e.t.bind(e,59496,19));case 4:return w=U.sent,g=w.useRef,U.next=8,Promise.resolve().then(e.bind(e,26440));case 8:return y=U.sent,M=y.CURD,U.next=12,Promise.resolve().then(e.bind(e,38548));case 12:return D=U.sent,t=D.range,U.next=16,Promise.resolve().then(e.bind(e,77623));case 16:return j=U.sent,h=j.Button,b=t(10).map(function(p){return{id:"".concat(p),name:"name-".concat(p),age:p,address:"address-".concat(p)}}),T=function(){var A=g(),L=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return K.createElement("div",null,K.createElement(h,{onClick:function(){var m;return(m=A.current.getActionRef().current)===null||m===void 0?void 0:m.reload()}},"reload"),K.createElement(M,{actions:[],ref:A,hmTableProps:{hmColumns:L,hmRequest:C}}))},U.abrupt("return",{default:T});case 21:case"end":return U.stop()}},J)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
import { CURD } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';

let fakeData = range(10).map((item) => ({
  id: \`\${item}\`,
  name: \`name-\${item}\`,
  age: item,
  address: \`address-\${item}\`,
}));

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

const Demo = () => {
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
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
    },
    {
      title: 'address',
      dataIndex: 'address',
    },
  ];

  return (
    <div>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CURD
        actions={[]}
        ref={ref}
        hmTableProps={{
          hmColumns,
          hmRequest: fakeHMRequest,
        }}
      />
    </div>
  );
};

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(26440),"lodash-es":e(38548),antd:e(77623)},renderOpts:{compile:function(){var J=n()(u()().mark(function g(){var y,M=arguments;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(y=t.sent).default.apply(y,M));case 3:case"end":return t.stop()}},g)}));function w(){return J.apply(this,arguments)}return w}()}}}},15278:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return w}});var ne=e(26068),u=e.n(ne),ue=e(48305),f=e.n(ue),Pe=e(90228),n=e.n(Pe),K=e(87999),W=e.n(K),Y=e(59496),J=e(13720),w={"use_curd_select-demo-0":{component:Y.memo(Y.lazy(W()(n()().mark(function g(){var y,M,D,t,j,h,b,C,P,T,X;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return T=function(){return T=W()(n()().mark(function L(G){var m;return n()().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return console.log("fakeHMRequest",G),m=h,G.city&&(m=m.filter(function(k){return k.city===G.city})),ae.abrupt("return",new Promise(function(k){setTimeout(function(){k({data:{data:m,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return ae.stop()}},L)})),T.apply(this,arguments)},P=function(L){return T.apply(this,arguments)},C=function(){return C=W()(n()().mark(function L(){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return m.stop()}},L)})),C.apply(this,arguments)},b=function(){return C.apply(this,arguments)},p.next=6,Promise.resolve().then(e.bind(e,26440));case 6:return y=p.sent,M=y.CURD,D=y.useCURDSelect,p.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return t=p.sent,j=t.range,h=j(5).map(function(A){return{id:"".concat(A),name:"name-".concat(A),city:void 0}}),h[0].city="\u5E7F\u5DDE",h[1].city="\u6DF1\u5733",X=function(){var L=D({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var m=W()(n()().mark(function ae(){var k;return n()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,b();case 2:return k=I.sent,I.abrupt("return",k.map(function(B){return{label:B,value:B}})||[]);case 4:case"end":return I.stop()}},ae)}));function te(){return m.apply(this,arguments)}return te}()}),G=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},L.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return Y.createElement(M,{actions:["read"],hmTableProps:{hmColumns:G,hmRequest:P}})},p.abrupt("return",{default:X});case 18:case"end":return p.stop()}},g)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
import { range } from 'lodash-es';

let fakeData = range(5).map((item) => ({
  id: \`\${item}\`,
  name: \`name-\${item}\`,
  city: undefined,
}));
fakeData[0].city = '\u5E7F\u5DDE';
fakeData[1].city = '\u6DF1\u5733';

async function fakeRequestCity() {
  return ['\u5E7F\u5DDE', '\u6DF1\u5733'];
}

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  let data = fakeData;
  if (params.city) {
    data = data.filter((item) => item.city === params.city);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: data,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

const Demo = () => {
  const citySelect = useCURDSelect({
    initialValue: '',
    all: { label: '\u57CE\u5E02\uFF08\u5168\u90E8\uFF09', value: '' },
    request: async () => {
      const res = await fakeRequestCity();
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
  });

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
    citySelect.selectColumn({
      title: '\u57CE\u5E02',
      dataIndex: 'city',
      search: true,
    }),
  ];

  return (
    <CURD
      actions={['read']}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(26440),"lodash-es":e(38548)},renderOpts:{compile:function(){var g=W()(n()().mark(function M(){var D,t=arguments;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(545).then(e.bind(e,71545));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,t));case 3:case"end":return h.stop()}},M)}));function y(){return g.apply(this,arguments)}return y}()}},"use_curd_select-demo-1":{component:Y.memo(Y.lazy(W()(n()().mark(function g(){var y,M,D,t,j,h,b,C,P,T,X,U,p,A,L,G,m,te,ae,k,x,I,B,le,v,q,fe,Ce,ge,Be,He;return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return Be=function(O){var E=O.formInstance,H=X.useWatch("city",E),$=j({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var _=W()(n()().mark(function Ie(){var ie;return n()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,te();case 2:return ie=re.sent,re.abrupt("return",ie.map(function(ye){return{label:ye,value:ye}})||[]);case 4:case"end":return re.stop()}},Ie)}));function ve(){return _.apply(this,arguments)}return ve}()}),S=j({initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var _=W()(n()().mark(function Ie(){var ie;return n()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,k({city:H});case 2:return ie=re.sent,re.abrupt("return",ie.map(function(ye){return{label:ye,value:ye}})||[]);case 4:case"end":return re.stop()}},Ie)}));function ve(){return _.apply(this,arguments)}return ve}(),useRequestOptions:{refreshDeps:[H]}});return{citySelect:$,areaSelect:S}},ge=function(){return ge=W()(n()().mark(function O(E){return n()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return console.log("fakeHMUpdateById",E),m=m.map(function(S){return S.id===E.id?u()(u()({},S),E):S}),$.abrupt("return",Promise.resolve({}));case 3:case"end":return $.stop()}},O)})),ge.apply(this,arguments)},Ce=function(O){return ge.apply(this,arguments)},fe=function(){return fe=W()(n()().mark(function O(E){return n()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return console.log("fakeHMAdd",E),m.push(u()({id:m.length+1},E)),$.abrupt("return",Promise.resolve({}));case 3:case"end":return $.stop()}},O)})),fe.apply(this,arguments)},q=function(O){return fe.apply(this,arguments)},v=function(){return v=W()(n()().mark(function O(E){return n()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return console.log("fakeHMGetById",E),$.abrupt("return",new Promise(function(S){setTimeout(function(){S({data:{data:m.find(function(_){return _.id===E.id})}})},1e3)}));case 2:case"end":return $.stop()}},O)})),v.apply(this,arguments)},le=function(O){return v.apply(this,arguments)},B=function(){return B=W()(n()().mark(function O(E){var H;return n()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return console.log("fakeHMRequest",E),H=m,E.city&&(H=H.filter(function(_){return _.city===E.city})),E.area&&(H=H.filter(function(_){return _.area===E.area})),S.abrupt("return",new Promise(function(_){setTimeout(function(){_({data:{data:H,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return S.stop()}},O)})),B.apply(this,arguments)},I=function(O){return B.apply(this,arguments)},x=function(){return x=W()(n()().mark(function O(E){var H;return n()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(H=E.city,!H){S.next=3;break}return S.abrupt("return",G[H]);case 3:return S.abrupt("return",L.apply(null,Object.values(G)));case 4:case"end":return S.stop()}},O)})),x.apply(this,arguments)},k=function(O){return x.apply(this,arguments)},ae=function(){return ae=W()(n()().mark(function O(){return n()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.abrupt("return",Object.keys(G));case 1:case"end":return H.stop()}},O)})),ae.apply(this,arguments)},te=function(){return ae.apply(this,arguments)},N.next=15,Promise.resolve().then(e.t.bind(e,59496,19));case 15:return y=N.sent,M=y.useRef,N.next=19,Promise.resolve().then(e.bind(e,26440));case 19:return D=N.sent,t=D.CURD,j=D.useCURDSelect,N.next=24,Promise.resolve().then(e.bind(e,38548));case 24:return h=N.sent,b=h.range,N.next=28,Promise.resolve().then(e.bind(e,77623));case 28:return C=N.sent,P=C.Button,N.next=32,Promise.resolve().then(e.bind(e,5765));case 32:return T=N.sent,X=T.ProForm,U=T.ProFormText,p=T.ProFormSelect,N.next=38,Promise.resolve().then(e.bind(e,38548));case 38:return A=N.sent,L=A.union,G={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},m=b(5).map(function(z){return{id:"".concat(z),name:"name-".concat(z),city:void 0,area:void 0}}),m[0].city="\u5E7F\u5DDE",m[1].area="\u5357\u5C71",m[2].city="\u6DF1\u5733",m[2].area="\u798F\u7530",He=function(){var O=M(),E=Be({formInstance:O.current}),H=X.useForm(),$=f()(H,1),S=$[0],_=Be({formInstance:S}),ve=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},E.citySelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),E.areaSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return Y.createElement(t,{actions:["create","read","update"],hmTableProps:{formRef:O,hmColumns:ve,hmRequest:I},createButton:Y.createElement(P,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(ie){return Y.createElement(Y.Fragment,null,Y.createElement(U,u()(u()({},ie),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),Y.createElement(U,u()(u()({},ie),{},{name:"age",label:" \u5E74\u9F84",required:!0})),Y.createElement(p,u()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},_.citySelect.proFormSelectProps)),Y.createElement(p,u()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},_.areaSelect.proFormSelectProps)))},renderFormInstance:S,requestGetById:le,requestAdd:q,requestUpdateById:Ce})},N.abrupt("return",{default:He});case 48:case"end":return N.stop()}},g)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
import { CURD, useCURDSelect } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';
import { ProForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';
import { union } from 'lodash-es';

const cityAreaData = {
  \u5E7F\u5DDE: ['\u8D8A\u79C0', '\u756A\u79BA'],
  \u6DF1\u5733: ['\u798F\u7530', '\u5357\u5C71'],
};
let fakeData = range(5).map((item) => ({
  id: \`\${item}\`,
  name: \`name-\${item}\`,
  city: undefined,
  area: undefined,
}));
fakeData[0].city = '\u5E7F\u5DDE';
fakeData[1].area = '\u5357\u5C71';
fakeData[2].city = '\u6DF1\u5733';
fakeData[2].area = '\u798F\u7530';

async function fakeRequestCity() {
  return Object.keys(cityAreaData);
}

async function fakeRequestArea({ city }: { city?: string }) {
  if (city) {
    return cityAreaData[city];
  }

  return union.apply(null, Object.values(cityAreaData));
}

async function fakeHMRequest(params) {
  console.log('fakeHMRequest', params);

  let data = fakeData;
  if (params.city) {
    data = data.filter((item) => item.city === params.city);
  }
  if (params.area) {
    data = data.filter((item) => item.area === params.area);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: data,
          success: true,
          totalSize: 100,
        },
      });
    }, 1000);
  }) as Promise<any>;
}

async function fakeHMGetById(params) {
  console.log('fakeHMGetById', params);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: fakeData.find((item) => item.id === params.id),
        },
      });
    }, 1000);
  });
}

async function fakeHMAdd(params) {
  console.log('fakeHMAdd', params);

  fakeData.push({
    id: fakeData.length + 1,
    ...params,
  });

  return Promise.resolve({});
}

async function fakeHMUpdateById(params) {
  console.log('fakeHMUpdateById', params);

  fakeData = fakeData.map((item) => {
    if (item.id === params.id) {
      return {
        ...item,
        ...params,
      };
    }
    return item;
  });

  return Promise.resolve({});
}

function useSelect({ formInstance }) {
  const city = ProForm.useWatch('city', formInstance);
  const citySelect = useCURDSelect({
    initialValue: '',
    all: { label: '\u57CE\u5E02\uFF08\u5168\u90E8\uFF09', value: '' },
    request: async () => {
      const res = await fakeRequestCity();
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
  });

  const areaSelect = useCURDSelect({
    initialValue: '',
    all: { label: '\u533A\u57DF\uFF08\u5168\u90E8\uFF09', value: '' },
    request: async () => {
      const res = await fakeRequestArea({ city });
      return (
        res.map((item) => ({
          label: item,
          value: item,
        })) || []
      );
    },
    useRequestOptions: {
      refreshDeps: [city],
    },
  });

  return {
    citySelect,
    areaSelect,
  };
}

const Demo = () => {
  const formRef = useRef<any>();

  const tableSelect = useSelect({
    formInstance: formRef.current,
  });

  const [renderFormInstance] = ProForm.useForm();
  const formSelect = useSelect({
    formInstance: renderFormInstance,
  });

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
    tableSelect.citySelect.selectColumn({
      title: '\u57CE\u5E02',
      dataIndex: 'city',
      search: true,
    }),
    tableSelect.areaSelect.selectColumn({
      title: '\u533A\u57DF',
      dataIndex: 'area',
      search: true,
    }),
  ];

  return (
    <CURD
      actions={['create', 'read', 'update']}
      hmTableProps={{
        formRef,
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
      createButton={<Button type="primary">\u65B0\u5EFA</Button>}
      renderForm={(formProps) => (
        <>
          <ProFormText
            {...formProps}
            name="name"
            label="\u540D\u5B57"
            required
            rules={[{ required: true }]}
          />
          <ProFormText {...formProps} name="age" label=" \u5E74\u9F84" required />
          <ProFormSelect
            name="city"
            label={'\u6240\u5C5E\u57CE\u5E02'}
            {...formSelect.citySelect.proFormSelectProps}
          />
          <ProFormSelect
            name="area"
            label={'\u6240\u5C5E\u533A\u57DF'}
            {...formSelect.areaSelect.proFormSelectProps}
          />
        </>
      )}
      renderFormInstance={renderFormInstance}
      requestGetById={fakeHMGetById}
      requestAdd={fakeHMAdd}
      requestUpdateById={fakeHMUpdateById}
    />
  );
};

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(26440),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var g=W()(n()().mark(function M(){var D,t=arguments;return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(545).then(e.bind(e,71545));case 2:return h.abrupt("return",(D=h.sent).default.apply(D,t));case 3:case"end":return h.stop()}},M)}));function y(){return g.apply(this,arguments)}return y}()}}}},75725:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return ue}});var ne=e(59496),u=e(62545),ue={}},86946:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return ue}});var ne=e(59496),u=e(61865),ue={}},98536:function(oe,c,e){e.r(c),e.d(c,{demos:function(){return ue}});var ne=e(59496),u=e(39656),ue={}},26440:function(oe,c,e){e.r(c),e.d(c,{CURD:function(){return ae},CURDDetail:function(){return te},EditorJSON:function(){return E},EditorJavascript:function(){return z},EditorMarkdown:function(){return _},FileUpload:function(){return Ue},HMDescriptions:function(){return Ce},HMTable:function(){return C},NumberSwitch:function(){return Te},OperateDelete:function(){return U},createStore:function(){return xe},getTableScroll:function(){return P},useCURDSelect:function(){return B},useDelete:function(){return X}});var ne=e(15558),u=e.n(ne),ue=e(26068),f=e.n(ue),Pe=e(35990),n=e(59496),K=e(5791),W=e(33553),Y=e(90228),J=e.n(Y),w=e(67825),g=e.n(w),y=e(87999),M=e.n(y),D=e(3737),t=e(4637),j=["current","pageSize"],h=["hmRequest","request","hmColumns","columns","rowKey"];function b(r){return function(){var a=M()(J()().mark(function s(o){var d,l,i,R;return J()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return d=o.current,l=o.pageSize,i=g()(o,j),V.next=3,r(f()({page:d,pageSize:l},i));case 3:return R=V.sent,V.abrupt("return",{data:R.data.data,success:R.data.success,total:R.data.totalSize});case 5:case"end":return V.stop()}},s)}));return function(s){return a.apply(this,arguments)}}()}function C(r){var a=r.hmRequest,s=r.request,o=r.hmColumns,d=r.columns,l=r.rowKey,i=l===void 0?"id":l,R=g()(r,h),Q=(0,n.useCallback)(function(se){return a?b(a)(se):s(se,{},{})},[a,s]),V=(0,n.useMemo)(function(){return o?o.map(function(se){return f()({search:!1},se)}):d},[d,o]);return(0,t.jsx)(D.Z,f()({cardBordered:!0,rowKey:i,pagination:f()({showSizeChanger:!0,showQuickJumper:!0},R.pagination),options:!1,request:Q,columns:V},R))}function P(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,s={x:0,y:void 0};return r==null||r.forEach(function(o){o.hideInTable||(s.x+=Number(o.width)||a)}),s}var T=e(37082);function X(r){var a=r.name,s=r.desc,o=r.onDelete,d=(0,n.useCallback)(function(){T.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:s||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){o()}})},[a,s,o]);return{doDelete:d}}function U(r){var a=r.name,s=r.desc,o=r.onDelete,d=(0,n.useCallback)(function(){T.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:s||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){o()}})},[a,s,o]);return(0,t.jsx)("a",{style:{color:"red"},onClick:d,children:"\u5220\u9664"})}var p=e(48305),A=e.n(p),L=e(67046),G=e(22109),m=e(80671);function te(r){var a=r.action,s=r.id,o=r.record,d=r.trigger,l=r.onSuccess,i=r.renderForm,R=r.requestGetById,Q=r.requestGetByRecord,V=r.requestAdd,se=r.requestUpdateById,Re=r.renderFormInstance,me=(0,n.useRef)(""+Math.random()),he=G.A.useForm(Re),ce=A()(he,1),ee=ce[0],pe=(0,n.useCallback)(function(){var De=M()(J()().mark(function Z(de){return J()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(F.prev=0,!(a==="create"&&V)){F.next=5;break}return F.next=4,V(de);case 4:L.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(a==="update"&&se)){F.next=9;break}return F.next=8,se(f()(f()({},de),{},{id:s}));case 8:L.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return l==null||l(),F.abrupt("return",!0);case 13:F.prev=13,F.t0=F.catch(0),setTimeout(function(){throw F.t0},10);case 16:case"end":return F.stop()}},Z,null,[[0,13]])}));return function(Z){return De.apply(this,arguments)}}(),[a,l,V,se,s]),Ee=(0,n.useCallback)(function(De){if(De&&(ee==null||ee.resetFields(),s)){if(R)return R({id:s}).then(function(Z){ee==null||ee.setFieldsValue(Z.data.data)});if(Q)return Q(o).then(function(Z){ee==null||ee.setFieldsValue(Z.data.data)})}},[ee,s,R,Q,o]),Me=(0,n.useMemo)(function(){return i?i({readonly:a==="read"&&!!s},{action:a}):null},[a,s,i]);return(0,t.jsxs)(m.a,{form:ee,trigger:d,autoFocusFirstInput:!0,onFinish:pe,onOpenChange:Ee,layout:"vertical",readonly:a==="read"&&!!s,children:[(0,t.jsx)("div",{className:"h-[20px]"}),Me]},s||me.current)}var ae=(0,n.forwardRef)(function(a,s){var o=a.actions,d=a.hmTableProps,l=a.createButton,i=a.deleteProps,R=a.detailIdIndex,Q=a.renderForm,V=a.requestGetById,se=a.requestGetByRecord,Re=a.requestAdd,me=a.requestUpdateById,he=a.renderFormInstance,ce=(0,n.useRef)(),ee=(0,K.TH)();(0,n.useImperativeHandle)(s,function(){return{getActionRef:function(){return ce}}},[ce]);var pe=(0,n.useMemo)(function(){return{renderForm:Q,requestGetById:V,requestGetByRecord:se,requestAdd:Re,requestUpdateById:me,renderFormInstance:he}},[Q,Re,V,se,me,he]),Ee=(0,n.useCallback)(function(Z){return function(){if(i!=null&&i.deleteById)return i.deleteById({id:Z.id,ids:[Z.id]}).then(function(){var de;(de=ce.current)===null||de===void 0||de.reload()});if(i!=null&&i.deleteByRecord)return i.deleteByRecord(Z).then(function(){var de;(de=ce.current)===null||de===void 0||de.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[i]),Me=(0,n.useCallback)(function(){var Z;(Z=ce.current)===null||Z===void 0||Z.reload()},[]),De=(0,n.useMemo)(function(){var Z={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function($e,F){return(0,t.jsxs)(Pe.Z,{children:[o.includes("read")&&(0,t.jsx)(te,f()({id:F.id,record:F,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},pe),"read"+F.id),o.includes("read_detail")&&(0,t.jsx)(W.rU,{to:"".concat(ee.pathname,"/detail/").concat(F[R||"id"]),children:"\u67E5\u770B"}),o.includes("update")&&(0,t.jsx)(te,f()({id:F.id,record:F,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},pe),"update"+F.id),o.includes("delete")&&i&&(0,t.jsx)(U,{name:F[i.nameIndex],desc:i.desc,onDelete:Ee(F)})]})}};return o.includes("read")||o.includes("read_detail")||o.includes("update")||o.includes("delete")?[].concat(u()(d.hmColumns||d.columns||[]),[Z]):d.hmColumns},[o,i,R,pe,Ee,Me,d.columns,d.hmColumns,ee.pathname]);return(0,t.jsx)("div",{className:"",children:(0,t.jsx)(C,f()(f()({rowKey:"id"},d),{},{scroll:P(De),actionRef:ce,toolBarRender:function(){return[].concat(u()(d.toolBarRender?d.toolBarRender.apply(d,arguments):[]),[o.includes("create")&&(0,t.jsx)(te,f()({onSuccess:Me,trigger:l,action:"create"},pe),"create")])},search:f()({layout:"vertical",defaultCollapsed:!1},d.search),hmColumns:De}))})}),k=e(39935),x=e(53213);function I(r){var a=r.initialValue,s=r.type,o=r.data,d=r.column,l=r.all,i=(0,n.useMemo)(function(){return s==="table"&&l?[l].concat(u()(o)):o},[l,o,s]);return s==="table"?(0,t.jsx)(k.Z,{name:d.dataIndex,options:i,initialValue:a===void 0&&l?l.value:a}):null}function B(r){var a=r.all,s=r.request,o=r.useRequestOptions,d=r.initialValue,l=(0,x.Z)(function(){return s()},o),i=l.data,R=i===void 0?[]:i,Q=d===void 0&&a?a.value:d,V=(0,n.useMemo)(function(){var me={};return R.forEach(function(he){me[he.value]={text:he.label}}),me},[R]),se=(0,n.useCallback)(function(me){return f()(f()({},me),{},{valueEnum:V,renderFormItem:function(ce,ee){var pe=ee.type;return(0,t.jsx)(I,{type:pe,data:R,column:me,all:a,initialValue:Q})}})},[a,R,Q,V]),Re={options:R};return{selectColumn:se,proFormSelectProps:Re}}var le=e(13194),v=e(28026),q=e.n(v),fe=["hmItems","items"];function Ce(r){var a=r.hmItems,s=r.items,o=g()(r,fe),d=(0,n.useMemo)(function(){return a?a.map(function(l){var i=l.children;return l.children!==null&&l.children!==void 0&&(l.valueType==="date"?i=q()(i).format("YYYY-MM-DD"):l.valueType==="dateTime"?i=q()(i).format("YYYY-MM-DD HH:mm:ss"):l.valueType==="time"&&(i=q()(i).format("HH:mm:ss"))),f()(f()({},l),{},{children:i||"-"})}):s},[a,s]);return(0,t.jsx)(le.Z,f()({items:d},o))}var ge=e(34019),Be=e(65273),He=e(59590),Se=e(32479),N={width:"100%",height:"100%"};function z(r){var a=r.value,s=r.onChange,o=r.readonly;return(0,t.jsx)(ge.ZP,{style:N,mode:"javascript",theme:"monokai",value:a,onChange:s,readOnly:o,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var O=e(46182);function E(r){var a=r.value,s=r.onChange,o=r.readonly,d=(0,n.useRef)(null),l=(0,n.useRef)(null),i=(0,n.useRef)(s);return(0,n.useEffect)(function(){var R;(R=l.current)===null||R===void 0||R.update({text:a||""})},[a]),(0,n.useEffect)(function(){l.current=new O.q9({target:d.current,props:{mode:O.AR.text,readOnly:o,content:{text:a||""},onChange:function(Q){i.current(Q.text)}}})},[]),(0,t.jsx)("div",{ref:d,className:"h-full w-full"})}var H=e(70876),$=e(51709),S=["children","className","node"];function _(r){var a=r.value;return(0,t.jsx)(H.U,{unwrapDisallowed:!0,components:{code:function(o){var d=o.children,l=o.className,i=o.node,R=g()(o,S),Q=/language-(\w+)/.exec(l||"");return Q?(0,t.jsx)($.Z,f()(f()({},R),{},{PreTag:"div",wrapLongLines:!0,children:String(d).replace(/\n$/,""),language:Q[1].toLowerCase()})):(0,t.jsx)("code",f()(f()({},R),{},{className:l,children:d}))}},children:a||""})}var ve=e(55860),Ie=e(32732),ie=e(43472);function Ue(r){var a=r.value,s=r.onChange,o=function(i){return s==null||s(i),!1},d=function(){s==null||s(void 0)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Ie.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:a?[a]:void 0,beforeUpload:o,onRemove:d,children:(0,t.jsx)(ie.ZP,{icon:(0,t.jsx)(ve.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var re=e(39106),ye=["value","onChange"];function Te(r){var a=r.value,s=r.onChange,o=g()(r,ye);return(0,t.jsx)(re.Z,f()(f()({},o),{},{value:!!a,onChange:function(l){return s==null?void 0:s(Number(l))}}))}var ke=e(64934),Ae=e(65124),Fe=function(a){return function(s,o,d){var l=(0,Ae.mW)(a);return l(s,o,d)}},Oe=Fe,xe=function(a){return a?(0,ke.Ue)()(Oe(a)):function(s){return(0,ke.Ue)()(Oe(s))}}},96595:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(14625);const u=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(73134);const u=[{value:"\u9700\u8981\u4E86\u89E3 ant pro-components",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u70B9\u51FB\u67E5\u770B\uFF0C\u5728 url \u4E0A\u6DFB\u52A0 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:4,tocIndex:3}]},40760:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(13720);const u=[{value:"import { useCURDSelect } from '@huomu/core';",paraId:0,tocIndex:0},{value:"curd select \u7EC4\u4EF6\uFF0C\u6709",paraId:1,tocIndex:0},{value:"table \u7684 column",paraId:2,tocIndex:0},{value:"form \u7684 ProFormSelect",paraId:2,tocIndex:0},{value:"\u57CE\u5E02\u548C\u533A\u57DF\u8054\u52A8",paraId:3,tocIndex:2}]},9836:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(62545);const u=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(61865);const u=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(oe,c,e){e.r(c),e.d(c,{texts:function(){return u}});var ne=e(39656);const u=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
