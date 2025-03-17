import { deleteUser, removeUser } from '@/utils/actions';

function DeleteBtn({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);

  return (
    <form action={removeUserWithId}>
      <input
        type='hidden'
        name='name'
        value='shake n bake'
      />
      <button
        className='bg-pink-300 text-white text-xs rounded p-2'
        type='submit'
      >
        delete
      </button>
    </form>
  );
}

export default DeleteBtn;
