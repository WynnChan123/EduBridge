import InputBox from '../components/Input/input';
import CustomButton from '../components/Button/button';
import { useRouter } from 'next/router';

export default function Login() {

  const router = useRouter();
  return (
    <div className="flex flex-row">
      <div className="bg-white w-1/2 h-screen">
        <div className="flex justify-center pt-20 font-bold text-4xl">Sign In To EduBridge</div>
        <div className="flex justify-start pl-20 pt-20">
          <div className="flex flex-col w-full pr-20">
            <div className="flex flex-col space-y-3 w-full">
              <div className="font-bold pt-10 text-lg">USERNAME</div>
              <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full" placeholder="  Enter your username" />
            </div>
            <div className="flex flex-col space-y-3 w-full">
              <div className="font-bold pt-10 text-lg">PASSWORD</div>
              <InputBox className="bg-gray-100 rounded-full border-gray-300 h-10 w-full" placeholder="  Enter your password" />
            </div>
            <div className="flex justify-center pt-20">
              <CustomButton
                color="#2B2F4B"
                title="Sign In"
                onClick={() => router.push(`./student`)}
                className="flex px-8 py-3 text-white text-lg font-bold rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2B2F4B] w-1/2 h-screen">
        <div className="flex justify-center font-bold text-white justify-items-center pt-20 text-4xl">Welcome to login</div>
        <div className="flex justify-center pt-5 text-xl text-white">Don't have an account?</div>
        <div className="flex justify-center pt-20">
          <CustomButton 
            color="white"
            title="Sign Up"
            onClick={()=> router.push(`./Signup`)}
            className="flex px-8 py-3 text-black text-lg font-bold rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
