import { Button, TextInput } from "flowbite-react";
import { useRef,useState } from "react";
import {useSelector} from "react-redux";

export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user);
    const [imageFile, setImageFile] = useState(null);
    const [imageFileUrl, setImageFileUrl] = useState(null);
    const filePickerRef = useRef();

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }


    };
    console.log(imageFile, imageFileUrl);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
        <h1 className="my-7 text-center font-bold text-4xl">Profile</h1>
        <form className='flex flex-col gap-4'>
         <input type="file" 
         accept="image/*" 
         onChange={handleImageChange} 
         ref={filePickerRef} 
         hidden/>
            <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
             onClick={()=>filePickerRef.current.click()}>

            <img 
            src={imageFileUrl || currentUser.profilePicture} 
            alt="user" 
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"/>

            </div>
            <TextInput type="text" id='username' placeholder="username" defaultValue={currentUser.username} />
            <TextInput type="email" id='email' placeholder="email" defaultValue={currentUser.email} />
            <TextInput type="password" id='password' placeholder="password"  />
            
            <Button type="submit" gradientDuoTone="purpleToBlue" outline>
                Update Your Profile
            </Button>


        </form>
        <div className="flex justify-between mt-5">
 
                <span className="text-red-500 hover:text-red-600 font-medium text-sm transition duration-200 cursor-pointer">
                  Delete Account
                </span>
 
                <span className="text-blue-500 hover:text-blue-600 font-medium text-sm transition duration-200 cursor-pointer">
                  Sign Out
                </span>
        </div>
  

    </div>
  )
}
