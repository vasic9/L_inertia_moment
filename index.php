<?php
    include_once 'konekcija.php';
?>

<html>

	<head>
		<link rel="stylesheet" href="style.css">
		<title>Moment inercije za težišne ose L profila</title>
		<meta charset="UTF-8">
	</head>
	
	
	<body>
	<h1>Moment inercije za težišne ose L profila</h1>
		<img src="profil.png" id="slika">
		<h3> Ovde možete pogledati tablice
			<a href = "http://metalakonstrukcijas.lv/en/metal-trading/l-profile-steel-unequal-angles-sections-sizes-dimensions-properties-specifications/" target = "_blank">L profila</a>.
		</h3>
		<div id="container">
			<div id="namediv" class="input"> a [mm]:
				<input id="name1" type="number" placeholder="0-999">
			</div>
			<div class="input"> b [mm]:
				<input id="name2" type="number" placeholder="0-999">
			</div>
			<div class="input"> t [mm]:
				<input id="name3" type="number" placeholder="0-998">
			</div>	
			
			
			<button id="entry">Dodaj</button> 
			<br>
			<br>

		
		</div>
		
		<table id="display">
			<tr>
				<th>a</th>
				<th>b</th>
				<th>t</th>
				<th>Brisanje reda</th>
				
			</tr>
			
			<tr>
                 <td>50</td>
                 <td>30</td>
                 <td>5</td>
				 <td>Obriši red</td>
			     
            </tr>
            <tr>
                <td>150</td>
                <td>100</td>
                <td>10</td>
				<td>Obriši red</td>
				
            </tr>
                   
		</table>
		<form action="upis.php" method="POST" name="racun" id="moment">
			a [mm]:  <input type="text" name="broj1" id="broj1">
			<br>
			b [mm]:  <input type="text" name="broj2" id="broj2">
			<br>
			t [mm]:  <input type="text" name="broj3" id="broj3">
			<br>
			<button id="kalkulator" type="button" value="Izračunaj" onclick="suma()">Izračunaj</button>
			<br>
			<br>
			Ixx [cm4]: <input type="text" name="rezultat" id="rezultat">
			<br>
	
			Iyy [cm4]: <input type="text" name="rezultat1" id="rezultat1">
			<br>
			
		</form>

		<canvas></canvas>
		<script src="jquery-3.4.1.js"></script>
		<script src="script.js"></script>
		<script>
			var Ixx = 0;
			var Iyy = 0;
		
			$("#kalkulator").click(function() {
				suma();
				debugger;
				$.ajax({
					url: 'upis.php',
					method: 'POST',
					data: {
						name1: $("#broj1").val(),
						name2: $("#broj2").val(),
						name3: $("#broj3").val()
					},
					success: function(data) {
						debugger;
						alert("Podaci su upisani");
						
						Ixx = $("#rezultat").val();
						Iyy = $("#rezultat1").val();
					},
					async: false
				});
			});
		</script>
	
	</body>





</html>