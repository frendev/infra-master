import React from "react";

function FormError(props: any) {
  const { message } = props;
  return (
    <>
      <div
        className="block bg-orange-100 border-l-4 border-red-500 text-red-700 pl-2 mt-2"
        role="alert"
      >
        <p className="font-bold">{message}</p>
      </div>
    </>
  );
}

export default FormError;
