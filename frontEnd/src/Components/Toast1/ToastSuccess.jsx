import React, { useContext, useEffect } from "react";
import { RemoveSuccessToast } from "../../contexts/RemoveSuccessToast";

export default function ToastSuccess({ rmST }) {
  const [mailSent, setMailSent] = useContext(RemoveSuccessToast);
  console.log(mailSent);
  function remove(e) {
    setMailSent(false);
  }
  useEffect(() => {
    if (mailSent) {
      const timerId = setTimeout(() => setMailSent(false), 2000);
      return () => clearTimeout(timerId);
    }
  }, [mailSent]);

  return (
    <div className="toast-success">
      ✅ Sent Mail with OTP 🚀{" "}
      <span className="toast-close" onClick={remove}>
        ❌
      </span>
    </div>
  );
}
