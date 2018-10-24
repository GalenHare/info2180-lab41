window.addEventListener('load', log);
function log(){
	let walltouched;
	let x = document.getElementById("boundary1");
	x.addEventListener("mouseenter", changeColor);
	function changeColor(){
		console.log("In boundary 1");
		boundary1.classList.add("youlose");
	}

	let bounds = document.querySelectorAll(".boundary");
	for(m=0;m<bounds.length;m++){
		bounds[m].addEventListener("mouseenter", changeColorAll);
	}

	function changeColorAll(){
		let bounds = document.querySelectorAll(".boundary");
		for(m=0;m<bounds.length;m++){
		bounds[m].classList.add("youlose");
		}
		walltouchedF(true);
		checkWin();
	}

	function walltouchedF(param){
		walltouched = param;
	}

	let end = document.getElementById("end");
	end.addEventListener("mouseenter", checkWin);

	function checkWin(){
		if (walltouched !== true){
			document.getElementById("status").innerHTML="You win!";
		}else{
			document.getElementById("status").innerHTML="You have touched a wall";
		}
	}

	let start = document.getElementById("start");
	start.addEventListener("click",reset);

	function reset(){
		let bounds = document.querySelectorAll(".boundary");
		for(m=0;m<bounds.length;m++){
		bounds[m].classList.remove("youlose");
		}
		document.getElementById("status").innerHTML="Move your mouse over the 'S' to begin.";
		walltouchedF(null);
	}	

	let body = document.getElementsByTagName("body");
	body[0].addEventListener("mousemove", cheat);
	let entered;

	function cheat(event){
		console.log(event.clientX);
		start.addEventListener("mouseenter", enter);
		function enter(){
			entered = true;
		}
		console.log(entered);
		if(entered===true && event.clientX<(start.offsetLeft - start.scrollLeft + start.clientLeft)){
			walltouchedF(true);
			checkWin();
			changeColorAll();
		}
	}
}