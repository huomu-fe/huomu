"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ue}});var re=e(59496),o=e(14625),ue={}},58229:function(le,v,e){e.r(v),e.d(v,{demos:function(){return O}});var re=e(90228),o=e.n(re),ue=e(26068),l=e.n(ue),Ue=e(87999),n=e.n(Ue),V=e(59496),x=e(73134),O={"curd-demo-0":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,M,r,A,i,$,U,P,k,G,H,y,S,T,N,h,F;return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return h=function(){return h=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMUpdateById",g),$=$.map(function(ee){return ee.id===g.id?l()(l()({},ee),g):ee}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),h.apply(this,arguments)},N=function(f){return h.apply(this,arguments)},T=function(){return T=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMAdd",g),$.push(l()({id:$.length+1},g)),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),T.apply(this,arguments)},S=function(f){return T.apply(this,arguments)},y=function(){return y=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMGetById",g),d.abrupt("return",new Promise(function(ee){setTimeout(function(){ee({data:{data:$.find(function(ae){return ae.id===g.id})}})},1e3)}));case 2:case"end":return d.stop()}},f)})),y.apply(this,arguments)},H=function(f){return y.apply(this,arguments)},G=function(){return G=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMDeleteById",g),$=$.filter(function(ee){return ee.id!==g.id}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),G.apply(this,arguments)},k=function(f){return G.apply(this,arguments)},P=function(){return P=n()(o()().mark(function f(g){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMRequest",g),d.abrupt("return",new Promise(function(ee){setTimeout(function(){ee({data:{data:$,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return d.stop()}},f)})),P.apply(this,arguments)},U=function(f){return P.apply(this,arguments)},D.next=12,Promise.resolve().then(e.bind(e,87818));case 12:return Y=D.sent,C=Y.CURD,D.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return R=D.sent,I=R.range,D.next=20,Promise.resolve().then(e.bind(e,77623));case 20:return M=D.sent,r=M.Button,D.next=24,Promise.resolve().then(e.bind(e,5765));case 24:return A=D.sent,i=A.ProFormText,$=I(10).map(function(B){return{id:"".concat(B),name:"name-".concat(B),address:"address-".concat(B)}}),F=function(){var f=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return V.createElement(C,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:f,hmRequest:U},createButton:V.createElement(r,{type:"primary"},"\u65B0\u5EFA"),deleteProps:{nameIndex:"name",deleteById:k},renderForm:function(w){return V.createElement(V.Fragment,null,V.createElement(i,l()(l()({},w),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),V.createElement(i,l()(l()({},w),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:H,requestAdd:S,requestUpdateById:N})},D.abrupt("return",{default:F});case 29:case"end":return D.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(R=r.sent).default.apply(R,I));case 3:case"end":return r.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}},"curd-demo-1":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,M,r,A,i;return o()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return A=function(){return A=n()(o()().mark(function k(G){return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("fakeHMRequest",G),y.abrupt("return",new Promise(function(S){setTimeout(function(){S({data:{data:M,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return y.stop()}},k)})),A.apply(this,arguments)},r=function(k){return A.apply(this,arguments)},U.next=4,Promise.resolve().then(e.bind(e,87818));case 4:return Y=U.sent,C=Y.CURD,U.next=8,Promise.resolve().then(e.bind(e,38548));case 8:return R=U.sent,I=R.range,M=I(10).map(function(P){return{id:"".concat(P),name:"name-".concat(P),age:P,address:"address-".concat(P)}}),i=function(){var k=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return V.createElement(C,{actions:["read_detail"],hmTableProps:{hmColumns:k,hmRequest:r}})},U.abrupt("return",{default:i});case 13:case"end":return U.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(R=r.sent).default.apply(R,I));case 3:case"end":return r.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}},"curd-demo-2":{component:V.memo(V.lazy(n()(o()().mark(function Q(){var Y,C,R,I,M,r,A,i,$,U,P,k;return o()().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return P=function(){return P=n()(o()().mark(function S(T){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMRequest",T),h.abrupt("return",new Promise(function(F){setTimeout(function(){F({data:{data:$,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return h.stop()}},S)})),P.apply(this,arguments)},U=function(S){return P.apply(this,arguments)},H.next=4,Promise.resolve().then(e.t.bind(e,59496,19));case 4:return Y=H.sent,C=Y.useRef,H.next=8,Promise.resolve().then(e.bind(e,87818));case 8:return R=H.sent,I=R.CURD,H.next=12,Promise.resolve().then(e.bind(e,38548));case 12:return M=H.sent,r=M.range,H.next=16,Promise.resolve().then(e.bind(e,77623));case 16:return A=H.sent,i=A.Button,$=r(10).map(function(y){return{id:"".concat(y),name:"name-".concat(y),age:y,address:"address-".concat(y)}}),k=function(){var S=C(),T=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return V.createElement("div",null,V.createElement(i,{onClick:function(){var h;return(h=S.current.getActionRef().current)===null||h===void 0?void 0:h.reload()}},"reload"),V.createElement(I,{actions:[],ref:S,hmTableProps:{hmColumns:T,hmRequest:U}}))},H.abrupt("return",{default:k});case 21:case"end":return H.stop()}},Q)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(87818),"lodash-es":e(38548),antd:e(77623)},renderOpts:{compile:function(){var Q=n()(o()().mark(function C(){var R,I=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(R=r.sent).default.apply(R,I));case 3:case"end":return r.stop()}},C)}));function Y(){return Q.apply(this,arguments)}return Y}()}}}},15278:function(le,v,e){e.r(v),e.d(v,{demos:function(){return Y}});var re=e(48305),o=e.n(re),ue=e(26068),l=e.n(ue),Ue=e(90228),n=e.n(Ue),V=e(87999),x=e.n(V),O=e(59496),Q=e(13720),Y={"use_curd_select-demo-0":{component:O.memo(O.lazy(x()(n()().mark(function C(){var R,I,M,r,A,i,$,U,P,k,G;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return k=function(){return k=x()(n()().mark(function T(N){var h;return n()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return console.log("fakeHMRequest",N),h=i,N.city&&(h=h.filter(function(D){return D.city===N.city})),b.abrupt("return",new Promise(function(D){setTimeout(function(){D({data:{data:h,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return b.stop()}},T)})),k.apply(this,arguments)},P=function(T){return k.apply(this,arguments)},U=function(){return U=x()(n()().mark(function T(){return n()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return h.stop()}},T)})),U.apply(this,arguments)},$=function(){return U.apply(this,arguments)},y.next=6,Promise.resolve().then(e.bind(e,87818));case 6:return R=y.sent,I=R.CURD,M=R.useCURDSelect,y.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return r=y.sent,A=r.range,i=A(5).map(function(S){return{id:"".concat(S),name:"name-".concat(S),city:void 0}}),i[0].city="\u5E7F\u5DDE",i[1].city="\u6DF1\u5733",G=function(){var T=M({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var h=x()(n()().mark(function b(){var D;return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,$();case 2:return D=f.sent,f.abrupt("return",D.map(function(g){return{label:g,value:g}})||[]);case 4:case"end":return f.stop()}},b)}));function F(){return h.apply(this,arguments)}return F}()}),N=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},T.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return O.createElement(I,{actions:[],hmTableProps:{hmColumns:N,hmRequest:P}})},y.abrupt("return",{default:G});case 18:case"end":return y.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548)},renderOpts:{compile:function(){var C=x()(n()().mark(function I(){var M,r=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(M=i.sent).default.apply(M,r));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}},"use_curd_select-demo-1":{component:O.memo(O.lazy(x()(n()().mark(function C(){var R,I,M,r,A,i,$,U,P,k,G,H,y,S,T,N;return n()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return T=function(){return T=x()(n()().mark(function D(B){return n()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log("fakeHMGetById",B),g.abrupt("return",new Promise(function(w){setTimeout(function(){w({data:{data:P.find(function(d){return d.id===B.id})}})},1e3)}));case 2:case"end":return g.stop()}},D)})),T.apply(this,arguments)},S=function(D){return T.apply(this,arguments)},y=function(){return y=x()(n()().mark(function D(B){var f;return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("fakeHMRequest",B),f=P,B.city&&(f=f.filter(function(d){return d.city===B.city})),w.abrupt("return",new Promise(function(d){setTimeout(function(){d({data:{data:f,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return w.stop()}},D)})),y.apply(this,arguments)},H=function(D){return y.apply(this,arguments)},G=function(){return G=x()(n()().mark(function D(){return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return f.stop()}},D)})),G.apply(this,arguments)},k=function(){return G.apply(this,arguments)},F.next=8,Promise.resolve().then(e.bind(e,87818));case 8:return R=F.sent,I=R.CURD,M=R.useCURDSelects,F.next=13,Promise.resolve().then(e.bind(e,38548));case 13:return r=F.sent,A=r.range,F.next=17,Promise.resolve().then(e.bind(e,5765));case 17:return i=F.sent,$=i.ProFormText,U=i.ProFormSelect,P=A(5).map(function(b){return{id:"".concat(b),name:"name-".concat(b),city:void 0}}),P[0].city="\u5E7F\u5DDE",P[1].city="\u6DF1\u5733",N=function(){var D=M(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var w=x()(n()().mark(function ee(){var ae;return n()().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return se.next=2,k();case 2:return ae=se.sent,se.abrupt("return",ae.map(function(De){return{label:De,value:De}})||[]);case 4:case"end":return se.stop()}},ee)}));function d(){return w.apply(this,arguments)}return d}()}}),B=D.tableCURDSelect,f=D.detailCURDSelect,g=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},B.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return O.createElement(I,{actions:["read"],hmTableProps:{hmColumns:g,hmRequest:H},renderForm:function(d){return O.createElement(O.Fragment,null,O.createElement($,l()(l()({},d),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),O.createElement($,l()(l()({},d),{},{name:"age",label:" \u5E74\u9F84",required:!0})),O.createElement(U,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},f.proFormSelectProps)))},requestGetById:S})},F.abrupt("return",{default:N});case 25:case"end":return F.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelects } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var C=x()(n()().mark(function I(){var M,r=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(M=i.sent).default.apply(M,r));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}},"use_curd_select-demo-2":{component:O.memo(O.lazy(x()(n()().mark(function C(){var R,I,M,r,A,i,$,U,P,k,G,H,y,S,T,N,h,F,b,D,B,f,g,w,d,ee,ae,Ee,se,De;return n()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return se=function(){return se=x()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMUpdateById",K),h=h.map(function(W){return W.id===K.id?l()(l()({},W),K):W}),Z.abrupt("return",Promise.resolve({}));case 3:case"end":return Z.stop()}},z)})),se.apply(this,arguments)},Ee=function(z){return se.apply(this,arguments)},ae=function(){return ae=x()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMAdd",K),h.push(l()({id:h.length+1},K)),Z.abrupt("return",Promise.resolve({}));case 3:case"end":return Z.stop()}},z)})),ae.apply(this,arguments)},ee=function(z){return ae.apply(this,arguments)},d=function(){return d=x()(n()().mark(function z(K){return n()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("fakeHMGetById",K),Z.abrupt("return",new Promise(function(W){setTimeout(function(){W({data:{data:h.find(function(ie){return ie.id===K.id})}})},1e3)}));case 2:case"end":return Z.stop()}},z)})),d.apply(this,arguments)},w=function(z){return d.apply(this,arguments)},g=function(){return g=x()(n()().mark(function z(K){var j;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return console.log("fakeHMRequest",K),j=h,K.city&&(j=j.filter(function(ie){return ie.city===K.city})),K.area&&(j=j.filter(function(ie){return ie.area===K.area})),W.abrupt("return",new Promise(function(ie){setTimeout(function(){ie({data:{data:j,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return W.stop()}},z)})),g.apply(this,arguments)},f=function(z){return g.apply(this,arguments)},B=function(){return B=x()(n()().mark(function z(K){var j;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(j=K.city,!j){W.next=3;break}return W.abrupt("return",N[j]);case 3:return W.abrupt("return",T.apply(null,Object.values(N)));case 4:case"end":return W.stop()}},z)})),B.apply(this,arguments)},D=function(z){return B.apply(this,arguments)},b=function(){return b=x()(n()().mark(function z(){return n()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object.keys(N));case 1:case"end":return j.stop()}},z)})),b.apply(this,arguments)},F=function(){return b.apply(this,arguments)},X.next=14,Promise.resolve().then(e.t.bind(e,59496,19));case 14:return R=X.sent,I=R.useRef,X.next=18,Promise.resolve().then(e.bind(e,87818));case 18:return M=X.sent,r=M.CURD,A=M.useCURDSelects,X.next=23,Promise.resolve().then(e.bind(e,38548));case 23:return i=X.sent,$=i.range,X.next=27,Promise.resolve().then(e.bind(e,77623));case 27:return U=X.sent,P=U.Button,X.next=31,Promise.resolve().then(e.bind(e,5765));case 31:return k=X.sent,G=k.ProForm,H=k.ProFormText,y=k.ProFormSelect,X.next=37,Promise.resolve().then(e.bind(e,38548));case 37:return S=X.sent,T=S.union,N={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},h=$(5).map(function(ne){return{id:"".concat(ne),name:"name-".concat(ne),city:void 0,area:void 0}}),h[0].city="\u5E7F\u5DDE",h[1].area="\u5357\u5C71",h[2].city="\u6DF1\u5733",h[2].area="\u798F\u7530",De=function(){var z=I(),K=G.useWatch("city",z.current),j=G.useForm(),Z=o()(j,1),W=Z[0],ie=G.useWatch("city",W),ke=A(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var ge=x()(n()().mark(function Ce(){var Ie;return n()().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:return me.next=2,F();case 2:return Ie=me.sent,me.abrupt("return",Ie.map(function(pe){return{label:pe,value:pe}})||[]);case 4:case"end":return me.stop()}},Ce)}));function he(){return ge.apply(this,arguments)}return he}()}}),Se=A(function(ge){var he=ge.type,Ce=he==="table"?K:ie;return{initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Ie=x()(n()().mark(function me(){var pe;return n()().wrap(function(ve){for(;;)switch(ve.prev=ve.next){case 0:return ve.next=2,D({city:Ce});case 2:return pe=ve.sent,ve.abrupt("return",pe.map(function(He){return{label:He,value:He}})||[]);case 4:case"end":return ve.stop()}},me)}));function Te(){return Ie.apply(this,arguments)}return Te}(),useRequestOptions:{refreshDeps:[Ce]}}}),Oe=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},ke.tableCURDSelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),Se.tableCURDSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return O.createElement(r,{actions:["create","read","update"],hmTableProps:{formRef:z,hmColumns:Oe,hmRequest:f},createButton:O.createElement(P,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(he){return O.createElement(O.Fragment,null,O.createElement(H,l()(l()({},he),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),O.createElement(H,l()(l()({},he),{},{name:"age",label:" \u5E74\u9F84",required:!0})),O.createElement(y,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},ke.detailCURDSelect.proFormSelectProps)),O.createElement(y,l()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},Se.detailCURDSelect.proFormSelectProps)))},renderFormInstance:W,requestGetById:w,requestAdd:ee,requestUpdateById:Ee})},X.abrupt("return",{default:De});case 47:case"end":return X.stop()}},C)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-2",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(87818),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var C=x()(n()().mark(function I(){var M,r=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(M=i.sent).default.apply(M,r));case 3:case"end":return i.stop()}},I)}));function R(){return C.apply(this,arguments)}return R}()}}}},75725:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ue}});var re=e(59496),o=e(62545),ue={}},86946:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ue}});var re=e(59496),o=e(61865),ue={}},98536:function(le,v,e){e.r(v),e.d(v,{demos:function(){return ue}});var re=e(59496),o=e(39656),ue={}},87818:function(le,v,e){e.r(v),e.d(v,{CURD:function(){return b},CURDDetail:function(){return F},CustomValueTypeEnum:function(){return Ae},EditorJSON:function(){return Z},EditorJavascript:function(){return K},EditorMarkdown:function(){return Se},FileUpload:function(){return Ce},HMDescriptions:function(){return se},HMTable:function(){return U},NumberSwitch:function(){return me},OperateDelete:function(){return H},createStore:function(){return be},customValueTypeMap:function(){return we},getTableScroll:function(){return P},useCURDSelect:function(){return g},useCURDSelects:function(){return w},useDelete:function(){return G}});var re=e(15558),o=e.n(re),ue=e(26068),l=e.n(ue),Ue=e(35990),n=e(59496),V=e(5791),x=e(33553),O=e(90228),Q=e.n(O),Y=e(67825),C=e.n(Y),R=e(87999),I=e.n(R),M=e(3737),r=e(4637),A=["current","pageSize"],i=["hmRequest","request","hmColumns","columns","rowKey"];function $(t){return function(){var a=I()(Q()().mark(function u(s){var m,c,p,E;return Q()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return m=s.current,c=s.pageSize,p=C()(s,A),J.next=3,t(l()({page:m,pageSize:c},p));case 3:return E=J.sent,J.abrupt("return",{data:E.data.data,success:E.data.success,total:E.data.totalSize});case 5:case"end":return J.stop()}},u)}));return function(u){return a.apply(this,arguments)}}()}function U(t){var a=t.hmRequest,u=t.request,s=t.hmColumns,m=t.columns,c=t.rowKey,p=c===void 0?"id":c,E=C()(t,i),_=(0,n.useCallback)(function(oe){return a?$(a)(oe):u(oe,{},{})},[a,u]),J=(0,n.useMemo)(function(){return s?s.map(function(oe){return l()({search:!1},oe)}):m},[m,s]);return(0,r.jsx)(M.Z,l()({cardBordered:!0,rowKey:p,pagination:l()({showSizeChanger:!0,showQuickJumper:!0},E.pagination),options:!1,request:_,columns:J},E))}function P(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,u={x:0,y:void 0};return t==null||t.forEach(function(s){s.hideInTable||(u.x+=Number(s.width)||a)}),u}var k=e(37082);function G(t){var a=t.name,u=t.desc,s=t.onDelete,m=(0,n.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return{doDelete:m}}function H(t){var a=t.name,u=t.desc,s=t.onDelete,m=(0,n.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return(0,r.jsx)("a",{style:{color:"red"},onClick:m,children:"\u5220\u9664"})}var y=e(48305),S=e.n(y),T=e(67046),N=e(22109),h=e(80671);function F(t){var a=t.action,u=t.id,s=t.record,m=t.trigger,c=t.onSuccess,p=t.renderForm,E=t.requestGetById,_=t.requestGetByRecord,J=t.requestAdd,oe=t.requestUpdateById,Me=t.renderFormInstance,ce=(0,n.useRef)(""+Math.random()),ye=N.A.useForm(Me),fe=S()(ye,1),te=fe[0],Re=(0,n.useCallback)(function(){var Be=I()(Q()().mark(function q(de){return Q()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(L.prev=0,!(a==="create"&&J)){L.next=5;break}return L.next=4,J(de);case 4:T.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(a==="update"&&oe)){L.next=9;break}return L.next=8,oe(l()(l()({},de),{},{id:u}));case 8:T.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return c==null||c(),L.abrupt("return",!0);case 13:L.prev=13,L.t0=L.catch(0),setTimeout(function(){throw L.t0},10);case 16:case"end":return L.stop()}},q,null,[[0,13]])}));return function(q){return Be.apply(this,arguments)}}(),[a,c,J,oe,u]),Fe=(0,n.useCallback)(function(Be){if(Be&&(te==null||te.resetFields(),u)){if(E)return E({id:u}).then(function(q){te==null||te.setFieldsValue(q.data.data)});if(_)return _(s).then(function(q){te==null||te.setFieldsValue(q.data.data)})}},[te,u,E,_,s]),Pe=(0,n.useMemo)(function(){return p?p({readonly:a==="read"&&!!u},{action:a}):null},[a,u,p]);return(0,r.jsxs)(h.a,{form:te,trigger:m,autoFocusFirstInput:!0,onFinish:Re,onOpenChange:Fe,layout:"vertical",readonly:a==="read"&&!!u,children:[(0,r.jsx)("div",{className:"h-[20px]"}),Pe]},u||ce.current)}var b=(0,n.forwardRef)(function(a,u){var s=a.actions,m=a.hmTableProps,c=a.createButton,p=a.deleteProps,E=a.detailIdIndex,_=a.renderForm,J=a.requestGetById,oe=a.requestGetByRecord,Me=a.requestAdd,ce=a.requestUpdateById,ye=a.renderFormInstance,fe=(0,n.useRef)(),te=(0,V.TH)();(0,n.useImperativeHandle)(u,function(){return{getActionRef:function(){return fe}}},[fe]);var Re=(0,n.useMemo)(function(){return{renderForm:_,requestGetById:J,requestGetByRecord:oe,requestAdd:Me,requestUpdateById:ce,renderFormInstance:ye}},[_,Me,J,oe,ce,ye]),Fe=(0,n.useCallback)(function(q){return function(){if(p!=null&&p.deleteById)return p.deleteById({id:q.id,ids:[q.id]}).then(function(){var de;(de=fe.current)===null||de===void 0||de.reload()});if(p!=null&&p.deleteByRecord)return p.deleteByRecord(q).then(function(){var de;(de=fe.current)===null||de===void 0||de.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[p]),Pe=(0,n.useCallback)(function(){var q;(q=fe.current)===null||q===void 0||q.reload()},[]),Be=(0,n.useMemo)(function(){var q={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(Ke,L){return(0,r.jsxs)(Ue.Z,{children:[s.includes("read")&&(0,r.jsx)(F,l()({id:L.id,record:L,onSuccess:Pe,trigger:(0,r.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},Re),"read"+L.id),s.includes("read_detail")&&(0,r.jsx)(x.rU,{to:"".concat(te.pathname,"/detail/").concat(L[E||"id"]),children:"\u67E5\u770B"}),s.includes("update")&&(0,r.jsx)(F,l()({id:L.id,record:L,onSuccess:Pe,trigger:(0,r.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},Re),"update"+L.id),s.includes("delete")&&p&&(0,r.jsx)(H,{name:L[p.nameIndex],desc:p.desc,onDelete:Fe(L)})]})}};return s.includes("read")||s.includes("read_detail")||s.includes("update")||s.includes("delete")?[].concat(o()(m.hmColumns||m.columns||[]),[q]):m.hmColumns},[s,p,E,Re,Fe,Pe,m.columns,m.hmColumns,te.pathname]);return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(U,l()(l()({rowKey:"id"},m),{},{scroll:P(Be),actionRef:fe,toolBarRender:function(){return[].concat(o()(m.toolBarRender?m.toolBarRender.apply(m,arguments):[]),[s.includes("create")&&(0,r.jsx)(F,l()({onSuccess:Pe,trigger:c,action:"create"},Re),"create")])},search:l()({layout:"vertical",defaultCollapsed:!1},m.search),hmColumns:Be}))})}),D=e(39935),B=e(53213);function f(t){var a=t.initialValue,u=t.type,s=t.data,m=t.column,c=t.all,p=(0,n.useMemo)(function(){return u==="table"&&c?[c].concat(o()(s)):s},[c,s,u]);return u==="table"?(0,r.jsx)(D.Z,{name:m.dataIndex,options:p,initialValue:a===void 0&&c?c.value:a,allowClear:!1}):null}function g(t){var a=t.all,u=t.request,s=t.useRequestOptions,m=t.initialValue,c=(0,B.Z)(function(){return u()},s),p=c.data,E=p===void 0?[]:p,_=m===void 0&&a?a.value:m,J=(0,n.useMemo)(function(){var ce={};return E.forEach(function(ye){ce[ye.value]={text:ye.label}}),ce},[E]),oe=(0,n.useCallback)(function(ce){return l()(l()({},ce),{},{valueEnum:J,renderFormItem:function(fe,te){var Re=te.type;return(0,r.jsx)(f,{type:Re,data:E,column:ce,all:a,initialValue:_})}})},[a,E,_,J]),Me={options:E};return{selectColumn:oe,proFormSelectProps:Me}}function w(t){var a=(0,n.useMemo)(function(){return t({type:"table"})},[t]),u=(0,n.useMemo)(function(){return t({type:"detail"})},[t]),s=g(a),m=g(u);return{tableCURDSelect:s,detailCURDSelect:m}}var d=e(13194),ee=e(28026),ae=e.n(ee),Ee=["hmItems","items"];function se(t){var a=t.hmItems,u=t.items,s=C()(t,Ee),m=(0,n.useMemo)(function(){return a?a.map(function(c){var p=c.children;return c.children!==null&&c.children!==void 0&&(c.valueType==="date"?p=ae()(p).format("YYYY-MM-DD"):c.valueType==="dateTime"?p=ae()(p).format("YYYY-MM-DD HH:mm:ss"):c.valueType==="time"&&(p=ae()(p).format("HH:mm:ss"))),l()(l()({},c),{},{children:p||"-"})}):u},[a,u]);return(0,r.jsx)(d.Z,l()({items:m},s))}var De=e(34019),xe=e(65273),X=e(59590),ne=e(32479),z={width:"100%",height:"100%"};function K(t){var a=t.value,u=t.onChange,s=t.readonly;return(0,r.jsx)(De.ZP,{style:z,mode:"javascript",theme:"monokai",value:a,onChange:u,readOnly:s,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var j=e(46182);function Z(t){var a=t.value,u=t.onChange,s=t.readonly,m=(0,n.useRef)(null),c=(0,n.useRef)(null),p=(0,n.useRef)(u);return(0,n.useEffect)(function(){var E;(E=c.current)===null||E===void 0||E.update({text:a||""})},[a]),(0,n.useEffect)(function(){c.current=new j.q9({target:m.current,props:{mode:j.AR.text,readOnly:s,content:{text:a||""},onChange:function(_){p.current(_.text)}}})},[]),(0,r.jsx)("div",{ref:m,className:"h-full w-full"})}var W=e(70876),ie=e(51709),ke=["children","className","node"];function Se(t){var a=t.value;return(0,r.jsx)(W.U,{unwrapDisallowed:!0,components:{code:function(s){var m=s.children,c=s.className,p=s.node,E=C()(s,ke),_=/language-(\w+)/.exec(c||"");return _?(0,r.jsx)(ie.Z,l()(l()({},E),{},{PreTag:"div",wrapLongLines:!0,children:String(m).replace(/\n$/,""),language:_[1].toLowerCase()})):(0,r.jsx)("code",l()(l()({},E),{},{className:c,children:m}))}},children:a||""})}var Oe=e(55860),ge=e(32732),he=e(43472);function Ce(t){var a=t.value,u=t.onChange,s=function(p){return u==null||u(p),!1},m=function(){u==null||u(void 0)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ge.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:a?[a]:void 0,beforeUpload:s,onRemove:m,children:(0,r.jsx)(he.ZP,{icon:(0,r.jsx)(Oe.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var Ie=e(39106),Te=["value","onChange"];function me(t){var a=t.value,u=t.onChange,s=C()(t,Te);return(0,r.jsx)(Ie.Z,l()(l()({},s),{},{value:!!a,onChange:function(c){return u==null?void 0:u(Number(c))}}))}var pe=e(64934),$e=e(65124),ve=function(a){return function(u,s,m){var c=(0,$e.mW)(a);return c(u,s,m)}},He=ve,be=function(a){return a?(0,pe.Ue)()(He(a)):function(u){return(0,pe.Ue)()(He(u))}},je=e(82092),Le=e.n(je),Ge=e(81447),Ae=function(t){return t.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",t}(Ae||{}),we=Le()({},Ae.CustomDateTimeAndDateRange,{render:function(a){return(0,r.jsx)("div",{children:a?ae()(parseInt(a)).format("YYYY-MM-DD HH:mm:ss"):"-"})},renderFormItem:function(a,u){return(0,r.jsx)(Ge.Z,l()({},u))}})},96595:function(le,v,e){e.r(v),e.d(v,{texts:function(){return o}});var re=e(14625);const o=[{value:`// commitlint.config.js
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
