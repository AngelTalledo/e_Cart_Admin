/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Module.ListModuleView',{
   extend:'Ext.grid.Panel',
   id:'grdListModuleView',
   name:'grdListModuleView',
   alias:'widget.listModule',
   store:'Module.ListModuleStore',
   title:'Listado de Modulos',
   border:false,
   listeners:{
       'selectionchange':function(view,record){
           Ext.getCmp('btnEditModule').setDisabled(record.length===0);
           Ext.getCmp('btnDeleteModule').setDisabled(record.length===0 || Ext.getCmp('chkShowInactiveModule').getValue());
       }
   },
   initComponent:function(){
       this.columns = [{header:'Id',dataIndex:'pkModule'},
                      {header:'Nombre del Modulo',dataIndex:'moduleName',width:200},
                      {header:'Nombre de la Tabla',dataIndex:'tableName',width:200},
                      {header:'Interfaz',dataIndex:'showInterface'},
                      {header:'Fecha de Registro',dataIndex:'registrationDate'},
                      {header:'Estado',dataIndex:'statusRegister'}],
       this.dockedItems = [{
                            xtype:'toolbar',
                            dock:'top',
                            items:[{
                                    xtype:'button',
                                    id:'btnAddModule',
                                    name:'btnAddModule',
                                    text:'Nuevo',
                                    action:'addModule',
                                    iconCls:'Add'
                            },'-',{
                                   xtype:'button',
                                   id:'btnEditModule',
                                   name:'btnEditModule',
                                   text:'Editar',
                                   action:'editModule',
                                   iconCls:'Edit',
                                   disabled:true
                            },'-',{
                                   xtype:'button',
                                   id:'btnDeleteModule',
                                   name:'btnDeleteModule',
                                   text:'Eliminar',
                                   action:'deleteModule',
                                   iconCls:'Delete',
                                   disabled:true
                            },'-',{
                                  xtype:'textfield',
                                  id:'txtSearchString',
                                  name:'txtSearchString',
                                  emptyText:'Nombre de Modulo',
                                  width:400
                                  
                            },{
                                  xtype:'button',
                                  id:'btnSearchModule',
                                  name:'btnSearchModule',
                                  text:'Buscar',
                                  handler:function(){
                                      if(Ext.getCmp('txtSearchString').getValue()!=='')
                                      Ext.getCmp('grdListModuleView').getStore().loadPage(1);
                                  }
                                  
                            },'-',{
                                  xtype:'button',
                                  id:'btnDisplayAllModule',
                                  name:'btnDisplayAllModule',
                                  text:'Mostrar Todos',
                                  handler:function(){
                                       Ext.getCmp('txtSearchString').setValue('');
                                       Ext.getCmp('grdListModuleView').getStore().loadPage(1);
                                  }
                            },'-',{
                                  xtype:'button',
                                  text:'Reporte',
                                  id:'btnReportModule',
                                  name:'btnReportModule',
                                  action:'reportModule'
                                   
                            },'-',{
                                  xtype:'checkbox',
                                  id:'chkShowInactiveModule',
                                  name:'chkShowInactiveModule',
                                  fieldLabel:'Inactivos',
                                  handler:function(){
                                      Ext.getCmp('btnAddModule').setDisabled(this.getValue());
                                      Ext.getCmp('grdListModuleView').getStore().loadPage(1);
                                  }
                            }]
                        },{
                            xtype:'pagingtoolbar',
                            store:'Module.ListModuleStore',
                            dock:'bottom',
                            displayInfo:true
                        }]
       this.callParent(arguments);
       this.store.on('beforeload',function(store){
           store.proxy.extraParams = {
               chkShowInactive:Ext.getCmp('chkShowInactiveModule').getValue()===true?1:0,
               query:Ext.getCmp('txtSearchString').getValue()
           }
       })
       this.store.load();
           
   }
});

