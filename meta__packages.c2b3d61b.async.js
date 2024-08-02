"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ae}});var re=e(59496),o=e(14625),ae={}},58229:function(le,v,e){e.r(v),e.d(v,{demos:function(){return O}});var re=e(90228),o=e.n(re),ae=e(26068),l=e.n(ae),Ue=e(87999),n=e.n(Ue),V=e(59496),b=e(73134),O={"curd-demo-0":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,P,t,A,i,$,U,M,k,w,H,y,S,F,N,h,T;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return h=function(){return h=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMUpdateById",g),$=$.map(function(ee){return ee.id===g.id?l()(l()({},ee),g):ee}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),h.apply(this,arguments)},N=function(f){return h.apply(this,arguments)},F=function(){return F=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMAdd",g),$.push(l()({id:$.length+1},g)),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),F.apply(this,arguments)},S=function(f){return F.apply(this,arguments)},y=function(){return y=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMGetById",g),d.abrupt("return",new Promise(function(ee){setTimeout(function(){ee({data:{data:$.find(function(ue){return ue.id===g.id})}})},1e3)}));case 2:case"end":return d.stop()}},f)})),y.apply(this,arguments)},H=function(f){return y.apply(this,arguments)},w=function(){return w=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMDeleteById",g),$=$.filter(function(ee){return ee.id!==g.id}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),w.apply(this,arguments)},k=function(f){return w.apply(this,arguments)},M=function(){return M=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMRequest",g),d.abrupt("return",new Promise(function(ee){setTimeout(function(){ee({data:{data:$,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return d.stop()}},f)})),M.apply(this,arguments)},U=function(f){return M.apply(this,arguments)},D.next=12,Promise.resolve().then(e.bind(e,25645));case 12:return Y=D.sent,C=Y.CURD,D.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return R=D.sent,I=R.range,D.next=20,Promise.resolve().then(e.bind(e,77623));case 20:return P=D.sent,t=P.Button,D.next=24,Promise.resolve().then(e.bind(e,5765));case 24:return A=D.sent,i=A.ProFormText,$=I(10).map(function(B){return{id:"".concat(B),name:"name-".concat(B),address:"address-".concat(B)}}),T=function(){var f=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return V.createElement(C,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:f,hmRequest:U},createButton:V.createElement(t,{type:"primary"},"\u65B0\u5EFA"),deleteProps:{nameIndex:"name",deleteById:k},renderForm:function(G){return V.createElement(V.Fragment,null,V.createElement(i,l()(l()({},G),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),V.createElement(i,l()(l()({},G),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:H,requestAdd:S,requestUpdateById:N})},D.abrupt("return",{default:T});case 29:case"end":return D.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,I));case 3:case"end":return t.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}},"curd-demo-1":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,P,t,A,i;return o()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return A=function(){return A=n()(o()().mark(function k(w){return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("fakeHMRequest",w),y.abrupt("return",new Promise(function(S){setTimeout(function(){S({data:{data:P,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return y.stop()}},k)})),A.apply(this,arguments)},t=function(k){return A.apply(this,arguments)},U.next=4,Promise.resolve().then(e.bind(e,25645));case 4:return Y=U.sent,C=Y.CURD,U.next=8,Promise.resolve().then(e.bind(e,38548));case 8:return R=U.sent,I=R.range,P=I(10).map(function(M){return{id:"".concat(M),name:"name-".concat(M),age:M,address:"address-".concat(M)}}),i=function(){var k=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return V.createElement(C,{actions:["read_detail"],hmTableProps:{hmColumns:k,hmRequest:t}})},U.abrupt("return",{default:i});case 13:case"end":return U.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,I));case 3:case"end":return t.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}},"curd-demo-2":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,P,t,A,i,$,U,M,k;return o()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return M=function(){return M=n()(o()().mark(function S(F){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMRequest",F),h.abrupt("return",new Promise(function(T){setTimeout(function(){T({data:{data:$,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return h.stop()}},S)})),M.apply(this,arguments)},U=function(S){return M.apply(this,arguments)},H.next=4,Promise.resolve().then(e.t.bind(e,59496,19));case 4:return Y=H.sent,C=Y.useRef,H.next=8,Promise.resolve().then(e.bind(e,25645));case 8:return R=H.sent,I=R.CURD,H.next=12,Promise.resolve().then(e.bind(e,38548));case 12:return P=H.sent,t=P.range,H.next=16,Promise.resolve().then(e.bind(e,77623));case 16:return A=H.sent,i=A.Button,$=t(10).map(function(y){return{id:"".concat(y),name:"name-".concat(y),age:y,address:"address-".concat(y)}}),k=function(){var S=C(),F=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return V.createElement("div",null,V.createElement(i,{onClick:function(){var h;return(h=S.current.getActionRef().current)===null||h===void 0?void 0:h.reload()}},"reload"),V.createElement(I,{actions:[],ref:S,hmTableProps:{hmColumns:F,hmRequest:U}}))},H.abrupt("return",{default:k});case 21:case"end":return H.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,I));case 3:case"end":return t.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}}}},15278:function(le,v,e){e.r(v),e.d(v,{demos:function(){return Y}});var re=e(48305),o=e.n(re),ae=e(26068),l=e.n(ae),Ue=e(90228),n=e.n(Ue),V=e(87999),b=e.n(V),O=e(59496),Q=e(13720),Y={"use_curd_select-demo-0":{component:O.memo(O.lazy(b()(n()().mark(function C(){var R,I,P,t,A,i,$,U,M,k,w;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return k=function(){return k=b()(n()().mark(function F(N){var h;return n()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMRequest",N),h=i,N.city&&(h=h.filter(function(D){return D.city===N.city})),x.abrupt("return",new Promise(function(D){setTimeout(function(){D({data:{data:h,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return x.stop()}},F)})),k.apply(this,arguments)},M=function(F){return k.apply(this,arguments)},U=function(){return U=b()(n()().mark(function F(){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return h.stop()}},F)})),U.apply(this,arguments)},$=function(){return U.apply(this,arguments)},y.next=6,Promise.resolve().then(e.bind(e,25645));case 6:return R=y.sent,I=R.CURD,P=R.useCURDSelect,y.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return t=y.sent,A=t.range,i=A(5).map(function(S){return{id:"".concat(S),name:"name-".concat(S),city:void 0}}),i[0].city="\u5E7F\u5DDE",i[1].city="\u6DF1\u5733",w=function(){var F=P({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var h=b()(n()().mark(function x(){var D;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,$();case 2:return D=f.sent,f.abrupt("return",D.map(function(g){return{label:g,value:g}})||[]);case 4:case"end":return f.stop()}},x)}));function T(){return h.apply(this,arguments)}return T}()}),N=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},F.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return O.createElement(I,{actions:[],hmTableProps:{hmColumns:N,hmRequest:M}})},y.abrupt("return",{default:w});case 18:case"end":return y.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
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
      actions={[]}
      hmTableProps={{
        hmColumns,
        hmRequest: fakeHMRequest,
      }}
    />
  );
};

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548)},renderOpts:{compile:function(){var C=b()(n()().mark(function I(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}},"use_curd_select-demo-1":{component:O.memo(O.lazy(b()(n()().mark(function C(){var R,I,P,t,A,i,$,U,M,k,w,H,y,S,F,N;return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return F=function(){return F=b()(n()().mark(function D(B){return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log("fakeHMGetById",B),g.abrupt("return",new Promise(function(G){setTimeout(function(){G({data:{data:M.find(function(d){return d.id===B.id})}})},1e3)}));case 2:case"end":return g.stop()}},D)})),F.apply(this,arguments)},S=function(D){return F.apply(this,arguments)},y=function(){return y=b()(n()().mark(function D(B){var f;return n()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return console.log("fakeHMRequest",B),f=M,B.city&&(f=f.filter(function(d){return d.city===B.city})),G.abrupt("return",new Promise(function(d){setTimeout(function(){d({data:{data:f,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return G.stop()}},D)})),y.apply(this,arguments)},H=function(D){return y.apply(this,arguments)},w=function(){return w=b()(n()().mark(function D(){return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return f.stop()}},D)})),w.apply(this,arguments)},k=function(){return w.apply(this,arguments)},T.next=8,Promise.resolve().then(e.bind(e,25645));case 8:return R=T.sent,I=R.CURD,P=R.useCURDSelects,T.next=13,Promise.resolve().then(e.bind(e,38548));case 13:return t=T.sent,A=t.range,T.next=17,Promise.resolve().then(e.bind(e,5765));case 17:return i=T.sent,$=i.ProFormText,U=i.ProFormSelect,M=A(5).map(function(x){return{id:"".concat(x),name:"name-".concat(x),city:void 0}}),M[0].city="\u5E7F\u5DDE",M[1].city="\u6DF1\u5733",N=function(){var D=P(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var G=b()(n()().mark(function ee(){var ue;return n()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,k();case 2:return ue=se.sent,se.abrupt("return",ue.map(function(De){return{label:De,value:De}})||[]);case 4:case"end":return se.stop()}},ee)}));function d(){return G.apply(this,arguments)}return d}()}}),B=D.tableCURDSelect,f=D.detailCURDSelect,g=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},B.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return O.createElement(I,{actions:["read"],hmTableProps:{hmColumns:g,hmRequest:H},renderForm:function(d){return O.createElement(O.Fragment,null,O.createElement($,l()(l()({},d),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),O.createElement($,l()(l()({},d),{},{name:"age",label:" \u5E74\u9F84",required:!0})),O.createElement(U,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},f.proFormSelectProps)))},requestGetById:S})},T.abrupt("return",{default:N});case 25:case"end":return T.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelects } from '@huomu/core';
import { range } from 'lodash-es';
import { ProFormText, ProFormSelect } from '@ant-design/pro-components';

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

