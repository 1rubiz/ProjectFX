import React from 'react';
import { UserProfile } from "@clerk/clerk-react";

export default function Profile() {
  return (
    <div className=''>
          <div>
           <hr/>
           <div className='w-[100%] flex justify-center items-center'>
            <UserProfile path="/settings" routing="path" />
          </div>
          </div>
    </div>
  )
}


 
// const UserProfilePage = () => (
  
// );
 
// export default UserProfilePage;