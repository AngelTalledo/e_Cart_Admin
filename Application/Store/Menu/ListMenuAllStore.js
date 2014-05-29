/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Menu.ListMenuAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Menu.MenuModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Menu&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});

