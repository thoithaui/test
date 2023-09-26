// authService.js
const authService = {
    // Phương thức để lưu token và thông tin tài khoản vào sessionStorage
    setAuth: (token, accountInfo) => {
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('accountInfo', JSON.stringify(accountInfo));
    },
  
    // Phương thức để lấy token từ sessionStorage
    getToken: () => {
      return sessionStorage.getItem('token');
    },
  
    // Phương thức để lấy thông tin tài khoản từ sessionStorage
    getAccountInfo: () => {
      const accountInfo = sessionStorage.getItem('accountInfo');
      return accountInfo ? JSON.parse(accountInfo) : null;
    },
  
    // Phương thức để kiểm tra xem người dùng đã đăng nhập hay chưa
    isAuthenticated: () => {
      return !!sessionStorage.getItem('token');
    },
  
    // Phương thức để đăng xuất người dùng
    logout: () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('accountInfo');
    },
  };
  
  export default authService;
  