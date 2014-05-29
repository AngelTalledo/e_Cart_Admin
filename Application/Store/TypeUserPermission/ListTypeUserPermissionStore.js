/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.TypeUserPermission.ListTypeUserPermissionStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.TypeUserPermission.ListTypeUserPermissionModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_TypeUserPermission&action=listTypeUserPermission',
        reader:{
            type:'json',
            root:'list'
        }
    }
});

