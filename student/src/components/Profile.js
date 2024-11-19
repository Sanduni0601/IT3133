
export default function Profile(props){
    return(
        <>
         <td rowSpan={7}>
                    <img className="profile" src = {require('../assests/img/'+props.stu.profilePic)} alt="profile" />
                </td>
        <tr>
            <td>Name: {props.stu.firstName+" "+props.stu.lastName}</td>
        </tr>
        </>
    )
}