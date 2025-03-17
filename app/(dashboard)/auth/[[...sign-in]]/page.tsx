const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {
  console.log(params);
  return (
    <div>
      <h1 className='text-3xl'>SignInPage: {params['sign-in']}</h1>;
    </div>
  );
};

export default SignInPage;
