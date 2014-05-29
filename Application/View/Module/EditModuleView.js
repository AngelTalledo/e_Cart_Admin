/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Module.EditModuleView',{
    extend:'Ext.window.Window',
    id:'wdwEditModuleView',
    name:'wdwEditModuleView',
    alias:'widget.editModule',
    title:'Editar Modulo',
    layout:'fit',
    height:300,
    width:600,
    resizable:false,
    autoShow:true,
    modal:true,
    initComponent:function(){
        this.items = [{
                xtype:'form',
                id:'frmEditModuleView',
                name:'frmEditModuleView',
                bodyPadding:5,
                defaults:{
                    labelWidth:150,
                    width:500
                },
                items:[{
                        xtype:'textfield',
                        id:'txtPkModule',
                        name:'pkModule',
                        hidden:true
                },{
                        xtype:'textfield',
                        id:'txtModuleName',
                        name:'moduleName',
                        fieldLabel:'Nombre del Modulo',
                        maxLength:30
                },{
                       xtype:'textfield',
                       id:'txtTableName',
                       name:'tableName',
                       fieldLabel:'Nombre de la Tabla',
                       vtype:'alpha',
                       maxLength:30
                },{
                       xtype:'checkbox',
                       id:'txtShowInterface',
                       name:'showInterface',
                       fieldLabel:'Interfaz'
                },{
                      xtype:'checkbox',
                      id:'txtStatusRegister',
                      name:'statusRegister',
                      fieldLabel:'Activo',
                      checked:true
                }]
                
        }],
        this.buttons = [{
                           text:'Guardar',
                           id:'btnSaveModule',
                           name:'btnSaveModule',
                           iconCls:'Save',
                           action:'saveModule'
        },{
                           text:'Limpiar',
                           name:'btnResetUser',
                            iconCls:'clear',
                            handler:function(){
                            Ext.getCmp('frmEditModuleView').getForm().reset();
                      }
        },{
                           text:'Cancelar',
                           iconCls:'delete',
                           handler:function(){
                           Ext.getCmp('wdwEditModuleView').close();
            }        
        }];   
        this.callParent(arguments);
    }
    
    
    
});

