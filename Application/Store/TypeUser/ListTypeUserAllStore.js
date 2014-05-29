/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.TypeUser.ListTypeUserAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.TypeUser.ListTypeUserModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_TypeUser&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});


