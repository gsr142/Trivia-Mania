const withAuth = (req, result, next) => {
    
    if (!req.session.logged_in) {
      result.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = { withAuth };
  