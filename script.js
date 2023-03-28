       // Solicitud GET (Request).

        fetch('https://randomuser.me/api/?gender=male')
            // Exito
            .then(response => response.json())  // convertir a json
            .then(json => {
                document.getElementById('userPhoto').src = json.results[0].picture.large;
				document.getElementById('userPhoto-sm').src = json.results[0].picture.large;
                document.getElementById('userName').innerHTML = json.results[0].name.first + ' ' + json.results[0].name.last;
				document.getElementById('userNameTitle').innerHTML = json.results[0].name.first + ' ' + json.results[0].name.last;
                document.getElementById('userDomicilio').innerHTML = json.results[0].location.street.name + ' ' + json.results[0].location.street.number;
                document.getElementById('userCiudad').innerHTML = json.results[0].location.city;
                document.getElementById('userEstado').innerHTML = json.results[0].location.state;
                document.getElementById('userPais').innerHTML = json.results[0].location.country;
                document.getElementById('userCP').innerHTML = json.results[0].location.postcode;
                document.getElementById('userEmail').innerHTML = json.results[0].email;
                document.getElementById('userPhone').innerHTML = json.results[0].phone;
            })    //imprimir los datos en la consola
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
        function iniciar() {
            document.getElementById('sectionGracias').style.display = 'none';
			document.getElementById('contenido').style.display = 'none';
            document.getElementById('userData').style.display = 'none';
            document.getElementById('userExperiencia').style.display = 'none';
            document.getElementById('userContacto').style.display = 'none';
            /*
            document.getElementById("menuInicio").addEventListener("click", function () {
                limpiar();
                document.getElementById('menuInicio').classList.add('active');
            });
            */
            document.getElementById("menuDatos").addEventListener("click", function () {
                limpiar();
				document.getElementById('contenido').style.display = 'block';
                document.getElementById('userData').style.display = 'block';
                document.getElementById('menuDatos').classList.add('active');
                document.body.style.backgroundColor='#E3F2FD'
            });
            document.getElementById("menuExperiencia").addEventListener("click", function () {
                limpiar();
				document.getElementById('contenido').style.display = 'block';
                document.getElementById('userExperiencia').style.display = 'block';
                document.getElementById('menuExperiencia').classList.add('active');
                document.body.style.backgroundColor='#FFF8E1';
            });
            document.getElementById("menuContacto").addEventListener("click", function () {
                limpiar();
				document.getElementById('contenido').style.display = 'block';
                document.getElementById('userContacto').style.display = 'block';
                document.getElementById('menuContacto').classList.add('active');
                document.body.style.backgroundColor='#F1F8E9';
            });


            document.getElementById("btnEnviar").addEventListener("click", function () {
				document.getElementById('sectionContacto').style.display = 'none';
                document.getElementById('sectionGracias').style.display = 'block';
            });

            var elements = document.getElementsByClassName("toInicio");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', function(){toInicio();});
			
            }

        }
        function limpiar() {
			document.getElementById('main').style.display = 'none';
			document.getElementById('contenido').style.display = 'none';
            document.getElementById('userData').style.display = 'none';
            document.getElementById('userExperiencia').style.display = 'none';
            document.getElementById('userContacto').style.display = 'none';
            document.getElementById('menuDatos').classList.remove('active');
            document.getElementById('menuExperiencia').classList.remove('active');
            document.getElementById('menuContacto').classList.remove('active');
        }
        function toInicio() {
            limpiar();
            document.getElementById('menuInicio').classList.add('active');
            document.getElementById('main').style.display = 'flex';
            document.body.style.backgroundColor='#FFF';
        }   