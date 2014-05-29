/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.controller.ModeloController',{
    extend:'Ext.app.Controller',
    models:['Modelo.ModeloModel'],
    stores:['Modelo.ModeloStore'],
    views:['Modelo.ListModeloView','Modelo.EditModeloView'],
    refs:[{
        ref:'ListModeloView',
        selector:'ListModeloView'
    },{
        ref:'EditModelo',
        selector:'EditModelo'
    }],
    init:function(){
        this.control({
            'ListModeloView button[action=addModelo]':{
                click:this.addModelo
            },
            'ListModeloView button[action=editModelo]':{
                click:this.editModelo
            },
            'ListModeloView button[action=deleteModelo]':{
                click:this.deleteModelo
            },
            'EditModelo button[action=saveModelo]':{
                click:this.saveModelo
            }
        });
    },
    addModelo:function(){
        var  wdwEditModeloView  = Ext.widget('EditModelo');
        wdwEditModeloView.setTitle('Nueva Modelo');
    },
    editModelo:function(){
        Ext.widget('EditModelo');
        var frmEditModeloView = Ext.getCmp('frmEditModeloView').getForm(),
            records = Ext.getCmp('grdListModeloView').getSelectionModel().getSelection();
        if(records.length === 1 ){
            frmEditModeloView.loadRecord(records[0]);
        }
    },
    saveModelo:function(){
        var wdwEditModeloView = Ext.getCmp('wdwEditModeloView'),
            grdListModeloView = Ext.getCmp('grdListModeloView'),
            store = grdListModeloView.getStore(),
            frmEditModeloView = Ext.getCmp('frmEditModeloView').getForm(),
            record = frmEditModeloView.getRecord(),
            values = frmEditModeloView.getValues();
        if(values.idModelo > 0){
            record.set(values);
            //store.load();
            Ext.getCmp('grdListModeloView').store.load();
        }else{
            var record = Ext.create('appApplication.model.Modelo.ModeloModel');
            record.set(values);
            store.add(record);
            //store.load();
            Ext.getCmp('grdListModeloView').store.load();
        }
        Ext.getCmp('grdListModeloView').store.load();
        wdwEditModeloView.close();

    },
    deleteModelo:function(){
        Ext.MessageBox.show({
            title:'CONFIMAR ELIMINACION DE REGISTRO',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListModeloView = Ext.getCmp('grdListModeloView'),
                        records = grdListModeloView.getSelectionModel().getSelection(),
                        store =   grdListModeloView.getStore();
                    store.remove(records[0]);
                    store.loadPage(store.currentPage);
                    Ext.getCmp('grdListModeloView').store.load();
                }
            }

        });
    }

});