import React, { useMemo } from 'react';
import { useData } from './DataContext';
import UserTable from './UserTable';

const UserView = () => {

    const data = useData();

    const usersPackages = useMemo(() => {
        if(!data){
            return null
        }
        const userList = new Map();
        for (const packageData of data) {
            const existing = userList.get(packageData.recipient.email) || { recipient: packageData.recipient, packages: [] }
            userList.set(packageData.recipient.email, { ...existing, packages: [...existing.packages, packageData] });
        }
        return Array.from(userList)
    }, [data]);
    console.log(usersPackages);

    if(!usersPackages){
        return null
    }
    return(
        <UserTable data = {usersPackages} ></UserTable>
    )

}
export default UserView;