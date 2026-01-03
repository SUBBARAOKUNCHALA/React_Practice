export const Component3=({isAdmin})=>{
    console.log("component3",isAdmin)
    
    return (
        <>
        {isAdmin? <h1>I Am Component 3 Fully Depend Upon The Component 1 But Prop Getting From Component 2</h1> : <h1>Admin Login False</h1> }
        
        </>
    )
}