import { useGetData } from "./Utils"

export const CustomHook = () => {
    let ItemOne=[]
    const { data, loading, error } = useGetData("https://dummyjson.com/products")
    console.log(data)
    if(data){
        DestructureData(data)
    }
    function DestructureData(data){
        if(data){
            data.products.map((item,index)=>{
                if(item.id===1){
                    ItemOne.push(item)
                    console.log(ItemOne)
                }
                
            })
        }else{
            console.log("error")
        }
    }
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;
    return (
        <>
        {ItemOne.map((i,index)=>{
            return (
                <>
                <h1>Item:-{i.title}</h1>
                <h1>Item Price:-{i.price}</h1>
                <h1>Item Description:-{i.description}</h1>
                </>
            )
        })}
        </>
    )
}