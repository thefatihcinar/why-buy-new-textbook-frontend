/*
    this servis is responsible for navigation in the application
    when a component wants to navigate to another component, it should call this service
 */
class NavigationService {
    constructor(history){
        this.history = history; /* get the history object */
        /* it will be needed for navigation back and forth */
    }
    navigateTo(route) {
        /* this method navigates to a specific route */
        if(route){
            this.history.push(route);
            return true;
        }
        return false;
    }
    logout() {
        /* this method navigates the user to the logout page */
        this.history.push('/logout');
    }
    login() {
        /* this method navigates the user to the login page */
        this.history.push('/login');
    }
    register() {
        /* this method navigates the user to the register page */
        this.history.push('/register');
    }
    home() {
        /* this method navigates the user to the home page */
        this.history.push('/');
    }
}

export default NavigationService;
