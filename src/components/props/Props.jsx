export const Props=({name,age})=>{
    return(
        <>
        <h1>My Name is,{name} and my age is {age}</h1>
        </>
    )
}

export const EmpDetails=({EmpName,EmpRole,EmpExp})=>{
    return (
        <>
        <h1>Employee Name Is {EmpName}</h1>
        <h2>Role: {EmpRole}</h2>
        <h2>Experience: {EmpExp} years</h2>
        </>
    )
}

export const Props1=({number})=>{
    const doubled=number*2;
    return (
        <>
        <h1>Doubled Number is: {doubled}</h1>
        </>
    )
}


export const Props2=({age,isDeveloper,skills})=>{
    return (
        <>
        <h1>Age: {age}</h1>
        <h2>Is Developer: {isDeveloper ? "Yes" : "No"}</h2>
        {/* <h3>Skills:{skills.join(", ")}</h3> */}
        <h3>Skills:</h3>
        <ul>
            {skills.map((skill,index)=>{
                return <li>{skill}</li>
            })}
        </ul>
        </>
    )
}


export const Props3=({mobile,price,features})=>{
    const Total=price+price*0.1; //10% tax
    return (
        <>
        <h1>Mobile: {mobile}</h1>
        <h2>Price: {price}</h2>
        <h2>Total Price (including 10% tax): {Total}</h2>
        <p>Features
            <ul>
                {features.map((i)=>{
                    return <li>{i}</li>
                })}
            </ul>
        </p>
        </>
    )
}

export const Props4=({mobile,price,features})=>{
    let total=0
    let tax=""
    const is5GSupported=features.includes("5G")?true : false;
    console.log(is5GSupported)
    if(is5GSupported==true){
        tax="10%"
        total=price+price*0.1
    }else{
        tax="5%"
        total=price+price*0.05
    }
    return (
        <>
        <h1>Mobile:- {mobile}</h1>
        <h2>Is 5G Supported Or Not:- {is5GSupported ? "Yes" : "No"}</h2>
        <div>
            <h2>
                Price, <span>with {tax}  Tax:-</span> {total}
            </h2>
        </div>
        <p>Features:-
            <ul>
                {features.map((i)=>{
                    return <li>{i}</li>
                })}
            </ul>
        </p>
        </>
    )
}


export const Props5=({user})=>{
    console.log("user adat",user)
    return (
        <>
        <h1>name:-{user.name}</h1>
        <h2>Age:- {user.age}</h2>
        <h3>Company:- {user.job.company}</h3>
        </>
        
    )
}


export const Props6=({key},{name})=>{
    return (
        <h1>name:-{name}</h1>
    )
}


// App.jsx

//  <>
//     {/* <Props name="Subbu" age={21} />
//     <EmpDetails EmpName="John Doe" EmpRole="Developer" EmpExp={5} /> */}
//     {/* <Props number={2} /> */}
//     {/* <Props age={21} isDeveloper={true} skills={["JavaScript", "React"]} /> */}
//     {/* <Props mobile="iPhone" price={999} features={["5G", "Face ID", "Retina Display"]} />
//     <Props mobile="Samsung Galaxy S21" price={899} features={["5G", "S Pen", "Dynamic AMOLED"]} /> */}
//     {/* <Props mobile="Google Pixel 6" price={799} features={["4G", "Tensor Chip", "Night Sight"]} />
//     <Props mobile="Google Pixel 7" price={899} features={["5G", "Tensor Chip", "Night Sight"]} /> */}
//     {/* {users.map((u)=>{
//       <Props key={u.id} name={u.name}/>
//     })} */}
//     </>

// export const Props=(props)=>{
//     console.log(props)
//     return (
//         <>
//         <h1>id:{props.user.id}</h1>
//         <h1>name:{props.user.name}</h1>
//         <h1>age:{props.user.age}</h1>
//         </>
//     )
// }





// Props Destructing


export const PropsDestructing=({id,name,age})=>{
    return (
        <>
        <div>
            <h1>id:-{id}</h1>
            <h1>name:-{name}</h1>
            <h1>age:-{age}</h1>
        </div>
        </>
    )
}