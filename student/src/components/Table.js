import {students} from '../data/StudentsDb';

export default function Table(){
    return(
    
        <div className="outerDiv">
                <h1>Students Information Portal</h1>
            <div className = "leftDiv">
        <table border="1">
           
            <tr>
                <td>First Name: </td>
                <td>Last Name: </td>
                <td>Course: </td>
                <td>Country: </td>
                <td>Profile</td>
            </tr>
            {
                students.map(students=>
                    <tr>
                <td>{students.firstName} </td>
                <td>{students.lastName} </td>
                <td>{students.course} </td>
                <td>{students.address.country} </td>
                <td><button>View</button></td>
            </tr> 
                )
            }
            
        </table>
        </div>
        </div>
    );
}