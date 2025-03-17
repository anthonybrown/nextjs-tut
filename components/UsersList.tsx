import { fetchUsers } from '@/utils/actions';
import DeleteBtn from './DeleteBtn';

async function UsersList() {
  const users = await fetchUsers();

  return (
    <div className='mt-4'>
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4
              key={user.id}
              className='flex justify-between items-center mb-2 capitalize text-lg text-gray-500'
            >
              {user.firstName}, {user.lastName}
              <DeleteBtn id={user.id} />
            </h4>
          ))}
        </div>
      ) : (
        <div>No users found!</div>
      )}
    </div>
  );
}

export default UsersList;
