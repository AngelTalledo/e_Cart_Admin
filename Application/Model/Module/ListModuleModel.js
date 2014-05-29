/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.Module.ListModuleModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkModule',type:'int'},
            {name:'moduleName',type:'string'},
            {name:'tableName',type:'string'},
            {name:'showInterface',type:'int'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}]
});

