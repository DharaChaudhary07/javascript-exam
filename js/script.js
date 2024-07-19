
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let age = document.getElementById('age');
let course = document.getElementById('course');
let isEdit = false;

const getData = () => {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data) {
        return data;
    } else {
        return [];
    }
}
let storage = getData();
let ditData = () => {

    event.preventDefault();

    let StudentData = {
        id : isIndex ? isIndex : storage.length + 1,
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        age: age.value,

    }

    if (isEdit) {

        // console.log("obj", StudentData);

        let data = [...storage];
        let updatedRec = data.map((rec) => {

            if (rec.id == isIndex) {
                return rec = StudentData;
            } else {
                return rec;
            }

        })
        // console.log('updated successfully..', updatedRec);
        storage = updatedRec;
        isEdit = false;
        isIndex = ' ';

    } else {

        storage = [...storage, StudentData];
        console.log(StudentData);
        console.log(storage);

    }
    showData();


    let setData = JSON.stringify(storage);
    localStorage.setItem("data", setData);

}
let singleRecord = (id) => {
    // console.log("Edit Your Data..");

    let data = [...storage];

    let single = data.filter(() => {

        return id === id;

    })

    isEdit = true;
    isIndex = id;

    console.log("single", single);

    fname.value = single.fname;
    lname.value = single.lname;
    email.value = single.email;
    age.value = single.age;
    course.value = single.course;

}
const showData = () => {

    tbody.innerHTML = '';

    storage.forEach((rec) => {
        tbody.innerHTML += `
        <tr>
            <td>${rec.Id}</td>
            <td>${rec.fname}</td>
            <td>${rec.lname}</td>
            <td>${rec.email}</td>   
            <td>${rec.age}</td>
            <td>${rec.course}</td>
            <td><button class="btn btn-primary" onclick="return singleRecord(${rec.Id})">Edit</button>||<button class="btn btn-danger" onclick="return deleteData(${rec.Id})">Delete</button></td>
        </tr>`;       
        
    });
}

showData();