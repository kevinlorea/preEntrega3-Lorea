function calcularBalance() {
  const ingresos = JSON.parse(localStorage.getItem('ingreso')) || { monto: 0 };
  const gastosFijos = JSON.parse(localStorage.getItem('gastoFijo')) || { monto: 0 };
  const gastosVariables = JSON.parse(localStorage.getItem('gastoVariable')) || { monto: 0 };

  const balance = Number(ingresos.monto) - (Number(gastosFijos.monto) + Number(gastosVariables.monto));

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

  let item = JSON.parse(localStorage.getItem(tipo)) || { monto: 0 };
  item.monto = (item.monto || 0) + monto;
  localStorage.setItem(tipo, JSON.stringify(item));

  const balance = calcularBalance();
  document.getElementById('balance').textContent = balance;
});