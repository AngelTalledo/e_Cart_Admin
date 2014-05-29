/**
 * Created by ANGEL on 14/05/14.
 */

Ext.define('appApplication.store.MenuTemplate.MenuTemplateAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.MenuTemplate.MenuTemplateModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_MenuTemplate&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});