/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.UserController',{
    extend:'Ext.app.Controller',
    models:['User.ListUserModel'],
    stores:['User.ListUserStore','TypeUser.ListTypeUserAllStore','Staff.ListStaffAllStore'],
    views:['User.ListUserView','User.EditUserView','User.ViewMenuUserView'],
    refs:[{
            ref:'listUser',
            selector:'listUser'
    },{
           ref:'editUser',
           selector:'editUser'
    }],
    init:function(){
        this.control({
            'listUser button[action=addUser]':{
                click:this.addUser
            },
            'listUser button[action=editUser]':{
                click:this.editUser
            },
            'editUser button[action=saveUser]':{
                click:this.saveUser
            },
            'listUser button[action=deleteUser]':{
                click:this.deleteUser
            },
            'listUser button[action=viewMenuUser]':{
               click:this.viewMenuUser 
            }
        });
    },
    addUser:function(){
        var wdwEditUser = Ext.widget('editUser');
        wdwEditUser.setTitle('Nuevo Usuario');
    },
    editUser:function(){
        Ext.widget('editUser');
        var frmEditUser = Ext.getCmp('frmEditUser').getForm(),
        records = Ext.getCmp('grdListUser').getSelectionModel().getSelection();
        if(records.length === 1)
            frmEditUser.loadRecord(records[0]);
    },
    saveUser:function(){
        var wdwEditUser = Ext.getCmp('wdwEditUser'),
        grdListUser = Ext.getCmp('grdListUser'),
        store = grdListUser.getStore(),
        frmEditUser = Ext.getCmp('frmEditUser').getForm(),
        record = frmEditUser.getRecord(),
        values = frmEditUser.getValues();
        if(frmEditUser.isValid()){
        if(values.pkUser>0){
            record.set(values);
            //store.load();
            //store.loadPage(store.currentPage);
        }else{
            record = Ext.create('appApplication.model.User.ListUserModel');
            record.set(values);
            store.add(record);
            //store.load();
           // store.loadPage(store.currentPage);
        }
        Ext.getCmp('grdListUser').store.load();
        wdwEditUser.close();
        }
    },
    deleteUser:function(){
         Ext.MessageBox.show({
             title:'MENSAJE DE CONFIRMACION',
             msg:'¿ Desea Eliminar este Registro?',
             buttons:Ext.MessageBox.YESNO,
             icon:Ext.MessageBox.QUESTION,
             fn:function(button){
                 if(button === 'yes'){
                     var grdListUser = Ext.getCmp('grdListUser'),
                     store = grdListUser.getStore(),
                     records  = grdListUser.getSelectionModel().getSelection();
                     store.remove(records[0]);
                     store.loadPage(1);
                    Ext.getCmp('grdListUser').store.load();

                 }
                      Ext.getCmp('txtFullNames').setValue(data.fullNames);
             }
         });        
    },
    viewMenuUser:function(){
        var grdListUser = Ext.getCmp('grdListUser'),
        records = grdListUser.getSelectionModel().getSelection();
        var data;
        if(records.length === 1){
        data = records[0].data;
        argFkTypeUser = data.fkUserType;
        Ext.widget('viewMenuUser');
        Ext.getCmp('txtFullNames').setValue(data.fullNames);
        }
    }
});

