/**
 * Created by ANGEL on 14/05/14.
 */
Ext.define('appApplication.model.MenuTemplate.MenuTemplateModel',{
    extend:'Ext.data.Model',
    field:[{name:'pkMenuTemplate',type:'string'},
        {name:'fkMenuTemplate',type:'string'},
        {name:'menuName',type:'string'},
        {name:'urlMenu',type:'string'},
        {name:'fechaRegistro',type:'string'},
        {name:'stadoRegistro',type:'int'}
    ]
});
