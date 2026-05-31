// hello-react/src/components/UserCard.jsx
function UserCard({ name, email, avatar }) {
    return (
        <div style={{ 
            border: "1px solid #34495e", 
            borderRadius: "8px", 
            padding: "15px", 
            margin: "10px", 
            textAlign: "center",
            width: "220px",
            background: "#f4f6f7"
        }}>
            <img src={avatar} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
            <h3 style={{ margin: "10px 0 5px 0", color: "#2c3e50" }}>{name}</h3>
            <p style={{ margin: 0, color: "#7f8c8d", fontSize: "0.9rem" }}>{email}</p>
        </div>
    );
}

export default UserCard;