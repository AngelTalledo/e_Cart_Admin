/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Menu.EditMenuView',{
    extend:'Ext.window.Window',
    id:'wdwEditMenuView',
    name:'wdwEditMenuView',
    alias:'widget.editMenu',
    title:'Editar Menu',
    height:500,
    width:600,
    layout:'fit',
    autoShow:true,
    modal:true,
    resizable:false,
    initComponent:function(){
        this.items = [{
                xtype:'form',
                id:'frmEditMenuView',
                name:'frmEditMenuView',
                bodyPadding:5,
                defaults:{
                    labelWidth:150,
                    width:500
                },
                items:[{
                        
                        xtype:'textfield',
                        id:'txtPkMenu',
                        name:'pkMenu',
                        fieldLabel:'Nombre del Menu',
                        allowBlank:false,
                        blankText:'Ingrese Nombre del Menu',
                        maxLength:30,
                        disabled:true
                },{
                       xtype:'textfield',
                       id:'txtTextMenu',
                       name:'textMenu',
                       fieldLabel:'Texto del Menu',
                       allowBlank:false,
                       blankText:'Ingrese el Texto del Menu'
                },
                {
                       xtype:'checkbox',
                       id:'chkLeaf',
                       name:'leaf',
                       fieldLabel:'Hoja',
                       checked:true,
                       handler:function(){
                           if(!this.value){
                           Ext.getCmp('fdsLeaf').setDisabled(!this.value);
                           Ext.getCmp('txtIconCls').setValue('_');
                           Ext.getCmp('txtXtypeClass').setValue('_');
                            Ext.getCmp('cmbFkModule').reset();
                           }else{
                               Ext.getCmp('fdsLeaf').setDisabled(!this.value);
                           }
                       }
                },{
                       xtype:'combobox',
                       id:'cmbFkMenu',
                       name:'fkMenu',
                       fieldLabel:'Menu',
                       store:'Menu.ListMenuAllStore',
                       displayField:'pkMenu'
//                       emptyText:'Seleccion Menu',
//                       editable:false

                         
                },{
                      xtype:'fieldset',
                      id:'fdsLeaf',
                      title:'Propiedades de Hoja',
                      defaults:{
                          width:450
                      },
                      items:[{
                                xtype:'textfield',
                                id:'txtIconCls',
                                name:'iconCls',
                                fieldLabel:'Icon Cls',
                                allowBlank:false,
                                blankText:'Ingrese la Propiedad Icon Cls',
                                vtype:'alpha'

                         },{
                               xtype:'textfield',
                               id:'txtXtypeClass',
                               name:'xtypeClass',
                               fieldLabel:'Xtype Class',
                               allowBlank:false,
                               blankText:'Ingrese la Propiedad Xtype Class',
                               vtype:'alpha'

                         },{
                               xtype:'checkbox',
                               id:'chkLayoutTabs',
                               name:'layoutTabs',
                               fieldLabel:'Layout Tabs'
                         },{
                               xtype:'combobox',
                               id:'cmbFkModule',
                               name:'fkModule',
                               fieldLabel:'Modulo',
                               store:'Module.ListModuleAllStore',
                               displayField:'moduleName',
                               valueField:'pkModule',
                             //  emptyText:'Seleccione Modulo',
                               editable:false
                         }]
                },{
                    xtype:'checkbox',
                    id:'chkInactive',
                    name:'statusRegister',
                    fieldLabel:'Activo',
                    checked:true
                }]
        }],
        this.buttons = [{
                text:'Guardar',
                action:'save',
                iconCls:'Save'
                
        },{
                text:'Limpiar',
                name:'btnResetMenu',
                iconCls:'clear',
                handler:function(){
                Ext.getCmp('frmEditMenuView').getForm().reset();
          }
        },{
                text:'Cancelar',
                iconCls:'delete',
                handler:function(){
                Ext.getCmp('wdwEditMenuView').close();
            }        
        }]
        this.callParent(arguments);
    }
});
