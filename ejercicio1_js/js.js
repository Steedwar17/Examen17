document.getElementById("formulario").addEventListener("submit",
    function (event) {
        event.preventDefault(); const producto = document.getElementById("producto").value;
        const categoria = document.getElementById("categoria").value;
        const precioUnitario = parseFloat(document.getElementById("precio").value);
        const unidades = parseInt(document.getElementById("unidades").value);
        if (precioUnitario <= 0 || unidades <= 0) {
            alert("El precio y las unidades deben ser mayores que 0. por favor");
            return;
        } let descuentoPorcentaje = 0;
        if (categoria === "A") {
            if (unidades <= 10) descuentoPorcentaje = 1;
            else if (unidades <= 20) descuentoPorcentaje = 1.5;
            else descuentoPorcentaje = 2;
        }
        else if (categoria === "B") {
            if (unidades <= 10) descuentoPorcentaje = 1.2;
            else if (unidades <= 20) descuentoPorcentaje = 2;
            else descuentoPorcentaje = 3;
        }
        else if (categoria === "C") {
            if (unidades <= 10) descuentoPorcentaje = 0;
            else if (unidades <= 20) descuentoPorcentaje = 0.5;
            else descuentoPorcentaje = 1;
        } const precioTotal = precioUnitario * unidades; const descuentoValor = (precioTotal * descuentoPorcentaje) / 100; const totalFinal = precioTotal - descuentoValor; let claseColor = "";
        if (categoria === "A") claseColor = "negro";
        else if (categoria === "B") claseColor = "verde";
        else if (categoria === "C") claseColor = "azul";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ` <p><strong>Producto:</strong> 
        ${producto}</p> <p><strong>Categoría:</strong> 
        ${categoria}</p> <p><strong>Unidades:</strong>
         ${unidades}</p> <p><strong>Precio Unitario:</strong> $
         ${precioUnitario.toFixed(2)}</p> <p><strong>Precio Total:</strong> 
         $${precioTotal.toFixed(2)}</p> <p class="${claseColor}"><strong>Descuento (%):</strong> 
         ${descuentoPorcentaje}%</p> <p><strong>Valor del Descuento:</strong> $${descuentoValor.toFixed(2)}</p> <p><strong>Total Final:</strong> $${totalFinal.toFixed(2)}</p> `;
    });