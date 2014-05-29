/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Staff.PersonnelDataStore',{
    extend:'Ext.data.Store',
    autoLoad:true,
    model:'appApplication.model.Staff.ListStaffModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Staff&action=personnelData',
    reader:{
        type:'json',
        root:'data'
    }    
    }
});

