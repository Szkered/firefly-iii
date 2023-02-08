"use strict";(globalThis["webpackChunkfirefly_iii"]=globalThis["webpackChunkfirefly_iii"]||[]).push([[4777],{4777:(t,e,r)=>{r.r(e),r.d(e,{default:()=>R});var n=r(9835),a=r(6970);const o=(0,n._)("br",null,null,-1),i=["title"],s={key:0};function l(t,e,r,l,u,c){const m=(0,n.up)("q-item-label"),d=(0,n.up)("q-item-section"),p=(0,n.up)("q-item"),h=(0,n.up)("q-separator"),g=(0,n.up)("q-icon"),f=(0,n.up)("q-card-section"),_=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(_,{bordered:"",flat:"",class:"fit"},{default:(0,n.w5)((()=>[(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,a.zw)(t.$t("firefly.net_worth")),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(h),(0,n.Wm)(f,{horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(g,{color:u.primary>0?"positive":"negative",name:"fas fa-chart-line",size:"50px"},null,8,["color"])])),_:1}),(0,n.Wm)(h,{vertical:""}),(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,(0,a.zw)(c.formatAmount(u.currency,u.primary)),1),o,(0,n._)("small",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.netWorth,((t,e)=>((0,n.wg)(),(0,n.iD)("span",null,[(0,n._)("span",{title:c.formatAmount(t.native_code,t.native_sum)},(0,a.zw)(c.formatAmount(t.code,t.sum)),9,i),e+1!==u.netWorth.length?((0,n.wg)(),(0,n.iD)("span",s," + ")):(0,n.kq)("",!0)])))),256))])])),_:1})])),_:1})])),_:1})}var u=r(3555),c=r(1569),m=r(8898);class d{get(t){let e=(0,m.Z)(t,"y-MM-dd");return c.api.get("/api/v2/net-worth",{params:{date:e}})}}const p={name:"NetWorthInsightBox",data(){return{netWorth:[],primary:0,currency:"EUR",store:null}},mounted(){this.store=(0,u.S)(),this.store.$onAction((({name:t,$store:e,args:r,after:n,onError:a})=>{n((e=>{"setRange"===t&&this.triggerUpdate()}))})),this.triggerUpdate()},methods:{triggerUpdate:function(){if(null!==this.store.getRange.start&&null!==this.store.getRange.end){this.unpaid=[];const t=new Date(this.store.getRange.start),e=new Date(this.store.getRange.end),r=new Date;let n=e;r>=t&&r<=e&&(n=r),this.currency=this.store.getCurrencyCode,(new d).get(n).then((t=>this.parseResponse(t.data)))}},parseResponse(t){for(let e in t)if(t.hasOwnProperty(e)){const r=t[e],n=r.converted&&r.native_id!==r.id&&0!==parseFloat(r.native_sum);r.converted&&(n||r.native_id===r.id)&&(this.primary=this.primary+parseFloat(r.native_sum)),r.converted||(this.primary=this.primary+parseFloat(r.sum)),0!==parseFloat(r.sum)&&this.netWorth.push({sum:r.sum,code:r.code,native_sum:r.converted?r.native_sum:r.sum,native_code:r.converted?r.native_code:r.code,native:n})}},formatAmount:function(t,e){return Intl.NumberFormat(this.store?.getLocale??"en-US",{style:"currency",currency:t}).format(e)}}};var h=r(1639),g=r(4458),f=r(490),_=r(1233),v=r(3115),w=r(926),y=r(3190),W=r(2857),b=r(9984),Z=r.n(b);const q=(0,h.Z)(p,[["render",l]]),R=q;Z()(p,"components",{QCard:g.Z,QItem:f.Z,QItemSection:_.Z,QItemLabel:v.Z,QSeparator:w.Z,QCardSection:y.Z,QIcon:W.Z})}}]);