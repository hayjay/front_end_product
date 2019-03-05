let userAuth = function userAuth({next, router, to}){
    let auth_user = JSON.parse(localStorage.getItem('auth'));

    if( !(auth_user && auth.token) ){
        //if user is unauthenticated local storage could be empty or so

    }
}