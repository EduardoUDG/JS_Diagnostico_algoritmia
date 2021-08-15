

export default function render( obj = {}) {
    const tbody = document.getElementById('tbody');
    const { id, origen, destino, peso} = obj;
    const template = `
    <tr>
        <td>${id}</td>
        <td>${origen}</td>
        <td>${destino}</td>
        <td>${peso}</td>
    </tr>
    `;

    tbody.innerHTML += template;
}
