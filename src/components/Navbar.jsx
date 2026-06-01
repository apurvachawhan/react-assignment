export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 50px"
    }}>
      
      {/* Left */}
      <div style={{ fontWeight: "bold" }}>
        Elementum
      </div>

      {/* Center */}
      <div style={{
        display: "flex",
        gap: "25px"
      }}>
        <span>Home</span>
        <span>Studio</span>
        <span>Services</span>
        <span>Contact</span>
        <span>FAQs</span>
      </div>

      {/* Right */}
      <div style={{ display: "flex", gap: "10px" }}>
        <span>≡</span>
        <span>○</span>
      </div>

    </div>
  )
}