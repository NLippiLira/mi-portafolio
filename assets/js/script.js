/* cambiar color contacto */
$(document).ready(function () {
    $("#contacto").mouseenter(function () {
      $("#contacto").css("background-color", "#525252");
    });
    $("#contacto").mouseleave(function () {
      $("#contacto").css("background-color", "#3c94fa");
    });
    $("#contacto").mouseenter(function () {
      $("#contacto").css("color", "#ffffff");
    });
    $("#contacto").mouseleave(function () {
      $("#contacto").css("color", "black");
    });
  
    
  });
  // /* zoom a imagenes */
  // $(document).ready(function () {
  //   $("#manzana1").mouseenter(function () {
  //     $(this).zoom();
  //   });
  // });
  // /* mostrar productos */
  // $(document).ready(function () {
  //   $(".verduras1").click(function () {
  //     $(".verduras").show();
  //     $(".frutas").show();
  //     $(".carnes").hide();
  //     $(".lacteos").hide();
  //   });
  // });
  
  // $(document).ready(function () {
  //   $(".carnes1").click(function () {
  //     $(".verduras").hide();
  //     $(".carnes").show();
  //     $(".lacteos").hide();
  //     $(".frutas").hide();
  //   });
  // });
  
  // $(document).ready(function () {
  //   $(".lacteos1").click(function () {
  //     $(".verduras").hide();
  //     $(".carnes").hide();
  //     $(".lacteos").show();
  //     $(".frutas").hide();
  //   });
  // });
  