/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.model.TipoProducto.TipoProductoModel',{
    extend:'Ext.data.Model',
    fields:[{name:'idTipoProducto' , type:'int'},
        {name:'nombreTipoProducto', type:'string'},
        {name:'fechaRegistro', type:'string'},
        {name:'estadoRegistro',type:'int'}
    ]
});

