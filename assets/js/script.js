/* cambiar color contacto */
$(document).ready(function () {
    $(".contacto").mouseenter(function () {
      $(".contacto").css("background-color", "YellowGreen");
    });
    $(".contacto").mouseleave(function () {
      $(".contacto").css("background-color", "");
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
  