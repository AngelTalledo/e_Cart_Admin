/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.StaffController',{
    extend:'Ext.app.Controller',
    models:['Staff.ListStaffModel'],
    stores:['Staff.ListStaffStore','Staff.PersonnelDataStore'],
    views :['Staff.ListStaffView','Staff.EditStaffView'],
    refs:[{
            ref:'listStaff',
            selector:'listStaff'
    },{
           ref:'editStaff',
           selector:'editStaff'
    }],
    init:function(){
        this.control({
            'listStaff button[action=addStaff]':{
                click:this.addStaff
            },
            'listStaff button[action=editStaff]':{
                click:this.editStaff
            },
            'editStaff button[action=saveStaff]':{
                click:this.saveStaff
            },
            'listStaff button[action=deleteStaff]':{
                click:this.deleteStaff
            }
        });
    },
    addStaff:function(){
         Ext.widget('editStaff');
    },
    editStaff:function(){
         Ext.widget('editStaff');
         var  grdListStaff = Ext.getCmp('grdListStaff'),
         frmEditStaff = Ext.getCmp('frmEditStaff'),
         records =  grdListStaff.getSelectionModel().getSelection();
         if(records.length === 1){
             frmEditStaff.loadRecord(records[0]);
         }
    },
    saveStaff:function(){
         var wdwEditStaff = Ext.getCmp('wdwEditStaff'),
         grdListStaff = Ext.getCmp('grdListStaff'),
         store = grdListStaff.getStore(),
         frmEditStaff = Ext.getCmp('frmEditStaff').getForm(),
         record = frmEditStaff.getRecord(),
         values = frmEditStaff.getValues();
         if(frmEditStaff.isValid()){
         if(values.pkStaff>0){
             record.set(values);
             //store.load();
         }else{
             record = Ext.create('appApplication.model.Staff.ListStaffModel');
             record.set(values);
             store.add(record);
             //store.load();
         }
      Ext.getCmp('grdListStaff').store.load();
         wdwEditStaff.close();
         }
    },   
    deleteStaff:function(){
        Ext.MessageBox.show({
            title:'MENSAJE DE CONFIRMACION',
            msg:'¿Desea Eliminar este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListStaff = Ext.getCmp('grdListStaff'),
                    store  = grdListStaff.getStore(),
                    records = grdListStaff.getSelectionModel().getSelection();
                    store.remove(records[0]);
                    Ext.getCmp('grdListStaff').store.load();
                }
            }
        });
    }
});

