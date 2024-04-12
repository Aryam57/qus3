
function validateUsername(username) {
                        return /^[a-zA-Z]+$/.test(username);
                      }
                      
                    
                      function validatePassword(password) {
                        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(password);
                      }
                      
                    
                      function validateEmail(email) {
                        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                      }
                      