/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.User.ListUserModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkUser',type:'int'},
            {name:'fkStaff',type:'int'},
            {name:'fullNames',type:'string'},
            {name:'fkUserType',type:'int'},
            {name:'userTypeName',type:'string'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}]
});

