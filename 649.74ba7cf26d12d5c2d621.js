(self.webpackChunkmycrypto=self.webpackChunkmycrypto||[]).push([[649],{649:(e,n,o)=>{"use strict";o.r(n),o.d(n,{EditPageModule:()=>u});var t=o(8583),i=o(665),l=o(7143),r=o(1323);const a=(0,o(8384).fo)("Browser",{web:()=>o.e(6764).then(o.bind(o,6764)).then(e=>new e.BrowserWeb)});var s=o(8720),c=o(7982);function d(e,n){1&e&&(s.TgZ(0,"p"),s._uU(1,"Please enter the symbol to unlock the buy option"),s.qZA())}const h=[{path:"",component:(()=>{class e{constructor(e,n,o){this.activatedRoute=e,this.router=n,this.holdingsService=o,this.doValidate=!1,this.model={_key:null,symbol:"",amount:null,exchange:"",owner:null},this.key=this.activatedRoute.snapshot.paramMap.get("key"),!this.isNewRecord&&this.holdingsService.getByKey(this.key).then(e=>this.holding=e).then(()=>this.model=this.holding)}ngOnInit(){}ngOnDestroy(){this.holdingsService=null}get errors(){return{symbol:this.doValidate&&0==this.model.symbol.trim().length,amount:this.doValidate&&(this.model.amount<0||null==this.model.amount),exchange:this.doValidate&&0==this.model.exchange.trim().length}}get isNewRecord(){return null===this.key}get isEmptySymbol(){return 0==this.model.symbol.length}onChangeSymbol(){this.model.symbol=this.model.symbol.toUpperCase().replace(" ","")}onChangeAmount(){this.model.amount=this.model.amount<0?0:this.model.amount}isValid(){for(const e in this.errors)if(this.errors[e])return!1;return!0}save(){this.doValidate=!0,this.isValid()&&(this.isNewRecord?this.holdingsService.create(this.model):this.holdingsService.update(this.key,this.model),this.router.navigate(["/ui/home"]))}openBinance(){this.isNewRecord&&(this.model.exchange="Binance"),this.openBrowser(`https://www.binance.com/en/trade/${this.model.symbol}_USDT`)}openFtx(){this.isNewRecord&&(this.model.exchange="FTX"),this.openBrowser(`https://ftx.com/trade/${this.model.symbol}/USDT`)}openCoinbase(){this.isNewRecord&&(this.model.exchange="Coinbase"),this.openBrowser(`https://pro.coinbase.com/trade/${this.model.symbol}-USDT`)}openBitpanda(){this.isNewRecord&&(this.model.exchange="Bitpanda"),this.openBrowser(`https://exchange.bitpanda.com/${this.model.symbol}_USDT`)}openBrowser(e){a.open({url:e})}}return e.\u0275fac=function(n){return new(n||e)(s.Y36(r.gz),s.Y36(r.F0),s.Y36(c.l))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-edit"]],decls:44,vars:17,consts:[["slot","start"],["defaultHref","/ui/home"],[3,"scrollY"],[1,"edit__container"],[1,"edit__form"],["position","stacked"],["name","symbol","type","text","inputmode","text","required","true","placeholder","BTC",3,"ngModel","color","ngModelChange","ionChange","change"],["name","amount","type","number","inputmode","decimal","required","true","min","0","step","0.5","placeholder","1.0",3,"ngModel","color","ngModelChange","ionChange","change"],["name","exchange","type","text","inputmode","text","required","true","placeholder","Binance",3,"ngModel","color","ngModelChange"],[1,"buy__container"],[1,"buy__label"],[3,"disabled","color","click"],["name","cart"],[4,"ngIf"],[1,"edit__submit","mt-4"],["expand","block",3,"click"]],template:function(e,n){1&e&&(s.TgZ(0,"ion-header"),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",0),s._UZ(3,"ion-back-button",1),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"ion-content",2),s.TgZ(7,"div",3),s.TgZ(8,"div",4),s.TgZ(9,"ion-item"),s.TgZ(10,"ion-label",5),s._uU(11,"Currency Symbol"),s.qZA(),s.TgZ(12,"ion-input",6),s.NdJ("ngModelChange",function(e){return n.model.symbol=e})("ionChange",function(){return n.onChangeSymbol()})("change",function(){return n.onChangeSymbol()}),s.qZA(),s.qZA(),s.TgZ(13,"ion-item"),s.TgZ(14,"ion-label",5),s._uU(15,"Amount"),s.qZA(),s.TgZ(16,"ion-input",7),s.NdJ("ngModelChange",function(e){return n.model.amount=e})("ionChange",function(){return n.onChangeAmount()})("change",function(){return n.onChangeAmount()}),s.qZA(),s.qZA(),s.TgZ(17,"ion-item"),s.TgZ(18,"ion-label",5),s._uU(19,"Exchange"),s.qZA(),s.TgZ(20,"ion-input",8),s.NdJ("ngModelChange",function(e){return n.model.exchange=e}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(21,"div",9),s.TgZ(22,"h2",10),s._uU(23,"Buy:"),s.qZA(),s.TgZ(24,"ion-chip",11),s.NdJ("click",function(){return n.openBinance()}),s._UZ(25,"ion-icon",12),s.TgZ(26,"ion-label"),s._uU(27,"Binance"),s.qZA(),s.qZA(),s.TgZ(28,"ion-chip",11),s.NdJ("click",function(){return n.openFtx()}),s._UZ(29,"ion-icon",12),s.TgZ(30,"ion-label"),s._uU(31,"FTX"),s.qZA(),s.qZA(),s.TgZ(32,"ion-chip",11),s.NdJ("click",function(){return n.openCoinbase()}),s._UZ(33,"ion-icon",12),s.TgZ(34,"ion-label"),s._uU(35,"Coinbase"),s.qZA(),s.qZA(),s.TgZ(36,"ion-chip",11),s.NdJ("click",function(){return n.openBitpanda()}),s._UZ(37,"ion-icon",12),s.TgZ(38,"ion-label"),s._uU(39,"Bitpanda"),s.qZA(),s.qZA(),s.YNc(40,d,2,0,"p",13),s.qZA(),s.qZA(),s.TgZ(41,"div",14),s.TgZ(42,"ion-button",15),s.NdJ("click",function(){return n.save()}),s._uU(43,"Save"),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(5),s.Oqu(n.isNewRecord?"New Holding":"Edit "+(null==n.holding?null:n.holding.symbol)),s.xp6(1),s.Q6J("scrollY",!1),s.xp6(6),s.Q6J("ngModel",n.model.symbol)("color",n.errors.symbol?"danger":""),s.xp6(4),s.Q6J("ngModel",n.model.amount)("color",n.errors.amount?"danger":""),s.xp6(4),s.Q6J("ngModel",n.model.exchange)("color",n.errors.exchange?"danger":""),s.xp6(4),s.Q6J("disabled",n.isEmptySymbol)("color","binance"==(null==n.model?null:n.model.exchange.toLowerCase())?"primary":""),s.xp6(4),s.Q6J("disabled",n.isEmptySymbol)("color","ftx"==(null==n.model?null:n.model.exchange.toLowerCase())?"primary":""),s.xp6(4),s.Q6J("disabled",n.isEmptySymbol)("color","coinbase"==(null==n.model?null:n.model.exchange.toLowerCase())?"primary":""),s.xp6(4),s.Q6J("disabled",n.isEmptySymbol)("color","bitpanda"==(null==n.model?null:n.model.exchange.toLowerCase())?"primary":""),s.xp6(4),s.Q6J("ngIf",n.isEmptySymbol))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,l.Ie,l.Q$,l.pK,l.j9,i.Q7,i.JJ,i.On,l.as,l.hM,l.gu,t.O5,l.YG],styles:[".edit__container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .edit__container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .edit__container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .edit__container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-inline-start:12px;padding-inline-end:12px}.buy__container[_ngcontent-%COMP%]{margin-top:2.5rem}.buy__container[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin-inline-start:12px;margin-inline-end:12px}.edit__submit[_ngcontent-%COMP%]{position:absolute;bottom:0;padding:0 12px;width:100vw;margin-bottom:10px}"]}),e})()}];let m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.Bz.forChild(h)],r.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[t.ez,i.u5,l.Pc,m]]}),e})()}}]);