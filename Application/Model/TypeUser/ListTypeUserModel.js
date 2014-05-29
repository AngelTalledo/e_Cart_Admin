/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.TypeUser.ListTypeUserModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkUserType',type:'int'},
            {name:'userTypeName',type:'string'},
            {name:'registrationDate',type:'string'},
            {name:'defaultTypeUser',type:'int'},
            {name:'statusRegister',type:'int'}]
});

