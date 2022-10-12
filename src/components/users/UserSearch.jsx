import React from 'react'
import {useState,useContext} from 'react';
import GitHubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext'
function UserSearch() {
    const [text,setText]=useState("");
   
    const {users,searchUsers,clearUsers}=useContext(GitHubContext);

    const {setAlert}=useContext(AlertContext);
    const handleChange =(e)=>{
     setText(e.target.value);
     
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text==='')
        {
            setAlert('Please enter something!','error');
        }else{
            searchUsers(text);
            setText('');
        }
}


   const handleClear =(e)=>{
        clearUsers();
   }
  return (
    <div className='pl-6 grid sm:grid-cols-1  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
           <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" className=" w-800 pr-40 bg-gray-200 input input-md text-black "  placeholder='Search' value={text} onChange={handleChange}/>

                    <button type="submit" className=" but md:absolute top-0 right-55 rounded-l-none w-32 btn btn-md sm:static">Go</button>
                </div>
            </div>
           </form>
        </div>
        {
            users.length > 0  &&(
                <div>
            <button onClick={handleClear} className='btn btn-secondary btn-md'>Clear</button>
        </div>
            )
        }
       
    </div>
  )
}

export default UserSearch