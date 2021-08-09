let email;
let passwort;

const richtigeEmail = "test@test.com";
const richtigesPass = "123456";

const app = new Vue
(
   {
       el: "#app",
       data:
       {
            schritt: 1,
            titel: "Anmelden",
            inputType: "text",
            input_plhl: "E-Mail-Adresse",
            btn_text: "weiter",
            input: "",
            hinweis:""
       },
       methods:
       {
           weiter_klick: function(event)
           {
                
                if(app.schritt == 1)
                {
                    if(app.input == "")
                    {
                        app.hinweis = "Bitte " + app.input_plhl +" ausgefult";
                        return;
                    } 

                    if(app.input == richtigeEmail)
                    {
                        app.titel= "Passwort";
                        app.inputType="password";
                        app.input_plhl = "Passwort ";
                        app.btn_text = "Anmelden"; 

                        app.schritt++;
                        app.input = "";
                        app.hinweis="";
                    }
                    else
                    {
                        app.hinweis = "Falsche  " + app.input_plhl +" eingegeben";
                    }


                }

                else if(app.schritt == 2)
                {
                    if(app.input == "")
                    {
                        app.hinweis = "Bitte " + app.input_plhl +" ausgefult";
                        return;
                    } 

                    if(app.input == richtigesPass)
                    {
                        alert("SIE HABEN SICH ERFOLGREICH ANGEMELDET!");
                        app.hinweis = "";
                    }
                    else
                    {
                        app.hinweis = "Falsche  " + app.input_plhl +" eingegeben";
                    }

                }


           }
       }
       
   }
    
)
