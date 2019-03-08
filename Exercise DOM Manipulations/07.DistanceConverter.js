function attachEventsListeners() {
    let distance = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    let convertBtn = document.getElementById('convert').addEventListener('click', function () {

        document.getElementById('outputDistance').value =
            Number(document.getElementById('inputDistance').value) 
            * distance[document.getElementById('inputUnits').value] / distance[document.getElementById('outputUnits').value];
    });
}
