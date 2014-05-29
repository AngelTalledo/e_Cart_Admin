/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.model.Menu.MenuModel',{
    extend:'Ext.data.Model',
    fields:[{name:'pkMenu',type:'string'},
            {name:'fkMenu',type:'string'},
            {name:'leaf',type:'int'},
            {name:'textMenu',type:'string'},
            {name:'iconCls',type:'string'},
            {name:'xtypeClass',type:'string'},
            {name:'layoutTabs',type:'int'},
            {name:'moduleName',type:'string'},
            {name:'fkModule',type:'int'},
            {name:'registrationDate',type:'string'},
            {name:'statusRegister',type:'int'}]
});
