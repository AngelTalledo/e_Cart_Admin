/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.Staff.ListStaffModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkStaff',type:'int'},
            {name:'fullNames',type:'string'},
            {name:'firstName',type:'string'},
            {name:'lastName',type:'string'},
            {name:'staffNames',type:'string'},
            {name:'dni',type:'string'},
            {name:'sex',type:'string'},
            {name:'address',type:'string'},
            {name:'email',type:'string'},
            {name:'phone',type:'string'},
            {name:'cellular',type:'string'},
            {name:'userName',type:'string'},
            {name:'userPassword',type:'string'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}]
});

