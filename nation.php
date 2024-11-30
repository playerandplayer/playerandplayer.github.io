<?php
// Mock data for the nation
$nation = [
    "name" => "Republic of Exampleland",
    "flag" => "exampleland_flag.png", // Path to the flag image
    "map" => "exampleland_map.png",   // Path to the map image
    "government" => [
        "type" => "Democratic Republic",
        "leader" => "President Jane Doe",
        "capital" => "Example City"
    ],
    "laws" => [
        "Constitution" => "Adopted in 1980, guarantees free speech, equality, and more.",
        "Legal System" => "Based on civil law with independent judiciary."
    ],
    "economics" => [
        "GDP" => "$500 billion",
        "Major Industries" => ["Technology", "Agriculture", "Tourism"],
        "Currency" => "Example Dollar (EXD)"
    ]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $nation['name']; ?></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        header {
            background: #004080;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        .container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
        }
        img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ccc;
        }
        section {
            margin-bottom: 2rem;
        }
        h2 {
            color: #004080;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        table, th, td {
            border: 1px solid #ccc;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to <?php echo $nation['name']; ?></h1>
    </header>
    <div class="container">
        <!-- Flag Section -->
        <section>
            <h2>National Flag</h2>
            <img src="<?php echo $nation['flag']; ?>" alt="Flag of <?php echo $nation['name']; ?>">
        </section>

        <!-- Map Section -->
        <section>
            <h2>Nation Map</h2>
            <img src="<?php echo $nation['map']; ?>" alt="Map of <?php echo $nation['name']; ?>">
        </section>

        <!-- Government Section -->
        <section>
            <h2>Government</h2>
            <p><strong>Type:</strong> <?php echo $nation['government']['type']; ?></p>
            <p><strong>Leader:</strong> <?php echo $nation['government']['leader']; ?></p>
            <p><strong>Capital:</strong> <?php echo $nation['government']['capital']; ?></p>
        </section>

        <!-- Laws Section -->
        <section>
            <h2>Laws</h2>
            <ul>
                <?php foreach ($nation['laws'] as $key => $description): ?>
                    <li><strong><?php echo $key; ?>:</strong> <?php echo $description; ?></li>
                <?php endforeach; ?>
            </ul>
        </section>

        <!-- Economics Section -->
        <section>
            <h2>Economics</h2>
            <table>
                <tr>
                    <th>Aspect</th>
                    <th>Details</th>
                </tr>
                <?php foreach ($nation['economics'] as $key => $value): ?>
                    <tr>
                        <td><?php echo $key; ?></td>
                        <td><?php echo is_array($value) ? implode(", ", $value) : $value; ?></td>
                    </tr>
                <?php endforeach; ?>
            </table>
        </section>
    </div>
</body>
</html>
