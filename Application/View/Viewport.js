/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Viewport',{
    extend:'Ext.container.Viewport',
    layout:'border',
    items:[{
            region:'north',
            id:'header',
            xtype:'CompanyDefaultDataStore',
            height:30
            
        },{
          title:'Menu',
          id:'tree',
          xtype:'treepanel',
          region:'west',
          width:260,
          split:true,
          collapsible:true,
          expanded: true,
          border:false,
//          useArrows: true,
          margins: '3,3,0,0',
          store:Ext.create('Ext.data.TreeStore', {
          proxy: {
            type: 'ajax',
            url: 'main.php?class=ControllerClass_Menu&action=showMenu'
         },
         root: {
            text: 'appApplication',
            id: 'src',
            expanded: true
         },
         folderSort: true,
         sorters: [{
            property: 'text',
            direction: 'ASC'
         }]
         }),
         dockedItems: [{
            xtype: 'toolbar',
            items: [{
                text: 'Expandir Todo',
                iconCls:'Expand',
                handler: function(){
                    Ext.getCmp('tree').expandAll();
                }
            }, '-',{
                text: 'Colapsar Todo',
                iconCls:'Collapse',
                handler: function(){
                    Ext.getCmp('tree').collapseAll();
                }
            }]
         }],
         listeners:{
             itemClick:function(view,record){
                 if(record.get('leaf')){
                     var item = Ext.getCmp('tabCenter').items.findBy(function(items){
                         return items.title === record.get('text');
                     });
                     if(!item){
                         try{
                         Ext.getCmp('tabCenter').add({
                             title:record.get('text'),
                             layout:'fit',
                             iconCls:record.get('iconCls'),
                             closable:true,
                             items:{
                                     xtype:record.raw['xtypeClass']
                             }
                         }).show();
                         }catch(ex){
                             Ext.MessageBox.show({
                                 title:'MODULO EN CONSTRUCCION',
                                 msg:'La  Contruccion de este Modulo de '+record.get('text')+' esta en ejecucion Llamar al numero 950884805',
                                 buttons:Ext.MessageBox.OK,
                                 icon:Ext.MessageBox.QUESTION
                             });
                         }
                     }else{
                         Ext.getCmp('tabCenter').setActiveTab(item);
                     }
                 }
             }
         }
          
    },{
        
        xtype:'tabpanel',
        region:'center',
        id:'tabCenter',
        items:[{
                title:'Bievenido',
                iconCls:'House',
                items:[{
                    xtype:'panel',
                    border:false,
                    layout:{
                        type:'table',
                        columns:2
                    },
                    x:150,
                    y:50,
                    defaults:{
                        padding:5  
                    },
                    items:[{
                            html:'<center><font size="+1" color="black" face="Times New Roman">Bienvenido,usted  tiene permisos para realizar las siguientes acciones en este sistema:</font></center>',
                            colspan:2
                        },{
                            xtype:'image',
                            name:'imgLogin',
                            id:'imgLogin',
                            height:200,
                            width:200,
                            src:'Public/Images/Privileges.png'
                        },{
                            xtype:'grid',
                            id:'grdAllowedAccess',
                            name:'grdAllowedAccess',
                            title:'Privilegios de Usuario',
                            width:680,
                            height:460,
                            store:'TypeUserPermission.ListUserPrivilegesStore',
                            columns:[
                                    {header:'Modulo',dataIndex:'moduleName',width:150},
                                    {header:'Insertar',dataIndex:'allowInsert',renderer:loadIconPermission},
                                    {header:'Modificar',dataIndex:'allowUpdate',renderer:loadIconPermission},
                                    {header:'Eliminar',dataIndex:'allowDelete',renderer:loadIconPermission},
                                    {header:'Listar',dataIndex:'allowList',renderer:loadIconPermission},
                                    {header:'Imprimir',dataIndex:'allowReport',renderer:loadIconPermission}
                            ]

                    }]
                   }]
        }]
        
    },{
        region:'south',
        height:24,
        split:true,
        //layout:'fit',
        items:[{
                xtype:'PersonnelData'
        }]
    }
    ]
});
Ext.define('viewPersonnelData',{
                extend:'Ext.view.View',
                alias:'widget.PersonnelData',
                store:'Staff.PersonnelDataStore',
                itemTpl:'<body scroll = "no">'+
                        '<table style = "background-color: #D4E1F2;overflow: auto;" width="100%"><tr><td><i><font size="+0" color="black" face="Times New Roman">'+
                        '&nbsp;&nbsp;USUARIO:&nbsp;{fullNames}</font></i></td></tr></table>'+
                        '</body>'
                 
                        
 });
Ext.define('viewCompanyDefaultDataStore',{
                extend:'Ext.view.View',
                alias:'widget.CompanyDefaultDataStore',
                store:'Company.CompanyDefaultDataStore',
                itemTpl:'<table><tr><td width="89.5%"><h1>'+
                        '<font size="+1" face="Times New Roman">{applicationName} '+
                        '</font></h1></td><td><h1><a href=# target="_top"'+
                        'onclick="logout()" style="text-decoration:none; color:#FFFFFF;">'+
                        '<img width="18" height="18" src="Public/Images/house_go.png" />'+
                        '<font size="+0" face="Times New Roman">[Cerrar Session]</font></a></h1></td></tr></table>'
                 
                        
     });
     
function logout(){
    Ext.MessageBox.show({
    title: 'Confirmar Salida',
    msg: 'Desea cerrar sessi&oacute;n y salir del Sistema',
    buttons: Ext.MessageBox.YESNO,
    fn: function (btn){
            if (btn === 'yes'){
                    location.href='main.php?class=ControllerClass_User&action=exitApplication';
            }
    },
    icon: Ext.MessageBox.QUESTION
});
}
/**
* Retorna una etiqueta html  con la imagen
* segun el  accesso permitido o denegado
 */
function loadIconPermission(value){
   return  value?'<img src="Public/Images/accept.png"/>':'<img src="Public/Images/cross.gif"/>';
}