/**
 * ***********************************************************************************
 *                           FORMULARIO  PARA EL LOGEO  DEL USUARIO
 * ***********************************************************************************
 */
Ext.onReady(function(){
 
Ext.define('appApplication.view.LoginUser',{
    extend     :'Ext.window.Window',
    alias      :'widget.loginUser',
    id         :'loginUser',
    name       :'loginUser',
    renderTo   :Ext.getBody(),
    title      :'Acceso al Sistema',
    height     :320,    
    width      :450,
    iconCls    :'login',
    layout     :'fit',
    resizable  :false,
    draggable  :false,
    closable   :false,
    autoShow   :true,
    initComponent:function(){
        this.items = [{
                xtype:'form',
                id:'frmLogin',
                name:'frmLogin',
                url:'main.php?class=ControllerClass_User&action=validateUser',
                layout:{
                    type:'table',
                    columns:3
                },
                defaults:{
                    padding:5
                },
                frame:true,
                items:[{
                       
                          xtype:'CompanyDefaultDataStore',
                          border:false,
                          colspan:3
                    },{
                           xtype:'image',
                           name:'imgLogin',
                           id:'imgLogin',
                           height:100,
                           width:100,
                           src:'Public/Images/icono_login.gif'
                    },{
                          xtype:'panel',
                          colspan:2,
                          frame:true,
                          
                          items:[{
                          xtype:'textfield',
                          name:'txtUser',
                          id:'txtUser',
                          fieldLabel:'Usuario',
                          allowBlank:false,
                          blankText:'Ingrese un Usuario'     
                    },{
                        xtype:'textfield',
                        name:'txtPassword',
                        id:'txtPassword',
                        fieldLabel:'Contraseña',
                        inputType:'password',
                        allowBlank:false,
                        blankText:'Ingrese una Contraseña ',
                        listeners:{
                            'specialkey':function(field,e){
                                if(e.getKey() === e.ENTER){
                                    validateUser();
                                }
                            }
                        }
                    }]
                }]
        }],
        this.buttons = [{
                text:'Ingresar',
                name:'btnInput',
                id:'btnInput',
                scale:'medium',
                iconCls:'application_go',
                handler:function(){
                    validateUser();
                }
        },{
               text:'Limpiar',
               name:'btnReset',
               id:'btnReset',
               scale:'medium',
               handler:function(){
                   Ext.getCmp('frmLogin').getForm().reset();
               }
        }];
    
        this.callParent(arguments);
    }
    
});

var companyDefaultStore = Ext.create('Ext.data.Store',{
    fields:[{name:'pkCompany',type:'int'},
            {name:'companyDescription',type:'string'},
            {name:'companyName',type:'string'},
            {name:'yearName',type:'string'},
            {name:'address',type:'string'},
            {name:'ruc',type:'string'},
            {name:'companyLogo',type:'string'},
            {name:'applicationName',type:'string'},
            {name:'applicationLogo',type:'string'},
            {name:'defaultCompany',type:'int'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}],
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Company&action=defaultCompanyData',
        reader:{
            type:'json',
            root:'data'
        }
    }
});
Ext.define('viewCompanyDefaultDataStore',{
                extend:'Ext.view.View',
                alias:'widget.CompanyDefaultDataStore',
                store:companyDefaultStore,
                itemTpl:'<table><tr height="100"><td>'+
                        '<img src="Public/Images/Company/{companyLogo}" height="90" width="90"></img></td>'+
                        '<td width="240" align="center"><font size="+1" color="black" face="Times New Roman">'+
                        '{applicationName}</font></td>'+
                        '<td><img src="Public/Images/Company/{applicationLogo}" height="90" width="90"></img></td></tr></table>'
                 
                        
     })
function  validateUser(){
   if(Ext.getCmp('frmLogin').getForm().isValid()){
                        Ext.getCmp('frmLogin').getForm().submit({
                            method:'POST',
                            waitTitle:'Validando Datos',
                            waitMsg:'Enviando Datos',
                            success:function(form,action){
                                var data = Ext.JSON.decode(action.response.responseText);
                                if(data.message === 'INPUT')
                                location.href = 'app.php';
                               else{
                                 Ext.MessageBox.show({
                                    title:'MENSAJE AL USUARIO',
                                    buttons: Ext.MessageBox.OK,
                                    msg:data.message,
                                    icon:Ext.Msg.ERROR
                                });
                                Ext.getCmp('txtPassword').reset();
                               }
                            } 
                            
                        });
                    }
}
Ext.widget('loginUser');
});