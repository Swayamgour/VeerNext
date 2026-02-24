import React from 'react'
import { useGetAllUsersQuery } from '../redux/api'
import styles from '../css/AdminDashboard.module.css';
import UserDashboard from '../pages/Profile/UserDashboard';




function AllAdmin() {

    const { data } = useGetAllUsersQuery()
    console.log(data)

    return (
        <div className={styles.registerContainer}>
            {data?.map((e) => {
                return (
                    <>
                    </>
                    // <UserDashboard users={e} />

                )
            })}
        </div>
    )
}

export default AllAdmin