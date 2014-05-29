/**
 * Created by ANGEL on 15/05/14.
 */
var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
    groupHeaderTpl: 'Menu:{name} ({rows.length} Elemento{[values.rows.length > 1 ? "s" : ""]})'
});
Ext.define('appApplication.view.MenuTemplate.ListMenuTemplateView',{
    extend:'Ext.grid.Panel',
    id:'grdListMenuTemplateView',
    name:'grdListMenuTemplateView',
    alias:'widget.ListMenuTemplateView',
    title:'Listado de Menu Template',
    store:'MenuTemplate.MenuTemplateStore',
    features:[groupingFeature],
    border:false,
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditMenuTemplate').setDisabled(records.length===0);
            Ext.getCmp('btnDeleteMenuTemplate').setDisabled(records.length===0  || Ext.getCmp('chkShowInactiveMenuTemplate').getValue());
        }
    },
    initComponent:function(){
        this.columns = [
            {header:'Menu',dataIndex:'pkMenuTemplate'},
            {header:'Elemento de Menu',dataIndex:'fkMenuTemplate',width:150},
            {header:'Texto del Menu',dataIndex:'menuName'},
            {header:'URl:',dataIndex:'urlMenu',width:200},
            {header:'Fecha de Registro',dataIndex:'fechaRegistro',width:150},
            {header:'Estado',dataIndex:'stadoRegistro',hidden:true}],
            this.dockedItems = [{
                xtype:'toolbar',
                dock:'top',
                items:[{
                    xtype:'button',
                    id:'btnAddMenuTemplate',
                    name:'btnAddMenuTemplate',
                    action:'addMenuTemplate',
                    text:'Nuevo',
                    iconCls:'Add'
                },'-',{
                    xtype:'button',
                    id:'btnEditMenuTemplate',
                    name:'btnEditMenuTemplate',
                    action:'editMenuTemplate',
                    text:'Editar',
                    iconCls:'Edit',
                    disabled:true
                },'-',{
                    xtype:'button',
                    id:'btnDeleteMenuTemplate',
                    name:'btnDeleteMenuTemplate',
                    action:'deleteMenuTemplate',
                    text:'Eliminar',
                    iconCls:'Delete',
                    disabled:true
                },'-',{
                    xtype:'textfield',
                    id:'txtSearchStringMenuTemplate',
                    name:'txtSearchStringMenuTemplate',
                    emptyText:'Texto del Menu',
                    width:300
                },{
                    xtype:'button',
                    id:'btnSearchMenuTemplate',
                    name:'btnSearchMenuTemplate',
                    text:'Buscar',
                    handler:function(){
                        if(Ext.getCmp('txtSearchStringMenuTemplate').getValue()!=='')
                            Ext.getCmp('txtSearchStringMenuTemplate').getStore().loadPage(1);
                    }
                },'-',{
                    xtype:'button',
                    id:'btnDisplayAllMenuTemplate',
                    name:'btnDisplayAllMenuTemplate',
                    text:'Mostrar Todos',
                    handler:function(){
                        Ext.getCmp('txtSearchStringMenuTemplate').setValue('');
                        Ext.getCmp('grdListMenuTemplateView').getStore().loadPage(1);
                    }
                },'-',{
                    xtype:'checkbox',
                    id:'chkShowInactiveMenuTemplate',
                    name:'chkShowInactiveMenuTemplate',
                    fieldLabel:'Inactivos',
                    handler:function(){
                        Ext.getCmp('btnAddMenuTemplate').setDisabled(this.getValue());
                        Ext.getCmp('grdListMenuTemplateView').getStore().loadPage(1);
                    }
                }]
            },{
                xtype:'pagingtoolbar',
                dock:'bottom',
                //store:'MenuTemplate.MenuTemplateStore',
                displayInfo:true
            }];
        this.callParent(arguments);
        this.store.on('beforeload',function(store){
            store.proxy.extraParams = {
                chkShowInactive:Ext.getCmp('chkShowInactiveMenuTemplate').getValue()===true?1:0,
                query:Ext.getCmp('txtSearchStringMenuTemplate').getValue()
            };
        });
        this.store.load();
    }
});