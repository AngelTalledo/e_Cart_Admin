/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Staff.ListStaffAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Staff.ListStaffModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Staff&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});




