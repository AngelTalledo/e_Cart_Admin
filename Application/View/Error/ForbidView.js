/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.onReady(function(){
        
    Ext.create('Ext.panel.Panel',{

        title:'Accesso Prohibido',
        renderTo:Ext.getBody(),
        bodyPadding:5,
        height:60,
        html:'<table><tr><td><img src="../Public/Images/accessDenied.png"'+
            'width="20" height="20"></img></td><td><font size="+0"'+
            'face="Times New Roman">&nbsp;Usted No Tiene Acceso a Este Directorio'+
            '</font></td></table>'
                
                });
          });

