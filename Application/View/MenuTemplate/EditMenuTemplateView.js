/**
 * Created by ANGEL on 15/05/14.
 */
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.MenuTemplate.EditMenuTemplateView',{
    extend:'Ext.window.Window',
    id:'wdwEditMenuTemplateView',
    name:'wdwEditMenuTemplateView',
    alias:'widget.editMenuTemplate',
    title:'Editar Menu',
    height:300,
    width:500,
    layout:'fit',
    autoShow:true,
    modal:true,
    resizable:false,
    initComponent:function(){
        this.items = [{
            xtype:'form',
            id:'frmEditMenuTemplateView',
            name:'frmEditMenuTemplateView',
            bodyPadding:5,
            defaults:{
                labelWidth:150,
                width:430
            },
            items:[{

                xtype:'textfield',
                id:'txtPkMenuTemplate',
                name:'pkMenuTemplate',
                fieldLabel:'Nombre del Menu',
                allowBlank:false,
                blankText:'Ingrese Nombre del Menu',
                maxLength:30,
                disabled:true
            },{
                xtype:'textfield',
                id:'txtMenuName',
                name:'menuName',
                fieldLabel:'Texto del Menu',
                allowBlank:false,
                blankText:'Ingrese el Texto del Menu'
            },
                {
                    xtype:'checkbox',
                    id:'chkLeaf',
                    name:'leaf',
                    fieldLabel:'SubMenu',
                    checked:true,
                    handler:function(){
                        if(!this.value){
                            Ext.getCmp('fdsLeaf').setDisabled(!this.value);
                            Ext.getCmp('txtUrlMenu').setValue('_');
                        }else{
                            Ext.getCmp('fdsLeaf').setDisabled(!this.value);
                        }
                    }
                },{
                    xtype:'combobox',
                    id:'cmbFkMenuTemplate',
                    name:'fkMenuTemplate',
                    fieldLabel:'Menu',
                    store:'MenuTemplate.MenuTemplateAllStore',
                    displayField:'pkMenuTemplate',
                    //valueField:'pkMenuTemplate',
                    editable:false
                },{
                    xtype:'fieldset',
                    id:'fdsLeaf',
                    title:'Propiedades de Hoja',
                    defaults:{
                        width:450
                    },
                    items:[{
                        xtype:'textfield',
                        id:'txtUrlMenu',
                        collapsible:true,
                        name:'urlMenu',
                        fieldLabel:'URL:',
                        allowBlank:false,
                        blankText:'Ingrese URL',
                        vtype:'alpha',
                        width:400,
                        x:600

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
                action:'saveMenuTemplate',
                iconCls:'Save'

            },{
                text:'Limpiar',
                name:'btnResetMenu',
                iconCls:'clear',
                handler:function(){
                    Ext.getCmp('frmEditMenuTemplateView').getForm().reset();
                }
            },{
                text:'Cancelar',
                iconCls:'delete',
                handler:function(){
                    Ext.getCmp('wdwEditMenuTemplateView').close();
                }
            }]
        this.callParent(arguments);
    }
});
