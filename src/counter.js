document.getElementById('swap').addEventListener('click', () => {
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  const temp = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = temp;
});

function searchTrip() {
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const date = document.getElementById('date').value;
  const tickets = document.getElementById('tickets').value;

  if (!from || !to || !date) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  alert(`🔍 Tìm chuyến xe từ "${from}" đến "${to}" vào ngày ${date} cho ${tickets} vé.`);
}
