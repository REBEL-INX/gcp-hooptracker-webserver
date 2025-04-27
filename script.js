const form = document.getElementById("statForm");
const tableBody = document.querySelector("#statTable tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const player = document.getElementById("player").value;
  const points = document.getElementById("points").value;
  const rebounds = document.getElementById("rebounds").value;
  const assists = document.getElementById("assists").value;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${player}</td>
    <td>${points}</td>
    <td>${rebounds}</td>
    <td>${assists}</td>
  `;

  tableBody.appendChild(row);

  form.reset();
});
