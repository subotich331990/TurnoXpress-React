import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { SkeletonTheme } from 'react-loading-skeleton';

const loader = () => {
    return (
        <div className="agenda-body-container">
            <div className="agenda-container1 ">
                <table className="table caption-top agenda-text" >
                    <thead>
                        <tr className="table-primary">
                            <th scope="col" className='caption-top-color '>Especialidad</th>
                            <th scope="col" className='caption-top-color '>Doctor/a</th>
                            <th scope="col" className='caption-top-color '>Fecha de turno</th>
                            <th scope="col" className='caption-top-color '>Estado</th>
                            <th scope="col" className='caption-top-color '>Hospital</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                        <tr>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                            <td><Skeleton /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )
}

export default loader

// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"
// className = "placeholder col-12 placeholder-lg"