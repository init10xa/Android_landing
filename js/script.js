function postContactToGoogle() {
       var fname = $('#fname').val();
       var lnmae = $('#lname').val();
       var Email = $('#Email').val();

           $.ajax({
               url: "https://docs.google.com/spreadsheets/d/1o609FPvDMs7XZGKsyYrgdvhGpT-iN6eig0oUIcxVUOE/edit#gid=1831987588",
               data: { "entry_1306721146": Email,
               "entry_676487481": fname, "entry_1306721146":
               lname},
               type: "POST",
               dataType: "xml",
               statusCode: {
                   0: function () {
                       window.location.replace("ThankYou.html");
                   },
                   200: function () {
                       window.location.replace("ThankYou.html");
                   }
               }
           });
   }
