import React from 'react';
import DataTable from '../../Component/DataTable/DataTable';
import Status from '../../Component/Status/Status';
import { useAuth } from '../../Auth/AuthProvider';

const testActivityLog = [
    [
        "2023-01-01",
        "12:00:01",
        "Log out",
        "member001",
        "member"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Log in",
        "member001",
        "member"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Submit Work",
        "worker001",
        "worker",
        
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Member Management",
        "smember001",
        "super_member"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Report Accepted",
        "admin001",
        "admin"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Report Accepted",
        "admin001",
        "admin"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Work Assigned",
        "admin001",
        "admin"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Report Rejected",
        "admin001",
        "admin"
    ],
    [
        "2023-01-01",
        "12:00:00",
        "Work Approved",
        "admin001",
        "admin"
    ]
]

const ActivityLog = () => {
    const { user } = useAuth();

    return (
        <div className="flex flex-col gap-2 w-full h-fit rounded drop-shadow">
            <div className='w-full rounded drop-shadow'>
            {Status(user.role, user.company)}
            </div>
            <div className="w-full rounded drop-shadow">
            <div className='bg-white p-1 rounded drop-shadow'>
            <DataTable tIcon={"revision"} tName={"Activity Log"} title={["Date", "Time", "Activity", "User", "Role"]} data={testActivityLog} hasButton={false} />
            </div>
            </div>
        </div>
    );
}

export default ActivityLog;