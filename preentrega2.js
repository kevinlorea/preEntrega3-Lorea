
function calcularBalance() {
  const ingresos = parseFloat(localStorage.getItem('ingreso')) || 0;
  const gastosFijos = parseFloat(localStorage.getItem('gastoFijo')) || 0;
  const gastosVariables = parseFloat(localStorage.getItem('gastoVariable')) || 0;
  
  const balance = ingresos - (gastosFijos + gastosVariables);
  
  return balance;
}


document.getElementById('registrar').addEventListener('click', function () {
  const tipo = document.getElementById('tipo').value;
  const monto = parseFloat(document.getElementById('monto').value);
  const descripcion = document.getElementById('descripcion').value;

  if (isNaN(monto)) {
      alert('Por favor, ingrese un monto válido.');
      return;
  }
 
 
  if (tipo === 'ingreso') {
      localStorage.setItem('ingreso', monto);
  } else if (tipo === 'gastoFijo') {
      localStorage.setItem('gastoFijo', monto);
  } else if (tipo === 'gastoVariable') {
      localStorage.setItem('gastoVariable', monto);
  }

  
  const balance = calcularBalance();
  document.getElementById('balance').textContent = balance;
});