function withAuth (request, result, next) {
    
    if (!request.session.logged_in) {
      result.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  