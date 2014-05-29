/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Company.EditCompanyView',{
    extend:'Ext.window.Window',
    id:'wdwEditCompany',
    name:'wdwEditCompany',
    alias:'widget.editCompany',
    title:'Editar Empresa',
    height:500,
    width:600,
    layout:'fit',
    modal:true,
    autoShow:true,
    resizable:false,
    initComponent:function(){
        this.items = [{
               xtype:'form',
               id:'frmEditCompany',
               name:'frmEditCompany',
               bodyPadding:5,
               items:[{
                       xtype:'fieldset',
                       title:'Datos de la Empresa',
                       defaults:{
                            labelWidth:150,
                            width:500
                       },
                       items:[{
                                    xtype:'textfield',
                                    id:'txtPkCompany',
                                    name:'pkCompany',
                                    hidden:true
                            },{
                                    xtype:'textfield',
                                    id:'txtCompanyDescription',
                                    name:'companyDescription',
                                    fieldLabel:'Descripcion de la Empresa'
                            },{
                                    xtype:'textfield',
                                    id:'txtCompanyName',
                                    name:'companyName',
                                    fieldLabel:'Nombre de la Empresa',
                                    allowBlank:false,
                                    blankText:'Ingrese Nombre de la Empresa'

                            },{
                                   xtype:'textfield',
                                   id:'txtYearName',
                                   name:'yearName',
                                   fieldLabel:'Nombre del Ano',
                                   allowBlank:false,
                                   blankText:'Ingrese Nombre del Ano'

                            },{
                                   xtype:'textfield',
                                   id:'txtAddress',
                                   name:'address',
                                   fieldLabel:'Direccion',
                                   allowBlank:false,
                                   blankText:'Ingrese Direccion'

                            },{
                                  xtype:'textfield',
                                  id:'txtRuc',
                                  name:'ruc',
                                  fieldLabel:'Ruc',
                                  allowBlank:false,
                                  blankText:'Ingrese Ruc'
                            },{
                                  xtype:'checkbox',
                                  id:'chkDefaultCompany',
                                  name:'defaultCompany',
                                  fieldLabel:'Empresa por Defecto'
                            }]
               },{
                     xtype:'fieldset',
                     title:'Datos de  la Aplicacion',
                     defaults:{
                            labelWidth:150,
                            width:500
                      },
                     items:[{
                                xtype:'textfield',
                                id:'txtApplicationName',
                                name:'applicationName',
                                fieldLabel:'Nombre de la Aplicacion',
                                allowBlank:false,
                                blankText:'Ingrese Nombre de la Aplicacion'
                    }]
               },{
                     xtype:'checkbox',
                     id:'chkShowInactive',
                     name:'statusRegister',
                     fieldLabel:'Activo'
                }]
        }];
        this.buttons = [{
                text:'Guardar',
                action:'saveCompany',
                iconCls:'Save'
        },{
                text:'Limpiar',
                name:'btnResetCompany',
                iconCls:'clear',
                handler:function(){
                Ext.getCmp('frmEditCompany').getForm().reset();
          }
        },{
                text:'Cancelar',
               iconCls:'delete',
                handler:function(){
                Ext.getCmp('wdwEditCompany').close();
            }  
        }];
        this.callParent(arguments);
    }
});

