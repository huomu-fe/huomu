"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(re,p,e){e.r(p),e.d(p,{demos:function(){return ee}});var Q=e(59496),v=e(14625),ee={}},58229:function(re,p,e){e.r(p),e.d(p,{demos:function(){return B}});var Q=e(90228),v=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(87999),o=e.n(Ee),y=e(59496),k=e(73134),B={"curd-demo-0":{component:y.memo(y.lazy(o()(v()().mark(function Re(){var ue,K,C,b,E,P,u,h,Y,X,L,W,$,ae,F,_,A,j;return v()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return A=function(){return A=o()(v()().mark(function f(D){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMUpdateById",D),u=u.map(function(U){return U.id===D.id?s()(s()({},U),D):U}),l.abrupt("return",Promise.resolve({}));case 3:case"end":return l.stop()}},f)})),A.apply(this,arguments)},_=function(f){return A.apply(this,arguments)},F=function(){return F=o()(v()().mark(function f(D){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMAdd",D),u.push(s()({id:u.length+1},D)),l.abrupt("return",Promise.resolve({}));case 3:case"end":return l.stop()}},f)})),F.apply(this,arguments)},ae=function(f){return F.apply(this,arguments)},$=function(){return $=o()(v()().mark(function f(D){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMGetById",D),l.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:u.find(function(G){return G.id===D.id})}})},1e3)}));case 2:case"end":return l.stop()}},f)})),$.apply(this,arguments)},W=function(f){return $.apply(this,arguments)},L=function(){return L=o()(v()().mark(function f(D){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMDeleteById",D),u=u.filter(function(U){return U.id!==D.id}),l.abrupt("return",Promise.resolve({}));case 3:case"end":return l.stop()}},f)})),L.apply(this,arguments)},X=function(f){return L.apply(this,arguments)},Y=function(){return Y=o()(v()().mark(function f(D){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMRequest",D),l.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:u,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return l.stop()}},f)})),Y.apply(this,arguments)},h=function(f){return Y.apply(this,arguments)},I.next=12,Promise.resolve().then(e.bind(e,87818));case 12:return ue=I.sent,K=ue.CURD,I.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return C=I.sent,b=C.range,I.next=20,Promise.resolve().then(e.bind(e,5765));case 20:return E=I.sent,P=E.ProFormText,u=b(10).map(function(m){return{id:"".concat(m),name:"name-".concat(m),address:"address-".concat(m)}}),j=function(){var f=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"address",dataIndex:"address"}];return y.createElement(K,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:f,hmRequest:h},deleteProps:{nameIndex:"name",deleteById:X},renderForm:function(R){return y.createElement(y.Fragment,null,y.createElement(P,s()(s()({},R),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),y.createElement(P,s()(s()({},R),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:W,requestAdd:ae,requestUpdateById:_})},I.abrupt("return",{default:j});case 25:case"end":return I.stop()}},Re)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var Re=o()(v()().mark(function K(){var C,b=arguments;return v()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,e.e(545).then(e.bind(e,71545));case 2:return P.abrupt("return",(C=P.sent).default.apply(C,b));case 3:case"end":return P.stop()}},K)}));function ue(){return Re.apply(this,arguments)}return ue}()}}}},15278:function(re,p,e){e.r(p),e.d(p,{demos:function(){return ue}});var Q=e(48305),v=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(90228),o=e.n(Ee),y=e(87999),k=e.n(y),B=e(59496),Re=e(13720),ue={"use_curd_select-demo-0":{component:B.memo(B.lazy(k()(o()().mark(function K(){var C,b,E,P,u,h,Y,X,L,W,$;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return W=function(){return W=k()(o()().mark(function A(j){var M;return o()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return console.log("fakeHMRequest",j),M=h,j.city&&(M=M.filter(function(f){return f.city===j.city})),m.abrupt("return",new Promise(function(f){setTimeout(function(){f({data:{data:M,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return m.stop()}},A)})),W.apply(this,arguments)},L=function(A){return W.apply(this,arguments)},X=function(){return X=k()(o()().mark(function A(){return o()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return M.stop()}},A)})),X.apply(this,arguments)},Y=function(){return X.apply(this,arguments)},F.next=6,Promise.resolve().then(e.bind(e,87818));case 6:return C=F.sent,b=C.CURD,E=C.useCURDSelect,F.next=11,Promise.resolve().then(e.bind(e,38548));case 11:return P=F.sent,u=P.range,h=u(5).map(function(_){return{id:"".concat(_),name:"name-".concat(_),city:void 0}}),h[0].city="\u5E7F\u5DDE",h[1].city="\u6DF1\u5733",$=function(){var A=E({initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var M=k()(o()().mark(function m(){var f;return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Y();case 2:return f=R.sent,R.abrupt("return",f.map(function(l){return{label:l,value:l}})||[]);case 4:case"end":return R.stop()}},m)}));function I(){return M.apply(this,arguments)}return I}()}),j=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},A.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return B.createElement(b,{actions:[],hmTableProps:{hmColumns:j,hmRequest:L}})},F.abrupt("return",{default:$});case 18:case"end":return F.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-0",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelect } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548)},renderOpts:{compile:function(){var K=k()(o()().mark(function b(){var E,P=arguments;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(545).then(e.bind(e,71545));case 2:return h.abrupt("return",(E=h.sent).default.apply(E,P));case 3:case"end":return h.stop()}},b)}));function C(){return K.apply(this,arguments)}return C}()}},"use_curd_select-demo-1":{component:B.memo(B.lazy(k()(o()().mark(function K(){var C,b,E,P,u,h,Y,X,L,W,$,ae,F,_,A,j;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return A=function(){return A=k()(o()().mark(function f(D){return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return console.log("fakeHMGetById",D),l.abrupt("return",new Promise(function(U){setTimeout(function(){U({data:{data:L.find(function(G){return G.id===D.id})}})},1e3)}));case 2:case"end":return l.stop()}},f)})),A.apply(this,arguments)},_=function(f){return A.apply(this,arguments)},F=function(){return F=k()(o()().mark(function f(D){var R;return o()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return console.log("fakeHMRequest",D),R=L,D.city&&(R=R.filter(function(G){return G.city===D.city})),U.abrupt("return",new Promise(function(G){setTimeout(function(){G({data:{data:R,success:!0,totalSize:100}})},1e3)}));case 4:case"end":return U.stop()}},f)})),F.apply(this,arguments)},ae=function(f){return F.apply(this,arguments)},$=function(){return $=k()(o()().mark(function f(){return o()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",["\u5E7F\u5DDE","\u6DF1\u5733"]);case 1:case"end":return R.stop()}},f)})),$.apply(this,arguments)},W=function(){return $.apply(this,arguments)},I.next=8,Promise.resolve().then(e.bind(e,87818));case 8:return C=I.sent,b=C.CURD,E=C.useCURDSelects,I.next=13,Promise.resolve().then(e.bind(e,38548));case 13:return P=I.sent,u=P.range,I.next=17,Promise.resolve().then(e.bind(e,5765));case 17:return h=I.sent,Y=h.ProFormText,X=h.ProFormSelect,L=u(5).map(function(m){return{id:"".concat(m),name:"name-".concat(m),city:void 0}}),L[0].city="\u5E7F\u5DDE",L[1].city="\u6DF1\u5733",j=function(){var f=E(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var U=k()(o()().mark(function Ie(){var de;return o()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:return ne.next=2,W();case 2:return de=ne.sent,ne.abrupt("return",de.map(function(De){return{label:De,value:De}})||[]);case 4:case"end":return ne.stop()}},Ie)}));function G(){return U.apply(this,arguments)}return G}()}}),D=f.tableCURDSelect,R=f.detailCURDSelect,l=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},D.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0})];return B.createElement(b,{actions:["read"],hmTableProps:{hmColumns:l,hmRequest:ae},renderForm:function(G){return B.createElement(B.Fragment,null,B.createElement(Y,s()(s()({},G),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),B.createElement(Y,s()(s()({},G),{},{name:"age",label:" \u5E74\u9F84",required:!0})),B.createElement(X,s()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},R.proFormSelectProps)))},requestGetById:_})},I.abrupt("return",{default:j});case 25:case"end":return I.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-1",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD, useCURDSelects } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(87818),"lodash-es":e(38548),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var K=k()(o()().mark(function b(){var E,P=arguments;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(545).then(e.bind(e,71545));case 2:return h.abrupt("return",(E=h.sent).default.apply(E,P));case 3:case"end":return h.stop()}},b)}));function C(){return K.apply(this,arguments)}return C}()}},"use_curd_select-demo-2":{component:B.memo(B.lazy(k()(o()().mark(function K(){var C,b,E,P,u,h,Y,X,L,W,$,ae,F,_,A,j,M,I,m,f,D,R,l,U,G,Ie,de,ce,ne,De;return o()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return ne=function(){return ne=k()(o()().mark(function w(H){return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMUpdateById",H),M=M.map(function(O){return O.id===H.id?s()(s()({},O),H):O}),x.abrupt("return",Promise.resolve({}));case 3:case"end":return x.stop()}},w)})),ne.apply(this,arguments)},ce=function(w){return ne.apply(this,arguments)},de=function(){return de=k()(o()().mark(function w(H){return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMAdd",H),M.push(s()({id:M.length+1},H)),x.abrupt("return",Promise.resolve({}));case 3:case"end":return x.stop()}},w)})),de.apply(this,arguments)},Ie=function(w){return de.apply(this,arguments)},G=function(){return G=k()(o()().mark(function w(H){return o()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("fakeHMGetById",H),x.abrupt("return",new Promise(function(O){setTimeout(function(){O({data:{data:M.find(function(oe){return oe.id===H.id})}})},1e3)}));case 2:case"end":return x.stop()}},w)})),G.apply(this,arguments)},U=function(w){return G.apply(this,arguments)},l=function(){return l=k()(o()().mark(function w(H){var T;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log("fakeHMRequest",H),T=M,H.city&&(T=T.filter(function(oe){return oe.city===H.city})),H.area&&(T=T.filter(function(oe){return oe.area===H.area})),O.abrupt("return",new Promise(function(oe){setTimeout(function(){oe({data:{data:T,success:!0,totalSize:100}})},1e3)}));case 5:case"end":return O.stop()}},w)})),l.apply(this,arguments)},R=function(w){return l.apply(this,arguments)},D=function(){return D=k()(o()().mark(function w(H){var T;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(T=H.city,!T){O.next=3;break}return O.abrupt("return",j[T]);case 3:return O.abrupt("return",A.apply(null,Object.values(j)));case 4:case"end":return O.stop()}},w)})),D.apply(this,arguments)},f=function(w){return D.apply(this,arguments)},m=function(){return m=k()(o()().mark(function w(){return o()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",Object.keys(j));case 1:case"end":return T.stop()}},w)})),m.apply(this,arguments)},I=function(){return m.apply(this,arguments)},z.next=14,Promise.resolve().then(e.t.bind(e,59496,19));case 14:return C=z.sent,b=C.useRef,z.next=18,Promise.resolve().then(e.bind(e,87818));case 18:return E=z.sent,P=E.CURD,u=E.useCURDSelects,z.next=23,Promise.resolve().then(e.bind(e,38548));case 23:return h=z.sent,Y=h.range,z.next=27,Promise.resolve().then(e.bind(e,77623));case 27:return X=z.sent,L=X.Button,z.next=31,Promise.resolve().then(e.bind(e,5765));case 31:return W=z.sent,$=W.ProForm,ae=W.ProFormText,F=W.ProFormSelect,z.next=37,Promise.resolve().then(e.bind(e,38548));case 37:return _=z.sent,A=_.union,j={\u5E7F\u5DDE:["\u8D8A\u79C0","\u756A\u79BA"],\u6DF1\u5733:["\u798F\u7530","\u5357\u5C71"]},M=Y(5).map(function(q){return{id:"".concat(q),name:"name-".concat(q),city:void 0,area:void 0}}),M[0].city="\u5E7F\u5DDE",M[1].area="\u5357\u5C71",M[2].city="\u6DF1\u5733",M[2].area="\u798F\u7530",De=function(){var w=b(),H=$.useWatch("city",w.current),T=$.useForm(),x=v()(T,1),O=x[0],oe=$.useWatch("city",O),ke=u(function(){return{initialValue:"",all:{label:"\u57CE\u5E02\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Ce=k()(o()().mark(function ge(){var Pe;return o()().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,I();case 2:return Pe=le.sent,le.abrupt("return",Pe.map(function(pe){return{label:pe,value:pe}})||[]);case 4:case"end":return le.stop()}},ge)}));function fe(){return Ce.apply(this,arguments)}return fe}()}}),Se=u(function(Ce){var fe=Ce.type,ge=fe==="table"?H:oe;return{initialValue:"",all:{label:"\u533A\u57DF\uFF08\u5168\u90E8\uFF09",value:""},request:function(){var Pe=k()(o()().mark(function le(){var pe;return o()().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return he.next=2,f({city:ge});case 2:return pe=he.sent,he.abrupt("return",pe.map(function(Fe){return{label:Fe,value:Fe}})||[]);case 4:case"end":return he.stop()}},le)}));function He(){return Pe.apply(this,arguments)}return He}(),useRequestOptions:{refreshDeps:[ge]}}}),Oe=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},ke.tableCURDSelect.selectColumn({title:"\u57CE\u5E02",dataIndex:"city",search:!0}),Se.tableCURDSelect.selectColumn({title:"\u533A\u57DF",dataIndex:"area",search:!0})];return B.createElement(P,{actions:["create","read","update"],hmTableProps:{formRef:w,hmColumns:Oe,hmRequest:R},createButton:B.createElement(L,{type:"primary"},"\u65B0\u5EFA"),renderForm:function(fe){return B.createElement(B.Fragment,null,B.createElement(ae,s()(s()({},fe),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),B.createElement(ae,s()(s()({},fe),{},{name:"age",label:" \u5E74\u9F84",required:!0})),B.createElement(F,s()({name:"city",label:"\u6240\u5C5E\u57CE\u5E02"},ke.detailCURDSelect.proFormSelectProps)),B.createElement(F,s()({name:"area",label:"\u6240\u5C5E\u533A\u57DF"},Se.detailCURDSelect.proFormSelectProps)))},renderFormInstance:O,requestGetById:U,requestAdd:Ie,requestUpdateById:ce})},z.abrupt("return",{default:De});case 47:case"end":return z.stop()}},K)})))),asset:{type:"BLOCK",id:"use_curd_select-demo-2",refAtomIds:["use_curd_select"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.3.0"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(87818),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var K=k()(o()().mark(function b(){var E,P=arguments;return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(545).then(e.bind(e,71545));case 2:return h.abrupt("return",(E=h.sent).default.apply(E,P));case 3:case"end":return h.stop()}},b)}));function C(){return K.apply(this,arguments)}return C}()}}}},75725:function(re,p,e){e.r(p),e.d(p,{demos:function(){return ee}});var Q=e(59496),v=e(62545),ee={}},86946:function(re,p,e){e.r(p),e.d(p,{demos:function(){return ee}});var Q=e(59496),v=e(61865),ee={}},98536:function(re,p,e){e.r(p),e.d(p,{demos:function(){return ee}});var Q=e(59496),v=e(39656),ee={}},87818:function(re,p,e){e.r(p),e.d(p,{CURD:function(){return f},CURDDetail:function(){return m},CustomValueTypeEnum:function(){return be},EditorJSON:function(){return O},EditorJavascript:function(){return T},EditorMarkdown:function(){return Oe},FileUpload:function(){return ge},HMDescriptions:function(){return De},HMTable:function(){return L},NumberSwitch:function(){return le},OperateDelete:function(){return F},createStore:function(){return $e},customValueTypeMap:function(){return Ge},getTableScroll:function(){return W},useCURDSelect:function(){return U},useCURDSelects:function(){return G},useDelete:function(){return ae}});var Q=e(15558),v=e.n(Q),ee=e(26068),s=e.n(ee),Ee=e(35990),o=e(43472),y=e(59496),k=e(5791),B=e(33553),Re=e(90228),ue=e.n(Re),K=e(67825),C=e.n(K),b=e(87999),E=e.n(b),P=e(3737),u=e(4637),h=["current","pageSize"],Y=["hmRequest","request","hmColumns","columns","rowKey"];function X(n){return function(){var t=E()(ue()().mark(function r(a){var i,d,c,g;return ue()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return i=a.current,d=a.pageSize,c=C()(a,h),N.next=3,n(s()({page:i,pageSize:d},c));case 3:return g=N.sent,N.abrupt("return",{data:g.data.data,success:g.data.success,total:g.data.totalSize});case 5:case"end":return N.stop()}},r)}));return function(r){return t.apply(this,arguments)}}()}function L(n){var t=n.hmRequest,r=n.request,a=n.hmColumns,i=n.columns,d=n.rowKey,c=d===void 0?"id":d,g=C()(n,Y),Z=(0,y.useCallback)(function(te){return t?X(t)(te):r(te,{},{})},[t,r]),N=(0,y.useMemo)(function(){return a?a.map(function(te){return s()({search:!1},te)}):i},[i,a]);return(0,u.jsx)(P.Z,s()({cardBordered:!0,rowKey:c,pagination:s()({showSizeChanger:!0,showQuickJumper:!0},g.pagination),options:!1,request:Z,columns:N},g))}function W(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,r={x:0,y:void 0};return n==null||n.forEach(function(a){a.hideInTable||(r.x+=Number(a.width)||t)}),r}var $=e(37082);function ae(n){var t=n.name,r=n.desc,a=n.onDelete,i=(0,y.useCallback)(function(){$.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:r||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){a()}})},[t,r,a]);return{doDelete:i}}function F(n){var t=n.name,r=n.desc,a=n.onDelete,i=(0,y.useCallback)(function(){$.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:r||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){a()}})},[t,r,a]);return(0,u.jsx)("a",{style:{color:"red"},onClick:i,children:"\u5220\u9664"})}var _=e(48305),A=e.n(_),j=e(67046),M=e(22109),I=e(80671);function m(n){var t=n.action,r=n.id,a=n.record,i=n.trigger,d=n.onSuccess,c=n.renderForm,g=n.requestGetById,Z=n.requestGetByRecord,N=n.requestAdd,te=n.requestUpdateById,Me=n.renderFormInstance,ie=(0,y.useRef)(""+Math.random()),ve=M.A.useForm(Me),me=A()(ve,1),J=me[0],ye=(0,y.useCallback)(function(){var Be=E()(ue()().mark(function V(se){return ue()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(S.prev=0,!(t==="create"&&N)){S.next=5;break}return S.next=4,N(se);case 4:j.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(t==="update"&&te)){S.next=9;break}return S.next=8,te(s()(s()({},se),{},{id:r}));case 8:j.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return d==null||d(),S.abrupt("return",!0);case 13:S.prev=13,S.t0=S.catch(0),setTimeout(function(){throw S.t0},10);case 16:case"end":return S.stop()}},V,null,[[0,13]])}));return function(V){return Be.apply(this,arguments)}}(),[t,d,N,te,r]),Te=(0,y.useCallback)(function(Be){if(Be&&(J==null||J.resetFields(),r)){if(g)return g({id:r}).then(function(V){J==null||J.setFieldsValue(V.data.data)});if(Z)return Z(a).then(function(V){J==null||J.setFieldsValue(V.data.data)})}},[J,r,g,Z,a]),Ue=(0,y.useMemo)(function(){return c?c({readonly:t==="read"&&!!r},{action:t}):null},[t,r,c]);return(0,u.jsxs)(I.a,{form:J,trigger:i,autoFocusFirstInput:!0,onFinish:ye,onOpenChange:Te,layout:"vertical",readonly:t==="read"&&!!r,children:[(0,u.jsx)("div",{className:"h-[20px]"}),Ue]},r||ie.current)}var f=(0,y.forwardRef)(function(t,r){var a=t.actions,i=t.hmTableProps,d=t.createButton,c=t.deleteProps,g=t.detailIdIndex,Z=t.renderForm,N=t.requestGetById,te=t.requestGetByRecord,Me=t.requestAdd,ie=t.requestUpdateById,ve=t.renderFormInstance,me=(0,y.useRef)(),J=(0,k.TH)();(0,y.useImperativeHandle)(r,function(){return{getActionRef:function(){return me}}},[me]);var ye=(0,y.useMemo)(function(){return{renderForm:Z,requestGetById:N,requestGetByRecord:te,requestAdd:Me,requestUpdateById:ie,renderFormInstance:ve}},[Z,Me,N,te,ie,ve]),Te=(0,y.useCallback)(function(V){return function(){if(c!=null&&c.deleteById)return c.deleteById({id:V.id,ids:[V.id]}).then(function(){var se;(se=me.current)===null||se===void 0||se.reload()});if(c!=null&&c.deleteByRecord)return c.deleteByRecord(V).then(function(){var se;(se=me.current)===null||se===void 0||se.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[c]),Ue=(0,y.useCallback)(function(){var V;(V=me.current)===null||V===void 0||V.reload()},[]),Be=(0,y.useMemo)(function(){var V={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(Ke,S){return(0,u.jsxs)(Ee.Z,{children:[a.includes("read")&&(0,u.jsx)(m,s()({id:S.id,record:S,onSuccess:Ue,trigger:(0,u.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},ye),"read"+S.id),a.includes("read_detail")&&(0,u.jsx)(B.rU,{to:"".concat(J.pathname,"/detail/").concat(S[g||"id"]),children:"\u67E5\u770B"}),a.includes("update")&&(0,u.jsx)(m,s()({id:S.id,record:S,onSuccess:Ue,trigger:(0,u.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},ye),"update"+S.id),a.includes("delete")&&c&&(0,u.jsx)(F,{name:S[c.nameIndex],desc:c.desc,onDelete:Te(S)})]})}};return a.includes("read")||a.includes("read_detail")||a.includes("update")||a.includes("delete")?[].concat(v()(i.hmColumns||i.columns||[]),[V]):i.hmColumns},[a,c,g,ye,Te,Ue,i.columns,i.hmColumns,J.pathname]);return(0,u.jsx)("div",{className:"",children:(0,u.jsx)(L,s()(s()({rowKey:"id"},i),{},{scroll:W(Be),actionRef:me,toolBarRender:function(){return[].concat(v()(i.toolBarRender?i.toolBarRender.apply(i,arguments):[]),[a.includes("create")&&(0,u.jsx)(m,s()({onSuccess:Ue,trigger:d||(0,u.jsx)(o.ZP,{type:"primary",children:"\u65B0\u5EFA"}),action:"create"},ye),"create")])},search:s()({layout:"vertical",defaultCollapsed:!1},i.search),hmColumns:Be}))})}),D=e(39935),R=e(53213);function l(n){var t=n.initialValue,r=n.type,a=n.data,i=n.column,d=n.all,c=(0,y.useMemo)(function(){return r==="table"&&d?[d].concat(v()(a)):a},[d,a,r]);return r==="table"?(0,u.jsx)(D.Z,{name:i.dataIndex,options:c,initialValue:t===void 0&&d?d.value:t,allowClear:!1}):null}function U(n){var t=n.all,r=n.request,a=n.useRequestOptions,i=n.initialValue,d=(0,R.Z)(function(){return r()},a),c=d.data,g=c===void 0?[]:c,Z=i===void 0&&t?t.value:i,N=(0,y.useMemo)(function(){var ie={};return g.forEach(function(ve){ie[ve.value]={text:ve.label}}),ie},[g]),te=(0,y.useCallback)(function(ie){return s()(s()({},ie),{},{valueEnum:N,renderFormItem:function(me,J){var ye=J.type;return(0,u.jsx)(l,{type:ye,data:g,column:ie,all:t,initialValue:Z})}})},[t,g,Z,N]),Me={options:g};return{selectColumn:te,proFormSelectProps:Me}}function G(n){var t=(0,y.useMemo)(function(){return n({type:"table"})},[n]),r=(0,y.useMemo)(function(){return n({type:"detail"})},[n]),a=U(t),i=U(r);return{tableCURDSelect:a,detailCURDSelect:i}}var Ie=e(13194),de=e(28026),ce=e.n(de),ne=["hmItems","items"];function De(n){var t=n.hmItems,r=n.items,a=C()(n,ne),i=(0,y.useMemo)(function(){return t?t.map(function(d){var c=d.children;return d.children!==null&&d.children!==void 0&&(d.valueType==="date"?c=ce()(c).format("YYYY-MM-DD"):d.valueType==="dateTime"?c=ce()(c).format("YYYY-MM-DD HH:mm:ss"):d.valueType==="time"&&(c=ce()(c).format("HH:mm:ss"))),s()(s()({},d),{},{children:c||"-"})}):r},[t,r]);return(0,u.jsx)(Ie.Z,s()({items:i},a))}var Ae=e(34019),z=e(65273),q=e(59590),w=e(32479),H={width:"100%",height:"100%"};function T(n){var t=n.value,r=n.onChange,a=n.readonly;return(0,u.jsx)(Ae.ZP,{style:H,mode:"javascript",theme:"monokai",value:t,onChange:r,readOnly:a,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var x=e(46182);function O(n){var t=n.value,r=n.onChange,a=n.readonly,i=(0,y.useRef)(null),d=(0,y.useRef)(null),c=(0,y.useRef)(r);return(0,y.useEffect)(function(){var g;(g=d.current)===null||g===void 0||g.update({text:t||""})},[t]),(0,y.useEffect)(function(){d.current=new x.q9({target:i.current,props:{mode:x.AR.text,readOnly:a,content:{text:t||""},onChange:function(Z){c.current(Z.text)}}})},[]),(0,u.jsx)("div",{ref:i,className:"h-full w-full"})}var oe=e(70876),ke=e(51709),Se=["children","className","node"];function Oe(n){var t=n.value;return(0,u.jsx)(oe.U,{unwrapDisallowed:!0,components:{code:function(a){var i=a.children,d=a.className,c=a.node,g=C()(a,Se),Z=/language-(\w+)/.exec(d||"");return Z?(0,u.jsx)(ke.Z,s()(s()({},g),{},{PreTag:"div",wrapLongLines:!0,children:String(i).replace(/\n$/,""),language:Z[1].toLowerCase()})):(0,u.jsx)("code",s()(s()({},g),{},{className:d,children:i}))}},children:t||""})}var Ce=e(55860),fe=e(32732);function ge(n){var t=n.value,r=n.onChange,a=function(c){return r==null||r(c),!1},i=function(){r==null||r(void 0)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(fe.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:t?[t]:void 0,beforeUpload:a,onRemove:i,children:(0,u.jsx)(o.ZP,{icon:(0,u.jsx)(Ce.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var Pe=e(39106),He=["value","onChange"];function le(n){var t=n.value,r=n.onChange,a=C()(n,He);return(0,u.jsx)(Pe.Z,s()(s()({},a),{},{value:!!t,onChange:function(d){return r==null?void 0:r(Number(d))}}))}var pe=e(64934),xe=e(65124),he=function(t){return function(r,a,i){var d=(0,xe.mW)(t);return d(r,a,i)}},Fe=he,$e=function(t){return t?(0,pe.Ue)()(Fe(t)):function(r){return(0,pe.Ue)()(Fe(r))}},je=e(82092),we=e.n(je),Le=e(81447),be=function(n){return n.CustomDateTimeAndDateRange="CustomDateTimeAndDateRange",n}(be||{}),Ge=we()({},be.CustomDateTimeAndDateRange,{render:function(t){return(0,u.jsx)("div",{children:t?ce()(parseInt(t)).format("YYYY-MM-DD HH:mm:ss"):"-"})},renderFormItem:function(t,r){return(0,u.jsx)(Le.Z,s()({},r))}})},96595:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(14625);const v=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(73134);const v=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u8C03\u6574 actions \u4E3A ",paraId:3,tocIndex:2},{value:"['read_detail']",paraId:3,tocIndex:2},{value:"\uFF0C\u70B9\u51FB<\u67E5\u770B>\u8DF3\u8F6C\u5230 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\uFF0C",paraId:3,tocIndex:2},{value:`import { CURD } from '@huomu/core';

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
`,paraId:8,tocIndex:5}]},40760:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(13720);const v=[{value:"\u9700\u8981\u975E\u5E38\u4E86\u89E3 ant pro-components ProForm ProTable",paraId:0,tocIndex:0},{value:"import { useCURDSelect, useCURDSelects } from '@huomu/core';",paraId:1,tocIndex:0},{value:"curd select \u7EC4\u4EF6\uFF0C\u6709",paraId:2,tocIndex:0},{value:"table \u7684 column",paraId:3,tocIndex:0},{value:"form \u7684 ProFormSelect",paraId:3,tocIndex:0},{value:"table detail \u7684\u6570\u636E\u5E94\u8BE5\u662F\u72EC\u7ACB\u7684\uFF0C\u6240\u4EE5\u7528 useCURDSelect \u6CA1\u6CD5\uFF0C\u56E0\u6B64\u6709 useCURDSelects",paraId:4,tocIndex:2},{value:"\u57CE\u5E02\u548C\u533A\u57DF\u8054\u52A8",paraId:5,tocIndex:3}]},9836:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(62545);const v=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(61865);const v=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(re,p,e){e.r(p),e.d(p,{texts:function(){return v}});var Q=e(39656);const v=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
