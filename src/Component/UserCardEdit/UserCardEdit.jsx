import React from 'react';

const UserCardEdit = ({user}) => {
    return (
          <div
            className="user-card flex flex-col items-center flex-1 bg-white drop-shadow-md"
          >
            <div className="user-card-detail flex flex-col w-full h-full">
              <div className="user-card-header flex flex-col justify-center items-center">
                <div className="user-card-img flex justify-center items-center">
                  <img
                    className="w-32 h-32 rounded-full"
                    src={user.img}
                    alt="user"
                  />
                </div>
              </div>
              <div className="user-card-body  flex flex-col justify-center items-center">
                <h3 className="text-secondary text-nowrap">
                  {user.display_name}
                </h3>
                <h4>ID : {user.user}</h4>
              </div>
              <div className="user-card-footer flex flex-col w-full">
                <ul className="font-bold text-secondary p-1">
                  Assigned Branch : {user.branch.length}
                </ul>
                <div className="user-branch-list">
                  {user.branch.map((branch, index) => (
                    <li className="pb-1" key={index}>
                      {branch}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2">
            <button
              className="bg-red-600 flex w-full justify-center items-center text-white p-1 rounded-lg"
              onClick={() => setShowUserCard(false)}
            >
              <box-icon name="x" color="white"></box-icon>
              Cancel
            </button>
            <button
              className="bg-green-600 flex w-full justify-center items-center text-white p-1 rounded-lg"
              onClick={() => Confirm()}
            >
              <box-icon name="check" color="white"></box-icon>
              Save
            </button>
            </div>
          </div>
    )
  }

export default UserCardEdit;
