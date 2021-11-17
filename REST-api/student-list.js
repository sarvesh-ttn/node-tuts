const studentList =[
    {"id":1,"first_name":"Amit","last_name":"Trivedi","branch":"Mech"},
    {"id":2,"first_name":"Deepak","last_name":"Pathak","branch":"EE"},
    {"id":3,"first_name":"Yakshit","last_name":"Pant","branch":"CSE"},
    {"id":4,"first_name":"Koushal","last_name":"Gusain","branch":"Mech"},
    {"id":5,"first_name":"Rakesh","last_name":"Rawat","branch":"CSE"},
    {"id":6,"first_name":"Vimal","last_name":"Joshi","branch":"AMC"},
    {"id":7,"first_name":"Ritesh","last_name":"Negi","branch":"ECE"},
    {"id":8,"first_name":"Rishabh","last_name":"Mehra","branch":"CSE"},
    {"id":9,"first_name":"Pulkit","last_name":"Bhatt","branch":"Chem"},
    {"id":10,"first_name":"Ankit","last_name":"Kandpal","branch":"ECE"}
]
exports.getAllStudents=()=>{
    return studentList;
}
exports.getBranchStudents =(branchName)=>{
    const filteredStudent = studentList.filter((item)=>item.branch===branchName)
    return filteredStudent
}