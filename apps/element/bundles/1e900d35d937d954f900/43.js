(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1681:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(1),i=n.n(o),r=n(0),c=n.n(r),a=n(10),s=n(2),l=n(12),p=n(13),m=n(34),d=n(60);class u extends c.a.PureComponent{constructor(...e){super(...e),i()(this,"onGoToSettingsClick",(()=>{this.props.onFinished(),a.a.fire(p.a.ViewUserSettings)})),i()(this,"onSetupClick",(()=>{this.props.onFinished(),l.b.createDialogAsync(n.e(7).then(n.bind(null,1481)),void 0,void 0,!1,!0)}))}render(){const e=c.a.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},Object(s.b)("encryption|recovery_method_removed|title"));return c.a.createElement(m.a,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:e},c.a.createElement("div",null,c.a.createElement("p",null,Object(s.b)("encryption|recovery_method_removed|description_1")),c.a.createElement("p",null,Object(s.b)("encryption|recovery_method_removed|description_2")),c.a.createElement("p",{className:"warning"},Object(s.b)("encryption|recovery_method_removed|warning")),c.a.createElement(d.a,{primaryButton:Object(s.b)("common|setup_secure_messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:Object(s.b)("common|go_to_settings"),onCancel:this.onGoToSettingsClick})))}}}}]);
//# sourceMappingURL=43.js.map