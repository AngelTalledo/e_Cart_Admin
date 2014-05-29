/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Company.EditCompanyLogoView',{
    extend:'Ext.window.Window',
    id:'wdwEditCompanyLogo',
    name:'wdwEditCompanyLogo',
    alias:'widget.editCompanyLogo',
    title:'Editar Logo',
    height:250,
    width:500,
    layout:'fit',
    modal:true,
    autoShow:true,
    resizable:false,
    initComponent:function(){
        this.items = [{
                xtype:'form',
                id:'frmEditCompanyLogo',
                url:'main.php?class=ControllerClass_Company&action=changeCompanyLogos',
                name:'frmEditCompanyLogo',
                defaults:{
                    width:400,
                    labelWidth:120
                },
                bodyPadding:5,
                items:[{
                        xtype:'textfield',
                        id:'txtPkCompany',
                        name:'pkCompany',
                        hidden:true
                },{
                        xtype:'filefield',
                        id:'txtApplicationLogo',
                        name:'txtApplicationLogo',
                        fieldLabel:'Logo de Aplicacion'
                },{
                       xtype:'filefield',
                       id:'txtCompanyLogo',
                       name:'txtCompanyLogo',
                       fieldLabel:'Logo de la Empresa'
                }]
        }],
    this.buttons = [{
            text:'Subir Imagenes',
            handler:function(){
                if(Ext.getCmp('frmEditCompanyLogo').getForm().isValid()){
                        Ext.getCmp('frmEditCompanyLogo').getForm().submit({
                            method:'POST',
                            waitTitle:'Validando Datos',
                            waitMsg:'Enviando Datos',
                            success:function(form,action){
                                var data = Ext.JSON.decode(action.response.responseText);
                                if(data.success){
                                 Ext.MessageBox.show({
                                    title:'MENSAJE AL USUARIO',
                                    buttons: Ext.MessageBox.OK,
                                    msg:data.message,
                                    icon:Ext.Msg.INFO
                                });
                                 Ext.getCmp('wdwEditCompanyLogo').close();
                                }
                            }
                            
                        });
                    }
            }
    
    },{
            text:'Cancelar',
            handler:function(){
                Ext.getCmp('wdwEditCompanyLogo').close();
            }
    }]       
    this.callParent(arguments);
    }
    
});

