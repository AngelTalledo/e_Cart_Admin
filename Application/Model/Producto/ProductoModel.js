/**
 * Created by ANGEL on 29/05/14.
 */
Ext.define('appApplication.model.Producto.ProductoModel',{
    extend:'Ext.data.Model',
    field:[{name:'IdProducto',type:'int'},
        {name:'IdTipoProducto',type:'int'},
        {name:'nombreTipoProducto',type:'string'},
        {name:'idModelo',type:'int'},
        {name:'nombreModelo',type:'String'},
        {name:'nombreProducto',type:'string'},
        {name:'imagenProducto',type:'string'},
        {name:'precioCompra',type:'string'},
        {name:'precioVenta',type:'string'},
        {name:'stock',type:'int'},
        {name:'nuevo',type:'int'},
        {name:'masVendido',type:'int'}


     ]
})