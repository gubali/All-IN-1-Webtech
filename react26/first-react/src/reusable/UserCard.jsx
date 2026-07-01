export default function UserCard({ user }) {
  return (
    <div className="card">
      <img
        src={user.picture.large}
        alt={user.name.first}
        className="profile-img"
      />

      <h2>
        {user.name.title} {user.name.first} {user.name.last}
      </h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <button>View Profile</button>
    </div>
  );
}