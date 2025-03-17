import { fetchUsers } from '@/utils/actions';

async function UsersList() {
  const users = await fetchUsers();

  return (
    <div className='mt-4'>
      {users.length ? (
        <div>
          {users.map((user) => (
            <h4
              key={user.id}
              className='capitalize text-lg text-gray-500'
            >
              <div>
                {user.firstName}, {user.lastName}
              </div>
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
