import Btn from "./Btn";

export default function ForgotLogin(login) {
  return (
    <div className="fixed top-0 left-0 w-screen flex justify-center align-center h-screen bg-slate-200 opacity-50">
      <div className="relative flex flex-col bg-slate-800 justify-center align-center w-1/2 h-1/2">
        <div className="" onClick={() => login.forget(false)}>
          X
        </div>
        <div className="flex justify-center align-center">
          <h2>Forgot Login?</h2>
        </div>
        <div>
          <input type="email" placeholder="Email Address" />
        </div>
      </div>
    </div>
  );
}
