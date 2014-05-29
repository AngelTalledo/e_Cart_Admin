/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Marca.EditMarcaView',{
    extend: 'Ext.window.Window',
    id:'wdwEditMarcaView',
    name:'wdwEditMarcaView',
    alias:'widget.EditMarca',
    title:'Editar Area',
    layout:'fit',
    height:200,
    width:400,
    resizable:false,
    autoShow:true,
    modal:true,
    initComponent:function(){
        this.items=[{
                xtype:'form',
                id:'frmEditMarcaView',
                name:'frmEditMarcaView',
                bodyPadding:5,
                defaults:{labelWidth:150,width:300},
                items:[{
                        xtype:'textfield',
                        id:'txtPkMarca',
                        name:'idMarca',
                        hidden:true
                },{
                        xtype:'textfield',
                        id:'txtNombreMarca',
                        name:'nombreMarca',
                        fieldLabel:'Marca',
                        y:20,
                        x:10,
                        labelWidth:80,
                        width:300,
                        maxLength:45
                },{
                    xtype:'checkbox',
                    id:'txtEstadoRegistro',
                    fieldLabel:'Habilitar',
                    name:'estadoRegistro',
                    y:30,
                    x:10,
                    labelWidth:80
                    
                }]
        }],
            this.buttons=[{
                    text:'Guardar',
                    id:'btnSaveMarca',
                    name:'btnSaveMarca',
                    iconCls:'Save',
                    action:'saveMarca'
            },{
                    text:'Limpiar',
                    id:'btnResetMarca',
                    name:'btnResetMarca',
                    iconCls:'clear',
                    handler:function(){
                        Ext.getCmp('frmEditMarcaView').getForm().reset();
                    }                    
            },{
                    text:'Cancelar',
                    iconCls:'delete',
                    handler:function(){
                        Ext.getCmp('wdwEditMarcaView').close();
                        
                    }
    }];
    this.callParent(arguments);
    }
});



