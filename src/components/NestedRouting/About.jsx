import { Outlet } from "react-router-dom"

export const AboutComponent=function(){
    return (
        <>
        <h1>I Am About Component</h1>
        <Outlet />
        </>
    )
}