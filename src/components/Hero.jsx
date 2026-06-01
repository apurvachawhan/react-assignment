export default function Hero() {
  return (
    <div style={{ padding: "60px" }}>
      
      {/* Heading */}
      <h1 style={{ fontSize: "42px", lineHeight: "1.2" }}>
        The thinkers and doers are
        <span style={{ color: "orange" }}> changing </span>
        the
        <span style={{ color: "skyblue" }}> status quo </span>
        with
      </h1>

      {/* Subtext */}
      <p style={{ fontSize: "16px", maxWidth: "600px" }}>
        We are a team of strategists, designers, communicators, researchers.
        Together we believe that progress only happens when you refuse to play things safe.
      </p>

      {/* Orange line */}
      <div style={{
        width: "120px",
        height: "4px",
        background: "orange",
        marginTop: "20px"
      }} />

      {/* Logo section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "40px"
      }}>
        
        <div style={circleStyle}>Logo 1</div>
        <div style={circleStyle}>Logo 2</div>
        <div style={circleStyle}>Logo 3</div>
        <div style={circleStyle}>Logo 4</div>

      </div>

    </div>
  )
}

const circleStyle = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px"
}