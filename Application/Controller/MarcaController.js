/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.controller.MarcaController',{
    extend:'Ext.app.Controller',
    models:['Marca.MarcaModel'],
    stores:['Marca.MarcaStore','Marca.ListMarcaAllStore'],
    views:['Marca.ListMarcaView','Marca.EditMarcaView'],
    refs:[{
        ref:'ListMarcaView',
        selector:'ListMarcaView'
    },{
        ref:'EditMarca',
        selector:'EditMarca'
    }],
    init:function(){
        this.control({
            'ListMarcaView button[action=addMarca]':{
                click:this.addMarca
            },
            'ListMarcaView button[action=editMarca]':{
                click:this.editMarca
            },
            'ListMarcaView button[action=deleteMarca]':{
                click:this.deleteMarca
            },
            'EditMarca button[action=saveMarca]':{
                click:this.saveMarca
            }
        });
    },
    addMarca:function(){
        var  wdwEditMarcaView  = Ext.widget('EditMarca');
        wdwEditMarcaView.setTitle('Nueva Marca');
    },
    editMarca:function(){
        Ext.widget('EditMarca');
        var frmEditMarcaView = Ext.getCmp('frmEditMarcaView').getForm(),
            records = Ext.getCmp('grdListMarcaView').getSelectionModel().getSelection();
        if(records.length === 1 ){
            frmEditMarcaView.loadRecord(records[0]);
        }
    },
    saveMarca:function(){
        var wdwEditMarcaView = Ext.getCmp('wdwEditMarcaView'),
            grdListMarcaView = Ext.getCmp('grdListMarcaView'),
            store = grdListMarcaView.getStore(),
            frmEditMarcaView = Ext.getCmp('frmEditMarcaView').getForm(),
            record = frmEditMarcaView.getRecord(),
            values = frmEditMarcaView.getValues();
        if(values.idMarca > 0){
            record.set(values);
            //store.load();
            Ext.getCmp('grdListMarcaView').store.load();
        }else{
            var record = Ext.create('appApplication.model.Marca.MarcaModel');
            record.set(values);
            store.add(record);
            //store.load();
            Ext.getCmp('grdListMarcaView').store.load();
        }
        Ext.getCmp('grdListMarcaView').store.load();
        wdwEditMarcaView.close();

    },
    deleteMarca:function(){
        Ext.MessageBox.show({
            title:'CONFIMAR ELIMINACION DE REGISTRO',
            msg:'¿Desea Eliminar Este Registro?',
            buttons:Ext.MessageBox.YESNO,
            icon:Ext.MessageBox.QUESTION,
            fn:function(button){
                if(button === 'yes'){
                    var grdListMarcaView = Ext.getCmp('grdListMarcaView'),
                        records = grdListMarcaView.getSelectionModel().getSelection(),
                        store =   grdListMarcaView.getStore();
                    store.remove(records[0]);
                    store.loadPage(store.currentPage);
                    Ext.getCmp('grdListMarcaView').store.load();
                }
            }

        });
    }

});
