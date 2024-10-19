import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Chaperone</h1>
      <div style={styles.iconContainer}>
        {/* Profile Icon */}
        <div style={styles.profileContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="Profile Icon"
            style={styles.profileIcon}
          />
          <span style={styles.iconText}>Profile</span>
        </div>

        {/* Cart Icon */}
        <div style={styles.cartContainer}>
          <img
            src="https://cdn-icons-png.freepik.com/512/7835/7835563.png"
            alt="Cart Icon"
            style={styles.cartIcon}
          />
          <span style={styles.iconText}>Cart</span>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px', // Space between profile and cart icons
  },
  profileIcon: {
    width: '40px',
    height: '40px',
  },
  cartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cartIcon: {
    width: '40px',
    height: '40px',
  },
  iconText: {
    marginTop: '5px',
    fontSize: '14px',
    color: 'white',
  },
};

export default Header;
