import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
function MyProvider({children}){
    const[profiledata,setprofiledata]=useState('')
    const [user,setuser] = useState({
        isAuthed:false,
        uid:'',
        userdtl:'',
        role:''
    })
    const sharedvalue={
        isAuthed:user.isAuthed,
        uid:user.uid,
        role:user.role,
        userdtl:user.userdtl,
        profiledata:profiledata
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (userd) => {
            if (userd) {
                const uid = userd.uid;
  
                //setting that user is authed
                setuser(prev=>({
                  ...prev,
                  isAuthed:true,
                  uid:uid,
                  userdtl:userd
                }))

                //fetcching the users data
                async function handleprofiledata(){
                    try{
                        await onSnapshot( doc(db,"users",uid),(doc)=>{
                            const tempquotesdata = doc.data();
                            console.log(tempquotesdata);
                            setprofiledata(tempquotesdata);

                          })
                    }catch(e){
                        console.log('you got an error while fetching the data',e);
                    }
                }
                handleprofiledata();// calling the profiledata function


            }else{
                //removing the user
              setuser(prev=>({
                ...prev,
                isAuthed:false,
                uid:'',
                user:'',
                role:''
              }))
            }
        })
        return ()=>{
            unSubscribe();
        }
    },[]);
    return(
        <MyContext.Provider value={sharedvalue}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;