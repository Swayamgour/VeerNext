import React from "react";

const roleColors = {
    superadmin: "danger",
    admin: "primary",
    manager: "warning",
    user: "secondary"
};

function UserList({ users }) {
    return (
        <section className="pt-60 pb-60">
            <div className="container">
                <h3 className="mb-4 fw-bold">Users List</h3>

                <div className="table-responsive">
                    <table className="table table-bordered align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Permissions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users?.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="text-center text-muted">
                                        No users found
                                    </td>
                                </tr>
                            )}

                            {users?.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>

                                    <td>{user.name || "-"}</td>

                                    <td>{user.email}</td>

                                    <td>{user.phone || "-"}</td>

                                    <td>
                                        <span
                                            className={`badge bg-${roleColors[user.role] || "dark"}`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>

                                    <td>
                                        {user.permissions && user.permissions.length > 0 ? (
                                            <div className="d-flex flex-wrap gap-1">
                                                {user.permissions.map((perm, i) => (
                                                    <span
                                                        key={i}
                                                        className="badge bg-light text-dark border"
                                                    >
                                                        {perm}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <span className="text-muted">No permissions</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default UserList;
