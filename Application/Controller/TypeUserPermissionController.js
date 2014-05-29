/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.controller.TypeUserPermissionController',{
    extend:'Ext.app.Controller',
    models:['TypeUserPermission.ListTypeUserPermissionModel'],
    stores:['TypeUserPermission.ListTypeUserPermissionStore',
            'TypeUserPermission.ListTypeUserNotPermissionStore',
            'TypeUserPermission.ListUserPrivilegesStore','TypeUserPermission.PermissionByModuleStore'],
    views:['TypeUserPermission.AssignPermissionsView'],
    refs:[{
            ref:'assignPermissions',
            selector:'assignPermissions'
    }],
    init:function(){
        this.control({
            'assignPermissions button[action=savePrivileges]':{
                click:this.savePrivileges
            }
        });
    },
    savePrivileges:function(){
           Ext.MessageBox.show({
           title : 'MENSAJE AL USUARIO',
    	   buttons : Ext.MessageBox.YESNO,
           msg : '¿Realmente desea Guardar los Privilegios Asignados a este tipo de Usuario?',
            icon : Ext.Msg.QUESTION,
           fn : function(btn){
			if (btn === 'yes'){
                         if(Ext.getCmp('frmUserPermissions').getForm().isValid()){
                         Ext.getCmp('frmUserPermissions').getForm().submit({
                            method:'POST',
                            waitTitle:'Validando Datos',
                            waitMsg:'Enviando Datos',
                            params:{
                                listModuleAllowed:sendModuleAllowed(),
                                listModuleDenied:sendModuleDenied()
                            },
                            success:function(form,action){
                                var data = Ext.JSON.decode(action.response.responseText);
                               
                                Ext.MessageBox.show({
                                    title:'MENSAJE AL USUARIO',
                                    buttons: Ext.MessageBox.OK,
                                    msg:data.message,
                                    icon:Ext.Msg.INFO
                                });
                                Ext.getCmp('cmbTypeUser').reset();
                                Ext.getCmp('grdListModulesDenied').getStore().removeAll();
                                Ext.getCmp('grdListModulesAllowed').getStore().removeAll();
                            }
                        });
                    }
                        
		              }								
	}	
        });
    }  
 });

