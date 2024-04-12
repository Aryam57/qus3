

$(document).ready(function(){
                        
                        function showInfoMessage(fieldId, message) {
                          $('#' + fieldId + '-info').text(message);
                        }
                      
                        
                        function validateField(fieldElem, infoMessage, validateFn) {
                          $(fieldElem).on('input', function() {
                            var value = $(this).val();
                            if (validateFn(value)) {
                              showInfoMessage($(this).attr('id'), '');
                            } else {
                              showInfoMessage($(this).attr('id'), infoMessage);
                            }
                          });
                        }
                      
                        
                        validateField('#username', 'Username can only contain letters.', validateUsername);
                        validateField('#password', 'Password must be at least 8 characters long and contain at least one special character.', validatePassword);
                        validateField('#email', 'Please enter a valid email address.', validateEmail);
                      
                        
                        $('#myForm input').on('input', function() {
                          var isValid = true;
                          $('#myForm input').each(function() {
                            if ($(this).val() === '') {
                              isValid = false;
                              return false; 
                            }
                          });
                      
                          if (isValid) {
                            $('#submitBtn').prop('disabled', false);
                          } else {
                            $('#submitBtn').prop('disabled', true);
                          }
                        });
                      });
                      