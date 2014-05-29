/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.ModuleController',{
    extend:'Ext.app.Controller',
    models:['Module.ListModuleModel'],
    stores:['Module.ListModuleStore'],
    views:['Module.ListModuleView','Module.EditModuleView'],
    
    refs:[{
            ref:'listModule',
            selector:'listModule'
    },{
            ref:'editModule',
            selector:'editModule'
    }],
  init:function(){
      this.control({
          'listModule button[action=addModule]':{
              click:this.addModule
          },
          'listModule button[action=editModule]':{
              click:this.editModule
          },
          'listModule button[action=deleteModule]':{
              click:this.deleteModule
          },
          'editModule button[action=saveModule]':{
              click:this.saveModule
          }
      });
  },
  addModule:function(){
      var  wdwEditModuleView  = Ext.widget('editModule');
      wdwEditModuleView.setTitle('Nuevo Modulo');
  },
  editModule:function(){
      Ext.widget('editModule')
      var frmWditModuleView = Ext.getCmp('frmEditModuleView').getForm(),
      records = Ext.getCmp('grdListModuleView').getSelectionModel().getSelection();
      
      if(records.length === 1 ){
          frmWditModuleView.loadRecord(records[0]);
      }
  },
  saveModule:function(){
      var wdwEditModuleView = Ext.getCmp('wdwEditModuleView'),
      grdListModuleView = Ext.getCmp('grdListModuleView'),
      store = grdListModuleView.getStore(),
      frmEditModuleView = Ext.getCmp('frmEditModuleView').getForm(),
      record = frmEditModuleView.getRecord(),
      values =  frmEditModuleView.getValues();
      if(values.pkModule>0){
          record.set(values);
          //store.load();
      }else{
          var record = Ext.create('appApplication.model.Module.ListModuleModel');
          record.set(values);
          store.add(record);
          //store.load();
      }
     Ext.getCmp('grdListModuleView').store.load();
      wdwEditModuleView.close();       
  },
  deleteModule:function(){
      Ext.MessageBox.show({
          title:'CONFIMAR ELIMINACION DE REGISTRO',
          msg:'¿Desea Eliminar Este Registro?',
          buttons:Ext.MessageBox.YESNO,
          icon:Ext.MessageBox.QUESTION,
          fn:function(button){
              if(button === 'yes'){
                  var grdListModuleView = Ext.getCmp('grdListModuleView'),
                  records = grdListModuleView.getSelectionModel().getSelection(),
                  store =   grdListModuleView.getStore();
                  store.remove(records[0]);
                  store.loadPage(store.currentPage);
              }
          }
      });
  }        
});

