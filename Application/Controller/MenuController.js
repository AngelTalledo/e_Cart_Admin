/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.MenuController',{
    extend:'Ext.app.Controller',
    models:['Menu.MenuModel','Module.ListModuleModel'],
    stores:['Menu.MenuStore','Menu.ListMenuAllStore','Module.ListModuleAllStore'],
    views:['Menu.ListMenuView','Menu.EditMenuView','Menu.ViewMenuView'],
    
    refs:[{
           ref:'listMenu',
           selector:'listMenu'
    },{
           ref:'editMenu',
           selector:'editMenu'
    }],
    
    init:function(){
       this.control({
           'listMenu button[action=addMenu]':{
               click:this.addMenu
           },
           'listMenu button[action=editMenu]':{
               click:this.editMenu
           },
           'listMenu button[action=deleteMenu]':{
               click:this.deleteMenu
           },
           'listMenu button[action=viewMenu]':{
               click:this.viewMenu
           },
           'editMenu button[action=save]':{
               click:this.saveMenu
           }
       });
    },
    addMenu:function(){
        var wdwEditMenuView = Ext.widget('editMenu');
        wdwEditMenuView.setTitle('Nuevo Menu');
         Ext.getCmp('txtPkMenu').setDisabled(false);
    },
    editMenu:function(){
         Ext.widget('editMenu');
         var records = Ext.getCmp('grdListMenuView').getSelectionModel().getSelection(),
         frmEditMenuView = Ext.getCmp('frmEditMenuView').getForm();
         if(records.length == 1)
             frmEditMenuView.loadRecord(records[0]);
         
    },
    saveMenu:function(){
        var wdwEditMenuView = Ext.getCmp('wdwEditMenuView'),
        frmEditMenuView = Ext.getCmp('frmEditMenuView').getForm(),
        record = frmEditMenuView.getRecord(),
        values = frmEditMenuView.getValues(),
        store  = Ext.getCmp('grdListMenuView').getStore();
        if(frmEditMenuView.isValid()){
            if(Ext.getCmp('txtPkMenu').isDisabled()){
                record.set(values);
                store.load();
               // store.loadPage(store.currentPage);
            }else{
               
                var record = Ext.create('appApplication.model.Menu.MenuModel');
                record.set(values);
                store.add(record);
              // store.loadPage(store.currentPage);
                 store.load();
            }
            Ext.getCmp('grdListMenuView').store.load(); 
            wdwEditMenuView.close();
        }
        
    },
    deleteMenu:function(){
        Ext.MessageBox.show({
            title:'MENSAJE DE CONFIRMACION',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    
                     var grdListMenuView = Ext.getCmp('grdListMenuView'),
                     record  =  grdListMenuView.getSelectionModel().getSelection(),
                     store  = grdListMenuView.getStore();
                     store.remove(record[0]);
                 Ext.getCmp('grdListMenuView').store.load();
                }
            }
        });
    },
    viewMenu:function(){
        
        Ext.widget('viewMenu');
    }
    
});

