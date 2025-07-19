import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Verify() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("verifying"); // verifying, success, error

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.get(`/api/auth/verify/${token}`);
        setStatus("success");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (err) {
        console.error(err.response.data);
        setStatus("error");
        setTimeout(() => {
          navigate("/");
        }, 5000);
      }
    };
    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-green-50">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8">
          {status === "verifying" && (
            <>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
                Verifying Your Email
              </h1>
              <p className="text-slate-600">
                Please wait while we verify your email address...
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent mb-4">
                Email Verified Successfully!
              </h1>
              <p className="text-slate-600 mb-4">
                Your email has been verified. You will be redirected to the
                login page shortly.
              </p>
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                <p className="text-sm">Redirecting to login in 3 seconds...</p>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent mb-4">
                Verification Failed
              </h1>
              <p className="text-slate-600 mb-4">
                We couldn't verify your email. The verification link may be
                expired or invalid.
              </p>
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                <p className="text-sm">
                  Redirecting to homepage in 5 seconds...
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Verify;
