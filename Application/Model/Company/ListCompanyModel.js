/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.Company.ListCompanyModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkCompany',type:'int'},
            {name:'companyDescription',type:'string'},
            {name:'companyName',type:'string'},
            {name:'yearName',type:'string'},
            {name:'address',type:'string'},
            {name:'ruc',type:'string'},
            {name:'companyLogo',type:'string'},
            {name:'applicationName',type:'string'},
            {name:'applicationLogo',type:'string'},
            {name:'copyRigth',type:'string'},
            {name:'defaultCompany',type:'int'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}]
});

