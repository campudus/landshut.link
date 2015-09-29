// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs


$(document).foundation();
$('body').flowtype({
  minimum : 500,
  maximum : 1200,
  minFont : 12,
  maxFont : 40,
  fontRatio : 30
});

$(document).ready(function () {
  createGallery();
  createContactForm();
});

function createContactForm() {
  var request = null;
  var $status = $(document.getElementById('contact-form-status'));

  $('.contact-form').magnificPopup({
    items : {
      src : '#contact-form-popup',
      type : 'inline'
    },
    preloader : false,
    focus : '#name',
    callbacks : {
      close : function () {
        resetFormSend();
      }
    }
  });

  var $form = $('#contact-form');
  var $button = $form.find('.contact-form-send');

  $form.on('submit', function (event) {
    event.preventDefault();
    var serializedData = $form.serializeArray();

    console.log('sending contact form');
    if (request !== null) {
      request.abort();
    }

    $form.find('.field').removeClass('error');

    request = $.ajax({
      url : 'https://script.google.com/macros/s/AKfycbxRPo2ez2eEGX9I7f6j7R4Fl4gNatLdXL_AojC2pwkvHlOtC3Ya/exec',
      dataType : 'json',
      type : 'POST',
      data : serializedData
    });

    $button.attr('disabled', 'disabled');
    $button.text('Anfrage wird versendet ...');

    request.done(function (response, textStatus, jqXHR) {
      var errors = [];
      var i, errorText;
      if (response.result == 'success') {
        $status.text('Vielen Dank für Ihre Anfrage!');
        $.magnificPopup.close();
      } else {
        console.log(response.errors);
        for (i = 0; i < response.errors.length; i++) {
          if (response.errors[i].field === 'name') {
            errorText = 'Ihr Name muss angegeben werden';
          } else if (response.errors[i].field === 'mail') {
            errorText = 'Eine Mail-Adresse muss angegeben werden';
          } else if (response.errors[i].field === 'request') {
            errorText = 'Bitte vervollständigen Sie das Anfrageformular.';
          } else {
            errorText = response.errors[i].text;
          }
          errors.push(errorText);
          $form.find('.' + response.errors[i].field).addClass('error');
        }
        $status.html('<h2>Es sind Fehler aufgetreten</h2><ul><li>' + errors.join('</li><li>') + '</li></ul>');
        $status.show();
        $button.text('Anfrage senden');
        $button.removeAttr('disabled');
      }
    });

    // callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
      $status.text('Verbindung zum Server fehlgeschlagen (' + textStatus + ', ' + errorThrown + ')');
      $status.show();
      $form.hide();
      // log the error to the console
      console.error('The following error occured2: ' + textStatus, errorThrown);
    });
  });

  function resetFormSend() {
    $button.text('Anfrage senden');
    $button.removeAttr('disabled');
    $form.find('.error').removeClass('error');
    $form.show();
    $status.hide();
  }
}

function createGallery() {
  $('.gallery').magnificPopup({
    items : [
      {src : "img/gallery/Meetup.jpg"},
      {src : "img/gallery/Coworking.jpg"},
      {src : "img/gallery/linkwork-landshut12.jpg"},
      {src : "img/gallery/linkwork-landshut9.jpg"},
      {src : "img/gallery/linkwork-landshut11.jpg"},
      {src : "img/gallery/linkwork-landshut7.jpg"},
      {src : "img/gallery/linkwork-landshut1.jpg"},
      {src : "img/gallery/linkwork-landshut2.jpg"},
      {src : "img/gallery/linkwork-landshut3.jpg"},
      {src : "img/gallery/linkwork-landshut4.jpg"},
      {src : "img/gallery/linkwork-landshut5.jpg"},
      {src : "img/gallery/linkwork-landshut6.jpg"},
      {src : "img/gallery/linkwork-landshut8.jpg"},
      {src : "img/gallery/linkwork-landshut10.jpg"},
      {src : "img/gallery/linkwork-landshut13.jpg"},
      {src : "img/gallery/Meeting.jpg"}
    ],
    gallery : {
      enabled : true
    },
    type : 'image'
  });
}
