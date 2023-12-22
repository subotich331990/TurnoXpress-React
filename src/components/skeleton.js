import React from "react"
import ContentLoader from "react-content-loader"

const loader = (props) => (
    <ContentLoader
        speed={2}
        width={1200}
        height={400}
        viewBox="0 0 400 160"
        backgroundColor="#c7c7c7"
        foregroundColor="#CFC6C6"
        {...props}
    >
        <rect x="28" y="2" rx="0" ry="0" width="579" height="185" />
    </ContentLoader>
)

export default loader
// import Skeleton from 'react-loading-skeleton';


// const loader = () => {
//     return (
//         <div className="agenda-body-container">
//             <div className="agenda-container1 ">
//                 <table className="table caption-top agenda-text" >
//                     <thead>
//                         <tr className="table-primary">
//                             <th scope="col" className='caption-top-color '>Especialidad</th>
//                             <th scope="col" className='caption-top-color '>Doctor/a</th>
//                             <th scope="col" className='caption-top-color '>Fecha de turno</th>
//                             <th scope="col" className='caption-top-color '>Estado</th>
//                             <th scope="col" className='caption-top-color '>Hospital</th>
//                         </tr>
//                     </thead>

//                     <tbody>
//                         <tr>
//                             <td><Skeleton count={10} animation="wave" width={56} height={56} /></td>
//                             <td><Skeleton /></td>
//                             <td><Skeleton /></td>
//                             <td><Skeleton /></td>
//                             <td><Skeleton /></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>


//     )
// }

// export default loader

// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"