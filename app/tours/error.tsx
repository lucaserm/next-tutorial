'use client';

function Error({ error }: { error: Error }) {
  console.log(error);
  return (
    <div>There was an error...</div>
  );
}

export default Error;