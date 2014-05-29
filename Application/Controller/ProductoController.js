/**
 * Created by ANGEL on 29/05/14.
 */
Ext.define('appApplication.controller.ProductoController',{
    extend:'Ext.app.Controller',
    models:['Producto.ProductoModel'],
    //stores:['Producto.ProductoStore','Producto.ListProductoAllStore'],
    views:['Producto.ListProductoView','Producto.EditProductoView'],
    refs:[{
        ref:'ListProductoView',
        selector:'ListProductoView'
    },{
        ref:'EditProducto',
        selector:'EditProducto'
    }],
    init:function(){
        this.control({
            'ListProductoView button[action=addProducto]':{
                click:this.addProducto
            },
            'ListProductoView button[action=editProducto]':{
                click:this.editProducto
            },
            'ListProductoView button[action=deleteProducto]':{
                click:this.deleteProducto
            },
            'EditProducto button[action=saveProducto]':{
                click:this.saveProducto
            }
        });
    },
    addProducto:function(){
        var  wdwEditProductoView  = Ext.widget('EditProducto');
        wdwEditProductoView.setTitle('Nueva Producto');
    },
    editProducto:function(){
        Ext.widget('EditProducto');
        var frmEditProductoView = Ext.getCmp('frmEditProductoView').getForm(),
            records = Ext.getCmp('grdListProductoView').getSelectionModel().getSelection();
        if(records.length === 1 ){
            frmEditProductoView.loadRecord(records[0]);
        }
    },
    saveProducto:function(){
        var wdwEditProductoView = Ext.getCmp('wdwEditProductoView'),
            grdListProductoView = Ext.getCmp('grdListProductoView'),
            store = grdListProductoView.getStore(),
            frmEditProductoView = Ext.getCmp('frmEditProductoView').getForm(),
            record = frmEditProductoView.getRecord(),
            values = frmEditProductoView.getValues();
        if(values.idProducto > 0){
            record.set(values);
            //store.load();
            Ext.getCmp('grdListProductoView').store.load();
        }else{
            var record = Ext.create('appApplication.model.Producto.ProductoModel');
            record.set(values);
            store.add(record);
            //store.load();
            Ext.getCmp('grdListProductoView').store.load();
        }
        Ext.getCmp('grdListProductoView').store.load();
        wdwEditProductoView.close();

    },
    deleteProducto:function(){
        Ext.MessageBox.show({
            title:'CONFIMAR ELIMINACION DE REGISTRO',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListProductoView = Ext.getCmp('grdListProductoView'),
                        records = grdListProductoView.getSelectionModel().getSelection(),
                        store =   grdListProductoView.getStore();
                    store.remove(records[0]);
                    store.loadPage(store.currentPage);
                    Ext.getCmp('grdListProductoView').store.load();
                }
            }

        });
    }

});
