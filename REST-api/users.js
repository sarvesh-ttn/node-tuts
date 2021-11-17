const userList =[
    {
        "username":"gkapoor01",
        "first_name":"Gaurav",
        "last_name":"Kapoor",
        "password":"PMcQp1Y"
    },
    {
        "username":"asingh12",
        "first_name":"Abhishek",
        "last_name":"Singh",
        "password":"31CUTxi8aeNU"
    },
    {
        "username":"nraj01",
        "first_name":"Nilay",
        "last_name":"Raj",
        "password":"EsJat0Xs"
    },
    {
        "username":"hadhikari13",
        "first_name":"Himanshu",
        "last_name":"Adhikari",
        "password":"Jx3EnWkP"
    },
    {
        "username":"atiwari09",
        "first_name":"Anshika",
        "last_name":"Tiwari",
        "password":"miHu0y0mBo"
    },
    {
        "username":"mlogan",
        "first_name":"Matt",
        "last_name":"Logan",
        "password":"bekyl7"
    }
]
exports.getUser =()=>{
return userList;
}
exports.findUser =(fname)=>{
    const notFound ="not found";
    const userData = userList.find((item)=>item.first_name ===fname);
    if(typeof userData !=="undefined") return userData;
    else return notFound;
    
}
