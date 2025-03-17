'use client';
import { createUser } from '@/utils/actions';

function Form() {
  return (
    <form
      action={createUser}
      className={formStyle}
    >
      <h2 className='text-2xl text-yellow-600'>create user</h2>
      <label htmlFor='firstName'>First Name</label>
      <input
        id='firstName'
        className={inputStyle}
        type='text'
        name='firstName'
        defaultValue='John'
      />
      <label htmlFor='lastName'>Last Name</label>
      <input
        id='lastName'
        className={inputStyle}
        type='text'
        name='lastName'
        defaultValue='Doe'
      />
      <button
        className={btnStyle}
        type='submit'
      >
        Submit
      </button>
    </form>
  );
}

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle =
  'border border-slate-400 rounded-md shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

export default Form;
