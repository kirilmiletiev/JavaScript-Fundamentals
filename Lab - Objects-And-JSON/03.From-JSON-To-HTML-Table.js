function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input);
    let result = '<table>\n   <tr>';
    for (let key in arr[0]) {
        result += `<th>${htmlEscape(key + '')}</th>`;
    }
    result += '</tr>\n';
    for (let obj of arr) {
        result += '  <tr>';
        for (let objKey in obj) {
            result += `<td>${htmlEscape(obj[objKey] + '')}</td>`;
        }
        result += '</tr>\n';
    }
    return result += '</table>';

    function htmlEscape(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}