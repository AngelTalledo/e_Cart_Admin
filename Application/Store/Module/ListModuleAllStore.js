/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Module.ListModuleAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Module.ListModuleModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Module&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});


