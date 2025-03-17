function DeleteBtn({ id }: { id: string }) {
  return (
    <form>
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
