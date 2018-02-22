/** This is my JavaScript file for my Schedule, all work for JavaScript is put down below **/
function selectedClass(){
	var selectedClass = document.getElementById("Search").value;
	switch (selectedClass){
/** Named my function which is please work, and put my switch in **/
/** Also have all of my cases stated below **/
		case "English":
			selectedClass="English";
			break;
	
		case "Math":
			selectedClass="Math";
			break;
	
		case "French":
			selectedClass="French";
			break;
	
		case "Religion":
			selectedClass="Religion";
			break;
	
		case "Computer Programming":
			selectedClass="Computer Programming";
			break;
	
		case "Music":
			selectedClass="Music";
			break;
	
		case "History":
			selectedClass="History";
			break;
	
		case "Science":
			selectedClass="Science";
			break;
	
		case "Speech":
			selectedClass="Speech";
			break;
	
		case "Level Assembly":
			selectedClass="Level Assembly";
			break;
	
		case 'Homeroom':
			selectedClass="Homeroom";
			break;
	
		case 'Advisors':
			selectedClass="Advisors";
			break;
	
		default:
			console.log ("Not Valid");
			break;
		location.reload();
			/**Looked this up online and is used in order to remove highlighted boxes and to make another search. **/
						}
		var className = document.getElementsByClassName(selectedClass);
for (m= 0; m<className.length; m++){
	className[m].style.backgroundColor ="blue";
		
			}
				

									}
/**Used a for loop as well as stating my variable which changes the colour of the background of the searched class **/
