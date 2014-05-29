/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.User.EditUserView',{
    extend:'Ext.window.Window',
    id:'wdwEditUser',
    name:'wdwEditUser',
    alias:'widget.editUser',
    title:'Editar Usuario',
    height:500,
    width:600,
    layout:'fit',
    autoShow:true,
    resizable:false,
    modal:true,
    initComponent:function(){
        this.items = [{
                       xtype:'form',
                       id:'frmEditUser',
                       name:'frmEditUser',
                       bodyPadding:5,
                       defaults:{
                           labelWidth:150,
                           width:500
                           
                       },
                       items:[{
                               xtype:'textfield',
                               id:'txtPkUser',
                               name:'pkUser',
                               hidden:true
                       },{
                                xtype:'combobox',
                                id:'cmbFkStaff',
                                name:'fkStaff',
                                fieldLabel:'Personal',
                                store:'Staff.ListStaffAllStore',
                                displayField:'fullNames',
                                valueField:'pkStaff',
                                pageSize:10,
                                hideTrigger:true,
                                minChars:1
                       },{
                                xtype:'combobox',
                                id:'cmbFkTypeUser',
                                name:'fkUserType',
                                fieldLabel:'Tipo de Usuario',
                                emptyText:'Seleccione Tipo de Usuario',
                                store:'TypeUser.ListTypeUserAllStore',
                                displayField:'userTypeName',
                                valueField:'pkUserType',
                                editable:false
                       },{
                                xtype:'checkbox',
                                id:'chkStatusREgister',
                                name:'statusRegister',
                                fieldLabel:'Estado'
                       }]
        }];
        this.buttons = [{
                text:'Guardar',
                action:'saveUser',
                iconCls:'Save'
        },{
                text:'Limpiar',
                id:'btnResetUser',
                name:'btnResetUser',
                iconCls:'clear',
                handler:function(){
                Ext.getCmp('frmEditUser').getForm().reset();
          }     
 },{
                text:'Cancelar',
                iconCls:'delete',
                handler:function(){
                Ext.getCmp('wdwEditUser').close();
            }   
   }];
        
        this.callParent(arguments);
    }
});

