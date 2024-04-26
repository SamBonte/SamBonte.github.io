const setup = () => {
    //Object creëren
    let student = {}; // een leeg obj
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date(2000,1,1);
    student.eyeColor = "blue";

    console.log(student.firstName);

    //korter
    // JavaScript Object Literal is een data type used
        // to define objects in js.
        // it is a syntax for creating an object in
        // JS that is composed of
        // key-value pairs.
    let student1 = {
        firstName: "Johnson",
        lastName: "Doe",
        age: new Date(2000,0,1,10,30),
        eyeColor: "blue"
    }
    console.log(student1.firstName)

    //Object student 1 weergeven op console ??? obj != string
    //OPL: obj literal converteren naar string via JSON.stringify();
    let text = JSON.stringify(student1);
    console.log(text);

    // uitbreiding van een object

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };
    console.log(student2.address.zipCode);

    //documentatie

    let tekst = JSON.stringify(student);
    console.log (tekst);

    tekst = JSON.stringify(student2);
    console.log (tekst);

    //list van objecten
    // een JSON = een object literal java script object notation
    //notation in object literal notation => {key: value}
    //elke data krijgt betekenis
    //compacte manier om data met elkaar uit te wisselen +
    //betekenis geven aan die data
    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
// omzetten script-object naar een JSON-object
    tekst = JSON.stringify(students);

    console.log (tekst);

// omzetten JSON-object naar script-object
    tekstJS = JSON.parse(tekst);
    console.log ("JsonParse " + tekstJS[0].firstName);


    tekst = JSON.stringify(students[1]);
    console.log (tekst);


}
window.addEventListener("load", setup);