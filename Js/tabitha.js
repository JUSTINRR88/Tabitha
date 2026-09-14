let varInicio = document.querySelector(".tit");
varInicio.addEventListener("click", ()=>{
    principal.innerHTML =`
          <section class="ijo">

            <div class="todo">

                <h3 class="nmbr">!Somos Hillary, Abel y Bruno¡</h3>

                <h1 class="soy">
                "Tenemos sueños"
                </h1>

                <p class="yo">
                   Hemos puesto mucho esfuerzo y dedicion al hacer esta pagina, con nuestros pocos conocimientos sobre Java y Java Script 
                    <br><br>
                </p>

                <div class="botones">

                    <button class="contra">

                        <img src="./img/contrtame.png" alt="">
                        Bienvenidos

                    </button>

                    <button class="nb">

                        =D

                    </button>

                </div>

                <img src="./img/iconciton.png"
                    class="redes"
                    alt="Redes Sociales">

            </div>


            <div class="ft">

                <img src="./img/fotoJuntos.png"
                    class="carita"
                    alt="Mi Fotografía">

            </div>

        </section>
    `

})