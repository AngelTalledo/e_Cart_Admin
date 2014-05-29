/**
 * Created by ANGEL on 15/05/14.
 */

Ext.define('appApplication.controller.MenuTemplateController',{
    extend:'Ext.app.Controller',
    models:['MenuTemplate.MenuTemplateModel'],
    stores:['MenuTemplate.MenuTemplateStore','MenuTemplate.MenuTemplateAllStore'],
    views:['MenuTemplate.ListMenuTemplateView','MenuTemplate.EditMenuTemplateView'],

    refs:[{
        ref:'ListMenuTemplateView',
        selector:'ListMenuTemplateView'
    },{
        ref:'editTemplateMenu',
        selector:'editTemplateMenu'
    }],
    init:function(){
        this.control({
            'ListMenuTemplateView button[action=addMenuTemplate]':{
                click:this.addMenuTemplate
            },
            'ListMenuTemplateView button[action=editMenuTemplate]':{
                click:this.editMenuTemplate
            },
            'ListMenuTemplateView button[action=deleteMenuTemplate]':{
                click:this.deleteMenuTemplate
            },
            'editTemplateMenu button[action=saveMenuTemplate]':{
                click:this.saveMenuTemplate
            }
        });
    },
    addMenuTemplate:function(){
        var wdwEditMenuTemplateView = Ext.widget('editMenuTemplate');
        wdwEditMenuTemplateView.setTitle('Nuevo Menu Template');
        Ext.getCmp('txtPkMenuTemplate').setDisabled(false);
    },
    editMenuTemplate:function(){
        Ext.widget('editMenuTemplate');
        var records = Ext.getCmp('grdListMenuTemplateView').getSelectionModel().getSelection(),
            frmEditMenuViewTemplate = Ext.getCmp('frmEditMenuTemplateView').getForm();
        if(records.length == 1)
            frmEditMenuViewTemplate.loadRecord(records[0]);

    },
    saveMenuTemplate:function(){
        var wdwEditMenuTemplateView = Ext.getCmp('wdwEditMenuTemplateView'),
            frmEditMenuTemplateView = Ext.getCmp('frmEditMenuTemplateView').getForm(),
            record = frmEditMenuTemplateView.getRecord(),
            values = frmEditMenuTemplateView.getValues(),
            store  = Ext.getCmp('grdListMenuTemplateView').getStore();
        if(frmEditMenuView.isValid()){
            if(Ext.getCmp('txtPkMenuTemplate').isDisabled()){
                record.set(values);
                store.load();
                // store.loadPage(store.currentPage);
            }else{

                var record = Ext.create('appApplication.model.MenuTemplate.MenuTemplateModel');
                record.set(values);
                store.add(record);
                // store.loadPage(store.currentPage);
                store.load();
            }
            Ext.getCmp('grdListMenuTemplateView').store.load();
            wdwEditMenuView.close();
        }

    },
    deleteMenuTemplate:function(){
        Ext.MessageBox.show({
            title:'MENSAJE DE CONFIRMACION',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){

                    var grdListMenuTemplateView = Ext.getCmp('grdListMenuTemplateView'),
                        record  =  grdListMenuTemplateView.getSelectionModel().getSelection(),
                        store  = grdListMenuTemplateView.getStore();
                    store.remove(record[0]);
                    Ext.getCmp('grdListMenuTemplateView').store.load();
                }
            }
        });
    }
});

