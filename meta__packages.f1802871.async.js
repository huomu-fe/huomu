"use strict";(self.webpackChunkhuomu=self.webpackChunkhuomu||[]).push([[56],{78434:function(b,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(59496),o=e(14625),z={}},58229:function(b,m,e){e.r(m),e.d(m,{demos:function(){return se}});var W=e(90228),o=e.n(W),z=e(26068),c=e.n(z),oe=e(87999),i=e.n(oe),D=e(59496),le=e(73134),se={"curd-demo-0":{component:D.memo(D.lazy(i()(o()().mark(function O(){var T,p,g,B,S,r,G,Z,F,E,y,k,J,I,M,N,w,ne,j,Q;return o()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return j=function(){return j=i()(o()().mark(function R(U){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMUpdateById",U),F=F.map(function(L){return L.id===U.id?c()(c()({},L),U):L}),h.abrupt("return",Promise.resolve({}));case 3:case"end":return h.stop()}},R)})),j.apply(this,arguments)},ne=function(R){return j.apply(this,arguments)},w=function(){return w=i()(o()().mark(function R(U){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMAdd",U),F.push(c()({id:F.length+1},U)),h.abrupt("return",Promise.resolve({}));case 3:case"end":return h.stop()}},R)})),w.apply(this,arguments)},N=function(R){return w.apply(this,arguments)},M=function(){return M=i()(o()().mark(function R(U){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMGetById",U),h.abrupt("return",new Promise(function(L){setTimeout(function(){L({data:{data:F.find(function(de){return de.id===U.id})}})},1e3)}));case 2:case"end":return h.stop()}},R)})),M.apply(this,arguments)},I=function(R){return M.apply(this,arguments)},J=function(){return J=i()(o()().mark(function R(U){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMDeleteById",U),F=F.filter(function(L){return L.id!==U.id}),h.abrupt("return",Promise.resolve({}));case 3:case"end":return h.stop()}},R)})),J.apply(this,arguments)},k=function(R){return J.apply(this,arguments)},y=function(){return y=i()(o()().mark(function R(U){return o()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("fakeHMRequest",U),h.abrupt("return",new Promise(function(L){setTimeout(function(){L({data:{data:F,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return h.stop()}},R)})),y.apply(this,arguments)},E=function(R){return y.apply(this,arguments)},$.next=12,Promise.resolve().then(e.bind(e,26440));case 12:return T=$.sent,p=T.CURD,$.next=16,Promise.resolve().then(e.bind(e,38548));case 16:return g=$.sent,B=g.range,$.next=20,Promise.resolve().then(e.bind(e,77623));case 20:return S=$.sent,r=S.Button,$.next=24,Promise.resolve().then(e.bind(e,5765));case 24:return G=$.sent,Z=G.ProFormText,F=B(10).map(function(x){return{id:"".concat(x),name:"name-".concat(x),age:x,address:"address-".concat(x)}}),Q=function(){var R=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return D.createElement(p,{actions:["create","read","delete","update"],hmTableProps:{hmColumns:R,hmRequest:E},createButton:D.createElement(r,{type:"primary"},"\u65B0\u5EFA"),deleteProps:{nameIndex:"name",deleteById:k},renderForm:function(X){return D.createElement(D.Fragment,null,D.createElement(Z,c()(c()({},X),{},{name:"name",label:"\u540D\u5B57",required:!0,rules:[{required:!0}]})),D.createElement(Z,c()(c()({},X),{},{name:"age",label:" \u5E74\u9F84",required:!0})))},requestGetById:I,requestAdd:N,requestUpdateById:ne})},$.abrupt("return",{default:Q});case 29:case"end":return $.stop()}},O)})))),asset:{type:"BLOCK",id:"curd-demo-0",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
import { range } from 'lodash-es';
import { Button } from 'antd';
import { ProFormText } from '@ant-design/pro-components';

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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"},"@ant-design/pro-components":{type:"NPM",value:"2.7.14"}},entry:"index.tsx"},context:{"@huomu/core":e(26440),"lodash-es":e(38548),antd:e(77623),"@ant-design/pro-components":e(5765)},renderOpts:{compile:function(){var O=i()(o()().mark(function p(){var g,B=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,B));case 3:case"end":return r.stop()}},p)}));function T(){return O.apply(this,arguments)}return T}()}},"curd-demo-1":{component:D.memo(D.lazy(i()(o()().mark(function O(){var T,p,g,B,S,r,G,Z;return o()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return G=function(){return G=i()(o()().mark(function k(J){return o()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return console.log("fakeHMRequest",J),M.abrupt("return",new Promise(function(N){setTimeout(function(){N({data:{data:S,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return M.stop()}},k)})),G.apply(this,arguments)},r=function(k){return G.apply(this,arguments)},E.next=4,Promise.resolve().then(e.bind(e,26440));case 4:return T=E.sent,p=T.CURD,E.next=8,Promise.resolve().then(e.bind(e,38548));case 8:return g=E.sent,B=g.range,S=B(10).map(function(y){return{id:"".concat(y),name:"name-".concat(y),age:y,address:"address-".concat(y)}}),Z=function(){var k=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return D.createElement(p,{actions:["read_detail"],hmTableProps:{hmColumns:k,hmRequest:r}})},E.abrupt("return",{default:Z});case 13:case"end":return E.stop()}},O)})))),asset:{type:"BLOCK",id:"curd-demo-1",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { CURD } from '@huomu/core';
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

export default Demo;`},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"}},entry:"index.tsx"},context:{"@huomu/core":e(26440),"lodash-es":e(38548)},renderOpts:{compile:function(){var O=i()(o()().mark(function p(){var g,B=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,B));case 3:case"end":return r.stop()}},p)}));function T(){return O.apply(this,arguments)}return T}()}},"curd-demo-2":{component:D.memo(D.lazy(i()(o()().mark(function O(){var T,p,g,B,S,r,G,Z,F,E,y,k;return o()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return y=function(){return y=i()(o()().mark(function N(w){return o()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return console.log("fakeHMRequest",w),j.abrupt("return",new Promise(function(Q){setTimeout(function(){Q({data:{data:F,success:!0,totalSize:100}})},1e3)}));case 2:case"end":return j.stop()}},N)})),y.apply(this,arguments)},E=function(N){return y.apply(this,arguments)},I.next=4,Promise.resolve().then(e.t.bind(e,59496,19));case 4:return T=I.sent,p=T.useRef,I.next=8,Promise.resolve().then(e.bind(e,26440));case 8:return g=I.sent,B=g.CURD,I.next=12,Promise.resolve().then(e.bind(e,38548));case 12:return S=I.sent,r=S.range,I.next=16,Promise.resolve().then(e.bind(e,77623));case 16:return G=I.sent,Z=G.Button,F=r(10).map(function(M){return{id:"".concat(M),name:"name-".concat(M),age:M,address:"address-".concat(M)}}),k=function(){var N=p(),w=[{title:"id",dataIndex:"id",search:!0},{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u5E74\u9F84",dataIndex:"age"},{title:"address",dataIndex:"address"}];return D.createElement("div",null,D.createElement(Z,{onClick:function(){var j;return(j=N.current.getActionRef().current)===null||j===void 0?void 0:j.reload()}},"reload"),D.createElement(B,{actions:[],ref:N,hmTableProps:{hmColumns:w,hmRequest:E}}))},I.abrupt("return",{default:k});case 21:case"end":return I.stop()}},O)})))),asset:{type:"BLOCK",id:"curd-demo-2",refAtomIds:["curd"],dependencies:{"index.tsx":{type:"FILE",value:`import { useRef } from 'react';
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

export default Demo;`},react:{type:"NPM",value:"17.0.2"},"@huomu/core":{type:"NPM",value:"1.1.4"},"lodash-es":{type:"NPM",value:"4.17.21"},antd:{type:"NPM",value:"5.19.3"}},entry:"index.tsx"},context:{react:e(59496),"@huomu/core":e(26440),"lodash-es":e(38548),antd:e(77623)},renderOpts:{compile:function(){var O=i()(o()().mark(function p(){var g,B=arguments;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(545).then(e.bind(e,71545));case 2:return r.abrupt("return",(g=r.sent).default.apply(g,B));case 3:case"end":return r.stop()}},p)}));function T(){return O.apply(this,arguments)}return T}()}}}},75725:function(b,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(59496),o=e(62545),z={}},86946:function(b,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(59496),o=e(61865),z={}},98536:function(b,m,e){e.r(m),e.d(m,{demos:function(){return z}});var W=e(59496),o=e(39656),z={}},26440:function(b,m,e){e.r(m),e.d(m,{CURD:function(){return ie},CURDDetail:function(){return Q},EditorJSON:function(){return ge},EditorJavascript:function(){return ye},EditorMarkdown:function(){return Re},FileUpload:function(){return Ee},HMDescriptions:function(){return he},HMTable:function(){return E},NumberSwitch:function(){return He},OperateDelete:function(){return I},createStore:function(){return Ae},getTableScroll:function(){return y},useCURDSelect:function(){return U},useDelete:function(){return J}});var W=e(15558),o=e.n(W),z=e(26068),c=e.n(z),oe=e(35990),i=e(59496),D=e(5791),le=e(33553),se=e(90228),O=e.n(se),T=e(67825),p=e.n(T),g=e(87999),B=e.n(g),S=e(3737),r=e(4637),G=["current","pageSize"],Z=["hmRequest","request","hmColumns","columns","rowKey"];function F(n){return function(){var t=B()(O()().mark(function a(u){var d,s,l,f;return O()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=u.current,s=u.pageSize,l=p()(u,G),P.next=3,n(c()({page:d,pageSize:s},l));case 3:return f=P.sent,P.abrupt("return",{data:f.data.data,success:f.data.success,total:f.data.totalSize});case 5:case"end":return P.stop()}},a)}));return function(a){return t.apply(this,arguments)}}()}function E(n){var t=n.hmRequest,a=n.request,u=n.hmColumns,d=n.columns,s=n.rowKey,l=s===void 0?"id":s,f=p()(n,Z),H=(0,i.useCallback)(function(K){return t?F(t)(K):a(K,{},{})},[t,a]),P=(0,i.useMemo)(function(){return u?u.map(function(K){return c()({search:!1},K)}):d},[d,u]);return(0,r.jsx)(S.Z,c()({cardBordered:!0,rowKey:l,pagination:c()({showSizeChanger:!0,showQuickJumper:!0},f.pagination),options:!1,request:H,columns:P},f))}function y(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:120,a={x:0,y:void 0};return n==null||n.forEach(function(u){u.hideInTable||(a.x+=Number(u.width)||t)}),a}var k=e(37082);function J(n){var t=n.name,a=n.desc,u=n.onDelete,d=(0,i.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:a||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){u()}})},[t,a,u]);return{doDelete:d}}function I(n){var t=n.name,a=n.desc,u=n.onDelete,d=(0,i.useCallback)(function(){k.Z.confirm({title:"\u786E\u8BA4\u5220\u9664 \u201C".concat(t,"\u201D \u5417\uFF1F"),content:a||"\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){u()}})},[t,a,u]);return(0,r.jsx)("a",{style:{color:"red"},onClick:d,children:"\u5220\u9664"})}var M=e(48305),N=e.n(M),w=e(67046),ne=e(22109),j=e(80671);function Q(n){var t=n.action,a=n.id,u=n.record,d=n.trigger,s=n.onSuccess,l=n.renderForm,f=n.requestGetById,H=n.requestGetByRecord,P=n.requestAdd,K=n.requestUpdateById,te=n.renderFormInstance,Y=(0,i.useRef)(""+Math.random()),_=ne.A.useForm(te),q=N()(_,1),A=q[0],ee=(0,i.useCallback)(function(){var ae=B()(O()().mark(function C(V){return O()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(v.prev=0,!(t==="create"&&P)){v.next=5;break}return v.next=4,P(V);case 4:w.ZP.open({type:"success",content:"\u521B\u5EFA\u6210\u529F"});case 5:if(!(t==="update"&&K)){v.next=9;break}return v.next=8,K(c()(c()({},V),{},{id:a}));case 8:w.ZP.open({type:"success",content:"\u66F4\u65B0\u6210\u529F"});case 9:return s==null||s(),v.abrupt("return",!0);case 13:v.prev=13,v.t0=v.catch(0),setTimeout(function(){throw v.t0},10);case 16:case"end":return v.stop()}},C,null,[[0,13]])}));return function(C){return ae.apply(this,arguments)}}(),[t,s,P,K,a]),ue=(0,i.useCallback)(function(ae){if(ae&&(A==null||A.resetFields(),a)){if(f)return f({id:a}).then(function(C){A==null||A.setFieldsValue(C.data.data)});if(H)return H(u).then(function(C){A==null||A.setFieldsValue(C.data.data)})}},[A,a,f,H,u]),re=(0,i.useMemo)(function(){return l?l({readonly:t==="read"&&!!a},{action:t}):null},[t,a,l]);return(0,r.jsxs)(j.a,{form:A,trigger:d,autoFocusFirstInput:!0,onFinish:ee,onOpenChange:ue,layout:"vertical",readonly:t==="read"&&!!a,children:[(0,r.jsx)("div",{className:"h-[20px]"}),re]},a||Y.current)}var ie=(0,i.forwardRef)(function(t,a){var u=t.actions,d=t.hmTableProps,s=t.createButton,l=t.deleteProps,f=t.detailIdIndex,H=t.renderForm,P=t.requestGetById,K=t.requestGetByRecord,te=t.requestAdd,Y=t.requestUpdateById,_=t.renderFormInstance,q=(0,i.useRef)(),A=(0,D.TH)();(0,i.useImperativeHandle)(a,function(){return{getActionRef:function(){return q}}},[q]);var ee=(0,i.useMemo)(function(){return{renderForm:H,requestGetById:P,requestGetByRecord:K,requestAdd:te,requestUpdateById:Y,renderFormInstance:_}},[H,te,P,K,Y,_]),ue=(0,i.useCallback)(function(C){return function(){if(l!=null&&l.deleteById)return l.deleteById({id:C.id,ids:[C.id]}).then(function(){var V;(V=q.current)===null||V===void 0||V.reload()});if(l!=null&&l.deleteByRecord)return l.deleteByRecord(C).then(function(){var V;(V=q.current)===null||V===void 0||V.reload()});throw new Error("\u6CA1\u6709\u4F20 deleteById or deleteByRecord")}},[l]),re=(0,i.useCallback)(function(){var C;(C=q.current)===null||C===void 0||C.reload()},[]),ae=(0,i.useMemo)(function(){var C={title:"\u64CD\u4F5C",fixed:"right",width:120,render:function(Fe,v){return(0,r.jsxs)(oe.Z,{children:[u.includes("read")&&(0,r.jsx)(Q,c()({id:v.id,record:v,onSuccess:re,trigger:(0,r.jsx)("a",{children:"\u67E5\u770B"}),action:"read"},ee),"read"+v.id),u.includes("read_detail")&&(0,r.jsx)(le.rU,{to:"".concat(A.pathname,"/detail/").concat(v[f||"id"]),children:"\u67E5\u770B"}),u.includes("update")&&(0,r.jsx)(Q,c()({id:v.id,record:v,onSuccess:re,trigger:(0,r.jsx)("a",{children:"\u7F16\u8F91"}),action:"update"},ee),"update"+v.id),u.includes("delete")&&l&&(0,r.jsx)(I,{name:v[l.nameIndex],desc:l.desc,onDelete:ue(v)})]})}};return u.includes("read")||u.includes("read_detail")||u.includes("update")||u.includes("delete")?[].concat(o()(d.hmColumns||d.columns||[]),[C]):d.hmColumns},[u,l,f,ee,ue,re,d.columns,d.hmColumns,A.pathname]);return(0,r.jsx)("div",{className:"",children:(0,r.jsx)(E,c()(c()({rowKey:"id"},d),{},{scroll:y(ae),actionRef:q,toolBarRender:function(){return[].concat(o()(d.toolBarRender?d.toolBarRender.apply(d,arguments):[]),[u.includes("create")&&(0,r.jsx)(Q,c()({onSuccess:re,trigger:s,action:"create"},ee),"create")])},search:c()({layout:"vertical",defaultCollapsed:!1},d.search),hmColumns:ae}))})}),$=e(39935),x=e(53213);function R(n){var t=n.initialValue,a=n.type,u=n.data,d=n.column,s=n.all,l=(0,i.useMemo)(function(){return a==="table"&&s?[s].concat(o()(u)):u},[s,u,a]);return a==="table"?(0,r.jsx)($.Z,{name:d.dataIndex,options:l,initialValue:t===void 0&&s?s.value:t}):null}function U(n){var t=n.all,a=n.request,u=n.useRequestOptions,d=n.initialValue,s=(0,x.Z)(function(){return a()},u),l=s.data,f=l===void 0?[]:l,H=d===void 0&&t?t.value:d,P=(0,i.useMemo)(function(){var Y={};return f.forEach(function(_){Y[_.value]={text:_.label}}),Y},[f]),K=(0,i.useCallback)(function(Y){return c()(c()({},Y),{},{valueEnum:P,renderFormItem:function(q,A){var ee=A.type;return(0,r.jsx)(R,{type:ee,data:f,column:Y,all:t,initialValue:H})}})},[t,f,H,P]),te={options:f};return{selectColumn:K,proFormSelectProps:te}}var X=e(13194),h=e(28026),L=e.n(h),de=["hmItems","items"];function he(n){var t=n.hmItems,a=n.items,u=p()(n,de),d=(0,i.useMemo)(function(){return t?t.map(function(s){var l=s.children;return s.children!==null&&s.children!==void 0&&(s.valueType==="date"?l=L()(l).format("YYYY-MM-DD"):s.valueType==="dateTime"?l=L()(l).format("YYYY-MM-DD HH:mm:ss"):s.valueType==="time"&&(l=L()(l).format("HH:mm:ss"))),c()(c()({},s),{},{children:l||"-"})}):a},[t,a]);return(0,r.jsx)(X.Z,c()({items:d},u))}var ve=e(34019),je=e(65273),$e=e(59590),Se=e(32479),pe={width:"100%",height:"100%"};function ye(n){var t=n.value,a=n.onChange,u=n.readonly;return(0,r.jsx)(ve.ZP,{style:pe,mode:"javascript",theme:"monokai",value:t,onChange:a,readOnly:u,name:"javascript_editor",editorProps:{$blockScrolling:!0},setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}var me=e(46182);function ge(n){var t=n.value,a=n.onChange,u=n.readonly,d=(0,i.useRef)(null),s=(0,i.useRef)(null),l=(0,i.useRef)(a);return(0,i.useEffect)(function(){var f;(f=s.current)===null||f===void 0||f.update({text:t||""})},[t]),(0,i.useEffect)(function(){s.current=new me.q9({target:d.current,props:{mode:me.AR.text,readOnly:u,content:{text:t||""},onChange:function(H){l.current(H.text)}}})},[]),(0,r.jsx)("div",{ref:d,className:"h-full w-full"})}var Ie=e(70876),Me=e(51709),De=["children","className","node"];function Re(n){var t=n.value;return(0,r.jsx)(Ie.U,{unwrapDisallowed:!0,components:{code:function(u){var d=u.children,s=u.className,l=u.node,f=p()(u,De),H=/language-(\w+)/.exec(s||"");return H?(0,r.jsx)(Me.Z,c()(c()({},f),{},{PreTag:"div",wrapLongLines:!0,children:String(d).replace(/\n$/,""),language:H[1].toLowerCase()})):(0,r.jsx)("code",c()(c()({},f),{},{className:s,children:d}))}},children:t||""})}var Pe=e(55860),Ce=e(32732),Be=e(43472);function Ee(n){var t=n.value,a=n.onChange,u=function(l){return a==null||a(l),!1},d=function(){a==null||a(void 0)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Ce.Z,{name:"file",maxCount:1,showUploadList:!0,fileList:t?[t]:void 0,beforeUpload:u,onRemove:d,children:(0,r.jsx)(Be.ZP,{icon:(0,r.jsx)(Pe.Z,{}),children:"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6"})})})}var xe=e(39106),Ue=["value","onChange"];function He(n){var t=n.value,a=n.onChange,u=p()(n,Ue);return(0,r.jsx)(xe.Z,c()(c()({},u),{},{value:!!t,onChange:function(s){return a==null?void 0:a(Number(s))}}))}var ce=e(64934),Oe=e(65124),Te=function(t){return function(a,u,d){var s=(0,Oe.mW)(t);return s(a,u,d)}},fe=Te,Ae=function(t){return t?(0,ce.Ue)()(fe(t)):function(a){return(0,ce.Ue)()(fe(a))}}},96595:function(b,m,e){e.r(m),e.d(m,{texts:function(){return o}});var W=e(14625);const o=[{value:`// commitlint.config.js
module.exports = { extends: ['@huomu/commit-lint'] };
`,paraId:0,tocIndex:0}]},72221:function(b,m,e){e.r(m),e.d(m,{texts:function(){return o}});var W=e(73134);const o=[{value:"\u9700\u8981\u4E86\u89E3 ant pro-components",paraId:0,tocIndex:0},{value:"import { CURD } from '@huomu/core';",paraId:1,tocIndex:0},{value:"\u57FA\u4E8E ant pro-components \u901A\u7528\u7684 CURD \u7EC4\u4EF6\uFF0C\u540C\u65F6\u4FDD\u7559\u6269\u5C55\u6027\u3002",paraId:2,tocIndex:0},{value:"\u70B9\u51FB\u67E5\u770B\uFF0C\u5728 url \u4E0A\u6DFB\u52A0 ",paraId:3,tocIndex:2},{value:"xxx/detail/[id]",paraId:3,tocIndex:2},{value:"\u83B7\u53D6 ProTable \u7684 actionRef",paraId:4,tocIndex:3}]},9836:function(b,m,e){e.r(m),e.d(m,{texts:function(){return o}});var W=e(62545);const o=[{value:`// .eslintrc.js
module.exports = {
  extends: ['@huomu/eslint-config-base'],
};
`,paraId:0,tocIndex:0}]},1425:function(b,m,e){e.r(m),e.d(m,{texts:function(){return o}});var W=e(61865);const o=[{value:`Usage: index [options] [command]

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  build_api [options]   swagger \u6587\u6863\u751F\u6210 API \u65B9\u6CD5
  build_enum [options]  \u6839\u636E\u679A\u4E3E\u751F\u6210\u4EE3\u7801
  help [command]        display help for command
`,paraId:0,tocIndex:0}]},96844:function(b,m,e){e.r(m),e.d(m,{texts:function(){return o}});var W=e(39656);const o=[{value:`// .stylelintrc.js
module.exports = {
  extends: ['@huomu/style-lint'],
};
`,paraId:0,tocIndex:0}]}}]);
