@RestResource(urlMapping='/SalesforceAPI/*')
global class Salesforce_QualRole_API {
    @HttpPost
    global static SalesforceResponseAPI receiveObject() {
        RestRequest request = RestContext.request;
        RestResponse response = RestContext.response;
        
        String caminho = request.requestURI.substring(request.requestURI.lastIndexOf('/') + 1);
        //System.debug(request.requestbody != null ? request.requestbody.tostring() : '');
        try{
            
            switch on caminho {
                when 'login' {		
                    system.debug(request.requestbody);
                    
                    loginWrapper loginWpp = (loginWrapper)JSON.deserialize(request.requestbody.tostring(), loginWrapper.class);
                    
                    list<Contact> listContato = [SELECT id, name, usuario__c, senha__c FROM Contact WHERE Usuario__c = :loginWpp.usuario AND Senha__c = :loginWpp.senha];
                    
                    if(listContato.isEmpty()){
                        response.statusCode = 400;           
                        return new SalesforceResponseAPI('Usuario ou senha invalidos.', '', null);
                    }
                    
                    response.statusCode = 200;           
                    return new SalesforceResponseAPI('Bem vindo: '+listContato[0].name, '', null);
                }
                when 'criarContato' {
                    contatoWrapper contatoW = (contatoWrapper)JSON.deserialize(request.requestbody.tostring(), contatoWrapper.class);
                    contact contato = new contact();
                    contato.FirstName = contatoW.primeiroNome;                    
                    contato.LastName = contatoW.ultimoNome;                    
                    contato.Phone = contatoW.telefoneCelular;
                    contato.Usuario__c = contatoW.usuario;
                    contato.Senha__c = contatoW.senha;                    
                    contato.Email = contatoW.email;
                    insert contato;
                    response.statusCode = 200;           
                    return new SalesforceResponseAPI('Bom vindo: '+contato.FirstName + ' ' + contato.LastName , '', null);
                }
                when else {
                    response.statusCode = 400;           
                    return new SalesforceResponseAPI('Ta maluco?? Esse caminho não existe seu noia.', '', null);
                }
            }
            
            
        } catch(Exception e) {
            system.debug(e.getMessage()+' '+ e.getLineNumber()+' '+e.getCause());
            response.statusCode = 400;           
            return new SalesforceResponseAPI(e.getMessage(), e.getStackTraceString(), e.getLineNumber());
        } 
    }
    
    global class SalesforceResponseAPI {
        global String Message;
        global String StackTraceString;
        global Integer LineNumber;
        
        public SalesforceResponseAPI(String Message, String StackTraceString, Integer LineNumber) {
            this.Message = Message;
            this.LineNumber = LineNumber;          
            this.StackTraceString = StackTraceString;
        }
    }
    
    global class loginWrapper{
        global string usuario;
        global string senha;
    }
    
    global class contatoWrapper{
        global string primeiroNome;
        global string ultimoNome;        
        global string telefoneCelular;        
        global string email;        
        global string usuario;        
        global string senha;
    }
}