export default async function Blog({params}){
    const {id} = await params;
    return(
        <>
        <h1>This is the dynamic routing blog page {id}</h1>
        </>
    )
}
