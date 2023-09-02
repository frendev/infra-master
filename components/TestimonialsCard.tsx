import React from "react";

function TestimonialsCard(props: any) {
  const { description, name } = props;

  return (
    <div className="space-y-5">
      <p>{description}</p>
      <p className="text-gray-500">{name} | Placed At Deloitte </p>
    </div>
  );
}

export default TestimonialsCard;
