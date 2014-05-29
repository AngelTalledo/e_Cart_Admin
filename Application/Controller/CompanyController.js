/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.CompanyController',{
    extend:'Ext.app.Controller',
    models:['Company.ListCompanyModel'],
    stores:['Company.ListCompanyStore','Company.CompanyDefaultDataStore'],
    views:['Company.ListCompanyView','Company.EditCompanyView','Company.EditCompanyLogoView'],
    refs:[{
        ref:'listCompany',
        selector:'listCompany'
    },{
        ref:'editCompany',
        selector:'editCompany'
    }],
    init:function(){
        this.control({
            'listCompany button[action=addCompany]':{
                click:this.addCompany
            },
            'listCompany button[action=editCompany]':{
                click:this.editCompany
            },
            'listCompany button[action=editCompanyLogo]':{
               click:this.editCompanyLogo 
            },
            'editCompany button[action=saveCompany]':{
                click:this.saveCompany
            },
            'listCompany button[action=deleteCompany]':{
                click:this.deleteCompany
            }
        });
    },
    addCompany:function(){
        var wdwEditCompany = Ext.widget('editCompany');
        wdwEditCompany.setTitle('Nueva Empresa');
    },
    editCompany:function(){
        Ext.widget('editCompany');
        var grdListCompany = Ext.getCmp('grdListCompany'),
        frmEditCompany = Ext.getCmp('frmEditCompany').getForm(),
        records = grdListCompany.getSelectionModel().getSelection();
        if(records.length === 1){
            frmEditCompany.loadRecord(records[0]);
        }
    },  
    editCompanyLogo:function(){
        Ext.widget('editCompanyLogo');
    },
    saveCompany:function(){
       var  wdwEditCompany = Ext.getCmp('wdwEditCompany'),
        grdListCompany = Ext.getCmp('grdListCompany'),
        frmEditCompany = Ext.getCmp('frmEditCompany').getForm(),
        record = frmEditCompany.getRecord(),
        values = frmEditCompany.getValues(),
        store = grdListCompany.getStore();
       
        if(frmEditCompany.isValid()){
            //       if(values.pkCompany>0){
            //             record.set(values);
            //             wdwEditCompany.close();
            //       }else{
             if(values.pkCompany>0){
                                record.set(values);
                                wdwEditCompany.close();
                            }else{
                                record = Ext.create('appApplication.model.Company.ListCompanyModel');
                                record.set(values);
                                store.add(record);
                                wdwEditCompany.close();
                            }
                            store.loadPage(store.currentPage);
            
        //       }
       
        }
    },
    deleteCompany:function(){
        Ext.MessageBox.show({
            title:'MENSAJE DE CONFIRMACION',
            msg:'¿Desea Eliminar este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListCompany = Ext.getCmp('grdListCompany'),
                    records = grdListCompany.getSelectionModel().getSelection(),
                    store = grdListCompany.getStore();
                    store.remove(records[0]);
                    store.loadPage(1);
                  Ext.getCmp('grdListCompany').store.load();
                                    
                }
            }
        });
    },
    verifyAdd:function(){
        
    }
});

