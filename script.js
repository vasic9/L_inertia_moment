	var row= 3;
	var entry = document.getElementById("entry");
	entry.addEventListener("click", displayDetails);

	var table = document.getElementById("display");
	var unos = document.getElementById("moment");

		function displayDetails(){
			var name1 = document.getElementById("name1").value;
			var name2 = document.getElementById("name2").value;
			var name3 = document.getElementById("name3").value;
	
	
			if(!name1 || !name2 || !name3){
				alert("Unesite sve vrednosti");
				return;
			}
	
			var display = document.getElementById("display");
			var newRow = display.insertRow(row);
			newRow.setAttribute('class', 'newrow');
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);
			var cell4 = newRow.insertCell(3);

	
				cell1.innerHTML= name1;
				cell2.innerHTML= name2;
				cell3.innerHTML= name3;
				cell4.innerHTML = "Obriši red";
	
				row++;

				for(var i = 1; i < display.rows.length; i++){
		
					display.rows[i].cells[3].onclick= function(){
			
						var c = confirm("Da li želite da izbrišete red");
							if(c === true){
								row = this.parentElement.rowIndex;
								display.deleteRow(row);
							}
						} 
			
				}
			
	}
		function suma() {
			var a, b, t; var res, res1; var p1, x1, y1, xs, ys, p2, x2, y2; var ixx1, ixx2, iyy1, iyy2; var ix, iy;
				a= Number(document.racun.broj1.value);
				b= Number(document.racun.broj2.value);
				t= Number(document.racun.broj3.value);
					p1=((a-t)*t);
					x1=t/2;
					y1=t+(a-t)/2;
					p2=b*t;
					x2=b/2;
					y2=t/2;
						xs=(p1*x1+p2*x2)/(p1+p2); 
						ys=(p1*y1+p2*y2)/(p1+p2);

							ixx1=((t*(a-t)*(a-t)*(a-t))/12)+(p1*(ys-y1)*(ys-y1)); 
							ixx2=(((b*t*t*t))/12)+(p2*(ys-y2)*(ys-y2));
								ix=ixx1+ixx2;

							iyy1=(((t*t*t)*(a-t))/12)+(p1*(xs-x1)*(xs-x1)); 
							iyy2=((t*b*b*b)/12)+(p2*(xs-x2)*(xs-x2));
							iy=iyy1+iyy2;

					res=ix/10000;
				document.racun.rezultat.value=res;

					res1=iy/10000;
				document.racun.rezultat1.value=res1;
				drawL(50,50,a,b,t);
       	   	
	}

	table.addEventListener('click' , function(e){
		console.log("klik");
		if(e.target.tagName === 'TD'){
			console.log(e.target.tagName);
			var vrednosti = e.target.parentElement.childNodes;
			console.log(e.target.parentElement);
			console.log(e.target.parentElement.childNodes);
				if (e.target.parentElement.classList.contains('newrow')){
					moment.broj1.value = vrednosti[0].innerHTML;
					moment.broj2.value  = vrednosti[1].innerHTML;
					moment.broj3.value  = vrednosti[2].innerHTML;
				} 
				else { 
					moment.broj1.value = vrednosti[1].innerHTML;
					moment.broj2.value  = vrednosti[3].innerHTML;
					moment.broj3.value  = vrednosti[5].innerHTML;
				}	
		}

	}  );
	
	var canvas = document.querySelector('canvas');

	var c = canvas.getContext('2d');
		c.scale(0.5,0.5);
		c.strokeStyle = 'black';
		c.fillStyle = 'black';

	function drawL(x,y,a,b,t){
		c.clearRect(0,0,canvas.width*2,canvas.height*2);
		c.beginPath();
		c.rect(x,y,t,a);
		c.fill();
	
		c.beginPath();
		c.rect(x,y+a, b, t);
		c.fill();
}



/*
$("#moment").submit(function(e) {
	e.preventDefault();
	
	$.ajax({
		url: 'upis.php',
		data: {
			name1: name1,
			name2: name2,
			name3: name3
		},
		success: function() {
			debugger;
			alert("Podaci su upisani");
		}
	});
});
*/
	


