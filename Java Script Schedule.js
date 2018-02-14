var selectedclass;
function highlightStyle()
var className = document.getElementById("SelectedClass").value;

switch (classname) {
	case 'English':
		selectedClass="English";
		console.log ("Indie Reading")
	break;
	
	case 'Math':
		selectedClass="Math";
		console.log ("Do math")
	break;
	
	case 'French':
		selectedClass="French";
		console.log ("Bonjour")
	break;
	
	case 'Religion':
		selectedClass="Religion";
		console.log ("Gentlemen")
	break;
	
	case 'Computer Programming':
		selectedClass="Computer Programming";
		console.log ("Computers")
	break;
	
	case 'Music':
		selectedClass="Music";
		console.log ("Hey Hey")
	break;
	
	case 'History':
		selectedClass="History";
		console.log ("Hand cramps")
	break;
	
	case 'Science':
		selectedClass="Science";
		console.log ("Stoicheomitry")
	break;
	
	case 'Speech':
		selectedClass="Speech";
		console.log ("Speaking")
	break;
	
	case 'Level Assembly':
		selectedClass="Level Assembly";
		console.log ("Boring")
	break;
	
	case 'Homeroom':
		selectedClass="Homeroom";
		console.log ("One a cycle")
	break;
	
	case 'Advisors':
		selectedClass="Advisors";
		console.log ("I love this class")
	break;
	
	default:
		console.log ("Not Valid");
	break;
}

var Oraganizedclass= documnet.getElementByClassName(selectedClass)