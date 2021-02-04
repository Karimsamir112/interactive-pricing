/*document.querySelector(".btn-bg").addEventListener("click", function () {
            document.querySelector(".btn-radio").classList.toggle("transition");
            if (document.querySelector(".btn-radio").classList.contains("transition")) {
                  
				document.body.style.backgroundColor="red";
                } else {
                  document.body.style.backgroundColor="red";
				
					//window.header2.style.fontFamily="sans-serif";
			
				//	window.header3.style.fontFamily="sans-serif";
				
                }
            }); */



	
function transition() {
	var value = window.inp.value;
	
	document.querySelector(".btn-radio").classList.toggle("transition");
	
	/* if (valuee == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$6.00";
	  
    } */
	//${{price}}.00
	
            if (document.querySelector(".btn-radio").classList.contains("transition") )  {
                  
				document.querySelector(".grey-bg").style.background="linear-gradient(to bottom right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) 100%)";
				/* window.inp.style.display="none";
				document.querySelector(".inp2").style.display="block"; */
				//document.querySelector(".price").innerHTML = window.inp.value *  0.25  * 3;
				//document.querySelector(".price").innerHTML = "$" + document.querySelector(".price").innerHTML  * 0.25 * 3;
				 window.inp.onclick=function() {
      var value = window.inp.value;
					 
				if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$6.00";
					document.getElementById("inp").style.backgroundSize="0% 100%";
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$9.00";
		document.getElementById("inp").style.backgroundSize="25% 100%";
    } else if (value == 50) {
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		document.getElementById("inp").style.backgroundSize="50% 100%";
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$18.00";
		document.getElementById("inp").style.backgroundSize="75% 100%";
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$27.00";
		document.getElementById("inp").style.backgroundSize="100% 100%";
    } 
					 
  }
			/*	clearInterval(inter);
				var inter2 = setInterval(check2 ); */
				//var inter2 = setInterval(check2 );
				//rerturn(check2);
				//document.querySelector(".price").innerHTML =  + " 3" ;
				//document.querySelector(".price").innerHTML *= 0.75;
				
				
		/*	if (document.querySelector(".price").innerHTML === "$8.00") {
   // window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$6.00";
		
    } 
				
 else if (document.querySelector(".price").innerHTML === "$12.00") {
      // window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$9.00";
	 
    } else if (document.querySelector(".price").innerHTML === "$16.00") {
      // window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		
    } else if (document.querySelector(".price").innerHTML === "$24.00") {
     // window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$18.00";
		
    } else if (document.querySelector(".price").innerHTML === "$36.00") {
    // window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$27.00";
    } 
		*/if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$6.00";
					document.getElementById("inp").style.backgroundSize="0% 100%";
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$9.00";
		document.getElementById("inp").style.backgroundSize="25% 100%";
    } else if (value == 50) {
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		document.getElementById("inp").style.backgroundSize="50% 100%";
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$18.00";
		document.getElementById("inp").style.backgroundSize="75% 100%";
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$27.00";
		document.getElementById("inp").style.backgroundSize="100% 100%";
    } 
				 }
	
	
				
                else {
             
				document.querySelector(".grey-bg").style.background="linear-gradient(to bottom right, hsl(223, 50%, 87%) 0%, hsl(223, 50%, 87%) 100%)";
					
					//document.querySelector(".price").innerHTML = window.inp.value;
					//document.querySelector(".price").innerHTML =  document.querySelector(".price").innerHTML * 0.25 * 4;
			/*		clearInterval(inter);
				clearInterval(inter2);
					
		 setInterval(check , 1); */
				/*	clearInterval(inter2);
					setInterval(check); */
					//setTimeout(inter , 1);
					
					//clearInterval(inter);
					//document.querySelector(".price").innerHTML /=0.75  ;

		/*				
			if (document.querySelector(".price").innerHTML === "$6.00") {
   // window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$8.00";
		
    } 
				
 else if (document.querySelector(".price").innerHTML === "$9.00") {
     //  window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
	 
    } else if (document.querySelector(".price").innerHTML === "$12.00") {
       //window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$16.00";
		
    } else if (document.querySelector(".price").innerHTML === "$18.00") {
     // window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$24.00";
		
    } else if (document.querySelector(".price").innerHTML === "$27.00") {
     //window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$36.00";
    }
	*/
				 window.inp.onclick=function() { 
     var value = window.inp.value;
					 
				if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$8.00";
					document.getElementById("inp").style.backgroundSize="0% 100%";
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		document.getElementById("inp").style.backgroundSize="25% 100%";
    } else if (value == 50) {
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$16.00";
		document.getElementById("inp").style.backgroundSize="50% 100%";
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$24.00";
		document.getElementById("inp").style.backgroundSize="75% 100%";
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$32.00";
		document.getElementById("inp").style.backgroundSize="100% 100%";
    } 
					 
  }
	
				 
			if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$8.00";
					document.getElementById("inp").style.backgroundSize="0% 100%";
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		document.getElementById("inp").style.backgroundSize="25% 100%";
    } else if (value == 50) {
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$16.00";
		document.getElementById("inp").style.backgroundSize="50% 100%";
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$24.00";
		document.getElementById("inp").style.backgroundSize="75% 100%";
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$32.00";
		document.getElementById("inp").style.backgroundSize="100% 100%";
    } 
					
} 

}







function check() {
	
	
	var value = window.inp.value;
	

	
	if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$8.00";
		document.getElementById("inp").style.backgroundSize="0% 100%";
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$12.00";
		document.getElementById("inp").style.backgroundSize="25% 100%";
		
    } else if (value == 50) { 
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$16.00";
		document.getElementById("inp").style.backgroundSize="50% 100%";
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML="$24.00";
		document.getElementById("inp").style.backgroundSize="75% 100%";
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML="$36.00";
		document.getElementById("inp").style.backgroundSize="100% 100%";
    } 

/*	if (value == 0) {
    window.views.innerHTML = "10K PAGEVIEWS";
      document.querySelector(".price").innerHTML=  8 ; 
		
    } else if (value == 25) {
       window.views.innerHTML = "50K PAGEVIEWS";
      document.querySelector(".price").innerHTML=12;
    } else if (value == 50) {
       window.views.innerHTML = "100K PAGEVIEWS";
      document.querySelector(".price").innerHTML=16;
    } else if (value == 75) {
      window.views.innerHTML = "500K PAGEVIEWS";
      document.querySelector(".price").innerHTML=24;
    } else if (value == 100) {
     window.views.innerHTML = "1M PAGEVIEWS";
      document.querySelector(".price").innerHTML=36;
    } 
	
*/
}
	





















































