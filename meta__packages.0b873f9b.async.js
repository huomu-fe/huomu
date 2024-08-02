"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(de,v,e){e.r(v),e.d(v,{demos:function(){return se}});var ae=e(59496),o=e(14625),se={}},58229:function(de,v,e){e.r(v),e.d(v,{demos:function(){return A}});var ae=e(90228),o=e.n(ae),se=e(26068),l=e.n(se),Ce=e(87999),n=e.n(Ce),Z=e(59496),j=e(73134),A={"curd-demo-0":{component:Z.memo(Z.lazy(n()(o()().mark(function X(){var Y,I,R,M,P,t,$,i,x,E,C,H,z,S,y,k,F,V,f,T;return o()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return f=function(){return f=n()(o()().mark(function c(D){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMUpdateById",D),x=x.map(function(ne){return ne.id===D.id?l()(l()({},ne),D):ne}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},c)})),f.apply(this,arguments)},V=function(c){return f.apply(this,arguments)},F=function(){return F=n()(o()().mark(function c(D){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMAdd",D),x.push(l()({id:x.length+1},D)),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},c)})),F.apply(this,arguments)},k=function(c){return F.apply(this,arguments)},y=function(){return y=n()(o()().mark(function c(D){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMGetById",D),d.abrupt("return",new Promise(function(ne){setTimeout(function(){ne({data:{data:x.find(function(oe){return oe.id===D.id})}})},1e3)}));case 2:case"end":return d.stop()}},c)})),y.apply(this,arguments)},S=function(c){return y.apply(this,arguments)},z=function(){return z=n()(o()().mark(function c(D){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMDeleteById",D),x=x.filter(function(ne){return ne.id!==D.id}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},c)})),z.apply(this,arguments)},H=function(c){return z.apply(this,arguments)},C=function(){return C=n()(o()().mark(function c(D){return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMRequest",D),d.abrupt("return",new Promise(function(ne){setTimeout(function(){ne({data:{data:x,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return d.stop()}},c)})),C.apply(this,arguments)},E=function(c){return C.apply(this,arguments)},g.next=12,Promise.resolve().then(e.bind(e,25645));case 12:return Y=g.sent,I=Y.CURD,g.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return R=g.sent,M=R.range,g.next=20,Promise.resolve().then(e.bind(e,77623));case 20:return P=g.sent,t=P.Button,g.next=24,Promise.resolve().then(e.bind(e,5765));case 24:return $=g.sent,i=$.ProFormText,x=M(10).map(function(B){return{id:"".concat(B),name:"name-".concat(B),address:"address-".concat(B)}}),T=function(){var c=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return Z.createElement(I,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:c,hmRequest:E},createButton:Z.createElement(t,{type:"primary"},"\u65B0\u5EFA"),deleteProps:{nameIndex:"name",deleteById:H},renderForm:function(W){return Z.createElement(Z.Fragment,null,Z.createElement(i,l()(l()({},W),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),Z.createElement(i,l()(l()({},W),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:S,requestAdd:k,requestUpdateById:V})},g.abrupt("return",{default:T});case 29:case"end":return g.stop()}},X)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var X=n()(o()().mark(function I(){var R,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,M));case 3:case"end":return t.stop()}},I)}));function Y(){return X.apply(this,arguments)}return Y}()}},"curd-demo-1":{component:Z.memo(Z.lazy(n()(o()().mark(function X(){var Y,I,R,M,P,t,$,i;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return $=function(){return $=n()(o()().mark(function H(z){return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("fakeHMRequest",z),y.abrupt("return",new Promise(function(k){setTimeout(function(){k({data:{data:P,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return y.stop()}},H)})),$.apply(this,arguments)},t=function(H){return $.apply(this,arguments)},E.next=4,Promise.resolve().then(e.bind(e,25645));case 4:return Y=E.sent,I=Y.CURD,E.next=8,Promise.resolve().then(e.bind(e,38548));case 8:return R=E.sent,M=R.range,P=M(10).map(function(C){return{id:"".concat(C),name:"name-".concat(C),age:C,address:"address-".concat(C)}}),i=function(){var H=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return Z.createElement(I,{actions:["read_detail"],hmTableProps:{hmColumns:H,hmRequest:t}})},E.abrupt("return",{default:i});case 13:case"end":return E.stop()}},X)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548)},renderOpts:{compile:function(){var X=n()(o()().mark(function I(){var R,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,M));case 3:case"end":return t.stop()}},I)}));function Y(){return X.apply(this,arguments)}return Y}()}},"curd-demo-2":{component:Z.memo(Z.lazy(n()(o()().mark(function X(){var Y,I,R,M,P,t,$,i,x,E,C,H;return o()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return C=function(){return C=n()(o()().mark(function k(F){return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return console.log("fakeHMRequest",F),f.abrupt("return",new Promise(function(T){setTimeout(function(){T({data:{data:x,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return f.stop()}},k)})),C.apply(this,arguments)},E=function(k){return C.apply(this,arguments)},S.next=4,Promise.resolve().then(e.t.bind(e,59496,19));case 4:return Y=S.sent,I=Y.useRef,S.next=8,Promise.resolve().then(e.bind(e,25645));case 8:return R=S.sent,M=R.CURD,S.next=12,Promise.resolve().then(e.bind(e,38548));case 12:return P=S.sent,t=P.range,S.next=16,Promise.resolve().then(e.bind(e,77623));case 16:return $=S.sent,i=$.Button,x=t(10).map(function(y){return{id:"".concat(y),name:"name-".concat(y),age:y,address:"address-".concat(y)}}),H=function(){var k=I(),F=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return Z.createElement("div",null,Z.createElement(i,{onClick:function(){var f;return(f=k.current.getActionRef().current)===null||f===void 0?void 0:f.reload()}},"reload"),Z.createElement(M,{actions:[],ref:k,hmTableProps:{hmColumns:F,hmRequest:E}}))},S.abrupt("return",{default:H});case 21:case"end":return S.stop()}},X)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623)},renderOpts:{compile:function(){var X=n()(o()().mark(function I(){var R,M=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(545).then(e.bind(e,71545));case 2:return t.abrupt("return",(R=t.sent).default.apply(R,M));case 3:case"end":return t.stop()}},I)}));function Y(){return X.apply(this,arguments)}return Y}()}}}},15278:function(de,v,e){e.r(v),e.d(v,{demos:function(){return Y}});var ae=e(48305),o=e.n(ae),se=e(26068),l=e.n(se),Ce=e(90228),n=e.n(Ce),Z=e(87999),j=e.n(Z),A=e(59496),X=e(13720),Y={"use_curd_select-demo-0":{component:A.memo(A.lazy(j()(n()().mark(function I(){var R,M,P,t,$,i,x,E,C,H,z;return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return H=function(){return H=j()(n()().mark(function F(V){var f;return n()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return console.log("fakeHMRequest",V),f=i,V.city&&(f=f.filter(function(g){return g.city===V.city})),L.abrupt("return",new Promise(function(g){setTimeout(function(){g({data:{data:f,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return L.stop()}},F)})),H.apply(this,arguments)},C=function(F){return H.apply(this,arguments)},E=function(){return E=j()(n()().mark(function F(){return n()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return f.stop()}},F)})),E.apply(this,arguments)},x=function(){return E.apply(this,arguments)},y.next=6,Promise.resolve().then(e.bind(e,25645));case 6:return R=y.sent,M=R.CURD,P=R.useCURDSelect,y.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return t=y.sent,$=t.range,i=$(5).map(function(k){return{id:"".concat(k),name:"name-".concat(k),city:void 0}}),i[0].city="\u5E7F\u5DDE",i[1].city="\u6DF1\u5733",z=function(){var F=P({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var f=j()(n()().mark(function L(){var g;return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,x();case 2:return g=c.sent,c.abrupt("return",g.map(function(D){return{label:D,value:D}})||[]);case 4:case"end":return c.stop()}},L)}));function T(){return f.apply(this,arguments)}return T}()}),V=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},F.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return A.createElement(M,{actions:[],hmTableProps:{hmColumns:V,hmRequest:C}})},y.abrupt("return",{default:z});case 18:case"end":return y.stop()}},I)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548)},renderOpts:{compile:function(){var I=j()(n()().mark(function M(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},M)}));function R(){return I.apply(this,arguments)}return R}()}},"use_curd_select-demo-1":{component:A.memo(A.lazy(j()(n()().mark(function I(){var R,M,P,t,$,i,x,E,C,H,z,S,y,k,F,V;return n()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return F=function(){return F=j()(n()().mark(function g(B){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return console.log("fakeHMGetById",B),D.abrupt("return",new Promise(function(W){setTimeout(function(){W({data:{data:C.find(function(d){return d.id===B.id})}})},1e3)}));case 2:case"end":return D.stop()}},g)})),F.apply(this,arguments)},k=function(g){return F.apply(this,arguments)},y=function(){return y=j()(n()().mark(function g(B){var c;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return console.log("fakeHMRequest",B),c=C,B.city&&(c=c.filter(function(d){return d.city===B.city})),W.abrupt("return",new Promise(function(d){setTimeout(function(){d({data:{data:c,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return W.stop()}},g)})),y.apply(this,arguments)},S=function(g){return y.apply(this,arguments)},z=function(){return z=j()(n()().mark(function g(){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return c.stop()}},g)})),z.apply(this,arguments)},H=function(){return z.apply(this,arguments)},T.next=8,Promise.resolve().then(e.bind(e,25645));case 8:return R=T.sent,M=R.CURD,P=R.useCURDSelects,T.next=13,Promise.resolve().then(e.bind(e,38548));case 13:return t=T.sent,$=t.range,T.next=17,Promise.resolve().then(e.bind(e,5765));case 17:return i=T.sent,x=i.ProFormText,E=i.ProFormSelect,C=$(5).map(function(L){return{id:"".concat(L),name:"name-".concat(L),city:void 0}}),C[0].city="\u5E7F\u5DDE",C[1].city="\u6DF1\u5733",V=function(){var g=P({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var W=j()(n()().mark(function ne(){var oe;return n()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,H();case 2:return oe=le.sent,le.abrupt("return",oe.map(function(pe){return{label:pe,value:pe}})||[]);case 4:case"end":return le.stop()}},ne)}));function d(){return W.apply(this,arguments)}return d}()}),B=g.tableCURDSelect,c=g.detailCURDSelect,D=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},B.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return A.createElement(M,{actions:["read"],hmTableProps:{hmColumns:D,hmRequest:S},renderForm:function(d){return A.createElement(A.Fragment,null,A.createElement(x,l()(l()({},d),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),A.createElement(x,l()(l()({},d),{},{name:"age",label:" \u5E74\u9F84",required:!0})),A.createElement(E,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},c.proFormSelectProps)))},requestGetById:k})},T.abrupt("return",{default:V});case 25:case"end":return T.stop()}},I)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelects } from '@huomu/core';
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
  const { tableCURDSelect, detailCURDSelect } = useCURDSelects({
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(25645),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var I=j()(n()().mark(function M(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},M)}));function R(){return I.apply(this,arguments)}return R}()}},"use_curd_select-demo-2":{component:A.memo(A.lazy(j()(n()().mark(function I(){var R,M,P,t,$,i,x,E,C,H,z,S,y,k,F,V,f,T,L,g,B,c,D,W,d,ne,oe,Be,le,pe,Ue;return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return pe=function(G){var O=G.formInstance,b=z.useWatch("city",O),N=$({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var te=j()(n()().mark(function De(){var ce;return n()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,T();case 2:return ce=ue.sent,ue.abrupt("return",ce.map(function(ge){return{label:ge,value:ge}})||[]);case 4:case"end":return ue.stop()}},De)}));function Re(){return te.apply(this,arguments)}return Re}()}),w=$({initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var te=j()(n()().mark(function De(){var ce;return n()().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,g({city:b});case 2:return ce=ue.sent,ue.abrupt("return",ce.map(function(ge){return{label:ge,value:ge}})||[]);case 4:case"end":return ue.stop()}},De)}));function Re(){return te.apply(this,arguments)}return Re}(),useRequestOptions:{refreshDeps:[b]}});return{citySelect:N,areaSelect:w}},le=function(){return le=j()(n()().mark(function G(O){return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return console.log("fakeHMUpdateById",O),f=f.map(function(w){return w.id===O.id?l()(l()({},w),O):w}),N.abrupt("return",Promise.resolve({}));case 3:case"end":return N.stop()}},G)})),le.apply(this,arguments)},Be=function(G){return le.apply(this,arguments)},oe=function(){return oe=j()(n()().mark(function G(O){return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return console.log("fakeHMAdd",O),f.push(l()({id:f.length+1},O)),N.abrupt("return",Promise.resolve({}));case 3:case"end":return N.stop()}},G)})),oe.apply(this,arguments)},ne=function(G){return oe.apply(this,arguments)},d=function(){return d=j()(n()().mark(function G(O){return n()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return console.log("fakeHMGetById",O),N.abrupt("return",new Promise(function(w){setTimeout(function(){w({data:{data:f.find(function(te){return te.id===O.id})}})},1e3)}));case 2:case"end":return N.stop()}},G)})),d.apply(this,arguments)},W=function(G){return d.apply(this,arguments)},D=function(){return D=j()(n()().mark(function G(O){var b;return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return console.log("fakeHMRequest",O),b=f,O.city&&(b=b.filter(function(te){return te.city===O.city})),O.area&&(b=b.filter(function(te){return te.area===O.area})),w.abrupt("return",new Promise(function(te){setTimeout(function(){te({data:{data:b,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return w.stop()}},G)})),D.apply(this,arguments)},c=function(G){return D.apply(this,arguments)},B=function(){return B=j()(n()().mark(function G(O){var b;return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(b=O.city,!b){w.next=3;break}return w.abrupt("return",V[b]);case 3:return w.abrupt("return",F.apply(null,Object.values(V)));case 4:case"end":return w.stop()}},G)})),B.apply(this,arguments)},g=function(G){return B.apply(this,arguments)},L=function(){return L=j()(n()().mark(function G(){return n()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object.keys(V));case 1:case"end":return b.stop()}},G)})),L.apply(this,arguments)},T=function(){return L.apply(this,arguments)},_.next=15,Promise.resolve().then(e.t.bind(e,59496,19));case 15:return R=_.sent,M=R.useRef,_.next=19,Promise.resolve().then(e.bind(e,25645));case 19:return P=_.sent,t=P.CURD,$=P.useCURDSelect,_.next=24,Promise.resolve().then(e.bind(e,38548));case 24:return i=_.sent,x=i.range,_.next=28,Promise.resolve().then(e.bind(e,77623));case 28:return E=_.sent,C=E.Button,_.next=32,Promise.resolve().then(e.bind(e,5765));case 32:return H=_.sent,z=H.ProForm,S=H.ProFormText,y=H.ProFormSelect,_.next=38,Promise.resolve().then(e.bind(e,38548));case 38:return k=_.sent,F=k.union,V={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},f=x(5).map(function(q){return{id:"".concat(q),name:"name-".concat(q),city:void 0,area:void 0}}),f[0].city="\u5E7F\u5DDE",f[1].area="\u5357\u5C71",f[2].city="\u6DF1\u5733",f[2].area="\u798F\u7530",Ue=function(){var G=M(),O=pe({formInstance:G.current}),b=z.useForm(),N=o()(b,1),w=N[0],te=pe({formInstance:w}),Re=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},O.citySelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),O.areaSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return A.createElement(t,{actions:["create","read","update"],hmTableProps:{formRef:G,hmColumns:Re,hmRequest:c},createButton:A.createElement(C,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(ce){return A.createElement(A.Fragment,null,A.createElement(S,l()(l()({},ce),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),A.createElement(S,l()(l()({},ce),{},{name:"age",label:" \u5E74\u9F84",required:!0})),A.createElement(y,l()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},te.citySelect.proFormSelectProps)),A.createElement(y,l()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},te.areaSelect.proFormSelectProps)))},renderFormInstance:w,requestGetById:W,requestAdd:ne,requestUpdateById:Be})},_.abrupt("return",{default:Ue});case 48:case"end":return _.stop()}},I)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-2",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(25645),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var I=j()(n()().mark(function M(){var P,t=arguments;return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(545).then(e.bind(e,71545));case 2:return i.abrupt("return",(P=i.sent).default.apply(P,t));case 3:case"end":return i.stop()}},M)}));function R(){return I.apply(this,arguments)}return R}()}}}},75725:function(de,v,e){e.r(v),e.d(v,{demos:function(){return se}});var ae=e(59496),o=e(62545),se={}},86946:function(de,v,e){e.r(v),e.d(v,{demos:function(){return se}});var ae=e(59496),o=e(61865),se={}},98536:function(de,v,e){e.r(v),e.d(v,{demos:function(){return se}});var ae=e(59496),o=e(39656),se={}},25645:function(de,v,e){e.r(v),e.d(v,{CURD:function(){return L},CURDDetail:function(){return T},EditorJSON:function(){return b},EditorJavascript:function(){return G},EditorMarkdown:function(){return Re},FileUpload:function(){return ue},HMDescriptions:function(){return le},HMTable:function(){return E},NumberSwitch:function(){return Oe},OperateDelete:function(){return S},createStore:function(){return xe},getTableScroll:function(){return C},useCURDSelect:function(){return D},useCURDSelects:function(){return W},useDelete:function(){return z}});var ae=e(15558),o=e.n(ae),se=e(26068),l=e.n(se),Ce=e(35990),n=e(59496),Z=e(5791),j=e(33553),A=e(90228),X=e.n(A),Y=e(67825),I=e.n(Y),R=e(87999),M=e.n(R),P=e(3737),t=e(4637),$=["current","pageSize"],i=["hmRequest","request","hmColumns","columns","rowKey"];function x(r){return function(){var a=M()(X()().mark(function u(s){var h,m,p,U;return X()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return h=s.current,m=s.pageSize,p=I()(s,$),J.next=3,r(l()({page:h,pageSize:m},p));case 3:return U=J.sent,J.abrupt("return",{data:U.data.data,success:U.data.success,total:U.data.totalSize});case 5:case"end":return J.stop()}},u)}));return function(u){return a.apply(this,arguments)}}()}function E(r){var a=r.hmRequest,u=r.request,s=r.hmColumns,h=r.columns,m=r.rowKey,p=m===void 0?"id":m,U=I()(r,i),ee=(0,n.useCallback)(function(ie){return a?x(a)(ie):u(ie,{},{})},[a,u]),J=(0,n.useMemo)(function(){return s?s.map(function(ie){return l()({search:!1},ie)}):h},[h,s]);return(0,t.jsx)(P.Z,l()({cardBordered:!0,rowKey:p,pagination:l()({showSizeChanger:!0,showQuickJumper:!0},U.pagination),options:!1,request:ee,columns:J},U))}function C(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,u={x:0,y:void 0};return r==null||r.forEach(function(s){s.hideInTable||(u.x+=Number(s.width)||a)}),u}var H=e(37082);function z(r){var a=r.name,u=r.desc,s=r.onDelete,h=(0,n.useCallback)(function(){H.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return{doDelete:h}}function S(r){var a=r.name,u=r.desc,s=r.onDelete,h=(0,n.useCallback)(function(){H.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(a,"\u201D \u5417\uFF1F"),content:u||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s()}})},[a,u,s]);return(0,t.jsx)("a",{style:{color:"red"},onClick:h,children:"\u5220\u9664"})}var y=e(48305),k=e.n(y),F=e(67046),V=e(22109),f=e(80671);function T(r){var a=r.action,u=r.id,s=r.record,h=r.trigger,m=r.onSuccess,p=r.renderForm,U=r.requestGetById,ee=r.requestGetByRecord,J=r.requestAdd,ie=r.requestUpdateById,Ie=r.renderFormInstance,fe=(0,n.useRef)(""+Math.random()),ve=V.A.useForm(Ie),he=k()(ve,1),re=he[0],ye=(0,n.useCallback)(function(){var Pe=M()(X()().mark(function Q(me){return X()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:if(K.prev=0,!(a==="create"&&J)){K.next=5;break}return K.next=4,J(me);case 4:F.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(a==="update"&&ie)){K.next=9;break}return K.next=8,ie(l()(l()({},me),{},{id:u}));case 8:F.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return m==null||m(),K.abrupt("return",!0);case 13:K.prev=13,K.t0=K.catch(0),setTimeout(function(){throw K.t0},10);case 16:case"end":return K.stop()}},Q,null,[[0,13]])}));return function(Q){return Pe.apply(this,arguments)}}(),[a,m,J,ie,u]),Ee=(0,n.useCallback)(function(Pe){if(Pe&&(re==null||re.resetFields(),u)){if(U)return U({id:u}).then(function(Q){re==null||re.setFieldsValue(Q.data.data)});if(ee)return ee(s).then(function(Q){re==null||re.setFieldsValue(Q.data.data)})}},[re,u,U,ee,s]),Me=(0,n.useMemo)(function(){return p?p({readonly:a==="read"&&!!u},{action:a}):null},[a,u,p]);return(0,t.jsxs)(f.a,{form:re,trigger:h,autoFocusFirstInput:!0,onFinish:ye,onOpenChange:Ee,layout:"vertical",readonly:a==="read"&&!!u,children:[(0,t.jsx)("div",{className:"h-[20px]"}),Me]},u||fe.current)}var L=(0,n.forwardRef)(function(a,u){var s=a.actions,h=a.hmTableProps,m=a.createButton,p=a.deleteProps,U=a.detailIdIndex,ee=a.renderForm,J=a.requestGetById,ie=a.requestGetByRecord,Ie=a.requestAdd,fe=a.requestUpdateById,ve=a.renderFormInstance,he=(0,n.useRef)(),re=(0,Z.TH)();(0,n.useImperativeHandle)(u,function(){return{getActionRef:function(){return he}}},[he]);var ye=(0,n.useMemo)(function(){return{renderForm:ee,requestGetById:J,requestGetByRecord:ie,requestAdd:Ie,requestUpdateById:fe,renderFormInstance:ve}},[ee,Ie,J,ie,fe,ve]),Ee=(0,n.useCallback)(function(Q){return function(){if(p!=null&&p.deleteById)return p.deleteById({id:Q.id,ids:[Q.id]}).then(function(){var me;(me=he.current)===null||me===void 0||me.reload()});if(p!=null&&p.deleteByRecord)return p.deleteByRecord(Q).then(function(){var me;(me=he.current)===null||me===void 0||me.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[p]),Me=(0,n.useCallback)(function(){var Q;(Q=he.current)===null||Q===void 0||Q.reload()},[]),Pe=(0,n.useMemo)(function(){var Q={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(be,K){return(0,t.jsxs)(Ce.Z,{children:[s.includes("read")&&(0,t.jsx)(T,l()({id:K.id,record:K,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},ye),"read"+K.id),s.includes("read_detail")&&(0,t.jsx)(j.rU,{to:"".concat(re.pathname,"/detail/").concat(K[U||"id"]),children:"\u67E5\u770B"}),s.includes("update")&&(0,t.jsx)(T,l()({id:K.id,record:K,onSuccess:Me,trigger:(0,t.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},ye),"update"+K.id),s.includes("delete")&&p&&(0,t.jsx)(S,{name:K[p.nameIndex],desc:p.desc,onDelete:Ee(K)})]})}};return s.includes("read")||s.includes("read_detail")||s.includes("update")||s.includes("delete")?[].concat(o()(h.hmColumns||h.columns||[]),[Q]):h.hmColumns},[s,p,U,ye,Ee,Me,h.columns,h.hmColumns,re.pathname]);return(0,t.jsx)("div",{className:"",children:(0,t.jsx)(E,l()(l()({rowKey:"id"},h),{},{scroll:C(Pe),actionRef:he,toolBarRender:function(){return[].concat(o()(h.toolBarRender?h.toolBarRender.apply(h,arguments):[]),[s.includes("create")&&(0,t.jsx)(T,l()({onSuccess:Me,trigger:m,action:"create"},ye),"create")])},search:l()({layout:"vertical",defaultCollapsed:!1},h.search),hmColumns:Pe}))})}),g=e(39935),B=e(53213);function c(r){var a=r.initialValue,u=r.type,s=r.data,h=r.column,m=r.all,p=(0,n.useMemo)(function(){return u==="table"&&m?[m].concat(o()(s)):s},[m,s,u]);return u==="table"?(0,t.jsx)(g.Z,{name:h.dataIndex,options:p,initialValue:a===void 0&&m?m.value:a}):null}function D(r){var a=r.all,u=r.request,s=r.useRequestOptions,h=r.initialValue,m=(0,B.Z)(function(){return u()},s),p=m.data,U=p===void 0?[]:p,ee=h===void 0&&a?a.value:h,J=(0,n.useMemo)(function(){var fe={};return U.forEach(function(ve){fe[ve.value]={text:ve.label}}),fe},[U]),ie=(0,n.useCallback)(function(fe){return l()(l()({},fe),{},{valueEnum:J,renderFormItem:function(he,re){var ye=re.type;return(0,t.jsx)(c,{type:ye,data:U,column:fe,all:a,initialValue:ee})}})},[a,U,ee,J]),Ie={options:U};return{selectColumn:ie,proFormSelectProps:Ie}}function W(r){var a=D(r),u=D(r);return{tableCURDSelect:a,detailCURDSelect:u}}var d=e(13194),ne=e(28026),oe=e.n(ne),Be=["hmItems","items"];function le(r){var a=r.hmItems,u=r.items,s=I()(r,Be),h=(0,n.useMemo)(function(){return a?a.map(function(m){var p=m.children;return m.children!==null&&m.children!==void 0&&(m.valueType==="date"?p=oe()(p).format("YYYY-MM-DD"):m.valueType==="dateTime"?p=oe()(p).format("YYYY-MM-DD HH:mm:ss"):m.valueType==="time"&&(p=oe()(p).format("HH:mm:ss"))),l()(l()({},m),{},{children:p||"-"})}):u},[a,u]);return(0,t.jsx)(d.Z,l()({items:h},s))}var pe=e(34019),Ue=e(65273),Fe=e(59590),_=e(32479),q={width:"100%",height:"100%"};function G(r){var a=r.value,u=r.onChange,s=r.readonly;return(0,t.jsx)(pe.ZP,{style:q,mode:"javascript",theme:"monokai",value:a,onChange:u,readOnly:s,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var O=e(46182);function b(r){var a=r.value,u=r.onChange,s=r.readonly,h=(0,n.useRef)(null),m=(0,n.useRef)(null),p=(0,n.useRef)(u);return(0,n.useEffect)(function(){var U;(U=m.current)===null||U===void 0||U.update({text:a||""})},[a]),(0,n.useEffect)(function(){m.current=new O.q9({target:h.current,props:{mode:O.AR.text,readOnly:s,content:{text:a||""},onChange:function(ee){p.current(ee.text)}}})},[]),(0,t.jsx)("div",{ref:h,className:"h-full w-full"})}var N=e(70876),w=e(51709),te=["children","className","node"];function Re(r){var a=r.value;return(0,t.jsx)(N.U,{unwrapDisallowed:!0,components:{code:function(s){var h=s.children,m=s.className,p=s.node,U=I()(s,te),ee=/language-(\w+)/.exec(m||"");return ee?(0,t.jsx)(w.Z,l()(l()({},U),{},{PreTag:"div",wrapLongLines:!0,children:String(h).replace(/\n$/,""),language:ee[1].toLowerCase()})):(0,t.jsx)("code",l()(l()({},U),{},{className:m,children:h}))}},children:a||""})}var De=e(55860),ce=e(32732),Se=e(43472);function ue(r){var a=r.value,u=r.onChange,s=function(p){return u==null||u(p),!1},h=function(){u==null||u(void 0)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(ce.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:a?[a]:void 0,beforeUpload:s,onRemove:h,children:(0,t.jsx)(Se.ZP,{icon:(0,t.jsx)(De.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var ge=e(39106),Te=["value","onChange"];function Oe(r){var a=r.value,u=r.onChange,s=I()(r,Te);return(0,t.jsx)(ge.Z,l()(l()({},s),{},{value:!!a,onChange:function(m){return u==null?void 0:u(Number(m))}}))}var He=e(64934),Ae=e(65124),$e=function(a){return function(u,s,h){var m=(0,Ae.mW)(a);return m(u,s,h)}},ke=$e,xe=function(a){return a?(0,He.Ue)()(ke(a)):function(u){return(0,He.Ue)()(ke(u))}}},96595:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(14625);const o=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(73134);const o=[{value:"\u9700\u8981\u4E86\u89E3 ant pro-components",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u70B9\u51FB\u67E5\u770B\uFF0C\u5728 url \u4E0A\u6DFB\u52A0 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:4,tocIndex:3}]},40760:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(13720);const o=[{value:"import { useCURDSelect, useCURDSelects } from '@huomu/core';",paraId:0,tocIndex:0},{value:"curd select \u7EC4\u4EF6\uFF0C\u6709",paraId:1,tocIndex:0},{value:"table \u7684 column",paraId:2,tocIndex:0},{value:"form \u7684 ProFormSelect",paraId:2,tocIndex:0},{value:"table detail \u7684\u6570\u636E\u5E94\u8BE5\u662F\u72EC\u7ACB\u7684\uFF0C\u6240\u4EE5\u7528 useCURDSelect \u6CA1\u6CD5\uFF0C\u56E0\u6B64\u6709 useCURDSelects",paraId:3,tocIndex:2},{value:"\u57CE\u5E02\u548C\u533A\u57DF\u8054\u52A8",paraId:4,tocIndex:3}]},9836:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(62545);const o=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(61865);const o=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(de,v,e){e.r(v),e.d(v,{texts:function(){return o}});var ae=e(39656);const o=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
