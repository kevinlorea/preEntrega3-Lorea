// asistente financiero mensual //


// funcion para obtener la cantidad total de ingresos //
function obtenerIngresos() {
    return parseFloat(prompt("Ingrese sus ingresos mensuales:"));
  }
  
  // funcion para obtener los gastos fijos //
  function obtenerGastosFijos() {
    const gastosFijos = [];
    while (true) {
      const gastoFijo = prompt("Ingrese a que corresponde el gasto fijo (o escriba 'fin' para terminar):");
      if (gastoFijo.toLowerCase() === "fin") {
        break;
      }
      const cantidad = parseFloat(prompt(`Ingrese la cantidad de ${gastoFijo}:`));
      gastosFijos.push({ nombre: gastoFijo, cantidad });
    }
    return gastosFijos;
  }
  
  // funcion para obtener los gastos variables //
  function obtenerGastosVariables() {
    const gastosVariables = [];
    while (true) {
      const gastoVariable = prompt("Ingrese a que corresponde el gasto variable (o escriba 'fin' para terminar):");
      if (gastoVariable.toLowerCase() === "fin") {
        break;
      }
      const cantidad = parseFloat(prompt(`Ingrese la cantidad de ${gastoVariable}:`));
      gastosVariables.push({ nombre: gastoVariable, cantidad });
    }
    return gastosVariables;
  }
  
  // funcion para calcular el saldo después de los gastos //
  function calcularSaldoTotal(ingresos, gastosFijos, gastosVariables) {
    const totalGastosFijos = gastosFijos.reduce((total, gasto) => total + gasto.cantidad, 0);
    const totalGastosVariables = gastosVariables.reduce((total, gasto) => total + gasto.cantidad, 0);
    return ingresos - totalGastosFijos - totalGastosVariables;
  }
  
  // obtener los datos del usuario //
  const ingresosMensuales = obtenerIngresos();
  const gastosFijosMensuales = obtenerGastosFijos();
  const gastosVariablesMensuales = obtenerGastosVariables();
  
  // calcular el saldo después de los gastos //
  const saldoTotal = calcularSaldoTotal(ingresosMensuales, gastosFijosMensuales, gastosVariablesMensuales);
  
  // mostrar el resultado //
  console.log("Resumen financiero mensual:");
  console.log(`Ingresos: $${ingresosMensuales.toFixed(2)}`);
  console.log("Gastos Fijos:");
  gastosFijosMensuales.forEach((gasto) => console.log(`${gasto.nombre}: $${gasto.cantidad.toFixed(2)}`));
  console.log("Gastos Variables:");
  gastosVariablesMensuales.forEach((gasto) => console.log(`${gasto.nombre}: $${gasto.cantidad.toFixed(2)}`));
  console.log(`Saldo Total: $${saldoTotal.toFixed(2)}`); 

  //