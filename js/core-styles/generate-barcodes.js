"use strict";
// generate barcodes Component

$(function() {
  
  function generateBarcodes(){
    $('.barcode').each(function (){
      var id = '#' + this.id
      $(id).JsBarcode('.barcode').init();
    });
  });  
  generateBarcodes();
});

