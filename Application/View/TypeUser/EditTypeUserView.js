/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.TypeUser.EditTypeUserView',{
    extend:'Ext.window.Window',
    id:'wdwEditTypeUserView',
    name:'wdwEditTypeUserView',
    alias:'widget.editTypeUser',
    title:'Editar Tipo  de Usuario',
    height:500,
    width:600,
    layout:'fit',
    modal:true,
    autoShow:true,
    resizable:false,
    initComponent:function(){
        this.items = [{
                xtype:'form',
                id:'frmEditTypeUser',
                name:'frmEditTypeUser',
                bodyPadding:5,
                defaults:{
                    labelWidth:150,
                    width:500
                },
                items:[{
                        xtype:'textfield',
                        id:'txtPkTypeUser',
                        name:'pkUserType',
                        hidden:true
                },{
                       xtype:'textfield',
                       id:'txtTypeUserName',
                       name:'userTypeName',
                       fieldLabel:'Tipo de Usuario',
                       maxLength:20
                },{
                      xtype:'checkbox',
                      id:'chkDefaultTypeUser',
                      name:'defaultTypeUser',
                      fieldLabel:'Por Defecto'
                },{
                      xtype:'checkbox',
                      id:'txtStatusRegister',
                      name:'statusRegister',
                      fieldLabel:'Estado'
                }]
        }],
        this.buttons = [{
                      text:'Guardar',
                      action:'saveTypeUser',
                      iconCls:'Save'
        },{
                      text:'Limpiar',
                      iconCls:'clear',
                      id:'btnResetTypeUser',
                      name:'btnResetTypeUser',
                    handler:function(){
                        Ext.getCmp('frmEditTypeUser').getForm().reset();
                    }                        
        },{
                      text:'Cancelar',
                      iconCls:'delete',
                    handler:function(){
                        Ext.getCmp('wdwEditTypeUserView').close();
                    }
        }]
        this.callParent(arguments);
    }
    
});

