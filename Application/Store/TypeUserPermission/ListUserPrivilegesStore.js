/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.TypeUserPermission.ListUserPrivilegesStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.TypeUserPermission.ListTypeUserPermissionModel',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_TypeUserPermission&action=listUserPrivileges',
        reader:{
            type:'json',
            root:'list'
        }
    }
});
