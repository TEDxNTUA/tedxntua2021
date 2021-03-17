import $ from 'jquery'

var submitButton = document.getElementById('newsletter-submit-btn')
var emailField = document.getElementById('newsletter-input-field')

submitButton.onclick = function(){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/9080/',
        type:'post',
        data:$("#newsletter-form").serializeArray(),
        success: function(){
          alert("SUCCESS! Welcome to our Newsletter")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
    emailField.value = '';
};