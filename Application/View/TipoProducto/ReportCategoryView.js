/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Marca.ReportMarcaView',{
   extend:'Ext.window.Window',
   alias:'widget.rptMarca',
    id:'rptMarca',
    name:'rptMarca',
    title:'Reporte de Areas',
    height:550,
    width:600,
    autoShow:true,
    modal:true,
    resizable:false,
    layout:'fit',
    initComponent:function(){
        this.items = [{
                xtype:'simpleiframe',
                id:'iframeReportMarca',
                name:'iframeReportMarca',
                src:'main.php?class=ControllerClass_Marca&action=reportMarca',
                border:false
        }];
        this.callParent(arguments);
    }
});

