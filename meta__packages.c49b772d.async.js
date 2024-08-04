"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(re,h,e){e.r(h),e.d(h,{demos:function(){return ee}});var Q=e(59496),y=e(14625),ee={}},58229:function(re,h,e){e.r(h),e.d(h,{demos:function(){return E}});var Q=e(90228),y=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(87999),u=e.n(Ee),D=e(59496),B=e(73134),E={"curd-demo-0":{component:D.memo(D.lazy(u()(y()().mark(function Re(){var ue,K,P,b,k,M,o,v,z,X,L,W,$,ae,F,_,A,j;return y()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return A=function(){return A=u()(y()().mark(function f(R){return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMUpdateById",R),o=o.map(function(U){return U.id===R.id?s()(s()({},U),R):U}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),A.apply(this,arguments)},_=function(f){return A.apply(this,arguments)},F=function(){return F=u()(y()().mark(function f(R){return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMAdd",R),o.push(s()({id:o.length+1},R)),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),F.apply(this,arguments)},ae=function(f){return F.apply(this,arguments)},$=function(){return $=u()(y()().mark(function f(R){return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMGetById",R),d.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:o.find(function(G){return G.id===R.id})}})},1e3)}));case 2:case"end":return d.stop()}},f)})),$.apply(this,arguments)},W=function(f){return $.apply(this,arguments)},L=function(){return L=u()(y()().mark(function f(R){return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMDeleteById",R),o=o.filter(function(U){return U.id!==R.id}),d.abrupt("return",Promise.resolve({}));case 3:case"end":return d.stop()}},f)})),L.apply(this,arguments)},X=function(f){return L.apply(this,arguments)},z=function(){return z=u()(y()().mark(function f(R){return y()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMRequest",R),d.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:o,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return d.stop()}},f)})),z.apply(this,arguments)},v=function(f){return z.apply(this,arguments)},I.next=12,Promise.resolve().then(e.bind(e,87818));case 12:return ue=I.sent,K=ue.CURD,I.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return P=I.sent,b=P.range,I.next=20,Promise.resolve().then(e.bind(e,5765));case 20:return k=I.sent,M=k.ProFormText,o=b(10).map(function(c){return{id:"".concat(c),name:"name-".concat(c),address:"address-".concat(c)}}),j=function(){var f=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return D.createElement(K,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:f,hmRequest:v},deleteProps:{nameIndex:"name",deleteById:X},renderForm:function(p){return D.createElement(D.Fragment,null,D.createElement(M,s()(s()({},p),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),D.createElement(M,s()(s()({},p),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:W,requestAdd:ae,requestUpdateById:_})},I.abrupt("return",{default:j});case 25:case"end":return I.stop()}},Re)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.1"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var Re=u()(y()().mark(function K(){var P,b=arguments;return y()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,e.e(545).then(e.bind(e,71545));case 2:return M.abrupt("return",(P=M.sent).default.apply(P,b));case 3:case"end":return M.stop()}},K)}));function ue(){return Re.apply(this,arguments)}return ue}()}}}},15278:function(re,h,e){e.r(h),e.d(h,{demos:function(){return ue}});var Q=e(48305),y=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(90228),u=e.n(Ee),D=e(87999),B=e.n(D),E=e(59496),Re=e(13720),ue={"use_curd_select-demo-0":{component:E.memo(E.lazy(B()(u()().mark(function K(){var P,b,k,M,o,v,z,X,L,W,$;return u()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return W=function(){return W=B()(u()().mark(function A(j){var g;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("fakeHMRequest",j),g=v,j.city&&(g=g.filter(function(f){return f.city===j.city})),c.abrupt("return",new Promise(function(f){setTimeout(function(){f({data:{data:g,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return c.stop()}},A)})),W.apply(this,arguments)},L=function(A){return W.apply(this,arguments)},X=function(){return X=B()(u()().mark(function A(){return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return g.stop()}},A)})),X.apply(this,arguments)},z=function(){return X.apply(this,arguments)},F.next=6,Promise.resolve().then(e.bind(e,87818));case 6:return P=F.sent,b=P.CURD,k=P.useCURDSelect,F.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return M=F.sent,o=M.range,v=o(5).map(function(_){return{id:"".concat(_),name:"name-".concat(_),city:void 0}}),v[0].city="\u5E7F\u5DDE",v[1].city="\u6DF1\u5733",$=function(){var A=k({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var g=B()(u()().mark(function c(){var f;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,z();case 2:return f=p.sent,p.abrupt("return",f.map(function(d){return{label:d,value:d}})||[]);case 4:case"end":return p.stop()}},c)}));function I(){return g.apply(this,arguments)}return I}()}),j=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},A.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),{title:"city2",dataIndex:"city",search:!0,valueType:"select",request:function(){var g=B()(u()().mark(function c(){var f;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,z();case 2:return f=p.sent,p.abrupt("return",f.map(function(d){return{label:d,value:d}})||[]);case 4:case"end":return p.stop()}},c)}));function I(){return g.apply(this,arguments)}return I}()}];return E.createElement(b,{actions:[],hmTableProps:{hmColumns:j,hmRequest:L}})},F.abrupt("return",{default:$});case 18:case"end":return F.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
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
    {
      title: 'city2',
      dataIndex: 'city',
      search: true,
      valueType: 'select',
      request: async () => {
        const res = await fakeRequestCity();

        return (
          res.map((item) => ({
            label: item,
            value: item,
          })) || []
        );
      },
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.1"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548)},renderOpts:{compile:function(){var K=B()(u()().mark(function b(){var k,M=arguments;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(545).then(e.bind(e,71545));case 2:return v.abrupt("return",(k=v.sent).default.apply(k,M));case 3:case"end":return v.stop()}},b)}));function P(){return K.apply(this,arguments)}return P}()}},"use_curd_select-demo-1":{component:E.memo(E.lazy(B()(u()().mark(function K(){var P,b,k,M,o,v,z,X,L,W,$,ae,F,_,A,j;return u()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return A=function(){return A=B()(u()().mark(function f(R){return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("fakeHMGetById",R),d.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:L.find(function(G){return G.id===R.id})}})},1e3)}));case 2:case"end":return d.stop()}},f)})),A.apply(this,arguments)},_=function(f){return A.apply(this,arguments)},F=function(){return F=B()(u()().mark(function f(R){var p;return u()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("fakeHMRequest",R),p=L,R.city&&(p=p.filter(function(G){return G.city===R.city})),U.abrupt("return",new Promise(function(G){setTimeout(function(){G({data:{data:p,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return U.stop()}},f)})),F.apply(this,arguments)},ae=function(f){return F.apply(this,arguments)},$=function(){return $=B()(u()().mark(function f(){return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return p.stop()}},f)})),$.apply(this,arguments)},W=function(){return $.apply(this,arguments)},I.next=8,Promise.resolve().then(e.bind(e,87818));case 8:return P=I.sent,b=P.CURD,k=P.useCURDSelects,I.next=13,Promise.resolve().then(e.bind(e,38548));case 13:return M=I.sent,o=M.range,I.next=17,Promise.resolve().then(e.bind(e,5765));case 17:return v=I.sent,z=v.ProFormText,X=v.ProFormSelect,L=o(5).map(function(c){return{id:"".concat(c),name:"name-".concat(c),city:void 0}}),L[0].city="\u5E7F\u5DDE",L[1].city="\u6DF1\u5733",j=function(){var f=k(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var U=B()(u()().mark(function Ie(){var ce;return u()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,W();case 2:return ce=ne.sent,ne.abrupt("return",ce.map(function(De){return{label:De,value:De}})||[]);case 4:case"end":return ne.stop()}},Ie)}));function G(){return U.apply(this,arguments)}return G}()}}),R=f.tableCURDSelect,p=f.detailCURDSelect,d=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},R.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return E.createElement(b,{actions:["read"],hmTableProps:{hmColumns:d,hmRequest:ae},renderForm:function(G){return E.createElement(E.Fragment,null,E.createElement(z,s()(s()({},G),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),E.createElement(z,s()(s()({},G),{},{name:"age",label:" \u5E74\u9F84",required:!0})),E.createElement(X,s()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},p.proFormSelectProps)))},requestGetById:_})},I.abrupt("return",{default:j});case 25:case"end":return I.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelects } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.1"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var K=B()(u()().mark(function b(){var k,M=arguments;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(545).then(e.bind(e,71545));case 2:return v.abrupt("return",(k=v.sent).default.apply(k,M));case 3:case"end":return v.stop()}},b)}));function P(){return K.apply(this,arguments)}return P}()}},"use_curd_select-demo-2":{component:E.memo(E.lazy(B()(u()().mark(function K(){var P,b,k,M,o,v,z,X,L,W,$,ae,F,_,A,j,g,I,c,f,R,p,d,U,G,Ie,ce,le,ne,De;return u()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return ne=function(){return ne=B()(u()().mark(function w(H){return u()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMUpdateById",H),g=g.map(function(O){return O.id===H.id?s()(s()({},O),H):O}),x.abrupt("return",Promise.resolve({}));case 3:case"end":return x.stop()}},w)})),ne.apply(this,arguments)},le=function(w){return ne.apply(this,arguments)},ce=function(){return ce=B()(u()().mark(function w(H){return u()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMAdd",H),g.push(s()({id:g.length+1},H)),x.abrupt("return",Promise.resolve({}));case 3:case"end":return x.stop()}},w)})),ce.apply(this,arguments)},Ie=function(w){return ce.apply(this,arguments)},G=function(){return G=B()(u()().mark(function w(H){return u()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMGetById",H),x.abrupt("return",new Promise(function(O){setTimeout(function(){O({data:{data:g.find(function(oe){return oe.id===H.id})}})},1e3)}));case 2:case"end":return x.stop()}},w)})),G.apply(this,arguments)},U=function(w){return G.apply(this,arguments)},d=function(){return d=B()(u()().mark(function w(H){var T;return u()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("fakeHMRequest",H),T=g,H.city&&(T=T.filter(function(oe){return oe.city===H.city})),H.area&&(T=T.filter(function(oe){return oe.area===H.area})),O.abrupt("return",new Promise(function(oe){setTimeout(function(){oe({data:{data:T,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return O.stop()}},w)})),d.apply(this,arguments)},p=function(w){return d.apply(this,arguments)},R=function(){return R=B()(u()().mark(function w(H){var T;return u()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(T=H.city,!T){O.next=3;break}return O.abrupt("return",j[T]);case 3:return O.abrupt("return",A.apply(null,Object.values(j)));case 4:case"end":return O.stop()}},w)})),R.apply(this,arguments)},f=function(w){return R.apply(this,arguments)},c=function(){return c=B()(u()().mark(function w(){return u()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",Object.keys(j));case 1:case"end":return T.stop()}},w)})),c.apply(this,arguments)},I=function(){return c.apply(this,arguments)},Z.next=14,Promise.resolve().then(e.t.bind(e,59496,19));case 14:return P=Z.sent,b=P.useRef,Z.next=18,Promise.resolve().then(e.bind(e,87818));case 18:return k=Z.sent,M=k.CURD,o=k.useCURDSelects,Z.next=23,Promise.resolve().then(e.bind(e,38548));case 23:return v=Z.sent,z=v.range,Z.next=27,Promise.resolve().then(e.bind(e,77623));case 27:return X=Z.sent,L=X.Button,Z.next=31,Promise.resolve().then(e.bind(e,5765));case 31:return W=Z.sent,$=W.ProForm,ae=W.ProFormText,F=W.ProFormSelect,Z.next=37,Promise.resolve().then(e.bind(e,38548));case 37:return _=Z.sent,A=_.union,j={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},g=z(5).map(function(Y){return{id:"".concat(Y),name:"name-".concat(Y),city:void 0,area:void 0}}),g[0].city="\u5E7F\u5DDE",g[1].area="\u5357\u5C71",g[2].city="\u6DF1\u5733",g[2].area="\u798F\u7530",De=function(){var w=b(),H=$.useWatch("city",w.current),T=$.useForm(),x=y()(T,1),O=x[0],oe=$.useWatch("city",O),Fe=o(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Ce=B()(u()().mark(function ge(){var Pe;return u()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return ie.next=2,I();case 2:return Pe=ie.sent,ie.abrupt("return",Pe.map(function(pe){return{label:pe,value:pe}})||[]);case 4:case"end":return ie.stop()}},ge)}));function fe(){return Ce.apply(this,arguments)}return fe}()}}),Se=o(function(Ce){var fe=Ce.type,ge=fe==="table"?H:oe;return{initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Pe=B()(u()().mark(function ie(){var pe;return u()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,f({city:ge});case 2:return pe=he.sent,he.abrupt("return",pe.map(function(ke){return{label:ke,value:ke}})||[]);case 4:case"end":return he.stop()}},ie)}));function He(){return Pe.apply(this,arguments)}return He}(),useRequestOptions:{refreshDeps:[ge]}}}),Oe=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},Fe.tableCURDSelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),Se.tableCURDSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return E.createElement(M,{actions:["create","read","update"],hmTableProps:{formRef:w,hmColumns:Oe,hmRequest:p},createButton:E.createElement(L,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(fe){return E.createElement(E.Fragment,null,E.createElement(ae,s()(s()({},fe),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),E.createElement(ae,s()(s()({},fe),{},{name:"age",label:" \u5E74\u9F84",required:!0})),E.createElement(F,s()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},Fe.detailCURDSelect.proFormSelectProps)),E.createElement(F,s()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},Se.detailCURDSelect.proFormSelectProps)))},renderFormInstance:O,requestGetById:U,requestAdd:Ie,requestUpdateById:le})},Z.abrupt("return",{default:De});case 47:case"end":return Z.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-2",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.3.1"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(87818),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var K=B()(u()().mark(function b(){var k,M=arguments;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,e.e(545).then(e.bind(e,71545));case 2:return v.abrupt("return",(k=v.sent).default.apply(k,M));case 3:case"end":return v.stop()}},b)}));function P(){return K.apply(this,arguments)}return P}()}}}},75725:function(re,h,e){e.r(h),e.d(h,{demos:function(){return ee}});var Q=e(59496),y=e(62545),ee={}},86946:function(re,h,e){e.r(h),e.d(h,{demos:function(){return ee}});var Q=e(59496),y=e(61865),ee={}},98536:function(re,h,e){e.r(h),e.d(h,{demos:function(){return ee}});var Q=e(59496),y=e(39656),ee={}},87818:function(re,h,e){e.r(h),e.d(h,{CURD:function(){return f},CURDDetail:function(){return c},CustomValueTypeEnum:function(){return be},EditorJSON:function(){return O},EditorJavascript:function(){return T},EditorMarkdown:function(){return Oe},FileUpload:function(){return ge},HMDescriptions:function(){return De},HMTable:function(){return L},NumberSwitch:function(){return ie},OperateDelete:function(){return F},createStore:function(){return $e},customValueTypeMap:function(){return Ge},getTableScroll:function(){return W},useCURDSelect:function(){return U},useCURDSelects:function(){return G},useDelete:function(){return ae}});var Q=e(15558),y=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(35990),u=e(43472),D=e(59496),B=e(5791),E=e(33553),Re=e(90228),ue=e.n(Re),K=e(67825),P=e.n(K),b=e(87999),k=e.n(b),M=e(3737),o=e(4637),v=["current","pageSize"],z=["hmRequest","request","hmColumns","columns","rowKey"];function X(n){return function(){var t=k()(ue()().mark(function r(a){var l,i,m,C;return ue()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return l=a.current,i=a.pageSize,m=P()(a,v),N.next=3,n(s()({page:l,pageSize:i},m));case 3:return C=N.sent,N.abrupt("return",{data:C.data.data,success:C.data.success,total:C.data.totalSize});case 5:case"end":return N.stop()}},r)}));return function(r){return t.apply(this,arguments)}}()}function L(n){var t=n.hmRequest,r=n.request,a=n.hmColumns,l=n.columns,i=n.rowKey,m=i===void 0?"id":i,C=P()(n,z),q=(0,D.useCallback)(function(te){return t?X(t)(te):r(te,{},{})},[t,r]),N=(0,D.useMemo)(function(){return a?a.map(function(te){return s()({search:!1},te)}):l},[l,a]);return(0,o.jsx)(M.Z,s()({cardBordered:!0,rowKey:m,pagination:s()({showSizeChanger:!0,showQuickJumper:!0},C.pagination),options:!1,request:q,columns:N},C))}function W(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,r={x:0,y:void 0};return n==null||n.forEach(function(a){a.hideInTable||(r.x+=Number(a.width)||t)}),r}var $=e(37082);function ae(n){var t=n.name,r=n.desc,a=n.onDelete,l=(0,D.useCallback)(function(){$.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:r||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){a()}})},[t,r,a]);return{doDelete:l}}function F(n){var t=n.name,r=n.desc,a=n.onDelete,l=(0,D.useCallback)(function(){$.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:r||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){a()}})},[t,r,a]);return(0,o.jsx)("a",{style:{color:"red"},onClick:l,children:"\u5220\u9664"})}var _=e(48305),A=e.n(_),j=e(67046),g=e(22109),I=e(80671);function c(n){var t=n.action,r=n.id,a=n.record,l=n.trigger,i=n.onSuccess,m=n.renderForm,C=n.requestGetById,q=n.requestGetByRecord,N=n.requestAdd,te=n.requestUpdateById,Me=n.renderFormInstance,de=(0,D.useRef)(""+Math.random()),ve=g.A.useForm(Me),me=A()(ve,1),J=me[0],ye=(0,D.useCallback)(function(){var Be=k()(ue()().mark(function V(se){return ue()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(S.prev=0,!(t==="create"&&N)){S.next=5;break}return S.next=4,N(se);case 4:j.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(t==="update"&&te)){S.next=9;break}return S.next=8,te(s()(s()({},se),{},{id:r}));case 8:j.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return i==null||i(),S.abrupt("return",!0);case 13:S.prev=13,S.t0=S.catch(0),setTimeout(function(){throw S.t0},10);case 16:case"end":return S.stop()}},V,null,[[0,13]])}));return function(V){return Be.apply(this,arguments)}}(),[t,i,N,te,r]),Te=(0,D.useCallback)(function(Be){if(Be&&(J==null||J.resetFields(),r)){if(C)return C({id:r}).then(function(V){J==null||J.setFieldsValue(V.data.data)});if(q)return q(a).then(function(V){J==null||J.setFieldsValue(V.data.data)})}},[J,r,C,q,a]),Ue=(0,D.useMemo)(function(){return m?m({readonly:t==="read"&&!!r},{action:t}):null},[t,r,m]);return(0,o.jsxs)(I.a,{form:J,trigger:l,autoFocusFirstInput:!0,onFinish:ye,onOpenChange:Te,layout:"vertical",readonly:t==="read"&&!!r,children:[(0,o.jsx)("div",{className:"h-[20px]"}),Ue]},r||de.current)}var f=(0,D.forwardRef)(function(t,r){var a=t.actions,l=t.hmTableProps,i=t.createButton,m=t.deleteProps,C=t.detailIdIndex,q=t.renderForm,N=t.requestGetById,te=t.requestGetByRecord,Me=t.requestAdd,de=t.requestUpdateById,ve=t.renderFormInstance,me=(0,D.useRef)(),J=(0,B.TH)();(0,D.useImperativeHandle)(r,function(){return{getActionRef:function(){return me}}},[me]);var ye=(0,D.useMemo)(function(){return{renderForm:q,requestGetById:N,requestGetByRecord:te,requestAdd:Me,requestUpdateById:de,renderFormInstance:ve}},[q,Me,N,te,de,ve]),Te=(0,D.useCallback)(function(V){return function(){if(m!=null&&m.deleteById)return m.deleteById({id:V.id,ids:[V.id]}).then(function(){var se;(se=me.current)===null||se===void 0||se.reload()});if(m!=null&&m.deleteByRecord)return m.deleteByRecord(V).then(function(){var se;(se=me.current)===null||se===void 0||se.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[m]),Ue=(0,D.useCallback)(function(){var V;(V=me.current)===null||V===void 0||V.reload()},[]),Be=(0,D.useMemo)(function(){var V={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(Ke,S){return(0,o.jsxs)(Ee.Z,{children:[a.includes("read")&&(0,o.jsx)(c,s()({id:S.id,record:S,onSuccess:Ue,trigger:(0,o.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},ye),"read"+S.id),a.includes("read_detail")&&(0,o.jsx)(E.rU,{to:"".concat(J.pathname,"/detail/").concat(S[C||"id"]),children:"\u67E5\u770B"}),a.includes("update")&&(0,o.jsx)(c,s()({id:S.id,record:S,onSuccess:Ue,trigger:(0,o.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},ye),"update"+S.id),a.includes("delete")&&m&&(0,o.jsx)(F,{name:S[m.nameIndex],desc:m.desc,onDelete:Te(S)})]})}};return a.includes("read")||a.includes("read_detail")||a.includes("update")||a.includes("delete")?[].concat(y()(l.hmColumns||l.columns||[]),[V]):l.hmColumns},[a,m,C,ye,Te,Ue,l.columns,l.hmColumns,J.pathname]);return(0,o.jsx)("div",{className:"",children:(0,o.jsx)(L,s()(s()({rowKey:"id"},l),{},{scroll:W(Be),actionRef:me,toolBarRender:function(){return[].concat(y()(l.toolBarRender?l.toolBarRender.apply(l,arguments):[]),[a.includes("create")&&(0,o.jsx)(c,s()({onSuccess:Ue,trigger:i||(0,o.jsx)(u.ZP,{type:"primary",children:"\u65B0\u5EFA"}),action:"create"},ye),"create")])},search:s()({layout:"vertical",defaultCollapsed:!1},l.search),hmColumns:Be}))})}),R=e(39935),p=e(53213);function d(n){var t=n.initialValue,r=n.type,a=n.data,l=n.column,i=n.all,m=(0,D.useMemo)(function(){return r==="table"&&i?[i].concat(y()(a)):a},[i,a,r]);return r==="table"?(0,o.jsx)(R.Z,{name:l.dataIndex,options:m,initialValue:t===void 0&&i?i.value:t,allowClear:!1}):null}function U(n){var t=n.all,r=n.request,a=n.useRequestOptions,l=n.initialValue,i=(0,p.Z)(function(){return r()},a),m=i.data,C=m===void 0?[]:m,q=l===void 0&&t?t.value:l,N=(0,D.useMemo)(function(){var de={};return C.forEach(function(ve){de[ve.value]={text:ve.label}}),de},[C]),te=(0,D.useCallback)(function(de){return s()(s()({},de),{},{valueEnum:N,renderFormItem:function(me,J){var ye=J.type;return(0,o.jsx)(d,{type:ye,data:C,column:de,all:t,initialValue:q})}})},[t,C,q,N]),Me={options:C};return{selectColumn:te,proFormSelectProps:Me}}function G(n){var t=(0,D.useMemo)(function(){return n({type:"table"})},[n]),r=(0,D.useMemo)(function(){return n({type:"detail"})},[n]),a=U(t),l=U(r);return{tableCURDSelect:a,detailCURDSelect:l}}var Ie=e(13194),ce=e(28026),le=e.n(ce),ne=["hmItems","items"];function De(n){var t=n.hmItems,r=n.items,a=P()(n,ne),l=(0,D.useMemo)(function(){return t?t.map(function(i){var m=i.children;return i.children!==null&&i.children!==void 0&&(i.valueType==="date"?m=le()(m).format("YYYY-MM-DD"):i.valueType==="dateTime"?m=le()(m).format("YYYY-MM-DD HH:mm:ss"):i.valueType==="time"&&(m=le()(m).format("HH:mm:ss"))),s()(s()({},i),{},{children:m||"-"})}):r},[t,r]);return(0,o.jsx)(Ie.Z,s()({items:l},a))}var Ae=e(34019),Z=e(65273),Y=e(59590),w=e(32479),H={width:"100%",height:"100%"};function T(n){var t=n.value,r=n.onChange,a=n.readonly;return(0,o.jsx)(Ae.ZP,{style:H,mode:"javascript",theme:"monokai",value:t,onChange:r,readOnly:a,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var x=e(46182);function O(n){var t=n.value,r=n.onChange,a=n.readonly,l=(0,D.useRef)(null),i=(0,D.useRef)(null),m=(0,D.useRef)(r);return(0,D.useEffect)(function(){var C;(C=i.current)===null||C===void 0||C.update({text:t||""})},[t]),(0,D.useEffect)(function(){i.current=new x.q9({target:l.current,props:{mode:x.AR.text,readOnly:a,content:{text:t||""},onChange:function(q){m.current(q.text)}}})},[]),(0,o.jsx)("div",{ref:l,className:"h-full w-full"})}var oe=e(70876),Fe=e(51709),Se=["children","className","node"];function Oe(n){var t=n.value;return(0,o.jsx)(oe.U,{unwrapDisallowed:!0,components:{code:function(a){var l=a.children,i=a.className,m=a.node,C=P()(a,Se),q=/language-(\w+)/.exec(i||"");return q?(0,o.jsx)(Fe.Z,s()(s()({},C),{},{PreTag:"div",wrapLongLines:!0,children:String(l).replace(/\n$/,""),language:q[1].toLowerCase()})):(0,o.jsx)("code",s()(s()({},C),{},{className:i,children:l}))}},children:t||""})}var Ce=e(55860),fe=e(32732);function ge(n){var t=n.value,r=n.onChange,a=function(m){return r==null||r(m),!1},l=function(){r==null||r(void 0)};return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(fe.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:t?[t]:void 0,beforeUpload:a,onRemove:l,children:(0,o.jsx)(u.ZP,{icon:(0,o.jsx)(Ce.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var Pe=e(39106),He=["value","onChange"];function ie(n){var t=n.value,r=n.onChange,a=P()(n,He);return(0,o.jsx)(Pe.Z,s()(s()({},a),{},{value:!!t,onChange:function(i){return r==null?void 0:r(Number(i))}}))}var pe=e(64934),xe=e(65124),he=function(t){return function(r,a,l){var i=(0,xe.mW)(t);return i(r,a,l)}},ke=he,$e=function(t){return t?(0,pe.Ue)()(ke(t)):function(r){return(0,pe.Ue)()(ke(r))}},je=e(82092),we=e.n(je),Le=e(81447),be=function(n){return n.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",n}(be||{}),Ge=we()({},be.CustomDateTimeAndDateRange,{render:function(t){return(0,o.jsx)("div",{children:t?le()(parseInt(t)).format("YYYY-MM-DD HH:mm:ss"):"-"})},renderFormItem:function(t,r){return(0,o.jsx)(Le.Z,s()(s()({},r),{},{fieldProps:s()(s()({},r.fieldProps),{},{onChange:function(l){var i,m,C=l&&[le()(l[0]).startOf("day"),le()(l[1]).endOf("day")];(i=(m=r.fieldProps).onChange)===null||i===void 0||i.call(m,C)}})}))}})},96595:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(14625);const y=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(73134);const y=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u6574 actions \u4E3A ",paraId:3,tocIndex:2},{value:"['read_detail']",paraId:3,tocIndex:2},{value:"\uFF0C\u70B9\u51FB<\u67E5\u770B>\u8DF3\u8F6C\u5230 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\uFF0C",paraId:3,tocIndex:2},{value:`import { CURD } from '@huomu/core';

const Demo = () => {
  return <CURD actions={['read_detail']} ... />;
};

export default Demo;
`,paraId:4,tocIndex:2},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:5,tocIndex:3},{value:`import { useRef } from 'react';
import { CURD } from '@huomu/core';
import { Button } from 'antd';

const Demo = () => {
  const ref = useRef<any>();

  return (
    <div>
      <Button onClick={() => ref.current.getActionRef().current?.reload()}>reload</Button>
      <CURD ref={ref} ... />
    </div>
  );
};

export default Demo;
`,paraId:6,tocIndex:3},{value:`import { useRef } from 'react';
import { CURD } from '@huomu/core';

const Demo = () => {
  const formRef = useRef<any>();

  return (
    <CURD
      hmTableProps={{
        formRef,
        ...
      }}
    />
  );
};

export default Demo;
`,paraId:7,tocIndex:4},{value:`import { CURD } from '@huomu/core';

const Demo = () => {
  const [renderFormInstance] = ProForm.useForm();

  return <CURD renderFormInstance={renderFormInstance} />;
};

export default Demo;
`,paraId:8,tocIndex:5}]},40760:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(13720);const y=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { useCURDSelect, useCURDSelects } from '@huomu/core';",paraId:1,tocIndex:0},{value:"curd select \u7EC4\u4EF6\uFF0C\u6709",paraId:2,tocIndex:0},{value:"table \u7684 column",paraId:3,tocIndex:0},{value:"form \u7684 ProFormSelect",paraId:3,tocIndex:0},{value:"table detail \u7684\u6570\u636E\u5E94\u8BE5\u662F\u72EC\u7ACB\u7684\uFF0C\u6240\u4EE5\u7528 useCURDSelect \u6CA1\u6CD5\uFF0C\u56E0\u6B64\u6709 useCURDSelects",paraId:4,tocIndex:2},{value:"\u57CE\u5E02\u548C\u533A\u57DF\u8054\u52A8",paraId:5,tocIndex:3}]},9836:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(62545);const y=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(61865);const y=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(re,h,e){e.r(h),e.d(h,{texts:function(){return y}});var Q=e(39656);const y=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
