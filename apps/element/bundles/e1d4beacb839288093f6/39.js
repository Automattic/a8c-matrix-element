(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1585:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var s=n(1),a=n.n(s),i=n(0),r=n.n(i),l=n(34),o=n(38),d=n(60),c=n(9),u=n(2),b=n(5),p=n(1314),h=n(14),m=n(15);class w extends r.a.Component{constructor(e){super(e),a()(this,"onDisable",(async()=>{this.setState({disabling:!0}),await b.b.setValue("enableEventIndexing",null,m.a.DEVICE,!1),await p.a.deleteEventIndex(),this.props.onFinished(!0),c.a.fire(h.a.ViewUserSettings)})),this.state={disabling:!1}}render(){return r.a.createElement(l.a,{onFinished:this.props.onFinished,title:Object(u.b)("Are you sure?")},Object(u.b)("If disabled, messages from encrypted rooms won't appear in search results."),this.state.disabling?r.a.createElement(o.a,null):r.a.createElement("div",null),r.a.createElement(d.a,{primaryButton:Object(u.b)("Disable"),onPrimaryButtonClick:this.onDisable,primaryButtonClass:"danger",cancelButtonClass:"warning",onCancel:this.props.onFinished,disabled:this.state.disabling}))}}}}]);
//# sourceMappingURL=39.js.map