(this["webpackJsonpuscis-case-statistics"]=this["webpackJsonpuscis-case-statistics"]||[]).push([[0],{186:function(e,t,a){e.exports=a.p+"static/media/donation_wechat.84e04efe.jpg"},187:function(e,t,a){e.exports=a.p+"static/media/wechat_qr.6a2dd925.jpg"},219:function(e,t,a){e.exports=a(433)},433:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(34),o=a.n(l),c=a(189),i=a(115),u=a.n(i),s=a(175),m=a(63),d=a(176),p=a.n(d),f=a(87),h=a(177),E=a.n(h),g=a(116),v=a.n(g),y=a(119),w=a(22),b=a(461),x=a(464),A=a(463),S=a(457),k=a(459),j=a(462),I=a(460),L=a(186),O=a.n(L),C=a(187),D=a.n(C);function Q(e){var t;return null!==(t=f.a.Map([["Case Was Received","#999900"],["Case Was Approved","#00FF00"],["Request for Additional Evidence Was Sent","#FF0000"]]).get(e))&&void 0!==t?t:(new p.a).hex(e)}var W=function(){var e,t,a,l,o,i,d,p=null!==(e=new URL(window.location.href).searchParams.get("form"))&&void 0!==e?e:"I-129",h=null!==(t=new URL(window.location.href).searchParams.get("center"))&&void 0!==t?t:"WAC",g=Object(n.useState)(null),L=Object(m.a)(g,2),C=L[0],W=L[1],U=Object(n.useState)({}),F=Object(m.a)(U,2),R=F[0],K=F[1],N=function(e,t){var a=new URL(window.location.href),n=a.searchParams;n.set(e,t),a.search=n.toString(),window.location.href=a.toString()},P=new URL(window.location.href);Object(n.useEffect)((function(){Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.searchParams.get("form")||N("form","I-129"),P.searchParams.get("center")||N("center","WAC"),e.t0=K,e.t1=E.a,e.next=6,fetch("https://raw.githubusercontent.com/vicdus/uscis-case-statistics/master/src/data.json5");case 6:return e.next=8,e.sent.text();case 8:e.t2=e.sent,e.t3=e.t1.parse.call(e.t1,e.t2),(0,e.t0)(e.t3);case 11:case"end":return e.stop()}}),e)})))()}),[]);var B=f.a.List(Object.entries(R).flatMap((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1],r=a.split("|"),l=Object(m.a)(r,6),o=l[0],c=l[1],i=l[2],u=l[3],s=l[4],d=l[5];return Object.entries(n).map((function(e){return{center:o,year:c,day:i,code:u,form:s,status:d,updateDay:e[0],count:e[1]}}))}))),M=B.filter((function(e){return e.form===p&&e.center===h})),_=M.map((function(e){return Number.parseInt(e.updateDay)})).toSet().toList().sort(),q=M.map((function(e){return e.count})).toSet().toList().sort(),H=M.map((function(e){return Number.parseInt(e.updateDay)})).max(),J=M.filter((function(e){var t;return e.updateDay===(null===(t=null!==C&&void 0!==C?C:H)||void 0===t?void 0:t.toString())})),G=B.map((function(e){return e.form})).toSet(),T=B.map((function(e){return e.center})).toSet(),V=M.countBy((function(e){return e.status})),$=M.map((function(e){return e.status})).toSet().toList().sortBy((function(e){var t;return-(null!==(t=V.get(e))&&void 0!==t?t:0)})),z=M.map((function(e){return Number.parseInt(e.day)})).toSet().toList().sort(),X=J.groupBy((function(e){return e.day})).map((function(e,t){return Object(c.a)({day:t},e.reduce((function(e,t){return e.set(t.status,t.count)}),f.a.Map()).toObject())})).toList().sort((function(e,t){return Number.parseInt(e.day)-Number.parseInt(t.day)})).toArray(),Y=z.map((function(e){var t;return null!==(t=X.find((function(t){return t.day===e.toString()})))&&void 0!==t?t:{day:e}})).toArray(),Z=r.a.createElement(w.e,{width:1440,height:810,data:Y},r.a.createElement(w.c,{strokeDasharray:"3 3"}),r.a.createElement(w.g,{dataKey:"day"}),r.a.createElement(w.h,{type:"number",height:810,domain:[0,null!==(a=q.max())&&void 0!==a?a:1]}),r.a.createElement(w.f,{offset:100,itemSorter:function(e){var t;return-e.payload[v()(null===(t=e.dataKey)||void 0===t?void 0:t.toString())]}}),$.toArray().map((function(e,t){return r.a.createElement(w.d,{key:t,type:"linear",isAnimationActive:!1,dataKey:e,stroke:Q(e)})}))),ee=r.a.createElement(w.b,{width:1440,height:810,data:Y},r.a.createElement(w.c,{strokeDasharray:"3 3"}),r.a.createElement(w.g,{dataKey:"day"}),r.a.createElement(w.h,{type:"number",height:810,domain:[0,null!==(l=q.max())&&void 0!==l?l:1]}),r.a.createElement(w.f,{offset:100,itemSorter:function(e){return-$.indexOf(v()(e.dataKey))}}),$.toArray().map((function(e,t){return r.a.createElement(w.a,{key:t,isAnimationActive:!1,dataKey:e,stackId:"a",fill:Q(e)})}))),te=r.a.createElement("div",null,r.a.createElement("h1",null,"USCIS case progress tracker"),r.a.createElement("p",null,"Current Form: ",r.a.createElement("strong",null,p),",",r.a.createElement("br",null)," location:"," ",r.a.createElement("strong",null,h)," ,",r.a.createElement("br",null)," Last Update for this form and location:",r.a.createElement("strong",null,H?new Date(864e5*H+252e5).toDateString():"Not Exist currently")),r.a.createElement("h3",null,"Help needed for UI and clawer"),r.a.createElement("p",null,"GitHub project:",r.a.createElement("a",{href:"https://github.com/vicdus/uscis-case-statistics/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/vicdus/uscis-case-statistics/"))),ae=_.max()?r.a.createElement(S.a,{item:!0,xs:8},r.a.createElement(I.a,{style:{marginLeft:"128px",marginRight:"128px"},defaultValue:null!==(o=_.max())&&void 0!==o?o:1,onChange:function(e,t){return W(t.toString())},"aria-labelledby":"discrete-slider",valueLabelDisplay:"off",step:null,marks:_.map((function(e){return{value:e,label:1+new Date(864e5*e+252e5).getMonth()+"/"+new Date(864e5*e+252e5).getDate()}})).toArray(),min:null!==(i=_.min())&&void 0!==i?i:0,max:null!==(d=_.max())&&void 0!==d?d:1})):null,ne=r.a.createElement("div",null,r.a.createElement("h3",null,"Q and A"),r.a.createElement("h4",null,"Q: \u600e\u4e48\u7528\uff1f"),r.a.createElement("p",null,"A: \u6a2a\u5750\u6807\u662f\u53f7\u6bb5\uff0c\u7eb5\u5750\u6807\u662f\u72b6\u6001\u5bf9\u5e94\u7684\u6570\u91cf\u3002"),r.a.createElement("h4",null,"Q: \u4ec0\u4e48\u662f\u53f7\u6bb5\uff1f"),r.a.createElement("p",null,"A: \u8fd9\u5f20\u56fe\u91cc\u7684working day number"),r.a.createElement("img",{alt:"day-explain",src:"https://www.am22tech.com/wp-content/uploads/2018/12/uscis-receipt-number-status-i797-notice-truvisa.jpg"}),r.a.createElement("h4",null,"Q: \u4f60\u662f\u8c01\uff1f"),r.a.createElement("p",null,"A: \u6211\u4eca\u5e74\u62bd\u4e2d\u4e86h1b, \u5728\u7b49approve"),r.a.createElement("h4",null,"Q: \u6570\u636e\u6765\u6e90\uff1f"),r.a.createElement("p",null,"A: \u679a\u4e3e\u53f7\u6bb5\u4e0b\u6240\u6709\u53ef\u80fd\u7684case number\u5e76\u722c\u53d6USCIS, \u4fdd\u5b58\u6210\u6587\u4ef6"),r.a.createElement("h4",null,"Q: \u6ca1\u6709\u6211\u7684\u53f7\u6bb5\u7684\u6570\u636e\uff1f"),r.a.createElement("p",null,"A: \u53ef\u80fd\u9700\u8981\u5730\u91cc\u5927\u5bb6\u4e00\u8d77\u6765\u722c\u5e76\u66f4\u65b0\uff0c\u7a0d\u540e\u653e\u51fa\u6b65\u9aa4"),r.a.createElement("h4",null,"Q: \u4e3a\u4ec0\u4e48\u662f\u6587\u4ef6\uff1f\u4e3a\u4ec0\u4e48\u4e0d\u7528\u6570\u636e\u5e93\uff1f"),r.a.createElement("p",null,"A: \u8d2b\u7a77"),r.a.createElement("h4",null,"Q: \u8fd9\u4e2a\u5f88\u6709\u7528\uff0c\u53ef\u4ee5\u8bf7\u4f60\u559d\u676f\u5496\u5561\u5417\uff1f"),r.a.createElement("p",null,"A: \u611f\u8c22\uff01"),r.a.createElement("img",{src:O.a,alt:"wechat_donation",style:{width:"400px",height:"560px"}}),r.a.createElement("h4",null,"Q: \u6211\u60f3\u548c\u4f60\u804a\u4e00\u804a\uff1f"),r.a.createElement("p",null,"A: \u52a0\u6211\u5fae\u4fe1\u5427\uff01"),r.a.createElement("img",{src:D.a,alt:"wechat_donation",style:{width:"400px",height:"560px"}})),re=r.a.createElement(y.FacebookProvider,{appId:"185533902045623"},r.a.createElement(y.Comments,{href:"https://vicdus.github.io/uscis-case-statistics/"})),le=r.a.createElement(b.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(A.a,{component:"legend"},"Form Type"),r.a.createElement(j.a,{"aria-label":"form",name:"form",value:p,onChange:function(e){return N("form",e.target.value)},row:!0},G.toArray().sort().map((function(e,t){return r.a.createElement(x.a,{key:t,value:e,control:r.a.createElement(k.a,null),label:e})})))),oe=r.a.createElement(b.a,{fullWidth:!0,component:"fieldset"},r.a.createElement(A.a,{component:"legend"},"Center"),r.a.createElement(j.a,{"aria-label":"form",name:"form",value:h,onChange:function(e){return N("center",e.target.value)}},T.toArray().sort().map((function(e,t){return r.a.createElement(x.a,{key:t,value:e,control:r.a.createElement(k.a,null),label:e})}))));return r.a.createElement("div",null,te,ae,Z,ae,ee,le,oe,ne,re)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[219,1,2]]]);
//# sourceMappingURL=main.ae1972a9.chunk.js.map