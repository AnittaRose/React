export default function DisplayComponent({displayData}) {

    console.log("Display Component  Rendering.....")

    return(
        <>
        <h1>Name : {displayData.name}</h1>
        <h1>Email : {displayData.email}</h1>
        <h1>Place : {displayData.place}</h1>
        <h1>Pincode : {displayData.pincode}</h1>

        </>
    )
}