// get monthing in string eg, janruary

let mm = prompt("Enter Month    ------->   June ", '');

// converting to lowercase to save from errors
mm = mm.toLowerCase();

switch(mm){
    case('janruary'):
    {
        alert("Janruary has 31 days");
        break;
    }
    case('febraury'):
    {
        alert("february has 28 days");
        break;
    }
    case('march'):
    {
        alert("march has 30 days");
        break;
    }
    case('april'):
    {
        alert("april has 31 days");
        break;
    }
    case('may'):
    {
        alert("may has 30 days");
        break;
    }
    case('june'):
    {
        alert("june has 31 days");
        break;
    }
    case('july'):
    {
        alert("july has 30 days");
        break;
    }
    case('august'):
    {
        alert("august has 31 days");
        break;
    }
    case('septeber'):
    {
        alert("september has 30 days");
        break;
    }
    case('october'):
    {
        alert("october has 31 days");
        break;
    }
    case('november'):
    {
        alert("november has 30 days");
        break;
    }
    case('december'):
    {
        alert("december has 30 days");
        break;
    }
    default:
        alert("Plz enter valid month name!")
}