(this["webpackJsonpbus-eta"]=this["webpackJsonpbus-eta"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(11),s=n.n(i),r=n(72),o=n(15),l=n(147),j=n(153),u=n(155),b=n(151),f=n(60),O=n.n(f),d=n(156),h=n(105),p=n(106),x=n(161),m=n(157),g=n(158),v=n(163),S=n(61),y=n(71),w=n(165),k=n(152),C=n(154),E=n(30),M=n.n(E),_=n(40),A=n(159),B=n(160),I=(n(90),n(27)),N=n(6),R=Object(l.a)({option:{fontSize:15,"& > span":{marginRight:10,fontSize:18}}});function Y(e){var t=R(),n=Object(c.useState)(!0),i=Object(o.a)(n,2),s=i[0],r=i[1],l=Object(c.useState)([]),j=Object(o.a)(l,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop").then((function(e){return e.json()})).then((function(e){console.log(e),b(e.data),r(!1)}))}),[]),Object(c.useEffect)((function(){console.log("useeffect get station",void fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop").then((function(e){return e.json()})).then((function(e){return e.data})))}),[]),s?"Loading":Object(N.jsx)(B.a,{id:"country-busstop",onChange:function(t,n){null!==n&&e.changeSelectStop(n.stop)},defaultValue:u.find((function(t){return t.stop===e.defaultStop})),options:u,classes:{option:t.option},autoHighlight:!0,getOptionLabel:function(e){return e.name_tc+" "+e.name_en},renderOption:function(e){return Object(N.jsxs)(a.a.Fragment,{children:[e.name_tc," ",e.name_en]})},renderInput:function(e){return Object(N.jsx)(A.a,Object(_.a)(Object(_.a)({},e),{},{label:"Choose a bus stop",variant:"outlined",inputProps:Object(_.a)(Object(_.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})}var H=n.p+"static/media/kmb-water.23d62c4c.png",T=Object(l.a)((function(e){return{title:{flexGrow:2,align:"center"},menuButton:{marginRight:e.spacing(2)},typography:{align:"center"},min:{align:"center"}}})),D=Object(y.a)();D=Object(w.a)(D);var J=function(e,t){var n=T(),a=Object(c.useState)([]),i=Object(o.a)(a,2),s=i[0],r=i[1],l=Object(c.useState)(),u=Object(o.a)(l,2),b=u[0],f=u[1],O=Object(c.useState)(),d=Object(o.a)(O,2),x=d[0],m=d[1],g=Object(c.useState)(e.defaultStop?e.defaultStop:"9583BCF159B682BA"),v=Object(o.a)(g,2),S=v[0],y=v[1],w=Object(c.useState)(e.defaultnumETA?e.defaultnumETA:1),E=Object(o.a)(w,2),_=E[0],A=E[1],B=_>0,R=function(){console.log("fetchKMB"),fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/"+S).then((function(e){return e.json()})).then((function(t){console.log(t),r(t.data.filter((function(t){return t.eta_seq<=_&&1===t.service_type&&(!!e.isSpecialRoute||!t.rmk_en.includes("route only"))}))),f(t.generated_timestamp),m(M()())}))},J=function(e){var t=M()(e),n=-1*M()().diff(t,"seconds"),c=-1*M()().diff(t,"minutes");return null==e?Object(N.jsx)(h.a,{variant:I.isMobile?"subtitle2":"h5",children:"\u6c92\u6709\u73ed\u6b21"}):Object(N.jsx)(h.a,{variant:I.isMobile?"h6":"h4",children:n>60?c+" min":"- min"})};return Object(c.useEffect)((function(){R();var e=setInterval((function(){R()}),5e3);return function(){return clearInterval(e)}}),[S,_,e.isSpecialRoute]),Object(c.useImperativeHandle)(t,(function(){return{selectStop:S,numETA:_}}),[S,_]),Object(N.jsx)(k.a,{theme:D,children:Object(N.jsxs)(j.a,{children:[Object(N.jsxs)(j.a,{container:!0,style:{padding:"5px",minWidth:I.isMobile?"60vw":"40vw"},children:[Object(N.jsx)(j.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:Object(N.jsx)(j.a,{align:"center",style:{flex:2},children:Object(N.jsx)(Y,{changeSelectStop:function(e){y(e)},defaultStop:e.defaultStop})})}),Object(N.jsx)(j.a,{alignItems:"left",justifyContent:"center",children:Object(N.jsxs)(C.a,{children:[Object(N.jsx)(p.a,{onClick:function(){A(_+1)},children:"+"}),B&&Object(N.jsx)(p.a,{disabled:!0,children:_}),B&&Object(N.jsx)(p.a,{onClick:function(){A(_-1)},children:"-"})]})}),Object(N.jsxs)(j.a,{direction:"row",style:{flex:1,align:"center"},children:[Object(N.jsxs)(h.a,{align:"right",variant:"subtitle2",children:["Last Update: ",M()(b).format("YYYY/MM/DD HH:mm:ss")]}),Object(N.jsxs)(h.a,{align:"right",variant:"subtitle2",children:["Last Refresh:"," ",M()(x).format("YYYY/MM/DD HH:mm:ss")]})]})]}),Object(N.jsx)(j.a,{direction:"row",justify:"space-between",alignItems:"center",children:s.map((function(e,t){return Object(N.jsxs)(j.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",style:{minHeight:"10vh"},children:[Object(N.jsx)(j.a,{style:{flex:1},children:1===e.eta_seq&&Object(N.jsx)(h.a,{align:"center",variant:"h3",children:e.route})}),Object(N.jsx)(j.a,{style:{flex:4},children:1===e.eta_seq&&Object(N.jsxs)(h.a,{align:"center",variant:"h5",className:n.typography,children:[Object(N.jsx)(h.a,{variant:"h5",className:n.typography,children:e.dest_tc}),!I.isMobile&&Object(N.jsx)(h.a,{variant:"h6",className:n.typography,children:e.dest_en})]})}),Object(N.jsx)(j.a,{style:{flex:1},children:Object(N.jsxs)(h.a,{align:"center",className:n.min,children:[J(e.eta),Object(N.jsx)(h.a,{variant:I.isMobile?"subtitle2":"h6",children:e.rmk_tc})]})}),!I.isMobile&&Object(N.jsx)("img",{src:H,className:"photo",alt:"KMB",width:"100px",height:"100px"})]})}))})]})})},L=Object(c.forwardRef)(J),q=Object(l.a)((function(e){return{BusStop:{flexGrow:2,align:"center"}}}));function z(){var e=q(),t=Object(c.useState)(1),n=Object(o.a)(t,2),a=(n[0],n[1],Object(c.useState)(!1)),i=Object(o.a)(a,2),s=i[0],l=i[1],f=Object(c.useState)(!1),y=Object(o.a)(f,2),w=y[0],k=y[1],C=Object(c.useState)([]),E=Object(o.a)(C,2),M=E[0],_=E[1],A=Object(c.useState)([]),B=Object(o.a)(A,2),I=B[0],R=B[1],Y=new S.a;return Object(c.useEffect)((function(){_((function(e){return Array(I.length).fill().map((function(t,n){return e[n]||Object(c.createRef)()}))}))}),[I]),Object(c.useEffect)((function(){console.log("elRefs",M)}),[M]),Object(c.useEffect)((function(){var e=Y.get("station");e&&R(e)}),[]),Object(N.jsxs)(j.a,{children:[Object(N.jsx)(u.a,{color:"secondary",children:Object(N.jsxs)(d.a,{children:[Object(N.jsx)(b.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){l(!0)},children:Object(N.jsx)(O.a,{})}),Object(N.jsx)(h.a,{variant:"h6",className:e.title,children:"Bus Arrival Time"})]})}),Object(N.jsx)(d.a,{}),Object(N.jsx)(j.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"baseline",children:I.map((function(e,t){return Object(N.jsx)(j.a,{style:{flex:1},children:Object(N.jsx)(L,{ref:M[t],isSpecialRoute:w,defaultStop:e.current.selectStop,defaultnumETA:e.current.numETA})})}))}),Object(N.jsxs)(x.a,{open:s,onOpen:s,children:[Object(N.jsx)(p.a,{onClick:function(){l(!1)},children:"Close"}),Object(N.jsx)(p.a,{onClick:function(){var e=JSON.stringify(M);console.log(M),console.log(e),(new S.a).set("station",e,{path:"/",maxAge:2147483647})},children:"Save"}),Object(N.jsx)(p.a,{onClick:function(){R((function(e){return[].concat(Object(r.a)(e),[{current:{stop:"",numETA:1}}])}))},children:"add"}),Object(N.jsx)(p.a,{onClick:function(){R([])},children:"remove all"}),Object(N.jsx)(m.a,{column:!0,children:Object(N.jsx)(g.a,{control:Object(N.jsx)(v.a,{checked:w,onChange:function(e){k(e.target.checked)}}),label:"\u7279\u5225\u8def\u7dda"})})]})]})}var F=document.getElementById("root");s.a.render(Object(N.jsx)(c.StrictMode,{children:Object(N.jsx)(z,{})}),F)},90:function(e){e.exports=JSON.parse("{}")}},[[103,1,2]]]);
//# sourceMappingURL=main.022c2d12.chunk.js.map