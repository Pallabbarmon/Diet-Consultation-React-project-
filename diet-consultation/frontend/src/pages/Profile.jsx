export default function Profile(){
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <div className="card">
      <h1 className="text-xl font-bold">Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}
