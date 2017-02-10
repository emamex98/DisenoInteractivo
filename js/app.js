$(document).foundation()

var solutionSlides = document.getElementById("solutionslides");
var nextButton1 = document.getElementById("showSolution1");

nextButton1.onclick = function next() {
  solutionSlides.innerHTML = "Cuando se habla de los problemas que se han generado como consecuencia de los eventos recientes, se habla de miles de personas que podrian verse afectadas, o ya son vistimas de los cambios repentinos. No solo se habla de los negocios que dependen de las exportaciones a EEUU como principal fuente de igreso –quienes corren el riesgo de ser afectados por la renegociacion del NAFTA– sino también se habla de millones de mexicanos que laboran en EEUU o trabajan para empresas extranjeras. Forbes reportó en mayo del año pasado que la administración de Trump podría generar una caída de 4.9% del Producto Interno Bruto (PIB) de México durante el primer año de su mandato, afectando la economía nacional, y consecuentemente a millones de mexicanos.";
}

// nextButton1.onclick = function next() {
//   solutionSlides.innerHTML = "Una manera fácil y al mismo tiempo pederosa para contribuir a la eonomia local es apoyando a los negocios locales." +
//                              "\n" + "Esto no quiere decir que se deben evitar las marcas extrageras al 100%, sino que debemos frecuentar los negocios locales siempre que sea posible. En vez de comprar frutas y verduras en Walmart, ¿por qué no comprarlas en el mercado? De este modo, apoyamos el consumo local y el crecimiento económico familiar y orgánico.";
// }
