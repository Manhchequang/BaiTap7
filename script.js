

	var prevScrollpos = window.pageYOffset;

	window.onscroll = function() {

	  var currentScrollPos = window.pageYOffset;

	  if (prevScrollpos > currentScrollPos) {
	    document.getElementById("navbar").style.top = "0";
	  } 
	  else {
	    document.getElementById("navbar").style.top = "-60px";
	  }

	  prevScrollpos = currentScrollPos;
	}

	function openNav() {
	  document.getElementById("sideNav").style.width = "250px";
	  document.getElementById("main").style.marginLeft = "250px";
	  document.getElementById("maskClose").style.width = "100%";
	  document.getElementById("maskClose").style.backgroundColor = "rgba(0,0,0,0.6)";
	}

	function closeNav() {
	  document.getElementById("sideNav").style.width = "0";
	  document.getElementById("main").style.marginLeft= "0";
	  document.getElementById("maskClose").style.width = "0";
	  document.getElementById("maskClose").style.backgroundColor = "transparent";
	}

	var x = document.getElementById("open");

	x.addEventListener("mouseover",function(){
	 	var dropdown = document.getElementsByClassName("drDown");
	    var i;
		for (i = 0; i < dropdown.length; i++) {

		  dropdown[i].addEventListener("click", function() {

		  this.classList.toggle("active");
		  var dropdownContent = this.nextElementSibling;

		  if (dropdownContent.style.display === "block") {
		  dropdownContent.style.display = "none";
		  } 
		  else {
		  dropdownContent.style.display = "block";
		  }
		  });
		}

	 });