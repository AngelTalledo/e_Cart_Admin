/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.TypeUserPermission.ListTypeUserPermissionModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkTypeUserPermission',type:'int'},
            {name:'fkModule',type:'int'},
            {name:'moduleName',type:'string'},
            {name:'fkUserType',type:'bool'},
            {name:'allowInsert',type:'bool'},
            {name:'allowUpdate',type:'bool'},
            {name:'allowDelete',type:'bool'},
            {name:'allowList',type:'bool'},
            {name:'allowReport',type:'bool'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'string'}]
});

