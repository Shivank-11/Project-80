var names_of_people = [];

function submit() {
    var GuestName = document.getElementById("name1").value;

    name_of_the_student_array.push(names_of_people);
}
console.log(GuestName);
console.log(names_of_people);
var lenght_of_name = names_of_people.length;
console.log(lenght_of_name);
document.getElementById("display_name").innerHTML = names_of_people.toString();
}



function show() {
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("     ").style.display = "block";

    for (var i = 0; k < lenght_of_name_of_students_array; i++) {
        display_people_array.push("<h4> NAME- " + names_of_people_array[i] + "</h4>");
    }
}


function sorting() {
    names_of_guest.sort();
console.log(names_of_people_array);
var display_people_array_sorting = [];
var lenght_of_names_of_people_array = names_of_the_people_array.length;
for (var k = 0; k < lenght_of_names_of_people_array; k++)
{
display_student_array_sorting.push("<h4> NAME- "+ name_of_the_student_array[k] + "</h4>");
}// add the sort function
    // .the sort function is .sort();
    var i = names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("sorted").innerHTML = i.toString();
}


function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for (j = 0; j < names_of_people.length; j++) {
        if (s == names_of_people[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "name found " + found + " time/s";
    console.log("found name " + found + " time/s");
}
