/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Company.CompanyDefaultDataStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Company.ListCompanyModel',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Company&action=defaultCompanyData',
        reader:{
            type:'json',
            root:'data'
        }
    }
});

