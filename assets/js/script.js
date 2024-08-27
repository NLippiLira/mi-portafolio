/* cambiar color contacto */
$(document).ready(function () {
    $(".contenedor").mouseenter(function () {
      $(".contenedor").css("background-color", "#007bff");
    });
    $(".contenedor").mouseleave(function () {
      $(".contenedor").css("background-color", "#c0c0c0");
    });
  });
  /* zoom a imagenes */
  $(document).ready(function () {
    $("#manzana1").mouseenter(function () {
      $(this).zoom();
    });
  });
  /* mostrar productos */
  $(document).ready(function () {
    $(".verduras1").click(function () {
      $(".verduras").show();
      $(".frutas").show();
      $(".carnes").hide();
      $(".lacteos").hide();
    });
  });
  
  $(document).ready(function () {
    $(".carnes1").click(function () {
      $(".verduras").hide();
      $(".carnes").show();
      $(".lacteos").hide();
      $(".frutas").hide();
    });
  });
  
  $(document).ready(function () {
    $(".lacteos1").click(function () {
      $(".verduras").hide();
      $(".carnes").hide();
      $(".lacteos").show();
      $(".frutas").hide();
    });
  });
  