const Demo = () => {
  const { tableCURDSelect, detailCURDSelect } = useCURDSelects(() => ({
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
  }));

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
    tableCURDSelect.selectColumn({
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
          <ProFormSelect name="city" label={'\u6240\u5C5E\u57CE\u5E02'} {...detailCURDSelect.proFormSelectProps} />
        </>
      )}
      requestGetById={fakeHMGetById}
    />
  );
};

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var C=b()(n()().mark(function I(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}},"use_curd_select-demo-2":{component:O.memo(O.lazy(b()(n()().mark(function C(){var R,I,P,t,A,i,$,U,M,k,w,H,y,S,F,N,h,T,x,D,B,f,g,G,d,ee,ue,Ee,se,De;return n()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return se=function(){return se=b()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMUpdateById",K),h=h.map(function(W){return W.id===K.id?l()(l()({},W),K):W}),Z.abrupt("return",Promise.resolve({}));case 3:case"end":return Z.stop()}},z)})),se.apply(this,arguments)},Ee=function(z){return se.apply(this,arguments)},ue=function(){return ue=b()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMAdd",K),h.push(l()({id:h.length+1},K)),Z.abrupt("return",Promise.resolve({}));case 3:case"end":return Z.stop()}},z)})),ue.apply(this,arguments)},ee=function(z){return ue.apply(this,arguments)},d=function(){return d=b()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMGetById",K),Z.abrupt("return",new Promise(function(W){setTimeout(function(){W({data:{data:h.find(function(ie){return ie.id===K.id})}})},1e3)}));case 2:case"end":return Z.stop()}},z)})),d.apply(this,arguments)},G=function(z){return d.apply(this,arguments)},g=function(){return g=b()(n()().mark(function z(K){var j;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return console.log("fakeHMRequest",K),j=h,K.city&&(j=j.filter(function(ie){return ie.city===K.city})),K.area&&(j=j.filter(function(ie){return ie.area===K.area})),W.abrupt("return",new Promise(function(ie){setTimeout(function(){ie({data:{data:j,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return W.stop()}},z)})),g.apply(this,arguments)},f=function(z){return g.apply(this,arguments)},B=function(){return B=b()(n()().mark(function z(K){var j;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(j=K.city,!j){W.next=3;break}return W.abrupt("return",N[j]);case 3:return W.abrupt("return",F.apply(null,Object.values(N)));case 4:case"end":return W.stop()}},z)})),B.apply(this,arguments)},D=function(z){return B.apply(this,arguments)},x=function(){return x=b()(n()().mark(function z(){return n()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object.keys(N));case 1:case"end":return j.stop()}},z)})),x.apply(this,arguments)},T=function(){return x.apply(this,arguments)},X.next=14,Promise.resolve().then(e.t.bind(e,59496,19));case 14:return R=X.sent,I=R.useRef,X.next=18,Promise.resolve().then(e.bind(e,25645));case 18:return P=X.sent,t=P.CURD,A=P.useCURDSelects,X.next=23,Promise.resolve().then(e.bind(e,38548));case 23:return i=X.sent,$=i.range,X.next=27,Promise.resolve().then(e.bind(e,77623));case 27:return U=X.sent,M=U.Button,X.next=31,Promise.resolve().then(e.bind(e,5765));case 31:return k=X.sent,w=k.ProForm,H=k.ProFormText,y=k.ProFormSelect,X.next=37,Promise.resolve().then(e.bind(e,38548));case 37:return S=X.sent,F=S.union,N={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},h=$(5).map(function(ne){return{id:"".concat(ne),name:"name-".concat(ne),city:void 0,area:void 0}}),h[0].city="\u5E7F\u5DDE",h[1].area="\u5357\u5C71",h[2].city="\u6DF1\u5733",h[2].area="\u798F\u7530",De=function(){var z=I(),K=w.useWatch("city",z.current),j=w.useForm(),Z=o()(j,1),W=Z[0],ie=w.useWatch("city",W),ke=A(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var ge=b()(n()().mark(function Ce(){var Ie;return n()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,T();case 2:return Ie=me.sent,me.abrupt("return",Ie.map(function(pe){return{label:pe,value:pe}})||[]);case 4:case"end":return me.stop()}},Ce)}));function he(){return ge.apply(this,arguments)}return he}()}}),Se=A(function(ge){var he=ge.type,Ce=he==="table"?K:ie;return{initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Ie=b()(n()().mark(function me(){var pe;return n()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,D({city:Ce});case 2:return pe=ve.sent,ve.abrupt("return",pe.map(function(He){return{label:He,value:He}})||[]);case 4:case"end":return ve.stop()}},me)}));function Fe(){return Ie.apply(this,arguments)}return Fe}(),useRequestOptions:{refreshDeps:[Ce]}}}),Oe=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},ke.tableCURDSelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),Se.tableCURDSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return O.createElement(t,{actions:["create","read","update"],hmTableProps:{formRef:z,hmColumns:Oe,hmRequest:f},createButton:O.createElement(M,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(he){return O.createElement(O.Fragment,null,O.createElement(H,l()(l()({},he),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),O.createElement(H,l()(l()({},he),{},{name:"age",label:" \u5E74\u9F84",required:!0})),O.createElement(y,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},ke.detailCURDSelect.proFormSelectProps)),O.createElement(y,l()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},Se.detailCURDSelect.proFormSelectProps)))},renderFormInstance:W,requestGetById:G,requestAdd:ee,requestUpdateById:Ee})},X.abrupt("return",{default:De});case 47:case"end":return X.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-2",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
import { CURD, useCURDSelects } from '@huomu/core';
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

const Demo = () => {
  const formRef = useRef<any>();
  const tableCity = ProForm.useWatch('city', formRef.current);

  const [renderFormInstance] = ProForm.useForm();
  const areaCity = ProForm.useWatch('city', renderFormInstance);

  const cityCURDSelects = useCURDSelects(() => ({
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
  }));

  const areaCURDSelects = useCURDSelects(({ type }) => {
    const city = type === 'table' ? tableCity : areaCity;

    return {
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
    };
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
    cityCURDSelects.tableCURDSelect.selectColumn({
      title: '\u57CE\u5E02',
      dataIndex: 'city',
      search: true,
    }),
    areaCURDSelects.tableCURDSelect.selectColumn({
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
            {...cityCURDSelects.detailCURDSelect.proFormSelectProps}
          />
          <ProFormSelect
            name="area"
            label={'\u6240\u5C5E\u533A\u57DF'}
            {...areaCURDSelects.detailCURDSelect.proFormSelectProps}
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.2.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var C=b()(n()().mark(function I(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}}}},75725:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ae}});var re=e(59496),o=e(62545),ae={}},86946:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ae}});var re=e(59496),o=e(61865),ae={}},98536:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ae}});var re=e(59496),o=e(39656),ae={}},25645:function(le,v,e){e.r(v),e.d(v,{CURD:function(){return x},CURDDetail:function(){return T},EditorJSON:function(){return Z},EditorJavascript:function(){return K},EditorMarkdown:function(){return Se},FileUpload:function(){return Ce},HMDescriptions:function(){return se},HMTable:function(){return U},NumberSwitch:function(){return me},OperateDelete:function(){return H},createStore:function(){return be},getTableScroll:function(){return M},useCURDSelect:function(){return g},useCURDSelects:function(){return G},useDelete:function(){return w}});var re=e(15558),o=e.n(re),ae=e(26068),l=e.n(ae),Ue=e(35990),n=e(59496),V=e(5791),b=e(33553),O=e(90228),Q=e.n(O),Y=e(67825),C=e.n(Y),R=e(87999),I=e.n(R),P=e(3737),t=e(4637),A=["current","pageSize"],i=["hmRequest","request","hmColumns","columns","rowKey"];function $(r){return function(){var a=I()(Q()().mark(function u(s){var m,c,p,E;return Q()().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return m=s.current,c=s.pageSize,p=C()(s,A),q.next=3,r(l()({page:m,pageSize:c},p));case 3:return E=q.sent,q.abrupt("return",{data:E.data.data,success:E.data.success,total:E.data.totalSize});case 5:case"end":return q.stop()}},u)}));return function(u){return a.apply(this,arguments)}}()}function U(r){var a=r.hmRequest,u=r.request,s=r.hmColumns,m=r.columns,c=r.rowKey,p=c===void 0?"id":c,E=C()(r,i),_=(0,n.useCallback)(function(oe){return a?$(a)(oe):u(oe,{},{})},[a,u]),q=(0,n.useMemo)(function(){return s?s.map(function(oe){return l()({search:!1},oe)}):m},[m,s]);return(0,t.jsx)(P.Z,l()({cardBordered:!0,rowKey:p,pagination:l()({showSizeChanger:!0,showQuickJumper:!0},E.pagination),options:!1,request:_,columns:q},E))}function M(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,u={x:0,y:void 0};return r==null||r.forEach(function(s){s.hideInTable||(u.x+=Number(s.width)||a)}),u}var k=e(37082);function w(r){var a=r.name,u=r.desc,s=r.onDelete,m=(0,n.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return{doDelete:m}}function H(r){var a=r.name,u=r.desc,s=r.onDelete,m=(0,n.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return(0,t.jsx)("a",{style:{color:"red"},onClick:m,children:"\u5220\u9664"})}var y=e(48305),S=e.n(y),F=e(67046),N=e(22109),h=e(80671);function T(r){var a=r.action,u=r.id,s=r.record,m=r.trigger,c=r.onSuccess,p=r.renderForm,E=r.requestGetById,_=r.requestGetByRecord,q=r.requestAdd,oe=r.requestUpdateById,Pe=r.renderFormInstance,ce=(0,n.useRef)(""+Math.random()),ye=N.A.useForm(Pe),fe=S()(ye,1),te=fe[0],Re=(0,n.useCallback)(function(){var Be=I()(Q()().mark(function J(de){return Q()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(L.prev=0,!(a==="create"&&q)){L.next=5;break}return L.next=4,q(de);case 4:F.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(a==="update"&&oe)){L.next=9;break}return L.next=8,oe(l()(l()({},de),{},{id:u}));case 8:F.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return c==null||c(),L.abrupt("return",!0);case 13:L.prev=13,L.t0=L.catch(0),setTimeout(function(){throw L.t0},10);case 16:case"end":return L.stop()}},J,null,[[0,13]])}));return function(J){return Be.apply(this,arguments)}}(),[a,c,q,oe,u]),Te=(0,n.useCallback)(function(Be){if(Be&&(te==null||te.resetFields(),u)){if(E)return E({id:u}).then(function(J){te==null||te.setFieldsValue(J.data.data)});if(_)return _(s).then(function(J){te==null||te.setFieldsValue(J.data.data)})}},[te,u,E,_,s]),Me=(0,n.useMemo)(function(){return p?p({readonly:a==="read"&&!!u},{action:a}):null},[a,u,p]);return(0,t.jsxs)(h.a,{form:te,trigger:m,autoFocusFirstInput:!0,onFinish:Re,onOpenChange:Te,layout:"vertical",readonly:a==="read"&&!!u,children:[(0,t.jsx)("div",{className:"h-[20px]"}),Me]},u||ce.current)}var x=(0,n.forwardRef)(function(a,u){var s=a.actions,m=a.hmTableProps,c=a.createButton,p=a.deleteProps,E=a.detailIdIndex,_=a.renderForm,q=a.requestGetById,oe=a.requestGetByRecord,Pe=a.requestAdd,ce=a.requestUpdateById,ye=a.renderFormInstance,fe=(0,n.useRef)(),te=(0,V.TH)();(0,n.useImperativeHandle)(u,function(){return{getActionRef:function(){return fe}}},[fe]);var Re=(0,n.useMemo)(function(){return{renderForm:_,requestGetById:q,requestGetByRecord:oe,requestAdd:Pe,requestUpdateById:ce,renderFormInstance:ye}},[_,Pe,q,oe,ce,ye]),Te=(0,n.useCallback)(function(J){return function(){if(p!=null&&p.deleteById)return p.deleteById({id:J.id,ids:[J.id]}).then(function(){var de;(de=fe.current)===null||de===void 0||de.reload()});if(p!=null&&p.deleteByRecord)return p.deleteByRecord(J).then(function(){var de;(de=fe.current)===null||de===void 0||de.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[p]),Me=(0,n.useCallback)(function(){var J;(J=fe.current)===null||J===void 0||J.reload()},[]),Be=(0,n.useMemo)(function(){var J={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(xe,L){return(0,t.jsxs)(Ue.Z,{children:[s.includes("read")&&(0,t.jsx)(T,l()({id:L.id,record:L,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},Re),"read"+L.id),s.includes("read_detail")&&(0,t.jsx)(b.rU,{to:"".concat(te.pathname,"/detail/").concat(L[E||"id"]),children:"\u67E5\u770B"}),s.includes("update")&&(0,t.jsx)(T,l()({id:L.id,record:L,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},Re),"update"+L.id),s.includes("delete")&&p&&(0,t.jsx)(H,{name:L[p.nameIndex],desc:p.desc,onDelete:Te(L)})]})}};return s.includes("read")||s.includes("read_detail")||s.includes("update")||s.includes("delete")?[].concat(o()(m.hmColumns||m.columns||[]),[J]):m.hmColumns},[s,p,E,Re,Te,Me,m.columns,m.hmColumns,te.pathname]);return(0,t.jsx)("div",{className:"",children:(0,t.jsx)(U,l()(l()({rowKey:"id"},m),{},{scroll:M(Be),actionRef:fe,toolBarRender:function(){return[].concat(o()(m.toolBarRender?m.toolBarRender.apply(m,arguments):[]),[s.includes("create")&&(0,t.jsx)(T,l()({onSuccess:Me,trigger:c,action:"create"},Re),"create")])},search:l()({layout:"vertical",defaultCollapsed:!1},m.search),hmColumns:Be}))})}),D=e(39935),B=e(53213);function f(r){var a=r.initialValue,u=r.type,s=r.data,m=r.column,c=r.all,p=(0,n.useMemo)(function(){return u==="table"&&c?[c].concat(o()(s)):s},[c,s,u]);return u==="table"?(0,t.jsx)(D.Z,{name:m.dataIndex,options:p,initialValue:a===void 0&&c?c.value:a}):null}function g(r){var a=r.all,u=r.request,s=r.useRequestOptions,m=r.initialValue,c=(0,B.Z)(function(){return u()},s),p=c.data,E=p===void 0?[]:p,_=m===void 0&&a?a.value:m,q=(0,n.useMemo)(function(){var ce={};return E.forEach(function(ye){ce[ye.value]={text:ye.label}}),ce},[E]),oe=(0,n.useCallback)(function(ce){return l()(l()({},ce),{},{valueEnum:q,renderFormItem:function(fe,te){var Re=te.type;return(0,t.jsx)(f,{type:Re,data:E,column:ce,all:a,initialValue:_})}})},[a,E,_,q]),Pe={options:E};return{selectColumn:oe,proFormSelectProps:Pe}}function G(r){var a=(0,n.useMemo)(function(){return r({type:"table"})},[r]),u=(0,n.useMemo)(function(){return r({type:"detail"})},[r]),s=g(a),m=g(u);return{tableCURDSelect:s,detailCURDSelect:m}}var d=e(13194),ee=e(28026),ue=e.n(ee),Ee=["hmItems","items"];function se(r){var a=r.hmItems,u=r.items,s=C()(r,Ee),m=(0,n.useMemo)(function(){return a?a.map(function(c){var p=c.children;return c.children!==null&&c.children!==void 0&&(c.valueType==="date"?p=ue()(p).format("YYYY-MM-DD"):c.valueType==="dateTime"?p=ue()(p).format("YYYY-MM-DD HH:mm:ss"):c.valueType==="time"&&(p=ue()(p).format("HH:mm:ss"))),l()(l()({},c),{},{children:p||"-"})}):u},[a,u]);return(0,t.jsx)(d.Z,l()({items:m},s))}var De=e(34019),$e=e(65273),X=e(59590),ne=e(32479),z={width:"100%",height:"100%"};function K(r){var a=r.value,u=r.onChange,s=r.readonly;return(0,t.jsx)(De.ZP,{style:z,mode:"javascript",theme:"monokai",value:a,onChange:u,readOnly:s,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var j=e(46182);function Z(r){var a=r.value,u=r.onChange,s=r.readonly,m=(0,n.useRef)(null),c=(0,n.useRef)(null),p=(0,n.useRef)(u);return(0,n.useEffect)(function(){var E;(E=c.current)===null||E===void 0||E.update({text:a||""})},[a]),(0,n.useEffect)(function(){c.current=new j.q9({target:m.current,props:{mode:j.AR.text,readOnly:s,content:{text:a||""},onChange:function(_){p.current(_.text)}}})},[]),(0,t.jsx)("div",{ref:m,className:"h-full w-full"})}var W=e(70876),ie=e(51709),ke=["children","className","node"];function Se(r){var a=r.value;return(0,t.jsx)(W.U,{unwrapDisallowed:!0,components:{code:function(s){var m=s.children,c=s.className,p=s.node,E=C()(s,ke),_=/language-(\w+)/.exec(c||"");return _?(0,t.jsx)(ie.Z,l()(l()({},E),{},{PreTag:"div",wrapLongLines:!0,children:String(m).replace(/\n$/,""),language:_[1].toLowerCase()})):(0,t.jsx)("code",l()(l()({},E),{},{className:c,children:m}))}},children:a||""})}var Oe=e(55860),ge=e(32732),he=e(43472);function Ce(r){var a=r.value,u=r.onChange,s=function(p){return u==null||u(p),!1},m=function(){u==null||u(void 0)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ge.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:a?[a]:void 0,beforeUpload:s,onRemove:m,children:(0,t.jsx)(he.ZP,{icon:(0,t.jsx)(Oe.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var Ie=e(39106),Fe=["value","onChange"];function me(r){var a=r.value,u=r.onChange,s=C()(r,Fe);return(0,t.jsx)(Ie.Z,l()(l()({},s),{},{value:!!a,onChange:function(c){return u==null?void 0:u(Number(c))}}))}var pe=e(64934),Ae=e(65124),ve=function(a){return function(u,s,m){var c=(0,Ae.mW)(a);return c(u,s,m)}},He=ve,be=function(a){return a?(0,pe.Ue)()(He(a)):function(u){return(0,pe.Ue)()(He(u))}}},96595:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(14625);const o=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(73134);const o=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u70B9\u51FB\u67E5\u770B\uFF0C\u5728 url \u4E0A\u6DFB\u52A0 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:4,tocIndex:3}]},40760:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(13720);const o=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { useCURDSelect, useCURDSelects } from '@huomu/core';",paraId:1,tocIndex:0},{value:"curd select \u7EC4\u4EF6\uFF0C\u6709",paraId:2,tocIndex:0},{value:"table \u7684 column",paraId:3,tocIndex:0},{value:"form \u7684 ProFormSelect",paraId:3,tocIndex:0},{value:"table detail \u7684\u6570\u636E\u5E94\u8BE5\u662F\u72EC\u7ACB\u7684\uFF0C\u6240\u4EE5\u7528 useCURDSelect \u6CA1\u6CD5\uFF0C\u56E0\u6B64\u6709 useCURDSelects",paraId:4,tocIndex:2},{value:"\u57CE\u5E02\u548C\u533A\u57DF\u8054\u52A8",paraId:5,tocIndex:3}]},9836:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(62545);const o=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(61865);const o=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(39656);const o=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
