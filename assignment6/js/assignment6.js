// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1

window.onload = function()
{
    makeRequest(1);
}



function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
    var url;

    if (pageNum === 1)
        url = "https://reqres.in/api/users?page=1";
    else if (pageNum === 2)   
        url = "https://reqres.in/api/users?page=2";
    else if (pageNum === 3)
        url = "https://reqres.in/api/users?page=3";    else
        url = "https://reqres.in/api/users?page=4";

	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			
			var main = document.querySelector("#data").innerHTML = "";
			for (var i = 0; i < 3; i++)
			{
			    var t = document.createElement("tr");
			    var t1 = document.createElement("td");
			    var data = document.createTextNode(jsData.data[i].id);
			    t1.appendChild(data);
			    t.appendChild(t1);
			    var t2 = document.createElement("td");
			    var data1 = document.createTextNode(jsData.data[i].first_name);
			    t2.appendChild(data1);
			    t.appendChild(t2);
			    var t3 = document.createElement("td");
			    var data3 = document.createTextNode(jsData.data[i].last_name);
			    t3.appendChild(data3);
			    t.appendChild(t3);
			    var t4 = document.createElement("td");
			    var img = document.createElement("img");
			    img.src = jsData.data[i].avatar;
			    t4.appendChild(img);
			    t.appendChild(t4);
                document.querySelector("#data").appendChild(t);
			}
			
			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
		
			document.getElementsByClassName("#pgbtn").removeClass('active');
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...

			if (jsData.page === 1)
			    document.getElementById("pgbtn1").className += "active";
		
			 if(jsData.page === 2)
			     document.getElementById("pgbtn2").className += "active";
		
			else if(jsData.page === 3)
			    document.getElementById("pgbtn3").className += "active";
	
			else
			    document.getElementById("pgbtn4").className += "active";

		}
		else {
			console.log('There was a problem with the request.');
		}
	}
}	