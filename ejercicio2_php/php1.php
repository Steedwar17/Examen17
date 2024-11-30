


<?php if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $vueltas = intval($_POST['vueltas']);
    $tiempo_a = floatval($_POST['tiempo_a']);
    $tiempo_b = floatval($_POST['tiempo_b']);
    if ($tiempo_a <= 0 || $tiempo_b <= 0) {
        echo "<h1>Error: Los tiempos deben ser mayores que 0.</h1>";
        exit;
    }
    if ($tiempo_a == $tiempo_b) {
        echo "<h1>Error: Los tiempos de los corredores no pueden ser iguales.</h1>";
        exit;
    }
    $resultados = [];
    for ($i = 1; $i <= $vueltas; $i++) {
        $tiempo_total_a = $i * $tiempo_a;
        for ($j = 1; $j <= $vueltas; $j++) {
            $tiempo_total_b = $j * $tiempo_b;
            if (abs($tiempo_total_a - $tiempo_total_b) < 0.0001) {
                $resultados[] = ['vueltas_a' => $i, 'vueltas_b' => $j, 'tiempo' => $tiempo_total_a];
            }
        }
    }
    echo "<h1>Resultados</h1>";
    if (empty($resultados)) {
        echo "<p>No hubo coincidencias en el rango dado.</p>";
    } else {
        echo "<table border='1' cellpadding='10'> <tr> <th>Vueltas Corredor A</th> <th>Vueltas Corredor B</th> <th>Tiempo de Coincidencia (min)</th> </tr>";
        foreach ($resultados as $resultado) {
            echo "<tr> <td>{$resultado['vueltas_a']}</td> <td>{$resultado['vueltas_b']}</td> <td>{$resultado['tiempo']}</td> </tr>";
        }
        echo "</table>";
    }
}
