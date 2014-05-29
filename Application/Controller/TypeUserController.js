/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.TypeUserController',{
    extend:'Ext.app.Controller',
    models:['TypeUser.ListTypeUserModel'],
    stores:['TypeUser.ListTypeUserStore'],
    views:['TypeUser.ListTypeUserView','TypeUser.EditTypeUserView'],
    refs:[{
            ref:'listTypeUser',
            selector:'listTypeUser'
    },{
           ref:'editTypeUser',
           selector:'editTypeUser'
    }],
   init:function(){
       this.control({
           'listTypeUser button[action=addTypeUser]':{
               click:this.addTypeUser
           },
           'listTypeUser button[action=editTypeUser]':{
               click:this.editTypeUser
           },
           'editTypeUser button[action=saveTypeUser]':{
               click:this.saveTypeUser
           },
           'listTypeUser button[action=deleteTypeUser]':{
               click:this.deleteTypeUser
           }
       });
   },
   verifyAdd:function(){
       var frmEditTypeUser = Ext.getCmp('frmEditTypeUser').getForm(),
       values = frmEditTypeUser.getValues();
       Ext.Ajax.request({
           url:'main.php?class=ControllerClass_TypeUser&action=verifyAdd',
           params:{
               txtUserTypeName:values.userTypeName
           },
           callback:function(options,success,resquest){
               var data = Ext.JSON.decode(resquest.responseText);
               if(data.success){
                   isOk = true;  
               }else{
                  isOk = false;
                  
               }
           }
       });
       
   },        
   addTypeUser:function(){
       var wdwEditTypeUserView = Ext.widget('editTypeUser');
       wdwEditTypeUserView.setTitle('Nuevo Tipo de Usuario');
   },
   editTypeUser:function(){
        wdwEditTypeUserView = Ext.widget('editTypeUser');
        var frmEditTypeUser = Ext.getCmp('frmEditTypeUser').getForm(),
        records = Ext.getCmp('grdListTypeUserView').getSelectionModel().getSelection();
        if(records.length === 1){
            frmEditTypeUser.loadRecord(records[0]);
        }
   },
   saveTypeUser:function(){
       var  wdwListTypeUserView = Ext.getCmp('wdwEditTypeUserView'),
       grdListTypeUserView = Ext.getCmp('grdListTypeUserView'),
       store = grdListTypeUserView.getStore(),
       frmEditTypeUser = Ext.getCmp('frmEditTypeUser').getForm(),
       record  = frmEditTypeUser.getRecord(),
       values = frmEditTypeUser.getValues();
       if(frmEditTypeUser.isValid()){
       if(values.pkUserType>0){
           record.set(values);
          // store.loadPage(store.currentPage);
          //store.load();
       }else{
           record = Ext.create('appApplication.model.TypeUser.ListTypeUserModel');
           record.set(values);
           store.add(record);
           //store.loadPage(1);
           //store.load();
       }
       Ext.getCmp('grdListTypeUserView').store.load();
       wdwListTypeUserView.close();
   }
       
       
   },
   deleteTypeUser:function(){
       Ext.MessageBox.show({
           titla:'MENSAGE DE CONFIRMACION',
           msg:'¿Desea Eliminar Este Registro?',
           buttons:Ext.MessageBox.YESNO,
           icon:Ext.MessageBox.QUESTION,
           fn:function(button){
               if(button === 'yes'){
                   var grdListTypeUserView = Ext.getCmp('grdListTypeUserView'),
                   record = grdListTypeUserView.getSelectionModel().getSelection(),
                   store = grdListTypeUserView.getStore();
                   store.remove(record[0]);
                   store.loadPage(store.currentPage);
                  Ext.getCmp('grdListTypeUserView').store.load();    
               }
           }
       });
   }        
           
   
});

