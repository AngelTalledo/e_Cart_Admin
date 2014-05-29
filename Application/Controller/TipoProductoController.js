/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.controller.TipoProductoController',{
    extend:'Ext.app.Controller',
    models:['TipoProducto.TipoProductoModel'],
    stores:['TipoProducto.TipoProductoStore'],
    views:['TipoProducto.ListTipoProductoView','TipoProducto.EditTipoProductoView'],
    refs:[{
        ref:'ListTipoProductoView',
        selector:'ListTipoProductoView'
    },{
        ref:'EditTipoProducto',
        selector:'EditTipoProducto'
    }],
    init:function(){
        this.control({
            'ListTipoProductoView button[action=addTipoProducto]':{
                click:this.addTipoProducto
            },
            'ListTipoProductoView button[action=editTipoProducto]':{
                click:this.editTipoProducto
            },
            'ListTipoProductoView button[action=deleteTipoProducto]':{
                click:this.deleteTipoProducto
            },
            'EditTipoProducto button[action=saveTipoProducto]':{
                click:this.saveTipoProducto
            }
        });
    },
    addTipoProducto:function(){
        var  wdwEditTipoProductoView  = Ext.widget('EditTipoProducto');
        wdwEditTipoProductoView.setTitle('Nueva TipoProducto');
    },
    editTipoProducto:function(){
        Ext.widget('EditTipoProducto');
        var frmEditTipoProductoView = Ext.getCmp('frmEditTipoProductoView').getForm(),
            records = Ext.getCmp('grdListTipoProductoView').getSelectionModel().getSelection();
        if(records.length === 1 ){
            frmEditTipoProductoView.loadRecord(records[0]);
        }
    },
    saveTipoProducto:function(){
        var wdwEditTipoProductoView = Ext.getCmp('wdwEditTipoProductoView'),
            grdListTipoProductoView = Ext.getCmp('grdListTipoProductoView'),
            store = grdListTipoProductoView.getStore(),
            frmEditTipoProductoView = Ext.getCmp('frmEditTipoProductoView').getForm(),
            record = frmEditTipoProductoView.getRecord(),
            values = frmEditTipoProductoView.getValues();
        if(values.idTipoProducto > 0){
            record.set(values);
            //store.load();
            Ext.getCmp('grdListTipoProductoView').store.load();
        }else{
            var record = Ext.create('appApplication.model.TipoProducto.TipoProductoModel');
            record.set(values);
            store.add(record);
            //store.load();
            Ext.getCmp('grdListTipoProductoView').store.load();
        }
        Ext.getCmp('grdListTipoProductoView').store.load();
        wdwEditTipoProductoView.close();

    },
    deleteTipoProducto:function(){
        Ext.MessageBox.show({
            title:'CONFIMAR ELIMINACION DE REGISTRO',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListTipoProductoView = Ext.getCmp('grdListTipoProductoView'),
                        records = grdListTipoProductoView.getSelectionModel().getSelection(),
                        store =   grdListTipoProductoView.getStore();
                    store.remove(records[0]);
                    store.loadPage(store.currentPage);
                    Ext.getCmp('grdListTipoProductoView').store.load();
                }
            }

        });
    }

});
