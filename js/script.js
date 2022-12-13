let metrosDeCuerda = 0
let precioNaylon = 45
let precioPoliester = 62
let precioPolietileno = 57
let valorFinal = 0

let inputCuerda = document.getElementById('inputCuerda')
let inputMetros = document.getElementById('inputMetros')
let inputTotal = document.getElementById('inputTotal')

let productoSeleccionado =
  prompt(`Que producto desea comprar ? (escriba el numero de la opcion deseada) 
1.'cuerda de nylon' 
2.'cuerda de poliester' 
3.'cuerda de polietileno'`)

if (
  productoSeleccionado == 3 ||
  productoSeleccionado == 2 ||
  productoSeleccionado == 1
) {
  switch (productoSeleccionado) {
    case '1':
      metrosDeCuerda = prompt(
        `La cuerda de nylon tiene un precio de $${precioNaylon} por metro. Cuantos metros quiere comprar?`
      )

      parseFloat(metrosDeCuerda)
      if (metrosDeCuerda < 0 || metrosDeCuerda == '' || metrosDeCuerda == NaN)
        alert('El valor ingresado es incorrecto')
      else {
        valorFinal = metrosDeCuerda * precioNaylon
      }
      
      while (metrosDeCuerda > 1000) {
        alert ("Tenemos solamente 1000 unidades en stock");
        metrosDeCuerda = parseInt(prompt("Cuanto desea?"));
      }




      if (
        confirm(
          `Usted esta por comprar ${metrosDeCuerda} metros de cuerda por $${valorFinal}. Confirma la transaccion?`
        )
      ) {
        alert('Gracias por comprar con nosotros.')
        inputCuerda.value = 'nylon';
        inputMetros.value = metrosDeCuerda;
        inputTotal.value = valorFinal;
      } else {
        alert(`:'(`)
      }


      break
    case '2':
      metrosDeCuerda = prompt(
        `La cuerda de poliester tiene un precio de $${precioPoliester} por metro. Cuantos metros quiere comprar?`
      )

      parseFloat(metrosDeCuerda)
      if (metrosDeCuerda < 0 || metrosDeCuerda == '' || metrosDeCuerda == NaN)
        alert('El valor ingresado es incorrecto')
      else {
        valorFinal = metrosDeCuerda * precioPoliester

        while (metrosDeCuerda > 1000) {
          alert ("Tenemos solamente 1000 unidades en stock");
          metrosDeCuerda = parseInt(prompt("Cuanto desea?"));
        }

        if (
          confirm(
            `Usted esta por comprar ${metrosDeCuerda} metros de cuerda por $${valorFinal}. Confirma la transaccion?`
          )
        ) {
          alert('Gracias por comprar con nosotros.')
          inputCuerda.value = 'poliester';
          inputMetros.value = metrosDeCuerda;
          inputTotal.value = valorFinal;
        } else {
          alert('bip bop bip comprame please')
        }
      }



      break
    case '3':
      metrosDeCuerda = prompt(
        `La cuerda de polietileno tiene un precio de $${precioPolietileno} por metro. Cuantos metros quiere comprar?`
      )

      parseFloat(metrosDeCuerda)
      if (metrosDeCuerda < 0 || metrosDeCuerda == '' || metrosDeCuerda == NaN)
        alert('El valor ingresado es incorrecto')
      else {
        valorFinal = metrosDeCuerda * precioPolietileno
      }

      while (metrosDeCuerda > 1000) {
        alert ("Tenemos solamente 1000 unidades en stock");
        metrosDeCuerda = parseInt(prompt("Cuanto desea?"));
      }

      if (
        confirm(
          `Usted esta por comprar ${metrosDeCuerda} metros de cuerda por $${valorFinal}. Confirma la transaccion?`
        )
      ) {
        alert('Gracias por comprar con nosotros.');
        inputCuerda.value = 'polietileno';
        inputMetros.value = metrosDeCuerda;
        inputTotal.value = valorFinal;
      } else {
        alert('bip bop bip comprame please')
      }
      break
  }
} else alert('El producto seleccionado no es valido.')
