
    $(".reg-btn").click(function() {
      $(".hidden").slideToggle("slow");
      if ($("#login-btn").text() === "Login") {
        $("#login-btn").text("Register");
        $(".question").text("Already a member?");
        $(".reg-btn").text("Login");
      } else {
        $("#login-btn").text("Login");
        $(".question").text("Not a member?");
        $(".reg-btn").text("Register");
      }
    });
    $(document).ready(function() {
      $(".reg-btn").click(function() {
        $("label").toggle();
        $(".input-section1").toggle();
        $(".input-section2").toggle();
        $("#login-btn").toggle();
        $(".fpass").toggle();
      })
    });
  
    function validate() {
      var text, text2;
      text = "*";
      text2 = "";
      var regusername = localStorage.getItem("Username");
      var regpassword = localStorage.getItem("Password");
      var Username = document.getElementById('user');
      var password = document.getElementById('password');
      if ((Username.value == "melen") && (password.value == "juego")) {
        $('.login_box').slideUp("slow");
        $('.success-box').delay(600).fadeIn("slow");
      } else if ((Username.value == regusername) && (password.value == regpassword)) {
        $('.login_box').slideUp("slow");
        $('.success-box').delay(600).fadeIn("slow");
      } else if ((Username.value == "") && (password.value == "")) {
        alert("Por favor complete todos los campos obligatorios.");
      } else if (Username.value == "") {
        alert("Por favor complete todos los campos obligatorios");
      } else if (password.value == "") {
        alert("Por favor complete todos los campos obligatorios");
      } else if (Username.value != regusername) {
        alert("¡El usuario no existe! Regístrese primero.");
      } else if ((Username.value == regusername) && (password.value != regpassword)) {
        alert("Incorrect password!");
      }
      var Username = document.getElementById("user").value;
      var password = document.getElementById("password").value;
      var regusername = document.getElementById("Username").value;
      var regpassword = document.getElementById("Password").value;
      if (Username == "") {
        document.getElementById("errormessage1").innerHTML = text;
      }
      if (password == "") {
        document.getElementById("errormessage2").innerHTML = text;
      }
      if (Username != "") {
        document.getElementById("errormessage1").innerHTML = text2;
      }
      if (password != "") {
        document.getElementById("errormessage2").innerHTML = text2;
      }
      if ($("#login-btn").text() === "Register") {
        if (input1a == "") {
          document.getElementById("errormessage3").innerHTML = text;
        }
        if (input2a == "") {
          document.getElementById("errormessage3").innerHTML = text;
        }
      } else {
        $("#login-btn").text("Iniciar Sesión");
        $(".question").text("¿No eres miembro?");
        $(".reg-btn").text("Registrarse");
      }
    }
  
    function register() {
      var text, text2, text3;
      text = "*";
      text2 = "";
      text3 = "Debe tener un mínimo de 8 caracteres y tener al menos 1 número";
      var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var nameformat = /^[a-zA-Z ]{2,30}$/;
      var userformat = /^[a-zA-Z0-9]{2,30}$/;
      var passformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      var regusername = document.getElementById("Username").value;
      var regpassword = document.getElementById("Password").value;
      var Name = document.getElementById("Name").value;
      var Email = document.getElementById("Email").value;
      if ((regusername.match(userformat)) && (regpassword.match(passformat)) && (Name.match(nameformat)) && (Email.match(format))) {
        var inputUsername2 = document.getElementById("Username");
        var inputPassword2 = document.getElementById("Password");
        var inputName = document.getElementById("Name");
        var inputEmail = document.getElementById("Email");
        localStorage.setItem("Username", inputUsername2.value);
        localStorage.setItem("Password", inputPassword2.value);
        localStorage.setItem("Name", inputName.value);
        localStorage.setItem("Email", inputEmail.value);
        $('.login_box').slideUp("slow");
        $('.success-box1').delay(600).fadeIn("slow");
      }
      if (!Email.match(format)) {
        document.getElementById("errormessage6").innerHTML = text;
      }
      if (Email.match(format)) {
        document.getElementById("errormessage6").innerHTML = text2;
      }
      if (Name.match(nameformat)) {
        document.getElementById("errormessage5").innerHTML = text2;
      }
      if (!Name.match(nameformat)) {
        document.getElementById("errormessage5").innerHTML = text;
      }
      if (!regusername.match(userformat)) {
        document.getElementById("errormessage3").innerHTML = text;
      }
      if (regusername.match(userformat)) {
        document.getElementById("errormessage3").innerHTML = text2;
      }
      if (!regpassword.match(passformat)) {
        document.getElementById("errormessage4").innerHTML = text;
        document.getElementById("passwordmessage").innerHTML = text3;
      }
      if (regpassword.match(passformat)) {
        document.getElementById("errormessage4").innerHTML = text2;
      }
      if ((regusername == "") || (regpassword == "") || (Name == "") || (Email == "")) {
        alert("Complete todos los campos obligatorios y proporcione un formato válido.");
      }
    }
    $(function() {
      if (localStorage.checkbox && localStorage.checkbox != '') {
        if ((Username.value == regusername) && (password.value == regpassword)) {
          $('#remember_me').attr('checked', 'checked');
          $('#user').val(localStorage.Username);
          $('#password').val(localStorage.Password);
        }
      } else if ((Username.value != regusername) && (password.value != regpassword)) {
        $('#remember_me').attr('checked', 'checked');
      } else {
        $('#remember_me').removeAttr('checked');
        $('').val(localStorage.Username);
        $('').val(localStorage.Password);
      }
      $('#remember_me').click(function() {
        if ($('#remember_me').is(':checked')) {
          // save username and password
          localStorage.Username = $('#user').val();
          localStorage.Password = $('#password').val();
          localStorage.checkbox = $('#remember_me').val();
        } else {
          localStorage.checkbox = '';
          localStorage.Password = '';
          localStorage.Username = '';
        }
      });
    });
  
    function forgotpassword() {
      var text, text2;
      var text = "*";
      var text2 = "";
      var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var passwordformat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      var forgotpass = localStorage.getItem("Email");
      var password = localStorage.getItem("password");
      var forgot = ForgotPassEmail.value;
      var fpass1 = fpassword.value;
      var fpass2 = confirm_password.value;
      if (fpass1 == "" || fpass2 == "") {
        alert('Por favor complete todos los campos obligatorios.');
      } else if (fpass1 != fpass2) {
        alert('¡Las contraseñas no coinciden! Inténtelo de nuevo.');
      } else if (!fpass1.match(passwordformat)) {
        alert('La contraseña debe tener un mínimo de 8 caracteres y al menos 1 número.');
      } else if (forgot == "") {
        alert("Por favor complete todos los campos obligatorios.");
      } else if ((fpass1 != "") && (fpass1.match(passwordformat)) && (forgot == forgotpass) && (forgot.match(format))) {
        if (fpass1 == fpass2) {
          localStorage.setItem('Password', document.getElementById('fpassword').value);
        }
        alert("¡Éxito! ¡Tu contraseña se ha cambiado correctamente!");
      } else {
        alert("¡Tu dirección de correo electrónico no es válida!");
      }
    }
 