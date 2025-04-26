
function Footer() {
  return(
    <div style={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
      <a href="https://www.epwater.org/">Main Page</a>
      <p>&copy; {new Date().getFullYear()} El Paso Water Dashboard by Stack over Four</p>
    </div>
  );
}

export default Footer