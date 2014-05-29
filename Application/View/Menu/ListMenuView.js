/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
        groupHeaderTpl: 'Menu: {name} ({rows.length} Elemento{[values.rows.length > 1 ? "s" : ""]})'
});
Ext.define('appApplication.view.Menu.ListMenuView',{
    extend:'Ext.grid.Panel',
    id:'grdListMenuView',
    name:'grdListMenuView',
    alias:'widget.listMenu',
    title:'Listado de Menu',
    store:'Menu.MenuStore',
    features:[groupingFeature],
    border:false,
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditMenu').setDisabled(records.length===0);
            Ext.getCmp('btnDeleteMenu').setDisabled(records.length===0  || Ext.getCmp('chkShowInactiveMenu').getValue());
        }
    },
    initComponent:function(){
        this.columns = [{header:'Menu',dataIndex:'pkMenu'},
                        {header:'Elemento de Menu',dataIndex:'fkMenu',width:150},
                        {header:'Texto del Menu',dataIndex:'textMenu'},
                        {header:'Hoja',dataIndex:'leaf',renderer:function(value){
                                var img = value === 0?'folder.gif':'leaf.gif';
                                return '<img src="Public/Images/'+img+' "/>';
                        }},
                        {header:'IconCls',dataIndex:'iconCls'},
                        {header:'XtypeClass',dataIndex:'xtypeClass'},
                        {header:'LayoutTabs',dataIndex:'layoutTabs'},
//                        {header:'Id Modulo',dataIndex:'fkModule'},
                        {header:'Nombre del Modulo',dataIndex:'moduleName',width:150},
                        {header:'Fecha de Registro',dataIndex:'registrationDate'},
                        {header:'Estado',dataIndex:'statusRegistration',hidden:true}],
        this.dockedItems = [{
                xtype:'toolbar',
                dock:'top',
                items:[{
                        xtype:'button',
                        id:'btnAddMenu',
                        name:'btnAddMenu',
                        action:'addMenu',
                        text:'Nuevo',
                        iconCls:'Add'
                },'-',{
                       xtype:'button',
                       id:'btnEditMenu',
                       name:'btnEditMenu',
                       action:'editMenu',
                       text:'Editar',
                       iconCls:'Edit',
                       disabled:true
                },'-',{
                      xtype:'button',
                      id:'btnDeleteMenu',
                      name:'btnDeleteMenu',
                      action:'deleteMenu',
                      text:'Eliminar',
                      iconCls:'Delete',
                      disabled:true
                },'-',{
                     xtype:'textfield',
                     id:'txtSearchStringMenu',
                     name:'txtSearchStringMenu',
                     emptyText:'Texto del Menu',
                     width:300
                },{
                    xtype:'button',
                    id:'btnSearchMenu',
                    name:'btnSearchMenu',
                    text:'Buscar',
                    handler:function(){
                        if(Ext.getCmp('txtSearchStringMenu').getValue()!=='')
                         Ext.getCmp('grdListMenuView').getStore().loadPage(1);
                    }
                },'-',{
                    xtype:'button',
                    id:'btnDisplayAllMenu',
                    name:'btnDisplayAllMenu',
                    text:'Mostrar Todos',
                    handler:function(){
                        Ext.getCmp('txtSearchStringMenu').setValue('');
                        Ext.getCmp('grdListMenuView').getStore().loadPage(1);
                    }
                },'-',{
                    xtype:'button',
                    id:'btnViewMenu',
                    name:'btnViewMenu',
                    text:'Visualizar Menu',
                    action:'viewMenu'
                },'-',{
                    xtype:'checkbox',
                    id:'chkShowInactiveMenu',
                    name:'chkShowInactiveMenu',
                    fieldLabel:'Inactivos',
                    handler:function(){
                        Ext.getCmp('btnAddMenu').setDisabled(this.getValue());
                        Ext.getCmp('grdListMenuView').getStore().loadPage(1);
                    }
                }]
        },{
               xtype:'pagingtoolbar',
               dock:'bottom',
               store:'Menu.MenuStore',
               displayInfo:true
        }];          
        this.callParent(arguments);
        this.store.on('beforeload',function(store){
            store.proxy.extraParams = {
                chkShowInactive:Ext.getCmp('chkShowInactiveMenu').getValue()===true?1:0,
                query:Ext.getCmp('txtSearchStringMenu').getValue()
            };
        });
        this.store.load();
    }
});