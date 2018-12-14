"use strict";
// Site Modal Component

$(function() {
  // Resets modal once closed
  $('#site-modal').on('hidden.bs.modal', function () {
    $('#site-modal-title').text('');
    $('#site-modal-body').html('');
    $('#site-modal-footer').removeClass('d-none');
  });

  $('[data-site-modal="true"]').on('click', function(event){
    event.preventDefault();
    let $this = $(this);
    let title = $this.attr('data-title');
    let url = $this.attr('data-load');
    let content = $this.attr('data-content');
    let footer = $this.attr('data-footer');
    if(footer == 'false'){
      $('#site-modal-footer').addClass('d-none');
    }
    $('#site-modal-title').text(title);

    if(content){
      $('#site-modal-body').html(content);
    }

    if(url){
      $('#site-modal-body').load(url);
    }

  });

});



