/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Company.ListCompanyView',{
    extend:'Ext.grid.Panel',
    id:'grdListCompany',
    name:'grdListCompany',
    alias:'widget.listCompany',
    title:'Listado de Empresa',
    store:'Company.ListCompanyStore',
    border:false,
    plugins: [{
         ptype: 'rowexpander',
         rowBodyTpl : [
                '<p><b>Descripcion de la Empresa:</b>{companyDescription}</p>',
                '<p><b>Nombre del Ano:</b>{yearName}</p>',
                '<p><b>Derechos de Autor:</b> {copyRigth}</p>'
         ]
    }],
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditCompany').setDisabled(records.length === 0);
            Ext.getCmp('btnEditCompanyLogo').setDisabled(records.length === 0);
            Ext.getCmp('btnDeleteCompany').setDisabled(records.length ===0 || Ext.getCmp('chkShowInactiveCompany').getValue());
        }
    },
    initComponent:function(){
        
        this.columns =  [Ext.create('Ext.grid.RowNumberer'),
                        {header:'Id',dataIndex:'pkCompany',width:30},
                        {header:'Descripcion de la Empresa',dataIndex:'companyDescription',width:150,hidden:true},
                        {header:'Nombre de la Empresa',dataIndex:'companyName',width:150},
                        {header:'Nombre del Ano',dataIndex:'yearName',hidden:true},
                        {header:'Direccion',dataIndex:'address'},
                        {header:'Ruc',dataIndex:'ruc'},
                        {header:'Logo de Empresa',dataIndex:'companyLogo'},
                        {header:'Nombre de la Aplicacion',dataIndex:'applicationName',width:150},
                        {header:'Logo de Aplicacion',dataIndex:'applicationLogo'},
                        {header:'Derechos de Autor',dataIndex:'copyRigth',hidden:true},
                        {header:'Empresa por Defecto',dataIndex:'defaultCompany'},
                        {header:'Fecha de Registro',dataIndex:'registrationDate'},
                        {header:'Estado',dataIndex:'statusRegister',hidden:true}],
        this.dockedItems = [{
                        xtype:'toolbar',
                        dock:'top',
                        items:[{
                                xtype:'button',
                                id:'btnAddCompany',
                                name:'btnAddCompany',
                                action:'addCompany',
                                text:'Nuevo',
                                iconCls:'Add'
                        },'-',{
                                xtype:'button',
                                id:'btnEditCompany',
                                name:'btnEditCompany',
                                action:'editCompany',
                                text:'Editar',
                                iconCls:'Edit',
                                disabled:true
                        },'-',{
                                xtype:'button',
                                id:'btnEditCompanyLogo',
                                name:'btnEditCompanyLogo',
                                action:'editCompanyLogo',
                                text:'Editar Logo',
                                disabled:true
                        },'-',{
                                xtype:'button',
                                id:'btnDeleteCompany',
                                name:'bttDeleteCompany',
                                action:'deleteCompany',
                                text:'Eliminar',
                                iconCls:'Delete',
                                disabled:true
                        },'-',{
                                xtype:'textfield',
                                id:'txtSearchStringCompany',
                                name:'txtSearchStringCompany',
                                emptyText:'Ingrese Nombre de la Empresa',
                                width:300
                        },{
                               xtype:'button',
                               id:'btnSearchCompany',
                               name:'btnSearchCompany',
                               text:'Buscar',
                               handler:function(){
                                   if(Ext.getCmp('txtSearchStringCompany').getValue()!=='')
                                       Ext.getCmp('grdListCompany').getStore().loadPage(1);
                                   
                               }
                        },'-',{
                                xtype:'button',
                                id:'btnDisplayAllCompany',
                                name:'btnDisplayAllCompany',
                                text:'Mostrar Todos',
                                handler:function(){
                                     Ext.getCmp('txtSearchStringCompany').setValue('');
                                     Ext.getCmp('grdListCompany').getStore().loadPage(1);
                                }
                        },'-',{
                                xtype:'checkbox',
                                id:'chkShowInactiveCompany',
                                name:'chkShowInactiveCompany',
                                fieldLabel:'Inactivos',
                                handler:function(){
                                    Ext.getCmp('btnAddCompany').setDisabled(this.getValue());
                                    Ext.getCmp('grdListCompany').getStore().loadPage(1);
                                }
                        }]
                        
        },{
                       xtype:'pagingtoolbar',
                       dock:'bottom',
                       store:'Company.ListCompanyStore',
                       displayInfo:true
        }];                    
        
        this.callParent(arguments);
        this.store.on('beforeload',function(store){
            store.proxy.extraParams = {
                chkShowInactive:Ext.getCmp('chkShowInactiveCompany').getValue()===true?1:0,
                query:Ext.getCmp('txtSearchStringCompany').getValue()
            };
        });
        this.store.load();
    }
});

function loadStatus(value){
    html ='';
    if(value == 1)
    html= '<img src="Public/Images/UploadSuccess.gif"/>';
   return html;
}